import Link from "next/link";
import Image from "next/image";
import { Home, Phone, MapPin, Users, Calendar, Stethoscope } from "lucide-react";

export const metadata = {
  title: "Page Not Found — Dr. Antipov",
  description: "The page you were looking for couldn't be found. Try one of the suggested links below or call our Roseville office.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/", label: "Homepage", icon: Home, desc: "Back to the main page" },
  { href: "/our-team", label: "Our Team", icon: Users, desc: "Meet Dr. Antipov & Dr. Kahwach" },
  { href: "/expertise", label: "Expertise", icon: Stethoscope, desc: "Surgical & implant services" },
  { href: "/locations", label: "Locations", icon: MapPin, desc: "Roseville office & service area" },
  { href: "/contact", label: "Contact", icon: Calendar, desc: "Schedule a consultation" },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-navy via-navy-dark to-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 75% 80%, rgba(26,187,156,0.5) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block">
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">
                Error 404
              </span>
            </div>
            <h1 className="mt-3 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              That page got lost on the way to the operating room.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
              The page you were looking for doesn't exist or has moved. Here are some places that
              probably have what you need.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              >
                <Home className="h-4 w-4" />
                Back to homepage
              </Link>
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call (916) 783-2110
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md border border-white/15 p-2">
              <Image
                src="/images/drantipov.png"
                alt="Dr. Alexander V. Antipov, DDS"
                width={500}
                height={650}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-4">
            Or pick a destination
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {QUICK_LINKS.map(({ href, label, icon: Icon, desc }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 hover:bg-white/15 hover:border-primary/50 transition-all"
              >
                <Icon className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-xs text-white/60 mt-0.5 leading-snug">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
