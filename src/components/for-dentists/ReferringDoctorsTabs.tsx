"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  GraduationCap,
  Link2,
  Phone,
  Download,
  ExternalLink,
  MapPin,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react"

const ONLINE_REFERRAL_URL = "https://refer.carestack.com/?dn=antipov&templateid=272"
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=911+Reserve+Dr+Suite+150+Roseville+CA+95678"

const tabs = [
  { id: "referral-form", label: "Referral Form", icon: FileText },
  { id: "study-club", label: "Study Club", icon: GraduationCap },
  { id: "links", label: "Links of Interest", icon: Link2 },
] as const

type TabId = (typeof tabs)[number]["id"]

function ReferralFormTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4">
          Refer a Patient Online
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-3">
          Referring doctors can now refer a patient to our practice using our secure online
          referral form. The form takes just a few minutes to complete and transmits your
          patient&apos;s information directly to our office.
        </p>
        <p className="flex items-start gap-2 text-sm text-neutral-600 mb-6">
          <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>
            Patient privacy matters to us: the online form is transmitted over a secure, encrypted
            connection to protect your patient&apos;s health information.
          </span>
        </p>
        <a
          href={ONLINE_REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow hover:bg-primary-dark transition-colors"
        >
          Online Referral Form
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="border-t border-neutral-200 pt-8">
        <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">Referring Doctors</h3>
        <ul className="space-y-4 text-neutral-700 leading-relaxed">
          <li className="flex items-start gap-3">
            <Download className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>
              Prefer paper? Download our{" "}
              <a
                href="/documents/referral.pdf"
                download
                className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark"
              >
                Printable Referral Form (PDF)
              </a>{" "}
              and fax it to <a href="tel:9167832110" className="font-semibold">(916) 783-2110</a>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>
              Patients with HMO insurance plans must bring a completed insurance referral form from
              their general dentist for treatment to be covered.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>
              If your patient brings a panoramic x-ray taken within the last 6 months, we will
              waive the fee for a new panoramic image at their consultation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CalendarCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>
              We make every effort to see referred patients promptly. Because we treat surgical
              emergencies, occasional scheduling delays can occur &mdash; we appreciate your
              patience and will always keep your patient informed.
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl bg-light p-6 md:p-8">
        <p className="text-neutral-800 font-medium mb-6">
          Our mission is to partner with referring doctors to provide exceptional oral and
          maxillofacial care &mdash; returning your patients to you healthy, informed, and ready
          for the restorative phase.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="tel:9167832110"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-5 w-5" />
            (916) 783-2110
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-neutral-50 transition-colors"
          >
            <CalendarCheck className="h-5 w-5" />
            Schedule an Appointment
          </Link>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-neutral-50 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            Map &amp; Directions
          </a>
        </div>
      </div>
    </div>
  )
}

function StudyClubTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
        Sacramento Study Club
      </h2>
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
        <Image
          src="/images/blog/2014-12-05/speaker-dr-antipov-8af6f91c.jpg"
          alt="Dr. Antipov presenting a lecture at the Sacramento Study Club"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
      <p className="text-neutral-700 leading-relaxed">
        The Sacramento Study Club is an educational platform for local dental professionals,
        featuring monthly lectures and live surgery presentations hosted by Dr. Antipov. Join your
        colleagues for evidence-based discussions on implant dentistry, bone grafting, full-arch
        restoration, and complex surgical cases.
      </p>
      <div className="rounded-2xl bg-light p-6 space-y-3">
        <p className="flex items-start gap-2 text-neutral-800">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>
            Meetings are held at our office: 911 Reserve Drive, Suite #150, Roseville, CA 95678
          </span>
        </p>
        <p className="flex items-start gap-2 text-neutral-800">
          <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span>
            Preregistration is required &mdash; call{" "}
            <a href="tel:9167832110" className="font-semibold">(916) 783-2110</a> to reserve your
            seat.
          </span>
        </p>
      </div>
      <a
        href="https://sacramentostudyclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
      >
        Visit sacramentostudyclub.com
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}

const externalLinks = [
  {
    name: "American Association of Oral and Maxillofacial Surgeons",
    description:
      "The professional organization representing oral and maxillofacial surgeons in the United States.",
    href: "https://www.aaoms.org",
  },
  {
    name: "California Dental Association",
    description: "Resources, advocacy, and continuing education for California dental professionals.",
    href: "https://www.cda.org",
  },
  {
    name: "American Dental Association",
    description: "America's leading advocate for oral health and the dental profession.",
    href: "https://www.ada.org",
  },
]

function LinksTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
        Links of Interest
      </h2>
      <ul className="space-y-4">
        {externalLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl border border-neutral-200 hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              <span className="flex items-center gap-2 text-lg font-semibold text-primary">
                {link.name}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </span>
              <span className="block mt-1 text-neutral-600">{link.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ReferringDoctorsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("referral-form")
  const tabRefs = useRef<Map<TabId, HTMLButtonElement>>(new Map())

  const focusTab = (id: TabId) => {
    setActiveTab(id)
    tabRefs.current.get(id)?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next: number | null = null
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (index + 1) % tabs.length
        break
      case "ArrowUp":
      case "ArrowLeft":
        next = (index - 1 + tabs.length) % tabs.length
        break
      case "Home":
        next = 0
        break
      case "End":
        next = tabs.length - 1
        break
      default:
        return
    }
    event.preventDefault()
    focusTab(tabs[next]!.id)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-28">
        <p id="referring-resources-label" className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-3">
          Resources
        </p>
        <div
          role="tablist"
          aria-labelledby="referring-resources-label"
          aria-orientation="vertical"
          className="flex flex-row lg:flex-col gap-2 overflow-x-auto"
        >
          {tabs.map((tab, index) => {
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el)
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors text-left ${
                  active
                    ? "bg-primary text-white shadow"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                <tab.icon className="h-5 w-5 shrink-0" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </aside>

      {/* Content */}
      <div className="min-w-0">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== activeTab}
          >
            {tab.id === "referral-form" && <ReferralFormTab />}
            {tab.id === "study-club" && <StudyClubTab />}
            {tab.id === "links" && <LinksTab />}
          </div>
        ))}
      </div>
    </div>
  )
}
