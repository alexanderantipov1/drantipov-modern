import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RelatedArticles } from "@/components/RelatedArticles"
import { structuredDataScript, getFAQSchema } from "@/lib/structured-data"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

const CANONICAL = "/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost"
const URL = "https://www.drantipov.com" + CANONICAL
const IMAGE = "/images/blog/2026-06-22/how-to-fix-an-overbite.png"

export const metadata: Metadata = {
  title: "How to Fix an Overbite: Treatment Options, Surgery & Cost",
  description:
    "How do you fix an overbite? A board-certified oral surgeon explains every option — aligners, braces, and jaw surgery — for kids and adults, plus realistic timelines and cost.",
  alternates: {
    canonical: CANONICAL,
    languages: { en: CANONICAL, "x-default": CANONICAL },
  },
  keywords: [
    "how to fix an overbite",
    "how do you fix an overbite",
    "how can you fix an overbite",
    "fix an overbite",
    "how to fix overbite without surgery",
    "fixing overbite as an adult",
    "how to fix a slight overbite",
    "overbite treatment cost",
  ],
  openGraph: {
    title: "How to Fix an Overbite: Treatment Options, Surgery & Cost",
    description:
      "Every way to fix an overbite — aligners, braces, and jaw surgery — with realistic timelines and cost for adults and children.",
    url: URL,
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "How to fix an overbite — treatment options" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Fix an Overbite: Treatment Options, Surgery & Cost",
    description:
      "Every way to fix an overbite — aligners, braces, and jaw surgery — with realistic timelines and cost.",
    images: [IMAGE],
  },
}

