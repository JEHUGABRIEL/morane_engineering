import type { Locale } from "@/lib/i18n";

const labels = {
  fr: {
    title: "COUPE DE PRINCIPE",
    scale: "SANS ÉCHELLE",
    width: "7,20 m",
    height: "3,20 m",
    roof: "couverture",
    ring: "chaînage",
    footing: "semelle filante",
    fill: "remblai compacté",
    ground: "terrain naturel",
    caption: "Coupe de principe — sans échelle",
  },
  en: {
    title: "TYPICAL SECTION",
    scale: "NOT TO SCALE",
    width: "7.20 m",
    height: "3.20 m",
    roof: "roof cover",
    ring: "ring beam",
    footing: "strip footing",
    fill: "compacted backfill",
    ground: "natural ground",
    caption: "Typical section — not to scale",
  },
} as const;

export function SectionDrawing({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <figure className="section-drawing" aria-hidden="true">
      <svg viewBox="0 0 720 430" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="drawing-line">
          <path d="M70 340H650" />
          <path d="M70 340l-12 12M90 340l-12 12M110 340l-12 12M130 340l-12 12M150 340l-12 12M170 340l-12 12M190 340l-12 12M210 340l-12 12M230 340l-12 12M250 340l-12 12M270 340l-12 12M290 340l-12 12M310 340l-12 12M330 340l-12 12M350 340l-12 12M370 340l-12 12M390 340l-12 12M410 340l-12 12M430 340l-12 12M450 340l-12 12M470 340l-12 12M490 340l-12 12M510 340l-12 12M530 340l-12 12M550 340l-12 12M570 340l-12 12M590 340l-12 12M610 340l-12 12M630 340l-12 12M650 340l-12 12" />
          <path d="M142 340v-56h34v56M544 340v-56h34v56" />
          <path d="M128 284h62v-200h-48v200M530 284h62v-200h-48v200" />
          <path d="M118 84h504M118 84l-28 28M118 84l28 28M622 84l-28 28M622 84l28 28" />
          <path d="M142 284h436M142 204h436M142 124h436" />
          <path d="M158 84v200M574 84v200" />
          <path d="M96 340h548" />
          <path d="M360 340v-56" />
          <path d="M346 284h28" />
          <rect x="142" y="300" width="34" height="16" />
          <rect x="544" y="300" width="34" height="16" />
        </g>

        <g className="drawing-accent">
          <path d="M160 365H574" />
          <path d="M160 358v14M574 358v14" />
          <path d="M622 84v200" />
          <path d="M615 84h14M615 284h14" />
          <rect x="300" y="52" width="8" height="8" />
        </g>

        <g className="drawing-label">
          <text x="70" y="34">{t.title}</text>
          <text x="70" y="50" className="drawing-label--muted">
            {t.scale}
          </text>
          <text x="362" y="385">{t.width}</text>
          <text x="640" y="188" transform="rotate(90 640 188)">
            {t.height}
          </text>
          <text x="190" y="72">{t.roof}</text>
          <path d="M188 76l-24 8" />
          <text x="196" y="196">{t.ring}</text>
          <path d="M194 200l-30 0" />
          <text x="196" y="332">{t.footing}</text>
          <path d="M194 328l-18 -8" />
          <text x="482" y="332">{t.fill}</text>
          <path d="M480 328l-20 -4" />
          <text x="618" y="360">{t.ground}</text>
        </g>
      </svg>
      <figcaption>{t.caption}</figcaption>
    </figure>
  );
}
