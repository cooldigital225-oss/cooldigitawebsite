import React from 'react';
import { DETAILED_SERVICES_DATA } from '../data/detailedServices';
import { SeoHead } from '../components/seo/SeoHead';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { AccordionItem } from '../components/ui/Accordion';
import { Card } from '../components/ui/Card';
import {
  Globe, LayoutGrid, AppWindow, Wrench, Share2, GraduationCap,
  TrendingUp, ShieldCheck, Zap, Smartphone, Clock,
  CheckCircle2, BarChart3, Lock, RefreshCw, Database,
  Eye, Users, MessageSquare, Award, ArrowLeft, ArrowRight,
  Phone, XCircle, Sparkles, Shield
} from 'lucide-react';
import { createServiceWhatsappLink, createWhatsappLink } from '../utils/whatsapp';
import { COMPANY_INFO } from '../data/company';
import { PACKAGES_DATA } from '../data/packages';

export interface ServiceDetailProps {
  slug: string;
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  slug,
  onNavigate = (_path?: string) => {},
  onOpenQuoteModal = (_serviceId?: string) => {}
}) => {
  // Get detailed service or fallback to first one
  const service = DETAILED_SERVICES_DATA[slug] || DETAILED_SERVICES_DATA['creation-site-internet'];

  // Helper to map icon names to Lucide icons
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} />;
      case 'AppWindow': return <AppWindow className={className} />;
      case 'LayoutGrid': return <LayoutGrid className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Share2': return <Share2 className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      case 'Lock': return <Lock className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Eye': return <Eye className={className} />;
      case 'Users': return <Users className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <CheckCircle2 className={className} />;
    }
  };

  const recommendedPackage = PACKAGES_DATA.find(p => p.id === service.recommendedPackageId) || PACKAGES_DATA[1];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. SEO Metadata & Schema.org JSON-LD */}
      <SeoHead service={service} />

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] pt-8 pb-16 md:pt-12 md:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span>/</span>
            <span className="text-emerald-600 font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2">
                <Badge
                  variant={service.accentColor === 'amber' ? 'orange' : service.accentColor === 'blue' ? 'blue' : 'green'}
                  icon={renderIcon(service.iconName, "w-4 h-4")}
                >
                  {service.heroBadge}
                </Badge>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  • {service.poleTitle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-3xl">
                {service.heroSubheadline}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenQuoteModal(service.id)}
                  icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
                >
                  Demander un devis gratuit
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => window.open(createServiceWhatsappLink(service.title), '_blank')}
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Discuter sur WhatsApp
                </Button>
              </div>

              {/* Emergency phone link */}
              <div className="pt-1 flex items-center gap-2 text-xs text-slate-600">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Prise de contact rapide : </span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#0F172A] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500 font-medium">Réponse en &lt; 15-30 min</span>
              </div>
            </div>

            {/* Right Column: Key Takeaway Box */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    {renderIcon(service.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0F172A]">En résumé</h3>
                    <p className="text-xs text-slate-500">{service.title}</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Interlocuteur unique</strong> sur tout votre projet</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Accompagnement de A à Z</strong> avec zéro jargon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Devis gratuit &amp; clair</strong> sans frais cachés</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="w-full py-2.5 px-3 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Obtenir une estimation sous 24h
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. SECTION : PROBLÈME CLIENT */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Constat &amp; Difficultés"
            badgeVariant="orange"
            title={service.clientProblem.title}
            subtitle={service.clientProblem.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {service.clientProblem.points.map((pt, idx) => (
              <div
                key={idx}
                className="bg-red-50/50 border border-red-200/80 rounded-2xl p-6 relative overflow-hidden transition-all hover:border-red-300"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F172A] mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-100/70 border border-red-200 rounded-xl p-4 text-center max-w-3xl mx-auto text-xs sm:text-sm font-bold text-red-950">
            ⚠️ {service.clientProblem.consequence}
          </div>
        </div>
      </section>


      {/* 4. SECTION : NOTRE SOLUTION SUR-MESURE */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-emerald-500 p-8 md:p-12 shadow-md relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500 text-white inline-block mb-4">
                Notre Approche Sur-Mesure
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
                {service.ourSolution.title}
              </h2>

              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                {service.ourSolution.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.ourSolution.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-950">
                💡 <strong>Notre différence :</strong> {service.ourSolution.differentiator}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. SECTION : BÉNÉFICES & ROI */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Bénéfices Concrets"
            badgeVariant="green"
            title="Ce que ce service change concrètement pour votre entreprise."
            subtitle="Des résultats mesurables sur votre productivité, votre crédibilité et votre chiffre d'affaires."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between border-slate-200 hover:border-emerald-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      {renderIcon(b.icon, "w-5 h-5")}
                    </div>
                    {b.metric && (
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-extrabold">
                        {b.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 6. SECTION : CONTENU DÉTAILLÉ DE L'OFFRE */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Contenu de la Prestation"
            badgeVariant="navy"
            title="Une offre complète sans omission ni frais cachés."
            subtitle="Découvrez le périmètre précis de ce que nous fournissons lors de notre intervention."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.offerContent.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 mb-3">
                    Volet {idx + 1}
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0F172A] mb-4 pb-3 border-b border-slate-100">
                    {cat.category}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400">
                  Inclus dans la formule standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. SECTION : PROCESSUS DE TRAVAIL */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Méthodologie"
            badgeVariant="blue"
            title="Comment se déroule notre collaboration ?"
            subtitle="4 étapes claires pour vous garantir un déroulement fluide et sans stress."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-[#0F172A]/20">
                      {step.stepNumber}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. SECTION : ÉLÉMENTS DE CONFIANCE & GARANTIES */}
      <section className="py-16 md:py-20 bg-[#0F172A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Testimonial & Case Study */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                {service.trustElements.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {service.trustElements.title}
              </h2>

              <div className="bg-slate-800/90 rounded-2xl p-6 md:p-8 border border-slate-700 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    [PROJET DE DÉMONSTRATION]
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    {service.trustElements.clientCase.clientType}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-white">
                  {service.trustElements.clientCase.clientName}
                </h4>

                <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
                  <p className="font-bold text-amber-300">Objectif du projet :</p>
                  <p className="text-slate-200">{service.trustElements.clientCase.objective || service.trustElements.clientCase.quote}</p>
                </div>

                <div className="pt-3 border-t border-slate-700 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Résultat attendu : {service.trustElements.clientCase.result}</span>
                </div>
              </div>
            </div>

            {/* Right: Guarantees */}
            <div className="lg:col-span-5 bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700 space-y-4">
              <h3 className="text-lg font-extrabold text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                Nos Engagements &amp; Garanties
              </h3>

              <div className="space-y-3">
                {service.trustElements.guarantees.map((guar, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{guar}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700">
                <Button
                  variant="whatsapp"
                  fullWidth
                  onClick={() => window.open(createServiceWhatsappLink(service.title), '_blank')}
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Poser une question sur WhatsApp
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 9. SECTION : FAQ SPÉCIFIQUE */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Questions Fréquentes"
            badgeVariant="navy"
            title={`Tout savoir sur : ${service.title}`}
            subtitle="Vous avez des interrogations ? Retrouvez les réponses aux questions les plus fréquemment posées."
          />

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpenDefault={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>


      {/* 10. SECTION : LIENS INTERNES & SERVICES COMPLÉMENTAIRES */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Écosystème 360°"
            badgeVariant="green"
            title="Services complémentaires &amp; Offres recommandées"
            subtitle="Optez pour une approche combinée pour maximiser votre efficacité."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Recommended Package Card */}
            <div className="bg-white rounded-2xl border-2 border-emerald-500 p-6 shadow-md flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-extrabold uppercase mb-2 inline-block">
                  Package Conseillé
                </span>
                <h3 className="text-lg font-extrabold text-[#0F172A] mb-1">
                  {recommendedPackage.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4">{recommendedPackage.tagline}</p>

                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  {(recommendedPackage.features || recommendedPackage.creationPhase || []).slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="primary"
                fullWidth
                size="sm"
                onClick={() => onNavigate('/packages')}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Découvrir l'offre globale
              </Button>
            </div>

            {/* Related Service 1 */}
            {service.relatedServices.map((rel, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-extrabold uppercase mb-2 inline-block">
                    Service Associé
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">{rel.reason}</p>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  size="sm"
                  onClick={() => {
                    onNavigate(`/services/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  En savoir plus
                </Button>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* 11. CTA FINAL DE CONVERSION */}
      <section className="py-16 md:py-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            Passez à l'action dès aujourd'hui
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Besoin de : {service.title} ?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Obtenez un devis clair et gratuit sans aucun engagement ou posez vos questions en direct à notre équipe sur WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={() => window.open(createServiceWhatsappLink(service.title), '_blank')}
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Échanger sur WhatsApp
            </Button>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => onOpenQuoteModal(service.id)}
              className="!bg-emerald-600 hover:!bg-emerald-500 !text-white"
              icon={<ShieldCheck className="w-5 h-5 text-white" />}
            >
              Demander un devis
            </Button>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            🔒 Réponse rapide garantie sous 15 à 30 minutes pendant les heures d'ouverture.
          </p>
        </div>
      </section>

    </div>
  );
};
