# Don't Board Me — Design System

Consolidated from the `designlang@12.21.0` extraction of <https://dontboardme.com/> (captured 2026-08-21).
This file is the single source of truth for the folder; the individual `dontboardme-com-*` outputs are the raw
generator artifacts behind it.

**Character:** playful candy-pastel pet-care brand. Blush-pink canvas, a loud signal red doing all the CTA work,
a deep editorial blue as counterweight, and a warm brown/yellow secondary set for illustration. Oversized
condensed display caps, pill geometry, soft pink-tinted shadows, long scroll-linked easing.

**Voice:** friendly, `you`-only pronoun posture, Title Case / ALL CAPS headings of balanced length.
CTA verbs are **"Try it"** (12x) and **"Book now"** (9x). Tagline: *"A tired dog is a happy dog!"*

---

## Read this before using any number

The capture ran at a **1280px viewport** while the site designs against **`--viewport: 1440`**. Every computed
px value in the raw outputs is therefore multiplied by `1280 / 1440 = 0.8889`.

**All sizes in this document have been corrected by x1.125** to recover design-viewport values. The correction
is verified, not assumed — it turns the raw numbers into clean integers almost everywhere (`12.444 → 14`,
`14.222 → 16`, `85.333 → 96`, `57 → 64`, `28 → 32`). Raw values are shown alongside where useful.

Other known bad data in the raw files, all excluded from this document:

- **Breakpoints** serialize as `[object Object]` in every output — no usable values were captured.
- **`Times New Roman` (983 uses)** is a headless fallback artifact, not a brand face. The webfonts didn't load.
- **Semantic `success`/`warning`/`error`/`info`** tokens are `[object Object]` — the site defines none.
- **Framework detection is empty** (`library: unknown`, confidence 0, Tailwind-likeness 0.022). The generated
  `tailwind.config.js` / `shadcn-theme.css` are faithful *token mappings*, not evidence of the stack.
- **Section roles** labelled the entire 11,143px `<main>` as "faq" — the section map is noise.
- Component CSS blocks report `padding: 0px` and `border-radius: 0px` across the board; the extractor sampled
  wrapper elements rather than the styled children. Use the shape scale below, not those blocks.

---

## 1. Color

The site ships its own complete named palette as CSS custom properties. That set — not the auto-derived
primary/secondary roles — is the real system.

### Brand ramps

| Ramp | Token | Hex |
|---|---|---|
| **Red** (signal / CTA) | `--c-red` | `#E33529` |
| | `--c-red2` | `#E93225` |
| | `--c-dark-red` | `#A02B22` |
| **Blue** (counterweight) | `--c-blue` | `#2B6786` |
| | `--c-dark-blue` | `#124E6D` |
| | `--c-d-light-blue` | `#5B93B0` |
| | `--c-light-blue` | `#AFD8FB` |
| **Pink** (canvas) | `--c-light-pink` | `#F4CED3` |
| | `--c-pink` | `#F3C3CB` |
| | `--c-dark-pink` | `#F0B5BE` |
| | `--c-light-pink2` | `#F6D2D8` |
| | `--c-light-pink3` | `#F6D1D8` |
| **Brown** (warm / illustrative) | `--c-brown` | `#854720` |
| | `--c-light-brown` | `#925026` |
| | `--c-dark-brown` | `#693413` |
| **Yellow** (highlight) | `--c-yellow` | `#FFF500` |
| | `--c-dark-yellow` | `#DCC060` |
| | `--c-ultra-dark-yellow` | `#CFAE3D` |
| | `--c-dark-yellow-04` | `#DCC06040` (25% tint) |
| **Purple** (soft sections) | `--c-light-purple` | `#E6DFE7` |
| | `--c-light-purple2` | `#EAD9EC` |
| | `--c-light-purple3` | `#EACDEF` |
| | `--c-light-purple4` | `#D8B3DF` |

### Neutrals

