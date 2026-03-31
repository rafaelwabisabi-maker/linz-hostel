'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/location-1.jpg', caption: 'Open floor plan with industrial columns' },
  { src: '/images/location-2.jpg', caption: 'Glass partitions and factory windows' },
  { src: '/images/location-3.jpg', caption: 'Corridor with natural light' },
  { src: '/images/location-4.jpg', caption: 'Large windows flooding light in' },
  { src: '/images/location-5.jpg', caption: 'Glass-walled rooms ready for conversion' },
  { src: '/images/location-6.jpg', caption: 'Expansive hallway with column structure' },
  { src: '/images/moodboard/anchor_before_after.png', caption: 'Transformation vision — before & after' },
];

interface LocationStageProps {
  galleryIndex?: number;
  onAdvanceChapter?: () => void;
}

export function LocationStage({ galleryIndex = 0, onAdvanceChapter }: LocationStageProps) {
  const [currentIndex, setCurrentIndex] = useState(galleryIndex);

  const isLastPhoto = currentIndex === images.length - 1;

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLastPhoto) {
      onAdvanceChapter?.();
    } else {
      next();
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Full-bleed background of current image */}
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex].src}
          alt=""
          fill
          className="object-cover transition-opacity duration-700"
          style={{ opacity: 0.08 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kw-charcoal/60 via-kw-charcoal/80 to-kw-charcoal" />
      </div>

      <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col items-center">
        <div className="text-center mb-5">
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3 animate-fadeInUp">
            Chapter 3
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream font-heading mb-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            Inside Linz&apos;s Icon
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            The Tabakfabrik &mdash; where industry meets community
          </p>
        </div>

        {/* Photo Gallery — larger */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden group animate-scaleReveal" style={{ animationDelay: '300ms' }}>
          {/* Clickable image area */}
          <div className="absolute inset-0 cursor-pointer z-10" onClick={handleImageClick} />

          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            fill
            className="object-cover transition-all duration-700"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {/* "Click to continue" hint on last photo */}
          {isLastPhoto && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <span className="text-kw-cream/80 text-sm font-medium bg-kw-charcoal/60 backdrop-blur px-4 py-2 rounded-full animate-pulse">
                Click to continue &rarr;
              </span>
            </div>
          )}

          {/* Photo counter */}
          <div className="absolute top-3 right-3 bg-kw-charcoal/60 backdrop-blur px-2 py-1 rounded-full text-kw-cream/70 text-xs z-20 pointer-events-none">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-kw-charcoal/60 backdrop-blur flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-all hover:bg-kw-charcoal/80 hover:scale-110 z-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-kw-charcoal/60 backdrop-blur flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-all hover:bg-kw-charcoal/80 hover:scale-110 z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 pointer-events-none">
            <p className="text-kw-cream text-sm font-medium">{images[currentIndex].caption}</p>
            <p className="text-kw-cream/50 text-xs mt-1">
              Site visit — January 2026
            </p>
          </div>
        </div>

        {/* Dots indicator — larger and more inviting */}
        <div className="flex gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-kw-copper w-6' : 'bg-kw-cream/20 w-2 hover:bg-kw-cream/40'
              }`}
            />
          ))}
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {['Shell Ready', 'Industrial Heritage', '90-Bed Capacity', 'Innovation Hub'].map((tag, i) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-kw-copper/15 text-kw-cream/60 bg-kw-dark/60 backdrop-blur animate-countUp"
              style={{ animationDelay: `${500 + i * 80}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
