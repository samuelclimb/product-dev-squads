---
name: independent-qa
description: Independently verify a software change against its acceptance criteria and report reproducible findings with evidence.
---

# Independent QA

Use after implementation or when the user asks for validation. Prefer independent review of requirements and changed behavior over repeating the implementer's description. The development team tests; never hand a check to the reviewer, stakeholder, or customer ("they can confirm on their side"). Every check ends as passed, failed, or not checked, with evidence.

1. Read acceptance criteria and identify the intended environment, data, roles, and scope. Confirm which environment you are measuring (branch, main, deployed) and say so in the report.
2. Inspect the actual implementation and exercise applicable happy paths, boundaries, invalid states, and recovery paths using available tools. For interface work, operate the real screen in a browser (see [`uiux-audit`](../uiux-audit/SKILL.md)); a passing automated script, a code read, or a screenshot without interaction is supporting evidence only. An error page can pass a script.
3. Check that visible outcomes match underlying state or responses when evidence is available.
4. For data-backed features, test allowed and denied access for the relevant roles and records; a successful UI path alone does not prove authorization. When creating real accounts is not acceptable, use the rollback technique in [risk-based checks](references/risk-based-checks.md).
5. For a product distributed as copies (templates, remixes, forks), also check the copy a customer receives: it must be built from the latest approved commit, start empty, and open on its first-access screen. Verify on screen, not only in the database.
6. Record each result as passed, failed, or not checked. For failures, include reproduction, evidence, impact, and affected criterion.
7. Do not expand into unrelated product redesign. Report blockers and residual uncertainty plainly. Copy every identifier in the report from a tool result; never complete one from memory.

For a Lovable/Supabase project, load [`lovable-supabase-security`](../lovable-supabase-security/SKILL.md) for stack-specific authorization and copy checks. For a UI change with an existing component system, load [`design-system-adherence`](../design-system-adherence/SKILL.md).

Use the [QA report](assets/qa-report.md). A code review or static inspection is not equivalent to running the application; label the evidence type.
