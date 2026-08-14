---
type: client-management-plan
client: "[[02-Clients/Active/artdid.co|artdid.co]]"
created: 2026-08-14
updated: 2026-08-14
status: active
version: 1.0
---

# artdid.co — Client Management Plan

## Executive Summary

**Client:** artdid.co (Art Gallery / Artist Collective)
**Primary Contact:** TBD (awaiting intro call)
**Account Manager:** Muchiri
**Engagement Start:** 2026-08-14
**Current Phase:** Website & Gallery Platform Build (4 weeks)
**Contract Value:** TBD
**Billing Model:** Fixed-price project + monthly retainer (post-launch)

---

## 1. Client Onboarding Checklist

### Pre-Kickoff (Week 0)
- [ ] Signed MSA/Statement of Work
- [ ] Initial deposit received (50%)
- [ ] Access to brand assets (logo, colors, fonts, photography)
- [ ] Access to existing digital assets (domain, hosting, analytics)
- [ ] Stakeholder map identified
- [ ] Communication preferences confirmed
- [ ] Project management tool access (Obsidian vault, GitHub, Vercel)
- [ ] Sanity CMS project created
- [ ] Stripe account connected

### Kickoff Meeting (Week 1, Day 1)
- [ ] Project scope & timeline review
- [ ] Success metrics defined
- [ ] Risk register created
- [ ] Communication cadence agreed
- [ ] Immediate blockers identified

### First 30 Days
- [ ] Website MVP deployed to staging
- [ ] Sanity Studio configured with artist/artwork schemas
- [ ] First 3 artists onboarded in CMS
- [ ] Stripe test transactions working
- [ ] Client trained on Sanity Studio

---

## 2. Communication Protocol

### Regular Cadence

| Meeting | Frequency | Duration | Attendees | Purpose |
|---------|-----------|----------|-----------|---------|
| **Standup** | 2x/week (Tue/Thu) | 15 min | PM, Dev | Progress, blockers, next 24h |
| **Weekly Sync** | Weekly (Mon) | 30 min | PM, Client, Dev (as needed) | Milestone review, decisions, scope |
| **Sprint Review** | Bi-weekly | 45 min | All stakeholders | Demo, feedback, retrospective |
| **Monthly Business Review** | Monthly | 60 min | Account Manager, Client leadership | Strategic review, pipeline, relationship |

### Communication Channels

| Channel | Use Case | Response SLA |
|---------|----------|--------------|
| **Obsidian Tasks/Notes** | Task tracking, decisions, documentation | Async (within 4h business hours) |
| **Email** | Formal approvals, contracts, invoices | 24h |
| **Slack/Discord** (if set up) | Quick questions, urgent blockers | 2h business hours |
| **Video Call** | Complex decisions, reviews, relationship | Scheduled |

### Decision Rights

| Decision Type | Authority | Process |
|---------------|-----------|---------|
| Scope changes (< 2 days) | PM | Async approval via task |
| Scope changes (> 2 days) | Client + PM | Written change request |
| Technical architecture | Dev Lead | Documented in decisions.md |
| Design/UX | Client + PM | Figma/prototype review |
| Budget adjustments | Account Manager + Client | Formal amendment |

---

## 3. Project Governance

### Current Project: Website & Gallery Platform (Aug 14 – Sep 14)

#### Sprint Structure (1-week sprints)
| Sprint | Dates | Focus | Deliverable |
|--------|-------|-------|-------------|
| Sprint 1 | Aug 14–20 | Research, Foundation, CMS Setup | Sanity schemas, Next.js scaffold, design system |
| Sprint 2 | Aug 21–27 | Core Features (Artists, Artworks, Exhibitions) | Working directory, gallery, exhibition pages |
| Sprint 3 | Aug 28–Sep 3 | E-Commerce, Content | Cart, checkout, Stripe, certificates, content population |
| Sprint 4 | Sep 4–10 | Polish, Testing, Launch Prep | Lighthouse >90, cross-browser, SEO, staging |
| Sprint 5 | Sep 11–14 | Launch, Handoff | Production deploy, client training, docs |

