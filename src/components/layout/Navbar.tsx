import React, { useState } from 'react';
import { MessageSquare, Menu, X, ChevronDown, Phone, Wrench, Globe, LayoutGrid, AppWindow, Share2, GraduationCap } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { createWhatsappLink } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

export interface NavbarProps {
  activePath: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePath,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top micro bar for emergency IT support */}
      <div className="bg-[#0F172A] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Assistance IT & Support disponible
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Intervention rapide en &lt; 15-30 min</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Support : {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">{COMPANY_INFO.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
          aria-label="CoolDigital 360° - Retour à l'accueil"
        >
          <img
            src="/logo.png"
            alt="CoolDigital 360°"
            className="h-14 sm:h-16 md:h-20 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain transition-opacity group-hover:opacity-90"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('/')}
            className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activePath === '/' ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
            }`}
          >
            Accueil
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('/services')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                activePath.startsWith('/services') ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
              }`}
            >
              <span>Nos Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-3 pt-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mt-1">
                  1. Solutions Digitales
                </div>
                <button
                  onClick={() => handleNavClick('/services/creation-site-internet')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div>Création de Sites Internet</div>
                    <div className="text-xs font-normal text-slate-500">Sites vitrines &amp; e-commerce</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/services/logiciels-de-gestion')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <LayoutGrid className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div>Logiciels de Gestion</div>
                    <div className="text-xs font-normal text-slate-500">Applications sur-mesure</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/services/applications-web')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <AppWindow className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div>Applications Web</div>
                    <div className="text-xs font-normal text-slate-500">Portails &amp; plateformes métiers</div>
                  </div>
                </button>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mt-2 border-t border-slate-100">
                  2. Accompagnement Technique
                </div>
                <button
                  onClick={() => handleNavClick('/services/maintenance-depannage')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <div>Maintenance &amp; Dépannage IT</div>
                    <div className="text-xs font-normal text-slate-500">Support d'urgence &amp; parc IT</div>
                  </div>
                </button>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mt-2 border-t border-slate-100">
                  3. Compétences &amp; Visibilité
                </div>
                <button
                  onClick={() => handleNavClick('/services/community-management')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div>Community Management</div>
                    <div className="text-xs font-normal text-slate-500">Gestion des réseaux sociaux</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/services/formations-informatiques')}
                  className="w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div>Formations Informatiques</div>
                    <div className="text-xs font-normal text-slate-500">Bureautique &amp; IA</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('/packages')}
            className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activePath === '/packages' ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
            }`}
          >
            Packages
          </button>

          <button
            onClick={() => handleNavClick('/projects')}
            className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activePath === '/realisations' || activePath === '/projects' ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
            }`}
          >
            Réalisations
          </button>

          <button
            onClick={() => handleNavClick('/about')}
            className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activePath === '/a-propos' || activePath === '/about' ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
            }`}
          >
            À Propos
          </button>

          <button
            onClick={() => handleNavClick('/contact')}
            className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activePath === '/contact' ? 'text-[#0F172A] bg-slate-100' : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons Header */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-sm hover:shadow-md focus:ring-[#0F172A] text-sm px-3.5 py-2 min-h-[38px]"
          >
            Demander un Devis
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Accueil
            </button>

            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 pt-3">
              Nos Services
            </div>
            <button
              onClick={() => handleNavClick('/services/creation-site-internet')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              Création de Sites Internet
            </button>
            <button
              onClick={() => handleNavClick('/services/logiciels-de-gestion')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-emerald-600" />
              Logiciels de Gestion
            </button>
            <button
              onClick={() => handleNavClick('/services/applications-web')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <AppWindow className="w-3.5 h-3.5 text-emerald-600" />
              Applications Web
            </button>
            <button
              onClick={() => handleNavClick('/services/maintenance-depannage')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-600" />
              Maintenance &amp; Dépannage IT
            </button>
            <button
              onClick={() => handleNavClick('/services/community-management')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-600" />
              Community Management
            </button>
            <button
              onClick={() => handleNavClick('/services/formations-informatiques')}
              className="text-left px-5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 flex items-center gap-2"
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              Formations Informatiques
            </button>

            <button
              onClick={() => handleNavClick('/packages')}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 mt-2"
            >
              Packages &amp; Offres
            </button>
            <button
              onClick={() => handleNavClick('/projects')}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Réalisations
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              À Propos
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-left px-3 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Button
              variant="whatsapp"
              fullWidth
              onClick={() => window.open(createWhatsappLink(), '_blank')}
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Discuter sur WhatsApp
            </Button>
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
