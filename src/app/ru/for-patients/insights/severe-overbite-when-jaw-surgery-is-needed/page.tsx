import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Сильный глубокий прикус: когда нужна хирургия челюсти",
  description:
    "Большинство глубоких прикусов исправляют брекетами, но при тяжёлом скелетном прикусе нужна хирургия челюсти. Когда требуется ортогнатическая операция, как она проходит, восстановление и стоимость — рассказывает доктор Антипов.",
  alternates: {
    canonical: "/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
    languages: {
      "ru": "/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
      "en": "/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
      "x-default": "/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed",
    },
  },
  keywords: [
    "глубокий прикус хирургия челюсти",
    "ортогнатическая хирургия",
    "коррекция скелетного прикуса",
    "BSSO выдвижение нижней челюсти",
    "остеотомия Le Fort I",
    "стоимость хирургии челюсти страховка",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Сильный глубокий прикус: когда нужна хирургия челюсти",
    description: "Когда брекетов недостаточно — как ортогнатическая хирургия исправляет тяжёлый скелетный прикус.",
    images: [
      {
        url: "/images/blog/2026-06-19/severe-overbite-jaw-surgery.png",
        width: 1200,
        height: 630,
        alt: "Сильный глубокий прикус: когда нужна хирургия челюсти",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сильный глубокий прикус: когда нужна хирургия челюсти",
    description: "Когда брекетов недостаточно — как ортогнатическая хирургия исправляет тяжёлый скелетный прикус.",
    images: ["/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"],
  }
}

export default function SevereOverbiteJawSurgeryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed#article","headline":"Сильный глубокий прикус: когда нужна хирургия челюсти","description":"Большинство глубоких прикусов исправляют ортодонтией, но тяжёлый скелетный прикус требует ортогнатической операции. Когда нужна операция, какие методики применяют, последовательность лечения, восстановление и стоимость.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Насколько болезненна хирургия челюсти?","acceptedAnswer":{"@type":"Answer","text":"Это скорее дискомфорт, чем сильная боль. Большинство пациентов описывают своё состояние как заметный отёк и онемение, а не острую боль. Обезболивающие хорошо снимают дискомфорт."}},{"@type":"Question","name":"Лицо изменится до неузнаваемости?","acceptedAnswer":{"@type":"Answer","text":"При тяжёлых скелетных случаях — да, заметно. Большинство пациентов воспринимают изменения как положительные и соответствующие тому, как они всегда хотели выглядеть. Также часто бывают мягкие или умеренные изменения."}},{"@type":"Question","name":"Сколько времени пройдёт, пока я снова буду выглядеть нормально?","acceptedAnswer":{"@type":"Answer","text":"Основной отёк сходит за 2–4 недели. Существенное улучшение заметно к 6–8 неделе. Окончательный результат виден через 6–12 месяцев."}},{"@type":"Question","name":"Можно ли есть твёрдую пищу после операции?","acceptedAnswer":{"@type":"Answer","text":"Первые 1–2 недели — только жидкая пища, затем мягкая до 6-й недели. К полноценному рациону обычно возвращаются к 8–12 неделе."}},{"@type":"Question","name":"Будут ли пластины срабатывать на металлодетекторах в аэропорту?","acceptedAnswer":{"@type":"Answer","text":"Современные титановые пластины редко вызывают срабатывание детекторов. Если вас спросят, может пригодиться справка о проведённой операции."}},{"@type":"Question","name":"Можно ли делать хирургию челюсти в зрелом возрасте?","acceptedAnswer":{"@type":"Answer","text":"Да. Кандидатами могут быть взрослые любого возраста при достаточном уровне здоровья. Кость хорошо заживает в любом возрасте."}},{"@type":"Question","name":"Придётся ли мне носить брекеты всю жизнь после операции?","acceptedAnswer":{"@type":"Answer","text":"В той или иной форме ретейнеры нужны будут пожизненно, но сами брекеты обычно снимают через 6–12 месяцев после операции."}}]}]` }}
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
                Хирургия челюсти
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
              Сильный глубокий прикус: когда нужна хирургия челюсти
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> — сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/severe-overbite-jaw-surgery.png"
                alt="Коррекция сильного глубокого прикуса с помощью ортогнатической хирургии"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Большинство глубоких прикусов можно исправить брекетами или элайнерами. Тяжёлый скелетный
                прикус &mdash; когда смещены сами кости челюсти &mdash; требует хирургии челюсти, которую
                называют ортогнатической операцией. Вот как понять, что подходит именно вам.
              </p>

              {/* TL;DR */}
              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Кратко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; Большинство глубоких прикусов исправляют одной ортодонтией &mdash; операция нужна при скелетных случаях.</li>
                  <li>&bull; Сильный (перекрытие 9+&nbsp;мм) или мешающий функции прикус часто требует операции.</li>
                  <li>&bull; Ортогнатическая хирургия перемещает верхнюю челюсть, нижнюю или обе и фиксирует их титановыми пластинами.</li>
                  <li>&bull; Лечение &mdash; это согласованный план на 18&ndash;36 месяцев: брекеты, операция, затем финальная ортодонтия.</li>
                  <li>&bull; Медицинская страховка часто покрывает 60&ndash;90%, если задокументировано нарушение функции.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда операция на челюсти &mdash; правильный выбор?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Большинство глубоких прикусов можно исправить одной ортодонтией. Хирургия челюсти
                (ортогнатическая операция) становится правильным решением, когда:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; прикус имеет <strong>скелетную природу</strong> (смещены кости челюсти, а не только зубы);</li>
                <li>&mdash; прикус <strong>тяжёлый</strong> (как правило, перекрытие 9+&nbsp;мм);</li>
                <li>&mdash; есть функциональные проблемы &mdash; жевание, дыхание, апноэ во сне, боль в ВНЧС;</li>
                <li>&mdash; предыдущее ортодонтическое лечение не помогло или дало рецидив;</li>
                <li>&mdash; заметно изменён профиль лица;</li>
                <li>&mdash; пациент хочет стабильную, постоянную коррекцию.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В таких случаях одна ортодонтия даёт ограниченный или нестабильный результат. Операция же
                устраняет первопричину &mdash; неправильное положение костей.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое ортогнатическая хирургия?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ортогнатическая хирургия перемещает верхнюю челюсть (maxilla), нижнюю (mandibula) или обе.
                Кости хирургически разделяют, ставят в правильное положение и фиксируют небольшими титановыми
                пластинами и винтами. Для коррекции глубокого прикуса чаще всего применяют следующие методики:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Импакция или смещение верхней челюсти назад (остеотомия Le Fort I).</strong>
                  Применяют, когда верхняя челюсть выдвинута слишком вперёд или вниз. Её перемещают в
                  правильное положение относительно нижней части лица.
                </li>
                <li>
                  &mdash; <strong>Выдвижение нижней челюсти (BSSO &mdash; двусторонняя сагиттальная
                  расщепляющая остеотомия).</strong> Применяют, когда нижняя челюсть слишком отодвинута
                  назад. Её выдвигают вперёд, чтобы выровнять прикус и улучшить профиль лица.
                </li>
                <li>
                  &mdash; <strong>Бимаксиллярная операция.</strong> Сочетает перемещение верхней и нижней
                  челюсти при тяжёлых случаях или для максимального эстетического результата.
                </li>
                <li>
                  &mdash; <strong>Гениопластика.</strong> Изменение формы подбородка, которое можно
                  совместить с хирургией челюсти ради гармонии лица.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Насколько &laquo;тяжёлый&raquo; считается тяжёлым?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Категории тяжести глубокого прикуса:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Степень</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Перекрытие</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Типичное лечение</th>
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
                      <td className="border-b border-neutral-200 py-3 px-4">Брекеты, иногда с удалением зубов</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Тяжёлая</td>
                      <td className="border-b border-neutral-200 py-3 px-4">9+&nbsp;мм</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Часто нужна операция</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">Очень глубокий прикус (травма десны)</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Верхние зубы упираются в нижнюю десну</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Как правило, нужна операция</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Одна лишь степень не определяет необходимость операции. Важнее причина &mdash; зубная или
                скелетная.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Признаки того, что операция может вам подойти
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Скорее всего, вы кандидат на операцию, если у вас:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; заметно скошенный назад подбородок или &laquo;слабая&raquo; нижняя челюсть;</li>
                <li>&mdash; выступающая верхняя челюсть, которую не замаскировать ортодонтией;</li>
                <li>&mdash; стойкая боль в ВНЧС, связанная с механикой прикуса;</li>
                <li>&mdash; апноэ во сне со структурными причинами (выдвижение челюстей применяют при тяжёлом апноэ);</li>
                <li>&mdash; трудно сомкнуть губы в покое;</li>
                <li>&mdash; нарушения речи, связанные с положением челюсти;</li>
                <li>&mdash; чрезмерно видны дёсны при улыбке (десневая улыбка скелетного происхождения);</li>
                <li>&mdash; асимметрия лица из-за неправильного положения челюсти;</li>
                <li>&mdash; неудачное прошлое ортодонтическое лечение с рецидивом.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Самую ясную оценку даёт консультация одновременно у ортодонта и у челюстно-лицевого хирурга.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Последовательность лечения
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ортогнатическая хирургия редко бывает &laquo;просто операцией&raquo; &mdash; это согласованный
                план на 1&ndash;3 года из трёх этапов:
              </p>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>Предоперационная ортодонтия (6&ndash;18 месяцев).</strong> Брекеты или элайнеры
                  ставят зубы в то положение, которое понадобится после операции, а не в то, что подошло бы
                  при текущем положении челюстей. Из-за этого прикус временно может выглядеть хуже.
                </li>
                <li>
                  <strong>Операция.</strong> Проводится под общим наркозом, обычно требует ночёвки в
                  стационаре. Операция на одной челюсти занимает 2&ndash;3 часа, на обеих &mdash; 4&ndash;6
                  часов. Кости перемещают и фиксируют жёстко (небольшими пластинами и винтами).
                  Восстановление начинается сразу.
                </li>
                <li>
                  <strong>Послеоперационная ортодонтия (6&ndash;12 месяцев).</strong> Финальное перемещение
                  зубов для оптимизации нового прикуса. Затем долго носят ретейнеры.
                </li>
              </ol>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Общий срок:</strong> обычно 18&ndash;36 месяцев от начала до конца.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Чего ждать от операции
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>День операции:</strong> общий наркоз вводят через капельницу. Операцию выполняют
                полностью изнутри рта (никаких шрамов на лице), кости перемещают и закрепляют скрытыми
                пластинами, обычно требуется ночёвка в стационаре, и ожидается заметный отёк лица.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Первая неделя:</strong> сильный отёк достигает пика на 3&ndash;5-й день, нужна жидкая
                диета, боль контролируют назначенными препаратами, движения челюсти ограничены. Большинство
                пациентов пропускают 1&ndash;2 недели работы или учёбы.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Недели 2&ndash;6:</strong> отёк постепенно спадает, вводят мягкую пищу, пациенты
                возвращаются к лёгкой активности. Онемение губ, щёк или подбородка &mdash; обычное явление,
                которое обычно проходит за несколько месяцев.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Месяцы 2&ndash;6:</strong> кость продолжает заживать, пациенты возвращаются ко всем
                делам, начинают финальную ортодонтическую коррекцию, чувствительность постепенно
                восстанавливается.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>В долгосрочной перспективе:</strong> кость полностью срастается за 6&ndash;12 месяцев,
                пластины и винты, как правило, остаются на месте навсегда, а ретейнеры носят пожизненно.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Риски и реалистичные ожидания
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ортогнатическая хирургия &mdash; это серьёзная операция. К реальным рискам относятся:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Онемение</strong> губ, щёк или подбородка &mdash; частое; обычно проходит за месяцы, но может остаться.</li>
                <li>&mdash; <strong>Инфекция</strong> &mdash; редко при правильной антибиотикопрофилактике.</li>
                <li>&mdash; <strong>Повреждение нерва</strong> &mdash; обычно временное; стойкое бывает редко.</li>
                <li>&mdash; <strong>Изменения прикуса при заживлении</strong> &mdash; иногда требуют послеоперационной ортодонтической коррекции.</li>
                <li>&mdash; <strong>Необходимость повторной операции</strong> &mdash; редко, но возможна.</li>
                <li>&mdash; <strong>Риски общего наркоза</strong> &mdash; стандартные для серьёзных операций.</li>
                <li>&mdash; <strong>Проблемы с пластинами</strong> &mdash; редко; иногда требуют удаления спустя годы.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                У большинства правильно обследованных и подготовленных пациентов результаты отличные &mdash;
                с заметным улучшением функции и эстетики.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Стоимость и страховка
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Общая стоимость обычно складывается так: сама операция стоит $20,000&ndash;$45,000,
                ортодонтия (до и после) добавляет $5,000&ndash;$10,000, а расходы на стационар и наркоз
                включены в счёт или оплачиваются отдельно в зависимости от условий. Весь план, как правило,
                укладывается в диапазон $25,000&ndash;$60,000.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ортогнатическую хирургию часто покрывает <strong>медицинская страховка</strong> (не
                стоматологическая), когда задокументировано нарушение функции (жевание, дыхание, апноэ во
                сне), консервативное лечение не помогло и соблюдены конкретные критерии медицинской
                необходимости. Многим пациентам медицинская страховка покрывает 60&ndash;90% стоимости
                операции, а ортодонтию частично покрывает стоматологическая страховка.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Почему операция лучше маскировки?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                При скелетном глубоком прикусе у операции есть явные преимущества перед ортодонтической
                маскировкой:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; стабильный, предсказуемый результат без рецидивов;</li>
                <li>&mdash; улучшение функции &mdash; жевания, дыхания, сна;</li>
                <li>&mdash; заметное улучшение профиля лица, если это нужно;</li>
                <li>&mdash; лечение сопутствующих состояний, например апноэ во сне;</li>
                <li>&mdash; решение раз и навсегда вместо пожизненного контроля.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Ортодонтическая маскировка при скелетных случаях часто даёт компромиссный результат, со
                временем приводит к рецидиву, усиливает симптомы ВНЧС, не устраняет первопричину и в итоге
                всё равно может потребовать операции. Для подходящего пациента операция &mdash; самое
                эффективное долгосрочное решение.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда операция не нужна
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Операция не подходит для:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; лёгких и умеренных прикусов, которые поддаются ортодонтии;</li>
                <li>&mdash; пациентов с серьёзными противопоказаниями к общему наркозу;</li>
                <li>&mdash; пациентов, не готовых выдержать весь срок лечения;</li>
                <li>&mdash; пациентов, которые при пограничных случаях не пробовали сначала ортодонтию;</li>
                <li>&mdash; тех, кто решается импульсивно &mdash; это серьёзная операция.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Насколько болезненна хирургия челюсти?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Это скорее дискомфорт, чем сильная боль. Большинство пациентов описывают своё состояние
                    как заметный отёк и онемение, а не острую боль. Обезболивающие хорошо снимают дискомфорт.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Лицо изменится до неузнаваемости?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    При тяжёлых скелетных случаях &mdash; да, заметно. Большинство пациентов воспринимают
                    изменения как положительные и соответствующие тому, как они всегда хотели выглядеть.
                    Также часто бывают мягкие или умеренные изменения.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько времени пройдёт, пока я снова буду выглядеть нормально?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Основной отёк сходит за 2&ndash;4 недели. Существенное улучшение заметно к 6&ndash;8
                    неделе. Окончательный результат виден через 6&ndash;12 месяцев.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли есть твёрдую пищу после операции?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Первые 1&ndash;2 недели &mdash; только жидкая пища, затем мягкая до 6-й недели. К
                    полноценному рациону обычно возвращаются к 8&ndash;12 неделе.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Будут ли пластины срабатывать на металлодетекторах в аэропорту?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Современные титановые пластины редко вызывают срабатывание детекторов. Если вас спросят,
                    может пригодиться справка о проведённой операции.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли делать хирургию челюсти в зрелом возрасте?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да. Кандидатами могут быть взрослые любого возраста при достаточном уровне здоровья.
                    Кость хорошо заживает в любом возрасте.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Придётся ли мне носить брекеты всю жизнь после операции?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    В той или иной форме ретейнеры нужны будут пожизненно, но сами брекеты обычно снимают
                    через 6&ndash;12 месяцев после операции.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/conditions-treatments/corrective-jaw-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Корректирующая (ортогнатическая) хирургия челюсти</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/malocclusion" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Нарушения прикуса и выравнивание челюстей</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/27475511/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Выдвижение челюстей при обструктивном апноэ во сне — систематический обзор</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/braces" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA — Брекеты и ортодонтическое лечение: обзор</a></li>
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
                  Сомневаетесь, нужна ли операция при вашем прикусе?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию к нашим челюстно-лицевым хирургам. Мы оценим ваш случай и
                  расскажем обо всех реальных вариантах, включая нехирургические. Консультация бесплатна, а
                  координатор пациентов свяжется с вами в течение 24 часов.
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
