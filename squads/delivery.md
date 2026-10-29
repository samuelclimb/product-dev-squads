# Delivery squad

## Purpose

Implement a defined product change in the existing repository while preserving its conventions and user-visible behavior outside scope.

## Compose from

- `engineering-delivery`
- `uiux-audit` for interface changes that need full screen, control, state, or end-to-end flow verification
- `system-architecture` for changes crossing system or domain boundaries
- `security-review` for security-sensitive changes
- `product-motion` for interface changes that need action feedback, animated illustrations, or brand-mark motion
- `design-system-adherence` for interface changes where the project already has shared components, tokens, or design-system instructions
- `lovable-supabase-security` for Lovable/Supabase changes involving credentials, RLS, auth, storage, Edge Functions, connectors, or Remix

## Handoff

List changed behavior, affected components, checks actually run, known gaps, and any decision or deployment still required. For Viver de IA interfaces, follow its mandatory published design system. In Lovable projects, record the framework and existing UI/backend conventions inspected. Ask for unresolved product rules instead of inventing them.
