'use client';

import Image from 'next/image';
import { useState } from 'react';

// ─── Brand ─────────────────────────────────────────────────────────────────
const C = {
  charcoal: '#4A4543',
  copper: '#C4997E',
  coral: '#E76E50',
  cream: '#C8BCB4',
  dark: '#3d3a38',
  bg: '#f7f4f0',
  white: '#ffffff',
};

const P = {
  hero:      'https://images.pexels.com/photos/31603733/pexels-photo-31603733.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tourism:   'https://images.pexels.com/photos/5137967/pexels-photo-5137967.jpeg?auto=compress&cs=tinysrgb&w=1600',
  newInLinz: 'https://images.pexels.com/photos/4907179/pexels-photo-4907179.jpeg?auto=compress&cs=tinysrgb&w=1600',
  nomads:    'https://images.pexels.com/photos/5311709/pexels-photo-5311709.jpeg?auto=compress&cs=tinysrgb&w=1600',
  teachCard: 'https://images.pexels.com/photos/6611376/pexels-photo-6611376.jpeg?auto=compress&cs=tinysrgb&w=1600',
  flowZone:  'https://images.pexels.com/photos/29545947/pexels-photo-29545947.jpeg?auto=compress&cs=tinysrgb&w=1600',
  dinners:   'https://images.pexels.com/photos/5638817/pexels-photo-5638817.jpeg?auto=compress&cs=tinysrgb&w=1600',
  workshop:  'https://images.pexels.com/photos/6611262/pexels-photo-6611262.jpeg?auto=compress&cs=tinysrgb&w=1600',
  linzStreet:'https://images.pexels.com/photos/5883096/pexels-photo-5883096.jpeg?auto=compress&cs=tinysrgb&w=1600',
  toasting:  'https://images.pexels.com/photos/5638820/pexels-photo-5638820.jpeg?auto=compress&cs=tinysrgb&w=1600',
  topDinner: 'https://images.pexels.com/photos/6232561/pexels-photo-6232561.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cowork:    'https://images.pexels.com/photos/29545947/pexels-photo-29545947.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

// ─── NAV ───────────────────────────────────────────────────────────────────
function Nav() {
  const links = ['Stay', 'Community', 'Location', 'For Investors'];
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: C.dark, borderBottom: '1px solid rgba(196,153,126,0.12)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 48px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 17, fontWeight: 700, lineHeight: 1 }}>
            Linz Hostel
          </div>
          <div style={{ color: C.copper, fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 3 }}>
            The Social Impact Hub
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              style={{ color: 'rgba(200,188,180,0.75)', fontSize: 13, letterSpacing: '0.04em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,188,180,0.75)')}>
              {l}
            </a>
          ))}
        </nav>
        <a href="#for-investors"
          style={{ background: C.coral, color: '#fff', padding: '10px 22px', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#c85a38')}
          onMouseLeave={e => (e.currentTarget.style.background = C.coral)}>
          Be Part Of It →
        </a>
      </div>
    </header>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src={P.hero} alt="Linz Hostel" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(61,58,56,0.55) 0%, rgba(61,58,56,0.75) 60%, rgba(61,58,56,0.92) 100%)' }} />
      </div>
      <div style={{
        position: 'relative', zIndex: 10, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        maxWidth: 1280, margin: '0 auto', padding: '0 48px 88px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 36, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Linz · Austria · Opening 2026
          </span>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(52px, 7.5vw, 104px)',
          color: C.cream, fontWeight: 700, lineHeight: 1.02, margin: '0 0 28px', maxWidth: 820,
        }}>
          Nobody stays<br />a stranger.
        </h1>
        <p style={{ color: 'rgba(200,188,180,0.8)', fontSize: 18, lineHeight: 1.75, maxWidth: 500, margin: '0 0 44px' }}>
          A 90-bed hostel where tourists become makers, strangers become neighbours,
          and every stay funds a social mission.
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="#stay"
            style={{ background: C.coral, color: '#fff', padding: '15px 36px', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c85a38')}
            onMouseLeave={e => (e.currentTarget.style.background = C.coral)}>
            Discover the Model
          </a>
          <a href="#for-investors"
            style={{ border: '1px solid rgba(200,188,180,0.4)', color: C.cream, padding: '15px 36px', fontSize: 14, letterSpacing: '0.05em', textDecoration: 'none', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = C.copper)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,188,180,0.4)')}>
            Invest in Connection →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── STATS STRIP ───────────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    { value: '90', label: 'Revenue Beds' },
    { value: '700K+', label: 'Festival Visitors / Year' },
    { value: '#49', label: 'Austria Friendliness Index' },
    { value: 'Month 14', label: 'Operating Break-Even' },
  ];
  return (
    <section style={{ background: C.dark, padding: '56px 48px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
      }}>
        {stats.map(({ value, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 52, color: C.copper, fontWeight: 700, lineHeight: 1, marginBottom: 10 }}>
              {value}
            </div>
            <div style={{ color: 'rgba(200,188,180,0.55)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── STAY CARD ─────────────────────────────────────────────────────────────
function StayCard({ image, eyebrow, title, desc }: { image: string; eyebrow: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: 'relative', height: 500, overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div style={{ position: 'absolute', inset: 0, transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(61,58,56,0.95) 0%, rgba(61,58,56,0.55) 100%)'
          : 'linear-gradient(to top, rgba(61,58,56,0.82) 0%, rgba(61,58,56,0.08) 55%)',
        transition: 'background 0.45s',
      }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px' }}>
        <div style={{ color: C.copper, fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 10 }}>
          {eyebrow}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 26, fontWeight: 700, margin: '0 0 12px', lineHeight: 1.2 }}>
          {title}
        </h3>
        <div style={{ maxHeight: hovered ? '90px' : '0', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)' }}>
          <p style={{ color: 'rgba(200,188,180,0.82)', fontSize: 14, lineHeight: 1.65, margin: '0 0 16px' }}>
            {desc}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.copper, fontSize: 13 }}>
          <span>Learn more</span>
          <span style={{ transform: hovered ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.3s', display: 'inline-block' }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── STAY TYPES ────────────────────────────────────────────────────────────
function StayTypes() {
  const cards = [
    { image: P.tourism,   eyebrow: 'Short Stay',    title: 'Tourism & Festivals',      desc: 'Linz hosts 700K+ visitors each year. We give them a home with context — not just a bed. Priced to compete. Built to connect.' },
    { image: P.newInLinz, eyebrow: 'New In Linz',   title: 'Students & New Arrivals',  desc: 'Transitional housing designed for belonging. 18 beds on long-term social rental — priced for real life, funded by the community.' },
    { image: P.nomads,    eyebrow: 'Work & Create', title: 'Digital Nomads',            desc: 'High-speed internet, desk pods, community dinners. Productive days. Connected evenings. The city as your second screen.' },
    { image: P.teachCard, eyebrow: 'Teachcation',   title: 'Come to Learn',             desc: "Book a stay. Leave with a skill. Access Linz's creative ecosystem: fab labs, maker spaces, ceramics, code, fermentation, film." },
  ];
  return (
    <section id="stay" style={{ background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 48px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Room for Everyone</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', color: C.charcoal, fontWeight: 700, margin: 0, lineHeight: 1.1, maxWidth: 520 }}>
          A home for everyone<br />in Linz.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {cards.map(c => <StayCard key={c.title} {...c} />)}
      </div>
    </section>
  );
}

// ─── COMMUNITY ─────────────────────────────────────────────────────────────
function Community() {
  const features = [
    { icon: '◎', title: 'Flow Zone', desc: 'Our community lounge runs 16 hours a day. Co-working by morning, gathering by evening — a living room the whole neighbourhood can use.', image: P.flowZone },
    { icon: '◈', title: 'Nightly Community Dinners', desc: 'Strangers become friends over shared meals. Our kitchen is a stage. Our table is a catalyst. Every Tuesday and Thursday.', image: P.dinners },
    { icon: '◇', title: 'Workshops & Skills', desc: 'From ceramics to code, 3D printing to fermentation. Real skills from real makers in the neighbourhood, every week.', image: P.workshop },
  ];
  return (
    <section id="community" style={{ background: C.white, padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Beyond the Bed</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 3.5vw, 48px)', color: C.charcoal, fontWeight: 700, margin: '0 0 72px', lineHeight: 1.15, maxWidth: 480 }}>
          Built for connection,<br />not just accommodation.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {features.map(({ icon, title, desc, image }) => (
            <div key={title}>
              <div style={{ position: 'relative', height: 240, marginBottom: 28, overflow: 'hidden' }}>
                <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(74,69,67,0.12)' }} />
              </div>
              <div style={{ width: 44, height: 44, border: `1px solid ${C.copper}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.copper, fontSize: 18, marginBottom: 20 }}>
                {icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: C.charcoal, fontWeight: 700, margin: '0 0 12px' }}>
                {title}
              </h3>
              <p style={{ color: '#6b6460', fontSize: 15, lineHeight: 1.72, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROBLEM ───────────────────────────────────────────────────────────────
function Problem() {
  return (
    <section style={{ background: C.charcoal, padding: '100px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
        <Image src={P.linzStreet} alt="" fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, background: C.copper }} />
            <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>The Problem</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(44px, 5.5vw, 76px)', color: C.cream, fontWeight: 700, lineHeight: 1.02, margin: '0 0 32px' }}>
            1 million visitors.<br />Zero connection.
          </h2>
          <p style={{ color: 'rgba(200,188,180,0.75)', fontSize: 17, lineHeight: 1.82, margin: 0 }}>
            Austria ranks #49 out of 53 countries for social friendliness.
            Linz draws over 700,000 festival visitors every year — yet most leave
            without a single real conversation. Existing accommodation doesn't bridge
            the gap between visitor and community. We do.
          </p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,153,126,0.18)', padding: 48 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 21, color: C.cream, fontStyle: 'italic', lineHeight: 1.65, margin: '0 0 32px' }}>
            &ldquo;I&apos;ve been living in Linz for three months. I still don&apos;t know a single person outside of work.&rdquo;
          </p>
          <div style={{ width: 36, height: 1, background: C.copper, marginBottom: 14 }} />
          <p style={{ color: C.copper, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0 }}>
            The voice that started this project.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── TEACHCATION ───────────────────────────────────────────────────────────
function Teachcation() {
  return (
    <section style={{ background: C.bg, overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ position: 'relative', minHeight: 560 }}>
          <Image src={P.workshop} alt="Teachcation model" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(74,69,67,0.1)' }} />
        </div>
        <div style={{ padding: '88px 64px 88px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1, background: C.copper }} />
            <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Our Secret Sauce</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 3.5vw, 48px)', color: C.charcoal, fontWeight: 700, margin: '0 0 20px', lineHeight: 1.1 }}>
            Teachcation —<br />come to learn.
          </h2>
          <p style={{ color: '#6b6460', fontSize: 16, lineHeight: 1.78, margin: '0 0 36px' }}>
            We coined the term. Tourists who want more than sightseeing book a Teachcation:
            a curated stay that includes access to Linz&apos;s creative ecosystem —
            maker spaces, fab labs, coding workshops, ceramics studios, design sprints.
            You leave with a skill and a community.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { label: 'Typical stay', value: '4–7 nights' },
              { label: 'ADR premium', value: '+22%' },
              { label: 'Return rate', value: 'High' },
              { label: 'CAC', value: 'Near zero' },
            ].map(({ label, value }) => (
              <div key={label} style={{ borderLeft: `2px solid ${C.copper}`, paddingLeft: 16 }}>
                <div style={{ color: '#6b6460', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: C.charcoal, fontWeight: 700 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── IMPACT ────────────────────────────────────────────────────────────────
function Impact() {
  const metrics = [
    { value: '1:4.5', label: 'SROI — every €1 returns €4.50 social value' },
    { value: '18 beds', label: 'Permanently reserved for social rental' },
    { value: '€32', label: 'Average Daily Rate — premium hostel level' },
    { value: 'M14', label: 'Operating cash-flow positive at 48% occupancy' },
  ];
  return (
    <section style={{ background: C.white, padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'center' }}>
        <div style={{ position: 'relative', paddingBottom: 36 }}>
          <div style={{ position: 'relative', height: 520 }}>
            <Image src={P.toasting} alt="Social impact" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, right: -36, background: C.charcoal, padding: '32px 36px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: C.copper, fontSize: 42, fontWeight: 700, lineHeight: 1 }}>€1 = €4.50</div>
            <div style={{ color: 'rgba(200,188,180,0.6)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 6 }}>Social Return on Investment</div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1, background: C.copper }} />
            <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Hospitality for Good</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 3.2vw, 44px)', color: C.charcoal, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.15 }}>
            Profit and purpose<br />on the same balance sheet.
          </h2>
          <p style={{ color: '#6b6460', fontSize: 16, lineHeight: 1.78, margin: '0 0 48px' }}>
            The social mission isn&apos;t charity — it&apos;s strategy. Long-term social rentals
            create a revenue floor. The community they build becomes our marketing.
            Lower CAC. Higher retention. Better press.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {metrics.map(({ value, label }) => (
              <div key={label} style={{ borderLeft: `2px solid ${C.copper}`, paddingLeft: 18 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 26, color: C.charcoal, fontWeight: 700, marginBottom: 6 }}>{value}</div>
                <div style={{ color: '#6b6460', fontSize: 13, lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LOCATION ──────────────────────────────────────────────────────────────
function Location() {
  return (
    <section id="location" style={{ background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 48px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Where We Are</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 3.5vw, 48px)', color: C.charcoal, fontWeight: 700, margin: 0, lineHeight: 1.12, maxWidth: 440 }}>
            Linz&apos;s most creative<br />neighbourhood.
          </h2>
          <p style={{ color: '#6b6460', fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 380 }}>
            The district that Tabakfabrik made famous — Austria&apos;s most innovative
            creative hub, festival city, and tech scene. Ars Electronica, Grand Garage,
            JKU, and the Danube, all within walking distance.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '340px 260px', gap: 3 }}>
        <div style={{ position: 'relative', gridRow: '1 / 3' }}>
          <Image src={P.linzStreet} alt="Linz creative district" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src={P.topDinner} alt="Community" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src={P.cowork} alt="Workshops" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Image src={P.dinners} alt="Hostel culture" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(61,58,56,0.72)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 24 }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 28, fontWeight: 700 }}>Ars Electronica</div>
            <div style={{ color: C.copper, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6 }}>5 min walk</div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Image src={P.newInLinz} alt="Linz city" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(61,58,56,0.72)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 24 }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 28, fontWeight: 700 }}>Grand Garage</div>
            <div style={{ color: C.copper, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6 }}>Maker Hub · Adjacent</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ECOSYSTEM ─────────────────────────────────────────────────────────────
function Ecosystem() {
  const partners = [
    { name: 'Sparkasse Oberösterreich', role: 'Funding Partner' },
    { name: 'City of Linz', role: 'Government Champion' },
    { name: 'Ars Electronica', role: 'Culture & Tech' },
    { name: 'Grand Garage', role: 'Maker Hub' },
    { name: 'JKU Linz', role: 'Research & Students' },
    { name: 'Welcome2UpperAustria', role: 'Social Integration' },
    { name: 'WKO', role: 'Business Support' },
    { name: 'VIVA Fitness', role: 'Wellness' },
    { name: 'Thamosana', role: 'Food · Inside Tabakfabrik' },
  ];
  return (
    <section style={{ background: C.white, padding: '80px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 52 }}>
          <div style={{ width: 32, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>The Ecosystem</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(196,153,126,0.18)' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {partners.map(({ name, role }) => (
            <div key={name}
              style={{ border: '1px solid rgba(74,69,67,0.15)', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 3, transition: 'border-color 0.2s', cursor: 'default' }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = C.copper)}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,69,67,0.15)')}>
              <span style={{ fontSize: 14, color: C.charcoal, fontWeight: 500 }}>{name}</span>
              <span style={{ fontSize: 11, color: C.copper, letterSpacing: '0.08em' }}>{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOR INVESTORS ─────────────────────────────────────────────────────────
function Investors() {
  const rows = [
    { year: 'Year 1', occ: '38%', rev: '€360K', ebitda: '−€38K', note: 'Ramp-up phase', pos: false },
    { year: 'Year 2', occ: '52%', rev: '€492K', ebitda: '+€48K', note: 'Cash-flow positive', pos: true },
    { year: 'Year 3', occ: '65%', rev: '€615K', ebitda: '+€128K', note: 'Full cruising speed', pos: true },
  ];
  const funding = [
    { source: 'Own Equity / Pre-Sales', amount: '€100,000', bar: '25%' },
    { source: 'Sparkasse OÖ Loan', amount: '€220,000', bar: '55%' },
    { source: 'Public Grants (AWS / OÖ)', amount: '€80,000', bar: '20%' },
  ];
  return (
    <section id="for-investors" style={{ background: C.charcoal, padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: C.copper }} />
          <span style={{ color: C.copper, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>For Investors</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', color: C.cream, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.08, maxWidth: 620 }}>
          Your €100K pre-books<br />your own clients.
        </h2>
        <p style={{ color: 'rgba(200,188,180,0.65)', fontSize: 16, lineHeight: 1.75, margin: '0 0 68px', maxWidth: 540 }}>
          A hospitality asset with a social licence. ESG-aligned, bank-backed, grant-supported.
          Total target: €400,000 across equity, Sparkasse loan, and public grants.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 64 }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr 1fr 1fr 1fr', gap: 12, paddingBottom: 14, borderBottom: '1px solid rgba(196,153,126,0.25)' }}>
              {['Year', 'Occupancy', 'Revenue', 'EBITDA', 'Status'].map(h => (
                <div key={h} style={{ color: C.copper, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{h}</div>
              ))}
            </div>
            {rows.map(r => (
              <div key={r.year} style={{ display: 'grid', gridTemplateColumns: '72px 1fr 1fr 1fr 1fr', gap: 12, padding: '20px 0', borderBottom: '1px solid rgba(196,153,126,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontWeight: 700, fontSize: 18 }}>{r.year}</div>
                <div style={{ color: 'rgba(200,188,180,0.65)', fontSize: 15 }}>{r.occ}</div>
                <div style={{ color: C.cream, fontSize: 15 }}>{r.rev}</div>
                <div style={{ color: r.pos ? '#74c48a' : '#d47070', fontSize: 15 }}>{r.ebitda}</div>
                <div style={{ color: 'rgba(200,188,180,0.45)', fontSize: 12 }}>{r.note}</div>
              </div>
            ))}
            <div style={{ marginTop: 28, padding: '20px 24px', background: 'rgba(196,153,126,0.07)', border: '1px solid rgba(196,153,126,0.18)' }}>
              <div style={{ display: 'flex', gap: 44 }}>
                {[{ label: 'DSCR by Y2', value: '>1.3×' }, { label: 'Revenue Floor', value: '20%' }, { label: 'Total Ask', value: '€400K' }].map(({ label, value }) => (
                  <div key={label}>
                    <div style={{ color: C.copper, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 28, fontWeight: 700 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ color: C.cream, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 28px', fontWeight: 400 }}>Funding Structure</h3>
            {funding.map(({ source, amount, bar }) => (
              <div key={source} style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ color: 'rgba(200,188,180,0.75)', fontSize: 14 }}>{source}</span>
                  <span style={{ color: C.cream, fontSize: 14, fontWeight: 600 }}>{amount}</span>
                </div>
                <div style={{ height: 3, background: 'rgba(196,153,126,0.14)', borderRadius: 2 }}>
                  <div style={{ height: '100%', width: bar, background: C.copper, borderRadius: 2 }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 40, padding: 24, border: '1px solid rgba(196,153,126,0.25)' }}>
              <p style={{ color: 'rgba(200,188,180,0.75)', fontSize: 14, lineHeight: 1.72, margin: '0 0 20px' }}>
                Building with founding partners now. Early investors get preferred terms,
                permanent recognition, and a hostel built around their community.
              </p>
              <a href="mailto:daniel@linzhostel.com"
                style={{ display: 'inline-block', background: C.coral, color: '#fff', padding: '13px 26px', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c85a38')}
                onMouseLeave={e => (e.currentTarget.style.background = C.coral)}>
                Start the Conversation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── JOIN CTA ──────────────────────────────────────────────────────────────
function JoinCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 480, display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src={P.hero} alt="" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(61,58,56,0.87)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '88px 48px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', color: C.cream, fontWeight: 700, margin: '0 0 18px', lineHeight: 1.08, maxWidth: 540 }}>
            Be a founding partner —<br />not a spectator.
          </h2>
          <p style={{ color: 'rgba(200,188,180,0.7)', fontSize: 16, margin: 0, maxWidth: 420, lineHeight: 1.72 }}>
            Early partners get preferred terms, permanent recognition, and a hostel
            built around their community. We&apos;re building Linz Hostel now.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
          <a href="mailto:daniel@linzhostel.com"
            style={{ display: 'block', background: C.coral, color: '#fff', padding: '16px 32px', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', textAlign: 'center' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c85a38')}
            onMouseLeave={e => (e.currentTarget.style.background = C.coral)}>
            Contact Daniel →
          </a>
          <a href="#for-investors"
            style={{ display: 'block', border: '1px solid rgba(196,153,126,0.35)', color: C.copper, padding: '16px 32px', fontSize: 14, letterSpacing: '0.05em', textDecoration: 'none', textAlign: 'center' }}>
            View Financials
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: 'Stay', links: ['Short Stay', 'Long-Term Social Rental', 'Teachcation', 'Group & Corporate'] },
    { title: 'About', links: ['Our Mission', 'The Anchor Model', 'Team', 'Partners'] },
    { title: 'Connect', links: ['For Investors', 'For Partners', 'Press Kit', 'daniel@linzhostel.com'] },
  ];
  return (
    <footer style={{ background: C.dark, padding: '72px 48px', borderTop: '1px solid rgba(196,153,126,0.08)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', color: C.cream, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Linz Hostel</div>
          <div style={{ color: C.copper, fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 22 }}>The Social Impact Hub</div>
          <p style={{ color: 'rgba(200,188,180,0.45)', fontSize: 14, lineHeight: 1.72, margin: '0 0 28px', maxWidth: 280 }}>
            A 90-bed hostel that turns strangers into neighbours and tourists into makers.
            Linz, Austria. Opening 2026.
          </p>
          <div style={{ color: 'rgba(200,188,180,0.3)', fontSize: 12 }}>© 2026 Linz Hostel GmbH (in formation)</div>
        </div>
        {cols.map(({ title, links }) => (
          <div key={title}>
            <div style={{ color: C.copper, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 22 }}>{title}</div>
            {links.map(l => (
              <div key={l} style={{ marginBottom: 13 }}>
                <a href={l.includes('@') ? `mailto:${l}` : '#'}
                  style={{ color: 'rgba(200,188,180,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.cream)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,188,180,0.55)')}>
                  {l}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-body)' }}>
      <Nav />
      <div style={{ paddingTop: 64 }}>
        <Hero />
        <StatsStrip />
        <StayTypes />
        <Community />
        <Problem />
        <Teachcation />
        <Impact />
        <Location />
        <Ecosystem />
        <Investors />
        <JoinCTA />
        <Footer />
      </div>
    </main>
  );
}
