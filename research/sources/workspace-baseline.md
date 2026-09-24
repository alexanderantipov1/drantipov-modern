# Workspace baseline evidence

Read from HEAD on 2026-09-24; other workers are editing the working tree concurrently.

Commit: 4709b3b0c1115e9057ec89d59ea5f1d96bf07a96
Installed Next.js: 16.2.3

## package.json

```
{
  "name": "dr-antipov",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -H 0.0.0.0 -p 5000",
    "build": "next build",
    "postbuild": "next-sitemap",
    "start": "next start -H 0.0.0.0 -p 5000",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@react-email/render": "^2.0.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.545.0",
    "next": "^16.2.2",
    "next-sitemap": "^4.2.3",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hook-form": "^7.65.0",
    "resend": "^6.1.2",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.2",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "^16.2.2",
    "postcss": "^8",
    "tailwindcss": "^4.2.2",
    "typescript": "^5"
  }
}

```

## src/app/layout.tsx

```
import type { Metadata, Viewport } from "next";
import { Geist, Merriweather, Dancing_Script, Caveat } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { TrackingProvider } from "@/components/TrackingProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { RecaptchaScript } from "@/components/RecaptchaScript";
import { ConsentGatedTracking } from "@/components/analytics/ConsentGatedTracking";
import { GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HtmlLangSetter from "@/components/HtmlLangSetter";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1ABB9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drantipov.com"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },
  title: {
    default:
      "Dr. Alexander Antipov, DDS — Oral Surgeon | Roseville, CA",
    template: "%s | Dr. Antipov, Roseville CA",
  },
  description:
    "Board-certified oral & maxillofacial surgeon in Roseville, CA. Same-day full-arch implants, jaw surgery, sleep apnea, bone grafting. 25+ years.",
  keywords: [
    "oral surgeon Roseville CA",
    "oral and maxillofacial surgeon Sacramento",
    "All-on-4 dental implants Roseville",
    "zygomatic dental implants",
    "corrective jaw surgery Sacramento",
    "full arch dental implants Roseville CA",
    "Dr Alexander Antipov",
    "board certified oral surgeon Northern California",
  ],
  authors: [{ name: "Dr. Alexander Antipov, DDS" }],
  creator: "Alexander V. Antipov, DDS, Inc.",
  publisher: "Alexander V. Antipov, DDS, Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drantipov.com",
    siteName: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    title:
      "Dr. Antipov — Oral Surgeon & Implant Specialist, Roseville",
    description:
      "Board-certified oral surgeon, 25+ years. Same-day implants, jaw surgery, sleep apnea, bone grafting. Free CT scan. Roseville, CA.",
    images: [
      {
        url: "/images/slides/1/1844-99036b3b.jpg",
        width: 1844,
        height: 1024,
        alt: "Dr. Alexander Antipov — Oral & Maxillofacial Surgery Practice in Roseville, CA — Same-Day Dental Implants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alexander Antipov, DDS — Oral Surgeon, Roseville CA",
    description:
      "Board-certified oral surgeon, 25+ years. Same-day implants, jaw surgery, sleep apnea, bone grafting. Free CT scan. Roseville, CA.",
    images: ["/images/slides/1/1844-99036b3b.jpg"],
  },
  icons: {
    icon: "/images/logo-b97aa5c8.png",
    apple: "/images/logo-b97aa5c8.png",
  },
  category: "Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${merriweather.variable} ${dancingScript.variable} ${caveat.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <HtmlLangSetter />
        <ConsentGatedTracking />
        <RecaptchaScript />
        <TrackingProvider>
          <JsonLd />
          <SiteNavbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <StickyMobileCTA />
          <CookieConsent />
        </TrackingProvider>
      </body>
    </html>
  );
}

```

## src/app/ru/layout.tsx

