export const site = {
  name: "Morane Engineering",
  shortName: "Morane",
  tagline: "Ensemble, construisons l’Afrique.",
  description:
    "Entreprise centrafricaine de construction, de conception et de gestion de projet. Morane Engineering accompagne particuliers, entreprises et institutions à Bangui et en République centrafricaine.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://morane-engineering.com",
  phoneDisplay: "+236 76 34 92 50",
  phoneHref: "+23676349250",
  whatsapp: "https://wa.me/23676349250?text=Bonjour%20Morane%20Engineering%2C%20je%20souhaite%20discuter%20d%27un%20projet.",
  email: "moraneengineering@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61569314035062",
  city: "Bangui",
  country: "République centrafricaine",
  address: "Bangui, République centrafricaine",
  coordinates: "4.3947° N · 18.5582° E",
  mapLink: "https://www.openstreetmap.org/?mlat=4.3947&mlon=18.5582#map=13/4.3947/18.5582",
} as const;

export const nav = [
  { href: "/expertises", label: "Expertises" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/cabinet", label: "Le cabinet" },
  { href: "/carnet", label: "Carnet" },
  { href: "/contact", label: "Contact" },
] as const;

export type Expertise = {
  slug: string;
  number: string;
  title: string;
  short: string;
  statement: string;
  intro: string;
  body: string[];
  deliverables: string[];
  audience: string;
  image?: { src: string; alt: string; caption: string };
};

export const expertises: Expertise[] = [
  {
    slug: "conseil-expertise",
    number: "01",
    title: "Conseil & expertise",
    short: "Diagnostiquer avant de décider.",
    statement: "Un avis extérieur, documenté, avant d’engager des sommes importantes.",
    intro:
      "Nous intervenons en amont d’un projet ou sur un bâtiment existant : vérifier la faisabilité d’un terrain, auditer une structure, relire un devis, comparer des solutions constructives.",
    body: [
      "Notre rôle n’est pas de vous vendre une prestation, mais de vous donner une base claire pour décider. Chaque avis est remis par écrit : constats, hypothèses, risques et ordres de grandeur.",
      "Sur un bâtiment existant, nous distinguons ce qui relève de l’entretien, de la réparation structurelle ou de la mise aux normes. Cette distinction évite les travaux inutiles et les mauvaises surprises.",
    ],
    deliverables: [
      "Note de faisabilité : contraintes, risques, ordres de grandeur",
      "Audit technique d’un bâtiment existant",
      "Relecture de devis, de plans et de descriptifs",
      "Comparatif de matériaux et de solutions constructives",
      "Assistance au maître d’ouvrage",
    ],
    audience: "Propriétaires, investisseurs, entreprises, institutions.",
  },
  {
    slug: "conception-etudes",
    number: "02",
    title: "Conception & études",
    short: "Dessiner ce qui sera construit.",
    statement: "Des plans que l’on peut construire, chiffrer et contrôler.",
    intro:
      "Nous concevons en tenant compte du sol, du climat, du budget et des compétences disponibles sur le marché local. Un plan n’est utile que s’il peut être exécuté.",
    body: [
      "Chaque projet est accompagné d’un descriptif des ouvrages, d’un quantitatif et d’un chiffrage. L’entreprise qui exécute sait exactement ce qui est attendu, avec quels matériaux et dans quel délai.",
      "Nous produisons également les plans d’exécution et les notes de calcul nécessaires au chantier. Ce sont ces documents qui évitent les interprétations divergentes entre le maître d’ouvrage, l’architecte et les compagnons.",
    ],
    deliverables: [
      "Esquisses et avant-projet",
      "Plans architecturaux et plans d’exécution",
      "Notes de calcul de structure",
      "Descriptif des ouvrages et des matériaux",
      "Dossier de permis de construire",
      "Quantitatif et chiffrage détaillé",
    ],
    audience: "Particuliers, promoteurs, organisations, administrations.",
    image: {
      src: "/images/detail-chantier.jpg",
      alt: "Détail d’une ouverture sur un chantier de construction, mur brut et encadrement.",
      caption: "Le détail se décide sur le plan, se vérifie sur le chantier.",
    },
  },
  {
    slug: "gestion-de-projet",
    number: "03",
    title: "Gestion de projet",
    short: "Tenir le budget et le calendrier.",
    statement: "Le budget et le calendrier ne se surveillent pas depuis un bureau.",
    intro:
      "Nous prenons la responsabilité de la coordination : planning, achats, corps d’état, contrôle qualité et sécurité. Vous gardez un interlocuteur unique et une vision claire de l’avancement.",
    body: [
      "Le maître d’ouvrage reçoit un point écrit régulier : travaux réalisés, décisions à prendre, photos, écarts éventuels. Les problèmes sont posés tôt, avec des options chiffrées.",
      "Nous travaillons avec des entreprises et des fournisseurs que nous connaissons, mais nous contrôlons chaque livraison et chaque prestation. La confiance ne remplace pas la vérification.",
    ],
    deliverables: [
      "Planning général et planning d’exécution",
      "Coordination des entreprises et des fournisseurs",
      "Comptes rendus de réunion de chantier",
      "Suivi budgétaire et gestion des avenants",
      "Contrôle qualité et sécurité",
      "Réception, réserves et dossier des ouvrages exécutés",
    ],
    audience: "Maîtres d’ouvrage qui veulent un interlocuteur unique.",
  },
  {
    slug: "construction-travaux-publics",
    number: "04",
    title: "Construction & travaux publics",
    short: "Exécuter proprement.",
    statement: "Exécuter ce qui a été décidé, sans improvisation.",
    intro:
      "Nous réalisons le gros œuvre, le second œuvre et les finitions, ainsi que des travaux de voirie et d’assainissement. Nos équipes travaillent à partir de plans d’exécution et de procédures écrites.",
    body: [
      "Le terrassement et les fondations sont adaptés au sol réel, pas à un modèle standard. Les matériaux sont contrôlés à la livraison ; le béton est suivi depuis le dosage jusqu’à la cure.",
      "Nous organisons le chantier autour de l’accès, du stockage et de la sécurité. Sur un site urbain dense comme sur un terrain isolé, cette préparation fait la différence sur les délais.",
    ],
    deliverables: [
      "Installation et organisation de chantier",
      "Terrassement et fondations",
      "Béton armé et maçonnerie",
      "Charpente, couverture et menuiserie",
      "Plomberie, électricité et finitions",
      "Voiries, réseaux et assainissement",
    ],
    audience: "Particuliers, entreprises, institutions, bailleurs.",
    image: {
      src: "/images/chantier-beton.jpg",
      alt: "Compagnons préparant le béton sur un chantier, avec une bétonnière et des matériaux.",
      caption: "Préparer, doser, contrôler. Le gros œuvre ne tolère pas l’approximation.",
    },
  },
  {
    slug: "formation",
    number: "05",
    title: "Formation",
    short: "Transmettre ce qui fait la différence.",
    statement: "Une compétence qui reste sur place.",
    intro:
      "Nous formons les équipes de chantier et les maîtres d’ouvrage aux pratiques qui évitent les reprises : lecture de plans, sécurité, contrôle du béton et organisation d’un chantier.",
    body: [
      "Les sessions se déroulent sur site, avec des cas réels et des documents du projet. Les participants repartent avec des procédures simples, applicables dès le lendemain.",
      "La formation fait partie de notre mission : un projet réussi ne laisse pas seulement un bâtiment, il laisse aussi des équipes plus sûres de ce qu’elles font.",
    ],
    deliverables: [
      "Lecture de plans et de descriptifs",
      "Sécurité et prévention sur chantier",
      "Contrôle qualité des matériaux et du béton",
      "Organisation et suivi de chantier",
      "Gestion de projet pour maîtres d’ouvrage",
    ],
    audience: "Entreprises, organisations, administrations, équipes internes.",
  },
];

export const commitments = [
  {
    title: "Un interlocuteur unique",
    text: "Vous parlez à la même équipe du premier rendez-vous à la réception.",
  },
  {
    title: "Des choix expliqués",
    text: "Chaque solution technique et chaque ligne du devis ont une raison d’être.",
  },
  {
    title: "Un chantier visité",
    text: "Nous allons sur place, nous photographions, nous consignons.",
  },
  {
    title: "Une équipe d’ici",
    text: "Des compagnons, des fournisseurs et des partenaires que nous connaissons à Bangui.",
  },
];

export const method = [
  {
    number: "01",
    title: "Écouter et visiter",
    text: "Nous venons sur le terrain avant de parler de plans. Usage, budget, accès, sol, voisinage : les contraintes sont posées dès le départ.",
  },
  {
    number: "02",
    title: "Concevoir et chiffrer",
    text: "Plans, descriptif et devis détaillé. Vous validez un projet, un budget et un calendrier, pas une intention.",
  },
  {
    number: "03",
    title: "Construire et contrôler",
    text: "Installation de chantier, approvisionnements, contrôle des matériaux, réunions hebdomadaires. Chaque semaine, vous savez où en est le chantier.",
  },
  {
    number: "04",
    title: "Réceptionner et accompagner",
    text: "Réception, levée des réserves, dossier des ouvrages exécutés. Nous restons joignables après la livraison.",
  },
];

export type Typology = {
  slug: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  scope: string[];
  programme: string;
  mission: string;
};

export const typologies: Typology[] = [
  {
    slug: "maisons-residences",
    label: "01 — Résidentiel",
    title: "Maisons & résidences",
    description:
      "De la villa familiale à la résidence locative. Une maison se conçoit autour de la vie qui va s’y dérouler, puis autour des contraintes du terrain. Nous travaillons l’orientation, la ventilation naturelle et les espaces de service avant de parler de finitions.",
    image: "/images/maison-construction.jpg",
    alt: "Maison en construction avec sa charpente et sa toiture, sous un ciel dégagé.",
    scope: [
      "Étude de sol et fondations",
      "Structure, maçonnerie et enveloppe",
      "Réseaux, plomberie et électricité",
      "Finitions intérieures et extérieures",
      "Clôture, cour et aménagements",
    ],
    programme: "Villa, résidence familiale, petit collectif",
    mission: "Conception, construction ou mission complète",
  },
  {
    slug: "bureaux-commerces",
    label: "02 — Tertiaire",
    title: "Bureaux & commerces",
    description:
      "Des surfaces qui doivent fonctionner tous les jours : accès, circulation, lumière, climatisation, entretien. Nous privilégions des plans lisibles et des matériaux robustes, adaptés à l’usage réel et au budget d’exploitation.",
    image: "/images/immeuble-bureaux.jpg",
    alt: "Immeuble de bureaux moderne avec façades vitrées et parking extérieur.",
    scope: [
      "Études de faisabilité et capacité du terrain",
      "Conception des espaces et des circulations",
      "Structure et façades",
      "Réseaux techniques et confort",
      "Aménagement des abords et stationnement",
    ],
    programme: "Immeuble de bureaux, commerce, espace mixte",
    mission: "Études, travaux ou gestion de projet",
  },
  {
    slug: "equipements-travaux-publics",
    label: "03 — Ouvrages",
    title: "Équipements & travaux publics",
    description:
      "Les ouvrages qui desservent un quartier ou une institution demandent une autre rigueur : fondations, drainage, voiries, réseaux. Nous travaillons avec des relevés précis et un planning qui tient compte des saisons et des accès.",
    image: "/images/chantier-gros-oeuvre.jpg",
    alt: "Chantier de construction avec structures en béton, échafaudages et engins.",
    scope: [
      "Terrassement et préparation de plateforme",
      "Fondations et ouvrages en béton armé",
      "Voiries et assainissement",
      "Réseaux d’eau et d’électricité",
      "Contrôle d’exécution et réception",
    ],
    programme: "Équipement public, voirie, petit ouvrage d’art",
    mission: "Études techniques et exécution",
  },
  {
    slug: "renovation-rehabilitation",
    label: "04 — Existant",
    title: "Rénovation & réhabilitation",
    description:
      "Remettre à niveau sans tout jeter. Nous commençons par un diagnostic de l’existant : structure, humidité, réseaux, sécurité. Les travaux sont ensuite hiérarchisés pour traiter d’abord ce qui menace le bâtiment et son usage.",
    image: "/images/detail-chantier.jpg",
    alt: "Détail d’un mur en construction avec une ouverture et des matériaux bruts.",
    scope: [
      "Diagnostic structurel et relevé de l’existant",
      "Reprise de structure et d’étanchéité",
      "Remise aux normes des réseaux",
      "Réaménagement des espaces",
      "Ravalement et finitions",
    ],
    programme: "Bâtiment existant, maison, local professionnel",
    mission: "Diagnostic, conception et travaux",
  },
];

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  paragraphs: string[];
  takeaway: string;
};

