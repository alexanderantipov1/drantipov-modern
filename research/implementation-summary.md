# SEO research and implementation summary

Date: 24 September 2026

## Status

Implemented the supported technical remediation in the workspace and verified its production build. The public site has not been deployed or changed by this work. This is not a claim that every audit recommendation, clinical statement, legal requirement, or external integration has been approved.

## Research

Reviewed all three supplied PDFs, 15 linked spreadsheet exports, two supporting documents, 26 official documentation fetches, and 12 public-site GET samples. Evidence, original audit items 1–21, revised priority mapping, rejected recommendations, and keyword review are in `research/seo-remediation.md` and `research/sources/`.

Several original findings were stale or overgeneralized: production already supplied HSTS; the reported Loomis missing metadata was present; duplicate heading reports did not establish multiple H1 elements; broken-link evidence largely concerned external destinations. No blanket nofollow, image endpoint rewrite, arbitrary metadata limits, or HSTS preload submission was performed.

## Implemented

- Static, server-rendered English and Russian document languages using separate locale roots. Public URLs retained; EN source files moved under a URL-transparent route group.
- Central canonical/translation registry: 354 indexable URLs, 150 reciprocal translation pairs, no invented alternates for unpaired content.
- Unified dynamic sitemap, www canonicals, language-specific Open Graph metadata, preserved calculator noindex and excluded diagnostic pages.
- Removed competing static sitemap/robots generation.
- Corrected shared page/entity identities and patient-education article types. Removed unsupported aggregate rating markup in identified components/pages.
- Validated 43 legacy article graphs and 244 visible FAQ answers; omitted hidden FAQ markup where no visible section existed.
- Localized identified RU template controls, breadcrumbs, related articles, form errors, footer/gallery/review labels. Original English patient reviews are retained and labelled, not silently translated.
- Consent-aware analytics loading, rejection persistence and withdrawal controls. Tracking identifiers/event names preserved.
- Form delivery failures now report failure rather than false success. Preserved integration endpoints, phone normalization and reCAPTCHA behavior.
- Reduced mobile hero source weight, prevented RU mobile desktop-video discovery, corrected selected responsive image sizes and audit-evidenced obsolete links.
- Localized unmatched EN/RU 404 responses with genuine HTTP 404 and noindex.
- Added `npm run test:seo` and `npm run test:seo:runtime`.

## Verification

- Final `npm run build`: passed.
- Final `npm run test:seo`: 16 tests passed.
- Final `npm run test:seo:runtime`: four desktop/mobile HTTP 404 tests passed.
- HTTP crawl of all 354 sitemap entries against the production-build preview: 354 passed status, source language, self-canonical and indexability checks. Results: `research/runtime-verification.json`. Later changes addressed unmatched 404s and localized breadcrumb/related-card UI, with targeted verification.
- Representative EN/RU home, service, article, city and contact pages returned 200 with expected metadata; sampled JSON-LD parsed.
- RU homepage/contact screenshots checked. Final contact breadcrumb is Russian and links to `/ru`; final screenshot had no browser errors.
- Workflow running cleanly with `npm run start`, serving the built release. Future source edits require rebuilding or switching the existing workflow back to development mode.

The first broad crawl of the development server was interrupted when it became unavailable. The complete 354-URL check was subsequently performed successfully against the production build.

## Remaining release gates and limitations

1. **External conversions:** mocked delivery tests passed; no real patient/test leads were sent. Authorized end-to-end CRM/inbox receipt must be checked for each EN/RU submission path.
2. **Analytics:** private GTM container contents were unavailable. Direct GA versus GTM duplicate-event ownership and actual browser consent/network behavior need a dedicated integration test. Consent changes may reduce recorded visits because rejected/unset users are no longer tracked.
3. **Production:** deploy through the existing production process, then verify cache/CDN behavior, GSC live inspection, sitemap processing, published redirects and post-release conversions. Workspace checks do not establish deployed parity.
4. **Performance:** asset-level improvements are measured; field Core Web Vitals require deployed data. No green-score or ranking guarantee.
5. **Clinical/business:** practice confirmation is still required for specific TMJ interventions, All-on-5 positioning, repair scope, cosmetic services, anesthesia, free CT/consultation eligibility, financing partners and insurer participation. No new service/location pages or offers were invented.
6. **Privacy and reviews:** legal policy requirements and authoritative review counts require owner approval. Existing original-only reviews were preserved instead of fabricating translated reviews or totals.
7. **Scope:** this was not a word-by-word medical review or full translation of all historic articles. Existing marketing/clinical prose and all live business claims still require appropriate review.
8. **Error pages:** unmatched URLs now have deterministic language; invalid IDs inside already-matched dynamic routes can still use Next's generic error handling and need a separate comprehensive negative-route test.
9. **Automation:** regression commands are available, but no external CI pipeline was configured in this release.

## Detailed implementation reports

- `research/foundation-results.md`
- `research/trust-results.md`
- `research/conversion-results.md`
- `research/quality-results.md`

These record individual changes, evidence, tests and limitations. Keep the prior deployed version available until post-release acceptance is complete.