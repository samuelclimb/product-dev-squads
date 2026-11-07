---
name: requirements-analysis
description: Turn product evidence and approved decisions into scoped requirements, complete user-flow maps, explicit open questions, and verifiable acceptance criteria.
---

# Requirements analysis

Use before designing or implementing a feature, workflow, or user-visible behavior change. Produce a flow map and acceptance scenarios detailed enough to guide design, implementation, and review. Scale the artifact to the change: a copy fix may need a few lines; a multi-actor or money-moving flow needs the full map.

## Method

1. **Establish the source of truth.** Identify the decision owner, user, task, context, system, and target. Open the specification with “where we work”: one repository and one deploy target. Treat sibling repos and older copies as references.
2. **Break the goal into user tasks.** For every actor, state the desired outcome, starting state, preconditions, steps, alternate paths, completion signal, and what happens next. Include handoffs between screens, actors, and external systems.
3. **Map the main entity’s states and transitions.** For every transition record the source state, actor, action/event, guard (who may act, when, and under what conditions), system effect, visible feedback, and destination state/next actor. Mark invalid transitions explicitly.
4. **Challenge the happy path.** For each action, inspect the relevant combinations:
   - attempted from a state that disallows it;
   - repeated through double tap, retry, refresh, back, or re-entry;
   - concurrent actions by two actors on the same record;
   - stale screen data after another actor has changed the record;
   - write succeeded but feedback, reload, or next step failed;
   - missing permission, expired session, reached limit, unavailable plan or credit;
   - no network, slow response, timeout, partial response, or interrupted recovery.
   Include only combinations relevant to the feature, and record why an excluded case is not relevant.
5. **Build a decision table when rules combine.** List conditions and expected actions/results. Use it to reveal missing combinations, contradictory rules, and invalid transitions. For significant user errors, record the foreseeable error, context/cause, effect, prevention, detection, recovery, and qualitative severity. Use a lightweight failure-mode analysis for high-impact clinical, financial, legal, or irreversible actions; do not imply precise risk scores without evidence.
6. **Run a first-time-user cognitive walkthrough.** Replay every step as a new user working in a hurry. Ask:
   1. Does the user know what to do next without reading everything?
   2. Is the correct control visible and clearly primary?
   3. After acting, can the user see that it worked and what changed?
   4. If it failed, does the user know what happened and what to do?
   
   Record each “no” as a flow defect with an observable example and a proposed correction, even when the code follows its current specification.
7. **Run the cognitive-load pass (EAS).** Question every field, option, metric, label, instruction, and action on each affected screen:
   - **Eliminate** anything the current task or decision does not need.
   - **Automate** information the system already knows or can reliably compute.
   - **Simplify** what remains: one purpose per screen, one clear primary action, progressive disclosure for secondary details.
   
   Preserve information needed for safe decisions. Record removals, automation, and deferred details with a short rationale so the owner can review them.
8. **Write observable scenarios.** Use Given / When / Then. Create one scenario for each mapped main-path transition and each relevant failure combination. State the result visible to the user or external actor; keep implementation details out of the expected outcome.
9. **Trace the result.** Link each requirement to its source, scenario, affected actor/screen/API, and verification evidence. Mark facts, assumptions, proposals, and open decisions separately. Assign consequential unresolved business, financial, legal, or clinical rules to their owner; do not invent them.

## Deliverable

Return the scope and source of truth; actors and task journeys; state and transition map with guards and effects; decision/error combinations; cognitive-walkthrough findings; EAS changes with rationale; Given / When / Then scenarios; open decisions with owners; dependencies; and verification plan. Keep the format proportional to risk and complexity. State what remains uninspected or uncertain; do not promise that every unknown failure has been found.

## References

- [ISO/IEC/IEEE 29148: requirements engineering and operational scenarios](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec-ieee%3A29148%3Aed-2%3Av1%3Aen)
- [Nielsen Norman Group: cognitive walkthroughs](https://www.nngroup.com/articles/cognitive-walkthroughs/)
- [Nielsen Norman Group: EAS for simplifying forms](https://www.nngroup.com/articles/eas-framework-simplify-forms/)
- [ISTQB: decision tables and state-transition testing](https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf)
- [FDA: task analysis and use-related risk methods](https://www.fda.gov/media/80481/download) (human-factors reference; this does not imply medical-device regulatory applicability)
- [NASA: Failure Modes, Effects, and Criticality Analysis](https://standards.nasa.gov/node/12367)
