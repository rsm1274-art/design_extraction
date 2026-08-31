# Design Language: ishikawa.co — Walkable Atlas by Hidekazu Ishikawa

> Extracted from `https://ishikawa.co/en/` on August 20, 2026
> 779 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#dcf6f2` | rgb(220, 246, 242) | hsl(171, 59%, 91%) | 27 |
| Secondary | `#4ee8dd` | rgb(78, 232, 221) | hsl(176, 77%, 61%) | 22 |
| Accent | `#d45199` | rgb(212, 81, 153) | hsl(327, 60%, 57%) | 16 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#1f1f1f` | hsl(0, 0%, 12%) | 565 |
| `#333735` | hsl(150, 4%, 21%) | 315 |
| `#2f302d` | hsl(80, 3%, 18%) | 194 |
| `#000000` | hsl(0, 0%, 0%) | 128 |
| `#486c62` | hsl(163, 20%, 35%) | 41 |
| `#ffffff` | hsl(0, 0%, 100%) | 38 |
| `#5b8b70` | hsl(146, 21%, 45%) | 28 |
| `#444444` | hsl(0, 0%, 27%) | 25 |
| `#423737` | hsl(0, 9%, 24%) | 17 |
| `#30443d` | hsl(159, 17%, 23%) | 15 |
| `#696b74` | hsl(229, 5%, 43%) | 10 |
| `#101010` | hsl(0, 0%, 6%) | 6 |

### Background Colors

Used on large-area elements: `#ffffff`

### Text Colors

Text color palette: `#000000`, `#1f1f1f`, `#44695f`, `#444444`, `#212d29`, `#313733`, `#374944`, `#26322e`, `#2e3a36`, `#333735`

### Gradients

```css
background-image: radial-gradient(circle at 2px 5px, rgba(93, 153, 137, 0.72) 0px, rgba(93, 153, 137, 0.72) 2px, rgba(0, 0, 0, 0) 2.5px), radial-gradient(circle at 9px 2px, rgba(205, 99, 149, 0.58) 0px, rgba(205, 99, 149, 0.58) 2px, rgba(0, 0, 0, 0) 2.5px), radial-gradient(circle at 16px 6px, rgba(100, 172, 187, 0.66) 0px, rgba(100, 172, 187, 0.66) 2px, rgba(0, 0, 0, 0) 2.5px);
```

```css
background-image: radial-gradient(circle, rgba(55, 73, 68, 0.7) 0px, rgba(55, 73, 68, 0.7) 1.05px, rgba(0, 0, 0, 0) 1.4px);
```

```css
background-image: repeating-linear-gradient(rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 34px, rgba(73, 116, 94, 0.06) 35px, rgba(0, 0, 0, 0) 36px), none;
```

```css
background-image: radial-gradient(at 50% 52%, rgba(255, 255, 255, 0.98) 0px, rgba(255, 255, 255, 0.98) 42%, rgba(255, 255, 255, 0.78) 66%, rgba(255, 255, 255, 0) 86%);
```

```css
background-image: radial-gradient(at 48% 54%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.48) 28%, rgba(255, 255, 255, 0.2) 52%, rgba(255, 255, 255, 0) 80%);
```

```css
background-image: linear-gradient(to right, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0) 11%, rgba(255, 255, 255, 0) 82%, rgba(255, 255, 255, 0.94)), linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0) 18%, rgba(255, 255, 255, 0) 82%, rgba(255, 255, 255, 0.94));
```

```css
background-image: linear-gradient(18deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 48%, rgba(80, 164, 180, 0.32) 49%, rgba(80, 164, 180, 0.32) 51%, rgba(0, 0, 0, 0) 52%), linear-gradient(-24deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 48%, rgba(191, 145, 75, 0.28) 49%, rgba(191, 145, 75, 0.28) 51%, rgba(0, 0, 0, 0) 52%);
```

```css
background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.86));
```

