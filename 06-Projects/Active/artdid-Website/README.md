---
type: project
status: active
created: 2026-08-14
updated: 2026-08-14
project:
  name: artdid.co Website & Gallery Platform
  client: "[[02-Clients/Active/artdid.co|artdid.co]]"
  owner: Muchiri
  start_date: 2026-08-14
  deadline: 2026-09-14
  technology: "Next.js 18, TypeScript, Tailwind CSS, Sanity CMS, Vercel, Stripe"
tags:
  - project
  - website
  - ecommerce
  - arts
---

# artdid.co Website & Gallery Platform

## Objective

Build a beautiful, performant website for artdid.co that serves as:
1. Artist portfolio showcase
2. Online gallery with artwork browsing
3. E-commerce platform for artwork sales
3. Artist management dashboard
4. Blog for exhibition announcements and artist features

## Client

[[02-Clients/Active/artdid.co|artdid.co]]

## Owner

Muchiri

## Status

Current status: active (kickoff phase)

## Timeline

- Start: 2026-08-14
- Deadline: 2026-09-14 (4 weeks)

## Technology

- Next.js 18 (App Router)
- TypeScript
- Tailwind CSS
- Sanity.io (headless CMS for artists, artworks, exhibitions)
- Stripe (payments for artwork sales)
- Vercel (deployment)
- Image optimization (Next.js Image + Sanity CDN)

## Requirements

See [[requirements]].

## Tasks

See [[tasks]].

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Complex artwork metadata | High | Medium | Use Sanity for flexible schema |
| High-res image performance | High | High | Next.js Image + Sanity CDN + blur placeholders |
| Stripe art marketplace complexity | Medium | High | Start with simple buy-now, add bidding later |
| Artist onboarding flow | Medium | Medium | Design clear CMS workflows in Sanity |

## Decisions

See [[decisions]].

## Next Actions

- [ ] @project-manager-agent: Review requirements and create detailed task breakdown
- [ ] @research-agent: Research art gallery website best practices and competitor analysis
- [ ] @seo-agent: Create SEO brief for art/artist keywords
- [ ] @content-agent: Draft content strategy (artist bios, exhibition copy, artwork descriptions)
- [ ] @developer-agent: Set up Next.js + Sanity + Starter project

## Related

- [[02-Clients/Active/artdid.co|Client: artdid.co]]
- [[08-Tasks/Today/README|Today's Tasks]]