import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';
import { event } from '@/data/content';

export default function EventDetails() {
  const { details } = event;

  return (
    <section
      id="details"
      aria-labelledby="details-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
    >
      <div className="page-container grid grid-cols-12 gap-x-6">
        <Reveal className="col-span-12 lg:col-span-4">
          <p className="eyebrow text-deep/80">{details.eyebrow}</p>
          <h2
            id="details-title"
            className="mt-6 font-serif text-[clamp(3rem,6vw,5rem)] leading-[1.05]"
          >
            {details.title}
          </h2>
        </Reveal>

        <Reveal className="col-span-12 mt-16 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <dl>
            {details.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 border-t border-deep/15 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <dt className="placard">{item.label}</dt>
                <dd className="font-serif text-2xl text-deep">{item.value}</dd>
              </div>
            ))}
            <div className="border-t border-deep/15" />
          </dl>

          <div className="mt-16">
            <MediaPlaceholder
              label={details.map.label}
              ratio={details.map.ratio}
              alt={details.map.alt}
              className="w-full"
            />
          </div>
          <p className="mt-8 max-w-[60ch] text-[15px] leading-[1.6] text-deep/85">
            {details.parking}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
