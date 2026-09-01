# Motion System — industrycity.com

Every animation on the site, reconstructed from the theme's CSS and JavaScript
(`js/main.js`, `template-parts/block/*/*.js`). It is jQuery + CSS transitions +
Swiper — no Lottie, no Rive, no WebGL, no scroll-animation library. The
motion vocabulary is small and repeats: **`all .3s ease` for interactions,
`all 1s ease` with staggered delays for the page-load grid draw.**

## Duration & easing vocabulary

| Value | Uses | Where |
|---|---|---|
| `all .3s ease` | 31 | every hover, overlay, and menu interaction — the house default |
| `all 1s ease` | 2 | page-load rule draws (with `.2s` delay) |
| `all .9s ease` (overridden to `.5s`, delay `.3s`) | 1 | top-bar vertical divider draw |
| `all .5s ease` | 1 | hero image scale-down |
| `all .4s ease` | 1 | page-loader fade |
| `opacity .6s ease` | 1 | section fades |
| `transform / height / width .3s ease-in-out` | 6 | accordions, mobile panels |
| `color .1s ease-in-out` | 2 | fastest — text color only |

Everything uses `ease` or `ease-in-out`. There are **no custom cubic-bezier
curves anywhere** — a deliberate plainness that suits the brutalist grid.

## 1. Page-load: the grid draws itself in

The signature move. On DOM ready, `main.js` runs:

```js
$('body').addClass('visible');
$('.top-bar, .sidebar, .bottom-bar, .site, #masthead').addClass('loaded');
```

Each chrome element has a zero-size black pseudo-element that then animates to
full size, with different delays, so the 2px rule grid **draws on in sequence**
rather than appearing at once:

```css
/* horizontal rule under the masthead — draws right-to-left */
#masthead:after      { right:0; bottom:-2px; width:0%;  height:2px; background:#000;
                       transition: all 1s ease; transition-delay: .2s }
#masthead.loaded:after { width:100% }

/* rule above the bottom bar — draws left-to-right */
.bottom-bar:before   { left:0; top:-2px; width:0%; height:2px; background:#000;
                       transition: all 1s ease; transition-delay: .2s }
.bottom-bar.loaded:before { width:100% }

/* vertical divider in the top bar — draws downward, later */
.top-bar:before      { top:0; left:21.5rem; width:2px; height:100%; background:#000;
                       transition: all .9s ease; transition-duration:.5s; transition-delay:.3s }

/* right edge of the sidebar — draws downward, immediately */
.sidebar:after       { right:0; top:0; width:2px; height:0; background:#000;
                       transition: all 1s ease; transition-delay: 0s }
.sidebar.loaded:after { height:100% }

/* the brand mark drops in last */
.sidebar .site-branding { opacity:0; transform: translateY(-10rem);
                          transition: all .5s ease; transition-duration:.3s; transition-delay:1s }
.sidebar.loaded .site-branding { opacity:1; transform: translateY(0) }
```

Choreography: sidebar edge (0s) → horizontal rules (0.2s) → top-bar divider
(0.3s) → logo drop (1.0s). Total ~1.3s.

## 2. Page transitions between routes

Internal links are intercepted and the whole page cross-fades out before
navigating — a full-page transition without a SPA router:

```js
$("#page a, .site-footer a").click(function(event) {
  // …skips #hash, javascript:, mailto:, tel:, target=_blank, lightbox links…
  setTimeout(function () { $('body').addClass('invisible'); }, 100);
  setTimeout(function () { window.location.href = link; },   300);
});
```

```css
body #page, body .site-footer   { opacity:0; pointer-events:none; transition: all .3s ease }
body.visible   #page, body.visible .site-footer   { opacity:1; pointer-events:all }
body.invisible #page, body.invisible .site-footer { opacity:0; pointer-events:none }

body .page-loader { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
                    opacity:1; transition: all .4s ease }
body.visible   .page-loader { opacity:0 }
body.invisible .page-loader { opacity:1 }
```

So: click → 100ms grace → 200ms fade to the centered loader mark → navigate.
Safari and Firefox get `window.onpageshow` + `location.reload()` guards so the
back button doesn't restore a page frozen at `opacity: 0` from bfcache.

## 3. Hero gallery — scale-down reveal

The hero slides land zoomed and settle back to 1:1 once the page is ready:

```css
.gallery-swiper .swiper-slide      { transform: scale(1.3); transition: transform .5s ease }
.loaded .gallery-swiper .swiper-slide { transform: scale(1) }
```

Swiper config (`gallery-slider.js`): `autoplay: true`, `speed: 600`,
`slidesPerView: 1`, `loop: true`, custom pagination rendered as `current / total`
in Abolition inside a 6.6rem amber (`#fab36a`) square.

## 4. Ken Burns

```css
@keyframes kenBurns { 0% { background-size: 100% 100% } 100% { background-size: 150% 150% } }
animation: kenBurns 30s infinite alternate;
```

A very slow 30s push-in that reverses on alternate cycles, so it never cuts.
Driven by `background-size` rather than `transform`, which is the one
performance wart in the system (it repaints rather than compositing).

## 5. Vertical rotated headline

Not an animation, but the signature typographic device that the gallery
motion is built around:

```css
.fixed-headline { position:absolute; z-index:99; font-size:10rem;
                  left:-16.5rem; bottom:5rem; margin:0;
                  writing-mode: vertical-rl; transform: rotate(180deg);
                  white-space:nowrap; color:#fab36a }
```

Amber display type running bottom-to-top along the left edge of the hero.

## 6. Hover system

Three repeating patterns, all at `.3s ease`:

