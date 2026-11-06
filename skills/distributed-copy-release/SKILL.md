---
name: distributed-copy-release
description: Keep every distributed copy of a product (template, remix, fork, demo instance) born from the latest approved commit on the main branch; measure the drift, regenerate the copy, publish it, update the catalog link, and verify, without deleting earlier versions.
---

# Distributed copy release

Use when a product reaches its users as copies that do not follow the repository: platform remixes, template instances, forks, demo tenants. A copy is a frozen snapshot. The original project may track the repository, but every copy made before a commit stays behind it. Run this after any commit on the main branch that must reach the copy, or when someone asks "is the copy up to date?", "the copy looks wrong", "the catalog links are stale".

This skill **resolves** within the round the owner authorized: it generates, moves, publishes, relinks, and verifies. It hands back only what the agent cannot do (a platform refusal, a credential, a decision) with the exact action for the owner. It **never deletes** a copy, creates user accounts, writes to a copy's data, rotates keys, or touches another product. Messages to other people are drafted, not sent.

## Input

The product name and, from the owner or the team's catalog, three references: the repository, the original platform project, and the copy currently distributed. Copy every id and URL from a tool result or from the catalog page you read; never complete one from memory. If a reference is missing or points to a personal account instead of the team's, that is a finding to fix in phase 2.

## Phase 1: measure (read-only, in parallel)

1. **Reference commit.** Fetch the repository and read the latest commit on the main branch: short hash and timestamp with timezone.
2. **Original project.** Does the platform report that commit? Is it in the expected folder or workspace? Is it published?
3. **Original site.** Download the published site, find its main bundle, and search for a string that exists only in the reference commit (take it from the commit's diff). Zero hits means the publication is behind.
4. **Server functions.** If the reference commit changed server functions, confirm they were redeployed: call a changed function as a visitor and read the new behavior, or find the deploy in the platform's history after the commit. A push alone does not redeploy functions.
5. **Current copy.** Read its creation time. Created **after** the reference commit's timestamp: current. Created before: stale, regenerate. "Equal to some version" does not count; only the latest counts.
6. **Copy is empty?** Count users in the copy's auth table. More than zero means someone used the customer's copy: regenerate even at the right commit.
7. **Copy's first screen.** Open the copy's sign-in route in a browser and confirm it opens on the first-access flow (create the administrator account), not on a sign-in form. If the database is empty but the screen shows sign-in, the **code** is wrong: fix it on the main branch before making a copy. A new copy of wrong code only spends credits.

## Phase 2: resolve (in order; each step only after the previous passed)

1. **Original behind the commit.** Wait one or two minutes and measure again. Still behind: push an empty commit to trigger synchronization and measure again. Still behind: stop; the repository link is broken and the owner reconnects it in the platform's Git settings (see the [stack guide](../../docs/lovable-supabase.md#operational-gotchas)).
2. **Functions not redeployed.** Ask the platform agent to redeploy exactly the changed functions at the reference commit, with no file changes and no SQL, and to list what it deployed. This spends platform credits; say so in the output.
3. **Original site behind.** Trigger the original's publish. If blocked, name the exact button for the owner and continue; mark it pending.
4. **First screen wrong (phase 1, step 7).** Fix on the main branch, build, commit, push, wait for the original to reach the commit. If the fix needs a new database object (for example, a function the sign-in screen calls), it must exist in the **original's** database before the copy is made, because the copy clones the original's schema. Store the SQL as a migration in the repository and apply it to the original only with the owner's explicit go-ahead in the current round.
5. **Generate the new copy with the version in its name.** Pattern: `[COPY] <product> · v<version> · <short commit>`. The version is the one the team's catalog is currently shipping; the commit is the reference hash. Platforms often cannot rename a project afterwards, so the name must be right at creation. If a copy with that name exists (same commit, regenerated because it was used), add a short suffix to keep names unique.
6. **Folder.** Move the new copy to the folder that holds distributed copies.
7. **Database of the new copy** (read-only queries): zero users and profiles; no secret-reading function executable by the anonymous or authenticated role; no unexpected triggers on the auth table; plus the product's own checks (see the [report template](assets/copy-release-report.md)). As a visitor, a function that spends credits must refuse (401) and a privileged RPC must refuse (permission denied). If a check fails, stop and report: the problem is in the original, not in the copy.
8. **Publish the copy.** Record the published URL. If blocked, name the button for the owner and mark it pending.
9. **Catalog.** Open the catalog entry, replace the copy link with the new project URL, save, reload, and read it back. If the form pre-fills the old value, clear the field and check its value before saving. If a field for the copy does not exist yet, create it and read all links back.
10. **Dependents.** Notify any running process that records or demonstrates the copy (for example a recording session) of the new URL. If none is running, say so in the output.
11. **People.** Draft the message for the reviewer or team: commit, new copy project, published URL, what changed since the previous copy (from the repository log). Leave it in the chat for the owner to send.
12. **Previous copy.** Keep it. List it by name as the previous version. If its name has no version or commit, suggest the owner rename it with an `[OLD]` prefix; do not delete.

## Phase 3: verify

Repeat phase 1 against the new copy and fill the table in the [report template](assets/copy-release-report.md): main branch, original project, original site, copy (created after the commit? folder?), copy site (serves the commit? first screen is first access?), copy database (common checks and product checks, zero users). The first-screen column counts only when seen in a browser on the published URL; if the build is still in progress, use the platform preview and say so.

Close with **"Updated"** or **"Pending with the owner: …"** listing only what the platform or a permission blocked, with the exact click. Never close with "stale" without having tried to resolve it.

## Earlier versions and loose copies

Search the workspace for every project with the product's name. Everything that is neither the original nor the new copy is an earlier version or a loose copy. For each, run the common database checks and report name, creation date, users, open secret functions, and stored keys. Nothing is deleted. If a loose copy holds keys in an open vault, report that the keys must be rotated in the original.

## Product-specific checks

Each product has its own security objects (vault, profile guard, first-admin rule). On the first run for a product, read its migrations, write the `SELECT` that confirms those objects and their expected values, and keep it in the team's private notes, not in this public skill.

## Rules

- Only `SELECT` in databases; no account creation; no deletion of projects; no key rotation.
- One product per run.
- Say what spent platform credits.
- Every id, URL, hash, and name is copied from a tool result in this session.
