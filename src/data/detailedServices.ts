import { DetailedService } from '../types';

export const DETAILED_SERVICES_DATA: Record<string, DetailedService> = {
  'creation-site-internet': {
    id: 'creation-site-internet',
    slug: 'creation-site-internet',
    title: 'Création de Sites Internet Professionnels',
    tagline: 'Transformez vos visiteurs en clients fidèles avec un site web taillé pour la conversion.',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'Globe',
    accentColor: 'emerald',
    heroBadge: 'Rendement & Visibilité Web',
    heroHeadline: 'Un site web moderne qui inspire confiance et génère des appels & messages WhatsApp immédiats.',
    heroSubheadline: 'Arrêtez d’avoir une simple carte de visite en ligne invisible sur Google. Nous concevons des sites internet vitrines et e-commerce ultra-rapides, adaptés aux smartphones et pensés pour déclencher le premier contact.',

    // 1. Problème client
    clientProblem: {
      title: 'Pourquoi votre site actuel ne vous rapporte aucun client ?',
      subtitle: 'La majorité des entreprises possèdent un site internet qui ne produit aucun résultat concret pour leur activité.',
      points: [
        {
          title: 'Site lent & illisible sur smartphone',
          description: 'Plus de 70% de vos clients naviguent sur téléphone. Si votre site prend plus de 3 secondes à charger ou s’affiche mal, vos visiteurs repartent aussitôt chez vos concurrents.'
        },
        {
          title: 'Absence de boutons d’action directs',
          description: 'Pas de lien WhatsApp instantané, formulaire complexe de 10 champs, numéro masqué : vos prospects abandonnent avant de vous avoir contacté.'
        },
        {
          title: 'Design daté qui entache votre crédibilité',
          description: 'Un site au design obsolète renvoie l’image d’une entreprise non professionnelle ou à l’arrêt, faisant fuir les clients B2B exigeants.'
        },
        {
          title: 'Inexistant sur Google & Prestataire injoignable',
          description: 'Votre agence précédente a livré un site sans référencement naturel (SEO) et ne répond plus à vos demandes de mise à jour.'
        }
      ],
      consequence: 'Résultat : Des milliers de visiteurs perdus chaque mois au profit de vos concurrents plus réactifs.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Des sites vitrines & e-commerce taillés pour votre marché',
      description: 'Nous ne faisons pas de la simple décoration numérique. Nous construisons votre canal de vente et de prise de contact le plus efficace.',
      keyHighlights: [
        'Architecture Mobile-First optimisée pour toutes les connexions',
        'Boutons d’interaction directe WhatsApp et Appel en 1 clic',
        'Référencement naturel (SEO) structuré dès la conception pour Google',
        'Design haut de gamme sur-mesure reflétant votre valeur réelle',
        'Panneau d’administration simple pour modifier vos textes et photos en 3 clics'
      ],
      differentiator: 'Chaque site que nous livrons intègre un suivi de performance et une garantie de prise en charge réactive.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'TrendingUp',
        title: 'Augmentation des demandes entrantes',
        description: 'Facilitez les sollicitations WhatsApp et appels qualifiés grâce à une ergonomie pensée pour l’action.',
        metric: 'Accès WhatsApp direct'
      },
      {
        icon: 'ShieldCheck',
        title: 'Crédibilité institutionnelle renforcée',
        description: 'Rassurez vos partenaires, banques et grands comptes avec une vitrine digitale élégante et certifiée HTTPS.',
        metric: 'Conforme HTTPS'
      },
      {
        icon: 'Zap',
        title: 'Vitesse de chargement optimale',
        description: 'Code épuré qui s’affiche rapidement, même avec du réseau mobile limité.',
        metric: 'Chargement fluide'
      },
      {
        icon: 'Smartphone',
        title: 'Expérience fluide sur smartphone',
        description: 'Parfaitement adapté aux habitudes de navigation actuelles de vos clients.',
        metric: 'Multi-écrans'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Conception & Design Graphique',
        items: [
          'Design personnalisé aligné sur vos couleurs et votre identité',
          'Arborescence stratégique des pages (Accueil, Services, Réalisations, Devis, Contact)',
          'Rédaction persuasive des textes et mise en valeur de vos avantages concurrentiels',
          'Sélection de visuels et d’icônes professionnels'
        ]
      },
      {
        category: 'Fonctionnalités Techniques & Conversion',
        items: [
          'Intégration du bouton WhatsApp flottant et d’Appel direct',
          'Formulaire de demande de devis personnalisé et sécurisé',
          'Galerie dynamique de vos projets et réalisations',
          'Géolocalisation Google Maps et Fiche Google My Business synchronisée',
          'Module multilingue ou E-commerce (sur option)'
        ]
      },
      {
        category: 'Sécurité, SEO & Autonomie',
        items: [
          'Certificat de sécurité SSL (HTTPS) et protection contre le piratage',
          'Optimisation du référencement naturel local (SEO On-Page)',
          'Session de formation individuelle pour gérer votre site vous-même',
          'Garantie corrective et maintenance incluse les premiers mois'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Atelier de Cadrage & Stratégie',
        description: 'Analyse de vos objectifs, de vos cibles et de la concurrence pour définir la structure exacte de votre site.'
      },
      {
        stepNumber: '02',
        title: 'Maquettage & Rédaction',
        description: 'Conception des visuels et rédaction des contenus orientés vers la conversion de vos prospects.'
      },
      {
        stepNumber: '03',
        title: 'Développement & Intégration',
        description: 'Programmation technique du site, intégration des formulaires et optimisation de la vitesse.'
      },
      {
        stepNumber: '04',
        title: 'Mise en ligne & Formation',
        description: 'Tests rigoureux sur mobile/PC, raccordement du nom de domaine et formation de votre équipe.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple de solution type pour PME & Établissements',
      clientCase: {
        clientName: 'Solution de vitrine & pré-inscription — Projet de démonstration',
        clientType: 'Exemple pour secteur éducation',
        objective: 'Permettre aux parents d’effectuer leurs démarches d’inscription à distance via une plateforme web simple et rapide.',
        quote: 'Permettre aux parents d’effectuer leurs démarches d’inscription à distance via une plateforme web simple et rapide.',
        result: 'Traitement centralisé des demandes d’inscription et canal de communication direct via WhatsApp.'
      },
      guarantees: [
        'Propriété à 100% de votre nom de domaine et de votre site',
        'Garantie de livraison dans les délais contractuels',
        'Support technique dédié accessible sur WhatsApp'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-site-1',
        question: 'Combien de temps faut-il pour créer un site web complet ?',
        answer: 'Un site vitrine professionnel est généralement conçu et livré entre 1 et 2 semaines après la fourniture des éléments. Pour un projet plus complexe ou e-commerce, comptez entre 3 et 4 semaines.'
      },
      {
        id: 'faq-site-2',
        question: 'Pourrai-je modifier les textes et photos de mon site moi-même ?',
        answer: 'Absolument ! Nous vous fournissons un accès administrateur et nous organisons une session de formation pratique pour que vous ou votre secrétaire puissiez modifier vos actualités, photos et prix en toute autonomie.'
      },
      {
        id: 'faq-site-3',
        question: 'Le site sera-t-il bien visible sur Google ?',
        answer: 'Oui. Nous intégrons les bonnes pratiques SEO de base (balises, vitesse, titres, mots-clés locaux, Fiche Google My Business) pour que votre établissement soit facilement trouvé dans votre région.'
      },
      {
        id: 'faq-site-4',
        question: 'Proposez-vous aussi le nom de domaine et l’hébergement ?',
        answer: 'Oui, nous gérons tout de A à Z : réservation du nom de domaine (ex: votreentreprise.com), hébergement haute vitesse sécurisé et adresses email professionnelles (ex: contact@votreentreprise.com).'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Création de Sites Internet Professionnels sur-mesure | CoolDigital 360°',
      metaDescription: 'Conception de sites web vitrines et e-commerce ultra-rapides, optimisés sur smartphone et pensés pour déclencher des contacts WhatsApp directs.',
      keywords: ['création site web', 'site internet vitrine', 'agence web', 'site e-commerce', 'référencement google SEO', 'développement web'],
      ogTitle: 'Concevez un Site Internet qui Génère des Clients | CoolDigital 360°',
      ogDescription: 'Sites internet professionnels avec intégration WhatsApp, vitesse extrême et conversion garantie pour PME et professionnels.',
      schemaType: 'Service'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'logiciels-de-gestion',
        title: 'Logiciels de Gestion Sur-Mesure',
        reason: 'Connectez votre site web à votre outil de gestion pour automatiser vos demandes.'
      },
      {
        slug: 'community-management',
        title: 'Community Management',
        reason: 'Attirez du trafic qualifié depuis les réseaux sociaux vers votre nouveau site web.'
      }
    ],
    recommendedPackageId: 'offre-professionnelle'
  },

  'logiciels-de-gestion': {
    id: 'logiciels-de-gestion',
    slug: 'logiciels-de-gestion',
    title: 'Logiciels de Gestion Sur-Mesure (ERP / CRM)',
    tagline: 'Abandonnez les fichiers Excel lents pour un outil métier simple, rapide et sans erreurs.',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'LayoutGrid',
    accentColor: 'emerald',
    heroBadge: 'Digitalisation & Productivité',
    heroHeadline: 'Un logiciel de gestion conçu sur-mesure pour vos processus internes.',
    heroSubheadline: 'Gérez vos stocks, vos factures, vos clients ou vos élèves sur une plateforme sécurisée accessible sur PC et smartphone. Éliminez les pertes de données et gagnez un temps précieux au quotidien.',

    // 1. Problème client
    clientProblem: {
      title: 'Les limites fatales des fichiers Excel pour votre entreprise',
      subtitle: 'Toutes les entreprises en croissance atteignent un point où Excel devient une source permanente d’erreurs et de frustration.',
      points: [
        {
          title: 'Fichiers lourds, corrompus ou supprimés par erreur',
          description: 'Un mauvais copier-coller ou une fausse manipulation et ce sont des mois d’historique de facturation ou de stock qui disparaissent.'
        },
        {
          title: 'Saisie manuelle répétitive & perte de temps',
          description: 'Vos équipes passent des heures à ressaisir les mêmes données d’un tableau à un autre au lieu de se concentrer sur la vente.'
        },
        {
          title: 'Impossible d’avoir une vision globale en temps réel',
          description: 'Savoir exactement ce qu’il reste en stock ou suivre les impayés nécessite de compiler 5 fichiers Excel différents.'
        },
        {
          title: 'Logiciels du marché trop complexes et trop chers',
          description: 'Les logiciels standards proposent 100 fonctionnalités inutiles, coûtent un abonnement exorbitant et demandent des mois d’adaptation.'
        }
      ],
      consequence: 'Résultat : Des erreurs financières, des retards de livraison et des équipes épuisées par la bureaucratie.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Une plateforme de gestion pensée pour vos métiers',
      description: 'Nous développons une application métier intuitive qui colle exactement à la réalité de votre activité.',
      keyHighlights: [
        'Interface ultra-simple : vos collaborateurs sont opérationnels en 1 heure',
        'Module de facturation automatique et génération de PDF en 1 clic',
        'Suivi des stocks en temps réel avec alertes de réapprovisionnement',
        'Gestion des droits utilisateurs : chaque employé voit uniquement ce dont il a besoin',
        'Accessible depuis n’importe quel navigateur (PC, Tablette, Smartphone)'
      ],
      differentiator: 'Pas de fonctionnalités superflues : nous développons uniquement ce qui vous fait gagner du temps.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'Clock',
        title: 'Gain de temps massif pour l’équipe',
        description: 'Économisez du temps chaque semaine en automatisant la saisie et l’édition de vos documents.',
        metric: 'Gain de temps'
      },
      {
        icon: 'CheckCircle2',
        title: 'Zéro erreur de facturation',
        description: 'Calculs automatiques, suivi des règlements et édition rapide de factures PDF.',
        metric: 'Calculs automatiques'
      },
      {
        icon: 'BarChart3',
        title: 'Tableaux de bord stratégiques',
        description: 'Consultez votre chiffre d’affaires et l’état de vos stocks en un coup d’œil.',
        metric: 'Vision 360°'
      },
      {
        icon: 'Lock',
        title: 'Sécurité & Sauvegardes Cloud',
        description: 'Vos données sont chiffrées et sauvegardées régulièrement sur serveur sécurisé.',
        metric: 'Sauvegardes Cloud'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Modules Métier Personnalisables',
        items: [
          'Gestion des Clients, Prospects & Fournisseurs (CRM)',
          'Gestion des Devis, Factures, Reçus et Règlements avec exports PDF/Excel',
          'Gestion des Stocks, Entrées/Sorties, Inventaires et Alertes de rupture',
          'Gestion des Élèves, Inscriptions et Paies (pour établissements scolaires)',
          'Gestion de Caisse et Journal des dépenses quotidiennes'
        ]
      },
      {
        category: 'Infrastructures & Sécurité',
        items: [
          'Base de données sécurisée haute disponibilité',
          'Gestion fine des rôles (Administrateur, Caissier, Comptable, Commercial)',
          'Journal d’audit : traçabilité complète de toutes les modifications effectuées',
          'Sauvegarde automatique quotidienne sur serveur sécurisé'
        ]
      },
      {
        category: 'Accompagnement & Migration',
        items: [
          'Importation de vos anciennes données depuis Excel',
          'Formation pratique sur site ou à distance de tous vos utilisateurs',
          'Assistance prioritaire et mises à jour évolutives'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Audit de vos processus actuels',
        description: 'Analyse détaillée de vos fichiers Excel et de vos méthodes de travail actuelles.'
      },
      {
        stepNumber: '02',
        title: 'Prototypage & Validation des écrans',
        description: 'Présentation des maquettes du logiciel pour valider l’ergonomie avec vos équipes.'
      },
      {
        stepNumber: '03',
        title: 'Développement & Migration',
        description: 'Programmation sur-mesure et injection de vos historiques de données existants.'
      },
      {
        stepNumber: '04',
        title: 'Formation & Lancement',
        description: 'Prise en main guidée par nos formateurs et accompagnement en direct le premier mois.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple de solution de gestion sur-mesure',
      clientCase: {
        clientName: 'Solution de gestion de stock & facturation — Projet de démonstration',
        clientType: 'Exemple pour entreprise de négoce',
        objective: 'Remplacer les fichiers Excel éparpillés par une application métier centralisant la facturation et le suivi de stock.',
        quote: 'Remplacer les fichiers Excel éparpillés par une application métier centralisant la facturation et le suivi de stock.',
        result: 'Saisie rapide des commandes, édition automatique de factures et suivi clair du stock disponible en temps réel.'
      },
      guarantees: [
        'Logiciel réactif utilisable même en connexion limitée',
        'Possibilité de faire évoluer le logiciel avec votre croissance',
        'Contrat de maintenance applicative incluant le support'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-log-1',
        question: 'Est-il possible d’importer nos anciennes données Excel dans le logiciel ?',
        answer: 'Oui, parfaitement. Nous nettoyons et migrons l’intégralité de vos fichiers Excel (fiches clients, historique de ventes, liste des produits) vers la nouvelle base de données sans aucune perte.'
      },
      {
        id: 'faq-log-2',
        question: 'Le logiciel est-il facile à prendre en main pour du personnel peu qualifié ?',
        answer: 'C’est notre priorité absolue. Contrairement aux logiciels complexes du marché, nos interfaces sont épurées avec de grands boutons clairs. 1 heure de formation suffit pour être totalement autonome.'
      },
      {
        id: 'faq-log-3',
        question: 'Où sont stockées nos données et qui y a accès ?',
        answer: 'Vos données sont hébergées sur des serveurs Cloud sécurisés avec chiffrement. Vous êtes l’unique propriétaire de vos données et définissez vous-même les accès de chacun de vos employés.'
      },
      {
        id: 'faq-log-4',
        question: 'Pouvons-nous utiliser le logiciel depuis un smartphone ou une tablette ?',
        answer: 'Absolument. L’application web s’adapte automatiquement aux écrans des ordinateurs de bureau, tablettes de caisse et téléphones portables.'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Logiciel de Gestion Sur-Mesure (ERP / CRM) pour PME | CoolDigital 360°',
      metaDescription: 'Développement de logiciels de gestion sur-mesure pour remplacer Excel. Gestion de stock, facturation et suivi clients simples et sécurisés.',
      keywords: ['logiciel de gestion sur mesure', 'développement ERP PME', 'logiciel facturation stock', 'alternative excel entreprise', 'application métier web'],
      ogTitle: 'Digitalisez votre Gestion d’Entreprise Sans Complexité | CoolDigital 360°',
      ogDescription: 'Passez d’Excel à une plateforme métier intuitive. Automatisez vos factures, stocks et fichiers clients.',
      schemaType: 'SoftwareApplication'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'creation-site-internet',
        title: 'Création de Sites Internet',
        reason: 'Reliez vos demandes web directement à votre logiciel de gestion.'
      },
      {
        slug: 'formations-informatiques',
        title: 'Formations Informatiques',
        reason: 'Formez vos collaborateurs à l’utilisation rapide des nouveaux logiciels.'
      }
    ],
    recommendedPackageId: 'offre-professionnelle'
  },

  'maintenance-depannage': {
    id: 'maintenance-depannage',
    slug: 'maintenance-depannage',
    title: 'Maintenance Informatique & Dépannage d’Urgence',
    tagline: 'Garantissez zéro interruption de travail grâce à un support réactif et une protection totale de vos équipements.',
    pole: 'accompagnement-technique',
    poleTitle: 'Accompagnement Technique',
    iconName: 'Wrench',
    accentColor: 'amber',
    heroBadge: 'Support Technique & Urgence IT',
    heroHeadline: 'Une panne informatique ? Intervention garantie sous 15 à 30 minutes.',
    heroSubheadline: 'Ordinateur bloqué, réseau wifi en panne, écran bleu ou virus ? Notre équipe technique intervient immédiatement sur site ou à distance pour débloquer votre entreprise et protéger vos données.',

    // 1. Problème client
    clientProblem: {
      title: 'Quand l’informatique paralyse votre chiffre d’affaires',
      subtitle: 'Dans une entreprise, chaque minute passée devant un ordinateur en panne coûte de l’argent et énerve vos clients.',
      points: [
        {
          title: 'Dépannages au coup par coup coûteux et inefficaces',
          description: 'Faire appel à un réparateur différent à chaque problème coûte cher et n’élimine jamais la cause réelle des pannes.'
        },
        {
          title: 'Lenteur extrême des ordinateurs',
          description: 'Des postes de travail non entretenus mettent 15 minutes à s’allumer, faisant perdre un temps précieux à vos collaborateurs tous les matins.'
        },
        {
          title: 'Risque de perte définitive de données clients',
          description: 'Pas de sauvegarde automatique : si un disque dur gille ou si un ransomware bloque votre PC, vos dossiers clients sont perdus.'
        },
        {
          title: 'Piratages et virus destructeurs',
          description: 'Utilisation d’antivirus gratuits inefficaces qui laissent passer les cyberattaques et vols d’informations confidentielles.'
        }
      ],
      consequence: 'Résultat : Des journées de travail perdues, du stress inutile et la menace permanente de fermer boutique suite à un crash informatique.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Un contrat de maintenance globale & une hotline d’urgence',
      description: 'Nous devenons votre pôle informatique externalisé. Nous prévenons les pannes avant qu’elles n’arrivent et nous intervenons en urgence en cas de souci.',
      keyHighlights: [
        'Intervention prioritaire garantie sous 15 à 30 minutes par WhatsApp ou Téléphone',
        'Nettoyage préventif et optimisation matérielle de tous vos ordinateurs',
        'Installation d’antivirus professionnels centralisés avec pare-feu',
        'Système de sauvegarde automatique Cloud de vos fichiers stratégiques',
        'Prise en main à distance sécurisée pour débloquer un salarié en 5 minutes'
      ],
      differentiator: 'Un tarif forfaitaire lisible sans frais cachés pour la sérénité totale de votre structure.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'Zap',
        title: 'Assistance & Réactivité IT',
        description: 'Un technicien répond rapidement à votre message WhatsApp ou appel d’urgence.',
        metric: 'Hotline d’assistance'
      },
      {
        icon: 'Shield',
        title: 'Sécurité informatique maximale',
        description: 'Protection efficace contre les virus, malwares et tentatives d’hameçonnage.',
        metric: 'Protection Antivirus'
      },
      {
        icon: 'RefreshCw',
        title: 'Postes de travail optimisés',
        description: 'Optimisation logicielle et révision matérielle pour prolonger la durée de vie de vos équipements.',
        metric: 'Postes optimisés'
      },
      {
        icon: 'Database',
        title: 'Sauvegardes automatiques',
        description: 'Vos données sont dupliquées régulièrement en lieu sûr.',
        metric: 'Sauvegardes quotidiennes'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Interventions & Assistance',
        items: [
          'Assistance téléphonique & WhatsApp directe 5j/7 (Support d’urgence 7j/7)',
          'Prise en main à distance (Télé-assistance instantanée)',
          'Déplacement technique sur site en cas de panne réseau ou matérielle',
          'Remplacement et réinstallation de composants défectueux'
        ]
      },
      {
        category: 'Maintenance Préventive & Sécurité',
        items: [
          'Audit initial gratuit de l’ensemble de votre parc informatique',
          'Nettoyage système, suppression des fichiers indésirables et mises à jour de sécurité',
          'Installation et gestion d’antivirus d’entreprise professionnels',
          'Configuration et sécurisation de votre réseau Wi-Fi d’entreprise'
        ]
      },
      {
        category: 'Sauvegarde & Continuité d’Activité',
        items: [
          'Mise en place de sauvegardes automatiques quotidiennes',
          'Plan de reprise d’activité en cas de sinistre ou vol d’ordinateur',
          'Conseil à l’achat pour le renouvellement optimal de votre matériel'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Audit Initial Gratuit',
        description: 'Nous inspectons tous vos ordinateurs, réseaux et sauvegardes pour identifier les vulnérabilités.'
      },
      {
        stepNumber: '02',
        title: 'Remise à niveau & Sécurisation',
        description: 'Nettoyage complet des machines, installation des antivirus et configuration des sauvegardes.'
      },
      {
        stepNumber: '03',
        title: 'Mise en place de la Hotline',
        description: 'Attribution de votre numéro d’assistance prioritaire dédié pour tous vos salariés.'
      },
      {
        stepNumber: '04',
        title: 'Suivi Mensuel Préventif',
        description: 'Vérification régulière du bon fonctionnement du parc et mises à jour de sécurité.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple de plan de maintenance informatique',
      clientCase: {
        clientName: 'Solution de maintenance & sécurité IT — Projet de démonstration',
        clientType: 'Exemple pour cabinet professionnel',
        objective: 'Prévenir les pannes d’ordinateurs, sécuriser les postes de travail et assurer une assistance technique prioritaire.',
        quote: 'Prévenir les pannes d’ordinateurs, sécuriser les postes de travail et assurer une assistance technique prioritaire.',
        result: 'Parc informatique assaini, protection antivirus d’entreprise et hotline d’assistance dédiée.'
      },
      guarantees: [
        'Intervention prioritaire en cas de panne bloquante',
        'Prêt d’équipements de secours selon disponibilité',
        'Tarifs clairs et forfaitisés par ordinateur'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-maint-1',
        question: 'Intervenez-vous à distance ou sur site dans nos locaux ?',
        answer: 'Les deux ! Plus de 80% des blocages logiciels ou ralentissements sont résolus en 10 minutes à distance via prise en main sécurisée. Si le problème concerne le matériel ou le réseau internet, un technicien se déplace dans vos locaux.'
      },
      {
        id: 'faq-maint-2',
        question: 'Pouvons-nous vous appeler pour un dépannage ponctuel sans abonnement ?',
        answer: 'Oui, nous proposons des interventions de dépannage d’urgence à l’acte. Néanmoins, nos contrats de maintenance mensuels sont beaucoup plus avantageux et vous garantissent une priorité absolue.'
      },
      {
        id: 'faq-maint-3',
        question: 'Comment fonctionne la sauvegarde automatique des fichiers ?',
        answer: 'Nous configurons un logiciel discret qui copie automatiquement vos dossiers importants (comptabilité, factures, fichiers clients) sur un serveur sécurisé. En cas de vol ou de panne de disque dur, nous restaurons tout en 1 heure.'
      },
      {
        id: 'faq-maint-4',
        question: 'Combien d’ordinateurs pouvez-vous prendre en charge ?',
        answer: 'Nos offres s’adaptent des structures indépendantes (1 à 3 postes) jusqu’aux PME et établissements scolaires disposant de plus de 50 ordinateurs.'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Maintenance Informatique & Dépannage Urgent pour PME | CoolDigital 360°',
      metaDescription: 'Dépannage informatique d’urgence sous 30 min. Contrats de maintenance préventive, antivirus d’entreprise et sauvegardes Cloud pour PME.',
      keywords: ['maintenance informatique', 'dépannage informatique urgence', 'assistance technique PME', 'antivirus entreprise', 'sauvegarde données Cloud'],
      ogTitle: 'Assistance & Maintenance IT d’Urgence pour Entreprises | CoolDigital 360°',
      ogDescription: 'Ne laissez plus une panne bloquer votre activité. Hotline WhatsApp réactive et maintenance complète de votre parc informatique.',
      schemaType: 'EmergencyService'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'formations-informatiques',
        title: 'Formations Informatiques',
        reason: 'Formez vos équipes à la cybersécurité pour éviter les fausses manipulations.'
      },
      {
        slug: 'logiciels-de-gestion',
        title: 'Logiciels de Gestion Sur-Mesure',
        reason: 'Sécurisez vos serveurs de gestion avec une maintenance adaptée.'
      }
    ],
    recommendedPackageId: 'offre-essentielle'
  },

  'community-management': {
    id: 'community-management',
    slug: 'community-management',
    title: 'Community Management & Réseaux Sociaux',
    tagline: 'Développez votre notoriété locale et attirez de nouveaux clients grâce à des contenus professionnels.',
    pole: 'competences-visibilite',
    poleTitle: 'Développement des Compétences & Visibilité',
    iconName: 'Share2',
    accentColor: 'blue',
    heroBadge: 'Attraction & Visibilité Locale',
    heroHeadline: 'Rendez votre entreprise incontournable sur Facebook, Instagram et LinkedIn.',
    heroSubheadline: 'Ne laissez plus vos pages réseaux sociaux désertes ou alimentées par des visuels amateurs. Nous créons du contenu régulier, engageant et élégant pour valoriser votre savoir-faire et générer du flux client.',

    // 1. Problème client
    clientProblem: {
      title: 'Pourquoi vos réseaux sociaux actuels ne vous apportent aucun client',
      subtitle: 'Avoir une page Facebook ou Instagram inactive est parfois pire que de ne rien avoir du tout.',
      points: [
        {
          title: 'Manque de temps et manque d’idées',
          description: 'Vous êtes absorbé par votre gestion quotidienne et n’avez pas le temps de concevoir des publications régulières.'
        },
        {
          title: 'Visuels amateurs qui dévalorisent votre image',
          description: 'Des photos floues ou des affiches mal cadrées renvoient l’image d’une entreprise négligée.'
        },
        {
          title: 'Abonnés inactifs et faible portée',
          description: 'Vous publiez de temps en temps mais personne ne commente ou ne partage vos contenus.'
        },
        {
          title: 'Messages privés de prospects sans réponse',
          description: 'Les clients potentiels posent des questions sur WhatsApp ou Facebook et restent sans réponse pendant des jours.'
        }
      ],
      consequence: 'Résultat : Vous laissez le champ libre à vos concurrents qui occupent le terrain sur le digital.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Une gestion clé-en-main de vos réseaux sociaux',
      description: 'Nous prenons en charge 100% de votre présence sur les réseaux sociaux avec une stratégie orientée résultats.',
      keyHighlights: [
        'Calendrier éditorial mensuel validé ensemble à l’avance',
        'Création graphique professionnelle (affiches, carrousels, vidéos courtes/Reels)',
        'Rédaction de textes captivants adaptés à votre cible locale',
        'Publication régulière à forte valeur ajoutée aux heures de grande écoute',
        'Modération et animation réactive des commentaires et messages privés'
      ],
      differentiator: 'Un contenu authentique qui valorise vos vraies réalisations et l’équipe sur le terrain.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'Eye',
        title: 'Notoriété locale démultipliée',
        description: 'Touchez votre cible locale grâce à une communication visuelle régulière et soignée.',
        metric: 'Visibilité ciblée'
      },
      {
        icon: 'Users',
        title: 'Communauté engagée',
        description: 'Fidélisez vos clients existants et présentez vos nouveautés.',
        metric: 'Communauté active'
      },
      {
        icon: 'MessageSquare',
        title: 'Demandes de prospects directs',
        description: 'Incitez vos abonnés à demander des devis ou à vous écrire sur WhatsApp.',
        metric: 'Contact WhatsApp'
      },
      {
        icon: 'Clock',
        title: 'Gain de temps total',
        description: 'Ne vous souciez plus de quoi publier : nous gérons la création de contenu de A à Z.',
        metric: 'Clé en main'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Création & Stratégie de Contenu',
        items: [
          'Élaboration de la ligne éditoriale et de la charte visuelle réseaux sociaux',
          'Planning mensuel de publications (2 à 4 publications par semaine selon la formule)',
          'Conception des visuels sur-mesure (graphismes, montages photos, vidéos courtes)',
          'Rédaction persuasive des textes et accroches avec hashtags stratégiques'
        ]
      },
      {
        category: 'Animation & Modération',
        items: [
          'Publication programmée aux horaires de forte audience',
          'Animation des stories interactives (sondages, questions, coulisses)',
          'Réponses rapides aux commentaires et redirection des demandes vers votre WhatsApp',
          'Gestion de campagnes publicitaires ciblées Facebook/Instagram Ads (sur option)'
        ]
      },
      {
        category: 'Suivi & Reporting',
        items: [
          'Rapport mensuel clair sur la croissance de vos abonnés et l’engagement',
          'Réunion bilan trimestrielle pour ajuster les contenus selon les meilleures ventes'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Atelier Stratégie & Identité',
        description: 'Nous définissons votre ton, vos thématiques phares et les objectifs de communication.'
      },
      {
        stepNumber: '02',
        title: 'Validation du Planning Mensuel',
        description: 'Chaque mois, vous validez à l’avance les visuels et textes avant toute publication.'
      },
      {
        stepNumber: '03',
        title: 'Diffusion & Animation',
        description: 'Publication automatique et interaction quotidienne avec les personnes qui réagissent.'
      },
      {
        stepNumber: '04',
        title: 'Analyse & Ajustements',
        description: 'Analyse des retours pour concentrer les efforts sur les sujets qui génèrent le plus de clients.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple de stratégie de communication digitale',
      clientCase: {
        clientName: 'Stratégie de contenu réseaux sociaux — Projet de démonstration',
        clientType: 'Exemple pour établissement touristique & restauration',
        objective: 'Valoriser les prestations de l’établissement sur Facebook et Instagram avec des visuels professionnels.',
        quote: 'Valoriser les prestations de l’établissement sur Facebook et Instagram avec des visuels professionnels.',
        result: 'Présentation soignée de l’activité et redirection directe des demandes d’information vers WhatsApp.'
      },
      guarantees: [
        'Validation systématique par vos soins avant publication',
        'Respect strict de votre image de marque',
        'Rapport d’activité mensuel transparent'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-cm-1',
        question: 'Garderai-je un droit de regard sur ce qui est publié ?',
        answer: 'Oui, à 100% ! Nous vous envoyons le calendrier d’idées et les visuels une à deux semaines à l’avance. Rien n’est publié sans votre accord préalable.'
      },
      {
        id: 'faq-cm-2',
        question: 'Sur quels réseaux sociaux pouvez-vous intervenir ?',
        answer: 'Nous gérons principalement Facebook, Instagram, LinkedIn et TikTok, en fonction de là où se trouvent vos vrais clients.'
      },
      {
        id: 'faq-cm-3',
        question: 'Devons-nous vous fournir les photos ou vidéos ?',
        answer: 'Si vous avez des photos réelles de vos produits/locaux, c’est parfait. Sinon, nous créons des visuels graphiques professionnels et pouvons organiser une prise de vue ou utiliser des banques d’images HD adaptées.'
      },
      {
        id: 'faq-cm-4',
        question: 'Combien de fois par semaine allez-vous publier ?',
        answer: 'Cela dépend du package choisi. Nos offres s’étendent de 2 publications par semaine (formule essentielle) à 4 publications par semaine avec vidéos courtes (formule premium).'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Community Management & Gestion Réseaux Sociaux pour PME | CoolDigital 360°',
      metaDescription: 'Déléguez la gestion de vos réseaux sociaux (Facebook, Instagram, LinkedIn). Visuels pros, rédaction et animation de communauté pour attirer des clients.',
      keywords: ['community management', 'gestion réseaux sociaux', 'agence social media', 'stratégie facebook instagram', 'visibilité entreprise locale'],
      ogTitle: 'Boostez votre Image sur les Réseaux Sociaux | CoolDigital 360°',
      ogDescription: 'Des visuels professionnels et un contenu captivant pour transformer vos abonnés en clients fidèles.',
      schemaType: 'Service'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'creation-site-internet',
        title: 'Création de Sites Internet',
        reason: 'Renvoyez le trafic de vos réseaux sociaux vers un site internet performant.'
      },
      {
        slug: 'formations-informatiques',
        title: 'Formations Informatiques',
        reason: 'Formez un membre de votre équipe à la création de contenu interne.'
      }
    ],
    recommendedPackageId: 'offre-professionnelle'
  },

  'formations-informatiques': {
    id: 'formations-informatiques',
    slug: 'formations-informatiques',
    title: 'Formations Informatiques & Digitales Pratiques',
    tagline: 'Faites monter vos collaborateurs en compétences (Bureautique, Sécurité, Intelligence Artificielle) pour une équipe autonome et performante.',
    pole: 'competences-visibilite',
    poleTitle: 'Développement des Compétences & Visibilité',
    iconName: 'GraduationCap',
    accentColor: 'blue',
    heroBadge: 'Autonomie & Montée en Compétences',
    heroHeadline: 'Des formations 100% pratiques adaptées à la réalité de vos équipes.',
    heroSubheadline: 'Bureautique (Excel, Word), formation en Intelligence Artificielle (IA pour la productivité et automatisation), cybersécurité ou logiciels métier : donnez à vos employés les méthodes concrètes pour être plus rapides et autonomes.',

    // 1. Problème client
    clientProblem: {
      title: 'Le coût caché du manque de maîtrise informatique de vos équipes',
      subtitle: 'Quand vos salariés hésitent sur les outils informatiques ou passent à côté des gains de productivité de l’IA, c’est toute votre entreprise qui ralentit.',
      points: [
        {
          title: 'Erreurs de saisie et mauvaise manipulation des fichiers',
          description: 'Des fichiers clients écrasés, des calculs de factures erronés ou des mails envoyés par erreur faute de maîtrise des outils.'
        },
        {
          title: 'Lenteur excessive sur les tâches répétitives',
          description: 'Vos équipes mettent des heures sur des tâches de rédaction, de synthèse ou de traitement de tableaux qui prendraient quelques minutes avec l’IA et de bonnes formules.'
        },
        {
          title: 'Vulnérabilité face aux arnaques et fausses pièces jointes',
          description: 'Des salariés qui cliquent sur des liens piégés par manque de sensibilisation à la cybersécurité basique.'
        },
        {
          title: 'Dépendance constante envers le dirigeant ou le collègue',
          description: 'Interruption permanente du travail des autres pour demander "comment on fait telle manipulation ?".'
        }
      ],
      consequence: 'Résultat : Une baisse de productivité globale, de la frustration et des risques de sécurité accrus.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Des sessions de formation concrètes et bienveillantes',
      description: 'Pas de théories abstraites. Nous formons vos équipes directement sur leurs cas d’usage quotidiens avec des méthodes simples et les meilleurs outils d’IA.',
      keyHighlights: [
        'Formation pratique à l’Intelligence Artificielle (IA) appliquée à votre métier',
        'Formations dispensées dans vos locaux ou en ligne selon vos préférences',
        'Programmes sur-mesure ajustés au niveau réel de chaque participant',
        'Exercices 100% pratiques basés sur vos propres documents et fichiers',
        'Supports de cours clairs et fiches récapitulatives remis à la fin',
        'Attestations de suivi de formation pour valoriser vos collaborateurs'
      ],
      differentiator: 'Un formateur pédagogue et patient qui s’adapte au rythme de chacun.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'Zap',
        title: 'Productivité décuplée',
        description: 'Des salariés qui maîtrisent l’IA et les raccourcis essentiels pour travailler 2x plus vite.',
        metric: 'Pratique métier'
      },
      {
        icon: 'UserCheck',
        title: 'Autonomie totale',
        description: 'Moins de sollicitations et d’interruptions au sein de vos bureaux.',
        metric: 'Équipes autonomes'
      },
      {
        icon: 'Shield',
        title: 'Sensibilisation Sécurité',
        description: 'Sensibilisation efficace contre les pièges de piratage et erreurs de manipulation.',
        metric: 'Sensibilisation IT'
      },
      {
        icon: 'Award',
        title: 'Valorisation du personnel',
        description: 'Des employés plus confiants, valorisés et formés aux technologies d’avenir.',
        metric: 'Attestation remise'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Thématiques de Formation Disponibles',
        items: [
          'Formation en Intelligence Artificielle (IA) & Productivité (ChatGPT, outils IA générative, automatisation des tâches quotidiennes, rédaction & analyse)',
          'Bureautique Essentielle & Avancée (Excel : formules, tableaux croisés dynamiques, gestion de stocks / Word / PowerPoint)',
          'Sécurité Informatique & Bonnes Pratiques (Éviter le phishing, gestion des mots de passe, protection des données)',
          'Prise en main des Logiciels Métier & Outils de Gestion internes (ERP, CRM, facturation)',
          'Navigation Web Sécurisée & Outils Collaboratifs (Google Workspace, Cloud)'
        ]
      },
      {
        category: 'Modalités Pédagogiques',
        items: [
          'Évaluation préalable du niveau des participants pour constituer des groupes homogènes',
          'Sessions de 2h à une journée complète selon vos contraintes de travail',
          'Ateliers pratiques individuels guidés pas-à-pas sur ordinateur',
          'Mise à disposition de fiches mémo visuelles et prompts IA à garder près de l’ordinateur'
        ]
      },
      {
        category: 'Suivi Post-Formation',
        items: [
          'Validation des acquis via des cas pratiques de contrôle',
          'Délivrance de l’attestation individuelle de fin de formation',
          'Assistance pendant 30 jours après la formation pour répondre aux questions des apprenants'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Audit des besoins & des niveaux',
        description: 'Échange préalable pour identifier les lacunes, les cas d’usage et fixer les objectifs précis à atteindre.'
      },
      {
        stepNumber: '02',
        title: 'Élaboration du programme sur-mesure',
        description: 'Conception du support de cours adapté à vos fichiers, outils IA et à votre secteur d’activité.'
      },
      {
        stepNumber: '03',
        title: 'Animation de la session pratique',
        description: 'Formation dynamique alternant explications simples et manipulations directes sur ordinateur.'
      },
      {
        stepNumber: '04',
        title: 'Évaluation & Attestations',
        description: 'Vérification des compétences acquises et remise des attestations aux apprenants.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple de programme de formation bureautique & IA',
      clientCase: {
        clientName: 'Programme de montée en compétences bureautique & IA — Projet de démonstration',
        clientType: 'Exemple pour équipe administrative & commerciale PME',
        objective: 'Former les collaborateurs aux fonctions avancées d’Excel, aux outils d’IA pour la rédaction et aux méthodes de gestion sécurisée des fichiers.',
        quote: 'Former les collaborateurs aux fonctions avancées d’Excel, aux outils d’IA pour la rédaction et aux méthodes de gestion sécurisée des fichiers.',
        result: 'Autonomie accrue des équipes sur leurs postes de travail, gain de temps significatif et diminution des erreurs de saisie.'
      },
      guarantees: [
        'Groupes réduits pour un suivi individuel personnalisé',
        'Pédagogie adaptée sans jargon intimidant',
        'Assistance post-formation offerte pendant 1 mois'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-form-1',
        question: 'Où se déroulent les sessions de formation ?',
        answer: 'Nous nous déplaçons directement dans vos locaux d’entreprise pour former vos équipes sur leur propre poste de travail. Nous pouvons également organiser des formations en visioconférence si nécessaire.'
      },
      {
        id: 'faq-form-2',
        question: 'Proposez-vous des formations sur l’Intelligence Artificielle (IA) ?',
        answer: 'Oui ! Nous proposons des modules pratiques dédiés à l’Intelligence Artificielle (ChatGPT, outils IA générative) pour aider vos collaborateurs à rédiger des courriers, analyser des données et automatiser des tâches du quotidien.'
      },
      {
        id: 'faq-form-3',
        question: 'Quel est le nombre de personnes idéal par session ?',
        answer: 'Pour garantir une attention individuelle et des réponses adaptées à chacun, nous recommandons des groupes de 3 à 8 personnes maximum par session.'
      },
      {
        id: 'faq-form-4',
        question: 'Délivrez-vous des attestations à la fin de la formation ?',
        answer: 'Oui, chaque apprenant reçoit une attestation officielle de suivi de formation résumant les compétences validées pendant le stage.'
      },
      {
        id: 'faq-form-5',
        question: 'Proposez-vous des formations pour les débutants complets ?',
        answer: 'Tout à fait. Nos programmes de remise à niveau débutant démarrent depuis la prise en main du clavier et de la souris jusqu’à l’autonomie sur la bureautique et les outils numériques.'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Formations Informatiques, Bureautique & IA pour Entreprises | CoolDigital 360°',
      metaDescription: 'Formations informatiques pratiques en entreprise : Intelligence Artificielle (IA), Excel, bureautique, sécurité informatique et logiciels métier.',
      keywords: ['formation informatique entreprise', 'formation intelligence artificielle entreprise', 'formation IA abidjan', 'formation excel bureautique', 'formation cybersécurité salariés', 'montée en compétences digitale'],
      ogTitle: 'Formez vos Équipes aux Outils Informatiques & à l’IA | CoolDigital 360°',
      ogDescription: 'Des formations 100% pratiques dispensées dans vos locaux pour augmenter la productivité grâce aux outils numériques et à l’Intelligence Artificielle.',
      schemaType: 'EducationalOccupationalProgram'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'logiciels-de-gestion',
        title: 'Logiciels de Gestion Sur-Mesure',
        reason: 'Accompagnez l’installation de votre nouveau logiciel par une formation.'
      },
      {
        slug: 'maintenance-depannage',
        title: 'Maintenance & Dépannage IT',
        reason: 'Sensibilisez vos salariés pour éviter les fausses manipulations informatiques.'
      }
    ],
    recommendedPackageId: 'offre-professionnelle'
  },

  'applications-web': {
    id: 'applications-web',
    slug: 'applications-web',
    title: 'Applications Web Sur-Mesure',
    tagline: 'Digitalisez vos processus métiers avec des applications web modernes, sécurisées et accessibles partout.',
    pole: 'solutions-digitales',
    poleTitle: 'Solutions Digitales',
    iconName: 'AppWindow',
    accentColor: 'emerald',
    heroBadge: 'Digitalisation & Performance Métier',
    heroHeadline: 'Des applications web sur-mesure conçues pour automatiser votre activité et booster votre productivité.',
    heroSubheadline: 'Portails clients, plateformes SaaS, outils de gestion collaborative ou espaces membres sécurisés : nous développons des applications web intuitives, rapides et parfaitement adaptées à vos besoins spécifiques.',

    // 1. Problème client
    clientProblem: {
      title: 'Pourquoi vos outils actuels freinent-ils votre développement ?',
      subtitle: 'Les processus manuels, les feuilles de calcul éparpillées et les logiciels non adaptés créent des blocages opérationnels majeurs.',
      points: [
        {
          title: 'Outils rigides non adaptés à vos processus',
          description: 'Les logiciels standards du marché vous obligent à changer vos méthodes de travail au lieu de s’adapter à votre fonctionnement réel.'
        },
        {
          title: 'Données dispersées et inaccessibles à distance',
          description: 'Vos équipes perdent du temps à chercher des informations stockées sur différents postes ou fichiers non synchronisés.'
        },
        {
          title: 'Absence d’interface moderne pour vos clients et partenaires',
          description: 'Vos clients attendent un espace en ligne fluide pour passer commande, suivre leurs dossiers ou accéder à leurs documents 24/7.'
        },
        {
          title: 'Risques de sécurité et de perte de données critiques',
          description: 'Sans architecture sécurisée et sauvegardes automatiques, vos informations stratégiques restent vulnérables.'
        }
      ],
      consequence: 'Résultat : Perte de temps, frustration des équipes et opportunités d’affaires manquées.'
    },

    // 2. Solution sur-mesure
    ourSolution: {
      title: 'Notre Solution : Une application web taillée sur-mesure pour vos ambitions',
      description: 'Nous concevons des plateformes web scalables, sécurisées et intuitives qui transforment votre façon de travailler.',
      keyHighlights: [
        'Accessible 24h/24 et 7j/7 depuis n’importe quel navigateur (PC, tablette, mobile)',
        'Gestion granulaire des utilisateurs avec rôles et droits d’accès personnalisés',
        'Intégration d’APIs tierces, systèmes de paiement (Mobile Money, Carte) et notifications',
        'Tableaux de bord d’analyse en temps réel et exports personnalisés',
        'Architecture cloud sécurisée avec sauvegardes automatiques'
      ],
      differentiator: 'Développement agile, accompagnement personnalisé de la conception au déploiement et support technique réactif.'
    },

    // 3. Bénéfices & ROI
    benefits: [
      {
        icon: 'TrendingUp',
        title: 'Gain de temps & Productivité',
        description: 'Automatisez les tâches répétitives et centralisez toutes vos données en un seul point d’accès.',
        metric: 'Productivité accrue'
      },
      {
        icon: 'Lock',
        title: 'Sécurité & Confidentialité',
        description: 'Contrôle strict des accès, chiffrement des données sensibles et conformité garantie.',
        metric: 'Données protégées'
      },
      {
        icon: 'Smartphone',
        title: 'Accessible partout & tout le temps',
        description: 'Vos collaborateurs et clients accèdent à la plateforme où qu’ils soient, sans installation.',
        metric: '100% Cloud'
      },
      {
        icon: 'RefreshCw',
        title: 'Évolutivité garantie',
        description: 'Une architecture moderne qui grandit au rythme de votre entreprise et de vos nouveaux besoins.',
        metric: 'Évolutif'
      }
    ],

    // 4. Contenu de l'offre
    offerContent: [
      {
        category: 'Conception & Architecture',
        items: [
          'Audit technique et recueil détaillé des besoins métiers',
          'Conception ergonomique de l’expérience utilisateur (UX/UI)',
          'Architecture logicielle robuste, sécurisée et évolutive',
          'Spécifications fonctionnelles et validation des maquettes interactives'
        ]
      },
      {
        category: 'Développement & Intégrations',
        items: [
          'Développement frontend réactif et backend haute performance',
          'Espaces utilisateurs avec gestion des rôles (Admin, Manager, Client)',
          'Intégration de bases de données relationnelles ou NoSQL',
          'Connecteurs API (Paiement Mobile Money, SMS, WhatsApp, emailing)',
          'Génération automatisée de rapports, factures et documents PDF'
        ]
      },
      {
        category: 'Déploiement, Sécurité & Formation',
        items: [
          'Déploiement sur infrastructure cloud sécurisée (HTTPS, pare-feu)',
          'Sauvegardes automatiques quotidiennes et monitoring continu',
          'Formation complète des administrateurs et des utilisateurs',
          'Maintenance corrective et évolutive incluse'
        ]
      }
    ],

    // 5. Processus
    processSteps: [
      {
        stepNumber: '01',
        title: 'Cadrage & Cahier des charges',
        description: 'Définition précise des fonctionnalités, des règles de gestion et des profils utilisateurs.'
      },
      {
        stepNumber: '02',
        title: 'Design UI/UX & Prototypage',
        description: 'Création des maquettes des écrans pour valider l’ergonomie avant tout développement.'
      },
      {
        stepNumber: '03',
        title: 'Développement & Tests',
        description: 'Programmation itérative, tests unitaires et intégration des services tiers.'
      },
      {
        stepNumber: '04',
        title: 'Mise en production & Formation',
        description: 'Déploiement sur serveur sécurisé, tests d’acceptation et prise en main par vos équipes.'
      }
    ],

    // 6. Éléments de confiance
    trustElements: {
      badge: 'Projet de démonstration',
      title: 'Exemple d’application web métier pour PME',
      clientCase: {
        clientName: 'Portail de gestion de commandes & Espace client — Projet de démonstration',
        clientType: 'Exemple pour distributeur et prestataire de services',
        objective: 'Permettre aux clients de passer commande en ligne, de suivre l’état d’avancement et de télécharger leurs factures en toute autonomie.',
        quote: 'Permettre aux clients de passer commande en ligne, de suivre l’état d’avancement et de télécharger leurs factures en toute autonomie.',
        result: 'Réduction de 60% des appels entrants pour suivi et accélération du traitement des commandes.'
      },
      guarantees: [
        'Code source documenté et propriété intellectuelle intégrale',
        'Garantie de bon fonctionnement et correction immédiate des anomalies',
        'Disponibilité et réactivité du support technique'
      ]
    },

    // 7. FAQ spécifique
    faqs: [
      {
        id: 'faq-app-1',
        question: 'Quelle est la différence entre un site web et une application web ?',
        answer: 'Un site web présente principalement des informations institutionnelles ou commerciales. Une application web est un logiciel interactif en ligne qui permet d’effectuer des actions complexes : traitement de données, gestion de comptes, calculs automatisés, transactions ou flux de travail.'
      },
      {
        id: 'faq-app-2',
        question: 'Faut-il installer quelque chose sur les ordinateurs des utilisateurs ?',
        answer: 'Non, aucun logiciel ni application ne doit être installé. L’application est accessible directement depuis n’importe quel navigateur internet (Chrome, Safari, Firefox, Edge) sur ordinateur, tablette ou smartphone.'
      },
      {
        id: 'faq-app-3',
        question: 'Comment sont protégées nos données sensibles ?',
        answer: 'Nous appliquons les meilleurs standards de cybersécurité : connexions chiffrées SSL/TLS (HTTPS), authentification sécurisée, hachage des mots de passe, contrôle strict des autorisations et sauvegardes automatiques redondantes.'
      },
      {
        id: 'faq-app-4',
        question: 'L’application peut-elle évoluer avec le temps ?',
        answer: 'Oui, nous concevons des architectures modulaires permettant d’ajouter de nouvelles fonctionnalités, modules ou intégrations à tout moment au fur et à mesure du développement de votre activité.'
      }
    ],

    // 8. SEO Metadata
    seo: {
      metaTitle: 'Développement d’Applications Web Sur-Mesure | CoolDigital 360°',
      metaDescription: 'Conception et développement d’applications web performantes, intuitives et sécurisées pour digitaliser et automatiser vos processus métiers.',
      keywords: ['développement application web', 'application web sur-mesure', 'plateforme SaaS', 'portail client', 'digitalisation entreprise', 'logiciel web'],
      ogTitle: 'Applications Web Sur-Mesure pour Entreprises | CoolDigital 360°',
      ogDescription: 'Digitalisez vos opérations avec des applications web modernes, sécurisées et accessibles 24/7 sur tout support.',
      schemaType: 'SoftwareApplication'
    },

    // 9. Liens internes
    relatedServices: [
      {
        slug: 'logiciels-de-gestion',
        title: 'Logiciels de Gestion Sur-Mesure',
        reason: 'Automatisez la gestion quotidienne de vos stocks, devis et factures.'
      },
      {
        slug: 'creation-site-internet',
        title: 'Création de Sites Internet',
        reason: 'Associez votre application web à un site vitrine professionnel pour attirer de nouveaux clients.'
      }
    ],
    recommendedPackageId: 'offre-professionnelle'
  }
};
