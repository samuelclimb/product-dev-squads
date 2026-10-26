# Product Development Squads

An open collection of focused Agent Skills and squad playbooks for taking software products from discovery through delivery and operation.

The repository is tool-light: squads describe how to compose capabilities; each skill is a portable `SKILL.md` package with optional references and templates. Use only the methods that fit the task and risk.

## Included capabilities

| Skill | Use it for | Methods and references |
|---|---|---|
| `product-discovery` | Understand users, problems, evidence, and outcomes | Jobs to Be Done; journey mapping |
| `requirements-analysis` | Turn evidence and decisions into scope and acceptance criteria | User stories; decision and assumption tracking |
| `system-architecture` | Explore system boundaries, domain, data, and trade-offs | C4; domain modeling; architecture decision records |
| `usability-review` | Evaluate a real interface and task flow | Nielsen heuristics; WCAG 2.2 |
| `security-review` | Identify and prioritize application threats and privacy risks | Threat modeling; STRIDE prompts; OWASP references |
| `engineering-delivery` | Implement a scoped change in an existing codebase | Vertical slices; repository conventions; change verification |
| `independent-qa` | Check work against requirements and report evidence | Risk-based and exploratory testing |
| `release-readiness` | Assess release, migration, monitoring, and recovery readiness | Release gates; rollback planning |

## Squads

- **Discovery:** product discovery + requirements analysis.
- **Architecture:** requirements analysis + system architecture; add security review when data, trust boundaries, or impact warrant it.
- **Delivery:** engineering delivery, with architecture or security support when the change needs it.
- **Quality:** independent QA + usability review; include security review for relevant changes.
- **Release operations:** release readiness + independent QA for release-blocking checks.

Squads are assembled per task. A coordinator owns scope, reconciles findings, and produces the handoff. Specialists work on bounded questions and return evidence, assumptions, and unresolved decisions.

## Use

Copy the required skill folders into an agent's skills directory or point a compatible runtime at this repository's `skills/` directory. Each skill is self-contained; read its `SKILL.md` and only the references it links when the task calls for them.

The skills follow the open Agent Skills folder format. Codex-specific UI metadata is kept in each skill's optional `agents/openai.yaml`.

## Principles

- Keep confirmed facts, assumptions, recommendations, and open decisions distinct.
- Trace requirements to evidence and acceptance checks.
- Keep review independent from implementation when the impact justifies it.
- Do not apply every method to every task; explain why a method fits.
- Treat missing product or business decisions as questions for the decision owner.
- Report what was inspected and verified; do not claim checks that were not run.

## License

MIT. See [LICENSE](LICENSE).
