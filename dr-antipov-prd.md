# Dr. Alexander Antipov Website Redesign
## Comprehensive Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** October 2025  
**Project Goal:** Build a market-leading personal brand & educational hub that positions Dr. Antipov as Northern California's premier oral surgery authority while driving B2B and B2C conversions

---

## 1. EXECUTIVE SUMMARY

### 1.1 Project Overview
Create a cutting-edge personal brand website for Dr. Alexander Antipov that:
- Establishes him as Northern California's leading oral surgery innovator
- Drives patient consultations to fusiondentalimplants.com
- Generates dentist leads for referral partnerships and course enrollments
- Integrates existing drantipov.com blog (preserving SEO traffic)
- Showcases educational content without building full LMS

### 1.2 Brand Positioning
**Accessible Expert** - Authoritative yet approachable, combining world-class expertise with warm, personal patient care

### 1.3 Target Audiences
**Primary B2C:** Patients with missing/failing teeth seeking oral surgery solutions  
**Primary B2B:** General dentists seeking:
- Referral partnerships for complex cases
- Educational courses to expand their surgical capabilities

### 1.4 Geographic Focus
**Northern California** (Sacramento, Roseville, Bay Area corridor)

### 1.5 Success Metrics
- 40% increase in consultation requests to Fusion Dental
- 25% increase in course enrollment inquiries
- 15+ dentist referral partnership leads/month
- 50% reduction in bounce rate vs current drantipov.com
- Outrank Nuvia for "oral surgeon Northern California" within 6 months

---

## 2. COMPETITIVE ANALYSIS

### 2.1 Competitive Landscape

**Nuvia Dental Implants** (Primary Competitor)
- Strengths: Strong "24-hour permanent teeth" messaging, extensive locations, celebrity endorsements (Dr. Drew), professional video testimonials
- Weaknesses: Corporate feel, less emphasis on surgeon expertise, limited educational content for dentists
- SEO Strategy: Location-based pages, cost guides as lead magnets, heavy emphasis on speed/convenience
- Conversion Tactics: Free cost guides, before/after galleries, real patient video stories

**Key Opportunity Gaps:**
1. **Personal Connection:** Nuvia is corporate; Dr. Antipov is personal, accessible expert
2. **B2B Education:** Competitors focus only on patients; we serve dual audience
3. **Innovation Showcase:** We emphasize techniques, technology, thought leadership
4. **Local Authority:** Deep Northern California roots vs national chain

### 2.2 Competitive Advantages to Leverage
- Board certification + prestigious training (Montefiore/Albert Einstein)
- Founder of Fusion Dental Academy (educator credibility)
- Complex case specialist trusted by other dentists
- Personal, relationship-driven approach
- Orthognathic surgery expertise (niche differentiator)

---

## 3. TECHNICAL STACK SPECIFICATIONS

### 3.1 Core Technologies

**Framework: Next.js 14.2+ (App Router)**
```json
{
  "framework": "Next.js 14.2+",
  "rendering": "Hybrid (SSR for SEO pages, SSG for static)",
  "routing": "App Router with nested layouts",
  "optimization": {
    "images": "next/image with WebP/AVIF",
    "fonts": "next/font with Google Fonts",
    "bundle": "Turbopack",
    "prefetch": "Enabled for all internal links"
  }
}
```

**TypeScript Configuration**
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  }
}
```

**Styling: Tailwind CSS 3.4+**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main brand blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        accent: {
          50: '#fef3c7',
          500: '#f59e0b',  // Warm accent for CTAs
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.20)',
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  }
}
```

**UI Components: Shadcn UI**
- Button, Card, Form, Input, Textarea, Select
- Dialog, Sheet, Tabs, Accordion
- Badge, Avatar, Separator
- Custom glassmorphism variants

**Animation: Framer Motion 11+**
```typescript
// Common animation variants
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

**Video Embeds**
- React Player (npm: react-player) for YouTube embeds
- Lite YouTube Embed for performance
- No video hosting infrastructure needed

**Analytics & Tracking**
- Google Analytics 4
- Google Tag Manager
- Hotjar for heatmaps
- Facebook Pixel (for ads)

**Forms & Lead Capture**
- React Hook Form + Zod validation
- EmailJS or Resend for email delivery
- Webhook to CRM (HubSpot/Salesforce)

### 3.2 Performance Requirements
- Lighthouse Score: 95+ (Performance, Accessibility, SEO)
- First Contentful Paint: <1.2s
- Time to Interactive: <2.5s
- Core Web Vitals: All green
- Mobile-first responsive design (320px - 2560px)

---

## 4. DESIGN SYSTEM

### 4.1 Visual Identity

**Color Palette**

```css
/* Primary Colors - Medical Trust + Innovation */
--primary-50: #f0f9ff;
--primary-500: #0ea5e9;  /* Trustworthy medical blue */
--primary-700: #0369a1;  /* Deeper authority */

/* Accent Colors - Warmth + Approachability */
--accent-500: #f59e0b;  /* Warm amber for CTAs */
--accent-600: #d97706;

/* Neutrals - Clean, Professional */
--neutral-50: #fafafa;
--neutral-100: #f5f5f5;  /* Light backgrounds */
--neutral-800: #262626;  /* Primary text */
--neutral-900: #171717;  /* Headings */

/* Semantic Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
```

**Typography Scale**

```css
/* Headings - Merriweather (Serif for authority) */
--font-heading: 'Merriweather', Georgia, serif;

/* Body - Inter (Modern, highly readable) */
--font-body: 'Inter', system-ui, sans-serif;

/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

**Spacing System**
```css
/* Following 8px grid */
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-24: 6rem;    /* 96px */
--spacing-32: 8rem;    /* 128px */
```

### 4.2 Component Specifications

**Glassmorphism Header**
```css
.glass-header {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

/* Dark mode variant */
.glass-header-dark {
  background: rgba(23, 23, 23, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Button Variants**
```tsx
// Primary CTA
<Button className="
  bg-primary-500 hover:bg-primary-600 
  text-white font-semibold
  px-8 py-4 rounded-xl
  shadow-lg hover:shadow-xl
  transition-all duration-200
  hover:scale-105
">
  Book Consultation
</Button>

// Secondary
<Button className="
  bg-white border-2 border-primary-500
  text-primary-700 hover:bg-primary-50
  px-8 py-4 rounded-xl
  transition-all duration-200
">
  Learn More
</Button>

// Glass variant
<Button className="
  bg-white/10 backdrop-blur-md
  border border-white/20
  text-white hover:bg-white/20
  px-8 py-4 rounded-xl
">
  View Courses
</Button>
```

**Card Component**
```tsx
<Card className="
  bg-white rounded-2xl
  border border-neutral-200
  p-8
  shadow-lg hover:shadow-xl
  transition-all duration-300
  hover:-translate-y-1
">
  {/* Content */}
</Card>

// Glass card variant
<Card className="
  bg-white/60 backdrop-blur-lg
  border border-white/20
  rounded-2xl p-8
  shadow-glass
">
  {/* Content */}
</Card>
```

**Section Layouts**
```tsx
// Standard section wrapper
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>

// Alternating background sections
<section className="py-24 px-6 bg-neutral-50">
  {/* Light background */}
</section>

<section className="py-24 px-6 bg-white">
  {/* White background */}
</section>
```

### 4.3 Animation Guidelines

**Scroll Animations**
```typescript
// Fade in on scroll
const fadeInOnScroll = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}
```

**Hover States**
- Cards: Lift 4px + increase shadow
- Buttons: Scale 1.05 + deepen color
- Images: Scale 1.05 inside container (overflow hidden)
- Links: Underline slide-in animation

**Page Transitions**
- Smooth fade between routes (200ms)
- No jarring layout shifts
- Maintain scroll position on back navigation

### 4.4 Responsive Breakpoints
```javascript
breakpoints: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px'  // Extra large
}
```

---

## 5. COMPLETE SITEMAP & URL STRUCTURE

### 5.1 Site Architecture

```
drantipov.com (NEW SITE)
│
├── / (Home)
├── /about
├── /expertise
│   ├── /dental-implants
│   ├── /full-arch-restoration
│   ├── /corrective-jaw-surgery
│   ├── /wisdom-teeth
│   └── /facial-reconstruction
├── /for-dentists
│   ├── /referral-partners
│   └── /education
│       └── /courses
├── /for-patients
│   ├── /testimonials
│   └── /consultation
├── /blog (INTEGRATION POINT - Existing drantipov.com)
│   ├── /procedures
│   ├── /patient-stories
│   └── /[post-slug]
├── /media
│   ├── /videos
│   └── /speaking
├── /contact
└── /legal
    ├── /privacy-policy
    ├── /terms-of-service
    ├── /medical-disclaimer
    └── /hipaa-notice
