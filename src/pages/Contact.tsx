import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { COMPANY_INFO } from '../data/company';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle, Copy, Check, ArrowRight, RefreshCw } from 'lucide-react';
import {
  buildStructuredWhatsappMessage,
  createStructuredQuoteWhatsappLink,
  createWhatsappLink,
  StructuredQuotePayload
} from '../utils/whatsapp';
import { SERVICES_DATA } from '../data/services';
import { SeoHead } from '../components/seo/SeoHead';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('creation-site-internet');
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('');

  // Form action status: 'idle' | 'preparing' | 'ready' | 'error'
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [preparedWaUrl, setPreparedWaUrl] = useState('');

  const serviceOptions = [
    ...SERVICES_DATA.map(s => ({ value: s.id, label: `${s.title} (${s.poleTitle})` })),
    { value: 'offre-essentielle', label: 'Package : Offre Essentielle' },
    { value: 'offre-professionnelle', label: 'Package : Offre Professionnelle' },
    { value: 'offre-premium', label: 'Package : Offre Premium' },
    { value: 'autre', label: 'Autre besoin IT / Conseil' }
  ];

  const selectedServiceLabel = serviceOptions.find(s => s.value === serviceId)?.label || serviceId;

  const validateForm = (): boolean => {
    if (!fullName.trim()) {
      setErrorMessage('Veuillez saisir votre nom complet.');
      setStatus('error');
      return false;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Veuillez saisir un numéro de téléphone/WhatsApp valide.');
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
      description: message || undefined,
      budget: budget || undefined,
      source: `Page Contact — Site ${COMPANY_INFO.name}`
    };

    const messageText = buildStructuredWhatsappMessage(payload);
    const waUrl = createStructuredQuoteWhatsappLink(payload);

    setPreparedMessage(messageText);
    setPreparedWaUrl(waUrl);

    // Open WhatsApp directly in new tab/window
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Display user guidance screen
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
    <div className="py-12 md:py-16">
      <SeoHead
        title="Contact &amp; Devis Gratuit | CoolDigital 360° Abidjan"
        description="Contactez CoolDigital 360° à Abidjan (Koumassi). Obtenez un devis rapide sans engagement pour la création de site, application web, logiciel, dépannage ou formation."
        keywords={[
          'contact cooldigital 360 abidjan',
          "devis site internet côte d'ivoire",
          'devis maintenance informatique abidjan',
          'numéro entreprise informatique abidjan'
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          badgeText="Contact &amp; Devis"
          badgeVariant="green"
          title="Parlons de votre projet ou résolvons votre problème informatique."
          subtitle="Obtenez un devis gratuit en 2 minutes ou échangez directement sur WhatsApp avec notre équipe."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A] text-white p-6 md:p-8 rounded-2xl shadow-md space-y-6">
              <h3 className="text-xl font-extrabold border-b border-slate-800 pb-4">
                Coordonnées Directes
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Téléphone Support :</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold hover:text-emerald-400 text-base">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Direct :</span>
                    <a href={createWhatsappLink()} target="_blank" rel="noreferrer" className="font-bold hover:text-emerald-400 text-emerald-400 text-base">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Adresse Email :</span>
                    <span className="font-semibold">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Localisation :</span>
                    <span className="font-semibold">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Horaires d'ouverture :</span>
                    <span className="font-semibold">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Button
                  variant="whatsapp"
                  fullWidth
                  onClick={() => window.open(createWhatsappLink(), '_blank', 'noopener,noreferrer')}
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Ouvrir WhatsApp directement
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              {status !== 'ready' ? (
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
                    Formulaire de demande de devis
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Remplissez les informations ci-dessous. Votre message sera préparé et transmis sur notre ligne WhatsApp officielle.
                  </p>

                  {status === 'error' && errorMessage && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleProcessAndSend} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        label="Nom de l'entreprise / Structure"
                        placeholder="ex: PME Ivoirienne / École Supérieure XYZ"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      label="Service ou Package recherché *"
                      required
                      options={serviceOptions}
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        label="Description de vos besoins"
                        rows={3}
                        placeholder="Décrivez votre projet web, votre besoin en logiciel, votre parc informatique..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                  </form>
                </div>
              ) : (
                /* Step 2: Clear user instructions panel */
                <div className="py-4 space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
                      Votre demande est prête dans WhatsApp !
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
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
                  <div className="space-y-3 pt-3 border-t border-slate-100">
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

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap font-mono max-h-40 overflow-y-auto">
                      {preparedMessage}
                    </div>

                    {/* Alternative channels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center gap-2 text-slate-800 font-semibold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-slate-600" />
                        Appeler : {COMPANY_INFO.phone}
                      </a>

                      <a
                        href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Demande de devis - ${fullName}`)}&body=${encodeURIComponent(preparedMessage)}`}
                        className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center gap-2 text-slate-800 font-semibold transition-colors"
                      >
                        <Mail className="w-4 h-4 text-slate-600" />
                        Envoyer par Email
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Modifier ou faire une nouvelle demande
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

