# Living illustrations

A panel of small animated modules (charts, grids, counters, status rows) that sells the product by showing it work — typically the brand half of a login or a landing hero.

## Content

- **Titles are benefits, data is proof.** Each module's title is a short benefit ("The week ready in minutes"); its visualization is the evidence.
- **One story across modules.** Example timeline per piece of content: idea found → piece drafted → reviewed → scheduled → published to N networks. Each step lights the module it affects; counters in other modules follow from the same step (published pieces raise reach; reviewed pieces fill the brand-voice grid).
- Drop any metric that does not connect to the story or that the user cannot interpret instantly.
- Minimal surrounding copy: logo + illustration; let the form side own attention.

## Mechanics

- `useTick(stepMs, stillStep)`: one `setInterval` drives the story; under reduced motion it returns the last step.
- `useAnimatedNumber(target, 900)`: ease-out cubic count via `requestAnimationFrame`; counts from 0 on entrance, then only the delta.
- Light a module by re-keying a span (`key={step}`) that runs a one-shot glow, so the animation restarts each step without timers.
- Status rows cycle queue → adapting (shimmer) → ready → scheduled → done, one state per step, so something changes every ~2 s.
- Toasts float in fixed slots (corners of reserved bands), fade out after ~1.3 s; never stack over modules.

## Layout

- Fill the panel: a 3-column, 2-row grid with the hero chart spanning two columns uses width far better than tall stacks, whose height cap forces the width to shrink.
- Size inside modules with container queries: `container-type: inline-size` on the panel, then `clamp(min, Ncqw, max)` for numbers, chart heights, and gaps.
- Cap by height for short screens: `max-width: min(860px, calc((100vh - 250px) * 1.32))`; under `max-height: 860px` apply a modest `zoom` and a relaxed cap.
- Let narrow-module titles wrap (two lines) instead of truncating; align module heads to `flex-start`.
- Glass on dark: low white fill (~6%), 12% border, a 1 px top light line, small blur.

## Pitfalls

- Opacity set by an animation with `fill-mode: both` overrides later opacity rules; animate a different property (`filter`) or remove the fill.
- Random data looks random. Hand-author series with intent.
- A module that takes several seconds to show anything feels broken; split long transitions into per-step states.
