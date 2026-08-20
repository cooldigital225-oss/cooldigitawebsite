export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  pole: 'solutions-digitales' | 'accompagnement-technique' | 'competences-visibilite';
  poleTitle: string;
  iconName: string;
  benefits: string[];
  includes: string[];
  ctaText: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  pole: 'solutions-digitales' | 'accompagnement-technique' | 'competences-visibilite';
  poleTitle: string;
  iconName: string;
  accentColor: 'emerald' | 'amber' | 'blue';
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  
  // 1. Problème client
  clientProblem: {
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
    consequence: string;
  };

  // 2. Solution sur-mesure
  ourSolution: {
    title: string;
    description: string;
    keyHighlights: string[];
    differentiator: string;
  };

  // 3. Bénéfices & ROI
  benefits: {
    icon: string;
    title: string;
    description: string;
    metric?: string;
  }[];

  // 4. Contenu de l'offre
  offerContent: {
    category: string;
    items: string[];
  }[];

  // 5. Processus
  processSteps: ProcessStep[];

  // 6. Éléments de confiance
  trustElements: {
    badge: string;
    title: string;
    clientCase: {
      clientName: string;
      clientType: string;
      objective?: string;
      quote?: string;
      result: string;
    };
    guarantees: string[];
  };

  // 7. FAQ spécifique
  faqs: FAQItem[];

  // 8. SEO Metadata & Structured Data
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    schemaType: string;
  };

  // 9. Internal Links
  relatedServices: {
    slug: string;
    title: string;
    reason: string;
  }[];
  recommendedPackageId: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  targetAudience: string;
  priceDisplay: string;
  pricing: {
    initialCreation: string;
    monthlySubscription: string;
  };
  creationPhase: string[];
  subscriptionPhase: string[];
  features?: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'sites-web' | 'logiciels' | 'maintenance' | 'community-management';
  projectType: string;
  projectOwner?: string;
  targetSector: string;
  shortDescription?: string;
  objective: string;
  solution: string;
  features: string[];
  featureCategories?: {
    category: string;
    items: string[];
  }[];
  problemsList?: string[];
  benefits?: string[];
  expectedResult?: string;
  image: string;
  liveUrl?: string;
  // Backward compatibility optional aliases
  clientType?: string;
  clientName?: string;
  problem?: string;
  result?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceType: string;
  projectDetails: string;
  urgency: 'normale' | 'urgente' | 'tres_urgente';
}