```

### 5.2 Blog Integration Strategy

**Current Site Preservation:**
- Existing drantipov.com remains live at its current URLs
- Add noindex/nofollow to old homepage only
- All blog posts (/procedures/, /patient-stories/, individual posts) keep exact URLs
- Implement 301 redirects ONLY if needed for broken links

**Integration Approach:**
```
Option A (Recommended): Subdirectory Proxy
- New site: drantipov.com (main brand site)
- Blog: drantipov.com/blog/* (proxy to old site)
- Use Next.js rewrites to serve old site content under /blog
- Update old site header/footer to match new brand (minimal changes)

Option B: Subdomain
- New site: www.drantipov.com
- Blog: blog.drantipov.com (old site)
- Cross-link with consistent navigation
```

**Navigation Integration:**
- New site header includes "Blog" link → /blog
- Old site header updated with links to new sections
- Consistent branding across both properties
- Shared footer

---

## 6. PAGE-BY-PAGE SPECIFICATIONS

### 6.1 HOME PAGE

**URL:** `/`

**Page Goals:**
1. Immediately establish Dr. Antipov as Northern California's leading oral surgery authority
2. Clarify dual value propositions (patients + dentists)
3. Drive primary conversions (consultation bookings, course inquiries, referral contacts)

**SEO Specifications:**
```html
<title>Dr. Alexander Antipov - Northern California's Premier Oral Surgeon | Roseville, Sacramento</title>

<meta name="description" content="Board-certified oral surgeon Dr. Alexander Antipov specializes in dental implants, full-arch restoration, and corrective jaw surgery. Trusted by dentists across Northern California. Serving Roseville, Sacramento, and Bay Area.">

<meta name="keywords" content="oral surgeon Northern California, dental implants Roseville, corrective jaw surgery Sacramento, full arch implants, board certified oral surgeon, Dr. Antipov">

<link rel="canonical" href="https://drantipov.com/" />

<!-- Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Alexander Antipov",
  "url": "https://drantipov.com",
  "image": "https://drantipov.com/images/dr-antipov-profile.jpg",
  "specialty": "Oral and Maxillofacial Surgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "911 Reserve Drive, Suite 150",
    "addressLocality": "Roseville",
    "addressRegion": "CA",
    "postalCode": "95678"
  },
  "telephone": "+1-916-783-2110",
  "medicalSpecialty": "Oral Surgery",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Loma Linda University School of Dentistry"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Montefiore Medical Center / Albert Einstein College of Medicine"
    }
  ]
}
</script>
```

**H1 Tag:** "Northern California's Trusted Oral Surgery Innovator"

**Target Keywords (Primary):**
- oral surgeon Northern California
- dental implants Roseville
- corrective jaw surgery Sacramento
- full arch restoration specialist

**Page Structure:**

**HERO SECTION**
```tsx
<section className="relative h-screen">
  {/* Background: Subtle gradient + optional video loop */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-50" />
  
  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Copy */}
      <motion.div {...fadeInUp}>
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
          Northern California's Trusted Oral Surgery Innovator
        </h1>
        
        <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
          Board-certified specialist helping patients reclaim their smiles and 
          dentists master advanced surgical techniques. Serving Roseville, Sacramento, 
          and the Bay Area with world-class expertise and personal care.
        </p>
        
        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
            Book Patient Consultation →
          </Button>
          <Button size="lg" variant="outline" className="border-primary-500 text-primary-700">
            Partner With Me (Dentists)
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex items-center gap-8">
          <div>
            <p className="text-sm text-neutral-500">Board Certified</p>
            <p className="font-semibold">ABOMS</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Training</p>
            <p className="font-semibold">Albert Einstein</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Experience</p>
            <p className="font-semibold">15+ Years</p>
          </div>
        </div>
      </motion.div>
      
      {/* Right: Hero Image/Video */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/images/dr-antipov-hero.jpg" 
            alt="Dr. Alexander Antipov performing surgery"
            className="w-full h-[600px] object-cover"
          />
          {/* Glass overlay with play button for video testimonial */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition">
              <Play className="w-8 h-8 text-primary-500 ml-1" />
            </div>
          </button>
        </div>
      </motion.div>
      
    </div>
  </div>
</section>
```

**Copy:**
- Headline: "Northern California's Trusted Oral Surgery Innovator"
- Subheadline: "Board-certified specialist helping patients reclaim their smiles and dentists master advanced surgical techniques. Serving Roseville, Sacramento, and the Bay Area with world-class expertise and personal care."
- Primary CTA: "Book Patient Consultation →"
- Secondary CTA: "Partner With Me (Dentists)"

---

**PROBLEM/SOLUTION SECTION** (For Patients)
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-bold mb-4">
        Finally, A Smile You're Proud Of
      </h2>
      <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
        Whether you're struggling with missing teeth, jaw pain, or facial asymmetry, 
        I provide compassionate, expert care that transforms lives.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Problem Card 1 */}
      <Card className="p-8 hover:shadow-xl transition">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <Frown className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-4">Missing or Failing Teeth?</h3>
        <p className="text-neutral-600 mb-6">
          Don't let tooth loss hold you back from eating, speaking, and smiling confidently.
        </p>
        <a href="/expertise/dental-implants" className="text-primary-600 font-semibold hover:underline">
          Explore Dental Implants →
        </a>
      </Card>
      
      {/* Problem Card 2 */}
      <Card className="p-8 hover:shadow-xl transition">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <AlertCircle className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-4">Jaw Pain or Misalignment?</h3>
        <p className="text-neutral-600 mb-6">
          Difficulty chewing, breathing, or chronic TMJ pain can be corrected with precision surgery.
        </p>
        <a href="/expertise/corrective-jaw-surgery" className="text-primary-600 font-semibold hover:underline">
          Learn About Jaw Surgery →
        </a>
      </Card>
      
      {/* Problem Card 3 */}
      <Card className="p-8 hover:shadow-xl transition">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <Shield className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-4">Need a Specialist You Trust?</h3>
        <p className="text-neutral-600 mb-6">
          Board-certified expertise with a personal touch. Dentists across California refer their most complex cases to me.
        </p>
        <a href="/about" className="text-primary-600 font-semibold hover:underline">
          Meet Dr. Antipov →
        </a>
      </Card>
      
    </div>
    
    {/* CTA */}
    <div className="text-center mt-12">
      <Button size="lg" className="bg-accent-500 hover:bg-accent-600">
        Schedule Your Consultation
      </Button>
    </div>
    
  </div>
</section>
```

**Copy:**
- Headline: "Finally, A Smile You're Proud Of"
- Subheadline: "Whether you're struggling with missing teeth, jaw pain, or facial asymmetry, I provide compassionate, expert care that transforms lives."
- Card 1: "Missing or Failing Teeth?" → "Don't let tooth loss hold you back from eating, speaking, and smiling confidently."
- Card 2: "Jaw Pain or Misalignment?" → "Difficulty chewing, breathing, or chronic TMJ pain can be corrected with precision surgery."
- Card 3: "Need a Specialist You Trust?" → "Board-certified expertise with a personal touch. Dentists across California refer their most complex cases to me."

---

**SERVICES OVERVIEW SECTION**
```tsx
<section className="py-24 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-4xl font-serif font-bold text-center mb-16">
      Specialized Expertise You Can Trust
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {services.map((service) => (
        <Card key={service.id} className="group overflow-hidden hover:shadow-xl transition">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
              {service.name}
            </h3>
          </div>
          <div className="p-6">
            <p className="text-neutral-600 mb-4">{service.description}</p>
            <a href={service.link} className="text-primary-600 font-semibold hover:underline">
              Learn More →
            </a>
          </div>
        </Card>
      ))}
      
    </div>
    
  </div>
</section>
```

**Services to Feature:**
1. Dental Implants & Full-Arch Restoration
2. Corrective Jaw Surgery (Orthognathic)
3. Wisdom Teeth Removal
4. Facial Reconstruction
5. Bone Grafting
6. TMJ Treatment

---

**FOR DENTISTS SECTION**
```tsx
<section className="py-24 bg-primary-900 text-white">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      <div>
        <div className="inline-block bg-primary-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
          For Dental Professionals
        </div>
        
        <h2 className="text-4xl font-serif font-bold mb-6">
          Expand Your Practice. Master Advanced Techniques.
        </h2>
        
        <p className="text-lg text-primary-100 mb-8">
          Whether you need a trusted referral partner for complex cases or want to 
          add full-arch implants to your service offerings, I'm here to support your growth.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Referral Partnerships</h4>
              <p className="text-primary-100">Send me your complex surgical cases. I'll treat your patients with the same care you would—and send them back to you for restorative work.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Hands-On Courses</h4>
              <p className="text-primary-100">Learn full-arch implants, bone grafting, and advanced surgical techniques through Fusion Dental Academy's immersive programs.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Collaborative Growth</h4>
              <p className="text-primary-100">Join speaking engagements, case reviews, and a network of forward-thinking dentists committed to excellence.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-primary-900 hover:bg-neutral-100">
            Become a Referral Partner
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Explore Courses
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <img 
          src="/images/dentist-collaboration.jpg"
          alt="Dr. Antipov teaching dental course"
          className="rounded-2xl shadow-2xl"
        />
      </div>
      
    </div>
    
  </div>
</section>
```

**Copy:**
- Headline: "Expand Your Practice. Master Advanced Techniques."
- Subheadline: "Whether you need a trusted referral partner for complex cases or want to add full-arch implants to your service offerings, I'm here to support your growth."

---

**VIDEO TESTIMONIALS SECTION**
```tsx
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-bold mb-4">
        Real Patients. Life-Changing Results.
      </h2>
      <p className="text-xl text-neutral-600">
        See how Dr. Antipov has helped hundreds reclaim their confidence and quality of life.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Video Card */}
      {testimonials.map((video) => (
        <Card key={video.id} className="overflow-hidden group cursor-pointer">
          <div className="relative h-64">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Play className="w-6 h-6 text-primary-500 ml-1" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold mb-2">{video.title}</h4>
            <p className="text-sm text-neutral-600">{video.description}</p>
          </div>
        </Card>
      ))}
      
    </div>
    
    <div className="text-center mt-12">
      <Button variant="outline" size="lg">
        Watch More Stories →
      </Button>
    </div>
    
  </div>
</section>
```

**Implementation:**
- Embed 6-9 curated testimonial videos from YouTube
- Use react-player with custom controls
- Lazy load videos (load on click, not on page load)

---

**CREDENTIALS & TRUST SECTION**
```tsx
<section className="py-24 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <img 
          src="/images/dr-antipov-profile-professional.jpg"
          alt="Dr. Alexander Antipov"
          className="rounded-2xl shadow-xl"
        />
      </div>
      
      <div>
        <div className="inline-block bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
          Board Certified Specialist
        </div>
        
        <h2 className="text-4xl font-serif font-bold mb-6">
          Why Northern California Dentists Trust Dr. Antipov
        </h2>
        
        <p className="text-lg text-neutral-600 mb-6">
          "I take pride in the fact that my dentist friends throughout California send me 
          their most challenging cases. Every patient is special to me because everybody 
          deserves a beautiful smile."
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Elite Training</h4>
              <p className="text-neutral-600">D.D.S. from Loma Linda University; 4-year surgical residency at Montefiore Medical Center / Albert Einstein College of Medicine</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Award className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Board Certified</h4>
              <p className="text-neutral-600">American Board of Oral and Maxillofacial Surgery (ABOMS)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Founder, Fusion Dental Academy</h4>
              <p className="text-neutral-600">Training the next generation of implant surgeons through hands-on education</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Patient-Centered Care</h4>
              <p className="text-neutral-600">15+ years providing compassionate, personalized treatment to Northern California families</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button size="lg" className="bg-primary-500">
            Learn More About Dr. Antipov →
          </Button>
        </div>
      </div>
      
    </div>
    
  </div>
</section>
```

---

**FINAL CTA SECTION**
```tsx
<section className="py-24 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
      Ready to Transform Your Smile or Practice?
    </h2>
    
    <p className="text-xl text-primary-100 mb-12">
      Whether you're a patient seeking expert care or a dentist looking to expand your skills, 
      let's start the conversation today.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
        Book Patient Consultation
      </Button>
      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
        Contact for Partnerships
      </Button>
    </div>
    
    <div className="mt-12 flex items-center justify-center gap-8 text-primary-100">
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <span>(916) 783-2110</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        <span>Roseville, CA</span>
      </div>
    </div>
    
  </div>
</section>
```

---

### 6.2 ABOUT PAGE

**URL:** `/about`

**SEO Specifications:**
```html
<title>About Dr. Alexander Antipov | Board-Certified Oral Surgeon | Northern California</title>
<meta name="description" content="Meet Dr. Alexander Antipov: Board-certified oral surgeon, Fusion Dental Academy founder, and Northern California's trusted specialist for complex oral surgery cases. Trained at Albert Einstein College of Medicine.">
```

**H1:** "Meet Dr. Alexander Antipov"

**Page Structure:**

**HERO SECTION**
```tsx
<section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-5xl font-serif font-bold mb-6">
      Meet Dr. Alexander Antipov
    </h1>
    <p className="text-2xl text-neutral-600">
      Board-Certified Oral Surgeon | Educator | Innovator
    </p>
  </div>
</section>
```

**BIOGRAPHY SECTION**
```tsx
<section className="py-16">
  <div className="max-w-5xl mx-auto px-6">
    
    <div className="grid md:grid-cols-5 gap-12">
      
      <div className="md:col-span-2">
        <img 
          src="/images/dr-antipov-about.jpg"
          alt="Dr. Alexander Antipov"
          className="rounded-2xl shadow-xl sticky top-24"
        />
      </div>
      
      <div className="md:col-span-3 space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          Dr. Alexander Antipov is devoting his career to providing world-class facial 
          reconstruction and oral surgery. In his Roseville practice, he combines the most 
          advanced surgical techniques with a deeply personal, patient-centered approach 
          that has earned him the trust of dentists and families throughout Northern California.
        </p>
        
        <p className="text-lg text-neutral-700 leading-relaxed">
          "I take pride in the fact that my dentist friends throughout California send me 
          their most challenging cases," says Dr. Antipov. "Every patient is special to me 
          because everybody deserves a beautiful smile."
        </p>
        
        <p className="text-lg text-neutral-700 leading-relaxed">
          Beyond his clinical work, Dr. Antipov is the founder of Fusion Dental Academy, 
          where he shares his expertise with dentists looking to expand their surgical 
          capabilities. His commitment to education reflects his belief that advancing 
          the field benefits everyone—patients, practitioners, and the profession as a whole.
        </p>
        
        <blockquote className="border-l-4 border-primary-500 pl-6 italic text-xl text-neutral-600">
          "Every patient is special to me because everybody deserves a beautiful smile."
        </blockquote>
      </div>
      
    </div>
    
  </div>
</section>
```

**Copy:**
- Opening: "Dr. Alexander Antipov is devoting his career to providing world-class facial reconstruction and oral surgery. In his Roseville practice, he combines the most advanced surgical techniques with a deeply personal, patient-centered approach that has earned him the trust of dentists and families throughout Northern California."

**EDUCATION & CREDENTIALS**
```tsx
<section className="py-16 bg-neutral-50">
  <div className="max-w-5xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold mb-12 text-center">
      Education & Credentials
    </h2>
    
    <div className="space-y-8">
      
      <Card className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Doctor of Dental Surgery (D.D.S.)</h3>
            <p className="text-neutral-600 mb-1">Loma Linda University School of Dentistry</p>
            <p className="text-sm text-neutral-500">Southern California</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Award className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Fellowship in Oral and Maxillofacial Surgery</h3>
            <p className="text-neutral-600 mb-1">Columbia University Harlem Hospital Center</p>
            <p className="text-sm text-neutral-500">New York, NY</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">4-Year Surgical & Anesthesia Residency</h3>
            <p className="text-neutral-600 mb-1">Montefiore Medical Center / Albert Einstein College of Medicine</p>
            <p className="text-sm text-neutral-500">Bronx, NY</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Board Certification</h3>
            <p className="text-neutral-600 mb-1">American Board of Oral and Maxillofacial Surgery (ABOMS)</p>
            <p className="text-sm text-neutral-500">Diplomate Status</p>
          </div>
        </div>
      </Card>
      
    </div>
    
  </div>
</section>
```

**PHILOSOPHY SECTION**
```tsx
<section className="py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    <h2 className="text-3xl font-serif font-bold mb-8">
      My Approach to Care
    </h2>
    
    <p className="text-xl text-neutral-600 leading-relaxed mb-8">
      Every patient who walks into my practice has a unique story, unique challenges, 
      and unique goals. My job isn't just to perform a procedure—it's to understand 
      what's truly important to you and deliver results that enhance your life.
    </p>
    
    <p className="text-xl text-neutral-600 leading-relaxed">
      Whether it's restoring function after trauma, correcting years of jaw misalignment, 
      or giving someone the confidence to smile again, I'm honored to be part of your 
      journey to better health and wellbeing.
    </p>
    
  </div>
</section>
```

**CTA SECTION**
```tsx
<section className="py-16 bg-primary-500 text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Let's Discuss How I Can Help
    </h2>
    <p className="text-xl text-primary-100 mb-8">
      Schedule a consultation to learn more about your treatment options.
    </p>
    <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
      Book Consultation
    </Button>
  </div>
</section>
```

---

### 6.3 EXPERTISE PAGES (Service Pages)

**Template Structure for All Service Pages:**

#### 6.3.1 DENTAL IMPLANTS PAGE

**URL:** `/expertise/dental-implants`

**SEO Specifications:**
```html
<title>Dental Implants in Northern California | Dr. Antipov | Roseville, Sacramento</title>
<meta name="description" content="Restore your smile with dental implants from Dr. Alexander Antipov. Board-certified oral surgeon offering single tooth, multiple teeth, and full-arch implant solutions in Roseville, CA.">
<meta name="keywords" content="dental implants Northern California, dental implants Roseville, tooth replacement Sacramento, implant dentist, single tooth implant, full arch implants">
```

**H1:** "Dental Implants: Permanent Solutions for Missing Teeth"

**Target Keywords:**
- dental implants Roseville
- tooth replacement Northern California
- full arch dental implants
- same day dental implants Sacramento

**Page Structure:**

**HERO:**
- Headline: "Dental Implants: Permanent Solutions for Missing Teeth"
- Subheadline: "Regain your ability to eat, speak, and smile with confidence. Dr. Antipov's advanced implant techniques deliver natural-looking, long-lasting results."
- CTA: "Schedule Implant Consultation"

**WHAT ARE DENTAL IMPLANTS:**
- Explanation of implant structure (titanium post, abutment, crown)
- Benefits over dentures/bridges
- Success rates and longevity

**TYPES OF IMPLANTS WE OFFER:**
1. Single Tooth Implants
2. Multiple Teeth (Implant-Supported Bridges)
3. Full-Arch Restoration (All-on-4/All-on-X)
4. Implant-Supported Dentures

**THE DR. ANTIPOV DIFFERENCE:**
- 3D imaging and digital planning
- Same-day teeth options for full-arch
- Advanced bone grafting when needed
- Personalized treatment plans

**IDEAL CANDIDATES:**
- Who needs implants
- Health requirements
- Bone density considerations

**PROCEDURE TIMELINE:**
- Initial consultation
- Implant placement surgery
- Healing period (osseointegration)
- Final restoration

**VIDEO TESTIMONIALS:**
- Embed 3-4 patient stories specific to dental implants

**FAQ SECTION:**
- How long do implants last?
- Does it hurt?
- How much do implants cost?
- Am I too old for implants?
- Can I get implants if I have bone loss?

**CTA:** "Ready to Restore Your Smile? Book Your Consultation"

---

#### 6.3.2 CORRECTIVE JAW SURGERY PAGE

**URL:** `/expertise/corrective-jaw-surgery`

**SEO Specifications:**
```html
<title>Corrective Jaw Surgery (Orthognathic) | Dr. Antipov | Northern California</title>
<meta name="description" content="Expert orthognathic surgery for jaw misalignment, underbite, overbite, and facial asymmetry. Dr. Antipov offers precision jaw correction in Roseville, CA.">
<meta name="keywords" content="corrective jaw surgery, orthognathic surgery Northern California, jaw alignment Roseville, underbite surgery, overbite correction, TMJ treatment">
```

**H1:** "Corrective Jaw Surgery: Transform Function and Appearance"

**Target Keywords:**
- corrective jaw surgery Northern California
- orthognathic surgery Roseville
- jaw alignment specialist Sacramento

**Page Structure:**

**HERO:**
- Headline: "Corrective Jaw Surgery: Transform Function and Appearance"
- Subheadline: "Precision orthognathic surgery to correct jaw misalignment, improve breathing, eliminate pain, and restore facial harmony."
- CTA: "Schedule Jaw Surgery Consultation"

**WHAT IS CORRECTIVE JAW SURGERY:**
- Definition and purpose
- Conditions treated (underbite, overbite, open bite, facial asymmetry)
- Functional and aesthetic benefits

**CONDITIONS WE TREAT:**
1. Severe Underbite (Prognathism)
2. Severe Overbite (Retrognathia)
3. Open Bite
4. Facial Asymmetry
5. TMJ Disorders
6. Sleep Apnea (structural causes)
7. Difficulty Chewing or Speaking

**THE SURGICAL PROCESS:**
- Pre-surgical orthodontics (coordination with orthodontist)
- 3D surgical planning and computer simulation
- Surgery day (what to expect)
- Recovery and healing
- Post-surgical orthodontics
- Final results timeline (6-12 months)

**BEFORE & AFTER GALLERY:**
- 3D simulation comparisons
- Actual patient results (with consent)

**DR. ANTIPOV'S EXPERTISE:**
- 15+ years performing orthognathic surgery
- Advanced training at Albert Einstein
- Precise, computer-guided techniques
- Compassionate care throughout journey

**PATIENT TESTIMONIALS:**
- Video stories from jaw surgery patients
- Focus on life-changing functional improvements

**FAQ:**
- How long is recovery?
- Will I need braces?
- Is it painful?
- Will my face look different?
- Insurance coverage?

**CTA:** "Take the First Step Toward a Better You"

---

#### 6.3.3 FULL-ARCH RESTORATION PAGE

**URL:** `/expertise/full-arch-restoration`

**SEO Specifications:**
```html
<title>Full-Arch Dental Implants | All-on-4 | Dr. Antipov | Northern California</title>
<meta name="description" content="Replace a full arch of teeth with permanent dental implants. Dr. Antipov offers All-on-4, All-on-6, and custom full-mouth restoration solutions in Roseville, CA.">
<meta name="keywords" content="full arch implants, all on 4 dental implants, full mouth dental implants Northern California, teeth in a day Roseville">
```

**H1:** "Full-Arch Restoration: A Complete Smile in One Procedure"

**Target Keywords:**
- full arch implants Northern California
- all on 4 Roseville
- full mouth dental implants Sacramento
- teeth in a day

**Page Structure:**

**HERO:**
- Headline: "Full-Arch Restoration: A Complete Smile in One Procedure"
- Subheadline: "Replace an entire arch of missing or failing teeth with permanent, natural-looking implants. Eat, smile, and live confidently again."
- CTA: "Explore Full-Arch Options"

**WHAT IS FULL-ARCH RESTORATION:**
- Definition: Replace all upper/lower teeth with implant-supported prosthesis
- All-on-4, All-on-6, All-on-X variations
- Benefits vs traditional dentures

**WHO NEEDS FULL-ARCH IMPLANTS:**
- Multiple missing teeth
- Failing/broken teeth beyond repair
- Severe gum disease
- Long-term denture wearers seeking permanent solution

**THE PROCESS:**
1. Comprehensive Evaluation (CT scan, health assessment)
2. Treatment Planning (digital design)
3. Surgical Day (extractions if needed, implant placement)
4. Immediate Temporary Prosthesis (teeth same day)
5. Healing Period (3-6 months)
6. Final Permanent Prosthesis

**ADVANTAGES OF FULL-ARCH IMPLANTS:**
- Permanent, stable solution
- Natural appearance and function
- Preserves bone
- No messy adhesives
- Eat your favorite foods again
- Improved speech and confidence

**COST & FINANCING:**
- Investment in quality of life
- Financing options available
- Insurance may cover portion

**VIDEO TESTIMONIALS:**
- Full-arch patient transformations

**CTA:** "Ready for Your Smile Transformation?"

---

#### 6.3.4 WISDOM TEETH PAGE

**URL:** `/expertise/wisdom-teeth`

**SEO Specifications:**
```html
<title>Wisdom Teeth Removal | Dr. Antipov | Roseville, Sacramento, Northern California</title>
<meta name="description" content="Expert wisdom teeth extraction with sedation options. Board-certified oral surgeon Dr. Antipov provides safe, comfortable wisdom tooth removal in Roseville, CA.">
<meta name="keywords" content="wisdom teeth removal Roseville, wisdom tooth extraction Sacramento, oral surgeon Northern California, impacted wisdom teeth">
```

**H1:** "Wisdom Teeth Removal: Expert, Comfortable Care"

**Page Structure:**

**HERO:**
- Headline: "Wisdom Teeth Removal: Expert, Comfortable Care"
- Subheadline: "Board-certified expertise and advanced sedation options make wisdom tooth extraction safe, pain-free, and stress-free."
- CTA: "Schedule Wisdom Teeth Consultation"

**WHY REMOVE WISDOM TEETH:**
- Impaction and crowding
- Infection risk
- Damage to adjacent teeth
- Cysts and tumors

**SIGNS YOU NEED REMOVAL:**
- Pain and swelling
- Difficulty opening mouth
- Bad breath
- Gum inflammation

**THE REMOVAL PROCESS:**
- Consultation and X-rays
- Sedation options (local, IV sedation, general anesthesia)
- Surgical extraction
- Recovery timeline

**RECOVERY TIPS:**
- Post-op instructions
- Managing swelling and discomfort
- Diet recommendations
- When to call the doctor

**WHY CHOOSE DR. ANTIPOV:**
- Thousands of successful extractions
- Advanced surgical training
- Certified in anesthesia administration
- Calm, reassuring environment

**FAQ:**
- Does it hurt?
- How long is recovery?
- Can I drive after?
- What can I eat?

**CTA:** "Schedule Your Wisdom Teeth Consultation"

---

#### 6.3.5 FACIAL RECONSTRUCTION PAGE

**URL:** `/expertise/facial-reconstruction`

**SEO Specifications:**
```html
<title>Facial Reconstruction Surgery | Dr. Antipov | Northern California</title>
<meta name="description" content="Expert facial reconstruction for trauma, congenital defects, and facial asymmetry. Dr. Antipov provides compassionate, precision surgical care in Roseville, CA.">
<meta name="keywords" content="facial reconstruction surgery, facial trauma repair, jaw reconstruction, facial asymmetry correction">
```

**H1:** "Facial Reconstruction: Restoring Form and Function"

**Page Structure:**

**HERO:**
- Headline: "Facial Reconstruction: Restoring Form and Function"
- Subheadline: "Compassionate, expert care for facial trauma, congenital conditions, and complex reconstructive needs."
- CTA: "Schedule Consultation"

**CONDITIONS WE TREAT:**
- Facial trauma (accidents, injuries)
- Congenital defects
- TMJ disorders
- Facial asymmetry
- Post-cancer reconstruction
- Revision surgeries

**OUR APPROACH:**
- Comprehensive evaluation
- Multidisciplinary coordination
- Advanced imaging and planning
- Precision surgical techniques
- Focus on aesthetics AND function

**PATIENT-CENTERED CARE:**
- Understanding your unique story
- Personalized treatment plans
- Ongoing support throughout recovery

**CTA:** "Let's Discuss Your Reconstructive Needs"

---

### 6.4 FOR DENTISTS - REFERRAL PARTNERS PAGE

**URL:** `/for-dentists/referral-partners`

**SEO Specifications:**
```html
<title>Referral Partners | Dr. Antipov | Oral Surgery Specialist for Dentists</title>
<meta name="description" content="Partner with Dr. Antipov for your complex oral surgery cases. Trusted by dentists across Northern California for dental implants, jaw surgery, and facial reconstruction.">
<meta name="keywords" content="oral surgery referrals, dental implant specialist, oral surgeon for dentists, surgical partner Northern California">
```

**H1:** "Your Trusted Surgical Partner"

**Target Keywords:**
- oral surgery referral partner
- dental implant specialist for dentists
- oral surgeon Sacramento

**Page Structure:**

**HERO SECTION:**
```tsx
<section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
  <div className="max-w-5xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      <div>
        <div className="inline-block bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
          For Dental Professionals
        </div>
        
        <h1 className="text-5xl font-serif font-bold mb-6">
          Your Trusted Surgical Partner
        </h1>
        
        <p className="text-xl text-neutral-600 mb-8">
          Send me your complex cases with confidence. I'll treat your patients with 
          expert care and send them back to you for restorative work.
        </p>
        
        <Button size="lg" className="bg-primary-500">
          Refer a Patient →
        </Button>
      </div>
      
      <div>
        <img 
          src="/images/dentist-collaboration.jpg"
          alt="Dr. Antipov with referring dentist"
          className="rounded-2xl shadow-xl"
        />
      </div>
      
    </div>
  </div>
</section>
```

**Copy:**
- Headline: "Your Trusted Surgical Partner"
- Subheadline: "Send me your complex cases with confidence. I'll treat your patients with expert care and send them back to you for restorative work."

**WHY DENTISTS REFER TO DR. ANTIPOV:**
```tsx
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      Why Dentists Choose to Partner with Me
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <Card className="p-8">
        <CheckCircle className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Board-Certified Expertise</h3>
        <p className="text-neutral-600">
          ABOMS certification and advanced training at Albert Einstein ensures 
          your patients receive the highest standard of care.
        </p>
      </Card>
      
      <Card className="p-8">
        <Users className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Collaborative Approach</h3>
        <p className="text-neutral-600">
          I work closely with you to develop treatment plans and keep you 
          informed every step of the way.
        </p>
      </Card>
      
      <Card className="p-8">
        <RefreshCcw className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Patients Return to You</h3>
        <p className="text-neutral-600">
          After surgical care, I send patients back for restorative work, 
          preserving your doctor-patient relationship.
        </p>
      </Card>
      
      <Card className="p-8">
        <Clock className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Timely Communication</h3>
        <p className="text-neutral-600">
          Prompt referral responses, detailed post-op reports, and open 
          lines of communication.
        </p>
      </Card>
      
      <Card className="p-8">
        <Award className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
        <p className="text-neutral-600">
          3D imaging, digital planning, and state-of-the-art surgical 
          equipment for optimal outcomes.
        </p>
      </Card>
      
      <Card className="p-8">
        <Heart className="w-12 h-12 text-primary-500 mb-4" />
        <h3 className="text-xl font-bold mb-3">Patient-Centered Care</h3>
        <p className="text-neutral-600">
          Compassionate, personalized approach that reflects well on your 
          practice and builds patient trust.
        </p>
      </Card>
      
    </div>
    
  </div>
</section>
```

**SERVICES I PROVIDE:**
- Dental Implants (single, multiple, full-arch)
- Bone Grafting & Sinus Lifts
- Corrective Jaw Surgery
- Wisdom Teeth Extraction
- Facial Trauma Repair
- TMJ Treatment
- Pre-Prosthetic Surgery

**HOW REFERRALS WORK:**
```tsx
<section className="py-16 bg-neutral-50">
  <div className="max-w-5xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      Simple Referral Process
    </h2>
    
    <div className="grid md:grid-cols-4 gap-8">
      
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          1
        </div>
        <h4 className="font-bold mb-2">Submit Referral</h4>
        <p className="text-sm text-neutral-600">
          Use our secure online form or call our office directly
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          2
        </div>
        <h4 className="font-bold mb-2">We Contact Patient</h4>
        <p className="text-sm text-neutral-600">
          We'll reach out to schedule their consultation promptly
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          3
        </div>
        <h4 className="font-bold mb-2">Treatment & Updates</h4>
        <p className="text-sm text-neutral-600">
          We provide care and keep you informed with detailed reports
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          4
        </div>
        <h4 className="font-bold mb-2">Patient Returns</h4>
        <p className="text-sm text-neutral-600">
          We send them back for restorative work and ongoing care
        </p>
      </div>
      
    </div>
    
    <div className="text-center mt-12">
      <Button size="lg" className="bg-primary-500">
        Submit a Referral
      </Button>
    </div>
    
  </div>
</section>
```

**REFERRAL FORM:**
- Patient name
- Patient contact info
- Referring dentist name & practice
- Reason for referral
- X-rays/records upload
- Urgency level
- Special notes

**TESTIMONIALS FROM REFERRING DENTISTS:**
```tsx
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      What Colleagues Say
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      
      <Card className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <img 
            src="/images/dentist-testimonial-1.jpg"
            alt="Dr. Smith"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold">Dr. Jennifer Smith, DDS</h4>
            <p className="text-sm text-neutral-600">Family Dentistry, Sacramento</p>
          </div>
        </div>
        <p className="text-neutral-700 italic">
          "Dr. Antipov is my go-to for any complex implant cases. He takes the time 
          to explain treatment options to patients and always keeps me in the loop. 
          My patients rave about his compassionate care."
        </p>
      </Card>
      
      {/* More testimonials... */}
      
    </div>
    
  </div>
</section>
```

**CTA:**
- Button: "Refer a Patient Today"
- Phone: (916) 783-2110
- Email: referrals@drantipov.com

---

### 6.5 FOR DENTISTS - EDUCATION / COURSES PAGE

**URL:** `/for-dentists/education/courses`

**SEO Specifications:**
```html
<title>Dental Implant Courses | Fusion Dental Academy | Dr. Antipov</title>
<meta name="description" content="Master full-arch implants, bone grafting, and advanced surgical techniques with Dr. Antipov's hands-on courses through Fusion Dental Academy.">
<meta name="keywords" content="dental implant courses, full arch training, oral surgery education, continuing education dentists, hands-on implant course">
```

**H1:** "Master Advanced Implant Techniques"

**Target Keywords:**
- dental implant training courses
- full arch implant education
- continuing education oral surgery
- hands-on dental courses

**Page Structure:**

**HERO SECTION:**
```tsx
<section className="relative py-32 bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
  
  {/* Glassmorphism overlay */}
  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
  
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      <div>
        <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-sm font-semibold mb-4">
          Fusion Dental Academy
        </div>
        
        <h1 className="text-5xl font-serif font-bold mb-6">
          Master Advanced Implant Techniques
        </h1>
        
        <p className="text-xl text-primary-100 mb-8">
          Expand your practice capabilities with hands-on training from Dr. Antipov. 
          Learn full-arch restoration, bone grafting, and advanced surgical protocols.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
            View Course Catalog
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Contact for Custom Training
          </Button>
        </div>
      </div>
      
      <div>
        <img 
          src="/images/fusion-academy-training.jpg"
          alt="Hands-on dental implant training"
          className="rounded-2xl shadow-2xl"
        />
      </div>
      
    </div>
  </div>
</section>
```

**Copy:**
- Headline: "Master Advanced Implant Techniques"
- Subheadline: "Expand your practice capabilities with hands-on training from Dr. Antipov. Learn full-arch restoration, bone grafting, and advanced surgical protocols."

**WHY FUSION DENTAL ACADEMY:**
```tsx
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-12">
      <h2 className="text-4xl font-serif font-bold mb-4">
        Elevate Your Surgical Skills
      </h2>
      <p className="text-xl text-neutral-600">
        Fusion Dental Academy combines cutting-edge techniques with practical, 
        hands-on learning to help you add high-value services to your practice.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Hand className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">Hands-On Training</h3>
        <p className="text-neutral-600">
          Practice on models and gain real-world experience under expert guidance
        </p>
      </Card>
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">Small Class Sizes</h3>
        <p className="text-neutral-600">
          Personalized attention ensures you master every technique
        </p>
      </Card>
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">CE Credits</h3>
        <p className="text-neutral-600">
          All courses provide continuing education credits
        </p>
      </Card>
      
    </div>
    
  </div>
</section>
```

**COURSE CATALOG:**
```tsx
<section className="py-16 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      Available Courses
    </h2>
    
    <div className="space-y-8">
      
      {/* Course Card 1 */}
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">
          
          <div className="relative h-64 md:h-auto">
            <img 
              src="/images/course-all-on-x.jpg"
              alt="All-on-X course"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:col-span-2 p-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary-100 text-primary-700">
                3-Day Course
              </Badge>
              <Badge className="bg-accent-100 text-accent-700">
                24 CE Credits
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              All-on-X Full-Arch Restoration Mastery
            </h3>
            
            <p className="text-neutral-600 mb-6">
              Master the complete workflow for full-arch implant cases: from treatment 
              planning and digital design to surgical placement and prosthetic delivery. 
              Includes live surgery observation and hands-on lab work.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Treatment planning & case selection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>3D surgical guides and digital workflow</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Surgical techniques and implant placement</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Immediate load protocols</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-primary-500">
                View Course Details →
              </Button>
              <a href="#" className="text-primary-600 font-semibold hover:underline">
                Enroll on Udemy
              </a>
            </div>
          </div>
          
        </div>
      </Card>
      
      {/* Course Card 2 */}
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">
          
          <div className="relative h-64 md:h-auto">
            <img 
              src="/images/course-bone-grafting.jpg"
              alt="Bone grafting course"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:col-span-2 p-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary-100 text-primary-700">
                2-Day Course
              </Badge>
              <Badge className="bg-accent-100 text-accent-700">
                16 CE Credits
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Advanced Bone Grafting & Ridge Augmentation
            </h3>
            
            <p className="text-neutral-600 mb-6">
              Learn to handle challenging cases with insufficient bone volume. Master 
              ridge split techniques, sinus lifts, and block grafting procedures.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Bone biology and graft material selection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Ridge split and expansion techniques</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Sinus lift procedures (lateral and crestal approach)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Block grafting and guided bone regeneration</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-primary-500">
                View Course Details →
              </Button>
              <a href="#" className="text-primary-600 font-semibold hover:underline">
                Enroll on Udemy
              </a>
            </div>
          </div>
          
        </div>
      </Card>
      
      {/* Course Card 3 */}
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">
          
          <div className="relative h-64 md:h-auto">
            <img 
              src="/images/course-wisdom-teeth.jpg"
              alt="Wisdom teeth course"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:col-span-2 p-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary-100 text-primary-700">
                1-Day Course
              </Badge>
              <Badge className="bg-accent-100 text-accent-700">
                8 CE Credits
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Complex Wisdom Teeth Extractions
            </h3>
            
            <p className="text-neutral-600 mb-6">
              Build confidence in handling impacted wisdom teeth and complex extraction 
              cases. Learn surgical techniques, complication management, and patient care protocols.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Radiographic assessment and case planning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Surgical access and bone removal</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Managing nerve proximity and complications</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary-500" />
                <span>Post-operative care and pain management</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button className="bg-primary-500">
                View Course Details →
              </Button>
              <a href="#" className="text-primary-600 font-semibold hover:underline">
                Enroll on Udemy
              </a>
            </div>
          </div>
          
        </div>
      </Card>
      
    </div>
    
  </div>
</section>
```

**IMPLEMENTATION NOTE:**
- Course detail pages act as landing pages with descriptions, instructor bio, curriculum overview
- "Enroll" CTAs redirect to Udemy (or wherever courses are hosted)
- Embed promotional/preview videos from YouTube
- No LMS functionality needed on site

**CUSTOM TRAINING OPTION:**
```tsx
<section className="py-16 bg-primary-900 text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    <h2 className="text-3xl font-bold mb-6">
      Need Custom Training for Your Team?
    </h2>
    
    <p className="text-xl text-primary-100 mb-8">
      I can bring hands-on education directly to your practice or DSO. 
      Contact me to discuss custom curriculum and scheduling.
    </p>
    
    <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
      Inquire About Custom Training
    </Button>
    
  </div>
</section>
```

**TESTIMONIALS FROM COURSE ATTENDEES:**
- Video testimonials from dentists who took courses
- Before/after of their practice growth

**CTA:**
- "Ready to Elevate Your Skills? Explore Courses"

---

### 6.6 FOR PATIENTS - CONSULTATION PAGE

**URL:** `/for-patients/consultation`

**SEO Specifications:**
```html
<title>Schedule Consultation | Dr. Antipov | Oral Surgeon Northern California</title>
<meta name="description" content="Book your consultation with Dr. Alexander Antipov in Roseville, CA. Expert oral surgery care for dental implants, jaw surgery, and more.">
```

**H1:** "Schedule Your Consultation"

**Page Structure:**

**HERO:**
```tsx
<section className="py-24 bg-gradient-to-b from-primary-50 to-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-5xl font-serif font-bold mb-6">
      Take the First Step Toward Your New Smile
    </h1>
    <p className="text-xl text-neutral-600 mb-8">
      Schedule a consultation with Dr. Antipov to discuss your goals and explore 
      treatment options tailored to your unique needs.
    </p>
  </div>
</section>
```

**WHAT TO EXPECT:**
```tsx
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      What to Expect at Your Consultation
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardList className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">Comprehensive Evaluation</h3>
        <p className="text-neutral-600">
          We'll review your medical history, take necessary X-rays or scans, and 
          conduct a thorough examination.
        </p>
      </Card>
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">Personalized Discussion</h3>
        <p className="text-neutral-600">
          Dr. Antipov will listen to your concerns, answer questions, and explain 
          all available treatment options.
        </p>
      </Card>
      
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold mb-3">Treatment Plan</h3>
        <p className="text-neutral-600">
          Receive a detailed treatment plan with timelines, costs, and next steps 
          to help you make an informed decision.
        </p>
      </Card>
      
    </div>
    
  </div>
</section>
```

**BOOKING OPTIONS:**
```tsx
<section className="py-16 bg-neutral-50">
  <div className="max-w-5xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-12">
      Ready to Schedule? Choose Your Preferred Method
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      <Card className="p-8 text-center hover:shadow-xl transition">
        <Phone className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-3">Call Us</h3>
        <p className="text-neutral-600 mb-4">
          Speak directly with our friendly staff
        </p>
        <a href="tel:+19167832110" className="text-2xl font-bold text-primary-600 hover:underline">
          (916) 783-2110
        </a>
      </Card>
      
      <Card className="p-8 text-center hover:shadow-xl transition">
        <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-3">Online Booking</h3>
        <p className="text-neutral-600 mb-4">
          Book via Fusion Dental Implants
        </p>
        <Button className="bg-primary-500 w-full">
          Book on fusiondentalimplants.com →
        </Button>
      </Card>
      
      <Card className="p-8 text-center hover:shadow-xl transition">
        <Mail className="w-12 h-12 text-primary-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-3">Request Callback</h3>
        <p className="text-neutral-600 mb-4">
          Fill out the form below
        </p>
        <Button variant="outline" className="w-full">
          Request Callback
        </Button>
      </Card>
      
    </div>
    
  </div>
</section>
```

**CONSULTATION REQUEST FORM:**
```tsx
<section className="py-16 bg-white">
  <div className="max-w-3xl mx-auto px-6">
    
    <h2 className="text-3xl font-serif font-bold text-center mb-8">
      Request a Consultation
    </h2>
    
    <Card className="p-8">
      <form className="space-y-6">
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">First Name *</label>
            <Input placeholder="John" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Last Name *</label>
            <Input placeholder="Doe" required />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Phone *</label>
            <Input type="tel" placeholder="(916) 555-1234" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email *</label>
            <Input type="email" placeholder="john@example.com" required />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">I'm Interested In</label>
          <Select>
            <option>Dental Implants</option>
            <option>Corrective Jaw Surgery</option>
            <option>Wisdom Teeth Removal</option>
            <option>Facial Reconstruction</option>
            <option>Other / Not Sure</option>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Tell Us More (Optional)</label>
          <Textarea 
            placeholder="Describe your concerns or questions..."
            rows={4}
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Preferred Contact Method</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="contact" value="phone" />
              <span>Phone</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="contact" value="email" />
              <span>Email</span>
            </label>
          </div>
        </div>
        
        <Button type="submit" size="lg" className="w-full bg-primary-500">
          Submit Consultation Request
        </Button>
        
        <p className="text-sm text-neutral-500 text-center">
          We'll contact you within 1 business day to schedule your appointment.
        </p>
        
      </form>
    </Card>
    
  </div>
</section>
```

**OFFICE INFORMATION:**
```tsx
<section className="py-16 bg-neutral-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="grid md:grid-cols-2 gap-12">
      
      <div>
        <h2 className="text-3xl font-serif font-bold mb-6">
          Visit Our Office
        </h2>
        
        <div className="space-y-6">
          
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-neutral-600">
                Galleria Oral & Maxillofacial Surgery<br/>
                911 Reserve Drive, Suite 150<br/>
                Roseville, CA 95678
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-neutral-600">(916) 783-2110</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Hours</h4>
              <p className="text-neutral-600">
                Monday - Friday: 8:00 AM - 5:00 PM<br/>
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Car className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Parking</h4>
              <p className="text-neutral-600">
                Ample free parking available on-site
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div>
        <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
          {/* Google Maps embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            className="rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
      
    </div>
    
  </div>
</section>
```

---

### 6.7 TESTIMONIALS PAGE

**URL:** `/for-patients/testimonials`

**SEO Specifications:**
```html
<title>Patient Testimonials | Dr. Antipov Reviews | Roseville Oral Surgeon</title>
<meta name="description" content="Read and watch real patient testimonials from Dr. Antipov's oral surgery practice. See life-changing results from dental implants, jaw surgery, and more.">
```

**H1:** "Real Patients, Real Results"

**Page Structure:**

**HERO:**
- Headline: "Real Patients, Real Results"
- Subheadline: "Hear from the hundreds of patients whose lives have been transformed by expert oral surgery care."

**VIDEO TESTIMONIALS GRID:**
- 12-20 curated videos from YouTube
- Filter by procedure type
- Lazy load videos

**WRITTEN TESTIMONIALS:**
- Pull reviews from Google, Healthgrades, etc.
- Star ratings
- Patient names (first name + last initial)
- Procedure performed

**BEFORE & AFTER GALLERY:**
- Patient consent required
- Filter by procedure
- Professional photography

**CTA:** "Ready to Write Your Success Story? Schedule Consultation"

---

### 6.8 MEDIA / VIDEOS PAGE

**URL:** `/media/videos`

**SEO Specifications:**
```html
<title>Educational Videos | Dr. Antipov | Oral Surgery Insights</title>
<meta name="description" content="Watch Dr. Antipov's educational videos on dental implants, jaw surgery, and oral health. Expert insights and patient education.">
```

**H1:** "Educational Videos & Patient Stories"

**Page Structure:**

**VIDEO CATEGORIES:**
1. Patient Testimonials
2. Educational Content (procedures explained)
3. Dr. Antipov Speaking/Interviews

**VIDEO GRID:**
- YouTube embed on click (modal or inline)
- Thumbnails with titles
- Duration labels
- Category tags

**CTA:** "Have Questions? Schedule a Consultation"

---

### 6.9 MEDIA / SPEAKING PAGE

**URL:** `/media/speaking`

**SEO Specifications:**
```html
<title>Speaking Engagements | Dr. Antipov | Dental Education & Lectures</title>
<meta name="description" content="Dr. Alexander Antipov speaks at dental conferences and events. Learn about his lectures, workshops, and educational presentations.">
```

**H1:** "Speaking & Educational Engagements"

**Page Structure:**

**INTRO:**
- Dr. Antipov's commitment to education
- Topics he covers
- Past speaking engagements

**UPCOMING EVENTS:**
- Conference name
- Date & location
- Topic
- Registration link (if applicable)

**PAST PRESENTATIONS:**
- Event name
- Date
- Topic summary
- Photos or videos (if available)

**BOOK DR. ANTIPOV:**
- Form to request speaking engagement
- Contact information

---

### 6.10 CONTACT PAGE

**URL:** `/contact`

**SEO Specifications:**
```html
<title>Contact Dr. Antipov | Oral Surgeon Roseville, CA</title>
<meta name="description" content="Get in touch with Dr. Alexander Antipov's office in Roseville, CA. Call (916) 783-2110 or fill out our contact form.">
```

**H1:** "Get in Touch"

**Page Structure:**

**CONTACT OPTIONS:**
- Phone: (916) 783-2110
- Email: info@drantipov.com
- Office address
- Hours

**CONTACT FORM:**
- Name
- Email
- Phone
- Subject (dropdown: New Patient Inquiry, Referral Question, Media Inquiry, Other)
- Message
- Submit button

**MAP & DIRECTIONS:**
- Google Maps embed
- Driving directions from major areas

**EMERGENCY NOTE:**
- "For dental emergencies, please call our office immediately."

---

## 7. LEGAL PAGES

### 7.1 PRIVACY POLICY

**URL:** `/legal/privacy-policy`

**Content:**
```markdown
# Privacy Policy

**Last Updated: [Date]**

## Overview
Dr. Alexander Antipov ("we," "us," or "our") respects your privacy and is committed to protecting your personal information.

## Information We Collect
- Contact information (name, email, phone)
- Medical history and dental records
- Insurance information
- Website usage data (via Google Analytics)

## How We Use Your Information
- To provide medical care and treatment
- To schedule appointments and send reminders
- To process insurance claims
- To improve our website and services
- To communicate about your care

## Information Sharing
We do not sell your personal information. We may share information with:
- Healthcare providers involved in your care
- Insurance companies for billing
- Legal authorities when required by law

## Your Rights
You have the right to:
- Access your medical records
- Request corrections to your information
- Opt out of marketing communications
- Request deletion of your data (subject to legal requirements)

## Security
We implement appropriate security measures to protect your information.

## Contact Us
Questions about this policy? Contact us at privacy@drantipov.com or (916) 783-2110.
```

---

### 7.2 TERMS OF SERVICE

**URL:** `/legal/terms-of-service`

**Content:**
```markdown
# Terms of Service

**Last Updated: [Date]**

## Acceptance of Terms
By accessing this website, you agree to these Terms of Service.

## Use of Website
This website provides information about Dr. Antipov's oral surgery services. It is not a substitute for professional medical advice.

## Intellectual Property
All content on this website is owned by Dr. Alexander Antipov or licensed for use. Unauthorized use is prohibited.

## Disclaimer
Information on this website is for general informational purposes only. Always consult with a qualified healthcare provider.

## Limitation of Liability
We are not liable for any damages arising from use of this website.

## Changes to Terms
We may update these terms at any time. Continued use constitutes acceptance.

## Contact
Questions? Contact us at info@drantipov.com.
```

---

### 7.3 MEDICAL DISCLAIMER

**URL:** `/legal/medical-disclaimer`

**Content:**
```markdown
# Medical Disclaimer

**Important Notice**

## No Doctor-Patient Relationship
The information on this website does not create a doctor-patient relationship. A consultation is required to establish care.

## Educational Purpose Only
Content is for educational purposes and not a substitute for professional medical advice, diagnosis, or treatment.

## Always Seek Professional Advice
Always consult a qualified healthcare provider for medical concerns. Never disregard professional advice based on website content.

## Emergency Situations
In case of emergency, call 911 or seek immediate medical attention.

## Individual Results Vary
Treatment outcomes vary based on individual circumstances. Testimonials represent individual experiences and are not guarantees.

## Contact for Consultation
To discuss your specific needs, schedule a consultation: (916) 783-2110
```

---

### 7.4 HIPAA NOTICE

**URL:** `/legal/hipaa-notice`

**Content:**
```markdown
# Notice of Privacy Practices (HIPAA)

**Effective Date: [Date]**

## Your Health Information Rights
Under the Health Insurance Portability and Accountability Act (HIPAA), you have rights regarding your protected health information (PHI).

## How We Use Your Information
We may use and disclose your PHI for:
- Treatment
- Payment
- Healthcare operations
- As required or permitted by law

## Your Rights
You have the right to:
- Inspect and copy your health records
- Request corrections to your records
- Request restrictions on use of your information
- Request confidential communications
- Receive a copy of this notice

## Our Responsibilities
We are required to:
- Maintain privacy of your health information
- Provide this notice
- Follow the terms of this notice

## For More Information
Contact our Privacy Officer at (916) 783-2110 or privacy@drantipov.com

## Full HIPAA Notice
A complete Notice of Privacy Practices is available at our office upon request.
```

---

## 8. SEO STRATEGY

### 8.1 Keyword Strategy

**Primary Keywords (Homepage):**
- oral surgeon Northern California (High)
- dental implants Roseville (High)
- corrective jaw surgery Sacramento (Medium)
- board certified oral surgeon (Medium)

**Secondary Keywords:**
- full arch implants Northern California
- orthognathic surgery specialist
- wisdom teeth removal Roseville
- facial reconstruction surgeon
- Dr. Antipov oral surgeon

**Local SEO Keywords:**
- oral surgeon Roseville CA
- dental implants Sacramento
- jaw surgery Bay Area
- oral maxillofacial surgeon Placer County

**Long-Tail Keywords:**
- best oral surgeon for dental implants Northern California
- board certified oral surgeon near me
- corrective jaw surgery specialist Sacramento
- full mouth dental implants Roseville
- oral surgery referral partner Northern California

**B2B Keywords:**
- dental implant training courses
- full arch implant education
- oral surgery continuing education
- dental referral partner

### 8.2 On-Page SEO Checklist

**Every Page Must Have:**
1. Unique, keyword-optimized title tag (55-60 characters)
2. Compelling meta description (150-160 characters)
3. Single H1 tag with primary keyword
4. Proper heading hierarchy (H2, H3, H4)
5. Alt text for all images with descriptive keywords
6. Internal links to related pages
7. External links to authoritative sources (medical journals, ADA, etc.)
8. Schema markup (Person, MedicalBusiness, Review)
9. Canonical URL
10. Open Graph tags for social sharing

**Image Optimization:**
- Next.js Image component for automatic optimization
- WebP format with PNG/JPEG fallback
- Descriptive filenames (e.g., dr-antipov-dental-implant-surgery.jpg)
- Alt text with keywords but natural language
- Max file size: 200KB after compression

**Page Speed:**
- Lazy loading for images below fold
- Defer non-critical JavaScript
- Minimize CSS
- Use CDN for static assets
- Server-side rendering for critical content

### 8.3 Local SEO

**Google Business Profile Optimization:**
- Claim and verify listing
- Complete all fields
- Add high-quality photos (office, staff, procedures)
- Post weekly updates
- Respond to all reviews (positive and negative)
- Use Google Posts for announcements

**Local Citations:**
- Ensure NAP (Name, Address, Phone) consistency across:
  - Healthgrades
  - Yelp
  - Zocdoc
  - Vitals
  - RateMDs
  - Yellow Pages
  - Bing Places
  - Apple Maps

**Local Content:**
- Create location pages for each major city served
- Blog posts about local events or community involvement
- Embed Google Map on Contact page

### 8.4 Schema Markup

**Homepage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Alexander Antipov",
  "image": "https://drantipov.com/images/dr-antipov-profile.jpg",
  "url": "https://drantipov.com",
  "telephone": "+1-916-783-2110",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "911 Reserve Drive, Suite 150",
    "addressLocality": "Roseville",
    "addressRegion": "CA",
    "postalCode": "95678",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.7685",
    "longitude": "-121.2730"
  },
  "priceRange": "$$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "medicalSpecialty": "Oral and Maxillofacial Surgery",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Loma Linda University School of Dentistry"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Montefiore Medical Center / Albert Einstein College of Medicine"
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "American Board of Oral and Maxillofacial Surgery"
  }
}
```

**Service Pages Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Dental Implant Surgery",
  "description": "Permanent tooth replacement using titanium implants",
  "procedureType": "Surgical",
  "followup": "Regular follow-up appointments to monitor healing"
}
```

