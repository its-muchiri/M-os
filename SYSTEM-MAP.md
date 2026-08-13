# SYSTEM-MAP — How Muchiri-OS Works

This document explains how every component of Muchiri-OS interacts.

## Overview

```
USER
  ↓
OBSIDIAN
  ↓
KNOWLEDGE / TASKS / CLIENT DATA
  ↓
OPENCODE
  ↓
SPECIALIZED AI AGENTS
  ↓
TOOLS / CODE / AUTOMATION
  ↓
PROJECTS
  ↓
UPDATED KNOWLEDGE
```

## Component Responsibilities

### Obsidian — Human Interface Layer

- Opens this folder (`M-os/`) as a vault.
- Renders Markdown notes, wikilinks, tags, and the graph view.
- The human brain of the system: where you read, write, and review.
- No database. Every note is a plain `.md` file that Git can track.

**Entry point:** [[DASHBOARD]]

### Knowledge / Tasks / Client Data — Structured Layer

- All long-term memory lives in Markdown with YAML frontmatter.
- Folders keep things organized by domain:
  - [[02-Clients/README|Clients]]
  - [[03-Marketing/README|Marketing]]
  - [[04-Development/README|Development]]
  - [[05-Knowledge/README|Knowledge]]
  - [[06-Projects/README|Projects]]
  - [[08-Tasks/README|Tasks]]
- Wiki links create a knowledge graph.

### OpenCode — Execution Agent

- The primary autonomous development and execution agent.
- Reads `AGENTS.md` as its operating constitution.
- Reads notes from the vault, executes tasks (code, files, commands), and writes results back.
- Treats the vault as a structured knowledge filesystem.

### Specialized AI Agents

Seven agents, each with a defined role. See [[07-AI-Agents/Agent-Registry/README|Agent Registry]].

| Agent | Owns |
|---|---|
| Research | Discovery and knowledge notes |
| SEO | Keyword research, audits, briefs |
| Content | Blog, social, website copy |
| Developer | Websites, apps, APIs, code |
| Marketing | Campaigns, positioning, personas |
| Project Manager | Planning, tasks, priorities, status |
| Automation | Scripts, workflows, integrations |

### Tools / Code / Automation — Execution Layer

- Git: version control for the vault and for code.
- Node.js, Python, npm, pip: run scripts and tooling.
- Code repositories live **outside** the vault (see [[SECURITY]] and [[04-Development/README|Development]]).

### Projects — Outcomes

- Each project has a folder with README, requirements, tasks, decisions, status, documentation.
- See [[06-Projects/Templates/Project-Template|Project Template]].

### Updated Knowledge — Learning Loop

- Every completed task updates the relevant notes.
- Every decision is recorded in [[01-Agency/Strategy/Decision-Log|Decision Log]].
- Knowledge compounds: the vault gets smarter with use.

## Information Flow (Read → Act → Write)

1. **User** captures an idea in [[00-Inbox/README|Inbox]] or creates a task.
2. **OpenCode** reads relevant notes, SOPs, and previous decisions before acting.
3. **Specialized agent** handles its domain (research, SEO, content, code, marketing, planning, automation).
4. **Tools** execute: files created, code run, sites deployed, tasks completed.
5. **Results** are written back: notes updated, statuses changed, decisions logged.
6. **User** reviews the changes in Obsidian and in Git.

## How Agents Read/Write Files

### Reading

- Agents search the vault for related notes first (never act in a vacuum).
- Agents read SOPs and previous decisions before starting work.
- Agents check the current task list and project status.

### Writing

- Agents create notes in the correct folder (see the folder READMEs).
- Agents use the correct template for each note type.
- Agents update YAML frontmatter (`updated`, `status`) when changing notes.
- Agents record decisions in the Decision Log.
- Agents move completed tasks to [[08-Tasks/Completed/README|Completed]].

## Human Approval

- **Irreversible actions require human approval:** deleting files, force-pushing Git, removing clients, changing security settings.
- **High-impact actions require review:** deploying to production, committing sensitive data, starting large refactors.
- **Routine actions are automated:** creating notes, updating statuses, running scripts, completing tasks.

## How Mistakes Are Prevented

1. **Inspect before modifying** — agents always read before writing.
2. **Small incremental changes** — never large blind rewrites.
3. **Git history** — every change is trackable and reversible.
4. **No fabrication** — agents never invent client or project data.
5. **Security rules** — secrets never enter notes or commits (see [[SECURITY]]).
6. **Templates** — consistent structure prevents malformed notes.
7. **SOPs** — recurring work follows documented procedures.

## Related

- [[AGENTS]]
- [[WORKFLOW]]
- [[AI-WORKFLOW]]
- [[DASHBOARD]]
