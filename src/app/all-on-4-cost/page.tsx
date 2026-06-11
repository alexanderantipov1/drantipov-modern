import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "All-on-4 Cost in California — Honest Breakdown",
  description:
    "What All-on-4 dental implants actually cost in 2026: itemized breakdown, factors that affect pricing, financing options, insurance coverage. Northern California oral surgeon.",
  alternates: { canonical: "/all-on-4-cost" },
  openGraph: {
    title: "All-on-4 Cost Breakdown — California",
    description: "Honest pricing for full-arch dental implants.",
    url: `${siteConfig.url}/all-on-4-cost`,
    type: "article",
    images: [{ url: "/images/fullarch/08-final-result.jpeg", width: 1920, height: 1080, alt: "All-on-4 cost breakdown" }],
  },
};

const faqs = [
  { question: "Why does All-on-4 cost so much?", answer: "All-on-4 includes: surgical placement of 4 implants, immediate temporary prosthesis the same day, 3D CT planning, IV sedation, a custom-milled final prosthesis (usually zirconia), and multiple follow-up visits over 6-12 months. The implant components alone (Nobel Biocare or Straumann) cost the practice $1,500-$3,000 per arch. The total reflects both materials and skilled labor over a year of treatment." },
  { question: "Can I split the procedure between arches?", answer: "Yes. Many patients treat the upper arch first, then the lower 6-12 months later. This spreads cost and recovery time. Combined treatment of both arches at the same surgery often qualifies for a discount." },
  { question: "Does insurance cover any of this?", answer: "Most dental insurance has annual maximums of $1,500-$3,000 and may cover the extraction phase only. Medical insurance occasionally covers components related to functional rehabilitation. We help verify your specific policy at no charge." },
  { question: "What financing is available?", answer: "We work with CareCredit and Lending Club. Plans start at $99/month with promotional periods of 0% interest for 18-24 months. Larger loans extend up to 84 months. We can pre-qualify you during consultation." },
  { question: "Is the cheapest All-on-4 a good deal?", answer: "Be cautious of pricing below $20,000 per arch. Look for: brand of implants used (avoid generic), surgeon's board certification, whether the price includes bone grafting if needed, what the final prosthesis is made of (acrylic ages poorly, zirconia lasts 20+ years), and whether follow-up care is included." },
];

const costItems = [
  { item: "4 dental implants (premium brand)", range: "$1,500 – $3,000", note: "Nobel Biocare, Straumann, or equivalent. Includes warranty." },
  { item: "Surgical placement & IV sedation", range: "$6,000 – $9,000", note: "Surgeon time, anesthesia, surgical suite, instruments." },
  { item: "3D CT planning & surgical guide", range: "$800 – $1,500", note: "Pre-surgical digital workflow." },
  { item: "Immediate temporary prosthesis", range: "$2,500 – $4,500", note: "Worn for 3-6 months while implants integrate." },
  { item: "Final prosthesis (zirconia)", range: "$8,000 – $15,000", note: "Custom-milled, lasts 20+ years." },
  { item: "Tooth extractions (if needed)", range: "$200 – $600 per tooth", note: "Often performed simultaneously with implants." },
  { item: "Bone grafting (if needed)", range: "$1,000 – $4,000", note: "Sometimes avoidable with angled or zygomatic implants." },
  { item: "Follow-up visits & maintenance", range: "Included", note: "First year of care typically bundled." },
];

const factors = [
  "Whether one or both arches are being treated",
  "Number of teeth requiring extraction",
  "Whether bone grafting is needed",
  "Brand of implants and prosthesis material",
  "Sedation type (local, IV, or general anesthesia)",
  "Complexity of the case (e.g., severe atrophy may require zygomatic implants)",
  "Geographic location (Northern California pricing is mid-range vs coastal areas)",
];

