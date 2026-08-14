import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { createWhatsappLink } from '../../utils/whatsapp';

export interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About company */}
          <div className="space-y-4">
            <button
              onClick={() => handleLink('/')}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="CoolDigital 360° - Retour à l'accueil"
            >
              <img
                src="/logo-white.png"
                alt="CoolDigital 360°"
                className="h-11 sm:h-12 w-auto max-w-[210px] sm:max-w-[240px] object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY_INFO.slogan}. Un seul interlocuteur pour sécuriser votre informatique, développer vos outils web et booster votre visibilité.
            </p>
            <div className="pt-2">
              <a
                href={createWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Assistance WhatsApp directe</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLink('/services/creation-site-internet')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Création de Sites Internet
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/logiciels-de-gestion')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Logiciels de Gestion Sur-Mesure
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/applications-web')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Applications Web
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/maintenance-depannage')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Maintenance &amp; Dépannage IT
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/community-management')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Community Management
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/formations-informatiques')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Formations Informatiques
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLink('/')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/packages')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Packages &amp; Offres Globale
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/projects')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Nos Réalisations
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/about')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  À Propos de nous
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/contact')} className="hover:text-emerald-400 transition-colors text-slate-400 text-left">
                  Contact &amp; Demande de Devis
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Horaires */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
            <div className="mt-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold rounded-lg border border-slate-700 transition-colors text-center"
              >
                Demander un devis en ligne
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span>Solutions IT &amp; Web</span>
            <span>•</span>
            <span>Maintenance &amp; Support</span>
            <span>•</span>
            <span>Formations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
