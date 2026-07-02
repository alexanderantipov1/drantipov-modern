import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Calendar, ArrowRight, Clock, User } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import { ruInsightPosts as insightPosts } from "@/constants/ruInsights"

export const metadata: Metadata = {
  title: "Полезное для пациентов | Челюстно-лицевая хирургия доктора Антипова",
  description:
    "Экспертные статьи о дентальных имплантах, челюстно-лицевой хирургии и здоровье полости рта от доктора Александра Антипова. Помогаем принимать осознанные решения о лечении.",
  alternates: {
    canonical: "/ru/for-patients/insights",
    languages: {
      "ru": "/ru/for-patients/insights",
      "en": "/for-patients/insights",
      "x-default": "/for-patients/insights",
    },
  },
  keywords: [
    "дентальная имплантация",
    "челюстно-лицевая хирургия",
    "здоровье зубов",
    "образование пациентов",
    "здоровье полости рта",
    "уход за имплантами",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Образование пациентов — статьи и материалы",
    description: "Экспертные статьи об имплантации, челюстно-лицевой хирургии, восстановлении и здоровье полости рта от доктора Антипова.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Образование пациентов — статьи и материалы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Образование пациентов — статьи и материалы",
    description: "Экспертные статьи об имплантации, челюстно-лицевой хирургии, восстановлении и здоровье полости рта от доктора Антипова.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

const ruHero = {
  image: "/images/blog/2023-04-10/dental-implants-process-c1577863.jpg",
  eyebrow: "Образование и статьи",
  title: "Полезное для пациентов",
  subtitle:
    "Будьте в курсе всего о дентальных имплантах, челюстно-лицевой хирургии и уходе за пациентами.",
  overlay: "navy" as const,
  breadcrumbs: [{ name: "Пациентам", href: "/ru/for-patients" }, { name: "Полезное" }],
}

const blogPosts = insightPosts

export default function InsightsPage() {
  return (
    <>
      <PageHero {...ruHero} />

      {/* Blog Posts Grid */}
      <Section background="default" padding="xl">
        <Container size="xl">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-full min-h-[250px] bg-neutral-200 rounded-[40px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-600">
                        <Badge variant="outline" className="text-primary-700 border-primary-300">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-neutral-700 leading-relaxed">{post.excerpt}</p>
                    </div>

                    <div className="mt-6">
                      <Button asChild variant="outline" className="group">
                        <Link href={`/ru/for-patients/insights/${post.slug}`}>
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Остались вопросы о здоровье вашей полости рта?
            </h2>
            <p className="text-xl text-neutral-600">
              Запишитесь на консультацию к доктору Антипову — обсудим вашу конкретную ситуацию и варианты лечения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ru/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
