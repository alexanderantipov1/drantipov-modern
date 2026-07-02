import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Скуловые импланты: когда обычные импланты невозможны",
  description:
    "Скуловые дентальные импланты при выраженной убыли кости верхней челюсти. Когда традиционные импланты невозможны, как скуловая кость удерживает несъёмное решение, показания, риски и восстановление. Доктор Антипов.",
  alternates: {
    canonical: "/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible",
    languages: {
      "ru": "/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible",
      "en": "/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible",
      "x-default": "/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible",
    },
  },
  keywords: [
    "скуловые дентальные импланты",
    "когда обычные импланты невозможны",
    "выраженная убыль кости верхней челюсти",
    "импланты в скуловую кость",
    "альтернатива костной пластике",
    "несъёмный протез на скуловых имплантах",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Скуловые импланты: когда обычные импланты невозможны",
    description: "Скуловые дентальные импланты фиксируются в скуловой кости при выраженной убыли кости верхней челюсти, когда традиционные импланты невозможны.",
    images: [
      {
        url: "/images/blog/2026-06-19/zygomatic-when-impossible.png",
        width: 1200,
        height: 630,
        alt: "Скуловые импланты: когда обычные импланты невозможны",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Скуловые импланты: когда обычные импланты невозможны",
    description: "Скуловые дентальные импланты фиксируются в скуловой кости при выраженной убыли кости верхней челюсти, когда традиционные импланты невозможны.",
    images: ["/images/blog/2026-06-19/zygomatic-when-impossible.png"],
  }
}

export default function ZygomaticWhenImpossiblePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible#article","headline":"Скуловые дентальные импланты: когда традиционные импланты невозможны","description":"Руководство по скуловым дентальным имплантам при выраженной убыли кости верхней челюсти \\u2014 почему традиционные импланты не держатся, чем особенна скуловая кость, показания, риски и немедленная нагрузка.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/zygomatic-when-impossible.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Когда скуловые импланты нужны вместо традиционных?","acceptedAnswer":{"@type":"Answer","text":"Скуловые импланты применяют, когда выраженная убыль кости верхней челюсти не позволяет устойчиво установить традиционные импланты. На верхней челюсти долгая потеря зубов ведёт к вертикальной резорбции кости, расширению пазухи и нехватке высоты кости. В крайних случаях даже объёмная костная пластика не способна надёжно воссоздать достаточный объём кости, поэтому импланты вместо этого фиксируют в плотной скуловой кости."}},{"@type":"Question","name":"Почему скуловая кость хорошо удерживает импланты?","acceptedAnswer":{"@type":"Answer","text":"Скуловая кость — это плотная кортикальная кость, которая со временем почти не резорбируется и обеспечивает высокую первичную стабильность. Закрепляя импланты в этой структуре, хирурги обходятся без масштабной пластики на верхней челюсти."}},{"@type":"Question","name":"Можно ли сразу нагрузить скуловые импланты зубами?","acceptedAnswer":{"@type":"Answer","text":"Многие случаи скуловых имплантов допускают немедленную нагрузку благодаря высокой первичной стабильности. Однако конструкция протеза должна быть жёсткой, силы прикуса — строго контролироваться, а уход — критически важен. Немедленная нагрузка не устраняет долгосрочный риск."}},{"@type":"Question","name":"Каковы риски скуловых имплантов?","acceptedAnswer":{"@type":"Answer","text":"Из-за своей сложности скуловые импланты несут особые риски, включая осложнения со стороны пазух, раздражение мягких тканей и трудности в конструкции протеза. Эти риски резко возрастают, когда процедуру выполняет неопытный врач, поэтому продвинутая хирургическая подготовка и тщательное планирование необходимы."}},{"@type":"Question","name":"Почему так мало клиник предлагают скуловые импланты?","acceptedAnswer":{"@type":"Answer","text":"Скуловые импланты требуют продвинутой хирургической подготовки, планирования госпитального уровня и междисциплинарной координации. Это не лечение первой линии, оно предназначено для сложных случаев, поэтому встречается редко по своей сути, а не только из-за доступности."}}]}]` }}
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
              Скуловые дентальные импланты: когда традиционные импланты невозможны
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/zygomatic-when-impossible.png"
                alt="Скуловые дентальные импланты, закреплённые в скуловой кости, при выраженной убыли кости верхней челюсти"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Скуловые дентальные импланты — это продвинутая методика имплантации, которую применяют,
                когда выраженная убыль кости верхней челюсти не позволяет установить традиционные импланты.
                Вместо того чтобы закрепляться в верхней челюсти, скуловые импланты входят в скуловую кость &mdash;
                кость скулы, &mdash; которая даёт плотную, устойчивую опору. Эта процедура предназначена для
                сложных случаев и требует продвинутой хирургической подготовки.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Скуловые импланты фиксируются в скуловой кости, а не в верхней челюсти, когда кость слишком резорбирована.</li>
                  <li>&bull; Скуловая кость плотная, почти не резорбируется и даёт высокую первичную стабильность.</li>
                  <li>&bull; Они позволяют избежать масштабной костной пластики и долгого приживления трансплантата.</li>
                  <li>&bull; Многие случаи допускают немедленную нагрузку, но конструкция и уход критически важны.</li>
                  <li>&bull; Это не лечение первой линии — нужен опытный <Link href="/ru/about" className="text-primary-700 hover:text-primary-800 font-semibold">челюстно-лицевой хирург</Link>.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему традиционные импланты не держатся при выраженной убыли кости
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                На верхней челюсти долгая потеря зубов часто запускает цепочку изменений, которые подрывают
                установку обычных имплантов:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Вертикальная резорбция кости</strong>, которая уменьшает высоту, доступную для импланта.</li>
                <li>&mdash; <strong>Расширение пазухи</strong>, которое опускается вниз, в пространство, где раньше была кость.</li>
                <li>&mdash; <strong>Нехватка высоты кости</strong> для надёжной стабильности импланта.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В крайних случаях даже объёмная костная пластика не способна надёжно воссоздать достаточный
                объём кости для традиционных имплантов. Именно в этот момент необходим другой анатомический
                якорь.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Чем особенна скуловая кость
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловая кость обладает качествами, которых нет у резорбированной верхней челюсти:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Это <strong>плотная кортикальная кость</strong>.</li>
                <li>&mdash; Она <strong>почти не резорбируется</strong> со временем.</li>
                <li>&mdash; Она <strong>обеспечивает высокую первичную стабильность</strong>.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Закрепляя импланты в этой структуре, хирурги обходятся без масштабной пластики.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Конструкция и установка имплантов
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловые импланты отличаются от обычных и длиной, и направлением. Они:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Значительно длиннее обычных имплантов.</li>
                <li>&mdash; Устанавливаются под наклоном.</li>
                <li>&mdash; Закрепляются частично или полностью в скуловой кости.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Установка требует точного 3D-планирования и аккуратного обхода важных анатомических структур,
                таких как пазуха и глазница.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Показания к скуловым имплантам
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловые импланты обычно применяют, когда:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Убыль кости верхней челюсти выражена.</li>
                <li>&mdash; Несколько процедур пластики не увенчались успехом.</li>
                <li>&mdash; Пациент хочет несъёмное решение без долгого приживления трансплантата.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Это не лечение первой линии.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Риски и осложнения
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Из-за своей сложности скуловые импланты несут особые риски:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Осложнения со стороны пазух.</li>
                <li>&mdash; Раздражение мягких тканей.</li>
                <li>&mdash; Трудности в конструкции протеза.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Эти риски резко возрастают, когда процедуру выполняет неопытный врач.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Возможность немедленной нагрузки
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Многие случаи скуловых имплантов допускают немедленную нагрузку благодаря высокой первичной
                стабильности. Однако:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Конструкция протеза должна быть жёсткой.</li>
                <li>&mdash; Силы прикуса должны строго контролироваться.</li>
                <li>&mdash; Уход критически важен.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Немедленная нагрузка не устраняет долгосрочный риск.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему мало клиник предлагают скуловые импланты
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Эта процедура требует:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Продвинутой хирургической подготовки.</li>
                <li>&mdash; Планирования госпитального уровня.</li>
                <li>&mdash; Междисциплинарной координации.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скуловые импланты встречаются нечасто — и так и должно быть: они относятся к небольшому набору
                сложных случаев, которыми занимаются опытные хирургические команды.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Когда скуловые импланты нужны вместо традиционных?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловые импланты применяют, когда выраженная убыль кости верхней челюсти не позволяет
                    устойчиво установить традиционные импланты. На верхней челюсти долгая потеря зубов ведёт
                    к вертикальной резорбции кости, расширению пазухи и нехватке высоты кости. В крайних
                    случаях даже объёмная костная пластика не способна надёжно воссоздать достаточный объём
                    кости, поэтому импланты вместо этого фиксируют в плотной скуловой кости.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Почему скуловая кость хорошо удерживает импланты?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловая кость — это плотная кортикальная кость, которая со временем почти не
                    резорбируется и обеспечивает высокую первичную стабильность. Закрепляя импланты в этой
                    структуре, хирурги обходятся без масштабной пластики на верхней челюсти.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли сразу нагрузить скуловые импланты зубами?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Многие случаи скуловых имплантов допускают немедленную нагрузку благодаря высокой
                    первичной стабильности. Однако конструкция протеза должна быть жёсткой, силы прикуса —
                    строго контролироваться, а уход — критически важен. Немедленная нагрузка не устраняет
                    долгосрочный риск.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Каковы риски скуловых имплантов?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Из-за своей сложности скуловые импланты несут особые риски, включая осложнения со
                    стороны пазух, раздражение мягких тканей и трудности в конструкции протеза. Эти риски
                    резко возрастают, когда процедуру выполняет неопытный врач, поэтому продвинутая
                    хирургическая подготовка и тщательное планирование необходимы.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Почему так мало клиник предлагают скуловые импланты?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Скуловые импланты требуют продвинутой хирургической подготовки, планирования
                    госпитального уровня и междисциплинарной координации. Это не лечение первой линии, оно
                    предназначено для сложных случаев, поэтому встречается редко по своей сути, а не только
                    из-за доступности.
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
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15074739/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Branemark PI, Gröndahl K, Ohrnell LO et al. — Скуловая фиксация при выраженной атрофии верхней челюсти</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/24533334/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Aparicio C, Manresa C et al. — Скуловые импланты: показания, методики, результаты</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA — Обзор дентальных имплантов</a></li>
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
                  Получите честную оценку сложного случая
                </h3>
                <p className="text-neutral-700 mb-6">
                  Точная рекомендация возможна только после очного осмотра и 3D-КТ. Консультация бесплатная,
                  и мы предлагаем самое подходящее решение для вашей ситуации &mdash; а не самое сложное.
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
