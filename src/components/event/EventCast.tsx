import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';
import { event } from '@/data/content';

export default function EventCast() {
  const { cast } = event;

  return (
    <section
      id="cast"
      aria-labelledby="cast-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
    >
      <div className="page-container">
        <Reveal className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow text-deep/80">{cast.eyebrow}</p>
            <h2
              id="cast-title"
              className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]"
            >
              {cast.title}
            </h2>
          </div>
        </Reveal>

        <ul className="mt-20 grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3">
          {cast.members.map((member, index) => (
            <li key={member.id} className={index % 2 === 1 ? 'md:mt-24' : undefined}>
              <Reveal>
                <MediaPlaceholder
                  label={`PORTRAIT - ${member.name}`}
                  ratio={cast.portraitRatio}
                  alt={`Portrait of ${member.name}`}
                  className="w-full"
                />
                <p className="mt-6 font-serif text-2xl leading-[1.2] text-deep">{member.name}</p>
                <p className="placard mt-2">{member.role}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
