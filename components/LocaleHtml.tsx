"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPath } from "@/lib/i18n";

export function LocaleHtml() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return null;
}
