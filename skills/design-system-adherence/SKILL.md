---
name: design-system-adherence
description: Inspect and preserve an application's existing design system when reviewing or changing its interface, including Lovable projects.
---

# Design-system adherence

Use for user-interface changes when an application has established shared components, tokens, theme rules, or design-system instructions. For every Viver de IA interface, the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai) is mandatory; read the [Viver de IA guide](../../docs/viver-de-ia-design-system.md) before making visual decisions. For Lovable-specific locations and update behavior, read the [stack guide](../../docs/lovable-supabase.md#preserve-the-existing-design-system).

1. Identify the product and its governing design system. For Viver de IA, consult the published Viver de IA design system and its guide before making visual decisions; it is the required source of truth. For Viver de IA applications, also apply the [Viver de IA app patterns](../../docs/viver-de-ia-app-patterns.md).
2. Inspect repository instructions, existing screens, shared component folders, theme providers, tokens, global styles, framework conventions, and any connected design-system or Lovable knowledge files.
3. Identify the closest approved component or pattern for the requested change. Reuse it and its supported variants. In Viver de IA products, resolve conflicts in favor of the Viver de IA design system.
4. Preserve the system's typography, color, spacing, density, interaction, responsive, and accessibility conventions. Do not invent a one-off component when an approved primitive fits.
5. If no suitable component exists, extend the approved library in its intended location. For Viver de IA, do not substitute local patterns or another design system when a component is missing; report the gap and ask for the intended design decision.
6. Avoid generic cards, arbitrary raw colors, and duplicate controls. A container needs a clear product role and must serve a real containment need.
7. For Lovable-connected design systems, check generated-file/update behavior before editing library files that may be replaced on the next update.
8. If the mandatory Viver de IA system cannot be accessed, stop visual decisions and report the access blocker; do not proceed with an invented fallback.
9. Review the changed screen in its actual context and relevant viewports. Report what was inspected and what remains unverified.

Return the source of truth you found, components/tokens reused or extended, deviations with reasons, and any visual checks performed.
