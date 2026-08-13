# OBSIDIAN PLUGINS — Muchiri-OS Plugin Guide

This document recommends Obsidian community plugins for the Muchiri-OS vault. **No plugins are installed or configured** by default. The vault remains fully functional using Core Obsidian functionality only.

## Core Obsidian Functionality (No Plugin Required)

The Muchiri-OS vault is designed to work without any community plugins. All features are available using Core Obsidian:

- Markdown rendering with YAML frontmatter
- Wiki links `[[wiki links]]` and backlinks
- Graph view (core feature)
- File explorer and folder hierarchy
- Search across all notes
- Tagging and frontmatter filtering
- Templates (core templating)
- Checklists with checkboxes
- Daily notes (core feature)
- Weekly and monthly notes

**The vault is usable and fully functional without any community plugins.**

---

## Recommended Optional Plugins

### 1. Dataview

| Field | Value |
|---|---|
| **Purpose** | A query language for reading and querying YAML frontmatter and markdown content within Obsidian. |
| **Benefit** | - Create dynamic tables of clients, projects, tasks, or agents<br>- Query notes by status, type, tags, or custom fields<br>- Generate automatic charts and lists from vault data<br>- Filter and sort knowledge base content without leaving Obsidian |
| **Risks** | - Adds a query language to learn<br>- Over-reliance may reduce manual note organization<br>- Queries can become complex and hard to maintain |
| **Required** | No — optional |
| **Optional** | Yes |

**Example use in Muchiri-OS:**
```dataview
table file.link, file.etag, client from "02-Clients/Active"
where contains(client, "Muchiri")
sort client asc
```

### 2. Tasks

| Field | Value |
|---|---|
| **Purpose** | Enhanced task management within Obsidian, building on the core checklist functionality. |
| **Benefit** | - Advanced task filtering and views (by tag, folder, status, due date)<br>- Recurring tasks support<br>- Task dependencies and relationships<br>- Integration with daily and weekly reviews<br>- Kanban board view |
| **Risks** | - May duplicate the existing Muchiri-OS task system in `08-Tasks/`<br>- Adds complexity if the Muchiri-OS Markdown task format is already used<br>- Potential conflict with custom task templates in the vault |
| **Required** | No — optional |
| **Optional** | Yes |

**Muchiri-OS note:** The vault already has a complete task management system in `08-Tasks/` with Markdown checkboxes, project/client linking, and daily/weekly backlog structure. The core Obsidian checklist functionality is sufficient. The Tasks plugin could enhance this but may duplicate existing work.

### 3. Templater

| Field | Value |
|---|---|
| **Purpose** | Automates the creation of notes from templates, inserting dates, tags, and other dynamic content. |
| **Benefit** | - One-click template insertion for client notes, project notes, meeting notes, etc.<br>- Automatic date/tags insertion per template type<br>- Reduced manual frontmatter typing<br>- Consistent note structure across the vault |
| **Risks** | - May conflict with the Muchiri-OS template system in `01-Agency/Templates/`<br>- Over-automation may reduce mindfulness in note creation<br>- Template syntax to learn |
| **Required** | No — optional |
| **Optional** | Yes |

**Muchiri-OS note:** Muchiri-OS already provides 15+ templates in `01-Agency/Templates/` with complete YAML frontmatter. Users can manually apply templates when creating new notes. The Templater plugin could speed up template insertion but is not required since the vault is designed for manual template application.

### 4. QuickAdd

| Field | Value |
|---|---|
| **Purpose** | Quickly add content to notes, insert templates, and capture ideas via command palette or hotkeys. |
| **Benefit** | - Fast capture of ideas into `00-Inbox/`<br>- Quick template insertion with hotkeys<br>- Custom commands for repetitive note additions<br>- Integration with daily/weekly reviews |
| **Risks** | - May encourage rushed note-taking without proper template application<br>- Additional keybindings to learn<br>- May conflict with the Muchiri-OS inbox processing workflow |
| **Required** | No — optional |
| **Optional** | Yes |