| Token | Hex | Note |
|---|---|---|
| `--c-white` | `#F3F3F3` | not pure white — the working "white" |
| `--c-dark-white` | `#F6F6ED` | warm cream |
| `--c-dark-white2` | `#F3F0EF` | footer ground |
| `--c-gray` | `#F4F4EA` | |
| `--c-gray1` | `#F3F3E9` | nav ground |
| `--c-gray2` | `#EDE2E2` | |
| — | `#000000` | all body copy; there is no soft-black |

### Applied roles

| Role | Hex | Evidence |
|---|---|---|
| Foreground | `#000000` | pure black, everywhere |
| Page canvas | `#F4CED3` | light pink |
| Primary | `#2B6786` | blue, 42 uses |
| Secondary / CTA | `#E33529` | red, **507 uses — the dominant accent** |
| Accent | `#F0B5BE` | dark pink |
| Nav ground | `#F3F3E9` | |
| Footer ground | `#F3F0EF`, text `#E33529` | |
| Modal ground | `#F4CED3` | |
| Link (default) | `#0000EE` | UA default — unstyled links exist; **fix in any reuse** |

**16 unique colors** total. **No gradients** anywhere on the page. Background treatment is flat
(`plain` — no noise, dot grid, line grid, or mesh). Overall saturation 0.367.

### Dark mode

`available: true` but **there is no real dark theme** — every role resolves to the same value in both
schemes. Treat this as a light-only system; design a dark palette from scratch if one is needed.

---

## 2. Typography

### Families

| Role | Family | Notes |
|---|---|---|
| Display | **Bayon** (181 uses) | condensed all-caps Khmer/Latin sans, Google Fonts |
| Body | **Neue Montreal** (108 uses) | geometric grotesk |
| Site vars | `HelveticaNeueCyr-Roman` / `-Light` | declared as `--font` / `--font-light` |
| — | Arial (78 uses) | fallback only |

The extractor's "Don't use 4 font families" warning is a false positive — two of the four are fallbacks.
The real pairing is **Bayon display over Neue Montreal body**.

### Scale (corrected x1.125)

| Corrected | Raw | Weight | Line height | Tracking | Used on |
|---|---|---|---|---|---|
| **293px** | 260.44 | 400 | 0.78 | -0.02em | display h2 (hero marquee) |
| **236px** | 209.78 | 400 | 0.78 | -0.02em | h3 |
| **186px** | 165.33 | 400 | 0.78 | -0.02em | h2, oversized p/span |
| **126px** | 112 | 400 | 0.80 | -0.02em | p |
| **96px** | 85.33 | 400 | 0.78 | -0.02em | h4 |
| **76px** | 67.56 | 400 | 0.78 | -0.05em | h1 |
| **72px** | 64 | 400 | 0.78 | -0.027em | p |
| **70px** | 62.22 | 400 | 0.78 | -0.02em | a, span |
| **42px** | 37.33 | 400 | 1.0 | -0.02em | p |
| **32px** | 28.44 | **700** | normal | normal | h1 (the only 700 on the page) |
| **30px** | 26.67 | 400 | 1.0 | -0.02em | p |
| **16px** | 14.22 | 400 | normal | normal | links, footer |
| **15px** | 13.33 | 400 | normal | normal | buttons |
| **14px** | 12.44 | 500 | 1.0 | normal | **body default** |
| **12px** | 11 | 500 | 1.0 | normal | fine print |

### Rules

- **Body:** `14px / 1.0 / 500`. The 1.0 line-height on body copy is unusually tight — verify against the
  live site before porting; it may be a per-element override the extractor generalised.
- **Display line-height is 0.78** and **tracking is -0.02em** — consistent across every size above 42px.
  That tight-and-negative pairing is the signature of the headline style.
- **Weights in use:** `400` (1241x), `500` (108x), `700` (1x). Effectively a two-weight system;
  the single 700 is one h1.
- Headings render in ALL CAPS in practice even where the markup is Title Case.

