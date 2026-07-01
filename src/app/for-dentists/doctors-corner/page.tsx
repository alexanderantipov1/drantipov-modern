import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Stethoscope,
  ClipboardList,
  Workflow,
  BookOpen,
  FileDown,
  PlayCircle,
  Phone,
  Mail,
} from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Doctor's Corner — Clinical Resources for Dentists | Dr. Antipov",
  description:
    "A professional resource hub for referring doctors and surgical colleagues: clinical articles, case reports, treatment-planning protocols, research summaries, downloadable resources, and lectures.",
  alternates: {
    canonical: "/for-dentists/doctors-corner",
    languages: {
      "en": "/for-dentists/doctors-corner",
      "x-default": "/for-dentists/doctors-corner",
    },
  },
  keywords: [
    "clinical resources for dentists",
    "oral surgery case reports",
    "implant treatment planning protocols",
    "dental research summaries",
    "surgical technique articles",
    "referring dentist resources",
  ],
  openGraph: {
    title: "Doctor's Corner — Clinical Resources for Dentists",
    description: "Clinical articles, case reports, protocols, research summaries, and downloadable resources for dental professionals.",
    images: [
      {
        url: "/images/blog/2015-06-22/surgery-team-411cef8b.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor's Corner — Clinical Resources for Dentists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor's Corner — Clinical Resources for Dentists",
    description: "Clinical articles, case reports, protocols, research summaries, and downloadable resources for dental professionals.",
    images: ["/images/blog/2015-06-22/surgery-team-411cef8b.jpg"],
  },
}

type ResourceItem = {
  title: string
  meta: string
  description: string
}

type ResourceCategory = {
  id: string
  icon: typeof Stethoscope
  title: string
  blurb: string
  items: ResourceItem[]
}

const categories: ResourceCategory[] = [
  {
    id: "clinical-articles",
    icon: Stethoscope,
    title: "Clinical Articles & Surgical Techniques",
    blurb: "In-depth write-ups on surgical approaches, materials, and clinical decision-making.",
    items: [
      { title: "Placeholder: Surgical Technique Article", meta: "Article · Coming soon", description: "A detailed clinical article will appear here." },
      { title: "Placeholder: Surgical Technique Article", meta: "Article · Coming soon", description: "A detailed clinical article will appear here." },
      { title: "Placeholder: Surgical Technique Article", meta: "Article · Coming soon", description: "A detailed clinical article will appear here." },
    ],
  },
  {
    id: "case-studies",
    icon: ClipboardList,
    title: "Case Studies & Case Reports",
    blurb: "Documented cases with imaging, planning notes, and outcomes for colleague review.",
    items: [
      { title: "Placeholder: Case Report", meta: "Case Study · Coming soon", description: "A documented case report will appear here." },
      { title: "Placeholder: Case Report", meta: "Case Study · Coming soon", description: "A documented case report will appear here." },
      { title: "Placeholder: Case Report", meta: "Case Study · Coming soon", description: "A documented case report will appear here." },
    ],
  },
  {
    id: "protocols",
    icon: Workflow,
    title: "Referral & Treatment-Planning Protocols",
    blurb: "Step-by-step guidelines for referrals, workup, and surgical-to-restorative coordination.",
    items: [
      { title: "Placeholder: Protocol Guideline", meta: "Protocol · Coming soon", description: "A treatment-planning protocol will appear here." },
      { title: "Placeholder: Protocol Guideline", meta: "Protocol · Coming soon", description: "A treatment-planning protocol will appear here." },
      { title: "Placeholder: Protocol Guideline", meta: "Protocol · Coming soon", description: "A treatment-planning protocol will appear here." },
    ],
  },
  {
    id: "research",
    icon: BookOpen,
    title: "Research Summaries & Literature Reviews",
    blurb: "Concise summaries of recent evidence and literature relevant to daily practice.",
    items: [
      { title: "Placeholder: Research Summary", meta: "Research · Coming soon", description: "A research summary will appear here." },
      { title: "Placeholder: Research Summary", meta: "Research · Coming soon", description: "A research summary will appear here." },
      { title: "Placeholder: Research Summary", meta: "Research · Coming soon", description: "A research summary will appear here." },
    ],
  },
  {
    id: "downloads",
    icon: FileDown,
    title: "Downloadable Resources",
    blurb: "PDFs, checklists, and referral forms ready to print or share with your team.",
    items: [
      { title: "Placeholder: Downloadable Resource", meta: "PDF · Coming soon", description: "A downloadable resource will appear here." },
      { title: "Placeholder: Downloadable Resource", meta: "PDF · Coming soon", description: "A downloadable resource will appear here." },
      { title: "Placeholder: Downloadable Resource", meta: "PDF · Coming soon", description: "A downloadable resource will appear here." },
    ],
  },
  {
    id: "videos",
    icon: PlayCircle,
    title: "Videos & Recorded Lectures",
    blurb: "Recorded lectures, surgical walkthroughs, and technique demonstrations.",
    items: [
      { title: "Placeholder: Recorded Lecture", meta: "Video · Coming soon", description: "A recorded lecture or video will appear here." },
      { title: "Placeholder: Recorded Lecture", meta: "Video · Coming soon", description: "A recorded lecture or video will appear here." },
      { title: "Placeholder: Recorded Lecture", meta: "Video · Coming soon", description: "A recorded lecture or video will appear here." },
    ],
  },
]

export default function DoctorsCornerPage() {
  return (
    <>
      <PageHero {...heroContent["/for-dentists/doctors-corner"]!} />

      {/* Intro + category quick-nav */}
      <Section background="default" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              A Professional Resource Hub
            </h2>
            <p className="text-lg text-neutral-600">
              Curated, peer-to-peer content for referring doctors and surgical colleagues. Content is
              being added regularly — explore the categories below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex items-start gap-3 rounded-2xl border border-neutral-200 p-4 transition hover:border-primary-300 hover:bg-primary-50/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition">
                  <cat.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 leading-tight">{cat.title}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{cat.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Category sections */}
      {categories.map((cat, index) => (
        <Section
          key={cat.id}
          background={index % 2 === 0 ? "accent" : "default"}
          padding="xl"
        >
          <Container size="xl">
            <div id={cat.id} className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                  <cat.icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                    {cat.title}
                  </h2>
                  <p className="text-neutral-600">{cat.blurb}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <GlassCard key={i} className="p-6 flex flex-col">
                    <Badge className="self-start bg-neutral-100 text-neutral-500 hover:bg-neutral-100">
                      {item.meta}
                    </Badge>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-neutral-400">
                      Coming soon
                    </span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Contact CTA */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Have a Case to Discuss?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Reach out to Dr. Antipov's team for a direct case consultation, or to suggest a topic
              you'd like to see covered in the Doctor's Corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (916) 783-2110
              </a>
              <a
                href="mailto:referrals@drantipov.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-full font-semibold hover:bg-neutral-50 transition-colors border-2 border-primary-600"
              >
                <Mail className="h-5 w-5" />
                referrals@drantipov.com
              </a>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/for-dentists">← Back to For Dentists</Link>
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
