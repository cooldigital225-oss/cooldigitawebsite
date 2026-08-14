import { COMPANY_INFO } from '../data/company';

/**
 * Clean phone number for WhatsApp link API
 */
export function getCleanWhatsappNumber(): string {
  // Removes spaces, plus, dashes
  const raw = COMPANY_INFO.whatsappNumber || '';
  const cleaned = raw.replace(/[^0-9]/g, '');
  return cleaned || '000000000000';
}

/**
 * Generate a WhatsApp URL with encoded message
 */
export function createWhatsappLink(customMessage?: string): string {
  const number = getCleanWhatsappNumber();
  const defaultMsg = `Bonjour ${COMPANY_INFO.name}, je vous contacte depuis votre site internet. Je souhaite avoir plus d'informations sur vos services.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Generate a WhatsApp URL tailored for a specific service
 */
export function createServiceWhatsappLink(serviceTitle: string): string {
  const message = `Bonjour ${COMPANY_INFO.name}, je suis intéressé(e) par votre service de "${serviceTitle}". Pouvons-nous en discuter ?`;
  return createWhatsappLink(message);
}

/**
 * Generate a WhatsApp URL for an IT emergency
 */
export function createEmergencyWhatsappLink(): string {
  const message = `URGENCE IT : Bonjour ${COMPANY_INFO.name}, j'ai une panne informatique critique dans ma structure. J'ai besoin d'une assistance immédiate.`;
  return createWhatsappLink(message);
}

export interface StructuredQuotePayload {
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  serviceName: string;
  description?: string;
  budget?: string;
  timeframe?: string;
  source?: string;
}

/**
 * Generate a clean, structured text message for WhatsApp
 */
export function buildStructuredWhatsappMessage(payload: StructuredQuotePayload): string {
  const lines: string[] = [
    `*Nouvelle demande de projet — ${COMPANY_INFO.name}*`,
    ``,
    `👤 *Nom :* ${payload.fullName.trim()}`,
    `📞 *Téléphone :* ${payload.phone.trim()}`,
  ];

  if (payload.companyName?.trim()) {
    lines.push(`🏢 *Structure / Entreprise :* ${payload.companyName.trim()}`);
  }

  if (payload.email?.trim()) {
    lines.push(`✉️ *Email :* ${payload.email.trim()}`);
  }

  lines.push(``);
  lines.push(`📌 *Besoin / Service :* ${payload.serviceName.trim()}`);

  if (payload.description?.trim()) {
    lines.push(`📝 *Description du projet :*\n${payload.description.trim()}`);
  }

  if (payload.budget?.trim()) {
    lines.push(`💰 *Budget envisagé :* ${payload.budget.trim()}`);
  }

  if (payload.timeframe?.trim()) {
    lines.push(`⏱️ *Délai souhaité :* ${payload.timeframe.trim()}`);
  }

  lines.push(``);
  lines.push(`🌐 *Source :* ${payload.source || 'Site web ' + COMPANY_INFO.name}`);

  return lines.join('\n');
}

/**
 * Generate a WhatsApp URL for a structured quote submission
 */
export function createStructuredQuoteWhatsappLink(payload: StructuredQuotePayload): string {
  const message = buildStructuredWhatsappMessage(payload);
  return createWhatsappLink(message);
}

/**
 * Legacy compatibility wrapper for quote links
 */
export function createQuoteWhatsappLink(serviceName: string, details: string, name: string): string {
  const message = `Bonjour ${COMPANY_INFO.name},\n\nJe suis ${name}.\nJe souhaite un devis pour : *${serviceName}*.\n\nDétails de mon besoin :\n${details}`;
  return createWhatsappLink(message);
}
