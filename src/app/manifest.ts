import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
    short_name: "Dr. Antipov",
    description:
      "Board-certified oral and maxillofacial surgeon in Roseville, CA. Specializing in dental implants, corrective jaw surgery, and facial cosmetic procedures.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1ABB9C",
    icons: [
      {
        src: "/images/logo-b97aa5c8.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
