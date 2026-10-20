import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "", en: "/en", priority: 1 },
    { path: "/expertises", en: "/en/expertises", priority: 0.9 },
    { path: "/realisations", en: "/en/realisations", priority: 0.9 },
    { path: "/cabinet", en: "/en/cabinet", priority: 0.8 },
    { path: "/carnet", en: "/en/carnet", priority: 0.7 },
    { path: "/contact", en: "/en/contact", priority: 0.8 },
    ...caseStudies.map((study) => ({
      path: `/realisations/${study.slug}`,
      en: `/en/realisations/${study.slug}`,
      priority: 0.75,
    })),
  ];

  return routes.flatMap((route) => [
    {
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates: {
        languages: {
          fr: `${site.url}${route.path}`,
          en: `${site.url}${route.en}`,
        },
      },
    },
    {
      url: `${site.url}${route.en}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority - 0.1,
      alternates: {
        languages: {
          fr: `${site.url}${route.path}`,
          en: `${site.url}${route.en}`,
        },
      },
    },
  ]);
}
