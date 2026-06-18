/**
 * City data for /locations/[city] pages.
 * Used to render unique, SEO-optimized landing pages for each metro
 * served by Dr. Antipov's Roseville office.
 *
 * Each city contains:
 * - slug:        URL slug (matches /locations/[slug])
 * - city:        display name
 * - state:       state code
 * - region:      e.g. "Sacramento Metro"
 * - driveTime:   approx. driving time from Roseville office
 * - distanceMi:  approx. distance in miles
 * - lat/lng:     geo coordinates (city centroid) — used in LocalBusiness schema areaServed
 * - landmarks:   nearby landmarks / well-known places (3–5)
 * - routes:      typical driving routes from the city to the Roseville office
 * - demographic: short demographic / community blurb (1 sentence)
 * - servicesEmphasis: which services are most relevant for this market
 */

export interface CityPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  region: string;
  driveTime: string;
  distanceMi: number;
  lat: number;
  lng: number;
  landmarks: string[];
  routes: string[];
  demographic: string;
  servicesEmphasis: ("implants" | "jaw-surgery" | "cosmetic" | "sleep-apnea" | "bone-grafting" | "full-arch")[];
}

export const cities: CityPage[] = [
  {
    slug: "sacramento",
    city: "Sacramento",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "20 min",
    distanceMi: 18,
    lat: 38.5816,
    lng: -121.4944,
    landmarks: [
      "California State Capitol",
      "Sutter Medical Center",
      "Sacramento State University",
      "UC Davis Medical Center",
      "Old Sacramento Waterfront",
    ],
    routes: [
      "I-80 East from Downtown Sacramento (about 20 minutes)",
      "Capital City Freeway → I-80 East via Watt Avenue",
      "Highway 65 North from Roseville Road",
    ],
    demographic:
      "Sacramento — California's capital and a major regional medical hub. Many of our patients commute from downtown, Midtown, Land Park, Pocket-Greenhaven, and Natomas.",
    servicesEmphasis: ["jaw-surgery", "full-arch", "implants", "cosmetic"],
  },
  {
    slug: "folsom",
    city: "Folsom",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "20 min",
    distanceMi: 17,
    lat: 38.678,
    lng: -121.176,
    landmarks: [
      "Folsom Lake",
      "Intel Folsom Campus",
      "Historic Folsom (Sutter Street)",
      "Mercy Hospital of Folsom",
      "Palladio at Broadstone",
    ],
    routes: [
      "Highway 50 West → Highway 65 North (about 22 minutes)",
      "Folsom-Auburn Road North to Douglas Boulevard",
      "Iron Point Road to Highway 50",
    ],
    demographic:
      "Folsom is home to many tech and engineering professionals from Intel and the surrounding business parks. Our patients here typically prioritize precision diagnostics, 3D CT planning, and minimally invasive techniques.",
    servicesEmphasis: ["implants", "cosmetic", "implants", "jaw-surgery"],
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "8 min",
    distanceMi: 4,
    lat: 38.7907,
    lng: -121.2358,
    landmarks: [
      "Rocklin Quarry Park",
      "Sierra College",
      "Whitney Oaks",
      "Stanford Ranch",
      "Quarry Park Adventures",
    ],
    routes: [
      "Pacific Street to Sunset Boulevard, then south to Reserve Drive (about 8 minutes)",
      "I-80 East/West, exit Rocklin Road",
      "Stanford Ranch Road to Park Drive",
    ],
    demographic:
      "Rocklin is our closest neighbor — just minutes from the office. Families, Sierra College students, and retirees from Whitney Oaks regularly choose our practice for convenience and proximity.",
    servicesEmphasis: ["implants", "jaw-surgery", "full-arch", "bone-grafting"],
  },
  {
    slug: "granite-bay",
    city: "Granite Bay",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "10 min",
    distanceMi: 6,
    lat: 38.7626,
    lng: -121.1641,
    landmarks: [
      "Folsom Lake (Granite Bay entrance)",
      "Granite Bay Golf Club",
      "Eureka Schools",
      "Treelake Village",
      "Beals Point",
    ],
    routes: [
      "Douglas Boulevard West to Sierra College Boulevard (about 10 minutes)",
      "Auburn-Folsom Road North to Douglas Boulevard",
      "Cavitt-Stallman Road to Eureka Road",
    ],
    demographic:
      "Granite Bay residents often combine our visits with errands along Douglas Boulevard. We see many patients from the Treelake, Wexford, and Los Lagos communities for advanced implant and cosmetic procedures.",
    servicesEmphasis: ["implants", "cosmetic", "full-arch", "jaw-surgery"],
  },
  {
    slug: "lincoln",
    city: "Lincoln",
    state: "CA",
    stateName: "California",
    region: "Placer County",
    driveTime: "15 min",
    distanceMi: 9,
    lat: 38.8916,
    lng: -121.293,
    landmarks: [
      "Lincoln Hills (Sun City)",
      "Thunder Valley Casino Resort",
      "Twelve Bridges Golf Club",
      "Lincoln Crossing",
      "Catta Verdera Country Club",
    ],
    routes: [
      "Highway 65 South to Galleria Boulevard (about 15 minutes)",
      "Joiner Parkway to Highway 65 South",
      "Twelve Bridges Drive to Highway 65 South",
    ],
    demographic:
      "Lincoln, including the Sun City Lincoln Hills active-adult community, is a major source of patients for full-arch implant restoration and corrective surgery. Many of our retirees choose us for surgical experience with bone grafting and All-on-4 / All-on-X reconstruction.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "jaw-surgery"],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug);
}

export const citySlugs = cities.map((c) => c.slug);

/** Lowercased unique state slugs used in /locations/[state] URLs (e.g. "ca"). */
export const stateSlugs = Array.from(
  new Set(cities.map((c) => c.state.toLowerCase()))
);

/** Map a state slug ("ca") to its full display name ("California"). */
export function getStateName(stateSlug: string): string | undefined {
  return cities.find((c) => c.state.toLowerCase() === stateSlug.toLowerCase())
    ?.stateName;
}

/** All cities in a given state slug, in declaration order. */
export function getCitiesByState(stateSlug: string): CityPage[] {
  return cities.filter(
    (c) => c.state.toLowerCase() === stateSlug.toLowerCase()
  );
}

/** Resolve a city by its state slug + city slug (validates both segments). */
export function getCityByStateAndSlug(
  stateSlug: string,
  citySlug: string
): CityPage | undefined {
  return cities.find(
    (c) =>
      c.state.toLowerCase() === stateSlug.toLowerCase() && c.slug === citySlug
  );
}

/** Canonical path for a city page under the state/city hierarchy. */
export function cityPath(city: Pick<CityPage, "slug" | "state">): string {
  return `/locations/${city.state.toLowerCase()}/${city.slug}`;
}
