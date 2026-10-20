import type { Metadata } from "next";
import { CarnetPage } from "@/components/pages/CarnetPage";

export const metadata: Metadata = {
  title: "Site journal",
  description:
    "Technical notes and field reports from Morane Engineering: foundations, the rainy season, detailed quotes and good construction practice in the CAR.",
  alternates: {
    canonical: "/en/carnet",
    languages: { fr: "/carnet", en: "/en/carnet" },
  },
};

export default function Page() {
  return <CarnetPage locale="en" />;
}
