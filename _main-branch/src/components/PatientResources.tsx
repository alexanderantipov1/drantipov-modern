"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const documents = [
  { name: "Patient Information Form", file: "/documents/patient-information.pdf", size: "2.9 MB" },
  { name: "Health History Form", file: "/documents/health-history.pdf", size: "133 KB" },
  { name: "Practice Guidelines", file: "/documents/practice-guidelines.pdf", size: "49 KB" },
  { name: "Referral Form", file: "/documents/referral.pdf", size: "213 KB" },
  { name: "Privacy Practices", file: "/documents/privacy-practices.pdf", size: "24 KB" },
];

const firstConsultDocs = [
  { name: "Patient Information", file: "/documents/first-consultation/patient-information.pdf" },
  { name: "Health History", file: "/documents/first-consultation/health-history.pdf" },
  { name: "Expectations Form", file: "/documents/first-consultation/expectations-form.pdf" },
  { name: "Consent Form", file: "/documents/first-consultation/consent-form.pdf" },
  { name: "Pre-Op Clearance", file: "/documents/first-consultation/preop-clearance-form.pdf" },
  { name: "Must-Have List", file: "/documents/first-consultation/must-have-list.pdf" },
  { name: "Privacy Acknowledgement", file: "/documents/first-consultation/acknowledgement-of-receipt-of-notice-of-privacy-practices.pdf" },
  { name: "Epworth Sleepiness Scale", file: "/documents/first-consultation/epworth-sleepiness-scale.pdf" },
  { name: "Steps for Ortho Cases", file: "/documents/first-consultation/steps-for-ortho-cases.pdf" },
  { name: "Pre & Post Surgery Form", file: "/documents/first-consultation/pre-and-post-surgery-form.pdf" },
  { name: "Post-Operative Instructions", file: "/documents/first-consultation/postoperative-instructions.pdf" },
];

const books = [
  {
    title: "All-on-4 Dental Implants",
    description: "A comprehensive guide for doctors and patients planning dental implant procedures with immediate loading.",
    image: "/images/books/all-on-4-521-33c9701b.png",
    pdf: "/documents/implants-and-teeth.pdf",
  },
  {
    title: "Orthognathic Surgery",
    description: "Educational resource covering corrective jaw surgery procedures, planning, and expected outcomes.",
    image: "/images/books/orthognathic-surgery-521-6b0f0068.png",
    pdf: "#",
  },
];

export default function PatientResources() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Prepare for Your Visit
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Patient Forms &amp; <span className="gradient-text">Publications</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Save time at your appointment by downloading and completing patient forms in advance. Browse our educational guides on dental implants and orthognathic surgery.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm flex gap-6 items-center hover:shadow-lg transition-shadow duration-500"
            >
              <div className="shrink-0">
                <Image src={book.image} alt={book.title} width={120} height={160} className="rounded-xl shadow-md" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark">{book.title}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">{book.description}</p>
                {book.pdf !== "#" && (
                  <a href={book.pdf} download className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-sm mb-12"
        >
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-bold text-dark">Financing Available</h3>
              <p className="text-muted text-sm mt-2">We offer flexible financing options to make your treatment affordable. Get pre-approved today.</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/financial/approved-da89ebf0.jpg" alt="Approved" width={120} height={60} className="h-12 w-auto rounded-lg" />
              <Image src="/images/financial/lendingclub-a1e29824.jpg" alt="LendingClub" width={120} height={60} className="h-12 w-auto rounded-lg" />
              <Image src="/images/financial/lendingclub-c3b733ce.png" alt="LendingClub" width={120} height={60} className="h-12 w-auto rounded-lg" />
            </div>
          </div>
        </motion.div>

        {/* Document downloads */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-dark mb-4">General Forms</h3>
            <div className="space-y-3">
              {documents.map((doc) => (
                <a key={doc.name} href={doc.file} download className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">{doc.name}</span>
                  </div>
                  <span className="text-xs text-muted">{doc.size}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-dark mb-4">First Consultation Packet</h3>
            <div className="space-y-3">
              {firstConsultDocs.map((doc) => (
                <a key={doc.name} href={doc.file} download className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">{doc.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Invitation / scheduling images */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Image src="/images/invitations/information@2x-2c417502.jpg" alt="Patient Information" width={600} height={200} className="w-full h-auto rounded-2xl" />
          <Image src="/images/invitations/schedule@2x-d30ac039.jpg" alt="Schedule Consultation" width={600} height={200} className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
