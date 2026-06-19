"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

type LinkItem = { href: string; label: string };

// ---- Edit these lists to change what appears in the footer ----

// Services: the money pages, ordered broad → specific.
const IMPLANT_LINKS: LinkItem[] = [
  { href: "/expertise/full-arch-implants", label: "All-on-4 Full-Arch Implants" },
  { href: "/all-on-4-cost", label: "All-on-4 Implant Cost" },
  { href: "/all-on-4-clearchoice-alternative", label: "All-on-4 vs. ClearChoice" },
  { href: "/full-arch-dental-implants", label: "Full Mouth Dental Implants" },
  { href: "/expertise/zygomatic-implants", label: "Zygomatic Implants" },
  { href: "/expertise/single-tooth", label: "Single Tooth Implants" },
  { href: "/expertise/snap-on-dentures", label: "Snap-On Dentures" },
  { href: "/expertise/implant-rescue", label: "Implant Rescue & Revision" },
  { href: "/expertise/bone-grafting", label: "Bone Grafting & Sinus Lift" },
  { href: "/for-patients/insights/same-day-implants", label: "Same-Day Teeth" },
  { href: "/surgical-cases/dental-implants", label: "Implant Case Gallery" },
];

const SURGICAL_LINKS: LinkItem[] = [
  { href: "/expertise/jaw-surgery", label: "Corrective Jaw Surgery" },
  { href: "/jaw-surgery-recovery-timeline", label: "Jaw Surgery Recovery Timeline" },
  { href: "/expertise/wisdom-teeth", label: "Wisdom Teeth Removal" },
  { href: "/expertise/tooth-extractions", label: "Tooth Extractions" },
  { href: "/expertise/tmj", label: "TMJ Treatment" },
  { href: "/expertise/sleep-apnea", label: "Sleep Apnea Surgery" },
  { href: "/expertise/sedation-anesthesia", label: "Sedation & Anesthesia" },
  { href: "/expertise/facial-cosmetic", label: "Facial Cosmetic Surgery" },
  { href: "/expertise/mole-removal", label: "Mole Removal" },
  { href: "/expertise/oral-pathology", label: "Oral Pathology" },
  { href: "/expertise", label: "All Procedures" },
];

// Cities We Serve: pure local SEO. Ends with a catch-all "View All Locations".
const LOCATION_LINKS: LinkItem[] = [
  { href: "/locations/ca/sacramento", label: "Sacramento" },
  { href: "/locations/ca/folsom", label: "Folsom" },
  { href: "/locations/ca/rocklin", label: "Rocklin" },
  { href: "/locations/ca/granite-bay", label: "Granite Bay" },
  { href: "/locations/ca/lincoln", label: "Lincoln" },
  { href: "/locations", label: "View All Locations" },
];

const RESOURCE_LINKS: LinkItem[] = [
  { href: "/for-patients/insights", label: "Blog — News, Research & Education" },
  { href: "/surgical-cases", label: "Surgical Case Gallery" },
  { href: "/results", label: "Before & After Results" },
  { href: "/for-patients", label: "Patient Testimonials" },
  { href: "/for-patients/insights/implants-vs-dentures", label: "Implants vs. Dentures" },
  { href: "/for-patients/insights/dental-implant-aftercare", label: "Dental Implant Aftercare" },
  { href: "/for-patients/insights/dental-implant-complications", label: "Implant Complications" },
  { href: "/for-patients/faqs", label: "Patient FAQs" },
  { href: "/media/videos", label: "Videos" },
  { href: "/glossary", label: "Glossary" },
];

const PATIENT_LINKS: LinkItem[] = [
  { href: "/for-patients/consultation", label: "Free Consultation" },
  { href: "/for-patients", label: "Patient Information" },
  { href: "/for-patients/pre-op", label: "Before Your Surgery" },
  { href: "/for-patients/post-op", label: "After Your Surgery" },
  { href: "/for-patients/travel", label: "Traveling Patients" },
  { href: "/insurance", label: "Insurance & Financing" },
  { href: "/insurance/aetna", label: "Aetna Coverage" },
  { href: "/insurance/anthem-blue-cross", label: "Anthem Blue Cross" },
  { href: "/insurance/delta-dental", label: "Delta Dental" },
];

