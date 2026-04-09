# Dr. Alexander Antipov - Personal Brand & Educational Hub

A modern, high-performance website for Dr. Alexander Antipov, board-certified oral and maxillofacial surgeon. Built with Next.js 14, TypeScript, and featuring a glassmorphism design system.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.33 (App Router)
- **Language**: TypeScript 5.9+ (strict mode)
- **Styling**: Tailwind CSS 3.4+ with custom design system
- **UI Components**: Shadcn UI + Radix UI primitives
- **Animations**: Framer Motion 12+
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend (configured, pending API key)
- **Icons**: Lucide React
- **Package Manager**: Yarn

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About Dr. Antipov
│   ├── contact/page.tsx          # Contact page
│   ├── expertise/                # Surgical expertise pages
│   │   ├── page.tsx              # Expertise landing
│   │   ├── full-arch-implants/   # All-on-X procedures
│   │   ├── single-tooth/         # Single tooth implants
│   │   ├── bone-grafting/        # Bone grafting procedures
│   │   ├── jaw-surgery/          # Orthognathic surgery
│   │   └── sleep-apnea/          # Sleep apnea surgery
│   ├── for-dentists/             # Referral partners & education
│   │   ├── page.tsx              # For dentists landing
│   │   ├── referral-partners/
│   │   └── education/courses/
│   ├── for-patients/             # Patient resources
│   │   ├── page.tsx              # Patient resources landing
│   │   ├── testimonials/
│   │   ├── consultation/
│   │   ├── pre-op/               # Pre-operative instructions
│   │   ├── post-op/              # Post-operative care
│   │   └── faqs/                 # Frequently Asked Questions
│   ├── legal/                    # Legal pages
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   ├── medical-disclaimer/
│   │   └── hipaa-notice/
│   ├── media/                    # Media & speaking
│   │   ├── videos/
│   │   └── speaking/
│   └── api/                      # API routes
│       ├── contact/route.ts
│       └── consultation/route.ts
├── components/
│   ├── forms/                    # Form components (Client)
│   ├── home/                     # Homepage sections
│   ├── about/                    # About page components
│   ├── expertise/                # Expertise page components
│   ├── for-dentists/             # Dentist-specific components
│   ├── layout/                   # Layout components (Header, Footer)
│   ├── sections/                 # Reusable sections (GlassCard, Section, Container)
│   └── ui/                       # UI primitives (Shadcn)
├── lib/
│   ├── animations.ts             # Framer Motion variants
│   ├── structured-data.ts        # Schema.org JSON-LD generators
│   └── validations/              # Zod schemas
│       ├── contact.ts
│       └── consultation.ts
└── constants/
    ├── siteConfig.ts             # Site-wide configuration
    └── services.ts               # Service offerings data
```

## 🎨 Design System

### Glassmorphism Theme
- **Primary Color**: Sky Blue (`#0ea5e9`) - Professional medical blue
- **Accent Color**: Amber (`#f59e0b`) - Warm, approachable
- **Neutral**: Modern grays for text and backgrounds
- **Effects**: Backdrop blur, semi-transparent cards, subtle shadows

### Typography
- **Headings**: Merriweather (serif) - Classic, professional
- **Body**: Inter (sans-serif) - Clean, readable

### Components
All components follow a consistent glassmorphism aesthetic:
- `GlassCard` - Semi-transparent cards with backdrop blur
- `Section` - Responsive sections with background variants (default, gradient, accent)
- `Container` - Responsive containers with size variants (sm, md, lg, xl)

## ✅ Completed Features

### Core Pages (24 Total)
- ✅ Homepage with hero, services, and CTAs
- ✅ About page with biography, credentials, philosophy
- ✅ Contact page with form and office information
- ✅ Expertise landing page
- ✅ 5 detailed expertise pages (1200-1500 words each)
- ✅ For Dentists landing page + 2 sub-pages (referrals, education)
- ✅ For Patients landing page + 5 sub-pages (testimonials, consultation, pre-op, post-op, faqs)
- ✅ 4 comprehensive legal pages (HIPAA-compliant)
- ✅ 2 media pages (videos, speaking engagements)

### Technical Features
- ✅ **Server Components First**: All `page.tsx` files are Server Components
- ✅ **Client Components**: Only for interactivity (forms, animations)
- ✅ **SEO Optimized**:
  - Meta tags on every page
  - XML sitemap (auto-generated)
  - Robots.txt configuration
  - Schema.org structured data (Organization, Physician, MedicalProcedure, FAQs)
  - Breadcrumbs for navigation
- ✅ **Forms**: React Hook Form + Zod validation with honeypot spam prevention
- ✅ **API Routes**: Contact and consultation endpoints ready for email integration
- ✅ **Responsive Design**: Mobile-first, fully responsive
- ✅ **Animations**: 60fps scroll-triggered animations with Framer Motion
- ✅ **Type Safety**: Full TypeScript coverage with strict mode

### HIPAA Compliance
- ✅ No PHI collection on website
- ✅ Clear disclaimers on all forms
- ✅ Security notices
- ✅ Comprehensive HIPAA Notice of Privacy Practices

## 🚧 Pending Integration

