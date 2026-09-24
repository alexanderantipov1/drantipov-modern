# SEO research notes

**Status:** complete
**Research date:** 2026-09-24 UTC
**Depth:** deep, primary-document review; performed by the delegated research worker without spawning additional workers.

## Plan
- Question: Which attached audit recommendations remain valid, safe, and actionable for the current shared EN/RU Next.js site?
- Scope: read-only public requests, supplied PDFs, workspace inspection; no app changes, production mutations, account access, or clinical/legal sign-off.
- Deliverable: `research/seo-remediation.md`, original 1–21 and revised P0–P2 issue matrices, source evidence and limitations.
- Five workstreams: multilingual/indexation; metadata/schema; performance/framework; consent/conversions; keyword/business review.

## Coverage checklist
- [x] Extract all three current PDFs, preserve original audit numbering.
- [x] Fetch public supporting spreadsheets/documents or record access failures.
- [x] Compare source HTML samples with workspace and date historical claims.
- [x] Check official Google, Next.js, web.dev, schema and consent sources.
- [x] Distinguish rejected recommendations from safe implementation.
- [x] Identify business/clinical approval gates without inventing confirmations.
- [x] Specify release evidence still needed.

## Initial observations
- Runtime reports Next.js 16.2.3; manifest allows ^16.2.2. Current online docs can describe newer minors.
- Original audit is labeled August 2026; historical crawl counts are not a fresh baseline.
- Root layout initially hard-codes English and mounts a client language setter.
- Both app sitemap and postbuild next-sitemap configuration exist; latter defaults to non-www.
- Keyword PDF is a wide exported table split horizontally across PDF pages; rows must not be joined merely by text proximity.

## Cross-checked findings
- All 15 linked sheet exports and both Google document exports accessible, saved with fetch metadata.
- 26 official documentation fetches saved. Google FAQ rich-result retirement May 7, 2026 independently checked against official changelog.
- Public HSTS exists: original missing-header claim stale; membership/safety unconfirmed.
- Loomis now has title, H1 and description: three missing-element sheets stale for their sole URL.
- Duplicate-H1 export concerns two language pages, not multiple H1s within one page.
- Broken-link export is external YouTube 404 and Udemy 403, not internal 404 inventory.
- EN/RU homepage and full-arch reciprocal failures reproduced; RU samples initially lang=en.
- EN smile-gallery and RU Roseville own sitemap loc entries absent in sampled XML.
- Clinical/business/legal review and all external acceptance checks explicitly unconfirmed.

## Quality review
- Local report evidence links checked: no missing targets.
- Research collection scripts passed Node syntax checks.
- No app/server execution, deployment, account mutation or live form submission.
- Working tree changes by other agents are excluded from research ownership; baseline snapshot preserved from HEAD.
- Source registry records access/publication provenance; historical Google meta-keywords statement explicitly flagged old.
- Report distinguishes source-specific official guidance from historical contractor counts and sampled observations.