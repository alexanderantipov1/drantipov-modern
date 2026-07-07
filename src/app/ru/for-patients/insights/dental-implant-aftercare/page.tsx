import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { RelatedArticles } from "@/components/RelatedArticles"
import { Calendar, ArrowLeft, Clock, Heart, Check } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Уход после имплантации — советы по восстановлению",
  description:
    "Подробный гид по уходу после установки дентальных имплантов: послеоперационные правила, гигиена рта, диета и сроки восстановления.",
  alternates: {
    canonical: "/ru/for-patients/insights/dental-implant-aftercare",
    languages: {
      "en": "/for-patients/insights/dental-implant-aftercare",
      "ru": "/ru/for-patients/insights/dental-implant-aftercare",
      "x-default": "/for-patients/insights/dental-implant-aftercare",
    },
  },
  keywords: [
    "уход после имплантации",
    "восстановление после имплантов",
    "послеоперационный уход импланты",
    "заживление имплантов",
    "уход за имплантами",
    "успешная имплантация",
  ],
  openGraph: {
    locale: "ru_RU",
    title: "Уход после имплантации",
    description: "Послеоперационный уход, гигиена, рекомендации по диете и сроки восстановления при дентальных имплантах.",
    images: [
      {
        url: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
        width: 1200,
        height: 630,
        alt: "Уход после имплантации",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Уход после имплантации",
    description: "Послеоперационный уход, гигиена, рекомендации по диете и сроки восстановления при дентальных имплантах.",
    images: ["/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg"],
  }
}

export default function DentalImplantAftercarePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(getBreadcrumbSchema([
          { name: "Главная", url: "https://www.drantipov.com/ru" },
          { name: "Пациентам", url: "https://www.drantipov.com/ru/for-patients" },
          { name: "Полезное", url: "https://www.drantipov.com/ru/for-patients/insights" },
          { name: "Уход после имплантации: советы для успешного восстановления", url: "https://www.drantipov.com/ru/for-patients/insights/dental-implant-aftercare" },
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
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Уход за пациентом</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>13 апреля 2023</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 мин чтения</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Уход после имплантации: советы для успешного восстановления
            </h1>



            {/* E-E-A-T: Medically reviewed byline */}
            <p className="text-sm text-neutral-600 italic mb-8 -mt-2 border-l-2 border-primary-200 pl-3">
              Медицинская проверка — <strong className="not-italic text-neutral-900">Доктор Александр В. Антипов, DDS</strong> &mdash; сертифицированный челюстно-лицевой хирург &middot; Diplomate, American Board of Oral &amp; Maxillofacial Surgery (ABOMS) &middot; Лицензия стоматолога Калифорнии №&nbsp;50724
            </p>
{/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg"
                alt="Уход после имплантации и советы по восстановлению"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-green-50 border-green-200">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Важная информация о восстановлении</h3>
                    <p className="text-neutral-700">
                      Правильный послеоперационный уход критично важен для успешного заживления и долговечности
                      импланта. Соблюдение этих рекомендаций помогает добиться оптимального результата и
                      минимизировать осложнения.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Поздравляем — вы сделали первый шаг к восстановлению улыбки с помощью дентальных имплантов!
                Операция позади, и теперь самое важное — правильный уход для надёжного заживления и
                долгосрочного успеха. Перед вами полное руководство по послеоперационному уходу.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                9 ключевых правил для успешного восстановления
              </h2>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Точно следуйте послеоперационным инструкциям
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Хирург даст конкретные рекомендации именно под вашу процедуру. Обычно они касаются:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Когда и как менять марлевые тампоны
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Графика приёма обезболивающих и антибиотиков
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Ограничений по активности и отдыху
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Признаков осложнений, на которые нужно обращать внимание
                        </li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Не стесняйтесь звонить в клинику, если возникли вопросы или сомнения по поводу инструкций.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Поддерживайте хорошую гигиену рта</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Хирургическую зону трогать осторожно, но гигиена остального рта обязательна:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Первые несколько дней не чистите щёткой прямо место импланта</li>
                        <li className="text-neutral-700">• Остальные зубы аккуратно чистите и используйте флосс</li>
                        <li className="text-neutral-700">• Полощите тёплым солевым раствором (1/2 ч.л. соли на 240 мл воды) после еды</li>
                        <li className="text-neutral-700">• Используйте назначенный антимикробный ополаскиватель по инструкции</li>
                        <li className="text-neutral-700">• После первичного заживления чистите зону импланта супермягкой щёткой</li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Откажитесь от курения и алкоголя</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        И курение, и алкоголь значительно ухудшают заживление:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">
                          <strong>Курение:</strong> снижает кровоток, повышает риск инфекции и резко уменьшает
                          процент успеха имплантации. Не курите минимум 2 недели, в идеале — отказаться навсегда.
                        </li>
                        <li className="text-neutral-700">
                          <strong>Алкоголь:</strong> может конфликтовать с лекарствами и задерживать заживление.
                          Откажитесь хотя бы на 48–72 часа после операции.
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Внимательно относитесь к диете</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Еда играет важную роль в заживлении. Двигайтесь по этому графику:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Первые 24–48 часов:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Только холодные жидкости и мягкая пища</li>
                            <li className="text-neutral-700">• Смузи, йогурт, пудинг, мороженое</li>
                            <li className="text-neutral-700">• Никакой горячей еды и напитков — могут усилить кровотечение</li>
                            <li className="text-neutral-700">• Не пейте через трубочку (вакуум может сорвать сгусток)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Дни 3–7:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Мягкая пища: пюре, омлет-болтунья, супы</li>
                            <li className="text-neutral-700">• Варёные овощи, паста, мягкая рыба</li>
                            <li className="text-neutral-700">• Протеиновые коктейли для питания</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Недели 2–4:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Постепенно возвращайте обычную еду</li>
                            <li className="text-neutral-700">• Жуйте на противоположной стороне от импланта</li>
                            <li className="text-neutral-700">• Избегайте очень твёрдой, хрустящей и липкой пищи</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Не нагружайте импланты
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Защитите заживающие импланты так:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Не трогайте и не «исследуйте» зону импланта языком или пальцами</li>
                        <li className="text-neutral-700">• Первое время не спите на стороне импланта</li>
                        <li className="text-neutral-700">• Будьте осторожны, надевая через голову одежду</li>
                        <li className="text-neutral-700">• Отложите контактные виды спорта и интенсивные тренировки на 2–4 недели</li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">6</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Не пропускайте контрольные визиты
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Повторные осмотры нужны для:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Контроля заживления</li>
                        <li className="text-neutral-700">• Снятия швов, если они нерассасывающиеся</li>
                        <li className="text-neutral-700">• Раннего выявления и решения любых проблем</li>
                        <li className="text-neutral-700">• Определения, когда ставить постоянную коронку</li>
                        <li className="text-neutral-700">• Профессиональной чистки вокруг импланта</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Никогда не пропускайте эти визиты, даже если кажется, что всё заживает хорошо.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">7</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Сообщайте о любых осложнениях</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Свяжитесь с клиникой немедленно, если у вас:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Сильная боль, которую не снимают лекарства</li>
                        <li className="text-neutral-700">• Обильное кровотечение, продолжающееся после первых 24 часов</li>
                        <li className="text-neutral-700">• Признаки инфекции (температура, гной, нарастающий отёк через 3 дня)</li>
                        <li className="text-neutral-700">• Онемение или покалывание, длящееся дольше нескольких часов</li>
                        <li className="text-neutral-700">• Ощущение, что имплант шатается или подвижен</li>
                        <li className="text-neutral-700">• Аллергическая реакция на лекарства</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Быстрая реакция помогает не дать мелкой проблеме превратиться в серьёзную.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">8</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Носите ночную каппу, если её рекомендовали
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        Если вы скрипите или сжимаете зубы (бруксизм), индивидуальная ночная каппа защитит
                        имплант от избыточных нагрузок, которые могут повлиять на его стабильность. Это
                        особенно важно в фазу заживления и после установки коронки.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">9</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Ходите на регулярные осмотры у стоматолога
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Долгий успех требует постоянного ухода:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Профессиональная чистка каждые 6 месяцев (или по рекомендации)</li>
                        <li className="text-neutral-700">• Чистка и контроль имплантов у врача</li>
                        <li className="text-neutral-700">• Периодические рентген-снимки для контроля уровня кости</li>
                        <li className="text-neutral-700">• Своевременное лечение проблем с собственными зубами рядом с имплантом</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        При правильном уходе дентальные импланты могут служить всю жизнь!
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Сроки восстановления</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Понимание, чего ждать, помогает спокойнее переносить восстановление:
              </p>

              <div className="space-y-4 my-8">
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Первые 24 часа:</h4>
                  <p className="text-neutral-700">
                    Небольшое кровотечение, отёк и дискомфорт — это нормально. Холодные компрессы и отдых.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Дни 2–3:</h4>
                  <p className="text-neutral-700">
                    Отёк достигает пика к 2–3 дню. Возможны синяки. Боль контролируется обезболивающими.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Первая неделя:</h4>
                  <p className="text-neutral-700">
                    Отёк спадает. Швы снимают или они рассасываются сами. Можно вернуться к большинству привычных дел.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Недели 2–4:</h4>
                  <p className="text-neutral-700">
                    Заживление мягких тканей в основном завершено. Интеграция с костью продолжается внутри.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Месяцы 3–6:</h4>
                  <p className="text-neutral-700">
                    Остеоинтеграция (сращение с костью) завершена. Готовы к установке коронки и финальной реставрации.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Связаться с клиникой
              </h2>
              <GlassCard className="p-6 mb-8">
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>Galleria Oral &amp; Maxillofacial Surgery</strong>
                  <br />
                  911 Reserve Dr Suite 100, Roseville, CA 95678
                  <br />
                  Телефон: <a href="tel:916-783-2110" className="text-primary-600 hover:underline">916-783-2110</a>
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Наша команда поддержит вас на протяжении всего восстановления. Звоните с любыми вопросами
                  или сомнениями — в любое время.
                </p>
              </GlassCard>
            </div>

            {/* Sources / Authoritative References */}
            <section className="mt-12 pt-8 border-t border-neutral-200">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Источники и ссылки</h2>
              <p className="text-sm text-neutral-600 mb-3">Рецензируемые научные публикации и авторитетные источники, на которые опирается эта статья.</p>
              <ul className="space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li><a href="https://www.aaoms.org/procedures/dental-implant-surgery" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">AAOMS — Инструкции после установки имплантов</a></li>
                <li><a href="https://www.cochrane.org/CD012677/ORAL_interventions-replacing-missing-teeth-treatment-peri-implantitis" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">Cochrane Oral Health — Поддержка имплантов</a></li>
                <li><a href="https://www.mouthhealthy.org/all-topics-a-z/implants" target="_blank" rel="noopener nofollow" className="text-primary-700 hover:underline">ADA Mouth Healthy — Уход за имплантами</a></li>
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
                    Сертифицированный челюстно-лицевой хирург, нацеленный на исключительный уровень помощи
                    пациентам и предсказуемый успех каждой процедуры имплантации.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Готовы преобразить улыбку?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Запишитесь на консультацию, чтобы узнать больше о дентальных имплантах и о том, чего ожидать.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/ru/for-patients/consultation">Записаться на консультацию</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/ru/for-patients/pre-op">Подготовка к операции</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>

      <RelatedArticles currentSlug="dental-implant-aftercare" />
    </>
  )
}