### Email Service (Resend)
1. Sign up at [resend.com](https://resend.com)
2. Verify domain (drantipov.com)
3. Add API key to `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Uncomment email sending code in:
   - `src/app/api/contact/route.ts`
   - `src/app/api/consultation/route.ts`

### Analytics Integration
1. **Google Analytics 4**
   - Create GA4 property
   - Add measurement ID to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

2. **Google Tag Manager**
   - Create GTM container
   - Add container ID to `.env.local`: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

3. **Hotjar** (optional)
   - Create Hotjar site
   - Add site ID to `.env.local`: `NEXT_PUBLIC_HOTJAR_ID=XXXXXXX`

4. **Facebook Pixel** (optional)
   - Create Facebook Pixel
   - Add pixel ID to `.env.local`: `NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX`

### Images
Replace placeholder gradients with real images:
- Dr. Antipov professional headshot
- Office photos
- Treatment before/after photos (with patient consent)
- Video thumbnails
- Partner/certification logos

Recommended image specifications:
- **Profile photos**: 800x800px, JPG/WebP
- **Office photos**: 1920x1080px, JPG/WebP
- **Before/After**: 1200x900px, JPG/WebP
- **Logos**: SVG preferred, or PNG with transparency

## 🛠️ Development

### Installation
```bash
yarn install
```

### Development Server
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
yarn build
```

This will:
1. Build the Next.js application
2. Auto-generate sitemap.xml and robots.txt (via postbuild script)

### Start Production Server
```bash
yarn start
```

## 📝 Environment Variables

Create a `.env.local` file:

```bash
# Resend API for email notifications
RESEND_API_KEY=your_resend_api_key_here

# Email addresses
CONTACT_EMAIL=info@drantipov.com
ADMIN_EMAIL=admin@drantipov.com

# Site configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SITE_URL=https://drantipov.com

# Calendly (for appointment scheduling)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/dr-antipov

# Analytics (when ready to integrate)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
# NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
# NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 🔒 Security & Compliance

### HIPAA Compliance
- **No PHI Collection**: Website does not collect Protected Health Information
- **Forms**: Only collect basic contact information for consultation requests
- **Disclaimers**: Clear notices on all forms warning against submitting medical records
- **Legal Pages**: Comprehensive HIPAA Notice, Privacy Policy, Medical Disclaimer

### Security Measures
- **SSL/TLS**: Required for production (configure at hosting level)
- **Input Validation**: All forms validated with Zod schemas
- **Honeypot Fields**: Spam prevention on forms
- **API Routes**: Rate limiting recommended for production
- **Environment Variables**: Sensitive data never committed to repository

## 📊 SEO Optimization

### Implemented
- ✅ Meta tags (title, description, keywords) on all pages
- ✅ Open Graph tags for social sharing
- ✅ XML Sitemap (auto-generated on build)
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Schema.org structured data:
  - Organization (MedicalBusiness)
  - Physician
  - MedicalProcedure
  - FAQPage
  - BreadcrumbList
  - Video (prepared for videos page)
  - Event (prepared for speaking page)

### Sitemap Configuration
Sitemap priorities and update frequencies:
- Homepage: 1.0 (daily)
- Main pages (about, contact, expertise): 0.9 (weekly)
- Expertise pages: 0.8 (monthly)
- For Dentists pages: 0.8 (monthly)
- Patient resources: 0.7 (weekly)
- Media pages: 0.6 (monthly)
- Legal pages: 0.3 (yearly, noindex)

### Recommendations
1. Submit sitemap to Google Search Console
2. Configure Google Search Console for domain verification
3. Monitor search performance and coverage
4. Set up email alerts for critical errors
5. Regularly update content on high-priority pages

## 🎯 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Score Target
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📚 Key Documentation

### Architecture Rules
See `.claude/rules/` for comprehensive development guidelines:
- `server-client-component-checklist.md` - **CRITICAL**: Server vs Client Component patterns
- `page-structure.md` - Next.js App Router page structure
- `ui-components.md` - Glassmorphism design system
- `form-handling.md` - React Hook Form + Zod patterns
- `security.md` - HIPAA-compliant security practices

### Project Requirements
- `dr-antipov-prd.md` - Complete Product Requirements Document
- `MASTER_TASK_LIST.md` - Comprehensive task tracking and implementation log

## 🚀 Deployment

### Recommended Hosting
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom VPS** with Node.js support

### Deployment Checklist
- [ ] Update `.env` variables for production
- [ ] Configure custom domain (drantipov.com)
- [ ] Set up SSL certificate
- [ ] Configure DNS records
- [ ] Test all forms in production
- [ ] Verify email delivery (Resend)
- [ ] Submit sitemap to Google Search Console
- [ ] Configure analytics
- [ ] Test all 19 pages for 200 OK responses
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices

### Build Command
```bash
yarn build
```

### Start Command
```bash
yarn start
```

## 🤝 Contributing

This is a private project for Dr. Alexander Antipov. For inquiries, contact the development team.

## 📄 License

Proprietary - All rights reserved © 2025 Dr. Alexander Antipov

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

Last Updated: October 12, 2025
# dr-antipov-edu
