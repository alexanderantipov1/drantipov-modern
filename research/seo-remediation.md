# EN/RU SEO remediation: evidence and implementation decisions

**Research date:** 24 September 2026 (UTC)  
**Scope:** supplied August technical audit, revised remediation PDF, commercial keyword PDF, all publicly linked audit exports, official platform documentation, workspace baseline and read-only production samples.  
**Deliverables:** this decision report, [source registry](sources.json), [HTTP observations](public-fetch-results.json), and raw evidence in `research/sources/`. No application code, external system, deployment, analytics account, or customer record was modified by this research worker.

## Executive conclusions

The revised plan is materially safer than the original audit. Prioritize deterministic server-language output, reciprocal translation clusters, a single intentional indexability inventory, accurate page identity/schema, and conversion safeguards. The public RU homepage, contact, full-arch, privacy and Roseville-location samples still initially return `lang="en"`; EN homepage and full-arch samples do not return the RU alternate that points to them. These are current observations, not just inherited allegations. They do not establish the historical claim of precisely 120 defective clusters. [HTTP evidence](public-fetch-results.json)

Several original findings are stale or misclassified. **HSTS already exists** in sampled production responses, including `includeSubDomains; preload`; the “HSTS missing” task must not trigger another preload action. All three “missing description/H1/title” sheets identify only `/locations/ca/loomis`; that public page now has all three. The broken-link sheet lists two **external** destinations, not broken internal pages, and one is a 403 rather than proof of deletion. The duplicate-H1 sheet lists one H1 per EN/RU foundation page, not duplicate H1 elements within either page. All 15 spreadsheets and both linked Google documents were publicly accessible through export endpoints. [Exports and response records](public-fetch-results.json)

**Important new finding:** Google’s current documentation says FAQ rich results stopped appearing on **7 May 2026**; the May 8 notice and June 15 documentation removal supersede older “authoritative health sites may qualify” advice. Preserve useful visible FAQs and truthful optional Schema.org markup, but do not promise FAQ rich results or use that as an acceptance test. This is a dated official change, not an inference from search snippets. [Google change log, saved evidence](sources/google-updates.md)

The keyword PDF is a candidate-intent map, not proof that services, insurance benefits, prices, clinical outcomes, or offices exist. Its appended All-on-5 set, TMJ interventions, scar-free mole-removal language, financing and free-CT offers need owner/clinician review before new commercial claims are published. No such approval was obtained here.

## Evidence boundaries and freshness

The original PDF is labeled August 2026. The linked structured-data document explicitly dates its crawl **28 August 2026**, covering 297 URLs. Its 297/297 homepage identities, 130 scholarly-article types, 198 FAQs, and other counts are historical contractor observations. The separate technical document’s 128 RU URLs, eight reciprocal clusters, 30 omitted sitemap URLs and OG totals have no independently verified fresh whole-site denominator. The commercial PDF includes a position column dated **9 September 2026**; this is not current verified search demand or ranking evidence.

The installed package reports **Next.js 16.2.3**, while the initial manifest range is `^16.2.2`. The current official docs may describe newer 16.x features; check installed type definitions before adopting an API. The working tree changed concurrently while other implementation workers operated, so this report’s code comparison is anchored to the preserved **HEAD baseline**, not a claim that every baseline defect remains after their changes. [Baseline snapshot](sources/workspace-baseline.md)

Authority assessment: Google/Next.js documents are primary authorities for their own products, Schema.org/W3C are primary vocabulary/accessibility sources, and web.dev is primary Google performance guidance. Contractor exports are reproducible evidence of what the contractor recorded, not independent clinical or crawl verification. First-party website copy is evidence of what is displayed, not confirmation that its medical or business claims are true. Platform-specific requirements appropriately rely on the responsible platform’s documentation rather than three unrelated secondary articles.

### Public samples

