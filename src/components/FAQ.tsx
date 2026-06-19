"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const faqs = [
  {
    category: "Dental Implants",
    questions: [
      {
        q: "How much do All-on-4 dental implants cost?",
        a: "The cost of All-on-4 dental implants varies based on your specific needs, whether bone grafting is required, and the prosthetic materials chosen (premium zirconia vs. PMMA acrylic). Dr. Antipov offers free consultations with a complimentary 3D CT scan so you receive an accurate, personalized cost estimate. We offer flexible financing starting at $99/month through multiple lending partners. Contact us for a no-obligation quote.",
      },
      {
        q: "What is the difference between All-on-4 and All-on-6 dental implants?",
        a: "All-on-4 uses four strategically placed titanium implants to support a complete arch of teeth, with posterior implants angled to maximize bone contact and often avoid the need for bone grafting. All-on-6 uses six implants per arch for additional stability and load distribution, which may be recommended for patients with heavier bite forces or those who want enhanced long-term security. Both options provide same-day temporary teeth and permanent results.",
      },
      {
        q: "Can I get teeth in one day with dental implants?",
        a: "Yes. Dr. Antipov specializes in same-day teeth using the immediate-load implant protocol. Your implants are placed and temporary teeth are attached in a single visit, typically within 3-4 hours under comfortable IV sedation. You walk in with missing or failing teeth and leave the same day with a complete set of functional, natural-looking teeth.",
      },
      {
        q: "What are zygomatic implants and who needs them?",
        a: "Zygomatic implants are specialized long implants that anchor into the cheekbone (zygoma) instead of the upper jawbone. They are designed for patients with severe upper jaw bone loss who have been told they cannot receive traditional implants. Zygomatic implants eliminate the need for extensive bone grafting and sinus lift procedures, and can provide same-day teeth in a single surgery.",
      },
      {
        q: "How long do dental implants last?",
        a: "Titanium dental implants integrate permanently with your jawbone through a process called osseointegration and are designed to last a lifetime with proper oral hygiene and routine dental care. The prosthetic teeth (crowns, bridges, or full arches) made from premium zirconia typically last 20+ years. This makes dental implants the most durable tooth replacement option available.",
      },
      {
        q: "Are dental implants better than dentures?",
        a: "Dental implants offer significant advantages over traditional dentures: they are permanently fixed (no slipping or adhesives), preserve jawbone from further deterioration, restore full chewing function (eat any food), look and feel like natural teeth, and last a lifetime. Traditional dentures accelerate bone loss and typically need replacement every 5-7 years. For patients who prefer a removable option, we also offer snap-on dentures (overdentures) that click onto implants for improved stability.",
      },
    ],
  },
  {
    category: "Jaw Surgery & Orthognathic",
    questions: [
      {
        q: "What conditions does corrective jaw surgery treat?",
        a: "Corrective jaw surgery (orthognathic surgery) treats underbite (Class III malocclusion), overbite (Class II malocclusion), open bite, crossbite, facial asymmetry, jaw misalignment, chronic TMJ pain, difficulty chewing or speaking, and obstructive sleep apnea. Dr. Antipov uses 3D computer-guided surgical planning for precise outcomes and performs Le Fort I osteotomy, BSSO, genioplasty, and maxillomandibular advancement.",
      },
      {
        q: "How long is recovery from jaw surgery?",
        a: "Most jaw surgery patients return to work or school within 2-3 weeks. A liquid and soft food diet is followed for 4-6 weeks while the bones heal. Full recovery with complete bone healing typically takes 6-12 weeks. Braces are usually worn before and after surgery in coordination with your orthodontist. Dr. Antipov provides comprehensive post-operative care instructions and closely monitors your healing.",
      },
      {
        q: "Can jaw surgery fix my sleep apnea?",
        a: "Yes. Maxillomandibular advancement (MMA) surgery is one of the most effective surgical treatments for obstructive sleep apnea, with success rates exceeding 90%. By advancing both jaws forward, the airway is permanently enlarged. Dr. Antipov uses 3D planning to precisely position the jaws for optimal airway improvement while maintaining excellent facial aesthetics.",
      },
    ],
  },
  {
    category: "Bone Grafting",
    questions: [
      {
        q: "What is organic or holistic bone grafting?",
        a: "Organic and holistic bone grafting uses minimally processed, naturally derived bone graft materials to rebuild jawbone. Options include autogenous bone (your own), allograft (processed donor bone), and xenograft (bovine or porcine derived). These biocompatible materials support natural bone regeneration without synthetic chemicals, making them ideal for patients who prefer a holistic approach. Dr. Antipov will recommend the best graft type for your specific needs.",
      },
      {
        q: "Do I need bone grafting before dental implants?",
        a: "Not always. Many patients have sufficient bone for immediate implant placement. However, if you've experienced bone loss from tooth extraction, periodontal disease, or prolonged denture wear, bone grafting may be needed to create adequate bone volume. Dr. Antipov evaluates bone density and volume with a 3D CT scan during your free consultation. In some cases, zygomatic implants or tilted All-on-4 implants can avoid the need for grafting altogether.",
      },
    ],
  },
  {
    category: "Facial Cosmetic Surgery",
    questions: [
      {
        q: "What facial cosmetic procedures does Dr. Antipov perform?",
        a: "Dr. Antipov performs rhinoplasty (nose reshaping), rhytidectomy (face lift), upper and lower blepharoplasty (eyelid surgery), Asian double eyelid surgery, facial feminization surgery, scarless mole removal using radio wave technique, Juvederm dermal fillers for wrinkles and volume restoration, lip augmentation, and autologous fat transfer. As a board-certified oral and maxillofacial surgeon, he has an unmatched understanding of facial anatomy.",
      },
      {
        q: "What is scarless mole removal?",
        a: "Scarless mole removal is a minimally invasive technique using radio wave surgery (radiosurgery) to precisely remove moles without traditional cutting or stitches. This advanced method results in minimal scarring, faster healing, and excellent cosmetic outcomes. It is particularly effective for facial moles where cosmetic appearance is a priority.",
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        q: "Does Dr. Antipov offer free consultations?",
        a: "Yes. Every new patient receives a complimentary consultation that includes a 3D cone beam CT scan, thorough examination, personalized treatment plan, and discussion of all financial options — entirely free with no obligation. Virtual video consultations are also available for out-of-town patients.",
      },
      {
        q: "What areas does Dr. Antipov serve?",
        a: "Dr. Antipov's main office is in Roseville, CA. Patients regularly travel from Sacramento, Folsom, Rocklin, El Dorado Hills, Lincoln, Auburn, Granite Bay, Elk Grove, San Francisco, Oakland, San Jose, Walnut Creek, Napa, Santa Rosa, Reno, South Lake Tahoe, Truckee, Chico, Redding, Stockton, Modesto, Fresno, and throughout Northern California and Nevada. Many patients travel 2-3+ hours for specialized procedures like zygomatic implants and orthognathic surgery.",
      },
      {
        q: "What financing options are available?",
        a: "We offer flexible financing through multiple lending partners with options starting at $99/month. We accept CareCredit, most PPO dental insurance plans, HSA and FSA accounts, and offer interest-free payment options. Our team will review all financial options during your free consultation to find a plan that fits your budget.",
      },
      {
        q: "Is IV sedation safe?",
        a: "Yes. IV sedation is extremely safe when administered by trained professionals in a properly equipped surgical facility. Dr. Antipov and his team are certified in IV sedation and general anesthesia, and our surgical suites are equipped with continuous monitoring equipment. Most patients describe IV sedation as falling asleep peacefully and waking up with the procedure already complete.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-dark/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <h3 className="text-sm sm:text-base font-semibold text-dark group-hover:text-primary transition-colors pr-4">
          {q}
        </h3>
        <svg
          className={`w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted text-sm leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Dental Implants");

  const activeFaq = faqs.find((f) => f.category === activeCategory)!;

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Answers to Your
            <br />
            <span className="gradient-text">Most Common Questions</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Find answers about dental implants, All-on-4, zygomatic implants, jaw surgery, bone grafting, facial cosmetic procedures, costs, financing, and more.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-light rounded-2xl p-1.5 flex-wrap gap-1 justify-center">
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.category
                    ? "bg-primary text-white shadow-md"
                    : "text-muted hover:text-dark"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Questions */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-light rounded-3xl p-6 sm:p-8"
        >
          {activeFaq.questions.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-muted text-sm mb-4">
            Still have questions? We&apos;re happy to help.
          </p>
          <ConsultationModal>
            <button
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              Ask Dr. Antipov — Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ConsultationModal>
        </motion.div>
      </div>
    </section>
  );
}
