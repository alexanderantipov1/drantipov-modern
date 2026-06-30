import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "All-on-4 или All-on-6: что лучше?",
  description:
    "All-on-4 и All-on-6 простыми словами — количество имплантов, требования к кости, стоимость, восстановление и стабильность. Помогаем выбрать оптимальный вариант полной челюсти у доктора Антипова в Розвилле.",
  alternates: {
    canonical: "/ru/for-patients/insights/all-on-4-vs-all-on-6",
    languages: {
      "en": "/for-patients/insights/all-on-4-vs-all-on-6",
      "ru": "/ru/for-patients/insights/all-on-4-vs-all-on-6",
      "x-default": "/for-patients/insights/all-on-4-vs-all-on-6",
    },
  },
  keywords: [
    "All-on-4 или All-on-6",
    "All-on-4",
    "All-on-6",
    "импланты на всю челюсть",
    "полная реставрация челюсти",
    "дентальные импланты Розвилл",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "All-on-4 или All-on-6: что лучше?",
    description: "Количество имплантов, требования к кости, стоимость, восстановление и стабильность — сравнение, чтобы выбрать оптимальный вариант полной челюсти.",
    images: [
      {
        url: "/images/blog/2026-06-19/all-on-4-vs-all-on-6.png",
        width: 1200,
        height: 630,
        alt: "Сравнение конфигураций All-on-4 и All-on-6 на полную челюсть",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-on-4 или All-on-6: что лучше?",
    description: "Количество имплантов, требования к кости, стоимость, восстановление и стабильность — сравнение, чтобы выбрать оптимальный вариант полной челюсти.",
    images: ["/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"],
  }
}

export default function AllOn4VsAllOn6Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"MedicalScholarlyArticle","@id":"https://www.drantipov.com/ru/for-patients/insights/all-on-4-vs-all-on-6#article","headline":"All-on-4 или All-on-6: что лучше?","description":"Сравнение All-on-4 и All-on-6 по количеству имплантов, требованиям к плотности кости, стоимости, времени восстановления и стабильности — чтобы выбрать оптимальный протокол полной челюсти.","inLanguage":"ru","url":"https://www.drantipov.com/ru/for-patients/insights/all-on-4-vs-all-on-6","datePublished":"2026-06-19","dateModified":"2026-06-19","image":["https://www.drantipov.com/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"],"author":{"@type":"Person","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com/ru/about","identifier":"https://www.drantipov.com/#physician"},"publisher":{"@type":"Organization","name":"Доктор Александр В. Антипов, DDS","url":"https://www.drantipov.com","logo":{"@type":"ImageObject","url":"https://www.drantipov.com/images/logo-d10cd66c.svg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.drantipov.com/ru/for-patients/insights/all-on-4-vs-all-on-6"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"В чём главное отличие All-on-4 от All-on-6?","acceptedAnswer":{"@type":"Answer","text":"Главное отличие — количество имплантов. All-on-4 использует четыре импланта на челюсть, All-on-6 — шесть, что влияет на стабильность и распределение жевательной нагрузки по протезу."}},{"@type":"Question","name":"All-on-4 дешевле, чем All-on-6?","acceptedAnswer":{"@type":"Answer","text":"Обычно — да. All-on-4 использует меньше имплантов и часто менее сложен, поэтому стоит дешевле."}},{"@type":"Question","name":"Можно ли поставить All-on-4 при слабой плотности кости?","acceptedAnswer":{"@type":"Answer","text":"Многие пациенты с ограниченным объёмом кости подходят для All-on-4, потому что задние импланты ставят под углом, чтобы использовать имеющуюся кость. При значительной потере кости часто рекомендуют All-on-6, чтобы распределить нагрузку на большее число опор."}},{"@type":"Question","name":"Какой вариант надёжнее в долгой перспективе?","acceptedAnswer":{"@type":"Answer","text":"Оба протокола успешны на длинной дистанции. All-on-6 даёт больше стабильности при длинных дугах, сильном прикусе или слабой кости. All-on-4 — хорошо изучен и биомеханически достаточен для большинства пациентов."}},{"@type":"Question","name":"Оба варианта требуют костной пластики?","acceptedAnswer":{"@type":"Answer","text":"Не обязательно. All-on-4 спроектирован так, чтобы минимизировать костную пластику за счёт имеющейся кости. All-on-6 тоже часто обходится без пластики, но дополнительные точки иногда требуют наращивания."}}]}]` }}
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
                <span>7 мин чтения</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              All-on-4 или All-on-6: что лучше?
            </h1>

            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Автор и медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>

            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2026-06-19/all-on-4-vs-all-on-6.png"
                alt="Сравнение конфигураций All-on-4 и All-on-6 на полную челюсть"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Если вы изучаете тему имплантации на полную челюсть, очень быстро встретите два названия:
                <strong> All-on-4</strong> и <strong> All-on-6</strong>. Оба восстанавливают всю челюсть на
                фиксированном мостовидном протезе на имплантах и оба значительно превосходят классические
                съёмные протезы. Настоящий вопрос не в том, что «лучше» вообще, а в том, что лучше
                <em> именно для вашей анатомии и ваших целей</em>.
              </p>

              <GlassCard className="my-10 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Главное</p>
                <ul className="mt-3 space-y-2 text-base leading-7 text-neutral-700 list-none pl-0">
                  <li>&bull; <strong>Количество имплантов:</strong> All-on-4 — четыре, All-on-6 — шесть.</li>
                  <li>&bull; <strong>Стабильность:</strong> All-on-6 даёт дополнительную опору, особенно при ограниченной плотности кости.</li>
                  <li>&bull; <strong>Стоимость:</strong> All-on-4 обычно дешевле.</li>
                  <li>&bull; <strong>Решает планирование:</strong> ваша кость, прикус и цели определяют правильный выбор.</li>
                </ul>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Что представляет собой каждый подход
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>All-on-4</strong> использует четыре стратегически расположенных импланта &mdash;
                обычно два вертикальных спереди и два под углом сзади &mdash; для поддержки фиксированного
                мостовидного протеза. Угловая установка задних имплантов позволяет максимально использовать
                имеющуюся кость и часто избегать костной пластики.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                <strong>All-on-6</strong> добавляет ещё два импланта. Эти дополнительные точки опоры
                повышают стабильность и распределяют жевательную нагрузку равномернее &mdash; что особенно
                важно при сниженной плотности кости или высоких функциональных требованиях.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Ключевые отличия
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Опора:</strong> два дополнительных импланта дают All-on-6 больше точек крепления протеза.</li>
                <li>&mdash; <strong>Плотность кости:</strong> при достаточном объёме кости пациент чаще подходит для All-on-4; при сниженной плотности или повышенных нагрузках All-on-6 распределяет нагрузку лучше.</li>
                <li>&mdash; <strong>Стоимость:</strong> All-on-6 обычно дороже, потому что включает больше имплантов и иногда дополнительные хирургические и протетические этапы.</li>
                <li>&mdash; <strong>Восстановление:</strong> оба варианта возвращают к нормальному функционированию намного быстрее, чем съёмные протезы; к All-on-4 адаптация бывает чуть быстрее, при All-on-6 первичное заживление может занять чуть больше времени.</li>
              </ul>

              <div className="relative w-full h-[300px] md:h-[400px] my-10 rounded-[40px] overflow-hidden">
                <Image
                  src="/images/blog/2026-06-19/all-on-x-cost.png"
                  alt="Планирование имплантации на полную челюсть на 3D-модели"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Преимущества All-on-4
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Меньше инвазивность:</strong> меньше имплантов — меньше хирургического вмешательства.</li>
                <li>&mdash; <strong>Эффективное лечение:</strong> часто более короткая операция за счёт меньшего числа точек установки.</li>
                <li>&mdash; <strong>Часто без пластики:</strong> угловая установка задних имплантов позволяет использовать уже имеющуюся кость.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Преимущества All-on-6
              </h2>
              <ul className="space-y-3 text-neutral-700 leading-relaxed mb-6 list-none pl-0">
                <li>&mdash; <strong>Лучшая стабильность:</strong> два дополнительных импланта дают более надёжную опору для ряда пациентов.</li>
                <li>&mdash; <strong>Лучшее распределение нагрузки:</strong> больше точек опоры — равномернее распределяется жевательная нагрузка.</li>
                <li>&mdash; <strong>Надёжность на годы:</strong> особенно важно при сложных случаях или сильном прикусе.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Какой вариант подходит именно вам?
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Честный ответ &mdash; зависит от качества вашей кости, анатомии, силы прикуса, медицинского
                анамнеза и бюджета. Клинический осмотр с 3D-снимками показывает, что реально и безопасно
                именно в вашем случае &mdash; никаких универсальных решений. Будьте осторожны с клиниками,
                которые называют цифру до того, как сделали снимок и провели очный осмотр.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Частые вопросы
              </h2>
              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">В чём главное отличие All-on-4 от All-on-6?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Количество имплантов. All-on-4 использует четыре на челюсть, All-on-6 — шесть, что влияет
                    на стабильность и распределение жевательной нагрузки по протезу.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">All-on-4 дешевле, чем All-on-6?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Как правило — да. Меньше имплантов и менее сложная процедура обычно делают All-on-4 более
                    доступным вариантом.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Можно ли All-on-4 при слабой кости?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Часто — да. Угловая установка задних имплантов хорошо использует имеющуюся кость. При
                    значительной потере кости рекомендуется All-on-6, чтобы распределить нагрузку на большее
                    число опор.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Какой вариант надёжнее в долгой перспективе?</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Оба успешны на длинной дистанции. All-on-6 даёт больше стабильности при длинных дугах,
                    сильном прикусе или ограниченной кости. All-on-4 хорошо документирован и биомеханически
                    достаточен для большинства пациентов.
                  </p>
                </div>
              </div>
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/15008863/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Maló P, Rangert B, Nobre M — Концепция All-on-4 с немедленной функцией на имплантатах системы Brånemark</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Процедура имплантации зубов</a></li>
                <li><a href="https://www.nidcr.nih.gov/health-info/dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">NIH — Национальный институт стоматологических и черепно-лицевых исследований: дентальные импланты</a></li>
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
                    Сертифицированный челюстно-лицевой хирург в Розвилле, штат Калифорния. Специализируется на
                    дентальной имплантации, полной реставрации All-on-4 и All-on-6, корригирующей челюстной
                    хирургии. Принимает пациентов со всего Большого Сакраменто.
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Не уверены, какой подход подойдёт именно вам?
                </h3>
                <p className="text-neutral-700 mb-6">
                  3D-снимок и очный осмотр точно покажут, что может выдержать ваша челюсть, и позволят
                  составить персональный план с прозрачной стоимостью.
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
