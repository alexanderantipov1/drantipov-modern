import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock, Heart } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Скрытая эмоциональная цена потери зуба",
  description:
    "Разбираем психологические и эмоциональные последствия потери зуба, способы с ними справиться и то, как дентальные импланты возвращают уверенность и качество жизни.",
  alternates: {
    canonical: "/ru/for-patients/insights/tooth-lost-emotional-toll",
    languages: {
      "ru": "/ru/for-patients/insights/tooth-lost-emotional-toll",
      "en": "/for-patients/insights/tooth-lost-emotional-toll",
      "x-default": "/for-patients/insights/tooth-lost-emotional-toll",
    },
  },
  keywords: [
    "эмоциональные последствия потери зуба",
    "страх перед стоматологом",
    "потеря зуба самооценка",
    "дентальные импланты уверенность",
    "психология потери зуба",
    "восстановление зубов",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Эмоциональная цена потери зуба",
    description: "Как потеря зуба влияет на самооценку, общение с людьми и психическое здоровье - и что с этим делать.",
    images: [
      {
        url: "/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg",
        width: 1200,
        height: 630,
        alt: "Эмоциональная цена потери зуба",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Эмоциональная цена потери зуба",
    description: "Как потеря зуба влияет на самооценку, общение с людьми и психическое здоровье - и что с этим делать.",
    images: ["/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg"],
  }
}

export default function ToothLossEmotionalTollPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(getBreadcrumbSchema([
          { name: "Главная", url: "https://www.drantipov.com/ru" },
          { name: "Пациентам", url: "https://www.drantipov.com/ru/for-patients" },
          { name: "Полезное", url: "https://www.drantipov.com/ru/for-patients/insights" },
          { name: "Скрытая эмоциональная цена потери зуба: что переживают пациенты", url: "https://www.drantipov.com/ru/for-patients/insights/tooth-lost-emotional-toll" },
        ]))}
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Уход за пациентом</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>9 августа 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Скрытая эмоциональная цена потери зуба: что переживают пациенты
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg"
                alt="Эмоциональные последствия потери зуба"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Потеря зуба - это не только физическое изменение. Она способна глубоко затронуть эмоциональное
                состояние человека, его самооценку и качество жизни. Понимать эти переживания важно как самим
                пациентам, так и врачам.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Четыре стадии «пути к протезу»
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Знаковое исследование Шеффилдского университета выделило четыре отдельные эмоциональные стадии,
                через которые проходят пациенты при потере зубов и привыкании к протезам:
              </p>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Стадия 1: первый шок и горе</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Осознание потери зуба нередко вызывает чувства, похожие на горе. Человек может отрицать
                    случившееся, грустить и переживать утрату, которая выходит далеко за рамки самого зуба.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Стадия 2: эмоциональные качели и стеснение
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Привыкая к протезам или живя без зубов, многие начинают остро стесняться своего вида. Эту
                    стадию отличает тревога перед общением и страх осуждения.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Стадия 3: надежда через протезирование
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Когда пациенты узнают о возможностях лечения - например, о дентальных имплантах или более
                    удобных протезах, - появляется надежда. Эта стадия становится поворотным моментом на пути к
                    эмоциональному восстановлению.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Стадия 4: адаптация и решение, кому рассказывать
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Пациенты учатся жить со своим состоянием, решая, когда и кому рассказать о потере зубов.
                    Удачное лечение часто возвращает уверенность и улучшает качество жизни.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Психологические последствия потери зуба
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Падение самооценки</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Отсутствие зубов сильно меняет то, как люди видят самих себя. Многие пациенты признаются, что
                    чувствуют себя старше, менее привлекательными и менее уверенными - и на работе, и в общении.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Социальная тревога</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Из страха неловкости пациенты нередко избегают встреч, реже улыбаются и отказываются от
                    занятий, которые раньше любили. Такая изоляция может привести к депрессии и одиночеству.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Трудности с речью и питанием</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Помимо эмоций, потеря зуба сказывается и на повседневной жизни. Нечёткая речь и ограничения в
                    еде ещё сильнее снижают качество жизни и уверенность в себе.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Проблемы с образом тела</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Потеря зуба особенно тяжела тем, что она на виду. В отличие от многих заболеваний, которые можно
                    скрыть, отсутствие зубов сразу заметно при разговоре и улыбке.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Как справиться</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Если потеря зуба даётся вам эмоционально тяжело, вот что может помочь:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Ищите поддержку:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      поговорите о своих чувствах с близкими, друзьями или психологом
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Найдите группу поддержки:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      общение с теми, кто прошёл через то же самое, очень помогает
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Заботьтесь о себе:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      уделяйте время тому, что поднимает настроение и улучшает самочувствие
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Изучите варианты лечения:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      современные решения вроде дентальных имплантов возвращают и функцию, и уверенность
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Будьте к себе добрее:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      помните, что потеря зуба - обычное дело и никак не определяет вашу ценность
                    </span>
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Роль дентальных имплантов в эмоциональном восстановлении
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Дентальные импланты возвращают не только функцию. Давая постоянное и естественное на вид решение,
                они заметно повышают самооценку, снижают социальную тревогу и возвращают качество жизни. Многие
                пациенты говорят, что после имплантации снова «чувствуют себя собой».
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Целостный подход к помощи
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В нашей клинике мы понимаем, что стоматологическая помощь - это не только лечение. Мы относимся к
                пациентам с участием и видим картину целиком, работая и с функциональной, и с эмоциональной
                стороной потери зуба. Наша цель - вернуть вам не только улыбку, но и уверенность и качество жизни.
              </p>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/11048395/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Davis DM, Fiske J - Эмоциональные последствия потери зубов у людей с частичной адентией</a></li>
                <li><a href="https://www.who.int/news-room/fact-sheets/detail/oral-health" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ВОЗ - Информационный бюллетень о здоровье полости рта</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/9744297/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Fiske J et al. - Эмоциональные последствия потери зубов у людей с полной адентией</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA - Восстановление отсутствующих зубов</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, специализируется на дентальных имплантах, полном
                    восстановлении зубов и коррекционной хирургии челюсти. Помогает пациентам с вниманием и заботой,
                    ставя их интересы на первое место.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Готовы вернуть уверенность в себе?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Давайте обсудим, как помочь вам справиться с трудностями, связанными с потерей зуба
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/for-patients">Истории пациентов</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="tooth-lost-emotional-toll" />
    </>
  )
}
