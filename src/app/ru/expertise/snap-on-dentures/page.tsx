import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { ruServicePages } from "@/constants/ruServicePages";

const data = ruServicePages["snap-on-dentures"];

export const metadata = finalizeMetadata(buildServiceMetadata(data, "ru"), "/ru/expertise/snap-on-dentures");

export default function Page() {
  return <ServicePageTemplate data={data} locale="ru" />;
}
