# Motion System — manhattan.institute

Captured 2026-10-10. This is the first extraction in this repo with **runtime
motion capture**: designlang's `motionRuntime` pass ran in a real browser,
recording animations via `document.getAnimations()` as the page was scrolled,
hovered, and focused. One component it missed (the hero carousel) was recovered
from the theme bundle (`mi-theme/uneets/dist/js/main.js`).

**Summary:** restrained, editorial motion. Two durations do almost all the work
(200ms for interaction, 1000ms for the hero crossfade), easings are stock CSS
`ease` / `ease-out`, and there are no springs, no scroll-driven CSS animations,
no Lottie, and no WebGL. The dramatic visual — the diagonal orange panel — is
static geometry, not animation.

## What was observed at runtime

8 live animations, from `document.getAnimations()`:

| Trigger | Property | Duration | Easing | Count |
|---|---|---|---|---|
| hover | `color` / `background-color` | 200ms | `ease-out` | 3 |
| focus | `color` / `background-color` | 200ms | `ease-out` | 3 |
| scroll (into view) | `opacity` | 500ms | `ease` | 2 |

Focus states mirror hover states one-for-one: the same 200ms `ease-out`
transition fires for keyboard users as for pointer users.

The scroll fades are **JavaScript-triggered** (a class flipped when the element
enters the viewport). The `scrollLinked` probe found no `animation-timeline:
view()` or `scroll()`, so nothing is scroll-scrubbed.

Most-transitioned properties across the stylesheet: `color` (217 declarations),
`transform` (38), `background` (29), `opacity` (28), `visibility`, `fill`,
`border` (17 each).

## Hero carousel (recovered from the theme bundle)

The runtime capture missed this one. Its first transition fires on a 5-second
autoplay, and Swiper writes durations as inline styles from JS.

The hero is **two synchronized Swipers**: the orange text panel drives the photo.

```js
// orange text panel — the leader
new Swiper('.js-content-slider', {
  speed: 1000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: { delay: 5000, disableOnInteraction: false },
  rewind: true,
  grabCursor: true,
  keyboard: { enabled: true, onlyInViewport: false },
  preventInteractionOnTransition: true,
  threshold: 1,
  longSwipesRatio: 0.00001,   // near-zero: any drag commits to the next slide
});

// photo — follows, can't be dragged itself
new Swiper('.js-image-slider', {
  speed: 1000,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  allowTouchMove: false,
});

contentSlider.on('slideChange', ({ activeIndex }) => {
  loadSlideImage(activeIndex);       // lazy-loads the next photo on demand
  imageSlider.slideTo(activeIndex);  // keeps the photo in lockstep
});
```

- A **1-second crossfade on both layers at once.** Text and image dissolve together, with no slide or push.
- `disableOnInteraction: false` means autoplay resumes after the user swipes or clicks.
- **The pagination reuses the logo.** The indicators are the logomark's vertical bars, with the active one slanted (`I/II`). They're `.js-indicator` click targets calling `slideTo(index)`.
- `rewind: true` runs back to slide 1 instead of looping.

## Easing & duration tokens (observed)

| Token | Value | Use |
|---|---|---|
| `sm` | 200ms | hover / focus colour changes |
| `md` | 400ms | declared in CSS; not seen firing at runtime |
| `lg` | 500ms | scroll-into-view fades |
| `xl` | 1000ms | hero crossfade |
| easing | `ease`, `ease-out`, `linear` | the only three in use; no custom cubic-beziers |

## Keyframes: declared vs. actually used

The stylesheet declares 14 `@keyframes` rules, but **only one fires on the
homepage** (`delay-overflow`, a utility that holds `overflow` for a frame). The
other 13 belong to third parties, or to components that aren't on this page:

| Keyframe | Origin |
|---|---|
| `osano-load-scale` | Osano cookie-consent widget |
| `lightbox-zoom-in`, `lightbox-zoom-out`, `turn-on-visibility`, `turn-off-visibility`, `show-content-image` | WordPress core image lightbox |
| `piano-widget-fade` | Piano (paywall / modal) |
| `overlay-menu__fade-in-animation` | WordPress navigation overlay |
| `shimmer`, `api-table-spin`, `pn-spinner`, `bounce`, `a` | loaders and spinners from embeds |

Treat them as noise, not as the brand's motion language. Mining CSS alone,
as the earlier extractions in this repo had to, would have reported them as
the site's motion system.

## About the generated motion files

`designlang` writes ready-made motion files. Some of their content is
**observed**, and some is **generic scaffolding** the tool adds by default.
Know which is which before reusing them:

| File | Observed | Scaffolding (not from this site) |
|---|---|---|
| `-motion.css` | `--duration-sm/md/lg/xl`; `--ease-standard` (= CSS `ease`) | the `fade-in`, `slide-up`, `scale-in`, `pop` keyframes and `.mo-*` classes |
| `-motion-framer.js` | the `durations` object | `springs.soft` (the capture found **no** springs); `easings.standard: [0.25, 1, 0.5, 1]`, which doesn't match the observed `ease` / `ease-out` |
| `-motion-one.js`, `-motion-tailwind.js` | durations | presets |
| `-motion-lab.html` | an interactive viewer of the values above | n/a |

For a faithful rebuild, take the values from this document instead:
`200ms ease-out` for interaction, `500ms ease` for scroll reveals, and a
`1000ms` crossfade for the hero.

## Reduced motion

The site's own CSS does **not** contain a `prefers-reduced-motion` block. (The
block at the bottom of `-motion.css` was added by the generator.) The hero keeps
autoplaying its 1-second crossfade for users who have asked for reduced motion.
The fades are gentle, but autoplay without a pause control is the main
accessibility gap in the motion system (WCAG 2.2.2, Pause, Stop, Hide).

## Rebuild recipe

```css
:root {
  --dur-interaction: 200ms;
  --dur-reveal: 500ms;
  --dur-hero: 1000ms;
}
a, button { transition: color var(--dur-interaction) ease-out,
                        background-color var(--dur-interaction) ease-out; }
.reveal { opacity: 0; transition: opacity var(--dur-reveal) ease; }
.reveal.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transition: none; }
}
```

For the hero, use the Swiper config above. Add `autoplay: false` (or a visible
pause button) under `prefers-reduced-motion`.
