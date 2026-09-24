# SEO quality remediation results

**Implementation date:** 24 September 2026  
**Scope:** image delivery/accessibility, Russian not-found UX, evidence-backed link cleanup, and route-scanner verification. Metadata, layouts, schema, forms, analytics, headings, HSTS, and title policy were intentionally left to their owners or left unchanged.

## Baseline and changes

### Image delivery

- The EN mobile homepage hero referenced `dr-antipov-scrubs-our-team.jpg` (1,350,898 bytes; 2679×3755) as its optimizer source. It now uses the existing `Antipov_white.jpg` (114,339 bytes; 1016×1400), a **1,236,559-byte / 91.5% smaller source asset**, with responsive Next Image delivery preserved. The hero uses the Next 16 `preload` API and quality 75 rather than the deprecated `priority` flag and quality 85.
- The RU mobile hero already used the 114,339-byte portrait. Its desktop video element is now mounted only after a desktop media-query match, matching the existing EN behavior. Mobile markup therefore does not discover the 3,350,741-byte WebM or 4,764,898-byte MP4 sources. `preload="none"` remains on desktop video.
- RU no longer preloads both the mobile portrait and desktop cutout. Only the mobile LCP candidate is preloaded; the desktop cutout remains responsive and normally loaded.
- Office-tour thumbnails previously declared `sizes="100vw"` despite rendering in a 2/3/4-column grid. EN and RU now declare 50/33/25vw breakpoints. Three-column location cards now declare 33vw on tablet/desktop. This lets browsers select smaller responsive candidates without disabling Next optimization or imposing a global byte limit.
- RU office-tour labels and contextual alt text were localized. Informative thumbnails retain concise contextual alt text. Deliberately decorative empty alts elsewhere were not bulk rewritten.

These are source-size and request-eligibility observations, not claims about deployed transfer bytes or Core Web Vitals. Next Image output format, selected candidate, CDN cache state, viewport and DPR determine actual transferred bytes.

### Russian not-found page

- Localized visible 404 heading, explanation, actions, destination labels and portrait alt text.
- All quick links and the primary home link remain in the `/ru` route space instead of sending Russian users to EN pages.
- Existing noindex metadata was not edited because metadata is outside this worker's ownership.

### Evidence-backed links

- Replaced the two audit-confirmed 404 YouTube channel links with the existing `@FusionDentalImplants` channel already used by the homepage video section.
- Updated the audited AAOMS root link to its recorded final `https://aaoms.org/` destination.
- Updated shared guide-article AAOMS implant/anesthesia references to the exact final PDF/page destinations recorded in the redirect export.
- Updated both audited Google Maps embeds to the exact final embed URL recorded in the redirect export.
- Updated both audited Hotjar privacy links to the exact Contentsquare trust destination recorded in the redirect export.
- Left Udemy unchanged: the supplied response was 403, which is not evidence that the profile is obsolete.
- Did not add blanket `nofollow`; existing relationship choices were preserved.

Some independently authored article files still contain AAOMS legacy URLs. They are valid editorial references that redirect, not broken links; broad concurrent article edits were avoided. A future content-owner pass may replace those with the audit-recorded final PDF where the PDF remains the intended citation.

### Route scanner

The current regression scanner recursively finds `src/app/**/page.tsx` and its route mapper drops parenthesized route-group segments. This preserves public EN paths such as `/about` when files live under `src/app/(en)/about`. The inventory comparison covers static EN/RU pages, and dynamic-route assertions remain separate.

## Verification

- `node --test scripts/foundation-regression.cjs` — **7/7 passed**. This includes inventory coverage with `(en)` route-group normalization and TSX parse checks for every route.
- `node --test scripts/test-trust-schema.cjs` — **passed** (43 article route graphs and 244 visible FAQ answers); run only as a shared regression guard, with no schema edits in this scope.
- Targeted source search — no remaining audited dead YouTube handle, legacy Google Maps query embed, Hotjar privacy redirect source, or `sizes="100vw"` in the four corrected card-grid components.
- `npx tsc --noEmit --pretty false` — **not a valid clean result in the current worktree**: generated `.next/types` and `.next/dev/types` still import the pre-migration `src/app/...` EN locations. Reported failures are stale generated route-validator references to files now under `(en)`, rather than diagnostics in these changed files. Per instruction, no build, dev workflow, or `.next` regeneration was run.

## Deferred production measurements

- Repeatable mobile lab traces for EN/RU home before and after deployment, including LCP resource identity, selected `srcset` candidate, image/video transferred bytes, CLS and INP diagnostics.
- 28-day field p75 LCP/INP/CLS once sufficient CrUX/GSC data exists; no “green score” acceptance claim.
- Fresh deployed rendered crawl for unintended internal 4xx/5xx and redirect chains, including navigation, footer, related content, CTA and locale-specific 404 paths.
- Browser/source checks at representative DPRs and breakpoints to confirm hero image quality and that mobile does not request hero video.
- External links should be rechecked manually from production. Anti-bot 403 responses must not be classified as deletion without corroboration.

HSTS was not changed because production already returns the policy. Stale missing-title claims and blanket image-size, nofollow, heading-replacement and description-length rules were not implemented.