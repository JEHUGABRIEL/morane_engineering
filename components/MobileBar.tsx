"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getContent } from "@/lib/content";
import { getUi, localeFromPath, localePath } from "@/lib/i18n";
import { PhoneIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function MobileBar() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = getUi(locale);
  const { site } = getContent(locale);

  return (
    <nav className="mobile-bar" aria-label={t.header.contact}>
      <a href={`tel:${site.phoneHref}`}>
        <PhoneIcon className="mobile-bar__icon" />
        <span>{locale === "en" ? "Call" : "Appeler"}</span>
      </a>
      <a href={site.whatsapp} target="_blank" rel="noreferrer">
        <WhatsAppIcon className="mobile-bar__icon" />
        <span>WhatsApp</span>
      </a>
      <Link href={localePath(locale, "/contact")}>
        <span className="mobile-bar__project" aria-hidden="true">
          +
        </span>
        <span>{locale === "en" ? "My project" : "Mon projet"}</span>
      </Link>
    </nav>
  );
}
