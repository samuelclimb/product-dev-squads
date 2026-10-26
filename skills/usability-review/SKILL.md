---
name: usability-review
description: Review a real software interface or workflow for usability problems, using task evidence, relevant Nielsen heuristics, and accessibility guidance.
---

# Usability review

Use for a UI audit or a user-facing implementation. Inspect the actual screen or code and current product patterns before giving findings.

For a comprehensive screen-by-screen audit that interacts with every available control and verifies end-to-end flows, use [`uiux-audit`](../uiux-audit/SKILL.md) alongside this task-focused usability review. For Viver de IA interfaces, its published design system is mandatory; see [`design-system-adherence`](../design-system-adherence/SKILL.md) and the [Viver de IA guide](../../docs/viver-de-ia-design-system.md).

When the project has shared components, tokens, or Lovable design-system instructions, load [`design-system-adherence`](../design-system-adherence/SKILL.md) before recommending or implementing a UI change.

1. Name the user, task, starting state, and successful outcome.
2. Walk the task from entry to completion, including a relevant error or recovery path. Record where the user must infer, remember, wait, or repeat information.
3. Apply the [Nielsen heuristics](references/nielsen-heuristics.md) as prompts where they fit. Report observed behavior, not just heuristic numbers.
4. Check relevant accessibility behavior using [WCAG 2.2](references/wcag.md), including keyboard/focus, labels, contrast, error association, and responsive or touch behavior when applicable.
5. Prioritize by user harm and frequency. Use the [finding template](assets/usability-finding.md).

Do not infer a rule from a mockup, and do not recommend visual polish without tying it to a task or comprehension problem. Keep the existing product identity and interaction patterns unless the evidence shows a problem.

## Deliverable

Return confirmed findings with screen/step, evidence, user impact, severity, and a concrete correction. Separate unverified checks and unresolved product questions.
