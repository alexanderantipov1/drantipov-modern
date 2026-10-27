# Implementation readiness review — seven RU service briefs

## Scope and verdict

Read-only source audit of `brief-1.md` through `brief-7.md` against the current repository. No application changes, server starts, form submissions, deployment checks or redesign were performed. Route/asset findings below mean repository existence, not a verified production HTTP response. The only deliverable added is this report.

**Verdict: all seven are feasible additive service pages, but none is ready for a lossless data-only import into the current templates.** All seven exact URLs are new; existing broader pages overlap in topic, not pathname. The main shared blockers are missing structured section support, unassigned images/related links, consultation-flow selection, and claim/offer approval. Botox has an additional unsupported case-gallery claim.

Reviewed the bilingual-subtree, Article Formula, consultation-policy and localization/delivery memories, plus the metadata/title/FAQ conventions. These are `/ru/expertise` service pages, not insight articles: do not automatically impose the EN insight-article table/byline/6–8-FAQ formula or invent clinical review. Preserve the existing independent RU document root and English behavior. The sitewide decision against TL;DR/“Коротко” summary boxes still applies.

## 1. URL ownership and per-page readiness

No proposed slug has a route directory, SEO inventory entry, or matching redirect in `next.config.mjs`. There is no dynamic expertise route that would already own these URLs; the RU unmatched catch-all is error handling, not a service implementation. No same-slug English counterparts exist either.

| Brief | Proposed URL | Existing topic owner(s), not a URL collision | Readiness / specific dependency |
|---|---|---|---|
| 1 | `/ru/expertise/all-on-4` | `/ru/expertise/full-arch-implants`, `/ru/full-arch-dental-implants`, `/ru/all-on-4-cost`, `/ru/all-on-4-clearchoice-alternative`, RU All-on-4-vs-All-on-6 insight | **Conditional.** Keep these existing URLs; new page should explain the four-support protocol, with links back to the full-arch overview and separate cost page. Six supplied FAQs render directly. Stats and final badges must retain same-day temporary-teeth eligibility rather than imply a guarantee. Free consultation/CT scope needs approval. |
| 2 | `/ru/expertise/all-on-5` | Full-arch overview/landing page; no dedicated All-on-5 page | **Blocked on claims and shared delivery/template decisions.** Five supplied FAQs are supported; no need to pad to the insight-article minimum. Confirm All-on-5-specific service/teaching wording and the unsourced “95%+” long-term success / “25+ years average implant lifespan” stats. These are not the same as 25+ years of surgeon experience. |
| 3 | `/ru/expertise/all-on-6` | `/ru/expertise/full-arch-implants`, full-arch landing page and RU comparison insight | **Conditional.** Six supplied FAQs render directly. Six treatment steps are supported in principle; no hard-coded four/five-step limit. Keep comparison links and qualified immediate-loading wording. Same shared offer/asset/template dependencies as brief 1. |
| 4 | `/ru/expertise/botox` | `/ru/expertise/facial-cosmetic` | **Blocked on non-implant form and gallery accuracy.** Main brief CTAs correctly avoid “free.” Either existing modal path introduces implant-only wording/questions. Six supplied FAQs are supported. Existing facial cases include fillers/lip augmentation but no identified Botox case; do not publish “gallery includes Botox results” based on that collection. |
| 5 | `/ru/expertise/multiple-teeth-implants` | `/ru/expertise/single-tooth` (includes bridge-related positioning), implant overview content | **Blocked on numerical/quote approval; otherwise conditional.** Seven supplied FAQs and five treatment steps are straightforward. “3–6 months total” must not contradict an additional graft-healing stage of 3–6 months plus integration/restoration. “95%+” and “25+ years lifespan” need an approved basis. Obtain approval for the attributed quote or render it as an unattributed editorial emphasis, not a fabricated doctor quotation. |
| 6 | `/ru/expertise/pterygoid-implants` | `/ru/expertise/zygomatic-implants` currently covers both zygomatic and pterygoid implants | **Blocked on numerical evidence; otherwise conditional.** Six supplied FAQs and six steps are supported. “97%+ survival in systematic reviews” has no actual study URL/citation in the brief; specify source, follow-up and applicability or remove the number. Differentiate posterior upper-jaw support from zygomatic anchorage; link to the existing combined page rather than replace it. |
| 7 | `/ru/expertise/lip-augmentation` | `/ru/expertise/facial-cosmetic`; real RU lip-filler case `fcs000004` | **Conditional on non-implant form and clinical wording.** Seven FAQs, six steps and three number cards are feasible. Preserve the supplied final FAQ wording “Ориентировочная продолжительность эффекта составляет 9–12 месяцев” subject to product-specific clinical approval. The introductory editorial note removes the cannula sentence from treatment step 4, not from the historical case description. Use the identified lip case, not unrelated facial surgery as proof of this treatment. |

