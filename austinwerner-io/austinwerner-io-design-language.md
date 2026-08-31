# Design Language: Austin Werner | Tech Recruitment Agency | Since 2017

> Extracted from `https://austinwerner.io/` on August 20, 2026
> 1313 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#d9b915` | rgb(217, 185, 21) | hsl(50, 82%, 47%) | 16 |
| Secondary | `#ff6d36` | rgb(255, 109, 54) | hsl(16, 100%, 61%) | 2 |
| Accent | `#ffd100` | rgb(255, 209, 0) | hsl(49, 100%, 50%) | 4 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 1864 |
| `#ffffff` | hsl(0, 0%, 100%) | 610 |
| `#939393` | hsl(0, 0%, 58%) | 79 |
| `#1b1b1b` | hsl(0, 0%, 11%) | 23 |
| `#484848` | hsl(0, 0%, 28%) | 19 |
| `#9e9e9e` | hsl(0, 0%, 62%) | 12 |
| `#aaaaaa` | hsl(0, 0%, 67%) | 6 |
| `#292929` | hsl(0, 0%, 16%) | 5 |
| `#171717` | hsl(0, 0%, 9%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#010101`, `#1b1b1b`, `#292929`, `#171717`, `#040608`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#aaaaaa`, `#9e9e9e`, `#939393`, `#2d4156`, `#d9b915`

### Gradients

```css
background-image: linear-gradient(90deg, rgba(255, 109, 54, 0.2) 0%, rgba(255, 109, 54, 0) 100%), none;
```

```css
background-image: linear-gradient(90deg, rgba(79, 134, 240, 0) 0%, rgba(79, 134, 240, 0.2) 100%), none;
```

```css
background-image: linear-gradient(rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 88.51%);
```

```css
background-image: linear-gradient(179.99deg, rgb(27, 27, 27) 34.44%, rgb(19, 19, 19) 195.83%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 1864 |
| `#ffffff` | background, text, border | 610 |
| `#939393` | border, background, text | 79 |
| `#1b1b1b` | background | 23 |
| `#484848` | border, background | 19 |
| `#2d4156` | text, border | 17 |
| `#d9b915` | border, text, background | 16 |
| `#9e9e9e` | text, border | 12 |
| `#aaaaaa` | text, border | 6 |
| `#e9edf2` | border | 6 |
| `#292929` | border, background | 5 |
| `#ffd100` | background | 4 |
| `#ff6d36` | border | 2 |
| `#2bc6d9` | border | 1 |
| `#171717` | background | 1 |

## Typography

### Font Families

- **Times New Roman** — used for body (919 elements)
- **Sofia Pro** — used for body (212 elements)
- **Space Grotesk** — used for body (103 elements)
- **Arial** — used for body (35 elements)
- **Neue Machina** — used for all (27 elements)
- **Strawford** — used for body (9 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 70px | 4.375rem | 400 | 68px | normal | h1, h2, p |
| 50px | 3.125rem | 400 | normal | normal | h2 |
| 25px | 1.5625rem | 400 | 36px | normal | p |
| 24px | 1.5rem | 400 | 24px | -0.72px | p |
| 23.2px | 1.45rem | 400 | 27.84px | normal | button |
| 18px | 1.125rem | 300 | 25.2px | normal | p |
| 16.8px | 1.05rem | 600 | 20.16px | normal | div |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 15.2px | 0.95rem | 600 | 18.24px | normal | button |
| 14.4px | 0.9rem | 400 | 21.6px | normal | div, button, a |
| 14px | 0.875rem | 400 | normal | normal | p, a |
| 13.12px | 0.82rem | 600 | 15.744px | normal | button |
| 12.8px | 0.8rem | 400 | 15.36px | normal | th, td |
| 12px | 0.75rem | 400 | 14.4px | normal | p, span, label, a |
| 10px | 0.625rem | 600 | 12px | normal | span |

### Heading Scale

```css
h1 { font-size: 70px; font-weight: 400; line-height: 68px; }
h2 { font-size: 50px; font-weight: 400; line-height: normal; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (1257x), `300` (36x), `600` (19x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-5 | 5px | 0.3125rem |
| spacing-39 | 39px | 2.4375rem |
| spacing-46 | 46px | 2.875rem |
| spacing-55 | 55px | 3.4375rem |
| spacing-60 | 60px | 3.75rem |
| spacing-66 | 66px | 4.125rem |
| spacing-70 | 70px | 4.375rem |
| spacing-75 | 75px | 4.6875rem |
| spacing-80 | 80px | 5rem |
| spacing-84 | 84px | 5.25rem |
| spacing-90 | 90px | 5.625rem |
| spacing-97 | 97px | 6.0625rem |
| spacing-100 | 100px | 6.25rem |
| spacing-120 | 120px | 7.5rem |
| spacing-253 | 253px | 15.8125rem |
| spacing-265 | 265px | 16.5625rem |
| spacing-272 | 272px | 17rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 2 |
| md | 6px | 11 |
| full | 50px | 13 |
| full | 54px | 4 |
| full | 64px | 20 |
| full | 100px | 5 |

## Box Shadows

**xl** — blur: 30px
```css
box-shadow: rgba(2, 2, 3, 0.28) 0px 10px 30px 0px;
```

**xl** — blur: 27px
```css
box-shadow: rgba(3, 6, 9, 0.26) 0px 13px 27px -5px;
```

## CSS Custom Properties

### Colors

```css
--cc-webkit-scrollbar-bg: #cfd5db;
--cc-bg: #fff;
--cc-toggle-bg-readonly: #d5dee2;
--colors-aw-yellow: #FFD100;
--colors-gradient-3: linear-gradient(transparent, rgb(6, 6, 6) 100%);
--colors-aw-companies-turqouise-70: rgba(43, 198, 217, 0.7);
--cc-overlay-bg: rgba(4, 6, 8, .85);
--colors-aw-companies-turqouise-40: rgba(43, 198, 217, 0.4);
--colors-aw-yellow-cookie-consent-hover: #C5A70D;
--cc-btn-secondary-bg: #eaeff2;
--cc-toggle-knob-bg: #fff;
--colors-gray-10: #171717;
--colors-blue: #2967BC;
--colors-gradient-2: linear-gradient(180deg, rgba(83, 83, 83, 1) 50%,rgba(52, 52, 52, 1) 0%);
--cc-btn-primary-text: #fff;
--colors-aw-candidates-orange: #FF6D36;
--colors-gray-9: #9E9E9E;
--cc-cookie-category-block-bg-hover: #e9eff4;
--cc-btn-primary-bg: #2d4156;
--colors-aw-companies-turqouise-30: rgba(43, 198, 217, 0.3);
--cc-toggle-bg-on: #2d4156;
--colors-gray-2: #484848;
--colors-gray-6-01: rgba(27, 27, 27, 0.01);
--colors-gray-5: #202020;
--colors-aw-yellow-cookie-consent-50: #D9B91550;
--cc-toggle-bg-off: #919ea6;
--colors-white-20: rgba(255, 255, 255, .2);
--cc-btn-secondary-hover-bg: #d8e0e6;
--colors-gray-11: #C4C4C4;
--colors-gray-1-20: #93939320;
--cc-btn-primary-hover-bg: #1d2e38;
--colors-gray-7: #AAAAAA;
--cc-toggle-knob-icon-color: #ecf2fa;
--colors-white-30: rgba(255, 255, 255, .3);
--colors-aw-candidates-orange-50: rgba(255, 109, 54, 0.5);
--colors-aw-yellow-cookie-consent: #D9B915;
--colors-gray-1: #939393;
--colors-aw-black: #060606;
--colors-black: #000;
--colors-aw-candidates-orange-30: rgba(255, 109, 54, 0.3);
--colors-aw-companies-turqouise: #2BC6D9;
--colors-gray-6: #1B1B1B;
--colors-gradient-1: linear-gradient(180deg, #0D0D0D 0%, rgba(25, 25, 25, 0) 195.86%);
--cc-section-border: #f1f3f5;
--colors-purple: #A951F0;
--colors-aw-yellow-cookie-consent-20: #D9B91520;
--cc-cookie-category-block-bg: #f0f4f7;
--cc-btn-secondary-text: #2d4156;
--cc-webkit-scrollbar-bg-hover: #9199a0;
--colors-gray-4: #191919;
--colors-gradient-candidate-orange: linear-gradient(0deg, rgba(255, 109, 54, 0) 0%, rgba(255, 109, 54, 1)100%);
--colors-aw-candidates-orange-40: rgba(255, 109, 54, 0.4);
--colors-gray-8: #8F8F8F;
--colors-aw-candidates-orange-70: rgba(255, 109, 54, 0.7);
--colors-gray-3: #292929;
--colors-red: #EF0B0B;
--colors-white: #ffffff;
--cc-cookie-table-border: #e9edf2;
--colors-gradient-4: linear-gradient(180.13deg, #1B1B1B -7.95%, #050505 195.54%);
--colors-aw-companies-turqouise-50: rgba(43, 198, 217, 0.5);
```

### Spacing

```css
--space-gutter: 20px;
--sizes-gutter: 20px;
```

### Typography

```css
--cc-text: #2d4156;
--cc-block-text: #2d4156;
```

### Shadows

```css
--shadows-focusAndError: 0 0 0 2px #EF0B0B;
--shadows-error: 0 0 0 1px #EF0B0B;
--shadows-focus: 0 0 0 2px rgba(120,120,120, 9);
```

### Other

```css
--zIndices-header: 100;
--zIndices-modal: 101;
--transitions-default: 0.3s ease-out;
--zIndices-positive: 1;
--transitions-longer: 0.7s ease-out;
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
| sm | 688px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.3s`, `0.5s`, `0.7s`, `0.9s`, `0.8s`, `0.4s`, `1.3s`, `1s`, `0.25s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: filter 0.3s ease-out;
transition: opacity 0.3s ease-out;
transition: transform 0.3s ease-out 0.5s;
transition: transform 0.7s ease-out;
transition: transform 0.3s ease-out;
transition: background-color 0.3s ease-out, transform 0.3s ease-out;
transition: opacity 0.3s ease-in-out;
transition: opacity 0.7s ease-out;
transition: 0.7s ease-out;
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (19 instances)

```css
.button {
  background-color: rgb(217, 185, 21);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 600;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 4px;
}
```

### Cards (2 instances)

```css
.card {
  background-color: rgb(27, 27, 27);
  border-radius: 5.6px;
  box-shadow: rgba(2, 2, 3, 0.28) 0px 10px 30px 0px;
  padding-top: 17.6px;
  padding-right: 28.8px;
}
```

### Inputs (9 instances)

```css
.input {
  background-color: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  border-radius: 64px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (60 instances)

```css
.link {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigatio {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (1 instances)

```css
.foote {
  background-color: rgb(23, 23, 23);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (2 instances)

```css
.modal {
  background-color: rgb(27, 27, 27);
  border-radius: 5.6px;
  box-shadow: rgba(2, 2, 3, 0.28) 0px 10px 30px 0px;
  padding-top: 17.6px;
  padding-right: 28.8px;
  max-width: 387.2px;
}
```

### Tables (5 instances)

```css
.table {
  border-color: rgb(255, 255, 255);
  cell-style: [object Object];
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 17px 22px 17px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 54px;
  border: 1px solid rgb(147, 147, 147);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 17px 0px 17px 22px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
  padding: 21px 21px 18px 21px;
  border-radius: 5px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
```

### Button — 12 instances, 3 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(217, 185, 21);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(45, 65, 86) rgb(45, 65, 86) rgb(217, 185, 21);
  font-size: 14.4px;
  font-weight: 600;
```

**Variant 2** (4 instances)

```css
  background: rgb(217, 185, 21);
  color: rgb(255, 255, 255);
  padding: 13.12px 22.304px 13.12px 22.304px;
  border-radius: 4px;
  border: 2px solid rgb(217, 185, 21);
  font-size: 13.12px;
  font-weight: 600;
```

**Variant 3** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 13.12px 22.304px 13.12px 22.304px;
  border-radius: 4px;
  border: 1px solid rgb(147, 147, 147);
  font-size: 13.12px;
  font-weight: 600;
```

## Layout System

**2 grid containers** and **146 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1920px | 20px |
| 100% | 0px |
| 550px | 0px |
| 620px | 0px |
| 1184px | 20px |
| 380px | 0px |
| 615px | 0px |
| 600px | 0px |
| 1400px | 0px |
| 720px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 2x |

### Grid Templates

```css
grid-template-columns: 250px 250px 250px 0px;
grid-template-columns: 250px 250px 250px 0px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 118x |
| column/nowrap | 20x |
| row/wrap | 7x |
| column/wrap | 1x |

**Gap values:** `16px`, `20px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 16px | No | 1 | Yes | 9808px |
| tablet (768px) | 16px | No | 1 | Yes | 9801px |
| desktop (1280px) | 16px | Yes | 4 | No | 9897px |
| wide (1920px) | 16px | Yes | 4 | No | 9897px |

### Breakpoint Changes

**768px → 1280px** (tablet → desktop):
- H1 size: `36px` → `70px`
- Nav visibility: `hidden` → `visible`
- Hamburger menu: `shown` → `hidden`
- Max grid columns: `1` → `4`

## Interaction States

### Button States

**"Let me choose"**
```css
/* Hover */
color: rgb(217, 185, 21) → rgb(197, 167, 13);
border-color: rgb(45, 65, 86) rgb(45, 65, 86) rgb(217, 185, 21) → rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(197, 167, 13);
outline: rgb(217, 185, 21) none 3px → rgb(197, 167, 13) none 3px;
```
```css
/* Focus */
color: rgb(217, 185, 21) → rgb(197, 167, 13);
border-color: rgb(45, 65, 86) rgb(45, 65, 86) rgb(217, 185, 21) → rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(197, 167, 13);
outline: rgb(217, 185, 21) none 3px → rgb(197, 167, 13) none 3px;
```

**"Accept all"**
```css
/* Hover */
background-color: rgb(217, 185, 21) → rgb(203, 173, 16);
border-color: rgb(217, 185, 21) → rgb(197, 167, 13);
```
```css
/* Focus */
background-color: rgb(217, 185, 21) → rgb(197, 167, 13);
border-color: rgb(217, 185, 21) → rgb(197, 167, 13);
```

**"Reject all"**
```css
/* Hover */
background-color: rgba(0, 0, 0, 0) → rgba(147, 147, 147, 0.07);
```
```css
/* Focus */
background-color: rgba(0, 0, 0, 0) → rgba(147, 147, 147, 0.125);
```

### Input Focus

```css
box-shadow: none → rgb(120, 120, 120) 0px 0px 0px 2px;
```

## Accessibility (WCAG 2.1)

**Overall Score: 0%** — 0 passing, 2 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#d9b915` | 1.93:1 | FAIL | button (2x) |

## Dark Mode

The site has a distinct dark mode color scheme:

- **Primary:** `#d9b915`
- **Secondary:** `#ff6d36`
- **Backgrounds:** `#ffffff`, `#010101`, `#1b1b1b`, `#292929`, `#171717`, `#040608`
- **Text:** `#000000`, `#ffffff`, `#aaaaaa`, `#9e9e9e`, `#939393`

### Dark Mode CSS Variables

```css
--cc-webkit-scrollbar-bg: #cfd5db;
--cc-bg: #fff;
--cc-toggle-bg-readonly: #d5dee2;
--colors-aw-yellow: #FFD100;
--colors-gradient-3: linear-gradient(transparent, rgb(6, 6, 6) 100%);
--colors-aw-companies-turqouise-70: rgba(43, 198, 217, 0.7);
--cc-overlay-bg: rgba(4, 6, 8, .85);
--colors-aw-companies-turqouise-40: rgba(43, 198, 217, 0.4);
--colors-aw-yellow-cookie-consent-hover: #C5A70D;
--cc-btn-secondary-bg: #eaeff2;
--cc-toggle-knob-bg: #fff;
--colors-gray-10: #171717;
--colors-blue: #2967BC;
--colors-gradient-2: linear-gradient(180deg, rgba(83, 83, 83, 1) 50%,rgba(52, 52, 52, 1) 0%);
--cc-btn-primary-text: #fff;
--colors-aw-candidates-orange: #FF6D36;
--colors-gray-9: #9E9E9E;
--cc-cookie-category-block-bg-hover: #e9eff4;
--cc-btn-primary-bg: #2d4156;
--colors-aw-companies-turqouise-30: rgba(43, 198, 217, 0.3);
--cc-toggle-bg-on: #2d4156;
--colors-gray-2: #484848;
--colors-gray-6-01: rgba(27, 27, 27, 0.01);
--colors-gray-5: #202020;
--colors-aw-yellow-cookie-consent-50: #D9B91550;
--cc-toggle-bg-off: #919ea6;
--colors-white-20: rgba(255, 255, 255, .2);
--cc-btn-secondary-hover-bg: #d8e0e6;
--colors-gray-11: #C4C4C4;
--colors-gray-1-20: #93939320;
--cc-btn-primary-hover-bg: #1d2e38;
--colors-gray-7: #AAAAAA;
--cc-toggle-knob-icon-color: #ecf2fa;
--colors-white-30: rgba(255, 255, 255, .3);
--colors-aw-candidates-orange-50: rgba(255, 109, 54, 0.5);
--colors-aw-yellow-cookie-consent: #D9B915;
--colors-gray-1: #939393;
--colors-aw-black: #060606;
--colors-black: #000;
--colors-aw-candidates-orange-30: rgba(255, 109, 54, 0.3);
--colors-aw-companies-turqouise: #2BC6D9;
--colors-gray-6: #1B1B1B;
--colors-gradient-1: linear-gradient(180deg, #0D0D0D 0%, rgba(25, 25, 25, 0) 195.86%);
--cc-section-border: #f1f3f5;
--colors-purple: #A951F0;
--colors-aw-yellow-cookie-consent-20: #D9B91520;
--cc-cookie-category-block-bg: #f0f4f7;
--cc-webkit-scrollbar-bg-hover: #9199a0;
--cc-btn-secondary-text: #2d4156;
--colors-gray-4: #191919;
--colors-gradient-candidate-orange: linear-gradient(0deg, rgba(255, 109, 54, 0) 0%, rgba(255, 109, 54, 1)100%);
--colors-aw-candidates-orange-40: rgba(255, 109, 54, 0.4);
--colors-gray-8: #8F8F8F;
--colors-red: #EF0B0B;
--colors-aw-candidates-orange-70: rgba(255, 109, 54, 0.7);
--colors-gray-3: #292929;
--colors-white: #ffffff;
--cc-cookie-table-border: #e9edf2;
--colors-gradient-4: linear-gradient(180.13deg, #1B1B1B -7.95%, #050505 195.54%);
--colors-aw-companies-turqouise-50: rgba(43, 198, 217, 0.5);
--space-gutter: 20px;
--sizes-gutter: 20px;
--cc-text: #2d4156;
--cc-block-text: #2d4156;
--shadows-focusAndError: 0 0 0 2px #EF0B0B;
--shadows-error: 0 0 0 1px #EF0B0B;
--shadows-focus: 0 0 0 2px rgba(120,120,120, 9);
--zIndices-header: 100;
--zIndices-modal: 101;
--transitions-default: 0.3s ease-out;
--zIndices-positive: 1;
--transitions-longer: 0.7s ease-out;
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Design System Score

**Overall: 64/100 (Grade: D)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 0/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Good CSS variable tokenization

**Issues:**
- 6 font families — consider limiting to 2 (heading + body)
- 2 WCAG contrast failures
- 41 !important rules — prefer specificity over overrides
- 67% of CSS is unused — consider purging
- 3434 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 2 | brand |
| linear | 90deg | 2 | brand |
| linear | — | 2 | brand |
| linear | 179.99deg | 2 | brand |

```css
background: linear-gradient(90deg, rgba(255, 109, 54, 0.2) 0%, rgba(255, 109, 54, 0) 100%);
background: linear-gradient(90deg, rgba(79, 134, 240, 0) 0%, rgba(79, 134, 240, 0.2) 100%);
background: linear-gradient(rgba(28, 28, 28, 0) 0%, rgb(28, 28, 28) 88.51%);
background: linear-gradient(179.99deg, rgb(27, 27, 27) 34.44%, rgb(19, 19, 19) 195.83%);
```

## Z-Index Map

**11 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000000,1000000 | div.c.-.-.a.n.i.m |
| dropdown | 100,200 | header.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.W.u.x.M.m.-.c.s.s, a.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.k.x.l.k.u.e.-.c.s.s, a.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.k.Z.U.G.T.l.-.c.s.s |
| base | -1,3 | div.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.d.d.o.W.x.o.-.c.s.s, div.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.f.O.M.C.k.y.-.c.s.s, div.c.-.P.J.L.V. .c.-.P.J.L.V.-.i.f.O.M.C.k.y.-.c.s.s |

**Issues:**
- [object Object]

## SVG Icons

**19 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 4 |
| lg | 1 |
| xl | 14 |

**Icon colors:** `#FFD100`, `url(#b)`, `url(#c)`, `#fff`, `#605F5F`, `url(#a)`, `#5f6368`, `#4285f4`, `#34a853`, `#fbbc04`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Space Grotesk | self-hosted | 300, 400, 500, 600, 700 | normal |
| Neue Machina | self-hosted | 300, 400, 700 | normal |
| slick | self-hosted | 400 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 6 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 5 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: contain, borderRadius: 0px, shape: square |

**Aspect ratios:** 0.3:1 (5x), 1:1 (3x), 6:1 (2x), 3.2:1 (1x), 3.24:1 (1x)

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `250ms` | 250 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `800ms` | 800 |
| `xxl` | `1.3s` | 1300 |

### Easing Families

- **ease-in-out** (273 uses) — `ease`
- **linear** (5 uses) — `linear`

## Component Anatomy

### button — 20 instances

**Slots:** label, icon
**Variants:** link

| variant | count | sample label |
|---|---|---|
| default | 19 | Skip |
| link | 1 | Let me choose |

## Brand Voice

**Tone:** friendly · **Pronoun:** we→you · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **accept** (2)
- **reject** (2)
- **skip** (1)
- **see** (1)
- **send** (1)
- **subscribe** (1)
- **let** (1)
- **strictly** (1)

### Button Copy Patterns

- "accept all" (2×)
- "reject all" (2×)
- "skip" (1×)
- "see the stories of our candidates" (1×)
- "send" (1×)
- "subscribe" (1×)
- "let me choose" (1×)
- "strictly necessary cookies" (1×)
- "performance and analytics cookies" (1×)
- "advertisement and targeting cookies" (1×)

### Sample Headings

> People connecting people
> People connecting people
> Who do we partner with?
> Who do we partner with?
> We'd love to connect.
> We'd love to connect.
> Get in touch
> Get in touch

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Austin Werner is Leading tech recruitment agency specializing in Fintech, Web3 & Blockchain. We connect talented people with innovative businesses.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → hero → nav → hero → nav → hero → nav → testimonial → nav → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | hero | People connecting people | 0.4 |
| 3 | nav | People connecting people | 0.4 |
| 4 | hero | Who do we partner with? | 0.4 |
| 5 | nav | Who do we partner with? | 0.4 |
| 6 | hero | We'd love to connect. | 0.4 |
| 7 | nav | We'd love to connect. | 0.4 |
| 8 | testimonial | Get in touch | 0.8 |
| 9 | nav | Get in touch | 0.4 |
| 10 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.267 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 12, svg 0, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** tall
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Times New Roman` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
