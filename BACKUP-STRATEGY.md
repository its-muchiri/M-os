# BACKUP STRATEGY — Muchiri-OS

This document recommends a simple backup strategy for the Muchiri-OS operating system. The vault is local-first, and backups ensure data is not lost.

## Recommended Backup Strategy (Minimum)

At minimum, implement these four layers of backup:

### 1. Local Copy

- The Muchiri-OS vault (`C:\Users\KIMISH\Desktop\M-os/`) is the primary local copy.
- Keep the vault folder in a stable location — do not move or rename it frequently.
- The Git repository initialized in the vault folder provides version history and recovery.

### 2. Git Repository

- The Git repository at `C:\Users\KIMISH\Desktop\M-os\.git/` tracks every change to every committed Markdown file.
- **Every committed change is a recoverable version.**
- To restore a previous version:
  ```powershell
  # See all commits
  git log --oneline

  # Restore a previous version of a file
  git restore <file> <commit-hash>

  # Restore the entire vault to a previous state
  git checkout <commit-hash> -- .
  ```
- The `.gitignore` ensures sensitive data (`.env`, logs, temp files) is never tracked.

### 3. Remote Private Repository (When Appropriate)

- If the vault contains no secrets or sensitive client data, push the Git repository to a private remote.
- **Do not** push to public GitHub if the vault contains any client information, even anonymized.
- If the vault contains client-sensitive data, use a **private Git server** or an encrypted remote.
- Example remote options:
  - A private Bitbucket or GitLab repository (self-hosted or trusted provider).
  - A personal Git server under your control.
  - **Never** automatically upload private information to GitHub, GitLab, or any third-party service without reviewing the content first.

### 4. Periodic Backup

- Every 2-4 weeks, copy the entire `M-os/` folder to a secure local location:
  - External hard drive.
  - Different partition on the same machine.
  - Cloud storage folder that is encrypted (OneDrive Business, Dropbox with encryption).
- Label the backup with the date: `M-os-backup-YYYY-MM-DD`.
- Keep at least 3-5 historical backups (rotate and overwrite the oldest).

## Backup Workflow

### Daily (automatic via Git)

- As you make changes to the vault, `git add` and `git commit` your changes.
- Each commit is a backup point.
- Run `git status` at the end of the day to confirm your changes are committed.

### Weekly

1. Confirm the last commit contains all changes you want to keep.
2. Create a periodic backup copy: `Copy-Item -Recurse "C:\Users\KIMISH\Desktop\M-os" "D:\Backups\M-os-backup-$(Get-Date -Format 'yyyy-MM-dd')"`.
3. Keep the last 3-5 weekly backups.

### Monthly

1. Review the Git log: `git log --oneline -10`.
2. Verify that the commits represent the work you want to keep.
3. Create a monthly backup to external storage.
4. Delete old backups beyond the retention period (keep 3 months minimum).

### Before Major Changes (before OpenCode tasks, project changes, etc.)

1. Commit all current changes: `git add -A ; git commit -m "Backup before major change"`.
2. Create a periodic backup copy to external storage.
3. Note the Git commit hash for easy recovery if needed.

## What NOT to Back Up

- **Never** automatically back up `.env` files or any secrets to remote storage.
- **Never** include `backups/*.zip`, `backups/*.sql`, or `backups/*.dump` in the Git repository — these are for manual offline backups only.
- **Do not** push the vault to a public repository if it contains any client references, even anonymized.
- **Do not** store passwords, API keys, or authentication tokens in any backup copy.

## Recovery Procedures

### Restoring a Deleted File

```powershell
# From the vault directory
git restore --staged <file>
git restore <file>
```

### Restoring to a Previous State

```powershell
# See the commit history
git log --oneline

# Restore all files to a previous commit
git checkout <commit-hash> -- .

# Or restore a single file
git restore <file> <commit-hash>
```

### Recovering After Accidental Secret Commit

1. Immediately run `git log --oneline` to find the commit that added secrets.
2. Use `git filter-branch --tree-filter 'rm -f .env' <commit-hash>` or `git rebase -i` to remove the commit.
3. Regenerate any compromised secrets (API keys, passwords, etc.).
4. Force-push the cleaned history (requires approval).
5. Create a new periodic backup after the cleanup.

## Related

- [[SECURITY|Security]]
- [[.gitignore|Git Ignore Rules]]
- [[VERSION-CONTROL|Version Control]]
- [[DASHBOARD|Dashboard]]
- [[WORKFLOW|Daily Workflow]]