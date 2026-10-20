import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { LocaleHtml } from "@/components/LocaleHtml";
import { MobileBar } from "@/components/MobileBar";
import { PageLoader } from "@/components/PageLoader";
import { site } from "@/lib/site";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const title =
  "Morane Engineering — Construction et gestion de projet à Bangui";
const description =
  "Entreprise centrafricaine de construction, de conception et de gestion de projet. Morane Engineering accompagne particuliers, entreprises et institutions à Bangui et en République centrafricaine.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Morane Engineering",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en" },
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/og-morane.jpg",
        width: 1200,
        height: 630,
        alt: "Morane Engineering — Du plan à la clé, sans rien laisser au hasard.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-morane.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f30",
  colorScheme: "light",
};

const businessData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organisation`,
  name: site.name,
  url: site.url,
  description,
  slogan: site.tagline,
  telephone: `+${site.phoneHref}`,
  email: site.email,
  image: `${site.url}/og-morane.jpg`,
  logo: `${site.url}/logo-morane.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "CF",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.3947,
    longitude: 18.5582,
  },
  areaServed: {
    "@type": "Country",
    name: "République centrafricaine",
  },
  sameAs: [site.facebook],
  knowsAbout: [
    "Construction de bâtiments",
    "Travaux publics",
    "Conception architecturale",
    "Études techniques",
    "Gestion de projet",
    "Formation aux métiers du bâtiment",
  ],
};

const revealScript = `(function(){try{if(location.pathname==='/en'||location.pathname.indexOf('/en/')===0){document.documentElement.lang='en';}if(sessionStorage.getItem('morane:intro')==='done'){document.documentElement.classList.add('loader-skip');}if(!('IntersectionObserver' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('reveal-ready');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={sans.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <noscript>
          <style>{`.page-loader{display:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <LocaleHtml />
        <PageLoader />
        <a className="skip-link" href="#contenu">
          <span lang="fr" className="skip-link__fr">
            Aller au contenu
          </span>
          <span lang="en" className="skip-link__en">
            Skip to content
          </span>
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileBar />
        <RevealObserver />
        <JsonLd data={businessData} />
      </body>
    </html>
  );
}
