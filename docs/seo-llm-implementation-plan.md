# Dr. Antipov — SEO + LLM Playbook Implementation Plan

> Status: **PLAN ONLY — nothing built yet.** This maps the Service Website Playbook
> onto the existing drantipov.com codebase, scoped to your decisions. Review and
> approve (or edit) before any code is written.

## Your decisions (locked into this plan)
- **Single site** — no Turborepo monorepo, no shared packages.
- **English-only** — no i18n/locale routing (RU/ES stay removed).
- **Locations:** restructure to `/locations/[state]/[city]` **and keep the current
  `/locations/[city]` URLs alive** (via permanent redirects to the new URL).
- **No pricing emphasis** — keep the education / personal-brand tone. No published
  price catalog, no prices in the AI feed. (Existing `/all-on-4-cost` page and the
  calculator stay as-is; we won't add hard numbers.)
- **Service content sourced from** `docs/dr-antipov-basic-info.md` (the knowledge doc).
- This document is the deliverable; implementation happens only after you approve.

## What already exists (we will NOT rebuild)
- Stack matches the playbook: Next.js App Router + TS + Tailwind + Radix + Framer + RHF/Zod.
- Central JSON-LD library `src/lib/structured-data.ts` (Organization, Person, MedicalProcedure, FAQPage, BreadcrumbList, Review, AggregateRating, VideoObject, Course, Event).
- Data-driven templates + models: `src/constants/cases.ts` + `caseArticles/`, `cities.ts`, `services.ts`, `data/fullArchLanding.ts`.
- `src/app/robots.ts` already allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended; `public/llms.txt` exists; `src/app/sitemap.ts` is dynamic.
- Knowledge pages (`/for-patients/insights/*`), provider page (`/our-team`), money/landing pages, multi-step consultation form → Salesforce CRM, cost calculator, before/after trust content, production cache headers in `next.config.mjs`.

This is why the work below is **additive enhancement**, not a rebuild.

---

## Phase 1 — Service content expansion from the knowledge doc

**Goal:** every service Dr. Antipov actually offers (per `dr-antipov-basic-info.md`)
has a findable, answer-first, schema-complete page — grounded only in documented facts.

### 1a. Current coverage vs. the knowledge doc
Existing `/expertise/*` pages: `full-arch-implants`, `single-tooth`, `bone-grafting`,
`jaw-surgery`, `sleep-apnea`, `tmj`, `wisdom-teeth`, `mole-removal`.

Services named in the knowledge doc that have **no dedicated page yet** (candidates):
| Proposed page | Grounded in doc section | Notes |
|---|---|---|
| `/expertise/tooth-extractions` | Core oral surgery (surgical extractions, impacted molars & canines) | Distinct from wisdom-teeth; covers exposed-canine surgery for ortho referrals |
| `/expertise/sedation-anesthesia` | Sedation & Anesthesia (oral, nitrous, IV/general) | High-intent "sedation dentistry" + anchors the GA permit credential |
| `/expertise/zygomatic-implants` | Dental Implants (zygomatic, pterygoid) | Promote the existing insight into a service page; add pterygoid |
| `/expertise/implant-rescue` | Dental Implants (failed/redo cases incl. overseas) | "failed dental implant repair", strong differentiator |
| `/expertise/snap-on-dentures` | Other Services (overdentures on 2–4 implants) | "snap-on dentures", "implant-supported dentures" |
| `/expertise/facial-cosmetic` | Other Services (Botox, fillers, lip augmentation) | Pairs with existing facial-cosmetic-surgery cases |
| `/expertise/oral-pathology` | Bone Grafting & Reconstructive (biopsies / diagnosing pathology) | "oral biopsy", "oral pathology Roseville" |

> All page bodies will be written answer-first and grounded strictly in the knowledge
> doc + general medical explanation of the named procedures — **no invented stats,
> prices, or outcomes**, consistent with how the case articles were written.

### 1b. Unify the service data model
Today `services.ts` models only 5 services; the other 3 expertise pages are hand-built —
inconsistent. **Proposal (flagged as structural — needs your OK):** extend `services.ts`
into a single typed `ServicePage` model (hero, sections[], procedures[], faqs[],
relatedLinks[], schema inputs) and render all `/expertise/*` pages from one
`ServicePageTemplate`. New services then = new data rows, matching the playbook's
"build once, scale infinitely" pattern.
- *Lower-risk alternative:* leave existing pages untouched and only add the new
  service pages using the template. I recommend this first; consolidate later.

### 1c. Per-service schema
Each service page emits `MedicalProcedure` + `FAQPage` + `BreadcrumbList` (generators
already exist in `structured-data.ts`). Add `getServiceWebPageSchema()` if we want the
playbook's `MedicalWebPage`/`WebPage` `about:` wrapper.

---

## Phase 2 — Location 3-tier restructure (old URLs kept alive)

**Goal:** SEO-standard geo hierarchy, no broken links, no duplicate-content penalty.

### Target structure
```
/locations                      directory (exists) — link to state hub + all cities
/locations/[state]              NEW state/regional hub (e.g. /locations/ca)
/locations/[state]/[city]       NEW city pages (e.g. /locations/ca/sacramento)
/locations/[city]               OLD — 308 permanent redirect → /locations/[state]/[city]
```
- `cities.ts` already has `state` ("CA") and `region` ("Sacramento Metro"); the state hub
  groups cities by `region` for internal-link density.
- New files: `src/app/locations/[state]/page.tsx` (hub) and
  `src/app/locations/[state]/[city]/page.tsx` (move/adapt the current city template).
- Both use `generateStaticParams` for full SSG.

### Keeping old URLs alive (your requirement)
- Add generated **308 redirects** in `next.config.mjs` `redirects()` — one per city slug,
  `/locations/{slug}` → `/locations/ca/{slug}` (import `cities` so it stays in sync).
- 308 = "alive, not broken" **and** consolidates ranking signal onto the new canonical URL.
  (Serving the same content at both URLs would create duplicates Google penalizes, so a
  redirect is the correct way to "keep them alive.")
- **Confirm:** is a 308 redirect acceptable as "alive"? If you instead want the old URL to
  keep rendering (200) with a `<link rel=canonical>` to the new one, I can do that — but
  redirect is the SEO-safe default. *(This is the one interpretation I want to verify.)*

### Schema + sitemap
- City pages: `getCityLocalBusinessSchema` (already fixed) + `FAQPage` + `BreadcrumbList`
  pointing Home → Locations → State → City.
- State hub: `LocalBusiness`/`MedicalBusiness` with `areaServed` = all cities in state.
- `sitemap.ts`: emit new `/locations/ca` + `/locations/ca/[city]` URLs and **exclude the
  old redirected `/locations/[city]` URLs** (playbook rule: no redirected URLs in sitemap).

---

## Phase 3 — Centralized metadata helper
- New `src/lib/seo.ts` → `buildMetadata({ path, title, description, ogImage, absoluteTitle })`
  returning Next `Metadata` with: title (≤60, optional brand suffix), description (≤160),
  self-canonical, OpenGraph + Twitter, EN-only hreflang (`en` + `x-default`).
- Refactor pages to call it from `generateMetadata`. Incremental, behind-the-scenes — **no
  URL or visual change**. Eliminates the copy-pasted metadata blocks across pages.

## Phase 4 — `/api/llms` machine-readable feed
- New `src/app/api/llms/route.ts` returning clean JSON for AI agents: organization +
  both providers w/ credentials, **service catalog (names + descriptions, NO prices)**,
  locations served, `AggregateRating` summary, latest insight summaries.
- **robots.ts change:** `/api/` is currently fully disallowed — add an explicit `allow`
  for `/api/llms` (keep the rest of `/api/` blocked).
- Refresh `public/llms.txt` to reference the new endpoint and the new service pages.

## Phase 5 — Schema, FAQ & answer-first enrichment
- Audit every service + insight page; add `FAQPage` schema where missing (Q&A blocks
  already render on several pages but don't all emit schema).
- Add an answer-first 1–2 sentence lead to each section heading (playbook's golden rule);
  phrase key H2s as questions where natural ("How does sedation dentistry work?").
- Confirm one `<h1>` per page and breadcrumb schema on every deep page.
- Validate all schema in Google Rich Results Test before shipping.

## Phase 6 — KnowledgePageTemplate consolidation *(optional, structural — needs OK)*
- The 7 `/for-patients/insights/*` pages are hand-built. Optionally convert to a
  data-driven `KnowledgePageTemplate` + a `knowledgeArticles` model (same URLs, same
  look), so new authority pages = new data rows. Recommend deferring until after Phases 1–5.

---

## Explicitly OUT of scope (per your answers)
- Monorepo / Turborepo / shared `design-tokens` packages.
- i18n / locale routing / `next-international` / middleware.
- Published price catalog, per-service pricing pages, prices in `/api/llms`.
- Any redesign of the existing visual system or hero/section layouts.

## Risks & mitigations
- **Location URL change** → mitigated by 308 redirects + sitemap exclusion + updated
  internal links; submit new URLs in Search Console after deploy.
- **Service model unification (1b)** touches existing pages → start with the lower-risk
  additive path (new pages only) and consolidate in a later pass.
- **Content grounding** → all new copy restricted to the knowledge doc + general medical
  explanation, same discipline used for the case articles (no invented facts).
- **Deploy** is on Vercel and pushed by you; each phase ends with `tsc`/build verification
  here, then you publish.

## Suggested sequencing
1. **Phase 3** (metadata helper) + **Phase 4** (`/api/llms` + robots) — fast, fully additive, zero URL risk.
2. **Phase 1** new service pages from the knowledge doc (additive path first).
3. **Phase 2** location restructure + redirects.
4. **Phase 5** schema/FAQ/answer-first pass across old + new pages.
5. **Phase 1b / Phase 6** template consolidation (only if you want it).

---

### Open question before I build anything
1. Location URLs: is a **308 redirect** from the old `/locations/[city]` to the new
   `/locations/[state]/[city]` acceptable as "keeping them alive," or do you want the old
   URL to keep rendering (200) with a canonical tag instead?
2. Service model: start **additive** (new pages only, leave the 8 existing pages alone),
   or unify all `/expertise/*` onto one template now?
3. Which phase should I start with once approved?
