---
name: release-readiness
description: Assess whether a software change is ready to deploy, including migration, rollout, monitoring, recovery, distributed copies, and unresolved blockers.
---

# Release readiness

Use before a deployment or when asked to assess release risk. A readiness review does not authorize deployment.

1. Confirm the release scope, target environment, dependencies, and change owner. Identify the actual framework, backend, and connected services from project configuration. Name the one repository and one deploy target the release concerns.
2. Review acceptance and QA evidence, security/privacy findings, and unresolved product decisions. Treat another session's "done" as a claim to measure, not as evidence.
3. Measure each layer separately and record the measurement: the commit on the main branch, the commit the platform reports, the build the deployed site serves (for example, a string that exists only in the new commit found in the served bundle), the backend response for a changed function. Copy every hash and id from a tool result.
4. Check compatibility, data migration, feature-flag or phased rollout options, monitoring signals, and rollback or recovery steps.
5. If the product reaches users as copies (templates, remixes, forks, demo instances), check that every copy still distributed was created after the latest commit it must contain. A copy created before that commit is stale even if it "matches some version". Use [`distributed-copy-release`](../distributed-copy-release/SKILL.md) to refresh it.
6. Identify risks that remain, their owners, and the conditions that would stop or reverse rollout.
7. Provide a go/no-go recommendation with evidence and clear limits. Leave the release decision with an authorized person or system. Where the agent can resolve a blocker itself within the authorized round (publish, move, relink, verify), do it instead of listing it as pending.

For Lovable/Supabase projects, consult [`lovable-supabase-security`](../lovable-supabase-security/SKILL.md). If the change creates a Remix, verify the copy's backend, secrets, data, and service connections independently; do not assume the original environment or records were copied.

Use the [release checklist](assets/release-checklist.md). Do not call a release ready when required evidence is missing or a blocker remains unresolved.
