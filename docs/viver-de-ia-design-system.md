# Viver de IA design system

**Mandatory source for every Viver de IA interface:** [https://viver-de-ia-ds.vercel.app/ai](https://viver-de-ia-ds.vercel.app/ai)

Use the published system for Viver de IA web and mobile products. It governs visual and interaction decisions, including typography, color, spacing, layout, components, iconography, responsive behavior, and component states. Accessibility remains a required quality check alongside design-system adherence. Consult the live source for the current specification; this guide does not copy or replace its component catalog.

## Required workflow

1. Confirm that the product or surface belongs to Viver de IA.
2. Open the published design system and inspect the foundation and components relevant to the requested screen or flow.
3. Identify the approved component, tokens, variants, interaction states, and responsive behavior before changing the interface.
4. Implement and review against that system. Existing application code helps locate integration points, but does not override the Viver de IA design system when they conflict.
5. Report any requested visual exception and its reason. Do not silently create a new color, type style, spacing scale, icon style, generic card, or component variant.

If the system is unavailable, do not make visual decisions based on an invented substitute. Report the access blocker and request the reference or decision needed to continue. A missing component is also a design decision to resolve; do not declare a local pattern compliant without checking with the system owner.

## Approved app patterns

For Viver de IA applications (sidebar shell, chips, integration icons, accessibility floor, and interface copy), also apply [Viver de IA app patterns](viver-de-ia-app-patterns.md). They extend the published system with decisions approved by the product owner; report any conflict with the system instead of resolving it silently.

## Audit expectations

When auditing a Viver de IA interface, compare each inspected screen, responsive layout, component state, and interactive control with the published system. Include both consistency and usability/accessibility findings: matching the visual system does not prove that a flow works or that the interface is accessible.

Use [`uiux-audit`](../skills/uiux-audit/SKILL.md) for screen-by-screen visual and functional coverage. Its report must state which parts of the system were consulted, which deviations were found, and which areas could not be verified.