**Consequential ownership question:** Are the seven requested URLs approved as additional detail pages under the existing broader service pages? The briefs name new URLs but do not authorize replacing or redirecting the current topic owners. Safe implementation default: additive detail pages, retained parent URLs, no redirect/canonical consolidation.

## 2. What the current RU models/templates can actually render

Two systems coexist:

- `src/data/ruExpertiseData.ts` → `src/components/ru-home/RuExpertiseTemplate.tsx` for full-arch, single-tooth and other established services.
- `src/constants/ruServicePages.ts` → `src/components/expertise/ServicePageTemplate.tsx` with `locale="ru"` for facial-cosmetic, zygomatic and newer services. Its shape is `ServicePageData` in `src/constants/servicePages.ts`.

| Intended brief block | `RuExpertiseTemplate` today | `ServicePageTemplate` today |
|---|---|---|
| Hero/H1/intro | Hero plus one plain-string intro paragraph; cannot preserve all intro paragraphs/subheadings as authored | Hero plus answer heading and paragraph array |
| Service in numbers | No data field or renderer | No data field or renderer |
| About-service heading, subtitle and multiple paragraphs | No dedicated fields; intro flattens these | Answer block can hold heading/paragraphs, not all subtitle distinctions |
| Benefits with individual titles/descriptions and two side panels | `benefits: string[]` only | Heading/lead/card sections can represent title-description cards; no side-panel placement |
| Candidate list versus doctor assessment list | Generic condition cards only | Generic cards; no explicit paired list structure |
| Treatment stages | Numbered steps with required duration strings; most briefs omit durations, so do not invent them | Generic cards, not a dedicated timeline |
| Quote/emphasis | No field | No field |
| Achievements with photo | No field | No field |
| Office/procedure gallery; smiles; cases; testimonials | No slots/data | No slots/data |
| Optional pricing explanation without numbers | No field | Generic section/cards can hold text, but not a native pricing block |
| Mid-page CTA + final CTA with custom button text, phone and four badges | One hard-coded final CTA only | One final `DualCTA`; no mid-page CTA or badge block |
| FAQ | Yes; one array drives visible FAQ and JSON-LD | Yes; one array drives visible FAQ and JSON-LD |
| Useful materials / related links | No field | `relatedLinks` rendered; locale-prefix logic available |
| Semantic comparison table | No field/renderer | No field/renderer |

**Implication:** Adding seven data entries alone would omit many requested sections and flatten important distinctions. A bounded RU-specific extension/composition of existing components is needed; a sitewide redesign is not. Preserve optional section omission where the briefs explicitly say “only if content exists.”

Existing reusable starting points:

- `HeroStats` accepts arbitrary `stats`; textual values such as “Без операции” and “3D КТ” are valid. Its layout is described as four floating cards, so verify a three-card lip page rather than fabricate a fourth metric.
- `DoctorQuote` supports quote/author/role but defaults to an English doctor attribution. Do not use defaults for an unattributed accent or unsigned editorial text.
- `RuOfficeTour`, `RuWallOfSmiles`, `RuTestimonials` and `RuBeforeAfter` have existing content/assets, but use fixed copy/collections rather than page-specific brief data.
- `RuBeforeAfter` defaults `activeCategory` to `"jaw"` and has its own consultation-modal CTA. Implant-first or facial-first presentation is not presently a page prop; importing it unchanged would not meet the brief’s preferred first tab. Audit its nested CTA as well as the new page CTA.
- `RuAbout` includes the award/photo block, but importing the entire biography would bring unrelated content and its own CTA. Reuse only the relevant existing block/assets with bounded changes.

The briefs contain **number blocks, not an authored table**. Neither service model supports a real `<table>`. Do not substitute a table for these cards or add an insight-style comparison table without a content requirement. If a comparison table is actually intended, approved rows/columns are missing.

## 3. Discovery, related links and locale boundaries

The new pages will not appear automatically when route files are added:

- `/ru/expertise/page.tsx` has its own `ruExpertise` grid and separately authored ItemList JSON-LD.
- `RuNavbar` has a six-entry expertise list. `RuFooter` has its own service links.
- `RuExpertiseHubGrid` and `RuServices` also maintain separate lists; `allExpertise` in `ruExpertiseData.ts` is not a global source of truth.
- Existing broader service pages need contextual detail links; adding only outbound links from new pages does not make those new pages discoverable.

Minimum bounded approach: add relevant entries/inbound links on the expertise hub and topic parents, keep ItemList consistent with visible content, and use curated related links. There is no need to put all seven new entries in every global menu.

The briefs say “random links similarly” but provide **no related-link destinations or anchor text**. Prefer stable relevant links to existing RU routes rather than random unrelated content. Verified source destinations suitable for selection:

| Page(s) | Existing relevant RU destinations |
|---|---|
| All-on-4 / All-on-5 / All-on-6 | `/ru/expertise/full-arch-implants`, `/ru/all-on-4-cost`, `/ru/for-patients/insights/all-on-4-vs-all-on-6`, `/ru/for-patients/insights/dental-implant-aftercare`, `/ru/surgical-cases/dental-implants` |
| Multiple teeth | `/ru/expertise/single-tooth`, `/ru/expertise/bone-grafting`, `/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options`, `/ru/surgical-cases/dental-implants` |
| Pterygoid | `/ru/expertise/zygomatic-implants`, `/ru/expertise/bone-grafting`, `/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants`, `/ru/for-patients/insights/dental-implants-with-severe-bone-loss-options` |
| Botox / lip augmentation | `/ru/expertise/facial-cosmetic`, `/ru/surgical-cases/facial-cosmetic-surgery`, `/ru/surgical-cases/facial-cosmetic-surgery/fcs000004`, `/ru/surgical-cases/facial-cosmetic-surgery/fcs000003`, `/ru/about` (case links must be labelled as lip/filler cases, not Botox cases) |

The proposed seven URLs may cross-link only once implemented. No additional procedure URLs can be inferred safely from procedure names. Common RU destinations also exist: `/ru/contact`, `/ru/results`, `/ru/insurance`, `/ru/legal/privacy-policy`, `/ru/legal/medical-disclaimer`.

For SEO, add approved new routes to `src/lib/seo-route-inventory.json`; `src/app/sitemap.ts` derives from that registry via `seo-foundation.ts`, not from a filesystem crawl. Use `finalizeMetadata` with each explicit new path, self-canonical on `https://www.drantipov.com`, RU Open Graph locale, and the brief’s description. Since these are RU-only additions, do not advertise nonexistent same-slug English hreflang URLs. `finalizeMetadata` currently creates language pairs only when both inventory routes exist.

All briefs supply branded titles. Use `title: { absolute: ... }` to avoid the RU layout suffix being appended twice; several supplied titles are long, but shortening is an editorial decision, not a route blocker. `LanguageToggle` currently links between homepages rather than equivalent article/service URLs; do not claim these new services have direct EN translations.

## 4. Forms: preserving Russian copy is not preserving delivery

