import { useEffect, useRef, useState, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Dot {
  x: number;
  y: number;
}

type Curve = [Dot, Dot, Dot, Dot];

const DOT_SPACING = 22;
const FLICKERING_DOTS = 5;
const EDGE_MARGIN = 14;
const OBSTACLE_PADDING = 12;
const CURVE_SAMPLES = 400;
const FOOT_CLEARANCE = 5;
// How far each curve reaches sideways, as a share of the section's width.
const WIDEST_SWING = 0.7;
const SWING_STEP = 0.05;
// How much of a curve's height its ends use, which keeps them nearly level
// where they meet a foot.
const CURVE_EASE = 0.12;
// The path has reached this far down the viewport as you scroll.
const DRAW_LINE = 0.65;

// offsetTop/offsetLeft ignore transforms, so reveal animations don't skew this.
function positionWithin(element: HTMLElement, root: HTMLElement) {
  let x = 0;
  let y = 0;
  let current: HTMLElement | null = element;
  while (current && current !== root) {
    x += current.offsetLeft;
    y += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

function footOf(silhouette: HTMLElement, root: HTMLElement): Dot {
  const { x, y } = positionWithin(silhouette, root);
  return {
    x: x + silhouette.offsetWidth * Number(silhouette.dataset.footX),
    y: y + silhouette.offsetHeight * Number(silhouette.dataset.footY) + FOOT_CLEARANCE,
  };
}

function bezier(t: number, a: number, b: number, c: number, d: number) {
  const u = 1 - t;
  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
}

// The widest curve between two feet that still stays on the page.
function widestControls(
  from: Dot,
  to: Dot,
  leaving: number,
  arriving: number,
  width: number
): [number, number] {
  for (let swing = WIDEST_SWING; swing > 0; swing -= SWING_STEP) {
    const first = from.x + leaving * swing * width;
    const second = to.x - arriving * swing * width;
    const fits = Array.from({ length: 41 }, (_, step) =>
      bezier(step / 40, from.x, first, second, to.x)
    ).every((x) => x >= EDGE_MARGIN && x <= width - EDGE_MARGIN);
    if (fits) return [first, second];
  }
  return [from.x, to.x];
}

// A continuous wave through each foot: it heads left from the first dancer,
// then each curve leaves in the direction the last one arrived.
function buildCurves(root: HTMLElement) {
  const silhouettes = Array.from(root.querySelectorAll<HTMLElement>('[data-silhouette]'));
  const feet = silhouettes.map((silhouette) => footOf(silhouette, root));
  const width = root.clientWidth;
  let leaving = -1;

  return feet.slice(0, -1).map((from, index) => {
    const to = feet[index + 1];
    const arriving = index % 2 === 0 ? -1 : 1;
    const ease = (to.y - from.y) * CURVE_EASE;
    const [first, second] = widestControls(from, to, leaving, arriving, width);
    leaving = arriving;
    return [from, { x: first, y: from.y + ease }, { x: second, y: to.y - ease }, to] as Curve;
  });
}

function obstaclesWithin(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>('h2, p, figure, [data-silhouette]')).map(
    (element) => {
      // No padding around silhouettes, so the path can reach their feet.
      const padding = element.hasAttribute('data-silhouette') ? 0 : OBSTACLE_PADDING;
      const { x, y } = positionWithin(element, root);
      return {
        left: x - padding,
        right: x + element.offsetWidth + padding,
        top: y - padding,
        bottom: y + element.offsetHeight + padding,
      };
    }
  );
}

// Evenly spaced dots along a curve, with one exactly on each end.
function dotsAlong([a, b, c, d]: Curve) {
  const samples = Array.from({ length: CURVE_SAMPLES + 1 }, (_, step) => {
    const t = step / CURVE_SAMPLES;
    return { x: bezier(t, a.x, b.x, c.x, d.x), y: bezier(t, a.y, b.y, c.y, d.y) };
  });
  const distances = [0];
  samples.slice(1).forEach((sample, index) => {
    const previous = samples[index];
    distances.push(distances[index] + Math.hypot(sample.x - previous.x, sample.y - previous.y));
  });
  const length = distances[CURVE_SAMPLES];
  const steps = Math.max(1, Math.round(length / DOT_SPACING));

  let sampleIndex = 0;
  return Array.from({ length: steps + 1 }, (_, step) => {
    const target = (length * step) / steps;
    while (sampleIndex < CURVE_SAMPLES && distances[sampleIndex] < target) sampleIndex += 1;
    return samples[sampleIndex];
  });
}

export default function FootstepPath({ containerRef }: { containerRef: RefObject<HTMLElement> }) {
  const reduceMotion = useReducedMotion();
  const dotsRef = useRef<SVGGElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const obstacles = obstaclesWithin(container);
      const points = buildCurves(container).flatMap((curve, index) =>
        // Each curve starts on the foot where the last one ended.
        dotsAlong(curve).slice(index === 0 ? 0 : 1)
      );
      setDots(
        points.filter(
          ({ x, y }) =>
            !obstacles.some(
              (box) => x >= box.left && x <= box.right && y >= box.top && y <= box.bottom
            )
        )
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    void document.fonts.ready.then(measure);
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    const circles = Array.from(dotsRef.current?.children ?? []);
    if (!container || circles.length === 0) return;

    if (reduceMotion) {
      circles.forEach((circle) => {
        circle.setAttribute('data-drawn', '');
        circle.removeAttribute('data-flicker');
      });
      return;
    }

    let head = -1;
    let frame = 0;

    const paint = (from: number, to: number) => {
      for (let index = Math.max(from, 0); index <= Math.min(to, circles.length - 1); index += 1) {
        circles[index].toggleAttribute('data-drawn', index <= head);
        circles[index].toggleAttribute(
          'data-flicker',
          index <= head && index > head - FLICKERING_DOTS
        );
      }
    };

    const update = () => {
      frame = 0;
      const line = window.innerHeight * DRAW_LINE - container.getBoundingClientRect().top;
      let next = head;
      while (next + 1 < dots.length && dots[next + 1].y <= line) next += 1;
      while (next >= 0 && dots[next].y > line) next -= 1;
      if (next === head) return;
      const previous = head;
      head = next;
      paint(Math.min(previous, next) - FLICKERING_DOTS, Math.max(previous, next) + FLICKERING_DOTS);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    paint(0, circles.length - 1);
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [containerRef, dots, reduceMotion]);

  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <g ref={dotsRef}>
        {dots.map((dot, index) => (
          <circle
            key={index}
            className="footstep"
            cx={dot.x}
            cy={dot.y}
            r={2.5}
            style={{ animationDelay: `${(index % FLICKERING_DOTS) * -0.27}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