**Review Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Physician",
    "name": "Dr. Alexander Antipov"
  },
  "author": {
    "@type": "Person",
    "name": "John D."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "Dr. Antipov changed my life with dental implants..."
}
```

### 8.5 Content Marketing Strategy

**Blog Content Plan (Existing drantipov.com):**
- Maintain existing blog URLs
- Add 2-4 new posts per month
- Topics:
  - Patient education (procedure explanations, recovery tips)
  - Before/after case studies (with consent)
  - Oral health tips
  - Addressing common patient concerns
  - News about practice/Dr. Antipov

**Content Formats:**
- How-to guides (e.g., "How to Prepare for Dental Implant Surgery")
- FAQs
- Comparison posts (e.g., "Dentures vs Implants: Which is Right for You?")
- Local content (e.g., "Choosing an Oral Surgeon in Northern California")

**Video Content:**
- Embed YouTube videos on relevant pages
- Create video sitemap for better indexing
- Transcriptions for accessibility and SEO

### 8.6 Link Building Strategy

**Internal Linking:**
- Link from blog posts to service pages
- Link from service pages to consultation page
- Use descriptive anchor text with keywords

**External Backlinks:**
- Get listed in local dental associations
- Guest posts on dental blogs/websites
- Partnerships with referring dentists (link exchanges)
- Press releases for practice announcements
- Sponsor local events (charity, health fairs)

**Avoid:**
- Buying links
- Spammy directories
- Link farms
- Irrelevant websites

---

## 9. CONVERSION OPTIMIZATION

### 9.1 Primary Conversion Goals

**For Patients:**
1. **Consultation Booking** (Primary)
   - CTA: "Schedule Consultation" / "Book Appointment"
   - Funnel: Homepage → Service Page → Consultation Page → Booking on fusiondentalimplants.com
   
2. **Phone Calls** (Secondary)
   - Click-to-call buttons on mobile
   - Prominent phone number in header

3. **Form Submissions** (Tertiary)
   - Consultation request form
   - Question/inquiry form

**For Dentists:**
1. **Referral Submissions** (Primary)
   - Referral form on /for-dentists/referral-partners

2. **Course Inquiries** (Primary)
   - CTA: "View Courses" → Udemy enrollment
   - Custom training contact form

3. **Partnership Discussions** (Secondary)
   - Contact form for collaborations/speaking

### 9.2 CTA Best Practices

**Button Design:**
- Use accent color (amber) for high-priority CTAs
- Primary blue for secondary CTAs
- Clear, action-oriented copy
- Sufficient padding and sizing (min 44x44px for mobile)
- Hover states for engagement

**CTA Copy Examples:**
- ✅ "Schedule Your Consultation" (specific, benefit-oriented)
- ✅ "Get Your Smile Back" (emotional, outcome-focused)
- ❌ "Click Here" (vague)
- ❌ "Submit" (generic)

**CTA Placement:**
- Hero section (above fold)
- End of each major section
- Sticky header/footer on scroll
- Exit-intent popup (for high-value pages)

### 9.3 Trust Signals

**Display Throughout Site:**
1. Board Certification Badge (ABOMS)
2. Education Credentials (prominently)
3. Years of Experience
4. Number of Successful Cases
5. Patient Testimonials (photos + videos)
6. Before/After Gallery
7. Awards & Recognition
8. Professional Affiliations
9. Insurance Accepted
10. Secure Website Badge (SSL)

**Social Proof:**
- Star ratings from Google/Healthgrades
- Number of 5-star reviews
- "Trusted by X dentists across Northern California"
- "X+ successful implant cases"

### 9.4 Lead Capture Forms

**Form Fields (Consultation Request):**
- First Name
- Last Name
- Phone
- Email
- Service Interest (dropdown)
- Message (optional)
- Preferred Contact Method

**Form Best Practices:**
- Keep fields to minimum necessary
- Use autofill-friendly field names
- Clear labels and placeholders
- Inline validation
- Privacy assurance ("We respect your privacy")
- Confirmation message after submission
- Immediate email confirmation to user

**Form Delivery:**
- Email to office staff
- Webhook to CRM (HubSpot/Salesforce)
- SMS notification (optional)

### 9.5 Mobile Optimization

**Mobile-Specific Features:**
- Click-to-call buttons
- Simplified navigation (hamburger menu)
- Larger touch targets
- Condensed content (expandable sections)
- Fast loading (<2s)

**Mobile CTAs:**
- Sticky bottom bar with "Call Now" / "Book Consultation"
- Prominent phone number in header

### 9.6 A/B Testing Plan

**Elements to Test:**
1. Hero headline variations
2. CTA button colors
3. CTA button copy
4. Form length (# of fields)
5. Testimonial placement
6. Video vs static hero image
7. Pricing transparency (show vs hide)

**Testing Tools:**
- Google Optimize (free)
- VWO or Optimizely (paid)

---

## 10. ANALYTICS & TRACKING

### 10.1 Google Analytics 4 Setup

**Events to Track:**
- Page views (automatic)
- Scroll depth (25%, 50%, 75%, 100%)
- Button clicks (all CTAs)
- Form submissions
- Phone clicks (mobile)
- Video plays
- External link clicks (e.g., to fusiondentalimplants.com)
- PDF downloads (e.g., course brochures)

**Custom Conversions:**
- Consultation form submission
- Phone call initiated
- Referral form submission
- Course inquiry
- Email link clicks

### 10.2 Google Tag Manager

**Tags to Implement:**
- GA4 Configuration
- Facebook Pixel
- LinkedIn Insight Tag (for B2B remarketing)
- Hotjar Tracking Code

**Triggers:**
- All Pages
- Form Submissions
- Button Clicks
- Scroll Depth

### 10.3 Heatmap & Session Recording

**Hotjar Setup:**
- Track user behavior on key pages (Homepage, Service Pages, Consultation Page)
- Identify where users drop off
- Watch session recordings to understand pain points

**Optimization Actions:**
- Move CTAs to high-engagement areas
- Simplify confusing sections
- Fix broken elements

### 10.4 Monthly Reporting KPIs

**Traffic Metrics:**
- Total sessions
- New vs returning visitors
- Traffic sources (organic, direct, referral, social)
- Top landing pages

**Engagement Metrics:**
- Average session duration
- Bounce rate
- Pages per session
- Scroll depth

**Conversion Metrics:**
- Consultation form submissions
- Phone calls initiated
- Referral form submissions
- Course inquiries
- Conversion rate by traffic source

**SEO Metrics:**
- Organic keyword rankings
- Organic traffic growth
- Backlinks acquired
- Domain authority

---

## 11. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Weeks 1-2)

**Tasks:**
1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS with custom design tokens
3. Install Shadcn UI components
4. Set up Framer Motion for animations
5. Create reusable layout components (Header, Footer, Container)
6. Build design system documentation

**Deliverables:**
- Project repository
- Component library
- Style guide

---

### Phase 2: Core Pages (Weeks 3-5)

**Tasks:**
1. Build Homepage
   - Hero section
   - Problem/solution section
   - Services overview
   - For Dentists section
   - Testimonials
   - Final CTA
2. Build About Page
3. Build 5 Expertise/Service Pages
   - Dental Implants
   - Corrective Jaw Surgery
   - Full-Arch Restoration
   - Wisdom Teeth
   - Facial Reconstruction
4. Implement glassmorphism header
5. Add scroll animations

**Deliverables:**
- Fully functional core pages
- Responsive design (mobile, tablet, desktop)

---

### Phase 3: B2B Funnel (Week 6)

**Tasks:**
1. Build For Dentists - Referral Partners page
2. Build For Dentists - Education/Courses page
3. Create referral form with email integration
4. Create course showcase cards with Udemy links
5. Embed course preview videos

**Deliverables:**
- Complete B2B conversion funnel
- Functional referral system

---

### Phase 4: Patient Funnel (Week 7)

**Tasks:**
1. Build Consultation page
2. Build Testimonials page
3. Create consultation request form
4. Integrate phone tracking
5. Add video testimonials grid
6. Before/after gallery (if available)

**Deliverables:**
- Complete B2C conversion funnel
- Lead capture system

---

### Phase 5: Content & Media (Week 8)

**Tasks:**
1. Build Videos page
2. Build Speaking page
3. Build Contact page
4. Integrate YouTube videos (react-player)
5. Add Google Maps embed
6. Create blog integration strategy for existing drantipov.com

**Deliverables:**
- Media pages
- Contact functionality

---

### Phase 6: Legal & SEO (Week 9)

**Tasks:**
1. Create all legal pages (Privacy, Terms, Medical Disclaimer, HIPAA)
2. Implement SEO meta tags for all pages
3. Add Schema markup (Person, MedicalBusiness, Review, BreadcrumbList)
4. Create XML sitemap
5. Set up robots.txt
6. Optimize images (compression, lazy loading)
7. Implement Open Graph tags for social sharing

**Deliverables:**
- Complete legal compliance
- SEO-optimized site

---

### Phase 7: Analytics & Testing (Week 10)

**Tasks:**
1. Set up Google Analytics 4
2. Configure Google Tag Manager
3. Implement event tracking
4. Set up conversion goals
5. Install Hotjar
6. Test all forms and CTAs
7. Cross-browser testing (Chrome, Safari, Firefox, Edge)
8. Mobile device testing (iOS, Android)
9. Accessibility audit (WCAG 2.1 Level AA)
10. Performance optimization (Lighthouse score 95+)

**Deliverables:**
- Fully tracked website
- QA-approved site

---

### Phase 8: Blog Integration & Launch (Week 11-12)

**Tasks:**
1. Integrate existing drantipov.com blog
   - Option A: Subdirectory proxy setup
   - Option B: Subdomain configuration
2. Update old site header/footer for consistency
3. Create 301 redirects if needed
4. Final content review and copy edits
5. Load testing
6. Staging environment review with client
7. DNS setup and domain configuration
8. Production deployment
9. Post-launch monitoring (24-48 hours)

**Deliverables:**
- Live website
- Blog integration complete

---

### Phase 9: Post-Launch Optimization (Ongoing)

**Weeks 13-16:**
1. Monitor analytics and user behavior
2. A/B test hero headlines and CTAs
3. Gather user feedback
4. Optimize underperforming pages
5. Add new testimonials/case studies
6. Create additional blog content (2-4 posts/month)
7. Build backlinks (local directories, partnerships)
8. Monitor keyword rankings
9. Adjust SEO strategy based on performance

**Ongoing:**
- Monthly analytics reports
- Quarterly content updates
- Regular security updates
- Performance monitoring

---

## 12. TECHNICAL SPECIFICATIONS

### 12.1 File Structure

```
drantipov-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── procedures/
│   │   ├── testimonials/
│   │   └── logos/
│   ├── videos/
│   └── documents/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── expertise/
│   │   │   ├── dental-implants/page.tsx
│   │   │   ├── corrective-jaw-surgery/page.tsx
│   │   │   ├── full-arch-restoration/page.tsx
│   │   │   ├── wisdom-teeth/page.tsx
│   │   │   └── facial-reconstruction/page.tsx
│   │   ├── for-dentists/
│   │   │   ├── referral-partners/page.tsx
│   │   │   └── education/
│   │   │       └── courses/page.tsx
│   │   ├── for-patients/
│   │   │   ├── testimonials/page.tsx
│   │   │   └── consultation/page.tsx
│   │   ├── media/
│   │   │   ├── videos/page.tsx
│   │   │   └── speaking/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── legal/
│   │   │   ├── privacy-policy/page.tsx
│   │   │   ├── terms-of-service/page.tsx
│   │   │   ├── medical-disclaimer/page.tsx
│   │   │   └── hipaa-notice/page.tsx
│   │   └── api/
│   │       ├── contact/route.ts
│   │       └── referral/route.ts
│   ├── components/
│   │   ├── ui/ (Shadcn components)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   └── CTASection.tsx
│   │   └── forms/
│   │       ├── ConsultationForm.tsx
│   │       ├── ReferralForm.tsx
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── styles/
│       └── globals.css
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### 12.2 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://drantipov.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXX

