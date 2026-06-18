import { Section, Container } from "@/components/sections"
import { ServiceCard } from "@/components/expertise"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { expertise } from "@/constants/siteConfig"
import { Phone } from "lucide-react"
import DualCTA from "@/components/DualCTA"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

export const metadata = {
  title: { absolute: "Oral Surgery Services & Procedures | Dr. Antipov" },
  description: "Full-arch implants, jaw surgery, sleep apnea, bone grafting, single-tooth implants, mole removal — advanced oral surgery in Roseville, CA.",
  alternates: {
    canonical: "/expertise",
    languages: {
      "en": "/expertise",
      "x-default": "/expertise",
    },
  },
  openGraph: {
    title: "Oral Surgery Services & Procedures",
    description: "Full scope of board-certified oral & maxillofacial surgery — implants, jaw surgery, sleep apnea, bone grafting.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Oral Surgery Services & Procedures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oral Surgery Services & Procedures",
    description: "Full scope of board-certified oral & maxillofacial surgery — implants, jaw surgery, sleep apnea, bone grafting.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

export default function ExpertisePage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Expertise", url: `${siteConfig.url}/expertise` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Oral Surgery Services & Procedures",
      description: "Complete list of oral & maxillofacial surgery procedures performed by Dr. Antipov in Roseville, CA — including full-arch implants, bone grafting, jaw surgery, sleep apnea treatment, single-tooth implants, mole removal, TMJ, and wisdom teeth.",
      url: `${siteConfig.url}/expertise`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Full-Arch Dental Implants (All-on-4 / All-on-6)", url: `${siteConfig.url}/expertise/full-arch-implants` },
        { "@type": "ListItem", position: 2, name: "Single Tooth & Bridge Implants", url: `${siteConfig.url}/expertise/single-tooth` },
        { "@type": "ListItem", position: 3, name: "Bone Grafting & Augmentation", url: `${siteConfig.url}/expertise/bone-grafting` },
        { "@type": "ListItem", position: 4, name: "Corrective Jaw Surgery (Orthognathic)", url: `${siteConfig.url}/expertise/jaw-surgery` },
        { "@type": "ListItem", position: 5, name: "Sleep Apnea Treatment", url: `${siteConfig.url}/expertise/sleep-apnea` },
        { "@type": "ListItem", position: 6, name: "Mole Removal", url: `${siteConfig.url}/expertise/mole-removal` },
        { "@type": "ListItem", position: 7, name: "TMJ Treatment", url: `${siteConfig.url}/expertise/tmj` },
        { "@type": "ListItem", position: 8, name: "Wisdom Teeth Removal", url: `${siteConfig.url}/expertise/wisdom-teeth` },
      ],
    },
  ]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <PageHero {...heroContent["/expertise"]!} />

      {/* About Dr. Antipov — biography block */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_844_3.jpg"
                alt="Dr. Alexander Antipov with a happy full-arch implant patient in Roseville, CA"
                width={1409}
                height={1600}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                About Dr. Alexander Antipov
              </h2>

              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Dr. Alexander V. Antipov is a board-certified oral and maxillofacial
                  surgeon based in Roseville, California. A graduate of Moscow State Medical Stomatology University and Loma Linda
                  University School of Dentistry, he completed advanced training in oral and maxillofacial surgery at Albert Einstein
                  College of Medicine.
                </p>

                <p>
                  With extensive experience in dental implants, bone grafting, orthognathic surgery, facial trauma, and cosmetic
                  facial procedures, Dr. Antipov has helped thousands of patients restore their smiles. He maintains hospital
                  privileges at multiple Northern California medical facilities.
                </p>

                <p>
                  Dr. Antipov is a member of the American Board of Oral and Maxillofacial Surgery, AAOMS, and ADA. His dedication
                  to excellence and patient care has made him one of the most trusted oral surgeons in Northern California.
                </p>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Our Specialized Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive oral surgery solutions backed by advanced training and 25+ years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon as any}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Dr. Antipov Section */}
            <DualCTA variant="dual"
      />

    </>
  )
}
