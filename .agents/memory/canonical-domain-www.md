---
name: Canonical domain is www.drantipov.com
description: Production serves www and 307-redirects the bare domain; all absolute URLs in code must use www
---

# Production canonical domain is https://www.drantipov.com

On the live Vercel deployment, the bare apex domain redirects to www:
- `https://drantipov.com` → 307 → `https://www.drantipov.com/`
- `https://www.drantipov.com` → 200 (this is the served origin)

**Why:** Semrush flagged "Hreflang redirect" on every page because the code's
`metadataBase`, `siteConfig.url`, canonical, hreflang, sitemap, robots, and
JSON-LD all used the bare `https://drantipov.com`, which 307-redirects. hreflang/
canonical targets must return 200, so they must point at the www origin.

**How to apply:**
- All absolute URLs in code use `https://www.drantipov.com` (no bare-domain).
  Key sources: `siteConfig.url` (sitemap + og + api/llms read this),
  `metadataBase` in `src/app/layout.tsx` (resolves all relative canonical/
  hreflang), `robots.ts` sitemap line, `JsonLd.tsx` @id/url, and `public/llms.txt`.
- `NEXT_PUBLIC_SITE_URL` overrides `siteConfig.url`; it is NOT set, so the www
  default applies in dev and prod.
- If the user ever wants the bare domain as canonical instead, they must flip the
  Vercel primary domain so www → non-www, AND the code defaults must flip to
  non-www in lockstep. Keep code and the Vercel redirect direction consistent.
- The apex→www redirect is a 307 (temporary) managed by Vercel, not by code/
  next.config; can't change its status from the repo.
