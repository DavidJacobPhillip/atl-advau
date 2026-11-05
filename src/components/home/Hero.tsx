import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';
import { hero } from '@/data/content';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative h-svh min-h-[560px] w-full overflow-hidden bg-ink text-blush"
    >
      <MediaPlaceholder
        fill
        tone="dark"
        type={hero.video.type}
        label={hero.video.label}
        src={hero.video.src}
        poster={hero.video.poster}
        alt={hero.video.alt}
        autoPlay
        className="bg-[#071719]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, #0D2326 0%, rgba(13,35,38,0.6) 30%, rgba(13,35,38,0) 65%)',
        }}
      />

      <div className="page-container absolute inset-x-0 bottom-20 [container-type:inline-size] sm:bottom-24">
        <Reveal immediate delay={0.2}>
          <h1 id="hero-title" className="whitespace-nowrap font-serif text-[min(8.4cqw,7rem)] leading-none text-blush">
            {hero.line}
          </h1>
        </Reveal>
        <Reveal immediate delay={0.3}>
          <p className="mt-3 font-serif text-[clamp(1rem,3vw,2.5rem)] italic sm:mt-6 leading-[1.2] text-blush">
            {hero.subline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
