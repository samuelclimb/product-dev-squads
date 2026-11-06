# Delivery squad

## Purpose

Implement a defined product change in the existing repository while preserving its conventions and user-visible behavior outside scope. The squad opens with "where we work" (one repository, one deploy target, one running environment) and asks before building when the request has more than one reading.

## Compose from

- `engineering-delivery`
- `uiux-audit` for interface changes that need full screen, control, state, or end-to-end flow verification
- `system-architecture` for changes crossing system or domain boundaries
- `security-review` for security-sensitive changes
- `payments-integration` for changes that charge, confirm, refund, or reconcile payments
- `product-motion` for interface changes that need action feedback, animated illustrations, or brand-mark motion
- `design-system-adherence` for interface changes where the project already has shared components, tokens, or design-system instructions
- `lovable-supabase-security` for Lovable/Supabase changes involving credentials, RLS, auth, storage, Edge Functions, connectors, or Remix

## Handoff

List changed behavior, affected components, checks actually run in the real screen and environment, known gaps, and any decision or deployment still required. Then stop and list what is pending; do not start the next item. For Viver de IA interfaces, follow its mandatory published design system. In Lovable projects, record the framework and existing UI/backend conventions inspected. Ask for unresolved product rules instead of inventing them.