#### Milestone Gates

| Milestone | Date | Criteria | Go/No-Go |
|-----------|------|----------|----------|
| **M1: Foundation Complete** | Aug 20 | Sanity schemas approved, Next.js scaffold running, design system approved | Client sign-off on schemas |
| **M2: Core Features Working** | Aug 27 | Artists/Artworks/Exhibitions browsable on staging | Internal QA pass |
| **M3: E-Commerce Functional** | Sep 3 | Test purchase flow works, certificates generate | Stripe test mode verified |
| **M4: Launch Ready** | Sep 10 | Lighthouse >90, all content populated, staging = production | Client UAT sign-off |
| **M5: Live** | Sep 14 | DNS switched, monitoring active, client trained | Go-live confirmation |

---

## 4. Deliverable Tracking

### Tracking Template (per deliverable)

```
### [Deliverable Name]
- **Owner:** @agent-name
- **Due:** YYYY-MM-DD
- **Status:** Not Started / In Progress / Review / Approved / Blocked
- **Dependencies:** [List]
- **Acceptance Criteria:** [Bullet points]
- **Client Feedback:** [Link to notes]
- **Final Location:** [File path or URL]
```

### Current Deliverables (from tasks.md)

| # | Deliverable | Owner | Due | Status |
|---|-------------|-------|-----|--------|
| 1 | Competitor analysis (5 sites) | Research Agent | Aug 18 | Not Started |
| 2 | Sanity schema design | Research + Dev | Aug 18 | Not Started |
| 3 | SEO keyword brief | SEO Agent | Aug 18 | Not Started |
| 4 | Content templates | Content Agent | Aug 19 | Not Started |
| 5 | Next.js + Sanity scaffold | Dev Agent | Aug 20 | Not Started |
| 6 | Design system (colors, type, components) | Dev Agent | Aug 20 | Not Started |
| 7 | Artist directory page | Dev Agent | Aug 24 | Not Started |
| 8 | Artwork gallery with filters | Dev Agent | Aug 24 | Not Started |
| 9 | Artwork detail + zoom | Dev Agent | Aug 25 | Not Started |
| 10 | Exhibition pages | Dev Agent | Aug 25 | Not Started |
| 11 | Stripe integration + cart | Dev Agent | Aug 28 | Not Started |
| 12 | Certificate generation | Automation Agent | Aug 29 | Not Started |
| 13 | Sanity content population | Content Agent | Sep 3 | Not Started |
| 14 | SEO implementation | SEO Agent | Sep 5 | Not Started |
| 15 | Lighthouse audit & fixes | Dev Agent | Sep 8 | Not Started |
| 16 | Production deploy | Automation Agent | Sep 12 | Not Started |
| 17 | Client training session | PM + Dev | Sep 13 | Not Started |

---

## 5. Risk Register

| Risk ID | Risk | Likelihood | Impact | Mitigation | Owner | Status |
|---------|------|------------|--------|------------|-------|--------|
| R1 | Artwork metadata complexity exceeds schema | High | Medium | Flexible Sanity schema; iterate in Sprint 1 | Dev | Active |
| R2 | High-res image performance issues | High | High | Sanity CDN + Next.js Image + blur placeholders | Dev + Auto | Active |
| R3 | Stripe art marketplace complexity | Medium | High | Start simple (buy now), phase bidding later | Dev | Active |
| R4 | Client content delays | Medium | Medium | Content templates ready by Aug 19; weekly nudges | PM | Active |
| R5 | Scope creep from stakeholder feedback | Medium | Medium | Change request process; sprint boundaries | PM | Active |
| R6 | Artist onboarding bottleneck | Low | Medium | Automated CSV import script for bulk | Auto | Planned |
| R7 | DNS/launch coordination issues | Low | High | Pre-launch checklist; dry run Sep 11 | Dev + Auto | Planned |

---

## 6. Post-Launch Retainer (Proposed)

### Monthly Retainer Scope (starting Oct 2026)