---

## 3. Spacing

Corrected x1.125, which resolves to a near-clean 4/8pt grid:

| Corrected | Raw |
|---|---|
| 1px | 1 |
| **20px** | 18 |
| **24px** | 21 |
| **27px** | 24 |
| **32px** | 28 |
| **40px** | 36 |
| **44px** | 39 |
| **48px** | 43 |
| **56px** | 50 |
| **64px** | 57 |
| 68 / 72 / 86 / 94 / 100 / 106 / 114 / 120px | 60 / 64 / 76 / 84 / 89 / 94 / 101 / 107 |

**Layout primitives:** 1 grid container, **76 flex containers** — this is a flexbox layout, not a grid system.

---

## 4. Shape & elevation

### Radii (corrected x1.125)

| Token | Corrected | Raw | Use |
|---|---|---|---|
| `sm` | 3px | 3 | hairline detail |
| `md` | 10px | 9 | small cards / inputs |
| `pill` | 56px | 50 | buttons |
| `pill-lg` | 150px | 133 | large pill panels |
| `circle` | 745px | 662 | full circles / blob shapes |

Average radius 171px, max 662px, `hasPill: true`. The system is overwhelmingly round — the material
classifier called it `material-you` (0.45 confidence) on "pill shapes + soft shadows".

### Shadow

**Exactly one shadow on the entire page**, and it is pink-tinted and offset to the *left*:

```css
box-shadow: rgba(221, 198, 202, 0.4) -3px 4px 14px 0px;  /* corrected: -3px 4.5px 16px */
```

No inset shadows, no backdrop blur. Depth comes from color blocking, not elevation.

### Z-index layers

```
--z-header:    500
--z-modal:     510
--z-preloader: 1000
```

8 layers detected, 1 flagged ordering issue.

---

## 5. Motion

The site exposes its transition system directly as variables — this is the most trustworthy part of the extraction.

```css
--transition:      0.5s ease-in-out;
--transition-fast: 0.3 ease-in-out;   /* NOTE: missing unit in source — invalid CSS, likely a live bug */
--transition-slow: 0.8s ease-in-out;
--my-ease: cubic-bezier(0.24, 1, 0.36, 1);   /* the house curve */
```

### Easing

| Token | Value | Frequency |
|---|---|---|
| **house ease-out** | `cubic-bezier(0.24, 1, 0.36, 1)` | 18x |
| ease-in-out | `ease` | 39x |
| linear | `linear` | 2x |

`cubic-bezier(0.24, 1, 0.36, 1)` is a strong, fast-settling ease-out — it is the brand's motion signature and
should be the default for anything that reveals, opens, or moves.

### Durations

`100ms` · `150ms` · `200ms` · `300ms` · `400ms` · `450ms` · `500ms` · `600ms` · `1s` · `1.4s`

Long durations (1s, 1.4s) pair with the house ease-out for scroll-linked reveals. Feel is classified
**smooth**, `scrollLinked: true`.

### Representative transitions (as authored)

```css
transition: 1s   cubic-bezier(0.24, 1, 0.36, 1);
transition: opacity 0.4s cubic-bezier(0.24, 1, 0.36, 1);
transition: 0.45s cubic-bezier(0.24, 1, 0.36, 1) 0.2s;   /* staggered reveal */
transition: 1.4s cubic-bezier(0.24, 1, 0.36, 1);
transition: 0.5s ease-in-out;
transition: 0.2s ease-out;
```

Keyframes: only `swiper-preloader-spin` (a Swiper library default) — all bespoke motion is transition-driven.
Ready-made presets for Framer Motion, GSAP, Motion One, WAAPI, and Tailwind are in `dontboardme-com-motion.*`;
`dontboardme-com-motion.html` is an interactive playground for the curves.

---

## 6. Components

**Detected:** buttons · cards · links · navigation · footer · modals · dropdowns · badges · progress bars

