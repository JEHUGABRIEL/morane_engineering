import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to us about your construction, renovation or study project in Bangui. Phone, WhatsApp, email and contact form for Morane Engineering.",
  alternates: {
    canonical: "/en/contact",
    languages: { fr: "/contact", en: "/en/contact" },
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
