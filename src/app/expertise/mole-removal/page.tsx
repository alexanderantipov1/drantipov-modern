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
import { Phone, Award, Clock, Sparkles, Radio, ShieldCheck, TrendingUp, Hospital, Calendar, HeartHandshake } from "lucide-react"
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
  title: { absolute: "Scarless Mole Removal — Radio Wave Surgery" },
  description: "Radio-wave mole removal with virtually no scarring. Performed in-office by oral & maxillofacial surgeon Dr. Antipov, Roseville CA.",
  alternates: {
    canonical: "/expertise/mole-removal",
    languages: {
      "en": "/expertise/mole-removal",
      "x-default": "/expertise/mole-removal",
    },
  },
  openGraph: {
    title: "Scarless Mole Removal",
    description: "Radio-wave electrosurgery for bloodless, scar-free mole removal — single visit, minimal downtime.",
    images: [
      {
        url: "/images/procedures/facial-cosmetic-surgery@2x-d3793d23.jpg",
        width: 1200,
        height: 630,
        alt: "Scarless Mole Removal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarless Mole Removal",
    description: "Radio-wave electrosurgery for bloodless, scar-free mole removal — single visit, minimal downtime.",
    images: ["/images/procedures/facial-cosmetic-surgery@2x-d3793d23.jpg"],
  }
}

const iconBenefits = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Completely scarless results",
    description: "Radio-wave precision leaves no visible mark",
  },
  {
    icon: <Radio className="h-5 w-5" />,
    title: "Bloodless and clean",
    description: "Cauterizes as it cuts — no traditional scalpel",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Minimal invasiveness",
    description: "Recovery measured in days, not weeks",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Removes deep-rooted moles",
    description: "Including moles embedded in nasal cartilage",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Restores natural symmetry",
    description: "Especially for cosmetically sensitive areas",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Quick return to daily life",
    description: "Most patients resume normal activity the same day",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation & Assessment",
    description:
      "Comprehensive examination of the mole's size, depth, and position. Dr. Antipov evaluates root depth into nasal cartilage and discusses your aesthetic goals. Photography and detailed treatment planning ensure optimal outcomes.",
    duration: "45 minutes",
  },
  {
    step: 2,
    title: "Radio Wave Surgery Procedure",
    description:
      "Using the advanced Ellman® medical radio wave machine, Dr. Antipov precisely removes the mole and its deep roots. The radio wave technology cauterizes as it cuts, resulting in a bloodless procedure with exceptional precision. Local anesthesia ensures complete comfort.",
    duration: "30-60 minutes",
  },
  {
    step: 3,
    title: "Immediate Post-Procedure Care",
    description:
      "Minimal wound care required due to the precise nature of radio wave surgery. Dr. Antipov provides detailed aftercare instructions for optimal healing. No sutures are typically needed with this advanced technique.",
    duration: "15 minutes",
  },
  {
    step: 4,
    title: "Healing & Follow-Up",
    description:
      "The treated area heals naturally over approximately 2 weeks. Follow-up appointments monitor healing progress and ensure complete removal of the mole. The scarless nature of the procedure becomes evident as healing completes.",
    duration: "2 weeks",
  },
  {
    step: 5,
    title: "Final Results Assessment",
    description:
      "Evaluation of the final aesthetic outcome. The nose returns to natural symmetry without visible scarring. Patients experience restored confidence with improved facial appearance.",
    duration: "Ongoing",
  },
]

const candidateQualities = [
  {
    title: "Large or Deep-Rooted Moles",
    description: "Moles with roots extending into nasal cartilage that require advanced removal techniques",
  },
  {
    title: "Cosmetically Concerning Moles",
    description: "Moles causing nasal asymmetry, unwanted hair growth, or aesthetic concerns",
  },
  {
    title: "Previous Unsuccessful Treatments",
    description: "Cases where traditional removal methods were unsuccessful or not recommended",
  },
  {
    title: "Desire for Scarless Results",
    description: "Patients seeking the most advanced, minimally invasive approach with no visible scarring",
  },
]

