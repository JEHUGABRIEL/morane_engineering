import type { Metadata } from "next";
import { ExpertisesPage } from "@/components/pages/ExpertisesPage";

export const metadata: Metadata = {
  title: "Expertises",
  description:
    "Conseil, conception, gestion de projet, construction et formation : les cinq expertises de Morane Engineering à Bangui, en République centrafricaine.",
  alternates: {
    canonical: "/expertises",
    languages: { fr: "/expertises", en: "/en/expertises" },
  },
};

export default function Page() {
  return <ExpertisesPage locale="fr" />;
}
