import MediaPlaceholder from '@/components/MediaPlaceholder';
import Placard from '@/components/Placard';
import Reveal from '@/components/Reveal';
import { about } from '@/data/content';

const exhibitLayouts = [
  'lg:col-span-6 lg:col-start-1',
  'lg:col-span-5 lg:col-start-8 lg:mt-48',
  'lg:col-span-4 lg:col-start-3 lg:mt-32',
];

export default function About() {
  const [before, after] = about.statement.split(about.accentWord);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 pb-40 pt-40"
    >
      <div className="page-container">
        <Reveal className="grid grid-cols-12 gap-x-6">
          <h2
            id="about-title"
            className="col-span-12 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[1] lg:col-span-10"
          >
            {before}
            <em className="italic">{about.accentWord}</em>
            {after}
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-12 gap-x-6">
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-8">
            <p className="max-w-[60ch] text-[17px] leading-[1.6]">{about.intro}</p>
          </Reveal>
        </div>

        <div className="mt-40 grid grid-cols-1 gap-x-6 gap-y-32 lg:grid-cols-12 lg:gap-y-40">
          {about.exhibits.map((exhibit, index) => (
            <Reveal key={exhibit.id} className={exhibitLayouts[index]}>
              <figure className="w-full">
                <MediaPlaceholder
                  label={exhibit.media.label}
                  ratio={exhibit.media.ratio}
                  type={exhibit.media.type}
                  src={exhibit.media.src}
                  poster={exhibit.media.poster}
                  alt={exhibit.media.alt}
                  playInView={exhibit.media.type === 'video'}
                  className="w-full"
                />
                <Placard title={exhibit.title} lines={[exhibit.caption]} />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
