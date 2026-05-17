import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Tecnica = {
  name: string;
  desc: string;
  img: string;
  tag: string;
  objective: string;
  population: string;
  moments: string[];
  resources: string[];
  time: string[];
  result: string;
  risks: string[];
};

export default function MetodologiaCard({ t, index }: { t: Tecnica; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `met-${index}`;

  return (
    <article className="lift group relative overflow-hidden rounded-[1.8rem] bg-cream-50 shadow-soft">
      <div className="relative h-64 overflow-hidden">
        <img
          src={t.img}
          alt={t.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/15 to-transparent"></div>
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-ink-900 backdrop-blur">
          {t.tag}
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-serif text-2xl leading-tight text-ink-900">{t.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-700/90">{t.desc}</p>

        <div className="mt-5 rounded-2xl bg-cream-100 p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-clay-600">Objetivo</div>
          <p className="mt-1.5 text-[14px] leading-snug text-ink-800">{t.objective}</p>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-terracotta-500 hover:text-terracotta-600 transition-colors"
        >
          {open ? 'Cerrar detalle' : 'Ver cómo lo aplicamos'}
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6 border-t border-cream-200 pt-6">
                <Block label="Población">{t.population}</Block>

                <div>
                  <Label>Momentos</Label>
                  <ol className="mt-3 space-y-2.5">
                    {t.moments.map((m, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-800">
                        <span className="font-serif text-sm text-terracotta-500">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label>Recursos</Label>
                    <ul className="mt-3 space-y-1.5 text-[13.5px] text-ink-700">
                      {t.resources.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-clay-500" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Label>Tiempo estimado</Label>
                    <ul className="mt-3 space-y-1.5 text-[13.5px] text-ink-700">
                      {t.time.map((tt, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-clay-500" />
                          <span>{tt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Block label="Resultado esperado">{t.result}</Block>

                <div>
                  <Label>Riesgos previstos</Label>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {t.risks.map((r, i) => (
                      <li
                        key={i}
                        className="rounded-full border border-clay-400/40 bg-clay-300/15 px-3 py-1 text-[12px] text-ink-700"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.22em] text-clay-600">{children}</div>;
}
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-800">{children}</p>
    </div>
  );
}