```css
background-image: radial-gradient(circle, rgba(91, 139, 112, 0.66) 0px, rgba(91, 139, 112, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(91, 139, 112, 0.24) 0px, rgba(91, 139, 112, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

```css
background-image: repeating-linear-gradient(rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 3px, rgba(255, 255, 255, 0.32) 4px);
```

```css
background-image: radial-gradient(circle, rgba(212, 81, 153, 0.66) 0px, rgba(212, 81, 153, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(212, 81, 153, 0.24) 0px, rgba(212, 81, 153, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

```css
background-image: radial-gradient(circle, rgba(98, 170, 190, 0.66) 0px, rgba(98, 170, 190, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(98, 170, 190, 0.24) 0px, rgba(98, 170, 190, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

```css
background-image: radial-gradient(circle, rgba(178, 180, 100, 0.66) 0px, rgba(178, 180, 100, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(178, 180, 100, 0.24) 0px, rgba(178, 180, 100, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

```css
background-image: radial-gradient(circle, rgba(213, 128, 155, 0.66) 0px, rgba(213, 128, 155, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(213, 128, 155, 0.24) 0px, rgba(213, 128, 155, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

```css
background-image: radial-gradient(circle, rgba(105, 107, 116, 0.66) 0px, rgba(105, 107, 116, 0.66) 1.2px, rgba(0, 0, 0, 0) 1.45px), radial-gradient(circle, rgba(105, 107, 116, 0.24) 0px, rgba(105, 107, 116, 0.24) 1px, rgba(0, 0, 0, 0) 1.3px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#1f1f1f` | text, border | 565 |
| `#333735` | text, border, background | 315 |
| `#2f302d` | text, border | 194 |
| `#000000` | text, border | 128 |
| `#486c62` | text, border, background | 41 |
| `#ffffff` | background | 38 |
| `#bcc268` | background, text, border | 36 |
| `#5b8b70` | background, text, border | 28 |
| `#dcf6f2` | background, text, border | 27 |
| `#ebe8c1` | text, border | 27 |
| `#444444` | text, border, background | 25 |
| `#30654a` | text, border | 25 |
| `#4ee8dd` | border, background, text | 22 |
| `#50a4b4` | background, border, text | 21 |
| `#924437` | text, border | 19 |
| `#914652` | text, border | 19 |
| `#7e561c` | text, border | 19 |
| `#423737` | text, border | 17 |
| `#d45199` | background, text, border | 16 |
| `#30443d` | text, border | 15 |
| `#62aabe` | background, text, border | 14 |
| `#d5809b` | background, text, border | 14 |
| `#696b74` | background, text, border | 10 |
| `#cea02e` | border | 8 |
| `#101010` | background, text, border | 6 |
| `#5c9788` | background, border, text | 5 |
| `#4a8a94` | border | 4 |
| `#744d80` | border, background | 4 |
| `#bf9225` | border | 4 |
| `#3e5c52` | text, border | 4 |

## Typography

### Font Families

- **Avenir Next** — used for all (473 elements)
- **Ishikawa Klee** — used for body (194 elements)
- **Times New Roman** — used for body (56 elements)
- **Helvetica Neue** — used for all (30 elements)
- **SF Mono** — used for body (13 elements)
- **Arial** — used for body (12 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 58px | 3.625rem | 500 | 64.96px | normal | h1, span, br |
| 52px | 3.25rem | 500 | 52px | normal | strong |
| 34px | 2.125rem | 500 | 37.4px | normal | strong |
| 31px | 1.9375rem | 700 | 57.35px | normal | h1, strong |
| 28px | 1.75rem | 600 | 28px | normal | span |
| 26px | 1.625rem | 400 | 42.9px | normal | p |
| 25px | 1.5625rem | 500 | 34.5px | normal | strong, h2, span |
| 23px | 1.4375rem | 500 | 34.04px | normal | strong |
| 21px | 1.3125rem | 400 | 21px | normal | span |
| 19px | 1.1875rem | 400 | 28.5px | normal | b, br |
| 18px | 1.125rem | 400 | 33.3px | normal | span |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 15.5px | 0.9688rem | 400 | 28.675px | 0.155px | body, noscript, div, a |
| 15px | 0.9375rem | 400 | 27.75px | normal | b, span, p |
| 14px | 0.875rem | 500 | 20.3px | normal | b, p |

### Heading Scale

```css
h1 { font-size: 58px; font-weight: 500; line-height: 64.96px; }
h1 { font-size: 31px; font-weight: 700; line-height: 57.35px; }
h2 { font-size: 25px; font-weight: 500; line-height: 34.5px; }
```

### Body Text

```css
body { font-size: 15.5px; font-weight: 400; line-height: 28.675px; }
```

### Font Weights in Use

`400` (652x), `600` (86x), `500` (39x), `700` (1x), `620` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-42 | 42px | 2.625rem |
| spacing-52 | 52px | 3.25rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-96 | 96px | 6rem |
| spacing-130 | 130px | 8.125rem |
| spacing-180 | 180px | 11.25rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 2 |
| md | 6px | 3 |
| full | 50px | 170 |
| full | 53px | 2 |
| full | 56px | 3 |
| full | 70px | 1 |
| full | 999px | 1 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(188, 194, 104, 0.08) 0px 0px 0px 2px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(91, 139, 112, 0) 0px 0px 0px 4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(212, 81, 153, 0) 0px 0px 0px 4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(98, 170, 190, 0) 0px 0px 0px 4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(178, 180, 100, 0) 0px 0px 0px 4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(213, 128, 155, 0) 0px 0px 0px 4px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(105, 107, 116, 0) 0px 0px 0px 4px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(91, 139, 112, 0.74) 0px 0px 4px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(212, 81, 153, 0.72) 0px 0px 4px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(98, 170, 190, 0.74) 0px 0px 4px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(178, 180, 100, 0.78) 0px 0px 4px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(213, 128, 155, 0.74) 0px 0px 4px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(105, 107, 116, 0.72) 0px 0px 4px 0px;
```

**md** — blur: 9px
```css
box-shadow: rgba(80, 164, 180, 0.28) 0px 0px 9px 0px;
```

**md** — blur: 0px
```css
box-shadow: rgba(73, 116, 94, 0.024) 8px 12px 0px 0px;
```

**lg (inset)** — blur: 12px
```css
box-shadow: rgba(54, 50, 42, 0.035) 0px 5px 12px 0px, rgba(98, 88, 68, 0.08) 0px -1px 0px 0px inset;
```

**lg** — blur: 0px
```css
box-shadow: rgba(80, 164, 180, 0.52) 17px -7px 0px -2px, rgba(80, 164, 180, 0.52) 31px 5px 0px -1px, rgba(80, 164, 180, 0.52) 47px -3px 0px -2px;
```

## CSS Custom Properties

### Colors

```css
--bg: #07090e;
--bg-soft: #0b0e15;
--utility-header-bg: rgba(253, 253, 252, 0.84);
```

### Spacing

```css
--utility-brand-size: 14px;
--utility-brand-spacing: 0.06em;
--utility-language-size: 10px;
--utility-language-gap: 2px;
```

### Typography

```css
--text: #edf0f7;
--text-soft: #a8b1c3;
--text-dim: #6d7689;
--font-sans: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;
--font-display: "Avenir Next", "Helvetica Neue", "Hiragino Sans", "Noto Sans JP", sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace;
--utility-font-mono: "SF Mono", Menlo, Consolas, monospace;
--game-font-ui: "Avenir Next", "Helvetica Neue", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", sans-serif;
--game-font-poetic: "Ishikawa Klee", "Klee One", "Hannotate SC", "HanziPen SC", "YuKyokasho", "Yu Kyokasho", cursive;
--game-font-hand-latin: "Ishikawa Klee", "Klee One", "Comic Sans MS", "Bradley Hand", "Segoe Print", cursive;
--game-font-mono: "SF Mono", Menlo, Consolas, monospace;
```

### Shadows

```css
--game-shadow: rgba(33, 31, 28, 0.12);
```

### Radii

```css
--radius: 20px;
```

### Other

```css
--panel: rgba(255, 255, 255, 0.032);
--panel-strong: rgba(255, 255, 255, 0.06);
--line: rgba(255, 255, 255, 0.09);
--line-strong: rgba(255, 255, 255, 0.2);
--teal: #5eead4;
--indigo: #8b9cf9;
--pink: #f0a6ca;
--grad: linear-gradient(100deg, #5eead4 0%, #8b9cf9 52%, #f0a6ca 100%);
--grad-soft: linear-gradient(100deg, rgba(94, 234, 212, 0.7), rgba(139, 156, 249, 0.7));
--utility-header-height: 60px;
--utility-header-inline: 14px;
--utility-header-filter: blur(14px) saturate(0.9);
--shell: 1240px;
--gutter: clamp(20px, 4vw, 48px);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-snap: cubic-bezier(0.34, 1.3, 0.4, 1);
--head-h: 72px;
--game-ink: #444;
--game-ink-strong: #1f1f1f;
--game-paper: #fff;
--game-wash: #f7f5ef;
--game-blue: #6fb8c6;
--game-yellow: #d8b94c;
--game-red: #c56f5e;
--game-green: #7aa78e;
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
| xs | 360px | max-width |
| sm | 420px | max-width |
| sm | 480px | max-width |
| sm | 600px | max-width |
| sm | 680px | max-width |
| 840px | 840px | max-width |
| 900px | 900px | max-width |
| lg | 1020px | max-width |
| lg | 1079px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.18s`, `0.32s`, `0.46s`, `0.5s`, `0s`, `0.16s`, `0.4s`, `0.52s`, `0.7s`, `0.24s`, `0.9s`, `0.98s`, `0.36s`, `0.42s`, `0.22s`, `0.2s`, `0.62s`, `0.92s`, `0.56s`, `0.28s`, `0.26s`, `1.2s`, `0.08s`, `0.34s`, `0.72s`, `0.38s`, `0.3s`, `0.76s`, `0.48s`, `0.68s`, `0.14s`

### Common Transitions

```css
transition: all;
transition: color 0.18s, opacity 0.32s, transform 0.46s cubic-bezier(0.16, 1, 0.3, 1);
transition: opacity 0.5s, transform 0.46s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.5s;
transition: color 0.16s, text-decoration-color 0.16s;
transition: opacity 0.18s;
transition: opacity 0.52s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), color 0.24s;
transition: opacity 0.9s;
transition: stroke-dashoffset 0.98s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s;
transition: stroke-dashoffset 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s;
transition: stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.36s;
```

### Keyframe Animations

**orb-a**
```css
@keyframes orb-a {
  0% { transform: translate3d(0px, 0px, 0px) scale(1); }
  50% { transform: translate3d(7vw, 5vh, 0px) scale(1.08); }
  100% { transform: translate3d(-3vw, 9vh, 0px) scale(0.96); }
}
```

**orb-b**
```css
@keyframes orb-b {
  0% { transform: translate3d(0px, 0px, 0px) scale(1); }
  50% { transform: translate3d(-8vw, 7vh, 0px) scale(1.1); }
  100% { transform: translate3d(2vw, -4vh, 0px) scale(0.94); }
}
```

**orb-c**
```css
@keyframes orb-c {
  0% { transform: translate3d(0px, 0px, 0px) scale(1); }
  100% { transform: translate3d(9vw, -7vh, 0px) scale(1.12); }
}
```

**trail-fade**
```css
@keyframes trail-fade {
  0% { opacity: 0.95; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + var(--tx, 0px)), calc(-50% + var(--ty, 10px))) scale(0.15); }
}
```

**ch-rise**
```css
@keyframes ch-rise {
  100% { transform: translateY(0px) rotate(0deg); }
}
```

**scroll-cue**
```css
@keyframes scroll-cue {
  0% { transform: translateY(-100%); }
  55% { transform: translateY(0px); }
  100% { transform: translateY(100%); }
}
```

**marquee**
```css
@keyframes marquee {
  100% { transform: translateX(-50%); }
}
```

**home-language-fail-open**
```css
@keyframes home-language-fail-open {
  100% { opacity: 1; pointer-events: auto; visibility: visible; transform: translateY(0px); }
}
```

**game-boot-logo-form**
```css
@keyframes game-boot-logo-form {
  100% { opacity: 0.74; transform: translate3d(0, var(--game-boot-logo-offset-y), 0) scale(1); }
}
```

**game-boot-logo-breathe**
```css
@keyframes game-boot-logo-breathe {
  0% { opacity: 0.66; transform: translate3d(0, var(--game-boot-logo-offset-y), 0) scale(0.995); }
  100% { opacity: 0.78; transform: translate3d(0, var(--game-boot-logo-offset-y), 0) scale(1.008); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (20 instances)

```css
.button {
  background-color: rgb(240, 240, 240);
  color: rgba(35, 35, 35, 0.66);
  font-size: 12px;
  font-weight: 400;
  padding-top: 1px;
  padding-right: 6px;
  border-radius: 0px;
}
```

### Cards (3 instances)

```css
.card {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (52 instances)

```css
.link {
  color: rgb(47, 48, 45);
  font-size: 13px;
  font-weight: 400;
}
```

### Navigation (4 instances)

```css
.navigatio {
  color: rgb(31, 31, 31);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.foote {
  color: rgb(31, 31, 31);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 15.5px;
}
```

### Badges (13 instances)

```css
.badge {
  background-color: color(srgb 1 1 1 / 0.72);
  color: rgba(48, 52, 49, 0.86);
  font-size: 13px;
  font-weight: 600;
  padding-top: 3px;
  padding-right: 5px;
  border-radius: 2px;
}
```

### ProgressBars (1 instances)

```css
.progressBar {
  color: rgb(31, 31, 31);
  border-radius: 0px;
  font-size: 15.5px;
}
```

### Switches (3 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgba(68, 68, 68, 0.42);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(46, 50, 47, 0.46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgba(46, 50, 47, 0.46);
  font-size: 13.3333px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(38, 49, 45, 0.8);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px 0px 1px none none solid rgba(38, 49, 45, 0.8) rgba(38, 49, 45, 0.8) rgba(45, 57, 53, 0.22);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**87 grid containers** and **48 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 760px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 58x |
| 2-column | 20x |
| 4-column | 1x |

### Grid Templates

```css
grid-template-columns: 1280px;
grid-template-columns: 790px;
gap: 28px;
grid-template-columns: 192.328px 565.672px;
gap: 32px;
grid-template-columns: 192.328px 565.672px;
gap: 32px;
grid-template-columns: 192.328px 565.672px;
gap: 32px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 45x |
| row/wrap | 3x |

**Gap values:** `10px`, `10px 22px`, `12px`, `12px 30px`, `13px`, `14px 28px`, `15px`, `16px`, `1px 12px`, `28px`, `2px`, `32px`, `38.4px`, `4px`, `4px 5px`, `5px`, `7px`, `8px`, `9px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 15px | Yes | 2 | No | 812px |
| tablet (768px) | 15.5px | Yes | 4 | No | 1024px |
| desktop (1280px) | 15.5px | Yes | 4 | No | 800px |
| wide (1920px) | 15.5px | Yes | 4 | No | 1080px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- Body font size: `15px` → `15.5px`
- H1 size: `30px` → `31px`
- Max grid columns: `2` → `4`
- Page height: `812px` → `1024px`

**768px → 1280px** (tablet → desktop):
- Page height: `1024px` → `800px`

**1280px → 1920px** (desktop → wide):
- Page height: `800px` → `1080px`

## Interaction States

### Button States

**"Decline"**
```css
/* Hover */
border-color: rgb(49, 55, 51) rgb(49, 55, 51) rgba(49, 55, 51, 0.28) → rgb(56, 106, 90);
```
```css
/* Focus */
border-color: rgb(49, 55, 51) rgb(49, 55, 51) rgba(49, 55, 51, 0.28) → rgb(56, 106, 90);
outline: rgb(49, 55, 51) none 3px → rgb(94, 234, 212) solid 2px;
```

**"Allow"**
```css
/* Focus */
outline: rgb(49, 55, 51) none 3px → rgb(94, 234, 212) solid 2px;
```

**"♪"**
```css
/* Hover */
color: rgba(46, 50, 47, 0.46) → rgba(37, 41, 38, 0.796);
border-color: rgba(46, 50, 47, 0.46) → rgba(37, 41, 38, 0.796);
transform: none → matrix(1, 0, 0, 1, 0, -0.889282);
outline: rgba(46, 50, 47, 0.46) none 3px → rgba(37, 41, 38, 0.796) none 3px;
```
```css
/* Focus */
color: rgba(46, 50, 47, 0.46) → rgba(36, 40, 37, 0.84);
border-color: rgba(46, 50, 47, 0.46) → rgba(36, 40, 37, 0.84);
transform: none → matrix(1, 0, 0, 1, 0, -1);
outline: rgba(46, 50, 47, 0.46) none 3px → rgba(42, 58, 54, 0.86) solid 2px;
```

### Link Hover

```css
color: rgb(31, 31, 31) → rgba(33, 42, 39, 0.97);
border-color: rgb(31, 31, 31) rgb(31, 31, 31) rgba(68, 68, 68, 0.22) → rgba(33, 42, 39, 0.97) rgba(33, 42, 39, 0.97) rgba(68, 68, 68, 0.22);
opacity: 0.68 → 0.81803;
outline: rgb(31, 31, 31) none 3px → rgba(33, 42, 39, 0.97) none 3px;
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Dark Mode

The site has a distinct dark mode color scheme:

- **Primary:** `#dcf6f2`
- **Secondary:** `#4ee8dd`
- **Backgrounds:** `#ffffff`
- **Text:** `#000000`, `#1f1f1f`, `#44695f`, `#444444`, `#212d29`

### Dark Mode CSS Variables

```css
--bg: #07090e;
--bg-soft: #0b0e15;
--utility-header-bg: rgba(253, 253, 252, 0.84);
--utility-brand-size: 14px;
--utility-brand-spacing: 0.06em;
--utility-language-size: 10px;
--utility-language-gap: 2px;
--text: #edf0f7;
--text-soft: #a8b1c3;
--text-dim: #6d7689;
--font-sans: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;
--font-display: "Avenir Next", "Helvetica Neue", "Hiragino Sans", "Noto Sans JP", sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace;
--utility-font-mono: "SF Mono", Menlo, Consolas, monospace;
--game-font-ui: "Avenir Next", "Helvetica Neue", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", sans-serif;
--game-font-poetic: "Ishikawa Klee", "Klee One", "Hannotate SC", "HanziPen SC", "YuKyokasho", "Yu Kyokasho", cursive;
--game-font-hand-latin: "Ishikawa Klee", "Klee One", "Comic Sans MS", "Bradley Hand", "Segoe Print", cursive;
--game-font-mono: "SF Mono", Menlo, Consolas, monospace;
--game-shadow: rgba(33, 31, 28, 0.12);
--radius: 20px;
--panel: rgba(255, 255, 255, 0.032);
--panel-strong: rgba(255, 255, 255, 0.06);
--line: rgba(255, 255, 255, 0.09);
--line-strong: rgba(255, 255, 255, 0.2);
--teal: #5eead4;
--indigo: #8b9cf9;
--pink: #f0a6ca;
--grad: linear-gradient(100deg, #5eead4 0%, #8b9cf9 52%, #f0a6ca 100%);
--grad-soft: linear-gradient(100deg, rgba(94, 234, 212, 0.7), rgba(139, 156, 249, 0.7));
--utility-header-height: 60px;
--utility-header-inline: 14px;
--utility-header-filter: blur(14px) saturate(0.9);
--shell: 1240px;
--gutter: clamp(20px, 4vw, 48px);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-snap: cubic-bezier(0.34, 1.3, 0.4, 1);
--head-h: 72px;
--game-ink: #444;
--game-ink-strong: #1f1f1f;
--game-paper: #fff;
--game-wash: #f7f5ef;
--game-blue: #6fb8c6;
--game-yellow: #d8b94c;
--game-red: #c56f5e;
--game-green: #7aa78e;
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Design System Score

**Overall: 75/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 65/100 |
| Typography Consistency | 40/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 78/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 6 font families — consider limiting to 2 (heading + body)
- 25 distinct font sizes — consider a tighter type scale
- 59 !important rules — prefer specificity over overrides
- 72% of CSS is unused — consider purging
- 2852 duplicate CSS declarations

## Gradients

**25 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | circle at 2px 5px | 3 | bold |
| radial | circle at 9px 2px | 3 | bold |
| radial | circle at 16px 6px | 3 | bold |
| radial | circle | 3 | bold |
| repeating-linear | — | 4 | bold |
| radial | at 50% 52% | 4 | bold |
| radial | at 48% 54% | 4 | bold |
| linear | to right | 4 | bold |
| linear | — | 4 | bold |
| linear | 18deg | 5 | complex |
| linear | — | 6 | complex |
| linear | 90deg | 2 | brand |
| radial | circle | 3 | bold |
| radial | circle | 3 | bold |
| repeating-linear | — | 3 | bold |

```css
background: radial-gradient(circle at 2px 5px, rgba(93, 153, 137, 0.72) 0px, rgba(93, 153, 137, 0.72) 2px, rgba(0, 0, 0, 0) 2.5px);
background: radial-gradient(circle at 9px 2px, rgba(205, 99, 149, 0.58) 0px, rgba(205, 99, 149, 0.58) 2px, rgba(0, 0, 0, 0) 2.5px);
background: radial-gradient(circle at 16px 6px, rgba(100, 172, 187, 0.66) 0px, rgba(100, 172, 187, 0.66) 2px, rgba(0, 0, 0, 0) 2.5px);
background: radial-gradient(circle, rgba(55, 73, 68, 0.7) 0px, rgba(55, 73, 68, 0.7) 1.05px, rgba(0, 0, 0, 0) 1.4px);
background: repeating-linear-gradient(rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 34px, rgba(73, 116, 94, 0.06) 35px, rgba(0, 0, 0, 0) 36px);
```

## Z-Index Map

**17 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 220,270 | div.w.o.r.l.d.-.c.u.r.s.o.r, section.a.n.a.l.y.t.i.c.s.-.c.o.n.s.e.n.t. .a.n.a.l.y.t.i.c.s.-.c.o.n.s.e.n.t.-.-.h.o.m.e, div.h.o.m.e.-.e.n.t.r.y.-.u.t.i.l.i.t.i.e.s |
| sticky | 10,70 | div.g.a.m.e.-.h.u.d, div.g.a.m.e.-.s.t.a.r.t.-.h.i.n.t, aside.g.a.m.e.-.c.a.r.d |
| base | -1,8 | span.m.o.s.s.-.c.a.t.c.h._._.w.a.s.h, i, i |

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Ishikawa Klee | self-hosted | 400 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 14 | objectFit: contain, borderRadius: 0px, shape: square |

**Aspect ratios:** 4:3 (8x), 1:1 (6x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `80ms` | 80 |
| `xs` | `140ms` | 140 |
| `sm` | `160ms` | 160 |
| `md` | `260ms` | 260 |
| `lg` | `420ms` | 420 |
| `xl` | `720ms` | 720 |

### Easing Families

- **ease-out** (77 uses) — `cubic-bezier(0.16, 1, 0.3, 1)`
- **linear** (3 uses) — `linear`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `home-language-fail-open` | slide-y | opacity, pointer-events, visibility, transform | 1 |
| `game-boot-logo-breathe` | slide | opacity, transform | 1 |
| `game-boot-title-form` | slide | opacity, transform | 1 |
| `game-boot-logo-timeout` | fade | opacity | 1 |
| `journey-hub-threshold-breathe` | slide-y | opacity, transform | 6 |
| `world-cursor-breathe` | reveal | opacity, transform | 1 |
| `world-cursor-mote` | fade | opacity | 6 |
| `journey-space-think` | slide-y | opacity, transform | 5 |
| `atlas-scroll-particle` | slide | opacity, transform | 5 |
| `journey-keepsake-arrive` | slide-y | opacity, transform | 1 |

## Component Anatomy

### button — 3 instances

**Slots:** label

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **analytics** (1)
- **walk** (1)

### Button Copy Patterns

- "♪" (1×)
- "analytics settings" (1×)
- "walk the worlds again" (1×)

### Sample Headings

> ishikawa.co — Walkable Atlas by Hidekazu Ishikawa
> ishikawa.co — Walkable Atlas by Hidekazu Ishikawa

## Page Intent

**Type:** `blog-post` (confidence 0.35)
**Description:** Walk through six media worlds operated by Hidekazu Ishikawa, then open a Living Atlas of his web, AI, open-source, writing, and consulting work.

## Section Roles

Reading order (top→bottom): content → testimonial → testimonial → nav → sidebar → nav → sidebar → nav → content → nav → content → content → content → content → content → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | content | — | 0.3 |
| 2 | testimonial | ishikawa.co — Walkable Atlas by Hidekazu Ishikawa | 0.8 |
| 3 | testimonial | ishikawa.co — Walkable Atlas by Hidekazu Ishikawa | 0.8 |
| 4 | nav | — | 0.9 |
| 5 | sidebar | — | 0.4 |
| 6 | nav | — | 0.9 |
| 7 | content | — | 0.3 |
| 8 | sidebar | — | 0.4 |
| 9 | nav | — | 0.4 |
| 10 | content | — | 0.3 |
| 11 | content | — | 0.3 |
| 12 | content | — | 0.3 |
| 13 | content | — | 0.3 |
| 14 | content | — | 0.3 |
| 15 | footer | — | 0.95 |
| 16 | nav | — | 0.9 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.358 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 999px |
| backdrop-filter in use | no |
| Gradients | 25 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.952)
**Counts:** total 14, svg 0, icon 0, screenshot-like 1, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Avenir Next` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
