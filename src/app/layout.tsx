import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { TrackingProvider } from "@/components/TrackingProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { RecaptchaScript } from "@/components/RecaptchaScript";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1ABB9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drantipov.com"),
  title: {
    default:
      "Dr. Alexander Antipov, DDS | Oral & Maxillofacial Surgeon — Dental Implants, Jaw Surgery & Facial Cosmetic Surgery in Roseville, CA",
    template: "%s | Dr. Alexander Antipov, DDS — Oral Surgeon Roseville CA",
  },
  description:
    "Board-certified oral and maxillofacial surgeon in Roseville, CA. Dr. Alexander Antipov specializes in same-day dental implants (All-on-4, All-on-6, zygomatic implants), full arch dental implant restoration, teeth-in-a-day, corrective jaw surgery (orthognathic surgery), organic and holistic bone grafting, sinus lifts, facial cosmetic surgery (rhinoplasty, face lift, eyelid surgery, lip fillers), wisdom teeth removal, and TMJ treatment. Free consultations with complimentary 3D CT scan. Serving Roseville, Sacramento, San Francisco, Reno, and all of Northern California. Over 10,000 patients treated with 25+ years of experience.",
  keywords: [
    "dental implants Roseville CA",
    "oral surgeon Roseville",
    "oral surgeon near me",
    "oral and maxillofacial surgeon Roseville CA",
    "oral and maxillofacial surgeon Sacramento",
    "All-on-4 dental implants",
    "All-on-4 dental implants near me",
    "All-on-4 dental implants cost",
    "All-on-4 dental implants Roseville",
    "All-on-4 dental implants Sacramento",
    "All-on-6 dental implants",
    "full arch dental implants",
    "full arch dental implants near me",
    "full arch dental implants cost",
    "full arch dental implant restoration",
    "full mouth dental implants",
    "full mouth reconstruction",
    "full mouth restoration",
    "same day dental implants",
    "same day dental implants near me",
    "teeth in a day",
    "teeth in a day near me",
    "immediate load dental implants",
    "immediate dental implants",
    "zygomatic implants",
    "zygomatic dental implants",
    "snap on dentures",
    "implant supported dentures",
    "overdentures",
    "single tooth implant",
    "dental implant bone graft",
    "organic bone graft",
    "holistic bone grafting",
    "natural bone graft dental implants",
    "bone grafting for dental implants",
    "sinus lift surgery",
    "sinus augmentation",
    "ridge augmentation",
    "corrective jaw surgery",
    "corrective jaw surgery near me",
    "orthognathic surgery",
    "orthognathic surgery Roseville",
    "orthognathic surgery Sacramento",
    "jaw surgery",
    "jaw surgery near me",
    "underbite correction surgery",
    "overbite correction surgery",
    "open bite correction",
    "jaw misalignment surgery",
    "facial asymmetry correction",
    "Le Fort osteotomy",
    "BSSO surgery",
    "genioplasty",
    "chin surgery",
    "maxillary advancement",
    "mandibular advancement",
    "double jaw surgery",
    "sleep apnea surgery",
    "obstructive sleep apnea treatment",
    "facial cosmetic surgery",
    "facial cosmetic surgery Roseville CA",
    "rhinoplasty Roseville",
    "rhinoplasty Sacramento",
    "nose job near me",
    "face lift surgery",
    "facelift near me",
    "eyelid surgery",
    "blepharoplasty",
    "double eyelid surgery",
    "Asian eyelid surgery",
    "lip fillers near me",
    "Juvederm lip fillers",
    "dermal fillers Roseville",
    "mole removal",
    "scarless mole removal",
    "facial feminization surgery",
    "wisdom teeth removal",
    "wisdom teeth removal Roseville",
    "wisdom teeth extraction",
    "impacted wisdom teeth",
    "wisdom teeth removal cost",
    "TMJ treatment",
    "TMJ surgery",
    "TMJ disorder treatment",
    "temporomandibular joint treatment",
    "IV sedation dentistry",
    "sedation oral surgery",
    "dental implants Sacramento",
    "dental implants San Francisco",
    "dental implants Reno NV",
    "dental implants Northern California",
    "oral surgeon Sacramento",
    "oral surgeon San Francisco",
    "Dr Alexander Antipov",
    "Dr Antipov oral surgeon",
    "board certified oral surgeon Roseville",
    "dental implant financing",
    "dental implant cost",
    "free dental consultation Roseville",
    "free dental implant consultation",
    "complimentary CT scan dental",
    "3D CT scan dental implants",
    "computer guided dental implants",
    "dental implant surgery",
    "tooth replacement options",
    "missing teeth solutions",
    "denture alternatives",
    "dental implants vs dentures",
    "best dental implant surgeon",
    "top oral surgeon Northern California",
    "zirconia dental implants",
    "titanium dental implants",
    "permanent teeth replacement",
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
      "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgeon | Same-Day Dental Implants, Jaw Surgery & Facial Cosmetics | Roseville, CA",
    description:
      "Board-certified oral surgeon with 25+ years experience. Same-day dental implants (All-on-4/6), corrective jaw surgery, facial cosmetic procedures, organic bone grafting. Free consultations with complimentary CT scan. 10,000+ patients treated in Roseville, Sacramento & Northern California.",
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
    title: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgeon | Roseville, CA",
    description:
      "Same-day dental implants, corrective jaw surgery, facial cosmetic surgery, organic bone grafting. Board-certified with 25+ years experience. Free consultations. Serving Roseville, Sacramento, SF & Northern California.",
    images: ["/images/slides/1/1844-99036b3b.jpg"],
  },
  alternates: {
    canonical: "https://drantipov.com",
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
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RecaptchaScript />
        <TrackingProvider>
          <JsonLd />
          {children}
          <CookieConsent />
        </TrackingProvider>
      </body>
    </html>
  );
}
