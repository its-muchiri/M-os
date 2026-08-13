# Muchiri-OS — Local-First AI-Powered Second Brain & Agency Operating System

## What Muchiri-OS Is

Muchiri-OS is a local-first, AI-powered operating system for digital agencies. It coordinates specialized AI agents to handle marketing, web development, and technology solutions work. Everything runs locally on your machine — data stays private.

## What Obsidian Does

Obsidian is the knowledge-management and human interface layer. The Muchiri-OS vault (`M-os/`) is designed as an Obsidian vault where:

- All notes are plain Markdown with YAML frontmatter.
- Wiki links `[[wikilinks]]` create a knowledge graph for backlinks and graph view.
- Templates provide consistent structure for clients, projects, tasks, meetings, and more.
- No database — everything is files on disk that Git can track.
- Core Obsidian functionality works without any community plugins.

**Open the vault in Obsidian:** Double-click `DASHBOARD.md` or open the `M-os/` folder as an Obsidian vault.

## What OpenCode Does

OpenCode is the primary autonomous development and execution agent. It treats the Muchiri-OS vault as a structured knowledge filesystem.

- Reads `AGENTS.md` as the operating constitution before every task.
- Reads vault notes to understand context before executing.
- Executes technical tasks: code, file operations, scripts, commands.
- Writes results back to the vault: updated notes, status changes, new decisions.
- Never invents client information. Never stores secrets in notes. Always inspects before modifying.

**Primary instruction file:** `AGENTS.md`

## How They Work Together

```
USER
  ↓
OBSIDIAN (knowledge vault)
  ↓
KNOWLEDGE / TASKS / CLIENT DATA
  ↓
OPENCODE (execution agent)
  ↓
SPECIALIZED AI AGENTS
  ↓
TOOLS / CODE / AUTOMATION
  ↓
PROJECTS
  ↓
UPDATED KNOWLEDGE
```

1. **User** opens Obsidian and reviews the `DASHBOARD.md`.
2. **User** captures ideas in `00-Inbox/` or creates tasks in `08-Tasks/Today`.
3. **OpenCode** reads relevant notes, SOPs, and the Agent Registry before acting.
4. **Specialized agent** handles its domain (research, SEO, content, code, marketing, planning, automation).
5. **Results** are written back to the vault (notes, status updates, decisions).
6. **User** reviews changes in Obsidian and in Git.

## Folder Structure

```
M-os/
├── 00-Inbox/              ← Capture zone, process regularly
├── 01-Agency/             ← Identity, strategy, SOPs, policies, templates
│   ├── About/             ← Agency identity
│   ├── Strategy/          ← Strategy, positioning, Decision Log
│   ├── Services/          ← Service definitions
│   ├── SOPs/              ← Standard operating procedures
│   ├── Processes/         ← Recurring processes
│   ├── Policies/          ← Agency policies
│   └── Templates/         ← 15+ reusable note templates
├── 02-Clients/            ← Active / Leads / Completed / Templates
├── 03-Marketing/          ← Strategy, Campaigns, Content, SEO, Social, Analytics
├── 04-Development/        ← Websites, Apps, APIs, Automation, DevOps, Documentation
├── 05-Knowledge/          ← Long-term knowledge base (AI, Marketing, SEO, ...)
├── 06-Projects/           ← Active / Planned / Completed project folders
├── 07-AI-Agents/          ← Agent definitions and workspaces (7 agents)
├── 08-Tasks/              ← Today / This-Week / Backlog / Completed
├── 09-Meetings/           ← Meeting notes
├── 10-Resources/          ← Links, Tools, References, Documents
├── 11-Archive/            ← Finished / superseded material
├── DASHBOARD.md           ← Command center
├── SYSTEM-MAP.md          ← How everything connects
├── AGENTS.md              ← Operating constitution
├── SYSTEM-AUDIT.md        ← Environment audit
├── VERSION-CONTROL.md     ← Git guidelines
├── .gitignore             ← Protected files/directories
├── OBSIDIAN-PLUGINS.md    ← Optional plugin documentation
├── SECURITY.md            ← Security guidelines
└── BACKUP-STRATEGY.md     ← Backup recommendations
```

## Agent Architecture

Seven specialized agents, each with defined responsibilities:

| Agent | Owns |
|---|---|
| **Research** | Discovery, research notes, knowledge gaps → `05-Knowledge/Research` |
| **SEO** | Keyword research, audits, briefs, topical maps → `03-Marketing/SEO` |
| **Content** | Blog, social, website copy, content calendars → `03-Marketing/Content` |
| **Developer** | Websites, apps, APIs, code documentation → `04-Development` (code outside vault) |
| **Marketing** | Campaigns, positioning, personas, competitor research → `03-Marketing` |
| **Project Manager** | Planning, tasks, priorities, deadlines, status → `06-Projects` |
| **Automation** | Scripts, workflows, integrations, CI/CD → `04-Development/Automation` |

**Agent Registry:** `07-AI-Agents/Agent-Registry/README.md`

Each agent has: Mission, Responsibilities, Inputs, Outputs, Allowed Actions, Forbidden Actions, Required Knowledge, Escalation Rules.

## Daily Workflow

**Morning:**
1. Open Obsidian and vault.
2. Review `DASHBOARD.md`.
3. Review today's tasks in `08-Tasks/Today`.
4. Review active projects in `06-Projects/Active`.
5. Identify 1-3 priorities.

