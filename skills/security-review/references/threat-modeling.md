# Threat modeling

Threat modeling is a repeatable review of a system from an adversarial perspective. A lightweight pass can:

1. Decompose the feature into components, data flows, assets, and trust boundaries.
2. Identify plausible threats and abuse cases. Use STRIDE categories as prompts for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.
3. Rank impact and likelihood with stated reasoning.
4. Record mitigation, removal, transfer, or explicit acceptance of each risk, including the owner of residual risk.
5. Revisit the model when boundaries, data, or authorization change.

Choose the level of formality for the risk. Include privacy-specific analysis when personal data or user expectations require it.

Source: [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html).
