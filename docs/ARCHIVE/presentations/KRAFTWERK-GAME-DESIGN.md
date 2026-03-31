# 🎮 KRAFTWERK — Build the Hostel
## Game Design Document v1.0
### Date: Feb 2026 | Status: CONCEPT → MINI PROTOTYPE

---

## One-Liner
**A yes/no decision game where you build a real hostel from a raw factory shell. Every choice shapes the space. Every player adds to the same building.**

## Goal
Get true fans, investors and supporters for KraftWerk by letting them EXPERIENCE building it — without it feeling like a pitch.

## Target Audience
Everyone — viral awareness + email signups. The game converts players into newsletter subscribers who follow the build journey.

## Platform
Browser-only. Mobile-first. No app download. URL: `kraftwerk.game`

---

## CORE MECHANIC: "Sort the Hostel"

Inspired by **Sort the Court** (yes/no decisions build a kingdom) + **r/place** (collective shared construction).

### The Loop
1. Character appears with a one-liner + decision
2. Player taps YES or NO
3. Background photo TRANSFORMS — new element appears as glowing wireframe → solidifies
4. Three meters shift: 💰 Budget / 🛏️ Beds / ❤️ Connection Score
5. Next character appears
6. After ~15 decisions → ending screen → collective stats → email CTA

### Session Length
~5-7 minutes. Compact, no one gets bored.

---

## CHARACTERS (15 decisions)

| # | Character | Decision | YES | NO |
|---|-----------|----------|-----|-----|
| 1 | 🏗️ The Architect | "The shell has original terracotta floors. Keep them?" | +Charm, +Budget saved | +Modern look, -Heritage |
| 2 | 🪟 The Glazier | "These factory windows are massive. Restore them?" | +Natural light, +Heritage, -Budget | +Insulation, new windows |
| 3 | 🛏️ The Designer | "Dorm pods with curtains, or open bunks?" | +Privacy, +Premium price, -Budget | +Capacity, +Social |
| 4 | 👩‍🍳 The Community Chef | "Nightly community dinners, 6-8pm?" | +Connection, -Budget (kitchen costs) | +Budget, -Connection |
| 5 | 🧘 The Yoga Teacher | "Morning flow classes in the common room?" | +Guest satisfaction, +Uniqueness | +Extra sleeping capacity |
| 6 | 🎓 The JKU Student | "She needs a place for 3 months. Offer long-term beds?" | +Stable revenue (10 beds), -Tourist flex | +Tourist capacity |
| 7 | 🔧 The Grand Garage Maker | "Upcycled furniture from the makerspace?" | +Sustainability, +Story, +Budget saved | +Professional look |
| 8 | 🏛️ The City Official | "He wants to inspect progress. Open the doors?" | +Credibility, +Grant access, -2 weeks delay | +Build speed |
| 9 | 🎨 The Ars Electronica Artist | "Interactive light installation in the lobby?" | +Wow factor, +PR, -Budget | +Practical space |
| 10 | 🤝 The Volkshilfe Partner | "Hire refugees + disabled youth for inclusive staffing?" | +Social impact, +Grant eligibility, +SROI | +Simpler hiring |
| 11 | 💻 The Digital Nomad | "Dedicated coworking 'Flow Zone' with fast wifi?" | +Revenue stream, +Nomad market | +More beds instead |
| 12 | 🏭 The Tabakfabrik Manager | "He offers a pop-up event space. Take it?" | +Brand association, +Events revenue | Focus on core hostel |
| 13 | 📚 The Workshop Leader | "Run a 'Build a Social Hostel' course for visitors?" | +Teachcation revenue, +Uniqueness | +Simpler operations |
| 14 | 💰 The Angel Investor | "She offers €100K for advisory role + equity" | +Massive budget, +Mentorship | Keep full ownership |
| 15 | 🌍 The First Guest | "Opening night. Throw a community party?" | +Connection, +PR, +Story | +Quiet soft opening |

---

## VISUAL SYSTEM

### The Innovation: Real Photos + Construction Overlay
No browser game does this. Our distinctive look.

