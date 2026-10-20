import Image from "next/image";
import { CtaBlock } from "@/components/CtaBlock";
import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Le cabinet",
    title: (
      <>
        Une entreprise centrafricaine,
        <br />
        <em>une exigence simple.</em>
      </>
    ),
    lede: "Morane Engineering est installée à Bangui. Nous concevons, construisons et accompagnons des projets de bâtiment et de travaux publics en République centrafricaine.",
    meta: [
      { label: "Siège", value: "Bangui, RCA" },
      { label: "Interventions", value: "Bangui & le pays" },
    ],
    imageAlt: "Hôtel de ville de Bangui et ses abords.",
    storyEyebrow: "Notre histoire",
    storyTitle: (
      <>
        Une entreprise née <em>d’un constat de terrain.</em>
      </>
    ),
    storyLead:
      "Trop de projets commencent sans étude de sol, sans plans d’exécution ou sans budget réaliste.",
    storyParagraphs: [
      "Les conséquences sont toujours les mêmes — reprises, retards, surcoûts — et ce sont les maîtres d’ouvrage qui les paient. Nous avons donc choisi de réunir dans une même structure les compétences qui se parlent mal d’habitude : conception, chiffrage, conduite de chantier, travaux et formation.",
      "L’objectif n’est pas de tout faire seul, mais de faire en sorte que personne ne travaille en silo. Un architecte, un ingénieur, un conducteur de travaux et un compagnon doivent regarder les mêmes plans et parler le même langage.",
      "Notre terrain d’intervention est la République centrafricaine. Nous connaissons ses contraintes et nous y adaptons nos méthodes, sans transposer des solutions importées telles quelles. Un bâtiment doit répondre au climat, aux usages et aux compétences disponibles ici.",
    ],
    storyCaption: "Le terrain, point de départ de chaque décision.",
    storyAlt: "Compagnons au travail sur un chantier de construction.",
    values: [
      {
        number: "01",
        title: "La rigueur avant la vitesse",
        text: "Un planning réaliste vaut mieux qu’une promesse tenue à moitié. Nous préférons annoncer une date et la tenir.",
      },
      {
        number: "02",
        title: "La parole tenue",
        text: "Ce qui est écrit dans le devis et le planning est ce que nous défendons. Les changements se discutent avant d’être exécutés.",
      },
      {
        number: "03",
        title: "Le terrain comme juge",
        text: "Une décision se vérifie sur le chantier, pas seulement en réunion. Nous allons voir, mesurer et consigner.",
      },
      {
        number: "04",
        title: "Transmettre",
        text: "Un projet réussi laisse aussi des compétences derrière lui. Nous formons les équipes avec lesquelles nous travaillons.",
      },
    ],
    refusalsEyebrow: "Nos lignes rouges",
    refusalsTitle: (
      <>
        Ce que nous refusons de faire,{" "}
        <em>même quand on nous le demande.</em>
      </>
    ),
    refusals: [
      "Commencer sans étude de sol.",
      "Signer un devis sans quantitatif.",
      "Promettre une date sans planning.",
      "Livrer sans dossier des ouvrages exécutés.",
    ],
    teamEyebrow: "L’équipe",
    teamTitle: (
      <>
        Une équipe pluridisciplinaire, <em>un interlocuteur unique.</em>
      </>
    ),
    teamText:
      "Selon le projet, nous constituons une équipe d’ingénieurs et de techniciens du bâtiment, d’architectes partenaires, de conducteurs de travaux, d’économistes de la construction et de formateurs. Vous n’avez pas à coordonner ces métiers : nous le faisons, et nous vous rendons compte.",
    roles: [
      "Direction de projet",
      "Études & conception",
      "Conduite de travaux",
      "Achats & logistique",
      "Administration & finances",
      "Formation & sécurité",
    ],
    ctaTitle: (
      <>
        Vous voulez savoir
        <br />
        <em>à qui vous parlez ?</em>
      </>
    ),
    ctaText:
      "Passez nous voir à Bangui ou appelons-nous. Nous préférons une conversation franche sur votre projet à un échange de messages sans fin.",
  },
  en: {
    eyebrow: "The firm",
    title: (
      <>
        A Central African company,
        <br />
        <em>a simple standard.</em>
      </>
    ),
    lede: "Morane Engineering is based in Bangui. We design, build and support building and civil works projects across the Central African Republic.",
    meta: [
      { label: "Head office", value: "Bangui, CAR" },
      { label: "Coverage", value: "Bangui & the country" },
    ],
    imageAlt: "Bangui City Hall and its surroundings.",
    storyEyebrow: "Our story",
    storyTitle: (
      <>
        A firm born <em>from what we saw on site.</em>
      </>
    ),
    storyLead:
      "Too many projects start without a soil investigation, without construction drawings or without a realistic budget.",
    storyParagraphs: [
      "The consequences are always the same — rework, delays, cost overruns — and the client pays for them. So we chose to bring under one roof the skills that usually talk too little to each other: design, costing, site management, works and training.",
      "The aim is not to do everything alone, but to make sure nobody works in a silo. An architect, an engineer, a site manager and a builder must look at the same drawings and speak the same language.",
      "We work in the Central African Republic. We know its constraints and adapt our methods to them, without simply transplanting imported solutions. A building must respond to the climate, the way it is used and the skills available here.",
    ],
    storyCaption: "The site is the starting point for every decision.",
    storyAlt: "Workers on a construction site.",
    values: [
      {
        number: "01",
        title: "Rigour before speed",
        text: "A realistic schedule is better than a promise half kept. We would rather announce a date and hold it.",
      },
      {
        number: "02",
        title: "Our word kept",
        text: "What is written in the quote and the schedule is what we stand by. Changes are discussed before they are built.",
      },
      {
        number: "03",
        title: "The site as judge",
        text: "A decision is verified on site, not only in a meeting. We go, look, measure and record.",
      },
      {
        number: "04",
        title: "Pass it on",
        text: "A successful project also leaves skills behind. We train the teams we work with.",
      },
    ],
    refusalsEyebrow: "Our red lines",
    refusalsTitle: (
      <>
        What we refuse to do, <em>even when asked.</em>
      </>
    ),
    refusals: [
      "Start without a soil investigation.",
      "Sign a quote without quantities.",
      "Promise a date without a schedule.",
      "Hand over without as-built documentation.",
    ],
    teamEyebrow: "The team",
    teamTitle: (
      <>
        A multidisciplinary team, <em>one point of contact.</em>
      </>
    ),
    teamText:
      "Depending on the project, we assemble a team of engineers and building technicians, partner architects, site managers, construction economists and trainers. You do not have to coordinate these disciplines: we do, and we report back to you.",
    roles: [
      "Project direction",
      "Studies & design",
      "Site management",
      "Procurement & logistics",
      "Administration & finance",
      "Training & safety",
    ],
    ctaTitle: (
      <>
        Want to know
        <br />
        <em>who you are talking to?</em>
      </>
    ),
    ctaText:
      "Come and see us in Bangui or give us a call. We prefer a frank conversation about your project to an endless exchange of messages.",
  },
} as const;