| Sample | Observed response | Consequence |
|---|---|---|
| `/` and `/ru` | Both 200 and self-canonical; EN advertises only EN/x-default, RU advertises RU/EN/x-default; RU initial lang is EN | Reciprocal cluster and initial-language issues reproduced |
| EN/RU `/expertise/full-arch-implants` | Same asymmetry; RU initial lang EN | Shared service-template regression target |
| `/ru/contact` | 200, self-canonical, RU cluster, initial lang EN | Protect consultation path while repairing locale |
| `/ru/legal/privacy-policy` | 200; title includes both EN and RU branding; initial lang EN | Original “create privacy page” claim is stale; inspect linking and metadata instead |
| `/locations/ca/loomis` | 200 with title, description and H1 | Missing metadata/H1 sheets are stale for this sampled page |
| `/ru/locations/ca/roseville` | 200, self-canonical; initial lang EN | Actual route includes `/ca/`; inspect approved locations inventory |
| `/ru/locations/sacramento` | 404 | Intentionally sampled nonmatching route, **not** a discovered internal broken link |
| `/smile-gallery` | 200, self-canonical; no own `<loc>` in sampled XML | Omission reproduced; appearing only as an alternate is not its own sitemap entry |
| `/robots.txt`, `/sitemap.xml` | Both 200 | Audit their contents; existence alone is not correctness |
| All sampled HTTP responses | HSTS `max-age=63072000; includeSubDomains; preload` | Header presence confirmed; actual preload-list membership and all-subdomain safety unverified |

The raw HTML, final URLs, timestamps, headers and extracted metadata are retained in [public-fetch-results.json](public-fetch-results.json). These are ordinary unauthenticated GET requests, not a browser rendering, full crawler, Googlebot authentication, CDN global test, or GSC URL inspection.

The sampled XML also lacks an own `<loc>` for the observed 200 `/ru/locations/ca/roseville` page. Thus two examples of the historical sitemap-coverage concern were independently reproduced; the full historical total of 30 was not recounted. Add an omitted page only after its indexability/business approval, not simply because it responds 200.

## Original audit issues 1–21: decision matrix

“Confirmed” below means a narrow observation or baseline code finding, never deployment acceptance.

