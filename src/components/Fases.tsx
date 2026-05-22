import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Fase = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  objective: string;
  activities: string[];
  contributesTo: string[];
  image: string;
  accent: string;
  status: 'done' | 'current' | 'next';
};

// 🟢 Edita aquí para mover el indicador "estamos aquí" cuando avancen.
const CURRENT_PHASE = 1; // 0-indexed: 0,1,2,3,4

const fases: Fase[] = [
  {
    num: '01',
    title: 'Latidos que revelan nuestra esencia',
    subtitle: 'Reconocimiento',
    description:
      'Llegamos sin prisa. Antes de levantar datos, queremos sentir la escuela: su gente, sus ritmos, sus afectos. Es el primer respiro compartido.',
    objective:
      'Construir confianza con la comunidad educativa y reconocer la singularidad de la institución.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80',
    accent: '#E07A5F',
    status: 'next',
    activities: [
      'Selección del instrumento de mapa de riesgos psicosociales.',
      'Adaptación del instrumento al contexto de la institución educativa.',
      'Definición de criterios de aplicación.',
      'Planeación de la recolección de información (tiempos, espacios y participantes).',
    ],
    contributesTo: ['Implementar el mapa', 'Identificar factores de riesgo'],
  },
  {
    num: '02',
    title: 'Rutas que descubren nuestra realidad',
    subtitle: 'Exploración',
    description:
      'Recorremos los espacios y conversaciones que dan forma al día a día. Lo cotidiano, lo invisible, lo que aún no se ha nombrado.',
    objective:
      'Identificar factores y dinámicas psicosociales presentes en el entorno escolar.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    accent: '#C28156',
    status: 'next',
    activities: [
      'Implementación del instrumento seleccionado.',
      'Recolección de información mediante cuestionarios estandarizados o escalas de medición.',
      'Registro sistemático de los datos obtenidos.',
    ],
    contributesTo: ['Identificar factores de riesgo', 'Implementar el mapa'],
  },
  {
    num: '03',
    title: 'Hilos que conectan nuestras historias',
    subtitle: 'Comprensión',
    description:
      'Cada voz es un hilo. Al unirlas comenzamos a ver patrones, relaciones, raíces que no se notaban por separado.',
    objective:
      'Analizar e interpretar la información desde una mirada psicosocial integral.',
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80',
    accent: '#6F8460',
    status: 'next',
    activities: [
      'Organización y revisión de la información recolectada.',
      'Identificación de situaciones recurrentes en la comunidad.',
      'Identificación de factores de riesgo psicosocial.',
      'Clasificación de los riesgos según sus niveles.',
    ],
    contributesTo: ['Identificar factores de riesgo', 'Implementar el mapa'],
  },
  {
    num: '04',
    title: 'Tejiendo el mapa de nuestro mundo escolar',
    subtitle: 'Representación',
    description:
      'Convertimos lo escuchado en un mapa visible: un territorio compartido que la comunidad pueda mirar, discutir y abrazar.',
    objective:
      'Representar gráfica y simbólicamente los riesgos y recursos psicosociales del entorno.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    accent: '#9E5F3A',
    status: 'next',
    activities: [
      'Integración de los hallazgos obtenidos en fases anteriores.',
      'Representación estructurada de los factores identificados.',
      'Revisión y ajuste de la entrega final del mapa.',
    ],
    contributesTo: ['Diseñar el mapa de riesgos'],
  },
  {
    num: '05',
    title: 'Voces que transforman nuestro camino',
    subtitle: 'Acción',
    description:
      'El mapa no es el final, es un comienzo. Devolvemos los hallazgos para que la comunidad imagine y decida los próximos pasos.',
    objective:
      'Socializar los resultados y abrir rutas de intervención sostenibles desde la comunidad.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80',
    accent: '#C9624B',
    status: 'next',
    activities: [
      'Presentación del mapa de riesgo a la institución educativa.',
      'Explicación de los principales hallazgos.',
      'Formulación de recomendaciones para el bienestar institucional.',
      'Espacios de diálogo con estudiantes, docentes y directivos.',
      'Validación del mapa con la comunidad.',
    ],
    contributesTo: ['Proponer estrategias de intervención'],
  },
];

const STATUS_LABEL: Record<Fase['status'], string> = {
  done:    'Etapa',
  current: 'Etapa',
  next:    'Etapa',
};

