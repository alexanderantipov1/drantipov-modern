---
name: Next.js metadata alternates inheritance leak
description: Why a layout-level canonical silently breaks self-referencing canonical/hreflang on child pages
---

# Next.js metadata `alternates` is shallow-replaced, not deep-merged

A `canonical` (and `languages`/hreflang) set in a root `layout.tsx` `metadata`
export is INHERITED by every child page that does NOT export its own
`alternates`. The child does not get a per-path value — it gets the layout's
literal value. So a layout with `alternates: { canonical: "/" }` makes every
non-overriding page canonicalize to the HOMEPAGE, and emit homepage hreflang.

Child-level merge is shallow at the `alternates` key: if a page sets
`alternates: { canonical: "/x" }` with no `languages`, it gets canonical=/x and
NO hreflang (the parent's `languages` is NOT merged in). It's all-or-nothing per
the `alternates` object.

**Why:** This caused an SEO audit to flag "No self-referencing hreflang" on
every URL — case detail pages, listings, and media pages had no own `alternates`
and inherited the homepage canonical/hreflang.

**How to apply:**
- Do NOT put a hardcoded `canonical`/`languages` in the root layout (the layout
  can't know each page's path). The homepage route sets its own.
- Every page/route that should be indexed must set its own self-referencing
  `alternates: { canonical: path, languages: { en: path, "x-default": path } }`.
  For dynamic routes, set it inside `generateMetadata` using the params.
- The site is EN-only: en + x-default both point to the page's own path.
- Verify by curling the rendered HTML and grepping `<link rel="canonical"` and
  `hrefLang=` — each must point to the page's OWN url, not the homepage.
