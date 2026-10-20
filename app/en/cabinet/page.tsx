import type { Metadata } from "next";
import { CabinetPage } from "@/components/pages/CabinetPage";

export const metadata: Metadata = {
  title: "The firm",
  description:
    "Morane Engineering, a Central African construction and consultancy company based in Bangui: our story, values and way of working.",
  alternates: {
    canonical: "/en/cabinet",
    languages: { fr: "/cabinet", en: "/en/cabinet" },
  },
};

export default function Page() {
  return <CabinetPage locale="en" />;
}
