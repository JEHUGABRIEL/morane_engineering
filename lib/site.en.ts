import {
  site as siteFr,
  type Expertise,
  type Note,
  type Typology,
} from "./site";

export const site = {
  ...siteFr,
  tagline: "Together, let’s build Africa.",
  description:
    "Central African construction, design and project management company. Morane Engineering supports homeowners, businesses and institutions in Bangui and across the Central African Republic.",
  country: "Central African Republic",
  address: "Bangui, Central African Republic",
};

export const nav = [
  { href: "/expertises", label: "Expertise" },
  { href: "/realisations", label: "Projects" },
  { href: "/cabinet", label: "The firm" },
  { href: "/carnet", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const expertises: Expertise[] = [
  {
    slug: "conseil-expertise",
    number: "01",
    title: "Consultancy & technical advice",
    short: "Diagnose before deciding.",
    statement:
      "An independent, documented opinion before committing significant sums.",
    intro:
      "We step in before a project starts or on an existing building: checking a site’s feasibility, auditing a structure, reviewing a quote or comparing construction options.",
    body: [
      "Our role is not to sell you a service, but to give you a clear basis for a decision. Every opinion is delivered in writing: findings, assumptions, risks and order-of-magnitude costs.",
      "On an existing building, we separate maintenance, structural repair and compliance work. That distinction avoids unnecessary work and unpleasant surprises.",
    ],
    deliverables: [
      "Feasibility note: constraints, risks and order-of-magnitude costs",
      "Technical audit of an existing building",
      "Review of quotes, drawings and specifications",
      "Comparison of materials and construction methods",
      "Assistance to the client",
    ],
    audience: "Owners, investors, companies and institutions.",
  },
  {
    slug: "conception-etudes",
    number: "02",
    title: "Design & engineering",
    short: "Draw what will be built.",
    statement: "Drawings that can be built, priced and checked.",
    intro:
      "We design around the ground, the climate, the budget and the skills available on the local market. A drawing is only useful if it can be executed.",
    body: [
      "Every project comes with a specification, a bill of quantities and a cost estimate. The contractor knows exactly what is expected, with which materials and within what timeframe.",
      "We also produce construction drawings and structural calculations. These documents prevent different interpretations between the client, the architect and the site team.",
    ],
    deliverables: [
      "Sketches and preliminary design",
      "Architectural and construction drawings",
      "Structural calculations",
      "Specifications and material schedules",
      "Building permit application",
      "Bill of quantities and detailed cost estimate",
    ],
    audience: "Homeowners, developers, organisations and public bodies.",
    image: {
      src: "/images/detail-chantier.jpg",
      alt: "Detail of an opening on a construction site, with a raw wall and frame.",
      caption: "Details are decided on the drawing and checked on site.",
    },
  },
  {
    slug: "gestion-de-projet",
    number: "03",
    title: "Project management",
    short: "Hold the budget and timeline.",
    statement: "Budgets and schedules are not managed from an office.",
    intro:
      "We take responsibility for coordination: programme, procurement, trades, quality control and safety. You keep one point of contact and a clear view of progress.",
    body: [
      "The client receives regular written updates: work completed, decisions needed, photographs and any variances. Problems are raised early, with priced options.",
      "We work with contractors and suppliers we know, but we check every delivery and every service. Trust is not a substitute for verification.",
    ],
    deliverables: [
      "Master programme and construction schedule",
      "Coordination of contractors and suppliers",
      "Site meeting minutes",
      "Budget monitoring and change orders",
      "Quality and safety control",
      "Handover, snag list and as-built documentation",
    ],
    audience: "Clients who want a single point of contact.",
  },
  {
    slug: "construction-travaux-publics",
    number: "04",
    title: "Construction & civil works",
    short: "Build it properly.",
    statement: "Execute what has been decided, without improvisation.",
    intro:
      "We carry out structural work, finishes and services, as well as roads and drainage. Our teams work from construction drawings and written procedures.",
    body: [
      "Earthworks and foundations are adapted to the actual ground, not to a standard model. Materials are checked on delivery; concrete is monitored from mix design to curing.",
      "We organise the site around access, storage and safety. On a dense urban site as well as on an isolated plot, that preparation makes the difference to the programme.",
    ],
    deliverables: [
      "Site set-up and organisation",
      "Earthworks and foundations",
      "Reinforced concrete and masonry",
      "Roof structure, roofing and joinery",
      "Plumbing, electrical works and finishes",
      "Roads, networks and drainage",
    ],
    audience: "Homeowners, companies, institutions and funders.",
    image: {
      src: "/images/chantier-beton.jpg",
      alt: "Workers preparing concrete on a construction site, with a mixer and materials.",
      caption: "Prepare, mix, check. Structural work does not tolerate guesswork.",
    },
  },
  {
    slug: "formation",
    number: "05",
    title: "Training",
    short: "Pass on what makes the difference.",
    statement: "Skills that stay local.",
    intro:
      "We train site teams and clients in the practices that prevent rework: reading drawings, safety, concrete control and site organisation.",
    body: [
      "Sessions take place on site, using real cases and the project’s own documents. Participants leave with simple procedures they can apply the next day.",
      "Training is part of our mission: a successful project leaves not only a building, but also teams that are more confident in what they do.",
    ],
    deliverables: [
      "Reading drawings and specifications",
      "Site safety and prevention",
      "Quality control of materials and concrete",
      "Site organisation and monitoring",
      "Project management for clients",
    ],
    audience: "Companies, organisations, public bodies and in-house teams.",
  },
];

export const commitments = [
  {
    title: "One point of contact",
    text: "You speak to the same team from the first meeting to handover.",
  },
  {
    title: "Explained choices",
    text: "Every technical solution and every line of the quote has a reason.",
  },
  {
    title: "A visited site",
    text: "We go on site, take photographs and keep a written record.",
  },
  {
    title: "A local team",
    text: "Builders, suppliers and partners we know in Bangui.",
  },
];

export const method = [
  {
    number: "01",
    title: "Listen and visit",
    text: "We come to the site before talking about drawings. Use, budget, access, ground and neighbours: the constraints are established from the start.",
  },
  {
    number: "02",
    title: "Design and cost",
    text: "Drawings, specifications and a detailed quote. You approve a project, a budget and a timeline — not an intention.",
  },
  {
    number: "03",
    title: "Build and check",
    text: "Site set-up, procurement, material checks and weekly meetings. Every week, you know where the project stands.",
  },
  {
    number: "04",
    title: "Hand over and support",
    text: "Handover, snag list and as-built documentation. We remain available after delivery.",
  },
];

export const typologies: Typology[] = [
  {
    slug: "maisons-residences",
    label: "01 — Residential",
    title: "Houses & residences",
    description:
      "From the family villa to the rental residence. A house is designed around the life that will unfold inside it, then around the constraints of the site. We work on orientation, natural ventilation and service spaces before discussing finishes.",
    image: "/images/maison-construction.jpg",
    alt: "House under construction with its roof structure and roof, under a clear sky.",
    scope: [
      "Soil investigation and foundations",
      "Structure, masonry and building envelope",
      "Services, plumbing and electrical works",
      "Interior and exterior finishes",
      "Boundary wall, yard and landscaping",
    ],
    programme: "Villa, family home, small apartment building",
    mission: "Design, construction or full mission",
  },
  {
    slug: "bureaux-commerces",
    label: "02 — Commercial",
    title: "Offices & retail",
    description:
      "Spaces that must work every day: access, circulation, light, air conditioning and upkeep. We favour clear layouts and robust materials, suited to real use and operating budgets.",
    image: "/images/immeuble-bureaux.jpg",
    alt: "Modern office building with glazed façades and an outdoor car park.",
    scope: [
      "Feasibility studies and site capacity",
      "Space planning and circulation",
      "Structure and façades",
      "Building services and comfort",
      "Landscaping and parking",
    ],
    programme: "Office building, retail unit, mixed-use space",
    mission: "Studies, works or project management",
  },
  {
    slug: "equipements-travaux-publics",
    label: "03 — Public works",
    title: "Facilities & civil works",
    description:
      "Facilities that serve a neighbourhood or an institution demand another level of rigour: foundations, drainage, roads and networks. We work from precise surveys and a programme that accounts for seasons and access.",
    image: "/images/chantier-gros-oeuvre.jpg",
    alt: "Construction site with concrete structures, scaffolding and machinery.",
    scope: [
      "Earthworks and platform preparation",
      "Foundations and reinforced concrete structures",
      "Roads and drainage",
      "Water and electrical networks",
      "Construction supervision and handover",
    ],
    programme: "Public facility, road, small civil structure",
    mission: "Technical studies and execution",
  },
  {
    slug: "renovation-rehabilitation",
    label: "04 — Existing buildings",
    title: "Renovation & refurbishment",
    description:
      "Upgrade without throwing everything away. We start with a diagnosis of the existing building: structure, damp, services and safety. Work is then prioritised to address what threatens the building and its use first.",
    image: "/images/detail-chantier.jpg",
    alt: "Detail of a wall under construction with an opening and raw materials.",
    scope: [
      "Structural diagnosis and survey of the existing building",
      "Structural and waterproofing repairs",
      "Upgrading services to current standards",
      "Reconfiguration of spaces",
      "External cleaning and finishes",
    ],
    programme: "Existing building, house, commercial unit",
    mission: "Diagnosis, design and works",
  },
];

export const notes: Note[] = [
  {
    slug: "fondations-sol",
    title: "Foundations: the ground decides before the architect",
    excerpt:
      "Two neighbouring plots can require two different foundations. Here is why a soil investigation is not a formality.",
    readingTime: "4 min",
    paragraphs: [
      "In Bangui, you find compact lateritic soils, old fill, poorly drained areas and sloping plots. The same house design can therefore require different foundations from one plot to the next. Copying a neighbour’s foundation is one of the most expensive mistakes we see.",
      "A soil investigation starts with simple tests: opening trial pits, observing the layers, checking bearing capacity and locating the water table. It determines the type of foundation — strip footing, pad footing or raft — and the anchoring depth. Those choices then drive the quantities of concrete, steel and earthworks.",
      "A badly read soil does not show at handover. It appears months later, through cracks, differential settlement or damp. Repairing a foundation afterwards costs several times the price of the investigation. That is why we refuse to price structural work without a site visit and, whenever the ground is uncertain, without testing.",
    ],
    takeaway:
      "Before approving a drawing, ask who checked the ground, at what depth and on what evidence.",
  },
  {
    slug: "saison-des-pluies",
    title: "Building during the rainy season: what has to move",
    excerpt:
      "You do not build in the rainy season the way you build in the dry season. The programme must account for water, not suffer it.",
    readingTime: "4 min",
    paragraphs: [
      "From May to October, rain changes the site: tracks become difficult, trenches fill with water, concrete and plaster dry more slowly, and deliveries are delayed. These constraints are not exceptions; they are the norm. A programme that ignores them will fall behind in the first week.",
      "The first decision concerns earthworks and foundations. It is better to open trenches, pour the footings and backfill quickly, with temporary drainage in place. The second concerns the roof: getting the building watertight before the heaviest rains protects the masonry and allows interior work to continue.",
      "For finishes, moisture is the enemy of plaster, paint and timber. We allow longer drying times and temporary protection. Finally, we order sensitive materials in advance and plan covered storage. Building in the rainy season is possible; improvising is not.",
    ],
    takeaway:
      "A good rainy-season programme is recognised by three things: planned drainage, an early watertight roof and realistic drying times.",
  },
  {
    slug: "devis-detaille",
    title: "What a detailed quote is really for",
    excerpt:
      "A lump sum does not say what is included. A detailed quote does. And that is often where the difference lies.",
    readingTime: "3 min",
    paragraphs: [
      "A quote can fit on one line: “house construction, 45,000,000 FCFA”. That price lets you neither compare offers nor know what is planned for foundations, electrical works or drainage. Above all, it leaves the door open to variations during construction.",
      "A detailed quote describes the works, quantities, materials and services included. It separates structural work, finishes and services. It states what is excluded: electrical connection, borehole, boundary wall, external works. That clarity protects both parties.",
      "We always ask contractors to price uncertain items separately, such as unforeseen excavation or structural repairs. An acknowledged provisional sum is better than a fixed price that will be renegotiated. A quote is not a sales document: it is the technical contract for the site.",
    ],
    takeaway:
      "Compare quotes line by line, not by the total. The price difference is often hidden in what is not written.",
  },
];

export const faq = [
  {
    question: "I don’t have drawings yet. Is that a problem?",
    answer:
      "No, it is often the right time to call us. We can start with a site visit, a feasibility study and a preliminary design. Drawings come next, with a known budget.",
  },
  {
    question: "Do you work outside Bangui?",
    answer:
      "Yes, within the limits of realistic site access. Each request is reviewed case by case: logistics, storage and travel are included in the budget before any commitment.",
  },
  {
    question: "How much does a study cost?",
    answer:
      "The amount depends on the floor area, the complexity of the site and the mission requested. We issue a study quote before starting, with no commitment to the works.",
  },
  {
    question: "Can you take over a stalled project?",
    answer:
      "Yes, after a diagnosis of the existing work. We do not take over a structure without checking what has been done, with which materials and under what conditions. It is the only way to price the next stage seriously.",
  },
  {
    question: "What are your response times?",
    answer:
      "Two working days for an initial reply to a written request. For a site emergency, call us directly on +236 76 34 92 50.",
  },
];

export const photoCredits = [
  {
    title: "Workers on a construction site, Douala",
    author: "Minette Lontsie",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_Workers_in_Douala.jpg",
    used: "Home page, firm section",
  },
  {
    title: "Commercial construction site, Tokai, Cape Town",
    author: "Husskeyy",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_Site_in_Tokai,_Cape_Town.jpg",
    used: "Home page, main visual; social preview",
  },
  {
    title: "Preparing concrete, Embu, Kenya",
    author: "Mugambi Muriuki",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Construction_site_workers_loading_water,_sand,_ballast_and_cememt_into_a_concrete_mixer_in_Embu,_Kenya_3.jpg",
    used: "Construction expertise",
  },
  {
    title: "House under construction, Ghana",
    author: "Kwameghana",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Modern_house_under_construction.jpg",
    used: "Residential typology, journal and credits",
  },
  {
    title: "Office building and car park, Naguru, Kampala",
    author: "Micheal Kaluba",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Apartment_and_office_building_with_car_park_in_Naguru,_2022.jpg",
    used: "Commercial typology and project management expertise",
  },
  {
    title: "Bangui City Hall",
    author: "Unknown author",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_ville_de_Bangui.jpg",
    used: "The firm, Contact and home pages, local visual",
  },
  {
    title: "Construction detail, Waterfront, Cape Town",
    author: "Dietmar Rabich",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Waterfront,_Baustelle_--_2024_--_3854.jpg",
    used: "Design expertise, renovation typology, legal notice",
  },
];
