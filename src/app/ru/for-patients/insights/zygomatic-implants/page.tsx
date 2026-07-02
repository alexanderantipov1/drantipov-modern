import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Скуловые импланты — когда они нужны",
  description:
    "Скуловые импланты при тяжёлой убыли кости верхней челюсти. Когда классические импланты невозможны, как проходит операция, кому подходит, сроки и стоимость у доктора Антипова в Roseville, CA.",
  alternates: {
    canonical: "/ru/for-patients/insights/zygomatic-implants",
    languages: {
      "ru": "/ru/for-patients/insights/zygomatic-implants",
      "en": "/for-patients/insights/zygomatic-implants",
      "x-default": "/for-patients/insights/zygomatic-implants",
    },
  },
  keywords: [
    "скуловые импланты",
    "импланты при тяжёлой убыли кости",
    "импланты при атрофии верхней челюсти",
    "альтернатива костной пластике",
    "скуловые импланты Roseville",
    "скуловые импланты на полный зубной ряд",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Скуловые импланты — когда они нужны",
    description: "Длинные скуловые импланты при тяжёлой убыли кости верхней челюсти — альтернатива поэтапной костной пластике.",
    images: [
      {
        url: "/images/blog/2026-04-28/zygomatic-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Скуловые импланты — когда они нужны",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Скуловые импланты — когда они нужны",
    description: "Длинные скуловые импланты при тяжёлой убыли кости верхней челюсти — альтернатива поэтапной костной пластике.",
    images: ["/images/blog/2026-04-28/zygomatic-implants.jpg"],
  }
}

export default function ZygomaticImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants#article","headline":"Скуловые импланты: когда нужны и как они работают","description":"Подробный разбор скуловых имплантов при тяжёлой убыли кости верхней челюсти: показания, ход операции, восстановление, кому подходят и сколько стоит.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants","datePublished":"2026-04-28","dateModified":"2026-04-28","image":["https://www.drantipov.com/images/blog/2026-04-28/zygomatic-implants.jpg"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"В чём разница между скуловыми и обычными имплантами?","acceptedAnswer":{"@type":"Answer","text":"Обычные импланты ставят в альвеолярный гребень челюсти высотой 8–13 мм. Скуловые импланты — длинные (30–55 мм) и фиксируются в скуловой кости. Их применяют, когда кости верхней челюсти попросту нет: она слишком тонкая или сильно рассосалась. Скуловая кость значительно плотнее и не атрофируется, поэтому даёт надёжную опору даже в самых сложных случаях."}},{"@type":"Question","name":"Можно ли получить временные зубы в день операции?","acceptedAnswer":{"@type":"Answer","text":"Да, в большинстве случаев. Скуловые импланты рассчитаны на немедленную нагрузку — высокая первичная стабильность позволяет сразу зафиксировать временный протез. Постоянную конструкцию изготавливают через 4–6 месяцев после заживления."}},{"@type":"Question","name":"Это больно? Под какой анестезией делают?","acceptedAnswer":{"@type":"Answer","text":"Операция проходит под внутривенной седацией или общим наркозом — вы не будете ничего помнить. Дискомфорт после операции обычно умеренный и хорошо снимается обычными обезболивающими в течение 3–5 дней."}},{"@type":"Question","name":"Кому скуловые импланты противопоказаны?","acceptedAnswer":{"@type":"Answer","text":"Противопоказания — активный синусит, тяжёлые системные заболевания, некомпенсированный диабет и приём высоких доз бисфосфонатов. Курение значительно повышает риск неудачи. Полный список противопоказаний обсуждается на консультации после КТ."}},{"@type":"Question","name":"Сколько это стоит?","acceptedAnswer":{"@type":"Answer","text":"Скуловые импланты дороже обычных, но в большинстве случаев общая стоимость ниже — и сроки заметно короче — чем поэтапная костная пластика, синус-лифтинг и обычные импланты. Точная цена определяется после КТ; большинство случаев на всю челюсть со скуловыми имплантами попадает в диапазон $35 000–$60 000. Доступна рассрочка от $99 в месяц."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":"https://www.drantipov.com/ru"},{"@type":"ListItem","position":2,"name":"Пациентам","item":"https://www.drantipov.com/ru/for-patients"},{"@type":"ListItem","position":3,"name":"Полезное","item":"https://www.drantipov.com/ru/for-patients/insights"},{"@type":"ListItem","position":4,"name":"Скуловые импланты: когда нужны и как они работают","item":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants"}]}]` }}
      />
      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/ru/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к статьям
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
                Dental Implants
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>28 апреля 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Скуловые импланты: когда нужны и как они работают
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка: <strong className="not-italic text-neutral-900">доктор Александр В. Антипов, DDS</strong> — сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия дантиста Калифорнии №50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-04-28/zygomatic-implants.jpg"
                alt="Скуловые импланты при тяжёлой убыли кости верхней челюсти"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Если вам сказали, что обычные импланты невозможны из-за нехватки кости в верхней челюсти, скуловые импланты могут стать решением. Это не «более удачная альтернатива» — это отдельный подход для сложных случаев, когда стандартные протоколы и костная пластика не работают.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">TL;DR</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Скуловые импланты — длинные (30–55 мм), крепятся не в челюсть, а в скуловую кость.</li>
                  <li>&bull; Показаны при тяжёлой атрофии верхней челюсти, когда обычные импланты поставить нельзя.</li>
                  <li>&bull; Часто позволяют обойтись без поэтапной костной пластики и года ожидания.</li>
                  <li>&bull; Временные зубы в день операции — возможно по протоколу немедленной нагрузки.</li>
                  <li>&bull; Технику выполняют только опытные <Link href="/ru/about" className="text-primary-700 hover:text-primary-800 font-semibold">челюстно-лицевые хирурги</Link>.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что это такое и куда их ставят
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Обычный дентальный имплант — это титановый штифт длиной 8–13 мм, который ставится в альвеолярный гребень челюсти. Когда зубов нет годами, гребень атрофируется. На нижней челюсти потеря обычно не критична. На верхней — атрофия плюс гайморова пазуха над ней часто оставляют слишком мало кости для классического импланта.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Скуловые импланты</strong> решают это иначе. Это длинные (30–55 мм) импланты, которые крепятся не в верхнюю челюсть, а в <strong>скуловую кость</strong> — плотную и прочную структуру лицевого скелета, которая не атрофируется. Один-два скуловых импланта в сочетании с несколькими обычными в переднем отделе челюсти дают основу для полного фиксированного протеза.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда скуловые импланты — правильный выбор
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Они нужны не каждому пациенту с убылью кости. Типичные показания:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  — <strong>Тяжёлая атрофия верхней челюсти</strong> (часто после многих лет ношения съёмного протеза или 10+ лет с потери зубов).
                </li>
                <li>
                  — <strong>Неудачная предыдущая костная пластика</strong> или неуспешный синус-лифтинг.
                </li>
                <li>
                  — <strong>Желание избежать поэтапного лечения</strong> (обычный путь: костная пластика → 6–9 месяцев → импланты → 4–6 месяцев → протез).
                </li>
                <li>
                  — <strong>Анатомия после онкологии или травмы</strong>, где нарушена нормальная структура челюсти.
                </li>
                <li>
                  — <strong>Возраст или общее состояние здоровья</strong>, при которых несколько отдельных операций нежелательны.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как проходит операция
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>3D КТ и виртуальное планирование.</strong> Снимок показывает плотность скуловой кости, расположение пазухи и нервов. Хирург размечает траекторию каждого импланта в специальном софте ещё до операции.
                </li>
                <li>
                  <strong>Анестезия.</strong> IV-седация или общий наркоз — пациент не помнит операцию и не испытывает дискомфорта.
                </li>
                <li>
                  <strong>Установка имплантов.</strong> Хирург входит через десну, формирует канал в скуловой кости по навигационному шаблону и устанавливает имплант под точным углом. Операция занимает 2–4 часа в зависимости от сложности.
                </li>
                <li>
                  <strong>Временные зубы в день операции.</strong> Если первичная стабильность достаточная (≥35 Н·см), временный протез с немедленной нагрузкой фиксируется в тот же день.
                </li>
                <li>
                  <strong>Заживление и финальный протез.</strong> 4–6 месяцев на остеоинтеграцию, затем изготовление и установка постоянного протеза.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Recovery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Большинство пациентов возвращаются на работу через 5–7 дней. Первые две недели — мягкая диета, сниженная физическая активность и тщательная гигиена. Контрольные приёмы: 7-й, 30-й, 90-й день и через 6 месяцев. Полная остеоинтеграция занимает 4–6 месяцев, но временные зубы делают этот период комфортным — и есть, и общаться можно нормально.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Who Performs It
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловую имплантацию делает только челюстно-лицевой хирург с fellowship-подготовкой. Это не процедура общей стоматологии. <Link href="/ru/about" className="text-primary-700 hover:text-primary-800 font-semibold">Доктор Антипов</Link>:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>— Diplomate American Board of Oral &amp; Maxillofacial Surgery (ABOMS).</li>
                <li>— Fellowship-подготовка по продвинутой имплантологии и реконструкции верхней челюсти.</li>
                <li>— 25+ лет board-certified практики, 10 000+ возвращённых улыбок.</li>
                <li>
                  — Принимает пациентов из других штатов и стран на скуловую имплантацию (Roseville, CA — 30 минут от международного аэропорта Сакраменто).
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    В чём разница между скуловыми и обычными имплантами?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Обычные импланты ставятся в альвеолярный гребень челюсти высотой 8–13 мм. Скуловые — это длинные (30–55 мм) импланты, которые крепятся в скуловую кость. Их используют, когда верхней челюсти просто нет: слишком тонкая или рассосалась. Скуловая кость намного плотнее и не атрофируется — даёт надёжную опору даже в самых сложных случаях.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли получить временные зубы в день операции?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да, в большинстве случаев. Скуловые импланты рассчитаны на немедленную нагрузку — высокая первичная стабильность позволяет зафиксировать временный протез сразу. Финальный делается через 4–6 месяцев после заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Это больно? Под какой анестезией делают?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Операция проходит под IV-седацией или общим наркозом. Пациент не помнит ход операции. Послеоперационный дискомфорт обычно умеренный и хорошо контролируется стандартными обезболивающими 3–5 дней.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Кому скуловые импланты <em>не</em> подходят?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Острый синусит, тяжёлые системные заболевания, неконтролируемый диабет и активный приём бисфосфонатов в высоких дозах — всё это противопоказания. Курение значительно повышает риск неудачи. Полный список противопоказаний обсуждается на консультации после КТ.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько это стоит?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловые импланты дороже обычных, но в большинстве случаев общая стоимость ниже — а сроки короче — чем у поэтапной костной пластики + синус-лифтинга + классических имплантов. Точная цена определяется после КТ. Большинство случаев скуловой имплантации на полный зубной ряд — $35 000–60 000. Рассрочка от $99 в месяц.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и литература</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые и авторитетные источники, на которых основана эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15074739/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Branemark PI, Gröndahl K, Ohrnell LO et al. — Zygoma fixture in the management of advanced atrophy of the maxilla</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Dental Implant Surgery</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/24533334/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Aparicio C, Manresa C et al. — Zygomatic implants: indications, techniques, outcomes</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA — Dental Implants Overview</a></li>
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
                    Сертифицированный челюстно-лицевой хирург. Специализация — дентальная имплантация, реконструкция полного зубного ряда, скуловые импланты, корректирующая хирургия челюстей. Принимает пациентов со всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Узнайте, подходят ли вам скуловые импланты
                </h3>
                <p className="text-neutral-700 mb-6">
                  Точную рекомендацию можно дать только после очного осмотра и 3D КТ. Консультация бесплатная. Координатор перезвонит в течение 24 часов и расскажет, что подготовить.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Имплантация полного ряда</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="zygomatic-implants" />
    </>
  )
}
