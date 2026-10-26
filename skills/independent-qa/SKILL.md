---
name: independent-qa
description: Independently verify a software change against its acceptance criteria and report reproducible findings with evidence.
---

# Independent QA

Use after implementation or when the user asks for validation. Prefer independent review of requirements and changed behavior over repeating the implementer's description.

1. Read acceptance criteria and identify the intended environment, data, roles, and scope.
2. Inspect the actual implementation and exercise applicable happy paths, boundaries, invalid states, and recovery paths using available tools.
3. Check that visible outcomes match underlying state or responses when evidence is available.
4. Record each result as passed, failed, or not checked. For failures, include reproduction, evidence, impact, and affected criterion.
5. Do not expand into unrelated product redesign. Report blockers and residual uncertainty plainly.

Use the [QA report](assets/qa-report.md). A code review or static inspection is not equivalent to running the application; label the evidence type.
