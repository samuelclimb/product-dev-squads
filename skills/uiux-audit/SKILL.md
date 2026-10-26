---
name: uiux-audit
description: Perform a detailed UI and UX audit of a software product, including every accessible screen, control, state, responsive layout, and in-scope end-to-end flow.
---

# UI/UX audit

Use for a detailed review of an existing interface or a completed user-facing change. Inspect the running product where available; source code or a screenshot alone cannot prove that an interaction or external workflow works.

For Viver de IA products, the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai) is mandatory. Read the [Viver de IA guide](../../docs/viver-de-ia-design-system.md) and follow [`design-system-adherence`](../design-system-adherence/SKILL.md) before making visual judgments. Do not substitute local conventions or invent a fallback if the required system cannot be accessed.

## Audit procedure

1. **Set scope and access.** Identify the product, user role, environment, supported platforms, target devices, critical tasks, and available test accounts. Read repository instructions and map the requested area before testing.
2. **Inventory coverage.** List every in-scope route/screen, entry point, key user flow, responsive layout, and meaningful state. Include loading, empty, success, error, disabled, validation, focus, and recovery states when present. Record inaccessible or unavailable areas rather than silently excluding them.
3. **Apply the design system.** Inspect the applicable live design-system source, tokens, components, icons, typography, spacing, responsive rules, interaction states, and accessibility guidance. For Viver de IA, compare the product against its mandatory published system. Record deviations and whether each is an approved exception.
4. **Inspect every visible element.** Review headings, body copy, labels, helper text, placeholders, errors, tooltips, buttons, links, navigation, icons, and status messages for clarity, consistency, hierarchy, spelling, truncation, and meaningful names. Distinguish decorative icons from interactive icons; every icon-only control needs an understandable accessible name.
5. **Exercise every available control.** Click or activate each button, link, tab, menu item, icon control, accordion, selector, checkbox, radio, dialog action, retry, dismiss, pagination control, and other interactive element. Verify its actual destination, state change, feedback, keyboard behavior where applicable, and whether repeated activation causes duplicate or unexpected actions. Record the exact expected and observed result.
6. **Test every input.** For each text field, search, selector, upload, and other input, inspect its label and instructions; test empty, valid, invalid, boundary-length, and representative long values; submit with keyboard and pointer; inspect inline errors, focus, correction, persistence, and success feedback. Use domain-appropriate cases and do not invent business rules.
7. **Verify complete user journeys.** Start from the real entry point and continue through the expected outcome, including relevant failure, retry, back, refresh, and recovery paths. A toast, loading spinner, or client-side state is not proof that the operation completed on the server or external service.
8. **Verify email flows end to end when in scope.** For password recovery, use an approved test account and safe test environment: request the email, verify that it actually arrives in the designated test inbox or mail-capture service, open the link, complete the password change, and confirm that the new credential works. Check relevant invalid, expired, or reused-link behavior. If the UI says the email was sent but no message arrives, record the flow as failed; do not mark it passed based on the UI response. Do not send messages to customers or use production accounts without explicit authorization.
9. **Check visual behavior.** Inspect every in-scope screen at representative narrow/mobile and desktop widths, plus intermediate widths when layout changes. Check hierarchy, alignment, spacing, typography, contrast, density, overflow, clipping, sticky/fixed elements, safe areas, image cropping, icon consistency, focus/hover/pressed/disabled states, and whether loading or validation changes break layout. Capture screenshots or equivalent evidence for findings when available.
10. **Check accessibility and ergonomics.** Verify semantic structure, accessible names, keyboard access and order, visible focus, error association, contrast, target size, zoom/text enlargement, responsive reflow, screen-reader-relevant state changes, and reduced-motion behavior where applicable. Use WCAG 2.2 as a reference. Report the checks performed; do not claim full conformance from a partial review.
11. **Protect data and avoid unsafe side effects.** Use a sandbox, test account, and synthetic data for destructive, financial, account-changing, or external actions. Do not trigger a real payment, delete production data, or send an external message unless the task explicitly authorizes it. If safe execution is unavailable, mark that interaction unverified and state what access is needed.
12. **Report coverage and findings.** Separate confirmed defects from plausible risks and unverified checks. Give each finding an ID, screen/route, viewport and state, exact reproduction steps, evidence, expected versus observed behavior, user impact, severity, and a concrete correction. State the inventory counts and list screens, controls, and flows not reached.

## Severity

- **Blocker:** a critical task is impossible, data is exposed/lost, or the flow can cause serious harm.
- **High:** a common or important task fails or a major accessibility barrier prevents use.
- **Medium:** a task works with substantial confusion, avoidable effort, or a failure in a meaningful edge case.
- **Low:** a limited inconsistency or polish issue with little effect on task success.

Prioritize by user impact, task frequency, and affected users. Do not inflate severity to make a report look comprehensive.

## Required handoff

Return:

- Coverage: routes/screens, viewports, states, controls, and end-to-end flows inspected.
- Findings grouped by severity, with evidence and reproduction steps.
- Confirmed failures, potential risks, and checks that remain unverified, clearly separated.
- External outcomes verified, such as actual test-email arrival and successful password reset.
- Viver de IA design-system source consulted and any deviations found, when applicable.
- The smallest useful fixes and any access, product rule, or decision needed to continue.

Never claim that every possible problem is absent. Be explicit about the breadth of inspection and its limits.