| Component | Instances | Notes |
|---|---|---|
| Card | 97 (anatomy: 67, medium) | ground `#F3F3F3`, carries the single pink shadow |
| Button | 23–35 | 15px / 400, black text; pill radius (56px) |
| Link | 47 | 16px / 400 — **`#0000EE` unstyled default in places** |
| Navigation | 32 | ground `#F3F3E9`, black text, `position: relative` |
| Footer | 23 | ground `#F3F0EF`, **red `#E33529` text** |
| Dropdown | 27 | |
| Badge | 6 | |
| Progress bar | 3 | |
| Modal | 1 | ground `#F4CED3` (pink canvas) |

### Icons

54 icons, **no recognised icon library** (custom set). Average stroke width **1.11px**, with a distinct
2px group for UI arrows (`.icon-arrow`, `.circle-active`). **69% rounded caps** — soft, hand-drawn
character consistent with the brand. Named custom SVGs include `.header-dog`, `.dont-board`,
`.background-plash`, `.background-plash__p2`.

### Forms

**Zero forms captured** (`forms.count: 0`) — no input types, no validation states, no skeletons, spinners,
empty states, or error states. Booking presumably lives behind a route the crawl didn't reach. **There is no
form design language here; you would be inventing it.**

---

## 7. Stack & meta

- **1 script tag, no CMS / analytics / experimentation detected** by stack intel — but the OG image resolves to
  `https://api.dontboardme.com/uploads/Opengraph_d02563699c.png`, whose `/uploads/` + content-hash pattern is
  the **Strapi** signature. A custom front end against a headless Strapi API is the likely stack.
- **Swiper** carousel is present (`--swiper-theme-color: #007aff`, `--swiper-navigation-size: 44px`).
  That blue is a library default and is **not** part of the brand palette — override it.
- Viewport meta sets `maximum-scale=1` (blocks pinch-zoom — an accessibility issue worth not copying).
- SEO: OG + Twitter cards + description + favicon present; **no canonical, no structured data, no theme-color**.
- Page intent guessed `landing` at only 0.29 confidence.
- Reading order: `nav → faq → nav → nav → content → nav → hero → steps → testimonials → hero → pricing-table → faq → footer`

---

## 8. Do / Don't

**Do**

- Lead CTAs with **"Try it"** / **"Book now"**; keep the `you`-only address.
- Set display type in Bayon caps at `0.78` line-height and `-0.02em` tracking.
- Default motion to `cubic-bezier(0.24, 1, 0.36, 1)`; go long (1s–1.4s) for scroll reveals.
- Block color in flat fields — pink canvas, cream nav, `#F3F3F3` cards — and let the single pink shadow do all elevation.
- Reach for pill and circle radii; this system has almost no square corners above 10px.

**Don't**

- Don't style links `#0000EE` — that's an unstyled-default leak, not a decision.
- Don't ship `--transition-fast: 0.3 ease-in-out` — it's missing its unit and does nothing.
- Don't treat the Swiper blue `#007AFF` as brand.
- Don't assume a dark mode exists — the "dark" tokens are identical to light.
- Don't inherit the source's CSS hygiene: 10 `!important` rules, 67% unused CSS, 2,555 duplicate declarations.
- Don't copy `maximum-scale=1`.

---

## 9. Ready-to-use token block

Corrected values, plain CSS custom properties — the only flavor that works without a build step.

