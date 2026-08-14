---
type: template
category: client-management
name: Deliverable Tracker
version: 1.0
created: 2026-08-14
---

# Deliverable Tracker Template

## Project
**Project:** [[06-Projects/Active/Project-Name|Project Name]]
**Client:** [[02-Clients/Active/Client-Name|Client Name]]
**Sprint:** [Number]
**Updated:** YYYY-MM-DD

---

## Deliverable Register

| ID | Deliverable | Owner | Type | Due Date | Status | % Done | Dependencies | Acceptance Criteria | Client Feedback | Final Location |
|----|-------------|-------|------|----------|--------|--------|--------------|---------------------|-----------------|----------------|
| D-001 | [Name] | @agent | Code/Doc/Design/Config | YYYY-MM-DD | ☐ Not Started / 🔄 In Progress / 👀 Review / ✅ Approved / 🚫 Blocked | 0% | [Dep IDs] | [Criteria] | [Link/Notes] | [Path/URL] |
| D-002 | | | | | | | | | | |
| D-003 | | | | | | | | | | |

---

## Status Definitions

| Status | Meaning | Next Action |
|--------|---------|-------------|
| **Not Started** | Work not yet begun | Assign owner, clarify requirements |
| **In Progress** | Actively being worked | Daily updates in standup |
| **Review** | Submitted for client/team review | Schedule review, gather feedback |
| **Approved** | Client/lead accepted | Move to Done, deploy if applicable |
| **Blocked** | Cannot proceed | Escalate per escalation path |
| **Done** | Complete, deployed, documented | Archive, update metrics |

---

## Milestone Mapping

| Milestone | Target Date | Required Deliverables | Status |
|-----------|-------------|----------------------|--------|
| M1: [Name] | YYYY-MM-DD | D-001, D-002, D-003 | 🟢/🟡/🔴 |
| M2: [Name] | YYYY-MM-DD | D-004, D-005 | |

---

## Client Review Schedule

| Deliverable | Review Type | Scheduled | Attendees | Outcome |
|-------------|-------------|-----------|-----------|---------|
| D-001 | Async / Sync / Demo | YYYY-MM-DD | [Names] | Pending / Approved / Changes Requested |

---

## Change Requests

| CR ID | Deliverable | Change Description | Impact (Scope/Time/Cost) | Status | Decision Date |
|-------|-------------|-------------------|--------------------------|--------|---------------|
| CR-001 | D-002 | [Description] | +2 days / $X | Pending / Approved / Rejected | YYYY-MM-DD |

---

## Usage

1. Create one per project at `06-Projects/Active/Project-Name/deliverables.md`
2. Update daily during standup
3. Review weekly in client sync
4. Link each deliverable ID in tasks.md
5. Archive approved deliverables to `06-Projects/Completed/`