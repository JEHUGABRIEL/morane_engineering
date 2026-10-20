import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("fr").caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getContent("fr").caseStudies.find((item) => item.slug === slug);

  if (!study) return {};

  return {
    title: `${study.title} — Étude de cas`,
    description: study.summary,
    alternates: {
      canonical: `/realisations/${study.slug}`,
      languages: {
        fr: `/realisations/${study.slug}`,
        en: `/en/realisations/${study.slug}`,
      },
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [{ url: study.image.src, alt: study.image.alt }],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { caseStudies } = getContent("fr");
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <CaseStudyPage
      locale="fr"
      study={study}
      others={caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3)}
    />
  );
}
