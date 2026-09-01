# Motion System — aspensearch.com

Every animation shipped on the site, reconstructed from the compiled CSS and
the server-rendered React payload. All of it is CSS keyframes + JS-driven
transforms — there is **no Lottie, no Rive, no WebGL/Three.js, and no video**.
Imagery is static (Sanity CDN) with base64 blur-up placeholders; the motion is
entirely typographic and geometric.

## Easing vocabulary

```css
--ease-in:     cubic-bezier(.55, 0, 1, .45);
--ease-out:    cubic-bezier(.16, 1, .3, 1);   /* expo-out — primary reveal curve */
--ease-in-out: cubic-bezier(.87, 0, .13, 1);  /* default transition timing */
/* one-off overshoot */
transition-timing-function: cubic-bezier(.34, 1.56, .64, 1);
```

Duration ladder in use: `.15s` (default/micro), `.2s`, `.3s`, `.45s`, `.56s`,
`.6s`, `.65s`, `.8s`, `1.2s` (theme sweep), `1s` (cursor blink), `20s` (logo spin).

---

## 1. Theme sweep — View Transitions API

The light/dark toggle is the site's signature move: instead of a cross-fade,
the new theme **wipes across the viewport** as a clip-path reveal, direction
depending on which way you're switching.

```css
@keyframes theme-sweep-ltr { 0% { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0) } }
@keyframes theme-sweep-rtl { 0% { clip-path: inset(0 0 0 100%) } to { clip-path: inset(0) } }

html.theme-sweep-ltr::view-transition-old(root) { z-index: 1; animation: none }
html.theme-sweep-ltr::view-transition-new(root) {
  animation: theme-sweep-ltr 1.2s var(--ease-in-out) both;
  z-index: 2;
  mix-blend-mode: normal;
}
/* …rtl mirror… */

html.theme-sweep-ltr .vt-exclude,
html.theme-sweep-rtl .vt-exclude { view-transition-name: none }
```

Mechanics: the old snapshot is pinned underneath and frozen (`animation: none`);
the new snapshot is stacked on top and revealed by animating `inset()` from
100% to 0 over **1.2s** with the strong `--ease-in-out` curve. Elements marked
`.vt-exclude` (e.g. the marquee) opt out of the transition so they don't
snapshot-glitch mid-scroll.

## 2. Hero logo coin spin

A continuous 3D Y-axis rotation on the hero mark — a "flipping coin".

```css
@keyframes hero-logo-coin {
  0%  { transform: translateZ(1px) rotateY(0) }
  to  { transform: translateZ(1px) rotateY(-360deg) }
}
--animate-hero-logo-coin: hero-logo-coin 20s linear infinite;
.animate-hero-logo-coin { animation: var(--animate-hero-logo-coin) }
```

20s linear infinite — slow enough to read as ambient rather than a spinner.
The `translateZ(1px)` forces GPU compositing and prevents z-fighting on the
flat face.

## 3. Typewriter cursor

```css
@keyframes typewriter-cursor-blink { 0%, 44% { opacity: 1 } 56%, to { opacity: 0 } }
--animate-typewriter-cursor: typewriter-cursor-blink 1s step-end infinite;
```

Note the asymmetric duty cycle (visible 0–44%, hidden 56–100%) and `step-end`
timing — a hard on/off blink, no fade, matching a real terminal caret. The
typed text itself is driven in JS.

## 4. Marquee system (`marqy`)

Four-direction infinite marquee, driven purely by CSS keyframes on a
duplicated content track:

```css
@keyframes marqyL { 0% { transform: translate(0,0) } to { transform: translate(-100%) } }
@keyframes marqyR { 0% { transform: translate(0,0) } to { transform: translate(100%) } }
@keyframes marqyU { 0% { transform: translate(0,0) } to { transform: translateY(-100%) } }
@keyframes marqyD { 0% { transform: translateY(-100%) } to { transform: translate(0,0) } }
```

Contract (attribute-driven, framework-agnostic):

| Attribute | Effect |
|---|---|
| `data-marqy` | root; `width:100%; position:relative` |
| `data-direction="left\|right\|up\|down"` | selects keyframe + clips the matching axis |
| `data-marqy-inner` | flex track, scrollbars hidden (`scrollbar-width:none`, `::-webkit-scrollbar{display:none}`) |
| `data-marqy-content` | the animated element: `will-change:transform`, `animation-timing-function:linear`, `animation-iteration-count:infinite`, `animation-play-state:running` |
| `data-marqy-item` | `flex-grow:0` items |
| `data-marqy-static` | kill switch — `animation:none!important` |
| `data-pause-on-hover` | `:hover > [data-marqy-inner] > [data-marqy-content] { animation-play-state: paused }` |

