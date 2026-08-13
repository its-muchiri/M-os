# OpenCode Integration — Muchiri-OS

This document explains how OpenCode should navigate and work with the Muchiri-OS Obsidian vault.

## Primary Instruction File

- `AGENTS.md` — The operating constitution. OpenCode MUST read this before executing any task.
- All other `.md` files in the vault are structured knowledge, not code instructions.

## Vault Navigation

OpenCode should treat the Obsidian vault (`M-os/`) as a structured knowledge filesystem with the following hierarchy:

| Path | Purpose | How OpenCode Uses It |
|---|---|---|
| `00-Inbox/` | Capture zone | Read for new ideas/tasks; move content to proper home |
| `01-Agency/` | Agency identity & SOPs | Read policies, processes, templates before acting |
| `01-Agency/Templates/` | Reusable note templates | Copy template YAML frontmatter when creating new notes |
| `02-Clients/` | Client records | Read client context before starting work; never invent client info |
| `03-Marketing/` | Marketing operations | Read strategy, campaigns, SEO, content for context |
| `04-Development/` | Development operations | Read project requirements; code lives OUTSIDE this vault |
| `05-Knowledge/` | Long-term knowledge base | Read AI, Marketing, SEO, Web-Development, etc. notes |
| `06-Projects/` | Project management | Read project status, tasks, decisions before acting |
| `07-AI-Agents/` | Agent definitions | Read Agent Registry for roles, responsibilities, escalation rules |
| `08-Tasks/` | Task management | Read today/this-week/backlog tasks; update status when complete |
| `09-Meetings/` | Meeting notes | Read meeting minutes; record decisions in Decision Log |
| `10-Resources/` | Curated resources | Read links, tools, references |
| `11-Archive/` | Finished/superseded material | Reference only; do not modify unless restoring |

## Key Directories OpenCode Must Know

### `01-Agency/Strategy/Decision-Log`

- OpenCode MUST read this before making any major architectural or business decision.
- Format: `YYYY-MM-DD — Decision title` with fields: Decision, Context, Options, Chosen option, Reason, Consequences, Related project.
- OpenCode must add new decisions following this exact format.

### `01-Agency/SOPs/`

- Standard Operating Procedures. OpenCode should read applicable SOPs before executing recurring tasks.
- Never act without checking SOPs for the relevant domain.

### `07-AI-Agents/Agent-Registry/`

- Formal definitions of all seven agents: Research, SEO, Content, Developer, Marketing, Project Manager, Automation.
- Each agent has: Mission, Responsibilities, Inputs, Outputs, Allowed Actions, Forbidden Actions, Required Knowledge, Escalation Rules.
- OpenCode assigns tasks to agents based on this registry.

### `06-Projects/`

- Each project folder contains: README.md, requirements.md, tasks.md, decisions.md, status.md, documentation.md.
- OpenCode reads project status and tasks before starting work.
- Use `06-Projects/Templates/Project-Template.md` format when creating new projects.

### `02-Clients/`

- One note per client or lead. Never invent client information.
- Read client context from `02-Clients/Active/` or `02-Clients/Leads/`.

## How OpenCode Should Read/Write Files

### Reading

1. **Always read relevant notes first** — never act in a vacuum.
2. **Search for wiki links** — use `[[wiki links]]` to find related notes.
3. **Check YAML frontmatter** — understand the status, type, and metadata of any note before modifying.
4. **Read SOPs and Decision Log** — before making any significant change.
5. **Check task lists** — review `08-Tasks/Today/` and `08-Tasks/This-Week/` for assigned work.

### Writing

1. **Never overwrite blindly** — read the existing note first.
2. **Update YAML frontmatter** — set `updated: YYYY-MM-DD` and any changed fields.
3. **Use templates** — copy the content of the appropriate template from `01-Agency/Templates/` when creating new notes.
4. **Link related notes** — use `[[wiki links]]` to create meaningful relationships.
5. **Record decisions** — add entries to `01-Agency/Strategy/Decision-Log` for major decisions.
6. **Update task status** — move completed tasks to `08-Tasks/Completed/`; update progress in `08-Tasks/Today/` or `08-Tasks/This-Week/`.
7. **Keep human-readable format** — all notes must remain in standard Obsidian Markdown with YAML frontmatter.

## How OpenCode Should Create Tasks

Tasks must be linkable to:
- Clients: `[[02-Clients/Active/Client Name]]`
- Projects: `[[06-Projects/Active/Project Name]]`
- Campaigns: `[[03-Marketing/Campaigns/Campaign Name]]`
- Agents: `[[07-AI-Agents/Agent-Registry/README|Agent Name]]`

Task format (in `08-Tasks/Today/` or `08-Tasks/This-Week/`):

```markdown
- [ ] Task description [[link-to-project]] #tag
- [x] Completed task
```

File tasks in the correct location:
- `[[08-Tasks/Today/README|Today]]` — tasks for today
- `[[08-Tasks/This-Week/README|This-Week]]` — tasks for this week
- `[[08-Tasks/Backlog/README|Backlog]]` — tasks with no urgency
- `[[08-Tasks/Completed/README|Completed]]` — done tasks (archive)

## Irreversible Actions Requiring Human Approval

- Deleting or renaming files or folders
- Force-pushing Git history
- Changing `.gitignore` or security config
- Removing client data
- Deploying to production
- Installing new software

## Security Rules for OpenCode

Never:

- expose secrets
- print API keys
- commit `.env` files
- store passwords in Markdown
- delete repositories
- execute destructive commands without explicit approval

Always:

- treat every note as potentially committed to Git
- keep secrets out of the vault entirely
- report suspected exposed secrets immediately
- follow the AGENTS.md operating constitution

## Knowledge Rules for OpenCode

### Before starting a task:

1. Search relevant Obsidian notes.
2. Identify related projects.
3. Read applicable SOPs (`[[01-Agency/SOPs/README|01-Agency/SOPs]]`).
4. Check current task status (`[[08-Tasks/README|08-Tasks]]`).
5. Check previous decisions (`[[01-Agency/Strategy/Decision-Log|Decision Log]]`).
6. Then execute.

### After completing a task:

1. Update relevant project notes.
2. Update task status.
3. Record important decisions in the Decision Log.
4. Record implementation details.
5. Add follow-up tasks where necessary.

## Related Files

- `AGENTS.md` — Operating constitution (PRIMARY)
- `SYSTEM-MAP.md` — System architecture overview
- `DASHBOARD.md` — Command center
- `VERSION-CONTROL.md` — Git guidelines
- `.gitignore` — Protected files and directories