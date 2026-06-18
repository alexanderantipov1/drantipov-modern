---
name: Next.js metadata title template duplication
description: Per-page titles that include the brand suffix get doubled by the root layout's title.template.
---

When the root `layout.tsx` sets `metadata.title.template = "%s | Dr. Antipov, Roseville CA"`, any child page that returns a plain string `title` has the template applied. If that page's title (e.g. an SEO `metaTitle`) ALREADY ends with the same brand suffix, the result is duplicated: `... | Dr. Antipov, Roseville CA | Dr. Antipov, Roseville CA`.

**Why:** Next.js App Router applies the nearest ancestor `title.template` to any string title returned by `generateMetadata`/`metadata`. It does not dedupe.

**How to apply:** When a page already provides a fully-formed title (brand suffix included), return `title: { absolute: theTitle }` to bypass the template. Reserve the plain-string form (which gets the template) for short titles that intentionally rely on the layout to append the brand.