**a. Button — orange wipe-in from the left**
```css
.basic-button        { padding:1.2rem 4rem 1.2rem 1.5rem; color:#FBF9F5; background:#000;
                       font-family:"proxima-nova"; font-weight:700; text-transform:uppercase;
                       letter-spacing:.06em; font-size:clamp(1.3rem,.8vw,.8rem) }
.basic-button:before { top:0; left:0; width:0%; height:100%; background:#e05829;
                       transition: all .3s ease }
.basic-button:hover:before { width:100% }
.basic-button:hover  { color:#fbe6c1 }
.basic-button:after  { /* 1.5rem circle with a + glyph, right-aligned */ }
```
The label shifts black→cream as burnt orange sweeps across the black fill.

**b. Nav link — underline grows from the left**
```css
#masthead li a:before { bottom:0; left:0; width:0; height:3px; background:#e05829;
                        transition: all .3s ease }  /* → width:100% on hover */
```
The leasing section swaps the accent to green (`--green`) for the same rule.

**c. `.underline-link` — a permanent 3px rule plus an arrow**
```css
.underline-link        { text-transform:uppercase; font-weight:bold; letter-spacing:.1rem;
                         padding-bottom:.5rem; padding-right:4rem; transition: all .3s ease }
.underline-link:before { bottom:0; left:0; width:100%; height:3px; background:#000 }
.underline-link:after  { right:0; top:50%; transform:translateY(-81%);
                         width:2.5rem; height:1.2rem; background-image:url(link-arrow-black.svg) }
.underline-link.red:before        { background:#fab36a }
.underline-link.red:hover:before  { background:#000 }   /* amber → black on hover */
.underline-link.left-side-arrow:after { transform: translateY(-81%) rotate(180deg); left:0 }
```

**d. Image cells — inverse zoom.** Images are parked slightly over-scaled and
relax to 1:1 on hover, the opposite of the usual zoom-in:
```css
.featured-post .img-wrp img       { transform: scale(1.03); transition: all .3s ease }
.featured-post:hover .img-wrp img { transform: scale(1) }
```

**e. CTA columns — scrim swap.** Photography sits at `opacity:.8` under an 89%
burnt-orange scrim; on hover the photo goes full opacity, scales to `1.02`, and
the scrim flips to 30% black:
```css
.cta-column img         { opacity:.8; transition: all .3s ease }
.cta-column:before      { background: rgba(224,88,41,.89); transition: all .3s ease }
.cta-column:hover img   { opacity:1; transform: scale(1.02) }
.cta-column:hover:before{ background: rgba(0,0,0,.3) }
```

## 7. Loaders

Two spinners, both plain rotation:

```css
/* theme loader — teal ring, half-turn steps */
.loader { width:5rem; aspect-ratio:1; border-radius:50%;
          border:.8rem solid; border-color: var(--teal) transparent;
          animation: l1 1s infinite }
@keyframes l1 { to { transform: rotate(.5turn) } }

/* video container loader — black ring with an orange cap */
@keyframes loading { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
.video-container:after { width:40px; height:40px; border-radius:40px;
                         border:6px solid #000; border-top-color:#e5813a;
                         animation: loading 1.5s linear infinite; opacity:.6 }
```

## 8. Scroll behavior

- **fullPage.js 7.0.4** is loaded for section-by-section paged scrolling on the templates that use it.
- **IntersectionObserver** is used for infinite loading rather than reveal animation — it watches the "load more" button (`rootMargin: '-10px'`, `threshold: 0.2`) and **synthesizes a click** when it scrolls into view, so more posts stream in automatically.
- Gallery sections are height-clamped to the viewport minus the fixed chrome (`max-height: calc(100vh - 62px)`, `transition: max-height .3s ease`), with the offset re-tuned at 1920/1750/1440px.
- `$('html,body').animate({...})` handles smooth in-page scrolling (jQuery, not CSS `scroll-behavior`).

## 9. Carousels (Swiper 7)

| Instance | Config |
|---|---|
| `.gallery-swiper` (hero) | `autoplay: true`, `speed: 600`, `loop`, 1 slide, custom `n / total` pagination |
| `.gallery-swiper-explore` | `speed: 600`, `loop`, 1 slide, no autoplay |
| `.featured-events-swiper`, `.special-featured-events-swiper`, `.swiper-explore`, thumb-linked and column swipers | multiple additional instances |

Nav arrows are SVG-in-pseudo-element, bottom-right, 2rem wide.

---

## Gaps worth flagging

1. **No `prefers-reduced-motion` support at all.** Nothing in the theme queries it. The 30s infinite Ken Burns, the autoplaying hero, and the full-page navigation fade all run regardless. A single block would cover most of it:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after { animation: none !important; transition-duration: 1ms !important }
     .gallery-swiper .swiper-slide { transform: none }
     .sidebar .site-branding { opacity: 1; transform: none }
     #masthead:after, .bottom-bar:before { width: 100% }
     .sidebar:after, .top-bar:before { height: 100% }
   }
   ```
   (Swiper autoplay would also need disabling in JS.)
2. **The navigation fade is fail-open in the wrong direction.** If the 300ms `location.href` fires but navigation stalls, the user is left on a page at `opacity: 0`. The bfcache guards patch the back button but not a slow response.
3. **Ken Burns animates `background-size`**, forcing repaint on every frame for 30s. `transform: scale()` on a child layer would composite instead.

## Rebuild checklist

1. One duration for interaction (`.3s ease`), one for structure (`1s ease`) — resist adding more.
2. Entrance = 2px rules growing from zero along their own axis, staggered 0s / 0.2s / 0.3s, brand mark dropping in at 1s.
3. Hover = something sweeping across a black fill, or an over-scaled image relaxing to 1:1. Never a lift, never a shadow.
4. Keep photography under a heavy brand-color scrim that flips to black on interaction.
5. Add the reduced-motion block this site is missing.