const COMPANY_LINKS: LinkItem[] = [
  { href: "/about", label: "About Dr. Antipov" },
  { href: "/our-team", label: "Meet the Team" },
  { href: "/for-dentists", label: "For Dentists" },
  { href: "/for-dentists/refer-patients", label: "Refer a Patient" },
  { href: "/for-dentists/referral-partners", label: "Referral Partners" },
  { href: "/for-dentists/education/courses", label: "CE Courses" },
  { href: "/media/speaking", label: "Speaking & Media" },
  { href: "/smile-again-foundation", label: "Smile Again Foundation" },
  { href: "/contact", label: "Contact Us" },
];

const LEGAL_LINKS: LinkItem[] = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
  { href: "/legal/hipaa-notice", label: "HIPAA Notice" },
  { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const SECTIONS: { title: string; links: LinkItem[] }[] = [
  { title: "Dental Implant Services", links: IMPLANT_LINKS },
  { title: "Surgical & Facial Services", links: SURGICAL_LINKS },
  { title: "Cities We Serve", links: LOCATION_LINKS },
  { title: "Patient Resources", links: RESOURCE_LINKS },
  { title: "For Patients", links: PATIENT_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];

// Collapsible accordion section (one open at a time) on all screen sizes.
function FooterSection({
  title,
  links,
  isOpen,
  onToggle,
}: {
  title: string;
  links: LinkItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <h4>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between py-4 text-sm font-semibold text-white"
        >
          {title}
          <ChevronDown
            className={`h-5 w-5 text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h4>
      <ul
        className={`space-y-2.5 pb-4 ${isOpen ? "block" : "hidden"}`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs text-white/60 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-navy text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Always-visible brand block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS — Oral and Maxillofacial Surgery — Roseville, CA"
              width={180}
              height={60}
              className="h-10 w-auto brightness-200 invert"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Board-certified oral &amp; maxillofacial surgeon specializing in same-day dental implants
              (All-on-4, All-on-6, zygomatic), full arch restoration, corrective jaw surgery, organic bone
              grafting, facial cosmetic surgery, and wisdom teeth removal. Serving Roseville, Sacramento,
              San Francisco, Reno, and all of Northern California.
            </p>
            <a
              href="https://maps.google.com/?q=911+Reserve+Dr+Ste+150,+Roseville,+CA+95678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-start gap-2 text-sm text-white/70 hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>911 Reserve Dr, Ste 150, Roseville, CA 95678</span>
            </a>
          </div>
          <div className="lg:text-right">
            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              <a
                href="tel:9167832110"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone className="h-4 w-4" /> (916) 783-2110
              </a>
              <ConsultationModal>
                <button className="px-4 py-2 bg-primary rounded-lg text-sm text-white font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer">
                  Free Consultation
                </button>
              </ConsultationModal>
            </div>
            {/* Social */}
            <div className="mt-6 flex gap-3 lg:justify-end">
              <a href="https://www.facebook.com/drantipov" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/drantipov" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/drantipov" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Collapsible link sections */}
        <nav aria-label="Footer navigation" className="mt-2">
          {SECTIONS.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
              isOpen={openSection === section.title}
              onToggle={() =>
                setOpenSection((prev) =>
                  prev === section.title ? null : section.title
                )
              }
            />
          ))}
        </nav>

        {/* SEO text */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[11px] text-white/30 leading-relaxed max-w-4xl">
            Dr. Alexander Antipov, DDS is a board-certified oral and maxillofacial surgeon providing dental implants, All-on-4 full arch implants, All-on-6 implants, zygomatic implants, corrective jaw surgery (orthognathic surgery), facial cosmetic surgery, rhinoplasty, face lift surgery, eyelid surgery, organic bone grafting, sinus lifts, wisdom teeth removal, and TMJ treatment in Roseville, CA. Serving patients from Sacramento, Folsom, Rocklin, El Dorado Hills, Lincoln, Auburn, Granite Bay, Elk Grove, San Francisco, Oakland, San Jose, Walnut Creek, Napa, Santa Rosa, Reno, Truckee, South Lake Tahoe, Chico, Redding, Stockton, Modesto, Fresno, and all of Northern California and Northern Nevada.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Alexander V. Antipov, DDS, Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/legal/hipaa-notice" className="hover:text-primary transition-colors">HIPAA Notice</Link>
            <Link href="/legal/medical-disclaimer" className="hover:text-primary transition-colors">Medical Disclaimer</Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
