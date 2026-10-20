import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales, éditeur, hébergement, propriété intellectuelle et traitement des données du site Morane Engineering.",
  alternates: {
    canonical: "/mentions-legales",
    languages: {
      fr: "/mentions-legales",
      en: "/en/mentions-legales",
    },
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="fr" />;
}
