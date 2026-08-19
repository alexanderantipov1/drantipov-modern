import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { ExpertisePageHero } from "@/components/expertise/ExpertisePageHero"
import Link from "next/link"
import {
  getMedicalProcedureSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"
import DualCTA from "@/components/DualCTA"

export const metadata = {
  title: { absolute: "TMJ & TMD Treatment | Dr. Antipov, Roseville CA" },
  description: "TMJ pain, jaw locking, and TMD treatment by a board-certified oral & maxillofacial surgeon with 25+ years experience. Roseville, CA.",
  alternates: {
    canonical: "/expertise/tmj",
    languages: {
      "en": "/expertise/tmj",
      "x-default": "/expertise/tmj",
    },
  },
  openGraph: {
    title: "TMJ / TMD Treatment",
    description: "Diagnosis-driven TMJ treatment - conservative therapy first, surgery only when truly needed.",
    images: [
      {
        url: "/images/blog/2015-07-06/tmj-e4c0b47f.jpg",
        width: 1200,
        height: 630,
        alt: "TMJ / TMD Treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TMJ / TMD Treatment",
    description: "Diagnosis-driven TMJ treatment - conservative therapy first, surgery only when truly needed.",
    images: ["/images/blog/2015-07-06/tmj-e4c0b47f.jpg"],
  }
}

const faqs = [
  { question: "What is TMJ disorder?", answer: "Temporomandibular joint (TMJ) disorder, also called TMD, is a group of conditions affecting the joints, muscles, and ligaments of the jaw. Symptoms include jaw pain, clicking or popping sounds, headaches, ear pain, and difficulty chewing." },
  { question: "When does TMJ require surgery?", answer: "Most TMJ cases respond to conservative care: splints, physical therapy, anti-inflammatories, and stress management. Surgery is reserved for cases that fail conservative treatment after 3-6 months, structural joint damage seen on imaging, or severe symptoms that limit jaw function." },
  { question: "What surgical options exist for TMJ?", answer: "Options range from minimally invasive arthrocentesis (joint flushing) and arthroscopy, to open joint surgery (arthroplasty), and in severe cases total joint replacement. Dr. Antipov tailors the approach to your imaging and clinical exam findings." },
  { question: "How long is recovery from TMJ surgery?", answer: "Arthrocentesis: 1-2 days. Arthroscopy: 1 week. Open joint surgery: 2-4 weeks for return to soft diet, 6-12 weeks for full recovery. Physical therapy is essential during recovery." },
  { question: "Does insurance cover TMJ treatment?", answer: "Many medical insurance plans cover TMJ surgery when documented as medically necessary. Our insurance coordinator helps with pre-authorization. Conservative dental treatments may have separate coverage rules." },
]

const symptoms = [
  "Jaw pain or tenderness",
  "Clicking, popping, or grating sounds when chewing",
  "Difficulty opening or closing the mouth",
  "Locking of the jaw",
  "Headaches or migraines",
  "Ear pain or ringing (tinnitus)",
  "Facial pain or pressure",
  "Difficulty chewing certain foods",
]

const conservativeFirst = [
  { title: "Comprehensive evaluation", description: "Clinical exam, imaging (CBCT, MRI if indicated), bite analysis." },
  { title: "Custom occlusal splint", description: "Night-guard or full-coverage splint to reduce muscle strain and protect the joint." },
  { title: "Physical therapy", description: "Targeted jaw and neck exercises, manual therapy, posture correction." },
  { title: "Medications", description: "Anti-inflammatories, muscle relaxants, or short-course pain management as appropriate." },
  { title: "Lifestyle changes", description: "Soft diet, stress management, jaw rest, avoiding chewing gum or hard foods." },
]

const surgicalOptions = [
  { title: "Arthrocentesis", description: "Minimally invasive - needles wash inflammation out of the joint. Outpatient, ~30 minutes." },
  { title: "TMJ arthroscopy", description: "Small camera enters the joint for diagnosis and treatment. Outpatient, 1-hour procedure." },
  { title: "Open joint surgery (arthroplasty)", description: "Direct repair or reshaping of the joint structures when arthroscopy is insufficient." },
  { title: "Total joint replacement", description: "Reserved for severe degeneration, ankylosis, or failed prior surgeries. Patient-specific implant." },
]

export default function TMJPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Expertise", url: `${siteConfig.url}/expertise` },
    { name: "TMJ Treatment", url: `${siteConfig.url}/expertise/tmj` },
  ])
  const procedure = getMedicalProcedureSchema({
    name: "TMJ / TMD Treatment",
    description: "Evaluation and treatment of temporomandibular joint disorders ranging from conservative therapy to surgical management.",
    url: `${siteConfig.url}/expertise/tmj`,
    procedureType: "https://schema.org/SurgicalProcedure",
  })
  const faqSchema = getFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, procedure, faqSchema])} />

      <ExpertisePageHero
        badge="TMJ / TMD Treatment"
        title="Comprehensive TMJ disorder care"
        subtitle="Diagnosis-driven treatment for jaw pain, joint dysfunction, and chronic facial pain - starting with conservative therapy and reserving surgery for cases that truly need it."
        image="/images/blog/2015-07-06/tmj-e4c0b47f.jpg"
      />

      <Section background="accent" padding="xl">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-5">Common symptoms</h2>
              <ul className="space-y-3">
                {symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-neutral-700">
                    <span className="text-primary-600 font-bold">•</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <GlassCard className="p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-600">Diagnosis-first approach</p>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-3">
                Imaging, not guesswork
              </h3>
              <p className="text-neutral-700 leading-relaxed mt-3">
                Most jaw pain is muscular or postural and resolves with conservative care. We use clinical exam, CBCT, and MRI (when indicated) to identify the actual cause before recommending any invasive treatment.
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section background="default" padding="xl">
        <Container size="lg">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">Conservative care first</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conservativeFirst.map((c) => (
              <GlassCard key={c.title} className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{c.title}</h3>
                <p className="text-neutral-700 leading-relaxed text-sm">{c.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="accent" padding="xl">
        <Container size="lg">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-3">Surgical options (when needed)</h2>
          <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
            Only ~5% of TMJ patients ultimately need surgery. When they do, we offer the full range from minimally invasive to total joint replacement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {surgicalOptions.map((s) => (
              <GlassCard key={s.title} className="p-7">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{s.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="default" padding="xl">
        <Container size="md">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">Frequently asked questions</h2>
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
        </Container>
      </Section>

      <DualCTA />
    </>
  )
}
