# Dr. Antipov Website - Master Task List

**Project**: Dr. Alexander Antipov Personal Brand & Educational Hub
**Version**: 1.0
**Created**: 2025-10-12
**Purpose**: Single source of truth for project implementation with PRD and rules references

> **Status note (2026-10-18)**
>
> This list is the original October 2025 build plan. The site has been live on Vercel at https://www.drantipov.com for a long time and has grown well past this plan: a Russian version at `/ru`, location, insurance, surgical-case, and insights pages, cost calculators, and SEO regression tests. On 2026-10-18 the task items were reconciled against the code:
>
> - **Checked off (`[x]`)** only where the code or the live site shows the item is done. Notes give the evidence, for example the actual file path when a page shipped at a different route.
> - **Obsolete (~~struck through~~)** where the item no longer applies: superseded by a different implementation, conflicting with the current stack (Next.js 16, Tailwind 4, `app/sitemap.ts`/`robots.ts`, Microsoft Clarity instead of Hotjar), or tied to a page or component that was never built that way. Task-level notes explain why.
> - **Still open (`[ ]`)**: anything not clearly done in code, including all manual QA, external-account, and monitoring items. When in doubt, items were left open.
>
> Counts after reconciliation: 203 checked, 141 obsolete, 187 open. The "Technical Stack" and "Pages to Build" sections below are kept as the original plan; see README.md for the current stack and structure.

---

## 📋 HOW TO USE THIS TASK LIST

This document serves as the **complete roadmap** for building the Dr. Antipov website from scratch. Every task:
- ✅ References specific **PRD sections** (from [dr-antipov-prd.md](dr-antipov-prd.md))
- 📖 References **applicable rules** (from `.claude/rules/`)
- 🎯 Has clear acceptance criteria
- 🔗 Shows dependencies on other tasks

### Rules to Use for This Project:
✅ Use these rules:
- `task-list.md` - Task management guidelines
- `project-structure.md` - File organization
- `page-structure.md` - Next.js App Router structure
- `ui-components.md` - Glassmorphism design system
- `form-handling.md` - React Hook Form + Zod
- `security.md` - HIPAA-compliant security
- `environment-variables.md` - Next.js env vars
- `data-fetching.md` - Email-based forms with Resend
- `utilities.md` - Pure utility functions
- `hooks.md` - React hooks (ignore TanStack Query parts)
- `testing.md` - Testing (ignore Supabase/TanStack Query parts)

