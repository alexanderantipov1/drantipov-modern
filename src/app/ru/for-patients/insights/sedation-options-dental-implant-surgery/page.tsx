import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Варианты седации при установке дентальных имплантов",
  description:
    "Сравниваем варианты седации при имплантации зубов - местная анестезия, седация в таблетках, внутривенная седация и общий наркоз. Подберите комфортный уровень с доктором Антиповым в Roseville, CA.",
  alternates: {
    canonical: "/ru/for-patients/insights/sedation-options-dental-implant-surgery",
    languages: {
      "ru": "/ru/for-patients/insights/sedation-options-dental-implant-surgery",
      "en": "/for-patients/insights/sedation-options-dental-implant-surgery",
      "x-default": "/for-patients/insights/sedation-options-dental-implant-surgery",
    },
  },
  keywords: [
    "седация при имплантации зубов",
    "внутривенная седация импланты",
    "седация в таблетках стоматология",
    "общий наркоз челюстно-лицевая хирургия",
    "местная анестезия импланты",
    "седация в стоматологии Roseville",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Варианты седации при установке дентальных имплантов",
    description: "Местная анестезия, седация в таблетках, внутривенная седация и общий наркоз - выберите комфортный уровень для операции по имплантации.",
    images: [
      {
        url: "/images/blog/2026-06-19/sedation-options.png",
        width: 1200,
        height: 630,
        alt: "Варианты седации при установке дентальных имплантов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Варианты седации при установке дентальных имплантов",
    description: "Местная анестезия, седация в таблетках, внутривенная седация и общий наркоз - выберите комфортный уровень для операции по имплантации.",
    images: ["/images/blog/2026-06-19/sedation-options.png"],
  }
}

export default function SedationOptionsDentalImplantSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/sedation-options-dental-implant-surgery#article","headline":"Варианты седации при установке дентальных имплантов - разбор","description":"Сравниваем варианты седации при имплантации зубов \\u2014 местная анестезия, седация в таблетках, внутривенная седация и общий наркоз \\u2014 и как выбрать комфортный уровень.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/sedation-options-dental-implant-surgery","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/sedation-options.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/sedation-options-dental-implant-surgery"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"В чём разница между седацией и обезболиванием?","acceptedAnswer":{"@type":"Answer","text":"Это не одно и то же. Седация снижает осознанность и тревогу, а местная анестезия убирает боль, обезболивая операционную зону. Даже при глубокой седации всё равно применяют местный анестетик, чтобы зона операции оставалась полностью нечувствительной. Путаница между этими понятиями приводит к нереалистичным ожиданиям."}},{"@type":"Question","name":"Буду ли я в сознании во время имплантации под местной анестезией?","acceptedAnswer":{"@type":"Answer","text":"Да. При одной только местной анестезии вы полностью в сознании. Операционная зона обезболена, вы не чувствуете боли, и нет общих эффектов седации, поэтому восстановление быстрое. Это подходит для простых процедур и пациентов с низкой тревожностью."}},{"@type":"Question","name":"Чем внутривенная седация отличается от седации в таблетках?","acceptedAnswer":{"@type":"Answer","text":"Седация в таблетках снижает тревогу, но всасывается по-разному, даёт непредсказуемую глубину и ограниченный контроль после приёма таблетки. Внутривенная седация поступает прямо в кровь, поэтому действует быстро, позволяет регулировать глубину и снижает осознанность во время процедуры. Внутривенная седация требует продвинутого мониторинга и обученного персонала."}},{"@type":"Question","name":"Когда при имплантации рекомендуют общий наркоз?","acceptedAnswer":{"@type":"Answer","text":"Общий наркоз применяют в отдельных случаях - например, при обширной операции, сильной тревожности или по медицинским показаниям. Он несёт более высокий системный риск и требует строгих протоколов и мониторинга, поэтому при простой имплантации его рутинно не используют."}},{"@type":"Question","name":"Как выбрать подходящий вариант седации?","acceptedAnswer":{"@type":"Answer","text":"Правильный выбор зависит от уровня вашей тревожности, сложности процедуры, истории болезни и личных предпочтений. На консультации мы оцениваем все эти факторы и рекомендуем самый безопасный и комфортный подход для вашей ситуации."}}]}]` }}
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
                Челюстно-лицевая хирургия
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>19 июня 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Варианты седации при установке дентальных имплантов - разбор
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/sedation-options.png"
                alt="Варианты седации, подобранные под уровень комфорта каждого пациента при имплантации"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Седация повышает комфорт пациента, но не заменяет точность хирурга. Правильный метод седации
                зависит от вашей истории болезни, уровня тревожности и сложности процедуры. Понимая свои
                варианты, вы идёте на операцию спокойно и уверенно.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Местная анестезия оставляет вас в полном сознании и обезболивает операционную зону &mdash; идеальна для простых случаев.</li>
                  <li>&bull; Седация в таблетках снижает тревогу, но всасывается по-разному и хуже поддаётся контролю.</li>
                  <li>&bull; Внутривенная седация действует быстро, позволяет регулировать глубину и снижает осознанность при продвинутом мониторинге.</li>
                  <li>&bull; Общий наркоз приберегают для обширных операций, сильной тревожности или медицинских показаний.</li>
                  <li>&bull; Седация снижает осознанность, а местная анестезия убирает боль &mdash; это не одно и то же.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Местная анестезия
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Местная анестезия обезболивает операционную зону, так что во время процедуры вы не чувствуете
                боли. Её ключевые особенности:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Пациент остаётся в полном сознании.</li>
                <li>&mdash; Нет общих эффектов седации.</li>
                <li>&mdash; Восстановление быстрое.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Подходит для простых процедур и пациентов с низкой тревожностью.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Седация в таблетках
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Седативные препараты в таблетках снижают тревогу, но не вызывают глубокой седации. Их
                ограничения:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Разное всасывание.</li>
                <li>&mdash; Непредсказуемая глубина.</li>
                <li>&mdash; Ограниченный контроль после приёма препарата.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Седацию в таблетках часто сочетают с местной анестезией для большего комфорта.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Внутривенная седация
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Внутривенная седация даёт управляемое и более глубокое расслабление, так как препарат
                поступает прямо в кровь. Её преимущества:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Быстрое начало действия.</li>
                <li>&mdash; Возможность регулировать глубину.</li>
                <li>&mdash; Сниженная осознанность во время процедуры.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Внутривенная седация требует продвинутого мониторинга и обученного персонала.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Общий наркоз
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Общий наркоз применяют в отдельных случаях, в том числе при:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Обширной операции.</li>
                <li>&mdash; Сильной тревожности.</li>
                <li>&mdash; Медицинских показаниях.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Он несёт более высокий системный риск и требует строгих протоколов и мониторинга.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Седация - это не обезболивание
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Важно понимать разницу: <strong>седация снижает осознанность</strong>, а <strong>местная
                анестезия убирает боль</strong>. Путаница между ними приводит к нереалистичным ожиданиям.
                Даже пациентам под глубокой седацией всё равно вводят местный анестетик, чтобы зона операции
                оставалась полностью нечувствительной.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как выбрать комфортный уровень
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Подходящая седация зависит от нескольких факторов:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Уровня вашей тревожности.</li>
                <li>&mdash; Сложности процедуры.</li>
                <li>&mdash; Вашей истории болезни.</li>
                <li>&mdash; Ваших личных предпочтений.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В <Link href="/ru/about" className="text-primary-700 hover:text-primary-800 font-semibold">клинике доктора Антипова</Link>
                {" "}мы обсуждаем все варианты и рекомендуем оптимальный подход для вашей ситуации. У нас есть
                несколько вариантов седации, чтобы вам было комфортно на протяжении всей процедуры.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    В чём разница между седацией и обезболиванием?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Это не одно и то же. Седация снижает осознанность и тревогу, а местная анестезия убирает
                    боль, обезболивая операционную зону. Даже при глубокой седации всё равно применяют местный
                    анестетик, чтобы зона операции оставалась полностью нечувствительной. Путаница между этими
                    понятиями приводит к нереалистичным ожиданиям.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Буду ли я в сознании во время имплантации под местной анестезией?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да. При одной только местной анестезии вы полностью в сознании. Операционная зона
                    обезболена, вы не чувствуете боли, и нет общих эффектов седации, поэтому восстановление
                    быстрое. Это подходит для простых процедур и пациентов с низкой тревожностью.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Чем внутривенная седация отличается от седации в таблетках?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Седация в таблетках снижает тревогу, но всасывается по-разному, даёт непредсказуемую
                    глубину и ограниченный контроль после приёма таблетки. Внутривенная седация поступает
                    прямо в кровь, поэтому действует быстро, позволяет регулировать глубину и снижает
                    осознанность во время процедуры. Внутривенная седация требует продвинутого мониторинга и
                    обученного персонала.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Когда при имплантации рекомендуют общий наркоз?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Общий наркоз применяют в отдельных случаях - например, при обширной операции, сильной
                    тревожности или по медицинским показаниям. Он несёт более высокий системный риск и
                    требует строгих протоколов и мониторинга, поэтому при простой имплантации его рутинно не
                    используют.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Как выбрать подходящий вариант седации?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Правильный выбор зависит от уровня вашей тревожности, сложности процедуры, истории
                    болезни и личных предпочтений. На консультации мы оцениваем все эти факторы и рекомендуем
                    самый безопасный и комфортный подход для вашей ситуации.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/anesthesia" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Анестезия в челюстно-лицевой хирургии</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Установка дентальных имплантов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/anesthesia-and-sedation" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy - Анестезия и седация</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR - Дентальные импланты</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, специализируется на дентальных имплантах,
                    полном восстановлении зубов, скуловых имплантах и коррекционной хирургии челюсти.
                    Принимает пациентов по всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Комфортная имплантация с индивидуальным подходом
                </h3>
                <p className="text-neutral-700 mb-6">
                  Лучший план седации начинается с разговора о вашем здоровье, комфорте и целях. Консультация
                  бесплатная. Координатор перезвонит в течение 24 часов и расскажет, что подготовить.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/contact">Связаться с нами</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
