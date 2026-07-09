import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Импланты за один день — миф или реальность?",
  description:
    "Импланты за один день и немедленная нагрузка — кому подходит, что вы получаете в день операции, чем временный протез отличается от постоянного и каковы реальные риски.",
  alternates: {
    canonical: "/ru/for-patients/insights/same-day-implants",
    languages: {
      "en": "/for-patients/insights/same-day-implants",
      "ru": "/ru/for-patients/insights/same-day-implants",
      "x-default": "/for-patients/insights/same-day-implants",
    },
  },
  keywords: [
    "импланты за один день",
    "немедленная нагрузка имплантов",
    "зубы за один день",
    "All-on-4 за день",
    "All-on-6 немедленная нагрузка",
    "зубы за день Розвилл",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Импланты за один день — миф или реальность?",
    description: "Импланты с немедленной нагрузкой простыми словами — кому подходит, что вы получаете в день операции и каковы реальные риски.",
    images: [
      {
        url: "/images/blog/2026-04-28/same-day-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Импланты за один день — миф или реальность?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Импланты за один день — миф или реальность?",
    description: "Импланты с немедленной нагрузкой простыми словами — кому подходит, что вы получаете в день операции и каковы реальные риски.",
    images: ["/images/blog/2026-04-28/same-day-implants.jpg"],
  }
}

export default function SameDayImplantsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/same-day-implants#article","headline":"Импланты за один день (немедленная нагрузка) — миф или реальность?","description":"Импланты с немедленной нагрузкой — кому подходит, что вы получаете в день операции, чем временный протез отличается от постоянного, и честный разговор о рисках.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/same-day-implants","datePublished":"2026-04-28","dateModified":"2026-04-28","image":["https://www.drantipov.com/images/blog/2026-04-28/same-day-implants.jpg"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/same-day-implants"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Это действительно зубы за один день?","acceptedAnswer":{"@type":"Answer","text":"Да — с оговоркой. В день операции вы уходите из клиники с фиксированными временными зубами на имплантах. Постоянный протез изготавливают через 4–6 месяцев, после полной остеоинтеграции и стабилизации мягких тканей."}},{"@type":"Question","name":"Кому немедленная нагрузка не подходит?","acceptedAnswer":{"@type":"Answer","text":"Если первичная стабильность ниже примерно 35 Н·см — рисковать не стоит. Также: пациенты с тяжёлым остеопорозом, неконтролируемым диабетом, активным курением более 10 сигарет в день или значительной потерей кости в зоне имплантов."}},{"@type":"Question","name":"Чем временный протез отличается от постоянного?","acceptedAnswer":{"@type":"Answer","text":"Временный обычно из акрила или композита — легче, менее прочный и не идеально соответствует финальному дизайну улыбки. Постоянный — это цирконий или PMMA на титановой основе, рассчитанный на годы службы."}},{"@type":"Question","name":"Можно ли есть в день операции?","acceptedAnswer":{"@type":"Answer","text":"В день операции — только мягкие напитки, никакой жевательной нагрузки на импланты. Первые 2–4 недели — мягкая диета (пюре, рыба, яйца, йогурт). Более плотную пищу возвращают постепенно по мере заживления."}},{"@type":"Question","name":"Сколько длится сама операция?","acceptedAnswer":{"@type":"Answer","text":"Удаления + установка имплантов + временный протез — обычно 4–6 часов в зависимости от случая. Под внутривенной седацией у вас не останется воспоминаний о процедуре."}}]},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная","item":"https://www.drantipov.com/ru"},{"@type":"ListItem","position":2,"name":"Пациентам","item":"https://www.drantipov.com/ru/for-patients"},{"@type":"ListItem","position":3,"name":"Полезное","item":"https://www.drantipov.com/ru/for-patients/insights"},{"@type":"ListItem","position":4,"name":"Импланты за один день (немедленная нагрузка) — миф или реальность?","item":"https://www.drantipov.com/ru/for-patients/insights/same-day-implants"}]}]` }}
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
                <time>28 апреля 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Импланты за один день (немедленная нагрузка) &mdash; миф или реальность?
            </h1>



            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-04-28/same-day-implants.jpg"
                alt="Импланты за один день — результат All-on-4"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                «Импланты за один день» и «зубы за день» &mdash; рекламные обещания, с которыми сталкивается
                каждый, кто начинает изучать тему имплантации. Что из этого реальность, а что &mdash;
                маркетинг? Вот что вы на самом деле получаете в день операции и почему окончательный
                результат приходит через несколько месяцев, а не за шесть часов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что на самом деле значит «немедленная нагрузка»
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Классический протокол имплантации &mdash; «двухэтапный»: имплант устанавливают, дают ему
                зажить и срастись с костью (остеоинтеграция) в течение 3&ndash;6 месяцев, и только потом
                фиксируют коронку или протез. Всё это время пациент носит съёмный временный протез или
                ходит без зуба в зоне импланта.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Немедленная нагрузка</strong> &mdash; это протокол, при котором временный протез
                фиксируется на имплантах в тот же день, когда их устанавливают. Имплант сразу начинает
                нести функциональную нагрузку. Это возможно благодаря двум факторам: высокой первичной
                стабильности импланта (за счёт дизайна резьбы и угла установки) и распределению нагрузки
                между несколькими имплантами, объединёнными в один жёсткий протез.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Когда это работает
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Немедленная нагрузка &mdash; стандарт для протоколов <strong>All-on-4</strong> и
                {" "}<strong>All-on-6</strong>: 4 или 6 имплантов в одной челюсти держат фиксированный
                временный протез уже в первый день. Распределённая нагрузка между несколькими опорами
                компенсирует то, что каждый отдельный имплант ещё не интегрировался полностью.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Для <strong>одиночного импланта</strong> немедленная нагрузка возможна реже &mdash; нужна
                идеальная анатомия и плотная кость. Чаще ставят нефункциональную «декоративную» временную
                коронку без жевательной нагрузки на первые несколько недель.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что на самом деле включает «один день»
              </h2>
              <ol className="space-y-5 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>
                  <strong>До дня операции:</strong> 3D-КТ, очный осмотр, виртуальное планирование,
                  изготовление навигационного шаблона и временного протеза в лаборатории.
                </li>
                <li>
                  <strong>День операции &mdash; утро:</strong> анестезия (внутривенная седация), удаление
                  оставшихся проблемных зубов, установка имплантов по навигационному шаблону.
                </li>
                <li>
                  <strong>День операции &mdash; после установки:</strong> хирург проверяет первичную
                  стабильность каждого импланта. Если все показатели &ge;35&nbsp;Н·см &mdash; фиксируется
                  временный протез. Если у кого-то ниже &mdash; выбирают отсроченную нагрузку (редко, но
                  бывает).
                </li>
                <li>
                  <strong>Вечер того же дня:</strong> вы едете домой с зубами на месте. Можно говорить и
                  пить. Жевать начинают на следующий день, когда отойдёт анестезия.
                </li>
              </ol>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что будет дальше
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Первые 2 недели:</strong> мягкая пища, постепенный спад отёка, контрольный
                  визит на 7-й день.
                </li>
                <li>
                  &mdash; <strong>2&ndash;8 недель:</strong> постепенное возвращение к более плотной еде.
                  Тщательная гигиена; ирригатор обязателен.
                </li>
                <li>
                  &mdash; <strong>3&ndash;6 месяцев:</strong> полная остеоинтеграция. На этом этапе снимают
                  финальные слепки и изготавливают постоянный протез.
                </li>
                <li>
                  &mdash; <strong>Постоянный протез</strong> обычно из циркония или PMMA-композита на
                  титановом каркасе, рассчитан на 15&ndash;25 лет при правильном уходе.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что вам скажет честный хирург
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Немедленная нагрузка &mdash; безопасный протокол с десятилетиями доказательной базы, когда
                показания подходят. Но честный хирург скажет так:
              </p>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>
                  &mdash; <strong>Временный протез действительно временный.</strong> Он хорошо выглядит и
                  нормально функционирует, но это не финальная эстетика и он менее прочный, чем постоянный.
                </li>
                <li>
                  &mdash; <strong>Не каждый случай подходит.</strong> Если анатомия не позволяет, отсроченная
                  нагрузка &mdash; более безопасный путь, чем риск потерять имплант.
                </li>
                <li>
                  &mdash; <strong>Курение существенно ухудшает прогноз.</strong> Отказ от сигарет или
                  значительное сокращение за 4 недели до и 8 недель после операции настоятельно
                  рекомендуется.
                </li>
                <li>
                  &mdash; <strong>Гигиена критична.</strong> Импланты не разрушаются кариесом, но окружающие
                  мягкие ткани могут воспаляться (мукозит, периимплантит). Профессиональная чистка каждые
                  4&ndash;6 месяцев &mdash; обязательна.
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Это действительно «зубы за один день»?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да &mdash; с оговоркой. В день операции вы уходите из клиники с фиксированными
                    временными зубами на имплантах. Постоянный протез изготавливают через 4&ndash;6 месяцев,
                    после полной остеоинтеграции и стабилизации мягких тканей. Временный выглядит и
                    функционирует достаточно хорошо для обычной жизни и работы, но это не финальная
                    реставрация.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Кому немедленная нагрузка <em>не</em> подходит?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Если первичная стабильность ниже примерно 35&nbsp;Н·см &mdash; рисковать не стоит. Также:
                    пациенты с тяжёлым остеопорозом, неконтролируемым диабетом, активным курением более 10
                    сигарет в день или значительной потерей кости в зоне имплантов. Решение принимается
                    после КТ и клинического осмотра.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Чем временный протез отличается от постоянного?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Временный обычно из акрила или композита &mdash; легче, менее прочный и не идеально
                    соответствует финальному дизайну улыбки. Постоянный &mdash; это цирконий или PMMA на
                    титановой основе, рассчитанный на годы службы и индивидуально изготовленный в
                    зуботехнической лаборатории под конкретного пациента.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Можно ли есть в день операции?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    В день операции &mdash; только мягкие напитки, никакой жевательной нагрузки на импланты.
                    Первые 2&ndash;4 недели &mdash; мягкая диета (пюре, рыба, яйца, йогурт). Более плотную
                    еду возвращают постепенно по мере заживления. Жёсткое мясо, орехи и твёрдые корочки
                    ждут до установки постоянного протеза.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Сколько длится сама операция?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Удаления + установка имплантов + временный протез &mdash; обычно 4&ndash;6 часов в
                    зависимости от случая. Под внутривенной седацией у вас не останется воспоминаний о
                    процедуре. После 30&ndash;60 минут наблюдения вы едете домой (сопровождающий обязателен).
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
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/23543541/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Esposito M, Grusovin MG et al. — Cochrane Review: вмешательства для замещения отсутствующих зубов — различные сроки нагрузки имплантов</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M — Концепция All-on-4 с немедленной функцией на имплантатах системы Brånemark</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — Национальный институт стоматологических и черепно-лицевых исследований: дентальные импланты</a></li>
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
                    полной реставрации All-on-4 и All-on-6, протоколах имплантации за один день и
                    корригирующей челюстной хирургии. Принимает пациентов со всего севера Калифорнии.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Подходят ли вам импланты за один день?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Бесплатная 3D-КТ и очный осмотр &mdash; единственный способ точно понять, подходит ли вам
                  немедленная нагрузка, или отсроченный протокол даст более надёжный результат на годы вперёд.
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

      <RelatedArticles currentSlug="same-day-implants" />
    </>
  )
}
