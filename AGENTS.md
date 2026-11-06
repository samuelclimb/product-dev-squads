# Contribution and agent guidance

- Read the relevant skill and its linked references before using its workflow.
- Keep each skill focused on one recognizable task and preserve the user's scope.
- Do not turn a project-specific rule or example into a universal product requirement.
- Cite evidence for findings and label assumptions, proposals, and unresolved decisions.
- Use the smallest squad that can handle the task safely. Parallelize only independent work; have one coordinator reconcile outputs.
- Keep methods and templates concise, sourced, and maintained. Do not duplicate full external manuals.
- Never put client or sensitive data in skills, references, assets, squads, or docs: no client or product names from real engagements, people's names or emails, project/database IDs, URLs of private apps, credentials, tokens, internal metrics, or screenshots of real data. Generalize every lesson into a neutral example before committing.
- Review public contributions for credentials, personal data, customer details, employer-confidential material, and identifying project artifacts before merging.
- Do not claim that a skill or workflow was tested unless the check was actually performed.

## Working with the product owner

- **Ask before building when a request has more than one reading.** Show what you measured (the actual differences on screen or in code) and offer two or three concrete options. Write code only after an explicit choice. A bug fix inside something already approved can proceed directly.
- **"Adapt to the standard" is not "replace".** When asked to bring a screen in line with a design system or a sibling product, keep its composition and interaction and change only the finish: logo, color tokens, type sizes and weights, spacing. Swapping a component or a whole layout is a separate decision the owner makes.
- **Do exactly what was asked, then stop.** When the request is done, list what else is pending and wait. Do not start the next test, copy, registration, cleanup, or improvement on your own. "Do everything" refers to the list the owner just approved, not to what you think comes next.
- **Never invent an identifier.** Every id, URL, hash, version, or project name in a message, file, or memory is copied literally from a tool result in the current session. A familiar prefix never licenses completing the rest. If the value is not at hand, look it up or say you do not have it.
- **Operational skills resolve; they do not report.** Within a round the owner authorized, run every step the agent can run (publish, move, rename, update a link, verify). Hand back only what is impossible for the agent: a platform refusal, a password, a key, a decision. For each, give the exact action the owner must take. Messages to other people are the standing exception: draft the text, never send it.
- **Explain each point in full.** For every question or finding: the problem as it shows up in practice, what was asked, what is unclear, the proposal, and why the answer matters. Item codes go in parentheses after the explanation, never alone.

## Coordination across sessions and environments

- **Open every plan with "where we work":** one repository, one deploy target, one running environment. Older copies, forks, or sibling repositories are read-only references and never the target of a fix.
- **Measure before you state.** "Done" from another session or agent is a starting point, not proof. Before saying what is finished or live, measure each layer separately: committed on the branch, merged on the main branch, deployed, rendered in the browser, answered by the backend.
- **One local environment.** Serve the checkout of the main branch on one port. Do not start parallel servers, worktrees, or fake backends for the same product without the owner asking; if an audit needs one, say so, use it, and shut it down.
- **Shared repository and deploy platform:** fetch and read the log before every push. One session at a time talks to the deployment platform; before sending it a request, check whether a previous request is still pending.