export function CabinetPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { site } = getContent(locale);

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        meta={t.meta.map((item) => ({ ...item }))}
        image="/images/bangui-mairie.jpg"
        imageAlt={t.imageAlt}
      />

      <section className="section">
        <div className="shell">
          <div className="story__grid">
            <div className="story__text" data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.storyEyebrow}
              </p>
              <h2>{t.storyTitle}</h2>
              <p className="story__lead">{t.storyLead}</p>
              {t.storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <aside className="story__aside" data-reveal>
              <figure>
                <div className="story__figure">
                  <Image
                    src="/images/hero-chantier.jpg"
                    alt={t.storyAlt}
                    fill
                    sizes="(max-width: 980px) 100vw, 38vw"
                  />
                </div>
                <figcaption>{t.storyCaption}</figcaption>
              </figure>
              <p className="story__quote">
                {locale === "fr" ? `« ${site.tagline} »` : `“${site.tagline}”`}
              </p>
            </aside>
          </div>

          <div className="values">
            {t.values.map((value) => (
              <div className="value" key={value.number} data-reveal>
                <p className="value__num">{value.number}</p>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="refusals-band">
        <div className="shell refusals-band__grid">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.refusalsEyebrow}
            </p>
            <h2>{t.refusalsTitle}</h2>
          </div>
          <ul className="refusals-band__list" data-reveal>
            {t.refusals.map((refusal, index) => (
              <li key={refusal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {refusal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="team">
        <div className="shell team__grid">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.teamEyebrow}
            </p>
            <h2>{t.teamTitle}</h2>
          </div>
          <div className="team__text" data-reveal>
            <p>{t.teamText}</p>
            <ul className="team__roles">
              {t.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBlock locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
