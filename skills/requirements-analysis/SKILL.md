---
name: requirements-analysis
description: Turn product evidence and approved decisions into scoped requirements, explicit open questions, and verifiable acceptance criteria.
---

# Requirements analysis

Use when a feature, workflow, or product change needs a clear contract before design or implementation.

1. Read the current source of truth and identify the decision owner.
2. List actors, goals, preconditions, main path, alternate paths, failures, recovery, and data affected.
3. Link each requirement to its source. Label assumptions, proposals, and unresolved decisions; do not promote them to rules.
4. Write observable acceptance criteria for success, empty/loading/error states, permissions, duplicate actions, and relevant boundaries.
5. Note non-goals, dependencies, privacy/security concerns, and how the result will be checked.

Use [acceptance criteria](assets/acceptance-criteria.md) as a compact template. Ask the decision owner about consequential business rules that lack evidence.

## Deliverable

Return scope, actors and journeys, requirements with source, acceptance criteria, open decisions with owners, dependencies, and verification plan. Keep the specification proportional to the change.
