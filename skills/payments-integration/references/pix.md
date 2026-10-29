# Pix (Brazil) reference

Pix is the Banco Central do Brasil instant payment system. Payment service providers (PSPs: banks and payment institutions) expose the standardized **API Pix** for receivers. The specification is published by the BCB ([bacen/pix-api on GitHub](https://github.com/bacen/pix-api)); each PSP documents its own base URLs, onboarding, limits, and deviations. Confirm details with the chosen PSP and the current spec version before relying on them.

## Immediate charge (cobrança imediata, `cob`)

- Create with `PUT /cob/{txid}` (receiver chooses the `txid`, which gives natural idempotency) or `POST /cob` (PSP generates it).
- `txid` for `cob`: 26–35 alphanumeric characters (`[a-zA-Z0-9]`). Derive it deterministically from the order so a retry reuses the same charge instead of creating a second one.
- `calendario.expiracao`: lifetime in seconds from creation. Align it with the product's reservation rule.
- `valor.original`: amount as a decimal string with two places; convert from integer cents at the edge only.
- Response includes the location/payload used to render the QR code and the "copia e cola" (EMV BR Code) string. Render the QR from the payload server-side or with a local library; do not send payment payloads to third-party QR services.
- Status values in the spec include `ATIVA`, `CONCLUIDA`, `REMOVIDA_PELO_USUARIO_RECEBEDOR`, and `REMOVIDA_PELO_PSP`. `CONCLUIDA` alone is not the whole story: read the `pix` array for what was actually received.
- Charges with due date (`cobv`) exist for boleto-like flows; use them only if the product needs due dates, fines, or discounts.

## Confirmation and reconciliation

- **Webhook**: configured per Pix key (`PUT /webhook/{chave}`). The PSP calls the receiver's URL, typically with mTLS; validate according to the PSP's method (client certificate, and/or a secret in the path or header). Process idempotently: the same Pix may be notified more than once.
- **`endToEndId`** (E2E ID) uniquely identifies each Pix transaction across the system; store it and use it as the dedupe and reconciliation key. A charge can, in edge cases, receive more than one payment; handle by E2E ID, not only by `txid`.
- **Reconciliation**: list received Pix for a period (`GET /pix?inicio=…&fim=…`) and charges (`GET /cob?…`), compare with the ledger, and alert on paid-not-recorded, recorded-not-paid, and amount mismatches. Run it on a schedule, not only when a user complains.

## Refunds (devolução)

- `PUT /pix/{e2eid}/devolucao/{id}` with a receiver-chosen refund `id` (idempotency). Refunds can be partial; the total cannot exceed the original amount. Track refund status until it is confirmed.
- Refund windows and rules (including the Special Return Mechanism, MED, for fraud cases) are defined by BCB regulation; check the current rules with the PSP.

## Security and operations

- **mTLS**: the API requires a client certificate issued/registered with the PSP. Store certificate and key in a secret manager (not in the repository), load them only in the server process that calls the PSP, monitor **expiry dates**, and rehearse rotation before it is needed.
- **OAuth 2.0 client credentials** for access tokens; cache tokens until expiry; scopes per operation (`cob.write`, `cob.read`, `pix.read`, `webhook.write`, etc., per spec).
- Network: PSP APIs may require allowlisting of outbound IPs; record which egress addresses are registered and what breaks if they change.
- Sandbox: most PSPs provide a homologation environment with separate certificates and credentials; keep them strictly separate from production.
- Personal data: payer name and document may arrive in notifications; store only what the product needs.
