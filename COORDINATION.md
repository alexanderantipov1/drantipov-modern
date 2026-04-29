# Coordination

This file is the shared async handoff between Claude and Codex for the
DrAntipov.com `/ru` funnel work.

## Ground Rules

- Keep the English DrAntipov.com site intact unless explicitly requested.
- Treat `/ru` as an additive acquisition layer, not a conversion of `/`.
- Do not add a visible `Русский` / RU switch to the English navbar yet.
- Keep Salesforce Web-to-Lead as the primary `/api/lead` path for the RU form.
- Do not use user-facing `Russian`, `Russian-language`, `Russian-speaking`,
  `русск*`, or `на русском` copy on the frontend unless the operator reverses
  that directive.
- The page is already in Russian; users do not need to be told that.
- Keep English only where it is a useful dental/search anchor term, such as
  `All-on-4`, `All-on-6`, `zygomatic implants`, `bone grafting`, `sinus lift`,
  `IV sedation`, `3D CT`, `second opinion`, `concierge`, and place names.
- Before staging, run a grep for user-facing `Russian|русск*` terms in the RU
  pages/components/data and inspect any hits.

## Implemented

- Foundation `/ru` funnel is additive and live on `main`.
- `/api/lead` routes RU form submissions through Salesforce Web-to-Lead.
- RU address matches the English site: `911 Reserve Dr, Suite 150, Roseville,
  CA 95678`.
- Phone number has been normalized across site surfaces to `(916) 783-2110`.
- `/ru/reno` and wisdom-teeth/oral-surgery content are included.
- `/ru/questions` and seven direct-answer guide pages are included for LLM
  SEO/GEO content.
- Sitemap includes the RU city and guide pages.
- Robots policies explicitly allow major search/AI crawlers while blocking
  `/api/` and `/admin/`.
- User-facing `Russian` / `русск*` copy was removed from the RU frontend.

## Latest Commit

- `f832147 Add /ru/about, /ru/glossary, sticky concierge bar, and llms.txt`
- `372232e Add implant SEO guides and RU copy cleanup`
- Pushed to `origin/main`.

## Verification

Last verified after the SEO/GEO cleanup:

- `npm run build` passed.
- `GET /ru` returned 200.
- `GET /ru/roseville` returned 200.
- `GET /ru/questions/stoimost-implantov` returned 200.
- Rendered HTML grep for `Russian|русск*` returned no matches on those tested
  pages.

## Open Coordination Notes

- If Claude or Codex adds new RU copy, rerun the frontend language sweep before
  commit.
- If deploy setup changes, cross-link `RU_FUNNEL.md` from `DEPLOYMENT.md`.
- If lead reliability becomes an issue, consider adding a secondary Resend
  email notification alongside Salesforce Web-to-Lead.

## Codex -> Claude, 2026-04-29

Built dedicated ad landing pages for full-arch implant campaigns:

- English: `/full-arch-dental-implants`
- RU: `/ru/full-arch-dental-implants`

The pages use a focused conversion funnel: hero offer, 60-second eligibility
form, 3D CT consultation value stack, fixed implants vs dentures comparison,
clinical case sequence, treatment path, surgeon proof, FAQ, sticky mobile CTA,
and language switch. The form posts to `/api/lead` with UTM capture and source
`Full Arch Ad Landing`.

Also cleaned the pushed `/ru/glossary` and `public/llms.txt` text that
reintroduced `Russian` / `русск*` wording. Current targeted grep is clean for
the new RU full-arch page and the RU app copy, except the pre-existing literal
press title `Russian Time Magazine Feature` in `Blog.tsx`.

Verification:

- `npm run build` passed.
- `GET /full-arch-dental-implants` returned 200.
- `GET /ru/full-arch-dental-implants` returned 200.
- Rendered HTML grep for `Russian|русск*` returned no matches on the new RU
  landing page.
