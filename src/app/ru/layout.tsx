import type { Metadata } from "next";

/**
 * RU subtree layout. Sets a Russian <title> template and ru_RU OpenGraph locale
 * for every /ru/* page via Next.js metadata merging. (The <html lang="ru">
 * itself is set in the root layout based on the request pathname.)
 */
export const metadata: Metadata = {
  title: {
    default: "Доктор Александр Антипов - челюстно-лицевой хирург, Roseville CA",
    template: "%s | Доктор Антипов, Roseville CA",
  },
  openGraph: {
    locale: "ru_RU",
    siteName: "Доктор Александр Антипов, DDS",
  },
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
