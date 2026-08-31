# Santioni Spirits — Design Language

Source: https://santionispirits.com/
Extraction method: **static analysis** (inlined critical CSS + Hydrax UIL shader/config JSON pulled directly from the site's own asset payload). A full headless-browser crawl (rendered computed styles + screenshots) could not be completed — Chromium is blocked by the site's TLS/bot-fingerprint protection (WAF resets the connection during the TLS handshake) while plain HTTPS requests succeed, so this doc is built from the real shipped source rather than DOM screenshots.

## 1. Brand Character

A cinematic, WebGL-driven microsite for a ready-to-pour cocktail brand ("Santioni Spirits — Cocktails to Indulge Now, Atone Later"). Built on a custom framework ("Hydrax") with full-screen 3D scenes (Approach, Cathedral, Colosseum, Products, Drink Pour, Drink Selection, Collection, Anti-Gravity, Target, Taste). Tone: indulgent, theatrical, editorial — a fashion/luxury treatment applied to a spirits DTC brand, closer to a game-engine experience than a typical e-commerce site.

## 2. Color Palette

### Core UI colors
| Token | Hex | Usage |
|---|---|---|
| `ink` | `#121212` | Primary text/foreground on light sections (Retail, Taste, Collection, buttons) |
| `black` | `#1d1d1d` | Loader screen / dark background |
| `pure-black` | `#000000` | Borders, pure-black accents, DrinkPour border shader |
| `white` | `#ffffff` | Header background, footer text, light-on-dark text, button fill |
| `brand-red` | `#c82924` | Primary accent — link/hover state, retail header text, product bottle background |

### Red family (accent variants, used across 3D scene shaders)
`#be261e` `#971d16` `#bc251c` `#c0261d` `#990b06`
— all close variants of the primary crimson-red brand accent, used for highlight/shadow states in different WebGL scenes rather than as separate semantic tokens.

### Environment / material tones
| Hex | Usage |
|---|---|
| `#dfaf49` | Cathedral floor — warm gold |
| `#ae9c74` | Cathedral floor — stone/sand |
| `#927a73` | Hand layer pass, secondary |

### Product / liquid flavor colors (WebGL glass-liquid shaders — one hue per cocktail flavor)
| Hue | Base | Highlight/Dark |
|---|---|---|
| Sky blue | `#63c6f8` / `#2fb5f9` / `#72c5f6` | `#345bf9` (deep blue), `#00378f` |
| Mint green | `#6dd993` / `#97f3ad` | `#07cf4d` |
| Yellow | `#fbeb7f` | — |
| Violet | `#5900ff` | — |
| Magenta | `#ff0040` | `#240023` |

These map to the individual drink SKUs shown in the "Drink Selection" and "Products" 3D scenes — each product gets a distinct liquid-glow color.

## 3. Typography

Three typefaces, all custom/licensed (self-hosted woff2/woff/otf), no system fallback except generic `sans-serif`:

| Family | Role | Weight | Notes |
|---|---|---|---|
| **Charles Rosie Regular** | Display / all headings (`heading1`, `heading2`, `heading3`) | 400 | Large-scale display face, uppercase, fluid sizes up to 217px on desktop hero. Also the default `body`/`html`/`#Stage` font. |
| **PPNikkeiMaru-Ultrabold** | Bold labels, nav links, `body-bold` | 800 | Uppercase, small (12–15px), used for UI chrome (header nav, footer labels) |
| **PPNikkeiMaru-Regular** | Loaded but reserved (regular weight companion) | 400 | — |
| **GT-Era-Text-Light** | Body copy (`body-regular`) | 300 | 15px, line-height 1.5, the only non-uppercase running text |

### Fluid type scale (viewport-interpolated, not fixed breakpoints)
```
heading1   70px  → calc(38.8889vw - 81.6667px) @390px+ → 217px @768px+
heading2   70px  → calc(8.49673vw + 36.8627px) @390px+ → 200px @1920px+
heading3   40px  → calc(11.1111vw - 3.33333px) @390px+ → 82px @768px+
body-bold  12px  → calc(.793651vw + 8.90476px) @390px+ → 15px @768px+
body-regular  15px fixed, weight 300
```
Global letter-spacing: `.005em` on every text style. Headings: `text-transform: uppercase; line-height: 1.2`.

## 4. Layout & Spacing System

Not a fixed spacing scale — the entire layout is **fluidly interpolated with `calc(Xvw + Ypx)`** between named breakpoints, so paddings/gaps scale continuously with viewport width rather than snapping between fixed steps. Representative breakpoints seen throughout the CSS: `320, 390, 399/400, 768, 959/960, 1024, 1279/1280, 1920`.

Examples:
- `.FooterUI` padding-top/bottom: `45px → 65px` (390px → 1920px), padding-left: `20px → 40px`
- `.RetailUI` padding: `60px 32px 80px → 100px 330px 140px`
- `.CollectionUI` / `.ProductsUI` padding: `100px 32px → 124px 136px`
- `.TasteUI` padding-top: `100px → 200px`

Max content width caps: `950px` (retail list), `1600px` (products), `1200px` (taste graphic, desktop cap `1200px`).

## 5. Components

- **AgeGate** — full-screen modal, centered flip-card style age verification with two bordered buttons (`3px solid #fff`, hover → red).
- **HeaderMenu** — fixed pill/blob nav (white background shape morphs via SVG), uppercase 12–15px bold links, opacity-based hover (0.5 → 1) rather than color change.
- **CookieBanner** — fixed bottom-right card (370px / 318px mobile), white background, underlined privacy link.
- **FooterUI** — logo + link columns + social column, flex layout, underline-sweep hover animation on links (`transform: scaleX()` with staggered `transition-delay`).
- **XButton** — text-transform uppercase, no border by default except AgeGate's bordered variant; opacity-based interaction states (hover 0.5, secondary 0.2).
- **RetailItem / RetailUI** — list rows with 1px 10%-opacity divider lines, right-aligned bold pricing/label text.
- **AudioToggle** — fixed circular icon button, `mix-blend-mode: difference` so it inverts against any background.
- **Loading bar** — SVG stroke-based progress bar, pill-rounded (`border-radius: 2em`), white on `#1d1d1d`.
- **3D/WebGL scenes** — the primary "components" of the site are full-viewport WebGL scenes (bottle render, liquid pour, cathedral environment, drink selector, anti-gravity sequence) rather than conventional DOM UI.

## 6. Motion

- Hover/focus transitions: `0.1s–0.4s`, mostly `ease-out` / `ease-in-out`.
- Link underline sweep: two pseudo-elements animate `scaleX` in opposite directions with a `0.1s` stagger, giving a directional wipe on hover/focus.
- `prefers-hover`-gated: interactive hover states are wrapped in `@media (hover:hover) and (pointer:fine)`, with `:focus-visible` and `:has(:focus-visible)` equivalents for keyboard/touch parity.

## 7. Accessibility notes (static read, not a full audit)

- Uses `.sr-only` and `.GLA11y` (a dedicated a11y helper class for the WebGL canvas, presumably mirroring scene content to assistive tech).
- Keyboard states mirrored via `:focus-visible` alongside `:hover` throughout.
- `<noscript>` fallback message present ("Please enable javascript") — the entire experience requires JS/WebGL; there's no non-JS content path.
- A real WCAG contrast/automated score requires a rendered DOM pass and could not be produced (browser blocked at network layer — see note at top).

## 8. Brand assets

- Wordmark: flat white SVG logotype "SANTIONI SPIRITS" (`assets/images/footer_logo.svg`), vector paths, no color variation captured beyond white-on-dark.
- Favicon: abstract mark, `assets/favicon/favicon.svg`.
- Social preview image: `assets/social/og.png`.
