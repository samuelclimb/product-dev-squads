# Product Development Squads

A collection of focused Agent Skills and squad playbooks for taking software products from discovery through delivery and operation.

The repository is tool-light: squads describe how to compose capabilities; each skill is a portable `SKILL.md` package with optional references and templates. Use only the methods that fit the task and risk.

## Included capabilities

| Skill | Use it for | Methods and references |
|---|---|---|
| `product-discovery` | Understand users, problems, evidence, and outcomes | Jobs to Be Done; journey mapping |
| `requirements-analysis` | Map tasks, actors, states, failure paths, and acceptance criteria before implementation | State/decision tables; cognitive walkthrough; EAS; Given/When/Then |
| `system-architecture` | Explore system boundaries, domain, data, and trade-offs | C4; domain modeling; architecture decision records |
| `uiux-audit` | Audit every available interface, control, state, and key user flow | Screen-by-screen visual review; interaction checks; end-to-end verification |
| `usability-review` | Evaluate a real interface and task flow | Nielsen heuristics; WCAG 2.2 |
| `security-review` | Identify and prioritize application threats and privacy risks | Threat modeling; STRIDE prompts; OWASP references |
| `lovable-supabase-security` | Review security in Lovable apps backed by Supabase | Secrets; RLS; Remix copies; Lovable security scans |
| `product-motion` | Add purposeful motion: action feedback, living product illustrations, animated logos | Nielsen H1/H9 feedback map; single-timeline storytelling; frame-frozen verification |
| `design-system-adherence` | Change an interface while preserving its existing system | Components; tokens; project conventions |
| `engineering-delivery` | Plan and implement a scoped change with traceable verification | Owner-visible execution plan; vertical slices; flow-to-code traceability |
| `independent-qa` | Check work against requirements and report evidence | Risk-based and exploratory testing |
| `release-readiness` | Assess release, migration, monitoring, and recovery readiness | Release gates; rollback planning; layer-by-layer measurement |
| `distributed-copy-release` | Keep templates, remixes, forks, and demo instances born from the latest approved commit | Drift measurement; regenerate, publish, relink, verify; never delete |
| `payments-integration` | Charge, confirm, refund, and reconcile payments | Payment state machine; idempotency; reconciliation; Pix (BCB API Pix) reference |

## Squads

- **Discovery:** product discovery + requirements analysis.
- **Architecture:** requirements analysis + system architecture; add security review when data, trust boundaries, or impact warrant it.
- **Delivery:** run `requirements-analysis` before every feature or user-visible behavior change, then `engineering-delivery` for every code change (always with an owner-visible plan, scaled to scope). Add `uiux-audit` for interface work, `product-motion` for purposeful motion, `independent-qa` for high-impact flows or when requested, and architecture/security support when boundaries or risks warrant it.
- **Quality:** independent QA + usability review; include `uiux-audit` for detailed interface and end-to-end checks, and security review for relevant changes.
- **Release operations:** release readiness + independent QA for release-blocking checks; include Lovable/Supabase security review for those stacks, and `distributed-copy-release` when the product ships as copies.

Squads are assembled per task. A coordinator owns scope, reconciles findings, and produces the handoff. Specialists work on bounded questions and return evidence, assumptions, and unresolved decisions. Every squad follows the owner-collaboration and coordination rules in [AGENTS.md](AGENTS.md): ask when a request has more than one reading, do only what was asked, measure before stating, never invent identifiers, and resolve what the agent can resolve.

## Use

Copy the required skill folders into an agent's skills directory or point a compatible runtime at this repository's `skills/` directory. Each skill is self-contained; read its `SKILL.md` and only the references it links when the task calls for them.

The skills follow the open Agent Skills folder format. Codex-specific UI metadata is kept in each skill's optional `agents/openai.yaml`.

For Lovable projects backed by Supabase, see [the stack guide](docs/lovable-supabase.md) for framework detection, security boundaries, design-system discovery, and Remix behavior.

For Viver de IA interfaces, the [Viver de IA design-system guide](docs/viver-de-ia-design-system.md) is mandatory and the [app patterns](docs/viver-de-ia-app-patterns.md) record the approved shell, copy, zero-cognitive-effort, effects, and paid-action rules. Viver de IA applications also follow the [app patterns](docs/viver-de-ia-app-patterns.md). `uiux-audit` checks every available screen and interactive element and verifies user flows end to end where a safe test environment is available.

## Principles

- Keep confirmed facts, assumptions, recommendations, and open decisions distinct.
- Trace requirements to evidence and acceptance checks.
- Keep review independent from implementation when the impact justifies it.
- Do not apply every method to every task; explain why a method fits.
- Treat missing product or business decisions as questions for the decision owner.
- Report what was inspected and verified; do not claim checks that were not run.
