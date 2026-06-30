import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Костная пластика для имплантов простыми словами",
  description:
    "Костная пластика для дентальных имплантов: кому нужна, виды трансплантатов, как проходит процедура, сроки заживления, риски и как это влияет на долгий успех имплантации.",
  alternates: {
    canonical: "/ru/for-patients/insights/bone-grafting-for-dental-implants-explained",
    languages: {
      "en": "/for-patients/insights/bone-grafting-for-dental-implants-explained",
      "ru": "/ru/for-patients/insights/bone-grafting-for-dental-implants-explained",
      "x-default": "/for-patients/insights/bone-grafting-for-dental-implants-explained",
    },
  },
  keywords: [
    "костная пластика для имплантов",
    "виды дентальных трансплантатов",
    "потеря кости челюсти импланты",
    "синус-лифтинг костная пластика",
    "сроки заживления костного трансплантата",
    "костная пластика Розвилл",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Костная пластика для имплантов простыми словами",
    description: "Кому нужна костная пластика, какие бывают трансплантаты, сроки заживления и как это влияет на успех имплантации.",
    images: [
      {
        url: "/images/blog/2026-06-19/bone-grafting.png",
        width: 1200,
        height: 630,
        alt: "Костная пластика для дентальных имплантов простыми словами",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Костная пластика для имплантов простыми словами",
    description: "Кому нужна костная пластика, какие бывают трансплантаты, сроки заживления и как это влияет на успех имплантации.",
    images: ["/images/blog/2026-06-19/bone-grafting.png"],
  }
}

export default function BoneGraftingForDentalImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/bone-grafting-for-dental-implants-explained#article","headline":"Костная пластика для дентальных имплантов простыми словами","description":"Подробный гид по костной пластике для имплантации — кому нужна, виды трансплантатов, процедура, сроки заживления, риски и альтернативы.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/bone-grafting-for-dental-implants-explained","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/bone-grafting.png"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/bone-grafting-for-dental-implants-explained"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Сколько занимает процедура костной пластики?","acceptedAnswer":{"@type":"Answer","text":"Сама операция обычно занимает 1–2 часа в зависимости от сложности случая. Общий срок восстановления зависит от индивидуальной скорости заживления."}},{"@type":"Question","name":"Костная пластика — это больно?","acceptedAnswer":{"@type":"Answer","text":"Большинство пациентов отмечают лёгкий дискомфорт после процедуры, который снимается обезболивающими. Хирург даст конкретные рекомендации, чтобы минимизировать ощущения."}},{"@type":"Question","name":"Сколько заживает костный трансплантат?","acceptedAnswer":{"@type":"Answer","text":"Обычно заживление занимает 3–6 месяцев в зависимости от типа трансплантата и состояния здоровья. Контрольные визиты помогают отслеживать процесс."}},{"@type":"Question","name":"Можно ли ставить имплант сразу после костной пластики?","acceptedAnswer":{"@type":"Answer","text":"В большинстве случаев имплант ставят после заживления трансплантата. Но некоторые современные методики позволяют делать обе процедуры одновременно — обсудите это с вашим хирургом."}},{"@type":"Question","name":"Что будет, если костный трансплантат не приживётся?","acceptedAnswer":{"@type":"Answer","text":"Если трансплантат не приживается, хирург оценит ситуацию и при необходимости порекомендует повторную пластику или альтернативное лечение."}},{"@type":"Question","name":"Покрывает ли страховка костную пластику?","acceptedAnswer":{"@type":"Answer","text":"Покрытие зависит от страхового плана. Стоит уточнить условия у своего страховщика, чтобы понять, что именно входит в покрытие."}}]}]` }}
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
              Костная пластика для дентальных имплантов простыми словами
            </h1>



            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/bone-grafting.png"
                alt="Костная пластика — восстановление объёма челюстной кости под дентальные импланты"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Дентальные импланты — это надёжное решение для замещения отсутствующих зубов, но успешная
                установка во многом зависит от плотности и качества челюстной кости. Именно поэтому
                костная пластика часто становится ключевым этапом — она даёт ту опору, которая необходима
                для приживления импланта.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Костная пластика восстанавливает объём челюстной кости там, где она убыла после потери зуба.</li>
                  <li>&bull; Основные типы трансплантатов: аутотрансплантат, аллотрансплантат, ксенотрансплантат и синтетические материалы.</li>
                  <li>&bull; Трансплантат обычно заживает 3&ndash;6 месяцев до установки импланта.</li>
                  <li>&bull; Улучшает фиксацию, эстетику и долгий срок службы импланта.</li>
                  <li>&bull; 3D-КТ-снимок покажет, нужна ли пластика и какой подход подойдёт лучше.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое костная пластика?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Костная пластика — это хирургическая процедура для наращивания или реконструкции костной
                структуры там, где её не хватает. Дефицит может возникнуть после потери зуба, травмы или
                пародонтита. В ходе процедуры в челюстную кость помещают костный материал, который
                стимулирует рост новой кости и создаёт прочную основу для <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">дентальных имплантов</Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Виды костных трансплантатов
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В стоматологии используют несколько видов костных трансплантатов:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Аутотрансплантат:</strong> кость берётся из другого участка тела самого
                  пациента (например, бедро или подбородок). Такой материал часто интегрируется лучше всех,
                  потому что организм узнаёт собственную ткань.
                </li>
                <li>
                  &mdash; <strong>Аллотрансплантат:</strong> кость поступает от донора и проходит обработку
                  для безопасности и совместимости. Распространённый и эффективный вариант.
                </li>
                <li>
                  &mdash; <strong>Ксенотрансплантат:</strong> материал из другого вида (часто бычий), специально
                  обработанный для безопасного использования у человека.
                </li>
                <li>
                  &mdash; <strong>Синтетический трансплантат:</strong> искусственные материалы, имитирующие
                  кость. Хороши доступностью и сниженным риском передачи инфекций.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Зачем нужна костная пластика для имплантации?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                После потери зуба окружающая кость начинает терять объём, что может усложнить установку
                импланта. Костная пластика помогает имплантации потому, что:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Восстанавливает объём кости:</strong> возвращает челюсти ту массу, в которую
                  можно надёжно поставить имплант.
                </li>
                <li>
                  &mdash; <strong>Улучшает эстетику:</strong> достаточный объём кости позволяет точнее
                  спозиционировать имплант и получить красивую финальную улыбку.
                </li>
                <li>
                  &mdash; <strong>Усиливает функциональную стабильность:</strong> крепкое основание поддерживает
                  долговечность импланта и хорошее жевание.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как проходит костная пластика
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Консультация перед операцией.</strong> Перед костной пластикой вы консультируетесь с
                челюстно-лицевым хирургом. Делают снимки — рентген или КТ/CBCT — чтобы оценить объём кости и
                выбрать подходящий метод пластики.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Анестезия и подготовка.</strong> Обычно начинают с местной анестезии или седации
                для комфорта. Зону обрабатывают и готовят к операции.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Сама пластика</strong> идёт по шагам:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Разрез.</strong> Хирург делает разрез на десне, чтобы добраться до кости.
                </li>
                <li>
                  <strong>Установка костного материала.</strong> Выбранный трансплантат укладывается в зону дефицита.
                </li>
                <li>
                  <strong>Фиксация трансплантата.</strong> Материал может быть стабилизирован мембранами и/или
                  небольшими фиксирующими элементами в зависимости от случая.
                </li>
                <li>
                  <strong>Ушивание.</strong> Десна возвращается на место и ушивается для заживления.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Заживление и интеграция
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                После операции возможны отёк и небольшой дискомфорт — обычно снимается рекомендованными
                препаратами. Заживление костного трансплантата занимает несколько месяцев, в течение которых
                материал постепенно интегрируется с собственной костью. Регулярные контрольные визиты
                помогают отслеживать процесс и определить, когда можно ставить имплант.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                На качество приживления влияют:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Общее здоровье:</strong> отдельные состояния и привычки (например, курение) замедляют заживление.</li>
                <li>&mdash; <strong>Тип материала:</strong> разные трансплантаты интегрируются с разной скоростью.</li>
                <li>&mdash; <strong>Послеоперационный уход:</strong> гигиена, диета и визиты к врачу влияют на результат.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Риски и осложнения
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Как и любая операция, костная пластика несёт определённые риски. Осложнения встречаются
                редко, но возможны: инфекция, отторжение трансплантата, раздражение нерва или замедленное
                заживление. Хирург объяснит, как эти риски относятся именно к вашему случаю и как ими управлять.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Альтернативы костной пластике
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В зависимости от анатомии и целей возможны альтернативы:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Мини-импланты:</strong> импланты меньшего диаметра, которым в ряде случаев нужно меньше кости.</li>
                <li>&mdash; <strong>Регенеративные методики:</strong> подходы, стимулирующие рост кости без классической пластики (зависят от случая).</li>
                <li>&mdash; <strong>Скуловые импланты:</strong> опираются на скуловую кость при тяжёлой потере кости верхней челюсти.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Современные инструменты планирования — 3D-снимки и навигационная хирургия — повышают точность,
                делают установку безопаснее и предсказуемее. Ваш хирург выберет самый предсказуемый путь по
                результатам снимков и полного обследования.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько занимает процедура костной пластики?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Сама операция обычно занимает 1&ndash;2 часа в зависимости от сложности случая. Общий
                    срок восстановления зависит от индивидуальной скорости заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Это больно?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Большинство пациентов отмечают лёгкий дискомфорт после процедуры, который снимается
                    обезболивающими. Хирург даёт конкретные рекомендации, чтобы минимизировать ощущения.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько заживает костный трансплантат?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Обычно 3&ndash;6 месяцев — зависит от типа трансплантата и состояния здоровья. Контрольные
                    визиты помогают отслеживать процесс.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли ставить имплант сразу после костной пластики?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    В большинстве случаев имплант ставят после заживления трансплантата. Но некоторые
                    современные методики позволяют делать обе процедуры одновременно &mdash; обсудите это с
                    вашим хирургом.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Что будет, если трансплантат не приживётся?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Хирург оценит ситуацию и при необходимости порекомендует повторную пластику или
                    альтернативное лечение.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Покрывает ли страховка костную пластику?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Покрытие зависит от страхового плана. Стоит заранее уточнить условия у страховщика.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; Процедура имплантации зубов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy &mdash; Дентальные импланты, обзор</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR &mdash; Заболевания дёсен и потеря кости</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/28727892/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Методы аугментации кости для дентальной имплантации &mdash; обзор PubMed</a></li>
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
                    полной реставрации челюсти, скуловых имплантах и корригирующей челюстной хирургии.
                    Принимает пациентов со всего севера Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Узнайте, нужна ли вам костная пластика
                </h3>
                <p className="text-neutral-700 mb-6">
                  Точная рекомендация возможна только после очного осмотра и 3D-КТ. Консультация — бесплатно.
                  Координатор пациента перезвонит в течение 24 часов и расскажет, что взять с собой.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Импланты на полную челюсть</Link>
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