const faqs = [
  {
    question: "What makes radio wave surgery different from traditional mole removal?",
    answer:
      "Radio wave surgery uses high-frequency radio waves to precisely cut tissue while simultaneously cauterizing blood vessels. This results in a completely bloodless procedure with exceptional precision. Unlike traditional scalpel excision or laser removal, the Ellman® radio wave technology creates minimal tissue trauma and heals without visible scarring. It's particularly effective for facial moles where aesthetic outcomes are paramount.",
  },
  {
    question: "Will there really be no scar on my nose?",
    answer:
      "Radio wave surgery is designed to be scarless when performed by an experienced surgeon like Dr. Antipov. The technology creates minimal tissue disruption and promotes healing that leaves no visible surgical marks. While individual healing varies, the vast majority of patients experience complete aesthetic restoration with no detectable scarring. This is especially important for prominent facial areas like the nose.",
  },
  {
    question: "Can this technique remove moles with deep roots in the cartilage?",
    answer:
      "Yes, this is one of the major advantages of radio wave surgery. Dr. Antipov has successfully removed moles with roots deeply embedded in nasal cartilage. The precision of the Ellman® technology allows careful removal of the entire mole structure, including deep roots, while preserving surrounding healthy tissue and cartilage integrity. This ensures complete removal and prevents recurrence.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "The procedure is performed under local anesthesia, so you won't feel pain during the removal. Most patients report minimal to no discomfort. The radio wave technique is gentler than traditional methods because it doesn't tear or traumatize tissue. Post-procedure discomfort is typically very mild and easily managed with over-the-counter pain relief if needed. Most patients are surprised by how comfortable the entire process is.",
  },
  {
    question: "How long is the recovery time?",
    answer:
      "Recovery is remarkably quick compared to traditional surgical methods. The rehabilitation period is approximately 2 weeks. Most patients return to normal daily activities within a few days. You'll need to follow simple aftercare instructions to protect the healing area. Avoid heavy exercise for about a week and keep the area clean and protected from sun exposure during healing.",
  },
  {
    question: "What if the mole grows back?",
    answer:
      "When Dr. Antipov removes a mole using radio wave surgery, he removes the entire structure including all root systems. This comprehensive removal significantly reduces the chance of regrowth. In the rare event that any mole cells remain, follow-up treatment can be performed. Dr. Antipov's extensive experience with deep-rooted facial moles ensures thorough initial removal.",
  },
  {
    question: "Does insurance cover cosmetic mole removal?",
    answer:
      "Coverage depends on whether the mole is considered cosmetic or medically necessary. Moles causing functional problems, suspected of being precancerous, or documented medical concerns may be covered. Purely cosmetic removal is typically not covered by insurance. Our office can help you understand your coverage and provide detailed cost information during your consultation.",
  },
]

