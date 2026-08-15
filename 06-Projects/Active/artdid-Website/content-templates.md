---
type: content-templates
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
created: 2026-08-14
updated: 2026-08-14
---

# artdid.co Content Templates

## Overview
Three core content templates for the artdid.co website, designed for SEO, consistency, and scalability. Templates reference competitor best practices (Artsy, Saatchi Art, David Zwirner, Pace Gallery, Gagosian) and the SEO keyword brief.

---

## 1. Artist Bio Template

**Purpose:** Artist profile pages — ranks for "[Artist Name]", "[Artist Name] [medium]", "[Artist Name] [city]" searches

### Page Title Tag
`[Artist Name] - Artist | artdid.co` (max 60 chars)

### H1 Heading
`[Artist Name] - Artist`

### Required Sections (in order)

| Section | Content | Word Count | SEO Notes |
|---------|---------|------------|-----------|
| **Header / Name & Medium** | `[Artist Name]` + medium/style in first 25 words | 10-15 | H1 must contain full name within first 25 words per SEO best practice |
| **Biography Block** | Career overview: education, early life, artistic development, influences, style evolution | 200-400 | Include full name, medium, style, location in accessible language (first paragraph). Update with every career milestone. |
| **Exhibition History** | Chronological list: exhibition title, gallery/institution, city, year. Highlight significant shows (museums, major galleries). | 150-300 | Each exhibition is rankable content. Links to exhibition pages on artdid.co. Demonstrates career depth to institutions. |
| **Representation** | Galleries representing the artist, dealer info, agent details | 50-100 | Link to gallery pages on artdid.co. Builds internal link network. |
| **Collections / Private Shows** | Public collections, museum holdings, private commissions (if permitted) | 50-100 | "As featured in..." / "Works held in:" statements. |
| **Social & Contact** | Website, Instagram, email for commissions/inquiries. CTA: "View Available Works" or "Contact for Purchase" | 30-50 | Social links nofollow. CTA button links to artist's available works section. |
| **Available Works Grid** | Card grid of currently available artworks (title, medium, price, small image) | 0 (dynamic) | Auto-populated from Sanity. Each card links to artwork detail page. |

### Image Requirements

| Element | File Naming Formula | Alt Text Formula |
|---------|-------------------|-----------------|
| Portrait | `artist-name-portrait-year.jpg` | `[Artist Name], portrait, [Year]` |
| Artwork thumbnail (in grid) | `artist-name-artwork-title-medium-year.jpg` | `[Artist Name], [Artwork Title], [Medium], [Year]` |

### Meta Description (auto-generated, 150-160 chars)
> `[Artist Name], [Medium] artist based in [City]. Browse available works, exhibition history, and CV. Contact for commissions or purchases.`

