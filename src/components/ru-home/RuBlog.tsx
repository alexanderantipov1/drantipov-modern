"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  { date: "Окт 2017", title: "Имплантация All-on-Four", image: "/images/blog/2017-10-27/all-on-four@2x-f49f2f89.jpg", topic: "Имплантация", href: "/ru/expertise/full-arch-implants" },
  { date: "Окт 2017", title: "Феминизация лица", image: "/images/blog/2017-10-17/feminization@2x-532b991f.jpg", topic: "Эстетика", href: "/ru/surgical-cases" },
  { date: "Окт 2017", title: "Ботокс и филлеры", image: "/images/blog/2017-10-16/botox@2x-d599eae3.jpg", topic: "Косметология", href: "/ru/surgical-cases" },
  { date: "Авг 2017", title: "Ринопластика", image: "/images/blog/2017-08-10/rhinoplasty@2x-089d0e54.jpg", topic: "Эстетика", href: "/ru/surgical-cases" },
  { date: "Июн 2017", title: "BSCOSO - летний курс", image: "/images/blog/2017-06-12/2017-bscoso-summer-course@2x-da40cb05.jpg", topic: "Обучение", href: "/ru/for-dentists" },
  { date: "Июн 2016", title: "Рак полости рта: что важно знать", image: "/images/blog/2016-06-28/oral-cancer@2x-28244f52.jpg", topic: "Здоровье", href: "/ru/for-patients" },
  { date: "Май 2016", title: "Зубы мудрости - что нужно знать", image: "/images/blog/2016-05-04/wisdom-teeth@2x-09b09b12.jpg", topic: "Хирургия", href: "/ru/expertise" },
  { date: "Дек 2015", title: "Восстановление после операции", image: "/images/blog/2015-12-30/patient-post-op-visit@2x-6de2a75d.jpg", topic: "Реабилитация", href: "/ru/for-patients/post-op" },
  { date: "Июл 2015", title: "Дисфункция ВНЧС: понятным языком", image: "/images/blog/2015-07-06/tmj-e4c0b47f.jpg", topic: "Обучение", href: "/ru/expertise" },
  { date: "Июн 2015", title: "Приложение Face Touch Up", image: "/images/blog/2015-06-30/app-screenshot-3d4a82b8.jpg", topic: "Технологии", href: "/ru/results" },
  { date: "Июн 2015", title: "Балтийская конференция по ЧЛХ", image: "/images/blog/2015-06-22/baltic-sea-group-photo-1e17f44d.jpg", topic: "Обучение", href: "/ru/media/speaking" },
  { date: "Дек 2014", title: "Лекция в Sacramento Study Clubs", image: "/images/blog/2014-12-05/speaker-dr-antipov-8af6f91c.jpg", topic: "Обучение", href: "/ru/media/speaking" },
];

export default function RuBlog() {
  return (
    <section id="blog" className="py-16 lg:py-20 bg-white" lang="ru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            О хирургии - простыми словами
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Новости, исследования и <span className="gradient-text">обучение</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Статьи доктора Антипова: про импланты, челюстную хирургию, эстетику лица и про то, что нового появилось в челюстно-лицевой хирургии за последнее время.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-light rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              <Link href={post.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold rounded-full">{post.topic}</span>
                  </div>
                  <h3 className="text-sm font-bold text-dark leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
