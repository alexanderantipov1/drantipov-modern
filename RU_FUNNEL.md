# Russian-Speaking Lead Funnel — `drantipov.com/ru`

## 1. Goal

Elevate the Dr. Antipov dental brand and capture Russian-speaking leads —
Russian, Ukrainian, Belarusian, Moldovan, Kazakh, and other ex-USSR diaspora
— for high-LTV implant and oral surgery treatments. The audience is
**Russian-speaking by language**, not by ethnicity or nationality, and is
concentrated in U.S./Canada metros within a drivable or short-flight radius
of Roseville, CA, plus North-American source markets willing to travel for
implant treatment.

Operator's stated revenue mix is **~80% Russian-speaking patients**, so the
RU funnel is treated as a **first-class revenue channel**, not a translated
side door.

## 2. Strategic frame — concierge, not "ads in Russian"

The closest analog is **Turkish dental-implant medical-tourism marketing**:
clinics that won by packaging the entire patient journey rather than just
buying translated ads. Lift comes from native-language trust signals and a
concierge intake, not from URL structure or keyword density.

Five things that move the needle for this audience, in order:

1. **A real Russian-speaking intake** — phone, WhatsApp, Telegram, SMS, or
   email — so the patient never has to translate their question.
2. **Trust signals on the page**: doctor credentials, before/after, video,
   transparent pricing, financing.
3. **A concrete next step**: a single, simple lead form, not a wall of
   buttons.
4. **Channel-appropriate distribution**: Telegram channels, RU Facebook
   groups, RU YouTube, partner referrals — *not* VK/OK (dead in NA
   diaspora) and *not* GigaChat/YandexGPT (sanctioned, NA-unreachable).
5. **City-by-city follow-up** so we know which metros convert.

## 3. Compliance guardrail

Meta and Google restrict housing/employment/credit/medical advertising
targeting in the U.S. and Canada. Target on **language + geography +
content**, never on ethnicity or national origin. The funnel says
"Russian-speaking service," not "for Russians only." Same applies to ad
copy.

## 4. Architecture (current state in this repo)

The /ru layer is **purely additive** — no English route, component, or
config has been changed. The English site continues to work exactly as it
did before.

```
src/app/
  ru/
    page.tsx             # /ru — homepage
    [city]/page.tsx      # /ru/[city] — per-city landing
  api/
    lead/route.ts        # /api/lead — Salesforce Web-to-Lead handler
  sitemap.ts             # extended to include /ru and /ru/<city>

src/components/
  RussianImplantLanding.tsx   # the visual landing (used by /ru and /ru/[city])
  RussianLeadForm.tsx         # the lead capture form

src/data/
  russianImplantFunnel.ts     # data layer: cities, treatments,
                              # contact/timing options, process steps,
                              # office contact info
```

### Data flow

```
Visitor lands on /ru or /ru/<city>
  ↓
RussianImplantLanding renders the page (RU copy, hero, treatments,
process, FAQ, CTA, lead form)
  ↓
RussianLeadForm captures: name · phone · email · city · treatment ·
timing · contactPreference · message
  + on submit also captures: utm_source/medium/campaign/content/term ·
  document.referrer · landing_path · started_at · honeypot
  ↓
POST /api/lead (JSON body)
  ↓
Server-side route (`src/app/api/lead/route.ts`):
  • drops honeypot hits
  • drops <800ms submissions (likely bot)
  • reads `x-vercel-ip-city`, `x-vercel-ip-country-region`,
    `x-vercel-ip-country` for IP-derived geo
  • forwards to Salesforce Web-to-Lead
    (https://webto.salesforce.com/servlet/servlet.WebToLead)
  • lead_source = utm_source if present, else "Russian Dental Funnel"
  • description bundles every captured field for the sales rep
  ↓
Salesforce CRM (existing org)
```

### Cities currently scaffolded

`/ru/sacramento`, `/ru/san-francisco`, `/ru/los-angeles`, `/ru/seattle`,
`/ru/new-york`, `/ru/miami`, `/ru/toronto`, `/ru/vancouver`. Defined in
`src/data/russianImplantFunnel.ts → russianCityPages`. Add new cities by
appending to that array; `/ru/[city]` and the sitemap will pick them up
automatically.

## 5. Activation — env vars

Drop into `.env.local` (Vercel Project Settings → Environment Variables
in production):

