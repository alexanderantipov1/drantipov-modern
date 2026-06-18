---
name: Large untracked nested dirs lose source files
description: Big duplicate source trees placed in the repo can lose their non-node_modules files
---

# Large untracked nested source trees are fragile in the workspace

When two ~200-300MB copies of a project were dropped into sibling folders (`_main-branch/`, `_andrei-branch/`) inside the repo, their **source files disappeared** over time while `node_modules` survived. Re-copying from a stable `/tmp` clone restored them.

**Why:** unclear (likely checkpoint/git or filesystem management of large untracked dirs), but the effect was reproducible.
**How to apply:** keep a pristine copy outside the repo (e.g. `/tmp/<clone>`) as the source of truth; don't rely on a duplicate tree inside the workspace persisting. Prefer a single working tree. Salvaging a sibling's `node_modules` via `mv` (same filesystem, instant) is a reliable way to avoid slow/stalling `npm install`.
