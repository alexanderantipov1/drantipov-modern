import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Что такое циркониевые зубные дуги? Плюсы, цена и срок службы",
  description:
    "Циркониевые зубные дуги — золотой стандарт для имплантации всей челюсти. Как их изготавливают, почему они служат десятилетиями, сколько стоят и чем лучше акрила.",
  alternates: {
    canonical: "/ru/for-patients/insights/zirconia-arches",
    languages: {
      "ru": "/ru/for-patients/insights/zirconia-arches",
      "en": "/for-patients/insights/zirconia-arches",
      "x-default": "/for-patients/insights/zirconia-arches",
    },
  },
  keywords: [
    "циркониевые зубные дуги",
    "циркониевые импланты",
    "диоксид циркония на всю челюсть",
    "цирконий или акрил",
    "All-on-4 цирконий",
    "цирконий all on 4",
    "циркониевые импланты all-on-4",
    "импланты на всю челюсть",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Что такое циркониевые зубные дуги? Плюсы, цена и срок службы",
    description: "Почему диоксид циркония — золотой стандарт для имплантации всей челюсти: прочность, эстетика, срок службы и цена.",
    images: [
      {
        url: "/images/blog/2026-06-19/zirconia-arches.png",
        width: 1200,
        height: 630,
        alt: "Отполированный циркониевый протез на всю зубную дугу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Что такое циркониевые зубные дуги? Плюсы, цена и срок службы",
    description: "Почему диоксид циркония — золотой стандарт для имплантации всей челюсти: прочность, эстетика, срок службы и цена.",
    images: ["/images/blog/2026-06-19/zirconia-arches.png"],
  }
}

export default function ZirconiaArchesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/zirconia-arches#article","headline":"Что такое циркониевые зубные дуги? Плюсы, цена и срок службы","description":"Циркониевые зубные дуги — золотой стандарт для имплантации всей челюсти. Как их изготавливают, почему они служат десятилетиями, сколько стоят и чем лучше акрила.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/zirconia-arches","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/zirconia-arches.png"],"author":{"@type":"Person","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Dr. Alexander V. Antipov, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/zirconia-arches"}},{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"ru","mainEntity":[{"@type":"Question","name":"Цирконий прочнее титана?","acceptedAnswer":{"@type":"Answer","text":"Диоксид циркония твёрже и устойчивее к износу и коррозии, а титан более упругий. У них разные роли: титановые импланты служат опорой в кости, а циркониевая дуга — это видимый ряд зубов."}},{"@type":"Question","name":"Могут ли циркониевые дуги сломаться?","acceptedAnswer":{"@type":"Answer","text":"Медицинский диоксид циркония крайне устойчив к переломам. Серьёзные поломки редки и обычно связаны с травмой или явным неправильным обращением — например, если грызть лёд или вскрывать зубами упаковки."}},{"@type":"Question","name":"Пожелтеет ли моя циркониевая дуга?","acceptedAnswer":{"@type":"Answer","text":"Нет. Диоксид циркония очень устойчив к окрашиванию. Поверхностный налёт от кофе или вина легко стирается, а сам материал не меняет цвет."}},{"@type":"Question","name":"Сколько служат циркониевые дуги?","acceptedAnswer":{"@type":"Answer","text":"Правильно установленные циркониевые дуги обычно служат 15–20 лет и дольше, а многим пациентам замена не требуется вовсе."}},{"@type":"Question","name":"Безопасен ли цирконий?","acceptedAnswer":{"@type":"Answer","text":"Да. Диоксид циркония биосовместим и инертен, широко применяется в медицинских имплантах, аллергии на него неизвестны."}}]}]` }}
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
              Что такое циркониевые зубные дуги? Плюсы, цена и срок службы
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Автор и медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> — сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/zirconia-arches.png"
                alt="Отполированный циркониевый протез на всю зубную дугу"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Если вы присматривались к All-on-4 или имплантации всей челюсти, то финальными зубами чаще всего
                становится <strong>циркониевая дуга</strong>. Это полный верхний или нижний ряд зубов, выточенный
                из единого блока медицинской керамики и закреплённый на ваших имплантах. Сегодня это золотой
                стандарт несъёмного протезирования на всю челюсть — он пришёл на смену гибридам из акрила и
                титана, популярным десятилетие назад.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что такое циркониевая дуга?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Циркониевая дуга — это протез на всю челюсть, заменяющий все верхние или нижние зубы, выточенный
                из единого цельного блока медицинского диоксида циркония. Этот материал необычайно прочен и
                биосовместим — тот же диоксид циркония используют в эндопротезах тазобедренного сустава и в
                аэрокосмической отрасли. Дуга крепится к вашим имплантам и служит постоянным рядом зубов.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Чем цирконий обходит альтернативы
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                В традиционном протезе на всю челюсть акриловые зубы (PMMA) фиксируются на титановом каркасе.
                Диоксид циркония превосходит его почти по всем значимым показателям:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Свойство</th>
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Акрил (PMMA)</th>
                      <th className="py-3 font-semibold text-neutral-900">Цирконий</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Прочность</td><td className="py-3 pr-4">Может скалываться и трескаться</td><td className="py-3">Очень высокая, устойчив к переломам</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Устойчивость к пятнам</td><td className="py-3 pr-4">Со временем окрашивается</td><td className="py-3">Высокая устойчивость к пятнам</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Износ</td><td className="py-3 pr-4">Зубы со временем стираются</td><td className="py-3">Держит форму десятилетиями</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Срок службы</td><td className="py-3 pr-4">5&ndash;7 лет</td><td className="py-3">15&ndash;20 лет и больше</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Эстетика</td><td className="py-3 pr-4">Хороша поначалу, тускнеет</td><td className="py-3">Естественный, стойкий вид</td></tr>
                    <tr><td className="py-3 pr-4">Цена</td><td className="py-3 pr-4">Дешевле при установке</td><td className="py-3">Дороже при установке, дешевле за весь срок</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Для большинства пациентов акрил в итоге обходится дороже из-за повторных замен. По сравнению с
                металлокерамикой монолитный диоксид циркония к тому же не имеет границы «керамика — металл», где
                обычно и возникают сколы.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как изготавливают циркониевые дуги
              </h2>
              <ol className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-decimal pl-6">
                <li>Цифровые слепки фиксируют форму рта, положение имплантов и прикус.</li>
                <li>Программа планирования проектирует дугу в 3D.</li>
                <li>5-осевой фрезерный станок вытачивает всю дугу из цельного блока диоксида циркония.</li>
                <li>Высокотемпературное спекание доводит керамику до окончательной твёрдости и цвета.</li>
                <li>Окрашивание и характеризация придают естественную полупрозрачность.</li>
                <li>Финальная полировка, примерка и подгонка предшествуют установке на ваши импланты.</li>
              </ol>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/full-mouth-dental-implants.png"
                  alt="Естественный результат восстановления всей зубной дуги циркониевым протезом"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Преимущества циркониевых дуг
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Служат десятилетиями:</strong> обычно 15&ndash;20 лет и дольше; многим пациентам замена не нужна вовсе.</li>
                <li>&mdash; <strong>Естественный вид:</strong> послойная окраска имитирует полупрозрачность настоящих зубов.</li>
                <li>&mdash; <strong>Можно есть что угодно:</strong> достаточно прочны для яблок, орехов и твёрдого хлеба, которые портят акрил.</li>
                <li>&mdash; <strong>Не окрашиваются и не дают запаха:</strong> плотная гладкая поверхность не боится кофе и вина.</li>
                <li>&mdash; <strong>Устойчивы к бактериям и биосовместимы:</strong> поддерживают здоровье дёсен на годы вперёд.</li>
                <li>&mdash; <strong>Постоянные и несъёмные:</strong> чистятся на месте, без клея, без щелчков, без снятия на ночь.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что стоит учесть
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; Дороже акрила при установке (хотя за весь срок службы обычно выходит дешевле).</li>
                <li>&mdash; Чуть тяжелее; большинство пациентов привыкают за неделю.</li>
                <li>&mdash; Подгонку делают на уровне имплантов; серьёзные изменения могут потребовать перефрезеровки.</li>
                <li>&mdash; Цирконий не прощает неточностей установки — поэтому так важны навигационная установка и опыт хирурга.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Стоимость циркониевых дуг
              </h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="py-3 pr-4 font-semibold text-neutral-900">Вариант</th>
                      <th className="py-3 font-semibold text-neutral-900">Ориентировочная цена</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">Одна циркониевая дуга на уже установленные импланты</td><td className="py-3">$14,000&ndash;$22,000</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-3 pr-4">All-on-4 (импланты + циркониевая дуга)</td><td className="py-3">$25,000&ndash;$35,000 за челюсть</td></tr>
                    <tr><td className="py-3 pr-4">Обе челюсти (вся полость рта)</td><td className="py-3">$40,000&ndash;$70,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Цена зависит от числа имплантов, необходимости удалений или костной пластики, одной или обеих
                челюстей и класса материала. Варианты рассрочки позволяют разбить стоимость на посильные
                ежемесячные платежи.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Срок службы и уход
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Импланты рассчитаны на 20+ лет (нередко на всю жизнь), а циркониевая дуга — на 15&ndash;20 лет и
                дольше. Ежедневный уход прост: чистите зубы дважды в день мягкой щёткой, используйте ирригатор
                под дугой и носите ночную каппу, если скрипите зубами. Профессиональная гигиена каждые
                3&ndash;6 месяцев — нередко со снятием дуги для тщательной чистки на уровне имплантов — помогает
                сохранить всё здоровым.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                «Цирконий за один день» — честная версия
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Некоторые клиники рекламируют циркониевые зубы за один день. Как обстоит на самом деле: в день
                операции ставят качественную временную акриловую дугу; через 3&ndash;6 месяцев, после полного
                заживления, изготавливают и фиксируют финальную циркониевую дугу. Такой поэтапный подход — это
                стандарт качественной помощи: окончательное положение требует зажившей слизистой, импланты
                должны прижиться до полной нагрузки, а цирконий вытачивают по финальным слепкам. Из операции вы
                всё равно уходите с зубами, которые отлично выглядят, — циркониевая дуга просто заменит
                временную позже.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Цирконий прочнее титана?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Диоксид циркония твёрже и устойчивее к износу и коррозии, а титан более упругий. У них разные
                    роли — титановые импланты служат опорой в кости, а циркониевая дуга — это видимый ряд зубов.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Могут ли циркониевые дуги сломаться?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Медицинский диоксид циркония крайне устойчив к переломам. Серьёзные поломки редки и обычно
                    связаны с травмой или неправильным обращением — например, если грызть лёд или вскрывать
                    зубами упаковки.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Пожелтеет ли моя циркониевая дуга?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Нет. Диоксид циркония очень устойчив к окрашиванию. Поверхностный налёт легко стирается, а
                    сам материал не меняет цвет — правда, это означает и то, что отбелить его нельзя.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Безопасен ли цирконий?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Да. Он биосовместим и инертен, широко применяется в медицинских имплантах, аллергии на него
                    неизвестны.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Процедура установки дентальных имплантов</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — Национальный институт стоматологических и черепно-лицевых исследований: дентальные импланты</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/30638320/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Монолитный диоксид циркония в реставрациях на имплантах — обзор клинических результатов (PubMed)</a></li>
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
                    Сертифицированный челюстно-лицевой хирург в Roseville, Калифорния. Специализируется на
                    дентальных имплантах, восстановлении всей челюсти по протоколам All-on-4 и All-on-6 и
                    реконструктивной хирургии челюстей. Принимает пациентов в регионе Большого Сакраменто.
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Думаете об имплантах на всю челюсть?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию, чтобы узнать, подходят ли вам циркониевые дуги, и получить точную,
                  детализированную смету.
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
