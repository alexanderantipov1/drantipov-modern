import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Импланты после удаления зуба",
  description:
    "Импланты после удаления зуба: когда устанавливать, как на самом деле проходит заживление, сохранение кости и как выбрать самый надёжный план для долговечного результата.",
  alternates: {
    canonical: "/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options",
    languages: {
      "ru": "/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options",
      "en": "/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options",
      "x-default": "/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options",
    },
  },
  keywords: [
    "импланты после удаления зуба",
    "немедленная установка импланта",
    "сохранение лунки",
    "сроки остеоинтеграции",
    "этапы заживления импланта",
    "когда ставить имплант после удаления зуба",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Импланты после удаления зуба",
    description: "Когда устанавливать, этапы заживления и сохранение кости при имплантации после удаления зуба.",
    images: [
      {
        url: "/images/blog/2026-06-19/implants-after-extraction.png",
        width: 1200,
        height: 630,
        alt: "Импланты после удаления зуба: сроки, заживление и варианты",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Импланты после удаления зуба",
    description: "Когда устанавливать, этапы заживления и сохранение кости при имплантации после удаления зуба.",
    images: ["/images/blog/2026-06-19/implants-after-extraction.png"],
  }
}

export default function DentalImplantsAfterToothExtractionPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options#article","headline":"Импланты после удаления зуба: сроки, заживление и варианты","description":"Подробный гид по имплантам после удаления зуба \\u2014 немедленная, ранняя и отсроченная установка, этапы заживления, сохранение кости и факторы, влияющие на успех.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/implants-after-extraction.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Сколько времени занимает весь процесс имплантации после удаления зуба?","acceptedAnswer":{"@type":"Answer","text":"Это зависит от сроков и от того, нужна ли костная пластика. В некоторых случаях немедленная установка сокращает общий срок, но многим всё равно нужно несколько месяцев на остеоинтеграцию до фиксации финальной коронки. Если место сначала должно зажить или нуждается в укреплении кости, весь процесс займёт больше времени, и хирург должен составить для вас пошаговый план."}},{"@type":"Question","name":"Болезненна ли имплантация после удаления зуба?","acceptedAnswer":{"@type":"Answer","text":"Большинство пациентов во время процедуры чувствуют давление, но не резкую боль — благодаря анестезии. После операции несколько дней обычна болезненность, которая, как правило, хорошо контролируется рекомендованными лекарствами и соблюдением инструкций. Если боль усиливается после первоначального улучшения, обратитесь к хирургу для осмотра."}},{"@type":"Question","name":"Можно ли нормально есть после установки импланта?","acceptedAnswer":{"@type":"Answer","text":"После удаления зуба и установки импланта обычно нужна более мягкая пища на короткий период. По мере заживления большинство пациентов возвращаются к обычному рациону, но твёрдой и липкой пищи стоит избегать, пока хирург не подтвердит стабильность. Соблюдение рекомендаций по питанию помогает защитить имплант в период заживления."}},{"@type":"Question","name":"Как ухаживать за лункой удалённого зуба и зоной импланта?","acceptedAnswer":{"@type":"Answer","text":"Точно следуйте указаниям хирурга, особенно в первую неделю. Аккуратная гигиена, бережное отношение к сгустку и полоскания (если назначены) поддерживают заживление. В долгосрочной перспективе импланты требуют ежедневной чистки щёткой, межзубной гигиены и регулярного профессионального ухода."}},{"@type":"Question","name":"Какие риски у имплантации после удаления зуба?","acceptedAnswer":{"@type":"Answer","text":"У имплантов высокий процент успеха, но риски включают инфекцию, замедленное заживление, осложнения со стороны нерва или пазухи в отдельных зонах, а также неприживление импланта. Уровень риска зависит от качества кости, состояния дёсен и наличия инфекции на момент удаления. Тщательный осмотр и визуализация — лучший способ избежать неожиданностей."}},{"@type":"Question","name":"Покрывает ли страховка импланты после удаления зуба?","acceptedAnswer":{"@type":"Answer","text":"Покрытие зависит от плана. Одни полисы участвуют в оплате удаления, но не импланта, другие могут покрыть часть хирургического этапа или коронки. Лучший шаг — запросить письменную смету и попросить клинику проверить ваши льготы до начала лечения."}}]}]` }}
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
                Импланты
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>19 июня 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Импланты после удаления зуба: сроки, заживление и варианты
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/implants-after-extraction.png"
                alt="Установка импланта после удаления зуба"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Необходимость удалить зуб может ощущаться как серьёзная неприятность, но это ведь и первый шаг
                к надёжной, естественной на вид замене. Если вы изучаете тему имплантации после удаления зуба,
                самый важный вопрос обычно — сроки: ставить имплант в тот же день, через несколько недель или
                после полного заживления? Правильный ответ зависит от состояния лунки, опоры кости, здоровья
                дёсен и от того, была ли инфекция.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое дентальные импланты
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Дентальные импланты — это титановые стержни, которые устанавливают в челюстную кость взамен
                утраченных корней зубов. После заживления имплант служит опорой для коронки, восстанавливая вид
                и функцию естественного зуба. В отличие от съёмных протезов, импланты неподвижны и стабильны,
                а в сравнении с мостами не требуют обтачивания здоровых соседних зубов.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Их главные плюсы — естественный вид благодаря индивидуальной коронке, подобранной по форме и
                оттенку; долговечность на многие годы при правильном уходе; восстановление функции в зоне, где
                зуба нет; и комфорт, который многим пациентам кажется ближе к собственным зубам, чем у съёмных
                вариантов. При замене одного зуба импланты часто считают сильным решением — они восстанавливают
                утраченный зуб, не опираясь на соседние.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сроки имплантации после удаления зуба
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Есть три распространённых сценария по срокам. Хирург выбирает их, исходя из стабильности лунки,
                состояния дёсен и риска инфекции.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Вариант 1. Немедленная установка импланта (в тот же день)
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Немедленная установка означает, что имплант ставят в то же посещение, что и удаление. Это бывает
                хорошим вариантом, когда:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Зуб удалён атравматично, а стенки лунки целы.</li>
                <li>&mdash; Кости достаточно для первичной стабильности.</li>
                <li>&mdash; Десна здорова, а воспаление под контролем.</li>
                <li>&mdash; Прикус и эстетическая зона позволяют безопасно спланировать установку.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Многим этот подход нравится: он сокращает число хирургических визитов и общий срок лечения.
                В некоторых случаях ради эстетики можно быстро поставить временный зуб — в зависимости от
                стабильности и прикуса. Но немедленная установка не всегда означает немедленную финальную
                коронку — во многих случаях до фиксации постоянного зуба ещё нужна фаза заживления.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Вариант 2. Ранняя установка (обычно через несколько недель после удаления)
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Раннюю установку часто выбирают, когда хирургу нужен короткий период заживления для смыкания
                мягких тканей, лучшего контроля воспаления на участке или более стабильного контура десны до
                установки. Это может быть удачным промежуточным вариантом — особенно если у зуба было лёгкое
                воспаление или лунке нужно время стабилизироваться перед имплантом.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Вариант 3. Отсроченная установка (обычно через несколько месяцев после удаления)
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Отсроченную установку часто рекомендуют, когда:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; У зуба была серьёзная инфекция или активное заболевание дёсен.</li>
                <li>&mdash; Есть потеря кости, которую нужно сначала восполнить пластикой и дать зажить.</li>
                <li>&mdash; Лунке нужно время перестроиться ради более безопасного плана имплантации.</li>
                <li>&mdash; Случай в сложной эстетической зоне, где стабильность тканей критична.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Отсроченный подход кажется медленнее, но часто он предсказуемее — когда участок нужно
                восстанавливать или когда риск инфекции выше.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как проходит заживление после удаления зуба
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Заживление — это не просто «пара недель». Мягкие ткани заживают быстро, а кость меняется
                месяцами. Понимание этого помогает выстроить реалистичные ожидания.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Этап</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Сроки</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Что происходит</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Кровяной сгусток и раннее заживление</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Первые 7&ndash;10 дней</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Формируется защитный сгусток; обычны лёгкий отёк и болезненность; мягкая пища и чистота помогают избежать «сухой лунки».</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Смыкание мягких тканей</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Недели 2&ndash;6</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Десна постепенно закрывает участок; многие чувствуют себя нормально, но перестройка кости под поверхностью продолжается.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Перестройка кости</td>
                      <td className="border-b border-neutral-200 py-3 px-4">От недель до месяцев</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Челюстная кость перестраивается и естественно убывает в зоне отсутствующего зуба; слишком долгое ожидание без плана уменьшает объём кости.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Остеоинтеграция</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Часто через 3&ndash;6 месяцев после установки</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Кость срастается с поверхностью импланта, создавая биологическую основу для долгосрочной стабильности.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сохранение кости после удаления
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Один из самых недооценённых моментов в планировании имплантации после удаления — то, что
                происходит сразу после выхода зуба. Во многих случаях хирурги рекомендуют сохранение лунки
                (его также называют сохранением гребня) — в лунку помещают костный материал, чтобы помочь
                сохранить форму кости. Это бывает полезно, когда:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Зуб отсутствует давно, и кость уже уменьшилась.</li>
                <li>&mdash; Участок в зоне улыбки, где важен контур десны.</li>
                <li>&mdash; Вы планируете имплант, но не ставите его сразу.</li>
                <li>&mdash; Стенки лунки тонкие и склонны к проседанию.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Сохранение кости делает результат предсказуемее и снижает вероятность того, что позже
                понадобится более масштабная костная пластика.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Варианты дентальных имплантов
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ваш вариант импланта зависит от того, сколько зубов вы восстанавливаете и что может выдержать
                участок.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Имплант с коронкой на один зуб.</strong> Самый частый вариант для замены одного
                  отсутствующего зуба: имплант работает как корень, а индивидуальная коронка восстанавливает
                  видимую часть. Хороший выбор, когда нужно несъёмное решение без вмешательства в соседние зубы.
                </li>
                <li>
                  &mdash; <strong>Мини-импланты.</strong> Уже стандартных, применяются в отдельных ситуациях. Это не
                  «лучший» имплант — просто другой инструмент под определённую анатомию и задачи реставрации.
                </li>
                <li>
                  &mdash; <strong>Решения на несколько зубов или на всю челюсть.</strong> Если отсутствует несколько
                  зубов, импланты могут держать мосты или съёмные протезы на имплантах. Такие варианты, как{" "}
                  <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">несъёмное протезирование All-on-4</Link>{" "}
                  обычно обсуждают при замене целой челюсти, и для одного отсутствующего зуба это, как правило, не
                  первый выбор.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Факторы, влияющие на успех
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Плотность и объём кости.</strong> Стабильная костная опора критична. Если кость тонкая
                  или мягкая, хирург может рекомендовать костную пластику, поэтапное лечение или изменённые сроки —
                  чтобы повысить предсказуемость.
                </li>
                <li>
                  &mdash; <strong>Здоровье дёсен и история инфекций.</strong> Если удаление было вызвано тяжёлой инфекцией
                  или заболеванием дёсен, могут выбрать более осторожный план. Лечение воспаления в первую очередь
                  часто улучшает результат.
                </li>
                <li>
                  &mdash; <strong>Гигиена рта.</strong> Ежедневная чистка и регулярный профессиональный уход снижают риск
                  воспаления вокруг импланта — это важный фактор, который в ваших руках.
                </li>
                <li>
                  &mdash; <strong>Образ жизни.</strong> Курение повышает риск инфекции и замедляет заживление, а
                  неконтролируемый диабет тормозит восстановление. Если это про вас, могут рекомендовать более
                  щадящие сроки.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько времени занимает весь процесс имплантации после удаления зуба?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Это зависит от сроков и от того, нужна ли костная пластика. В некоторых случаях немедленная
                    установка сокращает общий срок, но многим всё равно нужно несколько месяцев на
                    остеоинтеграцию до фиксации финальной коронки. Если место сначала должно зажить или нуждается
                    в укреплении кости, весь процесс займёт больше времени, и хирург должен составить для вас
                    пошаговый план.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Болезненна ли имплантация после удаления зуба?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Большинство пациентов во время процедуры чувствуют давление, но не резкую боль — благодаря
                    анестезии. После операции несколько дней обычна болезненность, которая, как правило, хорошо
                    контролируется рекомендованными лекарствами и соблюдением инструкций. Если боль усиливается
                    после первоначального улучшения, обратитесь к хирургу для осмотра.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли нормально есть после установки импланта?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    После удаления зуба и установки импланта обычно нужна более мягкая пища на короткий период.
                    По мере заживления большинство пациентов возвращаются к обычному рациону, но твёрдой и липкой
                    пищи стоит избегать, пока хирург не подтвердит стабильность. Соблюдение рекомендаций по
                    питанию помогает защитить имплант в период заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Как ухаживать за лункой удалённого зуба и зоной импланта?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Точно следуйте указаниям хирурга, особенно в первую неделю. Аккуратная гигиена, бережное
                    отношение к сгустку и полоскания (если назначены) поддерживают заживление. В долгосрочной
                    перспективе импланты требуют ежедневной чистки щёткой, межзубной гигиены и регулярного
                    профессионального ухода.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Какие риски у имплантации после удаления зуба?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    У имплантов высокий процент успеха, но риски включают инфекцию, замедленное заживление,
                    осложнения со стороны нерва или пазухи в отдельных зонах, а также неприживление импланта.
                    Уровень риска зависит от качества кости, состояния дёсен и наличия инфекции на момент
                    удаления. Тщательный осмотр и визуализация — лучший способ избежать неожиданностей.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Покрывает ли страховка импланты после удаления зуба?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Покрытие зависит от плана. Одни полисы участвуют в оплате удаления, но не импланта, другие
                    могут покрыть часть хирургического этапа или коронки. Лучший шаг — запросить письменную смету
                    и попросить клинику проверить ваши льготы до начала лечения.
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
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Заболевания дёсен и здоровье полости рта</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/19885407/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Hämmerle CHF, Chen ST, Wilson TG — Консенсус о сроках установки имплантов после удаления</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, специализирующийся на дентальных имплантах,
                    полном протезировании челюсти, скуловых имплантах и корректирующей хирургии челюстей.
                    Принимает пациентов по всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Планируете имплант после удаления зуба?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Самый надёжный план начинается с очного осмотра и 3D-снимка. Консультация бесплатна.
                  Координатор перезвонит в течение 24 часов и объяснит, что подготовить.
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
