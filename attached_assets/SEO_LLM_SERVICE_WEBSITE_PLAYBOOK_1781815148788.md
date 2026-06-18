# The Service Website Playbook: Building a Top-Ranking SEO + LLM-Optimized Site

A complete, reusable blueprint for building a high-converting, search-dominant, AI-citable service website. Distilled from a production dental implant site that ranks well in both classic search (Google) and AI answer engines (ChatGPT, Perplexity, Google AI Overviews).

This document is written so you can hand it to any builder (human or AI agent) and apply it to **any local service business** (dental, legal, medical, home services, finance, etc.), not just dental implants. Where something is industry-specific, it is marked **[SWAP]** so you know to replace it.

---

## Table of Contents

1. [Core Philosophy: The 4 Pillars](#1-core-philosophy)
2. [Tech Stack & Project Structure](#2-tech-stack--project-structure)
3. [Information Architecture (The Page Map)](#3-information-architecture)
4. [The Page Template System (Build Once, Scale Infinitely)](#4-the-page-template-system)
5. [Local SEO: The Location Hub Tier System](#5-local-seo-the-location-hub)
6. [Classic SEO Checklist (Google)](#6-classic-seo-checklist)
7. [Structured Data / JSON-LD (The Ranking Multiplier)](#7-structured-data--json-ld)
8. [LLM / AI Search Optimization (GEO)](#8-llm--ai-search-optimization)
9. [Internationalization (Multi-Language SEO)](#9-internationalization)
10. [Conversion Rate Optimization (CRO)](#10-conversion-rate-optimization)
11. [Performance / Core Web Vitals](#11-performance--core-web-vitals)
12. [Design System & Brand Consistency](#12-design-system--brand-consistency)
13. [Content Strategy & Editorial Standards](#13-content-strategy--editorial-standards)
14. [Tracking & Attribution](#14-tracking--attribution)
15. [Deployment & Caching](#15-deployment--caching)
16. [The Launch Checklist](#16-the-launch-checklist)
17. [Reusable Prompt: Hand This to an AI Builder](#17-reusable-prompt-for-an-ai-builder)

---

## 1. Core Philosophy

Four pillars drive every decision. If a feature does not serve one of these, cut it.

1. **Be findable by humans (SEO).** Rank on page 1 of Google for high-intent local + service keywords.
2. **Be citable by machines (GEO/LLM).** When someone asks ChatGPT "best dental implants near me," your site is the source the model quotes.
3. **Be fast (Core Web Vitals).** Speed is both a ranking factor and a conversion factor.
4. **Convert (CRO).** Traffic is worthless without booked appointments. Every page funnels to one action.

**The golden rule of content:** Write the answer first, in plain language, in the first sentence. Both Google featured snippets and LLMs reward content that answers the question directly and immediately, then elaborates.

---

## 2. Tech Stack & Project Structure

### Recommended stack (proven)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | Server components = fast + SEO-friendly HTML. Built-in Metadata API, image optimization, ISR/SSG. |
| Language | **TypeScript** | Type-safe data models for pages/locations prevent broken content at scale. |
| Styling | **Tailwind CSS 3.4+** | Fast, consistent, small CSS. |
| UI primitives | **Radix UI** (accessible) + custom components | Accessibility out of the box (dialogs, accordions). |
| Animation | **Framer Motion** | Viewport-triggered animations double as lazy-load triggers. |
| Forms | **React Hook Form + Zod** | Validated, typed lead-capture forms. |
| i18n | **next-international** | Type-safe, server-first translations. |
| Monorepo | **Turborepo + Yarn/PNPM workspaces** | Share design tokens + UI across multiple sites. |
| Hosting | **AWS Amplify / Vercel** | SSG/ISR + CDN. |
| Sitemaps | **next-sitemap** (postbuild) | Auto-generated, multilingual-aware. |

### Monorepo structure (so you can run multiple sites off one codebase)

```
/
├── apps/
│   └── <site-name>/            # The Next.js app (one per brand/domain)
│       ├── src/
│       │   ├── app/[locale]/   # All routes, locale-prefixed
│       │   ├── components/     # Page sections, templates, conversion widgets
│       │   ├── data/           # JSON content models (services, cities, regions)
│       │   ├── lib/            # SEO helpers, structured-data, i18n utils
│       │   └── middleware.ts   # Locale + cache + canonical redirects
│       ├── locales/            # en/ es/ ru/ translation files
│       ├── public/             # robots.txt, llms.txt, images, fonts
│       ├── next.config.mjs     # Cache headers, image config, build excludes
│       └── next-sitemap.config.js
├── packages/
│   ├── design-tokens/          # Single source of truth: colors, spacing
│   ├── ui/                     # Shared Radix-based components
│   └── tailwind-config/        # Shared Tailwind preset
└── turbo.json                  # Build pipeline + global env vars
```

**Why a monorepo:** You build the template system, design tokens, and SEO machinery once in `packages/`, then spin up `apps/site-2`, `apps/site-3` that inherit all of it. This is the single biggest multiplier for "apply to any website build."

---

## 3. Information Architecture

The proven sitemap. Organize by **search intent**, not by internal org chart.

```
/                                  Home (brand + primary conversion)
/services/<service>                Service hub + sub-services
/services/<service>/<sub>          Individual procedures/offerings
/<top-level-service>               High-intent standalone service pages
/locations                         Location directory (all areas served)
/locations/<region>                Regional hub (tier 2)
/locations/<state>/<city>          City landing pages (tier 3, the long tail)
/costs-financing                   Pricing hub + sub-pages + calculator
/costs-financing/<service>         Service-specific pricing
/<knowledge-pillar>/<topic>        AI-authority knowledge pages (answer engine fuel)
/blog/<slug>                       Editorial content (ISR)
/providers/<name>                  Team/expert profiles (E-E-A-T)
/about, /contact, /reviews         Trust pages
/api/llms                          Machine-readable data feed for AI
```

### The three content layers

1. **Money pages** (services, costs, locations) — high commercial intent, optimized to convert.
2. **Authority pages** (knowledge pillars, provider bios) — build E-E-A-T and get cited by LLMs.
3. **Editorial** (blog) — capture top-of-funnel questions, internally link down to money pages.

---

## 4. The Page Template System

**The core idea:** Never hand-build pages. Build a handful of **data-driven templates**, then add pages by adding rows of typed JSON/TS data. This is how the reference site scaled to 50+ knowledge pages, 7 service pages, and dozens of city pages without per-page engineering.

### Pattern: Template + Data Model

Each template is a React Server Component that takes one typed prop and renders a full, SEO-complete page.

**A. Service Page Template** (`components/services/ServicePageTemplate.tsx`)
- **Input type:** `ServicePage { hero, sections[], faqs[], schema, internalLinks[], pricingTeaser }`
- **Renders:** Hero (with trust badges) → body sections (HTML) → FAQ → internal-links grid → pricing teaser → final CTA.
- **Emits JSON-LD:** `MedicalProcedure` (**[SWAP]** → `Service`/`Product` for non-medical), `FAQPage`, `MedicalWebPage` (**[SWAP]** → `WebPage`).

**B. Knowledge Page Template** (`components/knowledge/KnowledgePageTemplate.tsx`)
- **Input type:** `KnowledgePage { pillar, introText, sections[], faqs[], relatedLinks[] }`
- **Renders:** breadcrumb hero → content sections → "why choose" → FAQ → related-guides grid.
- **Emits JSON-LD:** `FAQPage`, `WebPage` (with `about: <Service/Procedure>`), `Organization`.

**C. Location Templates** (see Section 5).

### Rules for templates
- Every template ends with a **single primary CTA** (book/call/quote).
- Every template emits **breadcrumbs** + at least one page-type schema + (where relevant) a **FAQPage**.
- Body content is stored as structured sections (heading + HTML), not one blob, so you can inject CTAs, images, and schema between sections.
- Each page declares its own `internalLinks[]` so the linking graph is data-driven, not manual.

### Site-wide reusable sections (rendered on every page, between content and footer)
These boost text-to-HTML ratio and give crawlers + LLMs more to chew on:
- **CredentialsSection** — trust signals (certifications, warranty, awards). **[SWAP]** per industry.
- **QuickFAQ** — 4-6 common questions with `FAQPage` schema.
- **EducationalContent** — multi-topic accordion + a "next step" CTA.

---

## 5. Local SEO: The Location Hub

This is the engine for ranking "service + city" searches ("dental implants Sacramento"). A **three-tier** system generated entirely from two JSON files.

### Data model
- **`data/regions.json`** — high-level areas (e.g., `bay-area`, `sacramento-region`), each mapped to a `primaryClinic`/location.
- **`data/cities.json`** — individual cities with `region` (parent), `landmarks`, `drivingBand` (distance tier), neighborhoods, local provider info.

### The three tiers
1. **Directory** (`/locations`) — lists every area served; links to regions.
2. **Regional hub** (`/locations/[region]`) — dynamic; `generateStaticParams` builds one per region. Emits `LocalBusiness`/`Dentist` schema with `areaServed` = all cities in the region.
3. **City page** (`/locations/<state>/[citySlug]`) — dynamic; the long-tail workhorse. Localized content (landmarks, directions, local providers), Google Map embed, `LocalBusiness` + `FAQPage` + `BreadcrumbList` schema linking back up to region + home.

### Why it works
- One template + a JSON row = a fully optimized city page. Add 50 cities by adding 50 rows.
- Each city page is **genuinely localized** (real landmarks, driving distances, local team) — not thin doorway pages, which Google penalizes.
- Schema `areaServed` + breadcrumbs create a tight internal geo-graph that passes link equity.

**[SWAP] note:** Use real, unique local content per city (landmarks, neighborhoods, directions, local reviews). Duplicated city pages with only the city name swapped will get filtered. The data model forces you to provide unique fields.

---

## 6. Classic SEO Checklist

### Metadata (centralize it)
Build one helper — `generateI18nMetadata({ path, title, description, locale, ogImage, availableLocales })` — and call it from every page's `generateMetadata`. It should automatically produce:
- **Title** ≤ 60 chars, with optional brand suffix (` | Brand`) and an `absoluteTitle` escape hatch for pages that need full control.
- **Description** ≤ 155-160 chars, benefit-driven, with a soft CTA.
- **Canonical** — self-referencing per locale.
- **Hreflang** — only for locales that actually have translated content (`availableLocales`), to avoid Search Console "alternate page" errors.
- **OpenGraph + Twitter** cards, standardized.

### On-page rules
- Exactly **one `<h1>`** per page; logical `h2`/`h3` nesting.
- Descriptive, keyword-aware **alt text** on every image.
- Set **`<html lang>`** server-side per locale.
- **Internal linking** is data-driven (each page declares related links). Aim for every money page to be ≤ 3 clicks from home.
- **Breadcrumbs** on every deep page (visual + schema).

### Technical SEO
- **Sitemap** auto-generated post-build (`next-sitemap`), with per-page priority/frequency:
  - Home `1.0` daily; Services/Offers `0.85` weekly; Locations `0.8` monthly; Legal `0.3` yearly.
  - **Exclude redirected URLs** from the sitemap (must match your redirect rules) — Google flags "sitemap contains redirected URLs."
  - Emit hreflang alternates in the sitemap for multilingual pages; skip them for English-only paths.
- **robots.txt** — allow all crawlers on content; disallow `/api/`, `/admin/`, test routes; reference the sitemap.
- Use **308 canonical redirects** (via middleware) to consolidate duplicate/locale variants of English-only pages onto one URL.

---

## 7. Structured Data / JSON-LD

This is the highest-leverage SEO + LLM tactic. Schema.org markup is what earns rich results in Google **and** is parsed directly by LLMs to understand your business.

### Architecture: one central library + a reusable component
- **`lib/structured-data.ts`** — typed generator functions:
  - `getOrganizationSchema()`, `getLocalBusinessSchema()` / industry variant (e.g., `Dentist`, `Attorney`, `Plumber`)
  - `getServiceSchema()` / `getMedicalProcedureSchema()` **[SWAP]**
  - `getFAQSchema(faqs)`
  - `getBreadcrumbSchema(items)`
  - `getArticleSchema(post)` for blog
  - `getAggregateRatingSchema()` for reviews
- **`components/.../StructuredData.tsx`** — a component that takes `localBusiness`, `faqs`, `breadcrumbs` props and injects the right JSON-LD `<script>` tags.

### Which schema goes where
| Page | Schema types |
|---|---|
| Home | `Organization`, `WebSite`, `LocalBusiness` (+ `areaServed`) |
| Service page | `Service`/`MedicalProcedure`, `FAQPage`, `WebPage` |
| Knowledge page | `WebPage` (`about:` the service), `FAQPage`, `Organization` |
| City/Region | `LocalBusiness`, `FAQPage`, `BreadcrumbList` |
| Offer/Promo | `Offer`, `Service`, `FAQPage` |
| Blog post | `Article`/`BlogPosting`, `BreadcrumbList` |
| Provider bio | `Person` (+ credentials) |

**Rule:** Every page gets at minimum (a) an entity schema (Organization/LocalBusiness/Service) and (b) a `BreadcrumbList`. Pages with Q&A get `FAQPage`. Reviews get `AggregateRating`.

---

## 8. LLM / AI Search Optimization (GEO)

GEO (Generative Engine Optimization) is the new frontier. Goal: when an AI answers a user's question, **your site is the cited source**. Concrete, proven tactics:

### 1. `llms.txt` (public/llms.txt)
A plain-text/markdown summary of the business for AI crawlers — who you are, services, locations, key differentiators, links to the most important pages. Think of it as a "robots.txt for meaning."

### 2. A machine-readable data API: `/api/llms`
An endpoint returning a rich JSON object built for LLM consumption:
- Organization details (name, locations, phone, hours)
- Full **service catalog with pricing**
- **AggregateRating** / review summary
- Latest blog post summaries
LLMs and agents that hit your domain can ingest one clean, structured payload instead of scraping HTML.

### 3. robots.txt allows AI crawlers
Explicitly **do not block** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. (Many sites accidentally block these and become invisible to AI.) Allow them on content; only block `/api/` internals, `/admin`, and test routes.

### 4. Answer-first content structure
- Lead every section with a **direct, quotable answer** in 1-2 sentences, then expand.
- Use **FAQ sections everywhere** with real questions people ask (and `FAQPage` schema). LLMs love clean Q&A pairs.
- Use clear headings phrased as questions ("How much do dental implants cost?").
- State concrete facts: prices, timelines, numbers, credentials. LLMs cite specifics, not fluff.

### 5. AI plugin manifest (optional, forward-looking)
Include an AI plugin manifest so the site is ready for direct AI assistant integration.

### 6. Strong entity markup (ties back to Section 7)
The richer your JSON-LD, the more accurately LLMs represent you. Schema is the bridge between "content on a page" and "facts an AI can state confidently."

---

## 9. Internationalization

Multi-language done right multiplies your indexed pages and reach. Using **next-international**:

- **Structure:** `locales/en/`, `locales/es/`, `locales/ru/`, each with namespaced key files. **Namespace per content domain** (e.g., `services.*`, `gd.*`) to avoid key collisions when merging content from multiple sources.
- **Server-first:** Use `getI18n()` in server components for SEO-friendly static HTML. Use `useI18n()` only in client components.
- **English-only pages:** Maintain an `englishOnlyPrefixes` list for pages you do not translate (blog, some legal). Serve them unprefixed across locales.
- **Middleware:** Issues 308 redirects from `/es/...` or `/ru/...` to the canonical English URL for English-only paths (consolidates link equity). Sets a locale cookie so server functions resolve locale reliably during client navigation.
- **Hreflang:** Only emit alternates for locales that genuinely have the page (see Section 6).
- **Hydration:** Pre-fulfill locale modules to avoid hydration mismatches and suspense flicker on shared components like the footer.

**[SWAP] note:** Pick locales by your actual market. Do not auto-translate everything — half-translated pages hurt more than they help. Translate money pages and high-traffic pages first.

---

## 10. Conversion Rate Optimization

Traffic must convert. Proven components:

- **One primary action per page.** Everything points to book/call/quote.
- **Smart Booking Button** — a context-aware component that opens the right lead form based on the page (e.g., implants vs. general). Uses a shared form context so any button anywhere triggers the modal.
- **Sticky mobile CTA bar** — fixed footer on mobile (Call Now + Schedule) that appears after the user scrolls past the hero. Mobile is where most local-service traffic converts.
- **Interactive cost calculator** — a multi-step estimator (service type, options, materials) that both engages users and captures lead intent. Great for "how much does X cost" intent.
- **Partial/abandoned form capture** — send partial form data to your CRM + analytics so no lead is fully lost.
- **Pricing teasers** — a gradient banner before the final CTA on every service page, deep-linking to the matching pricing page.
- **Trust everywhere** — credentials, reviews, warranties, before/after galleries, real patient stories. Trust is the #1 conversion lever for high-consideration services.

---

## 11. Performance / Core Web Vitals

Fast sites rank higher and convert more. Concrete techniques:

- **SSG by default, ISR for dynamic.** Pre-render all pages at build time (`generateStaticParams`). Use ISR (`dynamicParams = true`) for blog/content that changes without a rebuild. Pre-render the primary language fully; ISR secondary languages.
- **Viewport lazy loading.** Wrap below-the-fold sections in a `ViewportSection` (IntersectionObserver / Framer `whileInView`) so their JS/rendering only kicks in when scrolled near.
- **Dynamic imports for non-critical client code.** Load tracking, chatbots, consent banners, sticky CTAs via `dynamic(() => import(...), { ssr: false })` to shrink the initial bundle.
- **Hero image preloading.** Use Next `<Image>` with `priority` + modern formats (WebP/AVIF) + correct `sizes`. The hero is your LCP element — optimize it above all.
- **`content-visibility: auto`** on off-screen sections (a `.lazy-section` utility with `contain-intrinsic-size`) so the browser skips rendering them until needed.
- **INP/responsiveness:** passive scroll listeners, `startTransition` for non-urgent state updates.
- **Defer analytics** so tracking never blocks interaction.

**Target:** LCP < 2.5s, CLS < 0.1, INP < 200ms, on mobile.

---

## 12. Design System & Brand Consistency

- **Central design tokens** (`packages/design-tokens`) — one source of truth for colors, gradients, spacing. Map tokens → Tailwind via a small `lib/colors.ts` and CSS variables in `globals.css`.
- **Pick a tight palette:** one primary brand color, a supporting accent, neutrals. Define gradient presets for hero and CTA so they are reused, not reinvented.
- **Consistent interactive styling** — buttons, links, and CTAs use the same token-driven classes site-wide (e.g., `tw.gradient.cta`).
- **Imagery rule:** Use real, professional photography of real people/work. **Avoid generic stock and AI-generated images** for trust-critical service businesses — authenticity converts and builds E-E-A-T. (If the owner supplies their own photos, those override this default.)
- **Accessibility:** Radix primitives for dialogs/accordions; focus traps, escape-to-close, ARIA labels, keyboard nav. Accessible sites are also more crawlable.

---

## 13. Content Strategy & Editorial Standards

- **Topic clusters:** Group knowledge pages into a few **pillars** (e.g., procedure types, costs, recovery, candidacy). Each pillar interlinks; the hub links to all spokes.
- **Answer-first writing** (see Section 8). First sentence answers the headline.
- **Concrete specifics:** prices, timelines, success rates, credentials. Vague pages neither rank nor get cited.
- **E-E-A-T:** Real provider bios with credentials, author attribution on blog posts, citations, real reviews. For YMYL (medical/legal/finance) topics, this is non-negotiable.
- **Blog as a funnel:** target top-of-funnel questions, then internally link down to the relevant service/cost/location page.
- **Plain language:** write for a normal reader, short sentences. This serves both humans and LLMs.

---

## 14. Tracking & Attribution

- **Server-side tagging (sGTM)** for resilient, ad-blocker-proof analytics.
- **CRM integration** (e.g., Salesforce/HubSpot) — push every lead, including partial form submissions, with source attribution.
- **Defer all tracking scripts** so they never hurt Core Web Vitals.
- **Consent banner** for privacy compliance, loaded as a deferred client component.
- Track the funnel: page view → CTA click → form open → partial fill → submit → booked.

---

## 15. Deployment & Caching

- **Build:** `turbo run build --filter=<app>`; postbuild generates the sitemap.
- **Cache headers (gate on `NODE_ENV === 'production'`):**
  - Static assets (`/_next/static`, `/images`, `/fonts`): `public, max-age=31536000, immutable`.
  - HTML pages: `s-maxage=3600, stale-while-revalidate=86400` (CDN caches an hour, serves stale up to a day while revalidating).
  - Frequently-changing routes (e.g., `/blog/*`): shorter `s-maxage=300`.
- **Dev cache safety:** In development, force `no-store, must-revalidate` on everything and send `Clear-Site-Data: "cache"` **once per session**. Without this, the `immutable` production directive strands old JS chunks in the browser and your code changes appear not to take effect. **Keep these dev guards.**
- **Lambda/artifact size:** If deploying to serverless (Amplify/Vercel), use `outputFileTracingExcludes` in `next.config.mjs` to strip unused platform binaries and stay under size caps.

---

## 16. The Launch Checklist

Before going live, verify every item:

**SEO foundations**
- [ ] Unique `<title>` (≤60 chars) and meta description (≤160) on every page
- [ ] One `<h1>` per page; clean heading hierarchy
- [ ] Canonical URL on every page (self-referencing)
- [ ] Hreflang only for locales that have the page
- [ ] `robots.txt` allows content + AI crawlers, blocks internals, references sitemap
- [ ] Sitemap generated, excludes redirected URLs, includes all live pages
- [ ] All images have descriptive alt text + modern formats
- [ ] Breadcrumbs (visual + schema) on deep pages

**Structured data**
- [ ] Organization + LocalBusiness on home
- [ ] Service/Procedure + FAQPage on service pages
- [ ] LocalBusiness + Breadcrumb on every city/region page
- [ ] Article schema on blog posts
- [ ] AggregateRating on review content
- [ ] Validate everything in Google Rich Results Test

**LLM/GEO**
- [ ] `llms.txt` present and accurate
- [ ] `/api/llms` returns clean structured JSON
- [ ] AI crawlers not blocked
- [ ] Content is answer-first; FAQs everywhere

**Local SEO**
- [ ] Each city page has genuinely unique local content
- [ ] NAP (name/address/phone) consistent across site + schema
- [ ] Google Business Profile linked/embedded map

**Performance**
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms (mobile, field data)
- [ ] Hero image preloaded; below-fold lazy-loaded
- [ ] Analytics/chat deferred

**Conversion**
- [ ] Single clear CTA per page
- [ ] Sticky mobile CTA works
- [ ] Forms validated; leads + partials reach CRM
- [ ] Phone numbers click-to-call on mobile

**i18n (if multilingual)**
- [ ] Money pages translated; English-only pages handled via prefix list + redirects
- [ ] `<html lang>` correct per locale

---

## 17. Reusable Prompt for an AI Builder

Copy-paste this to an AI agent to bootstrap a new site using this playbook. Fill in the **[BRACKETS]**.

> Build a top-ranking, LLM-optimized service website for **[BUSINESS TYPE]** named **[BRAND]**, serving **[CITIES/REGIONS]** in **[LANGUAGES]**.
>
> Use Next.js 14 (App Router) + TypeScript + Tailwind + Radix + Framer Motion + next-international, in a Turborepo monorepo with shared `design-tokens`, `ui`, and `tailwind-config` packages.
>
> Implement, in this order:
> 1. **Data-driven page templates**: a ServicePageTemplate and a KnowledgePageTemplate that each take one typed prop and emit full SEO-complete pages (hero → sections → FAQ → internal links → CTA) with JSON-LD (`Service`, `FAQPage`, `WebPage`).
> 2. **A 3-tier location hub** generated from `regions.json` + `cities.json`: `/locations` directory → `/locations/[region]` → `/locations/[state]/[city]`, each with unique local content and `LocalBusiness` + `BreadcrumbList` + `FAQPage` schema.
> 3. **Centralized SEO**: a `generateMetadata` helper (title ≤60, desc ≤160, canonical, conditional hreflang, OG/Twitter) and a `lib/structured-data.ts` schema library + `StructuredData` component.
> 4. **LLM/GEO layer**: `public/llms.txt`, a `/api/llms` JSON endpoint (org + service catalog with pricing + ratings + latest posts), and a `robots.txt` that allows AI crawlers and references the sitemap.
> 5. **Conversion components**: context-aware BookingButton + modal, sticky mobile CTA, interactive cost calculator, pricing teasers, partial-form capture to **[CRM]**.
> 6. **Site-wide trust sections** (Credentials, QuickFAQ, EducationalContent) rendered on every page for text-to-HTML ratio and FAQ schema.
> 7. **Performance**: SSG + ISR, viewport lazy-loading via IntersectionObserver, dynamic imports for tracking/chat, preloaded hero image (WebP/AVIF), `content-visibility:auto`, deferred analytics. Target LCP<2.5s, CLS<0.1, INP<200ms.
> 8. **Caching**: production `immutable` static assets + `s-maxage` HTML, gated on `NODE_ENV==='production'`; dev `no-store` + once-per-session `Clear-Site-Data`.
> 9. **next-sitemap** postbuild excluding redirected URLs, with per-page priority/frequency.
>
> Content rules: answer-first writing, FAQs with schema on every page, concrete specifics (prices/timelines/credentials), real photography, strong E-E-A-T (provider bios, authorship). One primary CTA per page. Verify all schema in Google Rich Results Test and complete the launch checklist before shipping.

---

*This playbook is a living document. As search engines and AI answer engines evolve, revisit Sections 7 and 8 most often — structured data and GEO are where the fastest changes happen.*
