import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpenDefault = false
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0F172A] hover:text-[#22C55E] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#22C55E]' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-6 pt-0 md:px-6 md:pb-6 text-[#475569] text-sm md:text-base leading-relaxed border-t border-[#F1F5F9] mt-1">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
};
