---
type: requirements
project: "[[06-Projects/Active/artdid-Website|artdid.co Website & Gallery Platform]]"
created: 2026-08-14
updated: 2026-08-14
status: draft
---

# artdid.co Website — Requirements

## Overview

A sophisticated art gallery website with artist portfolios, artwork browsing, e-commerce, and CMS.

## Must-Have Features

### 1. Homepage
- Full-screen hero with featured artwork/artist
- Curated collections carousel
- Upcoming exhibitions section
- Featured artists grid
- Newsletter signup

### 2. Artists Directory
- Filterable grid of all represented artists
- Artist profile pages with:
  - Biography & CV
  - Portfolio of artworks
  - Current/past exhibitions
  - Contact/collector inquiry form

### 3. Artwork Gallery / Shop
- Browse all available artworks with filters:
  - Artist
  - Medium (painting, sculpture, photography, etc.)
  - Price range
  - Size
  - Availability (for sale / sold / inquiry only)
- Artwork detail page:
  - High-res zoomable images (multiple angles)
  - Provenance & certificate info
  - Price or "inquire for price"
  - Add to cart / inquire button
  - Share functionality
  - Related artworks

### 4. Exhibitions & Events
- Current exhibitions page
- Past exhibitions archive
- Exhibition detail pages with:
  - Dates, location, curator statement
  - Featured artworks
  - Installation photos
  - Press coverage

### 5. E-Commerce (Stripe Integration)
- Shopping cart
- Secure checkout (Stripe)
- Order management
- Invoice generation
- Shipping calculation (artwork-specific)
- Certificate of authenticity generation

### 6. Sanity CMS
- **Artists**: name, bio, CV, portrait, social links, represented status
- **Artworks**: title, artist, year, medium, dimensions, price, images, availability, tags
- **Exhibitions**: title, dates, location, description, featured artists, images, press
- **Collections**: curated groups of artworks
- **Pages**: homepage content, about, contact

### 7. Blog / News
- Exhibition announcements
- Artist features/interviews
- Art market insights
- Press mentions

### 8. Collector Features
- Wishlist/favorites
- Price alerts
- Private viewing room requests
- Collector dashboard (purchase history, certificates)

## Technical Requirements

- **Performance**: Lighthouse > 90, especially image optimization
- **SEO**: Structured data for artworks (Product), artists (Person), exhibitions (Event)
- **Accessibility**: WCAG 2.1 AA
- **Responsive**: Mobile-first, beautiful on all devices
- **Image handling**: Next.js Image + Sanity CDN, blur placeholders, WebP/AVIF

## Admin / Backend Needs

- Sanity Studio for content management
- Order management dashboard
- Artist onboarding workflow
- Inventory tracking

## Nice-to-Have

- AR artwork preview (WebXR)
- Virtual exhibition tours
- Artist application portal
- Multi-currency support
- Auction/bidding system (Phase 2)

## Agent Assignment

| Agent | Responsibility |
|-------|---------------|
| Research Agent | Art gallery website patterns, Sanity schema design |
| SEO Agent | Art/artist keyword research, schema markup strategy |
| Content Agent | Artist bio templates, artwork description guidelines, exhibition copy |
| Developer Agent | Next.js + Sanity + Stripe implementation |
| Marketing Agent | Launch strategy, collector acquisition |
| Project Manager Agent | Phase planning, task tracking |
| Automation Agent | Image optimization pipeline, certificate generation |