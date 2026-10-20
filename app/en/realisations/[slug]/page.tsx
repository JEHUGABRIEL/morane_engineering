import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent("en").caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getContent("en").caseStudies.find((item) => item.slug === slug);

  if (!study) return {};

  return {
    title: `${study.title} — Case study`,
    description: study.summary,
    alternates: {
      canonical: `/en/realisations/${study.slug}`,
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
  const { caseStudies } = getContent("en");
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <CaseStudyPage
      locale="en"
      study={study}
      others={caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3)}
    />
  );
}
