"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

/* ───────────────────────────────────────────
   All cities within 3.5-hour drive of Roseville, CA
   organized by region for maximum local SEO coverage
   ─────────────────────────────────────────── */

interface City {
  name: string;
  drive: string;
}

interface Region {
  label: string;
  id: string;
  cities: City[];
}

const regions: Region[] = [
  {
    label: "Sacramento Metro",
    id: "sacramento",
    cities: [
      { name: "Roseville", drive: "Main Office" },
      { name: "Sacramento", drive: "20 min" },
      { name: "Folsom", drive: "20 min" },
      { name: "Rocklin", drive: "8 min" },
      { name: "Lincoln", drive: "15 min" },
      { name: "Granite Bay", drive: "10 min" },
      { name: "Citrus Heights", drive: "10 min" },
      { name: "Orangevale", drive: "12 min" },
      { name: "Fair Oaks", drive: "15 min" },
      { name: "Carmichael", drive: "15 min" },
      { name: "Rancho Cordova", drive: "20 min" },
      { name: "Elk Grove", drive: "35 min" },
      { name: "North Highlands", drive: "12 min" },
      { name: "Antelope", drive: "10 min" },
      { name: "Arden-Arcade", drive: "15 min" },
      { name: "West Sacramento", drive: "25 min" },
      { name: "El Dorado Hills", drive: "20 min" },
      { name: "Cameron Park", drive: "25 min" },
      { name: "Loomis", drive: "12 min" },
      { name: "Auburn", drive: "25 min" },
      { name: "Woodland", drive: "25 min" },
      { name: "Davis", drive: "30 min" },
      { name: "Placerville", drive: "40 min" },
      { name: "Galt", drive: "40 min" },
    ],
  },
  {
    label: "Yuba-Sutter & Butte County",
    id: "yuba-butte",
    cities: [
      { name: "Yuba City", drive: "40 min" },
      { name: "Marysville", drive: "35 min" },
      { name: "Wheatland", drive: "25 min" },
      { name: "Live Oak", drive: "50 min" },
      { name: "Gridley", drive: "55 min" },
      { name: "Oroville", drive: "1 hr 10 min" },
      { name: "Chico", drive: "1 hr 30 min" },
      { name: "Paradise", drive: "1 hr 35 min" },
      { name: "Grass Valley", drive: "50 min" },
      { name: "Nevada City", drive: "55 min" },
      { name: "Colfax", drive: "35 min" },
    ],
  },
  {
    label: "North State & Shasta County",
    id: "north-state",
    cities: [
      { name: "Redding", drive: "2 hr 40 min" },
      { name: "Anderson", drive: "2 hr 30 min" },
      { name: "Shasta Lake", drive: "2 hr 45 min" },
      { name: "Red Bluff", drive: "2 hr 10 min" },
      { name: "Corning", drive: "2 hr" },
      { name: "Willows", drive: "1 hr 40 min" },
      { name: "Orland", drive: "1 hr 50 min" },
      { name: "Colusa", drive: "1 hr 10 min" },
      { name: "Williams", drive: "1 hr" },
    ],
  },
  {
    label: "Lake Tahoe & Sierra",
    id: "tahoe-sierra",
    cities: [
      { name: "Truckee", drive: "1 hr 30 min" },
      { name: "Tahoe City", drive: "1 hr 40 min" },
      { name: "Kings Beach", drive: "1 hr 45 min" },
      { name: "South Lake Tahoe", drive: "2 hr 10 min" },
      { name: "Incline Village, NV", drive: "1 hr 50 min" },
      { name: "Jackson", drive: "1 hr" },
      { name: "Sutter Creek", drive: "1 hr" },
      { name: "Angels Camp", drive: "1 hr 30 min" },
      { name: "Sonora", drive: "1 hr 50 min" },
    ],
  },
  {
    label: "Reno & Northern Nevada",
    id: "reno-nevada",
    cities: [
      { name: "Reno, NV", drive: "2 hr 10 min" },
      { name: "Sparks, NV", drive: "2 hr 15 min" },
      { name: "Carson City, NV", drive: "2 hr 30 min" },
      { name: "Fernley, NV", drive: "2 hr 45 min" },
      { name: "Dayton, NV", drive: "2 hr 40 min" },
      { name: "Minden, NV", drive: "2 hr 45 min" },
      { name: "Gardnerville, NV", drive: "2 hr 50 min" },
      { name: "Fallon, NV", drive: "3 hr 10 min" },
      { name: "Sun Valley, NV", drive: "2 hr 20 min" },
    ],
  },
  {
    label: "San Francisco & Peninsula",
    id: "sf-peninsula",
    cities: [
      { name: "San Francisco", drive: "1 hr 45 min" },
      { name: "Daly City", drive: "1 hr 50 min" },
      { name: "South San Francisco", drive: "1 hr 50 min" },
      { name: "San Bruno", drive: "1 hr 55 min" },
      { name: "Millbrae", drive: "1 hr 55 min" },
      { name: "Burlingame", drive: "2 hr" },
      { name: "San Mateo", drive: "2 hr" },
      { name: "Foster City", drive: "2 hr" },
      { name: "Redwood City", drive: "2 hr 10 min" },
      { name: "Menlo Park", drive: "2 hr 10 min" },
      { name: "Pacifica", drive: "2 hr" },
      { name: "Half Moon Bay", drive: "2 hr 15 min" },
    ],
  },
  {
    label: "East Bay & Contra Costa",
    id: "east-bay",
    cities: [
      { name: "Oakland", drive: "1 hr 30 min" },
      { name: "Berkeley", drive: "1 hr 25 min" },
      { name: "Concord", drive: "1 hr 15 min" },
      { name: "Walnut Creek", drive: "1 hr 20 min" },
      { name: "Richmond", drive: "1 hr 15 min" },
      { name: "Antioch", drive: "1 hr 10 min" },
      { name: "Pittsburg", drive: "1 hr 15 min" },
      { name: "Brentwood", drive: "1 hr 10 min" },
      { name: "San Ramon", drive: "1 hr 30 min" },
      { name: "Danville", drive: "1 hr 25 min" },
      { name: "Pleasanton", drive: "1 hr 35 min" },
      { name: "Livermore", drive: "1 hr 30 min" },
      { name: "Dublin", drive: "1 hr 30 min" },
      { name: "Hayward", drive: "1 hr 40 min" },
      { name: "Fremont", drive: "1 hr 50 min" },
      { name: "Union City", drive: "1 hr 45 min" },
      { name: "Newark", drive: "1 hr 50 min" },
      { name: "San Leandro", drive: "1 hr 35 min" },
      { name: "Vallejo", drive: "1 hr 10 min" },
      { name: "Benicia", drive: "1 hr 10 min" },
      { name: "Martinez", drive: "1 hr 10 min" },
      { name: "Hercules", drive: "1 hr 10 min" },
      { name: "Lafayette", drive: "1 hr 20 min" },
    ],
  },
  {
    label: "South Bay & Silicon Valley",
    id: "south-bay",
    cities: [
      { name: "San Jose", drive: "2 hr 20 min" },
      { name: "Santa Clara", drive: "2 hr 20 min" },
      { name: "Sunnyvale", drive: "2 hr 15 min" },
      { name: "Mountain View", drive: "2 hr 15 min" },
      { name: "Palo Alto", drive: "2 hr 10 min" },
      { name: "Cupertino", drive: "2 hr 20 min" },
      { name: "Campbell", drive: "2 hr 25 min" },
      { name: "Los Gatos", drive: "2 hr 30 min" },
      { name: "Saratoga", drive: "2 hr 30 min" },
      { name: "Milpitas", drive: "2 hr" },
      { name: "Los Altos", drive: "2 hr 15 min" },
      { name: "Morgan Hill", drive: "2 hr 40 min" },
      { name: "Gilroy", drive: "2 hr 50 min" },
    ],
  },
  {
    label: "Napa, Sonoma & North Bay",
    id: "north-bay",
    cities: [
      { name: "Napa", drive: "1 hr 10 min" },
      { name: "American Canyon", drive: "1 hr 10 min" },
      { name: "St. Helena", drive: "1 hr 25 min" },
      { name: "Sonoma", drive: "1 hr 20 min" },
      { name: "Petaluma", drive: "1 hr 30 min" },
      { name: "Santa Rosa", drive: "1 hr 40 min" },
      { name: "Rohnert Park", drive: "1 hr 35 min" },
      { name: "Windsor", drive: "1 hr 50 min" },
      { name: "Healdsburg", drive: "1 hr 55 min" },
      { name: "Sebastopol", drive: "1 hr 50 min" },
      { name: "Cloverdale", drive: "2 hr 10 min" },
      { name: "Novato", drive: "1 hr 25 min" },
      { name: "San Rafael", drive: "1 hr 35 min" },
      { name: "Mill Valley", drive: "1 hr 45 min" },
      { name: "Sausalito", drive: "1 hr 45 min" },
      { name: "Tiburon", drive: "1 hr 45 min" },
      { name: "Ukiah", drive: "2 hr 30 min" },
      { name: "Clearlake", drive: "2 hr 10 min" },
      { name: "Lakeport", drive: "2 hr 15 min" },
    ],
  },
  {
    label: "Solano & Yolo County",
    id: "solano-yolo",
    cities: [
      { name: "Vacaville", drive: "50 min" },
      { name: "Fairfield", drive: "55 min" },
      { name: "Suisun City", drive: "55 min" },
      { name: "Dixon", drive: "35 min" },
    ],
  },
  {
    label: "San Joaquin Valley",
    id: "san-joaquin",
    cities: [
      { name: "Stockton", drive: "1 hr 10 min" },
      { name: "Lodi", drive: "50 min" },
      { name: "Tracy", drive: "1 hr 20 min" },
      { name: "Manteca", drive: "1 hr 15 min" },
      { name: "Lathrop", drive: "1 hr 15 min" },
      { name: "Ripon", drive: "1 hr 20 min" },
    ],
  },
  {
    label: "Central Valley South",
    id: "central-valley",
    cities: [
      { name: "Modesto", drive: "1 hr 30 min" },
      { name: "Turlock", drive: "1 hr 50 min" },
      { name: "Ceres", drive: "1 hr 40 min" },
      { name: "Oakdale", drive: "1 hr 35 min" },
      { name: "Riverbank", drive: "1 hr 30 min" },
      { name: "Patterson", drive: "1 hr 45 min" },
      { name: "Merced", drive: "2 hr 10 min" },
      { name: "Atwater", drive: "2 hr 5 min" },
      { name: "Los Banos", drive: "2 hr 15 min" },
      { name: "Madera", drive: "2 hr 30 min" },
      { name: "Fresno", drive: "2 hr 50 min" },
      { name: "Clovis", drive: "2 hr 55 min" },
      { name: "Sanger", drive: "3 hr" },
      { name: "Selma", drive: "3 hr 10 min" },
      { name: "Dinuba", drive: "3 hr 20 min" },
      { name: "Hollister", drive: "2 hr 50 min" },
      { name: "Santa Cruz", drive: "3 hr 10 min" },
      { name: "Watsonville", drive: "3 hr 20 min" },
    ],
  },
];

