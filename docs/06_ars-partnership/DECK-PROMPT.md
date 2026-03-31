# Prompt: Linz Hostel × Ars Electronica — Partnership Deck (HTML Presentation)

> Paste this prompt into any AI to recreate or iterate on the deck. Provide the 6 local images alongside it (team-hands.jpg, ars-immersive-color.webp, linz-freinberg-sunset.webp, linz-hauptplatz.webp, ars-deepspace.webp, linz-landstrasse.webp).

---

## TASK

Build a 22-slide single-page HTML presentation (Gamma-style, not PowerPoint). All slides exist in a single HTML file. Navigation via scroll wheel, click, keyboard arrows, swipe, and dot navigation on the right edge. One slide visible at a time with opacity cross-fade transitions.

## DESIGN SYSTEM

- **Background**: Pure black (`#000000`) everywhere. No white slides. No light backgrounds.
- **Accent**: `#E8530E` (orange) — used for text highlights, filled boxes, bullets, labels.
- **Divider lines**: `#2A6FDB` (blue) — used ONLY for horizontal/vertical divider lines between sections. Never for text or backgrounds.
- **Typography**: `Playfair Display` (serif, headings — 700/900 weight, often italic) + `Inter` (sans, body — 300/400/500/600 weight). Load from Google Fonts.
- **Text colors**: White `#ffffff` for headings, `#c8c8c8` (light) for body, `#787878` (gray) for captions/small text.
- **Cards**: `#141414` background. Orange cards use `#E8530E` background with white text.
- **Photo overlays**: Dark gradients over photos (35%–82% black depending on text density).
- **Animations**: Each element fades in + slides up (translateY 22px → 0) with staggered delays (0.1s, 0.22s, 0.36s...) when slide becomes active.
- **Tone**: Humble, bold, elegant. NO FOMO. NO fear. NO pushy language. NO presumptions about Ars's internal processes. Confident but respectful.

## LAYOUT TYPES USED

1. **Hero** — Full-bleed photo background + centered text
2. **Split Right** — 48% black text column | 52% photo column, blue vertical divider line
3. **Split Left** — 52% photo column | 48% black text column, blue vertical divider line
4. **Top/Bottom** — Photo top (50-52%) | blue horizontal line | black text bottom
5. **Two-Photo** — Side-by-side panels with blue vertical divider + footer bar
6. **Pure Type** — All black, no photo, text-only
7. **Immersive** — Photo background with dark overlay + cards/content on top

## NAVIGATION (JavaScript)

- **Scroll wheel**: Throttled at 700ms — one scroll = one slide change
- **Click**: Clicking anywhere on the deck advances to next slide (except nav dots and arrow buttons)
- **Keyboard**: ArrowRight/ArrowDown/Space/PageDown = next, ArrowLeft/ArrowUp/PageUp = previous
- **Touch swipe**: Vertical swipe (>40px) changes slides
- **Dot navigation**: Small dots on right edge, active dot elongates (18px height) and turns orange
- **Arrow buttons**: Small up/down buttons fixed bottom-right
- **Counter**: "01 / 22" centered at bottom, subtle white 25% opacity

## SLIDE-BY-SLIDE CONTENT

### S01 · OPENING HOOK · Hero
- Photo: Pexels 7192878 (people silhouettes, warm glow), overlay 45%
- Label: "Linz · Ars Electronica · 2026"
- Headline: "Every September, 122,000 people come to Linz to experience the future."
- Subline (italic orange): "Where do they go at night?"
- Bottom strip: "Linz Hostel: The Social Impact Hub · A Partnership Proposal for Ars Electronica · 2026"

### S02 · THE TEAM · Split Right
- Photo: **LOCAL FILE `photos/team-hands.jpg`** (diverse hands holding seedlings over grass, no faces visible)
- Label: "The Team"
- Headline: "Built by a Team Ready to Deliver"
- Content: Daniel Kruger, Founder & Hospitality Strategist. "Backed by a dedicated team spanning operations, design, community strategy, and finance — already working together."
- Bullet list: Financing (Sparkasse OÖ — conversations active), Architecture (VantArc Agency — design partner), City support (Linz economic development — confirmed)
- Orange box: "€400,000 total funding · €100k equity · €220k Sparkasse · €80k grants"

### S03 · MOMENTUM · Pure Type
- Label: "Momentum"
- Headline: "Already in Motion"
- 5 bullet points about conversations, financing, architecture, city support
- Italic orange closer: "This is not a concept on paper. It's a project with momentum."

### S04 · THE SCENE · Top/Bottom
- Photo (top 52%): Pexels 2041000 (warm bar interior, wood, Berlin), gradient overlay
- Big text on photo: "September. Linz."
- Bottom text: Scene-setting paragraph about a sound artist from Tokyo, biologist from Lagos, 19-year-old from Graz
- Italic orange: "By 10 PM, they're sitting in the same kitchen. Nobody planned this. The building did."