**Muchiri-OS note:** The `00-Inbox/` capture system is designed for manual processing. QuickAdd could fast-track inbox capture but the core workflow of "review inbox daily and process each item" remains the recommended approach.

### 5. Git (community plugin)

| Field | Value |
|---|---|
| **Purpose** | In-vault Git integration: commit, push, pull, and status within Obsidian. |
| **Benefit** | - View Git status and diff inside Obsidian<br>- Commit notes without leaving the vault<br>- Quick access to version history |
| **Risks** | - May encourage committing too frequently without proper review<br>- Could expose vault structure in ways not intended<br>- Adds a Git interface inside the knowledge base (vault as both source and UI) |
| **Required** | No — optional |
| **Optional** | Yes |

**Muchiri-OS note:** The vault has its own `VERSION-CONTROL.md` guidelines and Git is managed externally (via PowerShell/terminal). A Git plugin inside Obsidian could create confusion between the vault-as-knowledge-base and the vault-as-Git-repository. **Not recommended** for the Muchiri-OS workflow.

---

## Plugin Installation Guidelines

### When to Consider a Plugin

1. **Clear benefit** — the plugin solves a specific problem that core Obsidian cannot.
2. **Non-duplicative** — the plugin doesn't overlap with existing Muchiri-OS systems.
3. **Low risk** — minimal chance of breaking vault structure or knowledge.
4. **Human approval** — a human decides to install, not an autonomous agent.

### When NOT to Install a Plugin

1. **The vault already handles the function** — Muchiri-OS has templates, task systems, decision logs, and knowledge graphs built in.
2. **Learning overhead** — the plugin requires significant time to learn and configure.
3. **Risk of data loss** — the plugin could interfere with the Git repository or Markdown structure.
4. **Plugin is abandoned** — no longer maintained or updated.

### Installation Process (when approved)

1. Read the plugin documentation and reviews.
2. Install one plugin at a time — never install multiple plugins simultaneously.
3. Test the plugin with a small subset of notes before full integration.
4. Configure minimally — avoid default "install all features."
5. Reassess after one week — uninstall if the plugin doesn't add clear value.
6. Keep a backup of the vault before and after installation.

### Uninstalling Plugins

1. Disable the plugin in Obsidian settings.
2. Check the vault for any broken links, missing content, or changed behavior.
3. If issues arise, uninstall and restore from backup.
4. Reassess whether the plugin's function can be replicated manually or with a different plugin.

---

## Plugin-Free Workflow (Recommended)

The Muchiri-OS vault is designed to operate without community plugins. The recommended daily workflow uses only Core Obsidian features:

### Morning (no plugins needed)

1. Open Obsidian and vault.
2. Review `DASHBOARD.md`.
3. Review today's tasks in `08-Tasks/Today`.
4. Review active projects in `06-Projects/Active`.
5. Identify priorities.

### During work (no plugins needed)

1. Capture ideas in `00-Inbox/`.
2. Create tasks in `08-Tasks/Today/` or `08-Tasks/This-Week/`.
3. Update project notes in `06-Projects/Active/`.
4. Ask OpenCode to execute technical tasks (read AGENTS.md first).
5. Review changes.

### End of day (no plugins needed)

1. Update completed tasks to `08-Tasks/Completed`.
2. Record decisions in `01-Agency/Strategy/Decision-Log`.
3. Update project status in `06-Projects/Active/`.
4. Process `00-Inbox/`.
5. Set tomorrow's priorities in `DASHBOARD.md`.

---

## Future Plugin Considerations

Plugins may be reconsidered in the future if:

- The vault grows to hundreds of notes and dynamic querying becomes necessary (Dataview).
- The task management system needs enhancement beyond Markdown checkboxes (Tasks).
- Template insertion needs automation for high-volume note creation (Templater).
- There is a clear, non-duplicative need identified through actual vault usage.

**No plugins should be installed blindly or prematurely.** The vault's priority is remaining functional, local-first, and plugin-free.

## Related

- [[VERSION-CONTROL|Version Control]]
- [[AGENTS|Operating Constitution]]
- [[DASHBOARD|Dashboard]]
- [[SYSTEM-MAP|System Map]]