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
      "Sacramento — California's capital and a major regional medical hub. Many of our patients commute from downtown, Midtown, Land Park, Pocket-Greenhaven, and Natomas looking for affordable dental implants in Sacramento without the corporate-chain markup: specialist tooth implants, full-arch restoration, and transparent pricing 20 minutes up I-80.",
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
      "Folsom is home to many tech and engineering professionals from Intel and the surrounding business parks. Our patients here typically prioritize precision diagnostics, 3D CT planning, and minimally invasive techniques — coming to us for dental implants, wisdom teeth removal, and the full range of oral surgery Folsom residents would otherwise travel for.",
    servicesEmphasis: ["implants", "cosmetic", "full-arch", "jaw-surgery"],
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
  {
    slug: "elk-grove",
    city: "Elk Grove",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "35 min",
    distanceMi: 30,
    lat: 38.4088,
    lng: -121.3716,
    landmarks: [
      "Elk Grove Regional Park",
      "Outlets at Elk Grove",
      "District56",
      "Old Town Elk Grove",
      "Cosumnes River College",
    ],
    routes: [
      "Highway 99 North to Highway 65 / I-80 (about 35 minutes)",
      "I-5 North to I-80 East via Capital City Freeway",
      "Elk Grove Boulevard to Highway 99 North",
    ],
    demographic:
      "Elk Grove — including the Elk Grove Village and Laguna areas — is one of the fastest-growing communities in the Sacramento region, and a steady source of patients seeking dental implants, implant restorations, full-arch restoration, and wisdom-tooth surgery from a board-certified oral surgeon. Patients searching for a dental implant center near Elk Grove find board-certified specialist care a short drive up I-80.",
    servicesEmphasis: ["implants", "full-arch", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "25 min",
    distanceMi: 22,
    lat: 38.6857,
    lng: -121.0822,
    landmarks: [
      "El Dorado Hills Town Center",
      "Folsom Lake",
      "Serrano Country Club",
      "Marble Valley",
      "Bass Lake",
    ],
    routes: [
      "US-50 East to El Dorado Hills Boulevard, then I-80 / Hwy 65 to Roseville (about 25 minutes)",
      "Latrobe Road to US-50 West, then Hazel Avenue North",
      "Green Valley Road to Folsom, then Folsom-Auburn Road North",
    ],
    demographic:
      "El Dorado Hills is an affluent foothill community whose patients frequently choose full-arch implants, single-tooth implants, and bone grafting with an experienced surgical specialist.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "cosmetic"],
  },
  {
    slug: "auburn",
    city: "Auburn",
    state: "CA",
    stateName: "California",
    region: "Placer County",
    driveTime: "22 min",
    distanceMi: 17,
    lat: 38.8966,
    lng: -121.0769,
    landmarks: [
      "Historic Old Town Auburn",
      "Auburn State Recreation Area",
      "Placer County Courthouse",
      "Sutter Auburn Faith Hospital",
      "Recreation Park",
    ],
    routes: [
      "I-80 West to Roseville (about 22 minutes)",
      "Highway 49 South to I-80 West",
      "Auburn-Folsom Road South to Douglas Boulevard",
    ],
    demographic:
      "Auburn anchors the Placer County foothills, and many of its patients travel a short stretch of I-80 for dental implants, full-arch reconstruction, and corrective jaw surgery.",
    servicesEmphasis: ["implants", "full-arch", "jaw-surgery", "bone-grafting"],
  },
  {
    slug: "citrus-heights",
    city: "Citrus Heights",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "15 min",
    distanceMi: 10,
    lat: 38.7071,
    lng: -121.281,
    landmarks: [
      "Sunrise Mall",
      "Rusch Park",
      "Sayonara Park",
      "Mitchell Farms",
      "San Juan Unified schools",
    ],
    routes: [
      "Antelope Road to Roseville (about 15 minutes)",
      "I-80 East to Douglas Boulevard",
      "Greenback Lane to Auburn Boulevard North",
    ],
    demographic:
      "Citrus Heights sits just minutes from our Roseville office, making it one of the most convenient communities we serve for implants, full-arch restoration, and oral surgery.",
    servicesEmphasis: ["implants", "full-arch", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "rancho-cordova",
    city: "Rancho Cordova",
    state: "CA",
    stateName: "California",
    region: "Sacramento Metro",
    driveTime: "25 min",
    distanceMi: 20,
    lat: 38.5891,
    lng: -121.3027,
    landmarks: [
      "Mather Field",
      "American River Parkway",
      "Folsom Boulevard corridor",
      "Hagan Community Park",
      "Nimbus Fish Hatchery",
    ],
    routes: [
      "Hazel Avenue North to I-80 West, then Hwy 65 to Roseville (about 25 minutes)",
      "US-50 West to Capital City Freeway / I-80 East",
      "Sunrise Boulevard North to Antelope Road",
    ],
    demographic:
      "Rancho Cordova is a growing employment and residential hub along US-50 whose patients regularly choose us for dental implants, full-arch restoration, and bone grafting.",
    servicesEmphasis: ["implants", "full-arch", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "vacaville",
    city: "Vacaville",
    state: "CA",
    stateName: "California",
    region: "Solano County",
    driveTime: "45 min",
    distanceMi: 45,
    lat: 38.3566,
    lng: -121.9877,
    landmarks: [
      "Vacaville Premium Outlets",
      "Andrews Park",
      "NorthBay VacaValley Hospital",
      "Lagoon Valley Park",
      "Nut Tree Plaza",
    ],
    routes: [
      "I-80 East to Roseville via the Capital City Freeway (about 45 minutes)",
      "I-505 to I-80 East",
      "Leisure Town Road to I-80 East",
    ],
    demographic:
      "Vacaville patients along the I-80 corridor often choose Dr. Antipov for full-arch implants, implant overdentures, and complex restorative cases that benefit from a board-certified surgeon.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "vallejo",
    city: "Vallejo",
    state: "CA",
    stateName: "California",
    region: "Solano County",
    driveTime: "60 min",
    distanceMi: 62,
    lat: 38.1041,
    lng: -122.2566,
    landmarks: [
      "Six Flags Discovery Kingdom",
      "Mare Island",
      "Vallejo Waterfront",
      "Sutter Solano Medical Center",
      "California State University Maritime Academy",
    ],
    routes: [
      "I-80 East to Roseville via the Capital City Freeway (about 60 minutes)",
      "Highway 37 to I-80 East",
      "Columbus Parkway to I-80 East",
    ],
    demographic:
      "Vallejo patients seeking advanced full-arch implant reconstruction and corrective jaw surgery travel up the I-80 corridor for Dr. Antipov's surgical experience.",
    servicesEmphasis: ["full-arch", "implants", "jaw-surgery", "bone-grafting"],
  },
  {
    slug: "fairfield",
    city: "Fairfield",
    state: "CA",
    stateName: "California",
    region: "Solano County",
    driveTime: "55 min",
    distanceMi: 55,
    lat: 38.2494,
    lng: -122.0399,
    landmarks: [
      "Solano Town Center",
      "Travis Air Force Base",
      "NorthBay Medical Center",
      "Rockville Hills Regional Park",
      "Jelly Belly Factory",
    ],
    routes: [
      "I-80 East to Roseville via the Capital City Freeway (about 55 minutes)",
      "Suisun Valley Road to I-80 East",
      "Highway 12 to I-80 East",
    ],
    demographic:
      "Fairfield, home to Travis Air Force Base, sends patients up I-80 for full-mouth dental implants, full-arch restoration, and oral and maxillofacial surgery.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "oroville",
    city: "Oroville",
    state: "CA",
    stateName: "California",
    region: "Butte County",
    driveTime: "55 min",
    distanceMi: 55,
    lat: 39.5138,
    lng: -121.5564,
    landmarks: [
      "Lake Oroville",
      "Oroville Dam",
      "Feather River",
      "Historic Downtown Oroville",
      "Oroville Hospital",
    ],
    routes: [
      "Highway 70 South to Highway 65 South into Roseville (about 55 minutes)",
      "Highway 99 South to Highway 65 South",
      "Highway 162 to Highway 70 South",
    ],
    demographic:
      "Oroville and the greater Butte County area send patients south for full-arch implant reconstruction, dental implants, and corrective surgery from a board-certified specialist.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "roseville",
    city: "Roseville",
    state: "CA",
    stateName: "California",
    region: "Placer County",
    driveTime: "5 min",
    distanceMi: 2,
    lat: 38.7521,
    lng: -121.288,
    landmarks: [
      "Westfield Galleria at Roseville",
      "Sutter Roseville Medical Center",
      "Kaiser Permanente Roseville",
      "Fountains at Roseville",
      "Maidu Regional Park",
    ],
    routes: [
      "Douglas Boulevard to Reserve Drive — minutes from anywhere in Roseville",
      "I-80, exit Douglas Boulevard East",
      "Highway 65, exit Galleria Boulevard to Reserve Drive",
    ],
    demographic:
      "Roseville is home — our office sits on Reserve Drive near the Westfield Galleria. Patients searching for dental implants in Roseville, an implant dentist near Roseville, or full-arch (All-on-4) restoration get board-certified oral surgery care right in their own city, along with emergency oral surgery, wisdom teeth removal, and full mouth rehabilitation.",
    servicesEmphasis: ["implants", "full-arch", "jaw-surgery", "bone-grafting"],
  },
  {
    slug: "orinda",
    city: "Orinda",
    state: "CA",
    stateName: "California",
    region: "East Bay (Contra Costa)",
    driveTime: "1 hr 25 min",
    distanceMi: 95,
    lat: 37.8771,
    lng: -122.1802,
    landmarks: [
      "Orinda Theatre",
      "Orinda Village",
      "BART Orinda Station",
      "Briones Regional Park",
      "Moraga Country Club",
    ],
    routes: [
      "Highway 24 East → I-680 North → I-80 East to Roseville (about 1 hr 25 min)",
      "I-80 East through Sacramento to Douglas Boulevard",
      "Highway 24 → I-80 East via Fairfield and Vacaville",
    ],
    demographic:
      "Orinda and Lamorinda-area patients travel to Roseville for specialist procedures that are hard to find locally — same-day dental implants, All-on-4 and All-on-6 full-arch restoration, and zygomatic implants for severe bone loss — often finding the drive worthwhile for board-certified surgical care at competitive Sacramento-area pricing.",
    servicesEmphasis: ["full-arch", "implants", "bone-grafting", "jaw-surgery"],
  },
  {
    slug: "placerville",
    city: "Placerville",
    state: "CA",
    stateName: "California",
    region: "El Dorado County",
    driveTime: "40 min",
    distanceMi: 38,
    lat: 38.7296,
    lng: -120.7985,
    landmarks: [
      "Historic Main Street Placerville",
      "Marshall Medical Center",
      "Apple Hill",
      "El Dorado County Fairgrounds",
      "Gold Bug Park & Mine",
    ],
    routes: [
      "Highway 50 West → El Dorado Hills Boulevard → Highway 50 to I-80 North (about 40 minutes)",
      "Highway 50 West to Folsom, then Folsom-Auburn Road north",
      "Green Valley Road west toward El Dorado Hills and Folsom",
    ],
    demographic:
      "Placerville and the El Dorado County foothills send patients down Highway 50 for full-arch restoration, dental implants, and complex oral surgery — specialist care that the foothill communities typically have to travel for.",
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
