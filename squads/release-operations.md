# Release operations squad

## Purpose

Make deployment and operation conditions explicit before a change reaches users.

## Compose from

- `release-readiness`
- `independent-qa` for release-blocking acceptance checks
- `security-review` for security-sensitive migrations or permission changes
- `lovable-supabase-security` when a Lovable/Supabase release changes RLS, secrets, auth, external services, or Remix exposure
- `distributed-copy-release` when the product reaches users as copies (templates, remixes, forks, demo instances) that must be regenerated after a release

## Handoff

Report rollout steps, data migration, monitoring signals, rollback or recovery path, known risks, and the person or system that authorizes release. Measure each layer (main branch, platform commit, served build, backend) in this round and copy every hash from a tool result. Resolve within the round what the agent can resolve; list as pending only what a platform or permission blocked, with the exact action. For a Remix, verify which code, schema, configuration, secrets, data, and service connections are independent in the copy. Keep the final release decision with the product owner or authorized operator.
