import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone, Mail, Calendar, HelpCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/constants/siteConfig"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Alexander Antipov",
  description:
    "Find answers to common questions about dental implants, oral surgery procedures, insurance, and what to expect when you visit Dr. Antipov's practice.",
  openGraph: {
    title: "Frequently Asked Questions | Dr. Alexander Antipov",
    description:
      "Get answers to your questions about dental implants, oral surgery, insurance coverage, and patient care.",
    url: `${siteConfig.url}/for-patients/faqs`,
  },
}

const faqCategories = [
  {
    category: "Dental Implants",
    icon: "🦷",
    questions: [
      {
        question: "What are dental implants and how do they work?",
        answer:
          "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They fuse with your bone through osseointegration, providing a stable foundation for replacement teeth (crowns, bridges, or dentures). Implants look, feel, and function like natural teeth and can last a lifetime with proper care.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most adults with good general health are candidates for dental implants. You need adequate bone density and healthy gums. Dr. Antipov will perform a comprehensive evaluation including 3D imaging to assess your bone structure. If you lack sufficient bone, bone grafting can often make implants possible. Certain conditions like uncontrolled diabetes or heavy smoking may affect candidacy.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "Dental implants can last a lifetime with proper care. The titanium implant itself is extremely durable and typically doesn't need replacement. The crown or restoration may need replacement after 10-15 years due to normal wear. Success rates exceed 95% for properly maintained implants. Good oral hygiene and regular dental checkups are essential for longevity.",
      },
      {
        question: "Is the implant procedure painful?",
        answer:
          "Most patients report minimal discomfort during and after implant surgery. The procedure is performed under local anesthesia, and sedation options are available. Post-operative discomfort is typically less than tooth extraction and manageable with over-the-counter or prescribed pain medication. Most patients return to normal activities within 1-2 days.",
      },
      {
        question: "How long does the implant process take?",
        answer:
          "The complete process typically takes 3-6 months. Initial implant placement surgery takes 1-2 hours per implant. After placement, osseointegration (bone fusion) requires 3-4 months for lower jaw, 4-6 months for upper jaw. Once integrated, your restorative dentist places the final crown. In some cases, immediate loading with temporary teeth is possible.",
      },
    ],
  },
  {
    category: "Full-Arch Restoration",
    icon: "😁",
    questions: [
      {
        question: "What is All-on-4 or All-on-X treatment?",
        answer:
          "All-on-4 (or All-on-X) is a full-arch restoration technique that replaces all teeth in one jaw using just 4-6 strategically placed implants. The posterior implants are angled to maximize bone contact and avoid anatomical structures. This allows for immediate temporary teeth the same day as surgery in most cases, with final prosthesis placed after healing.",
      },
      {
        question: "Can I get teeth the same day as surgery?",
        answer:
          "Yes, in most cases. Dr. Antipov uses advanced digital planning and immediate loading protocols to provide you with functional temporary teeth on the same day as your implant surgery. These temporaries allow you to eat soft foods immediately. After 3-6 months of healing, they're replaced with your permanent, custom prosthesis.",
      },
      {
        question: "What is the difference between implant dentures and traditional dentures?",
        answer:
          "Implant-supported dentures are fixed in place by dental implants and don't move or slip. They provide much greater chewing power (70-90% of natural teeth vs. 25% for traditional dentures), don't require adhesives, feel more natural, and preserve jawbone. Traditional dentures rest on gums, can slip, require adhesives, and allow continued bone loss.",
      },
      {
        question: "How do I care for full-arch implant restorations?",
        answer:
          "Care is similar to natural teeth but requires specific techniques. Brush twice daily with a soft brush, use water flossers or specialized implant floss to clean under the prosthesis, and attend regular hygiene appointments every 3-4 months. Your prosthesis should be professionally cleaned and inspected annually. Proper care ensures long-term success.",
      },
    ],
  },
  {
    category: "Bone Grafting & Procedures",
    icon: "🦴",
    questions: [
      {
        question: "What is bone grafting and why might I need it?",
        answer:
          "Bone grafting rebuilds or augments jawbone that has deteriorated due to tooth loss, gum disease, or trauma. It's often necessary before implant placement to ensure adequate bone volume and density. Dr. Antipov uses advanced materials including autografts (your own bone), allografts (donor bone), and synthetic materials to rebuild bone structure.",
      },
      {
        question: "How long does bone grafting healing take?",
        answer:
          "Minor grafting procedures heal in 3-4 months before implant placement. Major grafting like sinus lifts or ridge augmentation may require 4-6 months. In some cases, implants can be placed simultaneously with grafting. Dr. Antipov will create a personalized timeline based on your specific procedure and healing progress.",
      },
      {
        question: "What is a sinus lift?",
        answer:
          "A sinus lift (sinus augmentation) adds bone to the upper jaw in the molar/premolar area by lifting the sinus membrane and placing bone graft material. This is necessary when the sinus cavity is too close to the jaw or when bone height is insufficient for implants. It's a routine procedure with high success rates that enables implant placement in the upper jaw.",
      },
    ],
  },
  {
    category: "Insurance & Cost",
    icon: "💳",
    questions: [
      {
        question: "Does insurance cover dental implants?",
        answer:
          "Coverage varies by insurance plan. Many dental plans provide partial coverage for implants, typically treating them like other major restorative procedures (40-50% coverage after deductible). Medical insurance may cover implants if tooth loss was due to accident or medical condition. Our office provides detailed cost estimates and works with your insurance to maximize benefits.",
      },
      {
        question: "What is the cost of dental implants?",
        answer:
          "Costs vary based on complexity, number of implants, and any preparatory procedures needed (grafting, extractions). Single implants typically range from $3,000-$5,000 including surgery and restoration. Full-arch solutions range from $20,000-$40,000 per arch. We provide detailed written estimates after your consultation and offer financing options.",
      },
      {
        question: "Do you offer payment plans or financing?",
        answer:
          "Yes, we work with several healthcare financing companies offering flexible payment plans with various terms and interest rates, including 0% interest options for qualified patients. We also accept major credit cards and can create in-house payment arrangements for certain procedures. Our financial coordinator will discuss all options during your consultation.",
      },
      {
        question: "Is the consultation free?",
        answer:
          "Initial consultations with Dr. Antipov are complimentary for referred patients. The consultation includes examination, review of your dental history, discussion of treatment options, and preliminary cost estimates. If diagnostic imaging (3D CT scan) is needed for treatment planning, there may be a separate fee which is often covered by insurance.",
      },
    ],
  },
  {
    category: "Corrective Jaw Surgery",
    icon: "🔧",
    questions: [
      {
        question: "What is orthognathic (jaw) surgery?",
        answer:
          "Orthognathic surgery corrects significant jaw misalignments that affect bite, function, breathing, and facial appearance. It repositions the upper jaw (maxilla), lower jaw (mandible), or both to proper alignment. This surgery can treat severe underbites, overbites, open bites, facial asymmetry, TMJ disorders, and obstructive sleep apnea.",
      },
      {
        question: "How long is recovery from jaw surgery?",
        answer:
          "Initial recovery takes 2-3 weeks when most swelling subsides and you return to light activities. Full healing takes 6-8 weeks, with complete bone healing at 12 weeks. You'll be on a modified diet for 6-8 weeks. Most patients return to work/school after 2-3 weeks. Dr. Antipov provides detailed recovery guidelines and closely monitors your progress.",
      },
      {
        question: "Will I need braces with jaw surgery?",
        answer:
          "Yes, orthognathic surgery is typically combined with orthodontics. You'll wear braces before surgery (12-18 months) to align teeth within each jaw, during surgery to guide positioning, and after surgery (6-12 months) to finalize alignment. This collaboration between Dr. Antipov and your orthodontist ensures optimal functional and aesthetic results.",
      },
      {
        question: "Is jaw surgery covered by insurance?",
        answer:
          "Medical insurance often covers orthognathic surgery when it's medically necessary to correct functional problems like breathing difficulties, TMJ disorders, significant bite problems, or sleep apnea. Purely cosmetic procedures typically aren't covered. Our office works extensively with insurance companies and will verify your coverage and handle pre-authorization.",
      },
    ],
  },
  {
    category: "General Questions",
    icon: "❓",
    questions: [
      {
        question: "Do I need a referral from my dentist?",
        answer:
          "While not required, most of our patients are referred by their general dentist. Dentists refer to Dr. Antipov for complex cases requiring specialized surgical expertise. You can also self-refer by contacting our office directly. We maintain close communication with your dentist throughout treatment to ensure coordinated care.",
      },
      {
        question: "What sedation options do you offer?",
        answer:
          "We offer multiple sedation options: local anesthesia only, nitrous oxide (laughing gas), oral sedation (pills), IV sedation (twilight sleep), and general anesthesia. The choice depends on procedure complexity, length, your anxiety level, and medical history. Dr. Antipov will recommend appropriate options during your consultation.",
      },
      {
        question: "How soon can I return to work after surgery?",
        answer:
          "This varies by procedure type. Simple implant placement: 1-2 days. Multiple implants or bone grafting: 2-3 days. Full-arch restoration: 3-5 days. Jaw surgery: 2-3 weeks. Most patients take 2-3 days off for implant procedures. We provide specific guidance based on your procedure and occupation.",
      },
      {
        question: "What should I do in a dental emergency?",
        answer:
          "Contact our office immediately at (916) 783-2110. We provide 24/7 emergency coverage for our patients. Common emergencies include uncontrolled bleeding, severe pain, infection signs (fever, swelling), or trauma. We'll provide phone guidance and arrange to see you promptly, often the same day for urgent situations.",
      },
      {
        question: "How do I prepare for my first consultation?",
        answer:
          "Bring your insurance information, list of current medications, relevant medical records, and recent dental X-rays if available. Write down questions you want to ask. If you're anxious, bring a family member or friend for support. The consultation typically lasts 45-60 minutes and is relaxed and informative.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/20 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about dental implants, oral surgery
            procedures, and patient care. Can't find what you're looking for?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>

        {/* Quick Contact */}
        <Card className="p-6 mb-12 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-white/20">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Schedule a consultation or contact us
              directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.contact.phone}
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="border border-white/10 rounded-lg px-6 data-[state=open]:bg-white/5"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        {/* Emergency Information */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-sm border-destructive/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-destructive">
              Emergency Care Available
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're experiencing a dental emergency such as severe pain,
              uncontrolled bleeding, significant swelling, or trauma, contact us
              immediately.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="destructive" size="lg" asChild>
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: {siteConfig.contact.phone}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground w-full mt-2">
                {siteConfig.hours.emergency}
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Resources */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-white/20 hover:border-primary/30 transition-colors">
            <h3 className="font-semibold mb-2">Pre-Op Instructions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Prepare for your upcoming surgery
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/for-patients/pre-op">View Instructions</Link>
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-white/20 hover:border-primary/30 transition-colors">
            <h3 className="font-semibold mb-2">Post-Op Care</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recovery guidelines and tips
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/for-patients/post-op">View Guidelines</Link>
            </Button>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-white/20 hover:border-primary/30 transition-colors">
            <h3 className="font-semibold mb-2">Patient Testimonials</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Read about patient experiences
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/for-patients/testimonials">Read Stories</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