# Email Service (Resend or EmailJS)
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=info@drantipov.com
TO_EMAIL=office@drantipov.com

# CRM Webhook (optional)
HUBSPOT_WEBHOOK_URL=https://api.hubspot.com/...
```

### 12.3 Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "react-player": "^2.16.0",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "lucide-react": "^0.368.0",
    "resend": "^3.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5"
  }
}
```

### 12.4 Deployment

**Hosting:** Vercel (recommended for Next.js)

**Domain:** drantipov.com

**SSL:** Automatic via Vercel

**CDN:** Vercel Edge Network

**Deployment Steps:**
1. Push code to GitHub repository
2. Connect Vercel to repository
3. Configure environment variables in Vercel dashboard
4. Set up custom domain
5. Configure DNS records
6. Enable automatic deployments
7. Set up preview deployments for staging

**Post-Deployment:**
- Monitor Vercel analytics
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure automatic backups
- Set up error tracking (Sentry)

### 12.5 Security & HIPAA Compliance

**SSL/HTTPS:**
- Enforce HTTPS only (automatic via Vercel)
- HSTS headers enabled
- Secure cookies

**Form Security:**
- CSRF protection
- Rate limiting on form submissions
- Server-side validation
- Sanitize all user inputs
- Honeypot fields for spam prevention

