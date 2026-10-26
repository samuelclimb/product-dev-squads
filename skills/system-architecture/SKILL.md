---
name: system-architecture
description: Evaluate or shape software architecture for a product change, including boundaries, data, interfaces, failure behavior, and trade-offs.
---

# System architecture

Use when a change crosses modules, services, data stores, platforms, integrations, or important quality constraints. For a local code change, follow the existing design and avoid unnecessary architecture documents.

1. Establish the current system, runtime constraints, source of truth, and requirements.
2. Map actors, systems, containers, data flows, trust boundaries, and ownership. Use [C4](references/c4-model.md) at only the diagram levels that clarify the decision.
3. Identify domain concepts, invariants, state transitions, and the authoritative owner of each fact. Read [domain modeling](references/domain-modeling.md) when domain boundaries or rules are changing.
4. Compare viable options against requirements, operational cost, failure modes, security, privacy, and migration risk.
5. Record consequential decisions and rejected alternatives in the [ADR template](assets/architecture-decision-record.md).

## Deliverable

Return the affected boundaries, proposed design, contracts and state behavior, alternatives and trade-offs, risks, migration/rollout impact, and decisions still needed. Distinguish current architecture from a proposal.
