import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ValuePropSection } from '../components/sections/ValuePropSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/sections/CTASection';
import { SeoHead } from '../components/seo/SeoHead';

export interface HomeProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate = (_path?: string) => {},
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  return (
    <div className="space-y-0">
      <SeoHead
        title="CoolDigital 360° Abidjan | Sites Web, Logiciels, Maintenance & Formations Côte d'Ivoire"
        description="CoolDigital 360° à Abidjan : création de sites internet, applications web, logiciels de gestion PME, maintenance informatique urgente et formations."
        keywords={[
          'entreprise informatique abidjan',
          "création site web côte d'ivoire",
          'logiciel de gestion abidjan',
          'maintenance informatique abidjan',
          "community manager côte d'ivoire",
          'formation informatique abidjan'
        ]}
      />
      <Hero onOpenQuoteModal={() => onOpenQuoteModal()} onNavigate={onNavigate} />
      <ValuePropSection onOpenQuoteModal={() => onOpenQuoteModal()} />
      <ServicesSection onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <ProcessSection />
      <ProjectsSection onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <FAQSection />
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};

