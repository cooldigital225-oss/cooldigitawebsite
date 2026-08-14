import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    title: 'Solution de Gestion Scolaire — Projet de démonstration',
    category: 'Sites Web & Logiciels',
    categorySlug: 'sites-web',
    projectType: 'Projet de démonstration',
    targetSector: 'Exemple pour établissement scolaire & formation',
    objective: 'Digitaliser les demandes de pré-inscription pour éviter les longues files d’attente physique et centraliser les dossiers d’élèves.',
    solution: 'Conception d’un site web vitrine connecté à une plateforme de pré-inscription en ligne sécurisée.',
    features: [
      'Formulaire de pré-inscription en ligne avec pièces jointes',
      'Espace d’information et calendrier de rentrée pour les parents',
      'Affichage optimisé sur ordinateurs et smartphones (Mobile-First)',
      'Bouton d’interaction directe WhatsApp pour le service secrétariat'
    ],
    expectedResult: 'Traitement fluide des dossiers à distance et gestion simplifiée des inscriptions.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    // Backward compatibility aliases
    clientType: 'Projet de démonstration',
    clientName: 'Exemple — Secteur Éducation',
    problem: 'Digitaliser les demandes de pré-inscription pour éviter les longues files d’attente physique.',
    result: 'Traitement fluide des dossiers à distance et gestion simplifiée des inscriptions.'
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


