# Design Language: Robert Tran - Brisbane Web Developer

> Extracted from `https://www.roberttran.com.au/` on August 21, 2026
> 1283 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#16140f` | rgb(22, 20, 15) | hsl(43, 19%, 7%) | 2588 |
| Secondary | `#f4f1e9` | rgb(244, 241, 233) | hsl(44, 33%, 94%) | 84 |
| Accent | `#ccbe9f` | rgb(204, 190, 159) | hsl(41, 31%, 71%) | 7 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#45413a` | hsl(38, 9%, 25%) | 225 |
| `#000000` | hsl(0, 0%, 0%) | 213 |
| `#fbfaf5` | hsl(50, 43%, 97%) | 13 |

### Background Colors

Used on large-area elements: `#f4f1e9`, `#16140f`, `#fbfaf5`, `#efeadd`

### Text Colors

Text color palette: `#000000`, `#16140f`, `#a6382c`, `#45413a`, `#f4f1e9`, `#e7e0d0`, `#c9503f`

### Gradients

```css
background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 92px, rgba(22, 20, 15, 0.26) 296px, rgba(22, 20, 15, 0.42) 58%);
```

```css
background-image: radial-gradient(circle at 32% 28%, rgba(251, 250, 245, 0.5), rgba(251, 250, 245, 0) 46%), radial-gradient(circle at 70% 78%, rgba(22, 20, 15, 0.06), rgba(22, 20, 15, 0) 40%);
```

```css
background-image: radial-gradient(rgba(22, 20, 15, 0.16) 0.6px, rgba(0, 0, 0, 0) 0.7px);
```

```css
background-image: radial-gradient(rgba(166, 56, 44, 0.5) 0.7px, rgba(0, 0, 0, 0) 0.8px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#16140f` | text, border, background | 2588 |
| `#45413a` | text, border, background | 225 |
| `#000000` | text, border | 213 |
| `#f4f1e9` | background, text, border | 84 |
| `#a6382c` | text, border | 66 |
| `#e7e0d0` | border, text | 21 |
| `#fbfaf5` | background | 13 |
| `#ccbe9f` | background | 7 |
| `#c9503f` | text, border | 2 |

## Typography

### Font Families

