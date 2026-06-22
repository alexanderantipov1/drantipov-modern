import type { Metadata } from "next"

/**
 * Structured content for the "Implant Revision & Complex Cases" article cluster.
 *
 * These 10 articles share one layout (rendered by <InsightArticle />), so their
 * content lives here as data instead of being hand-built into 10 near-identical
 * page.tsx files. Each entry is also projected into the insights hub registry
 * (see constants/insights.ts) so it auto-lists and auto-cross-links.
 */

export type Segment = string | { text: string; href: string }
export type Para = string | Segment[]

export interface ArticleSection {
  heading: string
  paras?: Para[]
  list?: Para[]
  table?: { headers: string[]; rows: string[][] }
}

export interface ArticleFAQ {
  question: string
  answer: string
}

export interface RevisionArticle {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  date: string
  datePublished: string
  image: string
  heroAlt: string
  category: string
  readTime: string
  author: string
  keywords: string[]
  intro: Para
  tldr: string[]
  sections: ArticleSection[]
  faqs: ArticleFAQ[]
  cta: { heading: string; body: string }
}

const SITE = "https://www.drantipov.com"

export function buildMetadata(article: RevisionArticle): Metadata {
  const canonical = `/for-patients/insights/${article.slug}`
  const url = SITE + canonical
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical,
      languages: { en: canonical, "x-default": canonical },
    },
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: "article",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  }
}

const IMG = "/images/blog/2026-06-22"

