import { Section, Container, GlassCard } from "@/components/sections"
import { ConsultationForm } from "@/components/forms/ConsultationForm"
import { Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import { siteConfig } from "@/constants/siteConfig"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata = {
  title: "Schedule Your Consultation | Dr. Antipov | Northern California",
  description:
    "Schedule a consultation with Dr. Antipov for dental implants, jaw surgery, or full-arch restoration. New patients welcome. Convenient Roseville location.",
}

const whatToExpect = [
  {
    step: "1",
    title: "Comprehensive Evaluation",
    description: "Dr. Antipov will review your medical history, perform a clinical examination, and discuss your concerns and goals.",
  },
  {
    step: "2",
    title: "Advanced Imaging (If Needed)",
    description: "We may take 3D CBCT scans or panoramic x-rays to thoroughly evaluate your anatomy and create a precise treatment plan.",
  },
  {
    step: "3",
    title: "Personalized Treatment Plan",
    description: "Dr. Antipov will explain your diagnosis, discuss all treatment options, answer your questions, and provide cost estimates.",
  },
  {
    step: "4",
    title: "No Pressure",
    description: "Take your time to consider your options. We never rush or pressure patients into making decisions.",
  },
]

export default function ConsultationPage() {
  return (
    <>
      <PageHero {...heroContent["/for-patients/consultation"]!} />

      {/* Main Content - Form and Info */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
                      Request a Consultation
                    </h2>
                    <p className="text-neutral-600">
                      Fill out the form below and we'll contact you within 24 hours to schedule your appointment.
                    </p>
                  </div>

                  <ConsultationForm />
                </div>
              </GlassCard>
            </div>

            {/* Office Info Sidebar - Takes 1 column */}
            <div className="space-y-6">
              {/* Office Location */}
              <GlassCard>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">Office Location</h3>
                  </div>
                  <div className="text-neutral-700 space-y-1">
                    <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                    <p>
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                      {siteConfig.contact.address.zip}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${siteConfig.contact.address.street} ${siteConfig.contact.address.suite}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary-600 hover:underline text-sm font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </GlassCard>

              {/* Office Hours */}
              <GlassCard>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">Office Hours</h3>
                  </div>
                  <div className="text-neutral-700 space-y-2 text-sm">
                    <p>{siteConfig.hours.weekday}</p>
                    <p>{siteConfig.hours.weekend}</p>
                    <p className="text-primary-600 font-medium pt-2">{siteConfig.hours.emergency}</p>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Info */}
              <GlassCard>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-900">Contact Us</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-neutral-700 hover:text-primary-600"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-neutral-700 hover:text-primary-600"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* New Patients Welcome */}
              <GlassCard className="bg-primary-50 border-primary-200">
                <div className="text-center space-y-3">
                  <CheckCircle className="h-10 w-10 text-primary-600 mx-auto" />
                  <h3 className="font-semibold text-neutral-900">New Patients Welcome</h3>
                  <p className="text-sm text-neutral-700">
                    We're accepting new patients and most insurance plans. Same-day emergency appointments available.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* What to Expect Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              What to Expect at Your Consultation
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Your first visit typically lasts 45-60 minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whatToExpect.map((item) => (
              <GlassCard key={item.step} className="text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <GlassCard className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary-600 mx-auto" />
                <p className="text-neutral-700 font-medium">Interactive Map</p>
                <p className="text-sm text-neutral-600">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.suite}
                  <br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