| # | Original issue | Evidence and disposition | Priority / acceptance |
|---|---|---|---|
| 1 | HSTS missing | **Stale:** header exists publicly and baseline config contains it. Do not submit preload or increase policy blindly. | P2 security review; owner confirms certificates and every required subdomain. [HSTS](sources/hsts.md) |
| 2 | Low mobile speed / get green score | **Revise:** supplied PSI links lack a reproducible fresh field baseline. A score is diagnostic, not outcome. | P1: p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 where sufficient field data; lab comparisons and conversions separately. [Vitals](sources/web-vitals.md) |
| 3 | Missing descriptions | Sheet contains Loomis only; current sampled HTML contains description. **Stale sample**, not a sitewide pass. | P1 high-value pages; useful unique snippets. [Snippets](sources/google-snippets.md) |
| 4 | Descriptions >160 chars | Export is accessible; **reject universal cutoff**. Truncation depends on presentation; no fixed Google description-length requirement. | P2 editorial quality; no blanket truncation. [Snippets](sources/google-snippets.md) |
| 5 | Missing H1 | Sheet contains Loomis only; current sample has H1. | P1 when genuinely missing; logical main heading and rendered outline. |
| 6 | Duplicate H1 | Sheet contains EN and RU foundation URLs, each `Occurrences=1`; same English heading across translations, not duplicate elements on-page. | P1/P2 inspect localization and intent; do not remove headings blindly. [Titles](sources/google-titles.md) |
| 7 | H1 equals title | **Reject as automatic defect**; both can describe the same topic. | Rewrite only inaccurate/generic/duplicated intent. [Titles](sources/google-titles.md) |
| 8 | Missing title | Sheet contains Loomis only; title now present. | P1 current inventory and accurate page-specific titles, no arbitrary 60-character ranking gate. [Titles](sources/google-titles.md) |
| 9 | Meta keywords present | Present in baseline; Google does not use keywords meta for ranking. | P2 harmless hygiene; no ranking promise. [Google statement](sources/google-keywords.md) |
| 10 | Cookie banner/privacy/cookie policy | Privacy page exists; inspect links, language, consent persistence, tracking and policy approval rather than fabricate legal text. | P2 legal gate plus P1 conversion safety. [Consent](sources/consent-overview.md) |
| 11 | Images >100KB | Exports identify candidates, not a universal defect threshold. | P2/P1 if LCP: responsive dimensions, formats, correct loading and measured transfer sizes. [Next Image](sources/next-image.md), [LCP](sources/web-lcp.md) |
| 12 | Missing alt | Inspect actual image purpose; missing alt differs from valid empty decorative alt. | P2 contextual informative alt; decorative empty alt. [W3C](sources/alt.md) |
| 13 | Rewrite `/_next/image` URLs | **Reject cosmetic rewrite.** Normal optimized endpoint; changing it risks responsive delivery/cache. | Investigate only crawlability, original assets, excessive dimensions or performance. [Next Image](sources/next-image.md) |
| 14 | HTML sitemap absent | Optional UX, not a replacement for crawlable navigation or approved XML inventory. XML sitemap itself is not mandatory for Google discovery. | P2 optional; P0 inventory consistency. [Sitemaps](sources/google-sitemap.md) |
| 15 | Broken links | Sheet lists YouTube channel 404 and Udemy profile 403, both external. A blocked request is not proof a resource is gone. | P1 crawl internal links independently; verify external destination manually before removal. [Export](sources/1HWO89tc8erYrzfb8VJEbQzRLAoa58CvMzEziwEQKEOM.csv) |
| 16 | Nofollow every external link | **Reject.** Normal editorial citations need not be nofollow. | Paid=sponsored, user-generated=ugc, unendorsed=nofollow case-by-case. [Google links](sources/google-links.md) |
| 17 | Links through redirects | Sound principle, but supplied examples include external AAOMS, Google Maps and Hotjar. Do not call this an internal-only list. | P1 final relevant destinations; retain historical redirects. [Export](sources/14OwvNaT6fykrpwIe5VVXfROHBe3GQHoij5_jxb6oVnk.csv) |
| 18 | Replace listed H3/H4 with div | **Reject blanket replacement:** FAQs/services/doctors/process sections may legitimately be headings; a heading may contain a useful link. | P2 template-specific semantic outline; preserve design/accessibility. |
| 19 | Schema audit | Linked document retrieved; historical semantic findings credible enough to inspect but not freshly recounted. | P1 page identity, rating integrity and article types; P2 relevant supporting markup. [Document](sources/1NwuSK87I5DRdQIw81vESXp-EkaG3bGQ9tbXD3upBViQ.txt) |
| 20 | Additional AI-assisted audit | Linked document retrieved; reciprocal failure reproduced in two pairs; other counts historical. | P0 alternates/inventory, P1 localization, P2 OG. [Document](sources/1Vku9n22Eaj6IRLP-ih9E_0k3bKln4VnZpmCBSJRhw1A.txt) |
| 21 | Unstable RU lang | **Confirmed initial EN output** on sampled RU routes; baseline hard-coded EN plus client setter explains a possible source/DOM discrepancy. Not proof of UA-dependent server variation. | P0 server RU/EN root documents, no hydration dependence; test navigation, initial source, cache and GSC separately. [Google language](sources/google-multilingual.md), [Next i18n](sources/next-i18n.md) |

## Revised plan P0–P2: implementation and approval matrix

