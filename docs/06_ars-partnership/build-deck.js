// ============================================================
// Linz Hostel × Ars Electronica — Partnership Deck 2026 v2
// 22 slides | PptxGenJS | 6 layout types, redesigned
// Run: node build-deck.js
// ============================================================

const pptxgen = require('/opt/homebrew/lib/node_modules/pptxgenjs');
const path = require('path');

const PHOTOS = '/Users/apple/Desktop/PROJECTS/linz-hostel/docs/06_ars-partnership/photos';
const OUTPUT = '/Users/apple/Desktop/PROJECTS/linz-hostel/docs/06_ars-partnership/linz-hostel-ars-partnership-2026.pptx';

const BLACK = '000000';
const WHITE = 'FFFFFF';
const ACCENT = 'E8530E';
const LIGHT  = 'CCCCCC';
const GRAY   = '888888';
const D1     = '0D0D0D';
const D2     = '181818';
const D3     = '242424';

const W = 10, H = 5.625;

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Daniel Kruger';
pres.title  = 'A Home for the Ars Community — Partnership Proposal 2026';

// ── Core layout helpers ──────────────────────────────────────

/** Full-bleed photo + overlay. trans=0 fully opaque, trans=100 invisible. */
function bg(slide, file, trans = 35) {
  slide.addImage({ path: path.join(PHOTOS, file), x: 0, y: 0, w: W, h: H, sizing: { type: 'cover', w: W, h: H } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: W, h: H, fill: { color: BLACK, transparency: trans } });
}

/** Photo fills RIGHT side, solid black LEFT side. sx = split x position. */
function splitRight(slide, file, sx = 4.8) {
  slide.addImage({ path: path.join(PHOTOS, file), x: sx, y: 0, w: W - sx, h: H, sizing: { type: 'cover', w: W - sx, h: H } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: sx, h: H, fill: { color: BLACK } });
  slide.addShape(pres.shapes.RECTANGLE, { x: sx - 0.04, y: 0, w: 0.04, h: H, fill: { color: ACCENT } });
}

/** Photo fills LEFT side, solid black RIGHT side. sx = split x position. */
function splitLeft(slide, file, sx = 5.2) {
  slide.addImage({ path: path.join(PHOTOS, file), x: 0, y: 0, w: sx, h: H, sizing: { type: 'cover', w: sx, h: H } });
  slide.addShape(pres.shapes.RECTANGLE, { x: sx, y: 0, w: W - sx, h: H, fill: { color: BLACK } });
  slide.addShape(pres.shapes.RECTANGLE, { x: sx, y: 0, w: 0.04, h: H, fill: { color: ACCENT } });
}

/** Photo fills TOP half, solid black BOTTOM half. */
function splitTop(slide, file, sy = 2.9) {
  slide.addImage({ path: path.join(PHOTOS, file), x: 0, y: 0, w: W, h: sy, sizing: { type: 'cover', w: W, h: sy } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: sy, w: W, h: H - sy, fill: { color: BLACK } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: sy - 0.04, w: W, h: 0.04, fill: { color: ACCENT } });
}

/** Section label — ALL CAPS, tracked, orange. */
function lbl(slide, text, x = 0.6, y = 0.42) {
  slide.addText(text, { x, y, w: 7, h: 0.26, fontSize: 9, fontFace: 'Calibri', bold: true, color: ACCENT, charSpacing: 3.5, align: 'left', margin: 0 });
}

/** Solid filled rectangle (no visible border). */
function box(slide, x, y, w, h, fill = D2) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill } });
}

/** Small orange square bullet. */
function dot(slide, x, y) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h: 0.07, fill: { color: ACCENT } });
}

/** Italic gray footer at slide bottom. */
function ft(slide, text) {
  slide.addText(text, { x: 0.5, y: 5.22, w: 9, h: 0.28, fontSize: 9, fontFace: 'Calibri', color: GRAY, italic: true, align: 'center', margin: 0 });
}