Speed is set per-instance inline as `style="animation-duration: …"`, and the
content track is rendered twice with the duplicate marked `aria-hidden="true"`
for a seamless loop. The marquee carries `.vt-exclude` so it's exempt from the
theme view-transition.

## 5. Split-text line reveal (the workhorse entrance)

The dominant on-scroll entrance across the page. Text is split into lines,
each line wrapped in an overflow-hidden mask, then translated up from below:

- Initial state in the SSR markup: `visibility:hidden; opacity:0; transform:translateY(100%)` (and `opacity:0.001` on containers awaiting hydration, to preserve layout without a flash).
- Animated state: `transform: translateY(0)` with e.g.
  `transition-duration: .56s` / `.65s`, `transition-timing-function: cubic-bezier(0.16,1,0.3,1)` (= `--ease-out`).
- Configured from the React payload as `splitSelector: "[data-text]"` with per-block `animationDelay` of **0.1s / 0.2s** and per-line stagger — so sequential paragraphs cascade rather than firing together.

A lighter variant is used for non-text blocks: `opacity:0; transform:translateY(8px)` → `opacity:1; translateY(0)`.

## 6. Scroll-driven sticky sections

A pinned/sticky scroll section is set up with a 600%-tall scroll track
(`style="height:600%"`) over a `position:sticky` viewport, plus negative-margin
overlap on the hero:

```
margin-top: -60svh;
padding-top: calc(5rem + 60svh);
min-height: calc(100svh - var(--site-header-height) + 60svh);
```

The scroll progress drives `transform` on the pinned child (values written
inline by JS, e.g. `translate3d(0,0,0) scale(1)` with
`will-change:transform; transform-origin:left center`).

## 7. Micro-interactions

- **Default transition**: `.15s var(--ease-in-out)` on `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, gradients`.
- **Hover inversion**: `peer-hover:bg-theme-fg` / `peer-hover:text-theme-bg` — links and buttons invert fg/bg rather than tinting.
- **Springy hover**: `cubic-bezier(.34,1.56,.64,1)` overshoot on `transform`.
- **Underline / rule draw-on**: `transform: scaleX(0)` → `scaleX(1)`, and `transition-property: opacity, stroke-dashoffset` for SVG line drawing.
- **Icon transforms**: SVGs use `transform-box: fill-box; transform-origin: center` so rotations pivot on the glyph, not the viewBox.
- **Discrete transitions**: `transition-behavior: allow-discrete` with `clip-path` and `display` transitions — modern popover/dialog enter-exit without JS.
- **Image loading**: base64 PNG/JPEG blur-up placeholders as `background-image` under `--desired-width`/`--desired-height`, revealed on load.

## 8. Reduced motion

Motion is properly gated, in three layers:

1. `@media (prefers-reduced-motion: reduce)` → `animation: none !important`, `transition-duration: 1ms`.
2. Entrances are only armed under `@media (prefers-reduced-motion: no-preference)`.
3. Explicit `motion-reduce:*` variants (`motion-reduce:animate-none`, `motion-reduce:opacity-100`, `motion-reduce:transition-none`, `motion-reduce:hover:bg-theme-fg`, `motion-reduce:group-hover:transform-[translate(0,0)]`) so hover states still give feedback without movement, and revealed text is forced visible rather than left at `opacity:0`.

This is the part most sites get wrong and this one gets right: the reduced-motion
path doesn't just disable animation, it restores the end state.

---

## Rebuild checklist

To reproduce this motion language:

1. Adopt the three easing tokens; use `--ease-out` for entrances, `--ease-in-out` for full-screen state changes.
2. Entrance = masked line, `translateY(100%) → 0`, ~0.56–0.65s, staggered 0.1–0.2s per block.
3. One ambient loop only (the 20s logo spin) — everything else is triggered.
4. Marquees at linear timing, duplicated track, pause-on-hover.
5. Theme changes as a 1.2s clip-path view transition, not a fade.
6. Ship the reduced-motion end states, not just `animation: none`.
