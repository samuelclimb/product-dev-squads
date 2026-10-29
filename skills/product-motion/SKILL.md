---
name: product-motion
description: Design, build, and verify purposeful interface motion — action feedback (success, error, background tasks), living illustrations made of animated product data, and animated SVG logos — for web apps (React, CSS, SVG).
---

# Product motion

Use when an interface needs motion that says something: confirming an action, surfacing a failure, telling a product story on a marketing or login surface, or bringing a brand mark to life. Not for adding decoration to a screen that already reads well.

Read the project's design system first (see `design-system-adherence`). Motion uses the system's own easing, duration, color, and radius tokens; it never introduces a second visual language.

## Principles

1. **Every motion reports a state or tells a story.** Map each animation to a Nielsen heuristic (H1 visibility of system status, H9 recover from errors) or to one sentence of the product promise. If you cannot name its job, delete it.
2. **One clock, one story.** A multi-part animation is driven by a single tick so every part agrees. Numbers on different modules must be consistent with each other (the same pieces that are approved are the ones scheduled, then published, then reaching people).
3. **Realistic data, honest framing.** Use plausible shapes (weekends dip, growth starts at a marked "started here" point, not at zero). Illustrative marketing numbers need sign-off from the product owner before shipping.
4. **Never cover content.** Floating elements (toasts, badges) live in reserved bands or slots measured against the content; check overlap programmatically.
5. **Focus over chaos.** On hover, bring the target forward (lift, scale ~1.05–1.07, stronger border) and recede siblings (opacity ~0.45, slight blur, scale 0.97). Collision or "push" physics reads as noise.
6. **Cadence.** Entrances 300–700 ms with staggered delays; state steps ~2 s; ambient loops (sheen, float) 5–8 s. Anything a user waits on must change visibly within a second.
7. **Reduced motion is a first-class state.** Under `prefers-reduced-motion: reduce`, render the final, fully informative frame — not a blank or a frozen first frame.

## Workflow

1. Inventory the moments: list each user action and background job and its outcomes (done, failed, needs you). Mark where feedback is missing. See [feedback patterns](references/feedback-patterns.md).
2. For a living illustration, write the story first: the ordered steps, what each module shows at each step, and which module "lights up". Then derive all data from that timeline. See [living illustrations](references/living-illustration.md).
3. For a logo, split the SVG into meaningful parts and stage them. See [SVG logo motion](references/svg-logo-motion.md).
4. Build with CSS keyframes and tiny hooks; reach for JS only for counting numbers or ticking steps.
5. Verify frame by frame and across viewports with the [verification recipe](references/verification.md) and [`assets/freeze-frames.mjs`](assets/freeze-frames.mjs).

## Return

The moments covered and the heuristic or story line each serves, files changed, viewports and frames actually checked, overlap results, reduced-motion behavior, and any data that still needs owner approval.
