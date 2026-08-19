import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Синус-лифтинг для дентальных имплантов: что это и зачем",
  description:
    "Синус-лифтинг (синус-аугментация) наращивает кость в верхней челюсти, чтобы импланты можно было установить надёжно. Когда он нужен, как проходит, восстановление и стоимость - с доктором Антиповым в Roseville, Калифорния.",
  alternates: {
    canonical: "/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants",
    languages: {
      "ru": "/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants",
      "en": "/for-patients/insights/understanding-sinus-lift-for-dental-implants",
      "x-default": "/for-patients/insights/understanding-sinus-lift-for-dental-implants",
    },
  },
  keywords: [
    "синус-лифтинг",
    "синус-аугментация",
    "импланты верхней челюсти",
    "костная пластика для имплантов",
    "импланты в верхнечелюстном синусе",
    "синус-лифтинг Roseville",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Синус-лифтинг для дентальных имплантов: что это и зачем",
    description: "Как синус-лифтинг наращивает кость верхней челюсти для надёжной установки дентальных имплантов.",
    images: [
      {
        url: "/images/blog/2026-06-19/sinus-lift.png",
        width: 1200,
        height: 630,
        alt: "Синус-лифтинг для дентальных имплантов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Синус-лифтинг для дентальных имплантов: что это и зачем",
    description: "Как синус-лифтинг наращивает кость верхней челюсти для надёжной установки дентальных имплантов.",
    images: ["/images/blog/2026-06-19/sinus-lift.png"],
  }
}

export default function SinusLiftPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants#article","headline":"Синус-лифтинг для дентальных имплантов: что это и зачем","description":"Синус-лифтинг (синус-аугментация) увеличивает объём кости в верхней челюсти, чтобы дентальные импланты можно было установить надёжно \\u2014 показания, ход процедуры, восстановление и преимущества.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/sinus-lift.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Сколько длится восстановление после синус-лифтинга?","acceptedAnswer":{"@type":"Answer","text":"Сроки восстановления после синус-лифтинга индивидуальны, но обычно требуется несколько месяцев, чтобы кость как следует прижилась, прежде чем можно будет ставить импланты. Как правило, пациенты приходят на контрольные визиты, чтобы врач следил за процессом."}},{"@type":"Question","name":"Синус-лифтинг - это больно?","acceptedAnswer":{"@type":"Answer","text":"Большинство пациентов отмечают лишь лёгкий дискомфорт после процедуры, который обычно снимается назначенными обезболивающими. Местная анестезия помогает свести боль во время самой операции к минимуму."}},{"@type":"Question","name":"Сколько времени занимает сама процедура синус-лифтинга?","acceptedAnswer":{"@type":"Answer","text":"Процедура синус-лифтинга обычно занимает около 1\\u20132 часов в зависимости от сложности случая. Чаще всего пациент может вернуться домой в тот же день."}},{"@type":"Question","name":"Синус-лифтинг подходит всем?","acceptedAnswer":{"@type":"Answer","text":"Подходит не всем. На этапе обследования врач учитывает общее состояние здоровья, курение и качество кости."}},{"@type":"Question","name":"Какие материалы используют для костной пластики при синус-лифтинге?","acceptedAnswer":{"@type":"Answer","text":"Для костной пластики могут применяться аутотрансплантаты (собственная кость пациента), аллотрансплантаты (донорская кость) или синтетические материалы. Выбор зависит от конкретного случая и предпочтений хирурга."}},{"@type":"Question","name":"Что будет, если не делать синус-лифтинг?","acceptedAnswer":{"@type":"Answer","text":"Если синус-лифтинг нужен, но его не сделать, установить импланты успешно может оказаться невозможно. Это способно привести к дальнейшей потере кости и осложнениям."}}]}]` }}
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
                <time>19 июня 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Синус-лифтинг для дентальных имплантов: что это и зачем
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/sinus-lift.png"
                alt="Процедура синус-лифтинга: наращивание кости в верхней челюсти для дентальных имплантов"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Синус-лифтинг для дентальных имплантов - это операция, которая увеличивает объём кости в
                верхней челюсти, чтобы имплант можно было установить надёжно. Когда в области моляров и
                премоляров не хватает высоты кости, синус-лифтинг создаёт прочную основу - повышая
                предсказуемость и долговечность результата.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко о главном</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Синус-лифтинг (синус-аугментация) увеличивает объём кости в верхней челюсти рядом с верхнечелюстными пазухами.</li>
                  <li>&bull; Его рекомендуют, когда высоты кости недостаточно, чтобы безопасно удержать имплант.</li>
                  <li>&bull; Мембрану пазухи аккуратно приподнимают и под неё помещают костный материал.</li>
                  <li>&bull; Процедура обычно занимает 1&ndash;2 часа и нередко проводится под местной анестезией.</li>
                  <li>&bull; Заживление занимает несколько месяцев, пока трансплантат приживается, - затем ставят импланты.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое синус-лифтинг?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Синус-лифтинг - это операция, цель которой нарастить кость в верхней челюсти рядом с
                верхнечелюстными пазухами. Поскольку полость пазухи расположена над верхними жевательными
                зубами, при малом объёме кости места для импланта может не хватать. Во время синус-лифтинга
                мембрану пазухи аккуратно приподнимают и под неё помещают костный материал, чтобы набрать
                достаточную высоту кости для опоры импланта.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как проходит синус-лифтинг?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Техника зависит от конкретного случая, но в общих чертах синус-лифтинг проходит так:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Оценка.</strong> Хирург изучает анатомию кости и пазухи по рентгену или 3D-снимку
                  (КЛКТ).
                </li>
                <li>
                  <strong>Анестезия.</strong> Применяется местная анестезия; по плану лечения может быть
                  предложена седация.
                </li>
                <li>
                  <strong>Доступ к пазухе.</strong> В кости создают небольшое отверстие, чтобы добраться до
                  мембраны пазухи.
                </li>
                <li>
                  <strong>Добавление костного материала.</strong> Костный материал помещают так, чтобы
                  увеличить объём кости.
                </li>
                <li>
                  <strong>Заживление.</strong> Область ушивают и дают зажить, пока трансплантат приживается.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда синус-лифтинг необходим?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Синус-лифтинг могут рекомендовать, когда кости верхней челюсти не хватает для опоры импланта.
                Частые причины:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Недостаточная высота кости.</strong> После потери зуба кость верхней
                  челюсти может убывать, а верхнечелюстные пазухи - со временем расширяться, ещё больше
                  уменьшая доступную высоту кости.
                </li>
                <li>
                  &mdash; <strong>Болезни дёсен.</strong> Хронический пародонтит ведёт к потере кости, влияет
                  на стабильность импланта и требует костной пластики.
                </li>
                <li>
                  &mdash; <strong>Давние удаления зубов.</strong> Если зубы удалили давно, кость могла
                  заметно резорбироваться, и перед имплантами понадобится дополнительная костная опора.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Преимущества синус-лифтинга
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Увеличивает объём кости.</strong> Создаёт опору, необходимую для безопасной установки импланта.</li>
                <li>&mdash; <strong>Повышает успех имплантации.</strong> Чем больше костной опоры, тем выше стабильность и предсказуемость.</li>
                <li>&mdash; <strong>Поддерживает эстетику и функцию.</strong> Правильная установка импланта улучшает прикус и опору лица.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Риски и что важно учесть
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Как у любой операции, есть потенциальные риски: инфекция, кровотечение, перфорация мембраны
                пазухи или замедленное заживление. Тщательное планирование, качественная визуализация и
                опытная хирургическая техника помогают эти риски снизить.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Восстановление после синус-лифтинга
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Послеоперационный уход направлен на то, чтобы защитить трансплантат, пока он заживает:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Отдых.</strong> Несколько дней избегайте интенсивных нагрузок.</li>
                <li>&mdash; <strong>Борьба с отёком.</strong> В первые 24&ndash;48 часов помогают холодные компрессы.</li>
                <li>&mdash; <strong>Обезболивание.</strong> Принимайте назначенные лекарства по инструкции.</li>
                <li>&mdash; <strong>Контрольные визиты.</strong> Приходите на назначенные осмотры, чтобы следить за заживлением.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Заживление обычно занимает несколько месяцев, пока трансплантат срастается с собственной
                костью. Перед установкой имплантов врач подтвердит готовность по контрольному снимку.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как подготовиться к синус-лифтингу
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Консультация обязательна. Хирург изучит вашу историю болезни, оценит анатомию пазухи и кости
                по снимкам и объяснит ход процедуры, риски и предполагаемые сроки. Если вы рассматриваете
                более комплексное несъёмное решение, вы также можете изучить{" "}
                <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">варианты восстановления всей зубной дуги</Link>{" "}
                как часть долгосрочного плана.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько длится восстановление после синус-лифтинга?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Сроки индивидуальны, но обычно требуется несколько месяцев, чтобы кость как следует
                    прижилась, прежде чем можно будет ставить импланты. Как правило, пациенты приходят на
                    контрольные визиты, чтобы врач следил за процессом.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Синус-лифтинг - это больно?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Большинство пациентов отмечают лишь лёгкий дискомфорт после процедуры, который обычно
                    снимается назначенными обезболивающими. Местная анестезия помогает свести боль во время
                    самой операции к минимуму.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько времени занимает сама процедура?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Процедура синус-лифтинга обычно занимает около 1&ndash;2 часов в зависимости от сложности
                    случая. Чаще всего пациент может вернуться домой в тот же день.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Синус-лифтинг подходит всем?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Подходит не всем. На этапе обследования врач учитывает общее состояние здоровья, курение
                    и качество кости.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Какие материалы используют для костной пластики?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Для костной пластики могут применяться аутотрансплантаты (собственная кость пациента),
                    аллотрансплантаты (донорская кость) или синтетические материалы. Выбор зависит от
                    конкретного случая и предпочтений хирурга.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Что будет, если не делать синус-лифтинг?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Если синус-лифтинг нужен, но его не сделать, установить импланты успешно может оказаться
                    невозможно. Это способно привести к дальнейшей потере кости и осложнениям.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Хирургия дентальных имплантов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy - Обзор дентальных имплантов</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR - Болезни дёсен (пародонтит)</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/28160394/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Pjetursson BE, Lang NP - Поднятие дна пазухи: результаты и осложнения</a></li>
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
                    восстановлении всей зубной дуги, скуловых имплантах и реконструктивной хирургии челюстей.
                    Принимает пациентов по всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Узнайте, нужен ли вам синус-лифтинг
                </h3>
                <p className="text-neutral-700 mb-6">
                  Точную рекомендацию можно дать только после очного осмотра и 3D-снимка. Консультация
                  бесплатна. Координатор перезвонит в течение 24 часов и расскажет, что подготовить.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Импланты на всю челюсть</Link>
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
