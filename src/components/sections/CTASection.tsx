import React from 'react';
import { MessageSquare, ShieldCheck, Phone, Clock, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../data/company';
import { createWhatsappLink } from '../../utils/whatsapp';

export interface CTASectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 md:py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" />
          Un projet informatique ou un besoin urgent ?
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Propulsez votre activité et sécurisez votre infrastructure informatique au quotidien.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Que ce soit pour créer votre site web, développer un logiciel de gestion, sécuriser vos ordinateurs ou former vos salariés, nous sommes votre interlocuteur unique.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Button
            variant="whatsapp"
            size="lg"
            fullWidth
            onClick={() => window.open(createWhatsappLink(), '_blank')}
            icon={<MessageSquare className="w-5 h-5" />}
          >
            Discuter sur WhatsApp
          </Button>

          <Button
            variant="outline"
            size="lg"
            fullWidth
            onClick={onOpenQuoteModal}
            className="!bg-slate-800 !text-white !border-slate-700 hover:!bg-slate-700"
            icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
          >
            Demander un devis gratuit
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            Réponse garantie en &lt; 15 à 30 min
          </span>
          <span>•</span>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-white hover:text-emerald-400 font-bold transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            Urgence IT : {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
