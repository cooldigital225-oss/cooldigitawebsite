import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SERVICES_DATA } from '../data/services';
import { DETAILED_SERVICES_DATA } from '../data/detailedServices';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { createServiceWhatsappLink } from '../utils/whatsapp';
import { CTASection } from '../components/sections/CTASection';
import { SeoHead } from '../components/seo/SeoHead';

export interface ServicesProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

const POLE_CONFIG = [
  { id: 'solutions-digitales', badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-100' },
  { id: 'accompagnement-technique', badgeClass: 'bg-amber-50 text-amber-800 border border-amber-100' },
  { id: 'competences-visibilite', badgeClass: 'bg-blue-50 text-blue-800 border border-blue-100' }
];

export const ServicesPage: React.FC<ServicesProps> = ({
  onNavigate = (_path?: string) => {},
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  return (
    <div className="py-12 md:py-16 bg-[#F8FAFC]">
      <SeoHead
        title="Services IT &amp; Solutions Digitales à Abidjan | CoolDigital 360°"
        description="Découvrez nos pôles d'expertise IT à Abidjan : création web, applications web, logiciels ERP, maintenance informatique, community management et formations professionnelles."
        keywords={[
          'services informatiques abidjan',
          "création site web côte d'ivoire",
          'applications web abidjan',
          'logiciel de gestion entreprise abidjan',
          'dépannage informatique abidjan',
          "community management côte d'ivoire",
          'formation professionnelle informatique'
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

        <SectionHeader
          badgeText="Catalogue &amp; Pôles d'Expertise"
          badgeVariant="green"
          title="Nos Domaines de Services &amp; Solutions IT"
          subtitle="Sélectionnez un service pour découvrir l'offre détaillée, nos engagements, notre processus de travail et nos tarifs."
        />

        <div className="space-y-16">
          {POLE_CONFIG.map((pole) => {
            const poleServices = SERVICES_DATA.filter(service => service.pole === pole.id);
            if (poleServices.length === 0) return null;

            return (
              <div key={pole.id}>
                {/* Pole Header */}
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span className={`px-3.5 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-wider ${pole.badgeClass}`}>
                    {poleServices[0].poleTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {poleServices.map((service) => {
                    const detailed = DETAILED_SERVICES_DATA[service.slug];
                    const tagline = detailed ? detailed.tagline : service.shortDesc;

                    return (
                      <Card key={service.id} className="flex flex-col justify-between border-slate-200 hover:border-emerald-300 transition-all">
                        <div>
                          <div className="flex items-center justify-end mb-3">
                            <button
                              onClick={() => {
                                onNavigate(`/services/${service.slug}`);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-0.5 cursor-pointer"
                            >
                              Détails
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
                            {service.title}
                          </h3>

                          <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
                            {tagline}
                          </p>

                          <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Périmètre inclus :</div>
                            {service.includes.slice(0, 4).map((inc, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-slate-100">
                          <Button
                            variant="primary"
                            fullWidth
                            size="sm"
                            onClick={() => {
                              onNavigate(`/services/${service.slug}`);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            icon={<ArrowRight className="w-4 h-4" />}
                            iconPosition="right"
                          >
                            Voir l'offre détaillée &amp; Tarifs
                          </Button>

                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onOpenQuoteModal(service.id)}
                              icon={<ShieldCheck className="w-3.5 h-3.5" />}
                            >
                              Devis gratuit
                            </Button>

                            <Button
                              variant="whatsapp"
                              size="sm"
                              onClick={() => window.open(createServiceWhatsappLink(service.title), '_blank')}
                              icon={<MessageSquare className="w-3.5 h-3.5" />}
                            >
                              WhatsApp
                            </Button>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CTASection onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};
