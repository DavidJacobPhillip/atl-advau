import MediaPlaceholder from '@/components/MediaPlaceholder';
import Placard from '@/components/Placard';
import Reveal from '@/components/Reveal';
import Silhouette from '@/components/home/Silhouette';
import { about } from '@/data/content';
import { classNames } from '@/lib/classNames';

const exhibitLayouts = [
  { media: 'lg:col-span-4 lg:col-start-2', text: 'lg:col-span-4 lg:col-start-7' },
  { media: 'lg:col-span-7 lg:col-start-6', text: 'lg:col-span-4 lg:col-start-1' },
  { media: 'lg:col-span-6 lg:col-start-1', text: 'lg:col-span-4 lg:col-start-8' },
];

function withInstagramLinks(text: string) {
  return text.split(/(@[\w.]*\w)/).map((part, index) =>
    part.startsWith('@') ? (
      <a
        key={index}
        href={`https://www.instagram.com/${part.slice(1)}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-lagoon underline-offset-4 transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

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
            <div className="max-w-[60ch]">
              <Silhouette index={0} className="mx-auto mb-10" />
              <p className="text-[17px] leading-[1.6]">{about.intro}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 space-y-32 lg:space-y-40">
          {about.exhibits.map((exhibit, index) => (
            <div
              key={exhibit.id}
              className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12 lg:items-center"
            >
              <Reveal className={classNames('lg:row-start-1', exhibitLayouts[index].media)}>
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
              <Reveal delay={0.08} className={classNames('lg:row-start-1', exhibitLayouts[index].text)}>
                <div className="max-w-[60ch]">
                  <Silhouette index={index + 1} className="mx-auto mb-10" />
                  <p className="text-[17px] leading-[1.6]">{withInstagramLinks(exhibit.description)}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
