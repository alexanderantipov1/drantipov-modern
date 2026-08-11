import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: { absolute: "Jaw Surgery Recovery Timeline: A Week-by-Week Guide" },
  description:
    "Complete jaw surgery recovery timeline guide from the first 24 hours through 12 months. Learn what to expect during full bone consolidation & healing.",
  alternates: { canonical: "/jaw-surgery-recovery-timeline" },
  openGraph: {
    title: "Jaw Surgery Recovery — Week by Week",
    description: "Detailed recovery timeline after orthognathic surgery.",
    url: `${siteConfig.url}/jaw-surgery-recovery-timeline`,
    type: "article",
    images: [{ url: "/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg", width: 1920, height: 1080, alt: "Jaw surgery recovery" }],
  },
};

const faqs = [
  { question: "When can I return to work after jaw surgery?", answer: "Most desk workers return at 2-3 weeks. Physical labor jobs require 4-6 weeks. We provide work clearance notes individualized to your specific surgery and recovery progress." },
  { question: "How long until I can eat normal food?", answer: "Liquid diet: 1-2 weeks. Soft/mushy diet: weeks 3-6. Soft chewables (pasta, scrambled eggs): weeks 6-8. Most foods: weeks 8-12. Hard or crunchy foods (raw vegetables, nuts): only after week 12 with surgeon clearance." },
  { question: "Does my jaw get wired shut?", answer: "Rarely with modern technique. Most patients have elastics (rubber bands) connecting upper and lower teeth that guide healing but allow speaking and limited movement. Elastics are removable for cleaning." },
  { question: "Will my face look different?", answer: "Yes — that's the point. The changes are typically subtle but improve facial harmony. Initial swelling (peaks days 2-4) hides the final result for the first 2-3 weeks. Final result is visible at 3-6 months as residual swelling fully resolves." },
  { question: "Is the recovery painful?", answer: "Most patients report less pain than expected. Pain is well-controlled with prescription medications for the first 5-7 days, then over-the-counter for another week. The bigger challenges are numbness (temporary), swelling, and dietary restrictions." },
];

const phases = [
  {
    phase: "First 24-48 hours",
    icon: "🏥",
    points: [
      "Hospital stay: typically overnight for monitoring",
      "Significant swelling begins (peaks days 2-4)",
      "IV pain medication, transitioning to oral",
      "Ice packs every hour while awake (20 on, 20 off)",
      "Strict liquid diet — broths, protein shakes, smoothies",
      "Head elevated 30°+ for sleeping",
    ],
  },
  {
    phase: "Days 3-7",
    icon: "🛌",
    points: [
      "Discharged home — recovery continues at home",
      "Swelling at maximum (days 3-5), then begins to subside",
      "Numbness in lips, cheeks, chin is normal and expected",
      "Liquid + pureed soft diet (yogurt, applesauce, pudding)",
      "Gentle salt water rinses 4-6× daily after meals",
      "Most patients can manage daily activities by day 5-7",
    ],
  },
  {
    phase: "Weeks 2-3",
    icon: "📚",
    points: [
      "Most desk workers return to work at week 2-3",
      "Swelling 50% resolved — face looks closer to normal",
      "Some numbness persists (most resolves by 6 months)",
      "Soft foods only — mashed potatoes, scrambled eggs, fish",
      "First post-op X-ray and elastics adjustment",
      "Light walking and gentle exercise OK",
    ],
  },
  {
    phase: "Weeks 4-6",
    icon: "🏃",
    points: [
      "Resume light cardio, no contact sports yet",
      "Bone is healing — alignment is stabilizing",
      "Soft solids: pasta, soft bread, well-cooked vegetables",
      "Elastics may decrease in tension as bite stabilizes",
      "Numbness continues to resolve (sensation returning)",
      "Energy levels back to normal",
    ],
  },
  {
    phase: "Weeks 6-12",
    icon: "🍽️",
    points: [
      "Gradual return to most foods (avoid hard/crunchy until 12 weeks)",
      "Bone healing is 60-80% complete",
      "Final orthodontic refinement begins",
      "Full sensation returning (95% of cases)",
      "Resume contact sports, weight training, vigorous activity",
      "Facial result is visible — most residual swelling gone",
    ],
  },
  {
    phase: "Months 3-6",
    icon: "😊",
    points: [
      "Final aesthetic result emerges",
      "Bone fully consolidated by month 6",
      "Orthodontic refinement continues with elastics",
      "All foods OK including raw veg, nuts, ice",
      "Numbness fully resolved in 95%+ of patients",
      "Final post-op imaging and surgeon discharge",
    ],
  },
  {
    phase: "Months 6-12",
    icon: "🎓",
    points: [
      "Orthodontic refinement and retention",
      "Braces or aligners typically removed at 9-12 months post-op",
      "Final occlusion confirmed by orthodontist + surgeon",
      "Long-term retainer phase begins",
      "Annual check-ins to monitor stability",
    ],
  },
];

export default function RecoveryTimelinePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Jaw Surgery Recovery", url: `${siteConfig.url}/jaw-surgery-recovery-timeline` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg" alt="Recovery timeline" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary-light">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Jaw Surgery Recovery Timeline</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Recovery Guide</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Jaw surgery recovery — week by week
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            A detailed timeline of what to expect during the first 24 hours through 12 months after orthognathic surgery. Knowing what's coming makes the journey easier.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-12 border-l-2 border-primary-600/30 pl-8">
            {phases.map((p, i) => (
              <li key={p.phase} className="relative">
                <span className="absolute -left-[44px] top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-xl">
                  {p.icon}
                </span>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">{p.phase}</h2>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-neutral-700 leading-7">
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-900 text-sm leading-7">
            <strong>Important:</strong> This is a general timeline. Your individual recovery depends on age, overall health, complexity of surgery, smoking status, and adherence to post-op instructions. Always follow your surgeon's specific guidance — call the office for any concerns.
          </p>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Frequently asked questions</h2>
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

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">Plan your jaw surgery journey</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/expertise/jaw-surgery" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Procedure</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Corrective jaw surgery</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Le Fort I, BSSO, and genioplasty explained from diagnosis to surgery.</p>
          </Link>
          <Link href="/surgical-cases/corrective-jaw-surgery" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Results</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Jaw surgery case gallery</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Real before-and-after corrective jaw surgery transformations.</p>
          </Link>
          <Link href="/for-patients/travel" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Logistics</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Traveling for surgery</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Guidance for out-of-state and international jaw surgery patients.</p>
          </Link>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
