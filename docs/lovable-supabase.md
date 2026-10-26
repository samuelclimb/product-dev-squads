# Lovable and Supabase project guide

This guide helps an agent understand the project it is actually working on before changing code, data access, or a user interface. Lovable projects evolve, so treat the repository and connected-service configuration as the source of truth for each app.

**Documentation checked:** 2026-10-26. Recheck the linked vendor docs for current behavior and plan-specific limits.

## Identify the project shape

Lovable can build and publish full-stack web applications. A project may use Lovable Cloud's built-in backend or connect to an external Supabase project. The generated application may also use different server frameworks over time.

Before proposing implementation details, inspect the current project for:

- `package.json` and its scripts/dependencies to identify React, Vite, TanStack Start, and library versions.
- `src/`, route and server-function conventions to see where browser and server code run.
- `supabase/`, migrations, tests, functions, and client setup to identify the database and access-control implementation.
- `.lovable/`, `lovable.toml`, connected design-system files, and project instructions when present.
- Environment variable names and deployment configuration without printing or copying their values.

Do not assume an app uses one Lovable template or that similarly named Supabase projects share a backend. Confirm which project and environment each URL, key, migration, and connection refers to.

Lovable's security model separates browser code, server-side functions/routes, and PostgreSQL access rules. Browser code is inspectable and modifiable by its user; it cannot enforce authorization by itself. Business rules and privileged operations belong on a trusted server boundary, with database authorization enforced by Postgres. See [Lovable security best practices](https://docs.lovable.dev/tips-tricks/security-best-practices).

## Security baseline

### Secrets and data

- Never commit passwords, private API tokens, database connection strings, Supabase secret keys, `service_role` keys, or other credentials.
- Never put real customer records, private company data, personal identifiers, or production exports in source, prompts, fixtures, screenshots, logs, examples, or migrations. Use synthetic examples.
- Treat `VITE_` variables and all browser-bundled configuration as public. A variable name or `.env` file does not make a value secret after a frontend build.
- Supabase publishable keys, and legacy `anon` keys, are designed to identify a project from client code. They are not authorization controls. Use them only with appropriate RLS and least-privilege grants.
- Supabase secret and `service_role` keys bypass RLS. Keep them in Lovable Secrets, Supabase Edge Function secrets, or another server-side secret manager. Do not expose them to the browser or mobile bundle.

Lovable Secrets are injected into server-side Edge Functions and do not reach the browser. See [Lovable Secrets](https://docs.lovable.dev/features/secrets) and [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys).

### Supabase authorization

- Enable RLS on every table exposed through the Data API. Review grants as well as policies: policies filter rows but do not remove privileges granted to a role.
- Define access for each relevant operation and role. Use ownership or tenant membership checks in the database; never trust a client-supplied `user_id`, role, account ID, or organization ID without deriving or validating it against the authenticated identity.
- Test both allowed and denied cases for `anon` and `authenticated` users, including cross-user and cross-tenant access. A UI that hides a button is not an authorization control.
- Apply appropriate policies to Storage objects and Realtime data, not only relational tables.
- Prefer PostgreSQL's default `SECURITY INVOKER`. If a `SECURITY DEFINER` function is necessary, set a safe `search_path` (Supabase recommends an empty path), schema-qualify object names, validate row ownership inside the function, and narrowly grant `EXECUTE`.
- Validate input and enforce authentication, authorization, rate limits, and safe error/log behavior in Edge Functions and server routes. Do not send secrets or personal data to client-visible logs or error responses.

Follow the [Supabase RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security), [secure data guide](https://supabase.com/docs/guides/database/secure-data), and [database function security guide](https://supabase.com/docs/guides/database/functions). Use the project’s existing migration and database-test workflow.

### Lovable security scans

Lovable's Quick scan checks areas such as database access, dependencies, and unauthenticated MCP exposure. Deep scan reviews application-specific authorization, endpoints, input handling, secrets, authentication, and sensitive data. Use scans as evidence for the current project version, not as proof of complete security. Review critical findings and manually verify high-impact access rules. See [Lovable Security overview](https://docs.lovable.dev/features/security).

## Remix: what changes and what does not

Remix creates a new, independent project snapshot. Later changes do not sync between the original and the copy. It is different from Git sync, which keeps one Lovable project connected to a Git repository, and different from transferring ownership of the original project.

| Project element | Included in a Remix? |
|---|---|
| Application code | Yes |
| Database schema and table structure | Yes |
| Rows and user records in the database | No |
| Secrets and credentials | No |
| Custom domain and publish state | No; the copy starts unpublished |
| Collaborators | No |
| Git sync and external service connections | No; reconnect services as needed |
| Project chat history and attached chat files | Optional; requires edit access and selecting the option |
| Files from the project's Files tab | Optional; requires edit access and selecting the option |
| Custom project knowledge | Optional when available |

Lovable generates new backend keys for the copy. Reconnect its external services, configure its secrets, and verify its backend before expecting integrations to work. A project connected to an external Supabase instance can only be remixed by someone with edit access to the source project.

### Public Remix links

When public Remix is enabled, anyone with the link can preview the latest project version, including changes that have not been published. The preview does not grant access to the original editor, source code, chat, or files. A person who remixes receives the code in their own copy and can read it there. Turning off public Remix prevents new copies from the link; it does not remove copies already made.

Before enabling public Remix, inspect source code, project knowledge, chat attachments that could be included, and previews for credentials, customer data, employer-confidential material, and identifying artifacts. Do not assume database rows or secrets will be copied; do not assume hardcoded values will be removed.

See [Lovable: Remix a project](https://docs.lovable.dev/features/projects/remix) for the current copy rules and options.

## Preserve the existing design system

Before changing UI, locate and follow the project's source of truth:

- Lovable design-system instructions, `.lovable/` rules, and connected libraries when present.
- Shared React components, commonly under `src/components/ui/` or a project-specific equivalent.
- Theme providers, CSS variables, global styles, Tailwind configuration, typography, spacing, and established interaction patterns.
- Existing screens that show how the product handles navigation, forms, loading, empty, error, and success states.

Reuse shared components and tokens. Avoid one-off colors, typography, controls, or generic cards. If a connected Lovable design system generates files under `src/design-system/`, check its update behavior before editing them; local edits may be replaced by a later design-system update. If no design system exists, follow the strongest consistent patterns already in the app and make any necessary new convention explicit.

See [Lovable design systems](https://docs.lovable.dev/features/design-systems).

## Agent handoff

For a Lovable/Supabase change, report:

- The framework and backend actually found in the project.
- Which tables, roles, policies, functions, secrets, and external services were inspected.
- Whether work is on the original project or a Remix copy, and which connections must be configured separately.
- Which shared components and tokens were reused for UI work.
- Checks actually performed, findings not verified, and decisions that require an owner.

Do not claim a security scan, database test, or visual check passed unless it was run against the current project version.