**HIPAA Considerations:**
- **No PHI Collection:** This website does NOT collect Protected Health Information
- Contact forms collect only basic contact info (name, email, phone)
- Medical records/history collected only at in-person visits
- Privacy policy clearly states data handling practices
- Secure transmission of all form data (TLS 1.3)

**Best Practices:**
- Regular dependency updates
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Content Security Policy (CSP)
- Regular security audits

**Data Storage:**
- Form submissions sent to secure email (no database storage of sensitive info)
- Analytics data anonymized
- No tracking of medical information

---

## 13. CONTENT REQUIREMENTS

This section details ALL content assets needed for the website. Use this as a master checklist.

### 13.1 Copy/Text Content

**Homepage:**
- [x] Hero headline (provided in PRD)
- [x] Hero subheadline (provided in PRD)
- [x] CTA button text (provided in PRD)
- [x] Problem/solution section copy (provided in PRD)
- [x] Services overview descriptions (6 services)
- [x] For Dentists section copy (provided in PRD)
- [x] Trust indicators text
- [x] Final CTA section

**About Page:**
- [ ] Full biography (500-800 words)
- [ ] Pull quote/testimonial from Dr. Antipov
- [ ] Education credentials (detailed)
- [ ] Philosophy statement
- [ ] Personal interests (optional)

