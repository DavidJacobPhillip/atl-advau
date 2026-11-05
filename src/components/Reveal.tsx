import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Play on page load instead of waiting to scroll into view. */
  immediate?: boolean;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(32px)' };
  const shown = reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' };
  const trigger = immediate
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, amount: 0.15 } };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...trigger}
      transition={
        reduceMotion
          ? { duration: 0.3, ease: 'easeOut' }
          : { duration: 0.7, ease: EASE_OUT, delay }
      }
    >
      {children}
    </motion.div>
  );
}
