# Architecture squad

## Purpose

Turn agreed product needs into a coherent system design with explicit trade-offs and risks.

## Compose from

- `requirements-analysis`
- `system-architecture`
- `security-review` when the change affects sensitive data, authorization, external trust boundaries, or high-impact operations
- `lovable-supabase-security` when a Lovable/Supabase project changes data access, authentication, integrations, or a Remix/backend boundary

## Handoff

Provide system context, affected boundaries, domain and data changes, interfaces, key states, failure behavior, decisions and alternatives, risks, and migration implications. For Lovable projects, identify the actual frontend/server framework and whether Supabase is built-in or external. Keep diagrams at the level needed to make the decision.
