# Design Language: About the MPD - Memphis Police Department

> Extracted from `https://www.memphispolice.org/about/` on August 20, 2026
> 1271 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#fcac00` | rgb(252, 172, 0) | hsl(41, 100%, 49%) | 7 |
| Secondary | `#0866ff` | rgb(8, 102, 255) | hsl(217, 100%, 52%) | 2 |
| Accent | `#ff0000` | rgb(255, 0, 0) | hsl(0, 100%, 50%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#3a3a3a` | hsl(0, 0%, 23%) | 866 |
| `#ffffff` | hsl(0, 0%, 100%) | 707 |
| `#191919` | hsl(0, 0%, 10%) | 402 |
| `#666666` | hsl(0, 0%, 40%) | 236 |
| `#e0e0e0` | hsl(0, 0%, 88%) | 139 |
| `#000000` | hsl(0, 0%, 0%) | 9 |
| `#adb5b7` | hsl(192, 6%, 70%) | 7 |
| `#808080` | hsl(0, 0%, 50%) | 5 |
| `#9b9b9b` | hsl(0, 0%, 61%) | 1 |
| `#f0f0f0` | hsl(0, 0%, 94%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#fcac00`, `#0d2279`, `#000000`, `#9b9b9b`, `#1e73be`, `#1a65a7`, `#2d2f94`, `#333333`

### Text Colors

Text color palette: `#666666`, `#3a3a3a`, `#0d2279`, `#ffffff`, `#2d2f94`, `#0094ea`, `#1e73be`, `#004276`, `#e0e0e0`, `#808080`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#3a3a3a` | text, border, background | 866 |
| `#ffffff` | background, text, border | 707 |
| `#191919` | text, border | 402 |
| `#666666` | text, border | 236 |
| `#e0e0e0` | text, border | 139 |
| `#0d2279` | text, border, background | 81 |
| `#2d2f94` | background, text, border | 35 |
| `#1e73be` | text, border, background | 34 |
| `#0094ea` | text, border | 28 |
| `#004276` | border, text | 9 |
| `#000000` | background, text, border | 9 |
| `#fcac00` | background | 7 |
| `#adb5b7` | border, text | 7 |
| `#dd4f3d` | text, border | 6 |
| `#808080` | text, border | 5 |
| `#0866ff` | background, border | 2 |
| `#1da1f2` | background, border | 2 |
| `#ff0000` | background, border | 2 |
| `#e23367` | background, border | 2 |
| `#9b9b9b` | background | 1 |
| `#1a65a7` | background | 1 |
| `#f0f0f0` | background | 1 |

## Typography

### Font Families

- **Lato** — used for body (1129 elements)
- **Merriweather Sans** — used for all (31 elements)
- **Arial** — used for body (6 elements)
- **Hind** — used for body (4 elements)
- **vote-reward-badges** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 45px | 2.8125rem | 300 | 56.25px | normal | h2, span, input |
| 32px | 2rem | 400 | 0px | normal | a, i |
| 30px | 1.875rem | 300 | 37.5px | normal | h2 |
| 25px | 1.5625rem | 300 | 31.25px | normal | h4, a |
| 24px | 1.5rem | 400 | 42px | normal | a, span |
| 22.4px | 1.4rem | 400 | 39.2px | normal | p, a, strong |
| 22px | 1.375rem | 400 | 0px | normal | span, svg, path |
| 20.48px | 1.28rem | 400 | 35.84px | normal | p, span |
| 20px | 1.25rem | 300 | 25px | normal | h5 |
| 18px | 1.125rem | 400 | 31.5px | normal | span, a, i, h3 |
| 16px | 1rem | 400 | 27.2px | normal | html, head, meta, link |
| 14px | 0.875rem | 400 | 24.5px | normal | span, div, p, img |
| 13.3333px | 0.8333rem | 400 | normal | normal | button, span, input |
| 12px | 0.75rem | 400 | normal | normal | span |

### Heading Scale

```css
h2 { font-size: 45px; font-weight: 300; line-height: 56.25px; }
h2 { font-size: 30px; font-weight: 300; line-height: 37.5px; }
h4 { font-size: 25px; font-weight: 300; line-height: 31.25px; }
h5 { font-size: 20px; font-weight: 300; line-height: 25px; }
h3 { font-size: 18px; font-weight: 400; line-height: 31.5px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 27.2px; }
```

### Font Weights in Use

`400` (1224x), `300` (31x), `700` (16x)

## Spacing

**Base unit:** 5px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-15 | 15px | 0.9375rem |
| spacing-26 | 26px | 1.625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-35 | 35px | 2.1875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-70 | 70px | 4.375rem |
| spacing-240 | 240px | 15rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| full | 50px | 2 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(8, 36, 145, 0.78) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(219, 171, 0, 0.83) 0px 0px 0px 0px;
```

**md** — blur: 8px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
```

## CSS Custom Properties

### Colors

```css
--wp-block-synced-color: #7a00df;
--wp-block-synced-color--rgb: 122,0,223;
--wp-bound-block-color: var(--wp-block-synced-color);
--wp-admin-theme-color: #007cba;
--wp-admin-theme-color--rgb: 0,124,186;
--wp-admin-theme-color-darker-10: #006ba1;
--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;
--wp-admin-theme-color-darker-20: #005a87;
--wp-admin-theme-color-darker-20--rgb: 0,90,135;
--wp-admin-border-width-focus: 2px;
--wp--preset--color--black: #000000;
--wp--preset--color--cyan-bluish-gray: #abb8c3;
--wp--preset--color--white: #ffffff;
--wp--preset--color--pale-pink: #f78da7;
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--color--luminous-vivid-orange: #ff6900;
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--color--vivid-purple: #9b51e0;
--button-global-border-radius: 0px;
--button-default-background-color: #fcac00;
--button-default-border-color: #004276;
--button-default-color: #004276;
--button-default-hover-background-color: #004276;
--button-default-hover-border-color: #49addf;
--button-default-hover-color: #ffffff;
--button-primary-background-color: #fcac00;
--button-primary-border-color: #ffffff;
--button-primary-color: #0d2279;
--button-primary-hover-background-color: #4bb5ef;
--button-primary-hover-border-color: #4bb5ef;
--button-primary-hover-color: #ffffff;
--button-secondary-background-color: #5bb6eb;
--button-secondary-border-color: #5bb6eb;
--button-secondary-color: #ffffff;
--button-secondary-hover-background-color: #ffffff;
--button-secondary-hover-border-color: #ffffff;
--button-secondary-hover-color: #000000;
--button-danger-background-color: #fcac00;
--button-danger-border-color: #fcac00;
--button-danger-color: #ffffff;
--button-danger-hover-background-color: #fcac00;
--button-danger-hover-border-color: #fcac00;
--button-danger-hover-color: #ffffff;
--button-disabled-background-color: #eaeaea;
--button-disabled-border-color: #eaeaea;
--button-disabled-color: #8e8e8e;
--button-text-border-color: #fcac00;
--button-text-color: #000000;
--button-text-hover-color: #fcac00;
--button-text-disabled-color: #d4d4d4;
--button-link-color: #000000;
--button-link-hover-color: #888888;
--button-link-disabled-color: #d4d4d4;
--button-large-border-radius: 0px;
--button-small-border-radius: 0px;
--form-global-background-color: rgba(255,255,255,0);
--form-global-border-color: #e5e5e5;
--form-global-border-radius: 0px;
--form-global-border-width: 1px;
--form-global-color: #888888;
--form-global-placeholder-color: #b3b3b3;
--form-global-focus-border: #fcac00;
--form-global-focus-color: #888888;
--form-global-disabled-border: #e5e5e5;
--form-global-disabled-color: #e5e5e5;
--form-danger-border-color: #fcac00;
--form-danger-color: #fcac00;
--form-success-border-color: #5bb6eb;
--form-success-color: #888888;
--form-blank-focus-border: #e0e0e0;
--form-blank-focus-border-style: solid;
--form-label-color: #000000;
--form-select-option-color: #000000;
--form-radio-border: #e5e5e5;
--form-radio-border-width: 2px;
--form-radio-focus-border: #fcac00;
--form-radio-checked-border: #000000;
--form-radio-disabled-border: #e5e5e5;
--form-range-thumb-border: #000000;
--form-range-thumb-border-radius: 500px;
--form-range-thumb-border-width: 0;
--inverse-button-default-background-color: #ffffff;
--inverse-button-default-border-color: #ffffff;
--inverse-button-default-color: #000000;
--inverse-button-default-hover-background-color: #fcac00;
--inverse-button-default-hover-border-color: #fcac00;
--inverse-button-default-hover-color: #ffffff;
--inverse-button-primary-background-color: #fcac00;
--inverse-button-primary-border-color: #fcac00;
--inverse-button-primary-color: #0d2279;
--inverse-button-primary-hover-background-color: #ffffff;
--inverse-button-primary-hover-border-color: #ffffff;
--inverse-button-primary-hover-color: #000000;
--inverse-button-secondary-background-color: rgba(0,0,0,0);
--inverse-button-secondary-border-color: #ffffff;
--inverse-button-secondary-color: #0d2279;
--inverse-button-secondary-hover-background-color: #fcac00;
--inverse-button-secondary-hover-border-color: #fcac00;
--inverse-button-secondary-hover-color: #ffffff;
--inverse-button-text-border-color: #ffffff;
--inverse-button-text-color: #ffffff;
--inverse-button-text-hover-color: #fcac00;
--inverse-button-text-disabled-color: #d8d8d8;
--inverse-button-link-color: #ffffff;
--inverse-button-link-hover-color: rgba(255,255,255,0.8);
--inverse-form-background-color: rgba(255,255,255,0);
--inverse-form-border-color: #ffffff;
--inverse-form-color: #ffffff;
--inverse-form-placeholder-color: #ffffff;
--inverse-form-focus-border: #ffffff;
--inverse-form-focus-color: #ffffff;
--inverse-form-select-icon-color: #ffffff;
--inverse-form-radio-background-color: rgba(255,255,255,0);
--inverse-form-radio-border-color: #ffffff;
--inverse-form-radio-focus-border: #ffffff;
--inverse-form-radio-checked-border: #ffffff;
--inverse-form-radio-checked-icon-color: #ffffff;
--inverse-form-label-color: #ffffff;
--offcanvas-bar-background-color: #ffffff;
```

### Spacing

```css
--wp--preset--font-size--normal: 16px;
--wp--preset--font-size--huge: 42px;
--wp--preset--font-size--small: 13px;
--wp--preset--font-size--medium: 20px;
--wp--preset--font-size--large: 36px;
--wp--preset--font-size--x-large: 42px;
--wp--preset--spacing--20: 0.44rem;
--wp--preset--spacing--30: 0.67rem;
--wp--preset--spacing--40: 1rem;
--wp--preset--spacing--50: 1.5rem;
--wp--preset--spacing--60: 2.25rem;
--wp--preset--spacing--70: 3.38rem;
--wp--preset--spacing--80: 5.06rem;
--button-global-font-size: 18px;
--button-global-padding-horizontal: 20px;
--button-global-letter-spacing: 0px;
--button-large-font-size: 18px;
--button-large-padding-horizontal: 60px;
--button-small-font-size: 14px;
--button-small-padding-horizontal: 20px;
--form-global-padding-horizontal: 10px;
--form-global-padding-vertical: 5px;
--form-large-font-size: 18px;
--form-large-padding-horizontal: 10px;
--form-small-font-size: 14px;
--form-small-padding-horizontal: 10px;
--form-legend-font-size: 14px;
--form-label-font-size: 14px;
--form-label-letter-spacing: 0px;
--form-select-padding-right: 20px;
--form-radio-margin-top: -5px;
--form-radio-size: 20px;
--form-stacked-margin-bottom: 10px;
--form-horizontal-controls-margin-left: 20px;
--form-horizontal-controls-text-padding-top: 10px;
--form-horizontal-label-margin-top: 10px;
--offcanvas-bar-padding-horizontal: 30px;
--offcanvas-bar-m-padding-horizontal: 50px;
--offcanvas-bar-padding-top: 40px;
--offcanvas-bar-m-padding-top: 40px;
--offcanvas-bar-padding-bottom: 80px;
--offcanvas-bar-m-padding-bottom: 50px;
--offcanvas-close-padding: 10px;
```

### Typography

```css
--button-global-line-height: 50px;
--button-global-text-transform: capitalize;
--button-text-line-height: 1;
--button-link-hover-text-decoration: none;
--button-link-line-height: normal;
--button-large-line-height: 70px;
--button-small-line-height: 35px;
--form-global-line-height: 48px;
--form-large-line-height: 68px;
--form-small-line-height: 33px;
--form-legend-line-height: 20px;
--form-label-font-weight: bold;
--form-label-text-transform: inherit;
--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
```

### Shadows

```css
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
```

### Other

```css
--wp-editor-canvas-background: #ddd;
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
--form-global-height: 50px;
--form-global-focus-background: rgba(255,255,255,0);
--form-global-disabled-background: #f2f2f2;
--form-large-height: 70px;
--form-small-height: 35px;
--form-radio-background: rgba(255,255,255,0.3);
--form-radio-checked-focus-background: #fcac00;
--form-radio-checked-background: #000000;
--form-radio-disabled-background: #e0e0e0;
--form-range-thumb-background: #000000;
--form-range-thumb-height: 15px;
--form-range-track-background: #f9f9f9;
--form-range-track-height: 3px;
--form-range-track-focus-background: #000000;
--form-width-large: 500px;
--form-width-medium: 200px;
--form-width-small: 130px;
--form-width-xsmall: 50px;
--form-horizontal-label-width: 200px;
--inverse-form-focus-background: rgba(255,255,255,0);
--inverse-form-radio-checked-background: rgba(255,255,255,0);
--inverse-form-radio-checked-focus-background: #ffffff;
--offcanvas-global-z-index: 1000;
--offcanvas-bar-width: 300px;
--offcanvas-bar-m-width: 600px;
--offcanvas-close-position: 20px;
--offcanvas-overlay-overlay-background: rgba(31,31,31,0.85);
--fa-style-family-classic: "Font Awesome 6 Free";
--fa-style-family-brands: "Font Awesome 6 Brands";
```

### Dependencies

```css
--wp-bound-block-color: --wp-block-synced-color;
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
| xs | 320px | min-width |
| 414px | 414px | max-width |
| sm | 480px | max-width |
| sm | 481px | min-width |
| sm | 530px | max-width |
| sm | 600px | max-width |
| sm | 639px | max-width |
| sm | 640px | min-width |
| sm | 641px | min-width |
| sm | 700px | max-width |
| md | 767px | max-width |
| md | 768px | max-width |
| md | 769px | max-width |
| md | 780px | max-width |
| md | 782px | max-width |
| md | 783px | min-width |
| md | 800px | max-width |
| 959px | 959px | max-width |
| lg | 960px | max-width |
| lg | 961px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | max-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | max-width |
| 1201px | 1201px | min-width |
| xl | 1300px | min-width |
| 1440px | 1440px | min-width |
| 2xl | 1599px | max-width |
| 2xl | 1600px | min-width |
| 2560px | 2560px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.3s`, `0.42s`, `0.2s`, `0.5s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: 0.3s;
transition: 0.42s;
transition: 0.2s;
transition: 0.5s ease-out;
transition: opacity 0.15s linear;
transition: opacity 0.3s linear, transform 0.3s linear;
```

### Keyframe Animations

**show-content-image**
```css
@keyframes show-content-image {
  0% { visibility: hidden; }
  99% { visibility: hidden; }
  100% { visibility: visible; }
}
```

**turn-on-visibility**
```css
@keyframes turn-on-visibility {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**turn-off-visibility**
```css
@keyframes turn-off-visibility {
  0% { opacity: 1; visibility: visible; }
  99% { opacity: 0; visibility: visible; }
  100% { opacity: 0; visibility: hidden; }
}
```

**lightbox-zoom-in**
```css
@keyframes lightbox-zoom-in {
  0% { transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale)); }
  100% { transform: translate(-50%, -50%) scale(1); }
}
```

**lightbox-zoom-out**
```css
@keyframes lightbox-zoom-out {
  0% { transform: translate(-50%, -50%) scale(1); visibility: visible; }
  99% { visibility: visible; }
  100% { transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale)); visibility: hidden; }
}
```

**ctf-sk-scaleout**
```css
@keyframes ctf-sk-scaleout {
  0% { transform: scale(0); }
  100% { transform: scale(1); opacity: 0; }
}
```

**ctf-sk-scaleout**
```css
@keyframes ctf-sk-scaleout {
  0% { transform: scale(0); }
  100% { transform: scale(1); opacity: 0; }
}
```

**blinker**
```css
@keyframes blinker {
  50% { opacity: 0; }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**fa-spin**
```css
@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (7 instances)

```css
.button {
  background-color: rgb(252, 172, 0);
  color: rgb(13, 34, 121);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (17 instances)

```css
.card {
  background-color: rgb(45, 47, 148);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
  padding-top: 40px;
  padding-right: 40px;
}
```

### Inputs (4 instances)

```css
.input {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 13.3333px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (195 instances)

```css
.link {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (97 instances)

```css
.navigatio {
  background-color: rgb(252, 172, 0);
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (14 instances)

```css
.foote {
  background-color: rgb(26, 101, 167);
  color: rgb(224, 224, 224);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (10 instances)

```css
.modal {
  background-color: rgba(0, 0, 0, 0.17);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: calc(100% - 0.01px);
}
```

### Dropdowns (348 instances)

```css
.dropdown {
  background-color: rgb(252, 172, 0);
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
  padding-top: 0px;
}
```

### Badges (3 instances)

```css
.badge {
  color: rgb(0, 66, 118);
  font-size: 18px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Switches (16 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgb(25, 25, 25);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(252, 172, 0);
  color: rgb(13, 34, 121);
  padding: 0px 20px 0px 20px;
  border-radius: 0px;
  border: 1px solid rgb(0, 66, 118);
  font-size: 18px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgb(251, 172, 0);
  color: rgb(255, 255, 255);
  padding: 2px 16px 2px 16px;
  border-radius: 0px;
  border: 0px solid rgb(170, 170, 170);
  font-size: 24px;
  font-weight: 700;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(102, 102, 102);
  padding: 40px 40px 40px 40px;
  border-radius: 0px;
  border: 0px none rgb(102, 102, 102);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(58, 58, 58);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(58, 58, 58);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(252, 172, 0);
  color: rgb(0, 66, 118);
  padding: 0px 60px 0px 60px;
  border-radius: 0px;
  border: 1px solid rgb(0, 66, 118);
  font-size: 18px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(221, 79, 61);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(221, 79, 61);
  font-size: 13.3333px;
  font-weight: 400;
```

## Layout System

**1 grid containers** and **162 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 1400px | 40px |
| 800px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 93.7344px 145.984px;
gap: 40px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 89x |
| row/wrap | 67x |
| column/nowrap | 5x |
| column/wrap | 1x |

**Gap values:** `40px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 16px | No | 2 | No | 11815px |
| tablet (768px) | 16px | No | 2 | No | 14778px |
| desktop (1280px) | 16px | No | 2 | No | 6205px |
| wide (1920px) | 16px | No | 2 | No | 6499px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Page height: `11815px` → `14778px`

**768px → 1280px** (tablet → desktop):
- Page height: `14778px` → `6205px`

**1280px → 1920px** (desktop → wide):
- Page height: `6205px` → `6499px`

## Interaction States

### Button States

**"Close this module"**
```css
/* Hover */
color: rgb(221, 79, 61) → rgb(201, 63, 45);
border-color: rgb(221, 79, 61) → rgb(201, 63, 45);
outline: rgb(221, 79, 61) none 0px → rgb(201, 63, 45) none 0px;
```
```css
/* Focus */
color: rgb(221, 79, 61) → rgb(198, 61, 43);
border-color: rgb(221, 79, 61) → rgb(198, 61, 43);
outline: rgb(221, 79, 61) none 0px → rgb(198, 61, 43) none 0px;
```

## Accessibility (WCAG 2.1)

**Overall Score: 50%** — 1 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#fbac00` | 1.91:1 | FAIL | a (1x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#0d2279` | `#fcac00` | 7.25:1 | AAA |

## Dark Mode

The site has a distinct dark mode color scheme:

- **Primary:** `#fcac00`
- **Secondary:** `#0866ff`
- **Backgrounds:** `#ffffff`, `#fcac00`, `#0d2279`, `#000000`, `#9b9b9b`, `#1e73be`, `#1a65a7`, `#2d2f94`, `#333333`
- **Text:** `#666666`, `#3a3a3a`, `#0d2279`, `#ffffff`, `#2d2f94`

### Dark Mode CSS Variables

```css
--wp-block-synced-color: #7a00df;
--wp-block-synced-color--rgb: 122,0,223;
--wp-bound-block-color: var(--wp-block-synced-color);
--wp-admin-theme-color: #007cba;
--wp-admin-theme-color--rgb: 0,124,186;
--wp-admin-theme-color-darker-10: #006ba1;
--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;
--wp-admin-theme-color-darker-20: #005a87;
--wp-admin-theme-color-darker-20--rgb: 0,90,135;
--wp-admin-border-width-focus: 2px;
--wp--preset--color--black: #000000;
--wp--preset--color--cyan-bluish-gray: #abb8c3;
--wp--preset--color--white: #ffffff;
--wp--preset--color--pale-pink: #f78da7;
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--color--luminous-vivid-orange: #ff6900;
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--color--vivid-purple: #9b51e0;
--button-global-border-radius: 0px;
--button-default-background-color: #fcac00;
--button-default-border-color: #004276;
--button-default-color: #004276;
--button-default-hover-background-color: #004276;
--button-default-hover-border-color: #49addf;
--button-default-hover-color: #ffffff;
--button-primary-background-color: #fcac00;
--button-primary-border-color: #ffffff;
--button-primary-color: #0d2279;
--button-primary-hover-background-color: #4bb5ef;
--button-primary-hover-border-color: #4bb5ef;
--button-primary-hover-color: #ffffff;
--button-secondary-background-color: #5bb6eb;
--button-secondary-border-color: #5bb6eb;
--button-secondary-color: #ffffff;
--button-secondary-hover-background-color: #ffffff;
--button-secondary-hover-border-color: #ffffff;
--button-secondary-hover-color: #000000;
--button-danger-background-color: #fcac00;
--button-danger-border-color: #fcac00;
--button-danger-color: #ffffff;
--button-danger-hover-background-color: #fcac00;
--button-danger-hover-border-color: #fcac00;
--button-danger-hover-color: #ffffff;
--button-disabled-background-color: #eaeaea;
--button-disabled-border-color: #eaeaea;
--button-disabled-color: #8e8e8e;
--button-text-border-color: #fcac00;
--button-text-color: #000000;
--button-text-hover-color: #fcac00;
--button-text-disabled-color: #d4d4d4;
--button-link-color: #000000;
--button-link-hover-color: #888888;
--button-link-disabled-color: #d4d4d4;
--button-large-border-radius: 0px;
--button-small-border-radius: 0px;
--form-global-background-color: rgba(255,255,255,0);
--form-global-border-color: #e5e5e5;
--form-global-border-radius: 0px;
--form-global-border-width: 1px;
--form-global-color: #888888;
--form-global-placeholder-color: #b3b3b3;
--form-global-focus-border: #fcac00;
--form-global-focus-color: #888888;
--form-global-disabled-border: #e5e5e5;
--form-global-disabled-color: #e5e5e5;
--form-danger-border-color: #fcac00;
--form-danger-color: #fcac00;
--form-success-border-color: #5bb6eb;
--form-success-color: #888888;
--form-blank-focus-border: #e0e0e0;
--form-blank-focus-border-style: solid;
--form-label-color: #000000;
--form-select-option-color: #000000;
--form-radio-border: #e5e5e5;
--form-radio-border-width: 2px;
--form-radio-focus-border: #fcac00;
--form-radio-checked-border: #000000;
--form-radio-disabled-border: #e5e5e5;
--form-range-thumb-border: #000000;
--form-range-thumb-border-radius: 500px;
--form-range-thumb-border-width: 0;
--inverse-button-default-background-color: #ffffff;
--inverse-button-default-border-color: #ffffff;
--inverse-button-default-color: #000000;
--inverse-button-default-hover-background-color: #fcac00;
--inverse-button-default-hover-border-color: #fcac00;
--inverse-button-default-hover-color: #ffffff;
--inverse-button-primary-background-color: #fcac00;
--inverse-button-primary-border-color: #fcac00;
--inverse-button-primary-color: #0d2279;
--inverse-button-primary-hover-background-color: #ffffff;
--inverse-button-primary-hover-border-color: #ffffff;
--inverse-button-primary-hover-color: #000000;
--inverse-button-secondary-background-color: rgba(0,0,0,0);
--inverse-button-secondary-border-color: #ffffff;
--inverse-button-secondary-color: #0d2279;
--inverse-button-secondary-hover-background-color: #fcac00;
--inverse-button-secondary-hover-border-color: #fcac00;
--inverse-button-secondary-hover-color: #ffffff;
--inverse-button-text-border-color: #ffffff;
--inverse-button-text-color: #ffffff;
--inverse-button-text-hover-color: #fcac00;
--inverse-button-text-disabled-color: #d8d8d8;
--inverse-button-link-color: #ffffff;
--inverse-button-link-hover-color: rgba(255,255,255,0.8);
--inverse-form-background-color: rgba(255,255,255,0);
--inverse-form-border-color: #ffffff;
--inverse-form-color: #ffffff;
--inverse-form-placeholder-color: #ffffff;
--inverse-form-focus-border: #ffffff;
--inverse-form-focus-color: #ffffff;
--inverse-form-select-icon-color: #ffffff;
--inverse-form-radio-background-color: rgba(255,255,255,0);
--inverse-form-radio-border-color: #ffffff;
--inverse-form-radio-focus-border: #ffffff;
--inverse-form-radio-checked-border: #ffffff;
--inverse-form-radio-checked-icon-color: #ffffff;
--inverse-form-label-color: #ffffff;
--offcanvas-bar-background-color: #ffffff;
--wp--preset--font-size--normal: 16px;
--wp--preset--font-size--huge: 42px;
--wp--preset--font-size--small: 13px;
--wp--preset--font-size--medium: 20px;
--wp--preset--font-size--large: 36px;
--wp--preset--font-size--x-large: 42px;
--wp--preset--spacing--20: 0.44rem;
--wp--preset--spacing--30: 0.67rem;
--wp--preset--spacing--40: 1rem;
--wp--preset--spacing--50: 1.5rem;
--wp--preset--spacing--60: 2.25rem;
--wp--preset--spacing--70: 3.38rem;
--wp--preset--spacing--80: 5.06rem;
--button-global-font-size: 18px;
--button-global-padding-horizontal: 20px;
--button-global-letter-spacing: 0px;
--button-large-font-size: 18px;
--button-large-padding-horizontal: 60px;
--button-small-font-size: 14px;
--button-small-padding-horizontal: 20px;
--form-global-padding-horizontal: 10px;
--form-global-padding-vertical: 5px;
--form-large-font-size: 18px;
--form-large-padding-horizontal: 10px;
--form-small-font-size: 14px;
--form-small-padding-horizontal: 10px;
--form-legend-font-size: 14px;
--form-label-font-size: 14px;
--form-label-letter-spacing: 0px;
--form-select-padding-right: 20px;
--form-radio-margin-top: -5px;
--form-radio-size: 20px;
--form-stacked-margin-bottom: 10px;
--form-horizontal-controls-margin-left: 20px;
--form-horizontal-controls-text-padding-top: 10px;
--form-horizontal-label-margin-top: 10px;
--offcanvas-bar-padding-horizontal: 30px;
--offcanvas-bar-m-padding-horizontal: 50px;
--offcanvas-bar-padding-top: 40px;
--offcanvas-bar-m-padding-top: 40px;
--offcanvas-bar-padding-bottom: 80px;
--offcanvas-bar-m-padding-bottom: 50px;
--offcanvas-close-padding: 10px;
--button-global-line-height: 50px;
--button-global-text-transform: capitalize;
--button-text-line-height: 1;
--button-link-hover-text-decoration: none;
--button-link-line-height: normal;
--button-large-line-height: 70px;
--button-small-line-height: 35px;
--form-global-line-height: 48px;
--form-large-line-height: 68px;
--form-small-line-height: 33px;
--form-legend-line-height: 20px;
--form-label-font-weight: bold;
--form-label-text-transform: inherit;
--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
--wp-editor-canvas-background: #ddd;
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
--form-global-height: 50px;
--form-global-focus-background: rgba(255,255,255,0);
--form-global-disabled-background: #f2f2f2;
--form-large-height: 70px;
--form-small-height: 35px;
--form-radio-background: rgba(255,255,255,0.3);
--form-radio-checked-focus-background: #fcac00;
--form-radio-checked-background: #000000;
--form-radio-disabled-background: #e0e0e0;
--form-range-thumb-background: #000000;
--form-range-thumb-height: 15px;
--form-range-track-background: #f9f9f9;
--form-range-track-height: 3px;
--form-range-track-focus-background: #000000;
--form-width-large: 500px;
--form-width-medium: 200px;
--form-width-small: 130px;
--form-width-xsmall: 50px;
--form-horizontal-label-width: 200px;
--inverse-form-focus-background: rgba(255,255,255,0);
--inverse-form-radio-checked-background: rgba(255,255,255,0);
--inverse-form-radio-checked-focus-background: #ffffff;
--offcanvas-global-z-index: 1000;
--offcanvas-bar-width: 300px;
--offcanvas-bar-m-width: 600px;
--offcanvas-close-position: 20px;
--offcanvas-overlay-overlay-background: rgba(31,31,31,0.85);
--fa-style-family-classic: "Font Awesome 6 Free";
--fa-style-family-brands: "Font Awesome 6 Brands";
--wp-bound-block-color: --wp-block-synced-color;
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Design System Score

**Overall: 77/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 50/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Good CSS variable tokenization

**Issues:**
- 5 font families — consider limiting to 2 (heading + body)
- 1 WCAG contrast failures
- 1599 !important rules — prefer specificity over overrides
- 97% of CSS is unused — consider purging
- 27641 duplicate CSS declarations

## Z-Index Map

**8 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1010,999999 | div.d.e.-.h.e.a.d.e.r.-.s.e.a.r.c.h. .u.k.-.m.o.d.a.l.-.f.u.l.l. .u.k.-.m.o.d.a.l, a.u.k.-.m.o.d.a.l.-.c.l.o.s.e. .u.k.-.m.o.d.a.l.-.c.l.o.s.e.-.f.u.l.l. .u.k.-.c.l.o.s.e.-.l.a.r.g.e. .u.k.-.c.l.o.s.e. .u.k.-.i.c.o.n, div.u.k.-.h.i.d.d.e.n.@.m. .u.k.-.m.o.d.a.l.-.f.u.l.l. .u.k.-.m.o.d.a.l |
| dropdown | 999,999 | header.u.k.-.s.c.r.o.l.l.s.p.y.-.i.n.v.i.e.w. .u.k.-.a.n.i.m.a.t.i.o.n.-.f.a.d.e |
| base | 0,1 | div.d.e.-.r.o.w. .u.k.-.c.o.n.t.a.i.n.e.r, div.u.k.-.g.r.i.d. .u.k.-.f.l.e.x.-.1. .u.k.-.c.-.p.o.s.i.t.i.o.n.-.z.-.i.n.d.e.x.-.0. .u.k.-.g.r.i.d.-.s.t.a.c.k, div.d.e.-.c.o.l.u.m.n. .u.k.-.p.o.s.i.t.i.o.n.-.r.e.l.a.t.i.v.e. .u.k.-.w.i.d.t.h.-.1.-.1.@.m. .u.k.-.f.i.r.s.t.-.c.o.l.u.m.n |

**Issues:**
- [object Object]

## SVG Icons

**2 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| md | 1 |
| xl | 1 |

**Icon colors:** `#000`, `rgb(13, 34, 121)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Font Awesome 5 Brands | self-hosted | 400, normal | normal |
| Font Awesome 5 Free | self-hosted | 400, 900 | normal |
| revicons | self-hosted | normal | normal |
| rating | self-hosted | 400 | normal |
| Quentin | self-hosted | 400 | normal |
| accordion | self-hosted | 400 | normal |
| vcpb-plugin-icons | self-hosted | 400 | normal |
| vc_grid_v1 | self-hosted | 400 | normal |
| vote-reward-badges | self-hosted | normal | normal |
| hustle-icons-font | self-hosted | 400 | normal |
| Lato | cdn | 400 | normal |
| Merriweather Sans | google-fonts | 300 | normal |
| FontAwesome | self-hosted | normal | normal |
| Hind | google-fonts | 400, 700 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 8 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 4 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 2 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:4 (9x), 1:1 (3x), 3:2 (1x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `420ms` | 420 |

### Easing Families

- **ease-in-out** (4 uses) — `ease`
- **linear** (4 uses) — `linear`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `uk-spinner-rotate` | rotate | transform | 1 |
| `uk-spinner-dash` | rotate | stroke-dashoffset, transform | 1 |
| `uk-fade` | fade | opacity | 1 |
| `uk-fade-bottom-medium` | slide-y | opacity, transform | 16 |
| `slideInUp` | slide | transform, visibility | 1 |
| `slideInUp` | slide | transform, visibility | 1 |
| `slideInUp` | slide | transform, visibility | 1 |
| `slideInUp` | slide | transform, visibility | 1 |
| `slideInUp` | slide | transform, visibility | 1 |
| `slideInUp` | slide | transform, visibility | 1 |

## Component Anatomy

### button — 5 instances

**Slots:** label
**Sizes:** large

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **view** (2)
- **join** (1)
- **close** (1)
- **more** (1)

### Button Copy Patterns

- "view organizational chart" (2×)
- "join mpd" (1×)
- "close this module" (1×)
- "more information" (1×)

## Page Intent

**Type:** `about` (confidence 0.61)
**Description:** The mission of the Memphis Police Department is to provide safe environments for the citizens of Memphis, while fostering strong community partnerships.

Alternates: blog-post (0.6)

## Section Roles

Reading order (top→bottom): nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.485 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `photography` (confidence 0.452)
**Counts:** total 14, svg 0, icon 1, screenshot-like 0, photo-like 10
**Dominant aspect:** portrait
**Radius profile on images:** square

## Component Library

**Detected:** `bootstrap` (confidence 0.6)

Evidence:
- bootstrap utility hits: 3

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Lato` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
