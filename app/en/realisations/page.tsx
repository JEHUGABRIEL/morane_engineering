import type { Metadata } from "next";
import { RealisationsPage } from "@/components/pages/RealisationsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Houses, offices, facilities and renovation: the building types delivered by Morane Engineering, a construction company in Bangui.",
  alternates: {
    canonical: "/en/realisations",
    languages: { fr: "/realisations", en: "/en/realisations" },
  },
};

export default function Page() {
  return <RealisationsPage locale="en" />;
}
