# Design Language: Manhattan Institute | Creative. Bold. Independent.

> Extracted from `https://manhattan.institute/` on October 10, 2026
> 2047 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#2c48dc` | rgb(44, 72, 220) | hsl(230, 72%, 52%) | 33 |
| Secondary | `#ff8000` | rgb(255, 128, 0) | hsl(30, 100%, 50%) | 4 |
| Accent | `#00afcf` | rgb(0, 175, 207) | hsl(189, 100%, 41%) | 3 |

### Tonal Ramps

Generated in OKLCH from each role colour, so the steps are perceptually even. The site's own colour keeps its position in the ladder.

| Role | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| primary | `#cef2ff` | `#bfe6ff` | `#a9d3ff` | `#8bb8ff` | `#6692ff` | `#4971ff` | `#385ae6` | **`#2c48dc`** | `#1f35a6` | `#17288b` | `#091257` |
| secondary | `#ffe1af` | `#ffd39b` | `#ffbf7f` | `#ffa155` | **`#ff8000`** | `#d35800` | `#b64200` | `#972f00` | `#7f2200` | `#6a1800` | `#400700` |
| accent | `#bcffff` | `#aaf8ff` | `#8fe9ff` | `#66d1ed` | **`#00afcf`** | `#0093b2` | `#007b98` | `#00647e` | `#005269` | `#004357` | `#002533` |
| neutral | `#f4f5fa` | `#e8eaee` | `#d7d9de` | **`#aeb0b7`** | `#9d9fa6` | `#808288` | `#6a6c72` | `#55565c` | `#45464b` | `#37383d` | `#1e1f21` |

### Semantic Pairs

| Role | Background | Foreground | Contrast | Level |
|------|------------|------------|----------|-------|
| `surface.page` | `#f0f3ff` | `#000000` | 18.97:1 | AAA |
| `surface.raised` | `#e1e6fa` | `#000000` | 16.9:1 | AAA |
| `action.primary` | `#2c48dc` | `#ffffff` | 6.85:1 | AA |
| `action.secondary` | `#ff8000` | `#000000` | 8.34:1 | AAA |
| `action.accent` | `#00afcf` | `#000000` | 8.03:1 | AAA |

### Dominance

Share of painted background area — what the page looks like, as opposed to what it declares most often.

- `#f0f3ff` — 45%
- `#20222e` — 20%
- `#e1e6fa` — 18%
- `#ff8000` — 8%
- `#2c48dc` — 5%
- `#00afcf` — 5%

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#1a1a1a` | hsl(0, 0%, 10%) | 1233 |
| `#ffffff` | hsl(0, 0%, 100%) | 885 |
| `#aeb0b7` | hsl(227, 6%, 70%) | 198 |
| `#000000` | hsl(0, 0%, 0%) | 146 |

### Background Colors

Used on large-area elements: `#f0f3ff`, `#e1e6fa`, `#ff8000`, `#2c48dc`, `#20222e`, `#e8ecfc`, `#00afcf`

### Text Colors

Text color palette: `#000000`, `#1a1a1a`, `#20222e`, `#ffffff`, `#f0f3ff`, `#2c48dc`, `#aeb0b7`, `#00afcf`, `#ff8000`

### Gradients

```css
background-image: linear-gradient(90deg, rgb(44, 72, 220) 50%, rgba(0, 0, 0, 0) 0px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#1a1a1a` | text, border | 1233 |
| `#20222e` | text, border, background | 1200 |
| `#ffffff` | text, border, background | 885 |
| `#f0f3ff` | background, text, border | 491 |
| `#aeb0b7` | text, border, background | 198 |
| `#000000` | text, border | 146 |
| `#2c48dc` | background, text, border | 33 |
| `#e1e6fa` | background, border | 18 |
| `#ff8000` | background, text, border | 4 |
| `#00afcf` | text, border, background | 3 |

## Typography

### Font Families

- **GT America** — used for all (357 elements)
- **Le Monde Livre** — used for all (52 elements)

### Type System

- **Scale ratio** — 1.125 (major second), anchored at 22px · 100% of sizes sit on the ladder
- **Measure** — ~72 characters per line (comfortable)
- **Fluid type** — none; sizes are fixed per breakpoint

### Named Scale

