import { Section, Container, GlassCard } from "@/components/sections"
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
  title: { absolute: "Wisdom Teeth Removal | Roseville, CA" },
  description: "Safe, comfortable wisdom teeth extraction with sedation options. Same-day procedure by board-certified oral surgeon. Roseville, CA.",
  alternates: {
    canonical: "/expertise/wisdom-teeth",
    languages: {
      "en": "/expertise/wisdom-teeth",
      "x-default": "/expertise/wisdom-teeth",
    },
  },
  openGraph: {
    title: "Wisdom Teeth Removal",
    description: "Board-certified wisdom teeth extraction with IV sedation. 3D CT planning for impacted or nerve-adjacent teeth.",
    images: [
      {
        url: "/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg",
        width: 1200,
        height: 630,
        alt: "Wisdom Teeth Removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Teeth Removal",
    description: "Board-certified wisdom teeth extraction with IV sedation. 3D CT planning for impacted or nerve-adjacent teeth.",
    images: ["/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg"],
  }
}

const faqs = [
  { question: "At what age should wisdom teeth be removed?", answer: "Most patients have wisdom teeth removed between ages 16 and 25. Earlier removal often means easier recovery because the roots haven't fully formed. Dr. Antipov evaluates each patient individually using panoramic X-rays or CBCT to determine the optimal timing." },
  { question: "Do I really need to remove my wisdom teeth?", answer: "Not always. We remove wisdom teeth when they are impacted, causing pain, infection (pericoronitis), damaging adjacent teeth, contributing to crowding, or producing cysts. Healthy, fully erupted, and easily cleanable wisdom teeth can sometimes be retained." },
  { question: "Will I be awake during the procedure?", answer: "Most patients choose IV sedation - you remain breathing on your own but have no memory of the procedure. Local anesthesia alone is an option for simple extractions. Dr. Antipov holds a California General Anesthesia Permit (#GA 1446) and performs all sedation in-office." },
  { question: "How long is recovery?", answer: "Most patients return to school or work in 2-3 days. Soft food diet for 5-7 days. Full healing of the sockets takes 3-4 weeks. We provide detailed post-op instructions and pain management to keep you comfortable." },
  { question: "How much does wisdom teeth removal cost?", answer: "Cost depends on the number of teeth, whether they are impacted, and the type of sedation. Most cases range $200-$600 per tooth for simple extractions and $300-$800 per tooth for impacted teeth. Dental insurance typically covers a portion. We provide complete fee estimates during your consultation." },
  { question: "What are the risks?", answer: "Common: swelling, soreness, mild bleeding. Less common: dry socket (1-5%), infection (~2%), temporary numbness from nerve proximity. Severe complications are rare with proper surgical technique. Dr. Antipov has 25+ years of experience minimizing risk through 3D CT planning when needed." },
]

const indications = [
  { title: "Impacted wisdom teeth", description: "Teeth trapped in the jawbone or partially erupted through the gum - high risk of infection, cyst formation, and adjacent tooth damage." },
  { title: "Recurrent pericoronitis", description: "Repeated infections of the gum tissue covering partially erupted wisdom teeth." },
  { title: "Crowding or orthodontic concerns", description: "Wisdom teeth can shift other teeth out of alignment - common reason for prophylactic removal." },
  { title: "Cysts or tumors", description: "Dental follicles around impacted teeth occasionally develop cysts that erode bone - early removal prevents this." },
  { title: "Pre-orthognathic surgery", description: "Wisdom teeth are routinely removed before corrective jaw surgery to allow proper bone healing." },
  { title: "Decay or periodontal disease", description: "Hard-to-clean wisdom teeth that develop decay or gum disease beyond conservative treatment." },
]

const recovery = [
  { day: "Day 1", description: "Bite on gauze 30-45 minutes to control bleeding. Ice packs (20 on, 20 off). Rest with head elevated. Soft, cold foods only." },
  { day: "Days 2-3", description: "Swelling peaks. Continue ice for 48 hours, then warm compresses. Start gentle salt water rinses after 24 hours. Return to desk work possible." },
  { day: "Days 4-7", description: "Swelling subsides. Soft foods only - pasta, mashed potatoes, scrambled eggs. Continue rinses 4-6 times daily. Most patients off pain medication." },
  { day: "Week 2+", description: "Gradual return to normal diet. Avoid chewing on extraction sites. Sockets fully heal over 3-4 weeks. Follow-up visit at 1-2 weeks." },
]

export default function WisdomTeethPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Expertise", url: `${siteConfig.url}/expertise` },
    { name: "Wisdom Teeth Removal", url: `${siteConfig.url}/expertise/wisdom-teeth` },
  ])
  const procedure = getMedicalProcedureSchema({
    name: "Wisdom Teeth Removal",
    description: "Surgical extraction of third molars (wisdom teeth) with IV sedation by a board-certified oral and maxillofacial surgeon.",
    url: `${siteConfig.url}/expertise/wisdom-teeth`,
    procedureType: "https://schema.org/SurgicalProcedure",
  })
  const faqSchema = getFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, procedure, faqSchema])} />

      <ExpertisePageHero
        badge="Third Molar Extraction"
        title="Wisdom teeth removal - comfortable, safe, expert"
        subtitle="Board-certified oral surgery with IV sedation. Most patients are back to normal life in 2–3 days. Comprehensive 3D CT planning when needed for impacted or nerve-adjacent teeth."
        image="/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg"
      />

      <Section background="accent" padding="xl">
        <Container size="lg">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">When wisdom teeth removal is recommended</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((i) => (
              <GlassCard key={i.title} className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{i.title}</h3>
                <p className="text-neutral-700 leading-relaxed text-sm">{i.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="default" padding="xl">
        <Container size="md">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-3">What recovery looks like</h2>
          <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
            Most patients are pleasantly surprised. With modern surgical technique, IV sedation, and detailed post-op care, the experience is far easier than anticipated.
          </p>
          <ol className="relative space-y-8 border-l-2 border-primary-600/30 pl-8">
            {recovery.map((r) => (
              <li key={r.day} className="relative">
                <span className="absolute -left-[42px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-xs font-bold text-primary-600">
                  {r.day.replace("Day ", "").replace("Week ", "W")}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{r.day}</h3>
                <p className="mt-2 leading-7 text-neutral-700">{r.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section background="accent" padding="xl">
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
