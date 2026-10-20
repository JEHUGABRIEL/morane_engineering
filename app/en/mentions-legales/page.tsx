import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Legal notice",
  description:
    "Legal notice, publisher, hosting, intellectual property and data processing for the Morane Engineering website.",
  alternates: {
    canonical: "/en/mentions-legales",
    languages: { fr: "/mentions-legales", en: "/en/mentions-legales" },
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="en" />;
}
