---
name: lovable-supabase-security
description: Review or change security controls in Lovable apps backed by Supabase, especially secrets, RLS, authentication, external services, and Remix copies.
---

# Lovable and Supabase security

Use when a task changes or reviews security in a Lovable application that uses Supabase or Lovable Cloud. Read the [stack guide](../../docs/lovable-supabase.md) for the Remix copy matrix, operational gotchas, and current vendor references.

1. Identify the actual project, environment, frontend/server framework, backend, Supabase instance, and whether this is an original project or a Remix copy. Do not infer these from the product name alone, and copy every project id or URL from a tool result.
2. Inspect relevant client/server boundaries, migrations, RLS policies, grants, Edge Functions/server routes, Storage rules, auth flows, and external service connections. Avoid printing secret values or production records.
3. Classify configuration correctly: browser code is public; `VITE_` values are bundled; publishable/legacy `anon` keys are not authorization; Supabase secret and `service_role` keys must remain server-side. The application must never depend on the `service_role` key on a developer machine; local work goes through Edge Functions or the public client.
4. Check RLS and grants together for exposed tables. Trace the authenticated identity to row or tenant access, then cover allowed and denied cases. Review Storage and Realtime access when used. When creating accounts is not acceptable, run the checks in a rolled-back transaction (see [risk-based checks](../independent-qa/references/risk-based-checks.md)) against an instance you may touch.
5. Treat `SECURITY DEFINER` functions as privileged code. Prefer `SECURITY INVOKER`; if definer is required, inspect `search_path`, schema qualification, row-ownership checks, and `EXECUTE` grants. Check which functions the anonymous and authenticated roles may execute, especially any that read secrets or vaults.
6. For a Remix, distinguish code/schema from data, secrets, domains, collaborators, publication state, Git sync, and service connections. Verify the copy's backend and credentials independently; check whether public Remix exposes a preview and allows source code to be copied. A copy handed to a customer must start empty (no users) and open on its first-access screen; a copy with a test account in it is not deliverable, even at the right commit.
7. Review Lovable Quick/Deep scan results when available, but manually assess high-impact authorization and data paths. A scan is not proof of complete security.
8. Through a platform connector or MCP, reads (listing files, reading a file, `SELECT` queries, project metadata) are the default; any write (SQL with effects, chat prompts to the platform agent, deploys, remixes, publishing, secrets) needs the owner's explicit go-ahead in the current round.
9. Report findings with evidence, affected roles/data, impact, remediation, checks actually run, and unresolved decisions. Never claim the app is secure based only on scans or a checklist.

Use the existing migration and test conventions. Run checks when requested or required by the repository workflow; report unrun checks plainly.
