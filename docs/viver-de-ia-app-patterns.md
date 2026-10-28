# Viver de IA app patterns

Approved application-level decisions for Viver de IA product interfaces (web apps with a sidebar shell). They complement the published [Viver de IA design system](https://viver-de-ia-ds.vercel.app/ai), which stays the source of truth for tokens, components, and voice. Read the [design-system guide](viver-de-ia-design-system.md) first; apply these patterns when building or redesigning a Viver de IA app.

Each pattern names the usability problem it solves. When a pattern seems to conflict with the published system, report the conflict instead of choosing silently.

## 1. App shell

- **Sidebar (light theme):** white surface (`--via-white`) with a hairline right border (`--via-border-soft`). Logo is the black mark from the brand files; never recolor or invert it with CSS.
- **Sidebar items:** text and icons in `--via-text-muted`; on hover and when active they move to `--via-text-primary`. No underline on hover.
- **Hover vs. active must differ:** hover = `color-mix(in srgb, var(--via-chart-5) 32%, white)`; active = `color-mix(in srgb, var(--via-chart-5) 58%, white)` plus medium weight. Light blue from the palette ramp, never a neutral gray and never the same tint for both states.
- **Sidebar (dark theme):** never white. Use `--via-surface` with the same hover/active behavior (white at 6% / 10%).
- **Top bar:** shows the current section name, not a second logo (recognition over recall — the logo already lives in the sidebar).

## 2. Page layout

- One standard content width (`max-width: 64rem`, Tailwind `max-w-5xl`) for regular pages. Wider layouts only for real master-detail or data-dense views.
- Page header = title, one-line description, and at most one primary action on the right. Do not repeat the same primary action inside the page body.
- Replace "welcome" or summary cards with content the user acts on. Example: a review queue shown as one row with the **number first** (Geist Mono), a short explanation, and a text link with the chevron gap animation — not a card with a title, paragraph, and button.

## 3. Choice chips (toggle selection)

- Selected: navy fill (`--via-navy`), white text, and a **check icon**. Unselected: outline (`--via-border`) with muted text.
- Never signal selection only with a faint background tint — users read tinted-but-unselected chips as selected.
- Use one shared component for every toggle chip (channels, formats, filters, account choice) with `aria-pressed`.

## 4. Integration and channel icons

- Show the **official, colored brand mark** of each integrated platform (Instagram, TikTok, X, Threads, Facebook, ElevenLabs, Replicate, and service vendors). This is an approved exception to the restricted palette, limited to third-party brand marks; the rest of the UI keeps the palette.
- Sources: [Simple Icons](https://simpleicons.org) (CC0) or the vendor's official site assets. Keep the official geometry and color (Instagram uses its official gradient). Do not draw approximations.
- Black brand marks use `--via-text-primary` so they stay visible in dark theme and on navy selected chips.
- The platform name is always written next to the icon; the icon is decorative (`aria-hidden`). Icon-only use needs an accessible label.
- If a brand has no usable official mark (for example, LinkedIn requested removal from Simple Icons), show the name with a neutral Lucide icon. Never use Sparkles.

## 5. Visual accessibility

- Text contrast is at least 4.5:1 on **every** canvas the app uses, including off-white backgrounds (`--via-gray-50`), not only on white. Helper/placeholder text (`--via-text-faint`) must be `#636E82` or darker on light theme.
- Minimum text size is 11px. No 9–10px text, including timestamps and table helpers.
- Anything that expands or collapses shows an affordance (chevron that rotates), is reachable by keyboard (`role="button"`, `tabIndex`, Enter/Space), and exposes `aria-expanded`.
- Focus uses the system's navy halo (`--via-shadow-focus`); never remove focus without a replacement.

## 6. Interface copy

- Portuguese (pt-BR) everywhere, including system pages (404, error boundary). Each system page says what happened and offers one action ("Voltar ao início", "Tentar de novo").
- No internal or engineering jargon in visible text: avoid terms such as linter, grounding, juiz/LLM, roteador, agente, MVP, provider error codes, or raw statuses (`failed`, `not_configured`). Translate them into what the user sees and does (for example, "Regras ok", "Fatos conferidos", "Nota 9/10", "o sistema escolhe os formatos").
- Status and error messages state **what happened, why if known, and where to act** ("a geração falhou — veja o motivo em Criar"). Never surface raw provider JSON.
- Explain limitations plainly instead of naming internal storage or roadmap stages ("Por privacidade, os e-mails ficam só no login").

## Review checklist

1. Sidebar, top bar, and page width follow sections 1–2.
2. Every toggle chip shows a check when selected.
3. Integrations show official colored marks with written names.
4. Contrast ≥ 4.5:1 on all canvases; no text under 11px; expandables keyboard-accessible.
5. No internal jargon or raw codes in visible copy; system pages in pt-BR with one action.