- **caslonText** — used for body (874 elements)
- **franklin** — used for all (147 elements)
- **jetbrainsMono** — used for body (130 elements)
- **caslonDisplay** — used for all (73 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 104px | 6.5rem | 400 | 95.68px | -1.04px | h1 |
| 84.48px | 5.28rem | 400 | 84.48px | -1.6896px | h1, em |
| 82px | 5.125rem | 400 | 73.8px | -0.82px | div |
| 46px | 2.875rem | 900 | 69px | 6.44px | div, h2, span, h3 |
| 32px | 2rem | 400 | 48px | normal | h3 |
| 30px | 1.875rem | 400 | 45px | -0.3px | a, span, svg, path |
| 29.44px | 1.84rem | 400 | 29.44px | normal | div |
| 28px | 1.75rem | 400 | 29.68px | -0.28px | h3 |
| 24px | 1.5rem | 400 | 26.4px | normal | div |
| 23px | 1.4375rem | 400 | 33.35px | normal | p |
| 22px | 1.375rem | 400 | 33px | -0.22px | span |
| 21px | 1.3125rem | 400 | 25.2px | normal | p, a |
| 19px | 1.1875rem | 400 | 28.5px | -0.19px | span |
| 17px | 1.0625rem | 400 | 26.35px | normal | p |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |

### Heading Scale

```css
h1 { font-size: 104px; font-weight: 400; line-height: 95.68px; }
h1 { font-size: 84.48px; font-weight: 400; line-height: 84.48px; }
h2 { font-size: 46px; font-weight: 900; line-height: 69px; }
h3 { font-size: 32px; font-weight: 400; line-height: 48px; }
h3 { font-size: 28px; font-weight: 400; line-height: 29.68px; }
h4 { font-size: 11px; font-weight: 700; line-height: 16.5px; }
```

### Body Text

```css
body { font-size: 11px; font-weight: 700; line-height: 16.5px; }
```

### Font Weights in Use

`400` (1084x), `700` (86x), `500` (47x), `600` (37x), `900` (22x), `800` (7x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-76 | 76px | 4.75rem |
| spacing-138 | 138px | 8.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 7px | 1 |
| full | 50px | 2 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(244, 241, 233) 0px 0px 0px 3px inset, rgba(22, 20, 15, 0.5) 0px 0px 0px 4px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(166, 56, 44, 0.35) 0px 0px 0px 2px inset, rgba(22, 20, 15, 0.22) 0px 10px 26px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(22, 20, 15, 0.14) 0px 2px 14px 0px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(251, 250, 245, 0.16) 2px 0px 0px 0px inset;
```

**xl (inset)** — blur: 40px
```css
box-shadow: rgba(22, 20, 15, 0.32) 0px 18px 40px 0px, rgba(22, 20, 15, 0.18) 0px 0px 0px 1px inset;
```

## CSS Custom Properties

### Colors

```css
--tw-ring-offset-color: #fff;
--tw-ring-offset-shadow: 0 0 #0000;
--color-paper-warm: #efeadd;
--color-paper-bright: #fbfaf5;
--tw-ring-shadow: 0 0 #0000;
--color-ink-soft: #45413a;
--tw-border-style: solid;
--color-ink: #16140f;
--color-ink-faint: #8b8678;
--tw-ring-offset-width: 0px;
--color-stamp-bright: #c9503f;
--tw-inset-ring-shadow: 0 0 #0000;
--color-paper-deep: #e7e0cf;
--color-paper: #f4f1e9;
--color-stamp: #a6382c;
```

### Spacing

```css
--spacing: .25rem;
```

### Typography

```css
--font-text: "caslonText", "caslonText Fallback", Georgia, "Times New Roman", serif;
--font-weight-extrabold: 800;
--font-caslon-text: "caslonText", "caslonText Fallback";
--font-weight-bold: 700;
--font-weight-black: 900;
--tracking-normal: 0em;
--font-caslon-display: "caslonDisplay", "caslonDisplay Fallback";
--font-franklin: "franklin", "franklin Fallback";
--font-gothic: "franklin", "franklin Fallback", "Helvetica Neue", Arial, sans-serif;
--text-xs: .75rem;
--text-xs--line-height: calc(1 / .75);
--default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-weight-medium: 500;
--font-weight-normal: 400;
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-jetbrains: "jetbrainsMono", "jetbrainsMono Fallback";
--font-mono: "jetbrainsMono", "jetbrainsMono Fallback", ui-monospace, "SFMono-Regular", monospace;
--font-display: "caslonDisplay", "caslonDisplay Fallback", "Times New Roman", Georgia, serif;
--font-weight-semibold: 600;
--default-mono-font-family: "jetbrainsMono", "jetbrainsMono Fallback", ui-monospace, "SFMono-Regular", monospace;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-shadow-alpha: 100%;
--drop-shadow-sm: 0 1px 2px #00000026;
--tw-drop-shadow-alpha: 100%;
--shadow-sm: 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;
--shadow-md: 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
--shadow-lg: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
--tw-shadow: 0 0 #0000;
--tw-inset-shadow: 0 0 #0000;
```

### Other

```css
--tw-content: "";
--aspect-video: 16 / 9;
--tw-scale-z: 1;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--tw-translate-x: 0;
--tw-scale-x: 1;
--tw-translate-z: 0;
--tw-scale-y: 1;
--default-transition-duration: .15s;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | max-width |

## Transitions & Animations

**Easing functions:** `ease`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.22, 1, 0.36, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.34, 1.56, 0.64, 1)`

**Durations:** `0.45s`, `0.2s`, `0.5s`, `0.1s`, `0.3s`, `0.15s`, `0.55s`, `0.06s`, `0.14s`, `0.26s`, `0.32s`, `0.7s`, `0.18s`, `0.24s`, `0.12s`, `0.04s`, `0.6s`, `0.35s`, `0.08s`, `0.41s`, `0.47s`, `0.4s`, `0.16s`, `0.28s`, `0.36s`

### Common Transitions

```css
transition: all;
transition: opacity 0.45s;
transition: opacity 0.2s, filter 0.2s;
transition: opacity 0.5s;
transition: opacity 0.2s;
transition: opacity 0.1s ease-out;
transition: opacity 0.3s;
transition: color 0.2s, border-color 0.2s, background 0.2s;
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), translate 0.2s cubic-bezier(0.4, 0, 0.2, 1), scale 0.2s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**vt-blur**
```css
@keyframes vt-blur {
  30% { filter: blur(3px); }
}
```

