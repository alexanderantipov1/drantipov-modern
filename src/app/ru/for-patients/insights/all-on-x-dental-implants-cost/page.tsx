import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import CalculatorEmbed from "@/components/CalculatorEmbed"

export const metadata: Metadata = {
  title: "Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?",
  description:
    "Что на самом деле означает All-on-X, как стоимость зависит от числа имплантов на челюсть - 4, 6 или 8, что входит в смету и как понять, что нужно именно в вашем случае.",
  alternates: {
    canonical: "/ru/for-patients/insights/all-on-x-dental-implants-cost",
    languages: {
      "ru": "/ru/for-patients/insights/all-on-x-dental-implants-cost",
      "en": "/for-patients/insights/all-on-x-dental-implants-cost",
      "x-default": "/for-patients/insights/all-on-x-dental-implants-cost",
    },
  },
  keywords: [
    "стоимость имплантов All-on-X",
    "стоимость All-on-4",
    "стоимость All-on-6",
    "All-on-8",
    "стоимость имплантации всей челюсти",
    "стоимость дентальных имплантов Сакраменто",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?",
    description: "Как меняется стоимость имплантации всей челюсти при 4, 6 или 8 имплантах - и как правильно сравнивать сметы.",
    images: [
      {
        url: "/images/blog/2026-06-19/all-on-x-cost.png",
        width: 1200,
        height: 630,
        alt: "Стоимость имплантов All-on-X для всей челюсти в зависимости от числа имплантов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?",
    description: "Как меняется стоимость имплантации всей челюсти при 4, 6 или 8 имплантах - и как правильно сравнивать сметы.",
    images: ["/images/blog/2026-06-19/all-on-x-cost.png"],
  }
}

export default function AllOnXCostPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/all-on-x-dental-implants-cost#article","headline":"Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?","description":"Что означает All-on-X, как стоимость зависит от числа имплантов на челюсть - 4, 6 или 8, что должно входить в смету и как понять, что нужно именно в вашем случае.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/all-on-x-dental-implants-cost","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/all-on-x-cost.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/all-on-x-dental-implants-cost"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Достаточно ли All-on-4 прочен для обычной еды?","acceptedAnswer":{"@type":"Answer","text":"Да. All-on-4 выдерживает около 95% естественной силы укуса, и большинство пациентов едят что хотят, включая твёрдую и жёсткую пищу."}},{"@type":"Question","name":"Зачем вообще выбирать All-on-6 вместо All-on-4?","acceptedAnswer":{"@type":"Answer","text":"Лучшее распределение нагрузки на длинных челюстях, дополнительная опора для тех, кто сильно сжимает зубы, отсутствие заднего консольного выноса и запас прочности на случай, если имплант не приживётся. В подходящем случае доплата оправдана."}},{"@type":"Question","name":"Одинакова ли стоимость для верхней и нижней челюсти?","acceptedAnswer":{"@type":"Answer","text":"Верхняя челюсть часто стоит чуть дороже, потому что кость там обычно мягче и ближе к пазухе, что иногда требует синус-лифтинга или скуловых имплантов."}},{"@type":"Question","name":"Что если я сейчас могу позволить только одну челюсть?","acceptedAnswer":{"@type":"Answer","text":"Многие пациенты сначала занимаются более проблемной челюстью, а вторую делают позже. Рассрочка тоже помогает разбить стоимость на посильные ежемесячные платежи."}},{"@type":"Question","name":"Все ли All-on-4 одинаковы?","acceptedAnswer":{"@type":"Answer","text":"Нет. Клиники сильно различаются по бренду имплантов, хирургической технике, материалу протеза и качеству лаборатории. Название одно и то же, но долговечность и результат отличаются существенно."}}]}]` }}
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
                <span>8 мин чтения</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Автор и медицинская проверка - <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> - сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/all-on-x-cost.png"
                alt="Стоимость имплантов All-on-X для всей челюсти в зависимости от числа имплантов"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                &laquo;All-on-X&raquo; &mdash; это общее название для имплантации всей челюсти с использованием
                определённого числа имплантов &mdash; обычно четырёх, шести, а иногда восьми на челюсть &mdash;
                которые поддерживают цельный мост из новых зубов. Цель всегда одна: заменить весь верхний или
                нижний ряд зубов на несъёмные, постоянные зубы. Меняется только число имплантов &mdash; а
                вместе с ним и стоимость. Вот как в этом разобраться.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Коротко</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; All-on-4 встречается чаще всего; All-on-6 добавляет опору; All-on-8 применяется редко.</li>
                  <li>&bull; Стоимость растёт с числом имплантов из-за материалов, времени операции и планирования.</li>
                  <li>&bull; Честная смета включает снимки, удаления, седацию, временный и финальный протез.</li>
                  <li>&bull; Нужное число определяется по 3D-снимку и вашему прикусу &mdash; а не только по цене.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что означает &laquo;All-on-X&raquo;
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                &laquo;X&raquo; &mdash; это просто то число, которое требуется в конкретном случае: <strong>All-on-4</strong>
                {" "}(четыре импланта на челюсть, самый частый вариант), <strong>All-on-6</strong> (шесть имплантов, больше
                опоры) или <strong>All-on-8</strong> (восемь имплантов, для очень длинных челюстей или
                нетипичной кости). Во всех вариантах импланты держат несъёмный протез на всю челюсть.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Краткое сравнение стоимости
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Конфигурация</th>
                      <th className="py-3 pr-4 font-semibold text-neutral-900">За челюсть</th>
                      <th className="py-3 font-semibold text-neutral-900">Обе челюсти</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-4 (акриловый временный + циркониевый финальный)</td><td className="py-3 pr-4">$25,000&ndash;$35,000</td><td className="py-3">$45,000&ndash;$65,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-6 (акриловый временный + циркониевый финальный)</td><td className="py-3 pr-4">$30,000&ndash;$42,000</td><td className="py-3">$55,000&ndash;$80,000</td></tr>
                    <tr><td className="py-3 pr-4">All-on-8</td><td className="py-3 pr-4">$40,000+</td><td className="py-3">$75,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Эти цифры отражают средние по стране для премиальных материалов и конфигураций. Ваша точная
                стоимость определяется после 3D-снимка и осмотра, а затем выдаётся в виде письменного плана с
                разбивкой по пунктам.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Откуда разница в стоимости?
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Больше имплантов - больше материала и времени.</strong> Каждый титановый имплант и каждая установка добавляют и стоимость, и минуты операции.</li>
                <li>&mdash; <strong>Конфигурация абатментов.</strong> Чем больше имплантов, тем чаще нужны угловые или мульти-юнит абатменты &mdash; премиальные компоненты.</li>
                <li>&mdash; <strong>Конструкция протеза.</strong> Мост на шести имплантах распределяет нагрузку иначе, чем на четырёх, и может требовать другого инженерного решения.</li>
                <li>&mdash; <strong>Снимки и планирование.</strong> Больше имплантов - сложнее 3D-планирование и хирургические шаблоны.</li>
                <li>&mdash; <strong>Подготовка кости.</strong> Дополнительные точки могут потребовать костной пластики или другой работы с костью.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что должно входить в цену?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Смета, которую действительно можно сравнивать, должна включать консультацию и 3D-снимки,
                планирование лечения с хирургическим шаблоном, все необходимые удаления, все импланты и
                абатменты, временные зубы в день операции, финальный циркониевый (или премиальный) протез,
                седацию, контрольные визиты в течение первого года и коррекции. Смета без удалений, седации или
                финального протеза несопоставима с той, где всё это учтено.
              </p>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/zirconia-arches.png"
                  alt="Циркониевый протез на всю челюсть - самый частый вариант финальной реставрации"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Сколько имплантов нужно именно вам?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Четырёх имплантов</strong> биомеханически достаточно большинству пациентов с
                достаточным объёмом кости в передней части челюсти, стандартной длиной челюсти и без сильного
                скрежета зубами. Концепция All-on-4 &mdash; два прямых передних импланта и два наклонных задних
                &mdash; подкреплена более чем 20-летними исследованиями.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>Шесть имплантов</strong> имеют смысл при длинных челюстях, сильной нагрузке при укусе,
                бруксизме или когда отказ от заднего консольного выноса повышает долгосрочную предсказуемость.
                <strong> Восемь имплантов</strong> ставят нечасто &mdash; их приберегают для очень длинных
                челюстей, выраженной парафункции или ослабленной кости, где нужен запас прочности.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Нужное число должно следовать из вашего 3D-снимка, прикуса и привычек &mdash; а не из готового
                скрипта продаж. Насторожитесь, если клиника всегда советует больше (или всегда меньше)
                имплантов независимо от случая или называет цену до того, как вас осмотрит.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Материалы тоже влияют на стоимость
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Материал протеза важен не меньше числа имплантов. Акрил PMMA легче и дешевле, но обычно служит
                5&ndash;7 лет; акрил на титановой балке прочнее (7&ndash;10 лет); монолитный цирконий стоит
                дороже сразу, но обычно служит 15&ndash;20+ лет. Поскольку цирконий редко требует ранней
                замены, в пересчёте на весь срок службы он часто обходится дешевле.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как сравнивать сметы
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Убедитесь, что 3D-снимки входят в консультацию.</li>
                <li>&mdash; Получите смету в письменном виде с каждой строкой расходов.</li>
                <li>&mdash; Проверьте, что входит, а что оплачивается отдельно (удаления, костная пластика, седация, финальный протез).</li>
                <li>&mdash; Спросите о бренде имплантов и материале протеза - и временного, и финального.</li>
                <li>&mdash; Спросите о квалификации хирурга &mdash; сертифицированный челюстно-лицевой хирург или зубной врач общей практики.</li>
                <li>&mdash; Уточните условия гарантии и послеоперационное сопровождение. Самое дешёвое редко оказывается самым выгодным.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Достаточно ли All-on-4 прочен для обычной еды?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да. All-on-4 выдерживает около 95% естественной силы укуса, и большинство пациентов едят
                    что хотят, включая твёрдую и жёсткую пищу.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Зачем выбирать All-on-6 вместо All-on-4?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Лучшее распределение нагрузки на длинных челюстях, дополнительная опора для тех, кто сильно
                    сжимает зубы, отсутствие заднего консольного выноса и запас прочности на случай, если
                    имплант не приживётся. В подходящем случае доплата оправдана.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Одинакова ли стоимость для верхней и нижней челюсти?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Верхняя челюсть часто стоит чуть дороже, потому что кость там обычно мягче и ближе к пазухе,
                    что иногда требует синус-лифтинга или скуловых имплантов.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Что если я сейчас могу позволить только одну челюсть?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Многие пациенты сначала занимаются более проблемной челюстью, а вторую делают позже.
                    Рассрочка тоже помогает разбить стоимость на посильные ежемесячные платежи.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS - Процедура установки дентальных имплантов</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M - концепция немедленной нагрузки All-on-4</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH - Национальный институт стоматологических и черепно-лицевых исследований: дентальные импланты</a></li>
              </ul>
            </section>

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
                    Сертифицированный челюстно-лицевой хирург в Roseville, CA, специализируется на дентальных
                    имплантах, восстановлении всей челюсти по технологии All-on-4 и All-on-6 и корректирующей
                    хирургии челюстей. Принимает пациентов из региона Большого Сакраменто.
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Хотите узнать точную стоимость для вашего случая?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию с 3D-снимком, оценкой кости и подробным планом лечения с
                  прозрачной, постатейной стоимостью &mdash; без догадок.
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

      <CalculatorEmbed slug="all-on-468-per-arch" locale="ru" />
    </>
  )
}
