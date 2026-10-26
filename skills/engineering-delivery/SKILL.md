---
name: engineering-delivery
description: Implement a scoped product change in an existing software repository while preserving its architecture, conventions, and verified behavior.
---

# Engineering delivery

Use when code changes are requested. Read repository instructions and the relevant product/architecture sources before editing.

1. Trace the requested behavior to the owning screens, services, data contracts, and tests or checks already present.
2. Confirm unresolved requirements and identify the smallest useful vertical slice.
3. Implement within existing conventions. Keep business rules out of presentation code when the architecture separates them.
4. Handle loading, empty, success, failure, retry, and duplicate-action states that apply to the slice.
5. Run requested or repository-required targeted checks. Report exactly what changed, what was checked, and what remains uncertain.

Do not expand scope, replace established architecture without a reason, invent domain rules, or claim a deployment or external action occurred without confirmation from the tool or system.
