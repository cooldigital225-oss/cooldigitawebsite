import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'creation-site-internet',
    slug: 'creation-site-internet',
    title: 'Création de Sites Internet',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'Globe',
    shortDesc: 'Des sites web sur-mesure, ultra-rapides et optimisés sur mobile pour transformer vos visiteurs en prospects qualifiés.',
    fullDesc: 'Votre site internet ne doit pas être une simple carte de visite. Nous concevons des sites professionnels qui rassurent vos clients, mettent en valeur votre savoir-faire et déclenchent des appels et messages WhatsApp directs.',
    benefits: [
      'Crédibilité immédiate auprès des clients B2B et institutionnels',
      'Contact direct en 1 clic via WhatsApp et téléphone',
      'Chargement instantané même avec une connexion mobile limitée',
      'Référencement naturel (SEO) optimisé pour être trouvé sur Google'
    ],
    includes: [
      'Design sur-mesure adapté à votre charte',
      'Intégration des boutons WhatsApp & Appel direct',
      'Optimisation complète smartphones et tablettes',
      'Référencement SEO technique de base',
      'Certificat de sécurité HTTPS & Conformité',
      'Session de formation à la mise à jour des contenus'
    ],
    ctaText: 'Demander un devis site web'
  },
  {
    id: 'logiciels-de-gestion',
    slug: 'logiciels-de-gestion',
    title: 'Logiciels de Gestion Sur-Mesure',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'LayoutGrid',
    shortDesc: 'Remplacez vos fichiers Excel lents et complexes par une plateforme métier adaptée à vos processus.',
    fullDesc: 'Fini les erreurs de saisie, les pertes de factures et les heures perdues sur Excel. Nous développons des applications de gestion simples, intuitives et sécurisées pour piloter votre activité en temps réel.',
    benefits: [
      'Suppression des erreurs humaines et des doubles-saisies',
      'Automatisation des tâches administratives chronophages',
      'Accès sécurisé multi-utilisateurs depuis mobile et PC',
      'Tableaux de bord clairs pour piloter vos stocks et votre trésorerie'
    ],
    includes: [
      'Analyse préalable de vos processus de gestion',
      'Développement des modules sur-mesure (Stock, Factures, Élèves/Clients)',
      'Interface épurée et facile à prendre en main',
      'Export des données en PDF et Excel',
      'Formation complète de vos collaborateurs'
    ],
    ctaText: 'Demander une démonstration'
  },
  {
    id: 'maintenance-depannage',
    slug: 'maintenance-depannage',
    title: 'Maintenance & Dépannage IT',
    pole: 'accompagnement-technique',
    poleTitle: 'Accompagnement Technique',
    iconName: 'Wrench',
    shortDesc: 'Interventions d’urgence et contrats de maintenance pour garantir un parc informatique toujours fonctionnel.',
    fullDesc: 'Une panne informatique paralyse toute votre entreprise. Nous intervenons en urgence pour débloquer vos ordinateurs et réseaux, et nous assurons un entretien préventif régulier pour éviter les futures interruptions.',
    benefits: [
      'Continuité de service garantie pour vos équipes',
      'Assistance prioritaire sous 15 à 30 minutes',
      'Prolongation de la durée de vie de vos ordinateurs',
      'Protection contre les virus et sauvegardes sécurisées'
    ],
    includes: [
      'Dépannage d’urgence (sur site ou à distance)',
      'Nettoyage, révision et optimisation matérielle',
      'Installation de protections antivirus performantes',
      'Sauvegarde automatique de vos fichiers critiques',
      'Audit initial gratuit de votre parc informatique'
    ],
    ctaText: 'Signaler une panne ou demander un audit'
  },
  {
    id: 'community-management',
    slug: 'community-management',
    title: 'Community Management',
    pole: 'competences-visibilite',
    poleTitle: 'Développement des Compétences & Visibilité',
    iconName: 'Share2',
    shortDesc: 'Développez votre notoriété locale et animez vos réseaux sociaux avec des visuels et textes professionnels.',
    fullDesc: 'Ne laissez plus vos pages Facebook, Instagram ou LinkedIn désertes. Nous créons du contenu régulier et engageant pour valoriser votre image de marque, interagir avec vos prospects et générer du flux client.',
    benefits: [
      'Image de marque valorisée et moderne',
      'Attraction régulière de nouveaux prospects locaux',
      'Gain de temps total pour le dirigeant',
      'Réponse rapide aux messages de vos clients'
    ],
    includes: [
      'Elaboration du calendrier éditorial mensuel',
      'Création des visuels et rédaction des textes',
      'Publications régulières sur vos réseaux sociaux',
      'Modération et réponses aux messages/commentaires',
      'Rapport mensuel de performance et de croissance'
    ],
    ctaText: 'Booster mes réseaux sociaux'
  },
  {
    id: 'formations-informatiques',
    slug: 'formations-informatiques',
    title: 'Formations Informatiques',
    pole: 'competences-visibilite',
    poleTitle: 'Développement des Compétences & Visibilité',
    iconName: 'GraduationCap',
    shortDesc: 'Montez en compétences sur la bureautique, la sécurité et l’Intelligence Artificielle (IA) pour booster vos équipes.',
    fullDesc: 'Des formations 100% pratiques et adaptées au niveau de vos collaborateurs : bureautique (Excel, Word), formation en Intelligence Artificielle (IA pour la productivité), sécurité informatique et outils métiers. Augmentez la productivité globale et réduisez les erreurs de manipulation.',
    benefits: [
      'Équipes plus rapides, autonomes et initiées aux outils d’IA',
      'Formation pratique à l’Intelligence Artificielle (IA)',
      'Réduction drastique des erreurs d’utilisation sur Excel & bureautique',
      'Prise en main accélérée des logiciels métiers et gain de productivité'
    ],
    includes: [
      'Formation en Intelligence Artificielle (IA) & outils de productivité',
      'Bureautique essentielle et avancée (Excel, Word, PowerPoint)',
      'Programme personnalisé selon vos objectifs et cas réels',
      'Sessions pratiques guidées par un formateur expert',
      'Supports de cours remis à chaque apprenant',
      'Attestation de suivi de formation'
    ],
    ctaText: 'Demander un programme de formation'
  },
  {
    id: 'applications-web',
    slug: 'applications-web',
    title: 'Applications Web',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'AppWindow',
    shortDesc: 'Développement d’applications web modernes, interactives et sécurisées pour digitaliser vos processus métiers.',
    fullDesc: 'Nous concevons des applications web sur-mesure (portails clients, espaces membres, plateformes SaaS, outils collaboratifs) accessibles sur tout support pour fluidifier vos opérations et offrir une expérience utilisateur exceptionnelle.',
    benefits: [
      'Accessibilité universelle 24/7 sur navigateur sans installation',
      'Interface intuitive, réactive et optimisée pour tous les écrans',
      'Sécurité renforcée des données et architecture évolutive',
      'Intégration d’APIs tierces et de paiements en ligne / mobile money'
    ],
    includes: [
      'Conception UX/UI moderne et ergonomique',
      'Développement frontend et backend sécurisé',
      'Gestion des utilisateurs, rôles et permissions',
      'Intégration d’APIs et bases de données',
      'Tests de performance, sécurité et compatibilité',
      'Accompagnement au déploiement et formation'
    ],
    ctaText: 'Demander un devis application web'
  }
];
