import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  MessageSquare, 
  Phone, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { ChatMessage, ChatSuggestion, ChatActionLink } from '../../types/chat';
import { WELCOME_MESSAGE, INITIAL_SUGGESTIONS, getChatbotResponse } from '../../utils/aiChatbot';
import { createWhatsappLink } from '../../utils/whatsapp';
import { COMPANY_INFO } from '../../data/company';

export interface AiChatbotProps {
  onNavigate?: (path: string) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnreadNotification(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen, messages, isTyping]);

  // Show a discreet hint tooltip after 4 seconds if unopened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic brief typing delay
    setTimeout(async () => {
      try {
        const botResponse = await getChatbotResponse(text, messages);
        setMessages(prev => [...prev, botResponse]);
      } catch (err) {
        console.error('Chatbot error:', err);
        setMessages(prev => [
          ...prev,
          {
            id: `bot-err-${Date.now()}`,
            sender: 'bot',
            text: `Désolé, une petite erreur est survenue. N'hésitez pas à nous contacter directement sur WhatsApp ou par téléphone au **${COMPANY_INFO.phone}**.`,
            timestamp: Date.now(),
            actionLinks: [
              { label: 'Ouvrir WhatsApp', type: 'whatsapp' },
              { label: 'Demander un devis', type: 'quote' }
            ]
          }
        ]);
      } finally {
        setIsTyping(false);
      }
    }, 450);
  };

  const handleSuggestionClick = (suggestion: ChatSuggestion) => {
    if (suggestion.query) {
      handleSendMessage(suggestion.query);
    }
  };

  const handleActionClick = (action: ChatActionLink) => {
    if (action.type === 'navigate' && action.path) {
      if (onNavigate) {
        onNavigate(action.path);
        // On mobile, close chatbot when navigating so user sees the page
        if (window.innerWidth < 640) {
          setIsOpen(false);
        }
      }
    } else if (action.type === 'quote') {
      if (onOpenQuoteModal) {
        onOpenQuoteModal(action.serviceId);
        if (window.innerWidth < 640) {
          setIsOpen(false);
        }
      }
    } else if (action.type === 'whatsapp') {
      window.open(createWhatsappLink(), '_blank', 'noopener,noreferrer');
    } else if (action.type === 'call') {
      window.location.href = `tel:${COMPANY_INFO.phoneRaw}`;
    }
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
    setInputValue('');
  };

  // Format message text with markdown-style bold and bullet points
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Parse **bold** parts
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lineIdx} className={line.trim() === '' ? 'h-2' : 'leading-relaxed'}>
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIdx} className="font-bold text-[#0F172A]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
        {/* Tooltip bubble */}
        {!isOpen && showTooltip && (
          <div className="mb-2.5 max-w-[240px] bg-[#0F172A] text-white text-xs font-medium py-2 px-3 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Besoin d'aide ? Posez vos questions à notre IA !</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-auto"
              aria-label="Fermer la bulle"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <button
          id="cooldigital-ai-chatbot-launcher"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="group relative flex items-center gap-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white p-3 sm:px-4 sm:py-3.5 rounded-full shadow-[0_8px_24px_rgba(15,23,42,0.28)] border-2 border-emerald-500/40 hover:border-emerald-400 transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label={isOpen ? "Fermer l'assistant virtuel" : "Ouvrir l'assistant virtuel CoolDigital 360°"}
        >
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>

          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
          </div>
          
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Assistant IA 360°
          </span>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div 
          id="cooldigital-ai-chatbot-window"
          className="fixed inset-x-3 bottom-20 sm:bottom-20 sm:right-6 sm:left-auto sm:w-[430px] max-h-[82vh] sm:max-h-[640px] h-[580px] z-50 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.25)] bg-white border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
        >
          {/* Header */}
          <div className="bg-[#0F172A] text-white p-4 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0F172A] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-white">CoolDigital 360°</h3>
                  <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                    IA
                  </span>
                </div>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Assistant virtuel • En ligne
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Recommencer la conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Recommencer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Fermer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#0F172A] text-white rounded-br-xs shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-xs shadow-xs'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    <div className="space-y-1.5">
                      {renderFormattedText(msg.text)}
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  )}
                </div>

                {/* Bot Action Links (Navigate, Quote, WhatsApp) */}
                {msg.sender === 'bot' && msg.actionLinks && msg.actionLinks.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[92%]">
                    {msg.actionLinks.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(action)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg border transition-all cursor-pointer ${
                          action.type === 'whatsapp'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                            : action.type === 'quote'
                            ? 'bg-blue-50 text-blue-800 border-blue-300 hover:bg-blue-100'
                            : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        {action.type === 'whatsapp' && <MessageSquare className="w-3 h-3 text-emerald-600" />}
                        {action.type === 'quote' && <FileText className="w-3 h-3 text-blue-600" />}
                        {action.type === 'call' && <Phone className="w-3 h-3 text-emerald-600" />}
                        {action.type === 'navigate' && <ArrowRight className="w-3 h-3 text-slate-600" />}
                        <span>{action.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Suggestions Pills for this message */}
                {msg.sender === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.suggestions.map((sugg, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSuggestionClick(sugg)}
                        className="text-xs font-medium py-1 px-2.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                      >
                        {sugg.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-xs w-fit shadow-xs">
                <Bot className="w-4 h-4 text-emerald-600 animate-spin" />
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick choices if chat is at start */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 py-2 border-t border-slate-100 bg-white">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Choix rapides :
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {INITIAL_SUGGESTIONS.map((sugg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(sugg)}
                    className="text-left text-xs font-semibold p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{sugg.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-40 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Posez votre question (ex: prix site, formation IA...)"
              className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shrink-0"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4 text-emerald-400" />
            </button>
          </form>

          {/* Footer note */}
          <div className="px-3 py-1 bg-slate-100 border-t border-slate-200 text-center">
            <span className="text-xs text-slate-500 font-medium">
              Assistant officiel CoolDigital 360° • Koumassi, Abidjan
            </span>
          </div>
        </div>
      )}
    </>
  );
};
