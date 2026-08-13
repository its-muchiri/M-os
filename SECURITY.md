# SECURITY — Muchiri-OS Security Guidelines

This document security guidelines for the Muchiri-OS operating system. **Never** store secrets inside the Obsidian vault or commit them to Git.

## Core Rule

**NEVER store the following inside normal Obsidian notes (any file in the `M-os/` vault):**

- passwords
- API keys
- private keys
- authentication tokens
- credit card numbers
- encryption keys
- connection strings

## Secrets Management

### What Must NOT Go in the Vault

| Secret Type | Must NOT Be Stored In |
|---|---|
| API keys (OpenAI, Anthropic, Google, etc.) | Any `.md` file in the vault |
| Database passwords | `02-Clients/`, `06-Projects/`, `DASHBOARD.md`, or any note |
| Private keys (SSH, SSL, signing keys) | Anywhere in the vault |
| Authentication tokens | `AGENTS.md`, `SYSTEM-MAP.md`, or any knowledge note |
| Environment variable values | `.env` files are excluded by `.gitignore` — do not create them inside the vault |
| Credit card numbers or financial data | Any knowledge note or template |

### Environment Variables (`.env`)

- The `.gitignore` already excludes `.env` and `.env.*` files.
- **Never** create `.env` files inside the `M-os/` vault directory.
- **Never** commit `.env` files to the Git repository.
- Use Windows environment variables or a separate `C:\muchiri-env\.env` file outside the vault for any secrets your scripts need.
- The existing `.env.example` in the muchiri-os v1 directory (not in M-os) shows the format, but M-os does not use `.env` files inside the vault.

## API Keys

- **Never** write API keys in any Markdown file in the vault.
- **Never** print API keys in OpenCode chats or commands.
- If OpenCode needs an API key to perform a task, the user must provide it securely via:
  - Windows environment variables.
  - A secure prompts dialog (user types the key, it is not stored).
  - A separate credentials file outside the vault (`.env` outside `M-os/`).

## Git Security

### What Should NOT Be Committed

All files listed in `.gitignore` (automatically protected):

- `.env` and `.env.*`
- `venv/`, `.venv/`, `env/`
- `node_modules/`
- `*.log` files
- `backups/*.zip`, `backups/*.sql`, `backups/*.dump`
- `*.tmp`, `*.temp`
- `node-debug.log*, yarn-debug.log*, yarn-error.log*`
- `docker-compose.override.yml`
- `.vscode/`, `.idea/`
- `.DS_Store`, `Thumbs.db`, `desktop.ini`
- `models/` (Ollama model files)
- `n8n_data/`
- `automation/post_queue/`

### Git Commit Guidelines

- **Always** run `git diff --staged` before committing to review what you're about to commit.
- **Never** commit `.env` files or any files containing secrets.
- **Always** check `git status` before and after committing.
- If you accidentally commit secrets, immediately:
  1. Remove the file from Git history using `git filter-branch` or `git rebase -i`.
  2. Regenerate the compromised secret.
  3. Force-push with the cleaned history (requires approval).
  4. Report the incident.

## Backups

### Backup Strategy (see [[BACKUP-STRATEGY|Backup Strategy]])

- **Local copy** — the Git repository at `C:\Users\KIMISH\Desktop\M-os\` is the primary local backup.
- **Remote private repository** — when appropriate, push to a private remote Git repo (not GitHub public).
- **Periodic manual backup** — copy the entire `M-os/` vault folder to a secure local location (external drive, different partition).
- **Do not automatically upload private information** to remote repos.

### What to Back Up

- The entire `M-os/` vault directory (all Markdown files, templates, notes).
- `AGENTS.md` — the operating constitution.
- `VERSION-CONTROL.md` — Git guidelines.
- `DASHBOARD.md` — the command center.
- `SYSTEM-MAP.md` — architecture diagram.
- `SYSTEM-AUDIT.md` — environment audit.

### What NOT to Back Up (or Securely Exclude)

- Any `.env` files or secrets.
- Log files that may contain sensitive data.
- Temporary files (`*.tmp`, `*.temp`).
- `backups/` folder contents if they include client data.

## Access Control

### Vault Access

- The Muchiri-OS vault is designed for single-user operation (the primary user).
- If sharing the vault with team members:
  - Use Git with individual user accounts.
  - Each user has their own Git config (`user.name` and `user.email`).
  - Review changes before pushing to shared remote.
  - Never share `.env` files or credentials via the vault.

### Principle of Least Privilege

- Only the minimum necessary people should have access to the vault.
- Sensitive client information should be restricted to those who need it.
- The vault should not be stored on shared or public computers.

## Client Confidentiality

### What Must Be Protected

- Client names, companies, and industries (if sensitive).
- Contact information (email, phone, address).
- Project details and deliverables that are confidential.
- Financial information, budgets, and pricing.
- Strategic plans and competitive intelligence.

### Handling Client Data in the Vault

- Use **initials or code names** instead of full client names when possible.
  - Example: Instead of `[[Acme Corp]]`, use `[[Client A]]` or `[[C-Corp]]`.
  - Keep a separate, secure offline map of code names to real client names.
- Do not include real personal contact information in notes.
- Use the `02-Clients/Templates/Client-Template.md` without filling in sensitive data.
- If client information must be recorded, store it in a secure password manager (e.g., Bitwarden, 1Password), NOT in Obsidian.

### Allowed Client References

- Client **industry** (e.g., "software," "healthcare," "retail") — OK if not sensitive.
- Project **type** (e.g., "website redesign," "SEO audit," "automation workflow") — OK.
- Project **status** (e.g., "planning," "active," "completed") — OK.
- Date ranges (e.g., "Q2 2026," "January-March 2026") — OK if not proprietary.

### Not Allowed Client References

- Full client names in public-facing or shared vaults.
- Client email addresses, phone numbers, or physical addresses.
- Financial figures, pricing, or budget amounts.
- Strategic objectives or competitive strategies.
- Personal data (names of decision-makers beyond initials, addresses, etc.).

## Sensitive Data Handling

### When You Encounter Sensitive Data

1. **Stop** — do not process or move the data until you understand its sensitivity.
2. **Assess** — determine if the data falls under the "never store" categories above.
3. **Redirect** — move the data to a secure location outside the vault:
   - Windows Credential Manager.
   - A password manager (Bitwarden, 1Password, LastPass).
   - An encrypted external file (`.enc`, `.gpg` outside the vault).
   - A physical notes file that you keep in a secure location.
4. **Continue** — proceed with the task using only the non-sensitive, redacted information.

### Redaction Guidelines

When you must include client or sensitive information in a note:

1. **Redact all identifiers** — replace names, emails, phone numbers with placeholders.
2. **Use code names** — assign internal code names for clients/projects.
3. **Keep a key** — maintain a separate, secure map of code names to real names (offline or in a password manager).
4. **Never** include full passwords, API keys, or authentication tokens in any note.

### Example: Redacted Client Note

```markdown
---
type: client
status: active
created: 2026-01-15
updated: 2026-05-20
client:
  name: [Client Code Name — see secure notes]
  company: [Company Industry: software / SaaS]
  industry: SaaS
website: https://example.com
tags:
  - client
---
```

## Related

- [[BACKUP-STRATEGY|Backup Strategy]]
- [[.gitignore|Git Ignore Rules]]
- [[AGENTS|Operating Constitution]]
- [[VERSION-CONTROL|Version Control]]
- [[02-Clients|Client Management]]
- [[07-AI-Agents/Agent-Registry|Agent Registry]]