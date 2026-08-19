import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import CalculatorEmbed from "@/components/CalculatorEmbed"

export const metadata: Metadata = {
  title: "Импланты на всю челюсть в Roseville и Сакраменто: стоимость и процесс",
  description:
    "Полный гид по имплантам на всю челюсть в регионе Сакраменто - All-on-4, процесс шаг за шагом, диапазоны стоимости, кому подходит и от чего зависит успех. От доктора Антипова.",
  alternates: {
    canonical: "/ru/for-patients/insights/full-mouth-dental-implants-cost-process",
    languages: {
      "ru": "/ru/for-patients/insights/full-mouth-dental-implants-cost-process",
      "en": "/for-patients/insights/full-mouth-dental-implants-cost-process",
      "x-default": "/for-patients/insights/full-mouth-dental-implants-cost-process",
    },
  },
  keywords: [
    "импланты на всю челюсть",
    "импланты на всю челюсть Roseville",
    "импланты на всю челюсть Сакраменто",
    "All-on-4",
    "полное восстановление зубов",
    "стоимость дентальных имплантов Сакраменто",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Импланты на всю челюсть в Roseville и Сакраменто: стоимость и процесс",
    description: "All-on-4 и полное восстановление зубов простыми словами - процесс, кому подходит и честные диапазоны стоимости для региона Сакраменто.",
    images: [
      {
        url: "/images/blog/2026-06-19/full-mouth-dental-implants.png",
        width: 1200,
        height: 630,
        alt: "Импланты на всю челюсть возвращают полную и уверенную улыбку",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Импланты на всю челюсть в Roseville и Сакраменто: стоимость и процесс",
    description: "All-on-4 и полное восстановление зубов простыми словами - процесс, кому подходит и честные диапазоны стоимости для региона Сакраменто.",
    images: ["/images/blog/2026-06-19/full-mouth-dental-implants.png"],
  }
}

export default function FullMouthDentalImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/full-mouth-dental-implants-cost-process#article","headline":"Импланты на всю челюсть в Roseville и Сакраменто: стоимость, процесс и чего ожидать","description":"Полный гид по имплантам на всю челюсть в регионе Сакраменто, включая All-on-4, процесс шаг за шагом, диапазоны стоимости, кому подходит и что отличает успешный результат от неудачного.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/full-mouth-dental-implants-cost-process","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/full-mouth-dental-implants.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/full-mouth-dental-implants-cost-process"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Что такое импланты на всю челюсть?","acceptedAnswer":{"@type":"Answer","text":"Импланты на всю челюсть заменяют все зубы на одной или обеих челюстях несъёмным протезом на имплантах. Самые распространённые решения - All-on-4 и All-on-X: от 4 до 8 имплантов на челюсть, на которых держится полный ряд зубов."}},{"@type":"Question","name":"Сколько стоят импланты на всю челюсть рядом с Сакраменто?","acceptedAnswer":{"@type":"Answer","text":"В регионе Большого Сакраменто одна челюсть обычно обходится примерно в $18 000 – $30 000, а обе челюсти - ориентировочно в $30 000 – $55 000, в зависимости от количества имплантов, материалов и подготовительных процедур. Точную сумму для вашего случая вы получите в детальном плане лечения на консультации."}},{"@type":"Question","name":"Импланты на всю челюсть - это навсегда?","acceptedAnswer":{"@type":"Answer","text":"Да. Титановые штифты имплантов рассчитаны служить постоянно, а зубы протеза несъёмные. При правильном уходе восстановление прослужит много лет."}},{"@type":"Question","name":"Можно ли получить импланты на всю челюсть в тот же день?","acceptedAnswer":{"@type":"Answer","text":"Во многих подходящих случаях - да. Несъёмный временный протез можно установить в день операции, а постоянный протез изготавливают после 3–6 месяцев заживления."}},{"@type":"Question","name":"Где сделать импланты на всю челюсть рядом с Roseville?","acceptedAnswer":{"@type":"Answer","text":"Доктор Александр Антипов - сертифицированный челюстно-лицевой хирург в Roseville, CA, который выполняет полное восстановление зубов на имплантах для региона Большого Сакраменто."}}]}]` }}
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
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Импланты на всю челюсть в Roseville и Сакраменто: стоимость, процесс и чего ожидать
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Автор и медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/full-mouth-dental-implants.png"
                alt="Импланты на всю челюсть возвращают полную и уверенную улыбку"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Мало какие процедуры в современной стоматологии меняют повседневную жизнь человека так
                полно, как полное восстановление зубов на имплантах. Если вы живёте с разрушающимися
                зубами, болтающимися протезами или тихо стесняетесь своей улыбки, несъёмные зубы на
                имплантах вернут способность есть, говорить и чувствовать себя уверенно &mdash; навсегда.
                Вот честный и понятный разбор вариантов, процесса и того, во что это реально обходится в
                регионе Сакраменто.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Импланты на всю челюсть заменяют весь зубной ряд несъёмными зубами.</li>
                  <li>&bull; Самый частый подход - All-on-4; альтернативы - All-on-6 и протезы на имплантах.</li>
                  <li>&bull; Одна челюсть в регионе Сакраменто обычно обходится в $18 000&ndash;$30 000.</li>
                  <li>&bull; Многие пациенты уходят с операции в тот же день с несъёмными временными зубами.</li>
                  <li>&bull; Долгий успех зависит от 3D-снимков, опыта хирурга и качества протеза.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое импланты на всю челюсть?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                &laquo;Импланты на всю челюсть&raquo; - это восстановление всех зубов на верхней челюсти,
                нижней или обеих, где опорой служат дентальные импланты. В отличие от обычного протеза,
                который лежит на дёснах и вынимается, несъёмное восстановление на имплантах закреплено
                прямо в челюстной кости &mdash; оно держится, когда вы жуёте, смеётесь и спите.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Чаще всего пациенты выбирают между тремя решениями:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>All-on-4:</strong> четыре импланта на челюсть держат полный несъёмный ряд зубов.</li>
                <li>&mdash; <strong>All-on-X (All-on-6 и больше):</strong> обычно от пяти до восьми имплантов на челюсть, когда случаю нужна дополнительная опора.</li>
                <li>&mdash; <strong>Съёмный протез на имплантах:</strong> протез, который защёлкивается на имплантах для устойчивости - для тех, кто предпочитает съёмный вариант.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Подходит ли вам это?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Вы можете быть хорошим кандидатом, если у вас отсутствуют все или почти все зубы на челюсти,
                вы носите полные протезы и хотите постоянную альтернативу, у вас несколько зубов, которые
                нельзя спасти, или вы годами мучаетесь с протезами, которые так и не сели как надо. Хорошее
                общее здоровье и отказ от курения (или готовность бросить) заметно улучшают результат.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Даже серьёзная потеря кости &mdash; частое следствие многих лет без зубов &mdash; не
                означает автоматический отказ. Современные методики полного восстановления, включая All-on-4
                и скуловые импланты, рассчитаны на работу с той костью, что уже есть у многих пациентов.
                3D-снимок (конусно-лучевая КТ) точно показывает, с чем мы работаем и какой подход подходит
                вашей анатомии.
              </p>

              {/* Featured Image */}
              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/all-on-x-cost.png"
                  alt="Планирование лечения для полного восстановления зубов на имплантах"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Процесс полного восстановления, шаг за шагом
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Консультация и 3D-снимок.</strong> Мы изучаем вашу медицинскую и стоматологическую
                  историю, осматриваем вас и делаем конусно-лучевую КТ, которая показывает кость, пазухи и
                  нервы &mdash; основу безопасного и точного планирования.
                </li>
                <li>
                  <strong>Цифровое планирование лечения.</strong> В специальной программе положение
                  имплантов продумывается виртуально ещё до операции - чтобы добиться устойчивости и обойти
                  важные структуры.
                </li>
                <li>
                  <strong>Установка имплантов и зубы в тот же день.</strong> Оставшиеся безнадёжные зубы
                  удаляют и устанавливают импланты. В большинстве подходящих случаев несъёмный временный ряд
                  крепят в тот же день &mdash; вы уходите с зубами.
                </li>
                <li>
                  <strong>Заживление и остеоинтеграция.</strong> За 3&ndash;6 месяцев импланты срастаются с
                  костью. Вы придерживаетесь щадящей мягкой диеты и приходите на короткие контрольные визиты.
                </li>
                <li>
                  <strong>Постоянный протез.</strong> Когда интеграция завершена, снимают финальные слепки и
                  изготавливают ваше постоянное восстановление &mdash; обычно из циркония или акрила на
                  титановом каркасе - его подгоняют и закрепляют.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Стоимость имплантов на всю челюсть в регионе Сакраменто
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Стоимость зависит от того, какую челюсть лечат, сколько имплантов используют, какой материал
                протеза вы выбираете и нужна ли подготовительная работа вроде костной пластики. Диапазоны
                ниже отражают типичные цифры по региону Большого Сакраменто (Roseville, Folsom, Rocklin,
                El Dorado Hills). Это оценки &mdash; ваш точный детальный план представят на консультации,
                без размытых диапазонов и скрытых платежей.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Лечение</th>
                      <th className="py-3 font-semibold text-neutral-900">Ориентировочная стоимость</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Одна челюсть, All-on-4</td><td className="py-3">$18 000 &ndash; $25 000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Одна челюсть, All-on-6</td><td className="py-3">$22 000 &ndash; $30 000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Обе челюсти, All-on-4</td><td className="py-3">$30 000 &ndash; $45 000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Обе челюсти, All-on-6</td><td className="py-3">$38 000 &ndash; $55 000</td></tr>
                    <tr><td className="py-3 pr-4">Съёмный протез на имплантах (за челюсть)</td><td className="py-3">$12 000 &ndash; $20 000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Гибкое финансирование позволяет многим пациентам начать лечение сейчас и оплачивать его в
                рассрочку. Для немалого числа людей ежемесячный платёж сопоставим с тем, что они и так тратят
                на фиксирующие средства, перебазировку и ремонт протезов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что отличает успех от неудачи
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Долгосрочный результат полного восстановления решают три фактора:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Качество планирования.</strong> 3D-снимки и цифровое планирование - не необязательная опция, а основа предсказуемой установки.</li>
                <li>&mdash; <strong>Опыт хирурга.</strong> Полное восстановление зубов - одна из самых сложных задач в этой области. Опыт и специализация дают более стабильный результат.</li>
                <li>&mdash; <strong>Качество протеза.</strong> Импланты держат конструкцию, но живёте вы именно с протезом. Правильные материалы и механика прикуса - разница между восстановлением, которое служит десятилетиями, и тем, что подведёт рано.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Что такое импланты на всю челюсть?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Они заменяют все зубы на одной или обеих челюстях несъёмным протезом на имплантах. Самые
                    распространённые решения - All-on-4 и All-on-X: от 4 до 8 имплантов на челюсть, на которых
                    держится полный ряд зубов.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Сколько они стоят рядом с Сакраменто?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Одна челюсть обычно обходится примерно в $18 000 – $30 000, а обе - ориентировочно в
                    $30 000 – $55 000, в зависимости от числа имплантов, материалов и подготовительных
                    процедур. Точную сумму вы получите в письменном детальном плане на консультации.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Это навсегда?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да. Титановые штифты рассчитаны служить постоянно, а зубы протеза несъёмные. При хорошем
                    уходе восстановление прослужит много лет.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Можно ли получить зубы в тот же день?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Во многих подходящих случаях - да. Несъёмный временный ряд устанавливают в день операции,
                    а постоянный протез изготавливают после 3–6 месяцев заживления.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Процедура установки дентальных имплантов</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M - Концепция немедленной нагрузки All-on-4 с имплантами Brånemark System</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH - Национальный институт стоматологических и черепно-лицевых исследований: дентальные импланты</a></li>
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
                    Сертифицированный челюстно-лицевой хирург в Roseville, CA. Специализируется на дентальных
                    имплантах, полном восстановлении зубов по протоколам All-on-4 и All-on-6 и коррекционной
                    хирургии челюсти. Принимает пациентов из региона Большого Сакраменто.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Думаете об имплантах на всю челюсть?
                </h3>
                <p className="text-neutral-700 mb-6">
                  3D-КТ и очный осмотр - единственный способ понять, какой подход подходит вашей анатомии
                  &mdash; и получить точную детальную стоимость для вашего случая.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Полное восстановление на имплантах</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <CalculatorEmbed slug="all-on-468-per-arch" locale="ru" />
    </>
  )
}
