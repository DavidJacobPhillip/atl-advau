import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
