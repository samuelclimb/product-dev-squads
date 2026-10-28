---
name: uiux-audit
description: Thoroughly audit a running software product by controlling its browser UI, checking every in-scope screen and control, testing complete user journeys, and reporting defects and improvements with evidence.
---

# UI/UX audit

Use this skill when asked to evaluate, test, improve, or sign off on a software product's interface or user-facing functionality. The audit is hands-on: open the running product, take control of its browser, inspect the whole interface, and exercise its features. Reading source code, reviewing a screenshot, or seeing a success toast is supporting evidence; none replaces interacting with the product.

For every Viver de IA product, the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai) is mandatory. Read the [Viver de IA guide](../../docs/viver-de-ia-design-system.md) and follow [`design-system-adherence`](../design-system-adherence/SKILL.md) before judging or changing visual design. If the system cannot be opened, report a blocker and do not invent or substitute visual rules.

## Required browser operation

1. Get the running product URL and any authorized test credentials. Use the user's existing URL or connected browser when available. If the product is not running, follow its repository instructions to launch a local/test version when that is safe and supported.
2. Use an interactive browser or computer-control tool and take control of the actual product tab. In Codex, use the available CUA browser control (`mcp__cua_repl`). Click, type, scroll, open menus, resize the viewport, and capture screenshots. Do not claim a browser audit from source code, static screenshots, or a DOM-only inspection.
3. If browser control, the running product, a required account, or a safe environment is unavailable, stop the affected checks. Tell the user exactly what is missing and mark the audit incomplete; do not silently downgrade it to a code review or claim that the product passed.
4. Do not change application code while auditing unless implementation was requested. Keep audit evidence and test data out of production customer records.

## Run the audit in passes

### 1. Map all screens and options

- Start from the product's real entry point. Sign in with an authorized test account when needed.
- Visit every in-scope route and screen. Follow the top-level and side navigation, footer links, tabs, breadcrumbs, cards with actions, and links inside content. Open every menu, dropdown, popover, tooltip, dialog, accordion, filter, selector, and expandable section; record every option and inspect what selecting it does.
- Scroll each page from top to bottom. Inspect sticky headers/footers, long pages, list endings, pagination or infinite scroll, and content that appears only after an action.
- Maintain a coverage inventory with one row per screen and one row per interactive control. Record route, screen name, role/account, viewport, control label/type/location, action taken, expected result, observed result, status, and evidence.
- Do not mark an item covered because it is visible. Activate it and observe the result. Test every option in an in-scope control, not just its default value.

### 2. Inspect the whole visual layout

Capture each screen at a representative desktop width and narrow/mobile width. Also inspect intermediate widths where the layout changes. For every screen and meaningful state, look for:

- broken hierarchy: unclear page purpose, competing primary actions, weak or misplaced headings, hidden next steps, or repeated content;
- layout defects: overlap, clipping, unintended horizontal scroll, misalignment, inconsistent spacing, broken grids, oversized blank areas, text collisions, unstable height, sticky elements covering content, or content hidden behind safe areas;
- responsive defects: controls off-screen, unusable menus, broken columns, tiny tap targets, unexpected desktop-only layouts, or content that disappears at mobile widths;
- typography and readability: incorrect hierarchy, line length, line height, wrapping, truncation, low contrast, tiny text, text over images, or illegible disabled/error states;
- visual-system drift: wrong tokens, colors, type, spacing, icon style, borders, radius, shadows, component variants, or generic containers that do not match the product's approved system;
- state feedback: missing or misleading loading, empty, success, error, validation, disabled, selected, hover, pressed, focus, and retry states;
- content problems: spelling, vague or contradictory copy, missing labels/instructions, confusing terms, misleading dates/prices/status, repeated or missing text, and errors that do not explain correction;
- icons and affordances: incorrect or inconsistent icon, ambiguous meaning, decorative icon that looks clickable, clickable icon with no accessible name, or an action that looks interactive but is inert.

For Viver de IA, compare each screen and component against the mandatory published design system and the [Viver de IA app patterns](../../docs/viver-de-ia-app-patterns.md) (shell, choice chips, integration icons, accessibility floor, interface copy). Record the exact system reference used and each deviation. Do not call a screen compliant because it resembles the brand generally.

