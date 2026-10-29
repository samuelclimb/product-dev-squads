# Payment state machine

## States and transitions

| From | To | Trigger | Notes |
|---|---|---|---|
| — | created | Order confirmed by the user | Price and amount fixed from the server catalog |
| created | pending | Charge created at the provider | Store provider charge ID and expiry |
| created | failed | Provider rejected creation | Retry only if the error is transient and the charge does not exist |
| pending | paid | Verified webhook or provider query shows settlement | Record provider transaction ID, amount received, timestamp |
| pending | expired | Expiry time passed without payment | Release reserved resources; tell the user per policy |
| pending | cancelled | User or staff cancelled | Cancel at the provider when supported |
| expired / cancelled | late_paid (or paid + flag) | Payment arrives after expiry/cancellation | Apply the owner's policy (honor, rebook, refund); never silently resume |
| paid | refunded / partially_refunded | Refund confirmed by the provider | Record refund ID and amount |
| paid | disputed | Chargeback opened (cards) | Evidence process |

Rules:

- **Single writer**: one module performs transitions with a guarded update (`UPDATE … WHERE status = 'pending'`) or a row lock, so concurrent webhook and reconciliation runs cannot both apply.
- **Transitions are idempotent**: applying "paid" twice is a no-op the second time; side effects (fulfillment, receipts, notifications) are queued once from the transition, through an outbox.
- **Amount check**: compare the amount received with the amount charged; mismatches go to review.
- **History**: append-only transition log with source and raw provider reference (no sensitive payer data beyond what is needed).
- **Time**: store provider timestamps and the local receipt time; use UTC.

## Fulfillment

Fulfillment (granting the service, booking, sending access) is triggered by the `paid` transition through the outbox, carries the payment ID as idempotency key, and records its own status. A monitor compares paid payments with fulfillments in both directions.

## Expiry

Expiry is enforced by a scheduled job that moves overdue `pending` payments to `expired` and releases resources; do not rely on the user returning. Align the provider-side expiry with the product's rule so the provider stops accepting payment when the product stops honoring it, where the provider allows.