const totalCities = regions.reduce((acc, r) => acc + r.cities.length, 0);

/* ───────────────────────────────────────────
   SEO keyword-rich service descriptions
   ─────────────────────────────────────────── */

const services = [
  {
    title: "Full Arch Dental Implants",
    aka: "All-on-4 / All-on-6 Implants",
    description:
      "Permanently replace an entire arch of missing or failing teeth in a single visit. Our full arch dental implant procedure uses four to six strategically placed titanium implants to support a fixed, non-removable bridge — giving you a complete, natural-looking smile the same day.",
    keywords: [
      "Full Arch Dental Implants",
      "All-on-4 Implants",
      "All-on-6 Implants",
      "Full Mouth Dental Implants",
      "Permanent Teeth in One Day",
      "Fixed Implant Bridge",
      "Same-Day Teeth",
      "Teeth in a Day",
    ],
  },
  {
    title: "Organic & Holistic Bone Grafting",
    aka: "Biocompatible Bone Regeneration",
    description:
      "Dr. Antipov offers organic and holistic bone grafting solutions using biocompatible, minimally processed human donor tissue and advanced growth factors. Unlike synthetic alternatives, our organic bone grafts integrate naturally with your existing bone, creating a strong foundation for dental implant placement — even in patients with significant bone loss.",
    keywords: [
      "Organic Bone Graft",
      "Holistic Bone Grafting",
      "Natural Bone Graft",
      "Biocompatible Bone Graft",
      "Bone Graft for Dental Implants",
      "Bone Regeneration",
      "Sinus Lift",
      "Ridge Augmentation",
    ],
  },
  {
    title: "Full Mouth Restoration",
    aka: "Complete Smile Reconstruction",
    description:
      "For patients with extensive dental damage, decay, or tooth loss, our full mouth restoration combines dental implants, bone grafting, and prosthetic design to completely rebuild your smile. Dr. Antipov uses cone beam CT imaging and computer-guided surgical planning to deliver predictable, life-changing results.",
    keywords: [
      "Full Mouth Restoration",
      "Smile Reconstruction",
      "Full Mouth Rehabilitation",
      "Implant-Supported Dentures",
      "Snap-In Dentures Alternative",
      "Permanent Dentures",
      "Fixed Dentures",
      "Dental Implants vs Dentures",
    ],
  },
  {
    title: "Immediate Load Implants",
    aka: "Same-Day Smile / Teeth in 24 Hours",
    description:
      "Walk in with missing teeth and walk out with a brand-new smile — all in a single appointment. Our immediate load implant protocol allows Dr. Antipov to place implants and attach fully functional temporary teeth the same day, eliminating the months-long wait associated with traditional implant procedures.",
    keywords: [
      "Immediate Load Implants",
      "Same-Day Dental Implants",
      "Teeth in 24 Hours",
      "One-Day Dental Implants",
      "New Teeth in One Day",
      "Immediate Dental Implants",
      "Same-Day Smile",
      "New Smile in One Day",
    ],
  },
];

