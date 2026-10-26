# Domain modeling

Use domain modeling to clarify business concepts and rules that software must preserve.

- Define terms consistently and identify ambiguous names.
- Group behavior and data around domain responsibilities, not only database tables or screens.
- Identify invariants, lifecycle states, and which component is authoritative for a decision.
- Make external dependencies and consistency boundaries explicit.
- Keep unresolved business policy outside the implementation until its owner decides it.

This is a discovery aid. Do not force aggregates, events, or service boundaries onto a small change without evidence that they solve a real problem.
