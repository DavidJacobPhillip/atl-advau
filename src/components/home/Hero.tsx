import { motion, useReducedMotion } from 'framer-motion';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { hero } from '@/data/content';

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
        <h1
          id="hero-title"
          className="font-serif text-display text-blush"
        >
          {hero.line}
        </h1>
        <p className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.2] text-blush">
          {hero.subline}
        </p>
      </motion.div>
    </section>
  );
}
