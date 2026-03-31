'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProblemStage } from './stages/ProblemStage';
import { VisionStage } from './stages/VisionStage';
import { LocationStage } from './stages/LocationStage';
import { SauceStage } from './stages/SauceStage';
import { EcosystemStage } from './stages/EcosystemStage';
import { NumbersStage } from './stages/NumbersStage';
import { TeamStage } from './stages/TeamStage';
import { AskStage } from './stages/AskStage';
import { WelcomeStage } from './stages/WelcomeStage';

interface StageAreaProps {
  activeChapter: number;
  activeMetric?: string;
  activeChart?: string;
  showGallery?: boolean;
  galleryIndex?: number;
  onAdvanceChapter?: () => void;
}

const stageComponents: Record<string, React.ComponentType<{ activeMetric?: string; activeChart?: string; galleryIndex?: number; onAdvanceChapter?: () => void }>> = {
  problem: ProblemStage,
  vision: VisionStage,
  location: LocationStage,
  sauce: SauceStage,
  ecosystem: EcosystemStage,
  numbers: NumbersStage,
  team: TeamStage,
  ask: AskStage,
};

const chapterToStage: Record<number, string> = {
  1: 'problem',
  2: 'vision',
  3: 'location',
  4: 'sauce',
  5: 'ecosystem',
  6: 'numbers',
  7: 'team',
  8: 'ask',
};

const cubicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: cubicEase },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.98,
    transition: { duration: 0.3, ease: cubicEase },
  },
} as const;

export function StageArea({ activeChapter, activeMetric, activeChart, galleryIndex, onAdvanceChapter }: StageAreaProps) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setShowHint(false);
    if (activeChapter > 0 && activeChapter < 8) {
      const timer = setTimeout(() => setShowHint(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeChapter]);

  const stageKey = chapterToStage[activeChapter];
  const StageComponent = stageKey ? stageComponents[stageKey] : null;

  return (
    <div
      className="h-full w-full overflow-hidden bg-gradient-to-br from-kw-charcoal via-kw-dark to-kw-charcoal relative cursor-pointer paper-bg"
      onClick={() => onAdvanceChapter?.()}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChapter}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-full relative z-10"
        >
          {activeChapter === 0 ? (
            <WelcomeStage onAdvanceChapter={onAdvanceChapter} />
          ) : StageComponent ? (
            <StageComponent
              activeMetric={activeMetric}
              activeChart={activeChart}
              galleryIndex={galleryIndex}
              onAdvanceChapter={onAdvanceChapter}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>

      {/* Click hint */}
      {showHint && activeChapter > 0 && activeChapter < 8 && (
        <div className="absolute bottom-4 right-4 text-kw-cream/30 text-xs transition-opacity duration-500 pointer-events-none z-20">
          Click to continue &rarr;
        </div>
      )}
    </div>
  );
}
