# Dr. Antipov - Oral Surgery Website

## Overview
A Next.js 16.2.3 website for Dr. Alexander Antipov, a board-certified oral & maxillofacial surgeon in Roseville, CA specializing in dental implants, full-arch restoration, corrective jaw surgery, and facial cosmetic surgery.

## Tech Stack
- Next.js 16.2.3 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` in CSS, `@tailwindcss/postcss` in postcss.config.mjs, NO tailwind.config.ts)
- Geist font family
- Framer Motion for animations
- React Hook Form + Zod for forms
- Radix UI components

## Multi-Step Consultation Form
The site includes a 4-step multi-step consultation form (matching fusiondentalimplants.com flow):
- **Form Component**: `src/components/forms/MultiStepConsultationForm.tsx` — supports `variant="modal"` (default) and `variant="inline"` props
- **Modal Wrapper**: `src/components/forms/ConsultationModal.tsx` — triggered by CTA buttons throughout the site
- **Inline Instance**: `src/components/Contact.tsx` — embedded in the contact section at the bottom of the page
- **Backend Integration**: Submits to `https://api.fusiondentalimplants.com/api/v1/user-data` (centralized Salesforce integration)
- **Form Steps (4-step flow)**: Step 1: Assessment questions, Step 2: Personal info (name, DOB, phone, email), Step 3: Address + Payment options (including FICO), Step 4: Consultation readiness with optional appointment scheduling, then confirmation
- **Marketing Attribution**: Captures UTM parameters, click IDs, device type, referral source via cookie-based tracking system
- **Cookie Tracking**: Session (`_fdi_sess`), marketing (`_fdi_mkt`), first-touch attribution (`_fdi_ft`), consent (`_fdi_consent`), client ID (`_fdi_cid`)
- **Cookie Consent**: GDPR-compliant banner with Accept All / Reject All options
- **Tracking Fields**: All sent as snake_case to match Salesforce API (utm_source, landing_page, device_type, etc.)

All "Book Consultation", "Free Consultation", and "Schedule Consultation" buttons throughout the site trigger the ConsultationModal. Components wired: Navbar, Hero, CTA, Services, FAQ, PriceCalculator, ServiceArea, BeforeAfter, About, FullArchShowcase, Footer.

## Contact Info
- Phone: (916) 790-9693 / tel:9167909693
- Address: 911 Reserve Dr Ste 150, Roseville, CA 95678
- Primary color: #1ABB9C (teal), secondary: #004987, accent: #00AEEF

## Project Structure
The Next.js app lives at the **repository root** (single app, no subfolders). The dev workflow runs `npx next dev` from the root.
- `src/app/` - Next.js app router pages and layouts
- `src/app/api/` - API routes (submit-consultation, consultation, contact)
- `src/components/` - React components (flat structure: Navbar.tsx, Hero.tsx, etc.)
- `src/components/forms/` - Form components including consultation modal
- `src/constants/` - Application constants
- `src/lib/` - Utility libraries (animations.ts, analytics.ts, cookies.ts, tracking.ts, utils.ts, email.ts, structured-data.ts)
- `src/utils/` - Helper utilities
- `public/` - Static assets (1,155+ images, videos, fonts, documents)

## Development
Run the development server:
```bash
npm run dev
```
The app runs on port 5000. Workflow: "Start application"

## Deployment
Build for production:
```bash
npm run build
npm run start
```

## Configuration
- `next.config.mjs` - Next.js configuration (includes allowedDevOrigins, cache-control headers)
- `postcss.config.mjs` - PostCSS with @tailwindcss/postcss
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui component configuration