### 3. Click and verify every control

Activate every visible and revealed button, link, tab, navigation item, icon button, menu option, accordion, filter, sort option, selector option, checkbox, radio, switch, pagination control, dialog action, upload action, retry, dismiss, and other interactive element in scope. For each one:

1. Record its visible and accessible name, type, screen location, and current state.
2. Activate it with the pointer; use the keyboard as well for controls that should support keyboard input.
3. Verify the actual destination or state change, resulting data, feedback, focus behavior, and browser/back behavior where relevant.
4. Check whether it works repeatedly, produces duplicate requests, gets stuck, or appears clickable without doing anything.
5. Save a screenshot or other observable evidence for failures and record the expected versus actual outcome.

Open every option list and test every option. Check that filters, sort, tabs, and pagination change the displayed data correctly; that dismiss/close actions close the intended surface; that links lead to the right destination; and that back, refresh, and direct navigation do not lose or corrupt state unexpectedly.

### 4. Test every input and form

For each input, record its label, helper text, placeholder, required/optional state, format, and validation. Test the cases that apply:

- empty submission;
- valid typical value;
- invalid or malformed value;
- minimum, maximum, and boundary values;
- long text and special characters;
- keyboard submission, focus order, correction after error, and repeated submission;
- persistence after navigation, refresh, or reopening when the product promises persistence.

Verify inline error placement and wording, focus movement, success state, saved server state, and whether errors clear when corrected. Test file upload, date, amount, search, and selection controls with representative valid and invalid cases. Do not invent business rules; list unclear rules as questions.

### 5. Complete user journeys end to end

Run each in-scope primary and important secondary journey from its real entry point to its real outcome. Include failure and recovery paths: cancel, retry, back, refresh, expired session, validation error, empty results, and duplicate action where relevant. Check server or external-service outcomes when the feature depends on them; a client-side state or toast alone is not proof of completion.

When account recovery is in scope, the full test is mandatory: request password recovery using an approved test account; verify the message actually arrives in the designated test inbox or mail-capture service; open its link; complete the password change; and confirm the new password works. Check expired, invalid, or reused links when the environment allows. If the UI claims success but the email does not arrive, record a functional failure. Never report recovery as passed based only on the confirmation message in the app.

Test integrations such as email, authentication, uploads, payments, and notifications in a sandbox or approved test environment. Do not send to customers, spend real money, delete production data, or make other destructive/external changes unless the task explicitly authorizes them. If a safe test is unavailable, mark the exact check unverified and explain what access is needed.

### 6. Check accessibility and usability

Inspect semantic headings and reading order, accessible names, keyboard access, visible focus, label/error association, contrast, zoom/text enlargement, responsive reflow, touch-target size, screen-reader-relevant updates, and reduced-motion behavior where applicable. Use WCAG 2.2 and Nielsen's heuristics as review references. Where assistive technology or automated checks are unavailable, say so. A visual review alone is not proof of accessibility conformance.

## Record every finding and improvement

Report concrete, reproducible observations rather than generic advice. For each confirmed problem or improvement opportunity, include:

- ID and severity;
- route/screen, viewport, user role, and state;
- exact control or visual area;
- reproduction steps and evidence (screenshot, visible result, or test outcome);
- expected result versus observed result;
- user impact and who is affected;
- specific correction or improvement.

Separate **confirmed defects** (reproduced), **potential risks** (credible but not reproduced), and **improvements** (opportunities without a confirmed defect). Prioritize by task impact and frequency. Use Blocker for critical tasks that cannot be completed or serious harm; High for important flow failures or major barriers; Medium for substantial friction or meaningful edge cases; Low for limited polish issues.

The final report must include the coverage inventory counts, all routes/screens/options/controls inspected, viewports and journeys tested, unvisited items, inaccessible states, and checks blocked by missing access. Never write “everything passed” without itemized evidence. Aim to find and record every issue within the declared scope, while stating what could not be inspected; do not claim that no other possible issue exists.
