---
name: engineering-delivery
description: Plan and implement a scoped change in an existing software repository while preserving architecture, conventions, and verified behavior.
---

# Engineering delivery

Use when code changes are requested. Always create and present an execution plan before editing. Read repository instructions and relevant product/architecture sources first. Follow the owner-collaboration rules in [AGENTS.md](../../AGENTS.md): ask when a request has more than one reading, do only what was asked, and never invent identifiers.

1. **Name where you work.** State one repository, one deploy target, and one running environment. Older copies and sibling repositories are read-only references.
2. **Trace the existing behavior.** Inspect the owning screens, services, data contracts, rules, checks, and project conventions. Detect the actual framework and backend from files and configuration.
3. **Map behavior before changing code.** For feature and user-visible behavior changes, use [requirements-analysis](../requirements-analysis/SKILL.md) and its [flow-map template](../requirements-analysis/assets/acceptance-criteria.md). For a narrow bug or copy fix, create a compact map of the affected behavior. Reuse an existing approved map when it is current; do not duplicate work.
4. **Write the execution plan.** Before the first edit, show the owner:
   - desired outcome, scope, and non-goals;
   - actors, affected flows/states, and the acceptance scenarios each change serves;
   - affected files/modules and the order of small, reviewable implementation slices;
   - dependencies, risks, and open decisions;
   - how each acceptance scenario and applicable project check will be verified.
   
   Keep a small fix plan concise and give a multi-actor or high-impact change enough detail to trace every mapped scenario to implementation and verification. Pause for an owner decision when scope or a consequential rule is unresolved. Do not start implementation by assuming an answer.
5. **Implement the approved scope.** Preserve architecture and conventions, inspect shared components and design tokens, and keep domain rules out of presentation code where the project separates them. Avoid unrelated cleanup. Handle relevant loading, empty, success, failure, retry, and duplicate-action states.
6. **Reconcile code with the plan.** After implementation, walk the mapped scenarios against the changed screens and services. Record which outcomes are confirmed, blocked, or still unverified. Review each planned slice and explain any deviation before calling the work complete.
7. **Review interface changes in the real product.** Use [uiux-audit](../uiux-audit/SKILL.md) for relevant screens and controls; use [design-system-adherence](../design-system-adherence/SKILL.md) to preserve the product system. Add [product-motion](../product-motion/SKILL.md) when purposeful motion or coordinated interaction is in scope. Do not treat code inspection or a success toast as proof of end-to-end behavior.
8. **Run requested or repository-required targeted checks.** Do not claim unrun checks. Before pushing to a shared repository, fetch and read the log because another session may have moved the branch. Verify the resulting branch/PR and report exactly what changed, what was checked, how, and what remains uncertain.

When the request is complete, stop. List remaining items and wait for the owner to choose the next one.

Do not expand scope, replace established architecture without a reason, invent domain rules, or claim an external action occurred without confirmation from the tool or system.
