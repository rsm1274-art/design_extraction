# Design Language: Main

> Extracted from `https://dontboardme.com/` on August 21, 2026
> 1350 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#2b6786` | rgb(43, 103, 134) | hsl(200, 51%, 35%) | 42 |
| Secondary | `#e33529` | rgb(227, 53, 41) | hsl(4, 77%, 53%) | 507 |
| Accent | `#f0b5be` | rgb(240, 181, 190) | hsl(351, 66%, 83%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 1745 |
| `#f6f6ed` | hsl(60, 33%, 95%) | 59 |
| `#ede2e2` | hsl(0, 23%, 91%) | 27 |
| `#ffffff` | hsl(0, 0%, 100%) | 1 |

### Background Colors

Used on large-area elements: `#f4ced3`, `#f3f3e9`, `#f0b5be`, `#f3c3cb`, `#f6d2d8`, `#f3f3f3`, `#e6dfe7`, `#ead9ec`, `#eacdef`, `#d8b3df`, `#f6f6ed`, `#afd8fb`, `#2b6786`, `#f3f0ef`

### Text Colors

Text color palette: `#000000`, `#e33529`, `#0000ee`, `#f3f3e9`, `#ede2e2`, `#925026`, `#693413`, `#edbdd1`, `#2b6786`, `#f6f6ed`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border | 1745 |
| `#e33529` | text, border, background | 507 |
| `#0000ee` | text, border | 336 |
| `#693413` | text, border | 64 |
| `#f6f6ed` | background, text, border | 59 |
| `#2b6786` | text, border, background | 42 |
| `#ede2e2` | background, text, border | 27 |
| `#edbdd1` | text, border | 22 |
| `#f4ced3` | background | 11 |
| `#925026` | text, border | 4 |
| `#afd8fb` | background | 4 |
| `#eacdef` | background | 2 |
| `#d8b3df` | background | 2 |
| `#f0b5be` | background | 1 |
| `#ffffff` | background | 1 |
| `#5b93b0` | background | 1 |

## Typography

### Font Families

- **Times New Roman** — used for all (983 elements)
- **Bayon** — used for all (181 elements)
- **Neue Montreal** — used for body (108 elements)
- **Arial** — used for body (78 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 260.444px | 16.2778rem | 400 | 203.147px | -5.20889px | h2 |
| 209.778px | 13.1111rem | 400 | 163.627px | -4.19556px | h3 |
| 165.333px | 10.3333rem | 400 | 128.96px | -3.30667px | p, span, h2 |
| 112px | 7rem | 400 | 89.6px | -2.25333px | p |
| 85.3333px | 5.3333rem | 400 | 66.56px | -1.70667px | p, span, h4 |
| 67.5556px | 4.2222rem | 400 | 52.6933px | -3.30667px | h1, span |
| 64px | 4rem | 400 | 49.92px | -1.70667px | p |
| 62.2222px | 3.8889rem | 400 | 48.5333px | -1.24444px | a, span, svg, circle |
| 37.3333px | 2.3333rem | 400 | 37.3333px | -0.746667px | p |
| 28.4444px | 1.7778rem | 700 | normal | normal | h1 |
| 26.6667px | 1.6667rem | 400 | 26.6667px | -0.533333px | p |
| 14.2222px | 0.8889rem | 400 | normal | normal | html, head, meta, title |
| 13.3333px | 0.8333rem | 400 | normal | normal | button, svg, rect, div |
| 12.4444px | 0.7778rem | 500 | 12.4444px | normal | button, p, a, svg |
| 11px | 0.6875rem | 500 | 11px | normal | p |

### Heading Scale

```css
h2 { font-size: 260.444px; font-weight: 400; line-height: 203.147px; }
h3 { font-size: 209.778px; font-weight: 400; line-height: 163.627px; }
h2 { font-size: 165.333px; font-weight: 400; line-height: 128.96px; }
h4 { font-size: 85.3333px; font-weight: 400; line-height: 66.56px; }
h1 { font-size: 67.5556px; font-weight: 400; line-height: 52.6933px; }
h1 { font-size: 28.4444px; font-weight: 700; line-height: normal; }
```

### Body Text

```css
body { font-size: 12.4444px; font-weight: 500; line-height: 12.4444px; }
```

### Font Weights in Use

`400` (1241x), `500` (108x), `700` (1x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-18 | 18px | 1.125rem |
| spacing-21 | 21px | 1.3125rem |
| spacing-24 | 24px | 1.5rem |
| spacing-28 | 28px | 1.75rem |
| spacing-36 | 36px | 2.25rem |
| spacing-39 | 39px | 2.4375rem |
| spacing-43 | 43px | 2.6875rem |
| spacing-50 | 50px | 3.125rem |
| spacing-57 | 57px | 3.5625rem |
| spacing-60 | 60px | 3.75rem |
| spacing-64 | 64px | 4rem |
| spacing-76 | 76px | 4.75rem |
| spacing-84 | 84px | 5.25rem |
| spacing-89 | 89px | 5.5625rem |
| spacing-94 | 94px | 5.875rem |
| spacing-101 | 101px | 6.3125rem |
| spacing-107 | 107px | 6.6875rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 8 |
| md | 9px | 14 |
| full | 50px | 58 |
| full | 133px | 7 |
| full | 662px | 1 |

## Box Shadows

**lg** — blur: 14px
```css
box-shadow: rgba(221, 198, 202, 0.4) -3px 4px 14px 0px;
```

## CSS Custom Properties

### Colors

```css
--swiper-theme-color: #007aff;
```

### Spacing

```css
--swiper-navigation-size: 44px;
```

### Typography

```css
--font: "HelveticaNeueCyr-Roman";
--font-light: "HelveticaNeueCyr-Light";
```

### Other

```css
--transition: 0.5s ease-in-out;
--transition-fast: 0.3 ease-in-out;
--transition-slow: 0.8s ease-in-out;
--my-ease: cubic-bezier(0.24,1,0.36,1);
--c-brown: #854720;
--c-light-brown: #925026;
--c-dark-brown: #693413;
--c-dark-yellow: #dcc060;
--c-yellow: #fff500;
--c-ultra-dark-yellow: #cfae3d;
--c-dark-yellow-04: #dcc06040;
--c-white: #f3f3f3;
--c-dark-white: #f6f6ed;
--c-dark-white2: #f3f0ef;
--c-light-purple: #e6dfe7;
--c-light-purple2: #ead9ec;
--c-light-purple3: #eacdef;
--c-light-purple4: #d8b3df;
--c-light-blue: #afd8fb;
--c-d-light-blue: #5b93b0;
--c-blue: #2b6786;
--c-dark-blue: #124e6d;
--c-gray: #f4f4ea;
--c-gray1: #f3f3e9;
--c-gray2: #ede2e2;
--c-red: #e33529;
--c-red2: #e93225;
--c-dark-red: #a02b22;
--c-light-pink: #f4ced3;
--c-pink: #f3c3cb;
--c-dark-pink: #f0b5be;
--c-light-pink2: #f6d2d8;
--c-light-pink3: #f6d1d8;
--z-header: 500;
--z-modal: 510;
--z-preloader: 1000;
--viewport: 1440;
--vh: 800px;
--vw: 1280px;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 767px | max-width |
| lg | 1023px | max-width |
| lg | 1024px | max-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.6s`, `1s`, `0.4s`, `0.1s`, `0.45s`, `0.2s`, `0.5s`, `1.4s`, `0.3s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: 0.6s linear;
transition: 1s cubic-bezier(0.24, 1, 0.36, 1);
transition: opacity 0.4s cubic-bezier(0.24, 1, 0.36, 1);
transition: 0.1s ease-in;
transition: 0.45s cubic-bezier(0.24, 1, 0.36, 1) 0.2s;
transition: 0.5s ease-in-out;
transition: 0.2s ease-out;
transition: 1.4s cubic-bezier(0.24, 1, 0.36, 1);
transition: 0.2s ease-in;
```

### Keyframe Animations

**swiper-preloader-spin**
```css
@keyframes swiper-preloader-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1turn); }
}
```

**swiper-preloader-spin**
```css
@keyframes swiper-preloader-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1turn); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (23 instances)

```css
.button {
  color: rgb(0, 0, 0);
  font-size: 13.3333px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (97 instances)

```css
.card {
  background-color: rgb(243, 243, 243);
  border-radius: 0px;
  box-shadow: rgba(221, 198, 202, 0.4) -3px 4px 14px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (47 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
}
```

### Navigation (32 instances)

```css
.navigatio {
  background-color: rgb(243, 243, 233);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (23 instances)

```css
.foote {
  background-color: rgb(243, 240, 239);
  color: rgb(227, 53, 41);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 14.2222px;
}
```

### Modals (1 instances)

```css
.modal {
  background-color: rgb(244, 206, 211);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (27 instances)

```css
.dropdown {
  background-color: rgb(243, 243, 233);
  border-radius: 0px;
  border-color: rgb(227, 53, 41);
  padding-top: 0px;
}
```

### Badges (6 instances)

```css
.badge {
  background-color: rgb(237, 226, 226);
  color: rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 50%;
}
```

### ProgressBars (3 instances)

```css
.progressBar {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 14.2222px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 7.11111px 7.11111px 7.11111px 7.11111px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 13.3333px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 13.3333px;
  font-weight: 400;
```

### Button — 6 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgb(227, 53, 41);
  color: rgb(0, 0, 238);
  padding: 9.77778px 17.7778px 8px 17.7778px;
  border-radius: 133.333px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

**Variant 2** (4 instances)

```css
  background: rgb(43, 103, 134);
  color: rgb(0, 0, 238);
  padding: 9.77778px 17.7778px 8px 17.7778px;
  border-radius: 133.333px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 238);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(237, 226, 226);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(237, 226, 226);
  font-size: 26.6667px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 238);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 7 instances, 1 variant

**Variant 1** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(243, 243, 243);
  color: rgb(0, 0, 0);
  padding: 21.3333px 0px 3.55556px 0px;
  border-radius: 3.55556px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 23 instances, 2 variants

**Variant 1** (20 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(146, 80, 38);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(146, 80, 38);
  font-size: 11px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(43, 103, 134);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(43, 103, 134);
  font-size: 85.3333px;
  font-weight: 400;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(105, 52, 19);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(105, 52, 19);
  font-size: 62.2222px;
  font-weight: 400;
```

### Card — 13 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgb(230, 223, 231);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 2.66667px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

**Variant 2** (9 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 8.88889px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(243, 243, 243);
  color: rgb(0, 0, 0);
  padding: 21.3333px 0px 3.55556px 0px;
  border-radius: 3.55556px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(246, 246, 237);
  color: rgb(0, 0, 0);
  padding: 42.6667px 0px 42.6667px 0px;
  border-radius: 8.88889px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 238);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(246, 246, 237);
  color: rgb(0, 0, 0);
  padding: 42.6667px 0px 42.6667px 0px;
  border-radius: 8.88889px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(43, 103, 134);
  color: rgb(246, 246, 237);
  padding: 6.22222px 10.6667px 5.33333px 10.6667px;
  border-radius: 0px;
  border: 0px none rgb(246, 246, 237);
  font-size: 10.6667px;
  font-weight: 500;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14.2222px;
  font-weight: 400;
```

### Link — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(43, 103, 134);
  color: rgb(0, 0, 238);
  padding: 42.6667px 0px 42.6667px 0px;
  border-radius: 8.88889px;
  border: 0px none rgb(0, 0, 238);
  font-size: 14.2222px;
  font-weight: 400;
```

## Layout System

**1 grid containers** and **76 flex containers** detected.

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 1x |

### Grid Templates

```css
grid-template-columns: 295.109px 295.125px 295.109px 295.125px;
gap: normal 14.2222px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 51x |
| column/nowrap | 25x |

**Gap values:** `normal 14.2222px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 16px | Yes | 0 | No | 7327px |
| tablet (768px) | 32.768px | Yes | 0 | No | 14946px |
| desktop (1280px) | 14.2222px | Yes | 0 | No | 11143px |
| wide (1920px) | 21.3333px | Yes | 0 | No | 16086px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Body font size: `16px` → `32.768px`
- H1 size: `32px` → `65.536px`
- Page height: `7327px` → `14946px`

**768px → 1280px** (tablet → desktop):
- Body font size: `32.768px` → `14.2222px`
- H1 size: `65.536px` → `28.4444px`
- Page height: `14946px` → `11143px`

**1280px → 1920px** (desktop → wide):
- Body font size: `14.2222px` → `21.3333px`
- H1 size: `28.4444px` → `42.6667px`
- Page height: `11143px` → `16086px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Dark Mode

The site has a distinct dark mode color scheme:

- **Primary:** `#2b6786`
- **Secondary:** `#e33529`
- **Backgrounds:** `#f4ced3`, `#f3f3e9`, `#f0b5be`, `#f3c3cb`, `#f6d2d8`, `#f3f3f3`, `#e6dfe7`, `#ead9ec`, `#eacdef`, `#d8b3df`, `#f6f6ed`, `#afd8fb`, `#2b6786`, `#f3f0ef`
- **Text:** `#000000`, `#e33529`, `#0000ee`, `#f3f3e9`, `#ede2e2`

### Dark Mode CSS Variables

```css
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
--font: "HelveticaNeueCyr-Roman";
--font-light: "HelveticaNeueCyr-Light";
--transition: 0.5s ease-in-out;
--transition-fast: 0.3 ease-in-out;
--transition-slow: 0.8s ease-in-out;
--my-ease: cubic-bezier(0.24,1,0.36,1);
--c-brown: #854720;
--c-light-brown: #925026;
--c-dark-brown: #693413;
--c-dark-yellow: #dcc060;
--c-yellow: #fff500;
--c-ultra-dark-yellow: #cfae3d;
--c-dark-yellow-04: #dcc06040;
--c-white: #f3f3f3;
--c-dark-white: #f6f6ed;
--c-dark-white2: #f3f0ef;
--c-light-purple: #e6dfe7;
--c-light-purple2: #ead9ec;
--c-light-purple3: #eacdef;
--c-light-purple4: #d8b3df;
--c-light-blue: #afd8fb;
--c-d-light-blue: #5b93b0;
--c-blue: #2b6786;
--c-dark-blue: #124e6d;
--c-gray: #f4f4ea;
--c-gray1: #f3f3e9;
--c-gray2: #ede2e2;
--c-red: #e33529;
--c-red2: #e93225;
--c-dark-red: #a02b22;
--c-light-pink: #f4ced3;
--c-pink: #f3c3cb;
--c-dark-pink: #f0b5be;
--c-light-pink2: #f6d2d8;
--c-light-pink3: #f6d1d8;
--z-header: 500;
--z-modal: 510;
--z-preloader: 1000;
--viewport: 1440;
--vw: 1280px;
--vh: 800px;
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Design System Score

**Overall: 80/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 10 !important rules — prefer specificity over overrides
- 67% of CSS is unused — consider purging
- 2555 duplicate CSS declarations

## Z-Index Map

**8 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,100000 | div.p.r.e.l.o.a.d.e.r, span.c.u.r.s.o.r.-.c.h.a.r.a.c.t.e.r, span.c.u.r.s.o.r.-.c.h.a.r.a.c.t.e.r |
| dropdown | 500,500 | header.h.e.a.d.e.r |
| sticky | 10,10 | a.i.n.s.t.-.b.l.o.c.k._._.f.o.u.n.d.-.u.s, button.p.r.e.l.o.a.d.e.r._._.b.a.l.l.-.w.r.a.p |
| base | -1,2 | div.h.e.a.d.e.r._._.m.e.n.u.-.o.v.e.r.l.a.y, svg.b.a.c.k.g.r.o.u.n.d.-.p.l.a.s.h, a.m.a.i.n.-.p.a.g.e._._.c.i.r.c.l.e.-.l.i.n.k |

**Issues:**
- [object Object]

## SVG Icons

**28 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| md | 4 |
| lg | 7 |
| xl | 17 |

**Icon colors:** `#FFF500`, `#A7A238`, `#E33529`, `#F3F3E9`, `white`, `#e33529`, `#854720`, `#EDE2E2`, `#F3F3F3`, `#F6F6ED`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| swiper-icons | self-hosted | 400 | normal |
| Bayon | self-hosted | 300 | normal |
| Neue Montreal | self-hosted | 500 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 8 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 5 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (11x), 4:3 (3x), 1.16:1 (1x), 1.18:1 (1x), 1.94:1 (1x)

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `450ms` | 450 |
| `xl` | `1s` | 1000 |
| `xxl` | `1.4s` | 1400 |

### Easing Families

- **linear** (2 uses) — `linear`
- **ease-out** (18 uses) — `cubic-bezier(0.24, 1, 0.36, 1)`
- **ease-in-out** (39 uses) — `ease`

## Component Anatomy

### card — 67 instances

**Slots:** media
**Sizes:** medium

### button — 35 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (balanced)

### Top CTA Verbs

- **try** (12)
- **book** (9)
- **pricing** (1)

### Button Copy Patterns

- "try it" (12×)
- "book now" (9×)
- "pricing page" (1×)

### Sample Headings

> A TIRED DOG IS

A HAPPY DOG!

YOUR TRUSTED IN-HOME PET CARE COMPANIONS!
> A tired dog is a happy dog!
> OUR SERVICES
> THE CARE YOUR PET DESERVES!
> HAVE QUESTIONS?
> A TIRED DOG IS

A HAPPY DOG!

YOUR TRUSTED IN-HOME PET CARE COMPANIONS!
> A tired dog is a happy dog!
> OUR SERVICES
> THE CARE YOUR PET DESERVES!
> HAVE QUESTIONS?

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** We specialize in providing reliable, compassionate, and personalized in-home pet care services tailored to meet the unique needs of your furry friends.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → faq → nav → nav → content → nav → hero → steps → testimonials → hero → pricing-table → faq → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | faq | A TIRED DOG IS

A HAPPY DOG!

YOUR TRUSTED IN-HOME PET CARE COMPANIONS! | 0.85 |
| 1 | nav | — | 0.4 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | content | A TIRED DOG IS

A HAPPY DOG!

YOUR TRUSTED IN-HOME PET CARE COMPANIONS! | 0.3 |
| 6 | hero | OUR SERVICES | 0.4 |
| 7 | steps | — | 0.75 |
| 8 | testimonials | THE CARE YOUR PET DESERVES! | 0.4 |
| 9 | hero | HAVE QUESTIONS? | 0.4 |
| 10 | pricing-table | — | 0.9 |
| 11 | faq | — | 0.85 |
| 12 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.367 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 662px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `photography` (confidence 0.196)
**Counts:** total 17, svg 0, icon 0, screenshot-like 0, photo-like 4
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Times New Roman` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
