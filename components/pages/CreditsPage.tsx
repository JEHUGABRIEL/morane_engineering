import { PageIntro } from "@/components/PageIntro";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function CreditsPage({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const { photoCredits } = getContent(locale);

  return (
    <>
      <PageIntro
        locale={locale}
        eyebrow={fr ? "Crédits" : "Credits"}
        title={fr ? "Photographies et sources." : "Photographs and sources."}
        lede={
          fr
            ? "Les photographies de ce site sont des images d’illustration. Elles proviennent de Wikimedia Commons et sont reproduites conformément à leurs licences Creative Commons."
            : "The photographs on this site are illustrative. They come from Wikimedia Commons and are reproduced in accordance with their Creative Commons licences."
        }
        image="/images/maison-construction.jpg"
        imageAlt={
          fr
            ? "Maison en construction avec sa charpente et sa toiture."
            : "House under construction with its roof structure and roof."
        }
      />

      <div className="shell">
        <div className="prose">
          <div className="credits-list">
            {photoCredits.map((credit) => (
              <div className="credit" key={credit.title}>
                <strong>{credit.title}</strong>
                <span>{credit.author}</span>
                <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                  {credit.license} ↗
                </a>
                <a href={credit.source} target="_blank" rel="noreferrer">
                  {fr ? "Source" : "Source"} ↗
                </a>
              </div>
            ))}
          </div>

          <p className="credits-note">
            {fr
              ? "Les licences CC BY-SA autorisent l’utilisation et l’adaptation des images à condition de créditer l’auteur et de partager les adaptations dans les mêmes conditions. Les images ont été recadrées et compressées pour le web. Le logo et les textes sont la propriété de Morane Engineering."
              : "CC BY-SA licences allow the images to be used and adapted provided the author is credited and adaptations are shared under the same terms. Images have been cropped and compressed for the web. The logo and texts are the property of Morane Engineering."}
          </p>

          <h2>{fr ? "Fond de carte" : "Map background"}</h2>
          <p>
            {fr
              ? "La carte statique de la page Contact est composée de tuiles © "
              : "The static map on the Contact page is made from tiles © "}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noreferrer"
            >
              OpenStreetMap contributors
            </a>
            {fr
              ? ", distribuées sous Open Database License (ODbL). Le fond a été recadré et désaturé pour s’intégrer à la charte du site."
              : ", distributed under the Open Database License (ODbL). The background has been cropped and desaturated to match the site’s design."}
          </p>

          <h2>{fr ? "Modifier un crédit" : "Change a credit"}</h2>
          <p>
            {fr ? (
              <>
                Si vous remplacez une photographie par une image de vos propres
                chantiers, mettez à jour la liste ci-dessus et le fichier{" "}
                <code>lib/site.ts</code> afin de retirer l’ancien crédit.
              </>
            ) : (
              <>
                If you replace a photograph with one of your own projects,
                update the list above and the file <code>lib/site.en.ts</code>{" "}
                to remove the old credit.
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
