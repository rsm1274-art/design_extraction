# Design Language: Poolside

> Extracted from `https://poolside.ai` on August 21, 2026
> 1283 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#fbfaf6` | rgb(251, 250, 246) | hsl(48, 38%, 97%) | 148 |
| Secondary | `#3b2c00` | rgb(59, 44, 0) | hsl(45, 100%, 12%) | 7 |
| Accent | `#ff5f57` | rgb(255, 95, 87) | hsl(3, 100%, 67%) | 3 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 1666 |
| `#6f6d69` | hsl(40, 3%, 42%) | 594 |
| `#93908b` | hsl(38, 4%, 56%) | 67 |
| `#b3b0a9` | hsl(42, 6%, 68%) | 8 |
| `#eeede6` | hsl(53, 19%, 92%) | 1 |
| `#dad9d2` | hsl(53, 10%, 84%) | 1 |

### Background Colors

Used on large-area elements: `#fbfaf6`, `#f7f6ef`, `#ffffff`

### Text Colors

Text color palette: `#000000`, `#fbfaf6`, `#6f6d69`, `#b3b0a9`, `#ffffff`, `#93908b`, `#4137ff`

### Gradients

```css
background-image: radial-gradient(circle at 100% 0px, rgba(0, 0, 0, 0) 9.25px, rgb(255, 255, 255) 10px);
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0%, color(srgb 1 1 1 / 0.96) 30%, color(srgb 1 1 1 / 0.72) 62%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(in oklab, rgb(247, 246, 239) 0%, rgb(251, 250, 246) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 1666 |
| `#6f6d69` | border, text, background | 594 |
| `#fbfaf6` | background, text, border | 148 |
| `#93908b` | text, border | 67 |
| `#b3b0a9` | text, border | 8 |
| `#3b2c00` | border | 7 |
| `#ff5f57` | background | 3 |
| `#ffbd2e` | background | 3 |
| `#28c840` | background | 3 |
| `#0e0aff` | border | 2 |
| `#7c00fa` | border | 2 |
| `#4137ff` | text, border | 2 |
| `#eeede6` | border | 1 |
| `#dad9d2` | border | 1 |

## Typography

### Font Families