export const revisionArticles: RevisionArticle[] = [
  {
    slug: "replacing-a-failed-dental-implant-what-to-expect",
    title: "Replacing a Failed Dental Implant: What to Expect",
    metaTitle: "Replacing a Failed Dental Implant: What to Expect",
    metaDescription:
      "A failed dental implant can usually be replaced. Learn how removal, healing, bone repair, and re-placement work — and what makes a revision case succeed long term.",
    excerpt:
      "A failed implant is rarely the end of the road. Here is how removal, healing, bone repair, and re-placement work — and why correcting the original cause is what makes a replacement last.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/replacing-failed-implant.png`,
    heroAlt: "Oral surgeon reviewing a 3D dental scan to plan replacing a failed implant",
    category: "Treatment Options",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "replacing a failed dental implant",
      "failed dental implant replacement",
      "dental implant revision",
      "implant removal and replacement",
      "what to expect failed implant",
    ],
    intro:
      "A failed dental implant feels like a setback, but it is rarely the end of the road. In the large majority of cases the site can be repaired and a new implant placed successfully. The deciding factor is whether the reason the first implant failed is found and corrected before a replacement goes in.",
    tldr: [
      "Most failed implants can be replaced once the site is healthy.",
      "Step one is diagnosing why the first implant failed — skipping this invites a repeat failure.",
      "Removal is usually straightforward and protects the surrounding bone.",
      "Sites with bone loss often need grafting and a few months of healing first.",
      "A corrected plan — different size, angle, or restoration — is what makes the new implant last.",
    ],
    sections: [
      {
        heading: "Start by Finding the Cause",
        paras: [
          "Placing a new implant without understanding what went wrong simply sets the stage for the same problem again. A proper revision begins with a full diagnostic review, not a quick re-do.",
          "The most common reasons a first implant fails include:",
        ],
        list: [
          "Infection in the gum and bone around the implant",
          "Poor bone quality or not enough bone volume",
          "An implant placed at the wrong position or angle",
          "Excess bite force or a poorly designed crown",
        ],
      },
      {
        heading: "Removing the Failed Implant",
        paras: [
          "Removal is usually simpler than patients expect, especially when the implant is already loose. Modern instruments lift the implant out while protecting the bone that surrounds it.",
          [
            "Once it is out, the bone that remains is assessed carefully — its volume and quality decide what happens next. For a fuller picture of why implants fail in the first place, see our guide to ",
            { text: "dental implant complications", href: "/for-patients/insights/dental-implant-complications" },
            ".",
          ],
        ],
      },
      {
        heading: "Repairing the Site First",
        paras: ["Many failed implants leave behind a bone defect that has to be rebuilt before a replacement can succeed. Depending on the case, treatment may include:"],
        list: [
          "A bone graft to restore lost width and height",
          "Treatment of any active infection",
          "A healing period so the graft can mature",
        ],
      },
      {
        heading: "Placing the New Implant",
        paras: [
          "Once the site is healthy and stable, a new implant is placed using a corrected plan — often a different size, a better angle, or a redesigned restoration that balances the bite.",
          [
            "Small changes in position and load make the difference between another failure and a result that lasts for decades. Learn how rebuilding works in our overview of ",
            { text: "bone grafting for dental implants", href: "/for-patients/insights/bone-grafting-for-dental-implants-explained" },
            ".",
          ],
        ],
      },
      {
        heading: "Success Rates for Replacement Implants",
        paras: [
          "When the original cause is corrected and the site is properly prepared, replacement implants have high success rates. The American Academy of Implant Dentistry notes that well-planned revision treatment restores function for most patients — the key is treating the cause, not just the symptom.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a failed implant always be replaced?",
        answer:
          "Most sites can be restored, but timing depends on bone health. Some patients receive a new implant fairly soon, while others need grafting and a healing period first.",
      },
      {
        question: "How long does the whole process take?",
        answer:
          "A straightforward replacement may take a few months. Cases that need bone repair can take roughly six to nine months from removal to final teeth.",
      },
      {
        question: "Will replacement cost more than the first implant?",
        answer:
          "It varies. Revision cases can involve extra steps such as grafting, so costs differ from case to case. A consultation gives you an accurate plan and estimate.",
      },
    ],
    cta: {
      heading: "Worried about a failing implant?",
      body: "Dr. Antipov diagnoses the true cause, repairs the site, and rebuilds your smile with a plan designed to last. Schedule a consultation at our Roseville practice.",
    },
  },
  {
    slug: "fixing-a-failed-all-on-4-revision-options",
    title: "Fixing a Failed All-on-4: Revision Options",
    metaTitle: "Fixing a Failed All-on-4: Revision Options",
    metaDescription:
      "When a full-arch All-on-4 fails or feels wrong, it can usually be fixed. Learn the revision options — from a new prosthesis to implant replacement and grafting.",
    excerpt:
      "A full-arch result that fails, loosens, or never felt right can usually be corrected. Here are the revision options, from a new bridge to implant replacement and a complete redesign.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/failed-all-on-4-revision.png`,
    heroAlt: "Full-arch implant prosthesis examined for an All-on-4 revision",
    category: "Treatment Options",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "failed all-on-4",
      "all-on-4 revision",
      "full arch implant revision",
      "fixing failed all on 4",
      "all-on-4 problems",
    ],
    intro:
      "A full-arch All-on-4 restoration is a major investment in both your smile and your health, so when it fails, loosens, or simply does not feel right, it is natural to feel discouraged. The encouraging news is that most full-arch problems can be corrected with the right revision plan.",
    tldr: [
      "Not every All-on-4 complaint means total failure — often only the bridge or bite is at fault.",
      "Healthy, integrated implants can usually keep supporting a new prosthesis.",
      "Failed implants are removed, the site is repaired, and new implants are placed.",
      "Some failures trace back to a flawed original design and need a full redesign.",
      "Most patients wear a temporary throughout, so they are never without teeth.",
    ],
    sections: [
      {
        heading: "Common Full-Arch Problems",
        paras: ["Many full-arch issues affect only the bridge or the bite, not the implants themselves. Typical complaints include:"],
        list: [
          "A cracked or worn acrylic bridge",
          "An uneven or uncomfortable bite",
          "One or more failing implants",
          "Gum inflammation around the implants",
          "A poor fit that traps food or affects speech",
        ],
      },
      {
        heading: "When Only the Bridge Needs Work",
        paras: [
          "If the implants are healthy and integrated, the fix may be limited to the prosthesis. A new bridge can correct the fit, bite, and appearance while keeping your existing implants in place.",
          [
            "Upgrading from acrylic to a stronger material such as zirconia often ends a cycle of repeat fractures. Our guide on ",
            { text: "zirconia full-arch restorations", href: "/for-patients/insights/zirconia-arches" },
            " explains the difference.",
          ],
        ],
      },
      {
        heading: "When Implants Must Be Replaced",
        paras: ["If one or more implants have failed, the revision is more involved. The failed implant is removed, the site is repaired, and a new implant is placed. Replacement planning often includes:"],
        list: [
          "Treating any infection first",
          "Bone grafting where volume is low",
          "Repositioning implants for better support",
          "Adding implants for stronger load distribution",
        ],
      },
      {
        heading: "When the Original Plan Was Flawed",
        paras: [
          [
            "Some full-arch failures trace back to the original design — too few implants, poor angulation, or a bite that overloads the arch. In these cases a complete redesign is the most reliable path, correcting implant number, position, and bite at once. See how modern planning improves accuracy in our guide to ",
            { text: "guided implant surgery", href: "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy" },
            ".",
          ],
        ],
      },
      {
        heading: "What Recovery Looks Like",
        paras: [
          "Recovery depends on how much rebuilding is needed. A new bridge over healthy implants is quick. A case that requires implant removal and grafting can take several months before final teeth are placed — and a temporary keeps you comfortable throughout.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can my current implants be reused?",
        answer:
          "Often yes. Healthy, well-integrated implants can support a new bridge. Only the implants that have actually failed need replacement.",
      },
      {
        question: "Is a failed All-on-4 painful?",
        answer:
          "Failing implants can cause pain, swelling, or looseness. These are warning signs that warrant a prompt evaluation.",
      },
      {
        question: "Can you fix work done at another clinic?",
        answer:
          "Yes. Evaluating and revising full-arch cases started elsewhere is a routine part of the practice.",
      },
    ],
    cta: {
      heading: "Is your full-arch restoration failing?",
      body: "Dr. Antipov finds the real cause and rebuilds full-arch cases to last. Book a consultation at our Roseville practice to review your options.",
    },
  },
  {
    slug: "correcting-bite-problems-after-implant-work",
    title: "Correcting Bite Problems After Implant Work",
    metaTitle: "Correcting Bite Problems After Implant Work",
    metaDescription:
      "A bad bite after implant treatment causes pain, wear, and failures. Learn how occlusion problems are diagnosed and corrected so your implants last longer.",
    excerpt:
      "An uneven bite after implant work causes pain, wear, and even implant failure — but it is correctable. Here is how occlusion problems are diagnosed and fixed.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/bite-problems-after-implants.png`,
    heroAlt: "Dentist analyzing a patient's bite with a digital scanner after implant work",
    category: "Patient Care",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "bite problems after implants",
      "implant bite adjustment",
      "occlusion after dental implants",
      "high bite on implant crown",
      "uneven bite implant",
    ],
    intro:
      "A comfortable, balanced bite is one of the most important parts of successful implant treatment. When the bite is off, patients notice quickly — food feels wrong, certain teeth take too much pressure, and over time the implants themselves can be damaged. The good news is that bite problems after implant work are correctable.",
    tldr: [
      "Implants cannot cushion force the way natural teeth do, so an even bite matters more, not less.",
      "An uneven bite concentrates stress and can cause bone loss, loose screws, and fractured crowns.",
      "Correction starts with measurement — bite registration and digital scans, not guesswork.",
      "Fixes range from a simple crown adjustment to redesigning a full-arch prosthesis.",
      "A night guard and regular maintenance protect the result.",
    ],
    sections: [
      {
        heading: "Why the Bite Matters So Much",
        paras: [
          "Natural teeth sit in a thin ligament that cushions pressure. Implants do not — they are fixed directly into bone and cannot absorb force the same way. An uneven bite therefore places concentrated stress on an implant, and over months or years that stress can lead to:",
        ],
        list: [
          "Bone loss around the implant",
          "Loosened or fractured crowns",
          "Screw loosening inside the implant",
          "Jaw-muscle pain and headaches",
        ],
      },
      {
        heading: "Signs Your Bite Needs Attention",
        paras: ["Many patients live with a poor bite without realizing it is the source of their discomfort. Watch for these signs:"],
        list: [
          "One side feels like it hits first",
          "Clicking, soreness, or fatigue in the jaw",
          "A crown that feels too tall",
          "Chipping on the implant crown or the opposing teeth",
        ],
      },
      {
        heading: "How Bite Problems Are Diagnosed",
        paras: [
          "Correction begins with measurement, not guesswork. Bite registration, digital scans, and careful observation of how the teeth meet during movement reveal exactly where contact is too heavy and where support is missing. Accurate diagnosis is what separates a lasting fix from a temporary one.",
        ],
      },
      {
        heading: "How the Bite Is Corrected",
        paras: ["The right correction depends on the cause. Options include:"],
        list: [
          "Adjusting the crown surface to balance contact",
          "Replacing a poorly shaped crown or bridge",
          "Redesigning a full-arch prosthesis for even load",
          "Adding support where the arch is overloaded",
        ],
      },
      {
        heading: "Protecting the Result",
        paras: [
          [
            "Once the bite is corrected, a few habits protect your investment. A night guard helps patients who grind, and regular maintenance catches small changes early. Learn more in our guide to ",
            { text: "implant aftercare and long-term maintenance", href: "/for-patients/insights/dental-implant-aftercare" },
            ".",
          ],
        ],
      },
    ],
    faqs: [
      {
        question: "Can a high bite damage my implant?",
        answer:
          "Yes. Excess force is a leading cause of late implant problems. Correcting it early protects both the bone and the restoration.",
      },
      {
        question: "Is bite correction painful?",
        answer:
          "Most adjustments are simple and comfortable. Larger redesigns involve new prosthetics but are still well tolerated.",
      },
      {
        question: "Can you fix a bite set by another dentist?",
        answer:
          "Yes. Evaluating and rebalancing bites from implant work done elsewhere is routine.",
      },
    ],
    cta: {
      heading: "Does your bite feel off after implant work?",
      body: "Dr. Antipov measures precisely and corrects the cause so your implants stay healthy. Book a consultation at our Roseville practice.",
    },
  },
  {
    slug: "replacing-old-failing-bridges-with-implants",
    title: "Replacing Old Failing Bridges With Implants",
    metaTitle: "Replacing Old Failing Bridges With Implants",
    metaDescription:
      "Old dental bridges eventually fail. Learn how a failing bridge is replaced with implants, what the process involves, and why implants last far longer.",
    excerpt:
      "A bridge depends on the teeth beside the gap, and those teeth eventually weaken. Here is how a failing bridge is replaced with implants — and why many patients make the switch.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/failing-bridge-to-implants.png`,
    heroAlt: "A dental implant model beside a traditional dental bridge model",
    category: "Treatment Options",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "replacing a dental bridge with implants",
      "failing dental bridge",
      "bridge to implant",
      "dental bridge alternative",
      "old bridge replacement",
    ],
    intro:
      "Traditional dental bridges restore missing teeth, but they do not last forever. A bridge relies on the natural teeth beside the gap, and over time those supporting teeth can decay or weaken. When a bridge fails, dental implants often provide a stronger and more permanent solution.",
    tldr: [
      "A bridge fails when its supporting teeth decay, crack, or lose bone.",
      "Implants stand on their own and do not depend on neighboring teeth.",
      "Switching preserves bone, spares healthy teeth, and cleans more easily.",
      "The process is staged: remove the bridge, treat the site, place implants, restore.",
      "Implants often cost more upfront but can last far longer, ending a cycle of repairs.",
    ],
    sections: [
      {
        heading: "Why Bridges Eventually Fail",
        paras: ["A bridge is a connected set of crowns anchored to natural teeth on either side of the gap. The weak point is those support teeth, which over the years can develop:"],
        list: [
          "Decay underneath the crowns",
          "Cracks from carrying extra load",
          "Gum recession and bone loss",
          "Root problems that require extraction",
        ],
      },
      {
        heading: "Why Implants Are a Stronger Replacement",
        paras: ["Implants do not depend on neighboring teeth. Each implant stands on its own in the jawbone, which keeps the surrounding teeth intact. The advantages over a new bridge include:"],
        list: [
          "No grinding down of healthy teeth",
          "Bone preservation where the tooth root is missing",
          "A longer lifespan with proper care",
          "Easier daily cleaning",
        ],
      },
      {
        heading: "What the Replacement Process Involves",
        paras: ["Switching from a bridge to implants is a planned, step-by-step process. The typical path includes:"],
        list: [
          "Removing the old bridge and assessing the teeth",
          "Extracting any failed support teeth",
          [
            { text: "Bone grafting", href: "/for-patients/insights/bone-grafting-for-dental-implants-explained" },
            " where volume has been lost",
          ],
          "Placing implants once the site is healthy",
          "Attaching the final crowns or bridge on the implants",
        ],
      },
      {
        heading: "Is It Worth the Switch?",
        paras: [
          [
            "For many patients, replacing a repeatedly failing bridge with implants ends a cycle of repairs. The decision depends on your bone, your budget, and your goals — and a consultation makes the right path clear. If you are weighing your choices, compare them in our guide on ",
            { text: "implants versus other tooth-replacement options", href: "/for-patients/insights/implants-vs-dentures" },
            ".",
          ],
        ],
      },
    ],
    faqs: [
      {
        question: "Can I get implants right after the bridge is removed?",
        answer:
          "Sometimes. If the bone and gum are healthy, implants can be placed soon after. Other cases need grafting first.",
      },
      {
        question: "Will I be without teeth during treatment?",
        answer:
          "No. Temporary teeth keep you comfortable and confident throughout the process.",
      },
      {
        question: "Are implants more expensive than a new bridge?",
        answer:
          "Implants often cost more upfront but can last far longer, which makes them cost-effective over time.",
      },
    ],
    cta: {
      heading: "Tired of repairing the same bridge?",
      body: "Dr. Antipov helps patients move from failing bridges to durable implants. Book a consultation at our Roseville practice to plan each step.",
    },
  },
  {
    slug: "can-a-loose-dental-implant-be-saved",
    title: "Can a Loose Dental Implant Be Saved?",
    metaTitle: "Can a Loose Dental Implant Be Saved?",
    metaDescription:
      "A loose implant is a warning sign, but it does not always mean failure. Learn what causes looseness, when an implant can be saved, and when it must be replaced.",
    excerpt:
      "A healthy implant should feel completely solid, so any movement is a signal. Whether it can be saved depends on which part is loose and why — here is how to tell.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/loose-dental-implant.png`,
    heroAlt: "Dentist carefully examining a patient's tooth to check a loose implant",
    category: "Patient Care",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "loose dental implant",
      "can a loose implant be saved",
      "dental implant moving",
      "loose implant crown",
      "wobbly dental implant",
    ],
    intro:
      "Feeling movement in a dental implant is alarming. A healthy implant should be completely solid, so any looseness is a signal that something needs attention. Whether the implant can be saved depends on what is actually loose and why — and the difference between a quick fix and true failure is bigger than most people expect.",
    tldr: [
      "An implant has three layers — crown, abutment screw, and implant body — and each can loosen separately.",
      "A loose crown or screw is usually a simple, single-visit fix.",
      "A loose implant body means the bond with the bone has broken and the implant must be replaced.",
      "A loose implant rarely improves on its own — waiting risks bone loss.",
      "Any movement, pain, or swelling deserves prompt evaluation.",
    ],
    sections: [
      {
        heading: "What Is Actually Loose?",
        paras: [
          [
            "The most important first question is which part is moving. An implant has three layers, and each loosens for different reasons: the crown can loosen from its connection, the abutment screw inside can come loose, or the implant body itself can loosen in the bone. A loose crown or screw is usually simple to fix; a loose implant body is far more serious. For how these parts fit together, see our guide to ",
            { text: "repairing a broken implant crown or prosthesis", href: "/for-patients/insights/repairing-a-broken-implant-crown-or-prosthesis" },
            ".",
          ],
        ],
      },
      {
        heading: "When the Implant Can Be Saved",
        paras: ["If the implant body is still firmly fixed in the bone, the looseness comes from the parts above it — and these cases are very treatable. Solutions include:"],
        list: [
          "Re-tightening or replacing the abutment screw",
          "Re-cementing or replacing a loose crown",
          "Adjusting the bite to reduce stress",
          "Treating early gum inflammation around the implant",
        ],
      },
      {
        heading: "When the Implant Must Be Replaced",
        paras: [
          "If the implant body itself moves, the bond between bone and implant has broken. This cannot be repaired, and the implant must be removed. Causes of a truly loose implant include failed integration after surgery, advanced infection and bone loss, or long-term overload from a bad bite.",
          "After removal, the site is repaired and a new implant can be placed once healing is complete.",
        ],
      },
      {
        heading: "Why You Should Not Wait",
        paras: [
          "A loose implant rarely improves on its own. Movement irritates the surrounding tissue, and an untreated infection spreads into the bone. Acting early often means the difference between a quick fix and a full replacement, so any movement, pain, or swelling should be seen promptly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a loose implant an emergency?",
        answer:
          "It should be seen quickly. Early treatment can save the implant and protect the bone around it.",
      },
      {
        question: "Does a loose crown mean the implant failed?",
        answer:
          "Not usually. A loose crown or screw is a common, fixable issue separate from the implant body.",
      },
      {
        question: "Can a replaced implant be just as strong?",
        answer:
          "Yes. With the cause corrected and the site prepared, a replacement implant can last for decades.",
      },
    ],
    cta: {
      heading: "Noticing movement in an implant?",
      body: "Dr. Antipov diagnoses loose implants precisely and chooses the least invasive solution that works. Book a prompt consultation at our Roseville practice.",
    },
  },
  {
    slug: "repairing-a-broken-implant-crown-or-prosthesis",
    title: "Repairing a Broken Implant Crown or Prosthesis",
    metaTitle: "Repairing a Broken Implant Crown or Prosthesis",
    metaDescription:
      "A cracked implant crown or full-arch bridge can usually be repaired or replaced. Learn the causes, repair options, and how to prevent future breakage.",
    excerpt:
      "When an implant tooth breaks, it is usually the visible restoration — not the implant in the bone. Here is why restorations crack and how each problem is solved.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/broken-implant-crown.png`,
    heroAlt: "Dental technician inspecting a ceramic implant crown under a lab light",
    category: "Treatment Options",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "broken implant crown",
      "repair implant crown",
      "cracked implant prosthesis",
      "chipped implant tooth",
      "fix implant bridge",
    ],
    intro:
      "The implant in your jaw and the tooth you see are two separate parts, so when something breaks it is often the visible restoration, not the implant itself. That is good news: a broken crown or bridge can usually be repaired or replaced while the implant stays right where it is.",
    tldr: [
      "An implant restoration has layers — the implant body, the abutment, and the crown or bridge on top.",
      "When a tooth breaks, the implant underneath is usually fine.",
      "A single crown can be polished, bonded, or replaced depending on the damage.",
      "A full-arch bridge can be repaired, have worn teeth replaced, or be upgraded to zirconia.",
      "Correcting the cause — grinding or an uneven bite — prevents the next break.",
    ],
    sections: [
      {
        heading: "The Crown and the Implant Are Different",
        paras: [
          "An implant restoration is built in layers. The implant body sits in the bone, an abutment connects to it, and the crown or bridge sits on top. When a patient says a tooth broke, the implant underneath is usually intact — the fracture is in the porcelain, acrylic, or zirconia above it. That is reassuring, because the part anchored in your bone rarely needs to change.",
        ],
      },
      {
        heading: "Why Implant Restorations Break",
        paras: ["Restorations are strong but not indestructible. Several factors lead to cracks and chips:"],
        list: [
          "Grinding or clenching at night",
          "An uneven bite that overloads one area",
          "Acrylic that has worn down over years",
          "A long cantilever on a full-arch bridge",
        ],
      },
      {
        heading: "Repair Options for a Single Crown",
        paras: ["For a single implant crown, the fix depends on the damage:"],
        list: [
          "Polishing a minor chip",
          "Bonding a small fracture",
          "Replacing the crown when the break is large",
        ],
      },
      {
        heading: "Repair Options for a Full-Arch Bridge",
        paras: ["A broken full-arch prosthesis is more involved but still very fixable. Depending on the case, treatment may include:"],
        list: [
          "Repairing a chip in the acrylic",
          "Replacing worn teeth on the bridge",
          [
            "Upgrading to a stronger ",
            { text: "zirconia arch", href: "/for-patients/insights/zirconia-arches" },
          ],
          "Redesigning the bite to balance force",
        ],
      },
      {
        heading: "Preventing Future Breakage",
        paras: [
          "A repair lasts longer when the cause is addressed. A night guard protects against grinding, and regular maintenance catches wear early. Patients with repeated fractures often benefit from switching to a stronger material so the same spot does not break again.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a broken crown mean my implant failed?",
        answer:
          "Usually not. The implant in the bone is typically intact — the break is in the restoration above it.",
      },
      {
        question: "Can a full-arch bridge be repaired in the mouth?",
        answer:
          "Minor repairs sometimes can be. Larger fractures usually need the bridge repaired or replaced in the lab.",
      },
      {
        question: "How do I stop crowns from breaking again?",
        answer:
          "Correcting the bite and wearing a night guard are the most effective steps, especially for people who grind.",
      },
    ],
    cta: {
      heading: "Cracked or chipped implant tooth?",
      body: "Dr. Antipov repairs and redesigns implant restorations, correcting the cause so the result holds up. Book a consultation at our Roseville practice.",
    },
  },
  {
    slug: "full-mouth-reconstruction-for-failed-dental-work",
    title: "Full-Mouth Reconstruction for Failed Dental Work",
    metaTitle: "Full-Mouth Reconstruction for Failed Dental Work",
    metaDescription:
      "When years of failing crowns, bridges, and teeth add up, full-mouth reconstruction rebuilds everything. Learn how complex cases are planned and restored.",
    excerpt:
      "When fixing one tooth at a time stops making sense, full-mouth reconstruction rebuilds everything together with a single, coordinated plan. Here is what that involves.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/full-mouth-reconstruction-failed.png`,
    heroAlt: "Comprehensive dental treatment planning session with 3D jaw scans on screen",
    category: "Treatment Options",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "full mouth reconstruction",
      "full mouth rehabilitation",
      "rebuild failed dental work",
      "full mouth restoration",
      "complex dental reconstruction",
    ],
    intro:
      "Some patients reach a point where fixing one tooth at a time no longer makes sense. Years of failing crowns, old bridges, cracked teeth, and worn dental work add up. Full-mouth reconstruction takes a step back and rebuilds everything together with a single, coordinated plan.",
    tldr: [
      "Reconstruction is for patients with multiple failing teeth and a breaking-down bite.",
      "Treating the mouth as one system breaks the cycle of repeat repairs.",
      "Planning is everything — 3D imaging, a bite assessment, and a staged sequence.",
      "It can combine extractions, grafting, implants, full-arch work, and new crowns.",
      "Treatment is staged over months, with temporaries so you always have teeth.",
    ],
    sections: [
      {
        heading: "When One Tooth at a Time Is Not Enough",
        paras: ["Piecemeal repairs can become a cycle: a crown fails because the bite is off, then a bridge fails because a support tooth breaks. Each fix treats a symptom, not the whole picture. Full-mouth reconstruction is considered when a patient has:"],
        list: [
          "Multiple failing or missing teeth",
          "Widespread decay or old dental work breaking down",
          "A collapsed or painful bite",
          "A combination of cosmetic and functional problems",
        ],
      },
      {
        heading: "How a Complex Case Is Planned",
        paras: [
          [
            "Reconstruction succeeds or fails on planning. Before any treatment, a complete picture of the teeth, gums, bone, and bite is gathered — including 3D imaging, a detailed bite and jaw-joint assessment, a staged treatment sequence, and a clear preview of the final result. You can see how imaging guides accuracy in our guide to ",
            { text: "guided implant surgery", href: "/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy" },
            ".",
          ],
        ],
      },
      {
        heading: "What Reconstruction Can Include",
        paras: ["Because every mouth is different, a reconstruction combines the treatments each case needs. Common components are:"],
        list: [
          "Removing teeth that cannot be saved",
          [
            { text: "Bone grafting", href: "/for-patients/insights/bone-grafting-for-dental-implants-explained" },
            " to rebuild lost volume",
          ],
          "Dental implants to replace missing teeth",
          [
            "Full-arch restorations such as ",
            { text: "full-arch implants", href: "/full-arch-dental-implants" },
          ],
          "New crowns and a balanced bite",
        ],
      },
      {
        heading: "What to Expect During Treatment",
        paras: [
          "Reconstruction is a journey, not a single appointment. Treatment is staged over several months so the mouth heals properly at each phase, and temporaries keep patients comfortable and confident throughout. The result is a stable, functional bite and a natural-looking smile built to last.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does full-mouth reconstruction take?",
        answer:
          "Most cases take several months from start to final restoration, depending on grafting and healing needs.",
      },
      {
        question: "Will I have teeth during the process?",
        answer:
          "Yes. Temporary teeth are part of the plan, so you are never without a smile.",
      },
      {
        question: "Can you rebuild work that has failed repeatedly?",
        answer:
          "Yes. Breaking the cycle of repeat failures is exactly what a coordinated reconstruction is designed to do.",
      },
    ],
    cta: {
      heading: "Ready to stop the cycle of repairs?",
      body: "Dr. Antipov plans the whole mouth as one system for results that last. Book a consultation at our Roseville practice to map your reconstruction.",
    },
  },
  {
    slug: "implant-revision-after-bone-loss",
    title: "Implant Revision After Bone Loss Explained",
    metaTitle: "Implant Revision After Bone Loss Explained",
    metaDescription:
      "Bone loss can doom an implant, but it can be rebuilt. Learn how specialists graft, regrow, and re-place implants in sites that lost bone after failure.",
    excerpt:
      "A failed implant often leaves behind less bone than it started with. Before a new implant can succeed, that bone usually has to be rebuilt — here is how revision works.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/implant-revision-bone-loss.png`,
    heroAlt: "3D dental CT scan showing jawbone for planning implant revision after bone loss",
    category: "Treatment Options",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "implant revision after bone loss",
      "bone loss around implant",
      "rebuild bone for implant",
      "implant bone graft revision",
      "peri-implantitis bone loss",
    ],
    intro:
      "When an implant fails, it often leaves behind less bone than it started with. Infection, looseness, and inflammation all eat away at the bone that holds an implant in place. Before a new implant can succeed, that bone usually has to be rebuilt — and rebuilding it well is the foundation of a successful revision.",
    tldr: [
      "Bone and implant rely on each other; when that relationship breaks down, bone is lost.",
      "Revision planning starts with measuring exactly how much bone remains via a 3D scan.",
      "Bone can be restored with grafting, guided regeneration, a sinus lift, or zygomatic implants.",
      "A new implant is placed only after the rebuilt bone has healed and matured.",
      "The revised plan changes size, position, or angle to avoid repeating the original problem.",
    ],
    sections: [
      {
        heading: "Why Bone Loss Happens After Failure",
        paras: [
          [
            "Bone and implant depend on each other — the implant gives the bone something to support, and the bone gives the implant stability. When that relationship breaks down, bone is lost. Common drivers include infection around the implant, an implant that loosened and moved, long-term overload from a poor bite, or a site left empty too long after removal. For more on these causes, see our guide to ",
            { text: "dental implant complications", href: "/for-patients/insights/dental-implant-complications" },
            ".",
          ],
        ],
      },
      {
        heading: "Measuring the Bone First",
        paras: [
          "Revision planning starts with accurate measurement. A 3D scan shows exactly how much bone is left, its shape, and where nearby structures such as nerves and sinuses sit. This tells the surgeon whether bone can be rebuilt in one stage or whether grafting must come first. Guessing leads to repeat failure, so measurement matters.",
        ],
      },
      {
        heading: "Rebuilding the Bone",
        paras: ["There are several ways to restore lost bone, chosen to fit the size and location of the defect:"],
        list: [
          [
            { text: "Bone grafting", href: "/for-patients/insights/bone-grafting-for-dental-implants-explained" },
            " to rebuild width and height",
          ],
          "Guided regeneration using protective membranes",
          "A sinus lift for upper back teeth",
          [
            { text: "Zygomatic implants", href: "/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss" },
            " when grafting is not enough",
          ],
        ],
      },
      {
        heading: "Placing the New Implant",
        paras: [
          "Once the bone has healed and matured, a new implant is placed into a stable, healthy site. The revised plan often uses a different size, position, or angle to avoid repeating the original problem. Healing for grafted sites can take several months, but the payoff is a strong foundation that supports the implant for the long term.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an implant be placed where bone was lost?",
        answer:
          "Often yes, after the bone is rebuilt. Grafting restores the volume needed to hold a new implant.",
      },
      {
        question: "How long does grafting take to heal?",
        answer:
          "It varies by case, but many grafts mature over roughly three to six months before an implant is placed.",
      },
      {
        question: "Is revision after bone loss reliable?",
        answer:
          "When the cause is corrected and bone is properly rebuilt, replacement implants have high success rates.",
      },
    ],
    cta: {
      heading: "Lost bone around a failed implant?",
      body: "Dr. Antipov rebuilds bone and re-places implants on a solid foundation. Book a consultation at our Roseville practice to see what is possible.",
    },
  },
  {
    slug: "second-opinion-on-failed-dental-implants",
    title: "Getting a Second Opinion on Failed Implants",
    metaTitle: "Getting a Second Opinion on Failed Implants",
    metaDescription:
      "If your dental implants failed or feel wrong, a second opinion can reveal the real cause. Learn what a revision consultation involves and what to ask.",
    excerpt:
      "When implants fail or never feel right, a second opinion from a revision-focused surgeon can give you answers and a realistic plan. Here is what to expect and what to ask.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/second-opinion-failed-implants.png`,
    heroAlt: "Oral surgeon reviewing dental x-rays with a patient during a second-opinion consultation",
    category: "Patient Care",
    readTime: "6 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "second opinion dental implants",
      "failed implant second opinion",
      "implant revision consultation",
      "dental implant problems",
      "implant not feeling right",
    ],
    intro:
      "When dental implants fail or never feel right, many patients are unsure where to turn. Going back to the original provider can feel uncomfortable, and the cause of the problem may not be clear. A second opinion from a surgeon who focuses on revision work can give you answers and a realistic plan.",
    tldr: [
      "You do not have to wait for a crisis to seek another perspective.",
      "A revision consultation is a structured review, not a quick look.",
      "Expect a full history, a clinical exam, and 3D imaging of bone and implant position.",
      "Bringing questions helps you understand your options and feel confident.",
      "The single most important outcome is a clear cause — replacing without it just repeats the problem.",
    ],
    sections: [
      {
        heading: "When a Second Opinion Makes Sense",
        paras: ["You do not have to wait for something to go badly wrong. A second opinion is worthwhile any time something feels off. Consider one if you have:"],
        list: [
          "An implant that is loose or painful",
          "Ongoing swelling or gum problems",
          "A bite that never felt right after treatment",
          "A full-arch result that keeps breaking",
          "A recommendation you simply want to confirm",
        ],
      },
      {
        heading: "What the Consultation Includes",
        paras: ["A revision consultation is more than a quick look — it is a structured review designed to find the true source of the problem. Expect the visit to include:"],
        list: [
          "A detailed history of your previous treatment",
          "A clinical exam of the implants, gums, and bite",
          "3D imaging to assess bone and implant position",
          "A clear explanation of what is happening and why",
        ],
      },
      {
        heading: "Questions Worth Asking",
        paras: ["A good consultation is a conversation. Bringing questions helps you understand your options. Helpful ones include:"],
        list: [
          "What caused my implant to fail?",
          "Can this implant be saved, or does it need replacing?",
          "Will I need bone grafting first?",
          "How long will the full revision take?",
          "What is the plan to prevent this from happening again?",
        ],
      },
      {
        heading: "Why the Cause Matters Most",
        paras: [
          [
            "The single most important outcome of a second opinion is a clear cause. Replacing an implant without correcting why the first one failed simply repeats the problem. A surgeon who focuses on revision work addresses that root cause first, then builds a plan around it — much like the approach in our guide to ",
            { text: "replacing a failed dental implant", href: "/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect" },
            ".",
          ],
        ],
      },
    ],
    faqs: [
      {
        question: "Is it rude to get a second opinion?",
        answer:
          "Not at all. Seeking another perspective on complex treatment is normal and sensible.",
      },
      {
        question: "Will I need to repeat all the imaging?",
        answer:
          "Bring any existing scans. Updated imaging is often still helpful, especially for revision planning.",
      },
      {
        question: "Can you treat work started by another dentist?",
        answer:
          "Yes. Evaluating and revising cases started elsewhere is a routine part of the practice.",
      },
    ],
    cta: {
      heading: "Want a clear answer about your implants?",
      body: "Dr. Antipov gives honest second opinions, finds the real cause, and offers a plan you can trust. Book a consultation at our Roseville practice.",
    },
  },
  {
    slug: "redoing-dental-implants-done-abroad-recovery-plan",
    title: "Redoing Dental Implants Done Abroad: A Plan",
    metaTitle: "Redoing Dental Implants Done Abroad: A Recovery Plan",
    metaDescription:
      "If implants done overseas have failed, a clear recovery plan can rebuild your smile. Learn the steps to assess, repair, and replace problem dental work.",
    excerpt:
      "If implants done overseas hurt, loosen, or do not fit right, there is a clear path forward. Here is a step-by-step recovery plan for redoing implant work done abroad.",
    date: "June 22, 2026",
    datePublished: "2026-06-22",
    image: `${IMG}/redoing-implants-abroad.png`,
    heroAlt: "Oral surgeon reviewing dental records and a panoramic x-ray with a patient",
    category: "Patient Care",
    readTime: "7 min read",
    author: "Dr. Alexander V. Antipov",
    keywords: [
      "redoing dental implants done abroad",
      "dental tourism implants failed",
      "fix overseas dental implants",
      "implants abroad complications",
      "dental implant recovery plan",
    ],
    intro:
      "Many patients travel overseas for dental implants to save money, and some have a good experience. Others return home with implants that hurt, loosen, or simply do not fit right, and little support to fix them. If that is your situation, there is a clear path forward.",
    tldr: [
      "Distance is the core challenge — the original provider is not reachable for follow-up.",
      "The plan starts with a complete assessment, because guessing leads to repeat problems.",
      "Active infection is controlled before any rebuilding begins.",
      "Sites that lost bone are rebuilt before new implants go in.",
      "New implants use corrected planning, with temporaries so you always have teeth.",
    ],
    sections: [
      {
        heading: "Why Overseas Work Sometimes Needs Redoing",
        paras: [
          [
            "Distance is the core challenge. When complications appear after you return home, the original provider is no longer reachable for follow-up care. Common problems patients bring back include implants placed in poor positions, infection that developed after returning home, bites that were never properly balanced, and full-arch bridges made from materials that crack. For more on what can go wrong, see our guide to ",
            { text: "dental implant complications", href: "/for-patients/insights/dental-implant-complications" },
            ".",
          ],
        ],
      },
      {
        heading: "Step One: A Complete Assessment",
        paras: ["The recovery plan begins with a full evaluation, because guessing leads to repeat problems. This stage documents exactly what was done and what is going wrong, including:"],
        list: [
          "A clinical exam of every implant and the bite",
          "3D imaging to check implant position and bone",
          "A review of any records you have from abroad",
          "A written summary of what can be saved and what cannot",
        ],
      },
      {
        heading: "Step Two: Stabilize and Treat Infection",
        paras: [
          "If there is active infection or inflammation, it must be controlled before any rebuilding begins. Treating infection protects the bone you still have and prevents further loss. This may involve cleaning the affected sites, treating the gums, and removing any implant that cannot be saved.",
        ],
      },
      {
        heading: "Step Three: Rebuild the Foundation",
        paras: ["Once the mouth is healthy, the focus shifts to rebuilding. Sites that lost bone are restored before new implants go in. Treatment may include:"],
        list: [
          [
            { text: "Bone grafting", href: "/for-patients/insights/bone-grafting-for-dental-implants-explained" },
            " to rebuild lost volume",
          ],
          "A sinus lift for upper back teeth",
          "A healing period for grafts to mature",
        ],
      },
      {
        heading: "Step Four: Replace and Restore",
        paras: [
          "With a healthy foundation, new implants are placed using corrected planning, and a well-designed restoration is fitted on top. The bite is balanced carefully so the new work lasts, and temporaries keep you comfortable throughout — you are never without teeth.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can my overseas implants be saved?",
        answer:
          "Some can, if they are well placed and healthy. Others need replacing. A full assessment gives the answer.",
      },
      {
        question: "How long does redoing the work take?",
        answer:
          "It varies. Cases needing grafting can take six to nine months, while simpler corrections are faster.",
      },
      {
        question: "Will I have to start completely over?",
        answer:
          "Not always. The goal is to keep what is healthy and rebuild only what is failing.",
      },
    ],
    cta: {
      heading: "Implants from abroad giving you trouble?",
      body: "Dr. Antipov assesses honestly and rebuilds for the long term. Book a consultation at our Roseville practice to start your recovery plan.",
    },
  },
]

export function getRevisionArticle(slug: string): RevisionArticle | undefined {
  return revisionArticles.find((a) => a.slug === slug)
}
