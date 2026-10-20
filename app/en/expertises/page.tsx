import type { Metadata } from "next";
import { ExpertisesPage } from "@/components/pages/ExpertisesPage";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Consultancy, design, project management, construction and training: the five areas of expertise of Morane Engineering in Bangui, Central African Republic.",
  alternates: {
    canonical: "/en/expertises",
    languages: { fr: "/expertises", en: "/en/expertises" },
  },
};

export default function Page() {
  return <ExpertisesPage locale="en" />;
}
