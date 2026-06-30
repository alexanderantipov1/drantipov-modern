import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock, ShieldAlert } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Осложнения дентальных имплантов — риски и решения",
  description:
    "Разбираемся в возможных осложнениях дентальных имплантов: инфекция, неприживление, повреждение нерва. Какие бывают риски и как их предупредить.",
  alternates: {
    canonical: "/ru/for-patients/insights/dental-implant-complications",
    languages: {
      "ru": "/ru/for-patients/insights/dental-implant-complications",
      "en": "/for-patients/insights/dental-implant-complications",
      "x-default": "/for-patients/insights/dental-implant-complications",
    },
  },
  keywords: [
    "осложнения дентальных имплантов",
    "неприживление импланта",
    "инфекция импланта",
    "риски имплантации",
    "безопасность имплантов",
    "процент успеха имплантации",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Осложнения дентальных имплантов",
    description: "Понимаем риски имплантации — инфекция, неприживление, повреждение нерва — и как их предупредить.",
    images: [
      {
        url: "/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg",
        width: 1200,
        height: 630,
        alt: "Осложнения дентальных имплантов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Осложнения дентальных имплантов",
    description: "Понимаем риски имплантации — инфекция, неприживление, повреждение нерва — и как их предупредить.",
    images: ["/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg"],
  }
}

export default function DentalImplantComplicationsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(getBreadcrumbSchema([
          { name: "Главная", url: "https://www.drantipov.com/ru" },
          { name: "Пациентам", url: "https://www.drantipov.com/ru/for-patients" },
          { name: "Полезное", url: "https://www.drantipov.com/ru/for-patients/insights" },
          { name: "Осложнения дентальных имплантов: риски и как с ними справляться", url: "https://www.drantipov.com/ru/for-patients/insights/dental-implant-complications" },
        ]))}
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Импланты</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>14 апреля 2023</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Осложнения дентальных имплантов: риски и как с ними справляться
            </h1>

            

            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург · Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) · Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg"
                alt="Осложнения и риски дентальных имплантов"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Важная информация</h3>
                    <p className="text-neutral-700">
                      У дентальных имплантов отличный процент успеха — выше 95%, но, как и у любой операции, есть
                      определённые риски. Понимание возможных осложнений помогает принимать взвешенные решения и
                      вовремя замечать тревожные сигналы.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                9 возможных осложнений дентальных имплантов
              </h2>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">1. Инфекция</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Инфекция в зоне импланта может возникнуть, если бактерии попадают во время операции или после неё. Признаки:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Стойкая боль или отёк</li>
                    <li className="text-neutral-700">• Температура или озноб</li>
                    <li className="text-neutral-700">• Гной или необычные выделения</li>
                    <li className="text-neutral-700">• Покраснение или воспаление дёсен</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Профилактика:</strong> поддерживайте безупречную гигиену рта, тщательно выполняйте
                    послеоперационные инструкции и принимайте назначенные антибиотики по схеме.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">2. Неприживление импланта</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Хотя это редкость, имплант может не срастись с костью (сбой остеоинтеграции). Причины бывают такие:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Недостаточная плотность кости</li>
                    <li className="text-neutral-700">• Курение или употребление табака</li>
                    <li className="text-neutral-700">• Неконтролируемый диабет</li>
                    <li className="text-neutral-700">• Аутоиммунные заболевания</li>
                    <li className="text-neutral-700">• Плохая гигиена рта</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Что делать:</strong> если имплант не прижился, его обычно можно удалить и установить
                    заново после заживления участка — нередко с костной пластикой для большего успеха.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">3. Повреждение нерва</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    В редких случаях имплант ставят слишком близко к нерву, что вызывает:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Онемение или покалывание в губах, языке или подбородке</li>
                    <li className="text-neutral-700">• Боль или изменённую чувствительность</li>
                    <li className="text-neutral-700">• Временное или стойкое повреждение нерва</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Профилактика:</strong> современная 3D-визуализация и тщательное планирование операции
                    сводят этот риск к минимуму. Опытный хирург применяет точные методики, чтобы обойти ход нервов.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">4. Осложнения со стороны пазухи</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Когда импланты ставят на верхней челюсти, есть риск, что они зайдут в гайморову пазуху, и это может вызвать:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Инфекции пазух</li>
                    <li className="text-neutral-700">• Боль или давление в пазухах</li>
                    <li className="text-neutral-700">• Хронический синусит</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Профилактика:</strong> до установки импланта можно провести синус-лифтинг, чтобы создать
                    достаточно места. Грамотное планирование по КТ обеспечивает безопасную установку.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">5. Рецессия десны</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Десна вокруг импланта со временем может опускаться, обнажая металлическую часть импланта. Причины:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Плохая гигиена рта</li>
                    <li className="text-neutral-700">• Заболевание пародонта</li>
                    <li className="text-neutral-700">• Недостаток прикреплённой десны</li>
                    <li className="text-neutral-700">• Травма или чрезмерная нагрузка</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Что делать:</strong> пластика мягких тканей восстанавливает покрытие десны и улучшает эстетику.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">6. Проблемы с прикусом</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Если коронка на импланте неправильно выставлена по прикусу, это может вызвать:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Боль в челюсти или проблемы с ВНЧС</li>
                    <li className="text-neutral-700">• Трудности при жевании</li>
                    <li className="text-neutral-700">• Чрезмерный износ зубов-антагонистов</li>
                    <li className="text-neutral-700">• Расшатывание коронки или импланта</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Профилактика:</strong> тщательное планирование и правильное изготовление коронки
                    обеспечивают корректный прикус. Регулярные осмотры позволяют при необходимости вносить правки.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">7. Аллергические реакции</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Хотя это крайне редко, у некоторых пациентов возможна аллергия на титан или другие материалы
                    импланта. Симптомы могут включать:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Хроническое воспаление</li>
                    <li className="text-neutral-700">• Сыпь или крапивницу</li>
                    <li className="text-neutral-700">• Неприживление импланта</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Решение:</strong> для пациентов с чувствительностью к металлу есть альтернативные
                    материалы, например циркониевые импланты.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">8. Осложнения из-за общего здоровья</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    На успех имплантации могут влиять некоторые заболевания:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Неконтролируемый диабет</li>
                    <li className="text-neutral-700">• Остеопороз и болезни костей</li>
                    <li className="text-neutral-700">• Аутоиммунные заболевания</li>
                    <li className="text-neutral-700">• Онкология или лучевая терапия</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Важно:</strong> расскажите хирургу обо всех заболеваниях и лекарствах на консультации.
                    Многие состояния можно держать под контролем, чтобы имплантация прошла успешно.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">9. Психологические моменты</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Некоторые пациенты испытывают тревогу или стресс из-за:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-neutral-700">• Страха осложнений</li>
                    <li className="text-neutral-700">• Беспокойства о внешнем виде во время заживления</li>
                    <li className="text-neutral-700">• Финансового напряжения</li>
                    <li className="text-neutral-700">• Ожиданий по срокам восстановления</li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed">
                    <strong>Поддержка:</strong> открытое общение с командой клиники очень важно. Мы рядом, чтобы
                    ответить на ваши вопросы и поддержать на всём пути.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Как снизить риски
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Осложнения случаются, но большинство из них можно предупредить или взять под контроль при правильном подходе:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Выбирайте опытного хирурга</h4>
                    <p className="text-neutral-700">
                      У сертифицированных челюстно-лицевых хирургов основательная подготовка по установке имплантов
                      и работе с осложнениями.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Соблюдайте предоперационные указания</h4>
                    <p className="text-neutral-700">
                      Правильная подготовка, включая необходимые медицинские допуски, закладывает основу успеха.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Поддерживайте безупречную гигиену рта</h4>
                    <p className="text-neutral-700">
                      Хороший уход за полостью рта до и после операции снижает риск инфекции и помогает заживлению.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Откажитесь от курения</h4>
                    <p className="text-neutral-700">
                      Курение заметно повышает частоту осложнений. Отказ до операции значительно улучшает результат.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Не пропускайте контрольные визиты</h4>
                    <p className="text-neutral-700">
                      Регулярное наблюдение позволяет рано выявить и пролечить любые проблемы.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Общайтесь открыто</h4>
                    <p className="text-neutral-700">
                      Сразу сообщайте о любых необычных симптомах. Раннее вмешательство не даёт мелкой проблеме
                      перерасти в крупную.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Итог</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Дентальные импланты остаются одной из самых успешных и предсказуемых процедур в стоматологии —
                с процентом успеха выше 95%. Знать о возможных осложнениях важно, но понимание рисков не должно
                удерживать вас от этого меняющего жизнь лечения. С опытным хирургом, грамотным планированием и
                добросовестным уходом большинство пациентов получают успешный результат и улучшают качество
                жизни на десятилетия вперёд.
              </p>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/30030610/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Renvert S, Polyzois I — Лечение патологических карманов вокруг имплантов</a></li>
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS Position Paper — Дентальные импланты</a></li>
                <li><a href="https://www.cochrane.org/CD003815/ORAL_interventions-for-replacing-missing-teeth-different-types-of-dental-implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Cochrane Oral Health — Методы замещения отсутствующих зубов</a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/18724864/" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Heitz-Mayfield LJ — Периимплантные заболевания: диагностика и факторы риска</a></li>
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
                    Сертифицированный челюстно-лицевой хирург с обширным опытом установки дентальных имплантов.
                    Принимает в Roseville, CA, обслуживает Большой Сакраменто.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Есть вопросы о дентальных имплантах?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию, чтобы обсудить вашу ситуацию и узнать, как снизить риски
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/expertise/full-arch-implants">Узнать о наших решениях по имплантам</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="dental-implant-complications" />
    </>
  )
}
