import type { Metadata } from "next";
import { CreditsPage } from "@/components/pages/CreditsPage";

export const metadata: Metadata = {
  title: "Photo credits",
  description:
    "Authors, licences and sources of the illustrative photographs used on the Morane Engineering website.",
  alternates: {
    canonical: "/en/credits",
    languages: { fr: "/credits", en: "/en/credits" },
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <CreditsPage locale="en" />;
}