### S05 · WHAT ARS BUILT · Split Right
- Photo: Pexels 6208398 (abstract/modern architecture)
- Label: "A Legacy"
- Headline: "What Ars Electronica Built"
- Timeline: 1979 (festival origins), 2009 (Capital of Culture), 2025 (122,000 visitors)
- Italic orange: "You built the stages, the galleries, the labs. We'd like to add one more room."

### S06 · BEST MOMENTS · Top/Bottom
- Photo (top 50%): Pexels 6232561 (overhead communal dinner with string lights, warm, clean)
- Big text on photo: "The Best Moments Aren't Programmed"
- Bottom: Paragraph about breakfast conversations, late-night ideas, lobby encounters
- Italic orange: "Imagine a place designed to make them happen — every night of the year."

### S07 · VISION · Hero
- Photo: Pexels 2874780 (atmospheric, warm tones)
- Label: "Vision"
- Headline (italic): "A place where strangers arrive — and collaborators leave."
- Prose block (orange left border): Detailed scene at a breakfast table — ETH Zurich PhD, 17-year-old from Graz, Brazilian street artist, Prix Ars jury member
- Italic orange: "This is the kind of encounter Ars has been creating for 45 years. Just in a new form."

### S08 · TWO EVENINGS · Two-Photo
- Left panel: Pexels 5610117 (blue light installation, silhouettes). Label "A TYPICAL FESTIVAL EVENING" — sterile hotel evening described step by step
- Right panel: Pexels 4412789 (warm interior). Label "AN EVENING AT THE BASECAMP" — same person, different outcome with community
- Footer bar: "Same festival. Same people. Different architecture."

### S09 · WHY ARCHITECTURE MATTERS · Immersive
- Photo: Pexels 36181951, overlay 82%
- Label: "The Research"
- Headline: "Why Architecture Matters"
- 3-column grid of cards: Third Places (Oldenburg 1989), Weak Ties (Granovetter 1973), Serendipity by Design (MIT Building 20 / Pixar HQ)

### S10 · MISSION ALIGNMENT · Split Left
- Photo: Pexels 4046793 (geometric light installation, dark)
- Label: "Mission Alignment"
- Headline (italic): "Same mission. New room."
- Three examples: GEMeinsam, Kyrielle (2025 Prix Ars Award), Social Play

### S11 · THE BASECAMP · Pure Type
- Headline: "The Basecamp" + full-width blue divider line
- Spec table (alternating row backgrounds): 90 Beds, Shared Kitchen, Flow Zone (100m²), Location, Installation Space, Pricing (€28–50/night)

### S12 · A DAY IN FESTIVAL WEEK · Immersive
- Photo: Pexels 3121302 (illuminated lanterns, surreal atmosphere), overlay 55%
- Label: "September 2027"
- Headline: "A Day During Festival Week"
- 2×2 grid of cards: 08:00 (breakfast encounters), 14:00 (Flow Zone workshop), 20:00 (shared kitchen dinner), 23:00 (lobby installation discovery)

### S13 · WHO STAYS HERE · Split Left
- Photo: Pexels 4907201 (hostel bunk beds, friendly)
- Label: "The Community"
- Headline: "Who Stays Here"
- Subtitle (gray italic): "Imagine the kinds of people this space is built for:"
- 4 archetype descriptions (NO real names — use descriptive titles): "A young artist from Latin America", "A veteran researcher from abroad", "A festival volunteer and street artist", "A group of students on a budget"

### S14 · THE NUMBERS · Pure Type
- Label: "The Opportunity"
- Headline: "The Practical Picture"
- 3-column stats: 122,000 visitors, €90+ avg hotel rate, €28–50 Basecamp rate
- 2-column stats: €300–600 savings per exhibitor, 365 days/year

### S15 · PROOF OF CONCEPT · Immersive
- Photo: Pexels 36184950, overlay 55%
- Label: "Proof of Concept"
- Headline: "It Works Elsewhere. It Will Work Here."
- 3-column cards: magdas Hotel Vienna, Largo Residências Lisbon, The Social Hub Amsterdam & Vienna

### S16 · TWO WAYS TO JOIN · Pure Type
- Label: "The Offer"
- Headline: "Two Ways to Join"
- 2-column: Left card (dark) = Letter of Intent (€0, no commitment), Right card (ORANGE) = Founding Partner (€15,000/3 years with benefits list)

### S17 · OUR COMMITMENTS · Split Right
- Photo: Pexels 36297599
- Label: "Our Commitments"
- Headline: "Structured to Protect You"
- 4 commitments: Full Refund, Minimum Viability Threshold (€80,000), Transferable Vouchers, 3-Year Rate Lock

