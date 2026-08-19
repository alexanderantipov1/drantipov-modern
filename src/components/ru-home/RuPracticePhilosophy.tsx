"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const patientPhotos = [
  {
    src: "/images/patients/patient-smile-1.jpeg",
    alt: "Доктор Александр Антипов с улыбающимся пациентом после имплантации в клинике в Roseville, CA",
    rotate: "-3deg",
    marginTop: "mt-0",
  },
  {
    src: "/images/patients/patient-smile-2.jpeg",
    alt: "Доктор Александр Антипов с пациентом после реконструкции полного зубного ряда в Roseville, CA",
    rotate: "2.5deg",
    marginTop: "mt-8",
  },
  {
    src: "/images/patients/patient-smile-3.jpeg",
    alt: "Доктор Александр Антипов с благодарными пациентами после хирургического лечения в Roseville, CA",
    rotate: "3deg",
    marginTop: "-mt-6",
  },
  {
    src: "/images/patients/patient-smile-4.jpeg",
    alt: "Доктор Александр Антипов с довольным пациентом в своём хирургическом центре в Северной Калифорнии",
    rotate: "-2.5deg",
    marginTop: "mt-4",
  },
];

export default function RuPracticePhilosophy() {
  return (
    <section lang="ru" className="py-16 lg:py-24 bg-gradient-to-br from-bone/40 via-white to-bone/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <Heart className="h-12 w-12 text-primary" aria-hidden="true" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Как мы работаем
            </h2>

            <div className="text-lg text-neutral-700 leading-relaxed space-y-5">
              <p>
                «Я уверен: каждый человек, который пришёл ко мне, имеет право на спокойное, внимательное и качественное лечение. Поэтому я не тороплюсь - сначала разбираюсь, что именно беспокоит пациента, какие у него цели, какие сомнения. И уже под это собираю план - индивидуальный, а не шаблонный».
              </p>
              <p>
                «Хирургия меняется быстро - новые техники, материалы, протоколы появляются каждый год. Я регулярно учусь и слежу за тем, что реально работает в долгую. Это значит, что мои пациенты получают не „как принято“, а лучшее из того, что есть на сегодня в челюстно-лицевой хирургии».
              </p>
              <p className="font-semibold text-neutral-900">- Доктор Александр Антипов</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.12 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {patientPhotos.map((photo) => (
                <motion.div
                  key={photo.src}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                  style={{ rotate: photo.rotate }}
                  className={`${photo.marginTop} relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5 border-4 border-white transition-shadow duration-300 hover:shadow-2xl`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 45vw"
                  />
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="mt-7 text-center text-sm font-medium uppercase tracking-wider text-primary"
            >
              Real patients. Real smiles.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
