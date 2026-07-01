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
  ExternalLink,
  Award,
  Users,
  Video,
  GraduationCap,
} from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { courses } from "@/constants/courses"

export const metadata: Metadata = {
  title: "Doctor's Corner — Surgical Courses & CE Training for Doctors | Dr. Antipov",
  description:
    "Advance your surgical skills with Dr. Antipov's courses for doctors: full-arch implant training, zygomatic implants, orthognathic surgery, bone grafting, and more. Free e-book and CE credit options.",
  alternates: {
    canonical: "/for-dentists/doctors-corner",
    languages: {
      "en": "/for-dentists/doctors-corner",
      "x-default": "/for-dentists/doctors-corner",
    },
  },
  keywords: [
    "dental implant courses",
    "full arch implant training",
    "zygomatic implant course",
    "orthognathic surgery course",
    "dental CE credits",
    "oral surgery continuing education",
    "implant courses for dentists",
  ],
  openGraph: {
    title: "Doctor's Corner — Surgical Courses & CE Training",
    description: "Full-arch implant training, zygomatic implants, orthognathic surgery, and more — courses for doctors taught by Dr. Antipov.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor's Corner — Surgical Courses & CE Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor's Corner — Surgical Courses & CE Training",
    description: "Full-arch implant training, zygomatic implants, orthognathic surgery, and more — courses for doctors taught by Dr. Antipov.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  },
}

const trainingBenefits = [
  {
    icon: Award,
    title: "Learn from a Master Clinician",
    description: "25+ years of board-certified surgical experience, with more full-arch cases than nearly any surgeon in the field.",
  },
  {
    icon: Users,
    title: "Hands-On Mentorship",
    description: "In-person intensives limited to small groups with live surgery observation and direct mentorship.",
  },
  {
    icon: GraduationCap,
    title: "CE Credits Available",
    description: "Earn up to 20 CE units with select courses — from online modules to 2-day in-person training.",
  },
  {
    icon: Video,
    title: "Learn at Your Own Pace",
    description: "Online courses with lifetime access, real surgical footage, and step-by-step protocols you can apply immediately.",
  },
]

const upcomingResources = [
  { icon: Stethoscope, title: "Clinical Articles & Surgical Techniques" },
  { icon: ClipboardList, title: "Case Studies & Case Reports" },
  { icon: Workflow, title: "Referral & Treatment-Planning Protocols" },
  { icon: BookOpen, title: "Research Summaries & Literature Reviews" },
  { icon: FileDown, title: "Downloadable Resources & Forms" },
  { icon: PlayCircle, title: "Videos & Recorded Lectures" },
]

const featuredCourse = courses[0]
const catalogCourses = courses.slice(1)

export default function DoctorsCornerPage() {
  return (
    <>
      <PageHero {...heroContent["/for-dentists/doctors-corner"]!} />

      {/* Why Train with Dr. Antipov */}
      <Section background="default" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Surgical Training Built for Practicing Doctors
            </h2>
            <p className="text-lg text-neutral-600">
              Real-world courses from a surgeon who operates every day — from free resources to
              intensive hands-on training with CE credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingBenefits.map((benefit, index) => (
              <GlassCard key={index} variant="hover" className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary-100 mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Free Course */}
      <Section background="gradient" padding="lg">
        <Container size="lg">
          <GlassCard variant="premium" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <Badge className="bg-primary-600 text-white hover:bg-primary-600 mb-4">
                  Featured · Free Course
                </Badge>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-3">
                  Orthognathic Surgery: Second Edition
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  A free e-book by Dr. Antipov offering a comprehensive guide to corrective jaw and
                  facial surgery. Part one presents case studies personally undertaken by Dr. Antipov —
                  from bite and airway corrections to complex procedures involving the mandible,
                  maxilla, and nasal structures. Part two is a step-by-step manual covering the entire
                  process, from surgical planning to post-operative care.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-0.5">✓</span>
                    <span>Real case studies across bite, airway, and facial-aesthetic corrections</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-0.5">✓</span>
                    <span>Step-by-step guidance from treatment planning through recovery</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-0.5">✓</span>
                    <span>Blends surgical, dental, and cosmetic perspectives — free to enroll</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <a
                    href={featuredCourse?.link ?? "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-second-edition"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Enroll Free
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="hidden md:flex shrink-0 items-center justify-center">
                <span className="flex h-40 w-40 items-center justify-center rounded-3xl bg-primary-100 text-primary-600">
                  <BookOpen className="h-20 w-20" />
                </span>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Course Catalog */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Courses for Doctors
            </h2>
            <p className="text-lg text-neutral-600">
              Online and in-person training in full-arch implants, zygomatic implants, orthognathic
              surgery, bone grafting, and digital workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {catalogCourses.map((course, index) => (
              <GlassCard key={index} variant="hover" className="overflow-hidden flex flex-col">
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 min-h-[3.5rem]">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary-50 text-primary-700 border-primary-200">
                        <BookOpen className="mr-1 h-3 w-3" />
                        {course.lessons}
                      </Badge>
                      {course.ceCredits && (
                        <Badge variant="outline" className="bg-accent-50 text-accent-700 border-accent-200">
                          <Award className="mr-1 h-3 w-3" />
                          {course.ceCredits}
                        </Badge>
                      )}
                      <Badge variant="outline" className="bg-neutral-100 text-neutral-700">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-primary-600">{course.price}</div>

                  <p className="text-neutral-700 text-sm leading-relaxed flex-grow">{course.description}</p>

                  <div className="pt-4 mt-auto">
                    <Button asChild className="w-full" size="lg">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Course
                        <span className="sr-only"> (opens in a new tab)</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coming Soon Resources */}
      <Section background="accent" padding="lg">
        <Container size="lg">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-3">
              More Coming to the Doctor's Corner
            </h2>
            <p className="text-neutral-600">
              Beyond courses, we're building a library of free professional resources for colleagues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingResources.map((resource, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/60 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <resource.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-medium text-neutral-800 text-sm leading-tight">{resource.title}</h3>
                  <span className="text-xs text-neutral-400">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Ready to Advance Your Skills?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join hundreds of doctors who have transformed their practices through Dr. Antipov's
              training programs. Questions about a course or a case? Reach out directly.
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
                <Link href="/for-dentists/education/courses">See Full CE Course Details</Link>
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