| Entry point | Actual component / delivery path | Relevant risks |
|---|---|---|
| Existing `RuExpertiseTemplate` CTA | `RuConsultationModal` → `RussianMultiStepForm` → `POST /api/lead` | Russian UI, payload `lang: "ru"`, reCAPTCHA action `ru_lead`, attribution. Modal hardcodes `landingPath="/ru"` rather than the service URL. Form currently has implant-only options and generic free/CT copy without an adjacent restriction statement. |
| Existing shared `ServicePageTemplate` CTA | `DualCTA` → shared `forms/ConsultationModal` → `MultiStepConsultationForm locale="ru"` → `POST /api/submit-consultation` | Translates UI based on pathname, but submits the Fusion Dental Implants assessment payload. Implant questions and free-implant headers remain even when the outer CTA says neutral consultation. |
| RU consultation page | `/ru/for-patients/consultation` → `RussianMultiStepForm` → `/api/lead` | Route exists, but H1/metadata offer unqualified free consultation, including jaw surgery in metadata; implant-only form is not an approved neutral cosmetic booking flow. |

`/api/lead` uses Salesforce Web-to-Lead and Resend notification logic; `/api/submit-consultation` proxies the Fusion user-data API. They are **not interchangeable**. Other existing forms also use `/api/consultation` and `/api/contact`; do not silently swap them in just because they exist.

`RussianMultiStepForm` currently offers full-arch, severe bone loss, one/several implants, grafting and second opinion only. It does not explicitly identify All-on-5, pterygoid, Botox or lips. The first default is full arch. Shared `MultiStepConsultationForm` also asks implant-specific questions, uses `businessUnit: "Fusion Dental Implants"`, preserves machine-valued assessment fields and handles booking/tracking data. Locale copy does not make either suitable for cosmetics.

The new implementation must retain the chosen path’s payload enums, validation, explicit failure state, reCAPTCHA, attribution/consent tracking and original CRM destination. Service/source context should identify the real new page without corrupting first-touch attribution. Do not claim real lead delivery, credentials or consent compliance based on this audit; none was exercised. The short RU form does not currently show a privacy/consent notice; determine the approved disclosure for these new uses rather than inventing legal consent or silently claiming it is captured.

**Consequential question:** Which existing delivery flow must each new service use, especially Botox/lips, and who approves non-implant treatment options and offer-neutral modal copy? The shared neutral button is not sufficient while the opened form still advertises a free implant assessment.

## 5. Consultation offer and clinical/attribution integrity

- Implant-focused pages (briefs 1, 2, 3, 5, 6) may offer a **free dental implant consultation**, qualified in Russian as “Бесплатная консультация по имплантации,” with “Действуют ограничения” near each free offer. The briefs’ generic “Записаться на бесплатную консультацию” / “Бесплатная консультация с 3D КТ” should be implant-qualified rather than copied verbatim into a reusable generic surface.
- “Условия предложения уточняйте при записи” does not specify what the restrictions actually are. No offer-terms link, eligibility, included scan scope or financing terms are supplied. A free consultation policy does not independently establish that every CT scan or diagnostic service is free for every visitor.
- Botox and lip augmentation must stay neutral across **outer CTAs, badges, modal headers/questions/footers and any linked booking page**. `RuExpertiseTemplate.variant` is currently unused: setting `"surgical"` does not stop its hard-coded free consultation/CT CTA. `ServicePageTemplate` always renders bare `<DualCTA />`, so it also cannot select implant offers from service data.
- “Learn if I qualify” buttons can open a consultation request, not represent an automated eligibility determination. No online clinical eligibility decision is implemented here.
- Keep the conditional nature of same-day temporary teeth visible in number blocks and final badges as well as body copy (briefs 1–3). Do not imply permanent teeth on the day of surgery.
- Doctor quotations in briefs 1–2, and the conditional attribution in brief 5, need approval. Use neutral editorial emphasis where permission is absent; `DoctorQuote` defaults must not silently create authorship.
- Neodent 2026, ABOMS and 25+ years are already represented in current RU content; the award plaque asset exists. Existing publication is not independent verification, and an implant award should not be presented as Botox/lip-specific certification.
- No new doctor-reviewed byline or reviewed-by schema is authorized by these briefs. If clinical approval is still pending, do not imply it has occurred.