const faqs = [
  {
    question: "How do you fix an overbite?",
    answer:
      "Most overbites are fixed by moving the teeth with clear aligners or braces. When the overbite is caused by the jaw bones being misaligned (a skeletal overbite), orthodontics is combined with corrective jaw surgery. The right option depends on whether the cause is dental or skeletal, and on your age.",
  },
  {
    question: "Can you fix an overbite without surgery?",
    answer:
      "Yes — the large majority of overbites are corrected without surgery using clear aligners or braces, sometimes with small attachments, elastics, or temporary anchorage devices. Surgery is only needed for severe skeletal overbites where the jaw position itself must be changed.",
  },
  {
    question: "How do you fix a slight overbite?",
    answer:
      "A slight overbite (around 4–6 mm of overlap) is usually corrected with clear aligners or braces over roughly 6–18 months. Many mild cases are treated for function and appearance, though a small overbite that causes no problems may not need treatment at all.",
  },
  {
    question: "Can an overbite be fixed in adults?",
    answer:
      "Absolutely. Teeth can be moved at any age, so adults are routinely treated with aligners or braces. The difference is that an adult's jaw bones have stopped growing, so skeletal overbites in adults are corrected with jaw surgery rather than growth-guiding appliances.",
  },
  {
    question: "How much does it cost to fix an overbite?",
    answer:
      "Clear aligners or braces for an overbite typically run $3,000–$8,000. When corrective jaw surgery is required, the complete plan (orthodontics plus surgery) generally falls in the $25,000–$60,000 range, though medical insurance often covers 60–90% of the surgical portion when functional impairment is documented.",
  },
  {
    question: "What happens if an overbite is left untreated?",
    answer:
      "A mild overbite may never cause problems. Larger overbites can lead to abnormal tooth wear, gum damage where lower teeth bite into the palate, jaw-joint (TMJ) strain, difficulty chewing, and in some cases speech or breathing issues. Treating it earlier is generally simpler than treating it later.",
  },
]

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalScholarlyArticle",
  "@id": `${URL}#article`,
  headline: "How to Fix an Overbite: Treatment Options, Surgery & Cost",
  description:
    "How do you fix an overbite? Every option — clear aligners, braces, and corrective jaw surgery — for adults and children, with realistic timelines and cost.",
  inLanguage: "en",
  url: URL,
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  image: [`https://www.drantipov.com${IMAGE}`],
  author: {
    "@type": "Person",
    name: "Dr. Alexander V. Antipov, DDS",
    url: "https://www.drantipov.com/about",
    identifier: "https://www.drantipov.com/#physician",
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Alexander V. Antipov, DDS",
    url: "https://www.drantipov.com",
    logo: { "@type": "ImageObject", url: "https://www.drantipov.com/images/logo-d10cd66c.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
}

export default function HowToFixAnOverbitePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([articleSchema, getFAQSchema(faqs)])}
      />

      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Hero */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Jaw Surgery</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>June 22, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              How to Fix an Overbite: Treatment Options, Surgery &amp; Cost
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Medically reviewed by <strong className="not-italic text-neutral-900">Dr. Alexander V. Antipov, DDS</strong> — Board-Certified Oral &amp; Maxillofacial Surgeon · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · California Dental License #50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src={IMAGE}
                alt="How to fix an overbite — clear aligners, braces, and jaw surgery options"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                An overbite — when the upper front teeth overlap the lower front teeth too much — is one
                of the most common bite problems, and almost all of them are fixable. The right approach
                depends on one key question: is the overbite caused by the <strong>teeth</strong> or by the
                <strong> jaw bones</strong>? Here is every option, from clear aligners to jaw surgery, with
                realistic timelines and cost.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Most overbites are fixed without surgery — with clear aligners or braces.</li>
                  <li>&bull; Skeletal overbites (a jaw-position problem) are corrected with orthodontics plus jaw surgery.</li>
                  <li>&bull; Children can be treated with growth-guiding appliances; adults move teeth or have surgery.</li>
                  <li>&bull; Aligners/braces typically take 6–24 months and cost $3,000–$8,000.</li>
                  <li>&bull; A 3D CT consultation is the fastest way to learn which category you are in.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                First: Dental Overbite vs. Skeletal Overbite
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Every overbite treatment decision starts here, because the two types are fixed in completely
                different ways.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Dental overbite.</strong> The jaw bones are in a normal position, but the teeth
                  are tipped or positioned so the upper teeth overlap too far. This is the common type, and it is
                  corrected by <strong>moving the teeth</strong> with aligners or braces.
                </li>
                <li>
                  &mdash; <strong>Skeletal overbite.</strong> The upper and lower jaw bones are misaligned — for
                  example, the lower jaw sits too far back. Moving teeth alone cannot fix the underlying bone
                  position, so the jaw itself is repositioned with <strong>corrective jaw surgery</strong>.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A clinical exam plus a 3D CT scan tells the two apart with certainty. For a deeper look at the
                surgical category, see our guide on{" "}
                <Link href="/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed" className="text-primary-600 underline">
                  severe overbite and when jaw surgery is needed
                </Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                How Severe Is Your Overbite?
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Severity</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Overlap</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Typical Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Normal</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1&ndash;3&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">None needed</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Slight / mild</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4&ndash;6&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Clear aligners or braces</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Moderate</td>
                      <td className="border-b border-neutral-200 py-3 px-4">6&ndash;9&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Braces, sometimes with extractions or TADs</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Severe</td>
                      <td className="border-b border-neutral-200 py-3 px-4">9+&nbsp;mm</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Often jaw surgery + orthodontics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Severity is a guide, not a verdict — the <em>cause</em> (dental vs. skeletal) matters more than
                the number of millimeters.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Option 1: Clear Aligners
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Clear aligners (such as Invisalign-type systems) are a popular choice for slight to moderate
                dental overbites. A series of clear, removable trays gradually moves the teeth, often with small
                tooth-colored attachments and elastics to control the bite. They are nearly invisible and
                removable for eating and cleaning.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Best for:</strong> slight to moderate dental overbites in teens and adults.</li>
                <li>&mdash; <strong>Timeline:</strong> roughly 6&ndash;18 months.</li>
                <li>&mdash; <strong>Cost:</strong> about $3,000&ndash;$7,000.</li>
                <li>&mdash; <strong>Trade-off:</strong> depends on wearing them 20&ndash;22 hours a day.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Option 2: Braces
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Traditional or ceramic braces remain the most versatile tool for overbite correction, especially
                for moderate cases or when precise, complex tooth movement is needed. Braces can be paired with
                elastics or small temporary anchorage devices (TADs) to intrude or reposition teeth that aligners
                struggle with.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Best for:</strong> moderate dental overbites and complex cases.</li>
                <li>&mdash; <strong>Timeline:</strong> roughly 12&ndash;24 months.</li>
                <li>&mdash; <strong>Cost:</strong> about $3,000&ndash;$8,000.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Option 3: Growth Appliances (Children &amp; Teens)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                In growing children and teens, the jaw can still be guided. Functional appliances and headgear
                can influence how the jaws develop, sometimes preventing a skeletal overbite from requiring
                surgery later. This is why early orthodontic evaluation (around age 7) is recommended for kids
                with an obvious bite problem — the same overbite is often simpler to address while the patient is
                still growing.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Option 4: Corrective Jaw Surgery (Skeletal Overbites)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                When the overbite is skeletal — the jaw bones themselves are misaligned — orthodontics is
                combined with <strong>orthognathic (corrective jaw) surgery</strong>. The surgeon repositions the
                upper jaw, lower jaw, or both and secures them with small titanium plates and screws placed from
                inside the mouth (no facial scars). This is the only way to achieve a stable correction for true
                skeletal cases in adults.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Best for:</strong> severe or skeletal overbites in adults, or cases with TMJ pain, sleep apnea, or facial-profile concerns.</li>
                <li>&mdash; <strong>Timeline:</strong> an 18&ndash;36 month coordinated plan (braces → surgery → finishing orthodontics).</li>
                <li>&mdash; <strong>Cost:</strong> typically $25,000&ndash;$60,000 for the full plan, often 60&ndash;90% covered by medical insurance when functional impairment is documented.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Read the full breakdown in our guide to{" "}
                <Link href="/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed" className="text-primary-600 underline">
                  severe overbite and jaw surgery
                </Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Fixing an Overbite as an Adult
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Adults are treated successfully every day — teeth move at any age. The only real difference is
                that an adult&rsquo;s jaw bones have stopped growing, so growth appliances no longer work. That
                means an adult with a <em>dental</em> overbite is treated with aligners or braces, while an adult
                with a <em>skeletal</em> overbite is treated with orthodontics plus jaw surgery. Treatment can
                take a little longer in adults because bone remodels more slowly, but the results are just as
                reliable.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Why It Is Worth Fixing
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Beyond appearance, correcting a significant overbite protects your long-term oral health by
                reducing abnormal tooth wear, preventing lower teeth from biting into the palate, easing strain
                on the jaw joints (TMJ), and improving chewing — and, in skeletal cases, breathing and sleep.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 my-8">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <GlassCard className="my-12 p-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                  Not sure which type of overbite you have?
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                  A 3D CT consultation with Dr. Antipov shows exactly whether your overbite is
                  dental or skeletal — and the simplest path to correct it.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="how-to-fix-an-overbite-treatment-options-and-cost" />
    </>
  )
}
