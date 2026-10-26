# Rollout and recovery

For a change with operational impact, state:

- How it will be introduced: phased rollout, feature flag, migration window, or another defined path.
- What signal shows healthy behavior and what threshold triggers a pause.
- Which logs, metrics, or user reports are needed to diagnose a failure.
- How to stop, roll back, or recover data safely.
- Who owns each action and which action requires approval.

Prefer a concrete recovery path over a generic statement that the change can be reverted.
