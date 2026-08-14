---
type: decision
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
date: 2026-08-14
decision_date: 2026-08-14
decider: OpenCode
---

# artdid.co Website — Architecture Decisions

## 2026-08-14 — Tech Stack Decision

- **Decision:** Next.js 18 + TypeScript + Tailwind CSS + Sanity CMS + Stripe
- **Context:** Art gallery needs high-performance image handling, flexible content management, and e-commerce
- **Options:**
  1. Next.js + Sanity + Stripe (chosen)
  2. Shopify + Headless CMS
  3. WordPress + WooCommerce
  4. Custom React + custom CMS
- **Chosen option:** Next.js 18 + Sanity.io + Stripe
- **Reason:** Best image optimization (Next.js Image + Sanity CDN), flexible schema for complex artwork metadata, excellent developer experience, Vercel deployment, strong TypeScript support
- **Consequences:** Requires Sanity expertise; monthly Sanity costs; Stripe fees on transactions
- **Related project:** [[06-Projects/Active/artdid-Website|artdid.co Website]]

---

## 2026-08-14 — CMS Decision

- **Decision:** Sanity.io as headless CMS
- **Context:** Complex, varied artwork metadata (dimensions, medium, provenance, availability, price tiers)
- **Options:**
  1. Sanity.io (chosen)
  2. Contentful
  3. Strapi (self-hosted)
  4. Directus (self-hosted)
  5. JSON files in repo
- **Chosen option:** Sanity.io
- **Reason:** Real-time collaboration for curators, customizable studio for art-specific workflows, excellent image pipeline, GROQ query language, generous free tier
- **Consequences:** Vendor lock-in; recurring cost at scale
- **Related project:** [[06-Projects/Active/artdid-Website|artdid.co Website]]

---

## 2026-08-14 — E-Commerce Decision

- **Decision:** Stripe for payments + custom cart/checkout (not Shopify)
- **Context:** Art sales need: inquire-for-price, certificates of authenticity, shipping quotes per artwork, high-value transactions
- **Options:**
  1. Stripe + custom checkout (chosen)
  2. Shopify Buy Button
  3. Snipcart
  4. Commerce Layer
- **Chosen option:** Stripe + custom checkout
- **Reason:** Full control over artwork-specific flows (inquire vs. buy now), certificate generation, custom shipping logic, lower fees for high-value items
- **Consequences:** More development effort; PCI compliance handled by Stripe Elements
- **Related project:** [[06-Projects/Active/artdid-Website|artdid.co Website]]

---

## 2026-08-14 — Image Strategy

- **Decision:** Sanity CDN + Next.js Image with blur placeholders
- **Context:** High-res artwork images (50-200MB source) need fast delivery at multiple sizes
- **Approach:**
  - Upload originals to Sanity (auto-generates WebP/AVIF variants)
  - Next.js Image with `sizes` and `priority` for hero images
  - Blur data URLs from Sanity for LQIP
  - Lazy loading for gallery grids
- **Related project:** [[06-Projects/Active/artdid-Website|artdid.co Website]]

---

## Related

- [[01-Agency/Strategy/Decision-Log|Decision Log]]
- [[04-Development/Automation/Readme|Development Operations]]