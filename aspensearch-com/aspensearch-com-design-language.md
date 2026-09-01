# Design Language — aspensearch.com

Extracted from the live production build on 2026-09-01 (Next.js + Turbopack,
Tailwind CSS v4, Sanity CMS for content/images).

> Extraction method: the headless-browser pipeline (Playwright/Chromium) is
> blocked by this environment's network egress policy — all headless HTTPS
> connections are reset, including to unrelated hosts. The design system was
> therefore reconstructed directly from the site's shipped stylesheets and
> server-rendered HTML, fetched with `curl`. Because this site defines its
> entire design system as a Tailwind v4 `@theme` token block, the result is
> effectively the source-of-truth token set rather than an inferred one.

## Overview

Aspen Search is a quantitative-finance recruiting firm. The site is a
high-contrast, editorial, near-monochrome design: white/near-black surfaces,
a single mint accent, one grotesque typeface (Suisse Intl) plus its mono
companion, zero border radius except one 4px token, and no shadows at all.
Depth and hierarchy come entirely from **type scale, contrast, and motion**.
It ships a full light/dark theme with an animated view-transition sweep.

## Color

The palette is a **two-token themed system** — everything on the page reads
from `--theme-bg` / `--theme-fg`, which swap under `[data-theme]`:

| Theme | `--theme-bg` | `--theme-fg` |
|---|---|---|
| light (default) | `255 255 255` → `#ffffff` | `35 35 35` → `#232323` |
| dark | `35 35 35` → `#232323` | `255 255 255` → `#ffffff` |

Named brand tokens:

| Token | Value | Role |
|---|---|---|
| `--color-black` | `#232323` | primary ink (a soft black, not pure) |
| `--color-black-deep` | `#000000` | true black, used sparingly |
| `--color-white` | `#ffffff` | primary surface |
| `--color-mint` | `#a1ffcb` | the **only** accent hue — highlights, CTA/hover states |
| `--color-grey` | `#d9d9d9` | dividers, muted surfaces, image placeholders |

Transparency is done with `color-mix(in oklab, … N%, transparent)` — e.g.
`text-theme-fg/65` for secondary text at 65% opacity, `bg-theme-bg/5` for
focus-visible surfaces. Selection is inverted (`::selection` swaps fg/bg).

## Typography

**Families** (self-hosted woff2, `font-display: swap`, with metric-matched
Arial fallbacks via `ascent-override`/`size-adjust` to eliminate CLS):

- `--font-sans`: **Suisse Intl** → `ui-sans-serif, system-ui, …`
  Weights shipped: 400 Regular, 400 Italic, **450 Book** (the workhorse), 450 Book Italic, 600 SemiBold, 600 SemiBold Italic.
- `--font-mono`: **Suisse Intl Mono** (400) → `ui-monospace, monospace`. Used for captions, labels, metadata.

**The type scale is fully fluid.** The base unit `--spacing` is `.0625rem`
(1px), so `calc(var(--spacing) * 24)` = 24px. Sizes above body scale with a
shared `--fluid-slope` that interpolates between a **375px** and **1600px**
viewport (`--layout-min-w` / `--layout-max-w`).

| Token | Size (min → max) | Weight | Line-height | Tracking |
|---|---|---|---|---|
| `text-caption-10` | 12px | 400 | 1.1 | -4% |
| `text-caption-20` | 14px | 400 | 1 | -4% |
| `text-body-10` | 16px | 450 | 1.3 | -4% |
| `text-body-20` | 24px | 450 | 1.1 | -2% |
| `text-body-30` | 24 → 32px | 450 | 1.1 | -2% |
| `text-headline-10` | 24 → 40px | 450 | 1.1 | -4% |
| `text-headline-20` | 32 → 48px | 450 | 1 | -4% |
| `text-headline-30` | 40 → 56px | 450 | 1 | -4% |
| `text-headline-40` | 40 → 100px | 450 | 1 | -4% |
| `text-headline-50` | 52 → 200px | 450 | **0.8** | -4% |
| `text-digit-10` | 80px | 450 | 1 | -4% |
| `text-digit-20` | 80 → 120px | 450 | 1 | -4% |
| `text-digit-30` | 80 → 140px | 450 | 1 | -4% |

Signature choices: **everything is weight 450** (Book) — headlines are never
bolded, they're sized. Negative tracking (-4%) throughout, and sub-1
line-height on display sizes (0.8 at `headline-50`) for tightly-packed
editorial headlines. A dedicated `digit-*` ramp exists for big stat numbers.

## Spacing & Layout

- Base spacing unit: `--spacing: .0625rem` (1px) — so every Tailwind spacing utility is a literal pixel multiple (`gap-8` = 8px, `p-24` = 24px). Unusually fine-grained.
- Layout range: `--layout-min-w: 375`, `--layout-max-w: 1600`.
- `--site-header-height: 60px`.
- Breakpoints: `40rem (640)`, `48rem (768)`, `64rem (1024)`, `80rem (1280)`, `96rem (1536)` — Tailwind defaults.

## Shape & Elevation

- **Radius**: only `border-radius: 0` and `--radius-4` (4px). The design is essentially square-cornered.
- **Shadows**: none. No box-shadow is authored anywhere beyond Tailwind's ring/inset plumbing. Separation is by hairline borders (`border: 0 solid` reset + explicit 1px) and by contrast.
- **Scrollbar**: custom 6px scrollbar (`.custom-scrollbar`) with inverted track/thumb (track = fg, thumb = bg) and square corners — a deliberate design detail rather than a browser default.

## Easing tokens

| Token | Curve | Character |
|---|---|---|
| `--ease-in` | `cubic-bezier(.55, 0, 1, .45)` | accelerate out of view |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` | expo-out; the primary reveal curve |
| `--ease-in-out` | `cubic-bezier(.87, 0, .13, 1)` | strong ease-in-out, used for theme sweep and as the **default** transition timing |
| (one-off) | `cubic-bezier(.34, 1.56, .64, 1)` | back-out overshoot, used for a springy hover |

Default transition duration: `.15s` with `--ease-in-out`.

## Accessibility

- Light/dark are both true high-contrast pairs (`#232323` on `#ffffff` ≈ 15.9:1) — comfortably AAA for body text. Secondary text at 65% opacity still lands around 9:1, which passes AA/AAA.
- Mint `#a1ffcb` is a light tint — fine as a background behind dark ink, but it must **not** be used as text on white (contrast ≈ 1.4:1). Its use on this site is as a highlight/fill, which is correct.
- Motion is fully gated: `prefers-reduced-motion: reduce` disables animations (`animation: none !important`), collapses transitions to `1ms`, and there are dedicated `motion-reduce:*` variants for hover states so hover feedback survives without movement.
- Decorative duplicated marquee content is `aria-hidden="true"`.

See `aspensearch-com-motion-graphics.md` for the full motion system.
