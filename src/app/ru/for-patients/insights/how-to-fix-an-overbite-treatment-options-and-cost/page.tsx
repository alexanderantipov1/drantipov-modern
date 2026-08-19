import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RelatedArticles } from "@/components/RelatedArticles"
import { structuredDataScript, getFAQSchema } from "@/lib/structured-data"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

const CANONICAL = "/ru/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost"
const URL = "https://www.drantipov.com" + CANONICAL
const IMAGE = "/images/blog/2026-06-22/how-to-fix-an-overbite.png"

export const metadata: Metadata = {
  title: "Как исправить глубокий прикус: варианты лечения, операция и стоимость",
  description:
    "Как исправить глубокий прикус? Сертифицированный челюстно-лицевой хирург разбирает все варианты - элайнеры, брекеты и операцию на челюсти - для детей и взрослых, с реальными сроками и стоимостью.",
  alternates: {
    canonical: CANONICAL,
    languages: {
      ru: CANONICAL,
      en: "/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost",
      "x-default": "/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost",
    },
  },
  keywords: [
    "как исправить глубокий прикус",
    "как исправляют глубокий прикус",
    "можно ли исправить глубокий прикус",
    "исправить глубокий прикус",
    "как исправить глубокий прикус без операции",
    "исправление глубокого прикуса у взрослых",
    "как исправить лёгкий глубокий прикус",
    "стоимость лечения глубокого прикуса",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Как исправить глубокий прикус: варианты лечения, операция и стоимость",
    description:
      "Все способы исправить глубокий прикус - элайнеры, брекеты и операция на челюсти - с реальными сроками и стоимостью для взрослых и детей.",
    url: URL,
    type: "article",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Как исправить глубокий прикус - варианты лечения" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Как исправить глубокий прикус: варианты лечения, операция и стоимость",
    description:
      "Все способы исправить глубокий прикус - элайнеры, брекеты и операция на челюсти - с реальными сроками и стоимостью.",
    images: [IMAGE],
  },
}

