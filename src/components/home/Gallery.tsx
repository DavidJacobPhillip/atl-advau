import { useCallback, useMemo, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '@/components/gallery/Lightbox';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import Placard from '@/components/Placard';
import Reveal from '@/components/Reveal';
import { galleryIntro, galleryItems, ui, type GalleryCategory, type GalleryItem } from '@/data/content';
import { classNames } from '@/lib/classNames';

type FilterId = (typeof galleryIntro.filters)[number]['id'];

const TWO_COLUMNS = '(min-width: 640px)';
const THREE_COLUMNS = '(min-width: 1024px)';

function subscribeToColumnCount(onChange: () => void) {
  const queries = [TWO_COLUMNS, THREE_COLUMNS].map((query) => window.matchMedia(query));
  queries.forEach((query) => query.addEventListener('change', onChange));
  return () => queries.forEach((query) => query.removeEventListener('change', onChange));
}

function getColumnCount() {
  if (window.matchMedia(THREE_COLUMNS).matches) return 3;
  return window.matchMedia(TWO_COLUMNS).matches ? 2 : 1;
}

export default function Gallery() {
  const [filter, setFilter] = useState<FilterId>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () =>
      filter === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === (filter as GalleryCategory)),
    [filter]
  );

  // Dealt out one by one so the order reads left to right, then top to bottom.
  const columnCount = useSyncExternalStore(subscribeToColumnCount, getColumnCount);
  const columns = useMemo(() => {
    const dealt = Array.from({ length: columnCount }, () => [] as { item: GalleryItem; viewerIndex: number }[]);
    visibleItems.forEach((item, viewerIndex) => {
      dealt[viewerIndex % columnCount].push({ item, viewerIndex });
    });
    return dealt;
  }, [visibleItems, columnCount]);

  const closeViewer = useCallback(() => setOpenIndex(null), []);
  const navigateViewer = useCallback((index: number) => setOpenIndex(index), []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-20 border-t border-deep/15 pb-20 pt-40"
    >
      <div className="page-container">
        <Reveal className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-deep/80">{galleryIntro.eyebrow}</p>
            <h2
              id="gallery-title"
              className="mt-6 font-serif text-[clamp(3.5rem,7vw,6rem)] leading-[1]"
            >
              {galleryIntro.title}
            </h2>
          </div>
          <div className="col-span-12 flex items-end lg:col-span-5 lg:col-start-8">
            <div role="group" aria-label={ui.filterLabel} className="flex flex-wrap gap-x-8 gap-y-4">
              {galleryIntro.filters.map((option) => {
                const active = filter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(option.id)}
                    className={classNames(
                      'relative pb-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-lagoon',
                      active ? 'text-deep' : 'text-deep/60 hover:text-deep'
                    )}
                  >
                    {option.label}
                    {active && (
                      <motion.span
                        layoutId="gallery-filter-underline"
                        className="absolute inset-x-0 -bottom-px h-px bg-lagoon"
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-24 flex items-start gap-x-10 lg:gap-x-16">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="min-w-0 flex-1">
              {column.map(({ item, viewerIndex }) => (
                <li key={item.id} className="mb-20 last:mb-0 sm:mb-28 sm:last:mb-0">
                  <Reveal delay={columnIndex * 0.06}>
                    <figure>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(viewerIndex)}
                        aria-label={`${ui.openItem}: ${item.title}, ${item.date}`}
                        className="group block w-full rounded-md text-left focus-visible:outline-lagoon"
                      >
                        <div className="transition-opacity duration-700 group-hover:opacity-90">
                          <MediaPlaceholder
                            label={item.label}
                            ratio={item.ratio}
                            type={item.type}
                            src={item.src}
                            poster={item.poster}
                            alt={item.alt}
                            playInView={item.type === 'video'}
                            className="w-full"
                          />
                        </div>
                      </button>
                      <Placard
                        title={item.title}
                        lines={[item.date]}
                        link={{ href: item.instagramUrl, label: ui.instagramPost }}
                      />
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <Lightbox
        items={visibleItems}
        index={openIndex}
        onClose={closeViewer}
        onNavigate={navigateViewer}
      />
    </section>
  );
}