| ID | Recommendation / status | Required implementation and evidence |
|---|---|---|
| P0-1 | Reciprocal clusters — reproduced | One explicit translation registry; self-canonical language pages; identical reciprocal clusters; no homepage fallback for nonexistent translations. Confirm generic en/ru versus en-US/ru-US and x-default. [Google alternates](sources/google-localized.md), [canonicals](sources/google-canonical.md) |
| P0-2 | Deterministic lang — reproduced | Server emits correct root lang before JS. Multiple Next root layouts or a proven server locale mechanism; no client-only “fix.” Verify installed 16.2.3 APIs. [Next i18n](sources/next-i18n.md), [Proxy](sources/next-proxy.md) |
| P0-3 | One indexability inventory — baseline risk | Remove competing producers; initial app sitemap and postbuild next-sitemap coexisted with differing host defaults. Inventory real routes, noindex, redirects and approval; accurate lastmod or omit it. [Sitemaps](sources/google-sitemap.md) |
| P0-4 | Release gates — outstanding | EN/RU source and rendered tests, backup/rollback, route inventory, fresh crawl, conversion evidence. No research-only “complete” status. |
| P1-1 | RU localization/reviews — partial public evidence | Translate authored UI, not reviewer identity/original testimony. Preserve source original; translations separately stored and clearly labeled; accessibility and attribution tested. Do not fabricate translated reviews. |
| P1-2 | Page identity — historical count, baseline global graph risk | Current canonical-based WebPage @id/url/name/language, stable entity references; avoid homepage identity on every URL. Shared entity reuse is an architectural improvement, not an absolute prohibition on repeating truthful entity data. [Schema policies](sources/google-schema.md), [MedicalWebPage](sources/schema-medical.md) |
| P1-3 | Ratings/counts — approval outstanding | Remove unsupported aggregate/review schema; approved visible source must distinguish patient, review and case counts. Own-business reviews do not qualify for Google self-serving review stars, even through third-party widgets. [Reviews](sources/google-reviews.md) |
| P1-4 | Titles/H1/descriptions — recrawl first | Prioritize approved money pages; exact mapping and actual localized intent; do not force H1/title difference or character limits. Loomis “missing” counts already stale. [Titles](sources/google-titles.md), [snippets](sources/google-snippets.md) |
| P1-5 | Broken/redirecting internal links — scope correction | Supplied broken list is external; independently inventory internal errors and final destinations. Do not delete links merely because an anti-bot response is 403. |
| P1-6 | Mobile performance — unmeasured | Preserve baseline by template/device; optimize measured LCP resource, hydration, font/third-party costs and CLS. Field p75, sample sufficiency and 28-day reporting lag must accompany any CWV claim. [Vitals](sources/web-vitals.md), [LCP](sources/web-lcp.md) |
| P1-7 | Article types — historical count | Patient education → Article/BlogPosting; scholarly only when genuinely scholarly. Preserve real authors/dates/images and appropriate stable references. [Google Article](sources/google-article.md), [Schema scholarly](sources/schema-scholarly.md) |
| P1-8 | Analytics/conversions — external confirmation outstanding | Test submission, tel link, consent states, events, thank-you and actual CRM receipt; EN regression too. No live test lead was sent by research worker. |
| P2-1 | Heading semantics | Template review, not global element substitution; heading structure conveys section relationships. |
| P2-2 | Images/alt | Context-based alt and responsive assets; measure transfer and LCP/CLS rather than 100KB threshold. [W3C](sources/alt.md), [Next Image](sources/next-image.md) |
| P2-3 | Open Graph | Per-page canonical URL, language, title/description and valid absolute image; merge nested metadata deliberately because Next inheritance is shallow. [Next Metadata](sources/next-metadata.md) |
| P2-4 | Supporting schema | Match visible breadcrumbs, Q&A, procedure and collection entities. Do not create local offices from city service-area pages. **FAQ Google-rich-result expectation is obsolete as of May 2026.** [Policies](sources/google-schema.md), [dated update](sources/google-updates.md) |
| P2-5 | HSTS | Existing two-year/subdomain/preload header requires infrastructure review, not another SEO fix. Preload participation is operational and difficult to reverse; current preload guidance does not recommend preload generally. [HSTS](sources/hsts.md) |
| P2-6 | Privacy/consent | Legal approval for notices, regions, categories and vendors; explicit consent initialization and persistence. Cookie banner alone is not compliance. [Overview](sources/consent-overview.md), [setup](sources/consent-setup.md) |
| P2-7 | Remove keywords | Low-risk maintenance only; 2009 Google statement is old but the longstanding rule is not a new ranking opportunity. [Google](sources/google-keywords.md) |
| P2-8 | Outbound qualification | Review link relationship; preserve credible medical/editorial citations. [Google](sources/google-links.md) |
| P2-9 | HTML sitemap | Optional useful navigation; not an SEO obligation. Improve actual inbound links rather than hiding weak architecture behind a sitemap. [Sitemaps](sources/google-sitemap.md) |

