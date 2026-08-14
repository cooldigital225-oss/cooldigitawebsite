import React from 'react';
import { Search, FileText, Cpu, Rocket } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      title: 'Écoute & Cadrage',
      desc: 'Nous étudions vos processus, vos blocages informatiques ou vos objectifs de visibilité web.'
    },
    {
      num: '02',
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      title: 'Proposition & Validation',
      desc: 'Vous recevez un devis clair et transparent sans frais cachés, accompagné d’une feuille de route.'
    },
    {
      num: '03',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: 'Réalisation & Intégration',
      desc: 'Nous développons vos outils (sites, logiciels) ou remettons à neuf votre parc informatique.'
    },
    {
      num: '04',
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      title: 'Lancement & Suivi Continu',
      desc: 'Formations de vos équipes, maintenance régulière et assistance prioritaire 7j/7 sur WhatsApp.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Notre Méthode"
          badgeVariant="blue"
          title="Une démarche structurée pour des résultats concrets."
          subtitle="Pas de mauvaise surprise : chaque étape est validée en toute transparence avec vous."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between hover:border-emerald-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-[#0F172A]/20">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <span>Étape {idx + 1} sur 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
