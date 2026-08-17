import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { HeroDigitalEcosystem3D } from '../ui/HeroDigitalEcosystem3D';

export interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const handleSecondaryClick = () => {
    if (onNavigate) {
      onNavigate('/services');
    } else {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200"
    >
      {/* Background subtle mesh grid pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ------------------------------------------------------------- */}
          {/* LEFT COLUMN: 60% Copywriting & Conversion Focus */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Badge */}
            <div 
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-bold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>COOL DIGITAL · SOLUTIONS IT &amp; DIGITALES</span>
            </div>

            {/* H1 Principal */}
            <h1 
              id="hero-h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
            >
              Tout le digital dont votre entreprise a besoin.
            </h1>

            {/* Description */}
            <p 
              id="hero-description"
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              Sites web, logiciels de gestion, support informatique, réseaux sociaux et formations : Cool Digital accompagne les entreprises dans la création, la gestion et l'évolution de leurs solutions numériques.
            </p>

            {/* CTAs (Principal & Secondaire) */}
            <div 
              id="hero-actions"
              className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <button
                id="hero-cta-primary"
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="w-4 h-4 text-emerald-100" />
              </button>

              <button
                id="hero-cta-secondary"
                type="button"
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-[#0F172A] border border-slate-300 hover:border-slate-400 font-bold text-sm sm:text-base transition-all duration-150 shadow-2xs cursor-pointer"
              >
                <span>Découvrir nos services</span>
              </button>
            </div>

            {/* Micro-preuve locale */}
            <div 
              id="hero-micro-proof"
              className="pt-1 flex items-center gap-2 text-xs font-semibold text-slate-500"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Abidjan • Côte d'Ivoire</span>
            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT COLUMN: 40% 3D Digital Ecosystem Hub */}
          {/* On mobile: placed cleanly below the content without clutter */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-5 w-full flex items-center justify-center pt-2 lg:pt-0">
            <HeroDigitalEcosystem3D />
          </div>

        </div>
      </div>
    </section>
  );
};
