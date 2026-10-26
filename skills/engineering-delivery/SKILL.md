---
name: engineering-delivery
description: Implement a scoped product change in an existing software repository while preserving its architecture, conventions, and verified behavior.
---

# Engineering delivery

Use when code changes are requested. Read repository instructions and the relevant product/architecture sources before editing.

1. Trace the requested behavior to the owning screens, services, data contracts, and checks already present. Detect the project's actual framework and backend from its files and configuration rather than assuming a single Lovable template.
2. Confirm unresolved requirements and identify the smallest useful vertical slice.
3. Implement within existing conventions. Inspect project instructions, shared components, design tokens, and backend boundaries first; preserve them. Keep business rules out of presentation code when the architecture separates them.
4. Handle loading, empty, success, failure, retry, and duplicate-action states that apply to the slice.
5. For user-facing interface work, use `uiux-audit` to inspect the screens and verify the relevant controls and user flows. Use `design-system-adherence` to follow the product's design system; for Viver de IA, its published system is mandatory. For Lovable/Supabase changes, use `lovable-supabase-security`.
6. Run requested or repository-required targeted checks. Report exactly what changed, what was checked, and what remains uncertain. Do not mark an end-to-end flow as passing based only on a success toast or UI state.

Do not expand scope, replace established architecture without a reason, invent domain rules, or claim a deployment or external action occurred without confirmation from the tool or system.
