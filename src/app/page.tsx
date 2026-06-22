import Hero from "@/components/Hero";
import ReviewBanner from "@/components/ReviewBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import PracticePhilosophy from "@/components/PracticePhilosophy";
import WallOfSmiles from "@/components/WallOfSmiles";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import OfficeTour from "@/components/OfficeTour";
import ServiceArea from "@/components/ServiceArea";
import Locations from "@/components/Locations";
import ReferringDoctors from "@/components/ReferringDoctors";
import CTA from "@/components/CTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Same-Day Dental Implants & Oral Surgery — Dr. Antipov, Roseville CA",
  },
  description:
    "Board-certified oral & maxillofacial surgeon in Roseville, CA. Same-day full-arch implants, jaw surgery, sleep apnea, bone grafting. 25+ years.",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "https://www.drantipov.com",
      en: "https://www.drantipov.com",
    },
  },
  openGraph: {
    title: "Same-Day Dental Implants & Oral Surgery — Dr. Antipov, Roseville CA",
    description: "Board-certified oral & maxillofacial surgeon. Same-day full-arch implants, jaw surgery, sleep apnea. 25+ years.",
    images: [
      {
        url: "/images/Antipov_white.jpg",
        width: 1016,
        height: 1400,
        alt: "Dr. Alexander Antipov, DDS — Board-Certified Oral & Maxillofacial Surgeon, Roseville CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day Dental Implants & Oral Surgery — Dr. Antipov, Roseville CA",
    description: "Board-certified oral & maxillofacial surgeon. Same-day full-arch implants, jaw surgery, sleep apnea. 25+ years.",
    images: ["/images/Antipov_white.jpg"],
  }
};

/**
 * Homepage — personal brand hub for Dr. Alexander V. Antipov, DDS.
 *
 * Narrative (top → bottom):
 *   1. Hero            — who Dr. Antipov is, primary CTA
 *   2. TrustBadges     — board certification, memberships at a glance
 *   3. About           — Dr. Antipov + Dr. Kahwach, credentials
 *   4. Services        — what we do (6 areas of expertise)
 *   5. BeforeAfter     — surgical cases preview (proof / E-E-A-T)
 *   6. Testimonials    — social proof
 *   7. FAQ             — common patient questions
 *   8. CTA             — book a free consultation
 *
 * Removed from previous version to focus the personal-brand narrative
 * and improve Core Web Vitals (24 sections → 9):
 *   - EmergencyBanner, FullArchShowcase, StatsCounter, ProcedureVideos,
 *     Process, PriceCalculator, Results, Gallery, OfficeTour, ServiceArea,
 *     Locations, ReferringDoctors, PatientResources, Contact, SurgeonAuthority
 *   These are still available as standalone routes or in /expertise/* pages.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <div id="main-content">
        <Hero />
        <ReviewBanner rating="4.9" />
        <About />
        <WallOfSmiles />
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
