"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/constants/testimonials";

// Переводы отзывов; английские оригиналы остаются в общих данных для английской версии.
export const russianTestimonials: Record<string, { quote: string; procedure: string; location: string }> = {
  "Sarah M.": {
    quote: "Мне удалили зуб и установили имплант. Всё сделали за один день. Процедура прошла быстро и без боли. Я очень благодарна доктору Антипову за его работу.",
    procedure: "Имплантация одного зуба",
    location: "Розвилл, Калифорния",
  },
  "Michael R.": {
    quote: "Мне сделали обширную костную пластику с синус-лифтингом с обеих сторон верхней челюсти, установили несколько имплантов, и в тот же день я получил зубы. Всё прошло спокойно, без осложнений. Посмотрите на мою новую улыбку!",
    procedure: "Имплантация All-on-4 с костной пластикой",
    location: "Сакраменто, Калифорния",
  },
  "Linda K.": {
    quote: "С самой первой консультации доктор Антипов и его команда помогли мне почувствовать себя спокойно. Результат превзошёл мои ожидания. Теперь я снова могу есть любимую еду и уверенно улыбаться.",
    procedure: "Восстановление полного зубного ряда",
    location: "Фолсом, Калифорния",
  },
  "Val M.": {
    quote: "Я прилетел из Гонолулу к доктору Антипову из-за его репутации в коррекции прикуса. Он провёл операции Le Fort и BSSO, чтобы исправить мой выраженный мезиальный прикус. Результат изменил мою жизнь. Поездка того стоила.",
    procedure: "Ортогнатическая операция",
    location: "Гонолулу, Гавайи",
  },
  "Vadim S.": {
    quote: "Я годами носил съёмные протезы, которые соскальзывали и заставляли меня стесняться. Доктор Антипов установил мне несъёмные зубы по методу All-on-4 — в тот же день! На парковке я плакал от радости. Это было лучшее решение в моей жизни.",
    procedure: "Имплантация All-on-4 за один день",
    location: "Ситрус-Хайтс, Калифорния",
  },
  "Chieko T.": {
    quote: "Доктор Антипов сделал мне ринопластику, и результат выглядит очень естественно: все говорят, что я посвежела, но никто не догадывается об операции. Его знание строения костей лица как челюстно-лицевого хирурга — огромное преимущество.",
    procedure: "Ринопластика",
    location: "Юба-Сити, Калифорния",
  },
  "Robert J.": {
    quote: "Три хирурга сказали, что у меня недостаточно кости для имплантов. Доктор Антипов установил скуловые импланты, и я вышел из клиники с зубами в тот же день. Он изменил мою жизнь, когда другие не смогли помочь.",
    procedure: "Скуловая имплантация полного ряда",
    location: "Рино, Невада",
  },
  "Evelina C.": {
    quote: "Моей дочери сделали операцию по исправлению открытого прикуса и асимметрии лица. Доктор Антипов использовал компьютерное 3D-планирование, а результат превзошёл наши ожидания. Она стала гораздо увереннее в себе. Мы очень благодарны.",
    procedure: "Коррекция прикуса — Le Fort и гениопластика",
    location: "Ситрус-Хайтс, Калифорния",
  },
  "Patricia L.": {
    quote: "Я выбрала доктора Антипова для имплантации All-on-6, потому что он использует натуральные материалы для костной пластики. Для меня был важен такой комплексный подход. Операция под внутривенной седацией прошла комфортно, а новые зубы выглядят прекрасно.",
    procedure: "Имплантация All-on-6 с костной пластикой",
    location: "Уолнат-Крик, Калифорния",
  },
};

export default function RuTestimonials() {
  return (
    <section
      id="testimonials" lang="ru"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,187,156,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,174,239,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Реальные отзывы пациентов
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Истории
            <br />
            <span className="gradient-text">пациентов Северной Калифорнии</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Истории реальных людей, которые выбрали доктора Антипова — для имплантации, челюстной хирургии, эстетики лица и костной пластики. К нам приезжают из Сакраменто, Сан-Франциско, Рино и других городов.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const translation = russianTestimonials[t.name];
            if (!translation) throw new Error(`Не найден русский перевод отзыва: ${t.name}`);
            return (
              <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-dark rounded-3xl p-7 hover:border-primary/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/50 text-xs mb-2">Перевод отзыва пациента</p>
              <p className="text-white/80 leading-relaxed mb-5 text-sm">
                &ldquo;{translation.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{translation.procedure}</p>
                  <p className="text-white/40 text-[10px]">{translation.location}</p>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Отзывы пациентов
          </div>
          <div>Приём в Розвилле, Калифорния</div>
        </motion.div>
      </div>
    </section>
  );
}
