import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '@/components/gallery/Lightbox';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import Placard from '@/components/Placard';
import Reveal from '@/components/Reveal';
import { galleryIntro, galleryItems, ui, type GalleryCategory } from '@/data/content';
import { classNames } from '@/lib/classNames';

type FilterId = (typeof galleryIntro.filters)[number]['id'];

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

  const closeViewer = useCallback(() => setOpenIndex(null), []);
  const navigateViewer = useCallback((index: number) => setOpenIndex(index), []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
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

        <ul className="mt-24 columns-1 gap-x-10 sm:columns-2 lg:columns-3 lg:gap-x-16">
          {visibleItems.map((item, viewerIndex) => {
            return (
              <li key={item.id} className="mb-20 break-inside-avoid sm:mb-28">
                <Reveal>
                  <figure>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(viewerIndex)}
                      aria-label={`${ui.openItem}: ${item.title}`}
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
                    <Placard title={item.title} lines={[`${item.event}, ${item.year}`, item.credit]} />
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
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
