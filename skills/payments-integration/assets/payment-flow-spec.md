# Payment flow spec

- **What is sold:**
- **Price source (server catalog, table, rule):**
- **Payer and channel where payment happens (web, chat, app):**
- **Provider and method:**
- **Policy owner:**

## States

| State | Meaning | Entered by | User sees | Staff sees |
|---|---|---|---|---|

## Charge creation

- Idempotency key:
- Expiry and alignment with reservations:
- Retry policy on provider errors:

## Confirmation

- Sources (verified webhook, provider query):
- Amount check:
- Single writer of payment status:

## Fulfillment

- What happens once paid, through which outbox/job:
- Idempotency of fulfillment:

## Edge cases (decided by the owner)

| Case | Policy | Decided by / date |
|---|---|---|
| Paid after expiry or after slot released | | |
| Paid twice | | |
| Wrong amount | | |
| Order cancelled, then paid | | |
| Provider down during creation | | |

## Refunds and disputes

- Who can refund, from which screen, with what confirmation:
- Partial refunds:
- Disputes (cards):

## Receipts and data

- Receipt or invoice sent when:
- Payer data stored and why:

## Reporting

- Revenue source (payment ledger, net of refunds and fees):

## Monitoring

- Alerts:

## Tests (sandbox)

- [ ] Each state transition
- [ ] Duplicate and out-of-order webhooks
- [ ] Lost webhook caught by reconciliation
- [ ] Expiry and late payment
- [ ] Refund (full and partial)
- [ ] Provider timeout during creation
- [ ] Credential or certificate failure
