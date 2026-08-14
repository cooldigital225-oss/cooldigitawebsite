import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { COMPANY_INFO } from '../data/company';
import { Clock, Shield, CheckCircle2, UserCheck, HeartHandshake } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import { SeoHead } from '../components/seo/SeoHead';

export interface AboutProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutProps> = ({
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  return (
    <div className="py-12 md:py-16">
      <SeoHead
        title="À Propos | CoolDigital 360° Abidjan Côte d'Ivoire"
        description="Découvrez CoolDigital 360°, votre structure informatique & digitale à Abidjan (Koumassi). Réactivité, proximité et expertise pour PME et entreprises."
        keywords={[
          'à propos cooldigital 360 abidjan',
          "entreprise ssii côte d'ivoire",
          'agence informatique abidjan',
          'prestataire informatique abidjan'
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

        <SectionHeader
          badgeText="À Propos de nous"
          badgeVariant="navy"
          title="Nous sommes le partenaire technique qui simplifie le numérique pour votre entreprise."
          subtitle="Notre mission est de sécuriser le matériel informatique des PME, développer leurs outils digitaux et booster leur visibilité avec un interlocuteur unique."
        />

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xs mb-12 space-y-6">
          <h3 className="text-2xl font-extrabold text-[#0F172A]">Notre Philosophie &amp; Notre Approche</h3>
          <p className="text-base text-[#475569] leading-relaxed">
            Dans un écosystème où les entreprises locales doivent souvent jongler entre un dépanneur informatique, une agence web, un développeur freelance et un consultant marketing, notre structure <strong>CoolDigital 360°</strong> se positionne comme un interlocuteur unique de confiance.
          </p>
          <p className="text-base text-[#475569] leading-relaxed">
            Nous éliminons les rejets de responsabilité entre prestataires : qu'il s'agisse d'un ordinateur bloqué à 8h du matin, d'un besoin de logiciel de gestion pour vos stocks à midi, ou de la création de votre site web pour attirer de nouveaux prospects, notre équipe prend tout en charge.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Clock className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="text-lg font-bold text-[#0F172A] mb-2">1. La Réactivité</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Un problème informatique n’attend pas. Nous intervenons en moins de 15 à 30 minutes sur site ou à distance pour débloquer votre activité.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Shield className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="text-lg font-bold text-[#0F172A] mb-2">2. La Clarté</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pas de jargon technique incompréhensible. Nous vous expliquons chaque action en langage simple et transparent.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <UserCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="text-lg font-bold text-[#0F172A] mb-2">3. L'Efficacité Métier</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nous créons des outils qui vous font gagner du temps et de la rentabilité : logiciels sur-mesure, sites axés conversion, formations pratiques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <HeartHandshake className="w-8 h-8 text-emerald-600 mb-3" />
            <h4 className="text-lg font-bold text-[#0F172A] mb-2">4. La Proximité</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Une relation humaine, de confiance et de long terme avec un accompagnement sur-mesure pour chaque client.
            </p>
          </div>
        </div>
      </div>

      <CTASection onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};
