"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { SocialLinks } from "./SocialIcons";
import { LanguageSwitch } from "./LanguageSwitch";
import { getContent } from "@/lib/content";
import { getUi, localeFromPath, localePath } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = getUi(locale);
  const { site, expertises, nav } = getContent(locale);

  const cabinetLinks = nav.filter((item) => item.href !== "/expertises");

  return (
    <footer className="footer">
      <div className="shell footer__main">
        <div className="footer__top">
          <div className="footer__brand">
            <Brand locale={locale} />
            <p className="footer__about">{t.footer.about}</p>
            <SocialLinks locale={locale} />
          </div>

          <div className="footer__col">
            <p className="footer__title">{t.footer.expertises}</p>
            <ul>
              {expertises.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`${localePath(locale, "/expertises")}#${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__title">{t.footer.cabinet}</p>
            <ul>
              {cabinetLinks.map((item) => (
                <li key={item.href}>
                  <Link href={localePath(locale, item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__contact">
            <p className="footer__title">{t.footer.contact}</p>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <p className="footer__address">
              {site.city}
              <br />
              {site.country}
            </p>
          </div>
        </div>

        <div className="footer__brandline">
          <p className="footer__wordmark">
            MORANE <span>ENGINEERING</span>
          </p>
          <p className="footer__tagline">{site.tagline}</p>
          <Link
            className="btn btn--mint btn--small"
            href={localePath(locale, "/contact")}
          >
            {t.footer.write}
            <span aria-hidden="true">›</span>
          </Link>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Morane Engineering. {t.footer.rights}
          </p>
          <div className="footer__legal">
            <LanguageSwitch locale={locale} />
            <Link href={localePath(locale, "/mentions-legales")}>
              {t.footer.legal}
            </Link>
            <Link href={localePath(locale, "/credits")}>{t.footer.credits}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
