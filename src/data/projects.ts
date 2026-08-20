import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'caisse-scolaire-pro',
    title: 'Caisse Scolaire Pro — Logiciel de gestion scolaire',
    category: 'Logiciels de gestion',
    categorySlug: 'logiciels',
    projectType: 'Projet réalisé',
    projectOwner: 'Cool Digital',
    targetSector: 'Établissements scolaires (Maternelle, Primaire, Secondaire, Supérieur)',
    shortDescription: 'Une solution de gestion administrative et financière conçue pour simplifier le fonctionnement des établissements scolaires.',
    objective: 'Éliminer la gestion manuelle sur registres papier et tableurs Excel, sécuriser les encaissements de scolarités et automatiser le suivi financier et comptable des écoles.',
    solution: 'Développement d’une plateforme de gestion tout-en-un intégrant la gestion des élèves, l’encaissement multicanal avec reçus sécurisés et notification WhatsApp, le suivi caisse & banque, la paie des enseignants, 8 rapports financiers automatisés et un assistant IA d’aide à l’utilisation.',
    problemsList: [
      'Registres et cahiers papier : pertes, détériorations et absence de sauvegarde.',
      'Fichiers Excel dispersés : données cloisonnées, calculs manuels et risques d’erreurs.',
      'Reçus manuscrits : lenteur d’écriture et risques de falsification ou de contestation.',
      'Suivi financier tardif : impayés et retards de paiement découverts tardivement dans l’année.',
      'Erreurs de caisse : écarts frustrants et difficiles à justifier.'
    ],
    featureCategories: [
      {
        category: '1. Tableau de bord & Pilotage',
        items: [
          'Suivi en temps réel des entrées globales et des dépenses',
          'Visualisation instantanée du solde caisse et du solde banque',
          'Point journalier d’activité mis à jour en continu'
        ]
      },
      {
        category: '2. Inscriptions & Suivi des élèves',
        items: [
          'Fiches élèves centralisées avec matricules et classes',
          'Historique des paiements et solde individuel par élève'
        ]
      },
      {
        category: '3. Encaissement & Reçus sécurisés',
        items: [
          'Recherche rapide de l’élève par nom ou matricule',
          'Encaissement multicanal : espèces, chèque et virement bancaire',
          'Génération immédiate d’un reçu numéroté et sécurisé',
          'Envoi instantané d’une notification de paiement par WhatsApp aux parents'
        ]
      },
      {
        category: '4. Caisse & Trésorerie bancaire',
        items: [
          'Soldes caisse et banque toujours synchronisés',
          'Versements caisse vers banque et retraits banque vers caisse avec références',
          'Journal d’audit complet pour une traçabilité totale'
        ]
      },
      {
        category: '5. Personnel & Salaires',
        items: [
          'Suivi des enseignants et du personnel administratif',
          'Gestion et enregistrement des salaires'
        ]
      },
      {
        category: '6. Contrôle des coûts',
        items: [
          'Enregistrement rigoureux de toutes les dépenses de l’établissement'
        ]
      },
      {
        category: '7. 8 Rapports financiers en 1 clic',
        items: [
          'Rapports mensuel, annuel, par classe, des paiements, des dépenses, bancaire, des salaires et de recouvrement',
          'Exports prêts à l’emploi aux formats PDF et Excel'
        ]
      },
      {
        category: '8. Assistant IA intégré',
        items: [
          'Guidage pas à pas sur plus de 20 workflows documentés',
          'Assistance disponible 24/7 pour la formation des équipes'
        ]
      },
      {
        category: '9. Sécurité & Droits d’accès',
        items: [
          'Rôles étanches : Super Admin, Administrateur, Caissière, Comptable, Enseignant',
          'Rapports financiers strictement confidentiels réservés à la Direction'
        ]
      }
    ],
    features: [
      'Tableau de bord en temps réel (entrées, dépenses, solde caisse et solde banque)',
      'Encaissement rapide en 5 étapes (espèces, chèque, virement) et reçu numéroté sécurisé',
      'Notification instantanée de paiement envoyée aux parents via WhatsApp',
      'Gestion de trésorerie, transferts caisse-banque et journal d’audit complet',
      'Gestion des enseignants, suivi du personnel et calcul des salaires',
      '8 rapports financiers générés en 1 clic avec exports PDF et Excel',
      'Assistant IA intégré guidant les utilisateurs sur plus de 20 procédures 24/7',
      'Contrôle d’accès strict par profil (Directeur, Comptable, Caissière, Enseignant)'
    ],
    benefits: [
      'Centralisation des opérations scolaires',
      'Meilleure traçabilité des flux financiers',
      'Suivi des opérations de caisse et de banque',
      'Automatisation des rapports financiers',
      'Sécurisation des accès selon les profils utilisateurs'
    ],
    image: 'https://documentation-csp.cooldigital.africa/tb.png',
    liveUrl: 'https://documentation-csp.cooldigital.africa/',
    // Backward compatibility aliases
    clientType: 'Solution conçue par Cool Digital',
    clientName: 'Projet interne Cool Digital',
    problem: 'Registres papier vulnérables, reçus manuscrits, calculs manuels sur Excel et difficultés de suivi des impayés.',
    result: 'Plateforme centralisée, traçabilité financière totale, reçus sécurisés et pilotage en temps réel.'
  },
  {
    id: 'site-vitrine-responsive',
    title: 'Site internet vitrine responsive',
    category: 'Création de sites internet',
    categorySlug: 'sites-web',
    projectType: 'Projet de démonstration',
    projectOwner: 'Démonstration Cool Digital',
    targetSector: 'PME / Entreprise',
    shortDescription: 'Conception d’un site internet vitrine moderne, responsive et optimisé pour présenter une entreprise, ses services et ses moyens de contact.',
    objective: 'Permettre à une entreprise de disposer d’une présence professionnelle en ligne et de faciliter la prise de contact avec ses prospects.',
    solution: 'Conception d’un site vitrine moderne et responsive (adapté à l’ensemble des écrans mobiles, tablettes et ordinateurs), doté d’une navigation fluide, de boutons d’appel et WhatsApp directs, et de CTA stratégiques.',
    featureCategories: [
      {
        category: '1. Architecture & Structure du site',
        items: [
          'Page d’accueil moderne et engageante',
          'Présentation claire de l’entreprise',
          'Présentation détaillée des services',
          'Section réalisations & portfolio',
          'Page À propos & Contact direct'
        ]
      },
      {
        category: '2. Prise de contact & Conversion',
        items: [
          'Intégration du bouton WhatsApp officiel',
          'Boutons d’appel téléphonique direct',
          'Formulaire de contact et demande de devis',
          'Call-To-Action (CTA) de prise de contact'
        ]
      },
      {
        category: '3. Conception Responsive & Ergonomie',
        items: [
          'Design responsive haute fidélité',
          'Adaptation mobile, tablette et ordinateur',
          'Navigation claire, fluide et intuitive',
          'Affichage optimisé pour connexion rapide'
        ]
      }
    ],
    features: [
      'Page d’accueil',
      'Présentation de l’entreprise',
      'Présentation des services',
      'Réalisations',
      'À propos',
      'Contact',
      'Bouton WhatsApp',
      'Design responsive',
      'Adaptation mobile, tablette et ordinateur',
      'Navigation claire',
      'CTA de prise de contact'
    ],
    expectedResult: 'Présence professionnelle en ligne renforçant la crédibilité de l’entreprise et facilitant les prises de contact directes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    clientType: 'Projet de démonstration',
    clientName: 'Démonstration — Site Vitrine Responsive',
    problem: 'Manque de visibilité professionnelle sur le web et absence de canal direct pour convertir les visiteurs.',
    result: 'Site vitrine responsive, moderne et clair avec boutons WhatsApp et appels directs.'
  },
  {
    id: 'site-web-sur-mesure-seo',
    title: 'Site web sur-mesure — Pages dédiées par service & SEO',
    category: 'Création de sites internet',
    categorySlug: 'sites-web',
    projectType: 'Projet de démonstration',
    projectOwner: 'Démonstration Cool Digital',
    targetSector: 'PME / Entreprise de services',
    shortDescription: 'Conception d’un site web sur-mesure avec une architecture pensée autour des différents services de l’entreprise et une optimisation SEO adaptée à chaque page.',
    objective: 'Construire une présence digitale plus complète permettant à chaque activité de l’entreprise de disposer de sa propre page et d’améliorer sa visibilité dans les moteurs de recherche.',
    solution: 'Développement d’une plateforme web sur-mesure multi-pages avec une arborescence dédiée par service, des optimisations SEO on-page complètes (Title, Meta descriptions, URLs propres, données structurées) et des CTA ciblés.',
    featureCategories: [
      {
        category: '1. Architecture & Pages par service',
        items: [
          'Page d’accueil structurée et orientée conversion',
          'Pages dédiées à chaque service de l’entreprise',
          'Pages de présentation détaillées des offres',
          'Section réalisations & études de cas',
          'Module FAQ interactif par catégorie',
          'Page Contact complète et géolocalisée'
        ]
      },
      {
        category: '2. Optimisation SEO On-Page',
        items: [
          'SEO on-page sur l’ensemble des pages',
          'Balises title personnalisées et optimisées',
          'Meta descriptions rédigées pour le clic',
          'URLs propres, courtes et sémantiques',
          'Données structurées (Schema.org) intégrées'
        ]
      },
      {
        category: '3. Responsive & Conversion',
        items: [
          'Design 100% responsive multi-supports',
          'CTA spécifiques contextualisés par service',
          'Navigation optimisée avec maillage interne',
          'Prise de contact rapide via WhatsApp & formulaire'
        ]
      }
    ],
    features: [
      'Page d’accueil',
      'Pages dédiées à chaque service',
      'Pages de présentation détaillées',
      'Réalisations / études de cas',
      'FAQ',
      'Contact',
      'SEO on-page',
      'Balises title personnalisées',
      'Meta descriptions',
      'URLs propres',
      'Données structurées',
      'Design responsive',
      'CTA par service',
      'Navigation optimisée'
    ],
    expectedResult: 'Plateforme web complète valorisant chaque pôle d’activité, avec une structure optimisée pour le référencement naturel et l’acquisition de leads.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    clientType: 'Projet de démonstration',
    clientName: 'Démonstration — Site Web Sur-Mesure & SEO',
    problem: 'Offre diversifiée difficile à valoriser sur un site mono-page et visibilité insuffisante sur les recherches ciblées.',
    result: 'Architecture multi-pages optimisée SEO avec des pages dédiées par activité et parcours de contact direct.'
  },
  {
    id: '2',
    title: 'Solution de Gestion de Stock — Exemple pour entreprise de négoce',
    category: 'Logiciels sur-mesure',
    categorySlug: 'logiciels',
    projectType: 'Projet de démonstration',
    targetSector: 'Exemple pour entreprise de négoce & commerce',
    objective: 'Prévenir les erreurs de facturation manuelle sur Excel et centraliser le suivi des entrées/sorties de marchandise.',
    solution: 'Développement d’un logiciel métier sur-mesure utilisable sur tablette, ordinateur et smartphone.',
    features: [
      'Édition rapide de devis et factures avec génération PDF',
      'Suivi automatique des stocks et alerte de seuil de réapprovisionnement',
      'Fichier clients/fournisseurs centralisé et historique des règlements',
      'Accès sécurisé avec rôles différenciés (Caisse, Stock, Direction)'
    ],
    expectedResult: 'Facturation automatique sans erreur de calcul et vision en temps réel de la disponibilité du stock.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    // Backward compatibility aliases
    clientType: 'Projet de démonstration',
    clientName: 'Exemple — Négoce & Distribution',
    problem: 'Prévenir les erreurs de facturation manuelle sur Excel et centraliser le suivi des stocks.',
    result: 'Facturation automatique sans erreur de calcul et vision en temps réel sur l’état du stock.'
  },
  {
    id: '3',
    title: 'Solution de Maintenance IT — Exemple pour cabinet professionnel',
    category: 'Maintenance & Sécurité',
    categorySlug: 'maintenance',
    projectType: 'Projet de démonstration',
    targetSector: 'Exemple pour cabinet professionnel & PME',
    objective: 'Éliminer les pannes d’ordinateurs répétitives, sécuriser le réseau local et protéger les fichiers confidentiels.',
    solution: 'Mise en place d’un plan de maintenance préventive, déploiement d’antivirus centralisés, sauvegarde Cloud et hotline dédiée.',
    features: [
      'Audit initial et révision matérielle complète du parc informatique',
      'Nettoyage système et installation d’antivirus professionnels',
      'Système de sauvegarde automatique quotidienne sur Cloud sécurisé',
      'Assistance technique réactive sur ligne WhatsApp prioritaire'
    ],
    expectedResult: 'Parc informatique fluide, protection renforcée contre les pannes et continuité de travail garantie.',
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80',
    // Backward compatibility aliases
    clientType: 'Projet de démonstration',
    clientName: 'Exemple — Cabinet Professionnel',
    problem: 'Éliminer les pannes d’ordinateurs répétitives et sécuriser les données de l’entreprise.',
    result: 'Parc informatique fluide, protection renforcée contre les pannes et continuité de travail garantie.'
  },
  {
    id: '4',
    title: 'Stratégie Digitale — Exemple pour établissement touristique & restauration',
    category: 'Réseaux Sociaux',
    categorySlug: 'community-management',
    projectType: 'Projet de démonstration',
    targetSector: 'Exemple pour établissement touristique & restauration',
    objective: 'Donner une visibilité attrayante à l’établissement sur Facebook et Instagram avec des contenus visuels professionnels.',
    solution: 'Création d’un calendrier éditorial mensuel, conception de visuels HD et animation de la communauté.',
    features: [
      'Planning mensuel de publication validé à l’avance',
      'Conception graphique personnalisée (visuels, carrousels, vidéos de présentation)',
      'Rédaction d’accroches engageantes et modération des commentaires',
      'Bouton de réservation et demande d’information connecté à WhatsApp'
    ],
    expectedResult: 'Mise en valeur continue de l’établissement et canal de réservation direct via WhatsApp.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    // Backward compatibility aliases
    clientType: 'Projet de démonstration',
    clientName: 'Exemple — Hôtellerie & Restauration',
    problem: 'Donner une visibilité attrayante à l’établissement sur les réseaux sociaux.',
    result: 'Mise en valeur continue de l’établissement et canal de réservation direct via WhatsApp.'
  }
];