| Role | Size | Weight | Line Height | Tracking |
|------|------|--------|-------------|----------|
| `display` | 128px / 8rem | 700 | 76.8px | normal |
| `title-1` | 64px / 4rem | 700 | 64px | normal |
| `title-2` | 48px / 3rem | 700 | 43.2px | normal |
| `h3` | 46px / 2.875rem | 300 | 46px | normal |
| `title-3` | 40px / 2.5rem | 700 | 46px | normal |
| `title-4` | 36px / 2.25rem | 700 | 41.4px | normal |
| `h2` | 32px / 2rem | 300 | 36.8px | normal |
| `title-5` | 28px / 1.75rem | 400 | 30.8px | normal |
| `title-6` | 24px / 1.5rem | 700 | 27.6px | normal |
| `title-7` | 22px / 1.375rem | 300 | 25.3px | normal |
| `title-8` | 20px / 1.25rem | 300 | 23px | normal |
| `title-9` | 18px / 1.125rem | 400 | 27px | normal |
| `title-10` | 16px / 1rem | 400 | 18.4px | normal |
| `title-11` | 14px / 0.875rem | 700 | 21px | normal |
| `body` | 12px / 0.75rem | 700 | 18px | normal |

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 128px | 8rem | 700 | 76.8px | normal | span |
| 64px | 4rem | 700 | 64px | normal | span |
| 48px | 3rem | 700 | 43.2px | normal | span |
| 46px | 2.875rem | 300 | 46px | normal | h3 |
| 40px | 2.5rem | 700 | 46px | normal | div, span |
| 36px | 2.25rem | 700 | 41.4px | normal | h3, span, a |
| 32px | 2rem | 300 | 36.8px | normal | h2, a |
| 28px | 1.75rem | 400 | 30.8px | normal | p, h3, a, span |
| 24px | 1.5rem | 700 | 27.6px | normal | h2 |
| 22px | 1.375rem | 300 | 25.3px | normal | a, span, h2, i |
| 20px | 1.25rem | 300 | 23px | normal | div, strong, a, span |
| 18px | 1.125rem | 400 | 27px | normal | ul, li, a, svg |
| 16px | 1rem | 400 | 18.4px | normal | html, head, style, script |
| 14px | 0.875rem | 700 | 21px | normal | a, button, span, p |
| 12px | 0.75rem | 700 | 18px | normal | li, a, span, div |

### Heading Scale

```css
h3 { font-size: 46px; font-weight: 300; line-height: 46px; }
h3 { font-size: 36px; font-weight: 700; line-height: 41.4px; }
h2 { font-size: 32px; font-weight: 300; line-height: 36.8px; }
h3 { font-size: 28px; font-weight: 400; line-height: 30.8px; }
h2 { font-size: 24px; font-weight: 700; line-height: 27.6px; }
h2 { font-size: 22px; font-weight: 300; line-height: 25.3px; }
h3 { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 700; line-height: 18px; }
```

### Font Weights in Use

`300` (1484x), `400` (346x), `700` (216x), `800` (1x)

## Spacing

**Base unit:** 5px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-25 | 25px | 1.5625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-57 | 57px | 3.5625rem |
| spacing-70 | 70px | 4.375rem |
| spacing-75 | 75px | 4.6875rem |
| spacing-80 | 80px | 5rem |
| spacing-85 | 85px | 5.3125rem |
| spacing-200 | 200px | 12.5rem |
| spacing-305 | 305px | 19.0625rem |

## Elevation

1 levels from 1 raw shadows · neutral tint

