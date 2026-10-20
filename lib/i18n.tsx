export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : defaultLocale;
}

export function localePath(locale: Locale, path: string): string {
  if (locale === "fr") return path || "/";
  if (path === "/" || path === "") return "/en";
  return `/en${path.startsWith("/") ? path : `/${path}`}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const withoutLocale =
    pathname === "/en" || pathname.startsWith("/en/")
      ? pathname.slice(3) || "/"
      : pathname || "/";

  if (target === "en") {
    return withoutLocale === "/" ? "/en" : `/en${withoutLocale}`;
  }

  return withoutLocale;
}

const fr = {
  htmlLang: "fr",
  skip: "Aller au contenu",
  menu: "Menu",
  close: "Fermer",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  navigation: "Navigation",
  language: "Langue",
  home: "Accueil",
  social: {
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    follow: "Suivez-nous",
  },
  nav: [
    { href: "/expertises", label: "Expertises" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/cabinet", label: "Le cabinet" },
    { href: "/carnet", label: "Carnet" },
    { href: "/contact", label: "Contact" },
  ],
  topbar: {
    realisations: "Nos réalisations",
    carnet: "Le carnet",
    whatsapp: "WhatsApp",
    contact: "Contact",
  },
  header: {
    contact: "Contact",
  },
  footer: {
    about:
      "Construction, conception et gestion de projet en République centrafricaine. Du premier relevé à la remise des clés.",
    expertises: "Expertises",
    cabinet: "Le cabinet",
    contact: "Nous joindre",
    realisations: "Réalisations",
    carnet: "Carnet de chantier",
    write: "Nous écrire",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
    credits: "Crédits",
  },
  cta: {
    eyebrow: "Parlons de votre projet",
    title: (
      <>
        Un terrain, une idée.
        <br />
        <em>Parlons-en.</em>
      </>
    ),
    text: "Décrivez-nous ce que vous voulez construire. Nous revenons vers vous sous deux jours ouvrés avec les prochaines étapes — et, si nécessaire, une visite sur site.",
    checks: [
      "Réponse sous deux jours ouvrés",
      "Un interlocuteur unique, de l’étude à la réception",
      "Visite du terrain avant tout chiffrage",
    ],
    button: "Décrire mon projet",
  },
  page: {
    home: "Morane Engineering",
    cta: "Parler de votre projet",
  },
  form: {
    title: "Formulaire de contact",
    name: "Nom et prénom",
    organisation: "Organisation",
    phone: "Téléphone / WhatsApp",
    email: "E-mail",
    projectType: "Type de projet",
    location: "Localisation du terrain",
    budget: "Budget envisagé",
    message: "Votre projet",
    choose: "Choisir…",
    notSpecified: "Non précisé",
    locationPlaceholder: "Quartier, ville, pays",
    messagePlaceholder:
      "Terrain, surface envisagée, échéance, contraintes connues…",
    messageHint: "Quelques lignes suffisent pour commencer.",
    phonePlaceholder: "+236 …",
    submit: "Préparer ma demande",
    note: "Ce formulaire prépare un e-mail dans votre logiciel de messagerie. Aucune donnée n’est enregistrée sur ce site.",
    privacy: "En savoir plus",
    projectTypes: [
      "Maison ou résidence",
      "Bureaux ou commerce",
      "Équipement ou travaux publics",
      "Rénovation ou réhabilitation",
      "Étude, conseil ou audit",
      "Formation",
      "Autre",
    ],
    budgets: [
      "À définir",
      "Moins de 10 M FCFA",
      "10 à 30 M FCFA",
      "30 à 80 M FCFA",
      "Plus de 80 M FCFA",
    ],
    errors: {
      name: "Indiquez votre nom.",
      email:
        "Laissez un e-mail ou un téléphone pour que nous puissions répondre.",
      emailFormat: "Vérifiez le format de l’adresse e-mail.",
      projectType: "Choisissez le type de projet.",
      message:
        "Décrivez votre projet en quelques lignes (20 caractères minimum).",
    },
    success: {
      index: "Demande préparée",
      title: "Votre messagerie devrait s’ouvrir.",
      text: "Le message est déjà rempli avec les informations que vous nous avez données. Il ne reste plus qu’à l’envoyer. Si rien ne s’ouvre, écrivez-nous directement à l’adresse ci-dessous.",
      open: "Ouvrir ma messagerie",
      copy: "Copier l’adresse e-mail",
      copied: "Adresse copiée",
      edit: "Modifier ma demande",
      note: "Nous répondons sous deux jours ouvrés. Pour une urgence, appelez le",
    },
  },
  notFound: {
    code: "Erreur 404",
    title: "Page introuvable.",
    text: "Cette adresse n’existe pas ou a été déplacée. Le plan du site a peut-être changé depuis votre dernier passage.",
    home: "Retour à l’accueil",
    contact: "Nous écrire",
  },
};

const en: typeof fr = {
  htmlLang: "en",
  skip: "Skip to content",
  menu: "Menu",
  close: "Close",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  navigation: "Navigation",
  language: "Language",
  home: "Home",
  social: {
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    follow: "Follow us",
  },
  nav: [
    { href: "/expertises", label: "Expertise" },
    { href: "/realisations", label: "Projects" },
    { href: "/cabinet", label: "The firm" },
    { href: "/carnet", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ],
  topbar: {
    realisations: "Our projects",
    carnet: "The journal",
    whatsapp: "WhatsApp",
    contact: "Contact",
  },
  header: {
    contact: "Contact",
  },
  footer: {
    about:
      "Construction, design and project management in the Central African Republic. From the first survey to handover.",
    expertises: "Expertise",
    cabinet: "The firm",
    contact: "Get in touch",
    realisations: "Projects",
    carnet: "Site journal",
    write: "Write to us",
    rights: "All rights reserved.",
    legal: "Legal notice",
    credits: "Credits",
  },
  cta: {
    eyebrow: "Let’s talk about your project",
    title: (
      <>
        A site, an idea.
        <br />
        <em>Let’s talk.</em>
      </>
    ),
    text: "Tell us what you want to build. We will get back to you within two working days with the next steps — and, where needed, a site visit.",
    checks: [
      "A reply within two working days",
      "One point of contact from study to handover",
      "A site visit before any pricing",
    ],
    button: "Describe my project",
  },
  page: {
    home: "Morane Engineering",
    cta: "Talk about your project",
  },
  form: {
    title: "Contact form",
    name: "Full name",
    organisation: "Organisation",
    phone: "Phone / WhatsApp",
    email: "Email",
    projectType: "Project type",
    location: "Site location",
    budget: "Estimated budget",
    message: "Your project",
    choose: "Choose…",
    notSpecified: "Not specified",
    locationPlaceholder: "Neighbourhood, city, country",
    messagePlaceholder:
      "Site, intended floor area, timeline, known constraints…",
    messageHint: "A few lines are enough to start.",
    phonePlaceholder: "+236 …",
    submit: "Prepare my enquiry",
    note: "This form prepares an email in your email app. No data is stored on this website.",
    privacy: "Learn more",
    projectTypes: [
      "House or residence",
      "Office or retail",
      "Public facility or civil works",
      "Renovation or refurbishment",
      "Study, consultancy or audit",
      "Training",
      "Other",
    ],
    budgets: [
      "To be defined",
      "Under 10 M FCFA",
      "10 to 30 M FCFA",
      "30 to 80 M FCFA",
      "Over 80 M FCFA",
    ],
    errors: {
      name: "Please enter your name.",
      email: "Leave an email or phone number so we can reply.",
      emailFormat: "Please check the email address format.",
      projectType: "Please choose a project type.",
      message: "Please describe your project in a few lines (20 characters minimum).",
    },
    success: {
      index: "Enquiry prepared",
      title: "Your email app should open.",
      text: "The message is already filled in with the information you gave us. All you need to do is send it. If nothing opens, write to us directly at the address below.",
      open: "Open my email app",
      copy: "Copy the email address",
      copied: "Address copied",
      edit: "Edit my enquiry",
      note: "We reply within two working days. For urgent matters, call",
    },
  },
  notFound: {
    code: "Error 404",
    title: "Page not found.",
    text: "This address does not exist or has moved. The site map may have changed since your last visit.",
    home: "Back to home",
    contact: "Write to us",
  },
};

const dictionaries = { fr, en } as const;

export function getUi(locale: Locale) {
  return dictionaries[locale];
}
