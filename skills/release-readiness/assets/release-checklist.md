# Release readiness checklist

- Scope, repository, and target environment are confirmed.
- Acceptance evidence is available and was measured in this round, not inherited from another session.
- The main branch commit, the platform's commit, and the served build agree (hashes copied from tool results).
- Changed server functions are redeployed and answer as the new code.
- No blocking QA or security finding remains.
- Migration and compatibility effects are understood.
- Every distributed copy was created after the commit it must contain, starts empty, and opens on its first-access screen.
- Monitoring signals and pause thresholds are named.
- Rollback or recovery steps and owners are known.
- Open decisions and accepted risks are recorded.
- Release authorization is assigned to the correct owner.