**Layers:**
1. **Base**: Real Tabakfabrik photos, desaturated to 30%, slight blur
2. **Blueprint**: Cyan/copper wireframe overlays (CSS box-shadow glow + SVG edge detection)
3. **Materialized**: As decisions are made, wireframes "solidify" into colored elements
4. **UI**: Character cards + meters overlay on top

**Color Palette** (inherited from pitch app):
- `kw-charcoal` #1a1a1a — dark background
- `kw-copper` #c07a4a — primary accent, wireframe glow
- `kw-cream` #f5f0e8 — text
- `kw-teal` #5eb8a8 — positive/connection
- `kw-coral` #e97c6a — CTA accent
- `kw-peach` #e8a876 — highlight

**Typography**: Playfair Display (headings) + clean sans-serif (body)

### CSS Techniques
- `mix-blend-mode: screen` for wireframe overlay
- `backdrop-filter: blur()` for depth
- `box-shadow` multi-layer glow (copper, not cyan — matches brand)
- SVG `feConvolveMatrix` for edge detection on photos
- `@keyframes` for wireframe pulse + materialization animation
- CSS `transition` for meter changes

---

## ENDING SYSTEM

### No "fail" states. Every ending is a win.

The variation is in EMPHASIS, not success/failure:

**Calculation:**
- Count YES answers in categories: Heritage, Community, Revenue, Impact
- Highest category = your build's "personality"

**Possible endings:**
- 🏛️ **"The Heritage Hub"** — You preserved the soul of the Tabakfabrik
- ❤️ **"The Connection Engine"** — You engineered belonging into every room
- 📈 **"The Smart Build"** — You balanced vision with viability
- 🌍 **"The Impact Machine"** — You built something bigger than a hostel

All endings converge on: "This is KraftWerk. It's being built for real."

---

## COLLECTIVE LAYER (v2 — not in prototype)

After finishing, player sees aggregate stats from ALL players:
- "89% kept the terracotta floors"
- "73% chose community dinners"
- "312 people have built their KraftWerk"

Stored via Vercel KV or simple API route. Every playthrough adds to collective.

---

## CONVERSION FLOW

1. **Play** — zero friction, no signup gate
2. **Finish** — see your build summary + ending type
3. **Emotional peak** — "This isn't just a game. KraftWerk is being built right now."
4. **Soft CTA** — "Follow the Build" → email signup (expect 12-35% conversion)
5. **Share** — generate Wordle-style emoji card + link

### Shareable Card Format
```
🏗️ My KraftWerk Build:
🟫🟫🟫 Heritage floors ✓
🍳🍳🍳 Community kitchen ✓
🧘⬜⬜ No yoga studio
🛏️🛏️🛏️ 74 beds
❤️ Connection: 87/100
Build yours → kraftwerk.game
```

---

## TECH STACK

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js + TypeScript | Can reuse Vercel deployment |
| Game logic | State machine (plain TS) | No game engine needed |
| Visuals | CSS transitions + real photos | mix-blend-mode, backdrop-filter |
| Collective | Vercel KV | Simple key-value store |
| Email | ConvertKit or Mailchimp embed | One field |
| Sharing | Canvas API → PNG or emoji text | Client-side generation |
| Domain | kraftwerk.game | TBD |

## BUILD ESTIMATE
- **Time**: 6-8 hours (3-4 sessions)
- **Cost**: ~$10-25 in Claude Code tokens
- **Complexity**: MVP — polished but not overengineered

---

## OPEN QUESTIONS
- [ ] Final character dialogue copy (tone: warm? cheeky? professional?)
- [ ] Which 3-4 Tabakfabrik photos to use as base backgrounds
- [ ] Email provider choice (ConvertKit vs Mailchimp vs other)
- [ ] Domain setup for kraftwerk.game
- [ ] Collective stats backend (v2 scope)

---

## INSPIRATION REFERENCES
- **Sort the Court** — yes/no → kingdom grows (core mechanic)
- **A Dark Room** — progressive reveal, text-first (pacing)
- **SPENT** — emotional ending → donation CTA (conversion model)
- **r/place** — collective visible construction (community layer)
- **Wordle** — daily play + shareable emoji grid (virality)
- **Universal Paperclips** — idle numbers with narrative meaning (engagement)
- **charity: water** — personal ownership + progress visualization (supporter identity)
