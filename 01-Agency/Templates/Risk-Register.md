---
type: template
category: client-management
name: Risk Register
version: 1.0
created: 2026-08-14
---

# Risk Register Template

## Project
**Project:** [[06-Projects/Active/Project-Name|Project Name]]
**Client:** [[02-Clients/Active/Client-Name|Client Name]]
**Last Updated:** YYYY-MM-DD
**Owner:** [PM Name]

---

## Risk Matrix

| Likelihood \ Impact | **Low** | **Medium** | **High** | **Critical** |
|---------------------|---------|------------|----------|--------------|
| **Very High** | Medium | High | Critical | Critical |
| **High** | Low | Medium | High | Critical |
| **Medium** | Low | Medium | High | High |
| **Low** | Low | Low | Medium | High |

---

## Risk Register

| ID | Risk Description | Category | Likelihood | Impact | Score | Mitigation Strategy | Contingency Plan | Owner | Status | Review Date |
|----|------------------|----------|------------|--------|-------|---------------------|------------------|-------|--------|-------------|
| R-001 | [Description] | Technical / Schedule / Budget / Scope / Resource / Client / External | Very High / High / Medium / Low | Critical / High / Medium / Low | [Auto] | [Proactive steps] | [If risk materializes] | @agent | 🟢 Active / 🟡 Monitoring / 🔴 Escalated / ✅ Closed | YYYY-MM-DD |
| R-002 | | | | | | | | | | |
| R-003 | | | | | | | | | | |

---

## Risk Categories

| Category | Examples |
|----------|----------|
| **Technical** | Architecture decisions, performance, integrations, debt |
| **Schedule** | Delays, dependencies, estimation errors, capacity |
| **Budget** | Scope creep, third-party costs, rework |
| **Scope** | Requirement changes, gold-plating, unclear acceptance |
| **Resource** | Availability, skill gaps, burnout, turnover |
| **Client** | Feedback delays, decision latency, stakeholder alignment |
| **External** | Vendor issues, API changes, compliance, force majeure |

---

## Escalation Thresholds

| Risk Score | Action |
|------------|--------|
| **Low (1-3)** | Monitor in weekly sync |
| **Medium (4-6)** | Add to sprint risk review, owner weekly update |
| **High (8-9)** | Daily standup visibility, PM escalates to Account Manager |
| **Critical (12+)** | Immediate escalation to Leadership, client notified |

---

## Closed Risks (Lessons Learned)

| ID | Original Risk | Resolution | Lesson Learned | Date Closed |
|----|---------------|------------|----------------|-------------|
| R-XXX | [Description] | [How resolved] | [Takeaway for future] | YYYY-MM-DD |

---

## Review Cadence

| Review | Frequency | Participants | Output |
|--------|-----------|--------------|--------|
| **Standup Risk Scan** | Daily | Team | Quick status: any new/changed? |
| **Sprint Risk Review** | Bi-weekly | PM + Leads | Update scores, add/remove risks |
| **Client Risk Review** | Monthly | PM + Client | Transparency on high/critical risks |
| **Quarterly Risk Workshop** | Quarterly | All Stakeholders | Deep dive, strategy adjustment |

---

## Usage

1. Create at `06-Projects/Active/Project-Name/risk-register.md`
2. Initialize during project kickoff
3. Update in every sprint review
4. High/Critical risks → immediate Slack/email to stakeholders
5. Link from project README.md and decisions.md