**During work:**
1. Capture ideas in `00-Inbox/`.
2. Create tasks in `08-Tasks/Today/` or `08-Tasks/This-Week/`.
3. Update project notes in `06-Projects/Active/`.
4. Ask OpenCode to execute technical tasks (read `AGENTS.md` first).
5. Review changes.

**End of day:**
1. Update completed tasks to `08-Tasks/Completed/`.
2. Record decisions in `01-Agency/Strategy/Decision-Log`.
3. Update project status in `06-Projects/Active/`.
4. Process `00-Inbox/`.
5. Set tomorrow's priorities.

## Project Workflow

1. **Create a project** — Use `06-Projects/Templates/Project-Template.md` as the structure. Create a folder under `06-Projects/Active/`.
2. **Add client linkage** — Link the project to a client via `client: "[[Client Name]]"` in the YAML frontmatter.
3. **Break down tasks** — Create tasks in `08-Tasks/Today/` or `08-Tasks/This-Week/`, linking to the project: `project: "[[Project Name]]"`.
4. **Execute work** — Use the appropriate specialized agent (SEO, Content, Developer, etc.) via OpenCode.
5. **Update status** — Refresh the project's `status.md` and `updated` YAML field.
6. **Record decisions** — Add major decisions to `01-Agency/Strategy/Decision-Log`.
7. **Close or archive** — Move completed projects to `06-Projects/Completed/`.

## Client Workflow

1. **Add a client** — Use `02-Clients/Templates/Client-Template.md` as the structure. Create a note in `02-Clients/Active/` or `02-Clients/Leads/`.
2. **Link projects** — Link the client to all associated projects: `projects: [[Project Name1]], [[Project Name2]]`.
3. **Record meetings** — Create notes in `09-Meetings/` using the [[01-Agency/Templates/Meeting-Template|Meeting Template]]. Link to client and project.
4. **Record decisions** — Add decisions to `01-Agency/Strategy/Decision-Log`.
5. **Track deliverables** — Update project status and tasks as work progresses.
6. **Archive** — Move completed client engagements to `02-Clients/Completed/`.

## Security

- **Never** store passwords, API keys, private keys, or authentication tokens in the vault.
- **Never** commit `.env` files to Git.
- The `.gitignore` automatically protects: `.env`, `.env.*`, `venv/`, `node_modules/`, `*.log`, `backups/`, and more.
- Use Windows environment variables or a password manager for any secrets.
- Client confidentiality: use code names instead of real client names in notes. Keep a separate secure map of code names to real names.
- Review `SECURITY.md` for complete guidelines.

## Git

- The Git repository is initialized at `C:\Users\KIMISH\Desktop\M-os\.git/`.
- **Commit messages** should be descriptive: "Add Client-Template.md for new client onboarding", "Update Decision Log with Q2 hiring decision".
- **Always** run `git diff --staged` before committing to review changes.
- **Never** commit secrets, API keys, or `.env` files.
- **Git workflow:**
  1. `git status` — check what changed.
  2. `git add <file>` — stage intended files only.
  3. `git diff --staged` — review staged changes.
  4. `git commit -m "descriptive message"` — commit.
  5. `git log --oneline -5` — view history.
- See `VERSION-CONTROL.md` for complete Git guidelines.

## Backup

- **Local copy** — the vault folder is the primary backup.
- **Git repository** — every committed change is a recoverable version.
- **Periodic backup** — every 2-4 weeks, copy the `M-os/` folder to external storage.
- **Do not** automatically upload private information to remote repos.
- **Do not** include `.env` files, logs, or temporary files in backups.
- See `BACKUP-STRATEGY.md` for complete backup guidelines.

## Future Expansion

Muchiri-OS is designed to be modular and expandable. Future possibilities include:

- **Community plugins** (optional) — Dataview for dynamic queries, Tasks for enhanced task management, Templater for template automation. Install only when there is a clear benefit.
- **Remote collaboration** — Git sync between multiple vaults (with proper security review).
- **Additional agents** — New specialized agents for specific domains.
- **Dashboard enhancements** — Custom metrics, charts, or system health monitoring.
- **Integration with external tools** — CRM, accounting, or communication tools (always local-first, never expose secrets).

The vault remains fully functional with Core Obsidian functionality only. No plugins are required.

## Quick Start for New Users

1. **Open the vault:** Double-click `DASHBOARD.md` in the `M-os/` folder (or open the folder in Obsidian).
2. **Read the constitution:** Read `AGENTS.md` — it's the operating constitution.
3. **Review the dashboard:** `DASHBOARD.md` shows today's priorities, active projects, and important links.
4. **Capture an idea:** Drop it in `00-Inbox/` and process it later.
5. **Create a task:** `- [ ] Task description [[Project Name]] #tag` in `08-Tasks/Today`.
6. **Ask OpenCode:** "Read the client requirements in Obsidian and create an implementation plan."
7. **Check git status:** `git status` to see what's changed.
8. **End of day:** Update completed tasks, record decisions, set tomorrow's priorities.

## Related Files

- `AGENTS.md` — Operating constitution (REQUIRED reading)
- `DASHBOARD.md` — Command center
- `SYSTEM-MAP.md` — System architecture
- `VERSION-CONTROL.md` — Git guidelines
- `OBSIDIAN-PLUGINS.md` — Optional plugin documentation
- `SECURITY.md` — Security guidelines
- `BACKUP-STRATEGY.md` — Backup recommendations
- `07-AI-Agents/Agent-Registry/README.md` — Seven agent definitions
- `01-Agency/Templates/` — 15+ note templates
- `01-Agency/Strategy/Decision-Log.md` — Decision records