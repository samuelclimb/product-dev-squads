# Viver de IA app patterns

Approved application-level decisions for Viver de IA product interfaces (web apps with a sidebar shell). They complement the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai), which stays the source of truth for tokens, components, and voice. Read the [design-system guide](viver-de-ia-design-system.md) first; apply these patterns when building or redesigning a Viver de IA app.

Each pattern names the usability problem it solves. When a pattern seems to conflict with the published system, the published system wins; report the conflict instead of choosing silently. When the owner's design team publishes a newer shell or component kit, its values replace the examples here.

## 1. App shell

- **Sidebar (light theme):** white surface with a hairline border from the system's tokens. Logo is the official mark from the brand files; never recolor or invert it with CSS. The sidebar is the only place the product logo appears.
- **Sidebar items:** muted text and icons; on hover and when active they move to the primary text color. No underline on hover. Hover and active must look different: both are light washes from the system's palette ramp, never a neutral gray and never the same tint for both.
- **Sidebar (dark theme):** never white. Use the system's dark surface with the same hover/active behavior.
- **Header and footer of the sidebar do not shrink or scroll; only the navigation list scrolls.** Otherwise the logo clips on short viewports.
- **Top bar:** only if the system defines one. When it exists, it shows the current section name, not a second logo. Never put brand marks of third-party platforms in the shell.

## 2. Page layout

- One standard content width for regular pages. Wider layouts only for real master-detail or data-dense views.
- Page header = eyebrow (the sidebar group), title, one-line description of the outcome, and at most one primary action on the right. Do not repeat the same primary action inside the page body. One primary action per screen; secondary actions are text or outline.
- Replace "welcome" or summary cards with content the user acts on. Example: a review queue shown as one row with the **number first**, a short explanation, and a text link, not a card with a title, paragraph, and button.
- Settings use a side menu inside the page, never tabs across the top.

## 3. Choice chips (toggle selection)

- Selected: filled with the system's primary color, contrasting text, and a **check icon**. Unselected: outline with muted text.
- Never signal selection only with a faint background tint; users read tinted-but-unselected chips as selected.
- Use one shared component for every toggle chip (channels, formats, filters, account choice) with `aria-pressed`.
- Larger selectable surfaces (tiles, option cards) show selection with a thin solid border and a light tint, never with a colored glow shadow.

## 4. Integration and channel icons

