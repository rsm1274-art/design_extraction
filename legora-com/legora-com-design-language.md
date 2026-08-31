# Design Language: Legora

> Extracted from `https://legora.com/` on August 22, 2026
> 953 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#005032` | rgb(0, 80, 50) | hsl(158, 100%, 16%) | 176 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 266 |
| Accent | `#003d26` | rgb(0, 61, 38) | hsl(157, 100%, 12%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 1251 |
| `#ffffff` | hsl(0, 0%, 100%) | 115 |
| `#68655e` | hsl(42, 5%, 39%) | 52 |
| `#e6e6e6` | hsl(0, 0%, 90%) | 19 |
| `#343434` | hsl(0, 0%, 20%) | 6 |
| `#8f8d8a` | hsl(36, 2%, 55%) | 6 |

### Background Colors

Used on large-area elements: `#fafaf9`, `#005032`, `#e6e6e6`, `#e1dfda`, `#0d1016`, `#003d26`, `#000000`, `#ffffff`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#ffffff`, `#68655e`, `#0d1016`, `#0a0a0a`, `#6b6b6b`, `#343434`, `#8f8d8a`, `#e6e6e6`

### Gradients

```css
background-image: linear-gradient(rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0) 50%, rgba(250, 250, 250, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 13.1176%, rgba(0, 0, 0, 0.1) 72.2498%, rgba(0, 0, 0, 0.5) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(67, 81, 112, 0.2) 15%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 75%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 1251 |
| `#0000ee` | text, border | 266 |
| `#005032` | background, text, border | 176 |
| `#ffffff` | background, text, border | 115 |
| `#0d1016` | background, text, border | 73 |
| `#68655e` | text, border | 52 |
| `#e6e6e6` | background, text, border | 19 |
| `#343434` | text, border | 6 |
| `#8f8d8a` | text, border | 6 |
| `#003d26` | background | 1 |

## Typography

### Font Families

- **CUSTOMV2;Aktiv Grotesk VF Variable Regular** — used for all (188 elements)
- **Times New Roman** — used for body (56 elements)
- **Aktiv Grotesk VF Variable Regular** — used for all (23 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 86.6611px | 5.4163rem | 300 | 86.6611px | -2.59983px | span |
| 54.1632px | 3.3852rem | 400 | 56.8714px | -2.16653px | h1, span |
| 39.7197px | 2.4825rem | 400 | 41.7057px | -1.19159px | h3, br |
| 32.4979px | 2.0311rem | 400 | 38.9975px | -0.649958px | h4 |
| 21.6653px | 1.3541rem | 400 | 25.9983px | -0.216653px | h5, br |
| 14.4435px | 0.9027rem | 400 | normal | normal | html, head, meta, title |
| 13px | 0.8125rem | 400 | 16px | -0.13px | p |
| 12.7103px | 0.7944rem | 400 | 17.7944px | normal | p, a |
| 12px | 0.75rem | 400 | normal | normal | body, script, noscript, iframe |

### Heading Scale

```css
h1 { font-size: 54.1632px; font-weight: 400; line-height: 56.8714px; }
h3 { font-size: 39.7197px; font-weight: 400; line-height: 41.7057px; }
h4 { font-size: 32.4979px; font-weight: 400; line-height: 38.9975px; }
h5 { font-size: 21.6653px; font-weight: 400; line-height: 25.9983px; }
```

### Body Text

```css
body { font-size: 12.7103px; font-weight: 400; line-height: 17.7944px; }
```

### Font Weights in Use

`400` (950x), `300` (3x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-20 | 20px | 1.25rem |
| spacing-30 | 30px | 1.875rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-90 | 90px | 5.625rem |
| spacing-200 | 200px | 12.5rem |
| spacing-346 | 346px | 21.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 3 |
| sm | 5px | 3 |
| lg | 15px | 1 |
| xl | 24px | 7 |
| full | 32px | 1 |
| full | 48px | 15 |
| full | 99px | 9 |
| full | 999px | 2 |

## CSS Custom Properties

### Other

```css
--one-if-corner-shape-supported: 1;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 746px | max-width |
| md | 747px | max-width |
| lg | 1025px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

**Easing functions:** `ease`, `cubic-bezier(0.625, 0.05, 0, 1)`

**Durations:** `0.3s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: opacity 0.3s ease-out;
transition: width 0.5s cubic-bezier(0.625, 0.05, 0, 1);
transition: transform 0.5s cubic-bezier(0.625, 0.05, 0, 1);
transition: flex-basis 0.5s cubic-bezier(0.625, 0.05, 0, 1), width 0.5s cubic-bezier(0.625, 0.05, 0, 1);
```

### Keyframe Animations

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**center-carousel-rr-progress**
```css
@keyframes center-carousel-rr-progress {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (2 instances)

```css
.buttons {
  background-color: rgb(230, 230, 230);
  color: rgb(13, 16, 22);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 999px;
}
```

### Links (66 instances)

```css
.links {
  color: rgb(0, 80, 50);
  font-size: 12.7103px;
  font-weight: 400;
}
```

### ProgressBars (1 instances)

```css
.progressBars {
  background-color: rgb(13, 16, 22);
  color: rgb(0, 0, 0);
  border-radius: 99px;
  font-size: 12px;
}
```

## Layout System

**2 grid containers** and **356 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1728px | 0px |
| 1680px | 0px |
| 860px | 0px |
| 1080px | 0px |
| 100% | 15px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 1x |
| 5-column | 1x |

### Grid Templates

```css
grid-template-columns: 284px 284px 284px 284px;
gap: 40px 32px;
grid-template-columns: 246.391px 246.406px 246.391px 246.406px 246.391px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 265x |
| row/nowrap | 91x |

**Gap values:** `10px`, `15px`, `24px`, `30px`, `40px 32px`, `48px`, `4px`, `5px`, `60px`, `6px`, `80px`, `8px`, `90px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 87/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 80/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance

**Issues:**
- 18 !important rules — prefer specificity over overrides
- 69% of CSS is unused — consider purging
- 4131 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 3 | bold |
| linear | — | 4 | bold |
| linear | — | 3 | bold |
| linear | — | 2 | brand |

```css
background: linear-gradient(rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0) 50%, rgba(250, 250, 250, 0) 100%);
background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 13.1176%, rgba(0, 0, 0, 0.1) 72.2498%, rgba(0, 0, 0, 0.5) 100%);
background: linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(67, 81, 112, 0.2) 15%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 75%);
```

## Z-Index Map

**8 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| sticky | 10,10 | div.f.r.a.m.e.r.-.g.9.i.l.1.b |
| base | -1000,7 | iframe, div, div.f.r.a.m.e.r.-.1.7.s.p.3.u.3.-.c.o.n.t.a.i.n.e.r |

**Issues:**
- Very high z-index values: 2147483647

## SVG Icons

**3 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| xl | 1 |

**Icon colors:** `rgb(0, 0, 0)`, `var(--token-c17340f0-af98-4bd9-9b44-9e89d443efbf, rgb(13, 16, 22))`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Playfair Display | cdn | 400 | italic, normal |
| Fragment Mono | cdn | 400 | normal |
| Geist Mono | cdn | 400 | normal |
| Kalam | cdn | 300 | normal |
| Aktiv Grotesk VF Variable Regular | self-hosted | 400 | normal |
| Suisse Intl Book | self-hosted | 450 | normal |
| Rhymes Display Light | self-hosted | 300 | normal |
| Suisse Intl Medium | self-hosted | 500 | normal |
| Suisse Intl Regular | self-hosted | 400 | normal |
| Domaine Display Narrow Regular Italic | self-hosted | 400 | italic |
| Domaine Display Narrow Regular | self-hosted | 400 | normal |
| Rhymes Display Regular | self-hosted | 400 | normal |
| Rhymes Display Thin | self-hosted | 251 | normal |
| Inter | self-hosted | 400, 500, 600, 700, 900 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 13 | objectFit: contain, borderRadius: 0px, shape: square |
| general | 12 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 2px, shape: rounded |
| gallery | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:4 (12x), 3.79:1 (8x), 1:1 (6x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |

### Easing Families

- **ease-in-out** (1 uses) — `ease`
- **custom** (15 uses) — `cubic-bezier(0.625, 0.05, 0, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `center-carousel-rr-progress` | scale | transform | 1 |

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** Legora is the collaborative AI powering lawyers to review and research faster, draft smarter, and advise with precision. Legora adapts to your ways of working, unlocking team and machine collaboration

## Section Roles

Reading order (top→bottom): content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.354 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 999px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `photography` (confidence 0.296)
**Counts:** total 27, svg 0, icon 0, screenshot-like 0, photo-like 14
**Dominant aspect:** portrait
**Radius profile on images:** square

## Component Library

**Detected:** `vuetify` (confidence 0.9)

Evidence:
- 32 v-* classes

## Component Screenshots

1 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| hero | 0 | 1280 × 4416 | `screenshots/undefined` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `CUSTOMV2;Aktiv Grotesk VF Variable Regular` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
