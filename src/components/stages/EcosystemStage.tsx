'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'JKU',
    full: 'Johannes Kepler University',
    value: '24K international students — consistent mid-term funnel',
    icon: '🎓',
  },
  {
    name: 'Grand Garage',
    full: 'Makerspace',
    value: 'DIY, 3D printing, upcycling workshops — "Teachcation" content',
    icon: '🔧',
  },
  {
    name: 'factory300',
    full: 'Startup Incubator',
    value: 'Entrepreneurship courses, government credibility, startup networks',
    icon: '🚀',
  },
  {
    name: 'Tabakfabrik',
    full: 'Innovation Hub',
    value: 'Foot traffic, brand association, venue benefits',
    icon: '🏭',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
} as const;

const partnerCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
} as const;

interface EcosystemStageProps {
  onAdvanceChapter?: () => void;
}

export function EcosystemStage({ onAdvanceChapter }: EcosystemStageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/anchor_partners.png"
          alt="Partnership ecosystem"
          fill
          className="object-cover"
          style={{ opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kw-charcoal/75 via-kw-charcoal/90 to-kw-charcoal" />
      </div>

      <div className="relative z-10 p-8 w-full max-w-lg">
        <div className="text-center mb-6">
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3 animate-fadeInUp">
            Chapter 5
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream font-heading mb-2 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            Plugged Into a Machine
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            We don&apos;t start from scratch &mdash; we plug into an existing ecosystem
          </p>
        </div>

        {/* Hub */}
        <div className="relative w-full">
          <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-kw-copper/20 to-kw-copper/10 border-2 border-kw-copper/30 flex flex-col items-center justify-center mb-6 animate-scaleReveal" style={{ animationDelay: '300ms' }}>
            <span className="text-kw-peach font-bold text-sm">Anchor</span>
            <span className="text-kw-peach/70 text-xs">Hostel</span>
          </div>

          {/* Animated connecting SVG */}
          <svg className="absolute top-14 left-1/2 -translate-x-1/2 w-[280px] h-[60px] pointer-events-none" viewBox="0 0 280 60" fill="none">
            {[
              { x1: 70, y1: 0, x2: 30, y2: 60 },
              { x1: 110, y1: 0, x2: 90, y2: 60 },
              { x1: 170, y1: 0, x2: 190, y2: 60 },
              { x1: 210, y1: 0, x2: 250, y2: 60 },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke="rgba(196,153,126,0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
              />
            ))}
          </svg>

          {/* Partners grid */}
          <motion.div
            className="relative z-10 grid grid-cols-2 gap-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={partnerCardVariants}
                className="bg-kw-dark/70 backdrop-blur border border-kw-copper/15 rounded-xl p-4 group hover:border-kw-copper/30 hover:bg-kw-dark/90 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg group-hover:scale-110 transition-transform">{partner.icon}</span>
                  <h3 className="text-kw-cream font-semibold text-sm">{partner.name}</h3>
                </div>
                <p className="text-kw-cream/40 text-[10px] mb-1">{partner.full}</p>
                <p className="text-kw-cream/60 text-xs leading-relaxed">{partner.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <p className="text-kw-cream/40 text-xs mt-5 text-center italic animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
          &quot;We are not starting from scratch; we are plugging into an existing machine.&quot;
        </p>
      </div>
    </div>
  );
}