// ════════════════════════════════════════════════════════════
// SLIDE 01 — Opening Hook  [HERO]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's01.jpg', 48);  // photo punches through

  s.addText('Every September, 122,000 people come to Linz to experience the future.', {
    x: 1.0, y: 1.0, w: 8.0, h: 1.85,
    fontSize: 32, fontFace: 'Georgia', bold: true, color: WHITE,
    align: 'center', valign: 'middle'
  });

  s.addText('Where do they go at night?', {
    x: 1.0, y: 3.05, w: 8.0, h: 0.75,
    fontSize: 30, fontFace: 'Georgia', italic: true, color: ACCENT,
    align: 'center', valign: 'middle'
  });

  box(s, 0, 5.22, W, 0.405, D1);
  s.addText('Linz Hostel: The Social Impact Hub  ·  A Partnership Proposal for Ars Electronica  ·  2026', {
    x: 0.5, y: 5.25, w: 9, h: 0.26,
    fontSize: 9, fontFace: 'Calibri', color: GRAY, align: 'center', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 02 — The Team  [SPLIT RIGHT — blueprints photo]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitRight(s, 's02.jpg', 4.9);

  lbl(s, 'THE TEAM');

  s.addText('The Team\nBehind It', {
    x: 0.6, y: 0.78, w: 4.1, h: 1.35,
    fontSize: 40, fontFace: 'Georgia', bold: true, color: WHITE,
    align: 'left', margin: 0
  });

  s.addText('Daniel Kruger', {
    x: 0.6, y: 2.32, w: 4.1, h: 0.36,
    fontSize: 17, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });
  s.addText('Founder & Hospitality Strategist', {
    x: 0.6, y: 2.7, w: 4.1, h: 0.28,
    fontSize: 12, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
  });

  const teamLines = [
    ['Financing:', 'Sparkasse OÖ'],
    ['Architecture:', 'VantArc Agency'],
    ['City support:', 'Linz economic development — confirmed'],
  ];
  teamLines.forEach(([key, val], i) => {
    const y = 3.15 + i * 0.42;
    dot(s, 0.6, y + 0.09);
    s.addText(key, { x: 0.78, y, w: 1.1, h: 0.35, fontSize: 12.5, fontFace: 'Calibri', bold: true, color: WHITE, align: 'left', margin: 0 });
    s.addText(val, { x: 1.9, y, w: 2.7, h: 0.35, fontSize: 12.5, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0 });
  });

  box(s, 0.5, 4.75, 4.1, 0.55, ACCENT);
  s.addText('€400,000 total funding  ·  €100k equity  ·  €220k Sparkasse  ·  €80k grants', {
    x: 0.6, y: 4.77, w: 3.9, h: 0.45,
    fontSize: 11, fontFace: 'Calibri', bold: true, color: WHITE, align: 'left', valign: 'middle', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 03 — Traction  [PURE TYPE — no photo]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };

  lbl(s, 'MOMENTUM');

  s.addText('Already in Motion', {
    x: 0.6, y: 0.78, w: 8.8, h: 0.85,
    fontSize: 44, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const points = [
    'Dozens of conversations with politicians, institutional leaders, and creative organisations across Linz — consistently positive reception',
    'Active presence at the Linz creative district — project known in the rooms where decisions get made',
    'Financing conversations with Sparkasse OÖ underway',
    'Architecture & design partnership with VantArc Agency active',
    'City of Linz economic development support confirmed'
  ];

  points.forEach((p, i) => {
    const y = 1.88 + i * 0.67;
    dot(s, 0.6, y + 0.09);
    s.addText(p, {
      x: 0.85, y, w: 8.55, h: 0.52,
      fontSize: 13.5, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    });
  });

  ft(s, 'This is not a concept on paper. It\'s a project with momentum.');
}


// ════════════════════════════════════════════════════════════
// SLIDE 04 — The Scene  [IMMERSIVE — photo punches, bottom panel]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's04.jpg', 55);  // photo visible but text readable

  s.addText('September.\nLinz.', {
    x: 0.6, y: 0.35, w: 6.0, h: 1.5,
    fontSize: 52, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  box(s, 0, 3.3, W, 2.325, D1);
  s.addText(
    'A sound artist from Tokyo lands at 4 PM. A computational biologist from Lagos checks in at 6. A 19-year-old from Graz who just won a Create Your World prize carries her suitcase through the door at 8.',
    {
      x: 0.65, y: 3.42, w: 8.7, h: 0.9,
      fontSize: 14, fontFace: 'Calibri', color: WHITE, align: 'left', margin: 0
    }
  );
  s.addText('By 10 PM, they\'re sitting in the same kitchen. Nobody planned this. The building did.', {
    x: 0.65, y: 4.47, w: 8.7, h: 0.55,
    fontSize: 14, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 05 — What Ars Built  [SPLIT RIGHT — aerial city]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitRight(s, 's05.jpg', 4.5);

  lbl(s, 'A LEGACY');

  s.addText('What Ars\nElectronica Built', {
    x: 0.5, y: 0.72, w: 3.8, h: 1.1,
    fontSize: 28, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const timeline = [
    ['1979', 'A festival in a city nobody associated with technology. Art, technology, and society belong together. It worked.'],
    ['2009', 'Linz becomes European Capital of Culture. 3.5 million attendances. Tabakfabrik begins its transformation.'],
    ['2025', '122,000 visitors. Prix Ars. Futurelab. Create Your World. Festival University. An ecosystem recognised worldwide.']
  ];

  timeline.forEach(([year, desc], i) => {
    const y = 2.22 + i * 1.08;
    s.addText(year, {
      x: 0.5, y, w: 1.1, h: 0.44,
      fontSize: 24, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(desc, {
      x: 1.75, y: y + 0.04, w: 2.55, h: 0.88,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });

  ft(s, '"You built the stages, the galleries, the labs. We\'d like to add one more room."');
}


// ════════════════════════════════════════════════════════════
// SLIDE 06 — Accidental Magic  [TOP/BOTTOM SPLIT]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitTop(s, 's06.jpg', 2.75);

  s.addText('The Best Moments\nAren\'t Programmed', {
    x: 0.6, y: 0.28, w: 7.5, h: 1.75,
    fontSize: 36, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  s.addText(
    'Every festival has them — the breakfast conversation between two people who would never have met inside the official programme. The late-night idea in a shared kitchen. The lobby encounter that turns into a three-year collaboration.',
    {
      x: 0.6, y: 2.9, w: 8.8, h: 1.25,
      fontSize: 13.5, fontFace: 'Calibri', color: WHITE, align: 'left', margin: 0
    }
  );

  s.addText('Imagine a place designed to make them happen — every night of the year.', {
    x: 0.6, y: 4.35, w: 8.8, h: 0.65,
    fontSize: 13.5, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 07 — The Breakfast Table  [HERO + large quote]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's07.jpg', 40);

  lbl(s, 'VISION');

  s.addText('The table we\'re building is long, wooden, seats twelve.', {
    x: 0.6, y: 0.75, w: 8.8, h: 1.25,
    fontSize: 38, fontFace: 'Georgia', bold: true, italic: true, color: WHITE, align: 'left', margin: 0
  });

  box(s, 0, 2.35, W, 2.95, D1);
  s.addText(
    'At one end: a robotics PhD from ETH Zurich, in Linz for a Futurelab residency. Next to her: a 17-year-old from Graz who has never left Austria. Across from them: a festival volunteer from Brazil who is also a street artist. At the far end: a Prix Ars jury member eating toast — until the Brazilian mentions a project, and the jury member puts his phone down.',
    {
      x: 0.65, y: 2.5, w: 8.7, h: 1.65,
      fontSize: 13.5, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    }
  );
  s.addText('This is the kind of encounter Ars has been creating for 45 years. Just in a new form.', {
    x: 0.65, y: 4.28, w: 8.7, h: 0.5,
    fontSize: 13, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 08 — Two Evenings  [TRUE SPLIT: two photos]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };

  s.addImage({ path: path.join(PHOTOS, 's08l.jpg'), x: 0, y: 0, w: 5, h: H, sizing: { type: 'cover', w: 5, h: H } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 5, h: H, fill: { color: '050810', transparency: 32 } });

  s.addImage({ path: path.join(PHOTOS, 's08r.jpg'), x: 5, y: 0, w: 5, h: H, sizing: { type: 'cover', w: 5, h: H } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5, y: 0, w: 5, h: H, fill: { color: '180800', transparency: 40 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 4.97, y: 0, w: 0.06, h: H, fill: { color: ACCENT } });

  s.addText('A TYPICAL FESTIVAL EVENING', {
    x: 0.35, y: 0.44, w: 4.3, h: 0.28,
    fontSize: 9.5, fontFace: 'Calibri', bold: true, color: GRAY, charSpacing: 2.5, align: 'left', margin: 0
  });
  s.addText('An exhibitor finishes at 9 PM.\nTakes a taxi across town.\nOrders room service.\nChecks email. Goes to sleep.', {
    x: 0.35, y: 0.9, w: 4.35, h: 1.8,
    fontSize: 16, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
  });

  s.addText('AN EVENING AT THE BASECAMP', {
    x: 5.3, y: 0.44, w: 4.35, h: 0.28,
    fontSize: 9.5, fontFace: 'Calibri', bold: true, color: ACCENT, charSpacing: 2.5, align: 'left', margin: 0
  });
  s.addText('Same exhibitor walks five minutes.\nFinds people cooking dinner.\nJoins.\nBy dessert, they\'re sketching a project\non a napkin.', {
    x: 5.3, y: 0.9, w: 4.35, h: 2.0,
    fontSize: 16, fontFace: 'Calibri', color: WHITE, align: 'left', margin: 0
  });

  box(s, 0, 4.8, W, 0.825, D1);
  s.addText('Same festival. Same people. Different architecture.', {
    x: 0.5, y: 4.86, w: 9, h: 0.52,
    fontSize: 20, fontFace: 'Georgia', italic: true, color: WHITE, align: 'center', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 09 — Why Architecture Matters  [PURE BLACK + solid cards]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's09.jpg', 86);  // barely-there texture

  lbl(s, 'THE RESEARCH');

  s.addText('Why Architecture Matters', {
    x: 0.6, y: 0.72, w: 8.8, h: 0.75,
    fontSize: 40, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const cards = [
    { num: '01', title: 'Third Places', cite: 'Oldenburg, 1989', body: 'Spaces that are neither home nor work — cafés, lounges, public squares — are where communities actually form. 35+ years of peer-reviewed validation.\n\nOur Flow Zone is designed as exactly this.' },
    { num: '02', title: 'Weak Ties', cite: 'Granovetter, 1973', body: 'The person who changes your career is rarely your best friend — it\'s the stranger you sat next to at breakfast.\n\nCasual encounters produce more novel ideas. One of the most-cited findings in social science.' },
    { num: '03', title: 'Serendipity\nby Design', cite: 'MIT Building 20 · Pixar HQ', body: 'MIT Building 20: 9 Nobel laureates. Pixar HQ: one central atrium, maximum collision.\n\nProximity + shared space + no agenda = unexpected connection.' }
  ];

  cards.forEach((c, i) => {
    const x = 0.38 + i * 3.15;
    box(s, x, 1.68, 3.0, 3.68, D2);
    s.addText(c.num, {
      x: x + 0.2, y: 1.82, w: 0.7, h: 0.52,
      fontSize: 32, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(c.title, {
      x: x + 0.2, y: 2.38, w: 2.65, h: 0.65,
      fontSize: 17, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(c.cite, {
      x: x + 0.2, y: 3.08, w: 2.65, h: 0.28,
      fontSize: 10, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(c.body, {
      x: x + 0.2, y: 3.43, w: 2.65, h: 1.78,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 10 — Mission Alignment  [SPLIT LEFT — light installation]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitLeft(s, 's10.jpg', 5.0);

  lbl(s, 'MISSION ALIGNMENT', 5.2, 0.42);

  s.addText('"Same mission.\nNew room."', {
    x: 5.22, y: 0.82, w: 4.45, h: 1.55,
    fontSize: 38, fontFace: 'Georgia', bold: true, italic: true, color: WHITE, align: 'left', margin: 0
  });

  const artworks = [
    { title: 'GEMeinsam', desc: 'Exploration of loneliness and connection through spatial design — multiple festival editions' },
    { title: 'Kyrielle', desc: '2025 Prix Ars Award of Distinction — a meditation on human connection' },
    { title: 'Social Play', desc: 'Five projects addressing urban isolation through VR, AI, and interactive media' }
  ];

  artworks.forEach((a, i) => {
    const y = 2.6 + i * 0.95;
    dot(s, 5.22, y + 0.1);
    s.addText(a.title, {
      x: 5.42, y, w: 4.3, h: 0.34,
      fontSize: 13.5, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(a.desc, {
      x: 5.42, y: y + 0.36, w: 4.3, h: 0.46,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 11 — The Basecamp  [PURE TYPE — typographic spec list]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };

  s.addText('The Basecamp', {
    x: 0.6, y: 0.38, w: 9, h: 0.88,
    fontSize: 52, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  // Full-width orange strip under headline
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.38, w: 8.8, h: 0.04, fill: { color: ACCENT } });

  const specs = [
    ['90 BEDS', 'Pod-style, design-led, built for creative professionals'],
    ['SHARED KITCHEN', 'Communal by design — the heart of the building, open to everyone'],
    ['FLOW ZONE', '100m² community lounge open 24/7 — the "third place" of the creative district'],
    ['LOCATION', 'Linz creative district — walking distance from Postcity & the Ars Center'],
    ['INSTALLATION SPACE', 'Permanent lobby gallery, curated by cultural partners year-round'],
    ['PRICING', '€28–50/night vs. €90+ at Linz hotels during festival week']
  ];

  specs.forEach((spec, i) => {
    const y = 1.6 + i * 0.66;
    const isEven = i % 2 === 0;
    if (isEven) {
      box(s, 0.5, y - 0.04, 9.0, 0.6, D2);
    }
    s.addText(spec[0], {
      x: 0.7, y: y + 0.02, w: 2.6, h: 0.42,
      fontSize: 11, fontFace: 'Calibri', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(spec[1], {
      x: 3.55, y: y + 0.02, w: 5.8, h: 0.42,
      fontSize: 13, fontFace: 'Calibri', color: WHITE, align: 'left', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 12 — A Day During Festival Week  [IMMERSIVE + solid grid]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's12.jpg', 32);

  lbl(s, 'SEPTEMBER 2027');

  s.addText('A Day During Festival Week', {
    x: 0.6, y: 0.72, w: 8.8, h: 0.72,
    fontSize: 38, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const moments = [
    { time: '08:00', text: 'Breakfast. Futurelab researcher + Create Your World winner + visiting curator. The curator mentions a residency. The 19-year-old applies the next week.' },
    { time: '14:00', text: 'Flow Zone hosts an informal Ars workshop. 30 people, standing room. Not in the official programme. Participants call it the best session of the day.' },
    { time: '20:00', text: 'Dinner in the shared kitchen. A jury member cooks with two exhibitors from São Paulo. They talk about home, not awards.' },
    { time: '23:00', text: 'The lobby installation — curated by Ars — glows quietly. A digital nomad discovers the festival exists. She buys a ticket for tomorrow.' }
  ];

  moments.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.85;
    const y = 1.7 + row * 1.87;
    box(s, x, y, 4.6, 1.72, D1);
    s.addText(m.time, {
      x: x + 0.2, y: y + 0.14, w: 1.4, h: 0.5,
      fontSize: 24, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(m.text, {
      x: x + 0.2, y: y + 0.68, w: 4.22, h: 0.92,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 13 — Who Stays Here  [SPLIT LEFT — diverse friends]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitLeft(s, 's13.jpg', 4.5);

  lbl(s, 'THE COMMUNITY', 4.68, 0.42);

  s.addText('Who\nStays Here', {
    x: 4.68, y: 0.72, w: 5.1, h: 1.3,
    fontSize: 40, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const personas = [
    { name: 'Camila, 24 — Medellín', text: 'Award of Distinction winner. Stipend doesn\'t cover €90/night. At the Basecamp: €28 — meets a Futurelab scientist at breakfast, gets invited to collaborate.' },
    { name: 'Dr. Yuki, 58 — Tokyo', text: 'Prix Ars jury member. Has dinner with exhibitors she\'s been reading about for months — finally meets the humans behind the work.' },
    { name: 'Pedro, 31 — São Paulo', text: 'Festival volunteer and street artist. Paints a mural in the common room. Still there the following year.' },
    { name: 'Min-Ji + crew — Seoul', text: 'Festival University students sharing a budget. The Basecamp is the only place they can afford — and still feel like they belong to the festival.' }
  ];

  personas.forEach((p, i) => {
    const y = 2.2 + i * 0.82;
    dot(s, 4.68, y + 0.08);
    s.addText(p.name, {
      x: 4.88, y, w: 4.9, h: 0.34,
      fontSize: 12.5, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(p.text, {
      x: 4.88, y: y + 0.36, w: 4.9, h: 0.38,
      fontSize: 11, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 14 — The Numbers  [PURE TYPE — massive stats]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };

  lbl(s, 'THE OPPORTUNITY');

  s.addText('The Practical Picture', {
    x: 0.6, y: 0.7, w: 8.8, h: 0.78,
    fontSize: 40, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  // Row 1 — 3 stats
  const row1 = [
    { num: '122,000', label: 'Ars visitors annually (2025)' },
    { num: '€90+', label: 'Avg Linz hotel rate in festival week' },
    { num: '€28–50', label: 'Basecamp rate — 45–70% savings' }
  ];
  row1.forEach((st, i) => {
    const x = 0.45 + i * 3.18;
    box(s, x, 1.68, 3.0, 1.62, D2);
    s.addText(st.num, {
      x: x + 0.18, y: 1.82, w: 2.65, h: 0.88,
      fontSize: 38, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(st.label, {
      x: x + 0.18, y: 2.75, w: 2.65, h: 0.46,
      fontSize: 11, fontFace: 'Calibri', color: GRAY, align: 'left', margin: 0
    });
  });

  // Row 2 — 2 stats, centred
  const row2 = [
    { num: '€300–600', label: 'Savings per exhibitor over 7 nights' },
    { num: '365', label: 'Days/year — not just September' }
  ];
  row2.forEach((st, i) => {
    const x = 1.65 + i * 3.58;
    box(s, x, 3.5, 3.1, 1.62, D2);
    s.addText(st.num, {
      x: x + 0.18, y: 3.64, w: 2.75, h: 0.88,
      fontSize: 30, fontFace: 'Georgia', bold: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(st.label, {
      x: x + 0.18, y: 4.56, w: 2.75, h: 0.46,
      fontSize: 11, fontFace: 'Calibri', color: GRAY, align: 'left', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 15 — Proven Models  [IMMERSIVE + solid proof blocks]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's15.jpg', 38);

  lbl(s, 'PROOF OF CONCEPT');

  s.addText('It Works Elsewhere.\nIt Will Work Here.', {
    x: 0.6, y: 0.7, w: 8.8, h: 1.45,
    fontSize: 38, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const models = [
    { name: 'magdas Hotel, Vienna', tag: 'Austria\'s first profitable social-mission hotel.', detail: 'Proof that purpose-driven hospitality works in this exact market — same country, same culture.' },
    { name: 'Largo Residências, Lisbon', tag: 'Built next to the arts district.', detail: 'Creative-neighbourhood symbiosis generates higher revenue and deeper community engagement than standard hotels.' },
    { name: 'The Social Hub — Amsterdam & Vienna', tag: 'Hybrid community accommodation, design-led.', detail: 'Maximising revenue and human connection. The scalable blueprint for this category. Already in Vienna.' }
  ];

  models.forEach((m, i) => {
    const x = 0.42 + i * 3.18;
    box(s, x, 2.35, 3.0, 2.95, D1);
    s.addText(m.name, {
      x: x + 0.18, y: 2.5, w: 2.65, h: 0.55,
      fontSize: 14, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(m.tag, {
      x: x + 0.18, y: 3.1, w: 2.65, h: 0.36,
      fontSize: 11.5, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
    });
    s.addText(m.detail, {
      x: x + 0.18, y: 3.52, w: 2.65, h: 1.62,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });

  ft(s, 'The category is proven. The market is here. The timing is now.');
}


// ════════════════════════════════════════════════════════════
// SLIDE 16 — Two Ways to Join  [PURE TYPE — orange fill right]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };

  lbl(s, 'THE OFFER');

  s.addText('Two Ways to Join', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.8,
    fontSize: 44, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  // LEFT — Letter of Intent (neutral dark fill)
  box(s, 0.4, 1.65, 4.35, 3.65, D3);
  s.addText('Letter of Intent', {
    x: 0.6, y: 1.82, w: 3.95, h: 0.45,
    fontSize: 20, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });
  s.addText('€0', {
    x: 0.6, y: 2.33, w: 3.95, h: 0.75,
    fontSize: 52, fontFace: 'Georgia', bold: true, color: LIGHT, align: 'left', margin: 0
  });
  s.addText(
    'One page. No payment. No legal complexity.\n\nConfirms that Ars Electronica is interested in reserving beds during festival week. Helps demonstrate institutional demand to Sparkasse OÖ.\n\nNo board approval needed.',
    {
      x: 0.6, y: 3.18, w: 3.95, h: 2.0,
      fontSize: 12.5, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    }
  );

  // RIGHT — Founding Partner (SOLID ORANGE fill)
  box(s, 5.25, 1.65, 4.35, 3.65, ACCENT);
  s.addText('Founding Partner', {
    x: 5.42, y: 1.82, w: 4.0, h: 0.45,
    fontSize: 20, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });
  s.addText('€15,000\n/ 3 years', {
    x: 5.42, y: 2.33, w: 4.0, h: 0.9,
    fontSize: 34, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });
  s.addText([
    { text: 'Pre-purchased bed-nights as transferable vouchers', options: { bullet: true, breakLine: true } },
    { text: 'Priority booking year-round for Futurelab & residency guests', options: { bullet: true, breakLine: true } },
    { text: 'Permanent lobby installation space — curated entirely by Ars', options: { bullet: true, breakLine: true } },
    { text: 'Tax-deductible as Betriebsausgabe', options: { bullet: true, breakLine: true } },
    { text: 'Full refund if we don\'t open', options: { bullet: true } }
  ], {
    x: 5.42, y: 3.32, w: 4.0, h: 1.9,
    fontSize: 12, fontFace: 'Calibri', color: WHITE, align: 'left', valign: 'top', paraSpaceAfter: 4
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 17 — Designed for Zero Risk  [SPLIT RIGHT — sunset bridge]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitRight(s, 's17.jpg', 4.7);

  lbl(s, 'RISK STRUCTURE');

  s.addText('Designed\nfor Zero Risk', {
    x: 0.5, y: 0.72, w: 4.0, h: 1.35,
    fontSize: 38, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const items = [
    { title: 'Full Refund', text: 'If the hostel doesn\'t open by the agreed date, every cent is returned. No conditions, no negotiation.' },
    { title: 'Minimum Viability Threshold', text: 'Contract activates only when total commitments reach €80,000. No single partner carries the weight alone.' },
    { title: 'Transferable Vouchers', text: 'Bundle bed-nights into exhibitor packages or distribute to artists and staff. Full control on your side.' },
    { title: '3-Year Rate Lock', text: 'Fixed €28–50/night while Austrian hotel prices keep climbing. A hedge against inflation, locked today.' }
  ];

  items.forEach((item, i) => {
    const y = 2.22 + i * 0.84;
    dot(s, 0.5, y + 0.1);
    s.addText(item.title, {
      x: 0.7, y, w: 3.8, h: 0.35,
      fontSize: 13, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(item.text, {
      x: 0.7, y: y + 0.37, w: 3.8, h: 0.36,
      fontSize: 11.5, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 18 — What Ars Gets  [PURE BLACK + solid benefit cards]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's18.jpg', 84);  // neon art barely visible — texture only

  lbl(s, 'YOUR BENEFITS');

  s.addText('What This Means for Ars', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.78,
    fontSize: 40, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const benefits = [
    { title: 'Festival Accommodation Simplified', text: 'One address, one booking, one invoice. Artists, jury, and staff together — not scattered across six hotels.' },
    { title: 'Year-Round Residency Access', text: 'Reserved beds for Futurelab visitors, artist-in-residence guests, and Festival University students — not just September.' },
    { title: 'Your Installation, Your Space', text: 'A permanent lobby gallery curated entirely by Ars. Rotating exhibitions. Your creative presence in the building 365 days.' },
    { title: 'Satellite Venue During Festival', text: 'The Flow Zone (100m²) available for overflow workshops, screenings, and informal sessions at no cost.' }
  ];

  benefits.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.42 + col * 4.85;
    const y = 1.68 + row * 1.88;
    box(s, x, y, 4.6, 1.72, D2);
    s.addText(b.title, {
      x: x + 0.2, y: y + 0.18, w: 4.22, h: 0.5,
      fontSize: 14, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(b.text, {
      x: x + 0.2, y: y + 0.72, w: 4.22, h: 0.88,
      fontSize: 12, fontFace: 'Calibri', color: LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 19 — More Than Hospitality  [SPLIT LEFT — community photo]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  splitLeft(s, 's19.jpg', 4.5);

  lbl(s, 'CONTEXT', 4.68, 0.42);

  s.addText('More Than\nHospitality', {
    x: 4.68, y: 0.72, w: 5.1, h: 1.35,
    fontSize: 38, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  s.addText(
    'Austria officially recognises social prescribing — connecting people to community spaces as a health intervention. Six federal states are running pilots, with an 86% success rate.',
    {
      x: 4.68, y: 2.3, w: 5.05, h: 1.05,
      fontSize: 13, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    }
  );
  s.addText(
    'The Basecamp\'s model is designed around the same principle: shared spaces that reduce isolation and build connection for the young, mobile, international populations of the creative district.',
    {
      x: 4.68, y: 3.48, w: 5.05, h: 1.05,
      fontSize: 13, fontFace: 'Calibri', color: LIGHT, align: 'left', margin: 0
    }
  );
  s.addText('Grant opportunities. Research partnerships. Real impact metrics.', {
    x: 4.68, y: 4.65, w: 5.05, h: 0.55,
    fontSize: 12, fontFace: 'Calibri', italic: true, color: ACCENT, align: 'left', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 20 — Linz Ecosystem  [IMMERSIVE + institution grid]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's20.jpg', 38);

  lbl(s, 'ECOSYSTEM');

  s.addText('Part of the Linz Ecosystem', {
    x: 0.6, y: 0.68, w: 8.8, h: 0.78,
    fontSize: 38, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
  });

  const nodes = [
    { name: 'Tabakfabrik', desc: 'Creative district anchor. Walking distance from the Basecamp. The centre of gravity of Linz\'s creative scene.', hi: false },
    { name: 'JKU Linz', desc: 'Festival University co-organiser. International student pipeline. Hundreds of young creatives need affordable beds every September.', hi: false },
    { name: 'City of Linz', desc: 'European Capital of Culture legacy. Active cultural investment. Conversations ongoing at economic development level.', hi: false },
    { name: 'Ars Electronica', desc: 'The reason 122,000 people come to Linz every September. The cultural heartbeat around which everything here is built.', hi: true }
  ];

  nodes.forEach((n, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.42 + col * 4.85;
    const y = 1.7 + row * 1.9;
    box(s, x, y, 4.6, 1.72, n.hi ? ACCENT : D1);
    s.addText(n.name, {
      x: x + 0.22, y: y + 0.16, w: 4.18, h: 0.42,
      fontSize: 16, fontFace: 'Georgia', bold: true, color: WHITE, align: 'left', margin: 0
    });
    s.addText(n.desc, {
      x: x + 0.22, y: y + 0.62, w: 4.18, h: 0.98,
      fontSize: 11.5, fontFace: 'Calibri', color: n.hi ? WHITE : LIGHT, align: 'left', valign: 'top', margin: 0
    });
  });

  ft(s, 'The project grows stronger with each institution that joins — not as sponsors, but as partners who benefit directly.');
}


// ════════════════════════════════════════════════════════════
// SLIDE 21 — The Invitation  [PURE TYPE — CTA]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's16.jpg', 80);  // door photo very faint — mood only

  lbl(s, 'LET\'S TALK', 0.6, 0.48);

  s.addText('Let\'s Have\na Conversation', {
    x: 0.6, y: 0.85, w: 9, h: 1.85,
    fontSize: 52, fontFace: 'Georgia', bold: true, color: WHITE, align: 'center', margin: 0
  });

  s.addText(
    'We\'d love 30 minutes of your time — in person or remote, at your convenience.\nIf it feels right, the next step is simple: a one-page Letter of Intent.\nNo money. No legal complexity. No board approval required.',
    {
      x: 1.5, y: 2.9, w: 7, h: 1.05,
      fontSize: 14, fontFace: 'Calibri', color: LIGHT, align: 'center', margin: 0
    }
  );

  box(s, 2.5, 4.1, 5.0, 1.18, ACCENT);
  s.addText([
    { text: 'Daniel Kruger', options: { bold: true, breakLine: true, fontSize: 18, color: WHITE } },
    { text: '[email]  ·  [phone]', options: { fontSize: 13, color: WHITE, breakLine: true } },
    { text: 'Letter of Intent ready to share  ·  Full proposal on request', options: { fontSize: 11, color: WHITE } }
  ], {
    x: 2.5, y: 4.1, w: 5.0, h: 1.18,
    fontFace: 'Calibri', align: 'center', valign: 'middle'
  });
}


// ════════════════════════════════════════════════════════════
// SLIDE 22 — Closing  [HERO — night building]
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BLACK };
  bg(s, 's22.jpg', 52);

  s.addText('"Where the festival continues."', {
    x: 0.5, y: 1.2, w: 9, h: 1.55,
    fontSize: 48, fontFace: 'Georgia', bold: true, italic: true, color: WHITE,
    align: 'center', valign: 'middle'
  });

  s.addText('Linz Hostel: The Social Impact Hub', {
    x: 0.5, y: 3.1, w: 9, h: 0.52,
    fontSize: 18, fontFace: 'Georgia', color: LIGHT, align: 'center', margin: 0
  });

  box(s, 3.8, 3.75, 2.4, 0.04, ACCENT);

  s.addText('Opening 2027  ·  90 Beds  ·  Linz Creative District  ·  Founding Partners Welcome', {
    x: 0.5, y: 3.95, w: 9, h: 0.38,
    fontSize: 12, fontFace: 'Calibri', color: GRAY, align: 'center', margin: 0
  });
}


// ════════════════════════════════════════════════════════════
// EXPORT
// ════════════════════════════════════════════════════════════
pres.writeFile({ fileName: OUTPUT })
  .then(() => { console.log('✓ DONE:', OUTPUT); })
  .catch(err => { console.error('✗ ERROR:', err.message); process.exit(1); });
