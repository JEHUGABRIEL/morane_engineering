import type { CaseStudy } from "./case-studies";

export const caseStudies: CaseStudy[] = [
  {
    slug: "maisons-residences",
    number: "01",
    category: "Residential",
    title: "A house around a courtyard",
    subtitle:
      "On a narrow plot, gaining privacy and cool air without increasing the budget.",
    summary:
      "Four bedrooms, two bathrooms, a through living room and a central courtyard: a family house designed for Bangui’s climate and a plot just 15 metres wide.",
    image: {
      src: "/images/maison-construction.jpg",
      alt: "House under construction with its roof structure and roof, under a clear sky.",
    },
    gallery: [
      {
        src: "/images/hero-chantier.jpg",
        alt: "Workers on a construction site.",
        caption:
          "Site supervision happens on site, with the construction documents at hand.",
      },
      {
        src: "/images/detail-chantier.jpg",
        alt: "Detail of an opening on a construction site, raw wall and frame.",
        caption:
          "Openings are sized before the concrete is poured, not adjusted afterwards.",
      },
    ],
    facts: [
      { label: "Floor area", value: "180 m²" },
      { label: "Plot", value: "600 m²" },
      { label: "Duration", value: "11 months" },
      { label: "Mission", value: "Design & build" },
    ],
    context: [
      "The plot is long and narrow, with a busy street on the west and close neighbours on the east. The family programme is substantial: a couple, three children and an elderly parent. The first answer could not be a bigger house, but a better-organised one.",
      "The ground slopes slightly and receives a lot of water in the rainy season. Orientation, drainage and ventilation were addressed before finishes. The budget had to stay under control: construction choices favour materials available locally and the team’s own skills.",
    ],
    brief: [
      "Four bedrooms, including a master suite",
      "Two bathrooms and a guest WC",
      "Through living room opening onto the courtyard",
      "Separate kitchen with pantry and service access",
      "A study that can become a bedroom",
      "Guard house and parking for two vehicles",
      "Planted courtyard, screened from neighbours",
    ],
    constraints: [
      {
        title: "Narrow plot",
        text: "Only fifteen metres wide. Circulation had to be compact and rooms had to open onto internal views, not the neighbours.",
      },
      {
        title: "Soil and rain",
        text: "Lateritic soil with an area of old fill. Foundations were sized after trial pits, with perimeter drainage and a slightly raised platform.",
      },
      {
        title: "Fixed budget",
        text: "The programme was prioritised from the sketch: structure and waterproofing first, finishes in stages. No extension was left to improvisation.",
      },
    ],
    approach: [
      {
        title: "An L-shaped house around the courtyard",
        text: "The central courtyard brings light and air to the living spaces. It also screens the bedrooms from view and creates an outdoor room usable all year.",
      },
      {
        title: "Cross ventilation",
        text: "Openings are aligned with the prevailing winds. Roof overhangs and shading reduce direct sun on the west façades.",
      },
      {
        title: "Simple structure, local materials",
        text: "Blockwork, concrete ring beams and timber roof structure. Spans are kept short to avoid costly beams and simplify construction.",
      },
      {
        title: "Grouped services",
        text: "Kitchen, bathrooms and stores are grouped to shorten pipe runs and simplify maintenance. A water tank and solar provision are included.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Set-up and earthworks",
        items: [
          "Site fence, access and storage area",
          "Strip, platform and temporary drainage",
          "Trial pits and soil verification",
        ],
      },
      {
        phase: "02",
        title: "Foundations and structure",
        items: [
          "Strip footings and ground beams",
          "Wall construction and ring beams",
          "Columns and lintels for large openings",
        ],
      },
      {
        phase: "03",
        title: "Envelope",
        items: [
          "Roof structure, covering and flashings",
          "External joinery",
          "External render and façade protection",
        ],
      },
      {
        phase: "04",
        title: "Services",
        items: [
          "Plumbing, drainage and water tank",
          "Electrical installation, board and earthing",
          "Provision for solar equipment",
        ],
      },
      {
        phase: "05",
        title: "Finishes and handover",
        items: [
          "Floors, internal render and paint",
          "Kitchen, sanitary fittings and internal joinery",
          "Courtyard, boundary wall and gate",
        ],
      },
    ],
    outcomes: [
      "Living spaces stay cool late in the day thanks to the courtyard and cross ventilation.",
      "Bedrooms are not directly exposed to the street or neighbours.",
      "Construction cost stayed within the approved budget, with finishes completed in stages.",
      "A courtyard extension can be added without altering the existing structure.",
    ],
    takeaway:
      "On a constrained plot, quality of use comes from organisation and light before it comes from square metres.",
  },
  {
    slug: "bureaux-commerces",
    number: "02",
    category: "Commercial",
    title: "A building that separates its flows",
    subtitle:
      "Retail on the ground floor, offices above: each use has its own entrance, hours and operating budget.",
    summary:
      "A small 640 m² mixed-use building on a corner plot. The project organises access, shades the façades and prepares the floors for future subdivision.",
    image: {
      src: "/images/immeuble-bureaux.jpg",
      alt: "Modern office building with glazed façades and an outdoor car park.",
    },
    gallery: [
      {
        src: "/images/chantier-beton.jpg",
        alt: "Workers preparing concrete on a construction site.",
        caption: "Concrete control determines the durability of the structure.",
      },
      {
        src: "/images/detail-chantier.jpg",
        alt: "Detail of an opening on a construction site.",
        caption: "Façades are prepared to receive building services.",
      },
    ],
    facts: [
      { label: "Floor area", value: "640 m²" },
      { label: "Levels", value: "3 storeys" },
      { label: "Duration", value: "14 months" },
      { label: "Mission", value: "Studies & management" },
    ],
    context: [
      "The plot sits on a busy corner, with good visibility for retail but little depth for parking. The client wanted to let the ground floor and occupy the upper floors, while keeping the option to subdivide the office floors.",
      "Operating constraints matter as much as construction constraints: deliveries, customers, staff and vehicles must circulate without getting in each other’s way. Power cuts also require reserves and an accessible technical space.",
    ],
    brief: [
      "Ground-floor retail, divisible into two units",
      "Two office floors of about 220 m² each",
      "A clear shared entrance and vertical circulation",
      "External parking and a separate delivery zone",
      "Sanitary cores on each level, with room to extend",
      "Plant room, store and space for a generator",
      "Shaded façades that are easy to maintain",
    ],
    constraints: [
      {
        title: "Corner plot",
        text: "Two visible façades, but two access points to organise. Parking had to remain possible without blocking pedestrian movement.",
      },
      {
        title: "Stacked uses",
        text: "Retail, offices and deliveries do not share the same hours. Entrances and circulation were separated from the sketch.",
      },
      {
        title: "Operating budget",
        text: "Glazed areas were sized with solar shading to limit air-conditioning, without sacrificing daylight.",
      },
    ],
    approach: [
      {
        title: "A regular structural grid",
        text: "The grid allows open floors and future subdivision without major structural work. Columns align with façades and circulation.",
      },
      {
        title: "Two entrances, one service core",
        text: "Retail and offices each have their own access. Bathrooms, stores and risers are grouped centrally to free the façades.",
      },
      {
        title: "Filtered façades",
        text: "Brise-soleil and overhangs protect the glazing from direct sun. Opaque areas are insulated and easy to repaint.",
      },
      {
        title: "Local resilience",
        text: "The project includes a water reserve, a generator room and accessible cable routes for future changes.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Studies and permits",
        items: [
          "Topographic survey and feasibility study",
          "Preliminary design, construction drawings and specification",
          "Permit application and contractor tender",
        ],
      },
      {
        phase: "02",
        title: "Structural works",
        items: [
          "Earthworks and foundations",
          "Reinforced concrete structure over three levels",
          "Blockwork and main staircase",
        ],
      },
      {
        phase: "03",
        title: "Envelope and façades",
        items: [
          "Roof covering and waterproofing",
          "Aluminium joinery and solar shading",
          "External render and balustrades",
        ],
      },
      {
        phase: "04",
        title: "Services",
        items: [
          "Electrical installation, low current and earthing",
          "Plumbing, sanitary fittings and water reserve",
          "Air-conditioning and ventilation",
        ],
      },
      {
        phase: "05",
        title: "Finishes and handover",
        items: [
          "Partitions, floors and paint",
          "Retail unit fit-out",
          "Parking, access and handover",
        ],
      },
    ],
    outcomes: [
      "The two activities have separate entrances and circulation that never crosses.",
      "Office floors can be divided or reconfigured without touching the structure.",
      "Solar shading reduces cooling load and long-term maintenance of the glazing.",
      "The plant room and reserves absorb power cuts without improvisation.",
    ],
    takeaway:
      "A successful mixed-use building is judged by the fluidity of its access as much as by the quality of its floors.",
  },
  {
    slug: "equipements-travaux-publics",
    number: "03",
    category: "Public works",
    title: "A neighbourhood facility above water",
    subtitle:
      "Raise the platform, drain before building and deliver in phases: a facility usable even in the rainy season.",
    summary:
      "A 1,200 m² community hall with annexes on low, poorly drained ground. The project deals with water before the building and plans a phased opening.",
    image: {
      src: "/images/chantier-gros-oeuvre.jpg",
      alt: "Construction site with concrete structures, scaffolding and machinery.",
    },
    gallery: [
      {
        src: "/images/chantier-beton.jpg",
        alt: "Concrete being prepared on a construction site.",
        caption: "Concrete elements are controlled from mix design to curing.",
      },
      {
        src: "/images/hero-chantier.jpg",
        alt: "Workers on a construction site.",
        caption: "Site organisation accounts for access and rainy periods.",
      },
    ],
    facts: [
      { label: "Footprint", value: "1,200 m²" },
      { label: "Duration", value: "9 months" },
      { label: "Mission", value: "Studies & works" },
      { label: "Programme", value: "Hall + annexes" },
    ],
    context: [
      "The site lies in a low area, with a high water table in the rainy season and an access road that deteriorates quickly. The programme includes a covered hall for gatherings, administrative annexes, sanitary facilities and a service area.",
      "The facility must remain usable all year, including during heavy rain. The design could therefore not stop at the building: it had to address the platform, access, drainage and services before the first foundations.",
    ],
    brief: [
      "A flexible covered hall of 600 m²",
      "Annexes for administration and meetings",
      "Accessible sanitary facilities and a water point",
      "A service zone for deliveries",
      "Vehicle access usable in every season",
      "Phased opening without closing the site",
      "Simple maintenance with robust materials",
    ],
    constraints: [
      {
        title: "Low ground",
        text: "The platform had to be raised and drained to keep the ground floor above water. Levels were set from surveys, not assumptions.",
      },
      {
        title: "Seasonal access",
        text: "The access track becomes difficult in the rainy season. Procurement planning and the platform were organised around that constraint.",
      },
      {
        title: "Live site",
        text: "The neighbourhood continues to use the land during works. The site was partitioned and circulation maintained.",
      },
    ],
    approach: [
      {
        title: "Drain before building",
        text: "A perimeter network and central channel carry water to the existing outlet. The platform is raised and compacted in controlled layers.",
      },
      {
        title: "A repetitive structure",
        text: "The hall grid repeats portals and reduces formwork. Annexes follow the same logic to simplify construction.",
      },
      {
        title: "Robust materials",
        text: "Reinforced concrete for load-bearing elements, protected blockwork and a ventilated roof. Finishes are chosen for humidity and intensive use.",
      },
      {
        title: "Phased delivery",
        text: "The hall and annexes are delivered in two stages. Services and access are sized from the start for the final configuration.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Set-up and platform",
        items: [
          "Surveys, setting out and site fence",
          "Strip, compacted fill and level control",
          "Temporary drainage and site access",
        ],
      },
      {
        phase: "02",
        title: "Foundations and structure",
        items: [
          "Footings and ground beams",
          "Hall portals and annex columns",
          "Slabs and reinforced concrete elements",
        ],
      },
      {
        phase: "03",
        title: "Envelope",
        items: [
          "Roof structure and ventilated covering",
          "Blockwork, render and protection",
          "Joinery and closures",
        ],
      },
      {
        phase: "04",
        title: "Services and external works",
        items: [
          "Water, drainage and sanitary facilities",
          "Electrical installation and external lighting",
          "Access road and channels",
        ],
      },
      {
        phase: "05",
        title: "Handover",
        items: [
          "Testing services and access",
          "Cleaning and snag list",
          "As-built documentation",
        ],
      },
    ],
    outcomes: [
      "The ground floor stays above water and the site drains correctly after rain.",
      "The hall can operate independently of the annexes during the second phase.",
      "Access and the service area remain usable in the wet season.",
      "Materials and services can be maintained locally.",
    ],
    takeaway:
      "For a public facility, drainage and access are part of the building. Fixing them afterwards costs more and rarely solves the problem.",
  },
  {
    slug: "renovation-rehabilitation",
    number: "04",
    category: "Existing buildings",
    title: "Rehabilitating without erasing",
    subtitle:
      "Diagnose before demolishing, repair what carries and replace what threatens: a building returned to service without losing its character.",
    summary:
      "A 320 m² existing building, occupied in phases. The project combines structural repair, waterproofing, new services and preservation of the façades.",
    image: {
      src: "/images/detail-chantier.jpg",
      alt: "Detail of a wall under construction with an opening and raw materials.",
    },
    gallery: [
      {
        src: "/images/maison-construction.jpg",
        alt: "House under construction with its roof structure and roof.",
        caption:
          "Rehabilitation keeps the sound structure and replaces worn elements.",
      },
      {
        src: "/images/hero-chantier.jpg",
        alt: "Workers on a construction site.",
        caption:
          "Work is planned by zones so the building can remain in use.",
      },
    ],
    facts: [
      { label: "Floor area", value: "320 m²" },
      { label: "Duration", value: "6 months" },
      { label: "Mission", value: "Diagnosis & works" },
      { label: "Constraint", value: "Occupied site" },
    ],
    context: [
      "The building had been through several rounds of work with no technical records. Some cracks were stable, others were still moving. Electrical and plumbing services no longer matched the use, and water ingress had damaged render and joinery.",
      "The client did not want to demolish: the building is well located, its structure is broadly sound and its architectural character matters. The rehabilitation therefore had to separate maintenance, structural repair and safety upgrades.",
    ],
    brief: [
      "Structural diagnosis and full survey of the existing building",
      "Repair of active cracks and damp areas",
      "Roof and detail waterproofing",
      "New electrical and sanitary services",
      "Light reconfiguration of interior spaces",
      "Preservation of façades and characteristic elements",
      "Work by zones, without closing the whole building",
    ],
    constraints: [
      {
        title: "Unknown history",
        text: "Previous works were undocumented. Test openings and surveys were carried out before pricing the repairs.",
      },
      {
        title: "Damp",
        text: "Water came through the roof and poorly treated details. Repairing waterproofing before finishes was essential to durability.",
      },
      {
        title: "Occupied site",
        text: "Part of the building remained in use. Phasing, dust and noise were built into the programme and site meetings.",
      },
    ],
    approach: [
      {
        title: "Diagnose before pricing",
        text: "Localised openings, crack surveys, support checks and leak tracing. The quote separates certain works from conditional repairs.",
      },
      {
        title: "Repair what carries",
        text: "Sound structural elements are retained. Cracked areas are repaired with techniques suited to the existing material, without hiding the cause.",
      },
      {
        title: "Deal with water first",
        text: "Roof, gutters, thresholds and drainage are repaired before render and paint. A finish applied over an active leak will not last.",
      },
      {
        title: "Modernise without erasing",
        text: "Services run in discreet ducts. Joinery is replaced to match the original where possible, with better performance.",
      },
    ],
    works: [
      {
        phase: "01",
        title: "Diagnosis and preparation",
        items: [
          "Survey, test openings and checks",
          "Phasing plan and protection of occupied areas",
          "Site set-up and rubble removal",
        ],
      },
      {
        phase: "02",
        title: "Structure and envelope",
        items: [
          "Crack and support repairs",
          "Roof structure and covering replacement",
          "Treatment of details and thresholds",
        ],
      },
      {
        phase: "03",
        title: "Services",
        items: [
          "Removal of old services",
          "Electrical installation, board and earthing",
          "Plumbing, sanitary fittings and drainage",
        ],
      },
      {
        phase: "04",
        title: "Interiors",
        items: [
          "Partitions and light reconfiguration",
          "Render, floors and paint",
          "Joinery and finishes",
        ],
      },
      {
        phase: "05",
        title: "Handover",
        items: [
          "Testing and snag list",
          "Cleaning and return to service",
          "As-built documentation",
        ],
      },
    ],
    outcomes: [
      "Structural defects are stabilised and documented.",
      "The roof and details no longer let water in.",
      "Services are sized for current use and comply with safety rules.",
      "Façades and characteristic elements have been preserved.",
    ],
    takeaway:
      "Rehabilitation starts by understanding what is sound. Demolishing without a diagnosis is expensive and loses what the building did best.",
  },
];
