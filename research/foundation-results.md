# Multilingual SEO foundation results

## Implemented

- Separate App Router roots: `src/app/(en)/layout.tsx` emits static `lang="en"`; `src/app/ru/layout.tsx` emits static `lang="ru"` through `SiteDocument`. EN files moved beneath a URL-transparent `(en)` group; RU paths and all public URLs stay unchanged. No middleware, request headers, cookies, dynamic flags, or cache-vary behavior introduced. Existing generateStaticParams functions are unchanged.
- Shared document no longer mounts HtmlLangSetter, suppresses language hydration differences, or includes the unconditional GTM noscript iframe. Consent-gated JS tracking stays owned by the conversion worker.
- TypeScript-AST-based one-time migration wraps **263 page metadata exports/generators** with `finalizeMetadata`. It does not rewrite clinical copy, JSX, schema payloads, titles, descriptions, image choices, or route slugs. Unknown dynamic case IDs retain not-found behavior rather than throwing a metadata error.
- `seo-route-inventory.json` records **252 existing indexable static routes**. Existing cities/state/case data expands the registry to **354 routes**, including previously omitted RU dynamic pages. **150 actual matching translation pairs** share reciprocal generic en/ru links and English x-default. **54 unpaired routes** get a self canonical without invented language targets. All URLs use https://www.drantipov.com.
- Page-boundary finalization overrides historical asymmetric alternates, sets page-specific OG URL/locale and title/description fallbacks, preserves authored social imagery/text, and omits obsolete keywords from generated metadata. The shared metadata builder now consults the same alternates helper.
- Existing calculator noindex is retained and kept out of the registry; inherited Googlebot directives are explicitly noindex too. The reCAPTCHA diagnostic now explicitly noindexes via a layout and remains excluded. No consultation or advertising landing page was newly deindexed.
- Dynamic `src/app/sitemap.ts` is now the single producer using the same registry/alternates as pages. Removed conflicting public sitemap/robots artifacts, obsolete next-sitemap config, and the postbuild command that recreated them. Runtime robots.ts remains unchanged. No fabricated last-modified dates.

## Evidence / checks

- `node --test scripts/foundation-regression.cjs`: **7/7 passing**. Covers exact static inventory coverage, reciprocal canonical/hreflang on every pair, no unrelated fallbacks, existing dynamic entries only, sitemap uniqueness/no diagnostics/shadow artifacts, noindex/social metadata, static roots and absence of unconditional iframe/client lang mutation, and syntax parsing for all pages.
- TypeScript source-only semantic check via the installed compiler API: **0 diagnostics**, with the repository compiler options. Normal `tsc --noEmit` initially encountered stale `.next/dev/types/validator.ts` imports for moved files; no generated cache was deleted and no workflow restarted. Main agent should regenerate Next route types during its normal validation.
- A diagnostic counting snippet initially omitted the transpiler target, producing invalid ES3 iteration counts; rerun with the application ES2022 target confirmed 354 routes / 150 pairs / 252 static / 54 unpaired.
- No full build, server start/restart, live form submission, or production crawl performed by this worker.

## Migration / maintenance

Source scanners must strip parenthesized route-group segments when deriving URLs (`src/app/(en)/about/page.tsx` is still `/about`). Scripts with hardcoded `src/app/for-patients/...` or similar EN file paths must point to `(en)`. RU paths, API paths, sitemap.ts, robots.ts, globals.css, and manifest.ts remain at their prior locations. The regression test demonstrates the group-aware route scanner.

Adding/removing a real static page requires updating the inventory; the exact-coverage test fails when it drifts. Same-path translated siblings are admitted only when both inventory entries exist. A different-slug translation needs an explicit mapping enhancement, not a homepage fallback. Dynamic city/case entries derive only from existing content constants; this work authorizes no additional city content.

`scripts/migrate-seo-foundation.cjs` is a one-time, guarded migration artifact, **not** a build script; it refuses to run on the migrated tree. Cross-language navigation between independent roots performs a full document load, as documented by Next. This is intentional and preserves language determinism without turning static routes dynamic.

## Release gates / unresolved scope

The main agent still must verify the already-running preview and final deployment: root-layout route discovery, raw HTML language and metadata for EN/RU home/service/article/state/city/case pages, invalid URLs, full-document locale switching, desktop/mobile and cookie/cache variants, sitemap HTTP 200/no static shadow, robots, consent and form smoke tests. Every sitemap/hreflang target must be checked for actual nonredirecting 200 and matching canonical after deployment; source presence is not a production crawl.

No new clinical claims, HSTS preload, arbitrary route deletion, or unapproved city pages. Structured-data repair, localized component copy/reviews, analytics JS/forms, performance, editorial title/description improvements, and internal-link remediation remain with their respective workers/owners.

## Final QA follow-up: unmatched URLs

Main-agent QA found that unmatched URLs bypassed both locale roots and used the generic Next 404. Added non-optional `[...unmatched]` pages beneath `(en)` and `ru`; each synchronously calls Next `notFound()` to select its locale root and existing not-found UI without redirecting or returning a normal page. Both explicitly noindex (including Googlebot) and clear alternates. They have no generateStaticParams and are not admitted to the sitemap/translation inventory. Specific existing routes retain priority over the catchalls.

The RU not-found UI was localized by the other worker; this follow-up also localizes its metadata and reinforces noindex on both not-found boundaries.

Added offline assertions for both catchall modules: delegation to notFound via a mocked 404 signal, explicit noindex/no alternates, existing locale boundaries, and exclusion of unmatched URLs from the registry. These do not replace HTTP status checks after deployment.

`npm run test:seo` now runs foundation, conversion, and trust/schema regression scripts together: **16/16 passing**, including the new fallback test.

## Runtime correction: Next 16 error document

The preceding catchall-page solution **did not fix raw HTML**. Production HTTP reproduction showed a 404 with localized metadata but `<html id="__next_error__">` and no language. The offline notFound mock was insufficient evidence and is superseded. Inspection of installed Next 16.2.3 `server/app-render/app-render.js` found `getErrorRSCPayload` explicitly constructing this generic error document. Root locale boundaries do not reliably determine the initial error shell on that path.

Replaced catchall **pages** with terminal catchall **route handlers**. They return real `Response` objects with status 404, deterministic en/ru HTML, localized minimal navigation, meta/header noindex, Content-Language, and no-store. No pathname/header/cookie dependency was added to any indexed page/root; Next build retains static/SSG output for the existing site. The response intentionally does not mount React layouts/analytics, avoiding the faulty error-render path entirely. No reflected URL/request values are interpolated into HTML.

Validation: offline suites 16/16 pass with actual response-body assertions; one authorized production build passed (370 static pages generated). Added `npm run test:seo:runtime`, which makes real HTTP GET/HEAD requests for both languages with desktop/mobile user agents and asserts 404, lang, noindex, localized body, and absence of generic Next error markup.

Running the runtime test against the still-running **old production process** correctly fails for the generic error document. Restarting workflows is prohibited by this subagent's higher-priority scope, so the owning agent must restart the production workflow and rerun that command before calling the fix runtime-verified. This worker has not claimed passing post-restart HTTP evidence. Invalid IDs inside otherwise existing dynamic page routes may still use Next's error rendering; these handlers specifically fix unmatched routes, not every possible application exception.