export default function AllOn4CostPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "All-on-4 Cost", url: `${siteConfig.url}/all-on-4-cost` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/fullarch/08-final-result.jpeg" alt="All-on-4 cost" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">All-on-4 Cost</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Honest pricing</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            All-on-4 cost in California — what you actually pay
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Itemized breakdown of what's included, what's optional, and where the money goes. No bundled hidden fees. No sales pressure.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary-light/20 backdrop-blur-sm border border-primary-light/30 px-6 py-3">
            <span className="text-3xl font-bold">$22K – $40K</span>
            <span className="text-sm text-white/80 max-w-xs">typical total per arch with Dr. Antipov, including premium materials and one year of follow-up care</span>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-3">Itemized breakdown</h2>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
            What goes into the total cost of a single arch All-on-4 procedure. These are typical ranges in Northern California; your exact quote depends on your case.
          </p>
          <div className="rounded-3xl border border-neutral-200 shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-left p-5 font-bold">Component</th>
                  <th className="text-left p-5 font-bold">Typical range</th>
                  <th className="text-left p-5 font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="p-5 font-semibold text-neutral-900 align-top">{c.item}</td>
                    <td className="p-5 font-bold text-primary-600 align-top whitespace-nowrap">{c.range}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-6">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Factors that change your quote</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {factors.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <svg className="h-6 w-6 shrink-0 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700 leading-7">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Financing makes it accessible</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">$99</p>
              <p className="text-sm text-neutral-600">/month starting</p>
              <p className="mt-4 font-bold text-neutral-900">CareCredit</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">Promotional periods of 0% interest for 18-24 months on qualifying balances.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">84 mo</p>
              <p className="text-sm text-neutral-600">extended terms</p>
              <p className="mt-4 font-bold text-neutral-900">Lending Club</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">Larger loans up to 7-year terms. Fixed rates based on credit profile.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">5%</p>
              <p className="text-sm text-neutral-600">prepay discount</p>
              <p className="mt-4 font-bold text-neutral-900">Cash / check</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">5% discount on cases paid in full before treatment begins.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-neutral-600 text-sm">
            See full details on <Link href="/insurance" className="text-primary-600 hover:underline font-semibold">our insurance and financing page</Link>.
          </p>
        </div>
      </section>

      {/* Expanded SEO content — what's included, financing, factors */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
            What is actually included in the All-on-4 price
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            The number you should care about is the <strong>all-inclusive arch price</strong> — the total
            cost from consultation to a permanent prosthesis in your mouth. A line-item All-on-4 fee at our
            practice covers:
          </p>
          <ul className="space-y-3 text-neutral-700 text-base leading-relaxed list-disc pl-6 mb-10">
            <li><strong>3D CT scan and virtual surgical planning</strong> — included, no separate diagnostic fee.</li>
            <li><strong>Pre-surgical extractions</strong> of any remaining failing teeth (some practices charge $200–$500 per tooth on top of the implant fee).</li>
            <li><strong>4 to 6 titanium implants</strong> per arch, premium brand (Neodent, Nobel Biocare, or Straumann depending on the case).</li>
            <li><strong>Custom navigation guide</strong> for precise implant placement.</li>
            <li><strong>IV sedation</strong> performed by the surgeon (no separate anesthesiologist fee).</li>
            <li><strong>Same-day fixed temporary prosthesis</strong> (PMMA / acrylic) attached to the implants on the day of surgery.</li>
            <li><strong>Permanent prosthesis</strong> — zirconia or titanium-reinforced PMMA — delivered 4–6 months later after osseointegration.</li>
            <li><strong>Follow-up visits at days 7, 30, 90 and 6 months</strong> plus a 12-month integration check.</li>
          </ul>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Compare this to the &ldquo;teaser&rdquo; pricing you may see advertised at $9,995 per arch — that
            figure typically excludes extractions, the final prosthesis, sedation, and follow-up care. When
            those are added, the true all-in cost lands in the same $25K–$35K range as a transparent quote.
          </p>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-16 mb-8">
            Financing &amp; insurance — the honest version
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Most U.S. dental insurance plans treat All-on-4 the same way they treat dentures: they reimburse
            the &ldquo;denture equivalent&rdquo; portion, typically $1,500–$3,000 per arch. The implant
            placement portion is usually <em>not</em> covered by dental insurance. A handful of medical
            plans cover oral surgery components if there is a documented medical necessity (severe
            edentulism, post-trauma reconstruction, post-oncology) — we provide the documentation needed
            for those claims.
          </p>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            For the patient-paid portion, we work with{" "}
            <a href="https://www.carecredit.com/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">CareCredit</a>,{" "}
            <a href="https://www.lendingclub.com/patient-solutions" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">LendingClub Patient Solutions</a>{" "}
            and{" "}
            <a href="https://www.proceedfinance.com/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">Proceed Finance</a>{" "}
            for monthly payment plans starting around <strong>$99/month</strong> with terms up to 84 months.
            Patients with strong credit qualify for 0% promotional APR periods on shorter terms (typically
            6–24 months).
          </p>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-16 mb-8">
            Why prices vary between practices
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            The most common reasons one All-on-4 quote is $18,000 and another is $45,000:
          </p>
          <ul className="space-y-3 text-neutral-700 text-base leading-relaxed list-disc pl-6 mb-6">
            <li><strong>Surgeon credentials.</strong> A general dentist placing implants typically charges
              less than a board-certified oral and maxillofacial surgeon (Diplomate, ABOMS), but case
              complexity and complication-rate differ accordingly.</li>
            <li><strong>Implant brand.</strong> Premium brands (Nobel, Straumann, Neodent) cost the
              practice 2–4× more than generic implants but have decades of peer-reviewed outcome data.</li>
            <li><strong>Prosthesis material.</strong> Zirconia ($5,000+ premium over acrylic) is more
              durable, more esthetic, and lasts 15–25 years versus 5–10 for acrylic.</li>
            <li><strong>Anesthesia type.</strong> IV sedation delivered by the surgeon adds $800–$1,500.
              General anesthesia in a hospital OR adds $3,000–$5,000.</li>
            <li><strong>Pre-surgical work.</strong> Sinus lift, bone grafting, zygomatic implants for severe
              atrophy — each adds $2,000–$8,000 depending on scope.</li>
            <li><strong>Geography.</strong> Major coastal metros (SF, NY, LA, Seattle) run 20–30% above the
              U.S. median; rural Midwest runs 15–25% below.</li>
          </ul>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            When you compare quotes, ask for an itemized breakdown and confirm what is and is not included.
            A free consultation and CT scan at our Roseville office gives you a firm written quote with no
            surprises later.
          </p>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Frequently asked</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="group rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm">
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

      <DualCTA />
    </>
  );
}