All revised P3 rejections are endorsed with the qualifications above. One correction to the revised document itself: XML sitemaps are valuable here but not a universal Google Search requirement. Another is the post-May-2026 FAQ change.

## Framework, schema and consent implementation guidance

Next.js Image optimization should remain intact unless measurement identifies a defect. Next 16 introduces `preload` as the clearer replacement for deprecated `priority`; lazy-loading a likely LCP hero is a separate problem from the appearance of `/_next/image` URLs. Do not preload every carousel slide or change image quality blindly. Inherited OG objects require explicit merging to retain images and page identity. The initial use of four font families and broad global scripts merits profiling, not an unmeasured promise of a performance improvement. [Image docs](sources/next-image.md), [metadata docs](sources/next-metadata.md), [baseline](sources/workspace-baseline.md)

Use a graph whose WebPage describes the actual canonical page. Schema.org medical types describe meaning; they do not confer physician verification or guarantee Google rich results. An ordinary patient guide is not a scholarly publication. Ratings must match the correct entity, source and visible data; changing a count to another convenient marketing number is not remediation. Validate syntax and separately review meaning. Useful visible FAQ content remains worthwhile even though Google’s rich-result feature is retired. [MedicalWebPage](sources/schema-medical.md), [ScholarlyArticle](sources/schema-scholarly.md), [Google policies](sources/google-schema.md), [Article](sources/google-article.md), [reviews](sources/google-reviews.md), [FAQ update](sources/google-updates.md)

Google distinguishes **basic consent mode** (tags blocked until user interaction/consent as configured) from **advanced mode** (Google tags may load with denied defaults and send cookieless pings). These are different approved privacy/product choices, not synonyms. Consent Mode v2 includes `ad_user_data` and `ad_personalization` in addition to storage signals. Initialize defaults before relevant tags; do not represent “script removed from React tree” as proof an already-running vendor has stopped collecting. Test revocation, page reload, storage expiry, previously stored choices, no-JS paths and third-party embeds. A GTM noscript iframe outside the consent gate or a second standalone GA installation deserves explicit review. No public evidence here establishes what the remote GTM container currently fires. [Consent overview](sources/consent-overview.md), [implementation](sources/consent-setup.md)

## Commercial keyword and medical/business review

The wide PDF export breaks columns across pages. Preserve the original PDF and extracted text; do not merge separated row fragments by proximity or treat every detached number as monthly searches. Its existing URL mapping can seed editorial planning, but requires a clean source spreadsheet and a verified inventory before bulk import. [Extracted commercial keyword PDF](sources/drantipov.com_-_семантическое_ядро_-_Commercial_Keywords_1790187080139.txt)

| Cluster / observed terms | Safe interpretation and approval required |
|---|---|
| Russian-speaking oral/maxillofacial surgeon; Roseville/Sacramento | Local patient intent. Confirm provider language capability and actual office addresses; service area ≠ office. Existing home/about/contact may be better than many thin cities. |
| All-on-4 / All-on-6 / full arch, same-day teeth | Clinician approves candidacy, terminology, temporary vs definitive prosthesis, healing, risks and exclusions. Do not imply every patient receives final zirconia teeth on surgery day. |
| Appended “All-on-5,” five implants, zirconia, same-day, pricing | Separate added keyword set lacks the same tidy row structure. Confirm this is an actually offered protocol and a useful distinct intent before creating a page. Do not infer superiority, universal candidacy or fixed implant count. |
| Single/multiple implants, bone grafting, sinus lift | Distinguish services/procedure stages; costs, materials and timelines need current clinical/business verification. |
| Zygomatic/pterygoid and implant rescue | Specialized service availability and clinician competence require confirmation; do not turn searches into promised treatment or cure of peri-implant disease. |
| Snap-on / snap-in dentures | Clarify implant-retained removable overdentures versus cosmetic clip-on veneers and fixed bridges; use patient-understandable Russian terminology. Avoid cannibalizing full-arch fixed intent. |
| MMA / OSA / “without CPAP” | A query is not evidence CPAP should be stopped or surgery will cure OSA. Clinician-approved candidacy, alternatives and care coordination required. |
| TMJ splints, physiotherapy, arthrocentesis, arthroscopy, surgery | Each term may imply a distinct offering not established by a generic TMJ page. Confirm actual diagnostics/interventions and referral pathways. |
| Biopsy/oral pathology | Confirm scope, pathology workflow and follow-up; no diagnosis from SEO copy or promised exclusion of malignancy. |
| Radio-wave mole removal, “without scar,” histology | Do not guarantee scar-free removal or assume all lesions are suitable for a cosmetic method; clinician must approve assessment/pathology claims. |
| Botox/fillers/facial cosmetic | Confirm actual procedures, responsible licensed providers, current location/service availability and approved risk language. |
| Free consultation / free 3D CT | Confirm eligibility, exclusions, expiry and availability; no blanket free offer from keyword text. |
| Aetna / Delta Dental / Anthem / financing | Carrier keyword ≠ in-network contract or coverage guarantee. Billing owner confirms accepted plans, benefits-verification wording, financing terms and disclosures. |

