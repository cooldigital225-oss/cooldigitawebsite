import { PackageItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'offre-essentielle',
    name: 'OFFRE ESSENTIELLE',
    tagline: 'Créer les fondations de votre présence et sécuriser vos premiers équipements.',
    badge: 'Départ rapide',
    targetAudience: 'Commerces de proximité, artisans, TPE, indépendants',
    priceDisplay: 'À partir de 150 000 FCFA',
    features: [
      'Site internet vitrine responsive (Jusqu’à 3 pages)',
      'Intégration des boutons WhatsApp & Appel direct',
      'Fiche Google My Business configurée',
      'Support & Dépannage informatique (jusqu’à 2 postes)',
      'Accès assistance WhatsApp rapide'
    ],
    isPopular: false,
    ctaText: 'Choisir l’Offre Essentielle'
  },
  {
    id: 'offre-professionnelle',
    name: 'OFFRE PROFESSIONNELLE',
    tagline: 'Digitaliser votre gestion et dynamiser votre acquisition de prospects.',
    badge: 'Le Choix Recommandé',
    targetAudience: 'PME en expansion, écoles, associations structurées',
    priceDisplay: 'À partir de 450 000 FCFA',
    features: [
      'Site web complet avec présentation des services',
      'Module ou Logiciel de gestion sur-mesure (Stock/Factures)',
      'Contrat de Maintenance IT & Sécurité (jusqu’à 10 postes)',
      'Community Management (2 publications / semaine)',
      '1 Session de formation pratique pour vos équipes',
      'Support prioritaire dédié sur WhatsApp'
    ],
    isPopular: true,
    ctaText: 'Choisir l’Offre Professionnelle'
  },
  {
    id: 'offre-premium',
    name: 'OFFRE PREMIUM (Accompagnement 360°)',
    tagline: 'Externalisation totale de votre pôle informatique et communication.',
    badge: 'Sérénité Totale',
    targetAudience: 'PME établies, groupes scolaires, entreprises à fort volume',
    priceDisplay: 'À partir de 950 000 FCFA',
    features: [
      'Écosystème web complet (Site sur-mesure + Logiciel métier)',
      'Maintenance informatique illimitée & Gestion complète du parc',
      'Community Management complet (4 publis/semaine + visuels premium)',
      'Formations continues du personnel',
      'Interlocuteur technique dédié & Support prioritaire 7j/7'
    ],
    isPopular: false,
    ctaText: 'Demander un accompagnement 360°'
  }
];
