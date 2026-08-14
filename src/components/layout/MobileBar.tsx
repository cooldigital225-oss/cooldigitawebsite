import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { createWhatsappLink } from '../../utils/whatsapp';

export interface MobileBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileBar: React.FC<MobileBarProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={createWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white py-3 px-3 rounded-xl font-bold text-xs shadow-xs active:scale-98 transition-transform"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp Direct</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white py-3 px-3 rounded-xl font-bold text-xs shadow-xs active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Appeler Support</span>
        </a>
      </div>
    </div>
  );
};
