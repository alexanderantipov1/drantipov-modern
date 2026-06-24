import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "All-on-4: Independent Surgeon vs Corporate Chains",
  description:
    "Compare All-on-4 options in Northern California: an independent board-certified oral surgeon vs corporate dental implant chains. Pricing transparency, surgeon experience, and treatment philosophy.",
  alternates: { canonical: "/all-on-4-clearchoice-alternative" },
  openGraph: {
    title: "All-on-4 Alternatives in Northern California",
    description: "Independent board-certified surgeon vs corporate chains — what differs.",
    url: `${siteConfig.url}/all-on-4-clearchoice-alternative`,
    type: "article",
    images: [{ url: "/images/fullarch/08-final-result.jpeg", width: 1920, height: 1080, alt: "All-on-4 alternatives comparison" }],
  },
};

const faqs = [
  { question: "Why are corporate dental implant chains so expensive?", answer: "Corporate chains typically charge $35,000-$60,000+ per arch. Their pricing reflects overhead for sales teams, national marketing, multiple locations, and frequent staff turnover. Independent oral surgeons often charge 30-50% less because they don't carry that overhead structure." },
  { question: "Will I see the same surgeon for every visit?", answer: "At Dr. Antipov's practice, you see Dr. Antipov for every surgical step — consultation, surgery, follow-ups. At corporate chains, you may see different surgeons or be transferred between locations during your treatment journey." },
  { question: "What credentials should an All-on-4 surgeon have?", answer: "Look for: Diplomate of the American Board of Oral and Maxillofacial Surgery (ABOMS), state-issued General Anesthesia Permit for in-office sedation, hospital privileges for medical emergencies, and 5+ years of experience specifically with full-arch protocols." },
  { question: "Can I get an exact price before committing?", answer: "Yes. Dr. Antipov provides a complete written treatment plan with itemized pricing after your free dental implant consultation with 3D CT. There are no high-pressure sales tactics, no separate financial advisors, and no 'today-only' discounts." },
  { question: "What if I need bone grafting?", answer: "Independent surgeons handle bone grafting in-house if needed. Many chains either refer out (extra cost and coordination) or upsell elaborate grafting plans. Dr. Antipov is fellowship-trained in advanced bone reconstruction and often achieves implant placement without grafting using angled or zygomatic implants." },
];

const compareRows = [
  { feature: "Surgeon credentials", drAntipov: "Board-certified OMS (ABOMS Diplomate), 25+ years, 10,000+ surgeries", chain: "Varies by location; some surgeons may be newer in practice or rotate between offices" },
  { feature: "Consultation experience", drAntipov: "Free 3D CT scan and personal consultation with the surgeon. No sales pressure.", chain: "Often includes a 'treatment consultant' or financial advisor; high-pressure same-day decisions are common" },
  { feature: "Pricing transparency", drAntipov: "Itemized written estimate after consultation. No surprise fees.", chain: "Bundle pricing — what's included and excluded can be unclear. Often $35,000-$60,000+ per arch." },
  { feature: "Who does your surgery", drAntipov: "Dr. Antipov performs every step personally", chain: "Multiple surgeons may be involved; you may not meet your surgeon before surgery day" },
  { feature: "Long-term follow-up", drAntipov: "Same practice, same surgeon for life of the implants", chain: "Locations may close, staff may rotate; continuity of care can be disrupted" },
  { feature: "Hospital privileges", drAntipov: "Sutter Roseville, Sutter General, Mercy General, Mercy San Juan", chain: "Varies by location" },
  { feature: "Russian / Spanish bilingual care", drAntipov: "Yes — Russian native speaker, Spanish-speaking staff", chain: "Limited at most locations" },
  { feature: "Same-day teeth (immediate load)", drAntipov: "Yes — standard protocol", chain: "Yes — standard protocol" },
  { feature: "Advanced cases (zygomatic, severe atrophy)", drAntipov: "Fellowship-trained in zygomatic implants and complex reconstruction", chain: "May refer out or upsell extensive grafting" },
  { feature: "Insurance approach", drAntipov: "Help with PPO claims and pre-authorization; transparent about coverage limits", chain: "Often out-of-network; financing emphasis" },
];

export default function AllOn4AlternativesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "All-on-4 Alternatives", url: `${siteConfig.url}/all-on-4-clearchoice-alternative` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/fullarch/08-final-result.jpeg" alt="All-on-4 alternatives" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">All-on-4 Alternatives</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Independent surgeon vs corporate chains</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Considering ClearChoice or other implant chains?
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Here&apos;s what to compare before you commit: surgeon credentials, pricing transparency, who actually performs your surgery, and what happens 5 years later when something needs adjustment.
          </p>
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-900 text-sm leading-7">
            <strong>An honest note:</strong> Corporate dental implant chains have helped millions of patients restore their smiles. This page isn&apos;t about putting them down — it&apos;s about helping you compare so you can make an informed decision. Some patients prefer the structured, marketing-led experience of a chain; others prefer the surgeon-led continuity of an independent practice. Both can produce excellent results in skilled hands.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Side-by-side comparison
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              The factors that matter most to All-on-4 outcomes — and how Dr. Antipov&apos;s practice approaches them.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-xl">
            <table className="w-full">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-left p-5 font-bold">Factor</th>
                  <th className="text-left p-5 font-bold bg-primary-700">Dr. Antipov (Independent OMS)</th>
                  <th className="text-left p-5 font-bold">Corporate implant chain</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="p-5 font-bold text-neutral-900 align-top">{r.feature}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-7 bg-primary-50/50">{r.drAntipov}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-7">{r.chain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost narrative */}
      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center">The honest truth about pricing</h2>
          <div className="mt-10 space-y-6 text-lg leading-8 text-neutral-700">
            <p>
              Corporate dental implant chains typically price All-on-4 in the range of <strong>$35,000 to $60,000 per arch</strong>. That price reflects national advertising budgets, sales-team overhead, multiple-location infrastructure, and bundled financing terms.
            </p>
            <p>
              An independent board-certified surgeon delivering the same procedure to the same clinical standard often charges <strong>$22,000 to $40,000 per arch</strong> — a 30-50% savings — without compromising on materials (premium zirconia prostheses, Nobel Biocare or Straumann implants), surgical protocol (3D-planned, immediate load), or follow-up care.
            </p>
            <p>
              The difference isn&apos;t in clinical quality. It&apos;s in business structure. A surgeon-owned practice eliminates layers of corporate overhead.
            </p>
            <p>
              We&apos;re happy to provide a complete itemized quote at your free dental implant consultation. <Link href="/insurance" className="text-primary-600 hover:underline font-semibold">Financing options</Link> are available starting at <strong>$99/month</strong> through CareCredit and Lending Club.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="group rounded-2xl border border-neutral-200 bg-light px-6 py-4 shadow-sm">
                <summary className="cursor-pointer font-bold text-neutral-900 list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="leading-7 text-neutral-700 mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">Keep researching your options</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/all-on-4-cost" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Pricing</p>
            <h3 className="font-bold text-neutral-900 leading-snug">All-on-4 cost breakdown</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">What full-arch implants actually cost and what drives the price.</p>
          </Link>
          <Link href="/expertise/full-arch-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Procedure</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Full-arch implant treatment</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">How fixed full-arch restoration works from consultation to final teeth.</p>
          </Link>
          <Link href="/surgical-cases/dental-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Results</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Dental implant case gallery</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Real before-and-after full-arch and single-tooth outcomes.</p>
          </Link>
        </div>
      </section>

      <DualCTA variant="implants" />
    </>
  );
}