export default function Fases() {
  const [active, setActive] = useState(CURRENT_PHASE);
  const fase = fases[active];

  return (
    <div className="relative">
      {/* Top: numbered tabs */}
      <div className="grid gap-3 md:grid-cols-5">
        {fases.map((f, i) => {
          const isActive = i === active;
          return (
            <button
              key={f.num}
              onClick={() => setActive(i)}
              className={[
                'group relative rounded-2xl border px-5 py-5 text-left transition-all duration-500',
                isActive
                  ? 'border-transparent bg-ink-900 text-cream-50 shadow-soft'
                  : 'border-cream-200 bg-cream-50 hover:border-clay-400/60 hover:bg-cream-100',
              ].join(' ')}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between">
                <span
                  className={[
                    'font-serif text-2xl transition-colors',
                    isActive ? 'text-cream-50' : 'text-clay-600',
                  ].join(' ')}
                >
                  {f.num}
                </span>
                <div className="flex items-center gap-2">
                  {f.status === 'current' && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta-500"></span>
                    </span>
                  )}
                  {f.status === 'done' && (
                    <svg viewBox="0 0 24 24" className={['h-3.5 w-3.5', isActive ? 'text-cream-50/80' : 'text-sage-500'].join(' ')} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  )}
                  {isActive && (
                    <motion.span layoutId="dot" className="h-2 w-2 rounded-full" style={{ background: f.accent }} />
                  )}
                </div>
              </div>
              <div
                className={[
                  'mt-3 text-[11px] uppercase tracking-[0.2em] transition-colors',
                  isActive ? 'text-cream-100/70' : 'text-clay-600',
                ].join(' ')}
              >
                {f.subtitle}
              </div>
              <div
                className={[
                  'mt-1 text-sm leading-snug transition-colors',
                  isActive ? 'text-cream-50' : 'text-ink-800',
                ].join(' ')}
              >
                {f.title.split(' ').slice(0, 4).join(' ')}…
              </div>
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div className="mt-10 grid gap-8 overflow-hidden rounded-[2rem] border border-cream-200 bg-cream-50 shadow-soft md:grid-cols-12">
        {/* Image */}
        <div className="relative md:col-span-6 min-h-[360px] md:min-h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={fase.image}
              src={fase.image}
              alt={fase.title}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div
            className="absolute inset-0 mix-blend-multiply transition-colors duration-700"
            style={{ background: `linear-gradient(180deg, transparent 40%, ${fase.accent}cc 100%)` }}
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream-50">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] opacity-80">Fase</div>
              <div className="font-serif text-5xl">{fase.num}</div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]"
                style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)' }}
              >
                {fase.subtitle}
              </div>
              <div
                className={[
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]',
                  fase.status === 'current' ? 'bg-terracotta-500 text-cream-50' :
                  fase.status === 'done'    ? 'bg-cream-50/90 text-ink-900'     :
                                              'border border-cream-50/50 text-cream-50',
                ].join(' ')}
              >
                {fase.status === 'current' && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-50"></span>
                  </span>
                )}
                {STATUS_LABEL[fase.status]}
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="relative md:col-span-6 p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={fase.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight text-ink-900">
                {fase.title}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-700">{fase.description}</p>

              <div className="mt-6 rounded-2xl bg-cream-100 p-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-clay-600">Objetivo de la fase</div>
                <p className="mt-2 text-[15px] leading-snug text-ink-900">{fase.objective}</p>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-clay-600">
                  Lo que hacemos en esta fase
                </div>
                <ul className="mt-3 space-y-2.5">
                  {fase.activities.map((a, i) => (
                    <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-800">
                      <span
                        className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: fase.accent }}
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-clay-600">Aporta a</span>
                {fase.contributesTo.map((c, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-cream-200 bg-cream-50 px-3 py-1 text-[11px] text-ink-700"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="btn-ghost disabled:opacity-30"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M11 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {fases.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Ir a fase ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={[
                        'h-1.5 rounded-full transition-all',
                        i === active ? 'w-8 bg-ink-900' : 'w-2 bg-ink-900/20 hover:bg-ink-900/40',
                      ].join(' ')}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActive((a) => Math.min(fases.length - 1, a + 1))}
                  disabled={active === fases.length - 1}
                  className="btn-ghost disabled:opacity-30"
                >
                  Siguiente
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
