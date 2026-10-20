import type { Metadata } from "next";
import { CabinetPage } from "@/components/pages/CabinetPage";

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "Morane Engineering, entreprise centrafricaine de construction et de conseil installée à Bangui : notre histoire, nos valeurs et notre façon de travailler.",
  alternates: {
    canonical: "/cabinet",
    languages: { fr: "/cabinet", en: "/en/cabinet" },
  },
};

export default function Page() {
  return <CabinetPage locale="fr" />;
}
