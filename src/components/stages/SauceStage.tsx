'use client';

import Image from 'next/image';
import { Bed, HeartPulse, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Bed,
    title: 'Sleep at Anchor',
    description: 'Comfortable accommodation in a community-driven environment. Your home base in Linz.',
    color: 'from-kw-peach/10 to-kw-peach/5',
    border: 'border-kw-peach/20',
    accent: 'text-kw-peach',
    iconBg: 'from-kw-peach/20 to-kw-peach/5',
  },
  {
    icon: HeartPulse,
    title: 'Move & Grow',
    description: 'Yoga, breathing work, flow arts. Movement classes that bring people together.',
    color: 'from-kw-teal/10 to-kw-teal/5',
    border: 'border-kw-teal/20',
    accent: 'text-kw-teal',
    iconBg: 'from-kw-teal/20 to-kw-teal/5',
  },
  {
    icon: Lightbulb,
    title: 'Teach & Learn',
    description: 'Staff become teachers. Workshops from sustainable living to launching a social hostel.',
    color: 'from-kw-coral/10 to-kw-coral/5',
    border: 'border-kw-coral/20',
    accent: 'text-kw-coral',
    iconBg: 'from-kw-coral/20 to-kw-coral/5',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
} as const;

interface SauceStageProps {
  onAdvanceChapter?: () => void;
}

export function SauceStage({ onAdvanceChapter }: SauceStageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/teach_cover_illustration.png"
          alt="Teachcation concept"
          fill
          className="object-cover"
          style={{ opacity: 0.08 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kw-charcoal/80 via-kw-charcoal/90 to-kw-charcoal" />
      </div>

      <div className="relative z-10 p-6 w-full max-w-xl">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3">
            Chapter 4
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream font-heading mb-2">
            Sleep Here. Create There.
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm">
            Three pillars of differentiation
          </p>
        </motion.div>

        <motion.div
          className="w-full space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                className={`bg-gradient-to-r ${pillar.color} backdrop-blur border ${pillar.border} rounded-2xl p-4 flex items-start gap-4 group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Icon container (replaced mini thumbnails) */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.iconBg} border ${pillar.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${pillar.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${pillar.accent}`}>{pillar.title}</h3>
                  </div>
                  <p className="text-kw-cream/60 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Journey diagram */}
        <motion.div
          className="mt-4 relative w-full max-w-xs mx-auto h-36 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <Image
            src="/images/moodboard/teach_circular_journey.png"
            alt="Guest journey — arrive, learn, create, share"
            fill
            className="object-contain opacity-70"
          />
        </motion.div>

        <motion.div
          className="mt-4 bg-kw-dark/60 backdrop-blur border border-kw-copper/10 rounded-xl px-5 py-3 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <p className="text-kw-cream/80 text-sm">
            Capturing the <span className="text-kw-peach font-medium">Educational Tourism</span> market
            that standard accommodations cannot serve.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
