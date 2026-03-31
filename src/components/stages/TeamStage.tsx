'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Daniel',
    badge: 'The "Why"',
    role: 'Visionary & Community Builder',
    bio: 'Journey from South Africa to Linz taught him the challenges of integration firsthand. Expertise in sales, IT, and community building.',
    tags: ['Social Vision', 'Sales & IT', 'Community Building'],
    image: '/images/moodboard/daniel_austria_southafrica.jpg',
    badgeColor: 'bg-kw-teal/20 text-kw-teal',
  },
  {
    name: 'Anna',
    badge: 'The "How"',
    role: 'Co-Founder & Operations',
    bio: 'Hotelkauffrau with 8 years building and running 2 hostels in India from the ground up. Proven operational mastery.',
    tags: ['8yr Hostel Ops', 'Built 2 Hostels', 'Day 1 Ready'],
    image: '/images/moodboard/teach_founders_portrait.png',
    badgeColor: 'bg-kw-coral/20 text-kw-coral',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 250, damping: 25 },
  },
} as const;

export function TeamStage({ onAdvanceChapter }: { onAdvanceChapter?: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/moodboard/teach_founders_portrait.png"
          alt="Founders"
          fill
          className="object-cover"
          style={{ opacity: 0.07 }}
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
            Chapter 7
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-kw-cream font-heading mb-2">
            Vision Meets Execution
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-kw-copper to-transparent mx-auto mb-3 animate-growLine" />
          <p className="text-kw-cream/60 text-sm">
            Two founders, perfectly complementary
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={cardVariants}
              className="bg-kw-dark/70 backdrop-blur border border-kw-copper/15 rounded-2xl p-5 group hover:border-kw-copper/25 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Real photo */}
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-kw-copper/25 group-hover:border-kw-copper/50 transition-colors">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-kw-cream">{f.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-kw-cream/50 text-xs mb-2">{f.role}</p>
                  <p className="text-kw-cream/70 text-sm leading-relaxed mb-3">{f.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-kw-charcoal border border-kw-copper/10 text-kw-cream/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-kw-cream/40 text-xs text-center mt-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Plus a whole network of eager supporters ready to contribute meaningfully.
        </motion.p>
      </div>
    </div>
  );
}
