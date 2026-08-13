# AI WORKFLOW — Interacting with OpenCode

This document documents how the user should interact with OpenCode Muchiri-OS. OpenCode is the primary autonomous development and execution agent. Treat `AGENTS.md` as the operating constitution before every interaction.

## Core Principle

**Always read `AGENTS.md` first.** It contains the operating constitution, security rules, knowledge rules, and navigation guide. Never interact with OpenCode without first understanding these guidelines.

## Example Interactions

The following are valid ways to interact with OpenCode. Each example shows the user prompt and what OpenCode should do.

### 1. "Read the client requirements in Obsidian and create an implementation plan."

**What OpenCode does:**
1. Reads `AGENTS.md` (operating constitution).
2. Opens the relevant client note in `02-Clients/Active/` or `02-Clients/Leads/`.
3. Reads the client's requirements and current projects.
4. Reads related project notes in `06-Projects/Active/`.
5. Reads applicable SOPs from `01-Agency/SOPs/`.
6. Creates an implementation plan as a new note or updated project documentation.
7. Records any decisions in `01-Agency/Strategy/Decision-Log`.
8. Updates task status in `08-Tasks/`.

**Expected output:** A new note or updated documentation with implementation plan, linked to the client and project.

### 2. "Review the current website project and identify outstanding tasks."

**What OpenCode does:**
1. Reads `AGENTS.md`.
2. Opens `06-Projects/Active/` to list active projects.
3. Reads the relevant project's README.md, tasks.md, and status.md.
4. Identifies outstanding tasks from the tasks list.
5. Checks `08-Tasks/Today/` and `08-Tasks/This-Week/` for related tasks.
6. Reports back the outstanding tasks with their current status and any blockers.

**Expected output:** A list of outstanding tasks, their status (pending/in progress/blocked), and any relevant context from the project notes.

### 3. "Read the SEO research notes and create a content brief."

**What OpenCode does:**
1. Reads `AGENTS.md`.
2. Opens `03-Marketing/SEO/` to find SEO research notes.
3. Reads the SEO project note with YAML frontmatter and keyword research.
4. Reads related content notes in `03-Marketing/Content/`.
5. Creates a content brief following the [[01-Agency/Templates/Marketing-Campaign-Template|Marketing Campaign Template]] or a new content brief template.
6. Links the content brief to the SEO project and relevant client.

**Expected output:** A content brief note with SEO keywords, target audience, outline, and links to the source SEO research.

### 4. "Review this project and update its status note."

**What OpenCode does:**
1. Reads `AGENTS.md`.
2. Takes a project name or identifier from the user.
3. Opens the project folder in `06-Projects/Active/` (or Planned/Completed).
4. Reads the project's README.md, status.md, and tasks.md.
5. Updates the `updated` YAML field to today's date.
6. Adds any new notes, decisions, or deliverables.
7. Reports the updated project status.

**Expected output:** Confirmation that the project status note has been updated, with a summary of changes.

### 5. "Search the knowledge base for everything related to this client."

**What OpenCode does:**
1. Reads `AGENTS.md`.
2. Takes a client name from the user.
3. Searches the vault for all notes linking to that client via wiki links `[[Client Name]]`.
4. Searches in these folders specifically:
   - `02-Clients/Active/` or `02-Clients/Leads/`
   - `06-Projects/Active/` (projects linked to this client)
   - `03-Marketing/` (campaigns, SEO, content linked to this client)
   - `05-Knowledge/` (knowledge notes with client references)
   - `01-Agency/Strategy/Decision-Log` (decisions related to this client)
5. Reports all found notes and their relationships.

**Expected output:** A comprehensive list of all vault notes related to the client, with links and a summary of the client's relationship to the Muchiri-OS system.

### 6. "Implement the next task in the project."

