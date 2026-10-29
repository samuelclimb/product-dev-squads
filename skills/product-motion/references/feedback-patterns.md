# Action feedback patterns

Feedback appears where the action happened, once, and then gets out of the way.

| Moment | Pattern | Duration |
|---|---|---|
| Save / copy / connect succeeded | Button label swaps to a self-drawing check + "Saved" / "Copied" | ~1.6 s |
| Item changed state while visible (became connected, activated) | One ring glow on the item; skip the state the screen was born in | ~1.4 s |
| Validation or auth failure | Short horizontal shake of the field or form + inline message | ~0.36 s |
| Request failed and can be retried | Error toast with what happened, what to do, and a "Try again" action | until dismissed |
| Long background job (minutes) finished, failed, or needs input | Global watcher toasts the transition with a link to the item | standard toast |
| Multi-step flow completed | One completion toast; stepper marks only steps really done | standard toast |

## Hooks (React)

```ts
// Turns on for `ms`, off by itself; calling again restarts.
export function useFlash(ms = 1600): [boolean, () => void] { /* setTimeout + cleanup */ }

// Glow class only when `value` changes INTO the target state after first render.
export function useGlowOn<T>(value: T, when: (v: T) => boolean, ms = 1400): string

// Shake class when `trigger` becomes truthy.
export function useShake(trigger: unknown): string
```

Keep the hooks outside component files that export components (fast-refresh rule).

## CSS

```css
.check path { stroke-dasharray: 24; animation: check-draw 420ms var(--ease-out) both; }
@keyframes check-draw { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }

.glow { position: relative; }
.glow::after {
  content: ""; position: absolute; inset: -1px; border-radius: inherit; pointer-events: none;
  box-shadow: 0 0 0 2px var(--focus-ring); opacity: 0;
  animation: glow 1400ms var(--ease-out);
}
@keyframes glow { 0%, 35% { opacity: 1; } 100% { opacity: 0; } }

.shake { animation: shake 360ms var(--ease-out); }
@keyframes shake { 25% { transform: translateX(-4px); } 50% { transform: translateX(3px); } 75% { transform: translateX(-2px); } }
```

## Background task watcher

- Subscribe once at the app shell to status changes of job tables (e.g. Supabase Realtime `postgres_changes`).
- Seed the known statuses of recent jobs on mount; notify only on transitions you observed (ignore inserts, unknown→X, X→X).
- Skip the toast when the user is already looking at that item.
- Map each status to tone, title, and action label in a table, not in branching code.

## Gating flows

A wizard step is marked complete only when its real precondition holds (data saved, job done), and resuming a flow returns the user to the first incomplete step — never past it.
