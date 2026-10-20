"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";
import { FacebookIcon, WhatsAppIcon } from "./SocialIcons";
import { SocialLinks } from "./SocialIcons";
import { LanguageSwitch } from "./LanguageSwitch";
import { getUi, localeFromPath, localePath } from "@/lib/i18n";
import { getContent } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = getUi(locale);
  const { site } = getContent(locale);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const setOpen = (value: boolean) => setOpenPath(value ? pathname : null);
  const currentPath =
    locale === "en"
      ? pathname.replace(/^\/en(?=\/|$)/, "") || "/"
      : pathname;

  const isActive = (href: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="site-head">
      <div className="topbar">
        <div className="shell topbar__inner">
          <p className="topbar__place">
            <span className="topbar__dot" aria-hidden="true" />
            {site.city} · {site.country}
          </p>
          <div className="topbar__links">
            <Link href={localePath(locale, "/realisations")}>
              {t.topbar.realisations}
            </Link>
            <Link href={localePath(locale, "/carnet")}>{t.topbar.carnet}</Link>
            <span className="topbar__divider" aria-hidden="true" />
            <a
              className="topbar__social"                    href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.social.facebook} (${locale === "en" ? "new tab" : "nouvel onglet"})`}
            >
              <FacebookIcon />
            </a>
            <a
              className="topbar__social"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.social.whatsapp} (${locale === "en" ? "new tab" : "nouvel onglet"})`}
            >
              <WhatsAppIcon />
            </a>
            <LanguageSwitch locale={locale} className="language-switch--topbar" />
            <a className="topbar__phone" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="shell header__inner">
          <Brand locale={locale} />

          <nav className="main-nav" aria-label={t.navigation}>
            {t.nav.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a className="header__phone" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
            <a
              className="header__social-mobile"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.social.whatsapp} (${locale === "en" ? "new tab" : "nouvel onglet"})`}
            >
              <WhatsAppIcon />
            </a>
            <Link
              className="btn btn--mint btn--small header__cta"
              href={localePath(locale, "/contact")}
            >
              {t.header.contact}
              <span aria-hidden="true">›</span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className={`menu-toggle${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen(!open)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        hidden={!open}
      >
        <span className="mobile-menu__slash" aria-hidden="true" />
        <div className="mobile-menu__top">
          <Brand locale={locale} compact />
          <button
            ref={closeRef}
            type="button"
            className="mobile-menu__close"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            {t.close}
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mobile-menu__content">
          <p className="mobile-menu__label">{t.navigation}</p>
          <nav className="mobile-menu__nav" aria-label={t.navigation}>
            {t.nav.map((item, index) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className={isActive(item.href) ? "is-active" : undefined}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-menu__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mobile-menu__link-label">{item.label}</span>
                <span className="mobile-menu__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mobile-menu__footer">
          <div className="mobile-menu__social">
            <SocialLinks locale={locale} variant="stacked" />
          </div>
          <div className="mobile-menu__contact">
            <p>
              {site.city}, {site.country}
            </p>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="mobile-menu__bottom">
            <LanguageSwitch locale={locale} />
            <Link
              className="btn btn--mint btn--small"
              href={localePath(locale, "/contact")}
              onClick={() => setOpen(false)}
            >
              {t.header.contact}
              <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
