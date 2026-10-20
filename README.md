# Morane Engineering

Site vitrine de **Morane Engineering**, entreprise de construction, de conception et de gestion de projet à Bangui (République centrafricaine).

Construit avec Next.js 16 (App Router), React 19 et TypeScript. Le design reprend une charte bleu nuit, menthe et turquoise : grands titres sans-serif, boutons biseautés, photographies de chantier en pleine largeur et bandes de couleur. Aucun jeu d’icônes génériques.

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Vérifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Variables d’environnement

Créer un fichier `.env.local` à partir de `.env.example` :

```bash
NEXT_PUBLIC_SITE_URL=https://morane-engineering.com
```

Cette URL sert de base aux métadonnées canonicales, au sitemap et aux aperçus sociaux. Remplacer la valeur par le domaine réel avant mise en ligne.

## Structure

- `app/` — routes françaises (accueil, expertises, réalisations, cabinet, carnet, contact, pages légales).
- `app/en/` — routes anglaises, mêmes pages sous le préfixe `/en`.
- `app/loading.tsx` — écran de chargement affiché pendant les transitions de route lentes.
- `components/PageLoader.tsx` — écran de chargement de première visite (une fois par onglet, mémorisé en `sessionStorage`), avec fondu de sortie.
- `components/pages/` — contenu partagé par les routes FR et EN, paramétré par la langue, dont les études de cas.
- `components/` — en-tête, menu mobile, pied de page, formulaire, icônes sociales, cartes empilées, plan technique.
- `lib/site.ts` / `lib/site.en.ts` — coordonnées, textes des expertises, méthodologie, typologies, notes et crédits photo dans chaque langue.
- `lib/case-studies.ts` / `lib/case-studies.en.ts` — études de cas détaillées (contexte, brief, contraintes, parti pris, phases de chantier, résultats).
- `lib/i18n.tsx` — dictionnaires d’interface, détection de la langue et construction des liens localisés.
- `lib/content.ts` — sélection du contenu selon la langue.
- `public/images/` — photographies d’illustration.
- `assets/logo-source.jpg` — logo original fourni par le client.

## Langues

Le français est servi à la racine (`/`, `/expertises`…) et l’anglais sous `/en` (`/en`, `/en/expertises`…). Le sélecteur FR/EN de l’en-tête, du menu mobile et du pied de page conserve la page courante. Les métadonnées, liens canoniques et le sitemap déclarent les deux versions avec leurs alternatives `hreflang`.

Pour ajouter ou modifier un texte : l’interface est dans `lib/i18n.tsx`, les contenus éditoriaux dans `lib/site.ts` (FR) et `lib/site.en.ts` (EN). Les textes propres à une page sont regroupés en haut du composant correspondant dans `components/pages/`.

## Navigation et animations

- Menu mobile plein écran : fermeture par Échap, piège de focus, blocage du défilement, liens localisés et coordonnées directes.
- Page Réalisations : les cartes se superposent au défilement sur desktop **et sur mobile**. Les cartes mobiles sont compactées et renvoient vers l’étude de cas complète.
- Accueil, section « Ce que nous construisons » : les trois cartes se superposent au défilement sous 980 px, et restent en grille sur desktop.
- L’empilement est désactivé avec `prefers-reduced-motion`.
- Écran de chargement et animations d’apparition respectent `prefers-reduced-motion`.

## Remplacer les photographies

Les images actuelles sont des photographies d’illustration sous licence Creative Commons, créditées sur `/credits`. Pour utiliser les photos des chantiers de Morane Engineering :

1. Déposer les fichiers dans `public/images/` avec les mêmes noms, ou mettre à jour les chemins dans `lib/site.ts`, `lib/site.en.ts` et les composants de `components/pages/`.
2. Mettre à jour les textes alternatifs (`alt`) dans les deux langues pour décrire précisément chaque image.
3. Retirer les crédits correspondants de `photoCredits` dans `lib/site.ts` et `lib/site.en.ts`.
4. Vérifier les pages `/credits` et `/en/credits`.

Les visuels de la page Réalisations sont explicitement présentés comme des illustrations de typologies, pas comme des chantiers livrés.

## Études de cas

Chaque typologie possède une étude de cas détaillée :

- `/realisations/maisons-residences`
- `/realisations/bureaux-commerces`
- `/realisations/equipements-travaux-publics`
- `/realisations/renovation-rehabilitation`

Les versions anglaises sont sous `/en/realisations/...`. Ce sont des cas types représentatifs, clairement identifiés comme tels : surfaces, durées et dispositions sont des ordres de grandeur destinés à expliquer la méthode, pas des références livrées. Pour publier de vraies références, remplacer les entrées de `lib/case-studies.ts` et `lib/case-studies.en.ts`, puis vérifier les crédits photo.

## Formulaire de contact

Le formulaire n’envoie pas de données à un serveur : il valide les champs puis prépare un e-mail dans le logiciel de messagerie du visiteur, avec une solution de repli pour copier l’adresse. Les libellés, messages d’erreur et le corps de l’e-mail suivent la langue de la page. Pour recevoir les demandes côté serveur, remplacer cette logique par un service d’envoi d’e-mails ou une route API, puis mettre à jour la mention de confidentialité dans `/mentions-legales` et `/en/mentions-legales`.

## Crédits

- Typographie : DM Sans via Google Fonts (next/font).
- Photographies : Wikimedia Commons, licences CC BY-SA et CC0 — voir `/credits`.
- Logo : Morane Engineering.
