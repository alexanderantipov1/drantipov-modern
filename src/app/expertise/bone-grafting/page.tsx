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
import { Phone, Award, Clock, Layers, Bone, ShieldCheck, Sparkles, TrendingUp, Hospital, Calendar, Stethoscope, HeartHandshake } from "lucide-react"
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
  title: { absolute: "Bone Grafting & Augmentation | Dr. Antipov" },
  description: "Sinus lift, ridge preservation, and bone grafting to prepare your jaw for dental implants. Board-certified oral surgeon, Roseville CA.",
  alternates: {
    canonical: "/expertise/bone-grafting",
    languages: {
      "en": "/expertise/bone-grafting",
      "x-default": "/expertise/bone-grafting",
    },
  },
  openGraph: {
    title: "Bone Grafting & Augmentation",
    description: "Advanced bone grafting techniques rebuild jaw volume for stable implants — sinus lift, ridge augmentation.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Bone Grafting & Augmentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bone Grafting & Augmentation",
    description: "Advanced bone grafting techniques rebuild jaw volume for stable implants — sinus lift, ridge augmentation.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

const iconBenefits = [
  {
    icon: <Bone className="h-5 w-5" />,
    title: "Enables implant placement",
    description: "Rebuilds bone where implants were previously impossible",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Prevents further bone loss",
    description: "Stops the cascade of shrinkage after tooth loss",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Stable, long-lasting foundation",
    description: "Solid base for implants that lasts decades",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Preserves facial contours",
    description: "Supports natural cheek and lip shape",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "High success with modern materials",
    description: "Allograft, xenograft, and synthetic options",
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Reverses bone damage",
    description: "Restores volume lost to periodontal disease or trauma",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Comprehensive Evaluation",
    description:
      "3D CBCT scan to measure bone height, width, and density. We identify the specific areas requiring grafting and determine the best grafting material and technique for your case.",
    duration: "1 hour",
  },
  {
    step: 2,
    title: "Bone Grafting Procedure",
    description:
      "Bone graft material is placed in the deficient area. We use autogenous bone (your own), allograft (donor), xenograft (bovine), or synthetic materials depending on your needs. The procedure is performed under local anesthesia or sedation.",
    duration: "1-2 hours",
  },
  {
    step: 3,
    title: "Healing & Integration",
    description:
      "The graft material integrates with your existing bone through a process called osseointegration. During this time, new bone cells grow into and around the graft material, creating solid bone.",
    duration: "3-6 months",
  },
  {
    step: 4,
    title: "Verification Scan",
    description:
      "Once healing is complete, we perform another CBCT scan to confirm adequate bone volume and quality have been achieved. This ensures we have a solid foundation for implant placement.",
    duration: "30 minutes",
  },
  {
    step: 5,
    title: "Implant Placement",
    description:
      "With sufficient bone now available, dental implants can be placed with confidence. The grafted bone provides the stability needed for long-term implant success.",
    duration: "Varies",
  },
]

const graftTypes = [
  {
    title: "Ridge Augmentation",
    description: "Rebuilds bone width and height along the jaw ridge after tooth loss or extraction",
  },
  {
    title: "Sinus Lift (Augmentation)",
    description: "Adds bone to the upper jaw in the molar/premolar area when sinuses have expanded",
  },
  {
    title: "Socket Preservation",
    description: "Places bone graft immediately after extraction to prevent bone loss and maintain ridge shape",
  },
  {
    title: "Guided Bone Regeneration (GBR)",
    description: "Uses barrier membranes to guide new bone growth in specific areas",
  },
]

const faqs = [
  {
    question: "Why do I need bone grafting before dental implants?",
    answer:
      "Dental implants require adequate bone volume for stability. When teeth are lost, the surrounding bone naturally resorbs (shrinks) over time. Bone grafting rebuilds this lost bone, creating a solid foundation. Without sufficient bone, implants may fail or not be possible at all.",
  },
  {
    question: "Where does the bone graft material come from?",
    answer:
      "We use several types of graft materials: (1) Autogenous bone from your own body (jaw, chin, or hip) - the gold standard; (2) Allograft from human tissue banks - thoroughly screened and processed; (3) Xenograft from bovine sources - proven safe and effective; (4) Synthetic materials - biocompatible bone substitutes. Dr. Antipov will recommend the best option for your specific case.",
  },
  {
    question: "Is bone grafting painful?",
    answer:
      "Most patients experience minimal discomfort during and after bone grafting. The procedure is performed under local anesthesia, and we offer sedation options. Post-operative discomfort is typically managed with over-the-counter or prescription pain medication for 2-3 days. Swelling and minor bruising may occur but usually resolve within a week.",
  },
  {
    question: "How long until I can get my dental implants?",
    answer:
      "Healing time varies based on the extent of grafting: minor grafts may heal in 3-4 months, while major augmentation can take 6-9 months. In some cases with excellent bone quality, we can place implants simultaneously with grafting. Dr. Antipov will provide a specific timeline during your consultation.",
  },
  {
    question: "What is the success rate of bone grafting?",
    answer:
      "Bone grafting has a 90-95% success rate when performed by an experienced oral surgeon. Success depends on factors like your overall health, oral hygiene, smoking status, and the type/extent of grafting needed. Dr. Antipov's advanced training and use of modern techniques and materials ensure optimal outcomes.",
  },
]

export default function BoneGraftingPage() {
  const structuredData = [
    getMedicalProcedureSchema({
      name: "Bone Grafting & Augmentation",
      description:
        "Advanced bone grafting techniques to restore bone volume for successful dental implants. Includes ridge augmentation, sinus lifts, and socket preservation.",
      url: `${siteConfig.url}/expertise/bone-grafting`,
      procedureType: "Bone Grafting",
      preparation:
        "Comprehensive 3D CBCT scan evaluation to measure bone height, width, and density. Medical history review and discussion of grafting materials.",
      howPerformed:
        "Bone graft material (autogenous, allograft, xenograft, or synthetic) is placed in the deficient area under local anesthesia or sedation. The graft integrates with existing bone through osseointegration over 3-6 months.",
      followup:
        "Healing period of 3-6 months for osseointegration. Verification scan to confirm adequate bone volume before implant placement.",
      bodyLocation: "Jaw",
    }),
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      {
        name: "Bone Grafting",
        url: `${siteConfig.url}/expertise/bone-grafting`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Bone Graft Materials",
      description: "Organic and synthetic bone graft materials used by Dr. Antipov for ridge augmentation, sinus lift, and socket preservation in Roseville, CA.",
      url: `${siteConfig.url}/expertise/bone-grafting#organic-materials`,
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "MedicalEntity",
            name: "Autogenous Bone Graft",
            alternateName: "Autograft",
            description: "Bone harvested from the patient's own body (chin, ramus, or hip). The gold standard for bone grafting due to its viable cells and growth factors.",
            url: `${siteConfig.url}/expertise/bone-grafting#organic-materials`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "MedicalEntity",
            name: "Allograft",
            description: "Processed bone from human tissue banks — sterilized and demineralized. The most common choice for routine bone grafting, with no secondary surgical site.",
            url: `${siteConfig.url}/expertise/bone-grafting#organic-materials`,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "MedicalEntity",
            name: "Xenograft",
            alternateName: "Bovine Bone Graft (Bio-Oss)",
            description: "Processed bovine bone with slow resorption — excellent for sinus lift and ridge preservation cases requiring long-term volume stability.",
            url: `${siteConfig.url}/expertise/bone-grafting#organic-materials`,
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "MedicalEntity",
            name: "Synthetic Bone Graft (Alloplast)",
            alternateName: "Bioactive Ceramic",
            description: "Lab-made bioactive ceramics including hydroxyapatite, tricalcium phosphate, and bioactive glass. No donor risk, resorbable as new bone forms.",
            url: `${siteConfig.url}/expertise/bone-grafting#organic-materials`,
          },
        },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <ExpertisePageHero
        badge="Foundation for Success"
        title="Bone Grafting & Augmentation"
        subtitle="Dental bone grafting is a surgical procedure that adds bone material to a jaw with insufficient volume, rebuilding the foundation required for stable, long-lasting dental implants."
        image="/images/hero/04-bone-graft-healing.jpg"
      />

      {/* Animated stat cards overlapping hero bottom */}
      <HeroStats stats={[
          {
            icon: <Clock className="h-5 w-5" />,
            value: <><AnimatedCounter to={4} />–6 mo</>,
            label: "Healing & integration",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            value: <><AnimatedCounter to={95} suffix="%+" /></>,
            label: "Graft acceptance rate",
          },
          {
            icon: <Hospital className="h-5 w-5" />,
            value: "In-office",
            label: "Outpatient procedure",
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            value: <><AnimatedCounter to={2} />–3 wk</>,
            label: "Initial recovery",
          },
        ]} />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Creating the Foundation for Implant Success
              </h2>
              <p className="text-xl text-neutral-600">
                Bone grafting makes dental implants possible when bone loss has occurred
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                <strong>Bone grafting</strong> is a surgical procedure that rebuilds or augments jawbone that has been
                lost due to tooth extraction, periodontal disease, trauma, or prolonged tooth loss. The procedure
                involves placing bone graft material in areas of deficiency, which then integrates with your natural
                bone over time.
              </p>

              <p>
                When teeth are missing, the surrounding bone no longer receives stimulation from chewing forces and
                begins to resorb (dissolve away). This bone loss can make dental implant placement impossible without
                first restoring adequate bone volume through grafting.
              </p>

              <p>
                Dr. Antipov is highly experienced in all types of bone grafting procedures, from simple socket
                preservation to complex ridge augmentation and sinus lifts. He uses the latest materials and techniques
                to ensure predictable, successful outcomes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Quote — personal touch */}
      <DoctorQuote
        quote="Bone grafting is the quiet hero of modern implant dentistry. Without a solid foundation, even the most advanced implant cannot last. We build the base so the smile holds for decades."
        author="Dr. Alexander Antipov, DDS"
        role="Board-Certified Oral & Maxillofacial Surgeon"
      />

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Why Bone Grafting Matters
              </h2>
              <p className="text-xl text-neutral-600">
                The essential first step for many dental implant patients
              </p>

              <IconBenefits items={iconBenefits} columns={2} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Advanced Grafting Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Dr. Antipov completed fellowship training in complex reconstructive surgery at NYU Langone Medical
                    Center. He's performed hundreds of successful bone grafting procedures, including complex cases
                    referred by other dentists.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Layers className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    3D Precision Planning
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Using advanced CBCT 3D imaging, Dr. Antipov precisely measures bone deficiencies and plans the
                    optimal grafting approach. This technology ensures predictable results and minimizes surgical time.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Types of Bone Grafting */}
      <Section id="sinus-lift" background="default" padding="xl" className="scroll-mt-24">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Types of Bone Grafting Procedures
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Customized approaches for different clinical situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {graftTypes.map((type, index) => (
              <GlassCard key={index} variant="hover">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{type.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{type.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Graft Materials — Organic & Synthetic */}
      <Section id="organic-materials" background="default" padding="xl" className="scroll-mt-24 bg-light">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Bone Graft Materials
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Organic and synthetic options — Dr. Antipov selects the best material for your specific case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <GlassCard variant="hover">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-xl font-semibold text-neutral-900">Autogenous Bone</h3>
                <span className="text-xs uppercase tracking-wider text-primary-600 font-semibold">Gold standard · Organic</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Bone harvested from your own body (chin, ramus, or hip). Highest success rate because it contains
                living cells and growth factors. Requires a secondary surgical site but offers the most predictable
                integration.
              </p>
            </GlassCard>

            <GlassCard variant="hover">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-xl font-semibold text-neutral-900">Allograft</h3>
                <span className="text-xs uppercase tracking-wider text-primary-600 font-semibold">Human donor · Organic</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Processed bone from human tissue banks, sterilized and demineralized. Avoids a second surgical site,
                with excellent biocompatibility and a strong evidence base. The most common choice for routine
                grafting.
              </p>
            </GlassCard>

            <GlassCard variant="hover">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-xl font-semibold text-neutral-900">Xenograft</h3>
                <span className="text-xs uppercase tracking-wider text-primary-600 font-semibold">Bovine · Organic</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Processed bovine bone (most commonly Bio-Oss). Excellent for ridge preservation and sinus lift
                cases — slow resorption rate gives the graft long-term volume stability.
              </p>
            </GlassCard>

            <GlassCard variant="hover">
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-xl font-semibold text-neutral-900">Synthetic (Alloplast)</h3>
                <span className="text-xs uppercase tracking-wider text-primary-600 font-semibold">Lab-made</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Bioactive ceramics (hydroxyapatite, tricalcium phosphate, bioactive glass). No donor risk,
                consistent quality, and resorbable as new bone forms. Suitable for patients who prefer non-organic
                options.
              </p>
            </GlassCard>
          </div>

          <p className="mt-10 text-center text-neutral-600 max-w-3xl mx-auto">
            Dr. Antipov determines the optimal graft material after your CBCT scan, taking into account graft
            volume, location, healing time, and your personal preferences. All materials used are FDA-cleared and
            backed by peer-reviewed clinical data.
          </p>
        </Container>
      </Section>

      {/* The Process Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              The Bone Grafting Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From evaluation to implant readiness, typically 3-6 months
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
                Frequently Asked Questions
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

      <DualCTA variant="implants"
        heading="Bone Grafting for Implant Success"
        subheading="Bone grafting and sinus lifts to rebuild the foundation for future implants."
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
