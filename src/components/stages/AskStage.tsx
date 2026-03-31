'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const roadmap = [
  { quarter: 'Q1 2026', milestone: 'Secure Bridge Funding', status: 'active' },
  { quarter: 'Q2 2026', milestone: 'Renovation + Pop-up Events', status: 'upcoming' },
  { quarter: 'Q3 2026', milestone: 'Soft Opening', status: 'upcoming' },
  { quarter: '2027', milestone: 'Sister Hostel in Nature', status: 'future' },
];

const funding = [
  { label: 'Bridge Funding', amount: '€25K', desc: 'Secure Tabakfabrik' },
  { label: 'Angel Investment', amount: '€100K', desc: 'Your investment unlocks €300K+', highlight: true },
  { label: 'Bank + Grants', amount: '€275K', desc: 'KGG 80% risk cover' },
];

const fundingContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
} as const;

const fundingItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
} as const;

const roadmapContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
} as const;

const roadmapStepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
} as const;

interface AskStageProps {
  onAdvanceChapter?: () => void;
}

export function AskStage(_props: AskStageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/anchor_closing_linz.png"
          alt="Linz city"
          fill
          className="object-cover"
          style={{ opacity: 0.04 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kw-charcoal via-kw-charcoal/90 to-kw-charcoal/75" />
      </div>

      <div className="relative z-10 p-6 overflow-y-auto w-full flex flex-col items-center">
        <motion.div className="text-center mb-5" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3">
            Chapter 8
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-kw-cream mb-2">
            Your &euro;100K Unlocks &euro;300K+
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm">
            Bridge funding with built-in leverage
          </p>
        </motion.div>

        {/* Funding structure */}
        <motion.div variants={fundingContainerVariants} initial="hidden" animate="visible" className="w-full max-w-md space-y-3 mb-5">
          {funding.map((item) => (
            <motion.div
              key={item.label}
              variants={fundingItemVariants}
              className={`rounded-xl p-4 flex items-center justify-between ${
                item.highlight
                  ? 'bg-gradient-to-r from-kw-coral/15 to-kw-coral/5 border-2 border-kw-coral/30'
                  : 'bg-kw-dark/70 backdrop-blur border border-kw-copper/15'
              }`}
            >
              <div>
                <p className={`font-semibold text-sm ${item.highlight ? 'text-kw-coral' : 'text-kw-cream'}`}>
                  {item.label}
                </p>
                <p className="text-kw-cream/50 text-xs">{item.desc}</p>
              </div>
              <span className={`font-bold text-lg ${item.highlight ? 'text-kw-coral' : 'text-kw-cream'}`}>
                {item.amount}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Roadmap timeline */}
        <motion.div className="w-full max-w-md mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <p className="text-kw-cream/50 text-xs font-medium uppercase tracking-wider mb-3">Roadmap</p>
          <motion.div variants={roadmapContainerVariants} initial="hidden" animate="visible" className="flex items-center justify-between relative">
            <div className="absolute top-3 left-4 right-4 h-0.5 bg-kw-copper/30 animate-growLine" />
            {roadmap.map((step, i) => (
              <motion.div
                key={step.quarter}
                variants={roadmapStepVariants}
                className="flex flex-col items-center relative z-10"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                    step.status === 'active'
                      ? 'bg-kw-coral text-white animate-pulseGlow'
                      : step.status === 'upcoming'
                      ? 'bg-kw-dark text-kw-cream/60 border border-kw-copper/30'
                      : 'bg-kw-charcoal text-kw-cream/40 border border-kw-cream/15'
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-[10px] text-kw-cream/60 font-medium">{step.quarter}</p>
                <p className="text-[9px] text-kw-cream/50 max-w-[70px] text-center mt-0.5">{step.milestone}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div className="flex flex-col sm:flex-row gap-3 w-full max-w-md" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}>
          <a
            href="mailto:info@linzhostel.com?subject=Investment%20Inquiry%20-%20Kraftwerk%20Hostel"
            className="flex-1 bg-kw-coral hover:bg-kw-coral/80 text-white rounded-xl px-5 py-3 text-sm font-medium text-center transition-colors animate-pulseGlow"
          >
            Contact the Founders
          </a>
          <a
            href="https://www.linzhostel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-kw-dark/70 backdrop-blur hover:bg-kw-charcoal text-kw-cream/70 border border-kw-copper/20 rounded-xl px-5 py-3 text-sm font-medium text-center transition-colors"
          >
            Visit linzhostel.com
          </a>
        </motion.div>

        <p className="text-kw-cream/30 text-xs mt-4 text-center">
          info@linzhostel.com &middot;{' '}
          <a href="https://www.linzhostel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-kw-copper/50 transition-colors">
            www.linzhostel.com
          </a>
        </p>
      </div>
    </div>
  );
}
