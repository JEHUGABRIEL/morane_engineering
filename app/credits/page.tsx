import type { Metadata } from "next";
import { CreditsPage } from "@/components/pages/CreditsPage";

export const metadata: Metadata = {
  title: "Crédits photographiques",
  description:
    "Auteurs, licences et sources des photographies d’illustration utilisées sur le site de Morane Engineering.",
  alternates: {
    canonical: "/credits",
    languages: { fr: "/credits", en: "/en/credits" },
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <CreditsPage locale="fr" />;
}
