import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: {
    absolute:
      "Morane Engineering — Construction and project management in Bangui",
  },
  description:
    "Central African construction, design and project management company. Morane Engineering supports homeowners, businesses and institutions in Bangui and across the Central African Republic.",
  alternates: {
    canonical: "/en",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    locale: "en_GB",
    url: "/en",
    title:
      "Morane Engineering — Construction and project management in Bangui",
    description:
      "Central African construction, design and project management company in Bangui.",
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
