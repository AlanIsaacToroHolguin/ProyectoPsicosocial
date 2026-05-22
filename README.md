# Latidos de la escuela

Landing page de una **iniciativa profesional de diagnóstico psicosocial** para comunidades educativas.
Identifica factores de riesgo y protección mediante técnicas participativas (cartografía social,
mural de situaciones, talleres pedagógicos) y entrega un mapa accionable que habilita intervenciones
posteriores.

## Stack

- **Astro 4** — render rápido, HTML estático
- **TailwindCSS** — sistema de diseño editorial cálido
- **React + Framer Motion** — sólo donde aporta valor (hero, timeline de fases, acordeones de metodologías)

## Flujo del pitch (orden de secciones)

1. **Hero** — apertura de impacto con la cifra del problema
2. **Equipo** — integrantes + banda de alcance / aplicabilidad / población
3. **Problemática** — factores no identificados que afectan a la comunidad
4. **Solución** — diagnóstico psicosocial (por qué + cómo)
5. **Metodología** — técnicas participativas (cartografía, mural, taller)
6. **Impacto** — beneficios y transformación
7. **Propuesta de valor** — cierre con CTA de alianza

## Secciones ocultas (disponibles para reincorporar)

Estos componentes existen en `src/components/` pero NO se renderizan actualmente.
Se conservan por si desean volver a incluirse en el futuro. Para activarlos basta con
importarlos en `src/pages/index.astro` y agregar la etiqueta en el orden deseado.

- **`Observando.astro`** — sección "Qué diagnosticamos": ocho dimensiones psicosociales
  (gestión emocional, convivencia, mundo digital, resolución de conflictos, SPA,
  bienestar estudiantil, familia y entorno, voz docente).
  Ubicación sugerida: entre Objetivos y Metodología.

- **`Fases.astro` + `Fases.tsx`** — sección "Proceso · 5 fases": timeline interactivo
  con Reconocimiento, Exploración, Comprensión, Representación y Acción.
  Ubicación sugerida: entre Metodología e Impacto (o después de Solución como
  detalle del cómo).

- **`Contexto.astro`** — sección "Por qué la escuela importa": importancia del entorno
  educativo en el desarrollo humano.
  Ubicación sugerida: entre Problemática y Solución.

- **`Objetivos.astro`** — objetivo general + específicos del diagnóstico.
  Ubicación sugerida: después de Solución.

- **Card "Qué hacemos"** dentro de `About.astro` — primer bloque eliminado; su contenido
  se reubicó en el párrafo lateral de Equipo.

- **Bloque "Nuestra postura"** dentro de `About.astro` — postura metodológica
  ("no imponemos diagnósticos, los construimos con la comunidad") + imagen y cita.
  Estaba después de los tres bloques numerados.

- **`Bitacora.astro`** — diario de campo. Útil si la propuesta se convierte en un caso
  vivo de una intervención concreta.

- **Precio en `Cierre.astro`** — el monto explícito ($36.500.000 COP) fue retirado de
  la UI. La tarjeta ahora describe qué habilita la inversión sin mostrar la cifra.

- **Bloque "Articulación estratégica"** dentro de `Equipo.astro` — listaba aliados
  (psicología institucional, sector salud, orientación escolar, docentes vinculados).
  Fue retirado de la UI para una vista más limpia; el código vivía justo antes de la
  banda Alcance / Aplicabilidad / Población.

## Comandos

```bash
npm install
npm run dev      # localhost:4321
npm run build
npm run preview
```

## Mantenimiento

- **Actualizar equipo**: edita el array `equipo` en `src/components/Equipo.astro`.
- **Ajustar inversión / propuesta de valor**: `src/components/Cierre.astro`.
- **Editar técnicas**: array `techniques` en `src/components/Metodologias.astro`.
- **Cambiar imágenes**: las locales viven en `public/` (`mural.png`, `taller.png`).
