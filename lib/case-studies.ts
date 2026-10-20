export type CaseStudy = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  image: { src: string; alt: string };
  gallery: { src: string; alt: string; caption: string }[];
  facts: { label: string; value: string }[];
  context: string[];
  brief: string[];
  constraints: { title: string; text: string }[];
  approach: { title: string; text: string }[];
  works: { phase: string; title: string; items: string[] }[];
  outcomes: string[];
  takeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "maisons-residences",
    number: "01",
    category: "Résidentiel",
    title: "Une maison autour d’un patio",
    subtitle:
      "Sur une parcelle étroite, gagner de l’intimité et de la fraîcheur sans augmenter le budget.",
    summary:
      "Quatre chambres, deux salles d’eau, un séjour traversant et un patio central : une maison familiale pensée pour le climat de Bangui et pour une parcelle de 15 mètres de large.",
    image: {
      src: "/images/maison-construction.jpg",
      alt: "Maison en construction avec sa charpente et sa toiture, sous un ciel dégagé.",
    },
    gallery: [
      {
        src: "/images/hero-chantier.jpg",
        alt: "Compagnons au travail sur un chantier de construction.",
        caption:
          "Le suivi de chantier se fait sur place, avec les documents d’exécution.",
      },
      {
        src: "/images/detail-chantier.jpg",
        alt: "Détail d’une ouverture sur un chantier, mur brut et encadrement.",
        caption:
          "Les ouvertures sont dimensionnées avant le coulage, pas ajustées après.",
      },
    ],
    facts: [
      { label: "Surface", value: "180 m²" },
      { label: "Terrain", value: "600 m²" },
      { label: "Durée", value: "11 mois" },
      { label: "Mission", value: "Conception & construction" },
    ],
    context: [
      "La parcelle est longue et étroite, bordée par une rue passante à l’ouest et par des voisins proches à l’est. Le programme familial est important : un couple, trois enfants et un parent âgé. La première réponse ne pouvait donc pas être une maison plus grande, mais une maison mieux organisée.",
      "Le terrain est légèrement en pente et reçoit beaucoup d’eau en saison des pluies. L’orientation, le drainage et la ventilation ont été traités avant les finitions. Le budget devait rester maîtrisé : les choix constructifs privilégient les matériaux disponibles localement et les savoir-faire de l’équipe.",
    ],
    brief: [
      "Quatre chambres, dont une suite parentale",
      "Deux salles d’eau et un WC visiteurs",
      "Séjour traversant ouvert sur le patio",
      "Cuisine fermée, avec réserve et accès de service",
      "Un bureau pouvant devenir une chambre",
      "Logement de gardien et parking pour deux véhicules",
      "Patio planté, protégé du regard des voisins",
    ],
    constraints: [
      {
        title: "Parcelle étroite",
        text: "Quinze mètres de large seulement. Les circulations devaient être compactes et les pièces ouvertes sur des vues intérieures, pas sur les voisins.",
      },
      {
        title: "Sol et pluies",
        text: "Un sol latéritique avec une zone de remblai ancien. Les fondations ont été dimensionnées après fouilles, avec un drainage périphérique et une plateforme légèrement surélevée.",
      },
      {
        title: "Budget ferme",
        text: "Le programme a été hiérarchisé dès l’esquisse : structure et étanchéité d’abord, finitions progressives ensuite. Aucune extension n’a été laissée à l’improvisation.",
      },
    ],
    approach: [
      {
        title: "Une maison en L autour du patio",
        text: "Le patio central apporte lumière et ventilation aux pièces de vie. Il protège aussi les chambres des regards et crée un espace extérieur utilisable toute l’année.",
      },
      {
        title: "Ventilation traversante",
        text: "Les ouvertures sont alignées sur les vents dominants. Les débords de toiture et les brise-soleil réduisent l’ensoleillement direct sur les façades ouest.",
      },
      {
        title: "Structure simple, matériaux locaux",
        text: "Maçonnerie en agglos, chaînages béton et charpente bois. Les portées restent courtes pour éviter les poutres coûteuses et faciliter la mise en œuvre.",
      },
      {
        title: "Services regroupés",
        text: "Cuisine, salles d’eau et réserves sont regroupées pour limiter les longueurs de réseaux et faciliter l’entretien. Une citerne et une préparation solaire sont prévues.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Installation et terrassement",
        items: [
          "Clôture de chantier, accès et zone de stockage",
          "Décapage, plateforme et drainage provisoire",
          "Fouilles et vérification du sol",
        ],
      },
      {
        phase: "02",
        title: "Fondations et structure",
        items: [
          "Semelles filantes et longrines",
          "Élévation des murs et chaînages",
          "Poteaux et linteaux des grandes ouvertures",
        ],
      },
      {
        phase: "03",
        title: "Enveloppe",
        items: [
          "Charpente, couverture et zinguerie",
          "Menuiseries extérieures",
          "Enduits extérieurs et protection des façades",
        ],
      },
      {
        phase: "04",
        title: "Lots techniques",
        items: [
          "Plomberie, évacuations et citerne",
          "Électricité, tableau et mise à la terre",
          "Préparation des équipements solaires",
        ],
      },
      {
        phase: "05",
        title: "Finitions et réception",
        items: [
          "Sols, enduits intérieurs et peintures",
          "Cuisine, sanitaires et menuiseries intérieures",
          "Aménagement du patio, clôture et portail",
        ],
      },
    ],
    outcomes: [
      "Les pièces de vie restent fraîches en fin de journée grâce au patio et à la ventilation traversante.",
      "Les chambres ne sont pas exposées directement à la rue ni aux voisins.",
      "Le coût de construction est resté dans l’enveloppe validée, avec des finitions réalisées par étapes.",
      "Une extension côté cour peut être ajoutée sans reprendre la structure existante.",
    ],
    takeaway:
      "Sur une parcelle contrainte, la qualité d’usage vient de l’organisation et de la lumière avant de venir des mètres carrés.",
  },
  {
    slug: "bureaux-commerces",
    number: "02",
    category: "Tertiaire",
    title: "Un immeuble qui sépare les flux",
    subtitle:
      "Commerces au rez-de-chaussée, bureaux aux étages : chaque usage a son entrée, son horaire et son budget d’exploitation.",
    summary:
      "Un petit immeuble mixte de 640 m² sur un terrain d’angle. Le projet organise les accès, protège les façades du soleil et prépare la division future des plateaux.",
    image: {
      src: "/images/immeuble-bureaux.jpg",
      alt: "Immeuble de bureaux moderne avec façades vitrées et parking extérieur.",
    },
    gallery: [
      {
        src: "/images/chantier-beton.jpg",
        alt: "Compagnons préparant le béton sur un chantier.",
        caption:
          "Le contrôle du béton conditionne la durabilité de la structure.",
      },
      {
        src: "/images/detail-chantier.jpg",
        alt: "Détail d’une ouverture sur un chantier.",
        caption:
          "Les façades sont préparées pour recevoir les équipements techniques.",
      },
    ],
    facts: [
      { label: "Surface", value: "640 m²" },
      { label: "Niveaux", value: "R+2" },
      { label: "Durée", value: "14 mois" },
      { label: "Mission", value: "Études & gestion" },
    ],
    context: [
      "Le terrain est situé à un angle de rue fréquenté, avec une bonne visibilité pour une activité commerciale mais peu de profondeur pour le stationnement. Le maître d’ouvrage souhaitait louer le rez-de-chaussée et installer ses bureaux aux étages, tout en gardant la possibilité de diviser les plateaux.",
      "Les contraintes d’exploitation sont aussi importantes que les contraintes de construction : livraisons, clients, employés et véhicules doivent circuler sans se gêner. Les coupures d’électricité imposent par ailleurs de prévoir des réserves et un emplacement technique accessible.",
    ],
    brief: [
      "Rez-de-chaussée commercial divisible en deux cellules",
      "Deux plateaux de bureaux, environ 220 m² chacun",
      "Entrée commune et circulation verticale lisible",
      "Parking extérieur et zone de livraison séparée",
      "Blocs sanitaires par niveau, avec possibilité d’extension",
      "Local technique, réserve et emplacement pour groupe électrogène",
      "Façades protégées du soleil et faciles à entretenir",
    ],
    constraints: [
      {
        title: "Terrain d’angle",
        text: "Deux façades visibles, mais deux accès à organiser. Le stationnement devait rester possible sans bloquer la circulation des piétons.",
      },
      {
        title: "Usages superposés",
        text: "Commerce, bureaux et livraisons ne partagent pas les mêmes horaires. Les entrées et les circulations ont été séparées dès l’esquisse.",
      },
      {
        title: "Budget d’exploitation",
        text: "Les surfaces vitrées ont été dimensionnées avec des protections solaires pour limiter la climatisation, sans sacrifier la lumière naturelle.",
      },
    ],
    approach: [
      {
        title: "Une trame structurelle régulière",
        text: "La trame permet des plateaux libres et une division future sans reprise majeure. Les poteaux sont alignés avec les façades et les circulations.",
      },
      {
        title: "Deux entrées, un coeur technique",
        text: "Le commerce et les bureaux ont chacun leur accès. Les sanitaires, réserves et gaines sont regroupés au centre pour libérer les façades.",
      },
      {
        title: "Façades filtrées",
        text: "Des brise-soleil et des débords protègent les vitrages des rayons directs. Les parties opaques sont isolées et faciles à ravaler.",
      },
      {
        title: "Résilience locale",
        text: "Le projet prévoit une réserve d’eau, un local pour groupe électrogène et des passages de câbles accessibles pour les évolutions futures.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Études et autorisations",
        items: [
          "Relevé topographique et étude de faisabilité",
          "Avant-projet, plans d’exécution et notice technique",
          "Dossier de permis et consultation des entreprises",
        ],
      },
      {
        phase: "02",
        title: "Gros œuvre",
        items: [
          "Terrassement et fondations",
          "Structure béton armé sur trois niveaux",
          "Maçonneries et escalier principal",
        ],
      },
      {
        phase: "03",
        title: "Enveloppe et façades",
        items: [
          "Couverture et étanchéité",
          "Menuiseries aluminium et protections solaires",
          "Ravalement et garde-corps",
        ],
      },
      {
        phase: "04",
        title: "Lots techniques",
        items: [
          "Électricité, courants faibles et mise à la terre",
          "Plomberie, sanitaires et réserve d’eau",
          "Climatisation et ventilation des plateaux",
        ],
      },
      {
        phase: "05",
        title: "Finitions et livraison",
        items: [
          "Cloisons, sols et peintures",
          "Aménagement des cellules commerciales",
          "Parking, accès et réception",
        ],
      },
    ],
    outcomes: [
      "Les deux activités disposent d’entrées distinctes et de circulations qui ne se croisent pas.",
      "Les plateaux peuvent être divisés ou réaménagés sans toucher à la structure.",
      "Les protections solaires réduisent la charge de climatisation et l’entretien des vitrages.",
      "Le local technique et les réserves permettent d’absorber les coupures sans improviser.",
    ],
    takeaway:
      "Un immeuble mixte réussi se juge à la fluidité de ses accès autant qu’à la qualité de ses plateaux.",
  },
  {
    slug: "equipements-travaux-publics",
    number: "03",
    category: "Ouvrages",
    title: "Un équipement de quartier hors d’eau",
    subtitle:
      "Rehausser la plateforme, drainer avant de construire et livrer par phases : un ouvrage utilisable même en saison des pluies.",
    summary:
      "Un hall communautaire de 1 200 m² avec annexes, sur un terrain bas et mal drainé. Le projet traite l’eau avant le bâtiment et prévoit une mise en service progressive.",
    image: {
      src: "/images/chantier-gros-oeuvre.jpg",
      alt: "Chantier de construction avec structures en béton, échafaudages et engins.",
    },
    gallery: [
      {
        src: "/images/chantier-beton.jpg",
        alt: "Préparation du béton sur un chantier.",
        caption:
          "Les ouvrages en béton sont contrôlés depuis le dosage jusqu’à la cure.",
      },
      {
        src: "/images/hero-chantier.jpg",
        alt: "Compagnons au travail sur un chantier.",
        caption:
          "L’organisation du chantier tient compte des accès et des périodes de pluie.",
      },
    ],
    facts: [
      { label: "Emprise", value: "1 200 m²" },
      { label: "Durée", value: "9 mois" },
      { label: "Mission", value: "Études & exécution" },
      { label: "Programme", value: "Hall + annexes" },
    ],
    context: [
      "Le terrain se trouve dans une zone basse, avec une nappe haute en saison des pluies et un accès qui se dégrade rapidement. Le programme prévoit un hall couvert pour les rassemblements, des annexes administratives, des sanitaires et une zone de service.",
      "L’ouvrage doit rester utilisable toute l’année, y compris pendant les périodes de forte pluie. La conception ne pouvait donc pas se limiter au bâtiment : elle devait traiter la plateforme, les accès, le drainage et les réseaux avant de poser les premières fondations.",
    ],
    brief: [
      "Un hall couvert modulable de 600 m²",
      "Des annexes pour l’administration et les réunions",
      "Sanitaires accessibles et point d’eau",
      "Une zone de service pour les livraisons",
      "Un accès carrossable praticable en toute saison",
      "Une mise en service par phases, sans fermer le site",
      "Un entretien simple, avec des matériaux robustes",
    ],
    constraints: [
      {
        title: "Terrain bas",
        text: "La plateforme devait être rehaussée et drainée pour mettre le rez-de-chaussée hors d’eau. Les niveaux ont été calés à partir de relevés et non d’hypothèses.",
      },
      {
        title: "Accès saisonnier",
        text: "La piste d’accès devient difficile en saison des pluies. Le planning d’approvisionnement et la plateforme ont été organisés autour de cette contrainte.",
      },
      {
        title: "Site ouvert",
        text: "Le terrain reste utilisé par le quartier pendant les travaux. Les zones de chantier ont été cloisonnées et les circulations maintenues.",
      },
    ],
    approach: [
      {
        title: "Drainer avant de construire",
        text: "Un réseau périphérique et un caniveau central évacuent les eaux vers l’exutoire existant. La plateforme est rehaussée et compactée par couches contrôlées.",
      },
      {
        title: "Une structure répétitive",
        text: "La trame du hall permet de répéter les portiques et de réduire les coffrages. Les annexes utilisent la même logique pour faciliter l’exécution.",
      },
      {
        title: "Matériaux robustes",
        text: "Béton armé pour les éléments porteurs, maçonnerie protégée et couverture ventilée. Les finitions sont choisies pour résister à l’humidité et à un usage intensif.",
      },
      {
        title: "Livraison par phases",
        text: "Le hall et les annexes sont livrés en deux temps. Les réseaux et les accès sont dimensionnés dès le départ pour la configuration finale.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Installation et plateforme",
        items: [
          "Relevés, implantation et clôture de chantier",
          "Décapage, remblai compacté et contrôle des niveaux",
          "Drainage provisoire et accès de chantier",
        ],
      },
      {
        phase: "02",
        title: "Fondations et structure",
        items: [
          "Semelles et longrines",
          "Portiques du hall et poteaux des annexes",
          "Planchers et ouvrages en béton armé",
        ],
      },
      {
        phase: "03",
        title: "Enveloppe",
        items: [
          "Charpente et couverture ventilée",
          "Maçonneries, enduits et protections",
          "Menuiseries et fermetures",
        ],
      },
      {
        phase: "04",
        title: "Réseaux et aménagements",
        items: [
          "Eau, assainissement et sanitaires",
          "Électricité et éclairage extérieur",
          "Voirie d’accès et caniveaux",
        ],
      },
      {
        phase: "05",
        title: "Réception",
        items: [
          "Essais des réseaux et contrôle des accès",
          "Nettoyage, levée des réserves",
          "Dossier des ouvrages exécutés",
        ],
      },
    ],
    outcomes: [
      "Le rez-de-chaussée est hors d’eau et le terrain se vide correctement après les pluies.",
      "Le hall peut fonctionner indépendamment des annexes pendant la seconde phase.",
      "Les accès et la zone de service restent praticables en saison humide.",
      "Les matériaux et les réseaux choisis peuvent être entretenus localement.",
    ],
    takeaway:
      "Pour un équipement, l’hydraulique et les accès font partie du bâtiment. Les traiter après coup coûte plus cher et ne règle jamais vraiment le problème.",
  },
  {
    slug: "renovation-rehabilitation",
    number: "04",
    category: "Existant",
    title: "Réhabiliter sans effacer",
    subtitle:
      "Diagnostiquer avant de démolir, réparer ce qui porte et remplacer ce qui menace : un bâtiment remis en service sans perdre son caractère.",
    summary:
      "Un bâtiment existant de 320 m², occupé par phases. Le projet combine reprise structurelle, étanchéité, réseaux neufs et préservation des façades.",
    image: {
      src: "/images/detail-chantier.jpg",
      alt: "Détail d’un mur en construction avec une ouverture et des matériaux bruts.",
    },
    gallery: [
      {
        src: "/images/maison-construction.jpg",
        alt: "Maison en construction avec sa charpente et sa toiture.",
        caption:
          "La réhabilitation conserve la structure saine et remplace les éléments fatigués.",
      },
      {
        src: "/images/hero-chantier.jpg",
        alt: "Compagnons au travail sur un chantier.",
        caption:
          "Les interventions sont planifiées par zones pour maintenir l’usage du bâtiment.",
      },
    ],
    facts: [
      { label: "Surface", value: "320 m²" },
      { label: "Durée", value: "6 mois" },
      { label: "Mission", value: "Diagnostic & travaux" },
      { label: "Contrainte", value: "Site occupé" },
    ],
    context: [
      "Le bâtiment avait connu plusieurs campagnes de travaux sans dossier technique. Certaines fissures étaient stabilisées, d’autres évoluaient. Les réseaux électriques et de plomberie ne correspondaient plus à l’usage, et les infiltrations avaient dégradé les enduits et les menuiseries.",
      "Le maître d’ouvrage ne voulait pas démolir : le bâtiment est bien situé, sa structure est globalement saine et son caractère architectural compte. La réhabilitation devait donc distinguer ce qui relève de l’entretien, de la réparation structurelle et de la mise en sécurité.",
    ],
    brief: [
      "Diagnostic structurel et relevé complet de l’existant",
      "Reprise des fissures actives et des zones humides",
      "Étanchéité de la toiture et des points singuliers",
      "Réseaux électriques et sanitaires neufs",
      "Réaménagement léger des espaces intérieurs",
      "Préservation des façades et des éléments caractéristiques",
      "Travaux réalisés par zones, sans fermer tout le bâtiment",
    ],
    constraints: [
      {
        title: "Historique inconnu",
        text: "Les travaux précédents n’étaient pas documentés. Des sondages et des ouvertures ont été réalisés avant de chiffrer les reprises.",
      },
      {
        title: "Humidité",
        text: "Les infiltrations venaient de la toiture et de points singuliers mal traités. Réparer l’étanchéité avant les finitions était une condition de durabilité.",
      },
      {
        title: "Site occupé",
        text: "Une partie du bâtiment restait en service. Le phasage, la poussière et le bruit ont été intégrés au planning et aux réunions de chantier.",
      },
    ],
    approach: [
      {
        title: "Diagnostiquer avant de chiffrer",
        text: "Ouvertures localisées, relevé des fissures, contrôle des appuis et recherche des fuites. Le devis distingue les travaux certains des reprises conditionnelles.",
      },
      {
        title: "Réparer ce qui porte",
        text: "Les éléments structurels sains sont conservés. Les zones fissurées sont reprises avec des techniques adaptées au matériau existant, sans masquer les désordres.",
      },
      {
        title: "Traiter l’eau d’abord",
        text: "Toiture, gouttières, seuils et drainage sont repris avant les enduits et les peintures. Une finition posée sur une fuite active ne tient pas.",
      },
      {
        title: "Moderniser sans dénaturer",
        text: "Les réseaux passent dans des gaines discrètes. Les menuiseries sont remplacées à l’identique lorsque c’est possible, avec des performances meilleures.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Diagnostic et préparation",
        items: [
          "Relevé, sondages et essais",
          "Plan de phasage et protection des zones occupées",
          "Installation de chantier et évacuation des gravats",
        ],
      },
      {
        phase: "02",
        title: "Structure et enveloppe",
        items: [
          "Reprise des fissures et des appuis",
          "Réfection de la charpente et de la couverture",
          "Traitement des points singuliers et des seuils",
        ],
      },
      {
        phase: "03",
        title: "Réseaux",
        items: [
          "Dépose des anciens réseaux",
          "Électricité, tableau et mise à la terre",
          "Plomberie, sanitaires et évacuations",
        ],
      },
      {
        phase: "04",
        title: "Intérieurs",
        items: [
          "Cloisons et réaménagements légers",
          "Enduits, sols et peintures",
          "Menuiseries et finitions",
        ],
      },
      {
        phase: "05",
        title: "Réception",
        items: [
          "Essais et levée des réserves",
          "Nettoyage et remise en service",
          "Dossier des ouvrages exécutés",
        ],
      },
    ],
    outcomes: [
      "Les désordres structurels sont stabilisés et documentés.",
      "La toiture et les points singuliers ne présentent plus d’infiltration.",
      "Les réseaux sont dimensionnés pour l’usage actuel et conformes aux règles de sécurité.",
      "Les façades et les éléments caractéristiques du bâtiment ont été conservés.",
    ],
    takeaway:
      "Réhabiliter commence par comprendre ce qui est solide. Démolir sans diagnostic coûte cher et fait perdre ce que le bâtiment avait de meilleur.",
  },
];
