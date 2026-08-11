import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Clock, Users, BookOpen, Video, CheckCircle, ExternalLink } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { courses } from "@/constants/courses"

export const metadata = {
  title: { absolute: "Dental Implant Education & Hands-On Training Courses" },
  description:
    "Master advanced implant techniques with hands-on surgical courses from Dr. Antipov. Full-arch restoration and complex bone grafting. Earn CE credits.",
  alternates: {
    canonical: "/for-dentists/education/courses",
    languages: {
      "en": "/for-dentists/education/courses",
      "x-default": "/for-dentists/education/courses",
    },
  },
  openGraph: {
    title: "Continuing Education Courses",
    description: "Hands-on surgical training and continuing education courses for general dentists.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Continuing Education Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuing Education Courses",
    description: "Hands-on surgical training and continuing education courses for general dentists.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

const benefits = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Limited to 12-15 participants for personalized attention and hands-on time",
  },
  {
    icon: Award,
    title: "Expert Instruction",
    description: "Learn directly from Dr. Antipov with 25+ years of implant surgery experience",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description: "Detailed course manuals, surgical protocols, and ongoing email support",
  },
  {
    icon: Video,
    title: "Video Library Access",
    description: "1-year access to online video library with 50+ surgical case videos",
  },
]

export default function EducationCoursesPage() {
  return (
    <>
      <PageHero {...heroContent["/for-dentists/education/courses"]!} />

      {/* Why Choose Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Why Continuing Education with Dr. Antipov?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real-world training from a practicing surgeon who places implants every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <GlassCard key={index} variant="hover">
                  <div className="space-y-4 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary-100">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">{benefit.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Courses Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Available Courses
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive training programs for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <GlassCard key={index} variant="hover" className="overflow-hidden flex flex-col">
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  {/* Course Header */}
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

                  {/* Price */}
                  <div className="text-3xl font-bold text-primary-600">{course.price}</div>

                  {/* Description */}
                  <p className="text-neutral-700 text-sm leading-relaxed flex-grow">{course.description}</p>

                  {/* CTA */}
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

      {/* About Dr. Antipov Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-neutral-400">
                      <p className="text-center px-6">Dr. Alexander Antipov</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-3xl font-serif font-bold text-neutral-900">
                    Learn from a Master Clinician
                  </h2>
                  <p className="text-neutral-700 leading-relaxed">
                    Dr. Alexander Antipov brings over 25 years of clinical experience in complex implantology and
                    full-arch rehabilitation. His fellowship training at Columbia/Harlem Hospital and residency at
                    Albert Einstein College of Medicine provided him with advanced skills in surgical techniques and
                    treatment planning.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Dr. Antipov is passionate about elevating the standard of
                    implant dentistry through education. His teaching style emphasizes practical, immediately
                    applicable techniques backed by evidence-based protocols.
                  </p>
                  <Button asChild>
                    <Link href="/our-team">Learn More About Dr. Antipov</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Advance Your Skills?
            </h2>
            <p className="text-xl text-neutral-600">
              Join hundreds of dentists who have transformed their practices through our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a
                  href="https://www.udemy.com/user/dr-alexander-antipov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse All Courses on Udemy
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-500">
              Group discounts available • Custom on-site training options • ADA CERP recognized provider
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
