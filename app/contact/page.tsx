import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez de votre projet de construction, de rénovation ou d’étude à Bangui. Téléphone, WhatsApp, e-mail et formulaire pour joindre Morane Engineering.",
  alternates: {
    canonical: "/contact",
    languages: { fr: "/contact", en: "/en/contact" },
  },
};

export default function Page() {
  return <ContactPage locale="fr" />;
}
