import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Здоровье полости рта и системные болезни - связь",
  description:
    "Скрытая связь между здоровьем полости рта и системными заболеваниями: рак, болезни сердца и сосудов, диабет. Как защитить себя и что делать для профилактики.",
  alternates: {
    canonical: "/ru/for-patients/insights/poor-oral-health-systemic-diseases",
    languages: {
      "ru": "/ru/for-patients/insights/poor-oral-health-systemic-diseases",
      "en": "/for-patients/insights/poor-oral-health-systemic-diseases",
      "x-default": "/for-patients/insights/poor-oral-health-systemic-diseases",
    },
  },
  keywords: [
    "здоровье полости рта и системные болезни",
    "бактерии полости рта и рак",
    "здоровье полости рта и сердце",
    "здоровье полости рта и диабет",
    "профилактика в стоматологии",
    "связь полости рта и организма",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Здоровье полости рта и системные болезни",
    description: "Связь между бактериями полости рта и системными заболеваниями - раком, болезнями сердца и сосудов, диабетом.",
    images: [
      {
        url: "/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg",
        width: 1200,
        height: 630,
        alt: "Здоровье полости рта и системные болезни",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Здоровье полости рта и системные болезни",
    description: "Связь между бактериями полости рта и системными заболеваниями - раком, болезнями сердца и сосудов, диабетом.",
    images: ["/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg"],
  }
}

export default function PoorOralHealthSystemicDiseasesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(getBreadcrumbSchema([
          { name: "Главная", url: "https://www.drantipov.com/ru" },
          { name: "Пациентам", url: "https://www.drantipov.com/ru/for-patients" },
          { name: "Полезное", url: "https://www.drantipov.com/ru/for-patients/insights" },
          { name: "Скрытая связь: как плохое здоровье полости рта ведёт к раку и системным болезням", url: "https://www.drantipov.com/ru/for-patients/insights/poor-oral-health-systemic-diseases" },
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Здоровье полости рта</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>8 августа 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Скрытая связь: как плохое здоровье полости рта ведёт к раку и системным болезням
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg"
                alt="Связь между здоровьем полости рта и системными заболеваниями"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-amber-50 border-amber-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Важная связь со здоровьем</h3>
                    <p className="text-neutral-700">
                      Здоровье полости рта часто недооценивают, когда говорят о самочувствии в целом. Но новые
                      исследования всё яснее показывают глубокую связь между состоянием рта и здоровьем всего
                      организма.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое связь «полость рта - организм»
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Во рту живут миллиарды бактерий, и большинство из них безвредны. Но если пренебрегать гигиеной,
                вредные бактерии начинают размножаться и вызывают воспаление дёсен. Через это воспаление бактерии
                могут попадать в кровоток и влиять на другие части тела.
              </p>

              <blockquote className="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-neutral-700">
                «И стоматологам, и врачам общей практики полезно лучше понимать оральные проявления системных
                болезней и заболевания полости рта, которые влияют на здоровье всего организма». - д-р Дженнифер
                Уэбстер-Сириак
              </blockquote>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Связь с онкологией
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Недавние исследования выявили тревожные связи между плохим здоровьем полости рта и разными видами
                рака:
              </p>

              <div className="space-y-6 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Колоректальный рак</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Учёные обнаружили конкретную бактерию полости рта - Fusobacterium nucleatum - в колоректальных
                    опухолях. Эта бактерия, которую часто связывают с болезнями дёсен, может играть роль в развитии
                    и прогрессировании опухоли.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Рак поджелудочной железы</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Исследования показали, что у людей с пародонтитом выше риск рака поджелудочной железы. Свой
                    вклад в этот повышенный риск может вносить хроническое воспаление, связанное с болезнями дёсен.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Рак головы и шеи</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Плохая гигиена полости рта и хроническое воспаление во рту создают среду, которая может повышать
                    предрасположенность к раку полости рта, глотки и шеи.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Другие системные заболевания, связанные со здоровьем полости рта
              </h2>

              <div className="space-y-8 my-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Болезни сердца и сосудов</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Связь между болезнями дёсен и сердца хорошо изучена. Бактерии из воспалённых дёсен попадают в
                    кровоток и могут способствовать:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-700">• Атеросклерозу (затвердению артерий)</li>
                    <li className="text-neutral-700">• Повышенному риску инфаркта</li>
                    <li className="text-neutral-700">• Более высокой вероятности инсульта</li>
                    <li className="text-neutral-700">• Эндокардиту (воспалению внутренней оболочки сердца)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Диабет</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Связь диабета и здоровья полости рта работает в обе стороны. Диабет делает человека более
                    уязвимым к болезням дёсен, а тяжёлый пародонтит, в свою очередь, мешает держать сахар крови под
                    контролем - образуется опасный замкнутый круг.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Инфекции дыхательных путей</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Бактерии при пародонтите можно вдохнуть в лёгкие - это способно вызвать инфекции дыхательных
                    путей, пневмонию и обострять хронические состояния вроде ХОБЛ.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Осложнения беременности</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    У беременных с болезнями дёсен выше риск преждевременных родов, низкого веса малыша при рождении
                    и преэклампсии.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Роль хронического воспаления
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Общая нить, связывающая здоровье полости рта с системными болезнями, - хроническое воспаление. Когда
                дёсны воспалены из-за бактериальной инфекции, маркеры воспаления повышаются во всём организме. Это
                системное воспаление может запускать или усугублять самые разные болезни.
              </p>

              <blockquote className="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-neutral-700">
                «Лечение рака может вызывать или усугублять проблемы во рту, а проблемы со здоровьем полости рта,
                в свою очередь, осложняют само лечение рака». - д-р Си Чен
              </blockquote>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Цифры, которые поражают</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <GlassCard className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">3,5 млрд</div>
                  <p className="text-neutral-700">Людей в мире страдают от болезней полости рта</p>
                </GlassCard>
                <GlassCard className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
                  <p className="text-neutral-700">Болезней полости рта можно предотвратить</p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Профилактика - это главное</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Хорошая новость в том, что большинство проблем с полостью рта можно предотвратить. Вот как защитить
                и здоровье рта, и здоровье в целом:
              </p>

              <div className="space-y-4 my-8">
                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Поддерживайте безупречную гигиену рта</h4>
                  <p className="text-neutral-700">
                    Чистите зубы дважды в день, ежедневно используйте флосс и антимикробный ополаскиватель, чтобы
                    сократить число вредных бактерий.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Регулярно посещайте стоматолога</h4>
                  <p className="text-neutral-700">
                    Записывайтесь на профессиональную чистку и осмотр хотя бы дважды в год, чтобы выявлять проблемы
                    на ранней стадии.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Не игнорируйте тревожные признаки</h4>
                  <p className="text-neutral-700">
                    Кровоточивость дёсен, стойкий неприятный запах изо рта и шатающиеся зубы - сигналы, которые
                    требуют немедленного внимания.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Держите под контролем хронические болезни</h4>
                  <p className="text-neutral-700">
                    Если у вас диабет или другие хронические заболевания, действуйте в тесной связке и с врачом, и
                    со стоматологом.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Здоровый образ жизни</h4>
                  <p className="text-neutral-700">
                    Откажитесь от табака, ограничьте алкоголь, питайтесь сбалансированно и управляйте стрессом - это
                    поддерживает здоровье в целом.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Заключение</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Здоровье полости рта - это окно в состояние всего организма. Поддерживая хорошую гигиену и регулярно
                наблюдаясь у стоматолога, вы защищаете не только улыбку - вы оберегаете всё тело от серьёзных
                болезней. Не ждите, пока проблемы заявят о себе: сделайте шаги уже сегодня ради более здорового
                завтра.
              </p>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.cdc.gov/oral-health/about/index.html" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">CDC - Здоровье полости рта и хронические болезни</a></li>
                <li><a href="https://www.nidcr.nih.gov/research/data-statistics/dental-caries" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH NIDCR - Связь здоровья полости рта и организма</a></li>
                <li><a href="https://www.ahajournals.org/doi/10.1161/CIR.0b013e31825719f3" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Пародонтит и сердечно-сосудистые болезни - заявление AHA</a></li>
                <li><a href="https://www.mouthhealthy.org/life-stages/adults-over-60/oral-health-and-overall-health" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA Mouth Healthy - Здоровье полости рта и общее здоровье</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, который уделяет особое внимание комплексной помощи
                    пациентам и просвещению о связи между здоровьем полости рта и всего организма.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Защитите здоровье всего организма - начните с полости рта
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на комплексную оценку состояния полости рта уже сегодня
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/contact">Связаться с клиникой</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="poor-oral-health-systemic-diseases" />
    </>
  )
}
