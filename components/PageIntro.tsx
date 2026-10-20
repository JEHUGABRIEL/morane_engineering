import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getUi, localePath, type Locale } from "@/lib/i18n";

type PageIntroProps = {
  locale: Locale;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  meta?: { label: string; value: string }[];
  image?: string;
  imageAlt?: string;
};

export function PageIntro({
  locale,
  eyebrow,
  title,
  lede,
  meta,
  image,
  imageAlt = "",
}: PageIntroProps) {
  const t = getUi(locale);

  return (
    <>
      <section className={`page-hero${image ? " page-hero--media" : ""}`}>
        {image && (
          <>
            <div className="page-hero__media">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="page-hero__image"
              />
            </div>
            <div className="page-hero__overlay" aria-hidden="true" />
          </>
        )}
        <span className="page-hero__slash" aria-hidden="true" />
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--light" data-reveal>
            <span className="eyebrow__line" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="page-hero__title" data-reveal>
            {title}
          </h1>
          <div className="page-hero__foot">
            <div>
              <p className="page-hero__lede" data-reveal>
                {lede}
              </p>
              <div className="page-hero__actions" data-reveal>
                <Link
                  className="btn btn--mint"
                  href={localePath(locale, "/contact")}
                >
                  {t.page.cta}
                  <span aria-hidden="true">›</span>
                </Link>
                {meta && (
                  <dl className="page-hero__meta">
                    {meta.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="breadcrumb">
        <div className="shell breadcrumb__inner">
          <Link href={localePath(locale, "/")}>Morane Engineering</Link>
          <span aria-hidden="true">›</span>
          <span>{eyebrow}</span>
        </div>
      </div>
    </>
  );
}