| Service | Hours/Month | Description |
|---------|-------------|-------------|
| **Content Updates** | 4h | New artworks, exhibitions, blog posts |
| **Technical Maintenance** | 2h | Dependency updates, security patches, monitoring |
| **SEO Monitoring** | 2h | Rank tracking, content optimization, technical SEO |
| **Performance Optimization** | 1h | Image optimization, Core Web Vitals monitoring |
| **Strategic Consulting** | 2h | New features, marketing campaigns, artist onboarding |
| **Emergency Support** | As needed | Critical bug fixes (SLA: 4h business hours) |

### Quarterly Business Reviews
- Pipeline review (new artists, exhibitions)
- Performance metrics (traffic, conversions, revenue)
- Technology roadmap
- Relationship health check

---

## 7. Success Metrics

### Project-Level (Launch)
- [ ] Website live on artdid.co by Sep 14
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse SEO > 95
- [ ] Zero critical bugs at launch
- [ ] Client trained on Sanity Studio

### Business-Level (6 Months Post-Launch)
- [ ] 50+ artists onboarded
- [ ] 200+ artworks published
- [ ] $50k+ in artwork sales through platform
- [ ] 30%+ organic traffic growth
- [ ] 5+ exhibitions managed through platform
- [ ] Client NPS > 8

### Operational Metrics (Ongoing)
- Task completion rate > 90%
- Sprint velocity stable
- Client response time < 24h
- Zero missed deadlines without prior notice

---

## 8. Escalation Path

| Level | Trigger | Contact | Response Time |
|-------|---------|---------|---------------|
| **L1 - Team** | Task blocker, minor scope question | PM → Dev/Design | 2h |
| **L2 - Account** | Scope change > 2 days, budget impact | Account Manager → Client | 4h |
| **L3 - Leadership** | Relationship risk, contract dispute, major timeline slip | Director → Client Leadership | 24h |

---

## 9. Knowledge Management

### Client-Specific Knowledge Base
Location: `05-Knowledge/Clients/artdid.co/`

| Document | Purpose | Update Frequency |
|----------|---------|------------------|
| Brand Guidelines | Colors, fonts, voice, photography style | As needed |
| Artist Roster | Current represented artists, status | Monthly |
| Artwork Catalog Schema | Field definitions, validation rules | Per schema change |
| Collector Profiles | Key collectors, preferences, history | Quarterly |
| Technical Architecture | System diagram, integrations, credentials | Per major change |
| Launch Checklist | Pre-flight checks, rollback plan | Per release |

### Templates Created
- `01-Agency/Templates/Client-Onboarding-Checklist.md`
- `01-Agency/Templates/Weekly-Client-Sync.md`
- `01-Agency/Templates/Sprint-Review.md`
- `01-Agency/Templates/Monthly-Business-Review.md`
- `01-Agency/Templates/Deliverable-Tracker.md`
- `01-Agency/Templates/Risk-Register.md`

---

## 10. Immediate Next Actions (Today)

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Schedule kickoff call with artdid.co | PM | Today | Not Started |
| Send onboarding packet (this plan + questionnaires) | PM | Today | Not Started |
| Create Sanity project & share invite | Dev | Today | Not Started |
| Set up Stripe test account | Dev | Today | Not Started |
| Research agent: begin competitor analysis | Research | Today | Not Started |
| SEO agent: start keyword research | SEO | Today | Not Started |
| Content agent: draft content templates | Content | Today | Not Started |
| PM agent: create detailed sprint task breakdown | PM | Today | Not Started |

---

## Related Documents

- [[02-Clients/Active/artdid.co|Client Record]]
- [[06-Projects/Active/artdid-Website|Project: artdid.co Website]]
- [[06-Projects/Active/artdid-Website/requirements|Requirements]]
- [[06-Projects/Active/artdid-Website/tasks|Tasks]]
- [[06-Projects/Active/artdid-Website/decisions|Decisions]]
- [[08-Tasks/Today/README|Today's Tasks]]
- [[01-Agency/Strategy/Decision-Log|Decision Log]]