### JSON-LD Structured Data (Person type)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Artist Name]",
  "description": "[Medium] artist based in [City], known for [style/technique]. Exhibition history includes [major show]. Represented by [galleries].",
  "artist": "https://schema.org/Artist",
  "image": "https://artdid.co/artists/[artist-slug]/portrait.jpg",
  "url": "https://artdid.co/artists/[artist-slug]"
}
```

### Example Placeholder Text

> **Name:** Maya Rodriguez  
> **Medium:** Figurative oil painter  
> **Location:** Mexico City  
>   
> **Biography:** Maya Rodriguez (b. 1982) received her BFA from the Academia de San Carlos, Mexico City, and her MFA from the Royal College of Art, London. Her practice explores the intersection of body and architecture through large-scale figurative oil paintings. Rodriguez’s work has been exhibited internationally since 2010, including solo shows at Proyecto Material, Mexico City, and group exhibitions at Montserrat Art Space, Barcelona, and Weltkunstverein, Berlin. Her paintings are held in public and private collections across North America and Europe.  
>   
> **Exhibition History:** 2024 — *"New Forms,"* Proyecto Material, Mexico City. 2023 — *"Figure & Space,"* Montserrat Art Space, Barcelona. 2022 — *"Body Language,"* Weltkunstverein, Berlin. 2021 — *"Emerging Voices,"* Galería OMR, Mexico City.  
>   
> **Representation:** Galeria OMR, Mexico City  
>   
> **Social:** @mayarodriguezstudio · mayarodriguez.com  
>   
> **Available Works:** 3 works currently available (range: $8,000–$25,000)

---

## 2. Artwork Description Template

**Purpose:** Individual artwork pages — ranks for "[Artwork Title]", "[Artwork Title] [Artist Name]", "[medium] [style] [city]" searches. Highest commercial intent page type.

### Page Title Tag
`"[Artwork Title]" by [Artist Name] | artdid.co` (max 60 chars)

### H1 Heading
`[Artwork Title]`

### Required Sections (in order)

| Section | Content | Word Count | SEO Notes |
|---------|---------|------------|-----------|
| **Artwork Image (hero)** | High-resolution main image. Lazy-loaded via Next.js Image. Blur placeholder. | N/A | File name: `[Artist Name]-[Artwork Title]-[Medium]-[Year].jpg`. Primary image above the fold. |
| **Artist Name** | Link to artist profile page | N/A | Below the hero image, links to `/artists/[artist-slug]` |
| **Metadata Block** | Medium, dimensions, year, edition size, price, availability status, year created | 50-80 | Critical for JSON-LD and rich snippets. "Price on Application" or "$X,XXX" |
| **Subject/Style Description** | What the piece depicts, style/movement, color palette, mood. Use buyer-language phrases from SEO keyword research. | 80-150 | Incorporate primary and secondary keyword targets naturally. Avoid art-world jargon. |
| **Provenance / Certificate** | Certificate of authenticity number, edition info (if applicable), previous owners (if any), date of creation | 30-60 | Builds trust/credibility. Essential for blue-chip/primary market works. |
| **Dimensions & Format** | Height × Width × Depth (if applicable), medium specifics (oil on canvas, archival pigment print on Hahnemühle paper, bronze edition size) | 30-50 | Exact measurements. Include units (cm/in). |
| **Price / Inquiry CTA** | Price (if published) or "Price on Application" button linking to inquiry form. Edition notice if applicable. | 20-40 | Stripe integration for purchases. "Inquire" form collects name, email, message. |
| **Related Artworks** | Card grid of 3-5 related works (same artist, similar medium/style, or same exhibition). Links to their artwork pages. | 0 (dynamic) | Keeps users on site, increases dwell time, distributes PageRank. |
| **Share / Save** | Add to wishlist (user account required), social share buttons (Twitter, Facebook, Pinterest), email link | 0 (dynamic) | Wishlist requires user login. Track via analytics. |

### Image Requirements

| Element | File Naming Formula | Alt Text Formula |
|---------|-------------------|-----------------|
| Hero image | `artist-name-artwork-title-medium-year.jpg` | `[Artist Name], [Artwork Title], [Medium], [Year], [Dimensions]` |
| Detail image (close-up, signature, texture) | `artist-name-artwork-title-detail-medium-year.jpg` | `[Artist Name], detail of [Artwork Title], [Medium], [Year]` |
| Installation/shot image | `artist-name-artwork-title-install-medium-year.jpg` | `[Artist Name], installation view of [Artwork Title], [Medium], [Year]` |

### Meta Description (150-160 chars)
> `"[Artwork Title]" by [Artist Name] — original [Medium], [Dimensions], [Year]. Price $[X,XXX] or inquire. Collectible [style] available at artdid.co.`

### JSON-LD Structured Data (Product type)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Artwork Title]",
  "artist": "[Artist Name]",
  "description": "[Subject/Style Description — 2-3 sentences]",
  "image": "https://artdid.co/artworks/[artwork-slug]",
  "sku": "[Artwork ID]",
  "brand": "[Artist Name]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "X.X",
    "ratingCount": "X"
  },
  "offers": {
    "@type": "Offer",
    "price": "XXXX",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock" / "https://schema.org/OutOfStock",
    "url": "https://artdid.co/artworks/[artwork-slug]"
  }
}
```

