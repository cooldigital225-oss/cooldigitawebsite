export interface ChatSuggestion {
  label: string;
  query?: string;
  action?: 'navigate' | 'quote' | 'whatsapp' | 'service';
  target?: string;
}

export interface ChatActionLink {
  label: string;
  type: 'navigate' | 'quote' | 'whatsapp' | 'call';
  path?: string;
  serviceId?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: number;
  suggestions?: ChatSuggestion[];
  actionLinks?: ChatActionLink[];
}