❌ Ignore these rules (not applicable to this project):
- `server-action.md` - Uses Supabase (we don't have a database)
- `get-api-routes.md` - Uses Supabase (we don't have a database)
- `auth-middleware.md` - No authentication needed
- `security-audit.md` - Supabase-specific
- `enterprise-security-checklist.md` - Wrong project (NOËMA Institut)
- `llm.md` - No LLM/AI functionality
- `lllm-test.md` - No LLM/AI functionality
- `logging.md` - Optional (not implemented yet)

---

## 📊 PROJECT OVERVIEW

### Success Metrics (PRD §1.5)
- 40% increase in consultation requests to Fusion Dental
- 25% increase in course enrollment inquiries
- 15+ dentist referral partnership leads/month
- 50% reduction in bounce rate
- Outrank Nuvia for "oral surgeon Northern California" within 6 months

### Technical Stack (PRD §3.1, original plan; current: Next.js 16, React 19, Tailwind 4, Zod 4, Yarn 1, see README.md)
- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4+ + Shadcn UI
- **Animation**: Framer Motion 11+
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: GA4, GTM, Hotjar, Facebook Pixel
- **Package Manager**: yarn

### Pages to Build: 19 Total (PRD §5, original plan; the live site has far more routes, several at different paths)
1. Home (`/`)
2. About (`/about`)
3. Contact (`/contact`)
4. Dental Implants (`/expertise/dental-implants`)
5. Full-Arch Restoration (`/expertise/full-arch-restoration`)
6. Corrective Jaw Surgery (`/expertise/corrective-jaw-surgery`)
7. Wisdom Teeth (`/expertise/wisdom-teeth`)
8. Facial Reconstruction (`/expertise/facial-reconstruction`)
9. Referral Partners (`/for-dentists/referral-partners`)
10. Education/Courses (`/for-dentists/education/courses`)
11. Testimonials (`/for-patients/testimonials`)
12. Consultation (`/for-patients/consultation`)
13. Videos (`/media/videos`)
14. Speaking (`/media/speaking`)
15. Privacy Policy (`/legal/privacy-policy`)
16. Terms of Service (`/legal/terms-of-service`)
17. Medical Disclaimer (`/legal/medical-disclaimer`)
18. HIPAA Notice (`/legal/hipaa-notice`)
19. Blog Integration (`/blog/*` - proxy to existing site)

---

## ✅ COMPLETED TASKS

### Phase 1: Foundation (Tasks 1.1-1.8) ✅ COMPLETE
- ✅ **Task 1.1**: Next.js 14.2.33 project initialized with TypeScript
- ✅ **Task 1.2**: Tailwind CSS configured with custom design system
- ✅ **Task 1.3**: Shadcn UI installed (Button, Card, Input, Label, Textarea, Select, Dialog, Badge, Separator, Accordion)
- ✅ **Task 1.4**: Complete project structure created
- ✅ **Task 1.5**: Environment variables configured (.env.local, .env.example)
- ✅ **Task 1.6**: Core dependencies installed (Framer Motion, React Hook Form, Zod, Resend, lucide-react)
- ✅ **Task 1.7**: Site configuration constants created (siteConfig.ts, services.ts)
- ✅ **Task 1.8**: Reusable UI components created (GlassCard, Section, Container)

### Phase 2: Layout & Navigation (Tasks 2.1-2.5) ✅ COMPLETE
- ✅ **Task 2.1**: Root Layout with fonts and metadata
- ✅ **Task 2.2**: Header with glassmorphism, sticky nav, mobile menu
- ✅ **Task 2.3**: Footer with contact info, links, social media
- ✅ **Task 2.4**: Navigation structure (integrated in Header)
- ✅ **Task 2.5**: Mobile menu (integrated in Header)

### Phase 3: Homepage (Tasks 3.1-3.6) ✅ COMPLETE
- ✅ **Task 3.1**: Hero section with dual CTAs and trust indicators
- ✅ **Task 3.2**: About section (src/components/home/AboutSection.tsx)
- ✅ **Task 3.3**: Expertise showcase with 5 service cards (src/components/home/ExpertiseSection.tsx)
- ✅ **Task 3.4**: Why Choose section with 4 differentiators (src/components/home/WhyChooseSection.tsx)
- ✅ **Task 3.5**: CTA section for consultation booking (src/components/home/CTASection.tsx)
- ✅ **Task 3.6**: Animations added (fadeInUp, fadeInLeft, fadeInRight, stagger effects)

**Homepage Components Created (4 sections)**:
- ✅ AboutSection.tsx - Board certification, credentials, professional photo
- ✅ ExpertiseSection.tsx - Service cards with hover effects
- ✅ WhyChooseSection.tsx - Key differentiators with icons
- ✅ CTASection.tsx - Dual CTA (phone + online booking)

### Phase 4: About Page ✅ COMPLETE
- ✅ **Task 4.1**: About page with all sections (src/app/about/page.tsx)
  - Hero section
  - Biography with professional photo
  - Education & Training timeline (4 entries)
  - Board Certifications (5 certifications)
  - Practice Philosophy

### Phase 5: Contact Page & Forms ✅ COMPLETE
- ✅ **Task 5.1**: Contact page (src/app/contact/page.tsx)
- ✅ **Task 5.2**: Contact form with validation (src/components/forms/ContactForm.tsx)
- ✅ **Task 5.3**: Form validation schema (src/lib/validations/contact.ts)
- ✅ **Task 5.4**: API route for submission (src/app/api/contact/route.ts)
- ✅ React Hook Form + Zod integration
- ✅ Success/error states
- ✅ Referring dentist option

**Technical Achievements**:
- ✅ 4 complete pages (Home, About, Contact, Expertise)
- ✅ Form validation with Zod
- ✅ API routes for form submission
- ✅ Scroll-triggered animations
- ✅ Stagger animations
- ✅ Development server running at http://localhost:3000
- ✅ 0 vulnerabilities
- ✅ Responsive design
- ✅ Smooth 60fps animations
- ✅ **CRITICAL FIX**: All pages converted to Server Components (following Next.js best practices)
  - page.tsx files are Server Components (NO "use client")
  - Client Components only for interactive parts (animations, forms)
  - Extracted HeroSection.tsx and AboutPageHero.tsx as client components
  - Created comprehensive checklist (.claude/rules/server-client-component-checklist.md)

### Phase 6: Expertise Landing Page ✅ COMPLETE
- ✅ **Task 6.1**: Expertise landing page (src/app/expertise/page.tsx)
  - Hero section with animations (src/components/expertise/ExpertiseHero.tsx)
  - Service cards for 5 expertise areas (src/components/expertise/ServiceCard.tsx)
  - "Why Choose Dr. Antipov" section
  - CTA section
  - Server Component pattern followed (page is Server Component, animations in Client Components)

**Files Created**:
- ✅ src/app/expertise/page.tsx - Server Component
- ✅ src/components/expertise/ExpertiseHero.tsx - Client Component (animations)
- ✅ src/components/expertise/ServiceCard.tsx - Client Component (hover effects)
- ✅ src/components/expertise/index.ts - Barrel export

---

### Phase 7: Individual Expertise Pages (5 Services) ✅ COMPLETE
- ✅ **Task 7.1**: Full-Arch Implants page (src/app/expertise/full-arch-implants/page.tsx)
- ✅ **Task 7.2**: Single Tooth Replacement page (src/app/expertise/single-tooth/page.tsx)
- ✅ **Task 7.3**: Bone Grafting page (src/app/expertise/bone-grafting/page.tsx)
- ✅ **Task 7.4**: Corrective Jaw Surgery page (src/app/expertise/jaw-surgery/page.tsx)
- ✅ **Task 7.5**: Sleep Apnea Surgery page (src/app/expertise/sleep-apnea/page.tsx)

**Reusable Components Created**:
- ✅ src/components/expertise/ExpertisePageHero.tsx - Hero sections with badges
- ✅ src/components/expertise/BenefitsList.tsx - Animated benefit lists with checkmarks
- ✅ src/components/expertise/ProcessTimeline.tsx - Step-by-step process timelines

**Each Page Includes**:
- SEO-optimized metadata (title, description, keywords)
- Animated hero section with badge
- "What It Is" educational section
- Benefits section with animated list
- Process timeline (4-6 steps)
- Ideal candidates or conditions treated section
- 5-6 FAQs with accordion
- CTA section with phone number
- Server Component architecture (page.tsx = Server Component)
- 1200-1500 words of comprehensive content

### Phase 8: For Dentists Pages ✅ COMPLETE
- ✅ **Task 8.1**: Referral Partners page (src/app/for-dentists/referral-partners/page.tsx)
  - Hero section with "For Dental Professionals" badge
  - 6 benefits of referring to Dr. Antipov
  - Comprehensive surgical services grid (6 services)
  - 4-step referral process timeline
  - Testimonials from 2 referring dentists
  - CTA with phone and email contact
- ✅ **Task 8.2**: Education/Courses page (src/app/for-dentists/education/courses/page.tsx)
  - Hero section (Fusion Dental Academy)
  - 4 benefits of training programs
  - 3 detailed course listings with pricing and dates
  - Course highlights and learning outcomes
  - About Dr. Antipov as instructor
  - External links to Udemy courses
  - Server Component architecture maintained

**Files Created**:
- ✅ src/components/for-dentists/ReferralHero.tsx - Client Component (animations)
- ✅ src/components/for-dentists/index.ts - Barrel export

### Phase 9: Patient Resources Pages ✅ COMPLETE
- ✅ **Task 9.1**: Testimonials page (src/app/for-patients/testimonials/page.tsx)
  - Stats section (4 key metrics)
  - 3 video testimonial cards with play buttons
  - 6 written testimonials with 5-star ratings
  - Trust section with Dr. Antipov quote
  - Links to Google, Yelp, Healthgrades
- ✅ **Task 9.2**: Consultation page (src/app/for-patients/consultation/page.tsx)
  - Consultation request form
  - Office location with map placeholder
  - Office hours and contact info
  - "What to Expect" 4-step guide
  - New patients welcome badge
- ✅ **Task 9.3**: Consultation form (src/components/forms/ConsultationForm.tsx)
  - React Hook Form + Zod validation
  - 7 form fields (name, email, phone, interest, message, contact preference)
  - Honeypot spam prevention
  - Privacy policy consent checkbox
  - Success/error state handling
  - Loading states with spinner
  - Security notice about no PHI collection
- ✅ **Task 9.4**: Consultation validation schema (src/lib/validations/consultation.ts)

**Files Created**:
- ✅ src/app/for-patients/testimonials/page.tsx - Server Component
- ✅ src/app/for-patients/consultation/page.tsx - Server Component
- ✅ src/components/forms/ConsultationForm.tsx - Client Component (form interactivity)
- ✅ src/lib/validations/consultation.ts - Zod schema

### Phase 9.5: Consultation API Route ✅ COMPLETE
- ✅ **Task 9.5**: Consultation API endpoint (src/app/api/consultation/route.ts)
  - POST endpoint for consultation form submissions
  - Zod validation using consultationFormSchema
  - Honeypot spam prevention (silent rejection)
  - Email integration prepared (Resend ready)
  - Success/error responses
  - Request metadata logging (IP, user agent, referer)
  - Confirmation email template prepared

**Files Created**:
- ✅ src/app/api/consultation/route.ts - API Route Handler

**Testing**:
- ✅ Valid submission returns 200 OK
- ✅ Honeypot triggered submissions return 200 OK (silent rejection)
- ✅ Invalid data returns 400 error with validation message
- ✅ Consultation form integration verified

### Phase 9.5.1: Navigation-Driven Landing & Resource Pages ✅ COMPLETE
- ✅ **Task 9.5.1.1**: For Dentists landing page (src/app/for-dentists/page.tsx)
  - Hero section targeting dental professionals
  - 6 surgical services offered (full-arch, single tooth, bone grafting, jaw surgery, sleep apnea, extractions)
  - "Why Refer to Dr. Antipov" benefits section (4 key advantages)
  - Quick links to referral partners and education pages
  - Contact CTA with phone and email
  - Glassmorphism design consistent with site theme

- ✅ **Task 9.5.1.2**: For Patients landing page (src/app/for-patients/page.tsx)
  - Hero section for patient resources
  - 4 quick access resource cards (consultation, testimonials, pre-op, post-op)
  - "What to Expect" patient journey (4 steps)
  - Office information section (location, hours, contact)
  - FAQs preview with link to full page
  - Emergency contact information prominently displayed

- ✅ **Task 9.5.1.3**: Pre-Op Instructions page (src/app/for-patients/pre-op/page.tsx)
  - Before surgery checklist (medications, eating/drinking, personal prep, medical conditions)
  - What to bring on surgery day (6 critical items)
  - What NOT to do before surgery (6 prohibitions)
  - Day of surgery expectations (4 key points)
  - Special instructions for IV sedation/general anesthesia
  - NPO status requirements clearly stated
  - Companion requirements for anesthesia patients
  - Illness notification protocol (within 3 days of surgery)

- ✅ **Task 9.5.1.4**: Post-Op Care page (src/app/for-patients/post-op/page.tsx)
  - Immediate post-op care section (first 24 hours, pain management, swelling)
  - Bleeding control instructions (5-step protocol)
  - Diet guidelines with 3-stage progression (Day 1, Days 2-7, Week 2+)
  - Oral hygiene timeline (Days 1-2, Days 3-7, Week 2+)
  - What to avoid during recovery (8 items)
  - Normal post-operative symptoms (5 common symptoms with descriptions)
  - When to call office (8 warning signs)
  - 24/7 emergency contact prominently displayed
  - Follow-up appointment reminder

- ✅ **Task 9.5.1.5**: FAQs page (src/app/for-patients/faqs/page.tsx)
  - 6 FAQ categories with icons (Dental Implants, Full-Arch Restoration, Bone Grafting, Insurance, Jaw Surgery, General)
  - Comprehensive Q&A using Accordion component (30+ questions)
  - Quick contact section with consultation scheduling CTA
  - Emergency care information prominently displayed
  - Cross-links to related patient resources (pre-op, post-op, testimonials)

- ✅ **Task 9.5.1.6**: Navigation Update (src/constants/siteConfig.ts)
  - Fixed path inconsistency: changed /patient-resources to /for-patients
  - Updated submenu to include all 5 patient resource pages
  - Ensured all navigation links point to existing pages

**Files Created**:
- ✅ src/app/for-dentists/page.tsx - Server Component
- ✅ src/app/for-patients/page.tsx - Server Component
- ✅ src/app/for-patients/pre-op/page.tsx - Server Component
- ✅ src/app/for-patients/post-op/page.tsx - Server Component
- ✅ src/app/for-patients/faqs/page.tsx - Server Component

**Files Updated**:
- ✅ src/constants/siteConfig.ts - Navigation links corrected

**Testing**:
- ✅ /for-dentists returns 200 OK
- ✅ /for-patients returns 200 OK
- ✅ /for-patients/pre-op returns 200 OK
- ✅ /for-patients/post-op returns 200 OK
- ✅ /for-patients/faqs returns 200 OK
- ✅ All pages verified as Server Components
- ✅ Navigation menu correctly links to all pages

**Rationale**: These pages were created to fulfill navigation menu links that pointed to non-existent pages. While not explicitly listed in the original PRD sitemap (§5.1), they were present in the navigationLinks configuration and represent critical patient resources and professional touchpoints expected on a medical practice website.

### Phase 9.6: Legal Pages ✅ COMPLETE
- ✅ **Task 9.6.1**: Privacy Policy page (src/app/legal/privacy-policy/page.tsx)
  - Table of contents with anchor links
  - Information collection practices
  - Data usage and security measures
  - Cookie and tracking technologies
  - Third-party services disclosure (Google Analytics, Hotjar, Facebook Pixel, Resend)
  - GDPR and CCPA compliance sections
  - User privacy rights explained
  - Contact information
  - "Website does NOT collect PHI" disclaimer
  - noindex, nofollow meta tags
  - Last updated date: October 12, 2025

- ✅ **Task 9.6.2**: Terms of Service page (src/app/legal/terms-of-service/page.tsx)
  - Table of contents with anchor links
  - Acceptance of terms
  - Permitted and prohibited use
  - Intellectual property rights
  - User-submitted content policy
  - Disclaimer of warranties
  - Limitation of liability
  - Governing law (California)
  - Dispute resolution
  - "Do not submit PHI" warning
  - noindex, nofollow meta tags

- ✅ **Task 9.6.3**: Medical Disclaimer page (src/app/legal/medical-disclaimer/page.tsx)
  - Prominent warning notice with AlertTriangle icon
  - Not medical advice disclaimer
  - No doctor-patient relationship clause
  - Consult qualified provider section
  - Accuracy of information disclaimer
  - Individual results vary warning
  - Testimonials disclaimer
  - Before/after photos disclaimer
  - External links disclaimer
  - Medical emergency notice (call 911)
  - noindex, nofollow meta tags

- ✅ **Task 9.6.4**: HIPAA Notice page (src/app/legal/hipaa-notice/page.tsx)
  - Prominent "Website does NOT collect PHI" notice with Info icon
  - Table of contents with anchor links
  - Overview of HIPAA requirements
  - Uses and disclosures of PHI (treatment, payment, operations)
  - Patient rights (access, amendment, accounting, restrictions)
  - Practice responsibilities
  - Complaint procedures (office and HHS OCR)
  - Privacy Officer contact information
  - Changes to notice policy
  - No retaliation guarantee
  - Effective date: October 12, 2025
  - noindex, nofollow meta tags

**Files Created**:
- ✅ src/app/legal/privacy-policy/page.tsx - Server Component
- ✅ src/app/legal/terms-of-service/page.tsx - Server Component
- ✅ src/app/legal/medical-disclaimer/page.tsx - Server Component
- ✅ src/app/legal/hipaa-notice/page.tsx - Server Component

**Key Features**:
- All pages are Server Components (no "use client")
- Glassmorphism design with GlassCard components
- Comprehensive legal coverage
- HIPAA compliance emphasized throughout
- Mobile-responsive design
- Professional legal language
- Easy-to-read formatting with headings and lists
- Color-coded alert boxes for important notices
- Contact information on all pages
- Footer links already configured

**Testing**:
- ✅ /legal/privacy-policy returns 200 OK
- ✅ /legal/terms-of-service returns 200 OK
- ✅ /legal/medical-disclaimer returns 200 OK
- ✅ /legal/hipaa-notice returns 200 OK
- ✅ All pages verified as Server Components
- ✅ Footer navigation links working

### Phase 10: Media Pages ✅ COMPLETE
- ✅ **Task 10.1**: Videos page (src/app/media/videos/page.tsx)
  - Hero section with badge and description
  - Category filter buttons (5 categories)
  - Featured videos section (3 videos with thumbnails, duration, views, topics)
  - Recent uploads section (6 videos)
  - Conference presentations section (3 talks with detailed info)
  - YouTube channel CTA with subscribe button
  - Video metadata: duration, views, date, category
  - Play button overlays on thumbnails
  - Responsive grid layouts
  - All videos are placeholder data (ready for real content)

- ✅ **Task 10.2**: Speaking page (src/app/media/speaking/page.tsx)
  - Hero section with professional speaking focus
  - Statistics section (4 key metrics: 150+ engagements, 40+ conferences, 5K+ trained, 10K+ CE hours)
  - Available speaking topics (6 detailed topics with duration, audience, format)
  - Upcoming engagements section (3 confirmed events with dates, locations)
  - Past speaking engagements (6 major events with full details, attendee counts)
  - Speaking engagement types list
  - CTA section to book Dr. Antipov
  - Links to contact and videos pages

**Files Created**:
- ✅ src/app/media/videos/page.tsx - Server Component
- ✅ src/app/media/speaking/page.tsx - Server Component

**Key Features**:
- All pages are Server Components (no "use client")
- Comprehensive SEO metadata
- Glassmorphism design consistent throughout
- Responsive layouts for all screen sizes
- Professional content with real-world speaking history
- Icons from lucide-react (Play, Calendar, MapPin, Users, Award, Mic2)
- Badge components for visual hierarchy
- Color-coded sections (gradient, accent, default backgrounds)

**Testing**:
- ✅ /media/videos returns 200 OK
- ✅ /media/speaking returns 200 OK
- ✅ Both pages verified as Server Components

---

## 🎉 ALL 24 PAGES COMPLETE!

**Total Pages Built: 24/24 ✅**

1. ✅ Home (/)
2. ✅ About (/about)
3. ✅ Contact (/contact)
4. ✅ Expertise Landing (/expertise)
5. ✅ Full-Arch Implants (/expertise/full-arch-implants)
6. ✅ Single Tooth (/expertise/single-tooth)
7. ✅ Bone Grafting (/expertise/bone-grafting)
8. ✅ Jaw Surgery (/expertise/jaw-surgery)
9. ✅ Sleep Apnea (/expertise/sleep-apnea)
10. ✅ For Dentists Landing (/for-dentists)
11. ✅ Referral Partners (/for-dentists/referral-partners)
12. ✅ Education/Courses (/for-dentists/education/courses)
13. ✅ For Patients Landing (/for-patients)
14. ✅ Testimonials (/for-patients/testimonials)
15. ✅ Consultation (/for-patients/consultation)
16. ✅ Pre-Op Instructions (/for-patients/pre-op)
17. ✅ Post-Op Care (/for-patients/post-op)
18. ✅ FAQs (/for-patients/faqs)
19. ✅ Privacy Policy (/legal/privacy-policy)
20. ✅ Terms of Service (/legal/terms-of-service)
21. ✅ Medical Disclaimer (/legal/medical-disclaimer)
22. ✅ HIPAA Notice (/legal/hipaa-notice)
23. ✅ Videos (/media/videos)
24. ✅ Speaking (/media/speaking)

**Architecture Summary**:
- ✅ All page.tsx files are Server Components (NO "use client")
- ✅ Interactive features extracted to Client Components
- ✅ Forms use React Hook Form + Zod validation
- ✅ API routes ready for email integration
- ✅ Glassmorphism design system throughout
- ✅ SEO-optimized metadata on every page
- ✅ HIPAA-compliant (no PHI collection)
- ✅ Mobile-responsive design
- ✅ Professional medical content (1200-1500 words per expertise page)

---

### Phase 11: SEO Optimization (Sitemap & Robots.txt) ✅ COMPLETE
- ✅ **Task 11.1**: XML Sitemap generation (next-sitemap.config.js)
  - Installed next-sitemap package (v4.2.3)
  - Created configuration file with customized priorities and changefreq
  - Homepage: priority 1.0, daily updates
  - Main pages (about, contact, expertise): priority 0.9, weekly
  - Expertise pages: priority 0.8, monthly
  - For Dentists pages: priority 0.8, monthly
  - Patient resources: priority 0.7, weekly
  - Media pages: priority 0.6, monthly
  - Legal pages: priority 0.3, yearly (noindex)
  - Added postbuild script to generate sitemap automatically
  - Configured robots.txt generation
  - All 19 pages included in sitemap

- ✅ **Task 11.2**: Robots.txt configuration
  - Auto-generated via next-sitemap config
  - Allows all user agents
  - Disallows /api/ and /admin/ routes
  - Sitemap URL included
  - Ready for blog sitemap integration when needed

**Files Created/Modified**:
- ✅ next-sitemap.config.js - Sitemap configuration
- ✅ package.json - Added postbuild script
- ✅ .env.local - Added SITE_URL variable
- ✅ public/ - Created directory for static assets

**Environment Variables Added**:
- ✅ SITE_URL=https://drantipov.com

**Testing**:
- ✅ Sitemap will be generated on next build
- ✅ Robots.txt will be auto-generated
- ✅ All pages properly prioritized for SEO

### Phase 12: Schema.org Structured Data ✅ COMPLETE
- ✅ **Task 12.1**: Created comprehensive structured data library (src/lib/structured-data.ts)
  - Organization schema (MedicalBusiness type)
  - Physician schema with credentials and memberships
  - Medical Procedure schemas (Full-Arch Implants, Bone Grafting, Orthognathic Surgery)
  - FAQ schema generator
  - Breadcrumb schema generator
  - Review & Aggregate Rating schemas
  - Video schema generator (for media pages)
  - Course schema generator (for education pages)
  - Event schema generator (for speaking engagements)
  - Helper function for JSON-LD injection

- ✅ **Task 12.2**: Implemented structured data on key pages
  - Homepage: Organization + Physician schemas
  - About page: Physician + Breadcrumb schemas
  - Full-Arch Implants page: MedicalProcedure + FAQ + Breadcrumb schemas
  - Ready for implementation on remaining expertise pages

**Files Created**:
- ✅ src/lib/structured-data.ts - Complete structured data library
- ✅ Updated: src/app/page.tsx - Added Organization + Physician schemas
- ✅ Updated: src/app/about/page.tsx - Added Physician + Breadcrumb schemas
- ✅ Updated: src/app/expertise/full-arch-implants/page.tsx - Added MedicalProcedure + FAQ + Breadcrumb schemas

**Schema Types Implemented**:
- ✅ Organization (MedicalBusiness)
- ✅ Physician (with alumniOf, memberOf, knowsAbout, medicalSpecialty)
- ✅ MedicalProcedure (with preparation, howPerformed, followup)
- ✅ FAQPage (Question/Answer format)
- ✅ BreadcrumbList (for navigation)
- ✅ Review & AggregateRating (ready for testimonials)
- ✅ VideoObject (ready for videos page)
- ✅ Course (ready for education pages)
- ✅ Event (ready for speaking engagements)

**SEO Benefits**:
- Rich snippets in search results
- Enhanced knowledge graph
- FAQ expandable results
- Breadcrumb navigation in SERPs
- Medical procedure details
- Physician credentials visibility

### Phase 13: Image Optimization & Placeholders ✅ COMPLETE
- ✅ **Task 13.1**: Created image placeholder components (src/components/ui/image-placeholder.tsx)
  - ImagePlaceholder base component with aspect ratio support
  - ProfileImagePlaceholder for doctor/staff photos
  - OfficeImagePlaceholder for facility photos
  - VideoThumbnailPlaceholder with play icon
  - BeforeAfterPlaceholder for treatment results
  - LogoPlaceholder for partner logos
  - Glassmorphism styling consistent with design system
  - Configurable gradients (primary, accent, neutral)
  - Proper aspect ratio handling

**Files Created**:
- ✅ src/components/ui/image-placeholder.tsx - Image placeholder components

**Features**:
- Aspect ratio support (16/9, 4/3, 1/1, 4/5, custom)
- Glassmorphism overlay effects
- Gradient backgrounds matching brand colors
- Icon support for specialized placeholders
- Text descriptions
- Ready for replacement with real images

**Usage Example**:
```tsx
import { ProfileImagePlaceholder, VideoThumbnailPlaceholder } from "@/components/ui/image-placeholder"

<ProfileImagePlaceholder name="Dr. Antipov" className="w-64" />
<VideoThumbnailPlaceholder title="Full-Arch Implant Surgery" />
```

### Phase 14: Project Documentation ✅ COMPLETE
- ✅ **Task 14.1**: Created comprehensive README.md
  - Project overview and tech stack
  - Complete project structure documentation
  - Design system guidelines
  - Feature completion checklist (all 19 pages)
  - Technical implementation details
  - HIPAA compliance documentation
  - SEO optimization guide
  - Environment variables setup
  - Deployment checklist
  - Development workflow
  - Performance targets
  - Security measures

**Files Created**:
- ✅ README.md - Complete project documentation (200+ lines)

**Documentation Sections**:
- Tech stack and architecture
- Project structure with file tree
- Design system (glassmorphism, colors, typography)
- Completed features (19 pages, SEO, forms, API routes)
- Pending integrations (email, analytics, images)
- Development commands
- Environment variable configuration
- Security and HIPAA compliance
- SEO implementation details
- Performance targets (Core Web Vitals, Lighthouse)
- Deployment checklist
- Contributing guidelines

---

## 🔄 IN PROGRESS TASKS

Currently no tasks in progress. Open items below are the remaining backlog as of 2026-10-18.

---

## 📝 PHASE 1: PROJECT FOUNDATION (Weeks 1-2)

### Task 1.1: Initialize Next.js Project
**PRD Reference**: §3.1 (Technical Stack)
**Rules Reference**: `project-structure.md`, `installing-packages.md`
**Dependencies**: None

**Subtasks**:
- [x] Create Next.js 14.2+ project with TypeScript
- [x] Configure App Router structure
- [x] Set up absolute imports (`@/` alias)
- [x] Configure `tsconfig.json` with strict mode
- [x] Set up ESLint and Prettier
- [x] Initialize Git repository — *repo on GitHub*
- [x] Create `.gitignore` (include `.env.local`)

**Acceptance Criteria**:
- ✅ `yarn dev` runs successfully
- ✅ TypeScript strict mode enabled
- ✅ Path aliases working (`@/components`, `@/lib`, etc.)
- ✅ No console errors on fresh install

**Commands**:
```bash
npx create-next-app@latest dr-antipov --typescript --tailwind --app --src-dir
cd dr-antipov
yarn add -D prettier eslint-config-prettier
```

---

### Task 1.2: Configure Tailwind CSS & Design System
**PRD Reference**: §4 (Design System)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 1.1

**Subtasks**:
- [x] Install Tailwind CSS 3.4+
- [x] Configure `tailwind.config.js` with custom theme
  - Primary colors (blue: `#0ea5e9`)
  - Accent colors (amber: `#f59e0b`)
  - Neutral colors
  - Custom fonts (Inter, Merriweather)
  - Custom spacing (8px grid)
  - Custom border radius (12px, 16px, 24px)
  - Glassmorphism shadows
- [x] Add Google Fonts (Inter, Merriweather)
- [x] Create `globals.css` with base styles
- [x] Test responsive breakpoints (sm, md, lg, xl, 2xl)

**Acceptance Criteria**:
- ✅ All design tokens configured in Tailwind
- ✅ Fonts load correctly
- ✅ Custom colors available (`bg-primary-500`, `text-accent-600`)
- ✅ Glassmorphism utilities work

**PRD Colors** (§4.1):
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',  // Main brand blue
    700: '#0369a1',
  },
  accent: {
    500: '#f59e0b',  // Warm amber
    600: '#d97706',
  },
  neutral: {
    50: '#fafafa',
    800: '#262626',
    900: '#171717',
  }
}
```

---

### Task 1.3: Install Shadcn UI Components
**PRD Reference**: §3.1 (UI Components)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 1.2

**Subtasks**:
- [x] Initialize Shadcn UI
- [x] Install base components:
  - Button
  - Card
  - Input
  - Textarea
  - Label
  - Select (pending)
  - Dialog (pending)
  - Sheet (pending)
  - Tabs (pending)
  - Accordion (pending)
  - Badge (pending)
  - Avatar (pending)
  - Separator (pending)
- [ ] Customize components for glassmorphism style
- [ ] Test all component variants

**Acceptance Criteria**:
- ✅ All Shadcn components installed in `src/components/ui/`
- ✅ Components match design system colors
- ✅ Glassmorphism variants work

**Commands**:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea select dialog sheet tabs accordion badge avatar separator
```

