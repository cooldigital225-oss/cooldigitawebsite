import React from 'react';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CTASection } from '../components/sections/CTASection';
import { SeoHead } from '../components/seo/SeoHead';

export interface ProjectsPageProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate = (_path?: string) => {},
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  return (
    <div>
      <SeoHead
        title="Projets &amp; Démonstrations | CoolDigital 360° Abidjan Côte d'Ivoire"
        description="Découvrez nos démonstrations et architectures de projets : sites web vitrines et e-commerce, applications web, logiciels ERP/CRM sur-mesure, maintenance de parc IT et gestion des réseaux sociaux."
        canonicalUrl="https://cooldigital.africa/projects"
        keywords={[
          'projets web abidjan',
          'démonstrations logiciels côte d ivoire',
          'exemples réalisations informatiques abidjan',
          'portfolio cooldigital 360'
        ]}
      />
      <ProjectsSection onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};

