import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { ruServicePages } from "@/constants/ruServicePages";
import RuServiceDetailsLinks from "@/components/ru-home/RuServiceDetailsLinks";

const data = ruServicePages["implant-rescue"];

export const metadata = finalizeMetadata(buildServiceMetadata(data, "ru"), "/ru/expertise/implant-rescue");

export default function Page() {
  return <><ServicePageTemplate data={data} locale="ru" /><RuServiceDetailsLinks group="implant-care" /></>;
}
