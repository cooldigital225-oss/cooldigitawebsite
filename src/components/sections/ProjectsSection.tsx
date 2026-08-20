import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, MessageSquare, ShieldCheck, ExternalLink, Layers, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { createWhatsappLink } from '../../utils/whatsapp';
import { ProjectItem } from '../../types';

export interface ProjectsSectionProps {
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [filter, setFilter] = useState<'all' | 'sites-web' | 'logiciels' | 'maintenance' | 'community-management'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categorySlug === filter);

  return (
    <section id="realisations" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Réalisations & Démonstrations"
          badgeVariant="orange"
          title="Nos réalisations & projets types pour PME et Établissements."
          subtitle="Découvrez nos logiciels développés ainsi que nos architectures et maquettes fonctionnelles conçues pour répondre aux besoins concrets de gestion, d'organisation et de visibilité."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Tous les projets
          </button>
          <button
            onClick={() => setFilter('sites-web')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              filter === 'sites-web' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Sites Web
          </button>
          <button
            onClick={() => setFilter('logiciels')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              filter === 'logiciels' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Logiciels de gestion
          </button>
          <button
            onClick={() => setFilter('maintenance')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              filter === 'maintenance' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Maintenance IT
          </button>
          <button
            onClick={() => setFilter('community-management')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
              filter === 'community-management' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Réseaux Sociaux
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => {
            const isReal = project.projectType === 'Projet réalisé';
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      {isReal ? (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase bg-emerald-600 text-white shadow-xs tracking-wider">
                          PROJET RÉALISÉ
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase bg-amber-500 text-slate-950 shadow-xs border border-amber-300 tracking-wider">
                          [PROJET DE DÉMONSTRATION]
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
                      <span className={`font-bold text-xs ${isReal ? 'text-emerald-400' : 'text-amber-300'}`}>
                        {project.projectType}
                      </span>
                      <span className="text-xs bg-slate-800 text-slate-200 px-2 py-0.5 rounded font-semibold border border-slate-700 truncate max-w-[200px]">
                        {project.targetSector}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                    </h3>

                    {project.shortDescription && (
                      <p className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                        {project.shortDescription}
                      </p>
                    )}

                    <div className="space-y-3 text-xs text-slate-700">
                      <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60">
                        <span className="font-bold text-amber-950 block mb-0.5">Objectif :</span>
                        <p className="text-slate-700">{project.objective}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-0.5">Solution développée :</span>
                        <p className="text-slate-600">{project.solution}</p>
                      </div>

                      {project.benefits && project.benefits.length > 0 ? (
                        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                          <span className="font-bold text-emerald-950 block mb-1">Bénéfices clés :</span>
                          <ul className="space-y-1">
                            {project.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-emerald-900 font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : project.expectedResult ? (
                        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-emerald-950 block">Résultat attendu :</span>
                            <p className="text-emerald-900 font-semibold">{project.expectedResult}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    fullWidth
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Détails du projet
                  </Button>
                  <Button
                    variant="primary"
                    fullWidth
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      const msg = isReal
                        ? `Bonjour Cool Digital, je souhaite en savoir plus sur Caisse Scolaire Pro pour mon établissement scolaire.`
                        : `Bonjour, je souhaite échanger pour une solution similaire à "${project.title}".`;
                      window.open(createWhatsappLink(msg), '_blank');
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {isReal ? 'Parler à Cool Digital' : 'Demander une solution similaire'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            onClick={() => onNavigate('/projects')}
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Consulter toutes les réalisations
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-3 flex flex-wrap items-center gap-2">
              {selectedProject.projectType === 'Projet réalisé' ? (
                <span className="px-2.5 py-1 rounded-md text-xs font-extrabold uppercase bg-emerald-600 text-white tracking-wide">
                  PROJET RÉALISÉ
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-md text-xs font-extrabold uppercase bg-amber-500 text-slate-950 border border-amber-300">
                  [PROJET DE DÉMONSTRATION]
                </span>
              )}
              <Badge variant="navy">{selectedProject.category}</Badge>
              {selectedProject.projectOwner && (
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Par {selectedProject.projectOwner}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
              {selectedProject.title}
            </h3>

            <div className="text-xs text-slate-600 mb-4 space-y-1">
              <p><strong className="text-slate-900">Type :</strong> {selectedProject.projectType}</p>
              <p><strong className="text-slate-900">Secteur cible :</strong> {selectedProject.targetSector}</p>
            </div>

            {/* Demonstration Disclaimer Banner */}
            {selectedProject.projectType !== 'Projet réalisé' && (
              <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs font-medium mb-5 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {selectedProject.categorySlug === 'sites-web'
                    ? "Cette réalisation est une démonstration conçue par Cool Digital pour illustrer le type de site que nous pouvons créer."
                    : "Cette réalisation est une démonstration conçue par Cool Digital pour illustrer le type de solution que nous pouvons déployer."}
                </span>
              </div>
            )}

            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-72 object-cover"
              />
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-colors border border-white/20"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Voir la présentation officielle</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}
            </div>

            <div className="space-y-5 text-sm text-slate-700 mb-8">
              {/* Le besoin */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-extrabold text-amber-950 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Le besoin :</span>
                </h4>
                {selectedProject.problemsList && selectedProject.problemsList.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-slate-800 mb-2">
                    {selectedProject.problemsList.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-800 leading-relaxed mb-2">{selectedProject.objective}</p>
                )}
                <p className="text-xs text-amber-900 font-medium pt-1 border-t border-amber-200/60">
                  <strong>Objectif principal :</strong> {selectedProject.objective}
                </p>
              </div>

              {/* La solution */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-extrabold text-slate-950 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>La solution :</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Fonctionnalités */}
              {selectedProject.featureCategories && selectedProject.featureCategories.length > 0 ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-extrabold text-slate-950 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Fonctionnalités documentées (par modules) :</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {selectedProject.featureCategories.map((cat, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1 text-xs text-emerald-700">{cat.category}</span>
                        <ul className="space-y-1 text-xs">
                          {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-1.5 text-slate-600">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedProject.features && selectedProject.features.length > 0 ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-extrabold text-slate-950 mb-2 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Fonctionnalités :</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Bénéfices */}
              {selectedProject.benefits && selectedProject.benefits.length > 0 ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-extrabold text-emerald-950 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Bénéfices de la solution :</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-emerald-950">
                    {selectedProject.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-medium">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 italic mt-3 pt-2 border-t border-emerald-200/60">
                    Note : Les résultats chiffrés ne sont pas communiqués.
                  </p>
                </div>
              ) : selectedProject.expectedResult ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-extrabold text-emerald-950 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Résultat attendu :
                  </h4>
                  <p className="text-xs text-emerald-900 font-semibold leading-relaxed">{selectedProject.expectedResult}</p>
                </div>
              ) : null}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              {selectedProject.categorySlug === 'sites-web' ? (
                <>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      setSelectedProject(null);
                      if (onNavigate) {
                        onNavigate('/contact');
                      }
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Créer mon site internet
                  </Button>

                  <Button
                    variant="whatsapp"
                    fullWidth
                    onClick={() => {
                      const msg = `Bonjour Cool Digital, je souhaite échanger au sujet du projet de démonstration "${selectedProject.title}".`;
                      window.open(createWhatsappLink(msg), '_blank');
                      setSelectedProject(null);
                    }}
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Parler à Cool Digital
                  </Button>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      setSelectedProject(null);
                      if (onNavigate) {
                        onNavigate('/services/creation-site-internet');
                      }
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Voir l’offre Création de sites
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="whatsapp"
                    fullWidth
                    onClick={() => {
                      const msg = selectedProject.projectType === 'Projet réalisé'
                        ? `Bonjour Cool Digital, je souhaite en savoir plus sur Caisse Scolaire Pro pour mon établissement scolaire.`
                        : `Bonjour, je souhaite échanger au sujet du projet de démonstration "${selectedProject.title}".`;
                      window.open(createWhatsappLink(msg), '_blank');
                      setSelectedProject(null);
                    }}
                    icon={<MessageSquare className="w-4 h-4" />}
                  >
                    Parler à Cool Digital
                  </Button>

                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      setSelectedProject(null);
                      if (onNavigate) {
                        const targetUrl =
                          selectedProject.categorySlug === 'logiciels'
                            ? '/services/logiciels-gestion-sur-mesure'
                            : selectedProject.categorySlug === 'maintenance'
                            ? '/services/maintenance-support-informatique'
                            : selectedProject.categorySlug === 'community-management'
                            ? '/services/gestion-reseaux-sociaux-abidjan'
                            : '/services';
                        onNavigate(targetUrl);
                      }
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {selectedProject.categorySlug === 'maintenance'
                      ? 'Découvrir la maintenance IT'
                      : selectedProject.categorySlug === 'community-management'
                      ? 'Découvrir l’offre réseaux sociaux'
                      : 'Découvrir nos solutions de gestion'}
                  </Button>

                  {selectedProject.liveUrl && (
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => {
                        window.open(selectedProject.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Présentation officielle
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


