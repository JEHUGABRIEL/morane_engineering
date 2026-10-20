import { CtaBlock } from "@/components/CtaBlock";
import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Carnet",
    title: (
      <>
        Ce que le terrain
        <br />
        <em>nous apprend.</em>
      </>
    ),
    lede: "Notes techniques, erreurs fréquentes et décisions qui changent un chantier. Nous écrivons ce que nous voyons, sans jargon inutile.",
    meta: [
      { label: "Notes", value: "Trois entrées" },
      { label: "Auteur", value: "L’équipe Morane" },
    ],
    imageAlt: "Maison en construction avec sa charpente et sa toiture.",
    toc: "Sommaire",
    tocLabel: "Sommaire du carnet",
    articleMeta: "Note technique",
    reading: "de lecture",
    takeaway: "À retenir",
    ctaTitle: (
      <>
        Une question
        <br />
        <em>sur votre chantier ?</em>
      </>
    ),
    ctaText:
      "Les notes du carnet ne remplacent pas une visite. Décrivez-nous votre situation : nous vous dirons ce qui doit être vérifié sur place.",
  },
  en: {
    eyebrow: "Journal",
    title: (
      <>
        What the site
        <br />
        <em>teaches us.</em>
      </>
    ),
    lede: "Technical notes, common mistakes and decisions that change a project. We write what we see, without unnecessary jargon.",
    meta: [
      { label: "Notes", value: "Three entries" },
      { label: "Author", value: "The Morane team" },
    ],
    imageAlt: "House under construction with its roof structure and roof.",
    toc: "Contents",
    tocLabel: "Journal contents",
    articleMeta: "Technical note",
    reading: "read",
    takeaway: "Key takeaway",
    ctaTitle: (
      <>
        A question
        <br />
        <em>about your site?</em>
      </>
    ),
    ctaText:
      "The journal notes are no substitute for a visit. Tell us about your situation: we will tell you what needs checking on site.",
  },
} as const;

export function CarnetPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { notes } = getContent(locale);

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        meta={t.meta.map((item) => ({ ...item }))}
        image="/images/maison-construction.jpg"
        imageAlt={t.imageAlt}
      />

      <section className="section">
        <div className="shell">
          <div className="notes-layout">
            <nav className="notes-toc" aria-label={t.tocLabel}>
              <p className="notes-toc__label">{t.toc}</p>
              <ol>
                {notes.map((note) => (
                  <li key={note.slug}>
                    <a href={`#${note.slug}`}>{note.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div>
              {notes.map((note) => (
                <article className="article" id={note.slug} key={note.slug}>
                  <p className="article__meta">
                    <span>{t.articleMeta}</span>
                    <span>
                      {note.readingTime} {t.reading}
                    </span>
                  </p>
                  <h2>{note.title}</h2>
                  <div className="article__body" data-reveal>
                    {note.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="takeaway" data-reveal>
                    <span>{t.takeaway}</span>
                    {note.takeaway}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBlock locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