---

### Task 1.4: Set Up Project Structure
**PRD Reference**: §3 (Technical Stack)
**Rules Reference**: `project-structure.md`
**Dependencies**: Task 1.1

**Subtasks**:
- [x] Create directory structure: — *structure exists (no `hooks/` dir; not needed so far)*
  ```
  src/
  ├── app/              # Next.js App Router pages
  ├── components/
  │   ├── ui/           # Shadcn components
  │   ├── layout/       # Header, Footer, Navigation
  │   ├── sections/     # Reusable sections
  │   ├── home/         # Homepage components
  │   ├── expertise/    # Service page components
  │   └── forms/        # Form components
  ├── lib/
  │   ├── validations/  # Zod schemas
  │   ├── animations.ts # Framer Motion presets
  │   └── email.ts      # Email service
  ├── constants/
  │   ├── siteConfig.ts # Site metadata
  │   └── services.ts   # Service data
  ├── hooks/            # Custom React hooks
  └── utils/            # Utility functions
  ```
- [x] Create `README.md` with setup instructions — *rewritten 2026-10-18 to match the current stack*
- [x] Create `.env.example` with required variables
- [ ] Document file naming conventions

**Acceptance Criteria**:
- ✅ All directories created
- ✅ README.md complete with setup steps
- ✅ `.env.example` documented
- ✅ Follows `project-structure.md` guidelines

---

### Task 1.5: Configure Environment Variables
**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: `environment-variables.md`
**Dependencies**: Task 1.4

**Subtasks**:
- [ ] Create `.env.local` file (not committed)
- [x] Create `.env.example` file (committed)
- [ ] Add required variables:
  ```bash
  # Email Service
  RESEND_API_KEY=
  FROM_EMAIL=noreply@drantipov.com
  TO_EMAIL=office@drantipov.com

  # Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID=
  NEXT_PUBLIC_GTM_ID=
  NEXT_PUBLIC_HOTJAR_ID=
  NEXT_PUBLIC_FB_PIXEL_ID=

  # Optional: CRM Integration
  HUBSPOT_WEBHOOK_URL=

  # Site Config
  NEXT_PUBLIC_SITE_URL=https://drantipov.com
  ```
- [ ] Add TypeScript types for env vars in `next-env.d.ts`
- [x] Verify `.env.local` in `.gitignore` — *covered by `.env*.local` in .gitignore*

**Acceptance Criteria**:
- ✅ `.env.example` documented
- ✅ `.env.local` not in Git
- ✅ TypeScript autocomplete works for env vars
- ✅ Follows `environment-variables.md` guidelines

---

### Task 1.6: Install Core Dependencies
**PRD Reference**: §3.1 (Technical Stack)
**Rules Reference**: `installing-packages.md`
**Dependencies**: Task 1.1

**Subtasks**:
- ~~Install production dependencies:~~ — *obsolete: deps are tracked in package.json; react-player was never used*
  ```bash
  yarn add framer-motion react-player react-hook-form zod @hookform/resolvers/zod resend
  ```
- ~~Install dev dependencies:~~ — *obsolete: tests use node:test (`yarn test:seo`); vitest/testing-library never adopted*
  ```bash
  yarn add -D @types/node vitest @testing-library/react @testing-library/jest-dom
  ```
- [x] Verify all packages installed correctly — *clean `yarn install --frozen-lockfile` + build verified 2026-10-18*
- [ ] Run `yarn audit` to check for vulnerabilities

**Acceptance Criteria**:
- ✅ All dependencies in `package.json`
- ✅ No high/critical vulnerabilities
- ✅ `yarn dev` runs without errors
- ✅ Package versions match PRD requirements

---

### Task 1.7: Create Site Configuration Constants
**PRD Reference**: §1, §5 (Site Architecture)
**Rules Reference**: `project-structure.md`, `utilities.md`
**Dependencies**: Task 1.4

**Subtasks**:
- [x] Create `src/constants/siteConfig.ts`:
  - Site metadata (title, description)
  - Contact information (phone, email, address)
  - Social media links
  - Navigation structure
  - SEO defaults
- [x] Create `src/constants/services.ts`:
  - Service definitions
  - Expertise page data
  - Service icons/images
- [x] Add TypeScript types for all constants
- [x] Test imports in a test file

**Acceptance Criteria**:
- ✅ All site config centralized
- ✅ TypeScript types defined
- ✅ No hardcoded values in components
- ✅ Easy to update contact info

**Example Structure**:
```typescript
// src/constants/siteConfig.ts
export const siteConfig = {
  name: "Dr. Alexander Antipov",
  description: "Board-certified oral surgeon...",
  url: "https://drantipov.com",
  contact: {
    phone: "(916) 783-2110",
    email: "office@drantipov.com",
    address: {
      street: "911 Reserve Drive, Suite 150",
      city: "Roseville",
      state: "CA",
      zip: "95678"
    }
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // ...
  ]
}
```

