import Reveal from '@/components/Reveal';
import { event } from '@/data/content';

export default function EventStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
    >
      <div className="page-container grid grid-cols-12 gap-x-6">
        <Reveal className="col-span-12 lg:col-span-3">
          <p className="eyebrow text-deep/80">{event.story.eyebrow}</p>
        </Reveal>
        <Reveal className="col-span-12 mt-10 lg:col-span-8 lg:col-start-5 lg:mt-0">
          <h2
            id="story-title"
            className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]"
          >
            {event.story.statement}
          </h2>
          <p className="mt-12 max-w-[60ch] text-[17px] leading-[1.6]">{event.story.synopsis}</p>
        </Reveal>
      </div>
    </section>
  );
}
