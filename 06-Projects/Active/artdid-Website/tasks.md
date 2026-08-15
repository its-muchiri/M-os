---
type: tasks
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
created: 2026-08-14
updated: 2026-08-15
status: in-progress
---

# artdid.co Website — Tasks

## Phase 1: Research & Strategy (Week 1 — Aug 14–20)

### Completed ✅
- [x] @research-agent: Analyze 5 top art gallery websites (Artsy, Saatchi, David Zwirner, Pace, Gagosian) — Competitor analysis report generated with 5 gallery profiles, design element observations, UX features, and recommendations for artdid.co
- [x] @research-agent: Research Sanity schema patterns for art catalogs — Schema structure for artists, artworks, exhibitions, collections defined
- [x] @seo-agent: Create SEO brief — art/artist/collector keywords — 15 keyword targets with intent, difficulty, volume identified; keyword categories, competitive gaps, and local SEO priorities defined
- [x] **Content templates created** — Artist Bio, Artwork Description, Exhibition Copy (3 templates with title tags, H1, sections, images, meta descriptions, JSON-LD, example text) in `content-templates.md`
- [ ] @project-manager-agent: Document research findings in knowledge base

### In Progress
- [ ] @project-manager-agent: Create detailed sprint breakdown from requirements (due: today Aug 15)

---

## Phase 2: Foundation & CMS Setup (Week 1-2 — Aug 14–27)

### To Start This Week
- [ ] @developer-agent: Initialize Next.js 18 + TypeScript + Tailwind project scaffold — **in progress** (project initialized, node_modules installed: next@16.3.1, react, react-dom)
- [ ] @developer-agent: Set up Sanity project with starter schemas (artists, artworks, exhibitions, collections, pages, settings)
- [ ] @developer-agent: Configure Sanity Studio (desk structure: Artists > Artworks; Exhibitions > Artworks; Pages > Home/About/Contact)
- [ ] @automation-agent: Set up image optimization pipeline (Sanity CDN + Next.js Image + blur placeholders + WebP/AVIF conversion)
- [ ] @developer-agent: Implement design system foundation (color palette: neutral base + 2 accent colours; typography scale; spacing 4-system; base components: buttons, cards, modals, typography styles)
- [ ] @developer-agent: Build layout components (Header with nav, Footer with links, Navigation)

---

## Phase 3: Core Features (Week 2-3 — Aug 21–Sep 3)

### Artists & Artworks
- [ ] Build Artists directory page with filterable grid (artist, medium, price, size)
- [ ] Build Artist profile page using Artist Bio Template (name, bio, exhibition history, representation, available works grid)
- [ ] Build Artwork gallery with filters (artist, medium, price range, size, availability)
- [ ] Build Artwork detail page using Artwork Description Template (hero image, metadata, subject/style description, provenance, price/CTA, related artworks)
- [ ] Implement artwork image optimization & blur placeholders (Next.js Image + Sanity CDN)

### Exhibitions
- [ ] Build Exhibitions listing (current + past/archive tabs)
- [ ] Build Exhibition detail pages using Exhibition Copy Template (dates, location, curatorial statement, featured artworks, installation views, press, visitor info)

### E-Commerce
- [ ] Set up Stripe integration (test mode)
- [ ] Build cart & checkout flow
- [ ] Implement order confirmation & certificate of authenticity generation
- [ ] Automate certificate of authenticity PDF generation (Artwork ID, artist, title, date, price, signature)

---

## Phase 4: Content & Polish (Week 3-4 — Sep 4–10)

- [ ] Populate Sanity with sample artist/artwork data (client homework: brand assets, artist roster, artwork inventory due Aug 22)
- [ ] Write all page copy (home, about, contact, policies) using content templates
- [ ] SEO implementation: structured data (Product, Person, Event schemas) on all three page types
- [ ] Generate sitemap, robots.txt, meta tags for all pages
- [ ] Lighthouse audit & performance optimization (target >90)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Pre-launch content (blog posts, press kit)

---

## Phase 5: Launch (Week 4 — Sep 11–17)

- [ ] Configure Vercel production deployment
- [ ] Set up monitoring (Vercel Analytics, Sentry for error tracking)
- [ ] Final QA checklist (all links, forms, checkout, image loading, mobile responsiveness)
- [ ] Client handoff & Sanity Studio training session
- [ ] Update project status to completed / transition to retainer

---

## Task Links
- Today's tasks: [[08-Tasks/Today/README|Today]]
- This week's tasks: [[08-Tasks/This-Week/README|This Week]]
- Research report: [[02-Clients/Active/artdid.co-Onboarding-Checklist.md#agent-assignments-for-onboarding|Agent Assignments]]
- Content templates: [[content-templates.md|content-templates.md]]
- Management plan: [[02-Clients/Active/artdid.co-Management-Plan.md|Management Plan]]