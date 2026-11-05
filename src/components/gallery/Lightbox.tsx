import { useEffect, useRef, type TouchEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import Placard from '@/components/Placard';
import { ui, type GalleryItem } from '@/data/content';

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_THRESHOLD_PX = 50;
const FOCUSABLE = 'button, [href], video[controls], [tabindex]:not([tabindex="-1"])';

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const isOpen = index !== null;
  const item = index !== null ? items[index] : undefined;
  const count = items.length;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % count);
      } else if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + count) % count);
      } else if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, count, onClose, onNavigate]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null || index === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    onNavigate(delta < 0 ? (index + 1) % count : (index - 1 + count) % count);
  };

  const [ratioW, ratioH] = item ? item.ratio.split('/').map((part) => part.trim()) : ['1', '1'];

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          key="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={ui.viewerLabel}
          className="fixed inset-0 z-[70] flex flex-col bg-ink text-blush"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="page-container flex h-20 shrink-0 items-center justify-between">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] tabular-nums text-blush/80">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={ui.close}
              className="flex h-11 w-11 items-center justify-center text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-[7vw] pb-4">
            <div
              key={item.id}
              className="relative"
              style={{
                width: `min(86vw, calc(64svh * ${ratioW} / ${ratioH}))`,
                aspectRatio: item.ratio,
              }}
            >
              <MediaPlaceholder
                fill
                tone="dark"
                type={item.type}
                label={item.label}
                src={item.src}
                poster={item.poster}
                alt={item.alt}
                controls={item.type === 'video'}
                muted={false}
                autoPlay={item.type === 'video'}
              />
            </div>
          </div>

          <div className="page-container flex shrink-0 items-end justify-between gap-8 pb-10">
            <figure className="max-w-[46ch]">
              <Placard
                tone="dark"
                title={item.title}
                lines={[`${item.event}, ${item.year}`, item.credit]}
              />
            </figure>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate((index - 1 + count) % count)}
                aria-label={ui.previous}
                className="flex h-12 w-12 items-center justify-center text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                <ChevronLeft aria-hidden="true" className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((index + 1) % count)}
                aria-label={ui.next}
                className="flex h-12 w-12 items-center justify-center text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                <ChevronRight aria-hidden="true" className="h-7 w-7" />
              </button>
            </div>
          </div>
          <p className="sr-only">{ui.swipeHint}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
