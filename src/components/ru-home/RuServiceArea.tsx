"use client";

import { motion } from "framer-motion";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { totalCities } from "@/constants/serviceAreas";

/* ───────────────────────────────────────────
   SEO keyword-rich service descriptions
   ─────────────────────────────────────────── */

const services = [
  {
    title: "Имплантация полного зубного ряда",
    aka: "All-on-4 / All-on-6",
    description:
      "Постоянно меняем целую челюсть отсутствующих или разрушенных зубов за один визит. На 4–6 точно установленных титановых имплантах фиксируем неснимаемый мост — полная улыбка, естественный вид, всё в день операции.",
    keywords: [
      "Имплантация всей челюсти",
      "Импланты All-on-4",
      "Импланты All-on-6",
      "Импланты на все зубы",
      "Постоянные зубы за один день",
      "Несъёмный мост на имплантах",
      "Зубы за один день",
      "Зубы за 24 часа",
    ],
  },
  {
    title: "Органическая и холистическая костная пластика",
    aka: "Биосовместимое восстановление кости",
    description:
      "Используем биосовместимые, минимально обработанные донорские материалы и факторы роста. В отличие от синтетики, такая кость естественно встраивается в вашу — надёжная основа под импланты даже при сильной убыли костной ткани.",
    keywords: [
      "Органическая костная пластика",
      "Холистическая костная пластика",
      "Натуральная костная пластика",
      "Биосовместимая костная пластика",
      "Костная пластика под импланты",
      "Регенерация кости",
      "Синус-лифтинг",
      "Наращивание альвеолярного гребня",
    ],
  },
  {
    title: "Полная реконструкция полости рта",
    aka: "Комплексное восстановление улыбки",
    description:
      "При обширных разрушениях, кариесе или потере зубов собираем комплекс: имплантация, костная пластика, ортопедическое планирование. Доктор Антипов использует КТ (cone beam) и компьютерное планирование — предсказуемый, меняющий жизнь результат.",
    keywords: [
      "Полное восстановление зубов",
      "Реконструкция улыбки",
      "Полная реабилитация полости рта",
      "Протезы на имплантах",
      "Альтернатива съёмным протезам",
      "Постоянные протезы",
      "Несъёмные протезы",
      "Импланты или съёмные протезы",
    ],
  },
  {
    title: "Импланты с немедленной нагрузкой",
    aka: "Улыбка за день / зубы за 24 часа",
    description:
      "Пришёл без зубов — ушёл с новой улыбкой. По протоколу немедленной нагрузки доктор Антипов ставит импланты и функциональные временные зубы за один приём. Не нужно ждать месяцы, как при классической имплантации.",
    keywords: [
      "Импланты с немедленной нагрузкой",
      "Импланты за один визит",
      "Зубы за 24 часа",
      "Импланты за один день",
      "Новые зубы за один день",
      "Импланты сразу после удаления",
      "Улыбка в день операции",
      "Новая улыбка за один день",
    ],
  },
];

export default function RuServiceArea() {
  return (
    <section id="service-area" className="py-16 lg:py-20 bg-white overflow-hidden" lang="ru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Принимаем пациентов из {totalCities}+ городов Калифорнии и Невады
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Имплантация и челюстная хирургия
            <br />
            <span className="gradient-text">рядом с вами</span>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Доктор Александр Антипов делает имплантацию полного ряда, органическую костную пластику, корректирующую хирургию челюстей и эстетические процедуры лица для пациентов по всей Северной Калифорнии и Северной Неваде. Основной офис в Roseville находится в пределах 3,5-часовой поездки от {totalCities}+ городов — от Реддинга до Фресно, от Сан-Франциско до Рино.
          </p>
        </motion.div>

        {/* Service descriptions — keyword blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
            Что можно сделать в <span className="gradient-text">офисе в Roseville</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-light rounded-3xl p-8 hover:shadow-lg transition-shadow duration-500"
              >
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {svc.aka}
                </span>
                <h4 className="text-xl font-bold text-dark mt-2 mb-3">{svc.title}</h4>
                <p className="text-muted text-sm leading-relaxed mb-4">{svc.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.keywords.map((kw, ki) => (
                    <span
                      key={`${svc.title}-${kw}-${ki}`}
                      className="px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-medium rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO-rich bottom content — long-form keyword text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-4xl mx-auto"
        >
          <div className="section-divider mb-12" />
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Почему пациенты выбирают доктора Антипова для <span className="gradient-text">имплантации полного ряда</span>
          </h3>
          <div className="prose prose-lg text-muted leading-relaxed space-y-6">
            <p>
              Если вы ищете <strong>имплантацию всей челюсти рядом с собой</strong>, <strong>импланты All-on-4</strong> или <strong>зубы за один день</strong> в Северной Калифорнии или Неваде — практика доктора Александра Антипова в Roseville, CA даёт тот опыт, технологии и результат, которых вы заслуживаете. За плечами доктора Антипова более 25 лет работы и свыше 10 000 пролеченных пациентов — он один из самых опытных челюстно-лицевых хирургов региона в области <strong>восстановления всех зубов на имплантах</strong>.
            </p>
            <p>
              В отличие от имплантологических центров, где работают обычные стоматологи, доктор Антипов — <strong>сертифицированный челюстно-лицевой хирург</strong>, который лично проводит каждую процедуру: от первой <strong>конусно-лучевой КТ (КЛКТ)</strong> и планирования лечения до установки имплантов, <strong>органической костной пластики</strong> и фиксации финальной ортопедической конструкции. Всё лечение проходит в одном месте у одного хирурга — без хождения по разным специалистам.
            </p>
            <p>
              Наша программа <strong>органической и холистической костной пластики</strong> отличает нас от других центров. Мы используем биосовместимые, минимально обработанные донорские ткани в сочетании с факторами роста из обогащённой тромбоцитами плазмы — кость в челюсти восстанавливается естественным путём. Такой подход идеально подходит тем, кто предпочитает <strong>натуральные материалы для костной пластики</strong> синтетике, а также пациентам с <strong>выраженной убылью кости</strong>, которым в других местах отказали в имплантации.
            </p>
            <p>
              Пациенты приезжают в наш офис в Roseville из городов <strong>Sacramento, San Francisco, Oakland, San Jose, Reno, Stockton, Modesto, Fresno, Redding, Chico, Napa, Santa Rosa</strong> и более чем 150 других городов Калифорнии и Невады. Мы проводим <strong>бесплатные консультации</strong>, которые включают бесплатную конусно-лучевую КТ, индивидуальный план лечения и разбор вариантов финансирования — всё без оплаты и без обязательств.
            </p>
            <p>
              Нужны ли вам <strong>импланты на всю челюсть</strong>, <strong>зубы на имплантах All-on-4 или All-on-6</strong>, <strong>импланты с немедленной нагрузкой за один день</strong>, <strong>холистическая костная пластика</strong>, <strong>ортогнатическая хирургия</strong> или <strong>удаление зубов мудрости</strong> — доктор Антипов и его команда добиваются результата, меняющего жизнь, с той точностью и заботой, которые может обеспечить только сертифицированный челюстно-лицевой хирург. <strong>Финансирование имплантации</strong> доступно через несколько кредитных партнёров — лечение по силам при любом бюджете.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <ConsultationModal>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Записаться на бесплатную консультацию
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </ConsultationModal>
            <p className="mt-4 text-muted text-sm">
              Бесплатное КТ &bull; без обязательств &bull; рассрочка
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
