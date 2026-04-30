import { Section, Container, GlassCard } from "@/components/sections"
import { ContactForm } from "@/components/forms/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/constants/siteConfig"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export default function ContactPage() {
  return (
    <>
      <PageHero {...heroContent["/contact"]!} />

      {/* Contact Form & Info */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-neutral-600">
                  Whether you're a patient seeking care or a dentist looking to refer a patient,
                  we're here to help. Contact us today to schedule a consultation.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </GlassCard>

                {/* Email */}
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </GlassCard>

                {/* Location */}
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <address className="not-italic text-neutral-600">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.suite}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </address>
                  </div>
                </GlassCard>

                {/* Hours */}
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Office Hours</h3>
                    <div className="text-neutral-600">
                      <p>{siteConfig.hours.weekday}</p>
                      <p>{siteConfig.hours.weekend}</p>
                      <p className="text-sm text-primary-600 mt-2">{siteConfig.hours.emergency}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <GlassCard>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section Placeholder */}
      <Section background="gradient" padding="lg">
        <Container size="lg">
          <div className="bg-neutral-100 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-neutral-500">Google Maps Embed Placeholder</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
