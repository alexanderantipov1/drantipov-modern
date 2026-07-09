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
  disclaimer?: string
  tldr: string[]
  sections: ArticleSection[]
  faqs: ArticleFAQ[]
  cta: { heading: string; body: string; buttonLabel?: string }
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
    intro: [
      "Yes — a failed dental implant can almost always be replaced once the site has healed, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. In the large majority of cases the site can be repaired and a new implant placed successfully. The deciding factor is whether the reason the first implant failed is found and corrected before a replacement goes in.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Stage", "What Happens"],
          rows: [
            ["1. Diagnose the cause", "A full diagnostic review to find why the first implant failed"],
            ["2. Remove the implant", "The failed implant is lifted out while protecting the surrounding bone"],
            ["3. Repair the site", "Grafting and infection treatment where needed, then a healing period"],
            ["4. Place the new implant", "A corrected plan — a different size, angle, or redesigned restoration"],
          ],
        },
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
        question: "Why is finding the cause so important?",
        answer:
          "Placing a new implant without understanding what went wrong simply sets the stage for the same problem again. A proper revision begins with a full diagnostic review, not a quick re-do.",
      },
      {
        question: "Is removing a failed implant difficult?",
        answer:
          "Removal is usually simpler than patients expect, especially when the implant is already loose. Modern instruments lift it out while protecting the surrounding bone.",
      },
      {
        question: "Do I always need a bone graft first?",
        answer:
          "Not always. Many failed implants leave a bone defect that must be rebuilt first, but sites with healthy bone can sometimes receive a new implant sooner.",
      },
      {
        question: "What makes a replacement implant last?",
        answer:
          "A corrected plan. Once the site is healthy, a new implant is placed using a different size, a better angle, or a redesigned restoration that balances the bite.",
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
    intro: [
      "A failed All-on-4 can almost always be fixed, and often without replacing every implant, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. A full-arch restoration is a major investment in both your smile and your health, so when it fails, loosens, or simply does not feel right, it is natural to feel discouraged. The encouraging news is that most full-arch problems can be corrected with the right revision plan.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Problem", "Typical Fix"],
          rows: [
            ["Cracked or worn bridge", "Repair or replace the prosthesis; consider zirconia"],
            ["Uneven or uncomfortable bite", "Redesign the bite on a new bridge"],
            ["One or more failing implants", "Remove, repair the site, and place new implants"],
            ["Gum inflammation around implants", "Treat the infection before rebuilding"],
            ["Flawed original design", "Complete redesign of implant number, position, and bite"],
          ],
        },
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
        question: "Does the whole arch have to be replaced?",
        answer:
          "Not usually. Healthy, integrated implants can keep supporting a new prosthesis, so only the implants that have actually failed are replaced.",
      },
      {
        question: "Can a cracked bridge just be replaced?",
        answer:
          "If the implants are healthy, the fix may be limited to the prosthesis. A new bridge can correct fit, bite, and appearance while keeping your implants in place.",
      },
      {
        question: "Why do some All-on-4 cases keep failing?",
        answer:
          "Some failures trace back to the original design — too few implants, poor angulation, or a bite that overloads the arch. These cases need a complete redesign rather than another patch.",
      },
      {
        question: "Is a failed All-on-4 painful?",
        answer:
          "Failing implants can cause pain, swelling, or looseness. These are warning signs that warrant a prompt evaluation.",
      },
      {
        question: "Will I be without teeth during the revision?",
        answer:
          "No. Most patients wear a temporary throughout, so they are never without teeth.",
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
    intro: [
      "Yes — a bad bite after implant work can be corrected, and doing so protects your implants from long-term damage, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. A comfortable, balanced bite is one of the most important parts of successful implant treatment. When the bite is off, patients notice quickly — food feels wrong, certain teeth take too much pressure, and over time the implants themselves can be damaged.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Bite Problem", "How It's Corrected"],
          rows: [
            ["Crown feels too tall or hits first", "Adjust the crown surface to balance contact"],
            ["Poorly shaped crown or bridge", "Replace the restoration"],
            ["Overloaded full-arch prosthesis", "Redesign the prosthesis for even load"],
            ["Not enough support in one area", "Add support where the arch is overloaded"],
          ],
        },
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
        question: "How do I know my bite is off?",
        answer:
          "Common signs include one side hitting first, a crown that feels too tall, jaw soreness or fatigue, and chipping on the crown or opposing teeth.",
      },
      {
        question: "Why does bite matter more with implants than natural teeth?",
        answer:
          "Natural teeth sit in a ligament that cushions pressure. Implants are fixed directly into bone and cannot absorb force the same way, so an uneven bite concentrates stress.",
      },
      {
        question: "How are bite problems diagnosed?",
        answer:
          "Correction begins with measurement — bite registration, digital scans, and watching how the teeth meet during movement — not guesswork.",
      },
      {
        question: "Is bite correction painful?",
        answer:
          "Most adjustments are simple and comfortable. Larger redesigns involve new prosthetics but are still well tolerated.",
      },
      {
        question: "How do I protect the result?",
        answer:
          "A night guard helps if you grind, and regular maintenance catches small changes early.",
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
    intro: [
      "When an old dental bridge fails, replacing it with implants is often the stronger, longer-lasting fix, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. Traditional bridges restore missing teeth, but they do not last forever — a bridge relies on the natural teeth beside the gap, and over time those supporting teeth can decay or weaken. When a bridge fails, dental implants often provide a stronger and more permanent solution.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Feature", "Traditional Bridge", "Dental Implants"],
          rows: [
            ["Support", "Relies on neighboring teeth", "Stands on its own in the jawbone"],
            ["Effect on healthy teeth", "Requires grinding them down", "Leaves them intact"],
            ["Bone", "Bone under the gap is lost", "Preserves bone where the root is missing"],
            ["Cleaning", "Harder to clean underneath", "Easier daily cleaning"],
            ["Lifespan", "Support teeth can decay or crack", "Longer lifespan with proper care"],
          ],
        },
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
        question: "Why do bridges eventually fail?",
        answer:
          "The weak point is the support teeth on either side of the gap, which can develop decay under the crowns, cracks from extra load, gum recession, or root problems that require extraction.",
      },
      {
        question: "Why are implants stronger than a new bridge?",
        answer:
          "Each implant stands on its own in the bone, so it does not depend on neighboring teeth, preserves bone where the root is missing, and is easier to clean.",
      },
      {
        question: "What does switching from a bridge to implants involve?",
        answer:
          "It is a staged process: remove the old bridge, extract any failed support teeth, graft where bone is low, place implants once the site is healthy, then attach the final teeth.",
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
    intro: [
      "A loose dental implant can often be saved, but it depends on which part is actually moving, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. A healthy implant should feel completely solid, so any looseness is a signal that something needs attention. Whether the implant can be saved depends on what is actually loose and why — and the difference between a quick fix and true failure is bigger than most people expect.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["What's Loose", "Can It Be Saved?"],
          rows: [
            ["The crown", "Yes — re-cement or replace the crown"],
            ["The abutment screw", "Yes — re-tighten or replace the screw"],
            ["Early gum inflammation", "Yes — treat inflammation and adjust the bite"],
            ["The implant body in the bone", "No — the implant must be removed and replaced"],
          ],
        },
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
        question: "Which part of an implant can come loose?",
        answer:
          "An implant has three layers — the crown, the abutment screw, and the implant body — and each can loosen separately for different reasons.",
      },
      {
        question: "When can a loose implant be saved?",
        answer:
          "If the implant body is still firmly fixed in the bone, the looseness is in the parts above it, which are very treatable — re-tightening a screw, re-cementing a crown, or adjusting the bite.",
      },
      {
        question: "Does a loose crown mean the implant failed?",
        answer:
          "Not usually. A loose crown or screw is a common, fixable issue separate from the implant body.",
      },
      {
        question: "Why shouldn't I wait to have it checked?",
        answer:
          "A loose implant rarely improves on its own. Movement irritates the tissue and any untreated infection spreads into the bone, so acting early often means a quick fix instead of a full replacement.",
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
    intro: [
      "A broken implant crown or bridge can almost always be repaired or replaced while the implant itself stays in place, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. The implant in your jaw and the tooth you see are two separate parts, so when something breaks it is usually the visible restoration, not the implant itself. That is reassuring, because the part anchored in your bone rarely needs to change.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Damage", "Repair Option"],
          rows: [
            ["Minor chip on a crown", "Polish the chip"],
            ["Small crown fracture", "Bond the fracture"],
            ["Large crown break", "Replace the crown"],
            ["Chip in a full-arch bridge", "Repair the acrylic or replace worn teeth"],
            ["Repeated bridge fractures", "Upgrade to a stronger zirconia arch"],
          ],
        },
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
        question: "Why do implant restorations break?",
        answer:
          "Restorations are strong but not indestructible. Grinding, an uneven bite, worn acrylic, or a long cantilever on a full-arch bridge can all cause cracks and chips.",
      },
      {
        question: "Can a single broken crown be fixed without replacing it?",
        answer:
          "Often yes. A minor chip can be polished and a small fracture bonded; only larger breaks call for a new crown.",
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
    intro: [
      "Full-mouth reconstruction rebuilds an entire mouth of failing dental work with one coordinated plan instead of fixing a tooth at a time, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. Some patients reach a point where years of failing crowns, old bridges, cracked teeth, and worn dental work add up and piecemeal repairs no longer make sense. Reconstruction takes a step back and treats the mouth as one system.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Component", "Purpose"],
          rows: [
            ["Removing teeth that cannot be saved", "Clear failing teeth before rebuilding"],
            ["Bone grafting", "Rebuild lost bone volume"],
            ["Dental implants", "Replace missing teeth"],
            ["Full-arch restorations", "Restore an entire arch"],
            ["New crowns and a balanced bite", "Restore function and appearance"],
          ],
        },
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
        question: "Who needs full-mouth reconstruction?",
        answer:
          "It is considered when a patient has multiple failing or missing teeth, widespread decay or old work breaking down, a collapsed or painful bite, or a combination of cosmetic and functional problems.",
      },
      {
        question: "Why treat the whole mouth at once?",
        answer:
          "Piecemeal repairs can become a cycle where each fix treats a symptom, not the whole picture. Treating the mouth as one system breaks that cycle.",
      },
      {
        question: "How is a complex case planned?",
        answer:
          "Planning comes before any treatment and includes 3D imaging, a detailed bite and jaw-joint assessment, a staged sequence, and a preview of the final result.",
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
    intro: [
      "After bone loss around a failed implant, the bone can usually be rebuilt so a new implant will hold, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. When an implant fails it often leaves behind less bone than it started with, because infection, looseness, and inflammation all eat away at the bone that holds an implant in place. Before a new implant can succeed, that bone usually has to be rebuilt — and rebuilding it well is the foundation of a successful revision.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Rebuilding Method", "When It's Used"],
          rows: [
            ["Bone grafting", "To rebuild lost width and height"],
            ["Guided regeneration", "Uses protective membranes to guide new bone"],
            ["Sinus lift", "For upper back teeth"],
            ["Zygomatic implants", "When grafting is not enough"],
          ],
        },
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
        question: "What causes bone loss around an implant?",
        answer:
          "Common drivers include infection around the implant, an implant that loosened and moved, long-term overload from a poor bite, or a site left empty too long after removal.",
      },
      {
        question: "How is bone measured before revision?",
        answer:
          "Revision planning starts with a 3D scan that shows exactly how much bone is left, its shape, and where nearby nerves and sinuses sit.",
      },
      {
        question: "How long does grafting take to heal?",
        answer:
          "It varies by case, but many grafts mature over roughly three to six months before an implant is placed.",
      },
      {
        question: "How is a repeat failure avoided?",
        answer:
          "A new implant is placed only after the rebuilt bone has healed, and the revised plan changes the size, position, or angle to avoid repeating the original problem.",
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
    intro: [
      "If your dental implants failed or never felt right, a second opinion can identify the real cause and give you a realistic plan, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. Many patients are unsure where to turn — going back to the original provider can feel uncomfortable, and the cause of the problem may not be clear. A second opinion from a surgeon who focuses on revision work can give you answers you can trust.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Consultation Step", "What It Covers"],
          rows: [
            ["Treatment history", "A detailed review of your previous treatment"],
            ["Clinical exam", "Examines the implants, gums, and bite"],
            ["3D imaging", "Assesses bone and implant position"],
            ["Diagnosis", "A clear explanation of what is happening and why"],
          ],
        },
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
        question: "When should I get a second opinion?",
        answer:
          "Consider one any time something feels off — a loose or painful implant, ongoing swelling or gum problems, a bite that never felt right, or a full-arch result that keeps breaking.",
      },
      {
        question: "What does the consultation include?",
        answer:
          "A revision consultation is a structured review: a detailed history of your previous treatment, a clinical exam of the implants, gums, and bite, 3D imaging, and a clear explanation of what is happening.",
      },
      {
        question: "What questions should I ask?",
        answer:
          "Helpful questions include what caused the failure, whether the implant can be saved, whether you will need grafting first, how long revision will take, and how a repeat will be prevented.",
      },
      {
        question: "Why does the cause matter most?",
        answer:
          "Replacing an implant without correcting why the first one failed simply repeats the problem, so a revision-focused surgeon addresses the root cause first.",
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
    intro: [
      "Dental implants placed abroad that hurt, loosen, or do not fit right can be redone with a clear, staged recovery plan, explains Dr. Alexander Antipov, a ",
      { text: "board-certified oral and maxillofacial surgeon", href: "https://www.aboms.org" },
      " in Roseville, CA. Many patients travel overseas to save money, and some have a good experience — but others return home with problems and little support to fix them. If that is your situation, there is a clear path forward.",
    ],
    disclaimer:
      "This article is for general education — consult a qualified oral surgeon for a personalized recommendation.",
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
        table: {
          headers: ["Step", "What Happens"],
          rows: [
            ["1. Complete assessment", "Clinical exam, 3D imaging, and a review of records to document what is going wrong"],
            ["2. Stabilize and treat infection", "Control any infection before rebuilding begins"],
            ["3. Rebuild the foundation", "Grafting or a sinus lift where bone was lost, then healing"],
            ["4. Replace and restore", "New implants with corrected planning and a balanced bite"],
          ],
        },
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
        question: "Why does overseas implant work sometimes need redoing?",
        answer:
          "Distance is the core challenge — when complications appear after you return home, the original provider is no longer reachable. Common problems include poor implant position, infection, an unbalanced bite, and bridges made from materials that crack.",
      },
      {
        question: "What is the first step in redoing the work?",
        answer:
          "A complete assessment: a clinical exam of every implant and the bite, 3D imaging, a review of any records from abroad, and a written summary of what can be saved.",
      },
      {
        question: "Is infection treated before rebuilding?",
        answer:
          "Yes. Any active infection or inflammation is controlled first to protect the bone you still have and prevent further loss.",
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
