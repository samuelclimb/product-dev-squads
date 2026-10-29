# Verifying motion

Screenshots after `networkidle` usually capture only the end state — entrance animations already finished. Freeze time instead.

## Freeze frames

```js
await page.evaluate((t) => {
  for (const a of document.querySelector(SELECTOR).getAnimations({ subtree: true })) {
    a.pause();
    a.currentTime = t; // ms since the animation started, including delay
  }
}, t);
await page.locator(SELECTOR).screenshot({ path: `frame-${t}.png` });
```

Sample the entrance (100, 400, 600, 800, 1100, 1500 ms) and one ambient loop (e.g. the sheen at its sweep window). Use `deviceScaleFactor: 2–3` for small marks. Combine frames into one contact sheet to review at a glance. See [`assets/freeze-frames.mjs`](../assets/freeze-frames.mjs).

## Fit and overlap

For each viewport (1280×800, 1366×768, 1440×900, 1920×1080):

- Report the lowest bottom edge of the illustration versus the viewport height.
- For every floating element, intersect its bounding box with every module's box; any intersection is a failure.
- Collect `pageerror` and console errors.

## Also check

- Reduced motion (`page.emulateMedia({ reducedMotion: "reduce" })`) shows the final informative frame.
- Hover focus on each module at least once.
- A dev server hot-reloading while other work saves files can show transient blank states; re-run before concluding.
