# Risk-based checks

Choose checks from the feature's failure impact and usage:

- Data integrity: duplicate, missing, stale, or incorrectly attributed records.
- Access control: role boundaries and organization or tenant isolation.
- Workflow state: invalid transitions, retries, partial completion, and cancellation.
- User experience: loading, empty, error, recovery, and accessibility states.
- Integration: timeout, invalid response, unavailable dependency, and safe retry.

Do not mark a check as passed unless the relevant behavior was actually exercised or otherwise directly verified. Record test data and environment only when safe to disclose.
