import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Скуловые импланты или костная пластика",
  description:
    "Сравниваем скуловые импланты и костную пластику при выраженной убыли кости челюсти — сроки, восстановление, стоимость, процент успеха и кому что подходит. Доктор Антипов, Roseville, CA.",
  alternates: {
    canonical: "/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
    languages: {
      "ru": "/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
      "en": "/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
      "x-default": "/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
    },
  },
  keywords: [
    "скуловые импланты или костная пластика",
    "импланты при выраженной убыли кости",
    "лечение убыли кости верхней челюсти",
    "альтернатива костной пластике",
    "скуловые импланты Roseville",
    "варианты имплантации на всю челюсть",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Скуловые импланты или костная пластика",
    description: "Сравниваем скуловые импланты и костную пластику при выраженной убыли кости челюсти — сроки, восстановление, стоимость и показания.",
    images: [
      {
        url: "/images/blog/2026-06-19/zygomatic-vs-grafting.png",
        width: 1200,
        height: 630,
        alt: "Скуловые импланты или костная пластика при выраженной убыли кости",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Скуловые импланты или костная пластика",
    description: "Сравниваем скуловые импланты и костную пластику при выраженной убыли кости челюсти — сроки, восстановление, стоимость и показания.",
    images: ["/images/blog/2026-06-19/zygomatic-vs-grafting.png"],
  }
}

export default function ZygomaticImplantsVsBoneGraftingPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss#article","headline":"Скуловые импланты или костная пластика при выраженной убыли кости","description":"Сравниваем скуловые импланты и традиционную костную пластику при выраженной убыли кости челюсти \\u2014 сроки, восстановление, стоимость, процент успеха и показания.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/zygomatic-vs-grafting.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Что такое скуловые импланты?","acceptedAnswer":{"@type":"Answer","text":"Скуловые импланты — это дентальные импланты, которые фиксируются в скуловой кости и служат опорой для протеза. Они особенно полезны пациентам с выраженной убылью кости верхней челюсти."}},{"@type":"Question","name":"Как работает костная пластика?","acceptedAnswer":{"@type":"Answer","text":"Костная пластика — это пересадка костной ткани в участки, где кости недостаточно. Так создаётся устойчивая основа для будущих имплантов, а на приживление обычно требуется несколько месяцев."}},{"@type":"Question","name":"Что быстрее — скуловые импланты или костная пластика?","acceptedAnswer":{"@type":"Answer","text":"Скуловые импланты, как правило, быстрее: часто они позволяют установить протез сразу или раньше, тогда как костная пластика обычно требует более длительного периода заживления."}},{"@type":"Question","name":"Есть ли риски у этих процедур?","acceptedAnswer":{"@type":"Answer","text":"Как и любая операция, и скуловые импланты, и костная пластика связаны с рисками — в том числе инфекцией и осложнениями с имплантом. Консультация и тщательное планирование помогают эти риски снизить."}},{"@type":"Question","name":"Как понять, какой вариант подходит именно мне?","acceptedAnswer":{"@type":"Answer","text":"Лучший вариант зависит от состояния зубов, общего здоровья и ваших предпочтений. Подробное обследование у специалиста поможет определить наиболее подходящее лечение."}},{"@type":"Question","name":"Чего ожидать в период восстановления?","acceptedAnswer":{"@type":"Answer","text":"Восстановление у всех проходит по-разному. После скуловых имплантов часто можно быстрее вернуться к привычным делам, тогда как костная пластика требует больше времени на заживление, прежде чем можно ставить импланты."}}]}]` }}
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
                <span>7 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Скуловые импланты или костная пластика при выраженной убыли кости
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/zygomatic-vs-grafting.png"
                alt="Скуловые импланты или костная пластика при выраженной убыли кости челюсти"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                При выраженной убыли кости челюсти многие ищут действенное решение, чтобы вернуть и функцию,
                и эстетику зубов. Два заметных варианта — скуловые импланты и костная пластика. Оба могут
                стать опорой для протеза на имплантах, но решают разные задачи, рассчитаны на разные сроки
                и подходят для разных анатомических ситуаций. Понимание этих различий поможет осознанно
                выбрать следующий шаг.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Скуловые импланты фиксируются в скуловой кости и могут стать практичной альтернативой при выраженной убыли кости верхней челюсти.</li>
                  <li>&bull; Костная пластика восстанавливает объём кости, но часто требует более долгого заживления, прежде чем ставить импланты.</li>
                  <li>&bull; Скуловые импланты, как правило, быстрее и иногда позволяют раньше приступить к протезированию.</li>
                  <li>&bull; Костная пластика универсальна при лёгкой и умеренной или локальной убыли кости.</li>
                  <li>&bull; Подходящий вариант зависит от анатомии, истории здоровья, целей и того, как быстро вы хотите вернуть функцию.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое выраженная убыль кости
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Выраженная убыль кости челюсти может развиться из-за потери зубов, заболеваний пародонта,
                длительного ношения съёмных протезов, травмы или других факторов здоровья. В результате
                становится трудно установить обычные импланты на верхней челюсти — кости может просто не
                хватать, чтобы их удержать. Подробное обследование &mdash; включая визуализацию вроде 3D-снимков &mdash;
                помогает понять, сколько кости осталось и какой подход даст самый предсказуемый результат.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое скуловые импланты?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловые импланты — это особые дентальные импланты, которые фиксируются в скуловой кости, а
                не в верхней челюсти. Такая методика позволяет надёжно закрепить несъёмный протез у
                пациентов со значительной убылью кости верхней челюсти и нередко уменьшает или вовсе
                устраняет необходимость в объёмной костной пластике.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Преимущества скуловых имплантов:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Потенциально более короткие сроки:</strong> во многих случаях к протезированию можно перейти быстрее.</li>
                <li>&mdash; <strong>Меньше необходимости в пластике:</strong> в тяжёлых случаях можно избежать крупных операций на пазухах и костных трансплантатов.</li>
                <li>&mdash; <strong>Надёжная опора:</strong> рассчитаны на ситуации, когда обычные импланты на верхней челюсти поставить невозможно.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое костная пластика?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Костная пластика — это хирургическая процедура, при которой в участки с недостатком кости
                добавляют трансплантационный материал, чтобы восстановить объём и создать устойчивую основу
                для имплантов. Для пластики используют собственную кость пациента, донорскую кость,
                трансплантаты животного происхождения или синтетические материалы. Обычно нужно время на
                заживление, прежде чем ставить импланты.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Виды костной пластики:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Аутотрансплантаты:</strong> кость, взятая у самого пациента.</li>
                <li>&mdash; <strong>Аллотрансплантаты:</strong> донорский костный материал.</li>
                <li>&mdash; <strong>Ксенотрансплантаты:</strong> костный материал другого биологического вида (часто бычий).</li>
                <li>&mdash; <strong>Синтетические трансплантаты:</strong> биосовместимые материалы, стимулирующие рост кости.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Преимущества костной пластики:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Восстанавливает структуру кости:</strong> создаёт основу для установки стандартных имплантов.</li>
                <li>&mdash; <strong>Универсальность:</strong> подходит при лёгкой и умеренной убыли и многих локальных дефектах.</li>
                <li>&mdash; <strong>Долговечная основа:</strong> удачная пластика способна удерживать импланты долгие годы.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сравнение: скуловые импланты или костная пластика
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Критерий</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Скуловые импланты</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Костная пластика</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Длительность процедуры</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">У подходящих пациентов часто проходит в меньшее число этапов, иногда позволяя раньше начать протезирование.</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Обычно требует нескольких визитов и фазы заживления до установки имплантов.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Время восстановления</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">К функции можно вернуться быстрее, хотя это всё же операция, и заживление у всех проходит по-разному.</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Заживление может занять несколько месяцев — в зависимости от вида трансплантата и объёма.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4"><strong>Общая стоимость</strong></td>
                      <td className="border-b border-neutral-200 py-3 px-4">Может быть дороже на старте, но в тяжёлых случаях избавляет от лишних трат на несколько процедур пластики.</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Сама пластика может стоить дешевле, но итоговая сумма вырастет, если нужны несколько трансплантатов и поэтапные операции.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Процент успеха:</strong> оба подхода могут быть успешными при грамотном планировании.
                На результат во многом влияют ваша анатомия, общее здоровье и опыт врача. Современная
                визуализация и продуманное хирургическое планирование одинаково важны для любого варианта.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Кому подходит каждая процедура?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Чтобы определить наиболее подходящий подход, нужно подробное обследование у специалиста.
                В общих чертах:
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Кому подходят скуловые импланты:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Пациентам с выраженной убылью кости верхней челюсти.</li>
                <li>&mdash; Тем, кто хочет быстрее прийти к несъёмному протезу.</li>
                <li>&mdash; Тем, кто по возможности предпочитает обойтись без объёмной пластики.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Кому подходит костная пластика:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Пациентам с лёгкой и умеренной убылью кости (или с локальными дефектами).</li>
                <li>&mdash; Тем, кто предпочитает классический поэтапный подход.</li>
                <li>&mdash; Тем, чья анатомия не подходит для скуловых имплантов.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как проходит консультация
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Прежде чем выбрать между скуловыми имплантами и костной пластикой, необходима подробная
                консультация. Обычно она включает:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Стоматологический осмотр</strong> для оценки состояния дёсен и полости рта в целом.</li>
                <li>&mdash; <strong>Лучевую диагностику</strong> (рентген или КЛКТ) для оценки качества кости и анатомии.</li>
                <li>&mdash; <strong>Обсуждение плана лечения</strong> с учётом ваших целей, сроков и предпочтений.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Если вы рассматриваете продвинутые варианты имплантации, узнайте больше о{" "}
                <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">протезировании на всю челюсть</Link>{" "}
                и оценке у специалиста.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Что такое скуловые импланты?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловые импланты — это дентальные импланты, которые фиксируются в скуловой кости и
                    служат опорой для протеза. Они особенно полезны пациентам с выраженной убылью кости
                    верхней челюсти.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Как работает костная пластика?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Костная пластика — это пересадка костной ткани в участки, где кости недостаточно. Так
                    создаётся устойчивая основа для будущих дентальных имплантов, а на приживление обычно
                    требуется несколько месяцев.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Что быстрее — скуловые импланты или костная пластика?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловые импланты, как правило, быстрее: часто они позволяют установить протез сразу
                    или раньше, тогда как костная пластика обычно требует более длительного периода
                    заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Есть ли риски у этих процедур?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Как и любая операция, и скуловые импланты, и костная пластика связаны с рисками — в том
                    числе инфекцией и осложнениями с имплантом. Консультация и тщательное планирование
                    помогают эти риски снизить.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Как понять, какой вариант подходит именно мне?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Лучший вариант зависит от состояния зубов, общего здоровья и ваших предпочтений.
                    Подробное обследование у специалиста поможет определить наиболее подходящее лечение.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Чего ожидать в период восстановления?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Восстановление у всех проходит по-разному. После скуловых имплантов часто можно быстрее
                    вернуться к привычным делам, тогда как костная пластика требует больше времени на
                    заживление, прежде чем можно ставить импланты.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Хирургия дентальных имплантов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy — Обзор дентальных имплантов</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Заболевания дёсен и убыль кости</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/24533334/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Aparicio C, Manresa C et al. — Скуловые импланты: показания, методики, результаты</a></li>
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
                    протезировании на всю челюсть, скуловых имплантах и реконструктивной хирургии челюстей.
                    Принимает пациентов по всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Найдите верное решение при убыли кости
                </h3>
                <p className="text-neutral-700 mb-6">
                  Лучший следующий шаг — консультация специалиста, чтобы оценить вашу анатомию, сроки и цели
                  лечения. Консультация бесплатная, а координатор перезвонит в течение 24 часов и объяснит,
                  что подготовить.
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