```
import type { Metadata } from "next";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";

/**
 * RU subtree layout. Sets a Russian <title> template and ru_RU OpenGraph locale
 * for every /ru/* page via Next.js metadata merging. (The <html lang="ru">
 * itself is set in the root layout based on the request pathname.)
 *
 * Renders the Russian navbar/footer once here so every /ru page gets consistent
 * chrome. The shared English Navbar/Footer return null on /ru routes.
 */
export const metadata: Metadata = {
  title: {
    default: "Доктор Александр Антипов — челюстно-лицевой хирург, Roseville CA",
    template: "%s | Доктор Антипов, Roseville CA",
  },
  openGraph: {
    locale: "ru_RU",
    siteName: "Доктор Александр Антипов, DDS",
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RuNavbar />
      {children}
      <RuFooter />
    </>
  );
}

```

## src/components/HtmlLangSetter.tsx

```
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps <html lang> in sync with the active locale on the client.
 * /ru/* → "ru", everything else → "en". Runs on every route change.
 */
export default function HtmlLangSetter() {
  const pathname = usePathname();
  useEffect(() => {
    const isRu = pathname === "/ru" || (pathname?.startsWith("/ru/") ?? false);
    const lang = isRu ? "ru" : "en";
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [pathname]);
  return null;
}

```

## next-sitemap.config.js

```
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://drantipov.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/calc-test'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      // If blog integration is added later
      // 'https://drantipov.com/blog/sitemap.xml',
    ],
  },
  // Set change frequencies and priorities for different page types
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Customize priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage - highest priority, changes more frequently
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Main landing pages - high priority
    else if (['/about', '/contact', '/expertise'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Expertise pages - high priority for SEO
    else if (path.startsWith('/expertise/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // For Dentists pages - important for referrals
    else if (path.startsWith('/for-dentists/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Patient resources - frequently updated
    else if (path.startsWith('/for-patients/')) {
      priority = 0.7
      changefreq = 'weekly'
    }
    // Media pages - updated with new content
    else if (path.startsWith('/media/')) {
      priority = 0.6
      changefreq = 'monthly'
    }
    // Legal pages - rarely change, noindex
    else if (path.startsWith('/legal/')) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}

```

## next.config.mjs