```css
:root {
  /* Brand — red (signal / CTA) */
  --c-red: #e33529;
  --c-red-2: #e93225;
  --c-red-dark: #a02b22;

  /* Brand — blue */
  --c-blue: #2b6786;
  --c-blue-dark: #124e6d;
  --c-blue-mid: #5b93b0;
  --c-blue-light: #afd8fb;

  /* Brand — pink (canvas) */
  --c-pink-light: #f4ced3;
  --c-pink: #f3c3cb;
  --c-pink-dark: #f0b5be;
  --c-pink-light-2: #f6d2d8;

  /* Brand — brown / yellow / purple */
  --c-brown: #854720;
  --c-brown-light: #925026;
  --c-brown-dark: #693413;
  --c-yellow: #fff500;
  --c-yellow-dark: #dcc060;
  --c-yellow-ultra-dark: #cfae3d;
  --c-purple-1: #e6dfe7;
  --c-purple-2: #ead9ec;
  --c-purple-3: #eacdef;
  --c-purple-4: #d8b3df;

  /* Neutrals */
  --c-white: #f3f3f3;
  --c-cream: #f6f6ed;
  --c-cream-2: #f3f0ef;
  --c-gray-1: #f3f3e9;
  --c-gray-2: #ede2e2;
  --c-black: #000000;

  /* Semantic roles */
  --color-bg: var(--c-pink-light);
  --color-fg: var(--c-black);
  --color-primary: var(--c-blue);
  --color-cta: var(--c-red);
  --color-accent: var(--c-pink-dark);
  --color-surface: var(--c-white);
  --color-nav-bg: var(--c-gray-1);
  --color-footer-bg: var(--c-cream-2);
  --color-footer-fg: var(--c-red);

  /* Typography */
  --font-display: 'Bayon', 'Arial Narrow', sans-serif;
  --font-body: 'Neue Montreal', 'Helvetica Neue', Arial, sans-serif;

  --text-xs: 12px;
  --text-sm: 14px;   /* body default */
  --text-base: 15px;
  --text-md: 16px;
  --text-lg: 30px;
  --text-xl: 32px;
  --text-2xl: 42px;
  --text-3xl: 70px;
  --text-4xl: 76px;
  --text-5xl: 96px;
  --text-6xl: 126px;
  --text-7xl: 186px;
  --text-8xl: 236px;
  --text-9xl: 293px;

  --leading-display: 0.78;
  --leading-body: 1;
  --tracking-display: -0.02em;

  /* Spacing */
  --space-1: 20px;
  --space-2: 24px;
  --space-3: 27px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-7: 56px;
  --space-8: 64px;
  --space-9: 86px;
  --space-10: 120px;

  /* Shape */
  --radius-sm: 3px;
  --radius-md: 10px;
  --radius-pill: 56px;
  --radius-pill-lg: 150px;
  --radius-circle: 9999px;

  /* Elevation — the only shadow in the system */
  --shadow: rgba(221, 198, 202, 0.4) -3px 4.5px 16px 0px;

  /* Motion */
  --ease: cubic-bezier(0.24, 1, 0.36, 1);
  --ease-in-out: ease-in-out;
  --duration-xs: 100ms;
  --duration-sm: 200ms;
  --duration-md: 300ms;
  --duration-lg: 450ms;
  --duration-xl: 1s;
  --duration-xxl: 1.4s;

  /* Layers */
  --z-header: 500;
  --z-modal: 510;
  --z-preloader: 1000;
}
```

---

## Source files

| File | Contents |
|---|---|
| `dontboardme-com-DESIGN.md` | generator's human summary |
| `dontboardme-com-design-language.md` | full detail (24 KB) |
| `dontboardme-com-design-tokens.json` | W3C DTCG tokens |
| `dontboardme-com-variables.css` | CSS vars **incl. the site's own named palette** |
| `dontboardme-com-tailwind.config.js` / `-tailwind-v4.css` / `-shadcn-theme.css` | token mappings (not stack evidence) |
| `dontboardme-com-motion.*` | Framer / GSAP / Motion One / WAAPI / CSS presets + interactive lab |
| `dontboardme-com-preview.html` / `dontboardme-com.brand.html` | visual preview + brand book |
| `dontboardme-com-figma-variables.json` | Figma variables |
| `dontboardme-com-voice.json` / `-intent.json` / `-visual-dna.json` | voice, intent, material analysis |
| `dontboardme-com-icon-system.json` / `-seo.json` / `-dark-mode.json` | icons, meta, dark pairing |
