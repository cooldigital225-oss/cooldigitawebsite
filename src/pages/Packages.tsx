import React from 'react';
import { PACKAGES_DATA } from '../data/packages';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Star, ShieldCheck, MessageSquare } from 'lucide-react';
import { createWhatsappLink } from '../utils/whatsapp';
import { CTASection } from '../components/sections/CTASection';
import { SeoHead } from '../components/seo/SeoHead';

export interface PackagesProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const PackagesPage: React.FC<PackagesProps> = ({
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  return (
    <div className="py-12 md:py-16">
      <SeoHead
        title="Packages &amp; Tarifs Informatiques Abidjan | CoolDigital 360°"
        description="Offres et packages tout-en-un par CoolDigital 360° pour PME, écoles et entreprises en Côte d'Ivoire. Combinez site web, logiciel ERP, maintenance et formation avec un tarif transparent."
        keywords={[
          'tarif site web abidjan',
          "package informatique entreprise côte d'ivoire",
          'prix création site internet abidjan',
          'forfait maintenance informatique abidjan'
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

        <SectionHeader
          badgeText="Accompagnement Globale"
          badgeVariant="orange"
          title="Nos Packages Tout-en-Un"
          subtitle="Combinez la puissance du web, la sécurité de votre informatique et le développement de vos compétences dans des offres claires et adaptées."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all ${
                pkg.isPopular
                  ? 'bg-white border-2 border-emerald-500 shadow-xl relative'
                  : 'bg-white border border-slate-200 shadow-xs'
              }`}
            >
              <div>
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {pkg.badge}
                  </div>
                )}

                {!pkg.isPopular && pkg.badge && (
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 mb-3 inline-block">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs font-semibold text-emerald-600 mb-2">
                  Cible : {pkg.targetAudience}
                </p>

                <p className="text-sm text-[#475569] mb-6">
                  {pkg.tagline}
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6 text-center">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Tarification</span>
                  <span className="text-lg font-extrabold text-[#0F172A]">{pkg.priceDisplay}</span>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Services inclus :</div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <Button
                  variant={pkg.isPopular ? 'primary' : 'outline'}
                  fullWidth
                  onClick={() => onOpenQuoteModal(pkg.id)}
                  icon={<ShieldCheck className="w-4 h-4" />}
                >
                  {pkg.ctaText}
                </Button>
                <Button
                  variant="whatsapp"
                  fullWidth
                  size="sm"
                  onClick={() => window.open(createWhatsappLink(`Bonjour, je souhaite en savoir plus sur l'offre "${pkg.name}".`), '_blank')}
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Renseignements WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};
