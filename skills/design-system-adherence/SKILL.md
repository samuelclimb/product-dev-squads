---
name: design-system-adherence
description: Inspect and preserve an application's existing design system when reviewing or changing its interface, including Lovable projects and families of products that share one system.
---

# Design-system adherence

Use for user-interface changes when an application has established shared components, tokens, theme rules, or design-system instructions. For every Viver de IA interface, the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai) is mandatory; read the [Viver de IA guide](../../docs/viver-de-ia-design-system.md) and the [app patterns](../../docs/viver-de-ia-app-patterns.md) before making visual decisions. For Lovable-specific locations and update behavior, read the [stack guide](../../docs/lovable-supabase.md#preserve-the-existing-design-system).

## Adapt is not replace

"Bring this screen in line with the system" means: keep the screen's composition, layout, and interaction, and change the finish (logo asset, color tokens, type sizes and weights, spacing, radius, shadow). Replacing a component, a layout, or a whole screen with the reference product's version is a different request. When the wording leaves room for both readings, measure the differences (which tokens, sizes, and assets diverge) and ask the owner to choose between restyle and rebuild before editing. Approved results are those that keep each product's own screens while sharing the system's language.

## Workflow

1. Identify the product and its governing design system. For Viver de IA, consult the published Viver de IA design system and its guide before making visual decisions; it is the required source of truth.
2. Inspect repository instructions, existing screens, shared component folders, theme providers, tokens, global styles, framework conventions, and any connected design-system or Lovable knowledge files.
3. Identify the closest approved component or pattern for the requested change. Reuse it and its supported variants. In Viver de IA products, resolve conflicts in favor of the Viver de IA design system.
4. Preserve the system's typography, color, spacing, density, interaction, responsive, and accessibility conventions. Do not invent a one-off component when an approved primitive fits.
5. If no suitable component exists, extend the approved library in its intended location. For Viver de IA, do not substitute local patterns or another design system when a component is missing; report the gap and ask for the intended design decision.
6. Avoid generic cards, arbitrary raw colors, colored glow shadows, and duplicate controls. A container needs a clear product role and must serve a real containment need. Selection is shown with a thin border and a light tint, or with the system's selected variant; elevation uses the system's neutral shadow only.
7. For Lovable-connected design systems, check generated-file/update behavior before editing library files that may be replaced on the next update.
8. If the mandatory Viver de IA system cannot be accessed, stop visual decisions and report the access blocker; do not proceed with an invented fallback.
9. Review the changed screen in its actual context and relevant viewports, in the running product. Report what was inspected and what remains unverified.

## Families of products that share one system

When several products must look like one family (same system, different features):

- Share the system by file, not by eye: the same token files, the same style bridge pointing at the tokens, and the same shared component sources. Never retype colors or sizes by hand from a screenshot.
- Keep each product's own screens and flows; restyle them with the shared components and tokens.
- A component ported from the reference product brings its supporting styles with it (for example, dialog or overlay rules in the global stylesheet); otherwise it renders broken in the new product.
- Before saying the work is done, diff the tokens and shared components against the reference product and open both products side by side in the browser.
- Cover and sign-in screens never carry an "example" or "placeholder brand" notice; decorative content is marked for assistive technology instead.

Return the source of truth you found, components/tokens reused or extended, deviations with reasons, the restyle-versus-rebuild decision when one was made, and the visual checks performed.
