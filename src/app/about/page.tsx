import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Services from "@/components/Services";
import PracticePhilosophy from "@/components/PracticePhilosophy";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import OfficeTour from "@/components/OfficeTour";
import ServiceArea from "@/components/ServiceArea";
import Locations from "@/components/Locations";
import ReferringDoctors from "@/components/ReferringDoctors";
import CTA from "@/components/CTA";

import type { Metadata } from "next";
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "About — Dr. Alexander V. Antipov, DDS" },
  description: "Meet Dr. Antipov & Dr. Kahwach. Board-certified oral & maxillofacial surgeons with 25+ years of combined experience in Roseville, CA.",
  alternates: {
    canonical: "/about",
    languages: {
      "x-default": "https://www.drantipov.com/about",
      en: "https://www.drantipov.com/about",
    },
  },
  openGraph: {
    title: "About Dr. Alexander Antipov",
    description: "Board-certified oral & maxillofacial surgeon — Diplomate ABOMS. 25+ years restoring smiles in Roseville, CA.",
    images: [
      {
        url: "/images/drantipov-about-v6.jpg",
        width: 1200,
        height: 630,
        alt: "About Dr. Alexander Antipov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Alexander Antipov",
    description: "Board-certified oral & maxillofacial surgeon — Diplomate ABOMS. 25+ years restoring smiles in Roseville, CA.",
    images: ["/images/drantipov-about-v6.jpg"],
  }
};

/**
 * About — mirror of the homepage, available as a dedicated /about route.
 *
 * This page renders the exact same composition as the homepage. It exists so
 * "About" can appear in the top navigation as a discrete entry point even
 * though clicking the logo also brings the user back to the same content.
 */
export default function AboutUsPage() {
  return (
    <>
      {/* Structured data for SEO and AI search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${siteConfig.url}/about`,
            url: `${siteConfig.url}/about`,
            name: "About Dr. Alexander Antipov, DDS",
            description:
              "Board-certified oral and maxillofacial surgeon practicing in Roseville, California. Diplomate of the American Board of Oral and Maxillofacial Surgery (ABOMS), with 25+ years of surgical experience.",
            inLanguage: "en",
            mainEntity: { "@id": `${siteConfig.url}/#physician` },
          },
          getBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: `${siteConfig.url}/about` },
          ]),
        ])}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <div id="main-content">
        <Hero />
        <TrustBadges />
        <About />
        <PracticePhilosophy />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <OfficeTour />
        <ServiceArea />
        <Locations />
        <ReferringDoctors />
        <CTA />
      </div>
    </>
  );
}
