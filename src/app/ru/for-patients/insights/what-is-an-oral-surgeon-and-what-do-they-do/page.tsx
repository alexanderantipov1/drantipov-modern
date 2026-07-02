import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Кто такой челюстно-лицевой хирург и что он делает?",
  description:
    "Челюстно-лицевой хирург — стоматолог-специалист с хирургической подготовкой. Что он лечит, как обучается, какие операции выполняет и когда к нему обращаться.",
  alternates: {
    canonical: "/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
    languages: {
      "en": "/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
      "ru": "/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
      "x-default": "/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do",
    },
  },
  keywords: [
    "челюстно-лицевой хирург",
    "хирург-стоматолог",
    "что делает челюстно-лицевой хирург",
    "хирург-стоматолог vs стоматолог",
    "процедуры челюстно-лицевой хирургии",
    "когда идти к челюстно-лицевому хирургу",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Кто такой челюстно-лицевой хирург и что он делает?",
    description: "Что лечит челюстно-лицевой хирург, как он обучается и когда нужно к нему обращаться.",
    images: [
      {
        url: "/images/blog/2026-06-19/what-is-oral-surgeon.png",
        width: 1200,
        height: 630,
        alt: "Кто такой челюстно-лицевой хирург и что он делает?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кто такой челюстно-лицевой хирург и что он делает?",
    description: "Что лечит челюстно-лицевой хирург, как он обучается и когда нужно к нему обращаться.",
    images: ["/images/blog/2026-06-19/what-is-oral-surgeon.png"],
  }
}

export default function WhatIsAnOralSurgeonPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do#article","headline":"Кто такой челюстно-лицевой хирург и что он делает?","description":"Челюстно-лицевой хирург — стоматолог-специалист с хирургической подготовкой. Что он лечит, как обучается, какие операции выполняет и когда к нему обращаться.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/what-is-oral-surgeon.png"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Челюстно-лицевые хирурги — это настоящие врачи?","acceptedAnswer":{"@type":"Answer","text":"Да — у них докторская степень в стоматологической хирургии (DDS или DMD) и 4–6 лет дополнительной хирургической резидентуры. У многих есть также медицинская степень MD."}},{"@type":"Question","name":"Делают ли челюстно-лицевые хирурги косметические операции?","acceptedAnswer":{"@type":"Answer","text":"Часть делает — особенно операции, связанные со структурами челюстно-лицевой области (подбородочные импланты, восстановление переломов лица, ринопластику отдельных видов). Большинство специализируются на функциональной хирургии."}},{"@type":"Question","name":"Может ли челюстно-лицевой хирург заменить моего обычного стоматолога?","acceptedAnswer":{"@type":"Answer","text":"Нет — челюстно-лицевые хирурги специализируются на хирургии. Для обычной чистки, пломб и текущей стоматологической помощи нужен общий стоматолог."}},{"@type":"Question","name":"Сколько стоит приём челюстно-лицевого хирурга?","acceptedAnswer":{"@type":"Answer","text":"Процедуры дороже общей стоматологии — из-за специализированного обучения и оборудования. Но сложные случаи, сделанные правильно с первого раза, часто обходятся дешевле, чем исправление потом."}},{"@type":"Question","name":"Безопасна ли седация у челюстно-лицевого хирурга?","acceptedAnswer":{"@type":"Answer","text":"Да — челюстно-лицевые хирурги проходят серьёзную подготовку по анестезиологии в резидентуре. Седация в клинике сертифицированным хирургом имеет отличный профиль безопасности."}},{"@type":"Question","name":"Покрывает ли страховка челюстно-лицевую хирургию?","acceptedAnswer":{"@type":"Answer","text":"Многие процедуры покрываются медицинской (а не стоматологической) страховкой при функциональных показаниях — зубы мудрости, челюстная хирургия, травмы, некоторые удаления. Стоматологическая страховка обычно покрывает удаления и часть стоимости имплантации."}}]}]` }}
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
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Кто такой челюстно-лицевой хирург и что он делает?
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/what-is-oral-surgeon.png"
                alt="Челюстно-лицевой хирург разбирает 3D-снимок на консультации"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Челюстно-лицевой хирург (OMS или OMFS) — это стоматолог-специалист, обученный хирургии полости
                рта, челюстей, лица и шеи. Челюстно-лицевые хирурги совмещают стоматологический и
                хирургический опыт и лечат то, что выходит за рамки общей стоматологии.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Челюстно-лицевой хирург — стоматолог-специалист с серьёзной хирургической подготовкой.</li>
                  <li>&bull; Полное обучение занимает 12&ndash;14 лет после школы, включая 4&ndash;6-летнюю резидентуру в больнице.</li>
                  <li>&bull; Делают имплантацию, удаления, челюстную хирургию, лечение травм и патологий.</li>
                  <li>&bull; Имеют право проводить внутривенную седацию и общую анестезию прямо в клинике.</li>
                  <li>&bull; Обращайтесь при зубах мудрости, имплантах на полную челюсть, челюстной хирургии и сложных случаях.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Кто такой челюстно-лицевой хирург?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Челюстно-лицевой хирург (OMS или OMFS) — это стоматолог-специалист, обученный хирургическим
                вмешательствам в области рта, челюстей, лица и шеи. Челюстно-лицевые хирурги сочетают
                стоматологический и хирургический опыт, лечат состояния, которые выходят за рамки обычной
                стоматологии.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Полное название «oral and maxillofacial surgeon» отражает охват: oral (полость рта) и
                maxillofacial (кости лица, включая верхнюю и нижнюю челюсти).
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Обучение: как становятся челюстно-лицевым хирургом
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Один из самых длинных путей в медицине:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>4 года бакалавриата</strong> &mdash; обычно по pre-med или биологии.</li>
                <li>&mdash; <strong>4 года стоматологического вуза</strong> &mdash; степень DDS или DMD.</li>
                <li>&mdash; <strong>4&ndash;6 лет резидентуры в больнице</strong> по челюстно-лицевой хирургии &mdash; часто совмещается с медицинской степенью MD.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Итого обучение: 12&ndash;14 лет после школы</strong> — часто дольше, чем у большинства
                медицинских специальностей. Резидентура включает:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Общую хирургию</li>
                <li>&mdash; Анестезиологию</li>
                <li>&mdash; Внутреннюю медицину</li>
                <li>&mdash; Пластическую и реконструктивную хирургию</li>
                <li>&mdash; Оториноларингологию (ЛОР)</li>
                <li>&mdash; Травматологию</li>
                <li>&mdash; Конкретно челюстно-лицевые операции</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Именно такая широта подготовки даёт челюстно-лицевым хирургам право самостоятельно проводить
                общую анестезию и внутривенную седацию прямо в своей клинике &mdash; привилегия, которая есть
                у очень немногих стоматологических специалистов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Какие процедуры выполняет челюстно-лицевой хирург?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Охват очень широкий. Основные категории:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Дентальные импланты:</strong> одиночные импланты, мостовидные протезы на
                  имплантах, полная челюсть (All-on-4, All-on-6), скуловые импланты при тяжёлой потере кости
                  и установка имплантов «за один день».
                </li>
                <li>
                  &mdash; <strong>Удаления зубов:</strong> обычные удаления, хирургические удаления сломанных или
                  ретинированных зубов, удаление зубов мудрости (самая частая отдельная процедура).
                </li>
                <li>
                  &mdash; <strong>Хирургия кости и десны:</strong> костная пластика для подготовки к
                  имплантации, синус-лифтинг, аугментация альвеолярного гребня и пародонтологическая
                  хирургия (иногда совместно с пародонтологами).
                </li>
                <li>
                  &mdash; <strong>Корригирующая челюстная хирургия (ортогнатическая):</strong> исправление
                  прикуса при тяжёлом перекусе, недокусе или открытом прикусе, операции на ВНЧС и
                  реконструкция лица.
                </li>
                <li>
                  &mdash; <strong>Травма и патология:</strong> переломы лицевого скелета, реконструкция
                  челюсти после травм, удаление кист и опухолей челюсти и лица, биопсия подозрительных очагов.
                </li>
                <li>
                  &mdash; <strong>Хирургия апноэ сна:</strong> мандибуломаксиллярное выдвижение и другие
                  операции, направленные на дыхательные пути.
                </li>
                <li>
                  &mdash; <strong>Расщелина губы и нёба:</strong> совместно с пластическими хирургами у
                  педиатрических пациентов.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Челюстно-лицевой хирург vs. общий стоматолог
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Параметр</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Общий стоматолог</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Челюстно-лицевой хирург</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Обучение после стом. вуза</td>
                      <td className="border-b border-neutral-200 py-3 px-4">0 лет (иногда 1 год резидентуры)</td>
                      <td className="border-b border-neutral-200 py-3 px-4">4&ndash;6 лет резидентуры в больнице</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Право на анестезию</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Местная + лёгкая седация</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Местная, внутривенная седация, общая анестезия</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Охват</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Рутинная стоматология, простые удаления</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Сложная хирургия, челюстная хирургия, имплантация</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Госпитальные привилегии</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Редко</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Часто &mdash; госпитализация и доступ в операционную</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Визуализация</td>
                      <td className="border-b border-neutral-200 py-3 px-4">2D-рентген, иногда CBCT</td>
                      <td className="border-b border-neutral-200 py-3 px-4">3D CBCT в порядке вещей</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Сложные имплантационные случаи</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Иногда</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Профильная специализация</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Общий стоматолог направляет к челюстно-лицевому хирургу, когда нужна хирургическая сложность,
                седация глубже лёгкой анксиолизы, серьёзная работа с костью или координация нескольких
                специалистов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Челюстно-лицевой хирург vs. пародонтолог
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Оба ставят импланты. Отличия:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Челюстно-лицевые хирурги:</strong> более широкая хирургическая подготовка,
                  включая работу с твёрдыми тканями (костью и челюстью), травмой, ортогнатикой и полной челюстью.
                </li>
                <li>
                  &mdash; <strong>Пародонтологи:</strong> сосредоточены на заболеваниях дёсен, пластике мягких
                  тканей и одиночных имплантах.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Для случаев на полную челюсть, при тяжёлом дефиците кости или необходимости седации
                челюстно-лицевой хирург обычно подходит лучше.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Челюстно-лицевой хирург vs. протезист
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Эти специальности часто работают в паре:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Челюстно-лицевые хирурги:</strong> хирургически ставят импланты.</li>
                <li>&mdash; <strong>Протезисты:</strong> проектируют и устанавливают коронки, мосты и арки сверху.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Во многих клиниках обе специальности работают рядом. У нас в клинике хирургический этап и
                протетический дизайн координируются под одной крышей.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда нужно обращаться к челюстно-лицевому хирургу?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Однозначно — при:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Удалении зубов мудрости — особенно ретинированных.</li>
                <li>&mdash; Имплантации нескольких или полной челюсти.</li>
                <li>&mdash; Костной пластике или синус-лифтинге.</li>
                <li>&mdash; Корригирующей челюстной хирургии при тяжёлых проблемах с прикусом.</li>
                <li>&mdash; Травме лица, затронувшей челюсть или зубы.</li>
                <li>&mdash; Кистах или опухолях челюсти и лица.</li>
                <li>&mdash; Апноэ сна, не отвечающем на CPAP.</li>
                <li>&mdash; Проблемах ВНЧС, требующих хирургической оценки.</li>
                <li>&mdash; Тревоге или медицинских показаниях, требующих глубокой седации для любой стоматологии.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Стоит рассмотреть, если у вас:</strong>
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Неудачные предыдущие стоматологические работы.</li>
                <li>&mdash; Сложные одиночные импланты — особенно фронтальные зубы или эстетическая зона.</li>
                <li>&mdash; Второе мнение по удалению или имплантации.</li>
                <li>&mdash; Хроническая лицевая боль неясного происхождения.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Общего стоматолога достаточно для:</strong> профессиональной чистки, пломб, коронок,
                простых удалений, базового ухода за дёснами и плановых осмотров.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Чего ждать на консультации у челюстно-лицевого хирурга
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Типичный первый визит занимает около часа:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li><strong>Сбор медицинского и стоматологического анамнеза</strong> &mdash; полный обзор препаратов и состояний.</li>
                <li><strong>Клинический осмотр</strong> &mdash; зубы, дёсны, челюсть, прикус, структуры лица.</li>
                <li><strong>3D-снимок (CBCT)</strong> &mdash; полный обзор кости, нервов и пазух.</li>
                <li><strong>Обсуждение находок</strong> простыми словами.</li>
                <li><strong>Варианты лечения</strong> с реалистичными сроками и стоимостью.</li>
                <li><strong>Ответы на ваши вопросы</strong> &mdash; принесите список.</li>
              </ol>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Вы уйдёте с чётким пониманием, что нужно и сколько это стоит. Большинство консультаций
                ни к чему не обязывают.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему специалист важен для имплантации
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Исследования стабильно показывают: дентальные импланты, поставленные специалистами
                (челюстно-лицевыми хирургами или пародонтологами), имеют более высокие показатели успеха
                на длинной дистанции, чем установленные общими стоматологами, особенно в:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Сложных случаях (полная челюсть, тяжёлая потеря кости).</li>
                <li>&mdash; Эстетической зоне.</li>
                <li>&mdash; Пациентов с сопутствующими заболеваниями.</li>
                <li>&mdash; Случаях с седацией.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Специалисты увереннее справляются с осложнениями, потому что встречают их чаще и имеют
                хирургическую подготовку, чтобы их решать.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Какие виды анестезии предлагают челюстно-лицевые хирурги
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Главное преимущество хирургических клиник — гибкость по анестезии:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Местная анестезия</strong> &mdash; зона обезболивается, вы остаётесь в сознании.</li>
                <li>&mdash; <strong>Закись азота («веселящий газ»)</strong> &mdash; лёгкое расслабление.</li>
                <li>&mdash; <strong>Пероральная седация</strong> &mdash; таблетка до процедуры; сонливость при сохранении сознания.</li>
                <li>&mdash; <strong>Внутривенная седация</strong> &mdash; более глубокий сон, без памяти о процедуре.</li>
                <li>&mdash; <strong>Общая анестезия</strong> &mdash; полный сон для сложных случаев.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Большинство общих стоматологов могут предложить только первые три варианта. Челюстно-лицевые
                хирурги в обычном порядке проводят внутривенную седацию и общую анестезию прямо в клинике —
                это критично для сложных и длительных процедур.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как выбрать челюстно-лицевого хирурга
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                На что смотреть:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Сертификация American Board of Oral &amp; Maxillofacial Surgery.</li>
                <li>&mdash; Полноценная резидентура в больнице (а не минимальная постдипломная подготовка).</li>
                <li>&mdash; Опыт &mdash; особенно с той процедурой, которая нужна именно вам.</li>
                <li>&mdash; Современная техника &mdash; 3D-снимки и компьютерное планирование.</li>
                <li>&mdash; Возможность анестезии прямо в клинике.</li>
                <li>&mdash; Понятное общение о диагнозе, вариантах и стоимости.</li>
                <li>&mdash; Отзывы и результаты пациентов.</li>
                <li>&mdash; Непрерывное обучение современным методикам.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Челюстно-лицевые хирурги — это настоящие врачи?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да &mdash; у них докторская степень в стоматологической хирургии (DDS или DMD) и 4&ndash;6 лет
                    дополнительной хирургической резидентуры. У многих есть также медицинская степень MD.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Делают ли челюстно-лицевые хирурги косметические операции?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Часть делает &mdash; особенно операции на структурах челюстно-лицевой области (импланты
                    подбородка, восстановление переломов лица, ринопластика отдельных видов). Большинство
                    специализируются на функциональной хирургии.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Может ли челюстно-лицевой хирург заменить моего обычного стоматолога?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Нет &mdash; они специализируются на хирургии. Для обычной чистки, пломб и текущей
                    стоматологической помощи нужен общий стоматолог.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько стоит приём челюстно-лицевого хирурга?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Процедуры дороже общей стоматологии — из-за специализированного обучения и оборудования.
                    Но сложные случаи, сделанные правильно с первого раза, часто обходятся дешевле, чем
                    исправление осложнений потом.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Безопасна ли седация у челюстно-лицевого хирурга?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да &mdash; они проходят серьёзную подготовку по анестезиологии в резидентуре. Седация в
                    клинике сертифицированным челюстно-лицевым хирургом имеет отличный профиль безопасности.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Покрывает ли страховка челюстно-лицевую хирургию?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Многие процедуры покрываются медицинской (а не стоматологической) страховкой при
                    функциональных показаниях &mdash; зубы мудрости, челюстная хирургия, травмы, отдельные
                    удаления. Стоматологическая страховка обычно покрывает удаления и часть стоимости
                    имплантации.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/what-we-do/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; Кто такой челюстно-лицевой хирург?</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS &mdash; Процедура имплантации зубов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/dental-specialties" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy &mdash; Стоматологические специальности</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR &mdash; Информация о стоматологическом здоровье</a></li>
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
                  Нужна сложная процедура — сделайте её правильно с первого раза
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию к нашей команде челюстно-лицевой хирургии — мы оценим ваш случай
                  и объясним все реалистичные варианты. Координатор свяжется с вами в течение 24 часов.
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
