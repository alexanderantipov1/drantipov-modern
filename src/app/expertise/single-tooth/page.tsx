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
import { Phone, Award, Clock, Heart, Smile, Sparkles, ShieldCheck, TrendingUp, Hospital, Calendar, Stethoscope, HeartHandshake } from "lucide-react"
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
  title: { absolute: "Single Tooth Implants — Natural Replacement" },
  description: "Replace one missing tooth with a permanent dental implant. Natural appearance, full function, lifetime durability. Roseville, CA.",
  alternates: {
    canonical: "/expertise/single-tooth",
    languages: {
      "en": "/expertise/single-tooth",
      "x-default": "/expertise/single-tooth",
    },
  },
  openGraph: {
    title: "Single Tooth & Bridge Implants",
    description: "Permanent single-tooth dental implants and implant-supported bridges by board-certified oral surgeon.",
    images: [
      {
        url: "/images/dental-implants/dental-implants@2x-0aad592f.jpg",
        width: 1200,
        height: 630,
        alt: "Single Tooth & Bridge Implants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Tooth & Bridge Implants",
    description: "Permanent single-tooth dental implants and implant-supported bridges by board-certified oral surgeon.",
    images: ["/images/dental-implants/dental-implants@2x-0aad592f.jpg"],
  }
}

const iconBenefits = [
  {
    icon: <Smile className="h-5 w-5" />,
    title: "Looks and feels natural",
    description: "Indistinguishable from a real tooth, even up close",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Preserves adjacent teeth",
    description: "Unlike a bridge, no healthy neighbors are reshaped",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Prevents bone resorption",
    description: "Stimulates jaw bone the way a natural root would",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "No clicking or slipping",
    description: "Brushed and flossed exactly like a real tooth",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "25+ year lifespan",
    description: "With proper care, often a lifetime solution",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Restored chewing & confidence",
    description: "Bite into anything without hesitation",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Consultation & 3D Imaging",
    description:
      "Comprehensive examination with CBCT scan to evaluate bone quality, sinus position, and nerve location. We'll discuss your goals and create a personalized treatment plan.",
    duration: "1 hour",
  },
  {
    step: 2,
    title: "Bone Grafting (If Needed)",
    description:
      "If bone volume is insufficient, we perform bone grafting to create a solid foundation. This step may add 3-6 months to the timeline but ensures long-term implant success.",
    duration: "3-6 months healing",
  },
  {
    step: 3,
    title: "Implant Placement",
    description:
      "A titanium implant is precisely placed into the jawbone using digital surgical guides. Most patients experience minimal discomfort and return to normal activities within 2-3 days.",
    duration: "1 hour",
  },
  {
    step: 4,
    title: "Healing & Osseointegration",
    description:
      "Over 3-4 months, the implant fuses with your bone. During this time, you'll wear a temporary crown so there's no gap in your smile.",
    duration: "3-4 months",
  },
  {
    step: 5,
    title: "Custom Crown Placement",
    description:
      "After healing is complete, we create a custom porcelain crown matched to your natural teeth in color, shape, and size. The result is indistinguishable from a natural tooth.",
    duration: "2-3 weeks",
  },
]

const faqs = [
  {
    question: "How long does a single tooth implant last?",
    answer:
      "With proper care and regular dental check-ups, a single tooth implant can last 25+ years or even a lifetime. The titanium implant itself is extremely durable and rarely fails, while the crown may need replacement after 10-15 years due to normal wear.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients report that getting a dental implant is less painful than a tooth extraction. The procedure is performed under local anesthesia, and many patients only require over-the-counter pain medication afterward. We also offer sedation options for anxious patients.",
  },
  {
    question: "Why choose an implant over a bridge?",
    answer:
      "Unlike a traditional bridge which requires grinding down adjacent healthy teeth, a dental implant preserves your natural teeth. Implants also prevent bone loss, last longer, and are easier to clean. While more expensive initially, they're often more cost-effective long-term.",
  },
  {
    question: "Can I get an implant if I've had missing teeth for years?",
    answer:
      "Yes, in most cases. However, prolonged tooth loss leads to bone resorption (shrinkage). A 3D scan will determine if you need bone grafting first. Dr. Antipov specializes in complex implant cases and can restore bone volume when needed.",
  },
  {
    question: "What is the success rate?",
    answer:
      "Dental implants have a 95-98% success rate when placed by an experienced oral surgeon like Dr. Antipov. Success depends on factors like bone quality, oral hygiene, smoking status, and overall health. We thoroughly evaluate all factors during your consultation.",
  },
]

export default function SingleToothPage() {
  const structuredData = [
    getMedicalProcedureSchema({
      name: "Single Tooth Dental Implants",
      description:
        "Replace missing teeth with natural-looking dental implants. Precision placement with digital surgical guides for optimal aesthetics and function. Preserves adjacent healthy teeth.",
      url: `${siteConfig.url}/expertise/single-tooth`,
      procedureType: "Dental Implant",
      preparation:
        "Comprehensive examination with CBCT scan to evaluate bone quality, sinus position, and nerve location. Bone grafting if needed (adds 3-6 months).",
      howPerformed:
        "Titanium implant precisely placed into jawbone using digital surgical guides. Performed under local anesthesia. Temporary crown placed during healing. After 3-4 months of osseointegration, custom porcelain crown is attached.",
      followup:
        "Healing and osseointegration over 3-4 months. Custom crown placement matched to natural teeth. Regular check-ups and good oral hygiene ensure long-term success.",
      bodyLocation: "Tooth",
    }),
    getFAQSchema(faqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      {
        name: "Single Tooth Implants",
        url: `${siteConfig.url}/expertise/single-tooth`,
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
        badge="Precision Implantology"
        title="Single Tooth & Bridge Replacement"
        subtitle="A single-tooth dental implant is a titanium screw placed into the jawbone that replaces one missing tooth from root to crown — a permanent restoration that looks, feels, and functions like a natural tooth."
        image="/images/hero/09-final-crown.jpeg"
      />

      {/* Animated stat cards overlapping hero bottom */}
      <HeroStats stats={[
          {
            icon: <Clock className="h-5 w-5" />,
            value: <><AnimatedCounter to={3} />–6 mo</>,
            label: "Total treatment time",
          },
          {
            icon: <Smile className="h-5 w-5" />,
            value: "1",
            label: "Visit for placement",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            value: <><AnimatedCounter to={95} suffix="%+" /></>,
            label: "Long-term success rate",
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            value: <><AnimatedCounter to={25} suffix="+ yrs" /></>,
            label: "Lifespan with care",
          },
        ]} />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                The Gold Standard for Tooth Replacement
              </h2>
              <p className="text-xl text-neutral-600">
                Dental implants are the closest thing to natural teeth
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                A <strong>single tooth dental implant</strong> replaces a missing tooth from root to crown. The implant
                itself is a small titanium post that is surgically placed into the jawbone, where it fuses with the
                bone and acts as an artificial tooth root. A custom porcelain crown is then attached to restore your
                smile.
              </p>

              <p>
                For multiple adjacent missing teeth, <strong>implant-supported bridges</strong> provide a fixed
                solution without requiring implants for every tooth. Two implants can support 3-4 replacement teeth,
                offering stability superior to traditional bridges.
              </p>

              <p>
                Dr. Antipov uses advanced 3D imaging and digital surgical guides to ensure precise implant placement
                for optimal aesthetics, function, and longevity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Quote — personal touch */}
      <DoctorQuote
        quote="A single tooth implant is the closest we have come to truly replacing a natural tooth. It does not borrow strength from neighbors and it preserves the bone exactly where it is needed."
        author="Dr. Alexander Antipov, DDS"
        role="Board-Certified Oral & Maxillofacial Surgeon"
      />

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Why Choose Dental Implants?
              </h2>
              <p className="text-xl text-neutral-600">
                The most advanced and predictable solution for missing teeth
              </p>

              <IconBenefits items={iconBenefits} columns={2} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Precision & Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Dr. Antipov completed advanced fellowship training in complex implant reconstruction at NYU
                    Langone. He uses cutting-edge technology including CBCT 3D imaging and computer-guided surgery for
                    exceptional precision and predictability.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Heart className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Natural Aesthetics
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Every implant crown is custom-designed to match your natural teeth in color, shape, and
                    translucency. The result is so natural, even you'll forget it's not your original tooth.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Process Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              The Implant Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From consultation to final crown, typically 4-6 months
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VerticalProcessTimeline steps={processSteps} />
          </div>
        </Container>
      </Section>

      {/* Ideal Candidates Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Am I a Candidate for Dental Implants?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <GlassCard>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  You're Likely a Good Candidate If:
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You're missing one or more teeth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You have adequate bone density (or willing to have grafting)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    Your gums are healthy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You're committed to good oral hygiene
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    You're a non-smoker or willing to quit
                  </li>
                </ul>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Common Reasons for Single Tooth Loss:
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Severe tooth decay or root canal failure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Advanced gum disease
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Fractured or broken tooth beyond repair
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Congenitally missing tooth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    Dental trauma or sports injury
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="default" padding="xl" className="scroll-mt-24">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Common Questions
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
        heading="Single-Tooth Implant Consultation"
        subheading="Replace a single missing tooth with a permanent implant. Free 3D CT scan and personalized treatment plan."
      />

      {/* Floating sticky CTA — appears after 25% scroll */}
      <FloatingArticleCTA
        href="/contact"
        label="Free Dental Implant Consultation"
        showAfterPct={25}
      />
    </>
  )
}
