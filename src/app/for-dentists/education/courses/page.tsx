import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Clock, Users, BookOpen, Video, CheckCircle, ExternalLink } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata = {
  title: "Dental Implant Education & Courses | Fusion Dental Academy | Dr. Antipov",
  description:
    "Master advanced implant techniques with hands-on courses from Dr. Antipov. Full-arch restoration, bone grafting, and complex implantology training. CE credits available.",
}

const courses = [
  {
    title: "Free e-Book: Orthognathic Surgery: Second Edition",
    lessons: "1 Lesson",
    ceCredits: null,
    level: "All Levels",
    description:
      "Comprehensive e-book on orthognathic surgery techniques and protocols. Essential reading for surgeons interested in corrective jaw surgery.",
    price: "Free",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-second-edition",
  },
  {
    title: "EZ Block: Alveolar Ridge Augmentation",
    lessons: "35 Lessons",
    ceCredits: null,
    level: "Intermediate to Advanced",
    description:
      "Master advanced ridge augmentation techniques for implant site development. Learn block grafting, GBR, and soft tissue management for optimal implant outcomes.",
    price: "$690.00",
    link: "https://www.fusiondentalacademy.com/courses/alveolar-ridge-augmentation",
  },
  {
    title: "All-on-4, 5, 6, X (Full Arch Implant Course) - 7 CE Units",
    lessons: "34 Lessons",
    ceCredits: "7 CE Units",
    level: "Advanced",
    description:
      "Comprehensive full-arch implant restoration training covering All-on-4, All-on-5, All-on-6, and All-on-X protocols. From treatment planning to final prosthesis delivery.",
    price: "$549.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-dental-implant-course-all-on-4-5-6-X",
  },
  {
    title: "IN PERSON 2 Days Full Arch Training (20 CE Units)",
    lessons: "3 Lessons",
    ceCredits: "20 CE Units",
    level: "Advanced",
    description:
      "Exclusive hands-on 2-day intensive training in full-arch implant protocols. Live surgery observation and hands-on practice with expert mentorship.",
    price: "$12,299.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-specialists-deep-dive-express-course",
  },
  {
    title: "Zygomatic Implants - Everything is Possible",
    lessons: "18 Lessons",
    ceCredits: null,
    level: "Advanced",
    description:
      "Advanced training in zygomatic implant placement for severely atrophic maxilla. Anatomy, surgical techniques, and complication management.",
    price: "$650.00",
    link: "https://www.fusiondentalacademy.com/courses/zygomatic-implants-everything-is-possible",
  },
  {
    title: "Full Arch Digital Flow A to Z Course",
    lessons: "19 Lessons",
    ceCredits: null,
    level: "Intermediate to Advanced",
    description:
      "Complete digital workflow for full-arch cases from digital impressions to final prosthesis. CBCT planning, guided surgery, and digital prosthetics.",
    price: "$499.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-digital-flow-a-to-z-course",
  },
  {
    title: "Wisdom Teeth Removal in 5 Minutes",
    lessons: "12 Lessons",
    ceCredits: null,
    level: "Beginner to Intermediate",
    description:
      "Efficient and safe wisdom teeth extraction techniques. Learn proper surgical approaches, instrumentation, and post-operative care protocols.",
    price: "$199.00",
    link: "https://www.fusiondentalacademy.com/courses/wisdom-teeth-removal",
  },
  {
    title: "How to Setup 3D Dental Printer - Technical Support Tutorial",
    lessons: "4 Lessons",
    ceCredits: null,
    level: "All Levels",
    description:
      "Complete guide to setting up and operating 3D dental printers. Hardware setup, software configuration, and troubleshooting common issues.",
    price: "$150.00",
    link: "https://www.fusiondentalacademy.com/courses/how-to-setup-3d-printer-technical-support-tutorial-video",
  },
  {
    title: "Orthodontic Preparation For Orthognathic Surgery - 2 CE Units",
    lessons: "12 Lessons",
    ceCredits: "2 CE Units",
    level: "Intermediate",
    description:
      "Pre-surgical orthodontic treatment planning and execution for orthognathic surgery cases. Coordination between orthodontics and surgery.",
    price: "$35.00",
    link: "https://www.fusiondentalacademy.com/courses/orthodontic-surgery-preparation",
  },
  {
    title: "Orthognathic Surgery KLS Martin Open Box (One Day Before Surgery)",
    lessons: "1 Lesson",
    ceCredits: null,
    level: "Advanced",
    description:
      "Detailed walkthrough of KLS Martin surgical kit preparation and organization for orthognathic surgery. Pre-operative checklist and setup.",
    price: "$19.97",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-open-box-kls-martin",
  },
]

const benefits = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Limited to 12-15 participants for personalized attention and hands-on time",
  },
  {
    icon: Award,
    title: "Expert Instruction",
    description: "Learn directly from Dr. Antipov with 15+ years of implant surgery experience",
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
              Why Fusion Dental Academy?
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
                    Dr. Alexander Antipov brings over 15 years of clinical experience in complex implantology and
                    full-arch rehabilitation. His fellowship training at Columbia/Harlem Hospital and residency at
                    Albert Einstein College of Medicine provided him with advanced skills in surgical techniques and
                    treatment planning.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    As founder of Fusion Dental Academy, Dr. Antipov is passionate about elevating the standard of
                    implant dentistry through education. His teaching style emphasizes practical, immediately
                    applicable techniques backed by evidence-based protocols.
                  </p>
                  <Button asChild>
                    <Link href="/about">Learn More About Dr. Antipov</Link>
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
