import Link from "next/link";
import { getContent } from "@/lib/content";
import { getUi, localePath, type Locale } from "@/lib/i18n";

type CtaBlockProps = {
  locale: Locale;
  title?: React.ReactNode;
  text?: string;
};

export function CtaBlock({ locale, title, text }: CtaBlockProps) {
  const t = getUi(locale);
  const { site } = getContent(locale);

  return (
    <section className="cta-band">
      <span className="cta-band__slash" aria-hidden="true" />
      <div className="shell cta-band__grid">
        <div data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            {t.cta.eyebrow}
          </p>
          <h2>{title ?? t.cta.title}</h2>
        </div>
        <div className="cta-band__side" data-reveal>
          <p>{text ?? t.cta.text}</p>
          <ul className="check-list check-list--navy">
            {t.cta.checks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cta-band__actions">
            <Link className="btn btn--navy" href={localePath(locale, "/contact")}>
              {t.cta.button}
              <span aria-hidden="true">›</span>
            </Link>
            <a className="cta-band__phone" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