---

### Task 1.8: Set Up Framer Motion Animation Presets
**PRD Reference**: §4.3 (Animation Guidelines)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 1.6

**Subtasks**:
- [x] Create `src/lib/animations.ts`
- [x] Define animation variants:
  - `fadeInUp` - Fade in from bottom
  - `fadeIn` - Simple fade
  - `staggerChildren` - Stagger child animations
  - `scaleIn` - Scale and fade in
  - `slideInLeft` - Slide from left
  - `slideInRight` - Slide from right
- [x] Add scroll animation presets
- [x] Add hover animation presets (glassCardHover)
- [x] Test animations on sample component

**Acceptance Criteria**:
- ✅ All animation presets defined
- ✅ Reusable across components
- ✅ Smooth 60fps animations
- ✅ Respects `prefers-reduced-motion`

**PRD Animation Example** (§4.3):
```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

---

## 📝 PHASE 2: LAYOUT & NAVIGATION (Week 2)

### Task 2.1: Create Root Layout
**PRD Reference**: §4 (Design System)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 1.2, 1.3

**Subtasks**:
- [x] Create `src/app/layout.tsx` (root layout)
- [x] Add HTML metadata
- [x] Add Google Fonts (Inter, Merriweather)
- [x] Add global styles
- [x] Add analytics scripts (GA4, GTM, Hotjar) — *GA4 + GTM + Microsoft Clarity, loaded only after cookie consent (ConsentGatedTracking); Hotjar not used*
- [x] Test layout renders correctly

**Acceptance Criteria**:
- ✅ Fonts load correctly
- ✅ Global styles applied
- ✅ No console errors
- ✅ Proper TypeScript types

---

### Task 2.2: Build Glassmorphism Header Component
**PRD Reference**: §4.2, §6.1 (Component Specifications)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/components/layout/Header.tsx`
- [x] Implement glassmorphism effect:
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255, 255, 255, 0.7)`
  - Border bottom with transparency
  - Shadow on scroll
- [x] Add logo (text-based)
- [x] Add navigation menu (desktop)
- [x] Add mobile menu (hamburger)
- [x] Add sticky positioning
- [x] Add scroll detection for style change
- [x] Add CTA button ("Book Consultation")
- [x] Test responsive behavior

**Acceptance Criteria**:
- ✅ Glassmorphism effect works
- ✅ Sticky on scroll
- ✅ Mobile menu functional
- ✅ Smooth transitions
- ✅ Matches PRD design specs

**PRD CSS** (§4.2):
```css
.glass-header {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}
```

---

### Task 2.3: Build Footer Component
**PRD Reference**: §6 (Page Specifications)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/components/layout/Footer.tsx`
- [x] Add company information
- [x] Add quick links (navigation)
- [x] Add contact information (phone, email, address)
- [x] Add social media links (LinkedIn, Facebook, Instagram)
- [x] Add legal links (Privacy, Terms, Disclaimer, HIPAA)
- [x] Add copyright notice
- [x] Add address with MapPin icon
- [x] Test responsive layout

**Acceptance Criteria**:
- ✅ All required links present
- ✅ Contact info correct
- ✅ Responsive on all devices
- ✅ Matches brand colors

---

### Task 2.4: Create Navigation Component
**PRD Reference**: §5.1 (Site Architecture)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 2.2

**Subtasks**:
- ~~Create `src/components/layout/Navigation.tsx`~~ — *obsolete: navigation lives in `src/components/Navbar.tsx`*
- [x] Define navigation structure: — *in Navbar.tsx*
  - Home
  - About
  - Expertise (dropdown)
    - Dental Implants
    - Full-Arch Restoration
    - Corrective Jaw Surgery
    - Wisdom Teeth
    - Facial Reconstruction
  - For Dentists (dropdown)
    - Referral Partners
    - Education/Courses
  - For Patients (dropdown)
    - Testimonials
    - Consultation
  - Media (dropdown)
    - Videos
    - Speaking
  - Contact
- [x] Add hover effects
- [ ] Add active state styling
- [x] Implement dropdown menus — *mega menu + For Patients dropdown*
- [ ] Test keyboard navigation
- [ ] Test accessibility (ARIA labels)

**Acceptance Criteria**:
- ✅ All pages accessible
- ✅ Dropdowns work smoothly
- ✅ Active page highlighted
- ✅ WCAG 2.1 AA compliant

---

### Task 2.5: Create Mobile Menu Component
**PRD Reference**: §3.2 (Performance Requirements)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 2.4

**Subtasks**:
- ~~Create `src/components/layout/MobileMenu.tsx`~~ — *obsolete: mobile menu is part of `src/components/Navbar.tsx`*
- [ ] Add hamburger icon animation
- [ ] Implement slide-in menu
- [ ] Add menu items with collapsible sections
- [ ] Add close button
- [ ] Add backdrop overlay
- [ ] Prevent body scroll when open
- [ ] Add smooth animations
- [ ] Test touch interactions

**Acceptance Criteria**:
- ✅ Opens/closes smoothly
- ✅ All nav items accessible
- ✅ Body scroll locked when open
- ✅ Works on all mobile devices

---

## 📝 PHASE 3: HOMEPAGE IMPLEMENTATION (Weeks 3-4)

### Task 3.1: Build Homepage Hero Section
**PRD Reference**: §6.1 (HOME PAGE - Hero Section)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1, 2.2

**Subtasks**:
- [x] Create `src/app/page.tsx` (homepage)
- [x] Create `src/components/home/Hero.tsx` (currently in page.tsx) — *`src/components/Hero.tsx`*
- [x] Implement hero layout:
  - Center-aligned with gradient background
  - Headline + subheadline + CTAs
- [x] Add H1: "Northern California's Trusted Oral Surgery Innovator"
- [x] Add subtitle copy
- [x] Add dual CTAs:
  - Primary: "Schedule Consultation"
  - Secondary: "View Services"
- [x] Add trust indicators as glassmorphism cards (Board Certified, Training, Trusted by Dentists)
- [x] Add hero image with video overlay — *hero.mp4 background video*
- [ ] Add scroll animation (fade in up)
- [ ] Test responsive layout

**Acceptance Criteria**:
- ✅ Matches PRD design exactly
- ✅ H1 tag present with target keyword
- ✅ CTAs functional
- ✅ Animations smooth
- ✅ Mobile-responsive

**PRD Copy** (§6.1):
- **H1**: "Northern California's Trusted Oral Surgery Innovator"
- **Subheadline**: "Board-certified specialist helping patients reclaim their smiles and dentists master advanced surgical techniques..."

---

### Task 3.2: Build Problem/Solution Section (Patients)

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - Problem/Solution Section)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/ProblemSolution.tsx`~~ — *obsolete*
- ~~Add section heading: "Finally, A Smile You're Proud Of"~~ — *obsolete*
- ~~Create 3 problem/solution cards:~~ — *obsolete*
  1. Missing or Failing Teeth → Dental Implants
  2. Jaw Pain or Misalignment → Corrective Jaw Surgery
  3. Need a Specialist You Trust → Meet Dr. Antipov
- ~~Add card hover effects (lift + shadow)~~ — *obsolete*
- ~~Add icons for each card~~ — *obsolete*
- ~~Add CTA at bottom: "Schedule Your Consultation"~~ — *obsolete*
- ~~Add scroll animations (stagger cards)~~ — *obsolete*
- ~~Test responsive grid~~ — *obsolete*

**Acceptance Criteria**:
- ✅ 3 cards visible
- ✅ Links go to correct pages
- ✅ Hover effects work
- ✅ Responsive layout

**PRD Copy** (§6.1):
- Card 1: "Missing or Failing Teeth?" → "Don't let tooth loss hold you back..."
- Card 2: "Jaw Pain or Misalignment?" → "Difficulty chewing, breathing..."
- Card 3: "Need a Specialist You Trust?" → "Board-certified expertise..."

---

### Task 3.3: Build Services Overview Section

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - Services Overview)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/ServicesOverview.tsx`~~ — *obsolete*
- ~~Add section heading: "Specialized Expertise You Can Trust"~~ — *obsolete*
- ~~Create service cards for:~~ — *obsolete*
  1. Dental Implants & Full-Arch Restoration
  2. Corrective Jaw Surgery (Orthognathic)
  3. Wisdom Teeth Removal
  4. Facial Reconstruction
  5. Bone Grafting
  6. TMJ Treatment
- ~~Add service images~~ — *obsolete*
- ~~Add hover effects (scale image, lift card)~~ — *obsolete*
- ~~Add "Learn More →" links~~ — *obsolete*
- ~~Add scroll animations~~ — *obsolete*
- ~~Test responsive grid (3 columns → 2 → 1)~~ — *obsolete*

**Acceptance Criteria**:
- ✅ All 6 services displayed
- ✅ Images load and scale on hover
- ✅ Links go to service pages
- ✅ Responsive grid works

---

### Task 3.4: Build For Dentists Section

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - For Dentists Section)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/ForDentists.tsx`~~ — *obsolete*
- ~~Implement dark background (`bg-primary-900`)~~ — *obsolete*
- ~~Add badge: "For Dental Professionals"~~ — *obsolete*
- ~~Add headline: "Expand Your Practice. Master Advanced Techniques."~~ — *obsolete*
- ~~Add 3 benefit points with checkmarks:~~ — *obsolete*
  - Referral Partnerships
  - Hands-On Courses
  - Collaborative Growth
- ~~Add dual CTAs:~~ — *obsolete*
  - "Become a Referral Partner"
  - "Explore Courses"
- ~~Add collaboration image on right~~ — *obsolete*
- ~~Add scroll animations~~ — *obsolete*
- ~~Test contrast ratios (WCAG)~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Dark theme applied
- ✅ Text readable (contrast AA)
- ✅ CTAs functional
- ✅ Responsive layout

**PRD Copy** (§6.1):
- Headline: "Expand Your Practice. Master Advanced Techniques."
- Subheadline: "Whether you need a trusted referral partner..."

---

### Task 3.5: Build Video Testimonials Section

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - Video Testimonials)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/VideoTestimonials.tsx`~~ — *obsolete*
- ~~Add section heading: "Real Patients. Life-Changing Results."~~ — *obsolete*
- ~~Create video card grid (3 columns)~~ — *obsolete*
- ~~Add YouTube thumbnail images~~ — *obsolete*
- ~~Add play button overlay (glassmorphism)~~ — *obsolete*
- ~~Implement lazy loading (load on click)~~ — *obsolete*
- ~~Add video modal/dialog with react-player~~ — *obsolete*
- ~~Add "Watch More Stories →" CTA~~ — *obsolete*
- ~~Test video embeds~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Video thumbnails display
- ✅ Play buttons work
- ✅ Videos load on click (not on page load)
- ✅ Modal closes properly
- ✅ Responsive grid

---

### Task 3.6: Build Credentials & Trust Section

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - Credentials & Trust)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/Credentials.tsx`~~ — *obsolete*
- ~~Add 2-column layout (image left, content right)~~ — *obsolete*
- ~~Add professional photo of Dr. Antipov~~ — *obsolete*
- ~~Add badge: "Board Certified Specialist"~~ — *obsolete*
- ~~Add headline: "Why Northern California Dentists Trust Dr. Antipov"~~ — *obsolete*
- ~~Add quote from Dr. Antipov~~ — *obsolete*
- ~~Add 4 credential items with icons:~~ — *obsolete*
  - Elite Training (Loma Linda, Albert Einstein)
  - Board Certified (ABOMS)
  - Founder, Fusion Dental Academy
  - Patient-Centered Care (15+ years)
- ~~Add CTA: "Learn More About Dr. Antipov →"~~ — *obsolete*
- ~~Test responsive layout~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Image displays correctly
- ✅ All credentials listed
- ✅ Icons visible
- ✅ Responsive layout

---

### Task 3.7: Build Final CTA Section

> **Status 2026-10-18:** The homepage shipped with a different section lineup (Hero, ReviewBanner, About, Services, PracticePhilosophy, WallOfSmiles, BeforeAfter, Testimonials, FAQ, OfficeTour, ServiceArea, Locations, ReferringDoctors, CTA). This planned component and its copy were never built, so the items below no longer apply.

**PRD Reference**: §6.1 (HOME PAGE - Final CTA)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Create `src/components/home/FinalCTA.tsx`~~ — *obsolete*
- ~~Add gradient background (`from-primary-500 to-primary-700`)~~ — *obsolete*
- ~~Add headline: "Ready to Transform Your Smile or Practice?"~~ — *obsolete*
- ~~Add subheadline~~ — *obsolete*
- ~~Add dual CTAs:~~ — *obsolete*
  - "Book Patient Consultation"
  - "Contact for Partnerships"
- ~~Add contact info (phone, location)~~ — *obsolete*
- ~~Add scroll animation~~ — *obsolete*
- ~~Test contrast (white text on blue)~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Gradient background works
- ✅ Text readable
- ✅ CTAs functional
- ✅ Responsive layout

---

### Task 3.8: Implement Homepage SEO & Meta Tags
**PRD Reference**: §6.1 (HOME PAGE - SEO Specifications)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 3.1

**Subtasks**:
- ~~Add title tag: "Dr. Alexander Antipov - Northern California's Premier Oral Surgeon | Roseville, Sacramento"~~ — *obsolete: final title differs and is set through `finalizeMetadata`*
- [x] Add meta description (150-160 chars)
- ~~Add meta keywords~~ — *obsolete: meta keywords are deliberately omitted (`keywords: null` in seo-foundation)*
- [x] Add canonical URL
- [x] Add Open Graph tags (og:title, og:description, og:image)
- [x] Add Twitter Card tags
- [x] Add Schema.org structured data: — *site-wide JSON-LD in `src/components/JsonLd.tsx` plus page schemas*
  - Physician schema
  - MedicalBusiness schema
  - Review schema
- [ ] Test with Google Rich Results Test

**Acceptance Criteria**:
- ✅ All meta tags present
- ✅ Schema markup validates
- ✅ Social share preview works
- ✅ Title ≤ 60 characters
- ✅ Description 150-160 characters

**PRD Schema** (§6.1):
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Alexander Antipov",
  "url": "https://drantipov.com",
  "specialty": "Oral and Maxillofacial Surgery",
  ...
}
```

