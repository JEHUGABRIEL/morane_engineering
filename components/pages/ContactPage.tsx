import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const copy = {
  fr: {
    eyebrow: "Contact",
    title: (
      <>
        Parlons de votre terrain,
        <br />
        <em>pas encore de vos plans.</em>
      </>
    ),
    lede: "Décrivez-nous votre projet en quelques lignes. Nous revenons vers vous sous deux jours ouvrés avec les prochaines étapes — et, si nécessaire, une visite sur site.",
    meta: [
      { label: "Réponse", value: "2 jours ouvrés" },
      { label: "Bureau", value: "Bangui, RCA" },
    ],
    imageAlt: "Hôtel de ville de Bangui et ses abords.",
    introEyebrow: "Parlons de votre projet",
    introTitle: (
      <>
        Décrivez-nous votre terrain. <em>Nous ferons le reste.</em>
      </>
    ),
    introText:
      "Un terrain, une idée, un bâtiment à reprendre : quelques lignes suffisent pour commencer. Nous vous répondons avec les prochaines étapes, pas avec une plaquette commerciale.",
    checks: [
      "Réponse sous deux jours ouvrés.",
      "Un interlocuteur unique dès le premier échange.",
      "Visite sur site avant tout chiffrage.",
    ],
    labels: {
      phone: "Téléphone",
      email: "E-mail",
      office: "Bureau",
      whatsapp: "WhatsApp",
    },
    whatsapp: "Écrire sur WhatsApp",
    formTitle: "Formulaire de contact",
    mapLabel: "Nous trouver — Bangui, République centrafricaine",
    mapLink: "Ouvrir la carte",
    mapAlt: "Carte de Bangui et de ses environs.",
    mapCredit: "Localisation indicative — rendez-vous sur confirmation.",
    faqEyebrow: "Questions fréquentes",
    faqTitle: (
      <>
        Avant de <em>nous écrire.</em>
      </>
    ),
  },
  en: {
    eyebrow: "Contact",
    title: (
      <>
        Tell us about your plot,
        <br />
        <em>not your drawings yet.</em>
      </>
    ),
    lede: "Describe your project in a few lines. We will get back to you within two working days with the next steps — and, where needed, a site visit.",
    meta: [
      { label: "Reply", value: "2 working days" },
      { label: "Office", value: "Bangui, CAR" },
    ],
    imageAlt: "Bangui City Hall and its surroundings.",
    introEyebrow: "Let’s talk about your project",
    introTitle: (
      <>
        Tell us about your plot. <em>We will do the rest.</em>
      </>
    ),
    introText:
      "A plot, an idea, a building to restore: a few lines are enough to start. We reply with the next steps, not a sales brochure.",
    checks: [
      "A reply within two working days.",
      "One point of contact from the first exchange.",
      "A site visit before any pricing.",
    ],
    labels: {
      phone: "Phone",
      email: "Email",
      office: "Office",
      whatsapp: "WhatsApp",
    },
    whatsapp: "Message us on WhatsApp",
    formTitle: "Contact form",
    mapLabel: "Find us — Bangui, Central African Republic",
    mapLink: "Open the map",
    mapAlt: "Map of Bangui and its surroundings.",
    mapCredit: "Indicative location — visit by appointment.",
    faqEyebrow: "Frequently asked questions",
    faqTitle: (
      <>
        Before you <em>write to us.</em>
      </>
    ),
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { site, faq } = getContent(locale);

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

      <section className="contact-section">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.introEyebrow}
            </p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <ul className="check-list check-list--light">
              {t.checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <dl className="contact-details">
              <div className="contact-detail">
                <dt>{t.labels.phone}</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>{t.labels.email}</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>{t.labels.office}</dt>
                <dd>
                  {site.city}, {site.country}
                </dd>
              </div>
              <div className="contact-detail">
                <dt>{t.labels.whatsapp}</dt>
                <dd>
                  <a href={site.whatsapp} target="_blank" rel="noreferrer">
                    {t.whatsapp} ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact-form-card">
            <p className="contact-form-title">{t.formTitle}</p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>

      <div className="shell contact-map">
        <div className="contact-map__head">
          <p>{t.mapLabel}</p>
          <a
            className="text-link"
            href={site.mapLink}
            target="_blank"
            rel="noreferrer"
          >
            {t.mapLink}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-map__canvas">
          <Image
            src="/images/carte-bangui.jpg"
            alt={t.mapAlt}
            fill
            sizes="(max-width: 980px) 100vw, 80vw"
          />
          <span className="contact-map__marker">
            <span aria-hidden="true" />
            {site.city}
          </span>
        </div>
        <p className="contact-map__credit">
          {locale === "fr" ? "Fond de carte ©" : "Map data ©"}{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
          >
            OpenStreetMap contributors
          </a>
          . {t.mapCredit}
        </p>
      </div>

      <section className="faq">
        <div className="shell faq__grid">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              {t.faqEyebrow}
            </p>
            <h2>{t.faqTitle}</h2>
          </div>
          <div className="faq__list" data-reveal>
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
