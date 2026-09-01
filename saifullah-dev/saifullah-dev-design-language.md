# Design Language — saifullah.dev

Extracted manually from the live HTML/CSS (Next.js production build) on 2026-09-01.

> Note: the automated headless-browser extraction pipeline (Playwright/Chromium)
> could not run in this sandbox — outbound TLS connections from headless
> Chromium are reset by the network egress policy here (confirmed against
> multiple unrelated hosts, not specific to this site). `curl` works fine, so
> this design language was reconstructed directly from the site's compiled
> Tailwind/CSS-module stylesheets and HTML.

## Overview

A dark, high-production "sci-fi HUD / mission control" personal portfolio
(built with Next.js + Tailwind + CSS Modules, likely WebGL/Three.js given the
preloader with a GPU performance switcher and percentage counter). Pure
black-and-white palette, monospace UI chrome layered over large serif/display
headlines, terminal-style micro-copy (`hud-bracket`, `tech-readout`,
`nav-menu`, `dossier`, `breadcrumb`, `settings`).

## Color Palette

Colors are defined as CSS custom properties (RGB triplets, consumed via
`rgb(var(--x) / alpha)` so every color is used at multiple opacities):

| Token | Value | Hex (approx) | Usage |
|---|---|---|---|
| `--color-light` (implicit / default) | `255 255 255` | `#ffffff` | body text color, on-dark UI text |
| `--color-accent` | `253 255 255` | `#fdffff` | near-white accent (stat values, highlighted text) |
| `--color-outline` | `29 29 29` | `#1d1d1d` | primary hairline borders (`/.3`–`/.4` opacity) |
| `--color-outline-2` | `45 45 45` | `#2d2d2d` | secondary borders (buttons, chips, swatches) |
| `--color-fade` | `21 21 21` | `#151515` | muted/faded surfaces |
| page background (`html`) | `#000000` | `#000000` | base canvas — true black |

Everything else is black/white derived at low opacity (`rgb(0 0 0/.2)`,
`rgb(255 255 255/.05–.2)`) to build glassy panels and hover states — there is
no hue in the palette at all; it's strictly monochrome.

## Typography

**Font families**
- **Display / headings** — `denominary` (custom webfont), weights 300–700, falls back to `system-ui, sans-serif`. Used for hero titles, section titles (`page-title`, `hero_heroTitleScanning`, `project_nextTitle`).
- **UI / body chrome** — `csGenio` (custom webfont), weight 400 (+ italic), falls back to `monospace`. Used everywhere for labels, buttons, breadcrumbs, nav — gives the "terminal readout" feel.
- **Tech/HUD readouts** — system monospace stack: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`. Used for `hud-bracket`, `tech-readout-*`, `nav-menu-list-index`, scroll/percent values.
- **Tailwind preflight default** (mostly unused visually): `ui-sans-serif, system-ui, sans-serif, ...`.

**Scale observed**
- Display: `8rem (128px)`, `6rem (96px)`, `4.5rem (72px)`, `3.75rem (60px)`, `3rem (48px)` — huge hero/section headlines.
- Body/UI: `1.25rem`, `1.125rem`, `1rem`, `.9rem`, `.875rem (14px)`, `.75rem (12px)`.
- Micro/HUD labels: `12px`, `11px`, `10px`, `9px`, `8px` — small caps-style telemetry labels.

**Weights**: 300 (light, display), 400, 500, 600, 700 (bold, headlines/emphasis).

**Letter-spacing**: wide tracking is a signature — `.1em`, `.2em`, `.3em` on labels/eyebrows, plus tighter `-.025em`/`-.05em` on large display type.

## Spacing & Radius

- Spacing follows standard Tailwind rem scale (0.25rem increments): `.25rem`, `.5rem`, `.75rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`, `4rem` seen repeatedly for padding/gaps.
- Border radius: small and functional — `.125rem (2px)` tech chips, `.375rem (6px)` buttons/panels, `.5rem (8px)` cards/nav, `9999px` (full/pill) for round buttons and badges.

## Shadows & Effects

- Ambient glow: `0 0 10px rgba(255,255,255,.55)` — used sparingly for accent/active states.
- Soft elevation: `0 4px 30px rgba(0,0,0,.1)` — glass-panel style blur shadow.
- Deep modal shadow: `0 25px 50px -12px rgba(0,0,0,.5)` (Tailwind `shadow-2xl`).
- Standard Tailwind ring/shadow utility stack present (`--tw-ring-shadow`, `--tw-shadow`) but mostly reset to none — the aesthetic relies on borders/opacity, not drop shadows.

## Motion

- Micro-interactions: `.15s` and `.3s` (hover/focus states) dominate.
- Section/element reveals: `.5s`, `.7s`, `1s`.
- Signature easing curve: `cubic-bezier(.16, 1, .3, 1)` (expo-out) used for hero/CTA reveals, often with staggered delays (e.g. `all .6s cubic-bezier(.16,1,.3,1) .4s`).
- Marquee-style continuous animation used for project/tech ticker rows (`hero_heroMarqueeWrap`, `project_projectMarquee`).
- Respects reduced motion (`transition-duration:.01ms!important` guard present).

## Components / Patterns identified (via CSS Module class names)

- `hero_*` — full-bleed hero with scanning title animation, right-side HUD stat rail, mobile stat row, marquee wrap.
- `preloader_*` — elaborate boot/loading screen: progress bar, percentage readout, GPU performance switcher, "fly-in" button, music toggle.
- `nav-menu-*` / `header-*` — fixed brand mark (top-left) + fixed bottom control cluster, monospace nav index list.
- `settings-*` — overlay settings panel (pointer-events gated), monospace section labels.
- `project_*` — case-study detail page: breadcrumb, dossier fact chips/labels, color-swatch row, live/project link buttons, "next project" CTA with tag pill.
- `CustomVideoPlayer_*` — custom video player with capsule play/pause label.
- `error_*` — error page with CTA button and title, same csGenio/monospace treatment.

## Accessibility notes

- Pure black/white contrast is inherently very high (good for text contrast), but a lot of UI chrome sits at low opacity (`/.05`–`/.3`) against black, which likely fails WCAG contrast for those micro-labels — typical trade-off in HUD-style portfolio sites; worth spot-checking with a contrast tool if reused elsewhere.
- Reduced-motion guard is present, which is good practice given the heavy animation use.

## Reuse recommendations

```css
:root {
  --color-bg: 0 0 0;         /* #000000 */
  --color-light: 255 255 255;
  --color-accent: 253 255 255;
  --color-outline: 29 29 29;
  --color-outline-2: 45 45 45;
  --color-fade: 21 21 21;

  --font-display: "denominary", system-ui, sans-serif;
  --font-ui: "csGenio", monospace;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  --radius-sm: .125rem;
  --radius-md: .375rem;
  --radius-lg: .5rem;
  --radius-full: 9999px;

  --ease-reveal: cubic-bezier(.16, 1, .3, 1);
}
```