**vt-fade**
```css
@keyframes vt-fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**vt-slide**
```css
@keyframes vt-slide {
  0% { translate: var(--vt-offset) 0; }
  100% { translate: 0px; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (4 instances)

```css
.buttons {
  background-color: rgb(244, 241, 233);
  color: rgb(244, 241, 233);
  font-size: 11px;
  font-weight: 600;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (2 instances)

```css
.cards {
  background-color: rgb(22, 20, 15);
  border-radius: 0px 0px 8px 8px;
  box-shadow: rgba(251, 250, 245, 0.16) 2px 0px 0px 0px inset;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (5 instances)

```css
.inputs {
  background-color: rgb(251, 250, 245);
  color: rgb(22, 20, 15);
  border-color: rgb(22, 20, 15);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
}
```

### Links (31 instances)

```css
.links {
  color: rgb(244, 241, 233);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (2 instances)

```css
.navigation {
  background-color: rgb(244, 241, 233);
  color: rgb(22, 20, 15);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: sticky;
}
```

### Footer (1 instances)

```css
.footer {
  background-color: rgb(22, 20, 15);
  color: rgb(244, 241, 233);
  padding-top: 56px;
  padding-bottom: 30px;
  font-size: 16px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(244, 241, 233);
  color: rgb(69, 65, 58);
  padding: 7px 12px 7px 12px;
  border-radius: 0px;
  border: 1px solid rgba(22, 20, 15, 0.4);
  font-size: 11px;
  font-weight: 600;
```

**Variant 2** (1 instance)

```css
  background: rgb(22, 20, 15);
  color: rgb(244, 241, 233);
  padding: 15px 28px 15px 28px;
  border-radius: 0px;
  border: 2px solid rgb(22, 20, 15);
  font-size: 14px;
  font-weight: 700;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(251, 250, 245);
  color: rgb(22, 20, 15);
  padding: 12px 14px 12px 14px;
  border-radius: 0px;
  border: 2px solid rgb(22, 20, 15);
  font-size: 16px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(251, 250, 245);
  color: rgb(22, 20, 15);
  padding: 12px 14px 12px 14px;
  border-radius: 0px;
  border: 2px solid rgb(22, 20, 15);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(244, 241, 233);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid oklab(0.958256 0.0000973046 0.0111176 / 0.45);
  font-size: 11px;
  font-weight: 500;
```

## Layout System

**20 grid containers** and **117 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 260px | 16px |
| 1180px | 30px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 13x |
| 3-column | 4x |
| 2-column | 3x |

### Grid Templates

```css
grid-template-columns: 373.328px 373.328px 373.344px;
grid-template-columns: 656.469px 423.531px;
gap: 40px;
grid-template-columns: 641.688px 474.312px;
grid-template-columns: 356.172px 222.609px 222.609px 222.609px;
gap: 32px;
grid-template-columns: 170px 470.516px 423.484px;
gap: 24px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 83x |
| column/nowrap | 19x |
| row/wrap | 15x |

**Gap values:** `10px`, `12px`, `16px`, `18px`, `20px`, `24px`, `26px`, `32px`, `40px`, `4px 22px`, `5px`, `6px`, `7px`, `8px 18px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 6 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#f4f1e9` | `#16140f` | 16.31:1 | AAA |
| `#45413a` | `#f4f1e9` | 8.99:1 | AAA |

## Dark Mode

The site has a distinct dark mode color scheme:

- **Primary:** `#16140f`
- **Secondary:** `#f4f1e9`
- **Backgrounds:** `#f4f1e9`, `#16140f`, `#fbfaf5`, `#efeadd`
- **Text:** `#000000`, `#16140f`, `#a6382c`, `#45413a`, `#f4f1e9`

### Dark Mode CSS Variables

```css
--tw-ring-offset-shadow: 0 0 #0000;
--color-paper-warm: #efeadd;
--color-paper-bright: #fbfaf5;
--tw-ring-shadow: 0 0 #0000;
--color-ink-soft: #45413a;
--tw-border-style: solid;
--color-ink-faint: #8b8678;
--color-ink: #16140f;
--tw-ring-offset-width: 0px;
--color-stamp-bright: #c9503f;
--tw-inset-ring-shadow: 0 0 #0000;
--color-paper-deep: #e7e0cf;
--color-paper: #f4f1e9;
--color-stamp: #a6382c;
--tw-ring-offset-color: #fff;
--spacing: .25rem;
--font-text: "caslonText", "caslonText Fallback", Georgia, "Times New Roman", serif;
--font-weight-extrabold: 800;
--font-caslon-text: "caslonText", "caslonText Fallback";
--font-caslon-display: "caslonDisplay", "caslonDisplay Fallback";
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-weight-black: 900;
--tracking-normal: 0em;
--font-franklin: "franklin", "franklin Fallback";
--font-weight-bold: 700;
--font-gothic: "franklin", "franklin Fallback", "Helvetica Neue", Arial, sans-serif;
--text-xs: .75rem;
--default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--text-xs--line-height: calc(1 / .75);
--font-weight-medium: 500;
--font-jetbrains: "jetbrainsMono", "jetbrainsMono Fallback";
--font-weight-normal: 400;
--font-mono: "jetbrainsMono", "jetbrainsMono Fallback", ui-monospace, "SFMono-Regular", monospace;
--font-display: "caslonDisplay", "caslonDisplay Fallback", "Times New Roman", Georgia, serif;
--font-weight-semibold: 600;
--default-mono-font-family: "jetbrainsMono", "jetbrainsMono Fallback", ui-monospace, "SFMono-Regular", monospace;
--tw-inset-shadow-alpha: 100%;
--tw-shadow-alpha: 100%;
--drop-shadow-sm: 0 1px 2px #00000026;
--tw-drop-shadow-alpha: 100%;
--shadow-md: 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
--shadow-sm: 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;
--tw-shadow: 0 0 #0000;
--shadow-lg: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
--tw-inset-shadow: 0 0 #0000;
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--tw-content: "";
--aspect-video: 16 / 9;
--tw-scale-z: 1;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--tw-translate-x: 0;
--tw-scale-x: 1;
--tw-translate-z: 0;
--tw-scale-y: 1;
--default-transition-duration: .15s;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Design System Score

**Overall: 87/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 40/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 22 distinct font sizes — consider a tighter type scale
- 8 !important rules — prefer specificity over overrides
- 435 duplicate CSS declarations

## Gradients

**5 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | circle | 3 | bold |
| radial | circle at 32% 28% | 2 | brand |
| radial | circle at 70% 78% | 2 | brand |
| radial | — | 2 | brand |
| radial | — | 2 | brand |

```css
background: radial-gradient(circle, rgba(0, 0, 0, 0) 92px, rgba(22, 20, 15, 0.26) 296px, rgba(22, 20, 15, 0.42) 58%);
background: radial-gradient(circle at 32% 28%, rgba(251, 250, 245, 0.5), rgba(251, 250, 245, 0) 46%);
background: radial-gradient(circle at 70% 78%, rgba(22, 20, 15, 0.06), rgba(22, 20, 15, 0) 40%);
background: radial-gradient(rgba(22, 20, 15, 0.16) 0.6px, rgba(0, 0, 0, 0) 0.7px);
background: radial-gradient(rgba(166, 56, 44, 0.5) 0.7px, rgba(0, 0, 0, 0) 0.8px);
```

## Z-Index Map

**10 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9000,9999 | div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .f.i.x.e.d. .l.e.f.t.-.0. .t.o.p.-.0. .z.-.[.9.0.0.0.]. .o.p.a.c.i.t.y.-.0. .[.t.r.a.n.s.i.t.i.o.n.:.o.p.a.c.i.t.y._...1.5.s._.e.a.s.e.]. .[.w.i.l.l.-.c.h.a.n.g.e.:.t.r.a.n.s.f.o.r.m.], div.f.m.-.i.n.t.r.o |
| sticky | 40,40 | div.n.a.v.-.w.r.a.p. .s.t.i.c.k.y. .t.o.p.-.0. .z.-.4.0. .b.o.r.d.e.r.-.b.-.2. .b.o.r.d.e.r.-.i.n.k. .b.g.-.p.a.p.e.r |
| base | 1,9 | div.r.e.l.a.t.i.v.e. .z.-.[.1.]. .[.o.v.e.r.f.l.o.w.-.x.:.c.l.i.p.], span.a.b.s.o.l.u.t.e. .-.t.o.p.-.2. .l.e.f.t.-.1./.2. .z.-.[.1.]. .h.-.4. .w.-.1.6. .-.t.r.a.n.s.l.a.t.e.-.x.-.1./.2. .-.r.o.t.a.t.e.-.2. .b.o.r.d.e.r. .b.o.r.d.e.r.-.i.n.k./.1.0. .b.g.-.p.a.p.e.r.-.d.e.e.p./.7.5, span.a.b.s.o.l.u.t.e. .-.t.o.p.-.2. .l.e.f.t.-.1./.2. .z.-.[.1.]. .h.-.4. .w.-.1.6. .-.t.r.a.n.s.l.a.t.e.-.x.-.1./.2. .-.r.o.t.a.t.e.-.2. .b.o.r.d.e.r. .b.o.r.d.e.r.-.i.n.k./.1.0. .b.g.-.p.a.p.e.r.-.d.e.e.p./.7.5 |

## SVG Icons

**6 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 3 |
| md | 2 |
| xl | 1 |

**Icon colors:** `#a6382c`, `rgb(0, 0, 0)`, `currentColor`, `#16140f`, `rgba(251,250,245,0.55)`, `rgba(251,250,245,0.85)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| caslonDisplay | self-hosted | 400 | normal |
| caslonText | self-hosted | 400, 700 | normal, italic |
| franklin | self-hosted | 100 900 | normal |
| jetbrainsMono | self-hosted | 100 800 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 8 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 16:9 (5x), 2.03:1 (2x), 1:1 (1x)

## Motion Language

**Feel:** springy · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `40ms` | 40 |
| `xs` | `100ms` | 100 |
| `sm` | `160ms` | 160 |
| `md` | `260ms` | 260 |
| `lg` | `410ms` | 410 |

### Easing Families

- **ease-in-out** (42 uses) — `ease`
- **custom** (34 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (58 uses) — `cubic-bezier(0.22, 1, 0.36, 1)`, `cubic-bezier(0, 0, 0.2, 1)`
- **spring** (13 uses) — `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Spring / Overshoot Easings

- `cubic-bezier(0.34, 1.56, 0.64, 1)`

## Component Anatomy

### button — 3 instances

**Slots:** label

### input — 2 instances

**Variants:** outline

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Top CTA Verbs

- **skip** (1)
- **send** (1)

### Button Copy Patterns

- "skip intro →" (1×)
- "send the letter" (1×)

### Sample Headings

> Robert Tran
THE PERSONAL RECORD OF A WEB DEVELOPER
> A Brisbane web developer who likes building things — front to back.
> Selected Works
> Caitlyn Nails Studio
> Pakko Shop
> Pakko Quote
> Pakko IDP
> The Lab Report
> The Career Ledger
> Letters & Commissions

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Robert Tran is a Brisbane web developer building full-stack web applications with Next.js, React, Tailwind, Supabase, AWS, and Vercel.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → testimonial → testimonial → testimonial → testimonial → pricing → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | Robert Tran
THE PERSONAL RECORD OF A WEB DEVELOPER | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | testimonial | A Brisbane web developer who likes building things — front to back. | 0.8 |
| 3 | testimonial | Selected Works | 0.8 |
| 4 | testimonial | The Lab Report | 0.8 |
| 5 | testimonial | The Career Ledger | 0.8 |
| 6 | pricing | Letters & Commissions | 0.4 |
| 7 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.254 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 5 |

## Imagery Style

**Label:** `photography` (confidence 0.208)
**Counts:** total 8, svg 0, icon 0, screenshot-like 0, photo-like 1
**Dominant aspect:** landscape
**Radius profile on images:** square

## Component Screenshots

5 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 127 × 33 | `screenshots/button-default-0.png` |
| button--default | 1 | 212 × 55 | `screenshots/button-default-1.png` |
| button--default | 2 | 40 × 40 | `screenshots/button-default-2.png` |
| input--outline | 0 | 276 × 52 | `screenshots/input-outline-0.png` |
| input--outline | 1 | 568 × 120 | `screenshots/input-outline-1.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `caslonText` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
