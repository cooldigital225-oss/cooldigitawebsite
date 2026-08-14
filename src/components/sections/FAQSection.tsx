import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { AccordionItem } from '../ui/Accordion';
import { FAQS_DATA } from '../../data/faqs';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Questions Fréquentes"
          badgeVariant="navy"
          title="Vos questions les plus posées, nos réponses claires."
          subtitle="Avez-vous des doutes avant de vous lancer ? Voici tout ce que vous devez savoir."
        />

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => (
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
  );
};
