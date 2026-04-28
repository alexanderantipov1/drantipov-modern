import { Section, Container, GlassCard } from "@/components/sections"
import {
  ExpertisePageHero,
  BenefitsList,
  ProcessTimeline,
} from "@/components/expertise"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Award, Clock, Moon } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  getMedicalProcedureSchema,
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

export const metadata = {
  title: "Sleep Apnea Surgery | Surgical Solutions for OSA | Dr. Antipov",
  description:
    "Surgical treatment for obstructive sleep apnea when CPAP fails. Dr. Antipov offers advanced procedures including jaw advancement surgery to permanently resolve sleep apnea.",
}

const benefits = [
  "Permanent solution for obstructive sleep apnea",
  "Eliminates or reduces dependence on CPAP machine",
  "Improves oxygen levels and quality of sleep",
  "Reduces risk of heart disease, stroke, and diabetes",
  "Increases daytime energy and mental clarity",
  "May improve facial aesthetics as a secondary benefit",
]

const processSteps = [
  {
    step: 1,
    title: "Comprehensive Sleep Evaluation",
    description:
      "Review sleep study results, CPAP compliance history, and medical records. We perform 3D imaging and airway analysis to identify obstruction points. Coordinate with your sleep physician for optimal treatment planning.",
    duration: "1-2 hours",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description:
      "Using 3D CT scans, we measure your airway and simulate surgical outcomes. We determine which procedure(s) will best resolve your sleep apnea - options include jaw advancement, airway expansion, or combination approaches.",
    duration: "2-3 weeks",
  },
  {
    step: 3,
    title: "Pre-Surgical Preparation",
    description:
      "Medical clearance from your physician. If jaw advancement (MMA) is planned, orthodontic preparation may be needed. We arrange hospital admission and anesthesia. Detailed pre-operative instructions provided.",
    duration: "Varies",
  },
  {
    step: 4,
    title: "Surgical Procedure",
    description:
      "Performed under general anesthesia in a hospital. For maxillomandibular advancement (MMA), both jaws are moved forward to permanently enlarge the airway. Surgery typically takes 2-4 hours. Most patients stay 1-2 nights in the hospital.",
    duration: "2-4 hours",
  },
  {
    step: 5,
    title: "Recovery & Follow-Up",
    description:
      "Initial swelling subsides in 2-3 weeks. Soft diet for 6-8 weeks. Most patients return to work in 2-3 weeks. Follow-up sleep study at 3-6 months confirms resolution of sleep apnea. Regular monitoring with sleep physician.",
    duration: "6-8 weeks healing",
  },
]

const surgicalOptions = [
  {
    title: "Maxillomandibular Advancement (MMA)",
    description: "Most effective surgical treatment - advances both jaws forward to permanently enlarge the airway. Success rate >90% for resolving OSA.",
  },
  {
    title: "Genioglossus Advancement",
    description: "Advances the tongue attachment point to prevent it from falling back and blocking the airway during sleep.",
  },
  {
    title: "Hyoid Suspension",
    description: "Repositions the hyoid bone (throat bone) to increase airway space and prevent collapse during sleep.",
  },
  {
    title: "Combination Procedures",
    description: "Multiple procedures performed together for maximum airway expansion in severe sleep apnea cases.",
  },
]

const faqs = [
  {
    question: "Why consider surgery instead of CPAP?",
    answer:
      "CPAP is the first-line treatment for sleep apnea, but many patients cannot tolerate it long-term (claustrophobia, skin irritation, travel inconvenience, partner complaints). Surgical options provide a permanent solution without nightly equipment. Surgery is typically considered after CPAP failure or intolerance, though some patients prefer surgery as first-line treatment.",
  },
  {
    question: "How successful is sleep apnea surgery?",
    answer:
      "Maxillomandibular advancement (MMA) has the highest success rate of any sleep apnea surgery - over 90% of patients experience significant improvement or complete resolution. Success rates depend on the severity of sleep apnea, type of procedure, and individual anatomy. Dr. Antipov will discuss realistic expectations during your consultation.",
  },
  {
    question: "Will surgery change my facial appearance?",
    answer:
      "Maxillomandibular advancement (MMA) does change facial appearance by moving the jaws forward. Most patients experience improved facial aesthetics - a stronger jawline, better profile, and more defined facial structure. We use 3D imaging to show you predicted results before surgery. Changes are typically viewed as positive improvements.",
  },
  {
    question: "What is the recovery like?",
    answer:
      "Recovery from MMA is similar to orthognathic surgery. Expect significant swelling for 2-3 weeks, with the worst swelling on days 2-3. You'll be on a liquid/soft diet for 6-8 weeks. Most patients return to work in 2-3 weeks. Numbness in the lower lip is common but usually temporary. Pain is well-controlled with medication.",
  },
  {
    question: "Will I still need CPAP after surgery?",
    answer:
      "The goal of surgery is to eliminate or significantly reduce your need for CPAP. After maxillomandibular advancement, about 90% of patients no longer need CPAP. Some patients with very severe sleep apnea may still need CPAP, but at much lower pressure settings. A follow-up sleep study at 3-6 months post-surgery determines if CPAP is still needed.",
  },
  {
    question: "Is sleep apnea surgery covered by insurance?",
    answer:
      "Most insurance plans cover surgical treatment for obstructive sleep apnea when CPAP has failed or cannot be tolerated. You'll need documentation of CPAP intolerance and a diagnostic sleep study. Our office works with insurance companies to obtain pre-authorization and will provide a detailed cost estimate before surgery.",
  },
]

