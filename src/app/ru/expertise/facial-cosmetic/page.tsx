import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { ruServicePages } from "@/constants/ruServicePages";

const data = ruServicePages["facial-cosmetic"];

export const metadata = buildServiceMetadata(data, "ru");

export default function Page() {
  return <ServicePageTemplate data={data} locale="ru" />;
}
