import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Heart, Star, FileText, Phone, Quote } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import { YouTubeShortsSection } from "@/components/home/YouTubeShortsSection"

const ruHero = {
  image: "/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg",
  eyebrow: "Полезное для пациентов",
  title: "Пациентам",
  subtitle:
    "От первой консультации до послеоперационного восстановления — мы рядом на каждом шаге.",
  overlay: "navy" as const,
  breadcrumbs: [{ name: "Пациентам" }],
}

export const metadata: Metadata = {
  title: { absolute: "Пациентам — ресурсы и отзывы | Доктор Антипов" },
  description: "Всё, что нужно пациенту — быстрые ресурсы, чего ожидать, отзывы и круглосуточная экстренная связь. Розвилл, Калифорния.",
  alternates: {
    canonical: "/ru/for-patients",
    languages: {
      "en": "/for-patients",
      "ru": "/ru/for-patients",
      "x-default": "/for-patients",
    },
  },
  keywords: [
    "ресурсы для пациентов",
    "отзывы пациентов",
    "отзывы Доктор Антипов",
    "чего ожидать на челюстно-лицевой хирургии",
    "послеоперационная экстренная связь",
    "отзывы клиники",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Ресурсы для наших пациентов",
    description: "Запись, подготовка и восстановление — все ресурсы для пациентов доктора Антипова в одном месте.",
    images: [
      {
        url: "/images/forpatients-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ресурсы для наших пациентов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ресурсы для наших пациентов",
    description: "Запись, подготовка и восстановление — все ресурсы для пациентов доктора Антипова в одном месте.",
    images: ["/images/forpatients-hero.jpg"],
  }
}

const resources = [
  {
    icon: Calendar,
    title: "Записаться на консультацию",
    description: "Запишитесь на бесплатную консультацию к доктору Антипову, чтобы обсудить варианты лечения.",
    href: "/ru/for-patients/consultation",
    cta: "Записаться",
  },
  {
    icon: Star,
    title: "Отзывы пациентов",
    description: "Истории пациентов, чьи улыбки и жизнь изменились благодаря доктору Антипову.",
    href: "#patient-reviews",
    cta: "Читать истории",
  },
  {
    icon: FileText,
    title: "Подготовка к операции",
    description: "Подготовьтесь к операции по подробным рекомендациям и чек-листу.",
    href: "/ru/for-patients/pre-op",
    cta: "Посмотреть инструкции",
  },
  {
    icon: Heart,
    title: "Послеоперационный уход",
    description: "Ключевые рекомендации по восстановлению, обезболиванию и чего ожидать после операции.",
    href: "/ru/for-patients/post-op",
    cta: "Посмотреть гид",
  },
]

const whatToExpect = [
  {
    step: 1,
    title: "Первая консультация",
    description:
      "Полное обследование с 3D-снимком, составление плана лечения и обсуждение ваших целей. Обычно занимает 60–90 минут.",
  },
  {
    step: 2,
    title: "Планирование лечения",
    description:
      "Составляем индивидуальный план, разбираем стоимость и варианты рассрочки, отвечаем на все вопросы до начала работы.",
  },
  {
    step: 3,
    title: "Хирургическая процедура",
    description:
      "Современные хирургические методики и варианты седации для вашего комфорта. Большинство процедур — в один визит.",
  },
  {
    step: 4,
    title: "Восстановление и контроль",
    description:
      "Подробные послеоперационные инструкции и контрольные визиты — следим за заживлением и подтверждаем результат.",
  },
]

const writtenTestimonials = [
  {
    name: "Роберт Т.",
    procedure: "Дентальные импланты",
    rating: 5,
    date: "Октябрь 2025",
    review:
      "Доктор Антипов — это просто высший класс. Я волновался перед имплантацией, но он подробно всё объяснил и сделал так, чтобы мне было комфортно. Операция прошла безболезненно, а результат превзошёл ожидания. Теперь ем что хочу без оглядки. Очень рекомендую!",
  },
  {
    name: "Дженнифер С.",
    procedure: "Костная пластика и импланты",
    rating: 5,
    date: "Сентябрь 2025",
    review:
      "После того как другой стоматолог сказал, что у меня недостаточно кости для имплантов, доктор Антипов сделал костную пластику и через 6 месяцев успешно поставил импланты. Его опыт и терпение на каждом этапе — впечатляющие. Огромное спасибо за мастерство.",
  },
  {
    name: "Дэвид В.",
    procedure: "Полная реставрация челюсти",
    rating: 5,
    date: "Август 2025",
    review:
      "10 лет я жил со съёмными протезами и ненавидел каждую минуту. Доктор Антипов поставил фиксированные зубы за один день по протоколу All-on-4. Разница в качестве жизни — невероятная. Снова могу есть стейк! Команда замечательная, доктор — настоящий профессионал.",
  },
  {
    name: "Лиза М.",
    procedure: "Удаление зубов мудрости",
    rating: 5,
    date: "Июль 2025",
    review:
      "Моей дочери нужно было удалить зубы мудрости — нам порекомендовали доктора Антипова. Он смог расположить её к себе, восстановление прошло намного легче, чем ожидали. Прекрасно работает с молодыми пациентами. Рекомендую другим родителям без сомнений.",
  },
  {
    name: "Майкл П.",
    procedure: "Хирургия апноэ сна",
    rating: 5,
    date: "Июнь 2025",
    review:
      "Годами мучился с CPAP, пока доктор Антипов не сделал операцию по выдвижению челюстей. Апноэ ушло полностью. Сплю всю ночь, энергия — фантастическая. Эта операция изменила мне жизнь. Очень благодарен, что нашёл доктора Антипова.",
  },
  {
    name: "Патрисия Р.",
    procedure: "Корригирующая челюстная хирургия",
    rating: 5,
    date: "Май 2025",
    review:
      "Доктор Антипов исправил мой тяжёлый недокус ортогнатической хирургией. Я теперь не только нормально жую — лицо стало намного гармоничнее. Он не только хирург, но и художник. Уровень заботы от него и команды — на высоте.",
  },
]

export default function ForPatientsPage() {
  return (
    <>
      <PageHero {...ruHero} />

{/* Join Our Family of Happy Patients */}
      <Section background="gradient" padding="md">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="h-10 w-10 text-primary-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Присоединяйтесь к нашей семье счастливых пациентов
            </h2>
            <p className="text-lg text-neutral-600">
              Получите ту же исключительную заботу и тот же результат, о которых говорят наши пациенты
            </p>

            <GlassCard className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <p className="text-neutral-700 italic text-lg leading-relaxed">
                  &laquo;Каждый пациент для меня особенный, и я нахожу время понять его конкретные нужды и тревоги.
                  Моя цель — не просто провести отличную операцию, а создать атмосферу, в которой пациента
                  слышат, о нём заботятся и он уверен в своём лечении.&raquo;
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Доктор Александр Антипов</p>
                  <p className="text-sm text-neutral-600">Сертифицированный челюстно-лицевой хирург</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

            {/* Quick Access Resources */}
      <Section background="default" padding="md">
        <Container size="xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-3">
              Быстрый доступ к ресурсам
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Всё, что нужно для подготовки к операции и восстановления после неё
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <GlassCard key={resource.href} className="text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={resource.href}>{resource.cta}</Link>
                  </Button>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="accent" padding="md">
        <Container size="lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-3">
              Чего ожидать
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ваш путь от консультации до восстановления, шаг за шагом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatToExpect.map((item) => (
              <GlassCard key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

{/* Ready to Start Your Journey? */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Готовы начать?
            </h2>
            <p className="text-lg text-neutral-600">
              Запишитесь на консультацию и получите ту самую заботу, о которой говорят пациенты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/ru/contact">Записаться на консультацию</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ru/our-team">Узнать о докторе Антипове</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

            {/* Patient Reviews */}
      <Section background="default" padding="md" id="patient-reviews">
        <Container size="lg">
          <div className="text-center space-y-3 mb-10">
            <Quote className="h-10 w-10 text-primary-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              Отзывы пациентов
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Что пациенты рассказывают о своём лечении
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {writtenTestimonials.map((testimonial, index) => (
              <GlassCard key={index}>
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-accent-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{testimonial.review}</p>
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.procedure}</p>
                    <p className="text-xs text-neutral-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-neutral-600">
              Больше отзывов на{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Google</a>,{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Yelp</a> и{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">Healthgrades</a>
            </p>
          </div>
        </Container>
      </Section>

      {/* Life-Changing Smiles (YouTube Shorts) */}
      <YouTubeShortsSection />

      {/* Have Questions? */}
      <Section background="default" padding="sm">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-3">
              Остались вопросы?
            </h2>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              Ответы на частые вопросы о процедурах, восстановлении, страховании и многом другом
            </p>
            <Button size="lg" asChild variant="outline">
              <Link href="/ru/for-patients/faqs">Часто задаваемые вопросы</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Post-Operative Emergency? */}
      <Section background="gradient" padding="sm">
        <Container size="md">
          <GlassCard className="p-6 md:p-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-red-100 mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
              Экстренная ситуация после операции?
            </h2>
            <p className="text-neutral-700 mb-6">
              Если у вас послеоперационная экстренная ситуация вне рабочих часов, позвоните по
              круглосуточному номеру.
            </p>
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              Экстренный телефон: (916) 783-2110
            </a>
            <p className="text-sm text-neutral-500 mt-4">
              При угрозе жизни — звоните 911 или поезжайте в ближайшее отделение скорой помощи
            </p>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
