import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';
import { event } from '@/data/content';

export default function EventRehearsal() {
  const { rehearsal } = event;

  return (
    <section
      id="rehearsal"
      aria-labelledby="rehearsal-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
    >
      <div className="page-container">
        <Reveal className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="rehearsal-title" className="eyebrow text-deep/80">
              {rehearsal.eyebrow}
            </h2>
          </div>
        </Reveal>

        <ul className="mt-20 columns-1 gap-x-10 sm:columns-2 lg:columns-3 lg:gap-x-16">
          {rehearsal.items.map((item) => (
            <li key={item.id} className="mb-20 break-inside-avoid sm:mb-28">
              <Reveal>
                <MediaPlaceholder
                  label={item.label}
                  ratio={item.ratio}
                  type={item.type}
                  src={item.src}
                  alt={item.alt}
                  className="w-full"
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="placard">{rehearsal.credit}</p>
        </Reveal>
      </div>
    </section>
  );
}