```
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// City slugs for legacy /locations/[city] → /locations/[state]/[city] 308s.
// Kept in sync with src/constants/cities.ts (all current cities are CA).
const LEGACY_CITY_REDIRECTS = [
  'sacramento',
  'folsom',
  'rocklin',
  'granite-bay',
  'lincoln',
  'elk-grove',
  'el-dorado-hills',
  'auburn',
  'citrus-heights',
  'rancho-cordova',
  'vacaville',
  'vallejo',
  'fairfield',
  'oroville',
].map((slug) => ({
  source: `/locations/${slug}`,
  destination: `/locations/ca/${slug}`,
  permanent: true,
}))

// In dev (Replit preview), the app is embedded in a cross-origin proxy iframe,
// so frame-blocking headers must be relaxed. Production keeps them strict.
const isDev = process.env.NODE_ENV === 'development'

// Content Security Policy — permissive enough for current third parties but no inline-everything
const csp = [
  "default-src 'self'",
  // Scripts: self + GTM/GA/Clarity + reCAPTCHA + Calendly + Resend tracking
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://assets.calendly.com https://static.hsforms.net https://js.hsforms.net",
  // Styles: self + inline (next/image, framer-motion) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts: self + Google Fonts
  "font-src 'self' data: https://fonts.gstatic.com",
  // Images: self + youtube/vimeo/google thumbnails + GA pixel + data URIs
  "img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://i.vimeocdn.com https://lh3.googleusercontent.com https://www.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms",
  // Connect: API endpoints
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://api.anthropic.com https://api.fusiondentalimplants.com https://webto.salesforce.com https://api.resend.com https://api.hsforms.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
  // Iframes: reCAPTCHA + YouTube + Vimeo + Calendly + Maps
  "frame-src 'self' https://www.googletagmanager.com https://www.google.com/recaptcha/ https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://calendly.com https://www.google.com/maps/",
  // Media: video + audio
  "media-src 'self' blob:",
  // Workers
  "worker-src 'self' blob:",
  // Object/embed
  "object-src 'none'",
  // Base URI
  "base-uri 'self'",
  // Form actions (forms submit to self only)
  "form-action 'self'",
  // Frame ancestors (clickjacking — same as X-Frame-Options SAMEORIGIN)
  isDev ? "frame-ancestors 'self' https://*.replit.dev https://*.replit.app https://*.janeway.replit.dev" : "frame-ancestors 'self'",
  // Upgrade HTTP→HTTPS
  "upgrade-insecure-requests",
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '*.janeway.replit.dev',
    '*.replit.dev',
    '*.replit.app',
  ],
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 85, 90, 92],
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },         // YouTube thumbnails only
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/vi/**' },     // YouTube thumbnails (alt)
      { protocol: 'https', hostname: 'i.vimeocdn.com', pathname: '/video/**' },   // Vimeo video thumbnails
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' }, // Google business photos
    ],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/services', destination: '/expertise', permanent: true },
      { source: '/before-after', destination: '/surgical-cases', permanent: true },
      { source: '/testimonials', destination: '/for-patients', permanent: true },
      { source: '/for-patients/testimonials', destination: '/for-patients', permanent: true },
      { source: '/faq', destination: '/for-patients/faqs', permanent: true },
      { source: '/resources', destination: '/for-patients', permanent: true },
      // Legacy URLs with inbound backlinks — preserve link equity (301)
      { source: '/cases/:path*', destination: '/surgical-cases/:path*', permanent: true },
      { source: '/procedure-videos', destination: '/media/videos', permanent: true },
      { source: '/meet-the-doctor', destination: '/about', permanent: true },
      { source: '/choose-your-option', destination: '/for-patients/consultation', permanent: true },
      { source: '/policy', destination: '/legal/privacy-policy', permanent: true },
      ...LEGACY_CITY_REDIRECTS,
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          ...(isDev ? [] : [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }]),
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=(), interest-cohort=()' },
          // X-XSS-Protection removed — deprecated by modern browsers, CSP replaces it
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(sitemap.xml|robots.txt|manifest.webmanifest)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },
}

export default nextConfig

```

## src/components/JsonLd.tsx

