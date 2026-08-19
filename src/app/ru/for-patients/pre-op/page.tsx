import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Phone, Calendar } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/PageHero"

const ruHero = {
  image: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
  eyebrow: "Подготовка к операции",
  title: "Готовимся к вашей операции",
  subtitle:
    "Подробные предоперационные рекомендации, чего ожидать и как подготовиться, чтобы операция прошла спокойно.",
  overlay: "navy" as const,
  breadcrumbs: [{ name: "Пациентам", href: "/ru/for-patients" }, { name: "Подготовка к операции" }],
}

export const metadata: Metadata = {
  title: "Подготовка к операции | Доктор Антипов",
  description:
    "Ключевые рекомендации по подготовке к челюстно-лицевой операции у доктора Антипова. Что делать до процедуры, что взять с собой и как подготовиться к успешной операции.",
  alternates: {
    canonical: "/ru/for-patients/pre-op",
    languages: {
      "en": "/for-patients/pre-op",
      "ru": "/ru/for-patients/pre-op",
      "x-default": "/for-patients/pre-op",
    },
  },
  keywords: [
    "подготовка к операции",
    "челюстно-лицевая хирургия подготовка",
    "чек-лист перед операцией",
    "подготовка к имплантации",
    "подготовка к челюстной хирургии",
    "хирургическая подготовка",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Подготовка к операции",
    description: "Подготовка, голодание, лекарства и чего ожидать перед операцией.",
    images: [
      {
        url: "/images/invitations/information-fdeb739a.jpg",
        width: 1200,
        height: 630,
        alt: "Подготовка к операции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Подготовка к операции",
    description: "Подготовка, голодание, лекарства и чего ожидать перед операцией.",
    images: ["/images/invitations/information-fdeb739a.jpg"],
  }
}

const beforeSurgeryChecklist = [
  {
    title: "Лекарства",
    instructions: [
      "Принимайте все обычные препараты по графику, если не сказано иначе",
      "Сообщите нам о ВСЕХ лекарствах, добавках и травяных средствах, которые принимаете",
      "Отмените разжижители крови (аспирин, ибупрофен, витамин E) за 7 дней до операции по согласованию с лечащим врачом",
      "Возьмите на приём список всех текущих лекарств",
    ],
  },
  {
    title: "Еда и напитки",
    instructions: [
      "NPO (ничего внутрь) после полуночи перед операцией, если запланирована внутривенная седация или общий наркоз",
      "Только прозрачные жидкости - не позднее чем за 2 часа до операции с местной анестезией",
      "Никакого алкоголя за 24 часа до операции",
      "Избегайте тяжёлой жирной еды накануне вечером",
    ],
  },
  {
    title: "Личная подготовка",
    instructions: [
      "Договоритесь, чтобы взрослый сопровождающий отвёз вас домой (обязательно при седации)",
      "Наденьте удобную свободную одежду с короткими рукавами",
      "Снимите контактные линзы, украшения и пирсинг",
      "Без макияжа, лака на ногтях и накладных ногтей",
      "Перед приездом почистите зубы и прополощите рот",
    ],
  },
  {
    title: "Состояние здоровья",
    instructions: [
      "Сразу сообщите нам, если в течение 3 дней до операции появились простуда, грипп или температура",
      "Сообщите о любых изменениях в медицинской истории с момента консультации",
      "При диабете обсудите контроль сахара с лечащим врачом",
      "Сообщите о любых недавних стоматологических инфекциях или проблемах",
    ],
  },
]

const whatToBring = [
  "Удостоверение личности с фото и страховые карты",
  "Список текущих лекарств с дозировками",
  "Заполненные формы медицинской истории (если ещё не отправили)",
  "Оплату или доплату по страховке",
  "Наушники или плеер с музыкой (опционально, для расслабления)",
  "Все предоперационные препараты, если назначены",
]

const whatNotToDo = [
  "Не курите и не используйте табачные изделия минимум 24 часа до операции (в идеале - за 2 недели)",
  "Не пейте алкоголь за 24 часа до операции",
  "Не принимайте аспирин, ибупрофен или разжижители крови без согласования",
  "Не надевайте контактные линзы (возьмите очки)",
  "Не садитесь за руль, если получаете седацию",
  "Не ешьте и не пейте после полуночи при внутривенной седации",
]

const dayOfSurgery = [
  {
    title: "Время прибытия",
    description: "Приезжайте за 15–30 минут до приёма, чтобы дозаполнить документы.",
  },
  {
    title: "Сопровождающий",
    description: "Взрослый сопровождающий ОБЯЗАН быть с вами и оставаться в клинике, если у вас внутривенная седация или общий наркоз.",
  },
  {
    title: "Одежда",
    description: "Короткие рукава и удобная одежда. Избегайте тесных воротников и обтягивающей одежды.",
  },
  {
    title: "Возвращение домой",
    description: "Сопровождающий отвозит вас прямо домой. Вы не должны вести машину, управлять техникой или принимать важные решения 24 часа.",
  },
]

export default function PreOpPage() {
  return (
    <>
      <PageHero {...ruHero} />

      {/* Important Notice */}
      <Section background="default" padding="md">
        <Container size="lg">
          <GlassCard className="p-6 md:p-8 border-l-4 border-amber-500">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Важное напоминание</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Если в течение 3 дней до операции появились простуда, грипп, температура или любое недомогание - немедленно позвоните в клинику: <a href="tel:9167832110" className="text-primary-600 hover:underline font-semibold">(916) 783-2110</a>. Возможно, операцию нужно будет перенести ради вашей безопасности.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Before Surgery Checklist */}
      <Section background="accent" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Перед операцией
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Соблюдайте эти рекомендации в дни перед процедурой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeSurgeryChecklist.map((section, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
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

      {/* What to Bring */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Что взять с собой в день операции
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whatToBring.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* What NOT to Do */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 bg-red-50/50">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Чего НЕЛЬЗЯ делать перед операцией
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {whatNotToDo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Day of Surgery */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              День операции
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Чего ожидать, когда вы приедете в клинику
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayOfSurgery.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sedation-Specific Instructions */}
      <Section background="accent" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Особые требования при внутривенной седации или общем наркозе
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>NPO статус:</strong> ничего внутрь (никакой еды, напитков, жвачки, мятных конфет) после полуночи накануне операции. Воду тоже нельзя.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Сопровождающий:</strong> взрослый человек (18+) обязан быть с вами, оставаться в клинике во время процедуры и отвезти вас прямо домой.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Ограничения после седации:</strong> 24 часа нельзя водить машину, управлять техникой, подписывать юридические документы или принимать важные решения.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <p className="text-neutral-700 leading-relaxed pt-1">
                  <strong>Постоянное наблюдение:</strong> взрослый человек должен оставаться с вами минимум 4–6 часов после возвращения домой.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Questions CTA */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Остались вопросы по процедуре?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Наша команда поможет подготовиться. Звоните с любыми вопросами и сомнениями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Позвонить в клинику
              </a>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ru/for-patients/post-op">
                  <Calendar className="h-5 w-5 mr-2" />
                  Послеоперационные рекомендации
                </Link>
              </Button>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
