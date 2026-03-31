'use client';

import { useRef, useEffect, useState } from 'react';
import { type Message } from 'ai';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatPanelProps {
  messages: Message[];
  input: string;
  isLoading: boolean;
  suggestedQuestions: string[];
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSuggestionClick: (question: string) => void;
}

const questionIcons: Record<string, string> = {
  'Give me the 2-minute tour': '🎬',
  'What problem are you solving?': '🔍',
  'Show me the financials': '📊',
  'Tell me about the Anchor Model': '⚓',
  'How big is this market?': '📈',
  'Show me the location': '📍',
  'Show me the actual space': '🏭',
  "What's your secret sauce?": '✨',
  'Jump to the financials': '💰',
  'What makes you different?': '🎯',
  'Who are your partners?': '🤝',
  'Show me the numbers': '🔢',
  'Tell me about your partnerships': '🌐',
  'Who is your target guest?': '🎒',
  "Let's see the financials": '💎',
  'Show me the revenue model': '📊',
  'How do you de-risk this?': '🛡️',
  'Who is the team?': '👥',
  'How do you mitigate risks?': '🔒',
  'Tell me about the team': '🧑‍🤝‍🧑',
  "What's the ask?": '🚀',
  "What's the investment ask?": '💸',
  'Tell me about social impact': '🌱',
  "What's the roadmap?": '🗺️',
  'Book a call with the founders': '📞',
  'Download the full pitch deck': '📄',
  'Tell me more about de-risking': '🛡️',
};

export function ChatPanel({
  messages,
  input,
  isLoading,
  suggestedQuestions,
  onInputChange,
  onSubmit,
  onSuggestionClick,
}: ChatPanelProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hoveredQ, setHoveredQ] = useState<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, suggestedQuestions]);

  const visibleMessages = messages.filter(
    (m) => m.role === 'user' || (m.role === 'assistant' && m.content && m.content.trim() !== '')
  );

  return (
    <div className="flex flex-col h-full bg-kw-charcoal">
      {/* Header */}
      <div className="px-4 py-3 border-b border-kw-copper/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-kw-copper animate-pulse" />
          <span className="text-xs font-medium text-kw-cream/60 uppercase tracking-wider">
            AI Pitch Guide
          </span>
        </div>
      </div>

      {/* Scrollable area: messages + chips */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4">
        <div className="py-4 space-y-4">
          {visibleMessages.length === 0 && !isLoading && (
            <div className="text-center py-8">
              <p className="text-kw-cream/40 text-sm">
                Ask me anything about Kraftwerk Hostel Linz
              </p>
            </div>
          )}

          {visibleMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'bg-kw-coral text-white'
                    : 'bg-kw-dark border border-kw-copper/15 text-kw-cream'
                }`}
              >
                {message.content.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < message.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {isLoading && visibleMessages[visibleMessages.length - 1]?.role === 'user' && (
            <div className="flex justify-start">
              <div className="bg-kw-dark border border-kw-copper/15 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-kw-copper rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-kw-copper rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-kw-copper rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions — enhanced with icons, glow, and staggered animation */}
        {suggestedQuestions.length > 0 && !isLoading && (
          <div className="pb-4 pt-2">
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3 h-3 text-kw-copper/60" />
              <span className="text-[10px] text-kw-cream/40 uppercase tracking-widest font-medium">
                Explore
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {suggestedQuestions.map((q, i) => {
                const icon = questionIcons[q] || '→';
                const isHovered = hoveredQ === q;
                return (
                  <button
                    key={q}
                    onClick={() => onSuggestionClick(q)}
                    onMouseEnter={() => setHoveredQ(q)}
                    onMouseLeave={() => setHoveredQ(null)}
                    className="group relative text-left text-sm pl-5 pr-4 py-3 rounded-xl border border-kw-copper/30 text-kw-cream/90
                      bg-gradient-to-r from-kw-copper/8 to-kw-peach/5
                      hover:from-kw-copper/18 hover:to-kw-peach/10
                      hover:border-kw-copper/50 hover:text-kw-peach
                      transition-all duration-300 ease-out
                      animate-fadeInUp suggestion-glow"
                    style={{
                      animationDelay: `${i * 120}ms`,
                      boxShadow: isHovered
                        ? '0 0 24px rgba(196, 153, 126, 0.2), inset 0 0 20px rgba(196, 153, 126, 0.08)'
                        : '0 0 8px rgba(196, 153, 126, 0.06)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-kw-copper/40 group-hover:bg-kw-copper/70 transition-colors" />
                      <span className="text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        {icon}
                      </span>
                      <span className="flex-1">{q}</span>
                      <svg
                        className="w-4 h-4 text-kw-copper/30 group-hover:text-kw-copper/70 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Invisible scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input — always pinned at bottom */}
      <form onSubmit={onSubmit} className="p-4 border-t border-kw-copper/10 shrink-0">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Ask about the hostel, financials, team..."
            className="flex-1 bg-kw-dark border border-kw-copper/15 rounded-xl px-4 py-2.5 text-sm text-kw-cream placeholder:text-kw-cream/30 focus:outline-none focus:ring-1 focus:ring-kw-copper/50 focus:border-kw-copper/50 transition-all"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="bg-kw-coral hover:bg-kw-coral/80 text-white rounded-xl h-10 w-10 shrink-0 disabled:opacity-30"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