### Example Placeholder Text

> **Title:** Morning Tide  
> **Artist:** Maya Rodriguez  
> **Medium:** Oil on canvas  
> **Dimensions:** 180 × 240 cm (71 × 94 in)  
> **Year:** 2024  
> **Edition:** Unique (one-of-a-kind)  
> **Price:** $28,000  
>   
> **Subject/Style:** This minimalist seascape captures the quiet moment at dawn when the tide retreats, leaving behind a smooth expanse of wet sand and gentle ripples. The composition is defined by a horizon line positioned one-third from the top, allowing the sky—graded from pale gold to soft azure—to dominate the upper field. Rendered in a restrained palette of sage green, warm ochre, and neutral sand, the painting evokes a feeling of calm and stillness. Rodriguez’s brushwork is smooth and blended, creating a surface that feels both polished and tactile.  
>   
> **Provenance:** Gallery representation since 2024. Certificate of authenticity included.  
>   
> **Dimensions:** 180 × 240 cm (71 × 94 in)  
>   
> **Price:** $28,000 (available for purchase at artdid.co)  
>   
> **Related Works:** *"Evening Harbor"* (2024, oil on canvas, 150 × 200 cm), *"Sandy Beach"* (2023, oil on canvas, 120 × 160 cm)  
>   
> **Share:** Add to wishlist · Twitter · Pinterest · Email

---

## 3. Exhibition Copy Template

**Purpose:** Exhibition/hub pages — ranks for "[Exhibition Name]", "[Exhibition Name] [City]", "[Gallery Name] exhibitions" searches. Supports time-sensitive seasonal traffic.

### Page Title Tag
`"[Exhibition Name]" - [Gallery Name] | artdid.co` (max 60 chars)

### H1 Heading
`[Exhibition Name]`

### Required Sections (in order)

| Section | Content | Word Count | SEO Notes |
|---------|---------|------------|-----------|
| **Header / Title & Gallery** | Exhibition name + gallery name + "Now on View" or "Past Exhibition" badge | 10-15 | Badge: "Now on View" (if active) / "Past Exhibition" (if archived). "Now on View" pages are time-sensitive rankers. |
| **Dates & Location** | Start date, end date (with countdown timer if active), gallery address, neighborhood/city | 30-50 | Include full address. County/neighborhood mention in body copy for local SEO. Countdown timer creates urgency + fresh content signals. |
| **Curatorial Statement** | 200-400 word essay by curator or gallery director. Explains theme, artist selection, conceptual framework. | 200-400 | Unique content per exhibition. Ranks for exhibition-related searches. Evergreen if archived with updated context. |
| **Featured Artworks** | Grid of 8-12 featured works from the exhibition. Title, artist, medium, small image, "View Artwork" link. | 0 (dynamic) | Auto-populated from Sanity. Each artwork links to its artwork detail page. Distributes link equity to artwork pages. |
| **Installation Views** | 3-5 high-resolution photos of the exhibition installation. Walls, lighting, artwork placement, visitor experience. | N/A | Alt text: `"Installation view of [Exhibition Name] at [Gallery Name], [City], showing [artwork titles] and [description of layout]."`. Provides visual context, supports image search. |
| **Press Coverage** | List of reviews, articles, features. Publication name, date, link to original article. | 50-100 | Each press mention is a backlink opportunity (internal link to artdid.co). Builds authority for the exhibition page. |
| **Visitor Information** | Gallery hours, admission (free/paid), nearest transit, parking, accessibility, guided tour schedule, audio guide availability. | 50-80 | Critical for converting searchers into gallery visitors. Local SEO boost (neighborhood mentions, transit, parking). |
| **Upcoming / Related** | Link to next exhibition, artist talk/events, related exhibitions at the gallery. | 20-40 | Keeps visitors engaged, encourages repeat visits. Links to other exhibition pages on artdid.co. |

