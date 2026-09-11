# Design system

Single source: `src/styles/global.css` `@theme` block. Tailwind v4 reads it; every colour, font and radius class in the site comes from there.

| Token | Value | Use |
|---|---|---|
| `paper` | `#fbf7f0` | page ground |
| `paper-2` | `#f3ece0` | footer, image placeholders |
| `ink` | `#1b1a17` | text, dark card |
| `ink-2` | `#5a544a` | secondary text |
| `saffron` | `#f26b1d` | primary action, sky, active nav |
| `saffron-deep` | `#b8430f` | text-size saffron (contrast on paper) |
| `green` | `#1e7a4c` | tricolour rule only |
| `gold` | `#d9a441` | timeline seals, quote rule |
| `font-display` | Martel 700/800 | headings, names, years |
| `font-body` | Mukta 400/500/600 | everything else |

Layout: mobile first, 16px gutters, `max-w-6xl` page, `max-w-3xl` reading column. Radius: `rounded-2xl` cards, `rounded-3xl` feature blocks, `rounded-full` pills and seals.

Motion: one load choreography on Home (`.rise`, `.bloom`), CSS only, off under `prefers-reduced-motion`.

Direction and references: `docs/design-work/PERS-121/brief.md`.
