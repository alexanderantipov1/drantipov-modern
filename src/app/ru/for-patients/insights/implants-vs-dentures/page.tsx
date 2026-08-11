import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Импланты или съёмные протезы — инновации 2026",
  description:
    "Свежий взгляд на инновации в дентальной имплантологии: 3D-печать, нанотехнологии, «умные» импланты и планирование лечения с ИИ.",
  alternates: {
    canonical: "/ru/for-patients/insights/implants-vs-dentures",
    languages: {
      "en": "/for-patients/insights/implants-vs-dentures",
      "ru": "/ru/for-patients/insights/implants-vs-dentures",
      "x-default": "/for-patients/insights/implants-vs-dentures",
    },
  },
  keywords: [
    "дентальные импланты 2026",
    "инновации в имплантологии",
    "3D-печать импланты",
    "умные импланты",
    "нанотехнологии в стоматологии",
    "технологии дентальных имплантов",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Импланты или съёмные протезы — 2026",
    description: "Современные дентальные импланты против классических съёмных протезов — инновации: 3D-печать, нанотехнологии, умные импланты.",
    images: [
      {
        url: "/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg",
        width: 1200,
        height: 630,
        alt: "Импланты или съёмные протезы — 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Импланты или съёмные протезы — 2026",
    description: "Современные дентальные импланты против классических съёмных протезов — инновации: 3D-печать, нанотехнологии, умные импланты.",
    images: ["/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg"],
  }
}

export default function ImplantsVsDenturesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/implants-vs-dentures#article","headline":"Прощайте, съёмные протезы: дентальные импланты 2026 года","description":"Современные дентальные импланты против классических съёмных протезов — 10 революционных технологий: 3D-печать, нанотехнологии, умные импланты, планирование с ИИ.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/implants-vs-dentures","datePublished":"2024-08-13","dateModified":"2026-04-28","image":["https://www.drantipov.com/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/implants-vs-dentures"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":"https://www.drantipov.com/ru"},{"@type":"ListItem","position":2,"name":"Пациентам","item":"https://www.drantipov.com/ru/for-patients"},{"@type":"ListItem","position":3,"name":"Полезное","item":"https://www.drantipov.com/ru/for-patients/insights"},{"@type":"ListItem","position":4,"name":"Прощайте, съёмные протезы: дентальные импланты 2026 года","item":"https://www.drantipov.com/ru/for-patients/insights/implants-vs-dentures"}]}]` }}
      />
      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/ru/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              К списку статей
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                Дентальные импланты
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>13 августа 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Прощайте, съёмные протезы: дентальные импланты 2026 года
            </h1>



            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg"
                alt="Современные дентальные импланты в сравнении с классическими съёмными протезами"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Дентальные импланты прошли долгий путь с момента их появления в 1960-х годах. Сегодняшние
                технологии меняют сам подход к замещению зубов: пациентам доступны небывалые ранее уровни
                комфорта, функции и эстетики.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Эволюция дентальных имплантов
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Современные дентальные импланты — вершина восстановительной стоматологии. В отличие от
                съёмных протезов, которые лежат на дёснах, импланты хирургически устанавливают в челюстную
                кость. Это даёт постоянную, стабильную опору, которая выглядит, ощущается и работает как
                собственные зубы.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                10 революционных технологий, меняющих дентальные импланты в 2026 году
              </h2>

              <div className="space-y-8 my-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">1. 3D-печать</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    3D-печать изменила нашу способность создавать импланты, действительно подогнанные под
                    конкретного пациента. Индивидуальные абатменты и хирургические шаблоны изготавливают
                    с небывалой точностью — это гарантирует идеальную посадку и оптимальный результат.
                  </p>
                  <blockquote className="border-l-4 border-primary-600 pl-4 my-4 italic text-neutral-600">
                    «3D-печать изменила нашу способность делать импланты, действительно подогнанные под
                    каждого пациента». — Dr. Sarah Chen
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">2. Нанотехнологии</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Наноструктурированные поверхности имплантов способствуют лучшей остеоинтеграции и
                    помогают импланту прочнее связаться с челюстной костью. Это ускоряет заживление и
                    повышает процент успешных результатов.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">3. «Умные» импланты</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Новейшие разработки включают датчики внутри имплантов, которые контролируют давление,
                    выявляют инфекцию и предупреждают пациента и врача о возможных проблемах ещё до того,
                    как они станут серьёзными.
                  </p>
                  <blockquote className="border-l-4 border-primary-600 pl-4 my-4 italic text-neutral-600">
                    «Умные импланты — это переворот». — Dr. Michael Patel
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">4. Регенеративная стоматология</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    С помощью факторов роста и клеточной терапии мы можем усилить регенерацию кости вокруг
                    имплантов. Имплантация становится возможной для пациентов, у которых раньше не хватало
                    костной ткани.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">5. Импланты с немедленной нагрузкой</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Зубы за один день — это уже реальность. С имплантами немедленной нагрузки пациент выходит
                    из клиники с временной коронкой или мостом, зафиксированными на импланте прямо в день
                    операции.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">6. Лазерная установка</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Лазерные технологии позволяют точнее устанавливать импланты с минимальной травмой
                    окружающих тканей — это снижает боль, отёк и сокращает срок восстановления.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">7. Циркониевые импланты</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Для пациентов с чувствительностью к металлам или тех, кто ищет вариант без металла,
                    циркониевые импланты — биосовместимая, эстетичная альтернатива классическим титановым.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">8. Планирование лечения с ИИ</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Искусственный интеллект помогает хирургам планировать установку имплантов с высокой
                    точностью — анализирует КТ-снимки, определяет оптимальное положение и прогнозирует
                    результат.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">9. Роботизированная хирургия</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Роботизированные системы повышают точность операций и позволяют проводить
                    малоинвазивные вмешательства с более высокой воспроизводимостью результата.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">10. Новые биосовместимые материалы</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Современные материалы и обработка поверхностей продолжают улучшать прочность,
                    биосовместимость и срок службы имплантов — некоторые модели рассчитаны на всю жизнь.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему импланты, а не съёмные протезы?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В отличие от съёмных протезов, дентальные импланты — это постоянная замена зубов, которая
                не скользит, не щёлкает и не требует клея. Они сохраняют плотность челюстной кости,
                поддерживают черты лица и позволяют есть любую любимую еду без ограничений.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Будущее уже здесь
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                По мере развития технологий дентальные импланты становятся доступнее, комфортнее и
                успешнее, чем когда-либо. В Galleria Oral &amp; Maxillofacial Surgery в Розвилле, штат
                Калифорния, доктор Александр В. Антипов отслеживает все новые разработки, чтобы давать
                пациентам максимально предсказуемый результат.
              </p>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://medlineplus.gov/ency/article/007645.htm" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH NIDCR — Обзор исследований по дентальным имплантам</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Процедура имплантации зубов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA Mouth Healthy — Дентальные импланты</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/30816622/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Albrektsson T, Wennerberg A — Остеоинтеграция и поверхности имплантов</a></li>
              </ul>
            </section>

            {/* Author Info */}
            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-primary-100 flex-shrink-0">
                  <Image
                    src="/images/doctor-hand3-cutout.png"
                    alt="Доктор Александр В. Антипов, DDS"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Доктор Александр В. Антипов</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Сертифицированный челюстно-лицевой хирург. Специализируется на дентальной имплантации,
                    полной реставрации челюсти и корригирующей челюстной хирургии. Принимает пациентов со
                    всего севера Калифорнии.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Готовы рассмотреть дентальные импланты?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию, чтобы обсудить, подходят ли вам дентальные импланты.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Узнать больше об имплантах</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="implants-vs-dentures" />
    </>
  )
}
