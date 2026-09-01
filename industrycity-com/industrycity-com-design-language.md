# Design Language — industrycity.com

Extracted from the live production site on 2026-09-01.
Stack: WordPress + custom `ci-uikit` theme (UIkit 3 framework), Swiper 7,
fullPage.js, Adobe Typekit, Gravity Forms, The Events Calendar.

> Extraction method: the headless-browser pipeline (Playwright/Chromium) is
> blocked by this environment's network egress policy — all headless HTTPS
> connections are reset, including to unrelated hosts, while `curl` works
> normally. The design system was therefore reconstructed from the site's
> shipped stylesheets, per-block inline CSS, and theme JavaScript. Note that
> this theme's design lives in three places: `globals.css` (brand variables),
> a custom section appended after minified UIkit inside `style.css`, and
> per-block `<style>` blocks inlined into the page. All three were mined.

## Overview

Industry City is a Brooklyn manufacturing/creative campus. The site is
**neo-brutalist editorial**: a warm off-white paper ground divided by heavy
**2px black rules** into a hard-edged grid, with condensed all-caps display
type at enormous sizes, a warm amber/orange accent family, and full-bleed
photography. Nothing is rounded, nothing is shadowed — structure comes
entirely from the black rule grid, and the grid literally *draws itself in*
on page load.

## Color

Declared brand variables (`globals.css`):

```css
--bg:     #FBF9F5;  /* warm paper off-white — the page ground */
--white:  #FFFFFF;
--teal:   #DCEBD7;  /* pale sage-mint */
--blue:   #417878;  /* deep teal-blue */
--green:  #34AD5C;
--border: 2px solid #000;
```

Full palette in actual use, by frequency:

| Color | Hex | Role |
|---|---|---|
| Black | `#000000` | the structural color — 2px rules, all body/heading text, button fills (218 uses) |
| Paper | `#FBF9F5` | page background, button text on black |
| Amber | `#fab36a` | primary accent — nav-bar cells, pagination chip, vertical headline, hover links |
| Cream | `#fbe6c1` | bottom bar fill, button hover text |
| Sage | `#e5e7da` | search overlay, featured-event surfaces |
| Burnt orange | `#e05829` | button hover wipe, nav underline, top-bar CTA |
| Olive | `#7e8742`, `#b2b792` | secondary section accents |
| Peach | `#ebb598`, `#f1b486`, `#f4b47c`, `#fcd1a5`, `#fbc791` | warm photo-overlay tints |
| Green | `#4daa60` / `#34AD5C` | leasing-section accent, "green" button variant |
| Mint | `#DCEBD7` | leasing highlight |
| Red-orange ramp | `#f1684b`, `#f0593c`, `#e95134`, `#ef492d` | mobile CTA columns, each nth-child a different shade |
| Grey | `#6a6b6b`, `#989898` | placeholder / muted text |
| Chartreuse | `#E7E971` | "Free" event pill (set in JS) |

Overlays: `rgba(224,88,41,.89)` — an 89% burnt-orange scrim sits over CTA
column photography, swapping to `rgba(0,0,0,.3)` on hover.

## Typography

Three families, all doing distinct jobs:

| Family | Source | Role |
|---|---|---|
| **Abolition** | Typekit | Condensed display. All of `h1`, `h2`, `h4`–`h6`, uppercase, weight 400. |
| **Proxima Nova** | Typekit | Body text, buttons, UI. 16px base / 1.4 line-height. |
| **Neue Machina** | self-hosted | `h3` and eyebrow/label text — uppercase, bold, technical counterpoint. |

Base: `body { font-family: "proxima-nova"; font-size: 1.6rem; line-height: 1.4; font-weight: 400; color: #000; background: #FBF9F5 }`

Heading scale — note the unusual `clamp()` idiom this theme uses throughout,
`clamp(<mobile rem>, <vw>, <vw>)`, where the preferred and max values are the
same viewport unit. The effect is a **hard mobile floor that then scales purely
with viewport width**:

| Element | Family | Size | Line-height | Case |
|---|---|---|---|---|
| `h1` | Abolition | `clamp(6rem, 6vw, 6vw)` | 1.1 | uppercase |
| `h2` | Abolition | `clamp(4rem, 3vw, 3vw)` | 1 | uppercase |
| `h3` | Neue Machina, bold | `clamp(1.8rem, .7vw, .7vw)` | — | uppercase |
| `h4`–`h6` | Abolition | `clamp(3rem, 2vw, 2vw)` | 1.1 | uppercase |
| CTA column `h2` | Abolition | `clamp(5rem, 5vw, 5vw)` | 1.1 | uppercase, white |
| Featured `h2` | Abolition | `clamp(6rem, 3vw, 3vw)` | — | uppercase |
| Post `h1` | Abolition | `clamp(5rem, 5vw, 5vw)` | — | centered |
| 404 `h1` | Abolition | `clamp(4rem, 10vw, 32rem)` | — | with `7px 0` offset text-shadow in `rgba(239,73,45,.8)` |
| Search input | Abolition | `4vw` | — | placeholder `#6a6b6b` |

Micro-typography: labels and links are `text-transform: uppercase` with
`letter-spacing: .06em`–`.1rem` and `font-weight: 700`. Root font-size is
`16px` with sizing in `rem`, so `1.6rem` = 16px body text (i.e. the theme
treats `rem` as ~10px by convention in its authored values).

## Structure & Shape

- **The 2px black rule is the entire design system.** `--border: 2px solid #000` appears as `border-width: 0 2px 2px 0` on grid cells, with `nth-child` rules stripping edges so the grid never doubles up. A 2×2px black square is even painted at one cell intersection (`.featured-post:nth-child(2n+2):before`) to close a seam.
- **Radius: none.** The only `border-radius` values are `50%` — circles for the `+` button icon and the loader ring. Everything rectangular is square.
- **Shadows: none.** The single `text-shadow` on the 404 page is a hard offset, not a blur.
- **Cell heights** are viewport-locked: `min-height: 86vh` for full CTA columns, `43vh` for half cells, `100vh` for the map — so the grid always fills the screen.
- **Padding** is fluid throughout: `clamp(3rem, 3vw, 3vw)`.

## Layout & Breakpoints

UIkit breakpoints (`--uk-breakpoint-s/m/l/xl`): `480px`, `769px`, `1024px`, `1280px`.
The theme adds its own at `960/961px` (the mobile-nav split, via `.mobile` /
`.no-mobile` utility classes) and uses `1023px`, `1370px`, `1440px`, `1750px`,
`1920px` for gallery height tuning.

Chrome is fixed rather than scrolled: a fixed `.top-bar` (z-index 998), a
fixed `.bottom-bar` (z-index 981, cream `#fbe6c1`), and a left `.sidebar`
carrying the brand mark — the content scrolls inside that frame.

## Accessibility notes

- Black on `#FBF9F5` is ~19:1 — excellent. The body copy sits at 16px.
- The amber/peach accents (`#fab36a`, `#fbe6c1`) are used as *surfaces behind black text*, which is correct; as text on paper they would fail badly.
- White text over the `rgba(224,88,41,.89)` orange photo scrim is roughly 3.3:1 — acceptable at the display sizes it's used (`clamp(5rem, 5vw, 5vw)` headings), borderline for the smaller body copy in those same columns.
- **No reduced-motion handling exists.** There is no `prefers-reduced-motion` block anywhere in the theme, and the site runs an infinite 30s Ken Burns animation, an autoplaying carousel, and a full-page fade on every internal navigation. This is the clearest remediation item; see the motion write-up.

See `industrycity-com-motion-graphics.md` for the full motion system.
