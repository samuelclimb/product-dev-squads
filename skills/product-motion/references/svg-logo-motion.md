# SVG logo motion

## Prepare

1. Inline the official SVG as a component (no redraws): copy the path data per color layer from the brand file.
2. Split compound paths at `ZM` boundaries into meaningful parts (e.g. wordmark, each letter of a symbol, tagline).
3. Generate unique `<defs>` ids with `useId()` (strip `:`) so several logos can coexist.

## Stage (~1.4 s total)

| Part | Motion | Notes |
|---|---|---|
| Wordmark | `clip-path: inset(0 100% 0 0)` → `inset(0)` + fade, 0.7 s | Reads left to right |
| Diagonal letter | rise from lower-left: `translate(-6%, 18%) scale(.8)` → none, spring easing, delay 0.45 s | `transform-origin: 0% 100%` |
| Vertical bar | `scaleY(0)` → 1, delay 0.65 s | `transform-origin: 50% 100%` |
| Tagline | fade + 8 px rise, delay 1 s | Last, quietest |

Ambient: a white linear-gradient rect clipped to the symbol (`<clipPath>` built from the same paths) sweeps across every ~7 s; on hover it sweeps immediately.

## Gotchas

- Set `transform-box: fill-box` on parts so origins and percentages refer to the part, not the whole viewBox.
- The sweeping rect needs `transform-box: view-box` so `translateX(px)` moves in user units — and its selector must out-rank the generic `.logo rect { transform-box: fill-box }` rule (use `.logo .logo-sheen`).
- Keep `role="img"` and `aria-label` on the root `<svg>`.
- Reduced motion: `animation: none` on every part, which leaves the complete static logo.