---

## 📝 PHASE 4: ABOUT PAGE (Week 4)

### Task 4.1: Build About Page Layout
**PRD Reference**: §6.2 (ABOUT PAGE)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/about/page.tsx` — *`src/app/(en)/about/page.tsx`*
- [x] Add SEO meta tags
- [x] Create hero section
- [x] Create biography section — *`About` section*
- [ ] Create education & credentials section
- [x] Create philosophy section — *`PracticePhilosophy`*
- [x] Create CTA section
- [x] Test page structure — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections present
- ✅ SEO configured
- ✅ Responsive layout
- ✅ Follows PRD structure

---

### Task 4.2: Build About Hero Section

> **Status 2026-10-18:** The About page is built from shared sections (Hero, TrustBadges, About, PracticePhilosophy, Testimonials, FAQ, CTA, ...) instead of these bespoke sections, so this planned layout and copy no longer apply.

**PRD Reference**: §6.2 (About Page - Hero)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 4.1

**Subtasks**:
- ~~Create hero with gradient background~~ — *obsolete*
- ~~Add H1: "Meet Dr. Alexander Antipov"~~ — *obsolete*
- ~~Add subtitle: "Board-Certified Oral Surgeon | Educator | Innovator"~~ — *obsolete*
- ~~Add scroll animation~~ — *obsolete*
- ~~Test responsive text sizing~~ — *obsolete*

**Acceptance Criteria**:
- ✅ H1 present
- ✅ Gradient background
- ✅ Centered text
- ✅ Responsive

---

### Task 4.3: Build Biography Section

> **Status 2026-10-18:** The About page is built from shared sections (Hero, TrustBadges, About, PracticePhilosophy, Testimonials, FAQ, CTA, ...) instead of these bespoke sections, so this planned layout and copy no longer apply.

**PRD Reference**: §6.2 (About Page - Biography)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 4.1

**Subtasks**:
- ~~Create 2-column layout (image left, text right)~~ — *obsolete*
- ~~Add professional photo (sticky positioning)~~ — *obsolete*
- ~~Add 3-4 paragraphs of biography copy~~ — *obsolete*
- ~~Add pull quote: "Every patient is special to me..."~~ — *obsolete*
- ~~Add scroll animations~~ — *obsolete*
- ~~Test responsive layout~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Image sticky on desktop
- ✅ Text readable
- ✅ Quote styled properly
- ✅ Mobile: stack vertically

---

### Task 4.4: Build Education & Credentials Section

> **Status 2026-10-18:** The About page is built from shared sections (Hero, TrustBadges, About, PracticePhilosophy, Testimonials, FAQ, CTA, ...) instead of these bespoke sections, so this planned layout and copy no longer apply.

**PRD Reference**: §6.2 (About Page - Education & Credentials)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 4.1

**Subtasks**:
- ~~Create section with light background (`bg-neutral-50`)~~ — *obsolete*
- ~~Add section heading: "Education & Credentials"~~ — *obsolete*
- ~~Create 4 credential cards:~~ — *obsolete*
  1. D.D.S. from Loma Linda University
  2. Fellowship at Columbia/Harlem Hospital
  3. 4-Year Residency at Montefiore/Albert Einstein
  4. Board Certification (ABOMS)
- ~~Add icons for each card~~ — *obsolete*
- ~~Add scroll animations (stagger)~~ — *obsolete*
- ~~Test responsive layout~~ — *obsolete*

**Acceptance Criteria**:
- ✅ All credentials listed
- ✅ Icons display
- ✅ Cards styled consistently
- ✅ Responsive grid

---

### Task 4.5: Build Philosophy Section

> **Status 2026-10-18:** The About page is built from shared sections (Hero, TrustBadges, About, PracticePhilosophy, Testimonials, FAQ, CTA, ...) instead of these bespoke sections, so this planned layout and copy no longer apply.

**PRD Reference**: §6.2 (About Page - Philosophy)
**Rules Reference**: `ui-components.md`
**Dependencies**: Task 4.1

**Subtasks**:
- ~~Create centered text section~~ — *obsolete*
- ~~Add heading: "My Approach to Care"~~ — *obsolete*
- ~~Add 2 paragraphs of philosophy copy~~ — *obsolete*
- ~~Add scroll animation~~ — *obsolete*
- ~~Test text readability~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Centered layout
- ✅ Text readable (max-width)
- ✅ Copy matches PRD
- ✅ Responsive

---

## 📝 PHASE 5: EXPERTISE/SERVICE PAGES (Week 5)

### Task 5.1: Create Service Page Template Component
**PRD Reference**: §6.3 (Expertise Pages)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/components/expertise/ServiceTemplate.tsx` — *`src/components/expertise/ServicePageTemplate.tsx`*
- [x] Define reusable sections:
  - Hero
  - What is this procedure
  - Types/Variations
  - Dr. Antipov's approach
  - Ideal candidates
  - Procedure timeline
  - Video testimonials
  - FAQ accordion
  - CTA
- [x] Accept props for customization
- [x] Test with sample data — *used by several expertise pages*

**Acceptance Criteria**:
- ✅ Reusable template created
- ✅ All sections configurable
- ✅ TypeScript props defined
- ✅ Responsive layout

---

### Task 5.2: Build Dental Implants Page

> **Status 2026-10-18:** Shipped as `/expertise/single-tooth` (plus `/expertise/full-arch-implants`), not `/expertise/dental-implants`.

**PRD Reference**: §6.3.1 (Dental Implants Page)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 5.1

**Subtasks**:
- [x] Create `src/app/expertise/dental-implants/page.tsx` — *at `src/app/(en)/expertise/single-tooth/page.tsx`*
- [x] Add SEO meta tags (title, description, keywords)
- ~~Add H1: "Dental Implants: Permanent Solutions for Missing Teeth"~~ — *obsolete: final copy differs*
- [ ] Add all sections:
  - Hero
  - What are dental implants
  - Types (single, multiple, full-arch, implant-supported dentures)
  - The Dr. Antipov difference
  - Ideal candidates
  - Procedure timeline
  - Video testimonials
  - FAQ (5-10 questions)
  - CTA
- [x] Add Schema.org MedicalProcedure markup
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ SEO optimized (target keywords present)
- ✅ Schema markup validates
- ✅ Mobile-responsive

**PRD Target Keywords** (§6.3.1):
- dental implants Roseville
- tooth replacement Northern California
- full arch dental implants
- same day dental implants Sacramento

---

### Task 5.3: Build Full-Arch Restoration Page

> **Status 2026-10-18:** Shipped as `/expertise/full-arch-implants`.

**PRD Reference**: §6.3.3 (Full-Arch Restoration Page)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 5.1

**Subtasks**:
- [x] Create `src/app/expertise/full-arch-restoration/page.tsx` — *at `src/app/(en)/expertise/full-arch-implants/page.tsx`*
- [x] Add SEO meta tags
- ~~Add H1: "Full-Arch Restoration: A Complete Smile in One Procedure"~~ — *obsolete: final copy differs*
- [ ] Add all sections (use template)
- [ ] Customize content for full-arch (All-on-4, All-on-6)
- [x] Add before/after gallery (if available)
- [x] Add FAQ
- [x] Add Schema markup
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ SEO optimized
- ✅ Schema markup validates
- ✅ Mobile-responsive

---

### Task 5.4: Build Corrective Jaw Surgery Page

> **Status 2026-10-18:** Shipped as `/expertise/jaw-surgery`.

**PRD Reference**: §6.3.2 (Corrective Jaw Surgery Page)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 5.1

**Subtasks**:
- [x] Create `src/app/expertise/corrective-jaw-surgery/page.tsx` — *at `src/app/(en)/expertise/jaw-surgery/page.tsx`*
- [x] Add SEO meta tags
- ~~Add H1: "Corrective Jaw Surgery: Transform Function and Appearance"~~ — *obsolete: final copy differs*
- [ ] Add all sections
- [ ] Add conditions treated (underbite, overbite, open bite, etc.)
- [ ] Add surgical process explanation
- [x] Add before/after gallery
- [x] Add FAQ
- [x] Add Schema markup
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ SEO optimized
- ✅ Schema markup validates
- ✅ Mobile-responsive

---

### Task 5.5: Build Wisdom Teeth Page
**PRD Reference**: §6.3.4 (Wisdom Teeth Page)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 5.1

**Subtasks**:
- [x] Create `src/app/expertise/wisdom-teeth/page.tsx` — *at `src/app/(en)/expertise/wisdom-teeth/page.tsx`*
- [x] Add SEO meta tags
- ~~Add H1: "Wisdom Teeth Removal: Expert, Comfortable Care"~~ — *obsolete: final copy differs*
- [ ] Add all sections
- [ ] Add reasons for removal
- [ ] Add removal process
- [ ] Add recovery tips
- [x] Add FAQ
- [x] Add Schema markup
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ SEO optimized
- ✅ Schema markup validates
- ✅ Mobile-responsive

---

### Task 5.6: Build Facial Reconstruction Page

> **Status 2026-10-18:** Not built as planned. The site has `/expertise/facial-cosmetic` (cosmetic focus) but no facial reconstruction/trauma page. Left open for a decision.

**PRD Reference**: §6.3.5 (Facial Reconstruction Page)
**Rules Reference**: `page-structure.md`
**Dependencies**: Task 5.1

**Subtasks**:
- [ ] Create `src/app/expertise/facial-reconstruction/page.tsx`
- [ ] Add SEO meta tags
- [ ] Add H1: "Facial Reconstruction: Restoring Form and Function"
- [ ] Add all sections
- [ ] Add conditions treated (trauma, congenital defects, asymmetry)
- [ ] Add approach explanation
- [ ] Add FAQ
- [ ] Add Schema markup
- [ ] Test page

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ SEO optimized
- ✅ Schema markup validates
- ✅ Mobile-responsive

---

## 📝 PHASE 6: FOR DENTISTS PAGES (Week 6)

### Task 6.1: Build Referral Partners Page
**PRD Reference**: §6.4 (For Dentists - Referral Partners Page)
**Rules Reference**: `page-structure.md`, `form-handling.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/for-dentists/referral-partners/page.tsx` — *at `src/app/(en)/for-dentists/referral-partners/page.tsx`*
- [x] Add SEO meta tags
- [x] Add H1: "Your Trusted Surgical Partner" — *in ReferralHero*
- [ ] Add sections:
  - Hero
  - Why dentists choose Dr. Antipov (6 benefit cards)
  - Services provided
  - Referral process (4 steps)
  - Referral form
  - Testimonials from referring dentists
  - CTA
- [ ] Add Schema markup
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ Referral form functional
- ✅ SEO optimized
- ✅ Mobile-responsive

---

### Task 6.2: Build Referral Form Component

> **Status 2026-10-18:** No dedicated referral form or schema was built. Referrals go through `ContactForm` (`isReferringDentist` flag → `/api/contact`) on `/for-dentists/refer-patients`, so the items below no longer apply.

**PRD Reference**: §6.4 (Referral Form)
**Rules Reference**: `form-handling.md`, `data-fetching.md`, `security.md`
**Dependencies**: Task 6.1

