import Image from "next/image";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { PageIntro } from "@/components/PageIntro";
import type { CaseStudy } from "@/lib/case-studies";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  fr: {
    study: "Étude de cas",
    facts: "Repères",
    noteLabel: "Étude de cas type",
    noteText:
      "Ce document décrit un programme représentatif de notre pratique. Les surfaces, durées et dispositions ne correspondent pas à une référence livrée : elles servent à expliquer nos choix techniques. Les photographies sont des illustrations.",
    contextEyebrow: "Contexte",
    contextTitle: "Un programme, un terrain, des contraintes.",
    briefTitle: "Le brief",
    constraintsEyebrow: "Contraintes",
    constraintsTitle: "Ce que le site imposait",
    approachEyebrow: "Parti pris",
    approachTitle: "Les décisions qui structurent le projet",
    worksEyebrow: "Chantier",
    worksTitle: "Phase par phase",
    outcomesEyebrow: "Résultats",
    outcomesTitle: "Ce que le bâtiment change",
    takeaway: "À retenir",
    galleryEyebrow: "Sur le chantier",
    galleryTitle: "Documents et réalisation",
    nextTitle: "Autres études de cas",
    nextLink: "Lire l’étude",
    all: "Toutes les réalisations",
    ctaTitle: (
      <>
        Un programme
        <br />
        <em>comparable ?</em>
      </>
    ),
    ctaText:
      "Décrivez-nous votre terrain et votre usage. Nous vous dirons ce qui peut être repris de cette méthode, ce qui doit être étudié et dans quel ordre avancer.",
  },
  en: {
    study: "Case study",
    facts: "Key facts",
    noteLabel: "Representative case study",
    noteText:
      "This document describes a programme representative of our practice. Areas, durations and layouts are not a delivered reference: they explain our technical choices. Photographs are illustrative.",
    contextEyebrow: "Context",
    contextTitle: "A programme, a site, constraints.",
    briefTitle: "The brief",
    constraintsEyebrow: "Constraints",
    constraintsTitle: "What the site imposed",
    approachEyebrow: "Design approach",
    approachTitle: "The decisions that structure the project",
    worksEyebrow: "Construction",
    worksTitle: "Phase by phase",
    outcomesEyebrow: "Outcomes",
    outcomesTitle: "What the building changes",
    takeaway: "Key takeaway",
    galleryEyebrow: "On site",
    galleryTitle: "Documents and delivery",
    nextTitle: "Other case studies",
    nextLink: "Read the study",
    all: "All projects",
    ctaTitle: (
      <>
        A comparable
        <br />
        <em>programme?</em>
      </>
    ),
    ctaText:
      "Tell us about your site and intended use. We will tell you what can be borrowed from this method, what needs study and in what order to proceed.",
  },
} as const;

type CaseStudyPageProps = {
  locale: Locale;
  study: CaseStudy;
  others: CaseStudy[];
};

export function CaseStudyPage({ locale, study, others }: CaseStudyPageProps) {
  const t = copy[locale];
  const base = localePath(locale, "/realisations");

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={`${t.study} ${study.number} — ${study.category}`}
        title={study.title}
        lede={study.subtitle}
        meta={study.facts.slice(0, 2).map((fact) => ({
          label: fact.label,
          value: fact.value,
        }))}
        image={study.image.src}
        imageAlt={study.image.alt}
      />

      <div className="shell case-layout">
        <aside className="case-aside">
          <div className="case-facts">
            <p className="case-facts__label">{t.facts}</p>
            <dl>
              {study.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="case-note">
            <p className="case-note__label">{t.noteLabel}</p>
            <p>{t.noteText}</p>
            <Link className="text-link" href={base}>
              {t.all}
              <span aria-hidden="true">›</span>
            </Link>
          </div>
        </aside>

        <article className="case-body">
          <section className="case-section">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.contextEyebrow}
            </p>
            <h2>{t.contextTitle}</h2>
            <div className="case-context">
              {study.context.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="case-brief" aria-labelledby="case-brief-title">
            <h2 id="case-brief-title">{t.briefTitle}</h2>
            <ul className="check-list">
              {study.brief.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.constraintsEyebrow}
            </p>
            <h2>{t.constraintsTitle}</h2>
            <div className="case-constraints">
              {study.constraints.map((item, index) => (
                <div className="case-constraint" key={item.title}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-approach">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.approachEyebrow}
            </p>
            <h2>{t.approachTitle}</h2>
            <div className="case-approach__list">
              {study.approach.map((item, index) => (
                <div className="case-approach__item" key={item.title}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.worksEyebrow}
            </p>
            <h2>{t.worksTitle}</h2>
            <div className="case-works">
              {study.works.map((work) => (
                <div className="case-work" key={work.phase}>
                  <p className="case-work__phase">{work.phase}</p>
                  <div>
                    <h3>{work.title}</h3>
                    <ul>
                      {work.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="case-outcomes">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.outcomesEyebrow}
            </p>
            <h2>{t.outcomesTitle}</h2>
            <ul>
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <blockquote>
              <span>{t.takeaway}</span>
              {study.takeaway}
            </blockquote>
          </section>

          <section className="case-section">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.galleryEyebrow}
            </p>
            <h2>{t.galleryTitle}</h2>
            <div className="case-gallery">
              {study.gallery.map((item) => (
                <figure key={item.src}>
                  <div>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </article>
      </div>

      <section className="case-next">
        <div className="shell">
          <div className="case-next__head">
            <h2>{t.nextTitle}</h2>
            <Link className="text-link" href={base}>
              {t.all}
              <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="case-next__grid">
            {others.map((item) => (
              <Link
                className="case-next-card"
                href={`${localePath(locale, `/realisations/${item.slug}`)}`}
                key={item.slug}
              >
                <div className="case-next-card__image">
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <p>
                  {item.number} — {item.category}
                </p>
                <h3>{item.title}</h3>
                <span>
                  {t.nextLink}
                  <span aria-hidden="true">›</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