**Service Pages (5 pages):**
- [ ] Hero copy for each service
- [ ] Service description (200-300 words each)
- [ ] Benefits bullet points
- [ ] Ideal candidates section
- [ ] Procedure timeline
- [ ] FAQ answers (5-10 per service)

**For Dentists Pages:**
- [x] Referral partners page copy (provided in PRD)
- [ ] Referral process details
- [ ] Partnership benefits
- [ ] Course descriptions (from Fusion Academy)
- [ ] Course learning outcomes
- [ ] Instructor bio for courses

**Patient Pages:**
- [ ] Consultation page: What to expect section
- [ ] Testimonial quotes (if using written testimonials)

**Legal Pages:**
- [x] Privacy Policy (template provided)
- [x] Terms of Service (template provided)
- [x] Medical Disclaimer (template provided)
- [x] HIPAA Notice (template provided)
- [ ] Review and customize templates with legal counsel

**Blog Integration:**
- [ ] Updated header/footer copy for old blog
- [ ] Navigation links text

### 13.2 Image Assets Required

**Professional Photography Needed:**

**Dr. Antipov:**
- [ ] Hero portrait (high-resolution, professional)
- [ ] About page main photo (approachable, professional)
- [ ] Action shot (with patient or in surgical setting - compliant)
- [ ] Headshot for bio sections
- [ ] Teaching/speaking photos (if available)

