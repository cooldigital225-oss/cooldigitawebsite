import React from 'react';
import { MessageSquare, ShieldCheck, Phone, CheckCircle2, Zap, Clock, UserCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { COMPANY_INFO } from '../../data/company';
import { createWhatsappLink } from '../../utils/whatsapp';

export interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200">
      {/* Background subtle mesh grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="green" icon={<Zap className="w-3.5 h-3.5 text-emerald-600" />}>
                Interlocuteur IT &amp; Digital Unique
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Support actif
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Ne perdez plus de temps entre 4 prestataires. <br />
              <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Un seul partenaire
              </span> pour toute votre informatique et votre web.
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-2xl">
              De la réparation de vos ordinateurs à la création de votre site internet ou de votre logiciel de gestion sur-mesure, nous sécurisons vos outils de travail et développons votre activité.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(createWhatsappLink(), '_blank')}
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Échanger sur WhatsApp
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
              >
                Demander un devis gratuit
              </Button>
            </div>

            {/* Quick emergency phone link */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-600">
              <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>Besoin d'un dépannage urgent ? Appelez : </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-bold text-[#0F172A] hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Assistance en &lt; 15-30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Adapté aux budgets PME</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero jargon technique</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Box / Card Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-slate-900 opacity-20 blur-lg"></div>

              <div className="relative bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Écosystème Digital 360°
                    </div>
                    <div className="text-lg font-extrabold text-[#0F172A]">
                      Vos 3 Pôles de Réussite
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[10px] font-bold">
                    100% Intégré
                  </span>
                </div>

                {/* 3 Pillars Summary Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">Solutions Digitales</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Création de sites internet vitrines/e-commerce &amp; logiciels de gestion sur-mesure.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">Accompagnement Technique</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Maintenance informatique, sécurité, sauvegardes &amp; dépannage d'urgence.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">Compétences &amp; Visibilité</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Community management pour vos réseaux sociaux &amp; formations de vos équipes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    Réponse WhatsApp : &lt; 15 min
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Suivi dédié
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
