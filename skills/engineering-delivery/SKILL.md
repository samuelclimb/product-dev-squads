---
name: engineering-delivery
description: Implement a scoped product change in an existing software repository while preserving its architecture, conventions, and verified behavior.
---

# Engineering delivery

Use when code changes are requested. Read repository instructions and the relevant product/architecture sources before editing. Follow the owner-collaboration rules in [AGENTS.md](../../AGENTS.md): ask when a request has more than one reading, do only what was asked, and never invent identifiers.

1. **Name where you work.** One repository, one deploy target, one running environment. Older copies and sibling repositories are read-only references.
2. Trace the requested behavior to the owning screens, services, data contracts, and checks already present. Detect the project's actual framework and backend from its files and configuration rather than assuming a single template.
3. Confirm unresolved requirements and identify the smallest useful vertical slice. If the request can be read in more than one way (for example, "adapt this screen to the standard" could mean restyle or rebuild), stop and ask with the measured differences and two or three options before editing.
4. Implement within existing conventions. Inspect project instructions, shared components, design tokens, and backend boundaries first; preserve them. Keep business rules out of presentation code when the architecture separates them. Do not clean up, reorganize, or improve what was not requested.
5. Handle loading, empty, success, failure, retry, and duplicate-action states that apply to the slice.
6. For user-facing interface work, use `uiux-audit` to open the real screen in a browser, operate the changed controls, and capture what you saw. Use `design-system-adherence` to follow the product's design system. For Lovable/Supabase changes, use `lovable-supabase-security`.
7. Before pushing to a shared repository, fetch and read the log: another session may have moved the branch. After pushing, make sure the change reached the environment the owner looks at (for example, the checkout served locally or the deployed site) before reporting.
8. Run requested or repository-required targeted checks. Report exactly what changed, what was checked and how (commit hash, rendered screen, backend response), and what remains uncertain. Do not mark an end-to-end flow as passing based only on a success toast, a passing script, or another session's report.

When the request is complete, stop. List remaining items and wait for the owner to choose the next one.

Do not expand scope, replace established architecture without a reason, invent domain rules, or claim a deployment or external action occurred without confirmation from the tool or system.