**Consequential question:** Are free CT inclusion/eligibility and restrictions approved for all five implant offers, and what exact disclaimer/terms should appear? No prices or financing promises should be invented to fill conditional blocks.

**Consequential question:** Can the clinician approve or replace the success/survival/lifespan/timing claims in briefs 2, 5 and 6, the product-specific lip duration in brief 7, and the attributed quotations? For “97%+,” supply the actual review source rather than a generic citation.

## 6. Images, cases and missing source material

Every brief contains `![](<Base64-Image-Removed>)` placeholders, empty alt text and editorial block instructions. These are not valid asset URLs or usable embedded images. The original visual references are unavailable in these Markdown files. The only authored URL strings are the seven intended service paths; there are no external evidence URLs, named downloadable documents, offer terms or concrete related-link targets to validate.

Existing reusable asset/content sources:

- Office tour: local files under `public/images/office-tour/`, rendered by `RuOfficeTour`.
- Doctor/award photo: `public/images/about/neodent-award-plaque-v4.jpeg`; existing photo block in `RuAbout`.
- Implant imagery: existing procedure assets referenced by `fullArchImplantsData`, and `/images/dental-implants/multiple-implants@2x-9fd6ae22.jpg` used by the combined zygomatic service. Reuse does not prove a patient received a specific four/five/six/pterygoid protocol.
- Botox illustration: local 2017 blog images `botox-d3c5e31e.jpg` and `botox@2x-d599eae3.jpg` exist, but are not evidence of a Botox treatment result.
- Lip case: `src/constants/ruCases.ts` identifies `fcs000004` with real lip-filler images and upper/lower-lip/cannula description. Filler case `fcs000003` is separate. Neither is a Botox case.
- Smile photos: existing `RuWallOfSmiles` / `smileGalleryPhotos` content is reusable for general implant outcomes only when described accurately. General testimonials must not be relabelled as procedure-specific testimonials.

The facial collection also includes unrelated surgeries and a case attributed to another surgeon. Displaying the complete generic collection beneath “Dr Antipov’s Botox results” would be inaccurate. Implant collections likewise need case selection before a specific All-on-5/6 or pterygoid label is asserted.

No exact hero, quote image, procedure gallery, case subset or downloadable handout is assigned per brief. This is a mapping/approval gap, not proof that the repository lacks all useful media. For new patient media preserve release/usage approval, anonymized filenames and EXIF stripping; do not infer permission from a filename.

**Consequential question:** May existing approved photos/cases be reused with accurate general labels and unsupported optional galleries omitted, or must the missing original images be supplied? For Botox specifically, provide an approved Botox case if the gallery must claim Botox outcomes.

## 7. Bounded implementation handoff (not performed)

1. Confirm additive URL ownership, approved clinical copy/quotes, offer conditions, media selection and per-service delivery flow.
2. Extend/combine existing RU service components only enough to preserve the authored section order, two-column lists, number cards and optional blocks. Keep one FAQ source for visible content and JSON-LD; no layout-level FAQPage.
3. Add seven thin routes/data entries, absolute branded titles, truthful page schema and registry entries; no invented EN alternates.
4. Add relevant inbound links from the existing topic parents/hub, consistent ItemList entries, stable RU related links, actual service-context attribution and policy-safe CTAs/modal states.
5. Main agent should then verify type/build checks, desktop/mobile presentation, route status/canonicals/sitemap, FAQ parity, image loading, all modal/validation/success states, and approved-endpoint lead delivery in a controlled test. This audit did not perform these runtime checks.

No additional design preference questions are needed. The consequential decisions above are limited to URL ownership, delivery destination, clinical/offer approval and missing media/case evidence.
