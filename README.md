# Latidos de la escuela

Landing page del **proyecto de práctica académica** de estudiantes de octavo semestre de Psicología en la **I.E. Presbítero Antonio Baena Salazar** (Sabaneta, Colombia, 2026).

El proyecto realiza una intervención psicosocial cuyo producto final es un mapa de riesgos psicosociales de la comunidad educativa.

## Stack

- **Astro 4** — render rápido, HTML estático
- **TailwindCSS** — sistema de diseño editorial cálido
- **React + Framer Motion** — sólo donde aporta valor (hero, timeline de fases, acordeones de metodologías)

## Estructura

```
src/
├── pages/index.astro
├── layouts/Layout.astro
├── styles/global.css
└── components/
    ├── Nav.astro                # Navegación adaptativa light/dark
    ├── Hero.astro
    ├── HeroBackdrop.tsx         # Imagen con parallax
    ├── HeroContent.tsx          # Texto animado + badge fase actual
    ├── About.astro              # Qué / Por qué / Cómo
    ├── Objetivos.astro          # Objetivo general + 3 específicos
    ├── Equipo.astro             # Equipo psicosocial + aliados
    ├── Observando.astro         # 8 dimensiones observadas
    ├── Fases.astro + .tsx       # Timeline interactivo de 5 fases
    ├── Metodologias.astro       # 3 técnicas participativas
    ├── MetodologiaCard.tsx      # Card con acordeón de detalle
    ├── Bitacora.astro           # Diario de campo
    ├── Impacto.astro            # Impacto esperado
    ├── Cierre.astro             # Carta abierta del equipo
    └── Footer.astro
```

## Comandos

```bash
npm install
npm run dev      # localhost:4321
npm run build
npm run preview
```

## Mantenimiento

- **Cambiar fase actual del proyecto**: edita `CURRENT_PHASE` en [`Fases.tsx`](src/components/Fases.tsx) (0-indexed) y el `status` de cada fase (`done` / `current` / `next`).
- **Agregar entrada al diario**: añade un objeto al array `entries` en [`Bitacora.astro`](src/components/Bitacora.astro). Marca con `actual: true` la más reciente.
- **Cambiar imágenes**: las imágenes locales viven en `public/` (`mural.png`, `taller.png`). Se referencian como `/mural.png`, `/taller.png`.
- **Actualizar equipo**: edita el array `equipo` en [`Equipo.astro`](src/components/Equipo.astro).