**Office/Facility:**
- [ ] Office exterior
- [ ] Reception area
- [ ] Waiting room
- [ ] Surgical suite (if allowed)
- [ ] Technology/equipment close-ups
- [ ] Staff photos (if featuring team)

**Procedures (if allowed/appropriate):**
- [ ] Before/after photos (with patient consent)
- [ ] 3D imaging examples
- [ ] X-rays or scans (anonymized)
- [ ] Surgical instruments (for educational content)

**For Dentists Section:**
- [ ] Collaboration photos (Dr. Antipov with referring dentists)
- [ ] Course/training photos (hands-on learning)
- [ ] Conference speaking photos

**Stock Images (if needed):**
- [ ] Happy patients (diverse, natural)
- [ ] Dental/medical abstract backgrounds
- [ ] Northern California landmarks (subtle, for local connection)

**Image Specifications:**
- Format: JPEG for photos, PNG for graphics
- Resolution: At least 1920px wide for hero images
- Color: Consistent with brand palette
- Naming: Descriptive (e.g., dr-antipov-hero-portrait.jpg)

### 13.3 Video Content Required

**Primary Videos:**
- [ ] Dr. Antipov intro video (60-90 seconds)
  - Personal welcome
  - Why he became an oral surgeon
  - His commitment to patients
  
**Patient Testimonials (from YouTube):**
- [ ] Curate 12-20 best testimonial videos
- [ ] Organize by procedure type
- [ ] Get YouTube video IDs for embedding

**Educational Videos (from YouTube):**
- [ ] Procedure explanations
- [ ] Dr. Antipov speaking/teaching clips
- [ ] Live surgery demonstrations (if available)

**Course Preview Videos:**
- [ ] 30-60 second previews for each course
- [ ] Link to full courses on Udemy

**Video Specifications:**
- Host on YouTube (no self-hosting)
- Embed using react-player
- Thumbnails optimized (1280x720px)
- Closed captions enabled for accessibility

### 13.4 Graphics & Icons

**Required Graphics:**
- [ ] Logo (SVG format, color and white versions)
- [ ] Favicon (multiple sizes)
- [ ] Social media share images (1200x630px)
- [ ] Certification badges (ABOMS, etc.)
- [ ] Educational institution logos (with permission)

**Icons:**
- Using Lucide React library (no custom icons needed)
- Consistent style throughout

### 13.5 Forms Content

**Form Fields & Labels:**
- [x] All form fields specified in PRD sections
- [ ] Error messages for validation
- [ ] Success messages after submission
- [ ] Email templates for confirmations

**Example Email Template (Consultation Request Confirmation):**
```
Subject: Your Consultation Request - Dr. Antipov's Office

Hi [First Name],

Thank you for requesting a consultation with Dr. Antipov!

We've received your information and will contact you within 1 business day to schedule your appointment.

What You Requested:
- Service Interest: [Service]
- Preferred Contact: [Phone/Email]

In the meantime, feel free to call us at (916) 783-2110 if you have any immediate questions.

We look forward to meeting you!

Best regards,
Dr. Antipov's Team
Galleria Oral & Maxillofacial Surgery
```

### 13.6 SEO Content

**Meta Descriptions (Already provided in PRD)**
- [x] Homepage
- [x] About page
- [x] All service pages
- [x] For Dentists pages
- [x] Patient pages
- [x] Legal pages

**Additional SEO Content Needed:**
- [ ] Alt text for all images (write descriptive, keyword-rich alt text)
- [ ] Schema markup data (names, addresses, credentials)
- [ ] Open Graph images for social sharing

---

## 14. DEVELOPER HANDOFF CHECKLIST

Use this checklist to ensure smooth handoff and implementation.

### 14.1 Pre-Development Checklist

**Design Assets:**
- [ ] All images collected and organized
- [ ] Logo files in multiple formats (SVG, PNG)
- [ ] Brand colors confirmed (hex codes in PRD)
- [ ] Typography fonts verified (Google Fonts: Inter, Merriweather)

**Content:**
- [ ] All copy finalized and approved
- [ ] Video links compiled
- [ ] Form fields defined
- [ ] Legal pages reviewed by attorney

**Technical:**
- [ ] Domain access confirmed (drantipov.com)
- [ ] Hosting account set up (Vercel)
- [ ] Email service configured (for forms)
- [ ] Analytics accounts created (GA4, GTM)

### 14.2 Development Checklist

**Setup:**
- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Install all dependencies (see package.json in PRD)
- [ ] Configure Tailwind CSS with design tokens
- [ ] Set up Shadcn UI components
- [ ] Create component library structure

**Core Implementation:**
- [ ] Build reusable layout components (Header, Footer)
- [ ] Implement glassmorphism header
- [ ] Create all pages per sitemap
- [ ] Add all sections per page specifications
- [ ] Implement responsive design (mobile-first)
- [ ] Add scroll animations (Framer Motion)

**Forms & Integrations:**
- [ ] Build all forms with validation
- [ ] Integrate email service (Resend/EmailJS)
- [ ] Test form submissions end-to-end
- [ ] Set up CRM webhooks (if applicable)
- [ ] Implement phone click tracking

**SEO:**
- [ ] Add meta tags to all pages
- [ ] Implement Schema markup
- [ ] Create XML sitemap
- [ ] Configure robots.txt
- [ ] Add Open Graph tags
- [ ] Optimize all images (compression, lazy loading)

**Analytics:**
- [ ] Install Google Analytics 4
- [ ] Configure Google Tag Manager
- [ ] Set up event tracking
- [ ] Test all tracking events
- [ ] Install Hotjar (optional)

**Blog Integration:**
- [ ] Choose integration method (subdirectory vs subdomain)
- [ ] Set up proxy or subdomain configuration
- [ ] Update old blog header/footer
- [ ] Test navigation between new site and blog
- [ ] Verify all old URLs still work

**Testing:**
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Tablet testing
- [ ] Form submission testing
- [ ] Link testing (all internal and external links work)
- [ ] Video embed testing
- [ ] Accessibility audit (WCAG 2.1 Level AA)
- [ ] Performance testing (Lighthouse score 95+)
- [ ] SEO audit (meta tags, schema, sitemap)

### 14.3 Pre-Launch Checklist

**Final Review:**
- [ ] Client review and approval
- [ ] Copy proofread (spelling, grammar)
- [ ] All images have alt text
- [ ] All links tested
- [ ] Contact information verified (phone, email, address)
- [ ] Legal pages reviewed

**Technical:**
- [ ] Set up SSL certificate
- [ ] Configure custom domain
- [ ] Set up redirects (if needed)
- [ ] Test site on staging URL
- [ ] Set up error monitoring (Sentry)
- [ ] Configure backup system
- [ ] Set up uptime monitoring

**Launch:**
- [ ] DNS changes made
- [ ] Production deployment
- [ ] Post-launch smoke test (check all critical pages)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Update Google Business Profile with new website
- [ ] Announce launch (email, social media)

### 14.4 Post-Launch Checklist (Week 1)

- [ ] Monitor analytics daily
- [ ] Check for broken links or errors
- [ ] Monitor form submissions (ensure emails arriving)
- [ ] Check site speed and performance
- [ ] Review user behavior (Hotjar)
- [ ] Monitor keyword rankings
- [ ] Gather initial feedback from staff/users

---

## 15. BUDGET & RESOURCE ESTIMATES

### 15.1 Development Costs

