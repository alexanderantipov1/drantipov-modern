import { Section, Container, GlassCard } from "@/components/sections";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/constants/siteConfig";
import PageHero from "@/components/PageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Контакты — бесплатная консультация | Доктор Антипов" },
  description:
    "Запишитесь на бесплатную консультацию русскоговорящего челюстно-лицевого хирурга с 3D КТ. Roseville, CA (район Сакраменто). Звоните (916) 783-2110 или напишите нам онлайн.",
  alternates: {
    canonical: `${siteConfig.url}/ru/contact`,
    languages: {
      ru: `${siteConfig.url}/ru/contact`,
      en: `${siteConfig.url}/contact`,
      "x-default": `${siteConfig.url}/contact`,
    },
  },
  openGraph: {
    title: "Связаться с доктором Антиповым | Бесплатная консультация — Roseville, CA",
    description:
      "Свяжитесь с клиникой доктора Антипова в Roseville, CA. Звоните (916) 783-2110, пишите на info@galleriaoms.com или заполните форму. Бесплатные консультации с 3D КТ.",
    url: "/ru/contact",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Связаться с доктором Антиповым | Бесплатная консультация — Roseville, CA",
    description:
      "Свяжитесь с клиникой доктора Антипова в Roseville, CA. Звоните, пишите или заполните форму. Бесплатные консультации с 3D КТ.",
  },
};

export default function RuContactPage() {
  return (
    <>
      <PageHero
        image="/images/invitations/schedule@2x-d30ac039.jpg"
        eyebrow="Свяжитесь с нами"
        title="Связаться с клиникой"
        subtitle="Напишите или позвоните, чтобы записаться на консультацию или задать любой вопрос. Мы поможем."
        overlay="gradient"
        breadcrumbs={[{ name: "Контакты" }]}
      />

      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                  Как с нами связаться
                </h2>
                <p className="text-lg text-neutral-600">
                  Пациентам — если вы хотите попасть на лечение. Коллегам-стоматологам — если хотите направить пациента. Мы на связи. Свяжитесь, чтобы записаться на консультацию.
                </p>
              </div>

              <div className="space-y-6">
                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Телефон</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </GlassCard>

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

                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Адрес</h3>
                    <address className="not-italic text-neutral-600">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.suite}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </address>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Часы работы</h3>
                    <div className="text-neutral-600">
                      <p>{siteConfig.hours.weekday}</p>
                      <p className="text-sm text-primary-600 mt-2">{siteConfig.hours.emergency}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div>
              <GlassCard>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                  Напишите нам
                </h2>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="gradient" padding="lg">
        <Container size="lg">
          <div className="rounded-2xl overflow-hidden h-96 shadow-md">
            <iframe
              title="Доктор Антипов — челюстно-лицевая хирургия, 911 Reserve Dr, Suite 100, Roseville, CA 95678"
              src="https://www.google.com/maps?q=911+Reserve+Dr+Suite+100,+Roseville,+CA+95678&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
