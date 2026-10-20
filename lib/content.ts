import {
  commitments as commitmentsFr,
  expertises as expertisesFr,
  faq as faqFr,
  method as methodFr,
  nav as navFr,
  notes as notesFr,
  photoCredits as photoCreditsFr,
  site as siteFr,
  typologies as typologiesFr,
} from "./site";
import {
  commitments as commitmentsEn,
  expertises as expertisesEn,
  faq as faqEn,
  method as methodEn,
  nav as navEn,
  notes as notesEn,
  photoCredits as photoCreditsEn,
  site as siteEn,
  typologies as typologiesEn,
} from "./site.en";
import { caseStudies as caseStudiesFr } from "./case-studies";
import { caseStudies as caseStudiesEn } from "./case-studies.en";
import type { Locale } from "./i18n";

export function getContent(locale: Locale) {
  return locale === "en"
    ? {
        site: siteEn,
        nav: navEn,
        expertises: expertisesEn,
        commitments: commitmentsEn,
        method: methodEn,
        typologies: typologiesEn,
        notes: notesEn,
        faq: faqEn,
        photoCredits: photoCreditsEn,
        caseStudies: caseStudiesEn,
      }
    : {
        site: siteFr,
        nav: navFr,
        expertises: expertisesFr,
        commitments: commitmentsFr,
        method: methodFr,
        typologies: typologiesFr,
        notes: notesFr,
        faq: faqFr,
        photoCredits: photoCreditsFr,
        caseStudies: caseStudiesFr,
      };
}

export type Content = ReturnType<typeof getContent>;
