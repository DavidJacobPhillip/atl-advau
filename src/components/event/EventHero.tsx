import MediaPlaceholder from '@/components/MediaPlaceholder';
import { event } from '@/data/content';

export default function EventHero({ isPast }: { isPast: boolean }) {
  return (
    <section
      aria-labelledby="event-title"
      className="relative flex min-h-svh w-full flex-col justify-end overflow-hidden bg-ink text-blush"
    >
      <MediaPlaceholder
        fill
        tone="dark"
        type={event.hero.type}
        label={event.hero.label}
        src={event.hero.src}
        poster={event.hero.poster}
        alt={event.hero.alt}
        autoPlay
        className="bg-[#071719]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to top, #0D2326 0%, rgba(13,35,38,0.6) 35%, rgba(13,35,38,0) 75%)',
        }}
      />

      <div className="page-container relative pb-24 pt-40">
        <p className="eyebrow text-blush/80">{event.eyebrow}</p>
        <h1
          id="event-title"
          className="mt-6 font-serif text-[clamp(4rem,11vw,9.5rem)] leading-[1] text-blush"
        >
          {event.title}
        </h1>
        <p className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.2] text-blush/90">
          {event.subtitle}
        </p>
        <p className="mt-10 max-w-[60ch] text-[15px] leading-[1.6] text-blush/85">
          {event.summaryLine}
        </p>
        {isPast ? (
          <p className="mt-12 font-serif text-3xl text-blush">{event.thankYou.title}</p>
        ) : (
          <a href="#tickets" className="btn-primary mt-12">
            {event.registerLabel}
          </a>
        )}
      </div>
    </section>
  );
}
