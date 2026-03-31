'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Bed Capacity', value: '90', unit: 'beds', highlight: false },
  { label: 'Avg Nightly Rate', value: '€28', unit: 'RevPAB', highlight: false },
  { label: 'Break-Even', value: '48%', unit: 'occupancy', highlight: true },
  { label: 'Op. Margin', value: '~48%', unit: 'per bed', highlight: false },
];

const revenue = [
  { year: 'Year 1', amount: '€920K', numK: 920, detail: '82% occupancy', profit: '€402K net' },
  { year: 'Year 2', amount: '€1.05M', numK: 1050, detail: 'Academy expansion', profit: '' },
  { year: 'Year 3', amount: '€1.18M', numK: 1180, detail: 'Full maturity', profit: '' },
];

const bottomContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } },
} as const;

const bottomItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } },
} as const;

interface NumbersStageProps {
  activeMetric?: string;
  activeChart?: string;
  onAdvanceChapter?: () => void;
}

export function NumbersStage({ activeChart }: NumbersStageProps) {
  const showFunding = activeChart === 'funding_structure';

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/anchor_revenue_linz_skyline.png"
          alt="Linz skyline"
          fill
          className="object-cover"
          style={{ opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kw-charcoal/80 via-kw-charcoal/90 to-kw-charcoal" />
      </div>

      <div className="relative z-10 p-6 overflow-y-auto w-full flex flex-col items-center">
        <div className="text-center mb-5">
          <p className="text-kw-copper text-xs font-semibold tracking-widest uppercase mb-3 animate-fadeInUp">
            Chapter 6
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-kw-cream mb-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            {showFunding ? 'Funding Structure' : 'Break-Even at 48%'}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            {showFunding ? '€400K total capital required' : 'High occupancy, low overhead'}
          </p>
        </div>

        {showFunding ? (
          <div className="w-full max-w-md space-y-3">
            {[
              { label: 'Bridge Funding', amount: '€25K', pct: 6, desc: 'Secure Tabakfabrik location', color: 'bg-kw-copper' },
              { label: 'Angel Investment', amount: '€100K', pct: 25, desc: 'Your ask — unlocks €300K+', color: 'bg-kw-peach' },
              { label: 'Bank + Grants', amount: '€275K', pct: 69, desc: 'KGG/UBG 80% risk cover', color: 'bg-kw-cream/40' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="bg-kw-dark/70 backdrop-blur border border-kw-copper/15 rounded-xl p-4 animate-slideInRight"
                style={{ animationDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-kw-cream font-medium text-sm">{item.label}</span>
                  <span className="text-kw-peach font-bold">{item.amount}</span>
                </div>
                <div className="w-full bg-kw-dark/50 rounded-full h-2 mb-2">
                  <div
                    style={{ width: `${item.pct}%` }}
                    className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                  />
                </div>
                <p className="text-kw-cream/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Key metrics */}
            <div className="grid grid-cols-4 gap-3 w-full max-w-lg mb-5">
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`rounded-xl p-3 text-center animate-countUp group hover:scale-105 transition-transform ${
                    metric.highlight
                      ? 'bg-kw-copper/10 border border-kw-copper/25'
                      : 'bg-kw-dark/70 backdrop-blur border border-kw-copper/15'
                  }`}
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <p className={`text-xl font-bold ${metric.highlight ? 'text-kw-peach' : 'text-kw-cream'}`}>
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-kw-cream/50 mt-0.5">{metric.label}</p>
                  <p className="text-[9px] text-kw-cream/40">{metric.unit}</p>
                </div>
              ))}
            </div>

            {/* Revenue projection */}
            <div className="w-full max-w-lg space-y-2">
              <p className="text-kw-cream/50 text-xs font-medium uppercase tracking-wider mb-3 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                Revenue Projection
              </p>
              {revenue.map((r, i) => (
                <motion.div
                  key={r.year}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                >
                  <span className="text-kw-cream/50 text-xs w-12 shrink-0">{r.year}</span>
                  <div className="flex-1 bg-kw-dark/50 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(r.numK / 1180) * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="h-full bg-gradient-to-r from-kw-copper to-kw-terracotta rounded-full flex items-center justify-end pr-3"
                    >
                      <span className="text-white text-xs font-semibold whitespace-nowrap">{r.amount}</span>
                    </motion.div>
                  </div>
                  <span className="text-kw-cream/50 text-[10px] w-28 shrink-0">{r.detail}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom highlights */}
            <motion.div
              className="flex gap-4 mt-5"
              initial="hidden"
              animate="visible"
              variants={bottomContainerVariants}
            >
              {[
                { value: 'Month 14', label: 'Break-even' },
                { value: '€400K', label: 'Total capital' },
                { value: '1:4.5', label: 'SROI ratio' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={bottomItemVariants}
                  className="bg-kw-copper/10 border border-kw-copper/20 rounded-xl px-4 py-2 text-center"
                >
                  <p className="text-kw-peach font-bold text-lg">{item.value}</p>
                  <p className="text-kw-cream/50 text-[10px]">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
