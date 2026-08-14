import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBar } from './MobileBar';
import { QuoteModal } from '../forms/QuoteModal';
import { AiChatbot } from '../chat/AiChatbot';

export interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  activePath,
  onNavigate
}) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      <Navbar
        activePath={activePath}
        onNavigate={onNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <main className="flex-1 pb-20 sm:pb-0">
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<{
              onOpenQuoteModal?: (serviceId?: string) => void;
              onNavigate?: (path: string) => void;
            }>, {
              onOpenQuoteModal: handleOpenQuoteModal,
              onNavigate
            })
          : children}
      </main>

      <Footer
        onNavigate={onNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <MobileBar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Floating AI Commercial & Informative Chatbot */}
      <AiChatbot
        onNavigate={onNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
};

