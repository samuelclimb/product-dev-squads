# Reconciliation checklist

Run on a schedule (for example hourly for recent activity and daily for the previous day) and on demand.

- [ ] Fetch provider records for the window: charges, received payments, refunds, fees, payouts.
- [ ] Match each provider payment to a ledger payment by the provider's unique transaction ID; fall back to charge ID and amount only with review.
- [ ] **Paid at provider, not paid in ledger** → apply the transition through the single writer (with source "reconciliation") or open a review if the order state forbids it (expired, cancelled).
- [ ] **Paid in ledger, not found at provider** → investigate before any fulfillment continues; possible spoofed confirmation.
- [ ] **Amount mismatch** → review queue.
- [ ] **Refunds** at provider vs. ledger.
- [ ] **Duplicates**: two payments for one order.
- [ ] **Fulfillment check**: every paid payment has a completed fulfillment; every fulfillment has a paid payment.
- [ ] Totals for the period (gross, refunds, fees, net) match the provider statement.
- [ ] Record the run: window, counts matched, discrepancies found, actions taken, who reviewed.
- [ ] Alert staff when discrepancies exceed zero for critical classes.