Map related terms to one useful canonical intent page unless a distinct user need and substantial content justify another URL. Avoid keyword stuffing, boilerplate city pages and mass page generation solely to capture similar searches; Google’s doorway/scaled-content rules apply. Do not claim new offices, credentials, guaranteed outcomes, pricing or demand based solely on this PDF. [Google spam policies](sources/google-spam.md)

## Source evidence and availability

All three current PDF texts are preserved under their original recognizable filenames. All **15 linked spreadsheets** returned HTTP 200 via public CSV export, as did **both Google documents** via text export. This exports the default sheet only; extra tabs, edit history and unpublished sheets were not authenticated or enumerated. Their recorded URLs and saved files are in the registry. No access restriction was bypassed. [Fetch manifest](public-fetch-results.json)

The 26 official-document fetches cover Google internationalization, canonicalization, sitemap, title/snippet, outbound-link, spam, structured-data, reviews, Article, meta keywords and current updates; Next Image/i18n/metadata/Proxy; web.dev CWV/LCP; Google consent overview/setup; Schema.org medical page/scholarly article; HSTS and W3C alt guidance. The registry includes URLs, access dates, evidence paths and extracted update dates. Publication dates unavailable from the page are explicitly left unconfirmed, not replaced by access date. [Source registry](sources.json)

The FAQ URL redirects to the current documentation change log. Its saved page is marked truncated beyond 250,000 characters, but the relevant May/June 2026 entries were preserved and directly inspected. Current Next Image evidence is dated August 25, 2026; hreflang evidence September 21, 2026. The Google meta-keywords article dates to 2009 and is explicitly a historical primary statement, not fresh news. Sources without an extractable publication date should be cited as accessed September 24, 2026.

## Release acceptance and unavailable confirmations

Before deployment, the owning agent must reconcile implemented changes with this research snapshot and record a route/template matrix. At minimum include EN/RU home, service, article, location, contact, legal, collection and not-found templates. Check initial source and browser DOM, status, canonical, reciprocal alternates, OG, visible schema, heading outline, links and consent states. Confirm that unrelated EN titles/copy and translation pairs were not accidentally altered. Validate sitemap XML against actual approved indexable 200 canonicals; omit invented lastmod. Use a real crawl to confirm link counts rather than treating an old under-linking task count as a new measurement.

Production acceptance additionally needs a fresh deployed crawl, GSC live inspection/indexing feedback, before/after field or repeatable lab measurements, approved infrastructure/cache checks, and documented end-to-end EN/RU lead receipt and analytics events. A successful local build cannot establish any of those external outcomes.

Unavailable in this read-only research scope: Search Console or GA4 access; true Google-selected canonicals; production CDN/cache configuration and geographically varied responses; authenticated Googlebot comparison; PSI/CrUX field distributions; current GTM contents; Salesforce receipt; complete link/asset crawl; approved review data; legal privacy obligations; clinic credentials, services, insurance and pricing approval; confirmed location-office inventory; preload-list membership and all-subdomain TLS coverage. Original versus translated reviews were not individually authenticated against Google Maps. No customer submission or external mutation was performed.

**Completion status:** research and source collection complete; application implementation belongs to the owning agent. Historical issues are not marked production-fixed by this report.