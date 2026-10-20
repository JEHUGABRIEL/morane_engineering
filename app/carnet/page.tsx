import type { Metadata } from "next";
import { CarnetPage } from "@/components/pages/CarnetPage";

export const metadata: Metadata = {
  title: "Carnet de chantier",
  description:
    "Notes techniques et retours de terrain de Morane Engineering : fondations, saison des pluies, devis détaillé et bonnes pratiques de construction en RCA.",
  alternates: {
    canonical: "/carnet",
    languages: { fr: "/carnet", en: "/en/carnet" },
  },
};

export default function Page() {
  return <CarnetPage locale="fr" />;
}