**What OpenCode does:**
1. Reads `AGENTS.md` (operating constitution).
2. Takes a project name or identifier from the user.
3. Opens the project's tasks in `06-Projects/<project>/tasks.md` or checks `08-Tasks/Today/`/`08-Tasks/This-Week/`.
4. Identifies the next task (highest priority, not started, not blocked).
5. Determines the appropriate agent type (Research, SEO, Content, Developer, Marketing, Project Manager, or Automation).
6. Executes the task using the appropriate agent's responsibilities.
7. Creates deliverables in the appropriate folder (e.g., `03-Marketing/Content/`, `04-Development/Websites/`, `05-Knowledge/Research/`).
8. Updates task status to in-progress or complete.
9. Records any decisions in `01-Agency/Strategy/Decision-Log`.
10. Updates project documentation as needed.

**Expected output:** The task completed, deliverables created, task status updated, and project documentation refreshed.

### 7. "Review your changes and document what was done."

**What OpenCode does:**
1. Reads `AGENTS.md`.
2. Reviews the git diff to see what files were changed: `git diff --staged`.
3. For each changed file, determines what was modified and why.
4. Updates the relevant vault notes to reflect the changes (status, notes, YAML fields).
5. Records any new decisions in `01-Agency/Strategy/Decision-Log`.
6. Provides a summary to the user of what was changed and why.

**Expected output:** A summary of all changes made, with links to the affected notes and any decisions recorded.

## Interaction Guidelines

### Before Every Interaction

1. **Read `AGENTS.md`** — the operating constitution. Understand the security rules, knowledge rules, and navigation guide.
2. **Identify the task domain** — is this about clients, projects, marketing, development, research, tasks, or something else?
3. **Determine the appropriate agent** — consult the Agent Registry in `07-AI-Agents/Agent-Registry/` if a specialized agent is needed.
4. **Check vault context** — read the relevant notes from the Obsidian vault. Never act in a vacuum.

### During the Interaction

1. **Read before writing** — always read existing notes before modifying them. Never overwrite blindly.
2. **Use templates** — when creating new notes, use the appropriate template from `01-Agency/Templates/`.
3. **Link with wiki links** — use `[[wiki links]]` to create meaningful relationships between notes.
4. **Update YAML frontmatter** — set `updated: YYYY-MM-DD` when changing any note.
5. **Record decisions** — if a major decision is made, add an entry to `01-Agency/Strategy/Decision-Log`.

### After the Interaction

1. **Review changes** — verify that the vault notes reflect the intended changes.
2. **Update task status** — move completed tasks to `08-Tasks/Completed/`; update progress in daily/weekly task lists.
3. **Record implementation details** — add notes about what was done, how, and why.
4. **Add follow-up tasks** — if the work uncovered new tasks or issues, create them in the task system.
5. **Report to user** — provide a summary of what was completed, what was changed, and what (if anything) needs human follow-up.

### If Something Goes Wrong

1. **Stop and review** — if the result is unexpected, stop and review what happened.
2. **Check git diff** — `git diff --staged` to see exactly what was changed.
3. **Restore if needed** — `git restore .` to restore the vault to the last commit state.
4. **Learn and adjust** — adjust the approach based on what went wrong, and update AGENTS.md or SOPs if needed.

## Forbidden Interactions

OpenCode must NOT:

- Act without first reading `AGENTS.md`.
- Invent client or project information — always read from the vault.
- Commit `.env` files or expose secrets.
- Store API keys or passwords in Markdown notes.
- Delete or significantly modify notes without reading them first.
- Force-push Git history or make destructive changes without explicit approval.
- Act without checking the vault context first.

## Related

- `AGENTS.md` — Operating constitution (REQUIRED reading before any interaction)
- `SYSTEM-MAP.md` — System architecture overview
- `DASHBOARD.md` — Command center
- `VERSION-CONTROL.md` — Git guidelines
- `01-Agency/Strategy/Decision-Log` — Decision records
- `07-AI-Agents/Agent-Registry/` — Agent definitions
- `01-Agency/Templates/` — Note templates