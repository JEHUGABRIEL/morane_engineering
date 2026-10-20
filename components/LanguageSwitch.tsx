"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getUi,
  locales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitchProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitch({ locale, className = "" }: LanguageSwitchProps) {
  const pathname = usePathname();
  const t = getUi(locale);

  return (
    <nav
      className={`language-switch ${className}`.trim()}
      aria-label={t.language}
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={switchLocalePath(pathname, item)}
          hrefLang={item}
          lang={item}
          className={item === locale ? "is-active" : undefined}
          aria-current={item === locale ? "page" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
