import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Section, Container } from "@/components/sections"
import ReferringDoctorsTabs from "@/components/for-dentists/ReferringDoctorsTabs"

export const metadata: Metadata = {
  title: "Referring Doctors — Referral Form, Study Club & Resources | Dr. Antipov",
  description:
    "Resources for referring doctors: secure online referral form, printable referral PDF, Sacramento Study Club information, and professional links. Partnering with you to provide exceptional oral and maxillofacial care in Roseville, CA.",
  alternates: {
    canonical: "/for-dentists/referring-doctors",
    languages: {
      en: "/for-dentists/referring-doctors",
      "x-default": "/for-dentists/referring-doctors",
    },
  },
  openGraph: {
    title: "Referring Doctors — Dr. Antipov Oral Surgery",
    description:
      "Secure online referral form, printable referral PDF, Sacramento Study Club, and professional resources for referring doctors.",
    url: "https://www.drantipov.com/for-dentists/referring-doctors",
    type: "website",
  },
}

export default function ReferringDoctorsPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden pt-24 bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/2015-06-22/surgery-team-411cef8b.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6">
            For Professionals
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Referring Doctors
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            Partnering with you to provide exceptional oral and maxillofacial care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Book Consultation
            </Link>
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (916) 783-2110
            </a>
          </div>
        </div>
      </section>

      <Section background="default" padding="xl">
        <Container size="xl">
          <ReferringDoctorsTabs />
        </Container>
      </Section>
    </>
  )
}
