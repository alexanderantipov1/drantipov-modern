import { Section, Container, GlassCard } from "@/components/sections"
import {
  ExpertisePageHero,
  HeroStats,
  AnimatedCounter,
  DoctorQuote,
  IconBenefits,
  VerticalProcessTimeline,
} from "@/components/expertise"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Phone,
  Award,
  Clock,
  Activity,
  Smile,
  Wind,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Hospital,
  Calendar,
  Stethoscope,
} from "lucide-react"
import FloatingArticleCTA from "@/components/FloatingArticleCTA"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  getMedicalProcedureSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"
import DualCTA from "@/components/DualCTA"

export const metadata = {
  title: { absolute: "Corrective Jaw Surgery (Orthognathic) | Dr. Antipov" },
  description: "Expert orthognathic surgery for bite problems, jaw alignment, and facial asymmetry. 25+ years of surgical experience in Roseville, CA.",
  alternates: {
    canonical: "/expertise/jaw-surgery",
    languages: {
      "en": "/expertise/jaw-surgery",
      "x-default": "/expertise/jaw-surgery",
    },
  },
  openGraph: {
    title: "Corrective Jaw Surgery (Orthognathic)",
    description: "Orthognathic surgery — Le Fort, BSSO, genioplasty — for bite, asymmetry, and breathing correction.",
    images: [
      {
        url: "/images/procedures/corrective-jaw-surgery@2x-0c58ba67.jpg",
        width: 1200,
        height: 630,
        alt: "Corrective Jaw Surgery (Orthognathic)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrective Jaw Surgery (Orthognathic)",
    description: "Orthognathic surgery — Le Fort, BSSO, genioplasty — for bite, asymmetry, and breathing correction.",
    images: ["/images/procedures/corrective-jaw-surgery@2x-0c58ba67.jpg"],
  }
}

const iconBenefits = [
  {
    icon: <Smile className="h-5 w-5" />,
    title: "Corrected bite & chewing function",
    description: "Eat comfortably without strain on jaw joints",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Relief from TMJ pain & headaches",
    description: "Address the skeletal root cause, not just symptoms",
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: "Better breathing & sleep apnea relief",
    description: "Opens the airway by repositioning the lower jaw",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Enhanced facial symmetry & profile",
    description: "Natural aesthetic improvement as a side effect",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Long-term dental health protection",
    description: "Prevents excess wear and unstable restorations",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Boosted confidence and quality of life",
    description: "Many patients call it life-changing",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Comprehensive Evaluation",
    description:
      "Full facial analysis including 3D CBCT imaging, dental models, and photographs. We coordinate with your orthodontist to develop a comprehensive treatment plan addressing both bite and facial aesthetics.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Pre-Surgical Orthodontics",
    description:
      "Braces are typically worn for 12-18 months before surgery to align the teeth within each jaw. This prepares your teeth for their new position after the jaws are repositioned.",
    duration: "12-18 months",
  },
  {
    step: 3,
    title: "Surgical Planning",
    description:
      "Using advanced 3D planning software, we simulate your surgery and predict your final result. Custom surgical guides and splints are fabricated to ensure precision during surgery.",
    duration: "2-3 weeks",
  },
  {
    step: 4,
    title: "Jaw Surgery",
    description:
      "Performed under general anesthesia in a hospital setting. The jawbones are repositioned and secured with titanium plates and screws. Incisions are made inside the mouth for no visible scarring. Most patients stay overnight in the hospital.",
    duration: "2-4 hours surgery",
  },
  {
    step: 5,
    title: "Recovery & Healing",
    description:
      "Initial swelling subsides in 2-3 weeks. Soft diet required for 6-8 weeks. Most patients return to work in 2-3 weeks. Bone healing completes in 6-8 weeks. Follow-up appointments monitor healing progress.",
    duration: "6-8 weeks",
  },
  {
    step: 6,
    title: "Post-Surgical Orthodontics",
    description:
      "Braces remain for 6-12 months after surgery to fine-tune your bite. Once treatment is complete, retainers are worn to maintain your beautiful new smile.",
    duration: "6-12 months",
  },
]

const conditions = [
  {
    title: "Overbite (Class II)",
    description: "Upper jaw protrudes significantly over lower jaw, often called 'buck teeth'",
  },
  {
    title: "Underbite (Class III)",
    description: "Lower jaw extends past upper jaw, creating a 'bulldog' appearance",
  },
  {
    title: "Open Bite",
    description: "Front teeth don't meet when biting down, leaving a gap",
  },
  {
    title: "Facial Asymmetry",
    description: "Uneven jaw growth causing facial imbalance or crooked jaw appearance",
  },
]

const faqs = [
  {
    question: "Why can't orthodontics alone fix my bite problem?",
    answer:
      "Orthodontics can move teeth within the jawbone, but when the jawbones themselves are misaligned or disproportionate, surgery is needed. Trying to compensate with orthodontics alone can actually worsen jaw joint problems and create unstable results. Corrective jaw surgery addresses the underlying skeletal problem.",
  },
  {
    question: "Will I need braces before and after surgery?",
    answer:
      "Yes, in almost all cases. Pre-surgical orthodontics (12-18 months) aligns your teeth within each jaw and 'de-compensates' tooth positions so surgery can be performed. Post-surgical orthodontics (6-12 months) fine-tunes your bite after the jaws are repositioned. Total treatment time is typically 2-3 years.",
  },
  {
    question: "Will my jaw be wired shut?",
    answer:
      "No. Modern orthognathic surgery uses rigid fixation with titanium plates and screws, so wiring the jaws shut is rarely needed. You'll be able to open your mouth and will be on a soft food diet, but your jaws won't be wired. Some cases may use elastic bands for 2-3 weeks to guide jaw positioning during initial healing.",
  },
  {
    question: "What is the recovery like?",
    answer:
      "Expect significant swelling for 2-3 weeks (worst at days 2-3). Discomfort is managed with prescription pain medication. You'll be on a liquid/soft diet for 6-8 weeks. Most patients return to work/school in 2-3 weeks. Vigorous exercise should wait 6-8 weeks. Numbness in the lower lip/chin is common and usually temporary, resolving over 3-12 months.",
  },
  {
    question: "Will jaw surgery change my appearance?",
    answer:
      "Yes, and usually for the better. Corrective jaw surgery improves facial balance and symmetry. Changes depend on the type and extent of surgery but often include a more defined jawline, better facial proportions, and improved profile. We show you computer-predicted results during planning so you know what to expect.",
  },
  {
    question: "Is orthognathic surgery covered by insurance?",
    answer:
      "Many insurance plans cover corrective jaw surgery when performed for functional reasons (severe bite problems, TMJ issues, sleep apnea, difficulty eating). Coverage varies by plan. Our office works with your insurance company to determine coverage and provide pre-authorization. We'll give you a detailed cost estimate before proceeding.",
  },
]

export default function JawSurgeryPage() {
  const structuredData = [
    getMedicalProcedureSchema({
      name: "Corrective Jaw Surgery (Orthognathic Surgery)",
      description:
        "Expert orthognathic surgery to correct bite problems, jaw misalignment, and facial asymmetry. Improves chewing function, breathing, and facial aesthetics.",
      url: `${siteConfig.url}/expertise/jaw-surgery`,
      procedureType: "Orthognathic Surgery",
      preparation:
        "Full facial analysis including 3D CBCT imaging, dental models, and photographs. Pre-surgical orthodontics (12-18 months) to align teeth. 3D surgical planning with custom guides.",
      howPerformed:
        "Performed under general anesthesia in hospital setting. Jawbones are repositioned and secured with titanium plates and screws. Incisions made inside mouth for no visible scarring. Most patients stay overnight.",
      followup:
        "Initial swelling subsides in 2-3 weeks. Soft diet for 6-8 weeks. Most patients return to work in 2-3 weeks. Post-surgical orthodontics (6-12 months) to fine-tune bite.",
      bodyLocation: "Jaw",
    }),
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      {
        name: "Jaw Surgery",
        url: `${siteConfig.url}/expertise/jaw-surgery`,
      },
    ]),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <ExpertisePageHero
        badge="Orthognathic Surgery"
        title="Corrective Jaw Surgery"
        subtitle="Corrective jaw surgery (orthognathic surgery) repositions the upper jaw, lower jaw, or both to correct skeletal malocclusion, facial asymmetry, and breathing problems caused by bite or jaw misalignment."
        image="/images/procedures/corrective-jaw-surgery@2x-0c58ba67.jpg"
      />

      {/* Animated stat cards overlapping hero bottom */}
      <HeroStats
        stats={[
          {
            icon: <Clock className="h-5 w-5" />,
            value: <><AnimatedCounter to={2} />–4 hrs</>,
            label: "Surgery time",
          },
          {
            icon: <Calendar className="h-5 w-5" />,
            value: <><AnimatedCounter to={18} /> mo</>,
            label: "Avg. orthodontic prep",
          },
          {
            icon: <Hospital className="h-5 w-5" />,
            value: "1 night",
            label: "Hospital stay",
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            value: <><AnimatedCounter to={98} suffix="%" /></>,
            label: "Patient satisfaction",
          },
        ]}
      />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Life-Changing Surgery for Jaw Misalignment
              </h2>
              <p className="text-xl text-neutral-600">
                Correcting skeletal problems that affect function, health, and appearance
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                <strong>Corrective jaw surgery</strong> (orthognathic surgery) repositions the upper jaw, lower jaw, or
                both to correct skeletal discrepancies that cannot be treated with orthodontics alone. This surgery is
                performed for both functional and aesthetic reasons.
              </p>

              <p>
                While most people think of jaw surgery as purely cosmetic, it's most often performed to correct serious
                bite problems that affect chewing, speaking, breathing, and jaw joint health. Many patients also
                experience significant aesthetic improvements as a natural result of proper jaw alignment.
              </p>

              <p>
                Dr. Antipov completed extensive training in complex maxillofacial surgery during his 4-year residency
                at Montefiore Medical Center/Albert Einstein College of Medicine. He works closely with orthodontists
                to ensure optimal functional and aesthetic outcomes for every patient.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Quote — personal touch */}
      <DoctorQuote
        quote="Modern orthognathic surgery is not just about fixing a bite — it transforms how patients breathe, eat, sleep, and feel about their own face. That is why precision matters at every step."
        author="Dr. Alexander Antipov, DDS"
        role="Board-Certified Oral & Maxillofacial Surgeon"
      />

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Comprehensive Improvements
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Addressing function, health, and aesthetics simultaneously
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <IconBenefits items={iconBenefits} columns={2} />
            </div>

            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-gradient-to-br from-navy via-navy-dark to-navy text-white p-7 shadow-xl">
                <Award className="h-10 w-10 text-primary-light mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">
                  Elite Surgical Training
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Dr. Antipov&rsquo;s 4-year residency at Montefiore Medical Center / Albert Einstein included extensive
                  experience in orthognathic surgery, facial trauma, and reconstructive procedures.
                </p>
              </div>

              <div className="rounded-3xl bg-white border-2 border-primary/15 p-7 shadow-md">
                <Activity className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                  3D Surgical Planning
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We simulate your surgery virtually using advanced 3D software, so you see your predicted result
                  before any incision is made.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Conditions Treated */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Conditions We Treat
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Common jaw misalignments that benefit from surgical correction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <GlassCard key={index} variant="hover">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{condition.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{condition.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Process Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Your Treatment Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Total treatment time typically 2-3 years including orthodontics
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VerticalProcessTimeline steps={processSteps} />
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Common Questions About Jaw Surgery
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                  <GlassCard className="overflow-hidden">
                    <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:no-underline px-6 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </GlassCard>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

            {/* Related cluster */}
      <Section background="accent" padding="xl">
        <Container size="lg">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">Plan your treatment</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a href="/jaw-surgery-recovery-timeline" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Recovery</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Week-by-week recovery timeline</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">What to expect from day 1 through 12 months.</p>
            </a>
            <a href="/surgical-cases/corrective-jaw-surgery" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Cases</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Jaw surgery case gallery</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">Real before-and-after transformations.</p>
            </a>
            <a href="/for-patients/travel" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Logistics</p>
              <h3 className="font-bold text-neutral-900 leading-snug">Traveling for surgery</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-6">For out-of-state and international patients.</p>
            </a>
          </div>
        </Container>
      </Section>

      <DualCTA variant="surgical"
        heading="Is Jaw Surgery Right for You?"
        subheading="Dr. Antipov performs orthognathic surgery at Galleria. Schedule a consultation to evaluate your bite and jaw alignment."
      />

      {/* Floating sticky CTA — appears after 25% scroll */}
      <FloatingArticleCTA
        href="/contact"
        label="Book free consultation"
        showAfterPct={25}
      />
    </>
  )
}
