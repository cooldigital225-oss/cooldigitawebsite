import React from 'react';
import { Globe, LayoutGrid, AppWindow, Wrench, Share2, GraduationCap, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { createServiceWhatsappLink } from '../../utils/whatsapp';

export interface ServicesSectionProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const POLE_CONFIG = [
  { id: 'solutions-digitales', badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-100' },
  { id: 'accompagnement-technique', badgeClass: 'bg-amber-50 text-amber-800 border border-amber-100' },
  { id: 'competences-visibilite', badgeClass: 'bg-blue-50 text-blue-800 border border-blue-100' }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6 text-emerald-600" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-emerald-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-600" />;
      default: return <Globe className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Nos Domaines d'Expertise"
          badgeVariant="navy"
          title="Tout ce dont votre structure a besoin pour tourner à plein régime."
          subtitle="Découvrez nos 3 pôles de services conçus pour répondre précisément à chacun de vos besoins informatiques, digitaux et humains."
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {poleServices.map((service) => (
                    <Card
                      key={service.id}
                      className="flex flex-col justify-between border-slate-200 hover:border-emerald-300 transition-all"
                    >
                      <div>
                        {/* Header Icon */}
                        <div className="flex items-center justify-end mb-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                            {getIcon(service.iconName)}
                          </div>
                        </div>

                        {/* Service Title */}
                        <h3 className="text-xl font-extrabold text-[#0F172A] mb-2.5">
                          {service.title}
                        </h3>

                        <p className="text-sm text-[#475569] leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>

                        {/* Key Benefits List */}
                        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Points forts :
                          </div>
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <Button
                          variant="primary"
                          fullWidth
                          size="sm"
                          onClick={() => onOpenQuoteModal(service.id)}
                          icon={<ArrowRight className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          {service.ctaText}
                        </Button>

                        <Button
                          variant="whatsapp"
                          fullWidth
                          size="sm"
                          onClick={() => window.open(createServiceWhatsappLink(service.title), '_blank')}
                          icon={<MessageSquare className="w-4 h-4" />}
                        >
                          Discuter sur WhatsApp
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
