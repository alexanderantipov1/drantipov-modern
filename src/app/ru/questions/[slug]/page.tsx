import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RussianArticlePage from "@/components/RussianArticlePage";
import {
  getRussianArticlePage,
  getRussianArticleStructuredData,
  russianArticlePages,
  siteUrl,
} from "@/data/russianImplantFunnel";
import { structuredDataScript } from "@/lib/structured-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return russianArticlePages.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRussianArticlePage(slug);

  if (!article) {
    return {};
  }

  const url = `${siteUrl}/ru/questions/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: url,
      languages: {
        ru: url,
        "x-default": `${siteUrl}/ru/questions`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      locale: "ru_RU",
      type: "article",
      images: [
      {
        url: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Antipov dental implant guide",
      },
      ],
    },
  };
}

export default async function RussianQuestionPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getRussianArticlePage(slug);

  if (!article) notFound();

  const structuredData = getRussianArticleStructuredData(article);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript(structuredData)} />
      <RussianArticlePage article={article} />
    </>
  );
}
