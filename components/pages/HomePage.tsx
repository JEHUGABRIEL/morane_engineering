import Image from "next/image";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { SectionDrawing } from "@/components/SectionDrawing";
import { StackedRealisations } from "@/components/StackedRealisations";
import { getContent } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";

const copy = {
  fr: {
    heroEyebrow: "Bangui · République centrafricaine",
    heroTitle: (
      <>
        Du plan à la clé,
        <br />
        <em>sans rien laisser</em>
        <br />
        au hasard.
      </>
    ),
    heroLede:
      "Morane Engineering réunit conception, construction et conduite de chantier à Bangui. Pour les particuliers, les entreprises et les institutions qui veulent un ouvrage solide — et un chantier qui avance.",
    heroPrimary: "Décrire mon projet",
    heroSecondary: "Voir nos expertises",
    heroFoot: [
      "Conseil & expertise",
      "Conception & études",
      "Construction",
      "Gestion de projet",
      "Formation",
    ],
    heroAlt:
      "Chantier de construction avec structures en béton, échafaudages et engins.",
    commitmentsLabel: "Nos engagements",
    cabinetEyebrow: "Le cabinet",
    cabinetTitle: (
      <>
        Une entreprise de construction{" "}
        <em>qui commence par écouter.</em>
      </>
    ),
    cabinetText:
      "Morane Engineering est une entreprise centrafricaine de construction et de conseil, installée à Bangui. Nous intervenons de la première esquisse à la remise des clés : études, conception, chiffrage, travaux, suivi de chantier et formation des équipes.",
    cabinetChecks: [
      "Un sol lu avant de dessiner les fondations.",
      "Un devis détaillé avant de commencer les travaux.",
      "Un planning tenu, avec un point écrit chaque semaine.",
    ],
    cabinetLink: "Notre façon de travailler",
    cabinetCaption: "Chantier · Afrique centrale",
    cabinetAlt: "Compagnons au travail sur un chantier de construction.",
    statsEyebrow: "Chiffres clés",
    statsTitle: (
      <>
        Une exigence <em>qui se mesure.</em>
      </>
    ),
    statsText:
      "Pas de promesses invérifiables. Des engagements simples, que vous pouvez nous demander de tenir à chaque étape.",
    stats: [
      {
        value: "5",
        label: "expertises",
        text: "Conseil, conception, gestion de projet, construction et formation.",
        href: "/expertises",
        link: "Voir les expertises",
      },
      {
        value: "2",
        label: "jours ouvrés",
        text: "Pour un premier retour écrit sur votre demande, avec les prochaines étapes.",
        href: "/contact",
        link: "Nous écrire",
      },
      {
        value: "1",
        label: "interlocuteur",
        text: "La même équipe vous suit du premier relevé à la réception du chantier.",
        href: "/cabinet",
        link: "Rencontrer le cabinet",
      },
    ],
    expertiseEyebrow: "Nos expertises",
    expertiseTitle: (
      <>
        Cinq métiers, <em>une même exigence.</em>
      </>
    ),
    expertiseText:
      "Nous pouvons prendre un projet en main de bout en bout, ou intervenir sur une seule mission. Dans les deux cas, le niveau de rigueur ne change pas.",
    expertiseLink: "En savoir plus",
    expertiseFoot: "Voir les cinq expertises",
    methodEyebrow: "Notre méthode",
    methodTitle: (
      <>
        Un chantier ne se rattrape pas. <em>Il se prépare.</em>
      </>
    ),
    methodText:
      "Notre méthode tient en quatre temps. Elle n’a rien de spectaculaire ; c’est précisément pour cela qu’elle fonctionne.",
    conviction: "Notre conviction",
    quote:
      "« Nous le faisons par passion et par amour. Confiez vos projets aux professionnels et vous ne serez pas déçu. »",
    quoteFooter: "Morane Engineering · Page Facebook",
    workEyebrow: "Ce que nous construisons",
    workTitle: (
      <>
        Des ouvrages simples à vivre, <em>difficiles à bien faire.</em>
      </>
    ),
    workIntro:
      "Maisons, immeubles, équipements : nous adaptons la technique au programme, au sol et au budget. Pas l’inverse.",
    workMeta: "Bangui & environs",
    workLink: "Lire l’étude de cas",
    localAlt: "Hôtel de ville de Bangui et ses abords.",
    localCity: "Bangui, République centrafricaine",
    localEyebrow: "Ancrage",
    localTitle: (
      <>
        Bangui n’est pas un décor. <em>C’est notre contrainte de travail.</em>
      </>
    ),
    localText:
      "Ici, un chantier se prépare avec la pluie, la poussière, les coupures d’électricité et les délais d’approvisionnement. Nous intégrons ces réalités au planning dès le départ, au lieu de les découvrir en cours de route.",
    facts: [
      {
        title: "Climat tropical",
        text: "Saison des pluies de mai à octobre. Terrassements et couvertures se planifient en conséquence.",
      },
      {
        title: "Sols latéritiques",
        text: "Études de sol et fondations dimensionnées, pas copiées d’un projet voisin.",
      },
      {
        title: "Approvisionnement",
        text: "Un planning d’achats et de livraisons établi avant l’ouverture du chantier.",
      },
      {
        title: "Main-d’œuvre locale",
        text: "Des compagnons formés aux règles de sécurité et à la lecture des plans.",
      },
    ],
    notesEyebrow: "Carnet",
    notesTitle: (
      <>
        Ce que nous apprenons <em>sur le terrain.</em>
      </>
    ),
    notesLink: "Lire le carnet",
    noteLink: "Lire la note",
    note: "Note",
  },
  en: {
    heroEyebrow: "Bangui · Central African Republic",
    heroTitle: (
      <>
        From drawing to keys,
        <br />
        <em>leaving nothing</em>
        <br />
        to chance.
      </>
    ),
    heroLede:
      "Morane Engineering brings design, construction and site management together in Bangui. For homeowners, businesses and institutions that want a solid building — and a site that keeps moving.",
    heroPrimary: "Describe my project",
    heroSecondary: "See our expertise",
    heroFoot: [
      "Consultancy",
      "Design & studies",
      "Construction",
      "Project management",
      "Training",
    ],
    heroAlt:
      "Construction site with concrete structures, scaffolding and machinery.",
    commitmentsLabel: "Our commitments",
    cabinetEyebrow: "The firm",
    cabinetTitle: (
      <>
        A construction company <em>that starts by listening.</em>
      </>
    ),
    cabinetText:
      "Morane Engineering is a Central African construction and consultancy firm based in Bangui. We work from the first sketch to handover: studies, design, costing, works, site supervision and team training.",
    cabinetChecks: [
      "Ground understood before foundations are drawn.",
      "A detailed quotation before works begin.",
      "A schedule that holds, with a written update every week.",
    ],
    cabinetLink: "How we work",
    cabinetCaption: "Site · Central Africa",
    cabinetAlt: "Workers on a construction site.",
    statsEyebrow: "Key figures",
    statsTitle: (
      <>
        Standards <em>you can measure.</em>
      </>
    ),
    statsText:
      "No unverifiable promises. Simple commitments you can ask us to honour at every stage.",
    stats: [
      {
        value: "5",
        label: "areas of expertise",
        text: "Consultancy, design, project management, construction and training.",
        href: "/expertises",
        link: "See the expertise",
      },
      {
        value: "2",
        label: "working days",
        text: "For a first written reply to your enquiry, with the next steps.",
        href: "/contact",
        link: "Write to us",
      },
      {
        value: "1",
        label: "point of contact",
        text: "The same team follows you from the first survey to handover.",
        href: "/cabinet",
        link: "Meet the firm",
      },
    ],
    expertiseEyebrow: "Our expertise",
    expertiseTitle: (
      <>
        Five disciplines, <em>one standard.</em>
      </>
    ),
    expertiseText:
      "We can take a project from end to end, or step in for a single mission. Either way, the level of rigour does not change.",
    expertiseLink: "Learn more",
    expertiseFoot: "See all five areas",
    methodEyebrow: "Our method",
    methodTitle: (
      <>
        A site cannot be caught up later. <em>It is prepared.</em>
      </>
    ),
    methodText:
      "Our method has four stages. There is nothing spectacular about it; that is precisely why it works.",
    conviction: "Our conviction",
    quote:
      "“We do it with passion and love. Entrust your projects to professionals and you will not be disappointed.”",
    quoteFooter: "Morane Engineering · Facebook page",
    workEyebrow: "What we build",
    workTitle: (
      <>
        Buildings that are simple to live in, <em>difficult to do well.</em>
      </>
    ),
    workIntro:
      "Houses, offices, facilities: we adapt the technique to the programme, the ground and the budget. Not the other way round.",
    workMeta: "Bangui & surroundings",
    workLink: "Read the case study",
    localAlt: "Bangui City Hall and its surroundings.",
    localCity: "Bangui, Central African Republic",
    localEyebrow: "Rooted here",
    localTitle: (
      <>
        Bangui is not a backdrop. <em>It is our working constraint.</em>
      </>
    ),
    localText:
      "Here, a site is planned around rain, dust, power cuts and delivery times. We build those realities into the programme from the start, instead of discovering them along the way.",
    facts: [
      {
        title: "Tropical climate",
        text: "Rainy season from May to October. Earthworks and roofing are planned accordingly.",
      },
      {
        title: "Lateritic soils",
        text: "Soil investigations and foundations designed for the plot, not copied from a neighbour.",
      },
      {
        title: "Procurement",
        text: "A purchasing and delivery schedule set before the site opens.",
      },
      {
        title: "Local workforce",
        text: "Builders trained in safety rules and drawing reading.",
      },
    ],
    notesEyebrow: "Journal",
    notesTitle: (
      <>
        What we learn <em>on site.</em>
      </>
    ),
    notesLink: "Read the journal",
    noteLink: "Read the note",
    note: "Note",
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const {
    site,
    commitments,
    expertises,
    method,
    typologies,
    notes,
  } = getContent(locale);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media">
          <Image
            src="/images/chantier-gros-oeuvre.jpg"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="home-hero__image"
          />
        </div>
        <div className="home-hero__overlay" aria-hidden="true" />
        <span className="home-hero__slash" aria-hidden="true" />

        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--light" data-reveal>
              <span className="eyebrow__line" aria-hidden="true" />
              {t.heroEyebrow}
            </p>
            <h1 data-reveal>{t.heroTitle}</h1>
            <p className="home-hero__lede" data-reveal>
              {t.heroLede}
            </p>
            <div className="home-hero__actions" data-reveal>
              <Link className="btn" href={localePath(locale, "/contact")}>
                {t.heroPrimary}
                <span aria-hidden="true">›</span>
              </Link>
              <Link
                className="text-link text-link--light"
                href={localePath(locale, "/expertises")}
              >
                {t.heroSecondary}
                <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="shell home-hero__foot">
          {t.heroFoot.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="commitments" aria-label={t.commitmentsLabel}>
        <div className="shell commitments__grid">
          {commitments.map((item) => (
            <div className="commitment" key={item.title} data-reveal>
              <span className="commitment__check" aria-hidden="true">
                ✓
              </span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="split__content">
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__line" aria-hidden="true" />
              {t.cabinetEyebrow}
            </p>
            <h2 data-reveal>{t.cabinetTitle}</h2>
            <p data-reveal>{t.cabinetText}</p>
            <ul className="check-list" data-reveal>
              {t.cabinetChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              className="text-link"
              href={localePath(locale, "/cabinet")}
              data-reveal
            >
              {t.cabinetLink}
              <span aria-hidden="true">›</span>
            </Link>
          </div>

          <figure className="split__media" data-reveal>
            <div className="split__image">
              <Image
                src="/images/hero-chantier.jpg"
                alt={t.cabinetAlt}
                fill
                sizes="(max-width: 980px) 100vw, 46vw"
              />
            </div>
            <figcaption>
              <span>{t.cabinetCaption}</span>
              <span>{site.coordinates}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="section-head">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.statsEyebrow}
              </p>
              <h2>{t.statsTitle}</h2>
            </div>
            <p className="section-head__text" data-reveal>
              {t.statsText}
            </p>
          </div>

          <div className="stats-grid">
            {t.stats.map((stat) => (
              <div className="stat-card" key={stat.label} data-reveal>
                <p className="stat-card__value">{stat.value}</p>
                <p className="stat-card__label">{stat.label}</p>
                <p className="stat-card__text">{stat.text}</p>
                <Link
                  className="text-link stat-card__link"
                  href={localePath(locale, stat.href)}
                >
                  {stat.link}
                  <span aria-hidden="true">›</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="section-head">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.expertiseEyebrow}
              </p>
              <h2>{t.expertiseTitle}</h2>
            </div>
            <p className="section-head__text" data-reveal>
              {t.expertiseText}
            </p>
          </div>

          <div className="expertise-grid">
            {expertises.map((item, index) => (
              <Link
                key={item.slug}
                href={`${localePath(locale, "/expertises")}#${item.slug}`}
                className={`expertise-card${
                  index === expertises.length - 1 ? " expertise-card--dark" : ""
                }`}
                data-reveal
              >
                <span className="expertise-card__num">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.statement}</p>
                <span className="expertise-card__link">
                  {t.expertiseLink}
                  <span aria-hidden="true">›</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="section-foot">
            <Link
              className="text-link"
              href={localePath(locale, "/expertises")}
            >
              {t.expertiseFoot}
              <span aria-hidden="true">›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy method">
        <div className="shell">
          <div className="method__grid">
            <div className="method__aside" data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.methodEyebrow}
              </p>
              <h2>{t.methodTitle}</h2>
              <p className="method__text">{t.methodText}</p>
              <div className="method__drawing">
                <SectionDrawing locale={locale} />
              </div>
            </div>

            <div className="method__steps">
              {method.map((step) => (
                <div className="step" key={step.number} data-reveal>
                  <span className="step__num">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quote">
        <span className="quote__slash" aria-hidden="true" />
        <div className="shell">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__line" aria-hidden="true" />
            {t.conviction}
          </p>
          <blockquote data-reveal>{t.quote}</blockquote>
          <p className="quote__footer" data-reveal>
            {t.quoteFooter}
          </p>
        </div>
      </section>

      <section className="section work">
        <div className="shell">
          <div className="work__head">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.workEyebrow}
              </p>
              <h2>{t.workTitle}</h2>
            </div>
            <p className="work__intro" data-reveal>
              {t.workIntro}
            </p>
          </div>

          <StackedRealisations className="work__grid" mobileOnly>
            {typologies.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={localePath(locale, `/realisations/${item.slug}`)}
                className="work-card stack-card"
              >
                <div className="work-card__image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </div>
                <p className="work-card__label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description.split(". ")[0]}.</p>
                <div className="work-card__meta">
                  <span>{t.workMeta}</span>
                  <span>{t.workLink} ›</span>
                </div>
              </Link>
            ))}
          </StackedRealisations>
        </div>
      </section>

      <section className="section local">
        <div className="shell local__grid">
          <figure className="local__figure" data-reveal>
            <div className="local__image">
              <Image
                src="/images/bangui-mairie.jpg"
                alt={t.localAlt}
                fill
                sizes="(max-width: 980px) 100vw, 44vw"
              />
            </div>
            <figcaption>
              <span>{t.localCity}</span>
              <span>{site.coordinates}</span>
            </figcaption>
          </figure>

          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.localEyebrow}
            </p>
            <h2>{t.localTitle}</h2>
            <p className="local__text">{t.localText}</p>
            <div className="local__facts">
              {t.facts.map((fact) => (
                <div className="fact" key={fact.title}>
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="notes__head">
            <div data-reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" aria-hidden="true" />
                {t.notesEyebrow}
              </p>
              <h2>{t.notesTitle}</h2>
            </div>
            <Link className="text-link" href={localePath(locale, "/carnet")} data-reveal>
              {t.notesLink}
              <span aria-hidden="true">›</span>
            </Link>
          </div>

          <div className="notes__grid">
            {notes.map((note, index) => (
              <Link
                className="note-card"
                href={`${localePath(locale, "/carnet")}#${note.slug}`}
                key={note.slug}
                data-reveal
              >
                <p className="note-card__index">
                  {t.note} {String(index + 1).padStart(2, "0")} ·{" "}
                  {note.readingTime}
                </p>
                <h3>{note.title}</h3>
                <p>{note.excerpt}</p>
                <span className="text-link">
                  {t.noteLink}
                  <span aria-hidden="true">›</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock locale={locale} />
    </>
  );
}
