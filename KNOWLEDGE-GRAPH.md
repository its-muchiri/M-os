# KNOWLEDGE GRAPH — Muchiri-OS Wikilink Strategy

This document explains how the Muchiri-OS vault uses Obsidian wikilinks to create a meaningful knowledge graph. The graph view visualizes relationships between clients, projects, agents, and knowledge notes.

## Linking Philosophy

- **Every link must represent a meaningful relationship.** No random or auto-generated links.
- **Links should answer: "What does this note have to do with that note?"**
- **Use consistent link patterns** so the graph is predictable and useful.
- **Avoid linking everything to everything** — quality over quantity.

## Link Patterns by Category

### Client Links

**Pattern:** `[[Client Name]]`

**Used in:**
- `02-Clients/Active/Client notes` — each client note links to its name.
- `06-Projects/Active/Project-Template.md` — `client: "[[Client Name]]"` in YAML.
- `08-Tasks/Today/` and `08-Tasks/This-Week/` — tasks link to their client: `client: "[[Client Name]]"`.
- `01-Agency/Templates/Client-Template.md` — client field: `name: Client Name`.
- `03-Marketing/Campaigns/Marketing-Campaign-Template.md` — `client: "[[Client Name]]"`.
- `04-Development/Websites/Website-Project-Template.md` — `client: "[[Client Name]]"`.

**Example:**
```markdown
# Acme Corp Project

Client: [[Acme Corp]]

...
```

**Graph effect:** All notes linking to `[[Acme Corp]]` appear in Obsidian's backlinks and graph. You can see all projects, tasks, and campaigns for Acme Corp at a glance.

### Project Links

**Pattern:** `[[Project Name]]`

**Used in:**
- `06-Projects/Active/Project notes` — each project note links to its name.
- `01-Agency/Templates/Project-Template.md` — `project: "[[Project Name]]"` in YAML.
- `08-Tasks/Today/` and `08-Tasks/This-Week/` — tasks link to their project: `project: "[[Project Name]]"`.
- `02-Clients/Active/Client-Template.md` — current projects section.
- `03-Marketing/Campaigns/Marketing-Campaign-Template.md` — campaigns link to projects.

**Example:**
```markdown
# Website Redesign

Project: [[Website Redesign]]

...
```

**Graph effect:** All notes linking to `[[Website Redesign]]` appear in backlinks/graph. You can see all related tasks, client notes, and deliverables.

### Task Links

**Pattern:** `[[08-Tasks/Today]]`, `[[08-Tasks/This-Week]]`, etc.

**Used in:**
- Notes linking to the task folders for context.
- Project notes referencing where tasks are tracked.

**Example:**
```markdown
- [ ] Finalize homepage [[08-Tasks/Today]]
```

**Graph effect:** Links to the task folders provide context about what tasks are associated with a note.

### Agent Links

**Pattern:** `[[07-AI-Agents/Agent-Registry/README|Agent Name]]` or `[[07-AI-Agents/Research-Agent|Research]]`

**Used in:**
- `01-Agency/Templates/AI-Agent-Template.md` — agent field.
- `07-AI-Agents/Agent-Registry/` — each agent's README.
- `AI-WORKFLOW.md` — references to agents.
- Task assignments and responsibility sections.

**Example:**
```markdown
Assigned agent: [[07-AI-Agents/SEO-Agent|SEO Agent]]
```

**Graph effect:** Links between notes and the Agent Registry create a graph of which agents are responsible for what work.

### Marketing / SEO / Campaign Links

**Pattern:** `[[03-Marketing/SEO]]`, `[[03-Marketing/Campaigns]]`, etc.

**Used in:**
- `01-Agency/Templates/Marketing-Campaign-Template.md` — `channel: Channel`.
- `03-Marketing/SEO/SEO-Project-Template.md` — internal linking plan.
- `03-Marketing/Content/Content-Template.md` — content linking to campaigns.

**Example:**
```markdown
Related campaign: [[03-Marketing/Campaigns/Summer-Sale]]
```

**Graph effect:** The marketing section of the graph shows how campaigns, SEO projects, and content pieces interrelate.

### Knowledge / Research Links

**Pattern:** `[[05-Knowledge/Research]]`, `[[Knowledge Note Title]]`

**Used in:**
- `01-Agency/Templates/Research-Template.md` — `related: [[...]]`.
- `05-Knowledge/Research/Research notes`.
- `05-Knowledge/AI/AI knowledge notes`.

