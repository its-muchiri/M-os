# WORKFLOW — Muchiri-OS Daily Workflow

This document documents the normal daily workflow for the Muchiri-OS operating system. Follow this workflow each day for consistent operation.

## Morning

### 1. Open Obsidian
- Open the Muchiri-OS vault (`M-os/`) in Obsidian.
- Ensure the vault is synced and up to date.

### 2. Review dashboard
- Open `DASHBOARD.md`.
- Review today's priorities.
- Check active projects and clients.
- Note any urgent items.

### 3. Review today's tasks
- Open `08-Tasks/Today`.
- Review the checkbox tasks for today.
- Move any unfinished tasks from yesterday to today's list.

### 4. Review active projects
- Open `06-Projects/Active`.
- Review project status notes.
- Identify which project to focus on today.

### 5. Identify priorities
- Based on the dashboard, tasks, and projects, determine 1-3 main priorities for today.
- Write these priorities at the top of `DASHBOARD.md` or in your daily note.

## During Work

### 1. Capture ideas in Inbox
- Drop any idea, note, task, link, or raw thought into `00-Inbox/` immediately.
- Use the [[00-Inbox/README|Inbox template]] format if desired.
- Do not leave notes in Inbox forever — process them regularly.

### 2. Create tasks
- If a task arises from an idea, a meeting, or a project, create it in `08-Tasks/Today/` or `08-Tasks/This-Week/`.
- Use the task format: `- [ ] Task description [[link-to-project]] #tag`.
- Link the task to the relevant project, client, or agent.

### 3. Update project notes
- As work progresses on a project, update the project's status note.
- Update the `updated` YAML field to today's date.
- Add new notes, decisions, or deliverables as needed.

### 4. Ask OpenCode to execute technical tasks
- If a task requires code, file operations, or automation, invoke OpenCode.
- Always read `AGENTS.md` first — it is the operating constitution.
- Read relevant notes from the vault before giving OpenCode a task.
- Example prompt: "Read the client requirements in Obsidian and create an implementation plan."

### 5. Review changes
- After OpenCode completes a task, review the changes.
- Accept or reject changes as needed.
- Update project notes, task status, or other vault files as required.

## End of Day

### 1. Update completed tasks
- Move completed tasks from `08-Tasks/Today/` to `08-Tasks/Completed/`.
- Check off tasks in the daily note.
- Ensure all completed tasks have a checkbox `[x]`.

### 2. Record decisions
- If any significant decisions were made today, add an entry to `01-Agency/Strategy/Decision-Log`.
- Use the standard format:
  ```
  ## YYYY-MM-DD — Decision title

  - **Decision:** What was decided
  - **Context:** Why it was needed
  - **Options:** What was considered
  - **Chosen option:** What was selected
  - **Reason:** Why
  - **Consequences:** Expected outcomes
  - **Related project:** Link if applicable
  ```

### 3. Update project status
- Update the project status note with today's progress.
- Set the `updated` YAML field to today's date.
- Move tasks to `08-Tasks/Completed/` as appropriate.

### 4. Process Inbox
- Review all items in `00-Inbox/`:
  - Assign each item to its proper home (task, project note, client note, etc.).
  - Delete items that are no longer relevant.
  - Move actionable items to tasks, notes, or other appropriate locations.

### 5. Create tomorrow's priorities
- Open `DASHBOARD.md` and update the "Today's Priorities" section.
- Move any unfinished priorities to tomorrow's list.
- Set 1-3 main priorities for the next day.

---

## Weekly Review (Every Friday or end of week)

### Accomplished
- Review what was completed during the week.
- Check off tasks in `08-Tasks/This-Week/` and move completed ones to `08-Tasks/Completed/`.

### Challenges
- Identify what didn't go as planned.
- Note blockers and challenges.

### Learning
- What was learned during the week?
- What would do differently next week?

### Next Week Priorities
- Set 3-5 priorities for the upcoming week.
- Write these in `DASHBOARD.md` and `08-Tasks/This-Week/`.

### Related
- [[08-Tasks/This-Week|This-Week Tasks]]
- [[01-Agency/Strategy/Decision-Log|Decision Log]]
- [[DASHBOARD|Dashboard]]