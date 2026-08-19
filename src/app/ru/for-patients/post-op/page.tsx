import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Phone, Clock, Thermometer, Pill } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/PageHero"

const ruHero = {
  image: "/images/blog/2015-12-30/patient-post-op-visit@2x-6de2a75d.jpg",
  eyebrow: "Восстановление",
  title: "Послеоперационные рекомендации",
  subtitle:
    "Ключевые рекомендации по восстановлению, обезболивание, диета и чего ожидать во время заживления.",
  overlay: "navy" as const,
  breadcrumbs: [{ name: "Пациентам", href: "/ru/for-patients" }, { name: "Послеоперационный уход" }],
}

export const metadata: Metadata = {
  title: "Послеоперационный уход | Гид по восстановлению | Доктор Антипов",
  description:
    "Ключевые рекомендации по послеоперационному уходу после челюстно-лицевой хирургии у доктора Антипова. Как справиться с болью, отёком, кровотечением и обеспечить правильное заживление.",
  alternates: {
    canonical: "/ru/for-patients/post-op",
    languages: {
      "en": "/for-patients/post-op",
      "ru": "/ru/for-patients/post-op",
      "x-default": "/for-patients/post-op",
    },
  },
  keywords: [
    "послеоперационный уход",
    "восстановление после хирургии",
    "инструкции после операции",
    "восстановление после имплантации",
    "восстановление после челюстной хирургии",
    "хирургическое заживление",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Послеоперационный уход",
    description: "Восстановление, обезболивание, отёк, диета и правильное заживление после хирургии.",
    images: [
      {
        url: "/images/dental-implants/dental-implants@2x-0aad592f.jpg",
        width: 1200,
        height: 630,
        alt: "Послеоперационный уход",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Послеоперационный уход",
    description: "Восстановление, обезболивание, отёк, диета и правильное заживление после хирургии.",
    images: ["/images/dental-implants/dental-implants@2x-0aad592f.jpg"],
  }
}

const immediatePostOp = [
  {
    icon: Clock,
    title: "Первые 24 часа",
    instructions: [
      "Плотно прикусите марлевые тампоны на 30–45 минут - чтобы остановить кровотечение",
      "Голова приподнята (2–3 подушки) - это уменьшает отёк",
      "Прикладывайте лёд к щеке снаружи (20 минут на коже, 20 минут перерыв)",
      "Отдыхайте, без интенсивной активности",
      "Не полощите рот первые 24 часа",
    ],
  },
  {
    icon: Pill,
    title: "Обезболивание",
    instructions: [
      "Принимайте обезболивающие по графику - до того, как боль усилится",
      "Принимайте обезболивающие с едой, чтобы избежать тошноты",
      "Не садитесь за руль и не работайте с техникой при приёме наркотических обезболивающих",
      "Если выписан антибиотик - пропейте весь курс",
      "Безрецептурные обезболивающие можно чередовать с назначенными (уточните у нас заранее)",
    ],
  },
  {
    icon: Thermometer,
    title: "Контроль отёка",
    instructions: [
      "Лёд первые 48 часов (20 минут на коже, 20 минут перерыв)",
      "После 48 часов - переход на тёплые компрессы для лучшего заживления",
      "Спите с приподнятой головой 3–5 дней",
      "Не наклоняйтесь и не ложитесь плашмя",
      "Отёк нарастает к 48–72 часам, потом постепенно спадает",
    ],
  },
]

const bleedingControl = [
  "Плотно прикусите марлю на 30–45 минут",
  "Если кровотечение продолжается - прикусите смоченный пакетик чая на 30 минут (танины помогают свёртыванию)",
  "Не сплёвывайте, не пейте через трубочку, не полощите интенсивно",
  "Лёгкое сочение крови нормально в первые 24–48 часов",
  "Если сильное кровотечение не проходит через 2 часа - звоните в клинику",
]

const dietGuidelines = {
  day1: [
    "Только прозрачные жидкости и мягкая пища",
    "Холодное: мороженое, смузи, йогурт (без трубочек!)",
    "Протеиновые коктейли или питательные напитки",
    "Никакой горячей еды и напитков",
  ],
  days2to7: [
    "Мягкая, легко жуёмая пища (пюре, омлет-болтунья, паста)",
    "Тёплые (не горячие) супы",
    "Овсянка, пудинг, яблочное пюре",
    "Хорошо проваренные овощи",
  ],
  week2plus: [
    "Постепенный возврат к обычной диете по самочувствию",
    "По возможности жуйте на стороне, противоположной операции",
    "Избегайте твёрдой, хрустящей и липкой пищи до полного заживления",
    "Продолжайте избегать трубочек",
  ],
}

const oralHygiene = [
  {
    title: "Дни 1–2",
    instructions: "Не полощите рот, не чистите зубы рядом с операционной зоной. При необходимости аккуратно протирайте зубы влажной марлей.",
  },
  {
    title: "Дни 3–7",
    instructions: "Начинайте мягкие солевые полоскания (1 ч.л. соли на 240 мл тёплой воды) 4–6 раз в день, особенно после еды. Можно аккуратно чистить остальные зубы.",
  },
  {
    title: "Со 2-й недели",
    instructions: "Продолжайте солевые полоскания. Постепенно возвращайтесь к обычной чистке зубов и нити, аккуратно вокруг операционной зоны.",
  },
]

const avoidList = [
  "Курение и табачные изделия (существенно тормозят заживление)",
  "Питьё через трубочку (может сорвать кровяной сгусток)",
  "Сильно сплёвывать",
  "Интенсивные полоскания в первые 24 часа",
  "Алкоголь (особенно с обезболивающими)",
  "Тяжёлые тренировки и подъём тяжестей 3–5 дней",
  "Горячая еда и напитки первые 48 часов",
  "Твёрдая, хрустящая и липкая пища",
]

const normalSymptoms = [
  {
    symptom: "Отёк",
    description: "Максимум на 48–72 часах, может держаться 5–7 дней. Первые 48 часов - лёд, потом тёплые компрессы.",
  },
  {
    symptom: "Синяки",
    description: "Могут появиться на 2–3 день на лице или шее. Это нормально, пройдёт за 7–10 дней.",
  },
  {
    symptom: "Лёгкое кровотечение",
    description: "Розоватая слюна нормальна в первые 24–48 часов. Контролируется марлей или пакетиком чая.",
  },
  {
    symptom: "Скованность челюсти",
    description: "Временно трудно открыть рот полностью. Помогает мягкая разработка (мы покажем упражнения).",
  },
  {
    symptom: "Онемение",
    description: "Возможна временная потеря чувствительности губы, языка или подбородка. Обычно проходит за дни-недели.",
  },
]

const whenToCall = [
  "Сильное кровотечение, которое не останавливается после 2 часов давления",
  "Сильная нарастающая боль, не снимаемая лекарствами",
  "Температура выше 38,3 °C (101 °F)",
  "Сильный отёк, который усиливается после 3-го дня",
  "Затруднения с дыханием или глотанием",
  "Аллергическая реакция (сыпь, зуд, проблемы с дыханием)",
  "Стойкое онемение дольше недели",
  "Неприятный запах или гной из операционной зоны",
]

export default function PostOpPage() {
  return (
    <>
      <PageHero {...ruHero} />

      {/* Emergency Contact */}
      <Section background="default" padding="md">
        <Container size="lg">
          <GlassCard className="p-6 md:p-8 bg-red-50 border-l-4 border-red-500">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Круглосуточная экстренная связь</h3>
                <p className="text-neutral-700 leading-relaxed mb-2">
                  Если что-то срочное вне рабочих часов: <a href="tel:9167832110" className="text-red-600 hover:underline font-bold">(916) 783-2110</a>
                </p>
                <p className="text-sm text-neutral-600">
                  При угрозе жизни - звоните 911 или поезжайте в ближайшее отделение скорой помощи.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Immediate Post-Op Care */}
      <Section background="accent" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Уход сразу после операции
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Критические шаги в первые 24–48 часов после операции
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {immediatePostOp.map((section, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                  <section.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-primary-600 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bleeding Control */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Контроль кровотечения
            </h2>
            <div className="space-y-3">
              {bleedingControl.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{instruction}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Diet Guidelines */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Диета по этапам
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Переходите между этапами по мере заживления
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  1
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">День 1</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.day1.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  2
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Дни 2–7</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.days2to7.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  3
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Со 2-й недели</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.week2plus.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Oral Hygiene */}
      <Section background="accent" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              График гигиены полости рта
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {oralHygiene.map((stage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-700">{stage.title}</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{stage.instructions}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* What to Avoid */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 bg-amber-50/50">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Чего избегать во время восстановления
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {avoidList.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Normal Symptoms */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Нормальные послеоперационные симптомы
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Это ожидаемые проявления нормального процесса заживления
            </p>
          </div>

          <div className="space-y-4">
            {normalSymptoms.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <h3 className="text-lg font-semibold text-neutral-900">{item.symptom}</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-neutral-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* When to Call */}
      <Section background="gradient" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 border-2 border-red-500">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center flex items-center justify-center gap-2">
              <Phone className="h-6 w-6 text-red-600" />
              Когда звонить в клинику
            </h2>
            <p className="text-center text-neutral-600 mb-6">
              Свяжитесь с нами немедленно при любом из следующих симптомов:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whenToCall.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Позвонить в клинику: (916) 783-2110
              </a>
              <p className="text-sm text-neutral-500 mt-4">
                Экстренная связь вне рабочих часов: <a href="tel:9167832110" className="text-red-600 font-semibold hover:underline">(916) 783-2110</a>
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Follow-Up */}
      <Section background="default" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Контрольный приём
            </h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              Контрольный визит критически важен для отслеживания заживления. Если ещё не записаны - позвоните в клинику.
            </p>
            <Button size="lg" asChild>
              <Link href="/ru/for-patients/faqs">Часто задаваемые вопросы</Link>
            </Button>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
