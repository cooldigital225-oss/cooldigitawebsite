import { PackageItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'offre-essentielle',
    name: 'OFFRE ESSENTIELLE',
    tagline: 'Créer les fondations de votre présence digitale et sécuriser vos premiers postes de travail.',
    badge: 'Départ rapide',
    targetAudience: 'Commerces de proximité, artisans, TPE, indépendants',
    priceDisplay: 'À partir de 150 000 FCFA',
    pricing: {
      initialCreation: 'À partir de 150 000 FCFA (Paiement unique)',
      monthlySubscription: 'À partir de 30 000 FCFA / mois (Maintenance & Support)'
    },
    creationPhase: [
      "Site internet vitrine responsive (jusqu'à 5 pages)",
      'Intégration des boutons WhatsApp & Appel direct',
      'Configuration de la fiche Google My Business'
    ],
    subscriptionPhase: [
      "Support & Dépannage informatique (jusqu'à 2 postes)",
      'Accès assistance WhatsApp rapide'
    ],
    features: [
      "Site internet vitrine responsive (jusqu'à 5 pages)",
      'Intégration des boutons WhatsApp & Appel direct',
      'Configuration de la fiche Google My Business',
      "Support & Dépannage informatique (jusqu'à 2 postes)",
      'Accès assistance WhatsApp rapide'
    ],
    isPopular: false,
    ctaText: 'Choisir l’Offre Essentielle'
  },
  {
    id: 'offre-professionnelle',
    name: 'OFFRE PROFESSIONNELLE',
    tagline: 'Digitaliser votre gestion opérationnelle et dynamiser l’acquisition de nouveaux clients.',
    badge: 'Le Choix Recommandé',
    targetAudience: 'PME en expansion, écoles, cliniques, associations structurées',
    priceDisplay: 'À partir de 450 000 FCFA',
    pricing: {
      initialCreation: 'À partir de 450 000 FCFA (Paiement unique)',
      monthlySubscription: 'À partir de 75 000 FCFA / mois (Maintenance & Communication)'
    },
    creationPhase: [
      'Site web complet avec présentation des services',
      'Développement du module/logiciel de gestion sur-mesure (Stock/Factures)',
      'Session de formation pratique pour vos équipes'
    ],
    subscriptionPhase: [
      "Contrat de Maintenance IT & Sécurité (jusqu'à 10 postes)",
      'Community Management (2 publications / semaine)',
      'Support prioritaire dédié sur WhatsApp'
    ],
    features: [
      'Site web complet avec présentation des services',
      'Développement du module/logiciel de gestion sur-mesure (Stock/Factures)',
      'Session de formation pratique pour vos équipes',
      "Contrat de Maintenance IT & Sécurité (jusqu'à 10 postes)",
      'Community Management (2 publications / semaine)',
      'Support prioritaire dédié sur WhatsApp'
    ],
    isPopular: true,
    ctaText: 'Choisir l’Offre Professionnelle'
  },
  {
    id: 'offre-premium',
    name: 'OFFRE PREMIUM',
    tagline: 'Externalisation complète et sereine de l’ensemble de votre pôle informatique et communication.',
    badge: 'Accompagnement 360°',
    targetAudience: 'PME établies, structures scolaires, cliniques et grandes entreprises',
    priceDisplay: 'À partir de 950 000 FCFA',
    pricing: {
      initialCreation: 'À partir de 950 000 FCFA (Paiement unique)',
      monthlySubscription: 'À partir de 150 000 FCFA / mois (Accompagnement 360°)'
    },
    creationPhase: [
      'Écosystème web complet (Site sur-mesure + Logiciel métier)',
      'Configuration complète du parc informatique initial'
    ],
    subscriptionPhase: [
      'Maintenance informatique illimitée & Gestion du parc',
      'Community Management complet (4 publications/semaine + visuels premium)',
      'Formations continues du personnel',
      'Interlocuteur technique dédié & Support prioritaire 7j/7'
    ],
    features: [
      'Écosystème web complet (Site sur-mesure + Logiciel métier)',
      'Configuration complète du parc informatique initial',
      'Maintenance informatique illimitée & Gestion du parc',
      'Community Management complet (4 publications/semaine + visuels premium)',
      'Formations continues du personnel',
      'Interlocuteur technique dédié & Support prioritaire 7j/7'
    ],
    isPopular: false,
    ctaText: 'Demander un accompagnement 360°'
  }
];

