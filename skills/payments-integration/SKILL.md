---
name: payments-integration
description: Design, change, or review how a product charges, confirms, refunds, and reconciles payments (instant payments such as Pix, cards through hosted or tokenized providers, payment links), covering the payment state machine, idempotency, webhooks, reconciliation, late confirmations, refunds, revenue reporting, and monitoring.
---

# Payments integration

Use when a change creates charges, reacts to payment confirmations, grants access or service after payment, issues refunds, or reports revenue. Money errors are expensive and visible: a user who paid and got nothing, a service delivered without payment, or revenue reported from the wrong source. Treat provider credentials and webhooks as an external integration (verified authenticity, idempotent processing, retries) and run confirmations, expiry, and reconciliation as background jobs; load [`security-review`](../security-review/SKILL.md) for threats. For Brazilian Pix, read [Pix reference](references/pix.md).

## Workflow

1. **Write the payment flow spec** with the [template](assets/payment-flow-spec.md): what is sold, price source, who pays, provider and method, states, what happens on paid/expired/failed/refunded, fulfillment trigger, receipts, and owner of each policy.
2. **Model one payment state machine** and give it a **single writer** (one service or function changes payment status; everything else asks it). Typical states: `created → pending → paid | expired | failed | cancelled`, then `paid → refunded | partially_refunded | disputed`. Every transition is recorded with timestamp, source (webhook, reconciliation, staff), and the provider reference. See [state machine](references/state-machine.md).
3. **Make charge creation idempotent**: an idempotency key derived from the order (not a random value per attempt), unique constraints in the database, and a check before re-creating a charge on retry. A double click or retried job must never create two charges for one order.
4. **Store money as integer minor units** (cents) with the currency; never floating point. Prices come from the product's catalog on the server, never from the client.
5. **Confirm payments from verified sources only**: a provider webhook with verified authenticity, or a server-side query to the provider. Never trust a client redirect, a screenshot, or a user's message as proof of payment.
6. **Reconcile on a schedule** against the provider's records (charges, received payments, refunds, fees, payouts). Webhooks can be lost, delayed, or duplicated; reconciliation is what makes the ledger correct. Report discrepancies to staff with a defined resolution path. Use the [reconciliation checklist](assets/reconciliation-checklist.md).
7. **Decide late and edge cases with the owner**: payment confirmed after the charge expired or the slot was released (honor, rebook, or refund?), overpayment or underpayment, duplicated payment, payment for a cancelled order. Implement the decided policy explicitly and test it; do not let an old charge silently revive a cancelled service.
8. **Refunds and disputes**: who can issue a refund, through what screen, with what confirmation and audit trail; refunds go through the provider API with idempotency; disputes/chargebacks (for cards) have a defined owner and evidence process.
9. **Fulfillment is a consequence of `paid`**, triggered once (idempotently) by the transition, not by every webhook delivery. Monitor both mismatches: paid but not fulfilled, and fulfilled but not paid.
10. **Revenue comes from the payment ledger.** Business reporting (revenue, LTV, cost per sale) uses confirmed payments net of refunds from the product's own records, never conversion values reported by ad platforms or analytics.
11. **Minimize compliance scope**: never receive, log, or store full card data; use hosted pages, tokenization, or wallets so the product stays out of most PCI DSS scope. Payment provider credentials and client certificates stay server-side; track certificate expiry.
12. **Test in sandbox**: every state transition, duplicate webhook, out-of-order webhook, lost webhook (reconciliation catches it), expiry, late payment, refund, provider timeout during creation, and certificate or credential failure. Never test with real money unless the owner authorizes a controlled live check.

## Monitoring

Alert on: payments paid but not fulfilled after N minutes; fulfillment without a paid payment; webhook verification failures; reconciliation discrepancies; charge-creation error rate; certificate or credential expiry approaching. Show operators a payment timeline per order.

## Report

Return the flow spec (or its gaps), state machine and its single writer, idempotency mechanism, confirmation sources, reconciliation job and its last result, late/edge-case policies and who decided them, refund process, revenue source, compliance scope, tests run in which environment, monitoring and alerts, checks not run, and decisions still needed.