- **Untitled Sans** — used for all (1206 elements)
- **Jetbrains Mono** — used for body (77 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 32px | 2rem | 400 | 41.6px | -1.28px | h1, span, a, div |
| 24px | 1.5rem | 400 | 36px | -0.72px | h2, strong, h4, h3 |
| 20px | 1.25rem | 400 | 28px | -0.6px | p, strong, h4 |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 15px | 0.9375rem | 400 | 18px | -0.15px | ul, div, a, span |
| 14px | 0.875rem | 400 | 14px | -0.14px | div, a, svg, g |
| 13px | 0.8125rem | 500 | 10px | normal | header, div, span |
| 12px | 0.75rem | 500 | 19.2px | normal | button, div, svg, path |
| 11px | 0.6875rem | 400 | 16.5px | normal | div, svg, path, span |

### Heading Scale

```css
h1 { font-size: 32px; font-weight: 400; line-height: 41.6px; }
h2 { font-size: 24px; font-weight: 400; line-height: 36px; }
h4 { font-size: 20px; font-weight: 400; line-height: 28px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 500; line-height: 19.2px; }
```

### Font Weights in Use

`400` (1224x), `500` (59x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-28 | 28px | 1.75rem |
| spacing-32 | 32px | 2rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-57 | 57px | 3.5625rem |
| spacing-76 | 76px | 4.75rem |
| spacing-80 | 80px | 5rem |
| spacing-117 | 117px | 7.3125rem |
| spacing-133 | 133px | 8.3125rem |
| spacing-196 | 196px | 12.25rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 2 |
| sm | 4px | 2 |
| md | 10px | 3 |
| xl | 20px | 2 |
| xl | 23px | 1 |
| full | 50px | 9 |
| full | 9999px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(59, 44, 0, 0.08) 0px 0px 0px 1px, rgba(43, 38, 26, 0.02) 0px 1px 1px 0px, rgba(43, 39, 25, 0.02) 0px 2px 4px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: color(srgb 0 0 0 / 0.12) 0px 0px 0px 0.5px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(43, 38, 26, 0.04) 0px 0px 0px 1px, rgba(43, 38, 26, 0.04) 0px 0px 5px 0px, rgba(43, 38, 26, 0.04) 0px 2px 3px 0px, rgba(43, 38, 26, 0.055) 0px 8px 16px 0px, rgba(43, 38, 26, 0.07) 0px 20px 36px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(59, 44, 0, 0.08) 0px 0px 0px 1px inset;
```

**xs** — blur: 0px
```css
box-shadow: rgb(238, 237, 230) 1px 1px 0px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
```

## CSS Custom Properties

### Colors

```css
--color-laguna-s: color(display-p3 .6628 0 .9553);
--tw-ring-shadow: 0 0 #0000;
--color-pri-050: color(display-p3 .937 .9224 .9976);
--color-alpha-500: #140e0866;
--color-sec-700: color(display-p3 1 .3686 .1373);
--color-code-parameter: #c36f00;
--color-pri-300: color(display-p3 .6078 .6078 .9961);
--color-mono-400: #dad9d2;
--color-pri-700: color(display-p3 .2863 .4588 1);
--shadow-border: 0px 0px 0px 1px #3b2c0014,0px 1px 1px 0px #2b261a05,0px 2px 4px 0px #2b271905;
--color-divider: #000;
--color-laguna-xs: color(display-p3 .2549 .2157 1);
--color-events-purple: color(display-p3 .1804 .1294 1);
--tw-inset-ring-shadow: 0 0 #0000;
--color-code-comment: #848484;
--color-laguna-m: color(display-p3 1 0 .0196);
--color-sec-300: color(display-p3 .9961 .8235 .3255);
--color-code-foreground: #000;
--color-pri-900: color(display-p3 .0039 0 .502);
--color-mono-100: #fbfaf6;
--color-laguna-xs-21: color(display-p3 .1529 .1216 .6);
--color-inset-border: #3b2c0014;
--color-events-orange: color(display-p3 1 .4812 .3647);
--color-mono-500: #b3b0a9;
--color-alpha-100: #3629001f;
--color-model-yellow: color(display-p3 1 .7256 .0315);
--tw-ring-offset-color: #fff;
--color-sec-800: color(display-p3 1 .1804 .1804);
--color-sec-400: color(display-p3 1 .7333 .3059);
--color-model-orange: color(display-p3 1 .4863 0);
--color-mono-900: #000;
--color-sec-200: color(display-p3 .9961 .9137 .349);
--color-pri-100: color(display-p3 .8452 .7443 1);
--color-sec-050: color(display-p3 1 1 .8235);
--color-background: #fbfaf6;
--tw-ring-offset-width: 0px;
--color-pri-800: color(display-p3 .2549 .2157 1);
--color-sec-100: color(display-p3 .9961 1 .3686);
--color-code-punctuation: #000;
--color-alpha-border: #3629001f;
--color-code-keyword: #d12a2a;
--color-mono-800: #4e4b48;
--color-mono-700: #6f6d69;
--color-tertiary: #93908b;
--color-events-pink: color(display-p3 .7333 .3373 1);
--color-code-type: #038a4b;
--color-divider-subtle: #3629001f;
--color-code-constant: #00058c;
--tw-ring-offset-shadow: 0 0 #0000;
--color-model-green: color(display-p3 .0043 .8336 .0873);
--color-code-function: #3b31ff;
--color-sec-900: color(display-p3 .6471 .0039 .1333);
--color-sec-600: color(display-p3 1 .502 .251);
--color-pri-400: color(display-p3 .4588 .5882 1);
--color-mono-200: #f7f6ef;
--color-pri-800-rgb: 65,55,255;
--color-mono-300: #eeede6;
--color-pri-600: color(display-p3 .2941 .5176 1);
--shadow-inset-border: 0px 0px 0px 1px #3b2c0014/**/inset;
--color-mono-600: #93908b;
--color-alpha-050: #3b2c0014;
--color-focus: color(display-p3 .2549 .2157 1);
--color-selection: color(display-p3 .6078 .6078 .9961);
--color-secondary: #6f6d69;
--color-dots: color(display-p3 .8452 .7443 1);
--color-pri-200: color(display-p3 .7765 .6235 .9882);
--color-pri-500: color(display-p3 .298 .5686 1);
--tw-border-style: solid;
--color-events-green: color(display-p3 .4039 .6824 0);
--color-primary: #000;
--color-alpha-300: #1e14003d;
--color-code-variable: #286fe8;
--color-events-past: color(display-p3 .5765 .5647 .5451);
--color-code-string: #6c0081;
--color-code-background: #f7f6ef;
--color-mono-000: #fff;
--color-sec-500: color(display-p3 1 .651 .2863);
--color-events-teal: color(display-p3 .0941 .6627 .7137);
```

### Spacing

```css
--font-size-48: 32px;
--font-size-36: 28px;
--font-size-32: 24px;
--font-size-24: 20px;
--font-size-20: 18px;
--font-size-16: 16px;
--font-size-14: 14px;
--font-size-13: 13px;
--font-size-12: 12px;
--text-nav--letter-spacing: 0;
--text-code--letter-spacing: 0;
--spacing-page-title-offset: 57px;
--text-list--letter-spacing: -.03em;
--text-support--letter-spacing: 0;
--spacing-article-gap-x: 128px;
--text-story--letter-spacing: 0;
--spacing-page-title-height: 0px;
--spacing-article-contents-width: 248px;
--spacing-article-subsection-gap: 32px;
--text-subheading--letter-spacing: -.03em;
--text-quote--letter-spacing: -.01em;
--spacing-section-gap-sm: 24px;
--spacing-mobile-header-height: 0px;
--spacing-p: 1em;
--spacing-list-cell-height: 80px;
--text-inline--letter-spacing: 0;
--spacing-gap-sm: 20px;
--spacing-page-left: 80px;
--spacing-page-bottom: 40px;
--text-title--letter-spacing: -.04em;
--spacing-tile-gap-x: 24px;
--spacing-footer-clip-height: 238px;
--spacing-tile-gap-y: 48px;
--spacing-title-top: 142px;
--spacing: .25rem;
--spacing-page-top: 48px;
--text-footnote--letter-spacing: 0;
--spacing-nav-height: 212px;
--spacing-nav-width: 160px;
--spacing-page-max-w: 1440px;
--spacing-section-gap-lg: 196px;
--spacing-section-gap-md: 64px;
--text-heading--letter-spacing: -.04em;
--text-callout--letter-spacing: -.04em;
--spacing-page-right: 80px;
--tw-space-y-reverse: 0;
--text-detail--letter-spacing: 0;
```

### Typography

```css
--text-quote: 24px;
--text-footnote: 12px;
--text-lg: 1.125rem;
--text-subheading--line-height: 1.5;
--text-base--line-height: 1.5;
--font-mono: "Jetbrains Mono",ui-monospace,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Mono","Source Code Pro","Fira Mono","Droid Sans Mono","Consolas","Courier New",monospace;
--text-support: 14px;
--text-list: 20px;
--text-quote--line-height: 1.4;
--text-lg--line-height: calc(1.75/1.125);
--text-title--line-height: 1.2;
--font-sans: "Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
--font-weight-bold: 700;
--text-heading--line-height: 1.3;
--text-inline: 14px;
--default-font-family: "Untitled Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
--text-xs--line-height: calc(1/.75);
--font-weight-light: 300;
--text-story--line-height: 1.5;
--text-xl: 1.25rem;
--text-inline--font-weight: 500;
--text-nav: 13px;
--text-story: 16px;
--text-code: 12px;
--text-callout--line-height: 1.3;
--text-detail--line-height: 1.6;
--text-footnote--line-height: 1.6;
--text-callout: 36px;
--text-inline--line-height: 1.6;
--text-nav--font-weight: 500;
--text-list--line-height: 1.4;
--text-subheading: 24px;
--text-detail: 12px;
--text-xl--line-height: calc(1.75/1.25);
--font-weight-semibold: 600;
--text-heading: 32px;
--text-sm: .875rem;
--text-support--line-height: 1.6;
--text-nav--line-height: 10px;
--tracking-normal: 0em;
--text-title: 48px;
--text-sm--line-height: calc(1.25/.875);
--text-xs: .75rem;
--font-weight-medium: 500;
--font-weight-normal: 400;
--font-serif: "Untitled Serif",Iowan Old Style,Apple Garamond,Baskerville,Times New Roman,Droid Serif,Times,Source Serif Pro,serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
--text-base: 1rem;
--default-mono-font-family: "Jetbrains Mono",ui-monospace,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Mono","Source Code Pro","Fira Mono","Droid Sans Mono","Consolas","Courier New",monospace;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--radius-sm: .25rem;
--radius-lg: .5rem;
--radius-xl: .75rem;
```

### Other

```css
--container-md: 28rem;
--tw-outline-style: solid;
--ease-in: cubic-bezier(.4,0,1,1);
--tw-divide-x-reverse: 0;
--tw-gradient-from: rgba(0, 0, 0, 0);
--tw-gradient-to: rgba(0, 0, 0, 0);
--pe-tip-slide: 18px;
--tw-scale-z: 1;
--blur-2xl: 40px;
--tw-gradient-via-position: 50%;
--tw-rotate-x: rotateX(0);
--tw-gradient-to-position: 100%;
--tw-rotate-z: rotateZ(0);
--default-transition-duration: .15s;
--tw-skew-y: skewY(0);
--tw-gradient-from-position: 0%;
--ease-in-out: cubic-bezier(.4,0,.2,1);
--default-transition-timing-function: cubic-bezier(.4,0,.2,1);
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0,0,.2,1);
--container-4xl: 56rem;
--tw-content: "";
--tw-rotate-y: rotateY(0);
--tw-skew-x: skewX(0);
--tw-divide-y-reverse: 0;
--tw-translate-x: 0;
--tw-scale-x: 1;
```

### Semantic

```css
--color-model-green: color(display-p3 .0043 .8336 .0873);
--color-events-green: color(display-p3 .4039 .6824 0);
--color-model-yellow: color(display-p3 1 .7256 .0315);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 520px | max-width |
| 560px | 560px | max-width |
| sm | 600px | max-width |
| sm | 640px | max-width |
| sm | 700px | max-width |
| md | 720px | max-width |
| md | 760px | max-width |
| md | 768px | min-width |
| 860px | 860px | max-width |
| 870px | 870px | max-width |
| lg | 1024px | min-width |
| 1200px | 1200px | max-width |
| 1440px | 1440px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `ease`

**Durations:** `0.1s`, `1s`, `0.12s`, `0.08s`, `0.3s`, `0.5s`, `0.2s`

### Common Transitions

```css
transition: all;
transition: color 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), fill 0.1s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: scale 0.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.12s;
transition: filter 0.08s ease-out;
transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**svelte-g1t9x-fade-in**
```css
@keyframes svelte-g1t9x-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**svelte-g1t9x-one**
```css
@keyframes svelte-g1t9x-one {
  0% { width: 1px; height: 1px; border-color: transparent; x: var(--x1); y: var(--y1); }
  100% { width: 75%; height: 1px; border-color: transparent; x: var(--x2); y: var(--y1); }
}
```

**svelte-g1t9x-two**
```css
@keyframes svelte-g1t9x-two {
  0% { width: 75%; height: 1px; x: var(--x2); y: var(--y1); border-color: transparent; }
  100% { width: 100%; height: 75%; x: var(--x3); y: var(--y2); border-color: var(--window-border-color); }
}
```

**svelte-g1t9x-three**
```css
@keyframes svelte-g1t9x-three {
  0% { height: 75%; width: 100%; x: var(--x3); y: var(--y2); }
  100% { height: 100%; width: 100%; x: var(--x3); y: var(--y3); }
}
```

**svelte-g1t9x-top-one**
```css
@keyframes svelte-g1t9x-top-one {
  0% { border-top-color: var(--window-border-color); }
  100% { border-top-color: var(--window-border-color); }
}
```

**svelte-g1t9x-top-two**
```css
@keyframes svelte-g1t9x-top-two {
  0% { border-top-color: var(--window-border-color); }
  100% { border-color: var(--window-border-color); }
}
```

**svelte-g1t9x-bottom-one**
```css
@keyframes svelte-g1t9x-bottom-one {
  0% { border-bottom-color: var(--window-border-color); }
  100% { border-bottom-color: var(--window-border-color); }
}
```

**svelte-g1t9x-bottom-two**
```css
@keyframes svelte-g1t9x-bottom-two {
  0% { border-bottom-color: var(--window-border-color); }
  100% { border-color: var(--window-border-color); }
}
```

**svelte-2xbabx-clip**
```css
@keyframes svelte-2xbabx-clip {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0px); }
}
```

**svelte-ma5wlx-reveal-body**
```css
@keyframes svelte-ma5wlx-reveal-body {
  0% { opacity: 0; transform: translateY(-4px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (11 instances)

```css
.buttons {
  background-color: color(display-p3 0.2549 0.2157 1);
  color: rgb(111, 109, 105);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 4px;
  border-radius: 0px;
}
```

### Cards (3 instances)

```css
.cards {
  background-color: rgb(251, 250, 246);
  border-radius: 20px;
  box-shadow: rgba(59, 44, 0, 0.08) 0px 0px 0px 1px, rgba(43, 38, 26, 0.02) 0px 1px 1px 0px, rgba(43, 39, 25, 0.02) 0px 2px 4px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (3 instances)

```css
.inputs {
  color: rgb(147, 144, 139);
  border-color: rgb(147, 144, 139);
  border-radius: 0px;
  font-size: 15px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (36 instances)

```css
.links {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (14 instances)

```css
.navigation {
  background-color: color(display-p3 0.2549 0.2157 1);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
}
```

### Footer (1 instances)

```css
.footer {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Badges (15 instances)

```css
.badges {
  background-color: color(display-p3 0.2549 0.2157 1);
  color: rgb(0, 0, 0);
  font-size: 13px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (3 instances)

```css
.tabs {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: color(display-p3 0.2549 0.2157 1);
  color: rgb(251, 250, 246);
  padding: 0px 12px 0px 12px;
  border-radius: 0px;
  border: 0px solid rgb(251, 250, 246);
  font-size: 14px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 12px 0px 12px;
  border-radius: 0px;
  border: 1px solid rgba(54, 41, 0, 0.12);
  font-size: 14px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 25%;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(111, 109, 105);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(111, 109, 105);
  font-size: 15px;
  font-weight: 400;
```

## Layout System

**10 grid containers** and **144 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1440px | 80px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 6x |
| 3-column | 3x |
| 1-column | 1x |

### Grid Templates

```css
grid-template-columns: 304px 304px 304px;
gap: 24px;
grid-template-columns: 880px;
grid-template-columns: 304px 304px 304px;
gap: 24px;
grid-template-columns: 324px 160px 324px;
gap: 12px;
grid-template-columns: 79.1875px 752.812px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 31x |
| row/nowrap | 110x |
| row/wrap | 3x |

**Gap values:** `10px`, `12px`, `14px`, `15px`, `16px`, `196px`, `196px normal`, `20px`, `24px`, `2px`, `32px`, `32px 48px`, `3px`, `48px`, `4px`, `6px`, `8px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#000000` | `#fbfaf6` | 20.11:1 | AAA |

## Design System Score

**Overall: 89/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 92/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 323 !important rules — prefer specificity over overrides
- 2303 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | circle at 100% 0px | 2 | brand |
| linear | — | 4 | bold |
| linear | — | 3 | bold |

```css
background: radial-gradient(circle at 100% 0px, rgba(0, 0, 0, 0) 9.25px, rgb(255, 255, 255) 10px);
background: linear-gradient(rgb(255, 255, 255) 0%, color(srgb 1 1 1 / 0.96) 30%, color(srgb 1 1 1 / 0.72) 62%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(in oklab, rgb(247, 246, 239) 0%, rgb(251, 250, 246) 100%);
```

## Z-Index Map

**11 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 10,40 | header.w.-.n.a.v.-.w.i.d.t.h. .t.o.p.-.p.a.g.e.-.t.o.p. .s.t.i.c.k.y. .z.-.1.0. .f.l.e.x. .s.h.r.i.n.k.-.0. .s.e.l.e.c.t.-.n.o.n.e. .f.l.e.x.-.c.o.l. .s.e.l.f.-.s.t.a.r.t. .m.a.x.-.m.d.:.h.i.d.d.e.n, li.b.g.-.m.o.n.o.-.0.0.0. .b.o.r.d.e.r.-.s.e.c.o.n.d.a.r.y. .b.o.r.d.e.r. .o.r.i.g.i.n.-.t.o.p.-.l.e.f.t. .l.g.:.o.r.i.g.i.n.-.t.o.p. .h.i.d.d.e.n. .w.-.5.0. .r.o.t.a.t.e.-.0. .f.l.e.x.-.c.o.l. .w.i.l.l.-.c.h.a.n.g.e.-.t.r.a.n.s.f.o.r.m, li.b.g.-.m.o.n.o.-.0.0.0. .b.o.r.d.e.r.-.s.e.c.o.n.d.a.r.y. .b.o.r.d.e.r. .o.r.i.g.i.n.-.b.o.t.t.o.m. .h.i.d.d.e.n. .w.-.5.0. .r.o.t.a.t.e.-.0. .f.l.e.x.-.c.o.l. .w.i.l.l.-.c.h.a.n.g.e.-.t.r.a.n.s.f.o.r.m |
| base | -1,9 | div.b.a.r. .-.z.-.1. .a.b.s.o.l.u.t.e. .l.e.f.t.-.0. .t.o.p.-.1./.2. .h.-.[.1.9.p.x.]. .w.-.f.u.l.l. .-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .t.r.a.n.s.i.t.i.o.n.-.c.o.l.o.r.s. .d.u.r.a.t.i.o.n.-.1.0.0, div.b.a.r. .-.z.-.1. .a.b.s.o.l.u.t.e. .l.e.f.t.-.0. .t.o.p.-.1./.2. .h.-.[.1.9.p.x.]. .w.-.f.u.l.l. .-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .t.r.a.n.s.i.t.i.o.n.-.c.o.l.o.r.s. .d.u.r.a.t.i.o.n.-.1.0.0, div.b.a.r. .-.z.-.1. .a.b.s.o.l.u.t.e. .l.e.f.t.-.0. .t.o.p.-.1./.2. .h.-.[.1.9.p.x.]. .w.-.f.u.l.l. .-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .t.r.a.n.s.i.t.i.o.n.-.c.o.l.o.r.s. .d.u.r.a.t.i.o.n.-.1.0.0 |

## SVG Icons

**20 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 16 |
| sm | 4 |

**Icon colors:** `url(#stroke-s1)`, `white`, `var(--color-pri-800)`, `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Untitled Sans | self-hosted | 400, 500, 700, normal | normal |
| Jetbrains Mono | self-hosted | 300, 400, 500, normal | normal |
| Untitled Serif | self-hosted | 400, normal | normal |
| PP Neuebit | self-hosted | 400, normal | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (2x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `80ms` | 80 |
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (35 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-in-out** (2 uses) — `ease`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `svelte-oxfo6t-composer-caret-blink` | fade | opacity | 1 |
| `svelte-15q223b-blink` | fade | opacity | 1 |

## Component Anatomy

### button — 6 instances

**Slots:** label
**Variants:** secondary · outline
**Sizes:** lg

| variant | count | sample label |
|---|---|---|
| default | 2 | Get started (Desktop, CLI, and more)
→ |
| secondary | 2 | Use on OpenRouter
↗ |
| outline | 2 |  |

## Brand Voice

**Tone:** friendly · **Pronoun:** we-only · **Headings:** Title Case (balanced)

### Top CTA Verbs

- **use** (2)
- **get** (1)
- **press** (1)

### Button Copy Patterns

- "get started (desktop, cli, and more)
→" (1×)
- "use on openrouter
↗" (1×)
- "use on vercel ai gateway
↗" (1×)
- "press kit
press kit" (1×)

### Sample Headings

> Poolside logo
> Poolside logomark
> Poolside press kit ZIP file
> Poolside logo
> Poolside logomark
> Poolside press kit ZIP file
> Build with our open-weight agentic coding models, Laguna 
XS
2.1
 
33B PARAMS
RUNS ON-DEVICE
and Laguna 
S
2.1
 
118B PARAMS
OUR NEWEST MODEL
today.
> We're building open-weight foundation models and the systems that refine and improve them.
> Laguna
S
2.1
> Laguna
XS
2.1

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Poolside is a foundation model company bringing intelligence to everywhere work gets done. Our mission is to drive abundance for humanity by creating artificial general intelligence.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → cta → nav → testimonial → testimonial → sidebar → content → content → content → testimonials → testimonial → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta | Poolside logo | 0.75 |
| 1 | nav | Poolside logo | 0.9 |
| 2 | nav | — | 0.4 |
| 3 | testimonial | Build with our open-weight agentic coding models, Laguna 
XS
2.1
 
33B PARAMS
RU | 0.8 |
| 4 | testimonial | Build with our open-weight agentic coding models, Laguna 
XS
2.1
 
33B PARAMS
RU | 0.8 |
| 5 | sidebar | — | 0.4 |
| 6 | content | — | 0.3 |
| 7 | content | — | 0.3 |
| 8 | content | We're building open-weight foundation models and the systems that refine and imp | 0.3 |
| 9 | testimonials | We work in the open. A closer look at the research, the engineering, and the ide | 0.4 |
| 10 | testimonial | Go further with us. From real-world missions to the path to AGI, and the people  | 0.8 |
| 11 | footer | Poolside logo | 0.95 |
| 12 | nav | Poolside logo | 0.9 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.448 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 2, svg 0, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.513)

Evidence:
- tailwind-like class density 53%

## Component Screenshots

6 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default--lg | 0 | 280 × 36 | `screenshots/button-default-lg-0.png` |
| button--secondary--lg | 0 | 169 × 36 | `screenshots/button-secondary-lg-0.png` |
| button--secondary--lg | 1 | 207 × 36 | `screenshots/button-secondary-lg-1.png` |
| button--outline | 0 | 52 × 52 | `screenshots/button-outline-0.png` |
| button--outline | 1 | 52 × 52 | `screenshots/button-outline-1.png` |
| button--default | 0 | 59 × 18 | `screenshots/button-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Untitled Sans` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
