import React from 'react';
import { PACKAGES_DATA } from '../data/packages';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Star, ShieldCheck, MessageSquare, Sparkles, RefreshCw } from 'lucide-react';
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
    <div className="py-12 md:py-16 bg-[#F8FAFC]">
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
          badgeText="Accompagnement Global"
          badgeVariant="orange"
          title="Nos Packages Tout-en-Un"
          subtitle="Combinez la puissance du digital, la sécurité de votre parc informatique et le suivi continu dans des offres claires et adaptées à votre croissance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-white border-2 border-emerald-500 shadow-xl relative ring-4 ring-emerald-500/10'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              <div>
                {/* Popular Ribbon */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {pkg.badge}
                  </div>
                )}

                {/* Header Top & Badge */}
                <div className="h-7 flex items-center mb-3">
                  {pkg.isPopular ? null : pkg.badge ? (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 inline-block border border-slate-200">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                {/* Card Intro Block (Aligned vertically across cards) */}
                <div className="lg:min-h-[165px] flex flex-col justify-start mb-6">
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-1.5">
                    {pkg.name}
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 mb-2">
                    Cible : <span className="font-medium text-slate-600">{pkg.targetAudience}</span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Bloc Tarification */}
                <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200/80 mb-6 space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/70">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Création initiale :</span>
                    <span className="text-sm font-extrabold text-[#0F172A] text-right">
                      {pkg.pricing.initialCreation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Abonnement mensuel :</span>
                    <span className="text-xs font-extrabold text-emerald-700 text-right">
                      {pkg.pricing.monthlySubscription}
                    </span>
                  </div>
                </div>

                {/* Bloc Services Inclus (Séparé en deux listes) */}
                <div className="space-y-6 mb-8">
                  {/* PHASE CRÉATION */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Phase Création</span>
                    </div>
                    <div className="space-y-2 pl-1">
                      {pkg.creationPhase.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SUIVI & ABONNEMENT */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                      <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Suivi &amp; Abonnement</span>
                    </div>
                    <div className="space-y-2 pl-1">
                      {pkg.subscriptionPhase.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
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

