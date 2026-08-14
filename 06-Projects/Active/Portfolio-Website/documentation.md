---
type: documentation
project: "[[06-Projects/Active/Portfolio-Website|Portfolio Website]]"
created: 2026-08-14
updated: 2026-08-14
status: not-started
---

# Portfolio Website — Documentation

> This file will be updated as the project progresses with implementation details, setup instructions, and lessons learned.

## Project Overview

Building a portfolio website using:
- Next.js 18
- TypeScript
- Tailwind CSS
- Vercel deployment

## Local Development Setup

```bash
# Clone the repository
cd C:\Users\KIMISH\Desktop\Projects
git clone <repo-url> portfolio-website
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## Code Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── projects/
│   │   └── page.tsx        # Projects listing
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual post
├── components/             # Reusable React components
├── lib/
│   ├── data.ts            # Projects and blog data (JSON)
│   └── seo.ts             # SEO utilities
├── styles/
│   └── globals.css        # Tailwind imports
├── public/                # Static assets
├── next.config.mjs        # Next.js config
├── tailwind.config.mjs    # Tailwind config
├── package.json
└── tsconfig.json
```

## Data Sources

- `lib/data.ts` — Contains project data and blog post metadata
- Content is defined as TypeScript objects (static generation)
- Images stored in `public/images/`

## SEO Configuration

- `app/layout.tsx` — Contains `<head>` metadata with OG tags
- `next-sitemap` plugin generates sitemap.xml
- `app/robots.txt` — Basic robots.txt

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://muchiri-os.vercel.app
NEXT_PUBLIC_AUTHOR_NAME=Muchiri
NEXT_PUBLIC_AUTHOR_EMAIL=hi@muchiri.dev
```

## Agent Notes

- **Research Agent:** Research findings go to `05-Knowledge/Research/`
- **SEO Agent:** SEO brief and keyword data in `03-Marketing/SEO/`
- **Content Agent:** Content drafts in `03-Marketing/Campaigns/Blog/`
- **Developer Agent:** Code lives in `C:\Users\KIMISH\Desktop\Projects\portfolio-website/`
- **Automation Agent:** Deployment scripts in `04-Development/Automation/`

## Related

- [[requirements]] — Project requirements
- [[tasks]] — Task breakdown
- [[decisions]] — Architecture decisions
- [[AGENTS]] — Operating constitution