export default function MoleRemovalPage() {
  const structuredData = [
    getMedicalProcedureSchema({
      name: "Scarless Mole Removal from the Nose",
      description:
        "Advanced radio wave surgery using Ellman® technology for bloodless, scar-free removal of facial moles, including those with deep roots in nasal cartilage.",
      url: `${siteConfig.url}/expertise/mole-removal`,
      procedureType: "Cosmetic Facial Surgery",
      preparation:
        "Comprehensive examination and photography. Medical history review and discussion of aesthetic goals. Treatment planning for optimal scarless results.",
      howPerformed:
        "Radio wave surgery using Ellman® medical machine precisely removes the mole and deep roots under local anesthesia. The technology cauterizes while cutting, creating a bloodless, minimally invasive procedure.",
      followup:
        "Minimal wound care with 2-week healing period. Follow-up appointments to monitor healing and assess final aesthetic results.",
      bodyLocation: "Nose/Face",
    }),
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      {
        name: "Scarless Mole Removal",
        url: `${siteConfig.url}/expertise/mole-removal`,
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
        badge="Advanced Facial Cosmetic Surgery"
        title="Scarless Mole Removal from the Nose"
        subtitle="Scarless mole removal uses radio-wave surgery (high-frequency electrosurgery) to remove benign facial and body moles in a single visit — minimal bleeding, faster healing, and a smoother cosmetic outcome than traditional excision."
        image="/images/facial-cosmetic-surgery/mole-removal@2x-9fa33150.jpg"
      />

      {/* Animated stat cards overlapping hero bottom */}
      <HeroStats stats={[
          {
            icon: <Clock className="h-5 w-5" />,
            value: "<30 min",
            label: "In-office procedure",
          },
          {
            icon: <Sparkles className="h-5 w-5" />,
            value: "0",
            label: "Stitches or scars",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            value: "Bloodless",
            label: "Radio-wave technique",
          },
          {
            icon: <Calendar className="h-5 w-5" />,
            value: <><AnimatedCounter to={2} /> wk</>,
            label: "To full healing",
          },
        ]} />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Advanced Technology for Flawless Results
              </h2>
              <p className="text-xl text-neutral-600">
                Radio wave surgery offers a revolutionary approach to facial mole removal
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                <strong>Scarless mole removal</strong> using radio wave surgery represents the most advanced
                approach to eliminating unwanted facial moles, particularly those on prominent areas like the nose.
                This sophisticated technique uses the Ellman® medical radio wave machine to achieve completely
                bloodless, scar-free removal of even deep-rooted moles.
              </p>

              <p>
                Traditional mole removal methods often leave visible scars, especially on delicate facial areas.
                Dr. Antipov's expertise with radio wave surgery allows him to remove complex moles—including those
                with roots deeply embedded in nasal cartilage—while preserving the natural appearance and symmetry
                of your nose.
              </p>

              <p>
                This minimally invasive procedure is particularly effective for moles causing aesthetic concerns
                such as nasal asymmetry or unwanted hair growth. The advanced Ellman® technology cauterizes tissue
                as it removes the mole, resulting in a bloodless procedure with exceptional precision and rapid
                healing. Most patients complete their recovery in just 2 weeks with no visible evidence of treatment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Quote — personal touch */}
      <DoctorQuote
        quote="When patients have lived with a noticeable mole on the nose for years, the relief on their face after a scarless removal is unforgettable. Radio-wave technology made this possible."
        author="Dr. Alexander Antipov, DDS"
        role="Board-Certified Oral & Maxillofacial Surgeon"
      />

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Why Choose Radio Wave Surgery?
              </h2>
              <p className="text-xl text-neutral-600">
                The most advanced, minimally invasive approach to facial mole removal
              </p>

              <IconBenefits items={iconBenefits} columns={2} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Radio className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Ellman® Radio Wave Technology
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Dr. Antipov uses the state-of-the-art Ellman® medical machine, the gold standard in radio
                    wave surgery. This advanced technology delivers high-frequency radio waves that precisely
                    cut and cauterize simultaneously, creating a completely bloodless surgical field with
                    exceptional healing properties.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Facial Cosmetic Surgery Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    As a board-certified oral and maxillofacial surgeon, Dr. Antipov has extensive training in
                    facial anatomy and cosmetic procedures. His expertise ensures optimal aesthetic outcomes,
                    particularly for challenging cases involving deep-rooted moles in sensitive facial areas.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Ideal Candidates */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Is Radio Wave Mole Removal Right for You?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              This advanced technique is ideal for patients seeking scarless facial mole removal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {candidateQualities.map((quality, index) => (
              <GlassCard key={index} variant="hover">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{quality.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{quality.description}</p>
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
              The Radio Wave Mole Removal Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From consultation to complete healing, typically 2-3 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VerticalProcessTimeline steps={processSteps} />
          </div>
        </Container>
      </Section>

      {/* Real Patient Success */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-10 w-10 text-primary-600" />
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                    Real Patient Success
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                  <p className="text-lg">
                    <strong>Case Study:</strong> 39-year-old male with large mole on left nose wing
                  </p>

                  <p>
                    The patient presented with a prominent mole on the left side of his nose that had deep roots
                    extending into the nasal cartilage. The mole was causing noticeable nasal asymmetry and
                    unwanted hair growth, affecting his confidence in both personal and professional settings.
                  </p>

                  <p>
                    <strong>Treatment Approach:</strong> Dr. Antipov utilized the Ellman® radio wave surgery
                    technique to perform a complete, scarless removal. The advanced technology allowed precise
                    removal of the mole including all deep root structures embedded in the cartilage, while
                    maintaining the integrity of the surrounding nasal tissue.
                  </p>

                  <p>
                    <strong>Results:</strong> The procedure was completely bloodless and minimally invasive.
                    After a 2-week rehabilitation period, the patient experienced complete restoration of nasal
                    symmetry with no visible scarring. The natural appearance of the nose was fully preserved,
                    and the patient reported high satisfaction with both the process and aesthetic outcome.
                  </p>

                  <div className="bg-primary-50 p-6 rounded-lg mt-6">
                    <p className="text-primary-900 font-medium mb-2">
                      Location: Galleria Oral & Maxillofacial Surgery, Roseville, California
                    </p>
                    <p className="text-primary-800">
                      This case demonstrates the exceptional results achievable with radio wave surgery for
                      complex facial mole removal, particularly in cosmetically sensitive areas.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
            <DualCTA variant="surgical"
        heading="Considering Scarless Mole Removal?"
        subheading="Facial cosmetic procedures including mole removal are performed at Galleria Oral & Facial Surgery."
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
