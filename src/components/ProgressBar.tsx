'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { chapters } from '@/lib/chapters';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProgressBarProps {
  activeChapter: number;
  onChapterClick?: (chapter: number) => void;
}

const chapterIcons: Record<number, string> = {
  1: '🔍',
  2: '⚓',
  3: '🏭',
  4: '✨',
  5: '🤝',
  6: '📊',
  7: '👥',
  8: '🚀',
};

export function ProgressBar({ activeChapter, onChapterClick }: ProgressBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if (activeChapter === 0) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  const scrollTo = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-kw-dark border-t border-kw-copper/10">
      {/* Scroll arrows */}
      <button
        onClick={() => scrollTo('left')}
        className="absolute left-0 top-0 bottom-0 z-10 px-1.5 bg-gradient-to-r from-kw-dark via-kw-dark/90 to-transparent flex items-center text-kw-cream/40 hover:text-kw-cream/70 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => scrollTo('right')}
        className="absolute right-0 top-0 bottom-0 z-10 px-1.5 bg-gradient-to-l from-kw-dark via-kw-dark/90 to-transparent flex items-center text-kw-cream/40 hover:text-kw-cream/70 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Scrollable chapter strip */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-1 px-8 py-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {chapters.map((chapter) => {
          const isActive = chapter.id === activeChapter;
          const isPast = chapter.id < activeChapter;
          const isFuture = chapter.id > activeChapter;

          return (
            <button
              key={chapter.id}
              onClick={() => onChapterClick?.(chapter.id)}
              className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shrink-0 transition-all duration-300 ${
                isActive
                  ? 'border border-kw-copper/30 text-kw-peach scale-105'
                  : isPast
                  ? 'bg-kw-dark/50 border border-kw-copper/10 text-kw-cream/60 hover:bg-kw-copper/10 hover:border-kw-copper/20 cursor-pointer'
                  : 'bg-kw-dark/30 border border-kw-cream/5 text-kw-cream/30 hover:text-kw-cream/50 cursor-pointer'
              }`}
            >
              <span className={`text-sm ${isFuture ? 'opacity-40' : ''}`}>
                {chapterIcons[chapter.id]}
              </span>
              <span className="font-medium">{chapter.title}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-kw-copper animate-pulse" />
              )}
              {isActive && (
                <motion.span
                  layoutId="activeChapterTab"
                  className="absolute inset-0 rounded-lg bg-kw-copper/10 border border-kw-copper/25 -z-10"
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