### S18 · BENEFITS FOR ARS · Immersive
- Photo: Pexels 3767508 (abstract light), overlay 82%
- Label: "Your Benefits"
- Headline: "What This Means for Ars"
- 2×2 grid: Festival Accommodation Simplified, Year-Round Residency Access, Installation Space, Satellite Venue

### S19 · MORE THAN HOSPITALITY · Split Left
- Photo: Pexels 4920848
- Label: "Context"
- Headline: "More Than Hospitality"
- Social prescribing in Austria, 86% success rate, grant/research opportunities

### S20 · LINZ ECOSYSTEM · Immersive
- Photo: **LOCAL FILE `photos/ars-immersive-color.webp`** (Ars Electronica immersive colorful projection room, people walking on vibrant floor art), overlay 55%
- Label: "Ecosystem"
- Headline: "Part of the Linz Ecosystem"
- 2×2 grid: Tabakfabrik (dark card), JKU Linz (dark card), City of Linz (dark card), Ars Electronica (ORANGE card)

### S21 · LET'S TALK · Immersive CTA
- Photo: **LOCAL FILE `photos/ars-deepspace.webp`** (Ars Electronica Deep Space 8K, people viewing Earth projection), overlay 82%
- Label: "Let's Talk"
- Headline: "Let's Have a Conversation"
- Body: "We'd love 30 minutes of your time..." with Letter of Intent framing
- Orange contact box: Daniel Kruger / info@linzhostel.com · +43 677 64417074 · [www.linzhostel.com](https://www.linzhostel.com) (hyperlinked, underlined)

### S22 · CLOSING · Hero
- Photo: **LOCAL FILE `photos/linz-freinberg-sunset.webp`** (Linz panorama from Freinberg at sunset, Danube with bridges, city skyline, Pöstlingberg cable car towers), gradient overlay
- Headline (italic, large): "Where the festival continues."
- Subline: "Linz Hostel: The Social Impact Hub"
- Blue divider line (3rem wide, centered)
- Footer: "Opening 2027 · 90 Beds · Linz Creative District · Founding Partners Welcome"

## PHOTOS — CDN URLs (Pexels, w=1920)

Use this URL pattern: `https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg?auto=compress&cs=tinysrgb&w=1920`

| Slide | Pexels ID | Description |
|-------|-----------|-------------|
| S01 | 7192878 | People silhouettes, warm glow at dusk |
| S04 | 2041000 | Warm bar interior, wood countertop, Berlin |
| S05 | 6208398 | Abstract modern architecture |
| S06 | 6232561 | Overhead communal dinner, string lights |
| S07 | 2874780 | Atmospheric warm-toned interior |
| S08L | 5610117 | Blue light installation, silhouettes |
| S08R | 4412789 | Warm community interior |
| S09 | 36181951 | Dark architectural abstract |
| S10 | 4046793 | Geometric neon light installation |
| S12 | 3121302 | Illuminated lanterns, surreal |
| S13 | 4907201 | Hostel bunk beds, friendly |
| S15 | 36184950 | Contemporary architecture |
| S17 | 36297599 | Modern structural detail |
| S18 | 3767508 | Abstract light art |
| S19 | 4920848 | Community/social scene |

## PHOTOS — LOCAL FILES (provide these alongside the HTML)

| Slide | Filename | Description |
|-------|----------|-------------|
| S02 | `photos/team-hands.jpg` | Diverse hands holding seedlings over green grass, overhead shot, no faces |
| S20 | `photos/ars-immersive-color.webp` | Ars Electronica immersive room, colorful kaleidoscopic projections on floor and walls, people interacting |
| S21 | `photos/ars-deepspace.webp` | Ars Electronica Deep Space 8K, people viewing Earth projection in dark room |
| S22 | `photos/linz-freinberg-sunset.webp` | Linz panorama from Freinberg at sunset, Danube with bridges, Pöstlingberg cable car towers, golden sky |

## KEY RULES

1. NEVER use FOMO, fear, or pushy language. The tone is confident and invitational.
2. Personas on S13 must be clearly hypothetical (use archetypes like "A young artist from Latin America", not named characters).
3. The www.linzhostel.com link must be a clickable hyperlink.
4. Blue (`#2A6FDB`) is ONLY for divider lines — never for text, backgrounds, or accents.
5. Orange (`#E8530E`) is for text highlights, labels, filled boxes, bullet dots, stat numbers.
6. All Pexels photos must use `w=1920` for full-HD resolution.
7. The 6 local photos (team-hands, ars-immersive-color, linz-freinberg-sunset, linz-hauptplatz, ars-deepspace, linz-landstrasse) use relative paths `photos/filename`.
