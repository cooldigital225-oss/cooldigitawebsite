import { ChatMessage, ChatSuggestion, ChatActionLink } from '../types/chat';
import { COMPANY_INFO } from '../data/company';

export const INITIAL_SUGGESTIONS: ChatSuggestion[] = [
  { label: '🌐 Création de site web', query: 'création de site web' },
  { label: '💻 Applications web', query: 'applications web' },
  { label: '🛒 E-commerce', query: 'site e-commerce' },
  { label: '🎓 Formations informatiques & IA', query: 'formations informatiques et IA' },
  { label: '🤖 Solutions IA & automatisation', query: 'solutions IA et automatisation' },
  { label: '💬 Demander un devis', query: 'demander un devis' }
];

export const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-msg',
  sender: 'bot',
  text: `Bonjour 👋 Bienvenue chez **CoolDigital 360°**.\n\nJe suis votre assistant virtuel. Comment puis-je vous aider ?`,
  timestamp: Date.now(),
  suggestions: INITIAL_SUGGESTIONS
};

interface ResponseTemplate {
  keywords: string[];
  reply: string;
  actionLinks?: ChatActionLink[];
  suggestions?: ChatSuggestion[];
}

const KNOWLEDGE_BASE: ResponseTemplate[] = [
  // 1. Formations Informatiques & IA
  {
    keywords: [
      'formation', 'formations', 'ia', 'intelligence artificielle', 'chatgpt', 'cours', 'apprendre', 'bureautique', 'excel', 'word', 'prompt', 'monter en competence', 'competence'
    ],
    reply: `🎓 **Formations Informatiques & Intelligence Artificielle (IA)** chez CoolDigital 360° :

Nos sessions sont **100% pratiques** et dispensées dans vos locaux ou en ligne :

• **Formation en Intelligence Artificielle (IA) :** Maîtriser ChatGPT et les outils d'IA générative pour rédiger 3x plus vite, analyser des données, créer du contenu et automatiser des tâches du quotidien.
• **Bureautique Essentielle & Avancée :** Excel (tableaux croisés, formules avancées, gestion des stocks), Word et PowerPoint.
• **Cybersécurité & Bonnes Pratiques :** Protection contre les arnaques, mots de passe et sécurisation des données.
• **Outils Métiers & Logiciels internes :** Prise en main rapide de vos applications.

Attestation officielle de formation remise à chaque participant.`,
    actionLinks: [
      { label: 'Voir le programme Formations & IA', type: 'navigate', path: '/services/formations-informatiques' },
      { label: 'Demander un devis formation', type: 'quote', serviceId: 'formations-informatiques' },
      { label: 'Discuter sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'En savoir plus sur l’IA', query: 'solutions IA et automatisation' },
      { label: 'Tarifs des formations', query: 'quel est le tarif des formations ?' },
      { label: 'Voir les autres services', query: 'quels sont vos services ?' }
    ]
  },

  // 2. Applications Web
  {
    keywords: [
      'application web', 'applications web', 'app web', 'saas', 'portail', 'espace membre', 'plateforme web', 'dashboard', 'espace client'
    ],
    reply: `💻 **Développement d'Applications Web Sur-Mesure** :

Nous créons des plateformes web modernes, rapides et ultra-sécurisées accessibles 24/7 sans installation :

• **Portails clients & Espaces membres sécurisés**
• **Plateformes SaaS & Outils collaboratifs métiers**
• **Tableaux de bord interactifs & Statistiques en temps réel**
• **Intégration d'APIs tierces et paiements (Mobile Money, Carte)**
• **Architecture Cloud évolutive et responsive**

Votre application est développée selon votre cahier des charges avec un accompagnement complet.`,
    actionLinks: [
      { label: 'Découvrir les Applications Web', type: 'navigate', path: '/services/applications-web' },
      { label: 'Demander un devis App Web', type: 'quote', serviceId: 'applications-web' },
      { label: 'Échanger avec un développeur', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Différence avec un logiciel de gestion ?', query: 'logiciels de gestion' },
      { label: 'Demander un devis', query: 'demander un devis' },
      { label: 'Délais de développement', query: 'quels sont vos délais ?' }
    ]
  },

  // 3. Logiciels de Gestion / ERP / CRM
  {
    keywords: [
      'logiciel', 'logiciels', 'logiciel de gestion', 'erp', 'crm', 'remplacer excel', 'stock', 'facturation', 'facture', 'inventaire', 'gestion pme'
    ],
    reply: `📊 **Logiciels de Gestion Sur-Mesure (ERP / CRM)** :

Fini les erreurs de saisie et les pertes de temps sur Excel ! Nous concevons une plateforme métier simple et sécurisée :

• **Gestion des stocks & alertes de réapprovisionnement**
• **Facturation, devis et suivi des paiements clients**
• **Gestion des clients/élèves/fournisseurs**
• **Accès multi-utilisateurs avec permissions sécurisées**
• **Exports automatiques en PDF et Excel**

La solution idéale pour structurer et automatiser votre PME en Côte d'Ivoire.`,
    actionLinks: [
      { label: 'Voir les Logiciels de Gestion', type: 'navigate', path: '/services/logiciels-de-gestion' },
      { label: 'Demander une démonstration', type: 'quote', serviceId: 'logiciels-de-gestion' },
      { label: 'Discuter sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Applications web', query: 'applications web' },
      { label: 'Demander un devis', query: 'demander un devis' }
    ]
  },

  // 4. Création de sites web / Vitrine
  {
    keywords: [
      'site web', 'site internet', 'creation site', 'creer un site', 'site vitrine', 'site pro', 'visibilite google', 'seo'
    ],
    reply: `🌐 **Création de Sites Internet Professionnels** :

Nous développons des sites web performants conçus pour rassurer vos clients et générer des contacts qualifiés :

• **Design sur-mesure & professionnel** adapté à votre marque
• **Boutons WhatsApp & Appel direct** intégrés pour convertir instantanément
• **Chargement ultra-rapide** optimisé pour les connexions mobiles
• **Référencement naturel (SEO)** pour apparaître sur Google
• **Sécurité HTTPS & nom de domaine inclus**

Livraison clé en main avec formation pour modifier vos textes et photos en toute autonomie.`,
    actionLinks: [
      { label: 'Voir le service Site Internet', type: 'navigate', path: '/services/creation-site-internet' },
      { label: 'Demander un devis de site', type: 'quote', serviceId: 'creation-site-internet' },
      { label: 'Discuter sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Site E-commerce', query: 'site e-commerce' },
      { label: 'Quel est le prix d’un site ?', query: 'prix et packages' },
      { label: 'Voir des exemples', query: 'projets et réalisations' }
    ]
  },

  // 5. E-commerce & Boutique en ligne
  {
    keywords: [
      'e-commerce', 'ecommerce', 'boutique', 'boutique en ligne', 'vente en ligne', 'paiement en ligne', 'mobile money', 'wave', 'orange money'
    ],
    reply: `🛒 **Création de Boutiques E-commerce & Vente en ligne** :

Vendez vos produits 24h/24 avec une boutique fluide et adaptée aux réalités africaines :

• **Paiement sécurisé par Mobile Money (Wave, Orange Money, MTN MoMo) et Carte Bancaire**
• **Catalogue produits intuitif avec filtres et variantes**
• **Commandes directes transmises sur WhatsApp** pour simplifier la relation client
• **Gestion facile des stocks et des promotions**
• **Optimisation mobile pour une expérience d'achat instantanée**`,
    actionLinks: [
      { label: 'Demander un devis E-commerce', type: 'quote', serviceId: 'creation-site-internet' },
      { label: 'Parler de votre boutique sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Création de site web', query: 'création de site web' },
      { label: 'Community management', query: 'community management' }
    ]
  },

  // 6. Solutions IA & Automatisation
  {
    keywords: [
      'solutions ia', 'ia & automatisation', 'automatisation', 'intelligence artificielle', 'agent ia', 'chatbot', 'automatiser', 'digitalisation'
    ],
    reply: `🤖 **Solutions IA & Automatisation des Processus** :

CoolDigital 360° vous aide à intégrer l'Intelligence Artificielle au cœur de votre activité :

• **Assistants virtuels & Chatbots intelligents** pour votre service client
• **Automatisation des tâches répétitives** (génération de documents, saisie de données, emails)
• **Analyse automatisée de données d'entreprise**
• **Formation pratique des équipes à l'utilisation quotidienne de l'IA**

Gagnez des heures précieuses chaque semaine en automatisant vos flux de travail.`,
    actionLinks: [
      { label: 'Formation en IA', type: 'navigate', path: '/services/formations-informatiques' },
      { label: 'Demander un conseil IA sur-mesure', type: 'quote' },
      { label: 'Échanger sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Formations informatiques & IA', query: 'formations informatiques et IA' },
      { label: 'Applications web', query: 'applications web' }
    ]
  },

  // 7. Maintenance & Dépannage informatique
  {
    keywords: [
      'maintenance', 'depannage', 'panne', 'reparation', 'ordinateur', 'reseau', 'antivirus', 'sauvegarde', 'urgence', 'support', 'assistance'
    ],
    reply: `🛠️ **Maintenance & Dépannage Informatique d'Urgence** :

Protégez votre parc informatique et assurez la continuité de votre entreprise :

• **Intervention d'urgence en 15 à 30 minutes** (à distance ou sur site à Abidjan)
• **Contrats de maintenance préventive mensuelle** pour PME et écoles
• **Nettoyage, optimisation et révision matérielle**
• **Installation d'antivirus professionnels et sauvegardes automatiques Cloud**
• **Audit gratuit de votre parc informatique**`,
    actionLinks: [
      { label: 'Voir le service Maintenance', type: 'navigate', path: '/services/maintenance-depannage' },
      { label: 'Signaler une panne urgente', type: 'whatsapp' },
      { label: 'Demander un contrat de maintenance', type: 'quote', serviceId: 'maintenance-depannage' }
    ],
    suggestions: [
      { label: 'Packages d’accompagnement', query: 'packages et tarifs' },
      { label: 'Contacter le support d’urgence', query: 'contact et téléphone' }
    ]
  },

  // 8. Community Management & Réseaux Sociaux
  {
    keywords: [
      'community management', 'reseaux sociaux', 'facebook', 'instagram', 'linkedin', 'tiktok', 'visibilite', 'communication', 'posts', 'visuels'
    ],
    reply: `📱 **Community Management & Visibilité Digitale** :

Déléguez la gestion de vos réseaux sociaux à des spécialistes :

• **Création de visuels graphiques professionnels & vidéos courtes**
• **Rédaction persuasive des textes et calendrier éditorial mensuel**
• **Animation, modération et réponses rapides aux messages de vos clients**
• **Stratégie pour attirer de vrais prospects locaux qualifiés**
• **Rapport d'audience et de performance mensuel**`,
    actionLinks: [
      { label: 'Voir le Community Management', type: 'navigate', path: '/services/community-management' },
      { label: 'Demander un devis réseaux sociaux', type: 'quote', serviceId: 'community-management' },
      { label: 'Discuter sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Création de site web', query: 'création de site web' },
      { label: 'Demander un devis', query: 'demander un devis' }
    ]
  },

  // 9. Packages & Tarifs
  {
    keywords: [
      'prix', 'tarif', 'tarifs', 'combien', 'cout', 'coût', 'package', 'packages', 'offre', 'offres', 'budget'
    ],
    reply: `💼 **Packages & Offres Tout-en-Un CoolDigital 360°** :

Nous proposons des formules adaptées à chaque étape de votre développement :

1. **Offre Essentielle** *(Présence & Démarrage)* : Idéale pour démarrer avec un site vitrine rapide + présence Google + assistance technique de base.
2. **Offre Professionnelle** *(Croissance & Organisation)* : Site web complet ou application métier + maintenance proactive + gestion réseaux sociaux.
3. **Offre Premium** *(Accompagnement 360°)* : Externalisation totale de votre pôle IT, développement d'outils sur-mesure, maintenance prioritaire et formations régulières.

Chaque projet fait l'objet d'un **devis gratuit et transparent sans frais cachés**.`,
    actionLinks: [
      { label: 'Consulter tous les Packages', type: 'navigate', path: '/packages' },
      { label: 'Obtenir un Devis Personnalisé', type: 'quote' }
    ],
    suggestions: [
      { label: 'Demander un devis', query: 'demander un devis' },
      { label: 'Création de site web', query: 'création de site web' },
      { label: 'Formations & IA', query: 'formations informatiques et IA' }
    ]
  },

  // 10. Devis & Contact
  {
    keywords: [
      'devis', 'estimation', 'chiffrage', 'contacter', 'contact', 'telephone', 'numéro', 'whatsapp', 'email', 'adresse', 'localisation', 'koumassi', 'abidjan'
    ],
    reply: `📍 **Coordonnées & Prise de Contact CoolDigital 360°** :

• **Localisation :** ${COMPANY_INFO.address}
• **Téléphone :** [${COMPANY_INFO.phone}](tel:${COMPANY_INFO.phoneRaw})
• **WhatsApp officiel :** [${COMPANY_INFO.phone}](https://wa.me/${COMPANY_INFO.whatsappNumber})
• **Email :** ${COMPANY_INFO.email}
• **Horaires :** ${COMPANY_INFO.workingHours}

Vous pouvez remplir notre formulaire de devis gratuit ou nous écrire directement sur WhatsApp.`,
    actionLinks: [
      { label: 'Remplir une demande de devis', type: 'quote' },
      { label: 'Ouvrir WhatsApp directement', type: 'whatsapp' },
      { label: 'Appeler : ' + COMPANY_INFO.phone, type: 'call' }
    ],
    suggestions: [
      { label: 'Voir tous les services', query: 'quels sont vos services ?' },
      { label: 'Voir les packages', query: 'packages et tarifs' }
    ]
  },

  // 11. Délais de réalisation
  {
    keywords: [
      'delai', 'delais', 'temps', 'combien de temps', 'duree', 'rapidite'
    ],
    reply: `⏱️ **Nos délais moyens de réalisation :**

• **Dépannage informatique d'urgence :** Prise en charge sous 15 à 30 minutes.
• **Site web vitrine professionnel :** 5 à 10 jours ouvrés.
• **Site E-commerce :** 10 à 20 jours ouvrés.
• **Logiciels de gestion & Applications web :** 2 à 5 semaines selon la complexité des modules.
• **Formations :** Sessions programmables sous 48h à 72h selon vos disponibilités.

Nous nous engageons sur un planning clair dès la validation de votre devis.`,
    actionLinks: [
      { label: 'Lancer un projet rapidement', type: 'quote' },
      { label: 'Discuter sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: [
      { label: 'Création de site web', query: 'création de site web' },
      { label: 'Applications web', query: 'applications web' }
    ]
  },

  // 12. Présentation générale / Qui êtes-vous ?
  {
    keywords: [
      'qui', 'etes vous', 'qui est cooldigital', 'presentation', 'cooldigital 360', 'entreprise', 'societe', 'services', 'prestation', 'prestations'
    ],
    reply: `👋 **CoolDigital 360°** est votre structure de référence en Solutions & Support IT à Abidjan, Côte d'Ivoire.

Nous accompagnons les PME, écoles, commerces et professionnels sur 3 grands axes :

1. **Solutions Digitales :** Création de sites web vitrines & e-commerce, applications web modernes, logiciels de gestion sur-mesure (ERP / CRM).
2. **Accompagnement Technique :** Maintenance informatique d'urgence (30 min), réseaux, antivirus et sauvegardes.
3. **Compétences & Visibilité :** Formations pratiques (Bureautique & Intelligence Artificielle) et Community Management.

Un seul interlocuteur pour gérer l'ensemble de votre informatique et de votre présence digitale !`,
    actionLinks: [
      { label: 'Découvrir la page À Propos', type: 'navigate', path: '/about' },
      { label: 'Voir le Catalogue de Services', type: 'navigate', path: '/services' },
      { label: 'Demander un devis', type: 'quote' }
    ],
    suggestions: [
      { label: '🌐 Création de site web', query: 'création de site web' },
      { label: '💻 Applications web', query: 'applications web' },
      { label: '🎓 Formations & IA', query: 'formations informatiques et IA' }
    ]
  }
];

/**
 * Intelligent client-side matcher based strictly on verified CoolDigital 360° data.
 * Zero hallucination, fast, robust, and extensible for future API server integration.
 */
export async function getChatbotResponse(userMessage: string, _history: ChatMessage[] = []): Promise<ChatMessage> {
  const normalized = userMessage
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  // 1. Check knowledge base matches
  let bestMatch: ResponseTemplate | null = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of item.keywords) {
      const normKw = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      if (normalized.includes(normKw)) {
        // Give higher score for multi-word exact matches
        score += normKw.split(' ').length * 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // If a solid match is found
  if (bestMatch && highestScore > 0) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: bestMatch.reply,
      timestamp: Date.now(),
      actionLinks: bestMatch.actionLinks,
      suggestions: bestMatch.suggestions || INITIAL_SUGGESTIONS.slice(0, 3)
    };
  }

  // Fallback if no specific keyword matched: helpful guide with options
  return {
    id: `bot-${Date.now()}`,
    sender: 'bot',
    text: `Je peux vous renseigner sur l'ensemble des prestations de **CoolDigital 360°** à Abidjan :\n\n• **Création de sites web** (vitrines & e-commerce)\n• **Applications web** & plateformes SaaS\n• **Logiciels de gestion** (ERP/CRM, gestion de stock)\n• **Formations informatiques & Intelligence Artificielle (IA)**\n• **Maintenance & dépannage IT d'urgence**\n• **Community management**\n\nQue souhaitez-vous savoir ou quel est votre projet actuel ?`,
    timestamp: Date.now(),
    actionLinks: [
      { label: 'Demander un devis gratuit', type: 'quote' },
      { label: 'Échanger avec nous sur WhatsApp', type: 'whatsapp' }
    ],
    suggestions: INITIAL_SUGGESTIONS
  };
}