**Internal Team (if building in-house):**
- Senior Full-Stack Developer: 250-350 hours @ $100-150/hr = $25,000-52,500
- UI/UX Designer: 80-120 hours @ $75-125/hr = $6,000-15,000
- Content Writer: 40-60 hours @ $50-100/hr = $2,000-6,000
- Project Manager: 60-80 hours @ $75-125/hr = $4,500-10,000
- **Total Internal: $37,500-83,500**

**Agency/Outsourced:**
- Full website development: $40,000-80,000
- May include design, development, content, and launch

**Freelance (Lower cost option):**
- Full-stack developer: $15,000-30,000
- Designer: $3,000-8,000
- Content writer: $1,500-4,000
- **Total Freelance: $19,500-42,000**

### 15.2 Content Production Costs

**Photography:**
- Professional photographer (full day): $1,500-3,000
- Retouching/editing: $500-1,000
- **Total: $2,000-4,000**

**Videography (if creating new videos):**
- Professional videographer: $2,500-5,000/day
- Editing: $1,000-2,500
- **Total: $3,500-7,500**
- **Note:** Using existing YouTube videos = $0

**Copywriting:**
- Homepage + 5 service pages: $2,000-4,000
- About page: $500-1,000
- For Dentists pages: $1,000-2,000
- Legal pages (customize): $500-1,000
- **Total: $4,000-8,000**

### 15.3 Ongoing Costs (Annual)

**Hosting & Infrastructure:**
- Vercel Pro: $20/month = $240/year
- Domain registration: $15/year
- SSL certificate: Free (included with Vercel)
- **Total: $255/year**

**Software & Tools:**
- Google Workspace (email): $72/user/year
- Analytics tools (free tier sufficient initially)
- Form service (Resend): $20/month = $240/year
- Hotjar: $39/month = $468/year (optional)
- **Total: $312-780/year**

**Maintenance & Updates:**
- Monthly updates/fixes: $500-1,000/month
- Content updates: $300-500/month
- Security monitoring: $200-400/month
- **Total: $12,000-22,800/year**

**Marketing (Optional but Recommended):**
- SEO services: $1,000-3,000/month
- Content marketing (blog posts): $500-1,500/month
- Google Ads: $2,000-5,000/month
- **Total: $42,000-114,000/year**

### 15.4 Total Investment Summary

**Initial Build:**
- Low End (Freelance): $25,500-53,500
- Mid Range (Small Agency): $50,000-90,000
- High End (Top Agency): $80,000-150,000

**Year 1 Total (including build + 12 months running costs):**
- Without marketing: $37,567-76,380
- With marketing: $79,567-190,380

**Years 2+ (ongoing):**
- Basic maintenance: $12,567-23,580/year
- With marketing: $54,567-137,580/year

---

## 16. SUCCESS CRITERIA & KPIs

### 16.1 Launch Goals (First 30 Days)

**Technical:**
- [ ] Zero critical bugs
- [ ] Lighthouse score 95+ across all pages
- [ ] Page load time <2 seconds
- [ ] 100% uptime (excluding planned maintenance)

**Traffic:**
- [ ] 500+ organic sessions
- [ ] 30% returning visitor rate
- [ ] Average session duration >2 minutes
- [ ] Bounce rate <60%

**Conversions:**
- [ ] 10+ consultation form submissions
- [ ] 20+ phone calls from website
- [ ] 5+ referral form submissions
- [ ] 3+ course inquiries

### 16.2 3-Month Goals

**SEO:**
- [ ] Rank in top 10 for "oral surgeon Roseville"
- [ ] Rank in top 20 for "dental implants Northern California"
- [ ] 100+ indexed pages (including blog)
- [ ] 10+ quality backlinks

**Traffic:**
- [ ] 2,000+ monthly organic sessions
- [ ] 40% traffic from organic search
- [ ] 500+ page views on key service pages

**Conversions:**
- [ ] 40+ consultation requests
- [ ] 80+ phone calls
- [ ] 20+ referral form submissions
- [ ] 10+ course inquiries

**Engagement:**
- [ ] Average session duration >2.5 minutes
- [ ] Bounce rate <55%
- [ ] 10+ video views per week

### 16.3 6-Month Goals

**SEO:**
- [ ] Rank in top 5 for "oral surgeon Roseville"
- [ ] Rank in top 10 for "dental implants Northern California"
- [ ] Rank for 50+ relevant keywords
- [ ] 25+ quality backlinks
- [ ] Domain Authority 30+

**Traffic:**
- [ ] 4,000+ monthly organic sessions
- [ ] 50% traffic from organic search
- [ ] 200+ monthly visitors from "near me" searches

**Conversions:**
- [ ] 80+ consultation requests
- [ ] 150+ phone calls
- [ ] 40+ referral partnerships initiated
- [ ] 20+ course enrollments

**Business Impact:**
- [ ] 20% increase in patient consultations (vs. old site)
- [ ] 10+ new referring dentist relationships
- [ ] 5+ dentists enrolled in courses
- [ ] Measurable ROI (conversions value > website investment)

### 16.4 12-Month Goals

**SEO:**
- [ ] Rank #1 for "oral surgeon Roseville"
- [ ] Rank in top 5 for 10+ competitive keywords
- [ ] 100+ ranking keywords
- [ ] 50+ quality backlinks
- [ ] Domain Authority 35+

**Traffic:**
- [ ] 6,000+ monthly organic sessions
- [ ] 60% traffic from organic search
- [ ] Top source of new patient leads

**Conversions:**
- [ ] 150+ consultation requests
- [ ] 300+ phone calls
- [ ] 75+ referral partnerships
- [ ] 40+ course enrollments

**Business Impact:**
- [ ] 50% increase in new patient consultations
- [ ] 25+ active referring dentist partners
- [ ] 15+ dentists completed courses
- [ ] Established as #1 oral surgeon in Northern California (online presence)
- [ ] Positive ROI (3x+ return on investment)

---

## 17. APPENDIX

### 17.1 Competitor Analysis Summary

**Nuvia Dental Implants:**
- **Strengths:** Strong brand, 24-hour promise, professional videos, multiple locations
- **Weaknesses:** Corporate feel, less personal, no B2B focus, expensive
- **Our Advantage:** Personal touch, dual B2B/B2C focus, local authority, educational mission

**Opportunity:** Position as the "accessible expert" alternative to corporate chains—world-class expertise with personal care and commitment to education.

### 17.2 Northern California Keyword Research

**High-Volume, High-Intent Keywords:**
| Keyword | Monthly Searches | Difficulty | Priority |
|---------|-----------------|------------|----------|
| oral surgeon near me | 2,400 | Medium | High |
| dental implants cost | 1,900 | High | Medium |
| oral surgeon Roseville | 720 | Low | High |
| wisdom teeth removal near me | 1,600 | Medium | High |
| corrective jaw surgery | 590 | Low | Medium |
| dental implants Sacramento | 480 | Medium | High |
| full arch dental implants | 390 | Medium | High |
| oral surgeon Sacramento | 590 | Medium | High |

**Long-Tail Opportunities:**
- best oral surgeon for dental implants Northern California (70/mo)
- board certified oral surgeon near me (140/mo)
- full mouth dental implants cost (260/mo)
- jaw surgery specialist (90/mo)

### 17.3 Code Snippets & Examples

**Glassmorphism Header Component:**
```tsx
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/logo.svg" 
              alt="Dr. Antipov" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/expertise" className="text-neutral-700 hover:text-primary-600 transition">
              Expertise
            </Link>
            <Link href="/for-dentists" className="text-neutral-700 hover:text-primary-600 transition">
              For Dentists
            </Link>
            <Link href="/for-patients" className="text-neutral-700 hover:text-primary-600 transition">
              For Patients
            </Link>
            <Link href="/media" className="text-neutral-700 hover:text-primary-600 transition">
              Media
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-primary-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+19167832110" 
              className="flex items-center gap-2 text-primary-600 font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>(916) 783-2110</span>
            </a>
            <Button className="bg-primary-500 hover:bg-primary-600">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-neutral-200">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-neutral-700">About</Link>
              <Link href="/expertise" className="text-neutral-700">Expertise</Link>
              <Link href="/for-dentists" className="text-neutral-700">For Dentists</Link>
              <Link href="/for-patients" className="text-neutral-700">For Patients</Link>
              <Link href="/media" className="text-neutral-700">Media</Link>
              <Link href="/contact" className="text-neutral-700">Contact</Link>
              <div className="pt-4 border-t border-neutral-200">
                <Button className="w-full bg-primary-500">
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
```

**Scroll Animation Example:**
```tsx
// Example animated section
import { motion } from 'framer-motion'

export default function AnimatedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24"
    >
      {/* Content */}
    </motion.section>
  )
}
```

**Form with Validation:**
```tsx
// components/forms/ConsultationForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'

const schema = z.object({
  firstName: z.string().min(2, 'First name required'),
  lastName: z.string().min(2, 'Last name required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  interest: z.string(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ConsultationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (res.ok) {
        alert('Thank you! We will contact you soon.')
      }
    } catch (error) {
      alert('Something went wrong. Please call us directly.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">First Name *</label>
          <Input {...register('firstName')} />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Last Name *</label>
          <Input {...register('lastName')} />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      
      {/* More fields... */}
      
      <Button type="submit" className="w-full bg-primary-500">
        Submit Request
      </Button>
    </form>
  )
}
```

### 17.4 Useful Resources

**Design Inspiration:**
- BCG.com (primary reference)
- Awwwards.com (search "medical" or "professional services")
- Dribbble.com (search "glassmorphism")

**SEO Tools:**
- Google Search Console (free)
- Google Analytics 4 (free)
- Ahrefs (paid, $99+/month)
- SEMrush (paid, $119+/month)
- Screaming Frog (free up to 500 URLs)

**Development Resources:**
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Shadcn UI: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion

**Accessibility:**
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WAVE Tool: https://wave.webaim.org
- axe DevTools: Browser extension for testing

**Medical Website Compliance:**
- HIPAA Guidelines: https://www.hhs.gov/hipaa
- ADA Website Accessibility: https://www.ada.org
- Medical Disclaimer Templates: (customize with attorney)

---

## 18. FINAL NOTES FOR DEVELOPERS

### Key Priorities:

1. **Performance is Critical:** Medical websites must load fast. Aim for <2s page load.

2. **Mobile-First:** 60%+ of users will be on mobile. Design for mobile, enhance for desktop.

3. **Accessibility:** Use semantic HTML, proper ARIA labels, keyboard navigation, and color contrast.

4. **SEO Foundation:** Every page needs proper meta tags, schema markup, and clean URLs.

5. **Conversion Focus:** CTAs should be prominent, forms simple, and path to booking clear.

6. **Dual Audience:** Always remember we're serving both patients (emotional, trust-based) and dentists (professional, results-based). Design and copy should address both.

7. **Blog Integration:** Preserve existing blog SEO at all costs. Use 301 redirects only if absolutely necessary.

8. **No HIPAA Data:** This website collects NO protected health information. Keep it simple.

9. **Video Strategy:** Use YouTube embeds, not self-hosted videos. Much simpler and better for SEO.

10. **Course Showcase:** We're not building an LMS. Just showcase courses and link to Udemy/existing platforms.

### Questions During Development?

**Technical Questions:** Refer to Next.js/Tailwind documentation first, then Stack Overflow.

**Design Questions:** Reference BCG.com and design system in this PRD.

**Content Questions:** Flag missing content and request from client. Do not use Lorem Ipsum.

**SEO Questions:** Follow specifications in Section 8 exactly. When in doubt, prioritize user experience.

---

## CONCLUSION

This PRD provides complete specifications for building a market-leading website for Dr. Alexander Antipov. The site will:

✅ Establish Dr. Antipov as Northern California's premier oral surgery authority  
✅ Drive patient consultations to Fusion Dental Implants  
✅ Generate dentist referrals and course enrollments  
✅ Preserve existing blog SEO while modernizing brand presence  
✅ Provide exceptional user experience across all devices  
✅ Outperform competitors in search rankings and conversions  

**Total Estimated Timeline:** 10-12 weeks from kickoff to launch

**Recommended Team:**
- 1 Senior Full-Stack Developer (Next.js/React expert)
- 1 UI/UX Designer (for asset preparation)
- 1 Content Writer/SEO Specialist
- 1 Project Manager
- Dr. Antipov (for content review and approvals)

**Next Steps:**
1. Review and approve this PRD
2. Gather all content assets (photos, videos, copy)
3. Set up development environment
4. Begin Phase 1 (Foundation)
5. Weekly progress reviews
6. Staging review at Week 10
7. Launch at Week 12

---

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Prepared For:** Dr. Alexander Antipov  
**Prepared By:** [Your Agency/Team Name]

---

*This PRD is a living document and may be updated as requirements evolve during the development process. All changes should be documented and approved before implementation.*