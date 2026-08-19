"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const services = [
  {
    title: "Имплантация полного зубного ряда",
    subtitle: "All-on-4, All-on-6, скуловые импланты и «зубы за один день»",
    description:
      "Полный комплект постоянных зубов за один визит - по протоколам All-on-4 и All-on-6 с немедленной нагрузкой. Доктор Антипов работает с 3D КТ (cone beam) и навигационными шаблонами: установка имплантов точная и предсказуемая, даже если в других клиниках сказали «костной ткани не хватает». При сильной убыли кости верхней челюсти ставим скуловые (zygomatic) импланты - кость не наращиваем, всё делается за одну операцию. В тот же день ставим временные зубы - без улыбки никто не уходит.",
    image: "/images/procedures/full-arch-prosthesis.png",
    imagePosition: "center 55%",
    features: [
      "All-on-4",
      "All-on-6",
      "Скуловые импланты",
      "Зубы за день",
      "Зубы за 24 часа",
      "Немедленная нагрузка",
      "Навигационная хирургия",
      "Циркониевые протезы",
      "Титановые импланты",
      "Полная реконструкция",
    ],
  },
  {
    title: "Хирургия челюстей",
    subtitle: "Ортогнатика, Le Fort, BSSO, гениопластика",
    description:
      "Компьютерное планирование ортогнатических операций - исправление прикуса, восстановление жевательной функции и гармонии лица. Лечим мезиальный прикус (Class III), дистальный (Class II), открытый и перекрёстный прикус, асимметрию лица и обструктивное апноэ сна. В арсенале - остеотомия Le Fort I (моноблок и трёхсегментная), двусторонняя сагиттальная остеотомия (BSSO), гениопластика, максилло-мандибулярное выдвижение, операции на двух челюстях. Каждая операция планируется в 3D - с точностью до миллиметра.",
    image: "/images/gallery-behind-scenes/surgery-13.jpeg",
    imagePosition: "center 42%",
    features: [
      "Ортогнатика",
      "Остеотомия Le Fort I",
      "BSSO",
      "Гениопластика",
      "Двухчелюстные операции",
      "Исправление мезиального прикуса",
      "Исправление дистального прикуса",
      "Асимметрия лица",
      "Хирургия апноэ",
      "3D-планирование",
    ],
  },
  {
    title: "Эстетическая хирургия лица",
    subtitle: "Ринопластика, лифтинг, блефаропластика, филлеры, удаление родинок",
    description:
      "Деликатная работа с внешностью - выполняется сертифицированным челюстно-лицевым хирургом, который знает анатомию лица до миллиметра. Делаем ринопластику, подтяжку лица (ритидэктомия), блефаропластику (верхние и нижние веки), азиатскую блефаропластику, феминизацию лица, бесшрамное удаление родинок радиоволной, филлеры Juvederm, увеличение губ и липофилинг для восстановления объёма.",
    image: "/images/smile-gallery/patient-01.jpeg",
    imagePosition: "center 28%",
    features: [
      "Ринопластика",
      "Подтяжка лица",
      "Блефаропластика",
      "Азиатская блефаропластика",
      "Феминизация лица",
      "Удаление родинок без шрамов",
      "Филлеры Juvederm",
      "Увеличение губ",
      "Липофилинг",
      "Омоложение лица",
    ],
  },
  {
    title: "Костная пластика и синус-лифтинг",
    subtitle: "Органические, холистические и аутогенные материалы",
    description:
      "Восстанавливаем кость, утраченную после удаления зубов, пародонтита или травм - с использованием органических и холистических материалов. Делаем синус-лифтинг (открытый и закрытый), наращивание гребня, сохранение лунки, блочную пластику и направленную костную регенерацию (GBR). Есть выбор материалов: собственная кость (аутогенный трансплантат), аллограф, ксенограф и синтетические материалы - в том числе минимально обработанные природные, для тех, кто предпочитает холистический подход.",
    image: "/images/gallery-behind-scenes/surgery-01.jpeg",
    imagePosition: "center 45%",
    features: [
      "Органическая пластика",
      "Холистическая пластика",
      "Синус-лифтинг",
      "Наращивание гребня",
      "Сохранение лунки",
      "Блочная пластика",
      "GBR",
      "Аутогенный материал",
      "Аллограф",
      "Ксенограф",
    ],
  },
  {
    title: "Хирургическая стоматология",
    subtitle: "Зубы мудрости, удаления, ВНЧС, IV-седация",
    description:
      "Удаление сложных и ретенированных зубов мудрости, хирургическое раскрытие зубов под ортодонтию, лечение дисфункции ВНЧС, удаление кист и опухолей, преортопедическая подготовка. Все операции проходят под комфортной IV-седацией или общей анестезией - у нас в Roseville полностью оборудованный хирургический центр. У доктора Антипова есть fellowship-подготовка, поэтому даже самые сложные случаи проводим аккуратно и предсказуемо.",
    image: "/images/gallery-behind-scenes/surgery-09.jpeg",
    imagePosition: "center 38%",
    features: [
      "Удаление зубов мудрости",
      "Ретенированные зубы",
      "Лечение ВНЧС",
      "Хирургия ВНЧС",
      "IV-седация",
      "Общая анестезия",
      "Удаление зубов",
      "Удаление кист",
      "Преортопедическая хирургия",
      "Раскрытие зубов для ортодонтии",
    ],
  },
  {
    title: "Имплантация одного или нескольких зубов",
    subtitle: "Одиночные импланты, мостовидные конструкции, протезы на имплантах",
    description:
      "Не важно, не хватает одного зуба или нескольких - имплант остаётся самым естественным и долговечным решением. Ставим одиночные импланты с временной коронкой сразу, мостовидные конструкции на имплантах для замены нескольких соседних зубов и съёмные протезы на имплантах (overdentures) - для тех, кто хочет надёжный, но снимаемый вариант. Каждый имплант - медицинский титан, точная установка по 3D КТ, надёжная остеоинтеграция.",
    image: "/images/procedures/single-tooth-implant.png",
    imagePosition: "center 50%",
    features: [
      "Имплант одного зуба",
      "Мост на имплантах",
      "Snap-on протезы",
      "Overdentures",
      "Немедленная имплантация",
      "Коронка на имплант",
      "Навигационная установка",
      "Титановые импланты",
      "Остеоинтеграция",
      "Альтернатива съёмному протезу",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function RuServices() {
  return (
    <section id="services" lang="ru" className="py-16 lg:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Полный спектр челюстно-лицевой хирургии
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Сложные операции и
            <br />
            <span className="gradient-text">современные технологии</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            От имплантации полного зубного ряда «за один день» и скуловых имплантов до сложной ортогнатики, эстетической хирургии лица и холистической костной пластики - доктор Антипов соединяет 3D-планирование и 25+ лет board-certified практики, чтобы менять жизни пациентов по всей Северной Калифорнии.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white/85 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-md hover:shadow-[0_25px_70px_-15px_rgba(14,62,94,0.3)] hover:-translate-y-1 hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-dark">
                <Image
                  src={service.image}
                  alt={`${service.title} - ${service.subtitle} - Dr. Alexander Antipov, Oral Surgeon, Roseville CA`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-primary-light text-xs font-medium">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features.map((feature, fi) => (
                    <span
                      key={`${service.title}-${feature}-${fi}`}
                      className="px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <ConsultationModal>
                <button
                  className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group/link cursor-pointer"
                >
                  Schedule Free Consultation
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                </ConsultationModal>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
