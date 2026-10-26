---
name: design-system-adherence
description: Inspect and preserve an application's existing design system when reviewing or changing its interface, including Lovable projects.
---

# Design-system adherence

Use for user-interface changes when an application has established shared components, tokens, theme rules, or design-system instructions. For Lovable-specific locations and update behavior, read the [stack guide](../../docs/lovable-supabase.md#preserve-the-existing-design-system).

1. Inspect repository instructions, existing screens, shared component folders, theme providers, tokens, global styles, framework conventions, and any connected design-system or Lovable knowledge files.
2. Identify the source of truth and the closest existing component or pattern for the requested change. Reuse it and its supported variants.
3. Preserve established typography, color, spacing, density, interaction, responsive, and accessibility conventions. Do not invent a new one-off component when a shared primitive fits.
4. If no suitable component exists, extend the established library in its intended location. If no coherent system exists, follow the app's strongest existing patterns and label unresolved visual decisions rather than imposing a new system.
5. Avoid generic cards, arbitrary raw colors, and duplicate controls. A container needs a clear product role and must serve a real containment need.
6. For Lovable-connected design systems, check generated-file/update behavior before editing library files that may be replaced on the next update.
7. Review the changed screen in its actual context and relevant viewport when visual verification is requested or available. Report what was inspected and what remains unverified.

Return the source of truth you found, components/tokens reused or extended, deviations with reasons, and any visual checks performed.
