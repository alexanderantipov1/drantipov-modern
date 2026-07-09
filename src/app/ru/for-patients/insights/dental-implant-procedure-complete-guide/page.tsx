import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Имплантация зуба: пошаговое руководство",
  description:
    "Полный пошаговый гид по процедуре дентальной имплантации — от консультации и 3D-снимка до установки импланта, остеоинтеграции и финальной коронки, со сроками и стоимостью.",
  alternates: {
    canonical: "/ru/for-patients/insights/dental-implant-procedure-complete-guide",
    languages: {
      "en": "/for-patients/insights/dental-implant-procedure-complete-guide",
      "ru": "/ru/for-patients/insights/dental-implant-procedure-complete-guide",
      "x-default": "/for-patients/insights/dental-implant-procedure-complete-guide",
    },
  },
  keywords: [
    "процедура имплантации",
    "этапы имплантации",
    "остеоинтеграция",
    "установка импланта",
    "сроки имплантации",
    "стоимость дентального импланта",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Имплантация зуба: пошаговое руководство",
    description: "Что именно происходит при имплантации зуба — от консультации до финальной коронки.",
    images: [
      {
        url: "/images/blog/2026-06-19/dental-implant-procedure.png",
        width: 1200,
        height: 630,
        alt: "Имплантация зуба: пошаговое руководство",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Имплантация зуба: пошаговое руководство",
    description: "Что именно происходит при имплантации зуба — от консультации до финальной коронки.",
    images: ["/images/blog/2026-06-19/dental-implant-procedure.png"],
  }
}

export default function DentalImplantProcedureGuidePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/dental-implant-procedure-complete-guide#article","headline":"Имплантация зуба: полное пошаговое руководство","description":"Что именно происходит при имплантации зуба — от консультации и 3D-снимка до установки импланта, остеоинтеграции, абатмента и финальной коронки, со сроками и стоимостью.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/dental-implant-procedure-complete-guide","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/dental-implant-procedure.png"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/dental-implant-procedure-complete-guide"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Сколько занимает вся процедура имплантации от начала до конца?","acceptedAnswer":{"@type":"Answer","text":"Классическая имплантация занимает 4–9 месяцев от консультации до финальной коронки. При имплантации «за один день» временный зуб ставится за один визит, а финальная коронка — через 3–6 месяцев."}},{"@type":"Question","name":"Насколько больно при имплантации?","acceptedAnswer":{"@type":"Answer","text":"Большинство пациентов описывают дискомфорт в первые 1–2 дня как сравнимый с удалением зуба — снимается ибупрофеном. Сильная боль — редкость."}},{"@type":"Question","name":"Можно ли поставить все импланты за один день?","acceptedAnswer":{"@type":"Answer","text":"Да. При полной челюсти, например All-on-4, все импланты ставятся за один визит, часто с временным протезом в тот же день."}},{"@type":"Question","name":"Какова успешность дентальной имплантации?","acceptedAnswer":{"@type":"Answer","text":"Современные импланты дают 95–98% успеха через 10 лет у здоровых пациентов при правильном послеоперационном уходе."}},{"@type":"Question","name":"Импланты подходят всем?","acceptedAnswer":{"@type":"Answer","text":"Большинству взрослых — да. Пациентам с неконтролируемым диабетом, активным пародонтитом, заядлым курильщикам или при недостаточной плотности кости может потребоваться подготовка или альтернативный вариант."}},{"@type":"Question","name":"Импланты выглядят естественно?","acceptedAnswer":{"@type":"Answer","text":"Современные коронки практически неотличимы от собственных зубов. Сам имплант скрыт под десной."}}]}]` }}
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
                <span>10 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Имплантация зуба: полное пошаговое руководство
            </h1>

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/dental-implant-procedure.png"
                alt="Пошаговая процедура имплантации зуба — от консультации до финальной коронки"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Имплантация зуба — это замещение отсутствующего зуба титановым или циркониевым штифтом,
                который срастается с челюстной костью и держит постоянную коронку, мост или полную челюсть.
                Это современный стандарт замещения зубов — выглядит, ощущается и работает как ваш родной зуб.
                Большинство пациентов отмечают, что процедура оказалась проще, чем они ожидали. Ниже — что
                именно происходит, шаг за шагом.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Полный таймлайн в одном взгляде
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Общее время для классической имплантации &mdash; обычно 4&ndash;9 месяцев. По протоколу
                имплантации «за один день» пациент уходит из клиники с временным зубом в день установки.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-neutral-200 py-3 px-4">Этап</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Что происходит</th>
                      <th className="border-b border-neutral-200 py-3 px-4">Время</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">1. Консультация</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Осмотр, 3D-снимок, план лечения</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 визит (1 час)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">2. Подготовка</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Удаления или костная пластика по необходимости</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 визит + заживление</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">3. Установка импланта</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Хирургическая установка титанового штифта</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 визит (1&ndash;2 часа)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">4. Остеоинтеграция</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Кость срастается с имплантом</td>
                      <td className="border-b border-neutral-200 py-3 px-4">3&ndash;6 месяцев</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">5. Установка абатмента</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Установка соединительного элемента</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Часто совмещается с установкой</td>
                    </tr>
                    <tr>
                      <td className="border-b border-neutral-200 py-3 px-4">6. Постановка коронки</td>
                      <td className="border-b border-neutral-200 py-3 px-4">Установка постоянного зуба</td>
                      <td className="border-b border-neutral-200 py-3 px-4">1 визит (30&ndash;60 мин)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 1: Консультация
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                До любой операции — полноценное обследование:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Сбор медицинского и стоматологического анамнеза.</li>
                <li>&mdash; Клинический осмотр зубов, дёсен, кости и прикуса.</li>
                <li>&mdash; 3D-снимок (конусно-лучевая КТ) для картирования кости и расположения нервов.</li>
                <li>&mdash; Цифровые слепки или оттиски.</li>
                <li>&mdash; Фотопротокол улыбки.</li>
                <li>&mdash; Презентация плана лечения с понятной стоимостью.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Мы обсуждаем показания, варианты (одиночный имплант, мост, полная челюсть) и сроки. Если есть
                вопросы по стоимости, рассрочке или восстановлению &mdash; отвечаем на них прямо здесь. Никаких
                обязательств &mdash; многие пациенты используют консультацию, чтобы сравнить варианты.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 2: Подготовка (если нужна)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Подготовка нужна не каждому. Иногда — нужна.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Удаление зуба.</strong> Если проблемный зуб ещё на месте, его удаляют первым.
                  Часто имплант ставится в тот же день (немедленная установка) &mdash; закрывает лунку и
                  снижает риск сухой лунки.
                </li>
                <li>
                  &mdash; <strong>Костная пластика.</strong> Если зуб отсутствует давно или есть потеря
                  костной ткани, может понадобиться костная пластика. Современные методики заживают
                  3&ndash;4 месяца и резко расширяют круг пациентов, которым доступна имплантация.
                </li>
                <li>
                  &mdash; <strong>Синус-лифтинг.</strong> Для верхних боковых зубов, где гайморова пазуха
                  «осела» в зону кости, синус-лифтинг создаёт место для импланта.
                </li>
                <li>
                  &mdash; <strong>Лечение пародонтита.</strong> Активное воспаление дёсен нужно взять под
                  контроль до имплантации. Наша команда делает это в клинике.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 3: Хирургическая установка импланта
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Это тот самый день, о котором чаще всего спрашивают. Варианты анестезии:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Только местная анестезия</strong> (вы в сознании, зона обезболена) &mdash;
                  подходит для одиночных имплантов у спокойных пациентов.
                </li>
                <li>
                  &mdash; <strong>Внутривенная седация</strong> &mdash; глубокое расслабление, сохранение
                  сознания, без воспоминаний о процедуре.
                </li>
                <li>
                  &mdash; <strong>Общая анестезия</strong> &mdash; полный сон, для сложных случаев на полную челюсть.
                </li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Сама операция: десна раскрывается, чтобы обнажить кость (или делается мини-прокол через
                навигационный шаблон); пошагово создаётся точное ложе для импланта, часто с компьютерной
                навигацией; устанавливается титановый имплант; десна ушивается рассасывающимися швами;
                ставится формирователь десны или временный зуб. Для одиночного импланта обычно
                45&ndash;90 минут. Полная челюсть All-on-4 &mdash; 2&ndash;4 часа на дугу.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Что вы чувствуете: под седацией — ничего, в сознании — давление, но не боль. Сразу после
                операции онемение постепенно сменяется управляемым дискомфортом. День 1&ndash;2 &mdash;
                ощущения, как после удаления зуба, с быстрым улучшением с 3-го дня. Большинство пациентов
                возвращаются к офисной работе через 1&ndash;2 дня.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 4: Остеоинтеграция
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Это и есть магия дентальной имплантации. За 3&ndash;6 месяцев челюстная кость биологически
                срастается с титановым имплантом &mdash; процесс называется остеоинтеграцией. Имплант становится
                частью челюсти и даёт ту же стабильность, что и корень собственного зуба. На этом этапе
                место зуба занимает временная конструкция, большинство пациентов чувствуют себя нормально
                уже через 1&ndash;2 недели после операции, гигиена и плановые осмотры продолжаются как
                обычно, на 3-м месяце мы можем сделать контрольный снимок. Этот этап и делает импланты
                «на десятилетия» &mdash; без полноценной остеоинтеграции у импланта не будет основы под
                жевательную нагрузку.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 5: Установка абатмента
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Абатмент &mdash; небольшая соединительная деталь между имплантом (в кости) и коронкой
                (видимым зубом). В зависимости от случая, его ставят либо одновременно с самим имплантом
                (одноэтапный протокол), либо отдельным коротким визитом после остеоинтеграции (двухэтапный).
                Если нужен отдельный визит &mdash; 15&ndash;30 минут под местной анестезией, заживление
                около 1&ndash;2 недель.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Шаг 6: Постановка коронки (или финального протеза)
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Видимый зуб делается на заказ в нашей лаборатории под форму, цвет и текстуру ваших родных
                зубов.
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Одиночная коронка на имплант.</strong> Делается цифровой скан или слепок с
                  абатмента. Лаборатория изготавливает коронку за 1&ndash;2 недели. На финальном визите
                  коронка фиксируется &mdash; винтовой фиксацией (снимается при обслуживании) или цементной.
                </li>
                <li>
                  &mdash; <strong>Мост на имплантах.</strong> Для нескольких отсутствующих зубов изготавливают
                  мост на 2&ndash;4 импланта.
                </li>
                <li>
                  &mdash; <strong>Полная челюсть (All-on-4 / All-on-X).</strong> Полная дуга &mdash; обычно
                  цирконий или акрил &mdash; фиксируется на 4&ndash;6 имплантах. Многим пациентам в день
                  установки даётся временный протез, а финальная циркониевая дуга &mdash; через несколько
                  месяцев.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что после операции
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>В тот же день:</strong> мягкая еда, не трогайте операционную зону, принимайте
                выписанные обезболивающие, холодный компресс при отёке, отдых с приподнятой головой.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Первая неделя:</strong> мягкая диета, аккуратные полоскания солёной водой начиная
                со 2-го дня, никакого курения и трубочек, сон с приподнятой головой, антибиотики по
                назначению.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Первый месяц:</strong> постепенный возврат к обычной еде, избегать твёрдых и липких
                продуктов в зоне импланта, поддерживать тщательную гигиену, приходить на контрольные визиты.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>В долгой перспективе:</strong> чистите щёткой и флоссом, как родные зубы, используйте
                ирригатор вокруг имплантов, профессиональная чистка каждые 3&ndash;6 месяцев. Импланты могут
                служить 20+ лет при правильном уходе.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Боль &mdash; что реально
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Большинство пациентов отмечают: во время операции боли нет (анестезия работает),
                дискомфорт в 1&ndash;2-й день сопоставим с удалением зуба и снимается ибупрофеном, с 3-го
                дня лёгкая болезненность не требует препаратов, к 2-й неделе ощущения практически нормальные.
                Пациенты стабильно удивляются, насколько комфортно проходит весь процесс.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сколько служат дентальные импланты?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                При правильном уходе импланты служат 20+ лет &mdash; часто всю жизнь. Исследования
                показывают 95&ndash;98% успеха через 10 лет у правильно установленных имплантов у
                здоровых пациентов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что может пойти не так?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Имплантация &mdash; очень предсказуемая процедура, но безрисковых операций не бывает.
                Возможные осложнения:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Имплант не интегрируется (~2&ndash;5% случаев).</li>
                <li>&mdash; Инфекция (редко при правильном уходе).</li>
                <li>&mdash; Травма нерва (редко при 3D-навигации).</li>
                <li>&mdash; Осложнения со стороны пазухи (редко при адекватном планировании).</li>
                <li>&mdash; Периимплантит позже (предотвращается хорошей гигиеной).</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Выбор опытного хирурга и соблюдение послеоперационных рекомендаций существенно снижают
                эти риски.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Стоимость имплантации
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Цена зависит от сложности случая:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Одиночный имплант + коронка:</strong> обычно $4 000&ndash;$6 000.</li>
                <li>&mdash; <strong>Мост на имплантах</strong> (3 зуба на 2 имплантах): $7 000&ndash;$12 000.</li>
                <li>&mdash; <strong>Полная челюсть (All-on-4):</strong> от $16 999 за дугу.</li>
                <li>&mdash; <strong>Костная пластика:</strong> $300&ndash;$3 000 в зависимости от объёма.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Большинство пациентов комбинируют страховку, HSA/FSA и рассрочку. Мы предлагаем собственные
                планы платежей от $60/мес за одиночный имплант и от $250/мес за полную реставрацию.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько занимает вся процедура имплантации от начала до конца?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Классическая имплантация занимает 4&ndash;9 месяцев от консультации до финальной коронки.
                    При имплантации «за один день» временный зуб ставится за один визит, а финальная коронка
                    &mdash; через 3&ndash;6 месяцев.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Насколько больно при имплантации?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Большинство описывают дискомфорт в 1&ndash;2-й день как сравнимый с удалением зуба
                    &mdash; снимается ибупрофеном. Сильная боль &mdash; редкость.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли поставить все импланты за один день?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да &mdash; при полной челюсти, например All-on-4, все импланты ставятся за один визит,
                    часто с временным протезом в тот же день.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Какова успешность имплантации?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Современные импланты дают 95&ndash;98% успеха через 10 лет у здоровых пациентов при
                    правильном послеоперационном уходе.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Импланты подходят всем?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Большинству взрослых &mdash; да. Пациентам с неконтролируемым диабетом, активным
                    пародонтитом, заядлым курильщикам или при недостаточной плотности кости может
                    потребоваться подготовка или альтернативный вариант.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Импланты выглядят естественно?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Современные коронки практически неотличимы от собственных зубов. Сам имплант скрыт под
                    десной.
                  </p>
                </div>
              </div>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Процедура имплантации зубов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA MouthHealthy — Импланты, обзор</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/gum-disease" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIDCR — Заболевания дёсен (пародонтит)</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/29086438/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Howe MS et al. — Долгосрочная (10-летняя) выживаемость дентальных имплантов: систематический обзор</a></li>
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
                  Готовы начать путь к имплантам?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию, чтобы узнать, подходят ли вам дентальные импланты. Большинство
                  консультаций включает 3D-снимок и чёткий план лечения, а координатор пациента расскажет, что
                  взять с собой.
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