- Show the **official, colored brand mark** of each integrated platform or vendor. This is an approved exception to the restricted palette, limited to third-party brand marks; the rest of the UI keeps the palette.
- Sources: [Simple Icons](https://simpleicons.org) (CC0) or the vendor's official site assets. Keep the official geometry and color. Do not draw approximations. A new mark is downloaded only with the owner's authorization and goes back into the shared kit so the next product has it.
- Black brand marks use the primary text token so they stay visible in dark theme and on filled chips.
- The platform name is always written next to the icon; the icon is decorative (`aria-hidden`). Icon-only use needs an accessible label.
- **Once per component.** The mark appears on the component's primary element (button, tile, title, channel row), not again in the sentence next to it, not in field labels or helper text, and not inside the small steps of a guided flow.
- Every screen that names a tool shows its mark: integrations, settings, onboarding, import, provider choice, channel lists. Not only the Integrations page.
- If a brand has no usable official mark, show the name with a neutral icon from the system's icon set. Never use a "sparkles" icon as a stand-in.
- Name the action by what it does for the user, not by the intermediary. "Connect social networks" when one connector covers several networks; not the name of the connector vendor.

## 5. Visual accessibility

- Text contrast is at least 4.5:1 on **every** canvas the app uses, including off-white backgrounds, not only on white.
- Minimum body text size follows the system; nothing under it, including timestamps and table helpers. Small caps labels and badges are the only exception.
- Anything that expands or collapses shows an affordance (chevron that rotates), is reachable by keyboard (`role="button"`, `tabIndex`, Enter/Space), and exposes `aria-expanded`.
- Focus uses the system's focus ring; never remove focus without a replacement. The ring is thin and neutral, not a colored glow.

## 6. Interface copy

- The product's language everywhere, including system pages (404, error boundary). Each system page says what happened and offers one action ("Back to start", "Try again").
- No internal or engineering jargon in visible text: avoid terms such as linter, grounding, judge/LLM, router, agent, MVP, provider error codes, or raw statuses (`failed`, `not_configured`). Translate them into what the user sees and does.
- Status and error messages state **what happened, why if known, and where to act**. Never surface raw provider JSON.
- Explain limitations plainly instead of naming internal storage or roadmap stages.
- Backstage text (installation, configuration files, vaults, deploys) never appears to the end customer; a feature that is off disappears from view instead of showing a disabled explanation.
- Cover and sign-in screens never carry an "example", "demo brand", or "placeholder" notice. Decorative content is marked for assistive technology; nothing is written on screen about it.

## 7. Zero cognitive effort

The user learns by looking. If a block needs an explanation to be understood, the block is wrong: redesign it, do not explain it.

- **Advancing keeps the user in the flow.** "Continue", "Next", and completing a step lead to the next step of the same flow, in place. Never redirect to another page, never make the user start over. External round trips (OAuth, a connector's authorization) return to the exact step they left.
- **Every blocked decision has an exit where it happens.** A step that already ran (for example, a site analysis) offers "Change" right there; a failed step offers "Retry" right there.
- **Actions open in place.** A connect, create, or edit action opens a modal, sheet, or inline panel. Never send the user to a page "to figure out what to do".
- **Numbers become sentences; scores become words or colors.** "+12 followers this week", not "Trend 60"; no technical labels, no decimal deltas without meaning, no block that explains the block next to it. Each block answers one question and offers one action.
- **No fake zeros.** Without data there is no KPI showing 0: there is progress and the next step, in one glass panel with one sentence and one action.
- **Errors say what happened and what to do**, in the product's language, and keep the user where they were.

## 8. Effects and motion

- Effects come **only from the design system**: its surfaces, lift, press, overlay materialization, shimmer, stepper halo, and motion tokens. No new colors, gradients, or components to make a screen feel "alive". "Dry" is bad; decoration is worse. The reference is restraint: open composition, large precise type, whitespace.
- **No colored glow shadows** on cards, tiles, buttons, or selected states. Elevation is a soft neutral shadow only where needed.
- Motion follows [`product-motion`](../skills/product-motion/SKILL.md): every animation reports a state or tells a story; reduced motion renders the final informative frame.

## 9. Actions that spend money or credits

Any action that calls a paid provider (generating text, images, video, voice, a remake) shows two things before its button:

- **Provider and model to choose from**, with the recommended option already selected and a one-line reason. The choice is visible, not hidden behind an advanced panel.
- **A cost line that never disappears**, always labeled as an estimate: "Estimate: up to <amount>" and what the final value depends on. When no price is registered for a model: "No estimate for this model", never an empty space.

The owner chooses knowingly, and the product never charges a provider without the user having seen the estimate. For charging the user, see [`payments-integration`](../skills/payments-integration/SKILL.md).

## 10. Waiting and confirmation (global development rule)

Loading is never silent, and an outcome is never implicit. This applies to every action in every app.

- **The moment the user triggers something that takes time** (fetching, saving, generating, connecting, uploading, publishing), show a loading indicator from the design system immediately: a spinner on the activated control, a skeleton where content will appear, or a feedback overlay when the operation blocks the screen. Always with a short notice of what is happening ("Saving…", "Generating the video…"). The activated control is disabled while it runs so it cannot fire twice.
- **When it finishes**, confirm with a modern confirmation from the design system: an inline check or success state on the control, a toast from the system, or the overlay turning into the result. Never a browser `alert`, never a silent return to the previous state.
- **When it fails**, the same surface says what happened and what to do, and keeps the user where they were (see §6 and §7).
- **Before an irreversible action** (delete, send, publish, charge), ask with the system's dialog, never with the browser's `confirm`. The dialog names the consequence and the primary action.
- Long operations (more than a few seconds) show progress or the current stage, and the user can leave and come back without losing the result.

## Review checklist

1. Sidebar, top bar, and page width follow sections 1–2; logo only in the sidebar; one primary action per screen.
2. Every toggle chip shows a check when selected; larger selections use border and tint, no glow.
3. Integrations show official colored marks with written names, once per component, on every screen that names a tool.
4. Contrast ≥ 4.5:1 on all canvases; no text under the system minimum; expandables keyboard-accessible.
5. No internal jargon, raw codes, backstage text, or "example" notices in visible copy; system pages in the product's language with one action.
6. Every "continue" stays in the flow; every blocked step has an exit in place; actions open in place; no fake zeros.
7. Effects only from the system; no colored shadows.
8. Every paid action shows provider/model choice and a cost estimate line.
9. Every waiting action shows a loading indicator with a notice and ends in a confirmation or an actionable error; irreversible actions ask first with the system's dialog.
