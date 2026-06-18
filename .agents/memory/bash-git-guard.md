---
name: bash git-path guard
description: How the bash tool's guard on .git* paths behaves, and how to restructure a repo around it.
---

The bash tool enforces a **filesystem-level guard on any `.git*` path** (`.git/`, `.gitignore`, `.gitmodules`, `.git/index.lock`, etc.). It is NOT a command-string scan — it intercepts the actual unlink/rename syscall on those paths.

**Observed behavior:**
- `rm -f a b c .gitignore d e` removes a,b,c, then errors (exit 254) when it tries to unlink `.gitignore`; with `set -e` the script stops there, so d,e are NOT removed. Files are processed left-to-right.
- `rm -rf src public node_modules .next` (no `.git*` in the set) works fine, even on tracked files.
- `mv repo/* .` or `rm -rf somedir` will fail if the glob/recursion reaches a `.git*` file inside.
- Read-only git (`git --no-optional-locks ls-tree/status/log/diff`) is allowed.
- The agent CANNOT `git commit`/`git push` (blocked). Replit checkpoints auto-commit to local `main`; the user must push to `origin`.

**How to apply (e.g. promoting a subfolder app to repo root):**
- Remove/move everything EXCEPT `.git*` paths. List files explicitly in `mv` to skip `.gitignore`.
- If two `.gitignore` files are byte-identical, just keep the destination one and leave the source `.gitignore` orphaned.
- You will be left with a leftover dir containing only `.gitignore` that the agent cannot delete — ask the user to run `rm -rf <dir>` in their Shell (the guard does not apply to the user).

**Why:** This guard repeatedly blocks repo-restructure tasks mid-command. Knowing it is path-based (not string-based) lets you sequence destructive commands to avoid touching `.git*` and finish the rest cleanly.
