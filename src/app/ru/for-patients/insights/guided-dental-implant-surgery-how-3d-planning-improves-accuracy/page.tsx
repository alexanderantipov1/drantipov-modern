import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Имплантация по шаблону: 3D-планирование",
  description:
    "Что такое имплантация по навигационному шаблону: 3D-снимки CBCT, индивидуальные хирургические шаблоны, преимущества по точности и то, чего ждать в день операции с доктором Антиповым.",
  alternates: {
    canonical: "/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    languages: {
      "ru": "/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
      "en": "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
      "x-default": "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    },
  },
  keywords: [
    "имплантация по шаблону",
    "3D-планирование имплантов",
    "снимок CBCT для имплантов",
    "хирургический шаблон для имплантов",
    "планирование от ортопедической конструкции",
    "точность имплантации полного ряда",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Имплантация по шаблону: 3D-планирование",
    description: "Как 3D-снимки, цифровое планирование и индивидуальные хирургические шаблоны повышают точность имплантации.",
    images: [
      {
        url: "/images/blog/2026-06-19/guided-implant-surgery.png",
        width: 1200,
        height: 630,
        alt: "Имплантация по шаблону: как 3D-планирование повышает точность",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Имплантация по шаблону: 3D-планирование",
    description: "Как 3D-снимки, цифровое планирование и индивидуальные хирургические шаблоны повышают точность имплантации.",
    images: ["/images/blog/2026-06-19/guided-implant-surgery.png"],
  }
}

export default function GuidedDentalImplantSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy#article","headline":"Имплантация по шаблону: как 3D-планирование повышает точность","description":"Что такое имплантация по навигационному шаблону: 3D-снимки CBCT, индивидуальные хирургические шаблоны, преимущества по точности и то, чего ждать в день операции.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/guided-implant-surgery.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Какие снимки используют при имплантации по шаблону?","acceptedAnswer":{"@type":"Answer","text":"В большинстве случаев применяют снимок CBCT для 3D-планирования. Также часто делают цифровые сканы зубов и дёсен, чтобы хирургический план совпадал с финальной формой зубов."}},{"@type":"Question","name":"Сколько длится имплантация по шаблону?","acceptedAnswer":{"@type":"Answer","text":"Сама операция может занимать очень по-разному. Установка одного импланта иногда проходит быстро, а восстановление полного ряда длится дольше из-за нескольких имплантов и дополнительных этапов. Этап планирования проходит до операции, и именно он во многом повышает точность и предсказуемость."}},{"@type":"Question","name":"Болезненна ли имплантация по шаблону?","acceptedAnswer":{"@type":"Answer","text":"Процедуру обычно проводят под местной анестезией, а при необходимости доступны варианты седации. Большинство пациентов описывают давление во время лечения и лёгкую или умеренную болезненность после, которая обычно снимается рекомендованными препаратами и уходом."}},{"@type":"Question","name":"Можно ли при имплантации по шаблону поставить зубы в тот же день при полном ряде?","acceptedAnswer":{"@type":"Answer","text":"Во многих случаях полного ряда планирование по шаблону помогает поставить временный несъёмный мост в тот же день, если позволяют клинические условия. Это зависит от стабильности имплантов, жевательных нагрузок и общего плана. Хирург должен объяснить, подходит ли немедленная нагрузка и какие ограничения соблюдать в период заживления."}},{"@type":"Question","name":"Имплантация по шаблону безопаснее установки от руки?","acceptedAnswer":{"@type":"Answer","text":"Планирование по шаблону во многих случаях повышает безопасность, потому что помогает обойти нервы и пазухи и поставить импланты там, где они лучше поддержат финальные зубы. Установка от руки тоже может быть очень успешной, особенно у опытного врача. Лучший подход зависит от вашей анатомии, сложности случая и целей лечения."}},{"@type":"Question","name":"Сокращает ли имплантация по шаблону срок восстановления?","acceptedAnswer":{"@type":"Answer","text":"Может, особенно когда установка по шаблону позволяет делать меньшие разрезы или проводить операцию эффективнее. Восстановление всё равно зависит от числа имплантов, удалений, костной пластики и индивидуальных особенностей заживления."}},{"@type":"Question","name":"Имплантация по шаблону стоит дороже?","acceptedAnswer":{"@type":"Answer","text":"Иногда такие случаи включают дополнительные расходы на планирование и изготовление шаблона. Многие пациенты считают, что повышенная точность и предсказуемость того стоят, особенно при восстановлении полного ряда, где точное положение влияет на долговечную посадку и работу конструкции."}},{"@type":"Question","name":"Что делать, если нужны костная пластика или удаление зубов?","acceptedAnswer":{"@type":"Answer","text":"Планирование по шаблону можно сочетать с удалением зубов или костной пластикой - в зависимости от сроков и плана лечения. Хирург может порекомендовать поэтапный подход для большей стабильности, особенно при инфекции или убыли кости."}}]}]` }}
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
              Имплантация по шаблону: как 3D-планирование повышает точность
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/guided-implant-surgery.png"
                alt="Имплантация по шаблону с 3D-планированием и индивидуальным хирургическим шаблоном"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Имплантология сильно изменилась за последнее десятилетие, и имплантация по навигационному
                шаблону &mdash; один из самых заметных шагов вперёд. Вместо того чтобы полагаться только на
                установку от руки, такой метод использует 3D-снимки и цифровое планирование, чтобы наметить
                самое безопасное и точное положение импланта ещё до начала операции.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Кратко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Имплантация по шаблону использует 3D-снимки и цифровое планирование, чтобы ставить импланты точнее.</li>
                  <li>&bull; Хирургические шаблоны уменьшают догадки, повышают безопасность рядом с нервами и пазухами и позволяют планировать от будущей ортопедической конструкции.</li>
                  <li>&bull; У многих пациентов разрезы меньше, операция короче, а восстановление мягче.</li>
                  <li>&bull; Планирование по шаблону особенно полезно при <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">полном восстановлении ряда</Link>, где положение имплантов влияет на прикус, прочность и дизайн улыбки.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое имплантация по навигационному шаблону?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Имплантация по шаблону &mdash; это методика, при которой установку имплантов планируют
                цифрово на основе 3D-снимков, а затем переносят в полость рта с помощью индивидуального
                хирургического шаблона. Шаблон работает как точный трафарет: он помогает врачу поставить
                имплант ровно в том положении, на ту глубину и под тем углом, что были запланированы на
                компьютере.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Классическую установку можно выполнять и от руки &mdash; многие опытные врачи добиваются так
                отличных результатов. Имплантация по шаблону добавляет ещё один уровень точности, связывая
                план лечения с физическим шаблоном, так что ход операции максимально совпадает с цифровым
                планом.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Роль 3D-снимков и цифрового планирования
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Планирование по шаблону обычно объединяет:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Снимки CBCT (3D-рентген):</strong> показывают объём кости, плотность, ход нервов и анатомию пазух.</li>
                <li>&mdash; <strong>Внутриротовые сканы или цифровые слепки:</strong> фиксируют точную форму ваших зубов и дёсен.</li>
                <li>&mdash; <strong>ПО для виртуального планирования:</strong> совмещает данные сканов, чтобы установка имплантов учитывала и анатомию кости, и финальную форму зубов.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Это важно, потому что успех имплантации &mdash; не просто &laquo;вставить штифт в кость&raquo;.
                Главное &mdash; поставить импланты там, где они смогут удобно поддержать финальные зубы,
                выглядеть естественно и долго выдерживать жевательную нагрузку.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                За счёт чего шаблон повышает точность?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Имплантация по шаблону повышает точность тремя ключевыми способами:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Планирование от ортопедической конструкции.</strong> Импланты планируют исходя из
                  того, где должны быть финальные зубы, а не только где проще установить их в кость. Это
                  критично при восстановлении полного ряда: от положения имплантов зависят прикус, линия
                  улыбки и прочность моста.
                </li>
                <li>
                  <strong>Безопасная навигация вокруг анатомии.</strong> 3D-планирование помогает обойти
                  чувствительные зоны &mdash; нижний альвеолярный нерв на нижней челюсти, пазухи на верхней
                  и участки тонкой кости, где сложнее добиться стабильности.
                </li>
                <li>
                  <strong>Контролируемые глубина и угол.</strong> Хирургический шаблон ограничивает
                  смещение. Это значит, что направление сверления и угол импланта точнее соответствуют
                  плану &mdash; особенно когда несколько имплантов должны работать вместе под одну
                  конструкцию.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Полная навигация и частичная: в чём разница?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Не каждый &laquo;навигационный&raquo; случай ведут одинаково. Хирург может объяснить один из
                таких подходов:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Полная навигация:</strong> шаблон управляет всей последовательностью сверления, а также глубиной и углом установки импланта.</li>
                <li>&mdash; <strong>Пилотная навигация:</strong> шаблон помогает точно задать стартовую позицию, а остальное делают под тщательным клиническим контролем.</li>
                <li>&mdash; <strong>Гибридный подход:</strong> применяют, когда случаю нужны и точность шаблона, и гибкость, например при необходимости редукции кости или коррекции мягких тканей.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Правильный выбор зависит от вашей анатомии, состояния кости и от того, восстанавливаете вы
                один зуб или весь ряд.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему шаблон особенно хорош для восстановления полного ряда
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Восстановление полного ряда часто означает установку нескольких имплантов в положениях,
                которые позволяют сделать прочный, стабильный и естественный мост. Планирование по шаблону
                помогает, потому что:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; импланты нужно выровнять для равномерного распределения жевательной нагрузки;</li>
                <li>&mdash; финальные зубы должны стоять в естественном положении для речи и эстетики;</li>
                <li>&mdash; посадка конструкции сильно зависит от точности установки имплантов;</li>
                <li>&mdash; временные зубы в тот же день, когда это уместно, выигрывают от точного позиционирования.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Если вы рассматриваете восстановление полного ряда в Roseville, можно изучить ваши{" "}
                <Link href="/ru/expertise/full-arch-implants" className="text-primary-700 hover:text-primary-800 font-semibold">варианты восстановления полного ряда</Link>.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Пошагово: как проходит имплантация по шаблону
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Консультация и клинический осмотр.</strong> Хирург оценивает состояние дёсен,
                  прикус, медицинскую историю и ваши цели. На этом же этапе обсуждают, нужен вам один
                  имплант, несколько или восстановление полного ряда.
                </li>
                <li>
                  <strong>Снимок CBCT и цифровые слепки.</strong> CBCT даёт 3D-картину челюстной кости и
                  окружающей анатомии. Цифровые слепки или внутриротовые сканы фиксируют форму дёсен и
                  имеющихся зубов.
                </li>
                <li>
                  <strong>Виртуальное планирование лечения.</strong> Команда планирует число и положение
                  имплантов, углы и глубину, дизайн конструкции и соотношение прикуса, а также промежутки
                  для гигиены и долгосрочного ухода.
                </li>
                <li>
                  <strong>Проектирование и изготовление хирургического шаблона.</strong> По вашему плану
                  создают индивидуальный шаблон. В зависимости от случая шаблоны бывают с опорой на зубы,
                  на дёсны или на кость.
                </li>
                <li>
                  <strong>Установка имплантов.</strong> Во время операции шаблон фиксируют на месте и по
                  нему задают последовательность сверления и установку имплантов. Многие случаи по шаблону
                  бывают менее травматичными, потому что план точный, а доступ &mdash; более контролируемый.
                </li>
                <li>
                  <strong>Временные зубы и наблюдение.</strong> В некоторых случаях, особенно при
                  восстановлении полного ряда, временный несъёмный мост ставят в тот же день или вскоре
                  после. Затем хирург следит за заживлением и убеждается, что импланты хорошо прижились,
                  прежде чем устанавливать финальную конструкцию.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Чего ждать в период восстановления
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Восстановление зависит от сложности случая, числа имплантов и от того, нужны ли
                дополнительные этапы (удаления, костная пластика, редукция кости). У многих пациентов бывают:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; лёгкая или умеренная болезненность в течение нескольких дней;</li>
                <li>&mdash; отёк, который достигает пика рано, а потом спадает;</li>
                <li>&mdash; короткий период мягкой пищи;</li>
                <li>&mdash; контрольные визиты для наблюдения за заживлением и гигиеной.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ключевое преимущество планирования по шаблону в том, что оно снижает число
                &laquo;сюрпризов&raquo; во время операции, а значит, и общий опыт обычно проходит мягче.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Есть ли риски у имплантации по шаблону?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Имплантация по шаблону может снижать определённые риски за счёт точности, но не устраняет их
                полностью. К возможным рискам по-прежнему относятся:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; инфекция;</li>
                <li>&mdash; кровотечение или отёк;</li>
                <li>&mdash; неприживление импланта;</li>
                <li>&mdash; осложнения со стороны нервов или пазух, особенно при сложной анатомии;</li>
                <li>&mdash; механические проблемы позже, например ослабление винта или износ конструкций.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Цель планирования по шаблону &mdash; снизить вероятность осложнений, связанных с
                позиционированием, и повысить предсказуемость, особенно когда несколько имплантов должны
                поддерживать одну конструкцию.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Кому подходит этот метод?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Имплантация по шаблону подходит многим, в том числе тем, кому нужен один имплант, и тем, кто
                рассматривает восстановление полного ряда. Врач оценит:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; объём и качество кости;</li>
                <li>&mdash; состояние дёсен и наличие воспаления;</li>
                <li>&mdash; жевательные нагрузки и привычку стискивать зубы;</li>
                <li>&mdash; медицинские факторы, влияющие на заживление;</li>
                <li>&mdash; выиграет ли случай от точности по шаблону, особенно при работе с несколькими имплантами.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Если опора кости ограничена, план может включать костную пластику или поэтапное лечение, и
                планирование по шаблону всё равно помогает наметить самый безопасный подход.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Какие снимки используют при имплантации по шаблону?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    В большинстве случаев применяют снимок CBCT для 3D-планирования. Также часто делают
                    цифровые сканы зубов и дёсен, чтобы хирургический план совпадал с финальной формой зубов.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько длится имплантация по шаблону?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Сама операция может занимать очень по-разному. Установка одного импланта иногда проходит
                    быстро, а восстановление полного ряда длится дольше из-за нескольких имплантов и
                    дополнительных этапов. Этап планирования проходит до операции, и именно он во многом
                    повышает точность и предсказуемость.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Болезненна ли имплантация по шаблону?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Процедуру обычно проводят под местной анестезией, а при необходимости доступны варианты
                    седации. Большинство пациентов описывают давление во время лечения и лёгкую или умеренную
                    болезненность после, которая обычно снимается рекомендованными препаратами и уходом.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли при имплантации по шаблону поставить зубы в тот же день при полном ряде?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Во многих случаях полного ряда планирование по шаблону помогает поставить временный
                    несъёмный мост в тот же день, если позволяют клинические условия. Это зависит от
                    стабильности имплантов, жевательных нагрузок и общего плана. Хирург должен объяснить,
                    подходит ли немедленная нагрузка и какие ограничения соблюдать в период заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Имплантация по шаблону безопаснее установки от руки?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Планирование по шаблону во многих случаях повышает безопасность, потому что помогает
                    обойти нервы и пазухи и поставить импланты там, где они лучше поддержат финальные зубы.
                    Установка от руки тоже может быть очень успешной, особенно у опытного врача. Лучший
                    подход зависит от вашей анатомии, сложности случая и целей лечения.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сокращает ли имплантация по шаблону срок восстановления?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Может, особенно когда установка по шаблону позволяет делать меньшие разрезы или
                    проводить операцию эффективнее. Восстановление всё равно зависит от числа имплантов,
                    удалений, костной пластики и индивидуальных особенностей заживления.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Имплантация по шаблону стоит дороже?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Иногда такие случаи включают дополнительные расходы на планирование и изготовление
                    шаблона. Многие пациенты считают, что повышенная точность и предсказуемость того стоят,
                    особенно при восстановлении полного ряда, где точное положение влияет на долговечную
                    посадку и работу конструкции.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Что делать, если нужны костная пластика или удаление зубов?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Планирование по шаблону можно сочетать с удалением зубов или костной пластикой &mdash; в
                    зависимости от сроков и плана лечения. Хирург может порекомендовать поэтапный подход для
                    большей стабильности, особенно при инфекции или убыли кости.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Дентальная имплантация</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy - Обзор дентальных имплантов</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/29575324/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Tahmaseb A, Wu V, Wismeijer D et al. - Точность статической компьютерной имплантации: систематический обзор</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, специализирующийся на дентальных имплантах,
                    полном восстановлении зубного ряда, скуловых имплантах и корректирующей хирургии
                    челюсти. Принимает пациентов по всей Северной Калифорнии и за её пределами.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Готовы спланировать своё лечение имплантами?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Точную рекомендацию можно дать только после очного осмотра и 3D-снимка КТ. Консультация
                  бесплатна. Координатор пациентов перезвонит в течение 24 часов и расскажет, что подготовить.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Импланты на весь ряд</Link>
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
