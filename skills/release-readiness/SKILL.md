---
name: release-readiness
description: Assess whether a software change is ready to deploy, including migration, rollout, monitoring, recovery, and unresolved blockers.
---

# Release readiness

Use before a deployment or when asked to assess release risk. A readiness review does not authorize deployment.

1. Confirm the release scope, target environment, dependencies, and change owner. Identify the actual framework, backend, and connected services from project configuration.
2. Review acceptance and QA evidence, security/privacy findings, and unresolved product decisions.
3. Check compatibility, data migration, feature-flag or phased rollout options, monitoring signals, and rollback or recovery steps.
4. Identify risks that remain, their owners, and the conditions that would stop or reverse rollout.
5. Provide a go/no-go recommendation with evidence and clear limits. Leave the release decision with an authorized person or system.

For Lovable/Supabase projects, consult [`lovable-supabase-security`](../lovable-supabase-security/SKILL.md). If the change creates a Remix, verify the copy's backend, secrets, data, and service connections independently; do not assume the original environment or records were copied.

Use the [release checklist](assets/release-checklist.md). Do not call a release ready when required evidence is missing or a blocker remains unresolved.
