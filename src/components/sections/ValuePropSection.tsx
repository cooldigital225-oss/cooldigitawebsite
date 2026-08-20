import React from 'react';
import { XCircle, CheckCircle2, Shield, UserCheck, Clock, Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export interface ValuePropSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ValuePropSection: React.FC<ValuePropSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Sérénité &amp; Simplicité"
          badgeVariant="green"
          title="Gérer votre informatique et votre communication ne devrait pas être un casse‑tête."
          subtitle="Pannes informatiques répétitives, gestion administrative complexe, manque de visibilité web... Ne perdez plus votre temps et votre énergie à coordonner une multitude de prestataires."
        />

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Old way */}
          <div className="bg-white rounded-2xl border border-red-200 p-6 md:p-8 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-red-200">
              Méthode Classique
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0F172A]">Gérer 4 prestataires séparés</h3>
                <p className="text-xs text-slate-500">Complexité &amp; perte de temps</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Un dépanneur indépendant pour réinstaller un ordinateur en panne.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Une agence distante pour créer un site internet sans suivi régulier.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Un freelance pour publier de temps en temps sur vos réseaux sociaux.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Personne ne se sent responsable lorsque vos outils informatiques bloquent.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-red-100 bg-red-50/50 -mx-6 -mb-6 p-4 text-xs font-semibold text-red-800 text-center">
              ❌ Résultat : Perte de temps, factures éparpillées et stress permanent pour le dirigeant.
            </div>
          </div>

          {/* Card 2: Partner way */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500 p-6 md:p-8 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl">
              Notre Solution 360°
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0F172A]">Un interlocuteur unique dédié</h3>
                <p className="text-xs text-emerald-600 font-semibold">Sérénité &amp; Réactivité</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Un numéro unique</strong> pour résoudre toutes vos pannes informatiques sous 15-30 min.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Une équipe réactive</strong> pour concevoir vos logiciels métier et votre site internet.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Un accompagnement global</strong> pour former vos salariés et animer vos réseaux.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Un budget maîtrisé</strong> et lisible sans mauvaise surprise.</span>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-emerald-100 bg-emerald-50 -mx-6 -mb-6 p-4 text-xs font-semibold text-emerald-900 text-center">
              ✅ Résultat : Gain de temps, coût optimisé et sérénité totale pour votre structure.
            </div>
          </div>

        </div>

        {/* 4 Pillars Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-extrabold text-[#0F172A]">&lt; 15-30 min</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Délai moyen d'intervention IT</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-extrabold text-[#0F172A]">100% Sécurisé</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Sauvegardes &amp; Protection données</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <Layers className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-extrabold text-[#0F172A]">3 Pôles Inclus</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Digital, Support IT &amp; Visibilité</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <UserCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-extrabold text-[#0F172A]">Accompagnement</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Formations &amp; Suivi humain</div>
          </div>
        </div>

      </div>
    </section>
  );
};
