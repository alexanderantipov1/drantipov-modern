export const siteUrl = "https://drantipov.com";
export const officePhone = "(916) 783-2110";
export const officePhoneHref = "tel:9167832110";
export const officeEmail = "info@drantipov.com";
export const officeAddress = "911 Reserve Dr, Suite 150, Roseville, CA 95678";

export interface SpanishCityPage {
  slug: string;
  city: string;
  region: string;
  country: string;
  title: string;
  description: string;
  headline: string;
  subtitle: string;
  proof: string[];
}

export const spanishHomePage: SpanishCityPage = {
  slug: "",
  city: "Roseville",
  region: "Sacramento, Bay Area, Reno, Los Angeles, Phoenix, Houston, Miami, Chicago",
  country: "United States",
  title: "Implantes dentales con Dr. Antipov — Roseville, California",
  description:
    "All-on-4, All-on-6, zygomatic implants y cirugía maxilofacial con Dr. Alexander Antipov en Roseville, California. CT 3D y consulta gratis. Financiamiento desde $99/mes.",
  headline: "Implantes dentales con Dr. Alexander Antipov",
  subtitle:
    "All-on-4, All-on-6, zygomatic implants, injerto óseo y dientes el mismo día cuando es posible. Hablamos español. Cuéntanos tu situación, ciudad y mejor forma de contactarte.",
  proof: [
    "Cirujano oral y maxilofacial certificado",
    "CT 3D y consulta gratis",
    "Financiamiento desde $99/mes — 0% APR hasta 84 meses",
  ],
};