### Image Requirements

| Element | File Naming Formula | Alt Text Formula |
|---------|-------------------|-----------------|
| Installation view 1 | `gallery-name-exhibition-title-view1-year.jpg` | `[Gallery Name], installation view of [Exhibition Title], showing [artwork list]` |
| Installation view 2 | `gallery-name-exhibition-title-view2-year.jpg` | `[Gallery Name], installation view of [Exhibition Title], wide shot of gallery space` |
| Detail / artwork shot | `gallery-name-exhibition-title-artwork-artworktitle-year.jpg` | `[Gallery Name], detail of [Artwork Title] from [Exhibition Title]` |

### Meta Description (150-160 chars)
> `"[Exhibition Name]" at [Gallery Name], [City] — [Dates]. Curatorial statement, featured artworks, visitor information. Now showing or archived.`

### JSON-LD Structured Data (Event type)
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "[Exhibition Name]",
  "description": "[Curatorial Statement — 2-3 sentences max]",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD" / "null" (if ongoing),
  "location": "[Gallery Full Address]",
  "url": "https://artdid.co/exhibitions/[exhibition-slug]",
  "image": "https://artdid.co/exhibitions/[exhibition-slug]/featured.jpg",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/Available" / "https://schema.org/Unavailable"
  },
  "artist": "https://schema.org/Person",  /* if single-artist exhibition */
  "location": "https://schema.org/Place",  /* gallery address */
  "keywords": "[artist names, medium, style, city]"  /* comma-separated */
}
```

### Example Placeholder Text

> **"Emerging Voices: Five Artists from Latin America"**  
> **Galeria OMR**  
>   
> **Now on View:** June 15 – September 15, 2026  
> **Address:** Galeria OMR, Avenida Revolución 135, Roma Norte, Mexico City, CP 06700  
>   
> **Curatorial Statement:** *"Emerging Voices"* brings together five contemporary artists working in Mexico City, each exploring different facets of identity, migration, and cultural hybridity through their practice. While their approaches vary—from abstraction to figuration, from video to installation—they share a common engagement with the complexities of living and making art in the city today. This exhibition is the second iteration of a research project initiated in 2023, expanding the roster of artists and introducing new works produced specifically for this show.  
>   
> **Dates:** June 15 – September 15, 2026  
> **Hours:** Tuesday–Saturday, 11am–6pm · Free admission  
> **Nearest Metro:** Line 3, Balderas station (5-min walk)  
> **Parking:** Street parking available on Avenida Revolución; validated parking at nearby shopping center.  
>   
> **Featured Artists & Works:**  
> • **Maya Rodriguez** — *"Morning Tide"* (oil on canvas, 180×240 cm, 2024)  
> • **Carlos Reyes** — *"Urban Ecologies"* (mixed media, 250×300 cm, 2024)  
> • **Julia Martinez** — *"Fragmentos"* (video installation, 8 min, 2024)  
> • **Andrés Fernandez** — *"Cenizas"* (sculpture, basalt, 150×80×80 cm, 2024)  
> • **Sofia Herrera** — *"Cielo sobre la Ciudad"* (photography series, 10 works, 2023–2024)  
>   
> **Installation Views:** [Photos of gallery space, artwork placement, lighting]  
>   
> **Press:** *"Emerging Voices shines a light on the most exciting talent in Mexico City's vibrant contemporary scene"* — Artforum, June 2026  
>   
> **Visitor Information:** Tuesday–Saturday, 11am–6pm · Free admission · Metro Balderas (5 min) · Street parking available  
>   
> **Related:** *"New Voices: Emerging Artists 2024"* (Past Exhibition, 2024). *"Solo: Maya Rodriguez"* (Upcoming, October 2026)

---

## Template Usage Guidelines

### For Sanity Studio (CMS)
Create three document types in Sanity:
1. **Artist** → uses Artist Bio Template fields
2. **Artwork** → uses Artwork Description Template fields
3. **Exhibition** → uses Exhibition Copy Template fields

### For Next.js Pages
Each template maps to a page route:
- `/artists/[artist-slug]` → Artist Bio Template rendered
- `/artworks/[artwork-slug]` → Artwork Description Template rendered
- `/exhibitions/[exhibition-slug]` → Exhibition Copy Template rendered

### SEO Implementation Checklist (per page type)

| Element | Artist Page | Artwork Page | Exhibition Page |
|---------|-------------|--------------|-----------------|
| Title tag | ✅ | ✅ | ✅ |
| H1 heading | ✅ | ✅ | ✅ |
| Meta description | ✅ | ✅ | ✅ |
| JSON-LD structured data | ✅ (Person) | ✅ (Product) | ✅ (Event) |
| URL structure | `/artists/[slug]` | `/artworks/[slug]` | `/exhibitions/[slug]` |
| Image alt text formula | ✅ | ✅ | ✅ |
| File naming convention | ✅ | ✅ | ✅ |
| Internal links | To artwork cards, exhibition pages | To artist profile, related artworks | To artist profiles, other exhibition pages, gallery home |
| Schema.org type | Person | Product | Event |

### Competitor Reference Notes

| Gallery | Template Feature Borrowed |
|---------|--------------------------|
| **Artsy** | Filterable artist grids, artist pages with biography + available works, recommendation engine (Related Artworks section) |
| **Saatchi Art** | "Mood" filter language in subject descriptions, "Follow artist" CTA + email notification prompt, concise artist bios with social links |
| **David Zwirner** | Mega-menu navigation patterns (applied to exhibition page nav), sticky sidebar for artwork list, watchlist/saved works concept (adapted as "Add to wishlist") |
| **Pace Gallery** | Journal/Insights section concept (adapted as curatorial statement on exhibition pages), per-exhibition accent colour idea (applied via CSS variables for hero borders), journal-style content for SEO |
| **Gagosian** | Black-on-white elegance + accent colour strategy (artdid.co: neutral base + toggleable accent colours per exhibition/artist series), magazine-style content (adapted as curated curatorial statements), quarterly-inspired navigation stickiness |

---

## Sprint 1 Delivery (Aug 14–20)

| Template | Owner | Due | Status |
|----------|-------|-----|--------|
| Artist Bio Template (structure + example) | @content-agent | Aug 18 | Pending |
| Artwork Description Template (structure + example) | @content-agent | Aug 18 | Pending |
| Exhibition Copy Template (structure + example) | @content-agent | Aug 18 | Pending |
| Sanity document types (3: Artist, Artwork, Exhibition) | @developer-agent | Aug 20 | Pending |
| Template integration into Next.js pages (3 pages) | @developer-agent | Aug 20 | Pending |

---

## Next Steps

1. **@content-agent** — Finalize these three templates with example placeholder text (due Aug 18)
2. **@developer-agent** — Create Sanity document types matching the template schemas (due Aug 20)
3. **@developer-agent** — Build Next.js page scaffolds for `/artists/[slug]`, `/artworks/[slug]`, `/exhibitions/[slug]` (due Aug 20)
4. **Populate** templates with artdid.co's represented artists' data (client homework — due Aug 20)
5. **Implement** JSON-LD structured data on all three page types (due Sprint 2, Aug 21–27)

---

## Related

- `06-Projects/Active/artdid-Website/requirements.md` — Full requirements list
- `06-Projects/Active/artdid-Website/tasks.md` — Sprint 1 task breakdown
- `01-Agency/Templates/Monthly-Business-Review.md` — Success metrics and KPI tracking
- `02-Clients/Active/artdid.co-Onboarding-Checklist.md` — Client homework assignments (brand assets, artist data, domain access)