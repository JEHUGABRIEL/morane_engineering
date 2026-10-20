import type { Metadata } from "next";
import { RealisationsPage } from "@/components/pages/RealisationsPage";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Maisons, bureaux, équipements et rénovation : les typologies d’ouvrages de Morane Engineering, entreprise de construction à Bangui.",
  alternates: {
    canonical: "/realisations",
    languages: { fr: "/realisations", en: "/en/realisations" },
  },
};

export default function Page() {
  return <RealisationsPage locale="fr" />;
}
