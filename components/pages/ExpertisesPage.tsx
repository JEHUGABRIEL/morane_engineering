import Image from "next/image";
import { CtaBlock } from "@/components/CtaBlock";
import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const blockMedia: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  "conseil-expertise": {
    src: "/images/bangui-mairie.jpg",
    alt: "Bangui City Hall and its surroundings.",
    caption: "The local context is part of the study, not only the building.",
  },
  "gestion-de-projet": {
    src: "/images/immeuble-bureaux.jpg",
    alt: "Modern office building with glazed façades and an outdoor car park.",
    caption: "Coordination means holding budget, schedule and quality together.",
  },
  formation: {
    src: "/images/hero-chantier.jpg",
    alt: "Workers on a construction site.",
    caption: "Skills are passed on site, using the project documents.",
  },
};

const copy = {
  fr: {
    eyebrow: "Expertises",
    title: (
      <>
        Intervenir au bon moment,
        <br />
        <em>avec les bons documents.</em>
      </>
    ),
    lede: "Conseil, conception, gestion, construction, formation. Nous adaptons la mission à votre besoin — pas l’inverse. Chaque intervention laisse des documents utilisables par ceux qui construisent.",
    meta: [
      { label: "Missions", value: "Cinq domaines" },
      { label: "Zone", value: "Bangui & RCA" },
    ],
    imageAlt: "Détail d’une ouverture sur un chantier de construction.",
    toc: "Sommaire des expertises",
    deliverables: "Ce que vous recevez",
    audience: "Pour qui :",
    ctaTitle: (
      <>
        Une mission précise,
        <br />
        <em>un livrable clair.</em>
      </>
    ),
    ctaText:
      "Vous savez ce dont vous avez besoin, ou vous hésitez entre plusieurs missions. Dans les deux cas, un premier échange permet de cadrer le travail et le budget.",
  },
  en: {
    eyebrow: "Expertise",
    title: (
      <>
        Step in at the right time,
        <br />
        <em>with the right documents.</em>
      </>
    ),
    lede: "Consultancy, design, management, construction, training. We adapt the mission to your need — not the other way round. Every assignment leaves documents the builders can actually use.",
    meta: [
      { label: "Missions", value: "Five disciplines" },
      { label: "Area", value: "Bangui & CAR" },
    ],
    imageAlt: "Detail of an opening on a construction site.",
    toc: "Expertise contents",
    deliverables: "What you receive",
    audience: "For whom:",
    ctaTitle: (
      <>
        A precise mission,
        <br />
        <em>a clear deliverable.</em>
      </>
    ),
    ctaText:
      "You know what you need, or you are weighing several missions. Either way, a first conversation frames the work and the budget.",
  },
} as const;

export function ExpertisesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { expertises } = getContent(locale);
  const mediaFr = {
    "conseil-expertise": "Hôtel de ville de Bangui et ses abords.",
    "gestion-de-projet":
      "Immeuble de bureaux moderne avec façades vitrées et parking extérieur.",
    formation: "Compagnons au travail sur un chantier de construction.",
  } as Record<string, string>;
  const captionFr = {
    "conseil-expertise":
      "Le contexte local fait partie de l’étude, pas seulement le bâti.",
    "gestion-de-projet":
      "Coordonner, c’est tenir ensemble le budget, le planning et la qualité.",
    formation:
      "La compétence se transmet sur le chantier, avec les documents du projet.",
  } as Record<string, string>;

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        meta={t.meta.map((item) => ({ ...item }))}
        image="/images/detail-chantier.jpg"
        imageAlt={t.imageAlt}
      />

      <nav className="anchor-nav" aria-label={t.toc}>
        <div className="shell anchor-nav__inner">
          {expertises.map((item) => (
            <a key={item.slug} href={`#${item.slug}`}>
              {item.number} — {item.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="shell">
        {expertises.map((item) => {
          const fallback = blockMedia[item.slug];
          const media = item.image
            ? item.image
            : fallback
              ? {
                  ...fallback,
                  alt: locale === "fr" ? mediaFr[item.slug] : fallback.alt,
                  caption:
                    locale === "fr" ? captionFr[item.slug] : fallback.caption,
                }
              : undefined;

          return (
            <section
              className="expertise-block"
              id={item.slug}
              key={item.slug}
              aria-labelledby={`${item.slug}-title`}
            >
              <div className="expertise-block__grid">
                <aside className="expertise-block__aside">
                  <p className="expertise-block__num">{item.number}</p>
                  <h2 id={`${item.slug}-title`}>{item.title}</h2>
                  <p className="expertise-block__statement">{item.statement}</p>
                </aside>

                <div className="expertise-block__content">
                  <p className="expertise-block__lead" data-reveal>
                    {item.intro}
                  </p>
                  {item.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} data-reveal>
                      {paragraph}
                    </p>
                  ))}

                  {media && (
                    <figure className="expertise-block__image" data-reveal>
                      <div className="expertise-block__media">
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          sizes="(max-width: 980px) 100vw, 55vw"
                        />
                      </div>
                      <figcaption>{media.caption}</figcaption>
                    </figure>
                  )}

                  <div className="deliverables-block" data-reveal>
                    <h3>{t.deliverables}</h3>
                    <ul className="deliverables">
                      {item.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="audience" data-reveal>
                    <strong>{t.audience}</strong> {item.audience}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBlock locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