export default function SleepApneaPage() {
  const structuredData = [
    getMedicalProcedureSchema({
      name: "Sleep Apnea Surgery",
      description:
        "Surgical treatment for obstructive sleep apnea when CPAP fails. Advanced procedures including maxillomandibular advancement (MMA) to permanently enlarge the airway and resolve OSA.",
      url: `${siteConfig.url}/expertise/sleep-apnea`,
      procedureType: "Sleep Apnea Surgery",
      preparation:
        "Review sleep study results and CPAP compliance history. 3D imaging and airway analysis to identify obstruction points. Medical clearance and orthodontic preparation if needed.",
      howPerformed:
        "Maxillomandibular advancement (MMA) performed under general anesthesia in hospital. Both jaws moved forward to permanently enlarge airway. Surgery takes 2-4 hours. Most patients stay 1-2 nights.",
      followup:
        "Initial swelling subsides in 2-3 weeks. Soft diet for 6-8 weeks. Follow-up sleep study at 3-6 months confirms resolution of sleep apnea. Regular monitoring with sleep physician.",
      bodyLocation: "Jaw, Airway",
    }),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
      {
        name: "Sleep Apnea Surgery",
        url: `${siteConfig.url}/expertise/sleep-apnea`,
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
        badge="Airway Surgery"
        title="Sleep Apnea Surgical Solutions"
        subtitle="Permanent surgical treatment for obstructive sleep apnea"
      />

      {/* What It Is Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                A Surgical Solution for Better Sleep
              </h2>
              <p className="text-xl text-neutral-600">
                When CPAP isn't working, surgery can provide lasting relief
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                <strong>Obstructive Sleep Apnea (OSA)</strong> occurs when the airway repeatedly collapses during
                sleep, causing breathing to stop and start throughout the night. This leads to poor sleep quality,
                daytime fatigue, and serious health risks including heart disease, stroke, and diabetes.
              </p>

              <p>
                While CPAP (continuous positive airway pressure) machines are the standard first-line treatment, many
                patients cannot tolerate them long-term. <strong>Surgical treatment</strong> offers a permanent
                solution by enlarging the airway so it doesn't collapse during sleep.
              </p>

              <p>
                The most effective surgical procedure is <strong>maxillomandibular advancement (MMA)</strong>, which
                repositions both the upper and lower jaws forward. This permanently enlarges the airway space and has a
                success rate exceeding 90% - far higher than any other sleep apnea surgery.
              </p>

              <p>
                Dr. Antipov's extensive training in complex jaw surgery makes him uniquely qualified to perform these
                life-changing procedures. He works closely with sleep physicians to ensure optimal outcomes for every
                patient.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Life-Changing Benefits
              </h2>
              <p className="text-xl text-neutral-600">
                Addressing a serious health condition while improving quality of life
              </p>

              <BenefitsList benefits={benefits} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Specialized Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Sleep apnea surgery requires advanced skills in orthognathic surgery and airway management. Dr.
                    Antipov's fellowship training and years of experience ensure you receive the highest level of
                    surgical care.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Moon className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Collaborative Approach
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We work closely with your sleep physician, primary care doctor, and other specialists to ensure
                    comprehensive care. This team approach optimizes surgical outcomes and long-term health.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Surgical Options */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Surgical Treatment Options
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Customized procedures based on your anatomy and severity of sleep apnea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {surgicalOptions.map((option, index) => (
              <GlassCard key={index} variant="hover">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{option.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{option.description}</p>
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
              From evaluation to resolution of sleep apnea
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessTimeline steps={processSteps} />
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

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Breathe Easy Again?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation to evaluate surgical options for your sleep apnea
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:9167832110">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (916) 783-2110
                </a>
              </Button>
            </div>
            <p className="text-sm text-neutral-500">
              Bring your sleep study results and CPAP compliance records to your consultation
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