**Subtasks**:
- ~~Create `src/lib/validations/referral.ts` (Zod schema)~~ — *obsolete*
- ~~Create `src/components/forms/ReferralForm.tsx`~~ — *obsolete*
- ~~Add form fields:~~ — *obsolete*
  - Dentist name
  - Practice name
  - Email
  - Phone
  - Patient name
  - Patient phone
  - Procedure type (select)
  - Urgency (select: Routine/Urgent/Emergency)
  - Notes (textarea)
  - Consent checkbox
- ~~Add client-side validation (Zod)~~ — *obsolete*
- ~~Add honeypot field (spam prevention)~~ — *obsolete*
- ~~Add loading states~~ — *obsolete*
- ~~Add success/error messages~~ — *obsolete*
- ~~Style form consistently~~ — *obsolete*
- ~~Test form submission~~ — *obsolete*

**Acceptance Criteria**:
- ✅ All fields validated
- ✅ Error messages display
- ✅ Submits to API route
- ✅ HIPAA-compliant (no PHI collected)
- ✅ Follows `form-handling.md` guidelines

**PRD Schema** (from `data-fetching.md`):
```typescript
export const referralFormSchema = z.object({
  dentistName: z.string().min(2).max(100),
  practiceName: z.string().min(2).max(100),
  email: z.string().email().toLowerCase(),
  phone: z.string().min(10),
  patientName: z.string().min(2).max(100),
  patientPhone: z.string().min(10),
  procedureType: z.enum([...]),
  urgency: z.enum(['Routine', 'Urgent', 'Emergency']),
  notes: z.string().max(3000).optional(),
  consent: z.literal(true)
});
```

---

### Task 6.3: Build Education/Courses Page
**PRD Reference**: §6.5 (For Dentists - Education/Courses Page)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/for-dentists/education/courses/page.tsx` — *at `src/app/(en)/for-dentists/education/courses/page.tsx`*
- [x] Add SEO meta tags
- ~~Add H1: "Master Advanced Implant Techniques"~~ — *obsolete: final copy differs*
- [ ] Add sections:
  - Hero (dark background with glassmorphism)
  - Why Fusion Dental Academy (3 benefit cards)
  - Course catalog (2-3 courses with details)
  - CTA
- [ ] Add course cards with:
  - Course image
  - Duration badge
  - CE Credits badge
  - Description
  - What you'll learn (bullet points)
  - CTAs (View Details, Enroll on Udemy)
- [ ] Add Schema markup (Course schema)
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ External links work (Udemy)
- ✅ SEO optimized
- ✅ Mobile-responsive

**PRD Course Example** (§6.5):
- All-on-X Full-Arch Restoration Mastery (3-Day, 24 CE Credits)
- Bone Grafting & Sinus Lift Techniques (2-Day, 16 CE Credits)

---

## 📝 PHASE 7: FOR PATIENTS PAGES (Week 7)

### Task 7.1: Build Testimonials Page

> **Status 2026-10-18:** `/for-patients/testimonials` now 308-redirects to `/for-patients` (next.config.mjs). Testimonials live in shared sections, and rating schema was removed on purpose (trust/schema regression test), so the items below no longer apply.

**PRD Reference**: §6 (For Patients - Testimonials)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- ~~Create `src/app/for-patients/testimonials/page.tsx`~~ — *obsolete*
- ~~Add SEO meta tags~~ — *obsolete*
- ~~Add H1: "Real Patients. Life-Changing Results."~~ — *obsolete*
- ~~Add filter buttons (All, Dental Implants, Jaw Surgery, etc.)~~ — *obsolete*
- ~~Create video testimonial grid (6-9 videos)~~ — *obsolete*
- ~~Add text testimonials section~~ — *obsolete*
- ~~Add before/after gallery (if available)~~ — *obsolete*
- ~~Add star ratings~~ — *obsolete*
- ~~Add CTA: "Schedule Your Consultation"~~ — *obsolete*
- ~~Add Schema markup (Review schema)~~ — *obsolete*
- ~~Test page~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Videos display correctly
- ✅ Filter works
- ✅ Schema markup validates
- ✅ Mobile-responsive

---

### Task 7.2: Build Consultation Page
**PRD Reference**: §6 (For Patients - Consultation)
**Rules Reference**: `page-structure.md`, `form-handling.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/for-patients/consultation/page.tsx` — *at `src/app/(en)/for-patients/consultation/page.tsx`*
- [x] Add SEO meta tags
- ~~Add H1: "Schedule Your Consultation"~~ — *obsolete: final copy differs*
- [x] Add consultation form
- [ ] Add "What to Expect" section
- [x] Add office information (hours, location)
- [x] Add contact alternatives (phone, email)
- [x] Add Google Maps embed
- [ ] Add FAQ
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ Form functional
- ✅ Map displays
- ✅ Contact info correct
- ✅ Mobile-responsive

---

### Task 7.3: Build Consultation Form Component
**PRD Reference**: Form specifications from `data-fetching.md`
**Rules Reference**: `form-handling.md`, `data-fetching.md`, `security.md`
**Dependencies**: Task 7.2

**Subtasks**:
- [x] Create `src/lib/validations/consultation.ts` (Zod schema)
- [x] Create `src/components/forms/ConsultationForm.tsx`
- [x] Add form fields:
  - First name
  - Last name
  - Email
  - Phone
  - Interest (select: Dental Implants, Jaw Surgery, etc.)
  - Message (textarea, optional)
  - Preferred contact method (radio: Phone/Email)
  - Consent checkbox (required)
  - Honeypot field (hidden)
- [x] Add client-side validation
- [x] Add loading states
- [x] Add success/error messages
- [x] Add security notice: "We follow best practices for data security. This form does NOT collect medical records or health information." — *PHI notice in ConsultationForm*
- [x] Style form
- [ ] Test submission

**Acceptance Criteria**:
- ✅ All fields validated
- ✅ Error messages display
- ✅ Submits to API route
- ✅ HIPAA-compliant (no PHI)
- ✅ Follows `form-handling.md` and `security.md` guidelines

**PRD Schema** (from `data-fetching.md`):
```typescript
export const consultationFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email().toLowerCase(),
  phone: z.string().min(10),
  interest: z.enum([
    'Dental Implants',
    'Corrective Jaw Surgery',
    'Wisdom Teeth Removal',
    'Facial Reconstruction',
    'Full-Arch Restoration',
    'Other'
  ]),
  message: z.string().min(10).max(2000).optional(),
  preferredContact: z.enum(['phone', 'email']),
  consent: z.literal(true),
  website: z.string().max(0).optional() // Honeypot
});
```

---

## 📝 PHASE 8: MEDIA PAGES (Week 8)

### Task 8.1: Build Videos Page
**PRD Reference**: §6 (Media - Videos)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/media/videos/page.tsx` — *at `src/app/(en)/media/videos/page.tsx`*
- [x] Add SEO meta tags
- [x] Add H1: "Educational Videos & Patient Stories" — *"Educational Videos & Lectures"*
- [ ] Create video categories:
  - Patient testimonials
  - Procedure explanations
  - Educational content
- [ ] Add video grid with thumbnails
- ~~Add video modal with react-player~~ — *obsolete: react-player not used*
- [ ] Add lazy loading
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ Videos display correctly
- ✅ Categories work
- ✅ Modal functional
- ✅ Mobile-responsive

---

### Task 8.2: Build Speaking Page
**PRD Reference**: §6 (Media - Speaking)
**Rules Reference**: `page-structure.md`, `ui-components.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/media/speaking/page.tsx` — *at `src/app/(en)/media/speaking/page.tsx`*
- [x] Add SEO meta tags
- [x] Add H1: "Speaking Engagements & Presentations"
- [x] Add speaking topics section
- [x] Add past events section (cards with photos)
- [x] Add "Book Dr. Antipov" CTA
- [x] Add contact form or email link — *mailto + /contact link*
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ Images display
- ✅ CTA functional
- ✅ Mobile-responsive

---

## 📝 PHASE 9: CONTACT & LEGAL PAGES (Week 9)

### Task 9.1: Build Contact Page
**PRD Reference**: §5 (Sitemap - Contact)
**Rules Reference**: `page-structure.md`, `form-handling.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/contact/page.tsx` — *at `src/app/(en)/contact/page.tsx`*
- [x] Add SEO meta tags
- [x] Add H1: "Contact Dr. Antipov"
- [x] Add contact form
- [x] Add office information:
  - Address
  - Phone
  - Email
  - Hours
- [x] Add Google Maps embed
- [ ] Add directions/parking info
- [ ] Add FAQ
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ Form functional
- ✅ Map displays
- ✅ Contact info correct
- ✅ Mobile-responsive

---

### Task 9.2: Build Contact Form Component
**PRD Reference**: Form specifications
**Rules Reference**: `form-handling.md`, `security.md`
**Dependencies**: Task 9.1

**Subtasks**:
- [x] Create `src/lib/validations/contact.ts` (Zod schema)
- [x] Create `src/components/forms/ContactForm.tsx`
- [x] Add form fields:
  - Name
  - Email
  - Phone (optional)
  - Subject (select)
  - Message
  - Consent checkbox
  - Honeypot field
- [x] Add validation
- [x] Add loading states
- [x] Add success/error messages
- [x] Style form
- [ ] Test submission

**Acceptance Criteria**:
- ✅ All fields validated
- ✅ Submits to API route
- ✅ HIPAA-compliant
- ✅ Follows guidelines

---

### Task 9.3: Build Privacy Policy Page
**PRD Reference**: §5 (Legal - Privacy Policy)
**Rules Reference**: `security.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/legal/privacy-policy/page.tsx`
- ~~Add SEO meta tags (noindex)~~ — *obsolete: legal pages are deliberately indexable (listed in `seo-route-inventory.json` and the sitemap)*
- [x] Add H1: "Privacy Policy"
- [ ] Add required sections:
  - Information we collect
  - How we use information
  - Data security measures
  - GDPR compliance (for EU visitors)
  - CCPA compliance (for CA residents)
  - Cookie policy
  - Third-party services (GA, Hotjar, etc.)
  - Contact information
  - Last updated date
- [x] Add table of contents
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ GDPR/CCPA compliant
- ✅ Easy to read
- ✅ Mobile-responsive

---

### Task 9.4: Build Terms of Service Page
**PRD Reference**: §5 (Legal - Terms of Service)
**Rules Reference**: `security.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/legal/terms-of-service/page.tsx`
- ~~Add SEO meta tags (noindex)~~ — *obsolete: legal pages are deliberately indexable (listed in `seo-route-inventory.json` and the sitemap)*
- [x] Add H1: "Terms of Service"
- [ ] Add required sections:
  - Acceptance of terms
  - Use of website
  - Intellectual property
  - Disclaimer of warranties
  - Limitation of liability
  - Governing law
  - Contact information
  - Last updated date
- [x] Add table of contents
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All sections complete
- ✅ Legally compliant
- ✅ Easy to read
- ✅ Mobile-responsive

---

### Task 9.5: Build Medical Disclaimer Page
**PRD Reference**: §5 (Legal - Medical Disclaimer)
**Rules Reference**: `security.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/legal/medical-disclaimer/page.tsx`
- ~~Add SEO meta tags (noindex)~~ — *obsolete: legal pages are deliberately indexable (listed in `seo-route-inventory.json` and the sitemap)*
- [x] Add H1: "Medical Disclaimer"
- [ ] Add required sections:
  - Not medical advice
  - No doctor-patient relationship
  - Consult qualified provider
  - Accuracy of information
  - Testimonials disclaimer
  - Before/after photos disclaimer
  - Contact information
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ All disclaimers present
- ✅ Clear language
- ✅ Legally compliant
- ✅ Mobile-responsive

---

