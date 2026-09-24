# Schema and RU template trust remediation

## Baseline captured before edits

Source inspection against the revised Fusion Dental RU audit and project memory:

- `JsonLd.tsx` emitted a homepage `MedicalWebPage` on every route, a fixed 4.9/312 aggregate and five globally embedded reviews without page-level provenance.
- `InsightArticle.tsx` emitted `MedicalScholarlyArticle`, English language and EN URL even for RU articles; author used `identifier` instead of the stable Person `@id`.
- `getAntipovPersonSchema` created a second `#antipov-person` identity; city business schema minted a distinct business for each service area despite the sole Roseville office.
- RU footer leaked “Sleep Apnea” and “Board-certified”; shared related articles always linked to EN.
- RU reviews panel leaked English controls and claimed 740+ patients, versus other module totals (300+/312). No authoritative count established; none inferred.
- RU before/after template contained English site-authored case descriptions; original English patient quotes must remain unchanged.

Implementation and verification results follow below.

## Implemented

- Removed global homepage MedicalWebPage and unsupported aggregate/review markup; retained stable organization and surgeon identities and added a stable WebSite node.
- Added route-owned `getWebPageSchema` helper (non-medical default). Shared InsightArticle emits locale-specific WebPage + Article + FAQ from the same visible FAQ array, with stable author/publisher references. Default consultation CTA is neutral, not an unqualified free offer.
- Person helper now enriches `#physician`; city schema reuses the sole Roseville organization and office hours, not fictitious city branches.
- RU related cards use existing translated article datasets and RU URLs; footer service labels, headings and hours corrected; before/after case copy, gallery controls, review controls localized.
- English review bodies retained unchanged and marked `lang=en`, with explicit original-only Russian labeling. No translated reviews or counts invented. Removed unsupported default RU banner and testimonial totals plus RealReviews totals.
- Shared English ReviewsPanel copy intentionally preserved, per EN review regression guardrail.

## Verification

- `node scripts/test-trust-schema.cjs` passes: EN/RU URL identity, stable Person/organization, sole Roseville address, FAQ source fields, JSON-LD script escaping, no global rating/homepage schema, Article type and locale wiring.
- `git diff --check` passes.
- TypeScript check finds no errors in files owned by this work. Whole-tree check remains blocked by stale `.next/dev/types/validator.ts` route imports during concurrent route migration and `src/lib/seo-foundation.ts` languages:null typing (owned elsewhere).
- No build or workflow restart performed. Browser screenshot/rendered route and Rich Results testing remains with release owner.
- Attempted existing preview screenshot `/ru` on port 5000; connection refused (no running preview). Did not start or restart it.

## Remaining scope / route-owner follow-up

- Route page files and layouts were not edited. Route-owned identity is needed for services, locations, collections, contact, legal and other non-article routes using the helper; legal/contact must not inherit MedicalWebPage. Do not add schema to 404/error output.
- At baseline RU results route contains aggregateRating; remove until authoritative platform/entity/count/date are approved. Many RU manually authored insight routes still use MedicalScholarlyArticle: scan `src/app` (including moved route groups) and replace patient guides with Article, fixing canonical language and stable IDs. Shared InsightArticle callers are covered.
- Manual insight FAQ schema remains separately authored; audit exact visible question/answer parity on each route before claiming full compliance. RuFAQ and InsightArticle already derive schema and visible FAQs from a common source.
- Only add breadcrumb schema for a visible trail, never manufacture one globally. No OG metadata changed.
- Legacy RussianArticlePage links to `/ru/questions`, which had no route at baseline; determine whether unused before reusing. No schema was added to this unconfirmed renderer.
- Site-authored labels supplied directly by route props, other fixed metrics (stats/hero/trust modules), and source verification of all review author/rating/platform attribution need an owner decision. No authoritative review total is known. Explicitly supplied RuReviewBanner rating/caption still requires route-level removal or verification.
- Shared SmileGallery controls are localized, but caller-provided titles/captions/alt text still need route review. EN-only fallback card content was not machine-translated.
- Global organization still has existing service/credential content; clinical verification and external Rich Results validation remain necessary. No claim that the audit is fully complete.

## Route follow-up implemented (supersedes the route deferrals above)

After confirming the EN move to `src/app/(en)`, edited only route schema imports/rendering, not metadata or alternates:

- All 43 legacy manually authored EN/RU patient guides now use the server-only PatientArticleSchema boundary. It replaces the old scripts with one current-URL WebPage + Article graph and derives FAQ questions/answers from the actual visible FAQ JSX. It preserves the entire visible page tree. Legacy string literals remain as historical article input; their scholarly type, hidden FAQs, author identifier, and invisible breadcrumb are **not emitted**. Current headline, locale, canonical identity, stable author/publisher and FAQ source are authoritative.
- Verified 244 visible FAQ answers across those routes. RU implants-vs-dentures has no visible FAQ, so its formerly hidden FAQ schema is removed, not fabricated. No translated review or clinical content introduced.
- Removed both EN and RU results AggregateRating (4.9/312), replacing with route-owned CollectionPage identity.
- Added explicit ContactPage/legal WebPage identities and expertise/location CollectionPage identities in both locales. MedicalWebPage now applies only to actual service content: EN shared service template and eight hand-authored services, plus RU shared service template. Shared service FAQ remains generated from visible data; removed unsupported breadcrumb markup from the EN service template, while RU breadcrumbs reflect its actual visible trail.
- Added city/state page identity for both locales. State service-area schema no longer creates a fictitious per-state business or self-parent relation; all service areas refer to the sole Roseville organization.
- Replaced legacy RussianArticlePage `/ru/questions` links with the real insights index and existing RU guide article URLs.
- No explicit rating/caption props occur on current RuReviewBanner call sites. Its unverifiable default metrics were already removed.

Verification: `node scripts/test-trust-schema.cjs` exercises actual route JSX with lightweight component stubs, renders static HTML, asserts 43 current article identities, 244 visible FAQ answers, one replacement script per guide, no emitted scholarly/breadcrumb markup, no results ratings, non-medical contact/legal types and no legacy question links. No build/workflow restart.

## Final shared-interface localization correction

- PageHero now accepts explicit optional locale (default EN). All 16 RU route callers pass `locale="ru"`; home breadcrumb is `/ru` / «Главная», accessible navigation label and optional signature are localized without client pathname/hydration logic.
- The analogous conspicuous leak was nine manually authored RU insight routes calling RelatedArticles without locale, producing EN labels/cards/links. All nine now explicitly request the existing RU card dataset.
- Standalone Breadcrumbs has no RU call sites; left unchanged rather than adding unused behavior. No page prose or metadata modified.
- Regression assertions render PageHero with RU and default EN props, checking label/href/accessibility text, and scan every RU PageHero/RelatedArticles call site for explicit locale.
- Assertions pass (16 hero callers, nine related-card callers); diff whitespace check passes. Existing production-mode preview screenshot still shows old “Home” text: running `npm run start` serves the pre-change build. Source-level server-render regression shows «Главная» → `/ru`; release owner must rebuild/redeploy to update the preview. No build/restart performed here.