# Acceptance criteria and flow-map template

Scale each section to the change. A small copy change may use the outcome and one scenario. A multi-actor, permission-sensitive, financial, clinical, or irreversible flow uses the complete map.

## Where we work

- Repository:
- Deploy target:
- Source of truth:
- Decision owner:

## Outcome and scope

- User or operational outcome:
- In scope:
- Out of scope:
- Evidence/source for each business rule:

## Actors and task path

| Actor | Starting state and preconditions | User goal | Action / next step |
|---|---|---|---|

## State transitions

| Entity state before | Actor + action/event | Guard: who, when, conditions | System effect / persisted change | User-visible feedback | Next state / next actor |
|---|---|---|---|---|---|

List relevant invalid transitions and their expected response. Name the entity and its authoritative state source.

## Happy-path gaps and error review

For each action, consider disallowed state, repeated action/retry/back/refresh, concurrent actors, stale data, partial failure, missing permission or expired session, limit/credit/plan constraints, and network/timeout. Mark each as relevant, not relevant with reason, or unresolved.

| Foreseeable error/failure | Context or cause | User/system effect | Prevention | Detection and feedback | Recovery | Qualitative priority |
|---|---|---|---|---|---|---|

For high-impact flows, use this as a lightweight failure-mode review. Do not assign numeric risk scores without evidence.

## Decision table

| Conditions | Expected system action | Visible result | Invalid/undefined? |
|---|---|---|---|

Record conflicting or missing combinations as open decisions with an owner. Do not infer business, financial, legal, or clinical policy.

## First-time-user cognitive walkthrough

Replay each step as a new user in a hurry.

| Step | Knows what to do next? | Correct control visible and primary? | Sees what changed? | Knows how to recover from failure? | Finding / correction |
|---|---|---|---|---|---|

Any “no” is a flow defect to resolve or explicitly track.

## Cognitive-load pass: Eliminate, Automate, Simplify

| Field, option, metric, label, or action | Keep / eliminate / automate / simplify / defer | Why it is needed now | Rationale for removal or change |
|---|---|---|---|

Keep information necessary for a safe decision. Show other details progressively. Record removals and automations so the owner can review them.

## Scenarios

Write observable outcomes, one per relevant transition and failure combination.

- Given …
- When …
- Then …

## Open decisions and verification

| Open decision or dependency | Owner | Blocks design / implementation / release? |
|---|---|---|

- Evidence that demonstrates each outcome:
- Screens, APIs, actors, and states not inspected:
- Assumptions and residual uncertainties:
