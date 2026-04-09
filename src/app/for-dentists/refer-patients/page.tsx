import { Section, Container, GlassCard } from "@/components/sections"
import { ContactForm } from "@/components/forms/ContactForm"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/constants/siteConfig"

const referralBenefits = [
  {
    title: "We Handle the Complex Procedures",
    description: "We take care of the surgical phase—implant placement, bone grafting, extractions, and other complex procedures—so you can focus on what you do best."
  },
  {
    title: "Patient Returns to You for Restorative Care",
    description: "After the surgical phase is complete and healing is confirmed, your patient returns to your practice for the final restoration and ongoing care."
  },
  {
    title: "Seamless Communication",
    description: "We keep you informed at every step with detailed treatment plans, progress updates, and comprehensive post-operative reports."
  },
  {
    title: "Same-Day Consultations Available",
    description: "Your patients receive prompt attention. We offer same-day or next-day consultations for urgent cases."
  },
  {
    title: "Preserve Your Patient Relationships",
    description: "We're here to support your practice, not compete with it. Your patients remain your patients throughout the process."
  },
]

export default function ReferPatientsPage() {
  return (
    <>
      <Section background="gradient" padding="xl" className="pt-32">
        <Container size="lg">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
              Refer a Patient
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600">
              Partner with Dr. Antipov for your patients' surgical needs. We handle the complex procedures and send patients back to you for restorative care.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                  A True Partnership for Your Practice
                </h2>
                <div className="space-y-4 text-lg text-neutral-600">
                  <p>
                    When you refer a patient to Dr. Antipov, you're partnering with an experienced oral surgeon who understands the importance of your patient relationships.
                  </p>
                  <p>
                    We focus exclusively on the surgical phase of treatment—whether it's implant placement, bone grafting, extractions, or other complex procedures. Once the surgical work is complete and your patient has healed, they return to your practice for the restorative phase and ongoing dental care.
                  </p>
                  <p>
                    This collaborative approach ensures your patients receive expert surgical care while maintaining continuity with their trusted general dentist.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-neutral-900">
                  Why Dentists Choose to Refer to Dr. Antipov
                </h3>
                {referralBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{benefit.title}</h4>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-4">
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Direct Referral Line</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">Priority scheduling for referred patients</p>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email Referrals</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div>
              <GlassCard>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                  Submit a Referral
                </h2>
                <p className="text-neutral-600 mb-6">
                  Complete the form below and we'll contact you to coordinate your patient's care.
                </p>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
              Our Referral Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <GlassCard className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-neutral-900 mb-2">You Refer</h3>
                <p className="text-neutral-600">Submit a referral via phone, email, or form. Include relevant records and imaging.</p>
              </GlassCard>
              <GlassCard className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-neutral-900 mb-2">We Treat</h3>
                <p className="text-neutral-600">Dr. Antipov performs the surgical procedure and manages post-op care until healed.</p>
              </GlassCard>
              <GlassCard className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-neutral-900 mb-2">Patient Returns</h3>
                <p className="text-neutral-600">Your patient returns to you for restorative work and continued care.</p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