### Task 9.6: Build HIPAA Notice Page
**PRD Reference**: §5 (Legal - HIPAA Notice)
**Rules Reference**: `security.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [x] Create `src/app/legal/hipaa-notice/page.tsx`
- ~~Add SEO meta tags (noindex)~~ — *obsolete: legal pages are deliberately indexable (listed in `seo-route-inventory.json` and the sitemap)*
- [x] Add H1: "HIPAA Notice of Privacy Practices"
- [ ] Add required sections:
  - How we use and disclose PHI
  - Your rights regarding PHI
  - Our responsibilities
  - Changes to this notice
  - Complaints
  - Contact information
  - **Important**: Clarify that website does NOT collect PHI
- [x] Test page — *live, returns 200*

**Acceptance Criteria**:
- ✅ HIPAA-compliant
- ✅ Clarifies no PHI on website
- ✅ Easy to read
- ✅ Mobile-responsive

---

## 📝 PHASE 10: API ROUTES & EMAIL INTEGRATION (Week 10)

### Task 10.1: Set Up Resend Email Service
**PRD Reference**: §3.1 (Forms & Lead Capture)
**Rules Reference**: `data-fetching.md`, `environment-variables.md`
**Dependencies**: Task 1.6

**Subtasks**:
- [ ] Sign up for Resend account
- [ ] Verify domain (drantipov.com)
- [ ] Get API key
- [ ] Add to `.env.local`:
  ```bash
  RESEND_API_KEY=re_xxxxxxxxxxxxx
  FROM_EMAIL=noreply@drantipov.com
  TO_EMAIL=office@drantipov.com
  ```
- [x] Create `src/lib/email.ts` utility — *`src/lib/email.ts`*
- [ ] Test email sending

**Acceptance Criteria**:
- ✅ Domain verified
- ✅ API key working
- ✅ Test email received
- ✅ Follows `data-fetching.md` guidelines

---

### Task 10.2: Create Consultation API Route
**PRD Reference**: Form submission specs from `data-fetching.md`
**Rules Reference**: `data-fetching.md`, `security.md`
**Dependencies**: Task 10.1, Task 7.3

**Subtasks**:
- [x] Create `src/app/api/consultation/route.ts`
- [x] Implement POST handler
- [x] Add server-side validation (Zod)
- [x] Check honeypot field
- [x] Send email to office
- [x] Send confirmation email to user
- [ ] Optional: Send to CRM webhook (HubSpot)
- [x] Add error handling
- [ ] Test API route

**Acceptance Criteria**:
- ✅ Validates input server-side
- ✅ Emails sent successfully
- ✅ Returns proper status codes
- ✅ Error handling works
- ✅ Follows `data-fetching.md` exactly

**PRD Code** (from `data-fetching.md` - full example provided):
```typescript
// See data-fetching.md for complete implementation
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { consultationFormSchema } from '@/lib/validations/consultation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = consultationFormSchema.parse(body);

    // Check honeypot
    if (validatedData.website) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // Send emails...
    // ...
  } catch (error) {
    // Error handling...
  }
}
```

---

### Task 10.3: Create Referral API Route

> **Status 2026-10-18:** No `/api/referral` route was built. Dentist referrals use `/api/contact` (`isReferringDentist`) and `/api/lead`, so the items below no longer apply.

**PRD Reference**: Referral form specs from `data-fetching.md`
**Rules Reference**: `data-fetching.md`, `security.md`
**Dependencies**: Task 10.1, Task 6.2

**Subtasks**:
- ~~Create `src/app/api/referral/route.ts`~~ — *obsolete*
- ~~Implement POST handler~~ — *obsolete*
- ~~Add server-side validation~~ — *obsolete*
- ~~Send email to office (highlight urgency)~~ — *obsolete*
- ~~Send confirmation to referring dentist~~ — *obsolete*
- ~~Add error handling~~ — *obsolete*
- ~~Test API route~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Validates input
- ✅ Emails sent
- ✅ Urgency highlighted in subject
- ✅ Error handling works
- ✅ Follows guidelines

---

### Task 10.4: Create Contact API Route
**PRD Reference**: Contact form specs
**Rules Reference**: `data-fetching.md`, `security.md`
**Dependencies**: Task 10.1, Task 9.2

**Subtasks**:
- [x] Create `src/app/api/contact/route.ts`
- [x] Implement POST handler
- [x] Add server-side validation
- [x] Send email to office
- [ ] Send confirmation to user
- [x] Add error handling
- [ ] Test API route

**Acceptance Criteria**:
- ✅ Validates input
- ✅ Emails sent
- ✅ Error handling works
- ✅ Follows guidelines

---

### Task 10.5: Test All Forms End-to-End
**PRD Reference**: All form specifications
**Rules Reference**: `form-handling.md`, `data-fetching.md`, `security.md`, `testing.md`
**Dependencies**: Task 10.2, 10.3, 10.4

**Subtasks**:
- [ ] Test consultation form:
  - Valid submission
  - Invalid email
  - Missing required fields
  - Honeypot triggered
  - Verify emails received
- ~~Test referral form:~~ — *obsolete: no separate referral form (see Task 6.2)*
  - All fields
  - Urgency handling
  - Verify emails received
- [ ] Test contact form:
  - All fields
  - Verify emails received
- [ ] Test on mobile devices
- [ ] Test error scenarios
- [ ] Document test results

**Acceptance Criteria**:
- ✅ All forms submit successfully
- ✅ Validation works
- ✅ Emails received
- ✅ Error handling works
- ✅ Mobile-friendly

---

## 📝 PHASE 11: ANALYTICS & TRACKING (Week 11)

### Task 11.1: Set Up Google Analytics 4
**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: `environment-variables.md`, `security.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [ ] Create GA4 property
- [ ] Get measurement ID
- [ ] Add to `.env.local`:
  ```bash
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
  ```
- [x] Install `react-ga4` or use Next.js Script — *Next.js `Script` in `GoogleAnalytics.tsx`*
- [x] Add GA script to root layout — *loaded after cookie consent*
- [ ] Configure data streams
- [ ] Set up goals/conversions:
  - Form submissions
  - Phone clicks
  - CTA clicks
  - Video plays
- [ ] Test tracking in GA4

**Acceptance Criteria**:
- ✅ GA4 tracking code installed
- ✅ Page views tracked
- ✅ Events configured
- ✅ Real-time data shows

---

### Task 11.2: Set Up Google Tag Manager
**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: `environment-variables.md`
**Dependencies**: Task 11.1

**Subtasks**:
- [ ] Create GTM container
- [ ] Get GTM ID
- [ ] Add to `.env.local`:
  ```bash
  NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
  ```
- [x] Add GTM script to root layout — *loaded after cookie consent*
- [ ] Create tags:
  - GA4 configuration
  - Form submission events
  - Button click events
  - Phone click events
- [ ] Create triggers
- [ ] Test in preview mode

**Acceptance Criteria**:
- ✅ GTM installed
- ✅ Tags firing correctly
- ✅ Events tracked
- ✅ Preview mode works

---

### Task 11.3: Set Up Hotjar

> **Status 2026-10-18:** The site uses Microsoft Clarity (heatmaps and recordings, `NEXT_PUBLIC_CLARITY_ID`) instead of Hotjar, so the items below no longer apply.

**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: `environment-variables.md`
**Dependencies**: Task 2.1

**Subtasks**:
- ~~Create Hotjar account~~ — *obsolete*
- ~~Get site ID~~ — *obsolete*
- ~~Add to `.env.local`:~~ — *obsolete*
  ```bash
  NEXT_PUBLIC_HOTJAR_ID=XXXXXX
  ```
- ~~Add Hotjar script to root layout~~ — *obsolete*
- ~~Configure heatmaps~~ — *obsolete*
- ~~Configure session recordings~~ — *obsolete*
- ~~Test tracking~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Hotjar installed
- ✅ Heatmaps working
- ✅ Recordings working
- ✅ Privacy settings configured

---

### Task 11.4: Set Up Facebook Pixel
**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: `environment-variables.md`
**Dependencies**: Task 2.1

**Subtasks**:
- [ ] Create Facebook Pixel
- [ ] Get Pixel ID
- [ ] Add to `.env.local`:
  ```bash
  NEXT_PUBLIC_FB_PIXEL_ID=XXXXXX
  ```
- [ ] Add Pixel script to root layout
- [ ] Configure events:
  - Page view
  - Lead (form submission)
  - Contact
- [ ] Test with Facebook Pixel Helper

**Acceptance Criteria**:
- ✅ Pixel installed
- ✅ Events firing
- ✅ Test events verified
- ✅ Conversion tracking works

---

### Task 11.5: Implement Event Tracking

> **Status 2026-10-18:** Helpers exist in `src/lib/analytics.ts` (trackConsultationSubmission, trackPhoneClick, trackCTAClick, trackVideoPlay, trackExternalLink), but nothing calls them yet (checked 2026-10-18).

**PRD Reference**: §3.1 (Analytics & Tracking)
**Rules Reference**: None specific
**Dependencies**: Task 11.1, 11.2

**Subtasks**:
- [ ] Track form submissions:
  - Consultation
  - Referral
  - Contact
- [ ] Track button clicks:
  - All CTAs
  - Phone clicks
  - Email clicks
  - External links
- [ ] Track video plays
- [ ] Track scroll depth (25%, 50%, 75%, 100%)
- [ ] Track outbound links (to Fusion Dental, Udemy)
- [ ] Test all events

**Acceptance Criteria**:
- ✅ All events tracked
- ✅ Data shows in GA4
- ✅ GTM events firing
- ✅ No tracking errors

---

## 📝 PHASE 12: SEO OPTIMIZATION (Week 12)

### Task 12.1: Generate XML Sitemap

> **Status 2026-10-18:** The sitemap is generated by `src/app/sitemap.ts` from `src/lib/seo-foundation` (with hreflang alternates). next-sitemap is no longer used, although the package is still in package.json.

**PRD Reference**: §6 (SEO Requirements)
**Rules Reference**: None specific
**Dependencies**: All pages complete

**Subtasks**:
- ~~Install `next-sitemap` package~~ — *obsolete: replaced by `src/app/sitemap.ts`*
- ~~Configure `next-sitemap.config.js`~~ — *obsolete: replaced by `src/app/sitemap.ts`*
- [x] Include all pages (19 pages) — *all indexable routes, EN + RU*
- [x] Exclude admin/draft pages — *noindex routes excluded*
- ~~Set change frequencies~~ — *obsolete: lastmod/changefreq/priority deliberately omitted*
- ~~Set priorities~~ — *obsolete: deliberately omitted*
- [x] Generate sitemap.xml
- [ ] Submit to Google Search Console

**Acceptance Criteria**:
- ✅ Sitemap.xml generated
- ✅ All pages included
- ✅ Accessible at /sitemap.xml
- ✅ Submitted to Google

**Command**:
```bash
yarn add next-sitemap
```

---

### Task 12.2: Configure robots.txt
**PRD Reference**: §6 (SEO Requirements)
**Rules Reference**: None specific
**Dependencies**: Task 12.1

**Subtasks**:
- ~~Create `public/robots.txt`~~ — *obsolete: replaced by `src/app/robots.ts`*
- ~~Allow all pages except legal~~ — *obsolete: legal pages are deliberately indexable (listed in `seo-route-inventory.json` and the sitemap)*
- [x] Add sitemap URL
- [x] Test robots.txt — *live at /robots.txt*

**Acceptance Criteria**:
- ✅ robots.txt created
- ✅ Proper directives
- ✅ Sitemap URL included
- ✅ Accessible at /robots.txt

**Example**:
```txt
User-agent: *
Allow: /
Disallow: /legal/

Sitemap: https://drantipov.com/sitemap.xml
```

---

### Task 12.3: Add Structured Data to All Pages
**PRD Reference**: §6 (SEO - Schema Markup)
**Rules Reference**: None specific
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Add Physician schema to homepage
- [x] Add MedicalBusiness schema to homepage — *site-wide JSON-LD*
- [x] Add MedicalProcedure schema to service pages — *MedicalProcedure on expertise pages*
- ~~Add Review schema to testimonials page~~ — *obsolete: testimonials page removed; rating schema removed on purpose*
- [ ] Add BreadcrumbList schema to all pages
- [ ] Add Course schema to courses page
- [ ] Validate all schemas with Google Rich Results Test
- [ ] Test in Google Search Console

**Acceptance Criteria**:
- ✅ All schemas present
- ✅ Schemas validate
- ✅ No errors in Search Console
- ✅ Rich results eligible

---

### Task 12.4: Optimize Images
**PRD Reference**: §3.2 (Performance Requirements)
**Rules Reference**: None specific
**Dependencies**: All pages complete

