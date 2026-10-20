import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";

export function LegalPage({ locale }: { locale: Locale }) {
  const { site } = getContent(locale);
  const fr = locale === "fr";

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={fr ? "Informations légales" : "Legal information"}
        title={fr ? "Mentions légales." : "Legal notice."}
        lede={
          fr
            ? "Informations relatives à l’éditeur du site, à son hébergement et au traitement des données transmises via le formulaire de contact."
            : "Information about the site publisher, its hosting and the processing of data sent through the contact form."
        }
        image="/images/detail-chantier.jpg"
        imageAlt={
          fr
            ? "Détail d’une ouverture sur un chantier de construction."
            : "Detail of an opening on a construction site."
        }
      />

      <div className="shell">
        <div className="prose">
          <h2>{fr ? "Éditeur du site" : "Site publisher"}</h2>
          <p>
            <strong>Morane Engineering</strong>
            <br />
            {fr
              ? "Entreprise de construction et de conseil"
              : "Construction and consultancy company"}
            <br />
            {site.address}
            <br />
            {fr ? "Téléphone" : "Phone"} :{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <br />
            {fr ? "E-mail" : "Email"} :{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>{fr ? "Directeur de la publication" : "Publication director"}</h2>
          <p>
            {fr
              ? "La direction de Morane Engineering est responsable de la publication du site."
              : "The management of Morane Engineering is responsible for publishing the site."}
          </p>

          <h2>{fr ? "Hébergement" : "Hosting"}</h2>
          <p>
            {fr ? (
              <>
                Le site est hébergé par le prestataire technique désigné par
                Morane Engineering. Les coordonnées de l’hébergeur peuvent être
                obtenues en écrivant à{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            ) : (
              <>
                The site is hosted by the technical provider appointed by Morane
                Engineering. The host’s details can be obtained by writing to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            )}
          </p>

          <h2>{fr ? "Propriété intellectuelle" : "Intellectual property"}</h2>
          <p>
            {fr ? (
              <>
                L’ensemble des contenus de ce site — textes, logo, identité
                visuelle, photographies de chantier et documents — est protégé
                par le droit d’auteur. Toute reproduction ou utilisation sans
                autorisation écrite est interdite, à l’exception des
                photographies d’illustration soumises à licences Creative
                Commons, dont les crédits figurent sur la page{" "}
                <Link href={localePath(locale, "/credits")}>
                  Crédits photographiques
                </Link>
                .
              </>
            ) : (
              <>
                All content on this site — text, logo, visual identity,
                construction photographs and documents — is protected by
                copyright. Reproduction or use without written permission is
                prohibited, except for the illustrative photographs under
                Creative Commons licences, whose credits appear on the{" "}
                <Link href={localePath(locale, "/credits")}>Credits</Link> page.
              </>
            )}
          </p>

          <h2>{fr ? "Données personnelles" : "Personal data"}</h2>
          <p>
            {fr
              ? "Le formulaire de contact ne transmet aucune donnée à un serveur : il prépare un message dans votre logiciel de messagerie. Les informations que vous choisissez d’envoyer sont utilisées uniquement pour répondre à votre demande et ne sont ni revendues ni cédées."
              : "The contact form does not send any data to a server: it prepares a message in your email app. The information you choose to send is used only to answer your enquiry and is neither sold nor passed on."}
          </p>
          <p>
            {fr ? (
              <>
                Pour exercer un droit d’accès, de rectification ou de
                suppression, écrivez à{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. Nous répondons
                dans les meilleurs délais.
              </>
            ) : (
              <>
                To exercise a right of access, correction or deletion, write to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. We reply as
                soon as possible.
              </>
            )}
          </p>

          <h2>{fr ? "Cookies" : "Cookies"}</h2>
          <p>
            {fr
              ? "Ce site ne dépose pas de cookies publicitaires ni de traceurs d’audience. La carte de localisation est une image statique : elle ne charge aucun script tiers et ne dépose aucun cookie. Le lien vers OpenStreetMap n’est activé que si vous choisissez de l’ouvrir."
              : "This site sets no advertising cookies or audience trackers. The location map is a static image: it loads no third-party script and sets no cookie. The OpenStreetMap link is only activated if you choose to open it."}
          </p>

          <h2>{fr ? "Responsabilité" : "Liability"}</h2>
          <p>
            {fr
              ? "Les informations présentées sur ce site sont fournies à titre indicatif. Elles ne constituent pas un devis, une étude technique ou un engagement contractuel. Toute intervention fait l’objet d’un document écrit signé par les parties."
              : "The information on this site is provided for guidance only. It does not constitute a quote, a technical study or a contractual commitment. Every assignment is covered by a written document signed by the parties."}
          </p>
        </div>
      </div>
    </>
  );
}
