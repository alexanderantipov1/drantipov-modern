import type { Metadata, Viewport } from "next";
import { Geist, Merriweather, Dancing_Script, Caveat } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { TrackingProvider } from "@/components/TrackingProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { RecaptchaScript } from "@/components/RecaptchaScript";
import { ConsentGatedTracking } from "@/components/analytics/ConsentGatedTracking";
import { SiteNavbar, SiteFooter } from "@/components/SiteChrome";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
  metadataBase: new URL("https://drantipov.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
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
    url: "https://drantipov.com",
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
