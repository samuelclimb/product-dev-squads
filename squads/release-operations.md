# Release operations squad

## Purpose

Make deployment and operation conditions explicit before a change reaches users.

## Compose from

- `release-readiness`
- `independent-qa` for release-blocking acceptance checks
- `security-review` for security-sensitive migrations or permission changes

## Handoff

Report rollout steps, data migration, monitoring signals, rollback or recovery path, known risks, and the person or system that authorizes release. Keep the final release decision with the product owner or authorized operator.
