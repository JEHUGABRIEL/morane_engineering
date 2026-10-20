import Image from "next/image";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { PageIntro } from "@/components/PageIntro";
import { StackedRealisations } from "@/components/StackedRealisations";
import { getContent } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Réalisations",
    title: (
      <>
        Ce que nous
        <br />
        <em>construisons.</em>
      </>
    ),
    lede: "Maisons, immeubles, équipements et bâtiments existants. Chaque programme impose ses contraintes ; notre rôle est de les traduire en choix techniques tenables.",
    meta: [
      { label: "Typologies", value: "Quatre familles" },
      { label: "Zone", value: "Bangui & environs" },
    ],
    imageAlt: "Immeuble de bureaux moderne avec façades vitrées et parking extérieur.",
    noteTitle: "À propos des photographies",
    noteText:
      "Les images de cette page illustrent nos typologies d’ouvrages. Les études de cas détaillées décrivent des programmes représentatifs, pas des références livrées : elles expliquent nos choix techniques. Nos références, plans et visites de sites sont communiqués sur demande.",
    programme: "Programme",
    mission: "Mission",
    caseLink: "Lire l’étude de cas",
    questionsEyebrow: "Avant de choisir",
    questionsTitle:
      "Les questions à poser à toute entreprise de construction.",
    questions: [
      "Qui suit mon chantier, et à quelle fréquence vient-il sur place ?",
      "Le devis détaille-t-il les quantités, les matériaux et les prestations incluses ?",
      "Les plans d’exécution et les notes de calcul sont-ils fournis ?",
      "Comment sont traitées les variations de prix et les travaux supplémentaires ?",
      "Que se passe-t-il après la réception : réserves, garanties, dossier des ouvrages exécutés ?",
    ],
    ctaTitle: (
      <>
        Parlons de votre
        <br />
        <em>programme.</em>
      </>
    ),
    ctaText:
      "Envoyez-nous le plan, le terrain ou simplement l’usage envisagé. Nous vous dirons ce qui est réaliste, ce qui doit être étudié et dans quel ordre avancer.",
  },
  en: {
    eyebrow: "Projects",
    title: (
      <>
        What we
        <br />
        <em>build.</em>
      </>
    ),
    lede: "Houses, offices, facilities and existing buildings. Every programme brings its own constraints; our role is to turn them into sound technical decisions.",
    meta: [
      { label: "Building types", value: "Four families" },
      { label: "Area", value: "Bangui & surroundings" },
    ],
    imageAlt: "Modern office building with glazed façades and an outdoor car park.",
    noteTitle: "About the photographs",
    noteText:
      "The images on this page illustrate our building types. The detailed case studies describe representative programmes, not delivered references: they explain our technical choices. References, drawings and site visits are available on request.",
    programme: "Programme",
    mission: "Mission",
    caseLink: "Read the case study",
    questionsEyebrow: "Before you choose",
    questionsTitle: "The questions to ask any construction company.",
    questions: [
      "Who is managing my site, and how often do they come?",
      "Does the quote break down quantities, materials and included services?",
      "Are construction drawings and structural calculations provided?",
      "How are price variations and additional works handled?",
      "What happens after handover: snag list, warranties, as-built documentation?",
    ],
    ctaTitle: (
      <>
        Let’s talk about your
        <br />
        <em>programme.</em>
      </>
    ),
    ctaText:
      "Send us the drawing, the plot or simply the intended use. We will tell you what is realistic, what needs study and in what order to proceed.",
  },
} as const;

export function RealisationsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { typologies } = getContent(locale);

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        meta={t.meta.map((item) => ({ ...item }))}
        image="/images/immeuble-bureaux.jpg"
        imageAlt={t.imageAlt}
      />

      <div className="shell">
        <aside className="realisations-note" data-reveal>
          <h2>{t.noteTitle}</h2>
          <p>{t.noteText}</p>
        </aside>

        <StackedRealisations>
          {typologies.map((item) => (
            <section
              className="typology stack-card"
              id={item.slug}
              key={item.slug}
              aria-labelledby={`${item.slug}-title`}
            >
              <div className="typology__media" data-reveal>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 52vw"
                />
              </div>

              <div className="typology__content" data-reveal>
                <p className="typology__label">{item.label}</p>
                <h2 id={`${item.slug}-title`}>{item.title}</h2>
                <p className="typology__description">{item.description}</p>

                <ul className="typology__scope">
                  {item.scope.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>

                <dl className="typology__meta">
                  <div>
                    <dt>{t.programme}</dt>
                    <dd>{item.programme}</dd>
                  </div>
                  <div>
                    <dt>{t.mission}</dt>
                    <dd>{item.mission}</dd>
                  </div>
                </dl>

                <Link
                  className="text-link typology__link"
                  href={localePath(
                    locale,
                    `/realisations/${item.slug}`,
                  )}
                >
                  {t.caseLink}
                  <span aria-hidden="true">›</span>
                </Link>
              </div>
            </section>
          ))}
        </StackedRealisations>
      </div>

      <section className="questions">
        <div className="shell questions__grid">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.questionsEyebrow}
            </p>
            <h2>{t.questionsTitle}</h2>
          </div>
          <ol className="questions__list" data-reveal>
            {t.questions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBlock locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
