---
name: security-review
description: Review an application change for security and privacy risks in data flows, permissions, integrations, and operational behavior.
---

# Security and privacy review

Use when a change introduces or alters sensitive data, identity, authorization, external integrations, uploads, payments, location, or high-impact actions.

1. Define the feature boundary, assets, actors, data flows, trust boundaries, and existing controls.
2. Identify abuse paths and failure modes. Use STRIDE as a prompt set when it fits; consult the [OWASP threat modeling guide](references/threat-modeling.md).
3. Review least privilege, server-side validation, data minimization, retention, logging, secrets, and recovery.
4. Tie each finding to an asset, path, impact, evidence, and recommended mitigation. Mark controls that were not verified.
5. Separate security requirements from business or legal decisions that need an authorized owner.

## Deliverable

Return prioritized risks, verified controls, unknowns, mitigations, and any release blockers. Do not claim a system is secure based on a checklist or source inspection alone.
