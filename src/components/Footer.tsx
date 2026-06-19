"use client";

import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const footerLinks = [
  {
    title: "Dental Implant Services",
    links: [
      "All-on-4 Dental Implants",
      "All-on-6 Dental Implants",
      "Zygomatic Implants",
      "Single Tooth Implants",
      "Implant-Supported Bridge",
      "Snap-On Dentures",
      "Same-Day Teeth",
      "Full Mouth Reconstruction",
    ],
  },
  {
    title: "Surgical Services",
    links: [
      "Corrective Jaw Surgery",
      "Orthognathic Surgery",
      "Bone Grafting",
      "Organic Bone Grafting",
      "Sinus Lift Surgery",
      "Wisdom Teeth Removal",
      "TMJ Treatment",
      "Sleep Apnea Surgery",
    ],
  },
  {
    title: "Facial Cosmetics",
    links: [
      "Rhinoplasty",
      "Face Lift Surgery",
      "Eyelid Surgery",
      "Double Eyelid Surgery",
      "Facial Feminization",
      "Mole Removal",
      "Juvederm Fillers",
      "Lip Augmentation",
    ],
  },
  {
    title: "Patient Info",
    links: [
      "Free Consultation",
      "Financing Options",
      "Patient Forms",
      "Insurance Info",
      "Virtual Consultation",
      "Meet Dr. Antipov",
      "Office Tour",
      "Referring Doctors",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS — Oral and Maxillofacial Surgery — Roseville, CA"
              width={180}
              height={60}
              className="h-10 w-auto brightness-200 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Board-certified oral &amp; maxillofacial surgeon specializing in same-day dental implants (All-on-4, All-on-6, zygomatic), full arch restoration, corrective jaw surgery, organic bone grafting, facial cosmetic surgery, and wisdom teeth removal. Serving Roseville, Sacramento, San Francisco, Reno, and all of Northern California.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="tel:9167909693"
                className="px-4 py-2 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-primary hover:text-white transition-all duration-300"
              >
                (916) 790-9693
              </a>
              <ConsultationModal>
                <button
                  className="px-4 py-2 bg-primary rounded-lg text-sm text-white font-medium hover:bg-primary-dark transition-all duration-300 cursor-pointer"
                >
                  Free Consultation
                </button>
              </ConsultationModal>
            </div>
            {/* Social */}
            <div className="mt-6 flex gap-3">
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

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-xs hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">HIPAA Notice</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
