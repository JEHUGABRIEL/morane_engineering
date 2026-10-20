"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getUi, localeFromPath, localePath } from "@/lib/i18n";

export function NotFoundContent() {
  const locale = localeFromPath(usePathname());
  const t = getUi(locale);

  useEffect(() => {
    document.title =
      locale === "en"
        ? "Page not found — Morane Engineering"
        : "Page introuvable — Morane Engineering";
  }, [locale]);

  return (
    <section className="not-found">
      <div className="shell">
        <div className="not-found__grid">
          <div>
            <p className="not-found__code">{t.notFound.code}</p>
            <h1>{t.notFound.title}</h1>
            <p>{t.notFound.text}</p>
          </div>
          <div className="cta__actions">
            <Link className="btn" href={localePath(locale, "/")}>
              {t.notFound.home}
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href={localePath(locale, "/contact")}>
              {t.notFound.contact}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
