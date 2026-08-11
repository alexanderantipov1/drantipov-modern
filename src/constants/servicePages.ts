/**
 * Data-driven service pages for the additive /expertise/* expansion.
 *
 * Every entry here is grounded strictly in docs/dr-antipov-basic-info.md plus
 * general, factual medical explanation of the named procedure. No invented
 * statistics, prices, or outcome claims.
 *
 * Rendered by src/components/expertise/ServicePageTemplate.tsx. Adding a new
 * service = adding a row here + a thin route file under src/app/expertise/<slug>.
 */

export interface ServiceCardItem {
  title: string;
  description: string;
}

export interface ServiceContentSection {
  heading: string;
  lead?: string;
  cards: ServiceCardItem[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceRelatedLink {
  label: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  breadcrumbName: string;
  /** schema.org MedicalProcedure inputs */
  procedureName: string;
  procedureDescription: string;
  procedureType:
    | "https://schema.org/SurgicalProcedure"
    | "https://schema.org/TherapeuticProcedure"
    | "https://schema.org/DiagnosticProcedure";
  /** answer-first lead block */
  answerHeading: string;
  answer: string[];
  sections: ServiceContentSection[];
  faqs: ServiceFaq[];
  relatedLinks: ServiceRelatedLink[];
}

export const servicePages = {
  "tooth-extractions": {
    slug: "tooth-extractions",
    badge: "Surgical & Simple Extractions",
    heroTitle: "Tooth extractions — gentle removal, expert hands",
    heroSubtitle:
      "From straightforward extractions to deeply impacted molars and canines, Dr. Antipov removes teeth safely with sedation options for anxious patients — and plans every site for what comes next.",
    heroImage: "/images/procedures/extractions-1896b4c1.jpg",
    metaTitle: "Tooth Extractions | Roseville, CA",
    metaDescription:
      "Expert tooth extractions in Roseville, CA for simple & surgical cases. Simple extractions, impacted teeth, orthodontic exposure & gentle sedation options.",
    ogImage: "/images/procedures/extractions-1896b4c1.jpg",
    breadcrumbName: "Tooth Extractions",
    procedureName: "Tooth Extraction",
    procedureDescription:
      "Simple and surgical removal of teeth, including impacted molars and canines, by a board-certified oral and maxillofacial surgeon.",
    procedureType: "https://schema.org/SurgicalProcedure",
    answerHeading: "What does an oral surgeon do for a tooth extraction?",
    answer: [
      "An oral and maxillofacial surgeon removes teeth that are damaged, infected, impacted, or in the way of other treatment — and does it with surgical precision when a tooth is broken at the gumline, has curved roots, or is buried in bone. Dr. Antipov performs simple extractions, surgical extractions, and the removal of impacted molars and canines, with oral, nitrous, or IV sedation available for patients who feel anxious.",
      "Because Dr. Antipov is also a full-arch implant surgeon, he plans every extraction with the future in mind — preserving bone and tissue so that an implant, bridge, or denture can be placed cleanly later if you need one.",
    ],
    sections: [
      {
        heading: "When an extraction is recommended",
        cards: [
          {
            title: "Impacted molars & canines",
            description:
              "Teeth trapped in bone or under the gum that cannot erupt normally — removed surgically to prevent infection, cysts, and damage to neighboring teeth.",
          },
          {
            title: "Severely broken or decayed teeth",
            description:
              "Teeth fractured below the gumline or destroyed by decay beyond what a crown or root canal can save.",
          },
          {
            title: "Infection or abscess",
            description:
              "Teeth with persistent infection that has not responded to other treatment and threatens surrounding bone.",
          },
          {
            title: "Pre-implant or pre-denture preparation",
            description:
              "Removing non-restorable teeth as the first step toward dental implants, full-arch restoration, or dentures.",
          },
        ],
      },
      {
        heading: "Exposed-canine surgery for orthodontics",
        lead: "Dr. Antipov works with orthodontists across the region who refer adults and children for exposed-bone surgery to retrieve impacted canine teeth so they can be guided into place with braces.",
        cards: [
          {
            title: "Impacted canine exposure",
            description:
              "Surgically uncovering an impacted canine and attaching an orthodontic bracket so your orthodontist can move it into the arch.",
          },
          {
            title: "Coordinated with your orthodontist",
            description:
              "Timing and technique are planned together with your orthodontic treatment for a smooth, predictable result.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will the extraction hurt?",
        answer:
          "The area is fully numbed before any work begins, so you should not feel pain during the procedure. For anxious patients or more involved surgical extractions, Dr. Antipov offers oral sedation, nitrous oxide, and IV sedation so the experience is comfortable.",
      },
      {
        question: "What is the difference between a simple and a surgical extraction?",
        answer:
          "A simple extraction removes a tooth that is fully visible and can be loosened and lifted out. A surgical extraction is needed when a tooth is broken at the gumline, impacted, or has complex roots — it may involve a small incision and, sometimes, sectioning the tooth for gentle removal.",
      },
      {
        question: "Can I be sedated for my extraction?",
        answer:
          "Yes. Dr. Antipov holds a California General Anesthesia Permit and provides oral sedation, nitrous oxide, and IV sedation in-office, which is especially helpful for fearful patients and for the removal of impacted teeth.",
      },
      {
        question: "Will I need an implant after the tooth is removed?",
        answer:
          "Not always, but if you do, planning ahead matters. Dr. Antipov preserves bone and tissue during the extraction so that a future implant, bridge, or denture can be placed in the best possible foundation.",
      },
    ],
    relatedLinks: [
      { label: "Wisdom Teeth Removal", href: "/expertise/wisdom-teeth" },
      { label: "Sedation & Anesthesia", href: "/expertise/sedation-anesthesia" },
      { label: "Single Tooth Implants", href: "/expertise/single-tooth" },
      { label: "Bone Grafting", href: "/expertise/bone-grafting" },
      { label: "Oral Pathology & Biopsy", href: "/expertise/oral-pathology" },
    ],
  },

  "sedation-anesthesia": {
    slug: "sedation-anesthesia",
    badge: "Comfort & Sedation Options",
    heroTitle: "Sedation & anesthesia — comfortable, controlled, in-office",
    heroSubtitle:
      "From light relaxation to full general anesthesia, Dr. Antipov tailors sedation to your procedure and your comfort level — performed in-office under a California General Anesthesia Permit.",
    heroImage: "/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg",
    metaTitle: "Sedation & Anesthesia | Roseville, CA",
    metaDescription:
      "Oral sedation, nitrous oxide, IV sedation, and general anesthesia for oral surgery in Roseville, CA. Comfortable, in-office care for anxious patients.",
    ogImage: "/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg",
    breadcrumbName: "Sedation & Anesthesia",
    procedureName: "Sedation and Anesthesia for Oral Surgery",
    procedureDescription:
      "Oral sedation, nitrous oxide, IV sedation, and general anesthesia administered in-office for oral and maxillofacial surgery.",
    procedureType: "https://schema.org/TherapeuticProcedure",
    answerHeading: "What sedation options are available for oral surgery?",
    answer: [
      "Dr. Antipov offers a full range of sedation so that any procedure — from a single extraction to full-arch implant surgery — can be done comfortably. Options include oral sedation (a pill that helps you relax), nitrous oxide (laughing gas), and IV sedation up to general anesthesia, where you sleep through the procedure entirely.",
      "All sedation is provided in-office under Dr. Antipov's California General Anesthesia Permit, which means your surgery and your anesthesia are managed by one experienced surgical team in a single, monitored setting.",
    ],
    sections: [
      {
        heading: "Levels of sedation",
        cards: [
          {
            title: "Oral sedation",
            description:
              "A prescribed medication taken before your appointment to ease anxiety and help you feel calm and drowsy while remaining responsive.",
          },
          {
            title: "Nitrous oxide",
            description:
              "Laughing gas inhaled through a small mask for gentle, fast-acting relaxation that wears off quickly after the procedure.",
          },
          {
            title: "IV sedation",
            description:
              "Medication delivered intravenously for a deeper, carefully titrated level of sedation — many patients have little or no memory of the procedure.",
          },
          {
            title: "General anesthesia",
            description:
              "For the most involved surgeries, full general anesthesia lets you sleep through the entire procedure, monitored throughout by the surgical team.",
          },
        ],
      },
      {
        heading: "Who benefits most",
        cards: [
          {
            title: "Anxious or fearful patients",
            description:
              "Dental fear is common and treatable. Sedation makes it possible to get necessary care comfortably and without dread.",
          },
          {
            title: "Complex or longer procedures",
            description:
              "Impacted teeth, full-arch implants, and corrective jaw surgery are easier on patients with appropriate sedation.",
          },
          {
            title: "Strong gag reflex or difficulty getting numb",
            description:
              "Sedation helps patients who struggle with traditional in-chair treatment tolerate care comfortably.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is in-office sedation safe?",
        answer:
          "Sedation is very safe when administered and monitored by a properly credentialed surgeon. Dr. Antipov holds a California General Anesthesia Permit and has more than 25 years of experience providing in-office sedation and anesthesia for oral surgery.",
      },
      {
        question: "Will I be completely asleep?",
        answer:
          "That depends on the option you choose. Oral sedation and nitrous oxide keep you relaxed but awake; IV sedation and general anesthesia range from a deep, dreamlike state to full sleep through the procedure. Dr. Antipov recommends the right level for your treatment and comfort.",
      },
      {
        question: "Can I drive myself home afterward?",
        answer:
          "If you have IV sedation or general anesthesia, you will need a responsible adult to drive you home and stay with you. After nitrous oxide alone, most patients recover quickly and can resume normal activity.",
      },
      {
        question: "How should I prepare for sedation?",
        answer:
          "You will receive specific instructions before your appointment, which usually include fasting for a set period beforehand and arranging a ride home for deeper sedation. Tell Dr. Antipov about all medications and health conditions so your plan is tailored to you.",
      },
    ],
    relatedLinks: [
      { label: "Wisdom Teeth Removal", href: "/expertise/wisdom-teeth" },
      { label: "Tooth Extractions", href: "/expertise/tooth-extractions" },
      { label: "Full-Arch Implants", href: "/expertise/full-arch-implants" },
    ],
  },

  "zygomatic-implants": {
    slug: "zygomatic-implants",
    badge: "Advanced Implant Anchorage",
    heroTitle: "Zygomatic & pterygoid implants — teeth when bone is severely lost",
    heroSubtitle:
      "When the upper jaw lacks the bone for standard implants, zygomatic and pterygoid implants anchor a full set of teeth in stronger bone — often avoiding lengthy grafting.",
    heroImage: "/images/dental-implants/multiple-implants@2x-9fd6ae22.jpg",
    metaTitle: "Zygomatic & Pterygoid Implants | Roseville, CA",
    metaDescription:
      "Zygomatic and pterygoid dental implants in Roseville, CA for severe upper-jaw bone loss. Anchor a full arch in strong bone, often without extensive grafting.",
    ogImage: "/images/dental-implants/multiple-implants@2x-9fd6ae22.jpg",
    breadcrumbName: "Zygomatic & Pterygoid Implants",
    procedureName: "Zygomatic Implant Surgery",
    procedureDescription:
      "Placement of zygomatic and pterygoid dental implants to support a full-arch restoration in patients with severe upper-jaw bone loss.",
    procedureType: "https://schema.org/SurgicalProcedure",
    answerHeading: "What are zygomatic implants?",
    answer: [
      "Zygomatic implants are longer dental implants anchored in the dense cheekbone (the zygoma) rather than the upper jaw. They are designed for patients who have lost so much upper-jaw bone that standard implants would not hold — a situation that often otherwise requires extensive bone grafting and many months of healing.",
      "Dr. Antipov also uses pterygoid implants, which anchor toward the back of the upper jaw, to support a full arch where back teeth are needed. For the right patient, these advanced techniques can mean a fixed set of teeth without years of staged grafting.",
    ],
    sections: [
      {
        heading: "When zygomatic or pterygoid implants help",
        cards: [
          {
            title: "Severe upper-jaw bone loss",
            description:
              "When long-term tooth loss, gum disease, or failed implants have left too little bone for conventional implants in the upper jaw.",
          },
          {
            title: "Avoiding extensive grafting",
            description:
              "Anchoring in the cheekbone can let many patients skip large sinus and ridge grafts and the long healing those require.",
          },
          {
            title: "Failed previous implants",
            description:
              "An option for rebuilding after upper-arch implants have failed and bone is no longer adequate for standard fixtures.",
          },
          {
            title: "Full-arch restoration",
            description:
              "Used to support a complete upper arch of fixed teeth, frequently as part of a same-day full-arch plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Who is a candidate for zygomatic implants?",
        answer:
          "Patients with severe upper-jaw bone loss who want fixed teeth but lack the bone for standard implants are often candidates. Dr. Antipov uses a 3D CT scan to evaluate your cheekbone and remaining bone and to confirm whether zygomatic or pterygoid implants are right for you.",
      },
      {
        question: "Are zygomatic implants better than bone grafting?",
        answer:
          "They are different solutions. For some patients, anchoring in the cheekbone avoids the need for large grafts and the additional months of healing. For others, grafting is still the better path. Dr. Antipov will explain which approach fits your anatomy and goals.",
      },
      {
        question: "Can I get teeth the same day?",
        answer:
          "In many cases a provisional fixed bridge can be attached shortly after surgery, following the same-day full-arch philosophy. Your final teeth are placed once healing is complete.",
      },
      {
        question: "Is the procedure done under sedation?",
        answer:
          "Yes. These are advanced surgeries performed with appropriate sedation or general anesthesia, all provided in-office under Dr. Antipov's anesthesia credentials.",
      },
    ],
    relatedLinks: [
      { label: "Full-Arch Implants", href: "/expertise/full-arch-implants" },
      { label: "Implant Rescue & Redo", href: "/expertise/implant-rescue" },
      { label: "Bone Grafting", href: "/expertise/bone-grafting" },
      { label: "Snap-On Dentures", href: "/expertise/snap-on-dentures" },
    ],
  },

  "implant-rescue": {
    slug: "implant-rescue",
    badge: "Failed Implant Repair",
    heroTitle: "Implant rescue — fixing failed and overseas implant cases",
    heroSubtitle:
      "Dr. Antipov treats the cases other clinics turn away: failed implants, painful or loose restorations, and work done overseas — rebuilding the jaw and getting you back to fixed teeth.",
    heroImage: "/images/procedures/dental-implants-26292ad9.jpg",
    metaTitle: "Failed Dental Implant Repair | Roseville, CA",
    metaDescription:
      "Rescue and redo of failed dental implants in Roseville, CA — including implants placed overseas. Dr. Antipov rebuilds bone and restores fixed teeth.",
    ogImage: "/images/procedures/dental-implants-26292ad9.jpg",
    breadcrumbName: "Implant Rescue & Redo",
    procedureName: "Failed Dental Implant Rescue",
    procedureDescription:
      "Evaluation and surgical correction of failed dental implants, including jawbone reconstruction and replacement of implants and teeth.",
    procedureType: "https://schema.org/SurgicalProcedure",
    answerHeading: "Can a failed dental implant be fixed?",
    answer: [
      "Yes — in most cases a failed implant can be corrected. Dr. Antipov specializes in redo and rescue cases: implants that have loosened, become infected, were poorly positioned, or have failed entirely, including work done at other clinics or overseas in places like Mexico and Turkey.",
      "His approach is to diagnose why the original treatment failed, remove anything that cannot be saved, rebuild the jawbone where it has been lost, and replace the implants and teeth — often providing patients with same-day implants and teeth as part of the reconstruction.",
    ],
    sections: [
      {
        heading: "Common reasons implants fail",
        cards: [
          {
            title: "Insufficient or lost bone",
            description:
              "Implants placed without enough supporting bone, or where bone has since been lost, can loosen and fail.",
          },
          {
            title: "Infection (peri-implantitis)",
            description:
              "Infection around an implant can damage the surrounding bone and lead to failure if not addressed.",
          },
          {
            title: "Poor positioning or planning",
            description:
              "Implants placed at the wrong angle or location can be impossible to restore properly and may need to be redone.",
          },
          {
            title: "Overseas or low-cost dental work",
            description:
              "Cases done abroad or at high-volume clinics sometimes arrive painful, loose, or unfinished — Dr. Antipov takes these on.",
          },
        ],
      },
      {
        heading: "How rescue cases are rebuilt",
        cards: [
          {
            title: "3D diagnosis",
            description:
              "A CT scan reveals bone levels, implant position, and infection so the problem is understood before any surgery.",
          },
          {
            title: "Jawbone reconstruction",
            description:
              "Grafting and ridge reconstruction rebuild the foundation where bone has been lost around failed implants.",
          },
          {
            title: "New implants & fixed teeth",
            description:
              "Once the foundation is sound, new implants are placed and a fixed restoration is built — frequently with same-day teeth.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "I had implants done overseas and now they hurt. Can you help?",
        answer:
          "Yes. Dr. Antipov regularly treats patients whose implants were placed abroad, including in Mexico and Turkey. He will evaluate what was done, determine what can be saved, and create a plan to rebuild your jaw and restore fixed teeth.",
      },
      {
        question: "Do all the implants have to be removed?",
        answer:
          "Not necessarily. Some implants can be kept if they are well-positioned and the surrounding bone is healthy. Others may need to be removed and replaced. A 3D CT scan and exam guide that decision.",
      },
      {
        question: "Will I need bone grafting?",
        answer:
          "Often, yes — failed implants frequently leave bone loss behind. Dr. Antipov rebuilds the jawbone with grafting and reconstruction so that new implants have a strong foundation. In some cases, zygomatic or pterygoid implants can avoid extensive grafting.",
      },
      {
        question: "Can I get teeth the same day as the rescue surgery?",
        answer:
          "In many cases, yes. Part of Dr. Antipov's approach to rescue cases is providing same-day implants and teeth where the bone and stability allow, so you do not leave without a smile.",
      },
    ],
    relatedLinks: [
      { label: "Full-Arch Implants", href: "/expertise/full-arch-implants" },
      { label: "Zygomatic & Pterygoid Implants", href: "/expertise/zygomatic-implants" },
      { label: "Bone Grafting", href: "/expertise/bone-grafting" },
      { label: "Snap-On Dentures", href: "/expertise/snap-on-dentures" },
    ],
  },

  "snap-on-dentures": {
    slug: "snap-on-dentures",
    badge: "Implant-Supported Dentures",
    heroTitle: "Snap-on dentures — secure teeth on two to four implants",
    heroSubtitle:
      "Implant-supported overdentures clip firmly onto a few well-placed implants, so your denture stays put when you eat, talk, and laugh — without slipping or adhesives.",
    heroImage: "/images/dental-implants/teeth-in-an-hour-64d330c5.jpg",
    metaTitle: "Snap-On Dentures | Roseville, CA",
    metaDescription:
      "Snap-on, implant-supported dentures in Roseville, CA. Secure overdentures on two to four implants for stable, confident chewing without slipping.",
    ogImage: "/images/dental-implants/teeth-in-an-hour-64d330c5.jpg",
    breadcrumbName: "Snap-On Dentures",
    procedureName: "Implant-Supported Overdenture (Snap-On Dentures)",
    procedureDescription:
      "Placement of two to four dental implants to support a removable overdenture that snaps securely into place.",
    procedureType: "https://schema.org/SurgicalProcedure",
    answerHeading: "What are snap-on dentures?",
    answer: [
      "Snap-on dentures — also called implant-supported overdentures — are dentures that clip onto a small number of dental implants instead of resting on the gums. Dr. Antipov typically places two to four implants, and the denture snaps firmly onto them, holding it stable while you eat and speak.",
      "Compared with a traditional denture that can slip or require adhesive, snap-on dentures give you far more security and bite strength, while still being removable for easy cleaning.",
    ],
    sections: [
      {
        heading: "Why patients choose snap-on dentures",
        cards: [
          {
            title: "Stays securely in place",
            description:
              "The denture clips onto implants, so it does not rock or slip while eating or talking — and needs no messy adhesives.",
          },
          {
            title: "Better chewing and confidence",
            description:
              "Anchored support restores much more bite strength than a conventional denture, making more foods comfortable to eat.",
          },
          {
            title: "Removable for cleaning",
            description:
              "You can take the denture off to clean it and the implants, then snap it back into place.",
          },
          {
            title: "Fewer implants than fixed full-arch",
            description:
              "An economical, effective option that uses just two to four implants per arch for a secure result.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many implants do snap-on dentures need?",
        answer:
          "Dr. Antipov typically uses two to four implants per arch to support a snap-on denture. The exact number depends on your bone, your bite, and how much stability you want — a 3D CT scan helps determine the best plan.",
      },
      {
        question: "What is the difference between snap-on dentures and All-on-4?",
        answer:
          "Snap-on dentures are removable and clip onto a few implants, while a full-arch (All-on-4 / All-on-X) restoration is a fixed bridge that you do not take out. Snap-on dentures are often more economical; fixed full-arch feels most like natural teeth. Dr. Antipov will help you compare both.",
      },
      {
        question: "Can I eat normally with snap-on dentures?",
        answer:
          "Most patients chew far more comfortably and confidently than with a traditional denture because the implants hold everything stable. There may be a short adjustment period as you get used to the new fit.",
      },
      {
        question: "Are snap-on dentures comfortable?",
        answer:
          "Because they are anchored to implants, they do not rely on suction or adhesive and are far less likely to rub or slip. Many patients find them dramatically more comfortable than conventional dentures.",
      },
    ],
    relatedLinks: [
      { label: "Full-Arch Implants", href: "/expertise/full-arch-implants" },
      { label: "Single Tooth Implants", href: "/expertise/single-tooth" },
      { label: "Bone Grafting", href: "/expertise/bone-grafting" },
    ],
  },

  "facial-cosmetic": {
    slug: "facial-cosmetic",
    badge: "Facial Aesthetics",
    heroTitle: "Facial cosmetic treatments — Botox, fillers & lip augmentation",
    heroSubtitle:
      "As a maxillofacial surgeon with deep knowledge of facial anatomy, Dr. Antipov offers Botox, injectable fillers, and lip augmentation for natural, balanced results.",
    heroImage: "/images/procedures/facial-cosmetic-surgery-e97fd634.jpg",
    metaTitle: "Botox, Fillers & Lip Augmentation | Roseville, CA",
    metaDescription:
      "Explore facial cosmetic treatments in Roseville, CA: Botox, fillers & lip augmentation by a skilled maxillofacial surgeon with deep facial anatomy expertise.",
    ogImage: "/images/procedures/facial-cosmetic-surgery-e97fd634.jpg",
    breadcrumbName: "Facial Cosmetic Treatments",
    procedureName: "Facial Cosmetic Injectables",
    procedureDescription:
      "Botox, injectable dermal fillers, and lip augmentation performed by an oral and maxillofacial surgeon.",
    procedureType: "https://schema.org/TherapeuticProcedure",
    answerHeading: "Why see a maxillofacial surgeon for facial cosmetic treatments?",
    answer: [
      "Oral and maxillofacial surgeons train extensively in the anatomy of the face, jaws, and muscles — the same structures that injectable treatments work on. That foundation makes Dr. Antipov well suited to deliver Botox, dermal fillers, and lip augmentation with a careful, balanced, natural-looking result.",
      "These treatments can soften expression lines, restore volume, and enhance the lips, complementing the surgical facial work Dr. Antipov performs.",
    ],
    sections: [
      {
        heading: "Treatments offered",
        cards: [
          {
            title: "Botox",
            description:
              "Smooths dynamic expression lines such as forehead lines and crow's feet by relaxing the underlying muscles.",
          },
          {
            title: "Injectable fillers",
            description:
              "Dermal fillers restore lost volume and soften deeper folds for a refreshed, rested appearance.",
          },
          {
            title: "Lip augmentation",
            description:
              "Subtle enhancement of lip shape and volume for a natural, proportionate result.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a maxillofacial surgeon qualified to give Botox and fillers?",
        answer:
          "Yes. Oral and maxillofacial surgeons have advanced training in facial anatomy, including the muscles and tissues that injectables target. That expertise supports safe treatment and natural-looking results.",
      },
      {
        question: "Will the results look natural?",
        answer:
          "Dr. Antipov's goal is balance and subtlety — enhancing your features rather than changing your face. Treatment is tailored to your anatomy and the look you want.",
      },
      {
        question: "How long do the results last?",
        answer:
          "It varies by treatment and individual. Botox results are temporary and gradually fade over a few months, while filler longevity depends on the product and area treated. Dr. Antipov will review what to expect during your consultation.",
      },
    ],
    relatedLinks: [
      { label: "Scarless Mole Removal", href: "/expertise/mole-removal" },
      { label: "Corrective Jaw Surgery", href: "/expertise/jaw-surgery" },
    ],
  },

  "oral-pathology": {
    slug: "oral-pathology",
    badge: "Diagnosis & Biopsy",
    heroTitle: "Oral pathology & biopsies — answers for what doesn't look right",
    heroSubtitle:
      "Persistent sores, lumps, or unusual patches in the mouth deserve a clear diagnosis. Dr. Antipov performs biopsies to identify oral pathology accurately and early.",
    heroImage: "/images/procedures/extractions-bw-5bc79e17.jpg",
    metaTitle: "Oral Pathology & Biopsy | Roseville, CA",
    metaDescription:
      "Oral biopsies and evaluation of mouth lesions in Roseville, CA. Dr. Antipov diagnoses oral pathology accurately so you get timely, clear answers.",
    ogImage: "/images/procedures/extractions-bw-5bc79e17.jpg",
    breadcrumbName: "Oral Pathology & Biopsy",
    procedureName: "Oral Biopsy",
    procedureDescription:
      "Surgical biopsy and evaluation of oral lesions to diagnose pathology of the mouth and jaws.",
    procedureType: "https://schema.org/DiagnosticProcedure",
    answerHeading: "When should a mouth lesion be biopsied?",
    answer: [
      "Any sore, lump, white or red patch, or growth in the mouth that does not heal within about two weeks should be evaluated. A biopsy — removing a small sample of tissue for analysis — is the most reliable way to diagnose oral pathology and rule out or confirm a problem early.",
      "Dr. Antipov performs biopsies to diagnose pathology of the mouth and jaws, giving you and your referring dentist a clear answer so the right treatment can follow.",
    ],
    sections: [
      {
        heading: "Signs worth checking",
        cards: [
          {
            title: "Sores that don't heal",
            description:
              "Ulcers or sores in the mouth that persist beyond about two weeks should be professionally evaluated.",
          },
          {
            title: "Lumps or thickened tissue",
            description:
              "New growths, lumps, or areas of thickened tissue on the gums, tongue, cheeks, or lips.",
          },
          {
            title: "White or red patches",
            description:
              "Persistent white or red patches that cannot be wiped away and have no obvious cause.",
          },
          {
            title: "Cysts around teeth",
            description:
              "Cysts or lesions found on X-rays around impacted teeth or in the jawbone that need diagnosis.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What happens during an oral biopsy?",
        answer:
          "The area is numbed, a small sample of tissue is removed, and it is sent to a laboratory for analysis. The procedure is typically quick, and Dr. Antipov reviews the findings and next steps with you once results are back.",
      },
      {
        question: "Is a biopsy painful?",
        answer:
          "The site is fully numbed beforehand, so you should not feel pain during the biopsy. Any soreness afterward is usually mild and short-lived, and sedation options are available if you feel anxious.",
      },
      {
        question: "Why not just watch and wait?",
        answer:
          "Many oral lesions are harmless, but some are not — and early diagnosis matters. A biopsy provides a definitive answer rather than uncertainty, which is why persistent lesions should be evaluated rather than ignored.",
      },
    ],
    relatedLinks: [
      { label: "Tooth Extractions", href: "/expertise/tooth-extractions" },
      { label: "Bone Grafting", href: "/expertise/bone-grafting" },
      { label: "Wisdom Teeth Removal", href: "/expertise/wisdom-teeth" },
    ],
  },
} satisfies Record<string, ServicePageData>;

export const servicePageSlugs = Object.keys(servicePages);