export const notes: Note[] = [
  {
    slug: "fondations-sol",
    title: "Fondations : le sol décide avant l’architecte",
    excerpt:
      "Deux terrains voisins peuvent porter deux fondations différentes. Voici pourquoi l’étude de sol n’est pas une formalité.",
    readingTime: "4 min",
    paragraphs: [
      "À Bangui, on rencontre des sols latéritiques compactes, des remblais anciens, des zones mal drainées et des parcelles en pente. Un même plan de maison peut donc exiger des fondations différentes d’un terrain à l’autre. Copier les fondations du voisin est l’une des erreurs les plus coûteuses que nous voyons.",
      "L’étude de sol commence par des essais simples : ouverture de fouilles, observation des couches, test de portance, repérage de la nappe. Elle permet de choisir un type de fondation — semelle filante, semelle isolée, radier — et une profondeur d’ancrage. Ces choix déterminent ensuite la quantité de béton, d’acier et de terrassement.",
      "Un sol mal lu ne se voit pas à la réception. Il se manifeste des mois plus tard, par des fissures, des tassements différentiels ou des infiltrations. Reprendre une fondation après coup coûte plusieurs fois le prix de l’étude. C’est pourquoi nous refusons de chiffrer un gros œuvre sans visite de terrain et, dès que la nature du sol est incertaine, sans essais.",
    ],
    takeaway:
      "Avant de valider un plan, demandez qui a vérifié le sol, à quelle profondeur et sur quelles observations.",
  },
  {
    slug: "saison-des-pluies",
    title: "Construire pendant la saison des pluies : ce qu’il faut décaler",
    excerpt:
      "On ne construit pas en saison des pluies comme en saison sèche. Le planning doit intégrer l’eau, pas la subir.",
    readingTime: "4 min",
    paragraphs: [
      "De mai à octobre, les pluies modifient le chantier : les pistes deviennent difficiles, les fouilles se remplissent, le séchage du béton et des enduits ralentit, les livraisons prennent du retard. Ces contraintes ne sont pas des exceptions ; elles sont la norme. Un planning qui les ignore sera décalé dès la première semaine.",
      "La première décision concerne le terrassement et les fondations. Mieux vaut ouvrir les fouilles, couler les semelles et remblayer rapidement, avec un drainage provisoire prévu. La deuxième concerne la couverture : mettre le bâtiment hors d’eau avant les grandes pluies protège les maçonneries et permet de poursuivre les travaux intérieurs.",
      "Pour les finitions, l’humidité est l’ennemie des enduits, des peintures et des bois. Nous prévoyons des temps de séchage plus longs et des protections temporaires. Enfin, nous commandons les matériaux sensibles à l’avance et prévoyons un stockage couvert. Construire en saison des pluies est possible ; improviser ne l’est pas.",
    ],
    takeaway:
      "Un bon planning de saison des pluies se reconnaît à trois choses : un drainage prévu, une mise hors d’eau anticipée et des délais de séchage réalistes.",
  },
  {
    slug: "devis-detaille",
    title: "À quoi sert vraiment un devis détaillé",
    excerpt:
      "Un prix global ne dit pas ce qui est inclus. Un devis détaillé, si. Et c’est souvent là que se joue la différence.",
    readingTime: "3 min",
    paragraphs: [
      "Un devis peut tenir sur une ligne : « construction d’une maison, 45 000 000 FCFA ». Ce prix ne permet ni de comparer les offres, ni de savoir ce qui est prévu pour les fondations, l’électricité ou l’évacuation des eaux. Il laisse surtout la porte ouverte à des avenants en cours de chantier.",
      "Un devis détaillé décrit les ouvrages, les quantités, les matériaux et les prestations incluses. Il distingue le gros œuvre, le second œuvre et les finitions. Il précise ce qui est exclu : branchement électrique, forage, clôture, aménagements extérieurs. Cette clarté protège les deux parties.",
      "Nous demandons toujours aux entreprises de chiffrer séparément les postes incertains, comme les fouilles imprévues ou les reprises de structure. Un poste provisoire assumé vaut mieux qu’un prix ferme qui sera renégocié. Le devis n’est pas un document commercial : c’est le contrat technique du chantier.",
    ],
    takeaway:
      "Comparez les devis ligne par ligne, pas au total. La différence de prix se cache souvent dans ce qui n’est pas écrit.",
  },
];

