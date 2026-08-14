---
type: decision
project: "[[06-Projects/Active/Portfolio-Website|Portfolio Website]]"
date: 2026-08-14
decision_date: 2026-08-14
decider: OpenCode
---

# Portfolio Website — Architecture Decisions

## 2026-08-14 — Tech Stack Decision

- **Decision:** Use React 18 + TypeScript + Tailwind CSS
- **Context:** Need a modern, maintainable portfolio site that deploys to Vercel
- **Options:**
  1. Next.js 18 with TypeScript
  2. React 18 + Vite
  3. Plain HTML/CSS
  4. Astro
- **Chosen option:** Next.js 18 with TypeScript and Tailwind CSS
- **Reason:** Best ecosystem integration with Vercel, built-in SSG/SSR, excellent SEO features, TypeScript support out of the box
- **Consequences:** Requires learning Tailwind CSS configuration; may need to optimize bundle size for performance targets
- **Related project:** [[06-Projects/Active/Portfolio-Website|Portfolio Website]]

---

## 2026-08-14 — Hosting Decision

- **Decision:** Deploy to Vercel using the existing Muchiri-OS Vercel account
- **Context:** Vercel provides excellent Next.js integration and global CDN
- **Options:**
  1. Vercel
  2. Netlify
  3. GitHub Pages
- **Chosen option:** Vercel
- **Reason:** Same platform already used for the Muchiri-OS dashboard; automatic deployments from Git
- **Consequences:** None
- **Related project:** [[06-Projects/Active/Portfolio-Website|Portfolio Website]]

---

## 2026-08-14 — Content Decision

- **Decision:** Use static content defined in Markdown/JSON files rather than a CMS
- **Context:** Keep the site simple, fast, and deployable without runtime database dependencies
- **Options:**
  1. Headless CMS (Contentful, Sanity)
  2. Markdown files with gray-matter
  3. JSON configuration
- **Chosen option:** JSON for structured data (projects, blog posts) + TSX components for page copy
- **Reason:** Simplicity, no runtime dependencies, fits the static-first approach
- **Consequences:** Content updates require code changes; acceptable for a portfolio site
- **Related project:** [[06-Projects/Active/Portfolio-Website|Portfolio Website]]

---

## Related

- [[01-Agency/Strategy/Decision-Log|Decision Log]]
- [[04-Development/Automation/Readme|Development Operations]]