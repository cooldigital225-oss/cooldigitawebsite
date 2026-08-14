import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, MessageSquare, ShieldCheck, ExternalLink, Layers } from 'lucide-react';
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
          badgeText="Exemples de Solutions &amp; Démonstrations"
          badgeVariant="orange"
          title="Exemples de projets types pour PME &amp; Établissements."
          subtitle="Découvrez nos architectures et maquettes fonctionnelles conçues pour répondre aux besoins concrets de gestion, d'organisation et de visibilité des entreprises."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Tous les exemples
          </button>
          <button
            onClick={() => setFilter('sites-web')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filter === 'sites-web' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Sites Web
          </button>
          <button
            onClick={() => setFilter('logiciels')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filter === 'logiciels' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Logiciels
          </button>
          <button
            onClick={() => setFilter('maintenance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filter === 'maintenance' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Maintenance IT
          </button>
          <button
            onClick={() => setFilter('community-management')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              filter === 'community-management' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Réseaux Sociaux
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
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
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 shadow-xs border border-amber-300 tracking-wider">
                      [PROJET DE DÉMONSTRATION]
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-[11px]">{project.projectType}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded font-semibold border border-slate-700">
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

                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60">
                      <span className="font-bold text-amber-950 block mb-0.5">Objectif du projet :</span>
                      <p className="text-slate-700">{project.objective}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-0.5">Solution proposée :</span>
                      <p className="text-slate-600">{project.solution}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-950 block">Résultat attendu :</span>
                        <p className="text-emerald-900 font-semibold">{project.expectedResult}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex gap-2">
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
                    window.open(createWhatsappLink(`Bonjour, je souhaite échanger pour une solution similaire à "${project.title}".`), '_blank');
                  }}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Demander une solution similaire
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            onClick={() => onNavigate('/projects')}
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Consulter toutes les démonstrations
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 border border-amber-300">
                [PROJET DE DÉMONSTRATION]
              </span>
              <Badge variant="navy">{selectedProject.category}</Badge>
            </div>

            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
              {selectedProject.title}
            </h3>

            <div className="text-xs text-slate-600 mb-6 space-y-1">
              <p><strong className="text-slate-900">Type :</strong> {selectedProject.projectType}</p>
              <p><strong className="text-slate-900">Secteur cible :</strong> {selectedProject.targetSector}</p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 mb-8">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-extrabold text-amber-950 mb-1">Objectif :</h4>
                <p className="text-xs text-slate-800 leading-relaxed">{selectedProject.objective}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-extrabold text-slate-950 mb-1">Solution :</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{selectedProject.solution}</p>
              </div>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-extrabold text-slate-950 mb-2 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    Fonctionnalités :
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
              )}

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <h4 className="font-extrabold text-emerald-950 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Résultat attendu :
                </h4>
                <p className="text-xs text-emerald-900 font-semibold leading-relaxed">{selectedProject.expectedResult}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
              <Button
                variant="whatsapp"
                fullWidth
                onClick={() => {
                  window.open(createWhatsappLink(`Bonjour, je souhaite échanger au sujet du projet de démonstration "${selectedProject.title}".`), '_blank');
                  setSelectedProject(null);
                }}
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Demander une solution similaire
              </Button>
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuoteModal();
                }}
                icon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
              >
                Obtenir un devis sur-mesure
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