export const faq = [
  {
    question: "Je n’ai pas encore de plans. Est-ce un problème ?",
    answer:
      "Non, c’est souvent le bon moment pour nous appeler. Nous pouvons commencer par une visite du terrain, une étude de faisabilité et un avant-projet. Les plans viennent ensuite, avec un budget connu.",
  },
  {
    question: "Intervenez-vous en dehors de Bangui ?",
    answer:
      "Oui, dans les limites d’un accès réaliste au chantier. Chaque demande est étudiée au cas par cas : la logistique, le stockage et les déplacements sont intégrés au budget avant tout engagement.",
  },
  {
    question: "Combien coûte une étude ?",
    answer:
      "Le montant dépend de la surface, de la complexité du terrain et de la mission demandée. Nous établissons un devis d’étude avant de commencer, sans engagement sur les travaux.",
  },
  {
    question: "Pouvez-vous reprendre un chantier arrêté ?",
    answer:
      "Oui, après un diagnostic de l’existant. Nous ne reprenons pas un ouvrage sans vérifier ce qui a été fait, avec quels matériaux et dans quelles conditions. C’est la seule façon de chiffrer la suite sérieusement.",
  },
  {
    question: "Quels sont vos délais de réponse ?",
    answer:
      "Deux jours ouvrés pour un premier retour sur une demande écrite. Pour une urgence de chantier, appelez-nous directement au +236 76 34 92 50.",
  },
];

