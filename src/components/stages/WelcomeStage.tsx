'use client';

import Image from 'next/image';

export function WelcomeStage({ onAdvanceChapter }: { onAdvanceChapter?: () => void }) {
  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={() => onAdvanceChapter?.()}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/location-3.jpg"
          alt="Tabakfabrik Linz"
          fill
          className="object-cover"
          style={{ opacity: 0.25 }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kw-charcoal via-kw-charcoal/80 to-kw-charcoal/40" />
      </div>

      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-kw-copper/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-kw-copper/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-kw-peach/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[45%] right-[25%] w-0.5 h-0.5 bg-kw-copper/25 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-kw-cream/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-xl">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fadeInUp">
          <div className="w-12 h-px bg-kw-copper/40" />
          <span className="text-kw-copper text-[10px] tracking-[0.3em] uppercase">The Social Impact Hub</span>
          <div className="w-12 h-px bg-kw-copper/40" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-kw-cream mb-1 tracking-tight font-heading animate-fadeInUp" style={{ animationDelay: '150ms' }}>
          Kraftwerk
        </h1>
        <p
          className="text-kw-copper text-lg font-medium mb-8 tracking-[0.25em] animate-fadeInUp"
          style={{ animationDelay: '300ms' }}
        >
          HOSTEL LINZ
        </p>

        <p
          className="text-xl md:text-2xl text-kw-cream/90 leading-relaxed mb-4 animate-fadeInUp"
          style={{ animationDelay: '500ms', fontFamily: 'var(--font-heading), Georgia, serif', fontWeight: 400 }}
        >
          From Isolation to Connection.
        </p>
        <p
          className="text-sm text-kw-cream/60 max-w-sm mx-auto mb-8 animate-fadeInUp"
          style={{ animationDelay: '650ms' }}
        >
          A 90-bed social impact hostel in Linz&apos;s Tabakfabrik —
          where every beginning finds its community.
        </p>

        <div className="flex flex-col items-center gap-4 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center gap-2 text-kw-cream/50 text-xs">
            <span>Tabakfabrik &middot; Linz &middot; Austria</span>
          </div>

          {/* Enhanced CTA hint */}
          <div className="flex items-center gap-2 text-kw-copper/70 text-sm mt-2 group cursor-pointer">
            <span className="relative">
              Click anywhere to begin
              <span className="absolute bottom-0 left-0 w-full h-px bg-kw-copper/30 animate-growLine" />
            </span>
            <span className="animate-bounce">&rarr;</span>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent" />
      </div>
    </div>
  );
}