| Var | Required | Purpose |
| --- | --- | --- |
| `SALESFORCE_ORG_ID` | **yes** | 15- or 18-char Salesforce `oid`. Without it `/api/lead` returns 500 and logs the dropped payload (does not silently succeed). Find it under Setup → Company Information → "Salesforce.com Organization ID". |
| `SALESFORCE_DEBUG_EMAIL` | no | While testing, Salesforce will email a debug receipt for every submission. Remove in production. |

Additional vars (e.g. `NEXT_PUBLIC_CONTACT_WHATSAPP`,
`NEXT_PUBLIC_CONTACT_TELEGRAM`) will land here as concierge messenger
buttons get added to the RU layer.

## 6. SEO

- `/ru` and `/ru/<city>` are listed in the sitemap with appropriate
  hreflang alternates.
- Per-page metadata in `src/app/ru/page.tsx` and `src/app/ru/[city]/page.tsx`
  sets canonical, og:locale=`ru_RU`, alternate languages.
- Architecture is **subdirectory** (`/ru`), not a `.ru` ccTLD or
  subdomain. This inherits the existing `drantipov.com` domain authority,
  avoids the `.ru` geo-targeting trap (Google would tie it to Russia),
  and keeps payments/sanctions clean.

## 7. Open work — explicit TODOs

These are deliberately *not* built yet; track them here so they don't
get lost:

- **Real client testimonials** (currently the funnel uses
  objection-handling cards). Replace with named patient quotes + photos
  + service tag once consents are in hand.
- **Real RU before/after gallery** — the English `Gallery` /
  `BeforeAfter` components exist and can be mirrored with RU captions.
- **Concierge messenger buttons** (WhatsApp, Telegram, click-to-call)
  surfaced above the form on every /ru page.
- **Russian-speaking site chatbot** — Claude API or OpenAI with a
  Russian system prompt + the service catalog. Note: `GigaChat` /
  `YandexGPT` are not viable — Russia-only, sanctioned, North America
  cannot reach them. Use Claude/OpenAI in Russian instead.
- **Russian Telegram channel + intake bot** for organic distribution.
- **Branded RU OG image** — currently /ru pages reuse the English OG
  asset.
- **Dedicated RU contact-channel config** — RU pages currently use the main
  office phone and address. Add WhatsApp/Telegram only after the operator
  confirms the exact channels for Russian-speaking intake.
- **Per-city Meta + Google campaigns** with ZIP + language targeting
  feeding into utm-tagged links so `lead_source` differentiates them in
  Salesforce.
- **Salesforce custom field IDs** — Treatment / Timing / Preferred
  Contact currently land in the description. When the operator wants
  proper picklists, wire `00N…` field IDs as additional env vars.

## 8. Channel mix — what to spend on first

From the lead-research pass; prioritized for first dollar:

1. **Telegram channels** in target metros (NYC, Sacramento, LA, Seattle,
   Miami, Toronto). Buy sponsored posts via channel admins. Vet via TGStat.
2. **RU YouTube** — sponsor existing RU-speaking dental/relocation
   creators or produce one explainer video per top procedure.
3. **Meta Russian-language creative** with ZIP + language targeting
   (no demographic targeting on dental services — see compliance
   guardrail).
4. **Referral partners** — RU-speaking notaries, realtors, churches,
   money-transfer offices in Sacramento + Bay. Per-lead kickback.
5. **Local RU press** — Russkaya Reklama / Davidzon Radio for the 50+
   demo, especially around tax season and consultation pushes.

What to skip on day one: VK/OK (dead in NA diaspora), TikTok in Russian
(only if there's on-camera talent), city-specific landing-page
duplication beyond the metros above (thin-content risk under Google's
helpful-content system).

## 9. Phasing

| Phase | Status | Items |
| --- | --- | --- |
| 1 — Foundation | **done** | /ru homepage, /ru/<city> dynamic pages, lead form, Salesforce route, sitemap, hreflang. |
| 2 — Conversion lift | next | Real testimonials, before/after gallery, messenger buttons, OG image, phone reconciliation. |
| 3 — Distribution | next | Telegram channel + bot, partner referral kit, first Meta + Google campaigns, first YouTube creator partnership. |
| 4 — Optimization | later | Per-channel cohort analysis (CPL → qualified → booked → closed → revenue/lead), Salesforce custom-field mapping, RU site chatbot. |

## 10. Working with this repo

The `/ru` layer is meant to be edited *additively*. Two coordination
rules to keep things clean:

1. **Do not modify English routes/components** to support /ru — that's
   what was clarified by the operator on 2026-04-26. The English site is
   its own concern.
2. **Add new RU content via `russianImplantFunnel.ts`**. New cities,
   treatment options, timing options, contact preferences, and process
   steps go in that file; the page templates pick them up.
