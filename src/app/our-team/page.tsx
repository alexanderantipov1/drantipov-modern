import { Section, Container } from "@/components/sections"
import Link from "next/link"
import Image from "next/image"
import {
  Award,
  GraduationCap,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Heart,
  BookOpen,
  Building2,
  Globe2,
  Palette,
  Trophy,
} from "lucide-react"
import PageHero from "@/components/PageHero"
import DualCTA from "@/components/DualCTA"
import PracticePhilosophy from "@/components/PracticePhilosophy"
import { StatPill } from "@/components/our-team/StatPill"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Timeline } from "@/components/our-team/Timeline"
import { CEAccordion } from "@/components/our-team/CEAccordion"
import { Reveal } from "@/components/our-team/Reveal"
import {
  getAntipovPersonSchema,
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Our Surgical Team — Dr. Antipov & Dr. Kahwach" },
  description: "25+ years of combined surgical experience, board certification, and five hospital privileges. Meet the team at Galleria Oral Surgery.",
  alternates: {
    canonical: "/our-team",
    languages: {
      "x-default": "https://drantipov.com/our-team",
      en: "https://drantipov.com/our-team",
    },
  },
  openGraph: {
    title: "Our Surgical Team — Dr. Antipov & Dr. Kahwach",
    description:
      "Two board-certified oral and maxillofacial surgeons serving Roseville and Northern California with hospital privileges at Sutter and Mercy.",
    url: "/our-team",
    type: "website",
    images: [
      {
        url: "/images/Antipov_white.jpg",
        width: 1016,
        height: 1400,
        alt: "Dr. Alexander V. Antipov, DDS — Board-Certified Oral & Maxillofacial Surgeon, Roseville CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Surgical Team — Dr. Antipov & Dr. Kahwach",
    description: "Meet the surgeons of Galleria Oral & Facial Surgery — Roseville, California.",
    images: ["/images/Antipov_white.jpg"],
  },
}

// ────────────────────────────────────────────────────────────────────
// CV DATA — derived from alexander_antipov_cv.pdf
// ────────────────────────────────────────────────────────────────────

const educationItems = [
  {
    year: "1995 – 2000",
    title: "Master Degree",
    subtitle: "Moscow State Medical Stomatology University",
    description: "Russian Federation. Foundational medical and dental training at one of Russia's premier stomatology institutions.",
  },
  {
    year: "2001 – 2003",
    title: "Doctor of Dental Surgery (DDS)",
    subtitle: "Loma Linda University, School of Dentistry",
    description: "Earned his American DDS at one of California's most respected dental schools.",
  },
  {
    year: "2007 – 2008",
    title: "Oral & Maxillofacial Surgery Residency",
    subtitle: "Albert Einstein College of Medicine, Yeshiva University, Department of Dentistry",
    description: "Completed OMS residency in New York — the foundation for full-scope surgical practice.",
  },
]

const careerItems = [
  {
    year: "2008 – Present",
    title: "Owner, Medical Director & Oral Surgeon",
    subtitle: "Private Practice — Roseville, California",
    description: "Founded the Roseville practice in 2008 and has personally performed every surgery since.",
  },
  {
    year: "2008 – 2012",
    title: "Contracted Oral Surgeon",
    subtitle: "Pacific Dental Services — Sacramento, California",
  },
  {
    year: "2009 – Present",
    title: "Contracted Oral Surgeon",
    subtitle: "California Department of Corrections and Rehabilitation — Folsom, California",
    description: "Providing oral surgical care in a correctional medical setting since 2009.",
  },
  {
    year: "2009 – Present",
    title: "Contracted Oral Surgeon",
    subtitle: "Sacramento State Prison — Sacramento, California",
  },
  {
    year: "2025 – Present",
    title: "Founder & Director",
    subtitle: "Smile Again Foundation",
    description: "Launched a nonprofit dedicated to expanding access to restorative dental care and mission-driven patient support.",
  },
]

const hospitalPrivileges = [
  { name: "Sutter Roseville Medical Center", note: "Roseville, CA" },
  { name: "Sutter General Hospital", note: "Sacramento, CA" },
  { name: "Mercy General Hospital", note: "Sacramento, CA" },
  { name: "Mercy San Juan Medical Center", note: "Carmichael, CA" },
  { name: "Galleria Oral & Maxillofacial Surgery", note: "Roseville, CA" },
]

const certifications = [
  { label: "California Dental License", value: "#50724" },
  { label: "DEA Certificate", value: "#FA 0689717" },
  { label: "General Anesthesia Permit", value: "#GA 1446" },
  { label: "Elective Facial Cosmetic Surgery Permit", value: "California" },
  { label: "Continuing Education Registered Provider", value: "#00948675" },
  { label: "Diplomate, ABOMS", value: "Board-Certified" },
  { label: "Life Support Network", value: "Active" },
  { label: "CPR / BLS Certified", value: "Active" },
]

const memberships = [
  {
    group: "National",
    items: [
      "American Board of Oral & Maxillofacial Surgery (ABOMS) — Diplomate",
      "American Association of Oral & Maxillofacial Surgeons (AAOMS)",
      "American Dental Association (ADA)",
    ],
  },
  {
    group: "State",
    items: [
      "California Association of Oral & Maxillofacial Surgeons (CALAOMS)",
      "California Dental Association (CDA)",
    ],
  },
  {
    group: "Local",
    items: [
      "Sacramento District Dental Society (SDDS)",
    ],
  },
]

const continuingEducation = [
  "Arnett Orthognathic Surgery Forum",
  "What's New in Local Anesthesia",
  "Protocols of Care in Treating Patients with Clefts",
  "Medicine for the OMS Patient and You",
  "Site Augmentation for Advanced and Complex Implant Care",
  "Principles of Attachment Selection for Implant Supported Overdenture",
  "Full Arch Immediate-Load Fixed Prosthetic Rehabilitation",
  "Esthetic Zone Reconstruction",
  "Alveolar Bone Grafting: The Evidence",
  "Horizontal Augmentation Through the Ridge-Split Procedure",
  "Immediate Provisionalization of Dental Implants",
  "Management of Complications in the Edentulous Patient",
  "Digital Implant Dentistry: Impression-Free Implant Planning",
  "Avoiding and Managing Complications in Esthetic Implant Therapy",
  "Esthetic Soft Tissue Management A to Z",
  "Periodontal Plastic Surgery for the Implant Patient",
  "Anesthesia Update for the Oral & Maxillofacial Surgeon",
  "Observational Surgery Preceptorship in Cosmetic Facial Surgery — face lift, blepharoplasty, brow lift, facial liposuction, facial implants, neurotoxins, injectable fillers, CO2 laser resurfacing, chemical peels, radiowave surgery, and skin care",
  "What Hygienists Should Know",
]

const kahwachHighlights = [
  { icon: GraduationCap, label: "DDS, University of California, San Francisco (Honors)" },
  { icon: Stethoscope, label: "MD & OMS Residency, Loma Linda University — with advanced anesthesia training" },
  { icon: Palette, label: "Background in painting and sculpture informs surgical precision and aesthetics" },
  { icon: Globe2, label: "Medical & dental mission work across Europe, Africa, the Caribbean, and the Middle East" },
]

// ────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────

export default function OurTeamPage() {
  const structuredData = [
    getAntipovPersonSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Our Team", url: `${siteConfig.url}/our-team` },
    ]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      {/* ============================================================ */}
      {/* HERO with stats + photo background                           */}
      {/* ============================================================ */}
      <section className="relative text-white py-10 lg:py-14 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing-pages/dental-implants/art/slider03-00325586.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Our Team</li>
            </ol>
          </nav>
          <Reveal>
            <span className="inline-block text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Our Surgical Team
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              Two Surgeons.
              <br />
              <span className="text-primary">One Standard of Care.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Galleria Oral &amp; Facial Surgery is led by{" "}
              <strong className="text-white">Dr. Alexander V. Antipov, DDS</strong> —
              Diplomate of the American Board of Oral &amp; Maxillofacial Surgery — and joined by{" "}
              <strong className="text-white">Dr. André-David Kahwach, DDS, MD</strong>.
              Combined: 25+ years of full-scope surgical experience, five hospital privileges, and dual-degree
              training.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <StatPill icon={<Trophy className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={25} suffix="+" />} label="Years in Practice" delay={0.3} />
            <StatPill icon={<ShieldCheck className="h-5 w-5 text-primary" />} value="ABOMS" label="Board-Certified" delay={0.35} />
            <StatPill icon={<Hospital className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={5} />} label="Hospital Privileges" delay={0.4} />
            <StatPill icon={<Award className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={6} />} label="Professional Memberships" delay={0.45} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Practice Philosophy                                          */}
      {/* ============================================================ */}
      <PracticePhilosophy />

      {/* ============================================================ */}
      {/* Dr. Antipov — main feature                                   */}
      {/* ============================================================ */}
      <Section background="default" padding="md" id="dr-antipov">
        <Container size="lg">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[12fr_13fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Antipov_white.jpg"
                    alt="Dr. Alexander V. Antipov, DDS — Founder, Galleria Oral & Facial Surgery"
                    width={1016}
                    height={1400}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6">
                    <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                      Diplomate · ABOMS
                    </p>
                    <p className="text-white font-serif text-xl font-bold mt-1">
                      Dr. Alexander V. Antipov, DDS
                    </p>
                  </div>
                </div>

                {/* Signature line */}
                <div className="mt-6 flex items-center gap-3 px-2">
                  <span className="h-px flex-1 bg-primary/30" />
                  <span className="font-signature text-3xl text-primary">Dr. Antipov</span>
                  <span className="h-px flex-1 bg-primary/30" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">
                    Founder · Oral &amp; Maxillofacial Surgeon
                  </p>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                    Dr. Alexander V. Antipov, DDS
                  </h2>
                </div>

                <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Dr. Antipov has practiced full-scope oral and maxillofacial surgery in Roseville,
                    California since <strong>2008</strong>. A Diplomate of the American Board of Oral
                    and Maxillofacial Surgery, his training spans three countries and three of the most
                    respected institutions in dentistry and medicine — <strong>Albert Einstein College
                    of Medicine</strong>, <strong>Loma Linda University</strong>, and <strong>Moscow
                    State Medical Stomatology University</strong>.
                  </p>
                  <p>
                    His practice covers the full scope of OMS — dental implants and full-arch
                    restoration (All-on-4 / All-on-X), corrective jaw surgery, sleep apnea surgery,
                    bone grafting, facial trauma, and facial cosmetic procedures. He holds hospital
                    privileges at five Northern California institutions, a California General Anesthesia
                    Permit for in-office IV sedation, and an Elective Facial Cosmetic Surgery Permit.
                  </p>
                  <p>
                    In <strong>2025</strong>, Dr. Antipov founded the{" "}
                    <strong>Smile Again Foundation</strong>, a nonprofit dedicated to expanding access
                    to restorative dental care for patients who would otherwise go without.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/our-team"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Read Full Bio
                  </Link>
                  <a
                    href="tel:9167832110"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white border-2 border-navy/10 text-navy rounded-xl font-semibold hover:bg-navy/5 transition-all"
                  >
                    Call (916) 783-2110
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* Education timeline                                           */}
      {/* ============================================================ */}
      <section className="py-10 bg-bone/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                Education
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                Three countries. Three of the most respected institutions in dental medicine.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Timeline items={educationItems} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Hospital privileges                                          */}
      {/* ============================================================ */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <Hospital className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                Hospital &amp; Clinical Privileges
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                Surgical access at five Northern California institutions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hospitalPrivileges.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.05}>
                <div className="h-full bg-white border border-neutral-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Hospital className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 leading-snug">{h.name}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{h.note}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Licenses & Certifications                                    */}
      {/* ============================================================ */}
      <section className="py-10 bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                Licenses &amp; Certifications
              </h2>
              <p className="mt-4 text-white/75 text-lg max-w-2xl mx-auto">
                Every permit, certification, and license verifiable on public record.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.04}>
                <div className="h-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 hover:border-primary/50 transition-all">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-semibold leading-snug">
                    {c.label}
                  </p>
                  <p className="mt-2 text-white font-bold text-lg break-all">{c.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Professional Memberships                                     */}
      {/* ============================================================ */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                Professional Memberships
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                Active in six national, state, and local professional associations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((m, i) => (
              <Reveal key={m.group} delay={i * 0.08}>
                <div className="h-full bg-bone/30 border border-neutral-200 rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
                    {m.group}
                  </p>
                  <ul className="space-y-3">
                    {m.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-neutral-700 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Career Timeline                                              */}
      {/* ============================================================ */}
      <section className="py-10 bg-bone/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                Professional Experience
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                Private practice, hospital systems, correctional medical care, and philanthropy.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <Timeline items={careerItems} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Smile Again Foundation feature                               */}
      {/* ============================================================ */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-bone/40 border-2 border-primary/20 rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
                    Philanthropy · Est. 2025
                  </p>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                    Smile Again Foundation
                  </h2>
                  <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
                    In 2025, Dr. Antipov founded and now directs the Smile Again Foundation — a nonprofit
                    dedicated to expanding access to restorative dental care for patients who would
                    otherwise go without. The foundation focuses on mission-driven patient support and
                    practical pathways back to oral health.
                  </p>
                  <p className="mt-4 text-neutral-600 italic">
                    "Surgery should restore more than function. It should restore the confidence to
                    smile again."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Continuing Education accordion                               */}
      {/* ============================================================ */}
      <section className="py-10 bg-bone/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                Advanced &amp; Continuing Education
              </h2>
              <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                Selected advanced training and continuing-education courses completed over the
                course of practice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CEAccordion courses={continuingEducation} />
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Dr. Kahwach                                                  */}
      {/* ============================================================ */}
      <Section background="default" padding="md" id="dr-kahwach">
        <Container size="lg">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2 lg:order-2">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dr-kahwach-v3.jpg"
                    alt="Dr. André-David Kahwach, DDS, MD — Oral & Maxillofacial Surgeon"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6">
                    <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                      DDS · MD · OMS
                    </p>
                    <p className="text-white font-serif text-xl font-bold mt-1">
                      Dr. André-David Kahwach
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 lg:order-1 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">
                    Oral &amp; Maxillofacial Surgeon
                  </p>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                    Dr. André-David Kahwach, DDS, MD
                  </h2>
                </div>

                <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    Dr. Kahwach brings a unique blend of surgical excellence, artistic vision, and global
                    perspective to oral and maxillofacial surgery. He earned his dental degree{" "}
                    <strong>with honors from UC San Francisco</strong> before completing his OMS training at{" "}
                    <strong>Loma Linda University</strong>, where he also obtained his medical degree
                    (MD) and advanced training in anesthesia.
                  </p>
                  <p>
                    With a passion for the full scope of oral and maxillofacial surgery, Dr. Kahwach is
                    committed to delivering exceptional care across cosmetic procedures, dental implants,
                    facial trauma, and orthognathic surgery. His approach combines precision with
                    creativity — an influence shaped not only by his surgical training, but also by his
                    background in painting and sculpture.
                  </p>
                  <p>
                    Beyond the operating room, Dr. Kahwach has traveled extensively across Europe,
                    Africa, the Caribbean, and the Middle East, strengthening his dedication to service
                    through medical and dental mission work.
                  </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {kahwachHighlights.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-sm text-neutral-700 leading-snug"
                    >
                      <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://www.galleriaoms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Visit galleriaoms.com →
                  </a>
                  <a
                    href="tel:9167832110"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white border-2 border-navy/10 text-navy rounded-xl font-semibold hover:bg-navy/5 transition-all"
                  >
                    Call (916) 783-2110
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* Dual CTA                                                     */}
      {/* ============================================================ */}
      <DualCTA
        variant="dual"
        heading="Two Surgeons. Two Practices. One Team."
        subheading="Schedule a free consultation with a complimentary 3D CT scan and personalized treatment plan."
      />
    </>
  )
}