const faqs = [
  {
    question: "Как исправляют глубокий прикус?",
    answer:
      "Большинство случаев глубокого прикуса исправляют, перемещая зубы с помощью прозрачных элайнеров или брекетов. Если причина в неправильном положении костей челюсти (скелетный глубокий прикус), ортодонтию сочетают с реконструктивной операцией на челюсти. Подходящий вариант зависит от того, в чём причина - в зубах или в скелете, - и от вашего возраста.",
  },
  {
    question: "Можно ли исправить глубокий прикус без операции?",
    answer:
      "Да - подавляющее большинство случаев глубокого прикуса исправляют без операции, прозрачными элайнерами или брекетами, иногда с небольшими накладками, эластиками или временными опорными микроимплантами. Операция нужна только при тяжёлом скелетном прикусе, когда необходимо изменить само положение челюсти.",
  },
  {
    question: "Как исправить лёгкий глубокий прикус?",
    answer:
      "Лёгкий глубокий прикус (примерно 4–6 мм перекрытия) обычно исправляют прозрачными элайнерами или брекетами примерно за 6–18 месяцев. Многие лёгкие случаи лечат ради функции и эстетики, хотя небольшой прикус, который ничему не мешает, можно и не лечить.",
  },
  {
    question: "Можно ли исправить глубокий прикус у взрослых?",
    answer:
      "Безусловно. Зубы можно перемещать в любом возрасте, поэтому взрослых регулярно лечат элайнерами или брекетами. Разница в том, что у взрослого кости челюсти уже не растут, поэтому скелетный глубокий прикус у взрослых исправляют операцией на челюсти, а не аппаратами, направляющими рост.",
  },
  {
    question: "Сколько стоит исправить глубокий прикус?",
    answer:
      "Элайнеры или брекеты при глубоком прикусе обычно стоят $3,000–$8,000. Если нужна реконструктивная операция на челюсти, полный план (ортодонтия плюс операция) обычно укладывается в диапазон $25,000–$60,000, хотя медицинская страховка нередко покрывает 60–90% хирургической части, когда подтверждено функциональное нарушение.",
  },
  {
    question: "Что будет, если глубокий прикус не лечить?",
    answer:
      "Лёгкий глубокий прикус может никогда не доставить проблем. Более выраженный способен привести к патологическому стиранию зубов, повреждению дёсен там, где нижние зубы упираются в нёбо, перегрузке височно-нижнечелюстного сустава (ВНЧС), трудностям при жевании, а иногда - к нарушениям речи или дыхания. Как правило, лечить раньше проще, чем позже.",
  },
]

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalScholarlyArticle",
  "@id": `${URL}#article`,
  headline: "Как исправить глубокий прикус: варианты лечения, операция и стоимость",
  description:
    "Как исправляют глубокий прикус? Все варианты - прозрачные элайнеры, брекеты и реконструктивная операция на челюсти - для взрослых и детей, с реальными сроками и стоимостью.",
  inLanguage: "ru",
  url: URL,
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  image: [`https://www.drantipov.com${IMAGE}`],
  author: {
    "@type": "Person",
    name: "Dr. Alexander V. Antipov, DDS",
    url: "https://www.drantipov.com/about",
    identifier: "https://www.drantipov.com/#physician",
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Alexander V. Antipov, DDS",
    url: "https://www.drantipov.com",
    logo: { "@type": "ImageObject", url: "https://www.drantipov.com/images/logo-d10cd66c.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
}

export default function HowToFixAnOverbitePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([articleSchema, getFAQSchema(faqs)])}
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

      {/* Hero */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Хирургия челюстей</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>22 июня 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 мин чтения</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Как исправить глубокий прикус: варианты лечения, операция и стоимость
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src={IMAGE}
                alt="Как исправить глубокий прикус - прозрачные элайнеры, брекеты и операция на челюсти"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Глубокий прикус - когда верхние передние зубы слишком сильно перекрывают нижние - это одна
                из самых частых проблем смыкания зубов, и почти все они поддаются исправлению. Подход зависит
                от одного ключевого вопроса: причина прикуса в <strong>зубах</strong> или в
                <strong> костях челюсти</strong>? Вот все варианты - от прозрачных элайнеров до операции на
                челюсти - с реальными сроками и стоимостью.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Большинство случаев глубокого прикуса исправляют без операции - элайнерами или брекетами.</li>
                  <li>&bull; Скелетный глубокий прикус (проблема в положении челюсти) исправляют ортодонтией в сочетании с операцией на челюсти.</li>
                  <li>&bull; Детей можно лечить аппаратами, направляющими рост; взрослым перемещают зубы или делают операцию.</li>
                  <li>&bull; Элайнеры/брекеты обычно занимают 6–24 месяца и стоят $3,000–$8,000.</li>
                  <li>&bull; Бесплатная консультация с 3D-КТ - самый быстрый способ узнать, к какой категории относится ваш случай.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сначала: зубной или скелетный глубокий прикус
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Любое решение о лечении начинается отсюда, потому что эти два типа исправляются совершенно
                по-разному.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Зубной глубокий прикус.</strong> Кости челюсти стоят нормально, но зубы наклонены
                  или расположены так, что верхние перекрывают нижние слишком сильно. Это самый частый тип, и он
                  исправляется <strong>перемещением зубов</strong> элайнерами или брекетами.
                </li>
                <li>
                  &mdash; <strong>Скелетный глубокий прикус.</strong> Верхняя и нижняя кости челюсти смещены друг
                  относительно друга - например, нижняя челюсть стоит слишком назад. Одним лишь перемещением зубов
                  положение костей не исправить, поэтому саму челюсть перемещают с помощью
                  <strong> реконструктивной операции на челюсти</strong>.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Клинический осмотр плюс 3D-КТ точно различают эти два типа. Подробнее о хирургической категории
                читайте в нашем материале о{" "}
                <Link href="/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed" className="text-primary-600 underline">
                  тяжёлом глубоком прикусе и о том, когда нужна операция на челюсти
                </Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Насколько выражен ваш глубокий прикус?
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Степень</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Перекрытие</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Обычное лечение</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Норма</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1&ndash;3&nbsp;мм</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Лечение не нужно</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Лёгкая</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4&ndash;6&nbsp;мм</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Прозрачные элайнеры или брекеты</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Умеренная</td>
                      <td className="border-b border-neutral-200 py-3 px-4">6&ndash;9&nbsp;мм</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Брекеты, иногда с удалением зубов или микроимплантами (TAD)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Тяжёлая</td>
                      <td className="border-b border-neutral-200 py-3 px-4">9+&nbsp;мм</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Часто операция на челюсти + ортодонтия</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Степень - это ориентир, а не приговор: <em>причина</em> (зубная или скелетная) важнее, чем
                число миллиметров.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Вариант 1: прозрачные элайнеры
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Прозрачные элайнеры (например, системы типа Invisalign) - популярный выбор при лёгком и
                умеренном зубном глубоком прикусе. Серия прозрачных съёмных капп постепенно перемещает зубы,
                нередко с небольшими накладками под цвет зуба и эластиками для контроля прикуса. Они почти
                незаметны и снимаются на время еды и чистки.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Кому подходит:</strong> при лёгком и умеренном зубном глубоком прикусе у подростков и взрослых.</li>
                <li>&mdash; <strong>Сроки:</strong> примерно 6&ndash;18 месяцев.</li>
                <li>&mdash; <strong>Стоимость:</strong> около $3,000&ndash;$7,000.</li>
                <li>&mdash; <strong>Нюанс:</strong> результат зависит от того, носите ли вы их по 20&ndash;22 часа в сутки.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Вариант 2: брекеты
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Обычные или керамические брекеты остаются самым универсальным инструментом для исправления
                глубокого прикуса, особенно в умеренных случаях или когда нужно точное, сложное перемещение
                зубов. Брекеты можно дополнить эластиками или небольшими временными опорными микроимплантами
                (TAD), чтобы внедрить или переместить зубы там, где элайнеры справляются хуже.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Кому подходит:</strong> при умеренном зубном глубоком прикусе и сложных случаях.</li>
                <li>&mdash; <strong>Сроки:</strong> примерно 12&ndash;24 месяца.</li>
                <li>&mdash; <strong>Стоимость:</strong> около $3,000&ndash;$8,000.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Вариант 3: аппараты для направления роста (дети и подростки)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                У растущих детей и подростков челюсть ещё можно направлять. Функциональные аппараты и
                лицевые дуги влияют на то, как развиваются челюсти, и иногда позволяют избежать операции при
                скелетном прикусе в будущем. Именно поэтому раннюю ортодонтическую оценку (примерно в 7 лет)
                рекомендуют детям с явной проблемой прикуса - тот же глубокий прикус часто проще исправить,
                пока ребёнок ещё растёт.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Вариант 4: реконструктивная операция на челюсти (скелетный глубокий прикус)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Когда глубокий прикус скелетный - смещены сами кости челюсти, - ортодонтию сочетают с
                <strong> ортогнатической (реконструктивной) операцией на челюсти</strong>. Хирург перемещает
                верхнюю челюсть, нижнюю или обе и закрепляет их небольшими титановыми пластинами и винтами,
                устанавливая их изнутри рта (без шрамов на лице). Это единственный способ добиться стабильного
                исправления при истинно скелетных случаях у взрослых.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Кому подходит:</strong> при тяжёлом или скелетном глубоком прикусе у взрослых, а также при боли в ВНЧС, апноэ сна или жалобах на профиль лица.</li>
                <li>&mdash; <strong>Сроки:</strong> согласованный план на 18&ndash;36 месяцев (брекеты → операция → завершающая ортодонтия).</li>
                <li>&mdash; <strong>Стоимость:</strong> обычно $25,000&ndash;$60,000 за полный план, нередко на 60&ndash;90% покрывается медицинской страховкой, когда подтверждено функциональное нарушение.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Полный разбор читайте в нашем руководстве о{" "}
                <Link href="/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed" className="text-primary-600 underline">
                  тяжёлом глубоком прикусе и операции на челюсти
                </Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Исправление глубокого прикуса у взрослых
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Взрослых успешно лечат каждый день - зубы перемещаются в любом возрасте. Единственная реальная
                разница в том, что у взрослого кости челюсти уже не растут, поэтому аппараты для направления
                роста больше не работают. Это значит, что взрослого с <em>зубным</em> глубоким прикусом лечат
                элайнерами или брекетами, а взрослого со <em>скелетным</em> прикусом - ортодонтией плюс
                операцией на челюсти. У взрослых лечение может идти чуть дольше, поскольку кость перестраивается
                медленнее, но результаты ничуть не менее надёжны.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему это стоит исправлять
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Помимо внешности, исправление значительного глубокого прикуса защищает здоровье полости рта
                в долгосрочной перспективе: уменьшает патологическое стирание зубов, не даёт нижним зубам
                упираться в нёбо, снимает нагрузку с височно-нижнечелюстных суставов (ВНЧС) и улучшает
                жевание - а в скелетных случаях ещё и дыхание со сном.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-6 my-8">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <GlassCard className="my-12 p-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                  Не уверены, какой у вас тип глубокого прикуса?
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Бесплатная консультация с 3D-КТ у доктора Антипова точно покажет, зубной у вас глубокий
                  прикус или скелетный, - и подскажет самый простой путь его исправить.
                </p>
                <Button asChild size="lg">
                  <Link href="/ru/contact">Записаться на бесплатную консультацию</Link>
                </Button>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="how-to-fix-an-overbite-treatment-options-and-cost" />
    </>
  )
}