**xs** — blur 8px, y 2px, used 1×
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
```

## CSS Custom Properties

### Colors

```css
--osano-button-border-color: #fff;
--osano-button-background-color: #20222e;
--osano-button-foreground-color: #e2e2e2;
--osano-dialog-background-color: #20222e;
--osano-dialog-foreground-color: #e2e2e2;
--osano-info-dialog-overlay-color: rgba(0,0,0,0.45);
--osano-link-color: #2c48dc;
--osano-toggle-off-track-color: #b8b4c1;
--osano-toggle-off-thumb-color: #FFFFFF;
--osano-toggle-on-track-color: #2c48dc;
--osano-toggle-on-thumb-color: #FFFFFF;
--osano-widget-color: #37cd8f;
--osano-widget-outline-color: #29246a;
--osano-widget-fill-color: #fff;
--osano-focus-outline-color: Highlight;
--osano-button-close-color: var(--osano-dialog-foreground-color);
--osano-button-accept-background-color: var(--osano-button-background-color);
--osano-button-accept-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-accept-foreground-color: var(--osano-button-foreground-color);
--osano-button-deny-background-color: #20222e;
--osano-button-deny-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-deny-foreground-color: #e2e2e2;
--osano-button-reject-all-background-color: var(--osano-button-background-color);
--osano-button-reject-all-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-reject-all-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-reject-all-foreground-color: var(--osano-button-foreground-color);
--osano-button-manage-background-color: var(--osano-button-background-color);
--osano-button-manage-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-manage-foreground-color: var(--osano-button-foreground-color);
--osano-info-dialog-link-color: var(--osano-link-color);
--osano-info-dialog-button-close-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-toggle-off-track-color: var(--osano-toggle-off-track-color);
--osano-info-dialog-toggle-off-thumb-color: var(--osano-toggle-off-thumb-color);
--osano-info-dialog-toggle-on-track-color: var(--osano-toggle-on-track-color);
--osano-info-dialog-toggle-on-thumb-color: var(--osano-toggle-on-thumb-color);
--osano-info-dialog-button-background-color: var(--osano-button-background-color);
--osano-info-dialog-button-border-color: var(--osano-info-dialog-button-foreground-color, var(--osano-button-foreground-color));
--osano-info-dialog-button-foreground-color: var(--osano-button-foreground-color);
--osano-dialog-gpc-background-color: var(--osano-dialog-background-color);
--osano-dialog-gpc-border-color: var(--osano-dialog-foreground-color);
--osano-dialog-gpc-foreground-color: var(--osano-dialog-foreground-color);
--osano-dialog-gpc-color: #37cd84;
--osano-info-dialog-gpc-background-color: var(--osano-info-dialog-background-color, var(--osano-dialog-background-color));
--osano-info-dialog-gpc-border-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-foreground-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-color: var(--osano-dialog-gpc-color);
--osano-gpc-background-color: #ffffff;
--osano-gpc-border-color: #058a5e;
--osano-gpc-foreground-color: #058a5e;
--osano-gpc-color: #37cd84;
--osano-gpc-background-color-hover: #ffffff;
--osano-info-dialog-background-color: #20222e;
--osano-info-dialog-foreground-color: #e2e2e2;
--osano-toggle-off-background-color: #d2cfff;
--osano-toggle-button-off-color: #ffffff;
--osano-toggle-on-background-color: #37cd8f;
--osano-toggle-button-on-color: #f4f4f4;
--osano-button-background-color-contrast: #343642;
--osano-button-foreground-color-contrast: #cecece;
--osano-button-deny-background-color-contrast: #343642;
--osano-button-deny-foreground-color-contrast: #cecece;
--osano-dialog-background-color-contrast: #343642;
--osano-dialog-foreground-color-contrast: #cecece;
--osano-link-color-contrast: #405cf0;
--osano-toggle-off-track-color-contrast: #a4a0ad;
--osano-toggle-off-track-color-disabled: #787481;
--osano-toggle-off-thumb-color-contrast: #ebebeb;
--osano-toggle-off-thumb-color-disabled: #bfbfbf;
--osano-toggle-on-track-color-contrast: #405cf0;
--osano-toggle-on-track-color-disabled: #6c88ff;
--osano-toggle-on-thumb-color-contrast: #ebebeb;
--osano-toggle-on-thumb-color-disabled: #bfbfbf;
--osano-gpc-background-color-contrast: #ebebeb;
--osano-button-background-color-hover: var(--osano-button-background-color-contrast, #343642);
--osano-button-foreground-color-hover: var(--osano-button-foreground-color-contrast, #cecece);
--osano-button-background-color-focus: var(--osano-button-foreground-color-hover, var(--osano-button-foreground-color-contrast));
--osano-button-foreground-color-focus: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-toggle-off-track-color-hover: var(--osano-toggle-off-track-color-contrast, #a4a0ad);
--osano-toggle-off-thumb-color-hover: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-toggle-off-track-color-focus: var(--osano-toggle-off-thumb-color-hover, var(--osano-toggle-off-thumb-color-contrast));
--osano-toggle-off-thumb-color-focus: var(--osano-toggle-off-track-color-hover, var(--osano-toggle-off-track-color-contrast));
--osano-toggle-on-track-color-hover: var(--osano-toggle-on-track-color-contrast, #405cf0);
--osano-toggle-on-thumb-color-hover: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-toggle-on-track-color-focus: var(--osano-toggle-on-thumb-color-hover, var(--osano-toggle-on-thumb-color-contrast));
--osano-toggle-on-thumb-color-focus: var(--osano-toggle-on-track-color-hover, var(--osano-toggle-on-track-color-contrast));
--osano-button-accept-background-color-contrast: var(--osano-button-background-color-contrast, #343642);
--osano-button-accept-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #cecece);
--osano-button-accept-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-accept-foreground-color-hover: var(--osano-button-accept-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-accept-background-color-focus: var(--osano-button-accept-foreground-color-hover, var(--osano-button-accept-foreground-color-contrast));
--osano-button-accept-foreground-color-focus: var(--osano-button-accept-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-deny-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-deny-foreground-color-hover: var(--osano-button-deny-foreground-color-contrast, #cecece);
--osano-button-deny-background-color-focus: var(--osano-button-deny-foreground-color-hover, var(--osano-button-deny-foreground-color-contrast));
--osano-button-deny-foreground-color-focus: var(--osano-button-deny-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-reject-all-background-color-contrast: var(--osano-button-background-color-contrast, #343642);
--osano-button-reject-all-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #cecece);
--osano-button-reject-all-foreground-color-hover: var(--osano-button-reject-all-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-reject-all-background-color-focus: var(--osano-button-reject-all-foreground-color-hover, var(--osano-button-reject-all-foreground-color-contrast));
--osano-button-reject-all-foreground-color-focus: var(--osano-button-reject-all-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-manage-background-color-contrast: var(--osano-button-background-color-contrast, #343642);
--osano-button-manage-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #cecece);
--osano-button-manage-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-manage-foreground-color-hover: var(--osano-button-manage-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-manage-background-color-focus: var(--osano-button-manage-foreground-color-hover, var(--osano-button-manage-foreground-color-contrast));
--osano-button-manage-foreground-color-focus: var(--osano-button-manage-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #343642);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #cecece);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #a4a0ad);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #787481);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #405cf0);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #6c88ff);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #405cf0);
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
```

### Shadows

```css
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
```

### Other

```css
--osano-clear-dialog-background: rgba(32,34,46,0);
--osano-dialog-type: bar;
--osano-display-position: bottom;
--osano-info-dialog-position: right;
--osano-widget-position: right;
--osano-opt-out-widget-position: left;
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
```

### Dependencies

```css
0: --osano-dialog-foreground-color;
0: --osano-button-background-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-background-color;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-button-background-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-link-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-toggle-off-track-color;
0: --osano-toggle-off-thumb-color;
0: --osano-toggle-on-track-color;
0: --osano-toggle-on-thumb-color;
0: --osano-button-background-color;
0: --osano-info-dialog-button-foreground-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-dialog-background-color;
0: --osano-dialog-foreground-color;
0: --osano-dialog-foreground-color;
0: --osano-info-dialog-background-color;
1: --osano-dialog-background-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-dialog-gpc-color;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-foreground-color-hover;
1: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-off-thumb-color-contrast;
0: --osano-toggle-off-thumb-color-hover;
1: --osano-toggle-off-thumb-color-contrast;
0: --osano-toggle-off-track-color-hover;
1: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-on-track-color-contrast;
0: --osano-toggle-on-thumb-color-contrast;
0: --osano-toggle-on-thumb-color-hover;
1: --osano-toggle-on-thumb-color-contrast;
0: --osano-toggle-on-track-color-hover;
1: --osano-toggle-on-track-color-contrast;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-accept-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-accept-foreground-color-hover;
1: --osano-button-accept-foreground-color-contrast;
0: --osano-button-accept-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-deny-foreground-color-contrast;
0: --osano-button-deny-foreground-color-hover;
1: --osano-button-deny-foreground-color-contrast;
0: --osano-button-deny-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-reject-all-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-reject-all-foreground-color-hover;
1: --osano-button-reject-all-foreground-color-contrast;
0: --osano-button-reject-all-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-manage-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-manage-foreground-color-hover;
1: --osano-button-manage-foreground-color-contrast;
0: --osano-button-manage-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-info-dialog-button-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-info-dialog-button-foreground-color-hover;
1: --osano-info-dialog-button-foreground-color-contrast;
0: --osano-info-dialog-button-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-track-color-contrast;
1: --osano-toggle-off-track-color-contrast;
0: --osano-info-dialog-toggle-off-thumb-color-contrast;
1: --osano-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-thumb-color-hover;
1: --osano-info-dialog-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-track-color-hover;
1: --osano-info-dialog-toggle-off-track-color-contrast;
0: --osano-toggle-off-track-color-disabled;
0: --osano-toggle-off-thumb-color-disabled;
0: --osano-toggle-on-track-color-contrast;
0: --osano-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-track-color-contrast;
1: --osano-toggle-on-track-color-contrast;
0: --osano-info-dialog-toggle-on-thumb-color-contrast;
1: --osano-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-thumb-color-hover;
1: --osano-info-dialog-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-track-color-hover;
1: --osano-info-dialog-toggle-on-track-color-contrast;
0: --osano-toggle-on-track-color-disabled;
0: --osano-toggle-on-thumb-color-disabled;
0: --osano-link-color-contrast;
```

### Semantic

```css
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
--osano-info-dialog-position: right;
--osano-info-dialog-overlay-color: rgba(0,0,0,0.45);
--osano-info-dialog-link-color: var(--osano-link-color);
--osano-info-dialog-button-close-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-toggle-off-track-color: var(--osano-toggle-off-track-color);
--osano-info-dialog-toggle-off-thumb-color: var(--osano-toggle-off-thumb-color);
--osano-info-dialog-toggle-on-track-color: var(--osano-toggle-on-track-color);
--osano-info-dialog-toggle-on-thumb-color: var(--osano-toggle-on-thumb-color);
--osano-info-dialog-button-background-color: var(--osano-button-background-color);
--osano-info-dialog-button-border-color: var(--osano-info-dialog-button-foreground-color, var(--osano-button-foreground-color));
--osano-info-dialog-button-foreground-color: var(--osano-button-foreground-color);
--osano-info-dialog-gpc-background-color: var(--osano-info-dialog-background-color, var(--osano-dialog-background-color));
--osano-info-dialog-gpc-border-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-foreground-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-color: var(--osano-dialog-gpc-color);
--osano-info-dialog-background-color: #20222e;
--osano-info-dialog-foreground-color: #e2e2e2;
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #343642);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #cecece);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #a4a0ad);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #787481);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #405cf0);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #6c88ff);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #405cf0);
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 376px | min-width |
| 555px | 555px | max-width |
| sm | 576px | max-width |
| sm | 600px | max-width |
| sm | 620px | max-width |
| sm | 650px | max-width |
| md | 767px | max-width |
| md | 768px | max-width |
| md | 781px | max-width |
| md | 782px | min-width |
| lg | 1023px | max-width |
| 1180px | 1180px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

**Durations:** `0.4s`, `0.2s`, `1s`, `0s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: color 0.4s;
transition: fill 0.4s;
transition: opacity 0.2s 0.2s, visibility 0.2s 0.2s;
transition: top 0.2s, transform 0.2s;
transition: left 0.2s;
transition: transform 1s;
transition: clip-path 0s 1s, opacity 0s 1s;
transition: clip-path 1s, opacity;
transition: opacity 1s, visibility 0s 1s;
```

### Keyframe Animations

**delay-overflow**
```css
@keyframes delay-overflow {
  0% { overflow: hidden auto; }
}
```

**osano-load-scale**
```css
@keyframes osano-load-scale {
  0% { transform: translate(0px, -50%) scale(0); }
  100% { transform: translate(0px, -50%) scale(1); opacity: 0; }
}
```

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

**overlay-menu__fade-in-animation**
```css
@keyframes overlay-menu__fade-in-animation {
  0% { opacity: 0; transform: translateY(0.5em); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**a**
```css
@keyframes a {
  100% { transform: rotate(1turn); }
}
```

**bounce**
```css
@keyframes bounce {
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (77 instances)

```css
.buttons {
  background-color: rgb(44, 72, 220);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (57 instances)

```css
.cards {
  background-color: rgb(32, 34, 46);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (219 instances)

```css
.links {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
}
```

### Navigation (5 instances)

```css
.navigation {
  background-color: rgb(240, 243, 255);
  color: rgb(32, 34, 46);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (4 instances)

```css
.footer {
  background-color: rgb(32, 34, 46);
  color: rgb(26, 26, 26);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (30 instances)

```css
.modals {
  background-color: rgb(240, 243, 255);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (108 instances)

```css
.dropdowns {
  background-color: rgb(32, 34, 46);
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
  padding-top: 0px;
}
```

### Badges (5 instances)

```css
.badges {
  color: rgb(174, 176, 183);
  font-size: 12px;
  font-weight: 300;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (8 instances)

```css
.tabs {
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 300;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
}
```

### ProgressBars (2 instances)

```css
.progressBars {
  color: rgb(26, 26, 26);
  border-radius: 0px;
  font-size: 16px;
}
```

### Switches (1 instances)

```css
.switches {
  background-color: rgb(240, 243, 255);
  border-radius: 0px;
  border-color: rgb(32, 34, 46);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 14 instances, 2 variants

**Variant 1** (13 instances)

```css
  background: rgb(32, 34, 46);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 700;
```

**Variant 2** (1 instance)

```css
  background: rgb(225, 230, 250);
  color: rgb(32, 34, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(32, 34, 46);
  font-size: 14px;
  font-weight: 700;
```

### Button — 14 instances, 2 variants

**Variant 1** (13 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 3px 20px 0px 20px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 700;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(32, 34, 46);
  padding: 3px 50px 0px 50px;
  border-radius: 0px;
  border: 0px none rgb(32, 34, 46);
  font-size: 14px;
  font-weight: 700;
```

### Button — 14 instances, 2 variants

**Variant 1** (13 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 1px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(255, 255, 255) rgb(255, 255, 255) rgba(0, 0, 0, 0);
  font-size: 12px;
  font-weight: 700;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(32, 34, 46);
  padding: 0px 0px 1px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgb(32, 34, 46) rgb(32, 34, 46) rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 700;
```

### Button — 6 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
```

**Variant 2** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Button — 36 instances, 5 variants

**Variant 1** (20 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(32, 34, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(32, 34, 46);
  font-size: 16px;
  font-weight: 300;
```

**Variant 2** (4 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(240, 243, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(240, 243, 255);
  font-size: 16px;
  font-weight: 300;
```

**Variant 3** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 128, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 128, 0);
  font-size: 18px;
  font-weight: 700;
```

**Variant 4** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 300;
```

**Variant 5** (4 instances)

```css
  background: rgb(44, 72, 220);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(44, 72, 220);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(44, 72, 220);
  font-size: 32px;
  font-weight: 700;
```

### Card — 11 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
```

**Variant 2** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 5 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(240, 243, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px 0px 0px solid none none rgb(44, 72, 220) rgb(240, 243, 255) rgb(240, 243, 255);
  font-size: 12px;
  font-weight: 300;
```

**Variant 2** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(32, 34, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px 0px 0px solid none none rgb(225, 230, 250) rgb(32, 34, 46) rgb(32, 34, 46);
  font-size: 12px;
  font-weight: 300;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Link — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(32, 34, 46);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(26, 26, 26);
  font-size: 16px;
  font-weight: 300;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(32, 34, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px 0px 0px solid none none rgb(225, 230, 250) rgb(32, 34, 46) rgb(32, 34, 46);
  font-size: 12px;
  font-weight: 300;
```

## Layout System

**179 grid containers** and **31 flex containers** detected.

### The System

- **Content column** — 1790px wide (full-bleed — no constrained container found)
  - Widest constrained block inside it: 830px
  - Width ladder: 450px · 505px · 565px · 830px · 1440px · 1790px
- **Column system** — 2 columns
- **Gap scale** — 5px · 8px · 10px · 12px · 15px · 20px · 25px · 30px
- **Fluid layout** — 12 clamp/viewport declarations

```css
.osano-cm-dialog--type_box { width: calc(-2em + 100vw); }
.osano-cm-dialog--type_bar .osano-cm-dialog__buttons { max-width: 30vw; }
.osano-cm-dialog--type_box.osano-cm-dialog--wide { max-width: calc(-4em + 100vw); }
.osano-cm-info-dialog { width: 100vw; }
.osano-cm-opt-out-honored-wrapper__tooltip { max-width: calc(-4em + 100vw); }
.osano-cm-opt-out-honored-wrapper--position_right, .osano-cm-opt-out-honored-wrapper--position_left { max-width: calc(-2.5em + 100vw); }
```

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1440px | 25px |
| 1800px | 0px |
| 100% | 0px |
| 830px | 0px |
| 800px | 0px |
| 768px | 0px |
| 775px | 0px |
| 450px | 0px |
| 565px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 67x |
| 2-column | 51x |
| 3-column | 21x |
| 4-column | 7x |
| 6-column | 2x |
| 5-column | 1x |
| 8-column | 1x |

### Grid Templates

```css
grid-template-columns: 1790px;
grid-template-columns: 1790px;
grid-template-columns: 1790px;
grid-template-columns: 1790px;
grid-template-columns: 800px 555px;
gap: 25px 35px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 23x |
| row/wrap | 8x |

**Gap values:** `0px normal`, `normal 15px`, `5px`, `6px`, `8px`, `10px`, `10px normal`, `12px`, `15px`, `15%`, `20px`, `25px 35px`, `30px`, `32px`, `35px`, `40px`, `45px 85px`, `70px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 92/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 82/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 118 !important rules — prefer specificity over overrides
- 86% of CSS is unused — consider purging
- 6913 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 2 | brand |

```css
background: linear-gradient(90deg, rgb(44, 72, 220) 50%, rgba(0, 0, 0, 0) 0px);
```

## Z-Index Map

**8 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,999 | div.u._.h.e.a.d.e.r, div.u._.s.t.i.c.k.y.-.f.o.o.t.e.r, div.s.l.i.d.e. .s.l.i.c.k.-.s.l.i.d.e |
| sticky | 10,15 | ul.s.u.b.-.m.e.n.u, ul.s.u.b.-.m.e.n.u, ul.s.u.b.-.m.e.n.u |
| base | -1,2 | div.s.w.i.p.e.r. .i.m.a.g.e.-.s.l.i.d.e.r. .j.s.-.i.m.a.g.e.-.s.l.i.d.e.r. .s.w.i.p.e.r.-.f.a.d.e. .s.w.i.p.e.r.-.i.n.i.t.i.a.l.i.z.e.d. .s.w.i.p.e.r.-.h.o.r.i.z.o.n.t.a.l. .s.w.i.p.e.r.-.w.a.t.c.h.-.p.r.o.g.r.e.s.s. .s.w.i.p.e.r.-.b.a.c.k.f.a.c.e.-.h.i.d.d.e.n, span.d.a.y.-.d.e.c.o.r.a.t.i.o.n, span.d.a.y.-.d.e.c.o.r.a.t.i.o.n |

## SVG Icons

**13 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 2 |
| md | 4 |
| lg | 4 |
| xl | 3 |

**Icon colors:** `currentColor`, `#2C48DC`, `#F0F3FF`, `#E1E6FA`, `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| GT America | self-hosted | 300, 400, 500, 700 | normal, italic |
| Le Monde Livre | self-hosted | 400, 700 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 10 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 7 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 6 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (10x), 2.16:1 (4x), 3:2 (4x), 16:9 (2x), 8.47:1 (1x), 4:3 (1x), 3.1:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `lg` | `500ms` | 500 |
| `xl` | `1s` | 1000 |

## Component Anatomy

### button — 85 instances

**Slots:** label
**Variants:** primary
**Sizes:** large

| variant | count | sample label |
|---|---|---|
| default | 78 | City Journal |
| primary | 7 | Support |

### card — 28 instances

**Slots:** media

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (verbose)

### Top CTA Verbs

- **stay** (25)
- **support** (21)
- **city** (3)
- **read** (1)
- **cities** (1)
- **culture** (1)
- **economics** (1)
- **education** (1)

### Button Copy Patterns

- "stay informed about our work" (18×)
- "support our work" (18×)
- "stay informed about our work
      


                  

  
              support our work
      


                  

  
              stay informed about ou" (4×)
- "city journal" (3×)
- "support" (3×)
- "stay informed about our work
support our work" (2×)
- "stay informed about our work
      


            

  
              support our work
      


            

  
              stay informed about our work" (1×)
- "2025 college rankings
choosing a college? read this first." (1×)
- "cities" (1×)
- "culture" (1×)

### Sample Headings

> How States Can Cut Rules and Regulations—and Make It Stick

## Page Intent

**Type:** `landing` (confidence 0.31)

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): testimonial → nav → nav → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | — | 0.9 |
| 2 | testimonial | — | 0.8 |
| 3 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.331 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 0px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `photography` (confidence 0.326)
**Counts:** total 23, svg 2, icon 1, screenshot-like 0, photo-like 13
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `GT America` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
