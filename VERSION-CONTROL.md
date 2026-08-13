# VERSION CONTROL — Git Guidelines for Muchiri-OS

This document explains how Git is used Muchiri-OS, what should be committed, and how to work with the repository.

## What Should Be Committed

All Markdown knowledge files, templates, notes, and structured YAML frontmatter files that constitute the operating system:

- All `.md` files in the vault (knowledge notes, templates, dashboards, maps, agent definitions).
- `AGENTS.md` — the operating constitution.
- `DASHBOARD.md` — the command center.
- `SYSTEM-MAP.md` — architecture diagram.
- `SYSTEM-AUDIT.md` — environment audit.
- `VERSION-CONTROL.md` — these guidelines.
- `README.md` — top-level project readme.
- Project notes in `06-Projects/Active/`, `06-Projects/Planned/`, `06-Projects/Completed/`.
- Client notes in `02-Clients/Active/`, `02-Clients/Leads/`, `02-Clients/Completed/`.
- Marketing notes in `03-Marketing/`.
- Development notes in `04-Development/`.
- Knowledge notes in `05-Knowledge/`.
- Task notes in `08-Tasks/`.
- Meeting notes in `09-Meetings/`.
- SOP and decision templates.
- Git configuration files (`.gitignore`).

**Rule of thumb:** If it's a Markdown knowledge file that documents the system, it should be committed.

## What Should NOT Be Committed

- `.env` and `.env.*` files — environment variables with secrets.
- Python virtual environment directories (`venv/`, `.venv/`).
- `node_modules/` — Node.js dependencies.
- `*.log` files — log files can contain sensitive data.
- `backups/*.zip`, `backups/*.sql`, `backups/*.dump` — may contain sensitive data.
- `Docker` related override and data files.
- IDE specific files (`.vscode/`, `.idea/`).
- OS-specific temporary files (`.DS_Store`, `Thumbs.db`, `desktop.ini`).
- Any files containing API keys, passwords, or credentials.
- Large binary files, datasets, or model files.

**Rule of thumb:** If it contains secrets, it should NOT be committed. Use environment variables and keep secrets outside the vault.

## How to Create Commits

1. **Check status** — before committing, review what changed:
   ```powershell
   git status
   ```

2. **Stage changes** — add intended files (never `git add .` blindly):
   ```powershell
   git add path/to/file.md
   ```

3. **Review changes** — see exactly what will be committed:
   ```powershell
   git diff --staged
   ```

4. **Commit with a descriptive message**:
   ```powershell
   git commit -m "Add client onboarding SOP"
   # or
   git commit -m "Update project status: Project Name"
   # or
   git commit -m "Add Decision Log entry for Q2 strategy"
   ```

5. **Best practice — commit small, focused changes** rather than large batches.

## How to Review Changes

| Command | Purpose |
|---|---|
| `git status` | What has changed (staged, unstaged, untracked) |
| `git diff` | Unstaged changes working directory vs index |
| `git diff --staged` | Staged changes index vs last commit |
| `git log --oneline -5` | Last 5 commits and messages |
| `git show HEAD` | Last commit details |
| `git log --all --oneline --graph` | Full commit history graph |

**Before every commit:** Always run `git diff --staged` to review what you're about to commit.

## How to Restore Previous Versions

| Situation | Command |
|---|---|
| Restore a deleted file | `git restore --staged <file>` then `git restore <file>` |
| Unstage a file | `git restore --staged <file>` |
| Revert to a previous commit | `git restore <file>` (from specific commit: `git restore <file> <commit-hash>`) |
| View a file at a prior commit | `git show <commit-hash>:<path/to/file>` |
| Undo the last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo the last commit (discard changes) | `git reset --hard HEAD~1` |
| Undo a committed change | `git revert <commit-hash>` |

**Safe undo pattern:**
```powershell
# See what changed in last commit
git show HEAD

# If you need to undo
git reset --soft HEAD~1  # Keeps changes staged, can recommit
# Or
git restore .            # Restores working tree to HEAD state
```

## Git Workflow for the Muchiri-OS Vault

### Daily Workflow

1. Open Obsidian and review the vault.
2. Make your changes (create/edit notes, update tasks, etc.).
3. Open PowerShell and check status:
   ```powershell
   git status
   ```
4. Stage only the files you changed:
   ```powershell
   git add path/to/changed/file.md
   ```
5. Review staged changes:
   ```powershell
   git diff --staged
   ```
6. Commit with a meaningful message:
   ```powershell
   git commit -m "Descriptive message of what changed"
   ```
7. (Optional) If you have a remote, pull first, then push:
   ```powershell
   git pull origin main
   git push origin main
   ```

### Branch Guidelines

- **`main`** — stable, reviewed version of the vault. Push only after review.
- **Feature/work branches** — not typically needed for a personal vault. If making major changes, consider a temporary branch.

### Commit Message Guidelines

- Start with a verb: "Add", "Update", "Fix", "Remove", "Create".
- Be descriptive but concise.
- Example: "Add Client-Template.md for new client onboarding"
- Example: "Update Decision Log with Q2 hiring decision"
- Example: "Update DASHBOARD.md with current priorities"

## Security Reminders

- **Never commit `.env` files** — they contain API keys and secrets.
- **Never commit passwords or API keys** in any Markdown file.
- **Treat every note as potentially visible** — this is a knowledge vault, not a secret storage.
- If you accidentally commit secrets, remove the file and force-push (requires approval).

## Related

- [[.gitignore|Git Ignore Rules]]
- [[AGENTS|Operating Constitution]]
- [[SECURITY|Security]]
- [[BACKUP-STRATEGY|Backup Strategy]]