export default function ServiceArea() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [showAllRegions, setShowAllRegions] = useState(false);

  const visibleRegions = showAllRegions ? regions : regions.slice(0, 6);

  return (
    <section id="service-area" className="py-24 lg:py-32 bg-white overflow-hidden">
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
            Serving {totalCities}+ Cities Across California &amp; Nevada
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Full Arch Dental Implants &amp;
            <br />
            <span className="gradient-text">Oral Surgery Near You</span>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Dr. Alexander Antipov provides full arch dental implants, organic bone grafting, corrective jaw surgery, and facial cosmetic procedures to patients across Northern California and Northern Nevada. Our main office in Roseville, CA is within a 3.5-hour drive of over {totalCities} cities — from Redding to Fresno, San Francisco to Reno.
          </p>
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-lg mb-16"
        >
          <div className="aspect-[16/9] lg:aspect-[21/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1587641.685!2d-121.6!3d38.5!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b21be18b42a5d%3A0xca7b5e7f1780a5e5!2s911%20Reserve%20Dr%20%23150%2C%20Roseville%2C%20CA%2095678!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&z=7"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Antipov service area — full arch dental implants serving Roseville, Sacramento, San Francisco, Reno, Fresno, and 180+ cities across Northern California and Nevada"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {/* Map overlay info card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass rounded-2xl p-4 sm:p-6 max-w-sm shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-dark text-sm">3.5-Hour Service Radius</p>
                <p className="text-muted text-xs">{totalCities}+ cities &bull; 2 states &bull; 12M+ residents</p>
              </div>
            </div>
            <p className="text-muted text-xs leading-relaxed">
              Main Office: 911 Reserve Dr, Suite 150, Roseville, CA 95678
            </p>
          </div>
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
            Procedures Available at Our <span className="gradient-text">Roseville Office</span>
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
                  {svc.keywords.map((kw) => (
                    <span
                      key={kw}
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

        {/* City regions grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-dark">
              Cities We Serve for <span className="gradient-text">Dental Implants &amp; Oral Surgery</span>
            </h3>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Patients travel from across Northern California and Nevada for Dr. Antipov&apos;s expertise in full arch dental implants, organic bone grafting, and corrective jaw surgery. Find your city below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleRegions.map((region) => {
              const isExpanded = expandedRegion === region.id;
              const displayCities = isExpanded ? region.cities : region.cities.slice(0, 6);
              const hasMore = region.cities.length > 6;

              return (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-light rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h4 className="font-bold text-dark text-sm">{region.label}</h4>
                    <span className="ml-auto text-[11px] text-muted bg-white px-2 py-0.5 rounded-full">
                      {region.cities.length} cities
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {displayCities.map((city) => (
                      <li key={city.name} className="flex items-center justify-between text-sm">
                        <span className="text-dark font-medium">{city.name}</span>
                        <span className={`text-xs ${city.drive === "Main Office" ? "text-primary font-semibold" : "text-muted"}`}>
                          {city.drive}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {hasMore && (
                    <button
                      onClick={() => setExpandedRegion(isExpanded ? null : region.id)}
                      className="mt-3 text-primary text-xs font-semibold hover:underline"
                    >
                      {isExpanded
                        ? "Show less"
                        : `+ ${region.cities.length - 6} more cities`}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {!showAllRegions && regions.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllRegions(true)}
                className="px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Show All {regions.length} Regions ({totalCities}+ Cities)
              </button>
            </div>
          )}

          {showAllRegions && regions.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllRegions(false)}
                className="px-8 py-3.5 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Show Fewer Regions
              </button>
            </div>
          )}
        </motion.div>

        {/* SEO-rich bottom content — long-form keyword text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="section-divider mb-12" />
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Why Patients Choose Dr. Antipov for <span className="gradient-text">Full Arch Dental Implants</span>
          </h3>
          <div className="prose prose-lg text-muted leading-relaxed space-y-6">
            <p>
              If you are searching for <strong>full arch dental implants near me</strong>, <strong>All-on-4 dental implants</strong>, or a <strong>same-day teeth procedure</strong> in Northern California or Nevada, Dr. Alexander Antipov&apos;s practice in Roseville, CA offers the expertise, technology, and results you deserve. With over 25 years of experience and more than 10,000 patients treated, Dr. Antipov is one of the most experienced oral and maxillofacial surgeons in the region for <strong>full mouth dental implant restoration</strong>.
            </p>
            <p>
              Unlike dental implant centers that rely on general dentists, Dr. Antipov is a <strong>board-certified oral and maxillofacial surgeon</strong> who personally performs every procedure — from the initial <strong>cone beam CT scan</strong> and treatment planning to implant placement, <strong>organic bone grafting</strong>, and final prosthetic delivery. This means your entire treatment stays under one roof with one surgeon, eliminating the complexity of being referred between multiple providers.
            </p>
            <p>
              Our <strong>organic and holistic bone grafting</strong> program sets us apart from other implant centers. We use biocompatible, minimally processed human donor tissue combined with advanced platelet-rich growth factors to naturally regenerate bone in the jaw. This approach is ideal for patients who prefer <strong>natural bone graft materials</strong> over synthetic alternatives, or for those with <strong>severe bone loss</strong> who have been told they are not candidates for dental implants elsewhere.
            </p>
            <p>
              Patients travel to our Roseville office from <strong>Sacramento, San Francisco, Oakland, San Jose, Reno, Stockton, Modesto, Fresno, Redding, Chico, Napa, Santa Rosa</strong>, and over 180 other cities across California and Nevada. We offer <strong>free consultations</strong> that include a complimentary cone beam CT scan, a personalized treatment plan, and a review of your financing options — all at no cost or obligation.
            </p>
            <p>
              Whether you need <strong>full arch dental implants</strong>, <strong>All-on-4 or All-on-6 implant-supported teeth</strong>, <strong>immediate load same-day implants</strong>, <strong>holistic bone grafting</strong>, <strong>corrective jaw surgery</strong>, or <strong>wisdom teeth removal</strong>, Dr. Antipov and his team deliver life-changing results with the precision and care that only a board-certified oral surgeon can provide. <strong>Dental implant financing</strong> is available through multiple lending partners, making treatment accessible regardless of budget.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <ConsultationModal>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Your Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </ConsultationModal>
            <p className="mt-4 text-muted text-sm">
              Free CT scan included &bull; No obligation &bull; Financing available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
