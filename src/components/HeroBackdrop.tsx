import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function HeroBackdrop({ src }: { src: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y     = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1.18]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          src={src}
          alt="Grupo de niños y niñas trabajando juntos en un escritorio del aula"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-dawn"></div>
      {/* Reforzar contraste sobre el lado del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/45 to-ink-900/10"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900/70 to-transparent"></div>
    </div>
  );
}
