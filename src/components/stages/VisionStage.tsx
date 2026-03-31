'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function VisionStage({ onAdvanceChapter }: { onAdvanceChapter?: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/anchor_common_room.png"
          alt="Community common room vision"
          fill
          className="object-cover"
          style={{ opacity: 0.07 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kw-charcoal/80 via-kw-charcoal/90 to-kw-charcoal" />
      </div>

      <div className="relative z-10 p-8 w-full max-w-xl">
        <motion.div className="text-center mb-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3">
            Chapter 2
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream mb-2 font-heading">
            We Engineer Connection.
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm">
            A 90-bed hostel designed to make strangers become friends
          </p>
        </motion.div>

        <div className="w-full space-y-5">
          {/* Old Model */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, type: 'spring' as const, stiffness: 300, damping: 30 }} className="bg-kw-dark/70 backdrop-blur border border-kw-cream/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center text-red-400/80 text-sm font-bold">
                X
              </div>
              <h3 className="text-kw-cream/50 font-medium">The Old Model</h3>
            </div>
            <div className="flex items-center justify-center gap-3 text-kw-cream/40 text-sm">
              <span className="bg-kw-charcoal px-3 py-1.5 rounded-lg">Reception Desk</span>
              <span className="text-kw-cream/30">+</span>
              <span className="bg-kw-charcoal px-3 py-1.5 rounded-lg">Hallway</span>
              <span className="text-kw-cream/30">+</span>
              <span className="bg-kw-charcoal px-3 py-1.5 rounded-lg">Bed</span>
            </div>
            <p className="text-kw-cream/30 text-xs text-center mt-2">Transactional hospitality</p>
          </motion.div>

          {/* Animated arrow */}
          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' as const }}>
            <div className="w-10 h-10 rounded-full bg-kw-copper/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-kw-copper animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>

          {/* New Model */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: 'spring' as const, stiffness: 300, damping: 30 }} className="bg-gradient-to-br from-kw-copper/10 to-kw-copper/5 backdrop-blur border border-kw-copper/25 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-kw-copper/20 flex items-center justify-center text-kw-peach text-sm">
                ✓
              </div>
              <h3 className="text-kw-peach font-medium">The Anchor Model</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {['Live-in Staff', 'Living Room', 'Community Catalysts', 'Bed'].map((item, i) => (
                <span key={item} className="contents">
                  {i > 0 && <span className="text-kw-copper/50">+</span>}
                  <span className="bg-kw-copper/10 text-kw-peach border border-kw-copper/20 px-3 py-1.5 rounded-lg animate-countUp" style={{ animationDelay: `${700 + i * 100}ms` }}>
                    {item}
                  </span>
                </span>
              ))}
            </div>
            <p className="text-kw-peach/70 text-xs text-center mt-3">Designed for human connection</p>
          </motion.div>
        </div>

        <motion.div className="mt-5 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }}>
          <p className="text-kw-cream/50 text-xs">
            90 beds &middot; Community dinners 6-8pm nightly &middot; No traditional lobby
          </p>
        </motion.div>
      </div>
    </div>
  );
}
