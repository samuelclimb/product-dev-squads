# Risk-based checks

Choose checks from the feature's failure impact and usage:

- Data integrity: duplicate, missing, stale, or incorrectly attributed records.
- Access control: role boundaries and organization or tenant isolation.
- Workflow state: invalid transitions, retries, partial completion, and cancellation.
- User experience: loading, empty, error, recovery, and accessibility states.
- Integration: timeout, invalid response, unavailable dependency, and safe retry.
- Distribution: for products shipped as copies, the copy's commit, emptiness, and first-access screen.

Do not mark a check as passed unless the relevant behavior was actually exercised or otherwise directly verified. Record test data and environment only when safe to disclose.

## Authorization checks without real accounts

When the database enforces authorization (for example PostgreSQL row-level security) and creating real users is not acceptable, run the check inside one transaction that always rolls back:

1. Open a `DO` block or transaction.
2. Insert synthetic users into the auth table and the related profile or role tables.
3. Switch to the application role (`set local role authenticated`) and set the request claims the policies read (for example a `request.jwt.claims` setting with the synthetic user id).
4. Run the reads and writes under test and collect the results into a message.
5. End with `raise exception` carrying the results so every insert is undone and nothing remains in the database.

Run it only against a copy or test instance you are allowed to touch, never against the customer's production data. Report the results as evidence of the policy behavior, and say that the check ran through SQL rather than through the interface.
