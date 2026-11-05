import { motion, useReducedMotion } from 'framer-motion';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { hero, site } from '@/data/content';

export default function Hero() {
  const reduceMotion = useReducedMotion();

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

      <motion.div
        className="page-container absolute inset-x-0 bottom-20 sm:bottom-24"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="eyebrow text-blush/80">{site.name.toUpperCase()}</p>
        <h1
          id="hero-title"
          className="mt-6 font-serif text-display text-blush"
        >
          {hero.line}
        </h1>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow text-blush/70">{hero.scrollCue}</span>
        <span className="relative h-12 w-px overflow-hidden bg-blush/25" aria-hidden="true">
          {!reduceMotion && (
            <span className="absolute inset-x-0 top-0 h-1/2 bg-blush animate-scrollCue" />
          )}
        </span>
      </div>
    </section>
  );
}
