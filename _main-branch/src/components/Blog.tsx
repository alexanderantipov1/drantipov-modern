"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  { date: "Oct 2017", title: "All-on-Four Dental Implants", image: "/images/blog/2017-10-27/all-on-four@2x-f49f2f89.jpg", topic: "Dental Implants", href: "/expertise/full-arch-implants" },
  { date: "Oct 2017", title: "Facial Feminization Surgery", image: "/images/blog/2017-10-17/feminization@2x-532b991f.jpg", topic: "Facial Surgery", href: "/surgical-cases/facial-cosmetic-surgery" },
  { date: "Oct 2017", title: "Botox & Dermal Fillers", image: "/images/blog/2017-10-16/botox@2x-d599eae3.jpg", topic: "Cosmetic", href: "/surgical-cases/facial-cosmetic-surgery" },
  { date: "Aug 2017", title: "Rhinoplasty Procedures", image: "/images/blog/2017-08-10/rhinoplasty@2x-089d0e54.jpg", topic: "Facial Surgery", href: "/surgical-cases/facial-cosmetic-surgery" },
  { date: "Jun 2017", title: "BSCOSO Summer Course", image: "/images/blog/2017-06-12/2017-bscoso-summer-course@2x-da40cb05.jpg", topic: "Education", href: "/for-dentists/education/courses" },
  { date: "Jun 2016", title: "Oral Cancer Awareness", image: "/images/blog/2016-06-28/oral-cancer@2x-28244f52.jpg", topic: "Health", href: "/for-patients/insights/poor-oral-health-systemic-diseases" },
  { date: "May 2016", title: "Wisdom Teeth: What You Should Know", image: "/images/blog/2016-05-04/wisdom-teeth@2x-09b09b12.jpg", topic: "Oral Surgery", href: "/expertise/wisdom-teeth" },
  { date: "Dec 2015", title: "Post-Op Patient Recovery", image: "/images/blog/2015-12-30/patient-post-op-visit@2x-6de2a75d.jpg", topic: "Patient Care", href: "/for-patients/post-op" },
  { date: "Jul 2015", title: "TMJ Disorders Explained", image: "/images/blog/2015-07-06/tmj-e4c0b47f.jpg", topic: "Education", href: "/expertise/tmj" },
  { date: "Jun 2015", title: "Face Touch Up App", image: "/images/blog/2015-06-30/app-screenshot-3d4a82b8.jpg", topic: "Technology", href: "/results" },
  { date: "Jun 2015", title: "Baltic Sea Oral Surgery Conference", image: "/images/blog/2015-06-22/baltic-sea-group-photo-1e17f44d.jpg", topic: "Education", href: "/media/speaking" },
  { date: "Dec 2014", title: "Sacramento Study Clubs Speaker", image: "/images/blog/2014-12-05/speaker-dr-antipov-8af6f91c.jpg", topic: "Education", href: "/media/speaking" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Oral Surgery Insights
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            News, Research &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Stay informed with articles on dental implants, jaw surgery, facial cosmetic procedures, and the latest advances in oral and maxillofacial surgery from Dr. Antipov.
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