**Example:**
```markdown
Related knowledge: [[05-Knowledge/AI/Large Language Models]]
```

**Graph effect:** The knowledge graph section shows research connections and topical relationships.

### Decision Links

**Pattern:** `[[01-Agency/Strategy/Decision-Log]]`

**Used in:**
- `01-Agency/Templates/Decision-Template.md` — `related: [[Decision Log]]`.
- Project notes and meeting notes linking to decisions.

**Example:**
```markdown
Decision recorded: [[01-Agency/Strategy/Decision-Log]]
```

**Graph effect:** Decisions are cross-referenced across projects, clients, and meetings.

### Template Links

**Pattern:** `[[01-Agency/Templates/Template-Name]]`

**Used in:**
- All template files reference each other.
- New notes created from templates link back to the template library.

**Example:**
```markdown
See the [[01-Agency/Templates/Client-Template]] for the client note structure.
```

**Graph effect:** The template library is a hub node in the graph — all templates link to and from it.

### Resource / Link References

**Pattern:** `[[10-Resources/Links]]`, `[[10-Resources/Tools]]`, etc.

**Used in:**
- `10-Resources/Links/Links` notes.
- `10-Resources/Tools/Tools` notes.
- Knowledge notes citing sources.

**Example:**
```markdown
Source: [[10-Resources/Links/Google Analytics]]
```

**Graph effect:** Resources connect knowledge notes to external tools and references.

## Graph View Best Practices

### What the Graph Shows

When viewing Obsidian's graph view (`View → Graph View`), the Muchiri-OS vault visualizes:

1. **Client hubs** — clients with many linked projects, tasks, and campaigns.
2. **Project nodes** — projects connected to clients, tasks, and decisions.
3. **Marketing webs** — campaigns linking to SEO, content, and competitors.
4. **Knowledge clusters** — research notes grouped by topic.
5. **Decision pathways** — decisions connected to projects and clients.

### Filtering the Graph

Obsidian's graph view includes these filtering options (accessible via the filter icon):

- **Show only live links** — hide orphaned notes (notes with no backlinks/forward links).
- **Hide orphaned nodes** — focus on the connected component of the graph.
- **Node depth** — zoom in (1-3 hops) or out (show the full graph).
- **Tag filter** — show only notes with specific tags (e.g., `#task`, `#client`, `#decision`).

### Avoiding Graph Clutter

To keep the graph useful:

1. **Only link when there's a real relationship.** Don't link every mention of a client name — only link when the client is a meaningful part of the note's content.
2. **Use tags for simple categorization** instead of links when the relationship isn't substantive. For example, tag a note with `#client` rather than linking to the client name if the note is just about that client generally.
3. **Periodic cleanup** — every few weeks, review the graph for orphaned notes and remove or merge as needed.
4. **Use the "live links" filter** regularly to identify and fix broken or meaningless links.

## Link Examples from the Vault

| Link Type | Example | Purpose |
|---|---|---|
| Client | `[[Acme Corp]]` | Shows all projects/tasks/campaigns for this client |
| Project | `[[Website Redesign]]` | Shows all related notes for this project |
| Client Project | `[[Acme Corp]]` + `[[Website Redesign]]` | Shows the relationship between this client and this project |
| SEO Project | `[[SEO Project Name]]` | Shows all SEO work for a client |
| Decision | `[[01-Agency/Strategy/Decision-Log]]` | Shows all decisions related to this work |
| Agent | `[[07-AI-Agents/SEO-Agent|SEO Agent]]` | Shows the agent responsible for SEO work |
| Template | `[[01-Agency/Templates/Client-Template]]` | Shows the template for creating client notes |
| Campaign | `[[03-Marketing/Campaigns/Summer Sale]]` | Shows all marketing activity for a campaign |
| Knowledge | `[[05-Knowledge/AI/Large Language Models]]` | Shows research on this AI topic |
| Resource | `[[10-Resources/Links/Google Analytics]]` | Shows the tool/resource referenced |

## Related

- [[DASHBOARD|Dashboard]]
- [[SYSTEM-MAP|System Map]]
- [[AGENTS|Operating Constitution]]
- [[OBSIDIAN-PLUGINS|Obsidian Plugins]]
- [[01-Agency/Templates|Template Library]]
- [[02-Clients|Client Notes]]
- [[06-Projects|Project Notes]]
- [[03-Marketing|Marketing Notes]]
- [[05-Knowledge|Knowledge Notes]]
- [[08-Tasks|Task Notes]]