**Subtasks**:
- ~~Convert all images to WebP format~~ — *obsolete: next/image serves WebP/AVIF automatically*
- ~~Add JPEG fallbacks~~ — *obsolete: handled by next/image*
- [ ] Optimize file sizes (<200KB)
- [ ] Add descriptive filenames (with keywords)
- [ ] Add alt text to all images
- [x] Use Next.js Image component everywhere — *no raw `<img>` tags in src/*
- [x] Configure lazy loading — *next/image lazy-loads by default*
- [ ] Test image loading performance

**Acceptance Criteria**:
- ✅ All images optimized
- ✅ WebP format used
- ✅ Alt text present
- ✅ Fast loading (<2s LCP)

---

### Task 12.5: Optimize Core Web Vitals
**PRD Reference**: §3.2 (Performance Requirements)
**Rules Reference**: None specific
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Test with PageSpeed Insights
- [ ] Optimize Largest Contentful Paint (LCP):
  - Preload hero images
  - Optimize fonts
  - Reduce server response time
- [ ] Optimize First Input Delay (FID):
  - Minimize JavaScript
  - Use code splitting
- [ ] Optimize Cumulative Layout Shift (CLS):
  - Set image dimensions
  - Reserve space for ads/embeds
- [ ] Test on mobile and desktop
- [ ] Achieve all green scores

**Acceptance Criteria**:
- ✅ LCP < 2.5s
- ✅ FID < 100ms
- ✅ CLS < 0.1
- ✅ Lighthouse score 95+

---

### Task 12.6: Set Up Google Search Console
**PRD Reference**: §6 (SEO Requirements)
**Rules Reference**: None specific
**Dependencies**: Task 12.1, 12.2

**Subtasks**:
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Submit URL for all 19 pages
- [ ] Configure email alerts
- [ ] Monitor coverage
- [ ] Fix any errors

**Acceptance Criteria**:
- ✅ Domain verified
- ✅ Sitemap submitted
- ✅ Pages indexed
- ✅ No critical errors

---

## 📝 PHASE 13: BLOG INTEGRATION (Week 12)

### Task 13.1: Set Up Blog Proxy/Subdomain

> **Status 2026-10-18:** Not pursued. Articles live on-site (`/for-patients/insights`, guide and insight articles in `src/constants`), and `/blog` returns 404. The items below no longer apply. Any old blog URLs that still get traffic should get redirects (tracked separately).

**PRD Reference**: §5.2 (Blog Integration Strategy)
**Rules Reference**: None specific
**Dependencies**: Production deployment

**Subtasks**:
- ~~Choose integration approach:~~ — *obsolete*
  - Option A: Subdirectory proxy (`/blog/*`)
  - Option B: Subdomain (`blog.drantipov.com`)
- ~~Configure Next.js rewrites (if Option A)~~ — *obsolete*
- ~~Configure DNS (if Option B)~~ — *obsolete*
- ~~Update old blog header/footer with new branding~~ — *obsolete*
- ~~Test navigation between sites~~ — *obsolete*
- ~~Verify SEO preservation (no 301 redirects needed)~~ — *obsolete*

**Acceptance Criteria**:
- ✅ Blog accessible
- ✅ Navigation consistent
- ✅ SEO preserved (all URLs intact)
- ✅ Branding consistent

**PRD Recommendation**: Option A (Subdirectory Proxy) using Next.js rewrites

---

## 📝 PHASE 14: TESTING & QA (Week 12)

### Task 14.1: Cross-Browser Testing
**PRD Reference**: §3.2 (Performance Requirements)
**Rules Reference**: `testing.md`
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test in mobile browsers (iOS Safari, Android Chrome)
- [ ] Fix any browser-specific issues
- [ ] Document test results

**Acceptance Criteria**:
- ✅ All pages work in all browsers
- ✅ Animations smooth
- ✅ Forms functional
- ✅ No console errors

---

### Task 14.2: Mobile Responsiveness Testing
**PRD Reference**: §3.2 (Performance - Mobile-first)
**Rules Reference**: `ui-components.md`
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Test on iPhone (multiple sizes)
- [ ] Test on Android (multiple sizes)
- [ ] Test on iPad
- [ ] Test landscape and portrait
- [ ] Test all breakpoints (320px - 2560px)
- [ ] Fix any layout issues
- [ ] Test touch interactions

**Acceptance Criteria**:
- ✅ Responsive on all devices
- ✅ No horizontal scroll
- ✅ Touch targets ≥ 44px
- ✅ Forms usable on mobile

---

### Task 14.3: Accessibility Audit
**PRD Reference**: §3.2 (Performance - Accessibility)
**Rules Reference**: `ui-components.md`
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Run axe DevTools audit
- [ ] Test keyboard navigation
- [ ] Test screen reader (NVDA/VoiceOver)
- [ ] Check color contrast ratios (WCAG AA)
- [ ] Add ARIA labels where needed
- [ ] Add focus indicators
- [ ] Test form validation with screen reader
- [ ] Fix all accessibility issues

**Acceptance Criteria**:
- ✅ WCAG 2.1 AA compliant
- ✅ Lighthouse Accessibility score 95+
- ✅ Keyboard navigable
- ✅ Screen reader friendly

---

### Task 14.4: Performance Testing
**PRD Reference**: §3.2 (Performance Requirements)
**Rules Reference**: None specific
**Dependencies**: All pages complete

**Subtasks**:
- [ ] Run Lighthouse audits on all pages
- [ ] Test page load times
- [ ] Test Time to Interactive (TTI)
- [ ] Test First Contentful Paint (FCP)
- [ ] Optimize slow pages
- [ ] Test on 3G connection
- [ ] Document results

**Acceptance Criteria**:
- ✅ Lighthouse Performance score 95+
- ✅ FCP < 1.2s
- ✅ TTI < 2.5s
- ✅ All Core Web Vitals green

---

### Task 14.5: Security Audit
**PRD Reference**: §7 (Security & Compliance)
**Rules Reference**: `security.md`
**Dependencies**: All pages complete, API routes complete

**Subtasks**:
- [ ] Run `npm audit` - fix vulnerabilities
- [ ] Test form validation (client and server)
- [ ] Test honeypot spam prevention
- [ ] Verify no PHI collection (HIPAA compliance)
- [ ] Test HTTPS enforcement
- [x] Verify security headers — *HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy in next.config.mjs, served live*
- [x] Test CSP (Content Security Policy) — *CSP in next.config.mjs, served live*
- [x] Check for exposed secrets (.env.local not in Git) — *only `.env.example` is tracked*
- [ ] Document security measures

**Acceptance Criteria**:
- ✅ No high/critical vulnerabilities
- ✅ All forms secure
- ✅ HIPAA-compliant
- ✅ Security headers configured
- ✅ Follows `security.md` guidelines

---

## 📝 PHASE 15: DEPLOYMENT & LAUNCH (Week 12)

### Task 15.1: Set Up Vercel Project
**PRD Reference**: §3 (Technical Stack)
**Rules Reference**: None specific
**Dependencies**: All tasks complete

**Subtasks**:
- [x] Create Vercel account
- [x] Connect GitHub repository — *Vercel GitHub integration; deployments created by vercel[bot]*
- [x] Configure build settings:
  - Framework: Next.js
  - Build command: `yarn build`
  - Output directory: `.next`
- [ ] Add environment variables to Vercel:
  - All `NEXT_PUBLIC_*` vars
  - All private vars (RESEND_API_KEY, etc.)
- [x] Test preview deployment — *preview deployments exist*

**Acceptance Criteria**:
- ✅ Vercel project created
- ✅ Build succeeds
- ✅ Preview URL works
- ✅ Environment vars configured

---

### Task 15.2: Configure Custom Domain
**PRD Reference**: §5 (Site Architecture)
**Rules Reference**: None specific
**Dependencies**: Task 15.1

**Subtasks**:
- [x] Add drantipov.com to Vercel
- [x] Configure DNS records:
  - A record → Vercel IP
  - CNAME www → Vercel
- [x] Wait for DNS propagation
- [x] Enable HTTPS (automatic via Vercel)
- [ ] Force HTTPS redirect
- [x] Test domain — *https://www.drantipov.com live on Vercel*

**Acceptance Criteria**:
- ✅ Domain points to Vercel
- ✅ HTTPS enabled
- ✅ www redirects to non-www (or vice versa)
- ✅ SSL certificate valid

---

### Task 15.3: Production Deployment
**PRD Reference**: All sections
**Rules Reference**: All rules
**Dependencies**: Task 15.1, 15.2, all previous tasks

**Subtasks**:
- [ ] Final code review
- [ ] Run all tests
- [ ] Check .env.local vs production env vars
- [x] Deploy to production — *production deployments on Vercel*
- [ ] Monitor deployment logs
- [ ] Test production site thoroughly
- [ ] Check analytics tracking
- [ ] Test forms on production
- [ ] Monitor for errors

**Acceptance Criteria**:
- ✅ Production deploy succeeds
- ✅ All pages accessible
- ✅ All forms working
- ✅ Analytics tracking
- ✅ No console errors

---

### Task 15.4: Post-Launch Monitoring
**PRD Reference**: §1.5 (Success Metrics)
**Rules Reference**: None specific
**Dependencies**: Task 15.3

**Subtasks**:
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Set up error tracking (Sentry)
- [ ] Monitor analytics:
  - Page views
  - Form submissions
  - Bounce rate
  - Time on site
- [ ] Monitor Search Console:
  - Indexing status
  - Coverage issues
  - Core Web Vitals
- [ ] Monitor performance:
  - Lighthouse scores
  - Page load times
- [ ] Weekly reports for first month

**Acceptance Criteria**:
- ✅ Monitoring configured
- ✅ No critical errors
- ✅ Analytics data flowing
- ✅ Performance stable

---

## 📝 FUTURE TASKS

_Tasks that may be implemented post-launch_

### Task F.1: A/B Testing
- ~~Set up A/B testing tool (Google Optimize)~~ — *obsolete: Google Optimize was shut down in 2023*
- [ ] Test headline variations
- [ ] Test CTA button colors/copy
- [ ] Test form layouts
- [ ] Implement winning variations

### Task F.2: Advanced SEO
- [x] Create location-specific pages — *`/locations/[state]/[city]` pages*
- [ ] Build backlink strategy
- [ ] Guest posting on dental blogs
- [ ] Local SEO citations
- [ ] Google Business Profile optimization

### Task F.3: Content Updates
- [ ] Add more video testimonials
- [ ] Create procedure explanation videos
- [x] Write blog posts (if blog hosting) — *many insight and guide articles on-site*
- [ ] Update before/after gallery
- [ ] Add more FAQs

### Task F.4: Advanced Features
- [ ] Add live chat widget
- [ ] Add online booking integration (Calendly)
- [ ] Add insurance verification tool
- [ ] Add financing calculator
- [ ] Multi-language support (Spanish)

---

## 📊 PROGRESS TRACKING

### Subtask status (reconciled 2026-10-18)

| Phase | Done | Open | Obsolete |
| --- | --- | --- | --- |
| PHASE 1: PROJECT FOUNDATION (Weeks 1-2) | 29 | 7 | 2 |
| PHASE 2: LAYOUT & NAVIGATION (Week 2) | 27 | 11 | 2 |
| PHASE 3: HOMEPAGE IMPLEMENTATION (Weeks 3-4) | 13 | 3 | 53 |
| PHASE 4: ABOUT PAGE (Week 4) | 7 | 1 | 22 |
| PHASE 5: EXPERTISE/SERVICE PAGES (Week 5) | 25 | 19 | 4 |
| PHASE 6: FOR DENTISTS PAGES (Week 6) | 7 | 5 | 10 |
| PHASE 7: FOR PATIENTS PAGES (Week 7) | 15 | 3 | 12 |
| PHASE 8: MEDIA PAGES (Week 8) | 12 | 3 | 1 |
| PHASE 9: CONTACT & LEGAL PAGES (Week 9) | 28 | 7 | 4 |
| PHASE 10: API ROUTES & EMAIL INTEGRATION (Week 10) | 13 | 14 | 8 |
| PHASE 11: ANALYTICS & TRACKING (Week 11) | 3 | 24 | 7 |
| PHASE 12: SEO OPTIMIZATION (Week 12) | 9 | 22 | 9 |
| PHASE 13: BLOG INTEGRATION (Week 12) | 0 | 0 | 6 |
| PHASE 14: TESTING & QA (Week 12) | 3 | 35 | 0 |
| PHASE 15: DEPLOYMENT & LAUNCH (Week 12) | 10 | 16 | 0 |
| FUTURE TASKS | 2 | 17 | 1 |
| **Total** | **203** | **187** | **141** |

---

## 🎯 IMPORTANT REMINDERS

### Before Starting ANY Task:
1. ✅ Read the referenced PRD section
2. ✅ Review the applicable rules
3. ✅ Check task dependencies
4. ✅ Update task status to "in_progress"
5. ✅ Follow the acceptance criteria exactly

### After Completing a Task:
1. ✅ Mark all subtasks as complete
2. ✅ Update task status to "completed"
3. ✅ Move to "Completed Tasks" section
4. ✅ Test the implementation
5. ✅ Commit changes with clear message

### Rules to Always Follow:
- 📖 `project-structure.md` - File organization
- 🎨 `ui-components.md` - Design system
- 📝 `form-handling.md` - Form validation
- 🔒 `security.md` - HIPAA compliance
- 📧 `data-fetching.md` - Email forms

### Never Do:
- ❌ Skip PRD references
- ❌ Ignore acceptance criteria
- ❌ Copy code without understanding
- ❌ Commit without testing
- ❌ Collect PHI (Protected Health Information)

---

## 📞 EMERGENCY CONTACTS & RESOURCES

**PRD Document**: [dr-antipov-prd.md](dr-antipov-prd.md)
**Rules Directory**: `.claude/rules/`
**Project Structure**: See `project-structure.md`

**Key Resources**:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Shadcn UI: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev

---

**Last Updated**: 2025-10-12
**Version**: 1.0
**Status**: Ready to Begin Implementation 🚀
