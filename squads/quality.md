# Quality squad

## Purpose

Independently evaluate whether the delivered change meets its acceptance criteria and is usable and safe for its intended task.

## Compose from

- `independent-qa`
- `uiux-audit` for detailed interface coverage, every available control, and end-to-end checks of user-facing flows
- `usability-review` for user-facing flows
- `design-system-adherence` when UI changes must preserve an existing component and token system
- `security-review` when data, permissions, or external actions are in scope
- `lovable-supabase-security` for security-sensitive Lovable/Supabase flows

## Handoff

Report each finding with impact, reproduction or evidence, affected requirement, and suggested next action. For in-scope interfaces, record screens, viewports, states, and controls inspected; verify external outcomes such as email delivery in an approved test environment. Separate confirmed defects from potential risks and unverified checks. Do not approve a release while a stated blocking criterion remains unmet.