export const photoCredits = [
  {
    title: "Compagnons sur un chantier, Douala",
    author: "Minette Lontsie",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_Workers_in_Douala.jpg",
    used: "Page d’accueil, visuel du cabinet",
  },
  {
    title: "Chantier commercial, Tokai, Le Cap",
    author: "Husskeyy",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_Site_in_Tokai,_Cape_Town.jpg",
    used: "Page d’accueil, visuel principal ; aperçu social",
  },
  {
    title: "Préparation du béton, Embu, Kenya",
    author: "Mugambi Muriuki",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_site_workers_loading_water,_sand,_ballast_and_cememt_into_a_concrete_mixer_in_Embu,_Kenya_3.jpg",
    used: "Expertise Construction",
  },
  {
    title: "Maison en construction, Ghana",
    author: "Kwameghana",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Modern_house_under_construction.jpg",
    used: "Typologie Résidentiel, carnet et crédits",
  },
  {
    title: "Immeuble de bureaux et parking, Naguru, Kampala",
    author: "Micheal Kaluba",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Apartment_and_office_building_with_car_park_in_Naguru,_2022.jpg",
    used: "Typologie Tertiaire et expertise Gestion de projet",
  },
  {
    title: "Hôtel de ville de Bangui",
    author: "Auteur inconnu",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_ville_de_Bangui.jpg",
    used: "Pages Le cabinet, Contact et accueil, visuel local",
  },
  {
    title: "Détail de chantier, Waterfront, Le Cap",
    author: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Waterfront,_Baustelle_--_2024_--_3854.jpg",
    used: "Expertise Conception, typologie Rénovation, mentions légales",
  },
];
