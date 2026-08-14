import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Copy, Check, AlertCircle, Phone, Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { SERVICES_DATA } from '../../data/services';
import { COMPANY_INFO } from '../../data/company';
import {
  buildStructuredWhatsappMessage,
  createStructuredQuoteWhatsappLink,
  StructuredQuotePayload
} from '../../utils/whatsapp';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId = 'creation-site-internet'
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId);
  const [projectDetails, setProjectDetails] = useState('');
  const [budget, setBudget] = useState('');

  // UI / Action states: 'idle' | 'preparing' | 'ready' | 'error'
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [preparedWaUrl, setPreparedWaUrl] = useState('');

  // Sync preselected service
  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceOptions = [
    ...SERVICES_DATA.map(s => ({ value: s.id, label: `${s.title} (${s.poleTitle})` })),
    { value: 'offre-essentielle', label: 'Package : Offre Essentielle' },
    { value: 'offre-professionnelle', label: 'Package : Offre Professionnelle' },
    { value: 'offre-premium', label: 'Package : Offre Premium (Accompagnement 360°)' },
    { value: 'autre', label: 'Autre besoin IT / Conseil' }
  ];

  const selectedServiceLabel = serviceOptions.find(s => s.value === serviceId)?.label || serviceId;

  const validateForm = (): boolean => {
    if (!fullName.trim()) {
      setErrorMessage('Veuillez renseigner votre nom complet.');
      setStatus('error');
      return false;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Veuillez renseigner un numéro de téléphone/WhatsApp valide.');
      setStatus('error');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleProcessAndSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setStatus('preparing');

    const payload: StructuredQuotePayload = {
      fullName,
      phone,
      companyName: companyName || undefined,
      email: email || undefined,
      serviceName: selectedServiceLabel,
      description: projectDetails || undefined,
      budget: budget || undefined,
      source: `Formulaire Devis — Site ${COMPANY_INFO.name}`
    };

    const messageText = buildStructuredWhatsappMessage(payload);
    const waUrl = createStructuredQuoteWhatsappLink(payload);

    setPreparedMessage(messageText);
    setPreparedWaUrl(waUrl);

    // Open WhatsApp in a new window/tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Update state to instruct the user
    setStatus('ready');
  };

  const handleCopyMessage = () => {
    if (preparedMessage) {
      navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {status !== 'ready' ? (
          <div>
            <div className="mb-5">
              <span className="inline-block px-3 py-1 bg-[#DCFCE7] text-[#15803D] text-xs font-bold uppercase rounded-full mb-2">
                Devis gratuit &amp; Sans engagement
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Demandez votre devis personnalisé
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Remplissez les informations ci-dessous. Votre demande sera transmise directement à notre équipe via WhatsApp.
              </p>
            </div>

            {status === 'error' && errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleProcessAndSend} className="space-y-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <Input
                  label="Nom complet *"
                  required
                  placeholder="ex: Yao Koffi Jean"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                />
                <Input
                  label="Nom de la structure / Entreprise"
                  placeholder="ex: PME Ivoirienne / École XYZ"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <Input
                  label="Téléphone / WhatsApp *"
                  required
                  type="tel"
                  placeholder="ex: +225 05 84 75 37 43"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                />
                <Input
                  label="Adresse Email"
                  type="email"
                  placeholder="ex: contact@entreprise.ci"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <Select
                label="Service ou Package concerné *"
                required
                options={serviceOptions}
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <Select
                  label="Budget envisagé"
                  options={[
                    { value: '', label: 'Non défini / Sur mesure' },
                    { value: 'Moins de 250 000 FCFA', label: '< 250 000 FCFA' },
                    { value: '250 000 - 500 000 FCFA', label: '250 000 - 500 000 FCFA' },
                    { value: '500 000 - 1 000 000 FCFA', label: '500 000 - 1 000 000 FCFA' },
                    { value: 'Plus de 1 000 000 FCFA', label: '> 1 000 000 FCFA' }
                  ]}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <Textarea
                  label="Précisez votre besoin"
                  rows={2}
                  placeholder="Ex: Création de site vitrine, dépannage de 5 PC, logiciel de stock..."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="whatsapp"
                  fullWidth
                  size="lg"
                  disabled={status === 'preparing'}
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  {status === 'preparing' ? 'Préparation de WhatsApp...' : 'Envoyer ma demande sur WhatsApp'}
                </Button>
              </div>

              <p className="text-[11px] text-center text-slate-500 mt-2">
                🔒 Vos informations sont transmises directement sur le WhatsApp officiel de {COMPANY_INFO.name}.
              </p>
            </form>
          </div>
        ) : (
          /* Step 2: Clear instructions panel after opening WhatsApp */
          <div className="py-2 space-y-5">
            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-1">
                Votre demande est prête dans WhatsApp !
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                WhatsApp s'est ouvert avec votre message structuré. <br />
                <span className="font-bold text-slate-900">
                  Il ne reste plus qu'à appuyer sur "Envoyer"
                </span> dans votre application.
              </p>
            </div>

            {/* Re-open CTA Button */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
              <p className="text-xs font-semibold text-emerald-900">
                WhatsApp ne s'est pas ouvert automatiquement ?
              </p>
              <Button
                variant="whatsapp"
                fullWidth
                onClick={() => window.open(preparedWaUrl, '_blank', 'noopener,noreferrer')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Ouvrir WhatsApp maintenant
              </Button>
            </div>

            {/* Fallback & Message Copy */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-700 font-bold">
                <span>Aperçu du message préparé :</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-semibold text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copier le texte
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap font-mono max-h-36 overflow-y-auto">
                {preparedMessage}
              </div>

              {/* Alternative channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center gap-2 text-slate-800 font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  Appeler : {COMPANY_INFO.phone}
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Demande de devis - ${fullName}`)}&body=${encodeURIComponent(preparedMessage)}`}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center gap-2 text-slate-800 font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  Envoyer par Email
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Modifier ma saisie
              </button>
              <Button variant="outline" size="sm" onClick={onClose}>
                Fermer la fenêtre
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

