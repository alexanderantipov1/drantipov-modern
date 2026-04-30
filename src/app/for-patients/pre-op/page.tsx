import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Phone, Calendar } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Pre-Operative Instructions | Preparing for Surgery | Dr. Antipov",
  description:
    "Essential pre-operative instructions for oral surgery with Dr. Antipov. Learn what to do before your procedure, what to bring, and how to prepare for a successful surgery.",
  keywords: [
    "pre-operative instructions",
    "oral surgery preparation",
    "before surgery checklist",
    "dental implant preparation",
    "jaw surgery prep",
    "surgical preparation",
  ],
}

const beforeSurgeryChecklist = [
  {
    title: "Medications",
    instructions: [
      "Take all regular medications as prescribed unless specifically instructed otherwise",
      "Inform us of ALL medications, supplements, and herbal remedies you're taking",
      "Stop blood thinners (aspirin, ibuprofen, vitamin E) 7 days before surgery if approved by your physician",
      "Bring a list of all current medications to your appointment",
    ],
  },
  {
    title: "Eating & Drinking",
    instructions: [
      "NPO (Nothing by mouth) after midnight before surgery if receiving IV sedation or general anesthesia",
      "Clear liquids only up to 2 hours before surgery for local anesthesia procedures",
      "No alcohol for 24 hours before surgery",
      "Avoid heavy, fatty meals the night before",
    ],
  },
  {
    title: "Personal Preparation",
    instructions: [
      "Arrange for a responsible adult to drive you home (required for sedation)",
      "Wear comfortable, loose-fitting clothing with short sleeves",
      "Remove contact lenses, jewelry, and piercings",
      "Do not wear makeup, nail polish, or artificial nails",
      "Brush your teeth and rinse with mouthwash before arriving",
    ],
  },
  {
    title: "Medical Conditions",
    instructions: [
      "Notify us immediately if you develop a cold, flu, or fever within 3 days of surgery",
      "Inform us of any changes to your medical history since your consultation",
      "If you have diabetes, discuss blood sugar management with your doctor",
      "Report any recent dental infections or issues",
    ],
  },
]

const whatToBring = [
  "Photo ID and insurance cards",
  "List of current medications with dosages",
  "Completed medical history forms (if not already submitted)",
  "Payment or insurance co-payment",
  "Headphones or music player (optional, for relaxation)",
  "Any prescribed pre-operative medications",
]

const whatNotToDo = [
  "Do not smoke or use tobacco products for at least 24 hours before surgery (ideally 2 weeks)",
  "Do not drink alcohol for 24 hours before surgery",
  "Do not take aspirin, ibuprofen, or blood-thinning supplements unless approved",
  "Do not wear contact lenses (bring glasses instead)",
  "Do not drive yourself if receiving sedation",
  "Do not eat or drink after midnight if having IV sedation",
]

const dayOfSurgery = [
  {
    title: "Arrival Time",
    description: "Arrive 15-30 minutes before your scheduled appointment to complete any remaining paperwork.",
  },
  {
    title: "Companion Requirement",
    description: "A responsible adult MUST accompany you and remain at our office if you're receiving IV sedation or general anesthesia.",
  },
  {
    title: "Clothing",
    description: "Wear short sleeves and comfortable clothing. Avoid tight collars or restrictive garments.",
  },
  {
    title: "Post-Op Transportation",
    description: "Your companion must drive you directly home after surgery. You cannot drive, operate machinery, or make important decisions for 24 hours.",
  },
]

export default function PreOpPage() {
  return (
    <>
      <PageHero {...heroContent["/for-patients/pre-op"]!} />

      {/* Important Notice */}
      <Section background="default" padding="md">
        <Container size="lg">
          <GlassCard className="p-6 md:p-8 border-l-4 border-amber-500">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Important Reminder</h3>
                <p className="text-neutral-700 leading-relaxed">
                  If you develop a cold, flu, fever, or any illness within 3 days of your surgery, please call our office immediately at <a href="tel:9167832110" className="text-primary-600 hover:underline font-semibold">(916) 783-2110</a>. We may need to reschedule your procedure for your safety.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Before Surgery Checklist */}
      <Section background="accent" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Before Your Surgery
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Follow these guidelines in the days leading up to your procedure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeSurgeryChecklist.map((section, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                      <span className="text-primary-600 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* What to Bring */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              What to Bring on Surgery Day
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whatToBring.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* What NOT to Do */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 bg-red-50/50">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              What NOT to Do Before Surgery
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {whatNotToDo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Day of Surgery */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Day of Surgery
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              What to expect when you arrive at our office
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayOfSurgery.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sedation-Specific Instructions */}
      <Section background="accent" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Special Instructions for IV Sedation or General Anesthesia
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>NPO Status:</strong> Nothing by mouth (no food, drinks, gum, mints) after midnight the night before surgery. This includes water.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Responsible Adult:</strong> A responsible adult (18+) must accompany you, remain at our office during the procedure, and drive you directly home.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Post-Sedation Restrictions:</strong> Do not drive, operate machinery, sign legal documents, or make important decisions for 24 hours after sedation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Supervision Required:</strong> You must have a responsible adult stay with you for at least 4-6 hours after returning home.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Questions CTA */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Questions About Your Procedure?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you prepare. Don't hesitate to call us with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Our Office
              </a>
              <Button size="lg" variant="outline" asChild>
                <Link href="/for-patients/post-op">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Post-Op Instructions
                </Link>
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
