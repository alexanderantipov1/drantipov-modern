# drantipov.com — English site

Next.js 16 (App Router) website for **Dr. Alexander V. Antipov, DDS** — board-certified oral and maxillofacial surgeon in Roseville, California.

This package is the **production-ready English version** of the site.
Russian and Spanish localizations have been stripped from this build.

---

## Stack

- **Framework**: Next.js 16 (App Router, Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + custom design tokens
- **UI**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: GA4 + Microsoft Clarity (env-driven, optional)
- **Package manager**: npm (or yarn, lockfiles for both included)

Node version required: **20.x or 22.x** (Next.js 16 minimum is Node 20).

---

## Quick start (local dev)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local
# Edit .env.local — at minimum set NEXT_PUBLIC_SITE_URL

# 3. Start the dev server
npm run dev
# Site is now running at http://localhost:3000
```

---

## Production build & deploy

### Recommended: Vercel

1. Push this repository to GitHub.
2. In Vercel: **New Project → Import from GitHub → select repo**.
3. Add all environment variables from `.env.example` in Vercel project settings → Environment Variables.
4. Vercel will auto-detect Next.js and deploy. No further configuration needed.

### Generic Node hosting (Docker, fly.io, Railway, custom VPS, etc.)

```bash
# Build a production bundle
npm run build

# Start the production server (default port 3000)
npm run start
```

Set environment variables on your hosting platform before starting.

### Static hosting (Netlify, Cloudflare Pages, etc.)

This is a hybrid app (server components + dynamic routes). It is **not a static export**. Use Vercel, Netlify with Next.js runtime, or Node hosting. Plain static export will not work.

---

## Environment variables

All variables documented in `.env.example`. The minimum required for the site to render is:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Used in sitemap, canonical, OG tags |
| `CONTACT_EMAIL` | yes (for forms) | Where contact form submissions are sent |
| `RESEND_API_KEY` | yes (for forms) | Transactional email delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | Google Analytics 4 |
| `NEXT_PUBLIC_CLARITY_ID` | no | Microsoft Clarity heatmaps |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | no | Google Search Console |
| `NEXT_PUBLIC_BING_VERIFICATION` | no | Bing Webmaster Tools |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | no | Yandex.Webmaster |

Without analytics or verification IDs, the site still works — those features are simply disabled.

---

## Available npm scripts

```bash
npm run dev      # Start dev server on :3000 with hot reload
npm run build    # Build production bundle
npm run start    # Run production server (after build)
npm run lint     # Run ESLint
```

---

## Project structure

```
src/
├── app/                       # Next.js App Router (routes & layouts)
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout (metadata, fonts, GA, Clarity)
│   ├── sitemap.ts             # Dynamic sitemap.xml
│   ├── robots.ts              # Dynamic robots.txt
│   ├── manifest.ts            # PWA manifest
│   ├── about/                  # About Dr. Antipov
│   ├── our-team/              # Team page
│   ├── expertise/             # Service pages (full-arch, single-tooth, etc.)
│   ├── for-patients/          # Patient resources + insights articles
│   ├── for-dentists/          # Referral resources
│   ├── surgical-cases/        # Before/after case gallery
│   ├── locations/             # 46+ city landing pages
│   ├── insurance/             # Insurance hub + carriers
│   ├── legal/                 # Privacy, Terms, HIPAA, Disclaimer
│   ├── all-on-4-cost/         # Conversion landing pages
│   ├── all-on-4-clearchoice-alternative/
│   ├── jaw-surgery-recovery-timeline/
│   ├── smile-again-foundation/
│   ├── full-arch-dental-implants/ # Ads landing (campaigns)
│   ├── media/                 # Media speaking & videos
│   └── contact/
├── components/                # React components
│   ├── ui/                    # shadcn/ui primitives
│   ├── sections/              # Section, Container, GlassCard
│   ├── expertise/             # ExpertisePageHero, ServiceCard
│   ├── forms/                 # Consultation forms
│   └── analytics/             # GoogleAnalytics
├── constants/                 # siteConfig, cities, cases
├── data/                      # Static content (fullArchLanding etc.)
├── lib/                       # Helpers (structured-data, utils)
└── types/

public/
├── images/                    # All site images
├── llms.txt                   # AI search optimization
└── ...
```

---

## SEO / GEO

This codebase has been pre-optimized:

- **Sitemap** auto-generated at `/sitemap.xml`
- **robots.txt** at `/robots.txt` whitelists AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **Schema.org JSON-LD** present on all key pages (Dentist + LocalBusiness + Physician + MedicalProcedure + FAQPage + Article)
- **hreflang** configured for `en-US` and `x-default` (Russian/Spanish removed in this build)
- **Security headers** (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) in `next.config.mjs`
- **`llms.txt`** at `/llms.txt` for AI-search citation context

After first deploy, add the site in **Google Search Console** and submit `https://drantipov.com/sitemap.xml`.

---

## Notes

- Russian (`/ru/*`) and Spanish (`/es/*`) routes have been removed from this build. The codebase only renders English content.
- If you need to re-add a localization later, restore the `src/app/ru/*` or `src/app/es/*` folders from your previous archive.
- All images are stored in `public/images/`. Image optimization is handled automatically by Next.js Image component.
- `next-sitemap` package has been removed — sitemap and robots are now generated by Next.js App Router (`src/app/sitemap.ts` and `src/app/robots.ts`).

---

## Contact

Questions about this codebase? Reach out to the development team that delivered this build.