export const spanishCityPages: SpanishCityPage[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "Los Angeles, East LA, San Fernando Valley, Long Beach",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Los Angeles",
    description:
      "All-on-4, All-on-6, zygomatic implants e injertos óseos para pacientes de Los Angeles que buscan un cirujano certificado con precios transparentes.",
    headline: "Implantes All-on-4 para pacientes de Los Angeles",
    subtitle:
      "Para pacientes en Los Angeles, East LA, Long Beach y el Valle. Cirujano certificado, precios claros, financiamiento accesible. Vuelo corto a Sacramento, plan completo en pocos días.",
    proof: ["Vuelo de 1 hora a Sacramento", "Habla español con el equipo", "Plan transparente sin sorpresas"],
  },
  {
    slug: "san-diego",
    city: "San Diego",
    region: "San Diego, Chula Vista, Escondido, Oceanside",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de San Diego",
    description:
      "Implantes All-on-4 y zygomatic implants para pacientes de San Diego con consulta gratis 3D CT y financiamiento accesible.",
    headline: "Implantes dentales para pacientes de San Diego",
    subtitle:
      "Para pacientes en San Diego y Chula Vista. Vuelo corto, todo el tratamiento concentrado en pocos días, financiamiento desde $99/mes con 0% APR.",
    proof: ["San Diego / South Bay", "CT 3D gratis", "Financiamiento 0% APR hasta 84 meses"],
  },
  {
    slug: "san-jose",
    city: "San Jose",
    region: "San Jose, Bay Area, Silicon Valley, Santa Clara",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes del Bay Area",
    description:
      "All-on-4, All-on-6 y zygomatic implants para pacientes de San Jose y el Bay Area. Cirujano certificado en Roseville.",
    headline: "Implantes dentales para pacientes de San Jose y Bay Area",
    subtitle:
      "A 2 horas en auto del consultorio en Roseville. Cirujano oral certificado, plan claro, financiamiento accesible.",
    proof: ["Bay Area / Silicon Valley", "2 horas en auto", "Plan completo en pocos días"],
  },
  {
    slug: "fresno",
    city: "Fresno",
    region: "Fresno, Visalia, Bakersfield, Central Valley",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Fresno",
    description:
      "Implantes dentales y All-on-4 para pacientes del Central Valley. CT 3D y consulta gratis con cirujano certificado.",
    headline: "Implantes dentales para pacientes del Central Valley",
    subtitle:
      "Para pacientes en Fresno, Visalia y Bakersfield. 3 horas en auto al consultorio, todo el tratamiento concentrado para minimizar viajes.",
    proof: ["Central Valley", "Una sola visita inicial", "Financiamiento desde $99/mes"],
  },
  {
    slug: "sacramento",
    city: "Sacramento",
    region: "Sacramento, Roseville, Folsom, Elk Grove",
    country: "United States",
    title: "Dr. Antipov — implantes dentales en Sacramento",
    description:
      "Cirujano oral y maxilofacial certificado en Roseville (Sacramento metro). All-on-4, zygomatic implants y consultas en español.",
    headline: "Implantes dentales para pacientes de Sacramento",
    subtitle:
      "Consultorio en Roseville a 20 minutos del centro de Sacramento. Hablamos español. CT 3D gratis. Plan transparente.",
    proof: ["Roseville cerca de Sacramento", "20 min del centro", "Habla español"],
  },
  {
    slug: "phoenix",
    city: "Phoenix",
    region: "Phoenix, Mesa, Scottsdale, Tempe",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Phoenix",
    description:
      "All-on-4 y zygomatic implants para pacientes de Phoenix y Arizona. Cirujano certificado, CT 3D gratis.",
    headline: "Implantes dentales para pacientes de Phoenix y Arizona",
    subtitle:
      "Vuelo corto desde Phoenix a Sacramento, plan completo concentrado en pocos días. Financiamiento accesible.",
    proof: ["Vuelo desde Phoenix", "Plan en pocos días", "0% APR hasta 84 meses"],
  },
  {
    slug: "houston",
    city: "Houston",
    region: "Houston, Sugar Land, The Woodlands",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Houston",
    description:
      "Implantes All-on-4 y casos complejos para pacientes de Houston. Plan transparente con cirujano certificado en California.",
    headline: "Implantes dentales para pacientes de Houston",
    subtitle:
      "Para pacientes que buscan precio transparente y cirujano certificado fuera del mercado de Houston. Vuelo directo a Sacramento.",
    proof: ["Houston metro", "Vuelo directo SAT–SMF", "Plan completo concentrado"],
  },
  {
    slug: "dallas",
    city: "Dallas",
    region: "Dallas, Fort Worth, Plano, Arlington",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Dallas",
    description:
      "All-on-4 y zygomatic implants para pacientes de Dallas-Fort Worth con consulta gratis CT 3D.",
    headline: "Implantes dentales para pacientes de Dallas-Fort Worth",
    subtitle:
      "Para pacientes en Dallas, Fort Worth y Plano. Vuelo directo a Sacramento, plan concentrado, precio claro.",
    proof: ["DFW metro", "Vuelo directo a SMF", "Sin sorpresas en el precio"],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "Miami, Hialeah, Doral, Coral Gables",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Miami",
    description:
      "Implantes All-on-4 y zygomatic implants para pacientes de Miami que buscan cirujano certificado y precios transparentes.",
    headline: "Implantes dentales para pacientes de Miami",
    subtitle:
      "Para pacientes en Miami, Hialeah y South Florida que comparan opciones. Vuelo cross-country, plan concentrado, financiamiento accesible.",
    proof: ["South Florida", "Plan completo", "Habla español"],
  },
  {
    slug: "chicago",
    city: "Chicago",
    region: "Chicago, Cicero, Aurora, Naperville",
    country: "United States",
    title: "Dr. Antipov — implantes dentales para pacientes de Chicago",
    description:
      "All-on-4 y casos complejos de implantes para pacientes de Chicago y suburbios. Plan transparente con cirujano certificado.",
    headline: "Implantes dentales para pacientes de Chicago",
    subtitle:
      "Para pacientes en Chicago, Cicero y los suburbios. Vuelo directo a Sacramento, plan completo en pocos días.",
    proof: ["Chicago metro", "Vuelo directo ORD–SMF", "Cirujano certificado"],
  },
];

export const treatmentOptions = [
  "All-on-4 / All-on-6 arco completo",
  "Zygomatic implants / pérdida ósea severa",
  "Uno o varios implantes",
  "Injerto óseo / sinus lift",
  "Segunda opinión / aún no estoy seguro/a",
];

export const contactOptions = ["Llamada", "SMS", "WhatsApp", "Telegram", "Email"];
export const timingOptions = ["Esta semana", "Este mes", "Estoy investigando opciones"];

export const processSteps = [
  {
    title: "Cuéntanos tu situación",
    body: "Un implante, All-on-4, injerto óseo, zygomatic implants o segunda opinión.",
  },
  {
    title: "Intake personal",
    body: "El equipo confirma ciudad, plazos, preguntas de presupuesto y mejor forma de contacto.",
  },
  {
    title: "CT 3D y consulta gratis",
    body: "En el consultorio de Roseville, Dr. Antipov evalúa anatomía, opciones de tratamiento y financiamiento.",
  },
  {
    title: "Cirugía y seguimiento",
    body: "Cirugía guiada por computadora, dientes el mismo día cuando es posible, y seguimiento hasta el resultado final.",
  },
];

export function getSpanishCityPage(slug: string) {
  return spanishCityPages.find((page) => page.slug === slug);
}
