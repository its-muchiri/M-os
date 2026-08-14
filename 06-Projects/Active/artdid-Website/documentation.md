---
type: documentation
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
created: 2026-08-14
updated: 2026-08-14
status: not-started
---

# artdid.co Website — Documentation

> This file will be updated as the project progresses with implementation details, setup instructions, and lessons learned.

## Project Overview

Building an art gallery website with:
- Next.js 18 (App Router)
- TypeScript
- Tailwind CSS
- Sanity.io CMS
- Stripe payments
- Vercel deployment

## Local Development Setup

```bash
# Clone the repository
cd C:\Users\KIMISH\Desktop\Projects
git clone <repo-url> artdid-website
cd artdid-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start Sanity Studio (separate terminal)
cd studio && npm install && npm run dev

# Start Next.js dev server
npm run dev

# Visit http://localhost:3000 (Next.js)
# Visit http://localhost:3333 (Sanity Studio)
```

## Environment Variables

```bash
# .env.local
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Site
NEXT_PUBLIC_SITE_URL=https://artdid.co
NEXT_PUBLIC_SITE_NAME=artdid.co
```

## Sanity Schema Overview

### Core Document Types

```
studio/schemas/
artist.ts
artwork.ts
exhibition.ts
collection.ts
page.ts
settings.ts
```

### Artist Schema
- name, slug, bio, cv, portrait, website, instagram, email, represented (boolean), featured (boolean)

### Artwork Schema
- title, slug, artist (ref), year, medium, dimensions (cm), price, currency, availability (for-sale/inquire/sold/archived), images[], tags[], provenance, certificateNumber, featured (boolean)

### Exhibition Schema
- title, slug, description, startDate, endDate, location, artists[] (refs), artworks[] (refs), images[], press[], featured (boolean), status (upcoming/current/past)

## Code Structure

```
artdid-website/
app/
  (public)/
    layout.tsx
    page.tsx
    artists/
      page.tsx
      [slug]/page.tsx
    artworks/
      page.tsx
      [slug]/page.tsx
    exhibitions/
      page.tsx
      [slug]/page.tsx
    shop/
      cart/page.tsx
      checkout/page.tsx
      success/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
    about/page.tsx
    contact/page.tsx
  api/
    stripe/webhook/route.ts
    artworks/inquire/route.ts
  globals.css
components/
  ui/
  layout/
  artists/
  artworks/
  exhibitions/
  shop/
  blog/
lib/
  sanity.ts
  stripe.ts
  queries.ts
  image.ts
  utils.ts
studio/
  sanity.config.ts
  schemas/
public/
next.config.mjs
tailwind.config.mjs
package.json
tsconfig.json
```

## Key GROQ Queries

```javascript
// Featured artworks for homepage
*[_type == "artwork" && featured == true && availability == "for-sale"] | order(_createdAt desc) [0..8]

// Artist with artworks
*[_type == "artist" && slug.current == $slug][0] {
  ...,
  artworks->[_type == "artwork" && availability != "archived"] | order(year desc)
}

// Artworks with filters
*[_type == "artwork" 
  && ($artist == "" || artist->slug.current == $artist)
  && ($medium == "" || medium == $medium)
  && ($priceMin == 0 || price >= $priceMin)
  && ($priceMax == 0 || price <= $priceMax)
  && availability == "for-sale"
] | order(_createdAt desc)
```

## SEO Implementation

- Structured Data: Person (artists), Product (artworks), Event (exhibitions), Organization (artdid.co)
- Sitemap: next-sitemap plugin
- Meta Tags: Dynamic per page via generateMetadata

## Stripe Integration

- Products: Created dynamically from Sanity artworks
- Prices: Synced from artwork price field
- Checkout: Custom session with artwork metadata
- Webhooks: Handle checkout.session.completed → create order, generate certificate
- Certificates: PDF generation

## Image Optimization

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

<Image
  src={urlFor(artwork.images[0]).width(1200).height(1200).fit('max').url()}
  alt={artwork.title}
  width={1200}
  height={1200}
  placeholder="blur"
  blurDataURL={urlFor(artwork.images[0]).width(20).height(20).fit('max').format('webp').url()}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Deployment

```bash
vercel --prod
```

## Agent Notes

- Research Agent: Findings in 05-Knowledge/Research/art-gallery-websites/
- SEO Agent: Keyword data in 03-Marketing/SEO/artdid/
- Content Agent: Templates in 03-Marketing/Content/artdid/
- Developer Agent: Code in C:\Users\KIMISH\Desktop\Projects\artdid-website/
- Marketing Agent: Launch plan in 03-Marketing/Campaigns/artdid-launch/
- Automation Agent: Scripts in 04-Development/Automation/artdid/

## Related

- [[requirements]] — Project requirements
- [[tasks]] — Task breakdown
- [[decisions]] — Architecture decisions
- [[AGENTS]] — Operating constitution