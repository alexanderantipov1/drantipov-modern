"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
  {
    name: "Roseville, CA",
    address: "911 Reserve Dr, Suite 150\nRoseville, CA 95678",
    phone: "(916) 790-9693",
    image: "/images/locations/roseville-c84b8e17.jpg",
    primary: true,
  },
  {
    name: "San Francisco, CA",
    address: "San Francisco Bay Area",
    phone: "(916) 790-9693",
    image: "/images/locations/san-francisco-0625308b.jpg",
    primary: false,
  },
  {
    name: "Virtual Consultation",
    address: "Available worldwide\nvia secure video call",
    phone: "(916) 790-9693",
    image: "/images/locations/virtual-consultation-e7315116.jpg",
    primary: false,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Conveniently Located
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Visit Our <span className="gradient-text">Offices</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Our main practice is in Roseville, CA, with an additional location in the San Francisco Bay Area. Virtual consultations are available for patients anywhere in the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={loc.image} alt={loc.name} fill className="object-cover" />
                {loc.primary && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Main Office
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark">{loc.name}</h3>
                <p className="text-muted text-sm mt-2 whitespace-pre-line">{loc.address}</p>
                <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {loc.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional location image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl overflow-hidden"
        >
          <Image src="/images/locations/locations-8be94cf8.jpg" alt="Dr. Antipov oral surgery offices — Roseville, Sacramento, and San Francisco Bay Area" width={1400} height={400} className="w-full h-48 object-cover rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