```
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://www.drantipov.com/#organization",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    alternateName: [
      "Alexander V. Antipov, DDS, Inc.",
      "Dr. Antipov Oral Surgery",
      "Antipov Oral & Maxillofacial Surgery",
    ],
    description:
      "Board-certified oral and maxillofacial surgeon providing same-day dental implants (All-on-4, All-on-6, zygomatic implants), full arch dental implant restoration, corrective jaw surgery (orthognathic surgery), organic and holistic bone grafting, facial cosmetic surgery (rhinoplasty, face lift, eyelid surgery), and wisdom teeth removal in Roseville, CA. Serving Sacramento, San Francisco, Reno, and all of Northern California. Free dental implant consultation with complimentary 3D CT scan.",
    url: "https://www.drantipov.com",
    telephone: "+1-916-783-2110",
    email: "info@galleriaoms.com",
    image: "https://www.drantipov.com/images/slides/1/1844-99036b3b.jpg",
    logo: "https://www.drantipov.com/images/logo-b97aa5c8.png",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Financing, CareCredit, HSA, FSA, Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: "911 Reserve Dr, Suite 100",
      addressLocality: "Roseville",
      addressRegion: "CA",
      postalCode: "95678",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7521,
      longitude: -121.288,
    },
    areaServed: [
      { "@type": "City", name: "Roseville", containedInPlace: { "@type": "State", name: "California" } },
      { "@type": "City", name: "Sacramento" },
      { "@type": "City", name: "San Francisco" },
      { "@type": "City", name: "Oakland" },
      { "@type": "City", name: "San Jose" },
      { "@type": "City", name: "Fresno" },
      { "@type": "City", name: "Stockton" },
      { "@type": "City", name: "Modesto" },
      { "@type": "City", name: "Reno" },
      { "@type": "City", name: "Redding" },
      { "@type": "City", name: "Chico" },
      { "@type": "City", name: "Napa" },
      { "@type": "City", name: "Santa Rosa" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Elk Grove" },
      { "@type": "City", name: "Rocklin" },
      { "@type": "City", name: "Lincoln" },
      { "@type": "City", name: "Auburn" },
      { "@type": "City", name: "Granite Bay" },
      { "@type": "City", name: "Loomis" },
      { "@type": "City", name: "Walnut Creek" },
      { "@type": "City", name: "Concord" },
      { "@type": "City", name: "Fremont" },
      { "@type": "City", name: "Hayward" },
      { "@type": "City", name: "Berkeley" },
      { "@type": "City", name: "Vallejo" },
      { "@type": "City", name: "Vacaville" },
      { "@type": "City", name: "Davis" },
      { "@type": "City", name: "Yuba City" },
      { "@type": "City", name: "Marysville" },
      { "@type": "City", name: "South Lake Tahoe" },
      { "@type": "City", name: "Truckee" },
      { "@type": "City", name: "Carson City" },
      { "@type": "City", name: "Sparks" },
      { "@type": "City", name: "El Dorado Hills" },
      { "@type": "City", name: "Rancho Cordova" },
      { "@type": "City", name: "Citrus Heights" },
      { "@type": "City", name: "Carmichael" },
      { "@type": "City", name: "Fair Oaks" },
      { "@type": "City", name: "Orangevale" },
      { "@type": "City", name: "Woodland" },
      { "@type": "City", name: "West Sacramento" },
      { "@type": "City", name: "Placerville" },
      { "@type": "City", name: "Grass Valley" },
      { "@type": "City", name: "Nevada City" },
      { "@type": "State", name: "California" },
      { "@type": "State", name: "Nevada" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oral & Maxillofacial Surgery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "All-on-4 Dental Implants",
            alternateName: "Teeth in a Day",
            description:
              "Full-arch dental implant restoration using four strategically placed titanium implants with same-day temporary teeth. Walk in with missing teeth, walk out with a complete smile in one visit.",
            procedureType: "Surgical",
            bodyLocation: "Upper jaw (maxilla) and lower jaw (mandible)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "All-on-6 Dental Implants",
            description:
              "Full-arch dental implant restoration with six implants per arch for enhanced stability, ideal for patients with moderate bone loss.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Zygomatic Dental Implants",
            description:
              "Cheekbone-anchored dental implants for patients with severe upper jaw bone loss who have been told they are not candidates for traditional implants.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Single Tooth Dental Implant",
            description:
              "Individual tooth replacement with a titanium implant and custom ceramic crown, often placed immediately after extraction.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Implant-Supported Bridge",
            description:
              "Multiple adjacent teeth replaced with implant-supported fixed bridge prosthetics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Snap-On Dentures (Overdentures)",
            description:
              "Removable implant-retained dentures that snap onto 2-4 implants for improved stability and comfort over traditional dentures.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Corrective Jaw Surgery (Orthognathic Surgery)",
            alternateName: "Jaw Surgery",
            description:
              "Computer-guided corrective jaw surgery including Le Fort I osteotomy, BSSO, genioplasty, and maxillomandibular advancement to correct jaw misalignment, facial asymmetry, and obstructive sleep apnea.",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Bone Grafting for Dental Implants",
            alternateName: "Organic Bone Grafting",
            description:
              "Bone regeneration using organic, holistic, autogenous, allograft, and xenograft materials to rebuild jawbone for dental implant placement.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Sinus Lift Surgery",
            alternateName: "Sinus Augmentation",
            description:
              "Sinus floor elevation with bone grafting to create sufficient bone height for dental implant placement in the upper jaw.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Rhinoplasty",
            alternateName: "Nose Job",
            description:
              "Cosmetic and functional nose reshaping surgery performed by a board-certified oral and maxillofacial surgeon.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Face Lift Surgery (Rhytidectomy)",
            description:
              "Comprehensive facial rejuvenation surgery to tighten skin, reduce wrinkles, and restore a youthful appearance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Eyelid Surgery (Blepharoplasty)",
            description:
              "Upper and lower eyelid surgery including Asian double eyelid surgery (epicanthoplasty) to refresh and rejuvenate the eye area.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Facial Feminization Surgery",
            description:
              "Surgical facial feminization procedures to create softer, more feminine facial features.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Scarless Mole Removal",
            description:
              "Mole removal using advanced radio wave surgical technique that leaves no visible scarring.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Juvederm Dermal Fillers",
            description:
              "Non-surgical facial rejuvenation using Juvederm hyaluronic acid fillers for lip augmentation, wrinkle reduction, and facial volume restoration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Wisdom Teeth Removal",
            description:
              "Safe extraction of impacted and erupted wisdom teeth with IV sedation for maximum patient comfort.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "TMJ Treatment & Surgery",
            alternateName: "Temporomandibular Joint Treatment",
            description:
              "Comprehensive diagnosis and treatment of temporomandibular joint (TMJ) disorders including arthroscopy, arthrocentesis, and open joint surgery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Sleep Apnea Surgery",
            description:
              "Surgical treatment for obstructive sleep apnea including maxillomandibular advancement (MMA) surgery.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Sarah M." },
        datePublished: "2024-06-15",
        reviewBody:
          "I had a single tooth extraction and implant placement. Everything was done in one day. The whole process was quick and painless. I'm very grateful to Dr. Antipov for his great work.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Michael R." },
        datePublished: "2024-05-22",
        reviewBody:
          "I had large bone grafting with sinus lifts on both sides of the upper jaw with multiple implants and I got teeth in a day. Everything went very smoothly without any complications. Now look at my new smile!",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Linda K." },
        datePublished: "2024-04-10",
        reviewBody:
          "Dr. Antipov and his team made me feel comfortable from the very first consultation. The results exceeded my expectations. I can finally eat my favorite foods and smile with confidence again.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Val M." },
        datePublished: "2024-03-18",
        reviewBody:
          "I flew from Honolulu to see Dr. Antipov because of his reputation for corrective jaw surgery. The results were life-changing. The entire team was incredible from start to finish.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Vadim S." },
        datePublished: "2024-02-28",
        reviewBody:
          "Best oral surgeon in Northern California. My All-on-4 procedure was completed in one day and the results are amazing. I can eat, talk, and smile with complete confidence now.",
      },
    ],
    founder: { "@id": "https://www.drantipov.com/#physician" },
    employee: [
      { "@id": "https://www.drantipov.com/#physician" },
      { "@id": "https://www.drantipov.com/#physician-kahwach" },
    ],
    sameAs: [
      "https://www.facebook.com/drantipov",
      "https://www.instagram.com/drantipov",
      "https://www.linkedin.com/in/drantipov",
    ],
  };

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    url: "https://www.drantipov.com",
    about: {
      "@type": "MedicalSpecialty",
      name: "Oral and Maxillofacial Surgery",
    },
    specialty: [
      { "@type": "MedicalSpecialty", name: "Oral Surgery" },
      { "@type": "MedicalSpecialty", name: "Maxillofacial Surgery" },
      { "@type": "MedicalSpecialty", name: "Implant Dentistry" },
      { "@type": "MedicalSpecialty", name: "Orthognathic Surgery" },
      { "@type": "MedicalSpecialty", name: "Facial Cosmetic Surgery" },
    ],
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#main-content",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };

  const physicianAntipov = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.drantipov.com/#physician",
    name: "Dr. Alexander V. Antipov, DDS",
    givenName: "Alexander",
    familyName: "Antipov",
    jobTitle: "Founder · Oral & Maxillofacial Surgeon",
    description:
      "Board-certified Diplomate of the American Board of Oral and Maxillofacial Surgery, in private practice in Roseville, California since 2008. Educated at Moscow State Medical Stomatology University (1995–2000), Loma Linda University School of Dentistry (DDS, 2001–2003), and Albert Einstein College of Medicine Department of Dentistry (Oral & Maxillofacial Surgery Residency, 2007–2008). Founder of Smile Again Foundation (2025).",
    url: "https://www.drantipov.com/our-team",
    image: "https://www.drantipov.com/images/drantipov@2x-b80a5ccf.jpg",
    worksFor: { "@id": "https://www.drantipov.com/#organization" },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Albert Einstein College of Medicine, Yeshiva University, Department of Dentistry", sameAs: "https://www.einsteinmed.edu" },
      { "@type": "EducationalOrganization", name: "Loma Linda University School of Dentistry", sameAs: "https://dentistry.llu.edu" },
      { "@type": "EducationalOrganization", name: "Moscow State Medical Stomatology University", sameAs: "https://www.msmsu.ru" },
    ],
    memberOf: [
      { "@type": "Organization", name: "American Board of Oral and Maxillofacial Surgery", alternateName: "ABOMS", sameAs: "https://www.aboms.org" },
      { "@type": "Organization", name: "American Association of Oral and Maxillofacial Surgeons", alternateName: "AAOMS", sameAs: "https://www.aaoms.org" },
      { "@type": "Organization", name: "California Association of Oral and Maxillofacial Surgeons", alternateName: "CALAOMS", sameAs: "https://www.calaoms.org" },
      { "@type": "Organization", name: "Sacramento District Dental Society", alternateName: "SDDS" },
      { "@type": "Organization", name: "American Dental Association", alternateName: "ADA", sameAs: "https://www.ada.org" },
      { "@type": "Organization", name: "California Dental Association", alternateName: "CDA", sameAs: "https://www.cda.org" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Diplomate, American Board of Oral and Maxillofacial Surgery (ABOMS)" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "California Dental License", identifier: "50724" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "DEA Certificate", identifier: "FA 0689717" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "General Anesthesia Permit (in-office IV sedation)", identifier: "GA 1446" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Elective Facial Cosmetic Surgery Permit" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "registration", name: "Continuing Education Registered Provider", identifier: "00948675" },
    ],
    affiliation: [
      { "@type": "MedicalOrganization", name: "Sutter Roseville Medical Center", sameAs: "https://www.sutterhealth.org/srmc" },
      { "@type": "MedicalOrganization", name: "Sutter General Hospital", sameAs: "https://www.sutterhealth.org" },
      { "@type": "MedicalOrganization", name: "Mercy General Hospital", sameAs: "https://www.dignityhealth.org/sacramento/locations/mercygeneral" },
      { "@type": "MedicalOrganization", name: "Mercy San Juan Medical Center", sameAs: "https://www.dignityhealth.org/sacramento/locations/mercysanjuan" },
    ],
  };

  const physicianKahwach = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.drantipov.com/#physician-kahwach",
    name: "Dr. André-David Kahwach, DDS, MD",
    jobTitle: "Oral & Maxillofacial Surgeon",
    url: "https://www.drantipov.com/our-team",
    image: "https://www.drantipov.com/images/dr-kahwach-v4.jpg",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "University of California, San Francisco, School of Dentistry", sameAs: "https://dentistry.ucsf.edu" },
      { "@type": "EducationalOrganization", name: "Loma Linda University School of Medicine", sameAs: "https://medicine.llu.edu" },
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Galleria Oral & Facial Surgery",
      url: "https://www.galleriaoms.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianAntipov) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianKahwach) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPage) }}
      />
    </>
  );
}

```
