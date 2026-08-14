---
type: onboarding-checklist
client: "[[02-Clients/Active/artdid.co|artdid.co]]"
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
created: 2026-08-14
updated: 2026-08-14
status: in-progress
---

# artdid.co — Onboarding Checklist

## Pre-Engagement
- [x] Client record created in `02-Clients/Active/artdid.co.md`
- [x] Project scaffold created in `06-Projects/Active/artdid-Website/`
- [x] Management plan created: `02-Clients/Active/artdid.co-Management-Plan.md`
- [ ] Signed MSA/Statement of Work
- [ ] Initial deposit received (50%)
- [ ] NDA executed (if required)

## Client Information Collection
- [ ] Primary contact confirmed (name, email, phone)
- [ ] Stakeholder map completed
- [ ] Communication preferences documented
- [ ] Billing contact & invoicing requirements

## Access & Credentials (Needed from Client)
- [ ] Domain registrar access (artdid.co)
- [ ] DNS management access
- [ ] Google Analytics / Search Console access
- [ ] Social media accounts (Instagram, etc.)
- [ ] Brand assets (logo, color palette, typography, photography style guide)
- [ ] Existing artist/artwork data (spreadsheets, Airtable, Notion, etc.)
- [ ] High-resolution artwork images (source files)

## Technical Setup
- [ ] GitHub repository created: `artdid-website`
- [ ] Vercel team access granted
- [ ] Sanity.io project created
- [ ] Sanity Studio invite sent to client team
- [ ] Stripe test account created
- [ ] Stripe webhook endpoint configured (staging)
- [ ] Monitoring: Vercel Analytics + Sentry project created
- [ ] Staging environment: `staging.artdid.co` (or Vercel preview)

## Project Initialization
- [x] Project README.md with scope, timeline, team
- [x] Requirements document: `requirements.md`
- [x] Task breakdown: `tasks.md` (25+ tasks across 5 phases)
- [x] Risk register: `decisions.md` (includes risk register)
- [x] Architecture decisions: `decisions.md` (4 decisions documented)
- [x] Documentation scaffold: `documentation.md`
- [ ] Decision log entry for project initiation in `01-Agency/Strategy/Decision-Log.md`

## Kickoff Meeting
- [ ] Scheduled: Target Aug 15 (Day 2)
- [ ] Agenda prepared (using `01-Agency/Templates/Weekly-Client-Sync.md`)
- [ ] Stakeholders invited
- [ ] Pre-read distributed (this checklist + management plan + requirements)

## Documentation Handoff
- [ ] Client added to relevant Obsidian vault context
- [ ] Communication protocol confirmed (from management plan)
- [ ] Escalation path confirmed
- [ ] Success metrics agreed (from management plan)
- [ ] First sprint planned (Sprint 1: Aug 14–20)

## Post-Kickoff (First Week - Sprint 1)
- [ ] Daily standups established (Tue/Thu 15 min)
- [ ] Weekly sync scheduled (Mon 30 min)
- [ ] Sprint 1 backlog prioritized
- [ ] Blockers identified and assigned
- [ ] Client homework assigned:
  - [ ] Brand assets delivery
  - [ ] Artist/artwork data export
  - [ ] Domain/DNS access
  - [ ] Stripe account creation (if not existing)

---

## Agent Assignments for Onboarding

| Task | Agent | Due | Status |
|------|-------|-----|--------|
| Competitor analysis (5 top gallery sites) | @research-agent | Aug 18 | Not Started |
| Sanity schema design for artists/artworks/exhibitions | @research-agent + @developer-agent | Aug 18 | Not Started |
| SEO keyword brief (art/artist/collector) | @seo-agent | Aug 18 | Not Started |
| Content templates (artist bio, artwork desc, exhibition copy) | @content-agent | Aug 19 | Not Started |
| Next.js 18 + TypeScript + Tailwind scaffold | @developer-agent | Aug 20 | Not Started |
| Design system (colors, typography, base components) | @developer-agent | Aug 20 | Not Started |
| Sanity Studio configuration (desk, schemas, previews) | @developer-agent | Aug 20 | Not Started |
| Image optimization pipeline (Sanity CDN + Next.js Image) | @automation-agent | Aug 20 | Not Started |
| Sprint 1 task breakdown & assignment | @project-manager-agent | Today | Not Started |

---

## Client Homework (To Assign at Kickoff)

| Item | Owner | Due | Notes |
|------|-------|-----|-------|
| Brand guidelines (colors, fonts, logo variations) | Client | Aug 18 | Required for design system |
| Artist roster spreadsheet (name, bio, CV, social, represented status) | Client | Aug 20 | For Sanity import |
| Artwork inventory (title, artist, year, medium, dimensions, price, images) | Client | Aug 22 | For Sanity import |
| High-res artwork images (organized by artist) | Client | Aug 22 | Upload to Sanity or shared drive |
| Domain registrar login / DNS delegation | Client | Aug 18 | For Vercel setup |
| Stripe account (or create new) | Client | Aug 20 | For payment integration |
| Collector list (for CRM import, optional) | Client | Aug 25 | Phase 2 |

---

## Sign-Off

**Client Representative:** ________________ **Date:** ____________

**Account Manager:** ________________ **Date:** ____________

---

## Related

- [[02-Clients/Active/artdid.co|Client Record]]
- [[02-Clients/Active/artdid.co-Management-Plan|Management Plan]]
- [[06-Projects/Active/artdid-Website|Project]]
- [[01-Agency/Templates/Client-Onboarding-Checklist|Template]]