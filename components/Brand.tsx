import Image from "next/image";
import Link from "next/link";
import { getUi, localePath, type Locale } from "@/lib/i18n";

type BrandProps = {
  locale: Locale;
  compact?: boolean;
};

export function Brand({ locale, compact = false }: BrandProps) {
  const t = getUi(locale);

  return (
    <Link
      href={localePath(locale, "/")}
      className={`brand${compact ? " brand--compact" : ""}`}
    >
      <span className="brand__mark">
        <Image
          src="/logo-marque.png"
          alt=""
          width={58}
          height={58}
          sizes="58px"
          priority
        />
      </span>
      <span className="brand__text">
        <span className="brand__name">MORANE</span>
        <span className="brand__sub">ENGINEERING</span>
      </span>
      <span className="sr-only">{`— ${t.home}`}</span>
    </Link>
  );
}
