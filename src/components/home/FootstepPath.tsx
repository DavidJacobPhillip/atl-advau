import { useEffect, useRef, useState, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Dot {
  x: number;
  y: number;
}

const DOT_SPACING = 22;
const FLICKERING_DOTS = 5;
const CURVE_SWING = 0.3;
const STACKED_RATIO = 0.2;
const STACKED_BOW = 0.45;
const SILHOUETTE_CLEARANCE = 16;
const EDGE_MARGIN = 12;
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

function buildPath(root: HTMLElement) {
  const silhouettes = Array.from(root.querySelectorAll<HTMLElement>('[data-silhouette]'));
  const width = root.clientWidth;
  const swing = width * CURVE_SWING;
  const clampX = (x: number) => Math.min(width - EDGE_MARGIN, Math.max(EDGE_MARGIN, x));

  return silhouettes.slice(0, -1).reduce((path, silhouette, index) => {
    const start = positionWithin(silhouette, root);
    const end = positionWithin(silhouettes[index + 1], root);
    const startX = start.x + silhouette.offsetWidth / 2;
    const startY = start.y + silhouette.offsetHeight + SILHOUETTE_CLEARANCE;
    const endX = end.x + silhouettes[index + 1].offsetWidth / 2;
    const endY = end.y - SILHOUETTE_CLEARANCE;
    const third = (endY - startY) / 3;
    const direction = index % 2 === 0 ? 1 : -1;
    // Stacked silhouettes bow out to one side; offset ones swing in an S.
    const stacked = Math.abs(endX - startX) < width * STACKED_RATIO;
    const firstX = clampX(startX + (stacked ? width * STACKED_BOW : swing) * direction);
    const secondX = stacked ? firstX : clampX(endX - swing * direction);

    return `${path}${index === 0 ? 'M' : 'L'} ${startX} ${startY} C ${firstX} ${
      startY + third
    }, ${secondX} ${endY - third}, ${endX} ${endY} `;
  }, '');
}

export default function FootstepPath({ containerRef }: { containerRef: RefObject<HTMLElement> }) {
  const reduceMotion = useReducedMotion();
  const guideRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<SVGGElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const guide = guideRef.current;
    if (!container || !guide) return;

    const measure = () => {
      guide.setAttribute('d', buildPath(container));
      const length = guide.getTotalLength();
      const count = Math.floor(length / DOT_SPACING);
      setDots(
        Array.from({ length: count + 1 }, (_, index) => {
          const { x, y } = guide.getPointAtLength(index * DOT_SPACING);
          return { x, y };
        })
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
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
      <path ref={guideRef} fill="none" />
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
