import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ease = [0.22, 0.61, 0.36, 1] as const;

function useCountUp(target: number, durationMs = 1400, startWhen = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!startWhen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, startWhen]);
  return val;
}

export default function HeroContent() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { v: useCountUp(8,   1400, ready), label: 'Semestre · Psicología', suffix: '°' },
    { v: useCountUp(5,   1600, ready), label: 'Fases del recorrido',   suffix: '' },
    { v: useCountUp(1,   1800, ready), label: 'Comunidad educativa',   suffix: '+' },
    { v: useCountUp(100, 2200, ready), label: 'Voces reales',          suffix: '%' },
  ];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative container-edit flex min-h-[100svh] flex-col justify-end pb-28 pt-32 sm:pt-36 md:pb-32 md:pt-40"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
        className="max-w-3xl"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#fases"
            className="group inline-flex items-center gap-2.5 rounded-full border border-cream-50/25 bg-cream-50/10 py-1.5 pl-3 pr-2 text-[11px] tracking-[0.06em] text-cream-50 backdrop-blur-sm transition-all hover:bg-cream-50/15 hover:border-cream-50/40"
            aria-label="Ver la fase actual del proyecto"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta-400"></span>
            </span>
            <span className="uppercase tracking-[0.16em] text-cream-100/85">Estamos en</span>
            <span className="font-medium text-cream-50">Fase 02 · Exploración</span>
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cream-50/15 transition-colors group-hover:bg-terracotta-400/40">
              <svg className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </a>
          <span className="hidden sm:inline-flex eyebrow !text-clay-300">
            Proyecto universitario · Sabaneta · Colombia
          </span>
        </motion.div>

        <h1 className="h-display mt-6 text-[clamp(2.3rem,6.4vw,5.6rem)] leading-[1.04] text-cream-50">
          <motion.span
            className="block overflow-hidden"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {['Escuchar', 'la', 'escuela'].map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  show:   { y: 0,      opacity: 1, transition: { duration: 1.1, ease } },
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>

          <motion.em
            className="not-italic text-terracotta-400 font-normal inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0, filter: 'blur(8px)' },
              show:   { y: 0,      opacity: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease, delay: 0.15 } },
            }}
          >
            también es cuidar
          </motion.em>
          <br />
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              show:   { y: 0,      opacity: 1, transition: { duration: 1.1, ease, delay: 0.25 } },
            }}
          >
            la infancia.
          </motion.span>
        </h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease, delay: 0.45 } } }}
          className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-cream-100/85 font-light"
        >
          Somos un equipo de estudiantes de psicología construyendo, junto a la
          I.E. Presbítero Antonio Baena Salazar, un proyecto sobre los factores psicosociales
          que habitan su comunidad educativa. Este es nuestro proceso.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease, delay: 0.6 } } }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <motion.a
            href="#proyecto"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="btn-primary bg-cream-50 !text-ink-900 hover:!bg-terracotta-500 hover:!text-cream-50"
          >
            Conocer el proceso
            <motion.svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </motion.svg>
          </motion.a>

          <motion.a
            href="#equipo"
            whileHover={{ x: 4 }}
            className="btn-ghost !text-cream-100 hover:!text-terracotta-400"
          >
            Conocer al equipo
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.9 }}
        className="mt-14 sm:mt-20 grid grid-cols-2 gap-5 sm:gap-6 border-t border-cream-50/15 pt-6 sm:pt-8 md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div key={i}>
            <div className="font-serif text-3xl text-cream-50 tabular-nums">
              {s.v}
              <span className="text-terracotta-400">{s.suffix}</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cream-100/60">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
