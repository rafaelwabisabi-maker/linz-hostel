'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Expat Friendliness', value: '#49', sub: 'of 53 countries', icon: '🌍' },
  { label: 'Overnight Stays', value: '1.02M', sub: 'annually in Linz', icon: '🏨' },
  { label: 'International Students', value: '24K+', sub: 'at JKU alone', icon: '🎓' },
  { label: 'Third Places', value: '0', sub: 'bridging locals & visitors', icon: '🔗' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
} as const;

export function ProblemStage({ onAdvanceChapter }: { onAdvanceChapter?: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/location-2.jpg"
          alt="Tabakfabrik interior"
          fill
          className="object-cover"
          style={{ opacity: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kw-charcoal via-kw-charcoal/90 to-kw-charcoal/70" />
      </div>

      <div className="relative z-10 p-8 w-full max-w-2xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3">
            Chapter 1
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream mb-3 font-heading">
            1 Million Visitors. Zero Connection.
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm max-w-md mx-auto">
            Austria ranks #49 of 53 for expat friendliness. Linz has 24K+ international students but zero Third Places.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 w-full max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ scale: 1.04, borderColor: 'rgba(196, 153, 126, 0.3)' }}
              className="bg-kw-dark/80 backdrop-blur border border-kw-copper/15 rounded-2xl p-4 text-center group"
            >
              <span className="text-xl mb-1.5 block group-hover:scale-110 transition-transform">{stat.icon}</span>
              <p className="text-2xl font-bold text-kw-peach mb-0.5">{stat.value}</p>
              <p className="text-[11px] text-kw-cream/70 font-medium">{stat.label}</p>
              <p className="text-[10px] text-kw-cream/40 mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-kw-cream/30 text-[10px] mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Source: InterNations Expat Insider 2024
        </motion.p>
      </div>
    </div>
  );
}
