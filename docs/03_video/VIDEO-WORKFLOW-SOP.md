# VIDEO WORKFLOW SOP — Linz Hostel
> **Version:** 3.0 · **Date:** 2026-03-12
> **Supersedes:** VIDEO-WORKFLOW-SOP v1, VIDS-WORKFLOW-BLUEPRINT, VIDS-AUTOMATION-GUIDE, GOOGLE-VIDS-WORKFLOW
> **Three pipelines:** A = Investor Video (Ghibli + Veo/Google Vids) · B = Partnership Videos (Google Vids) · **C = Remotion (CURRENT PRODUCTION)**

---

## ⚡ CURRENT PRODUCTION — Pipeline C (Remotion)

> **V3 is the active investor video.** It lives in `~/remotion-videos/` — a SEPARATE repo from this project.
> Status tracked in: `docs/03_video/VIDEO-STATE.md` (updated 2026-03-12)
> Canon script: `docs/03_video/script-v4.md`

### Two homes — know which you're touching:
| Location | Contains | When to use |
|----------|----------|-------------|
| `~/Desktop/PROJECTS/linz-hostel/docs/03_video/` | Scripts, SOP, storyboards, planning docs | Writing/editing copy, checking status, SOP work |
| `~/remotion-videos/` | Remotion code, assets (broll/, audio/, manim/) | Building/rendering the actual video |

### Remotion project structure:
```
~/remotion-videos/
├── src/
│   ├── LinzHostelV3/
│   │   ├── LinzHostelV3.tsx   ← main composition
│   │   ├── timing.ts          ← chapter timestamps (from silence detection)
│   │   └── captions.ts        ← 34 phrase-level CC entries
│   └── Root.tsx               ← registers compositions
├── public/
│   ├── broll/v3/              ← downloaded Pexels clips (ch1-ch8)
│   ├── audio/v3/
│   │   ├── narration-v1-liam-APPROVED.mp3  ← LOCKED narration
│   │   ├── music.mp3          ← "Inspiring Piano & Strings" (CC0, Pixabay)
│   │   └── sfx-whoosh.mp3     ← chapter transition whoosh (CC0, Pixabay)
│   └── manim/
│       └── v3-financial-numbers.mp4  ← Ch6 animated numbers
└── out/
    └── linz-hostel-v3.mp4     ← final render (when done)
```

### Editing commands + CC + voiceover protocol → `REVIEW-AND-EDIT-PROTOCOL.md` ← read before any review session

### To preview: `cd ~/remotion-videos && npx remotion preview`
### To render: `npx remotion render LinzHostel-V3 out/linz-hostel-v3.mp4`
### Current task: **TASK-13** — Rafael preview → approve → trigger render

### Media asset sources for V3:
| Asset type | Source | Location |
|------------|--------|----------|
| B-roll clips | Pexels CDN URLs (14 clips, CC0) | `~/remotion-videos/public/broll/v3/` — catalog at `docs/04_media/pexels/catalog.json` |
| Narration | ElevenLabs / Liam voice | `~/remotion-videos/public/audio/v3/` + mirror in `docs/03_video/narrator/` |
| Music | "Inspiring Piano & Strings" CC0 (Pixabay) | `~/remotion-videos/public/audio/v3/music.mp3` |
| SFX | "Simple Whoosh" CC0 (Pixabay) | `~/remotion-videos/public/audio/v3/sfx-whoosh.mp3` |
| Manim | Financial numbers animation | `~/remotion-videos/public/manim/v3-financial-numbers.mp4` |
| Closed captions | 34 phrase-level entries | `~/remotion-videos/src/LinzHostelV3/captions.ts` |
| Real location footage | Linz Jan 2026 scouting | `docs/04_media/location/VID_20260123_124637.mp4` — PROOF register, Ch4/Ch5 candidate |
| Moodboard | 114+ visual references | `docs/04_media/moodboard/` |

---

---

## VISUAL REGISTERS — Read Before Any Generation

Every visual in every video belongs to one register. Never mix within a single video.

| Register | When | Style | Message |
|----------|------|-------|---------|
| **DREAM** | Investor video Ch1-3 (Problem, Vision, Teachcation) | Hand-painted watercolor illustration, warm European animation feeling, soft linework | "We have a bold vision" |
| **PROOF** | Investor video Ch4-8 (Location, Ecosystem, Numbers, Team, Ask) + ALL partnership videos | Cinematic documentary, real space, warm amber, industrial architecture, people in motion | "This is real and serious" |
| **SYSTEMS** | Mural/network reveals, ecosystem diagrams, financial data moments | Clean motion graphics, nodes connecting, numbers animating, data overlays on architecture | "See the whole machine" |

> **Hard rules:**
> - Sparkasse, JKU, City of Linz → PROOF only. Never DREAM for financial/institutional audiences.
> - DREAM style: use "hand-painted watercolor illustration, warm European animation style, soft linework" — NOT "Ghibli" (copyright risk in prompts).
> - Never AI-generate Daniel/Anna faces — consistency impossible across generations.

---

## PIPELINE A: Investor Video (Ghibli + Veo 3.1 + Google Vids)

### Phase 1 — Script (Claude, ~30 min)
- Read `GOLD-FILE.md` + `shot-manifest.md`
- Target: ~100 sec / ~249 words / 8 chapters
- Each chapter: 1-2 sentences max. Hook in Ch1. CTA in Ch8.
- **Current canonical:** `script-v2.md` (location-open framing, 2026-03-10)

### Phase 2 — Shot Manifest (Claude, ~20 min)
- Map each chapter to 2-3 visual bricks
- Classify each: `[GHIBLI-GENERATE]` | `[GHIBLI-TRANSFORM]` | `[REAL]` | `[VIDEO]` | `[TEXT-OVERLAY]`
- Write Ghibli generation prompts with brand hex codes
- **Current canonical:** `shot-manifest.md` (24 bricks mapped)

### Phase 3 — Image Bricks (You + ChatGPT, ~45 min)

**Ghibli generation prompt template:**
```
[SCENE DESCRIPTION], hand-painted watercolor illustration style,
warm European animation feeling, soft linework, intimate and human,
warm lighting with gentle shadows, [BRAND COLOR 1 #hex] and [BRAND COLOR 2 #hex] palette,
cinematic composition, 16:9 aspect ratio
```

**Ghibli transform prompt template:**
```
Transform this photo into hand-painted watercolor illustration style:
- Soft warm aesthetic, visible brushstrokes, hand-drawn feel
- Keep original composition and subject
- Brand colors: Charcoal #4A4543, Copper #C4997E, Coral #E76E50, Cream #C8BCB4
```

**Free tools by daily limit:**
| Tool | Use | Cost | Daily limit |
|------|-----|------|-------------|
| ChatGPT (GPT-4o) | Ghibli transforms + generation | Free tier | ~3-5/day |
| Meta AI (meta.ai) | Unlimited generations | Free | Unlimited |
| Bylo.ai | Quick Ghibli filter | Free | ~10/day |

Save all to `docs/03_video/images/` using the Lego naming convention (see below).

### Phase 4 — Animation / Clips (You + Veo 3.1, ~30 min)

**Animation prompt template:**
```
Subtle camera movement, gentle parallax, soft ambient animation,
dreamy atmosphere, 3-5 seconds
```

**Tool priority:**
| Tool | Use | Notes |
|------|-----|-------|
| Veo 3.1 (via Google Vids sidebar) | Hero shots, premium quality | Save credits for scenes that ARE the message |
| Pika Labs | General animation | Free, no watermark |
| LMArena | Access to Veo 3.1 / Sora 2 | 10/day free |

**What NOT to generate (use free stock instead):**
- Linz skyline / Danube views → Pexels, Wikimedia Commons
- Neighborhood / industrial architecture → stock available
- Festival crowd → Ars Electronica press materials

**Ken Burns fallback** (zoom/pan in CapCut): DREAM-register stills only. PROOF shots need real motion.

**Standardize all clips:**
```bash
ffmpeg -i input.mp4 -vf scale=1920:1080 -r 30 -c:v libx264 output.mp4
# Or: ./standardize.sh in docs/03_video/
```

### Phase 5 — Narrator (You, ~20 min)

**Option A — Real selfie video (RECOMMENDED):**
1. iPhone, good window light, eye-level, clean wall
2. 8 clips (one per chapter, 10-15 sec each)
3. CapCut → "Remove Background" → transparent floating head

**Option B — ElevenLabs TTS:**
- MCP installed in this project. Use ElevenLabs MCP tool.
- Sarah voice piloted: `docs/03_video/narrator/PILOT-TTS-Ch1-Ch2-Sarah.mp3`
- Voice: Sarah | Speed: 1.0 | Stability: 0.5 | Similarity: 0.8

### Phase 6 — Assembly in Google Vids (You, ~60 min)
1. `vids.new` → Storyboard → paste chapter-by-chapter table
2. Timeline structure per chapter:
   ```
   Track 3: Chapter title text (Playfair Display, brand colors)
   Track 2: Narrator (floating head, 30% frame, bottom-right)
   Track 1: B-roll (animated clip or still, full frame)
   Audio 1: Narrator voice
   Audio 2: Background music (Gemini Lyria 3 or YouTube Audio Library)
   ```
3. Music: 20% volume during narration, 60% during title/closing.
4. Captions: enable auto-captions (investors watch on mute). Style in brand colors.
5. Export: H.264, 1080p, 30fps. Save to `docs/03_video/final/`.

**Quality checklist:**
- [ ] Total ~90-100 seconds
- [ ] All 8 chapters present
- [ ] No black frames or audio gaps
- [ ] Captions readable + timed
- [ ] Opening grabs attention in first 3 seconds

---

## PIPELINE B: Partnership Videos (Google Vids)

> For partner-specific videos: ARS Electronica, JKU, Sparkasse, AWS, etc.
> Always PROOF register. Never DREAM.

### Step 1 — Brief (5 min)

| Question | Example (ARS Electronica) |
|----------|--------------------------|
| Who is the partner? | Ars Electronica Festival |
| What do WE give THEM? | 50-bed festival contingent, Grand Hall access |
| What do THEY give US? | €17,500/festival, cultural credibility |
| Who watches this? | Festival organizers, event planning team |
| What should they FEEL? | "This is festival infrastructure, not a hostel." |
| What should they DO? | Take a meeting with Daniel |
| Duration? | 90s (11 scenes) for pitch · 30s (scenes 1-4) for social |

Creative approach by audience:
| Approach | When |
|----------|------|
| **EMOTIONAL HOOK** | General audiences — human stories first, numbers last |
| **DATA PUNCH** | Investors, banks, politicians — market data first |
| **CINEMATIC STORYTELLER** | Creative orgs, festivals — pure visual cinema, poetic voiceover |

### Step 2 — Storyboard (Claude, ~30 min)

**Master prompt:**
```
I am creating a partnership story video for Linz Hostel: The Social Impact Hub
(community hostel + social innovation hub, Linz Austria, Donauland neighbourhood).

PROJECT CONTEXT:
- Key theme: interconnected ecosystem — each partner = a node in the network
- Visual style: Cinematic documentary, warm amber + industrial concrete tones
- Language: English voiceover. No talking heads. Camera-ready visual descriptions only.

PARTNER DATA:
[INSERT: partner name, what we give them, what they give us, funding target,
 who watches this, what should they feel after watching]

YOUR TASK:
Create a storyboard table with exactly three columns:
- "Scene Number"
- "Visual Prompt (Describe the exact 8-second visual action)"
- "Voiceover Script (Max 25 words)"

CONSTRAINTS:
- 60-second video = 7 scenes × 8 seconds each
- 90-second video = 11 scenes × 8 seconds each
- Final scene: always static text card with URL
- Visual style: warm amber, industrial architecture, intimate human moments
- Output ONLY the table. No preamble.
```

**Visual prompt rules:**
1. Always specify camera movement: "Slow aerial push", "Ground-level tracking", "Close-up", "Time-lapse"
2. Always specify lighting: "golden hour", "warm amber", "soft reading light"
3. Always include action — something MOVES in every scene
4. Never abstract: "A sense of community" → BAD. "Three people at a table, coffee cups, one drawing on a napkin" → GOOD

**Voiceover rules:** Max 25 words/scene. Ch1-3: HOOK. Middle: PROOF. Last 2-3: ASK. Never start with "Imagine."

### Step 3 — Test in Google Vids (10 min)
1. `vids.new` → click **Storyboard** (not "Help me create")
2. Paste 3-column table → generate
3. Check: footage matches mood? Voiceover timed? Final card clean?

### Step 4 — Refine (15 min)
- Swap weak clips: scene → Veo 3.1 sidebar → revised prompt → swap
- Voice = 80% volume. Music = subtle, never competes.
- Music by audience: ambient electronic (ARS) · warm acoustic (JKU) · corporate (Sparkasse)

### Step 5 — Export (5 min)
- Full video: `LinzHostel-[Partner]-v1-[YYYYMMDD].mp4`
- 30-sec social cut (scenes 1-4 + 2-sec end card): `LinzHostel-[Partner]-30s-[YYYYMMDD].mp4`
- Save to `docs/03_video/final/`

### Apps Script Setup (one-time)
1. Open Google Sheet: "Hostel key strategic partners"
   (local backup: `docs/01_strategy/Hostel key strategic partners.._.xlsx`)
2. Extensions → Apps Script → paste `KraftWerk-Vids-AppsScript.js` → save → refresh Sheet
3. Menu `🎬 KraftWerk Vids` appears

**Troubleshooting Apps Script:**
| Issue | Fix |
|-------|-----|
| Dark backgrounds fail silently | Skip Slides path, use Storyboard Pipeline directly |
| "Sheet not found" | Check tab name = "Sheet2" exactly (case-sensitive) |
| Permissions error first run | Click "Review Permissions" → Allow (one-time) |

---

## NAMING CONVENTION — Lego Bricks

Every output file:
```
ch[NN]-[chapter-slug]-[shot-number]_[description].[ext]
```

| Slug | Chapter |
|------|---------|
| title | Ch 0 — Title |
| problem | Ch 1 — The Problem |
| vision | Ch 2 — The Vision |
| teachcation | Ch 3 — Teachcation / Secret Sauce |
| location | Ch 4 — The Location |
| ecosystem | Ch 5 — The Ecosystem |
| numbers | Ch 6 — The Numbers |
| team | Ch 7 — The Team |
| ask | Ch 8 — The Ask |

Examples:
- `ch01-problem-01_corridor-isolation.png` (still)
- `ch01-problem-01_corridor-isolation.mp4` (clip)
- `ch07-team-01_daniel-southafrica.jpg` (real photo)
- `ch01-narrator.mp4` (raw narrator)
- `ch01-narrator-nobg.mp4` (bg removed)

---

## FILE STRUCTURE

```
docs/03_video/                        ← PLANNING & DOCS ONLY (not production assets)
├── VIDEO-WORKFLOW-SOP.md             ← this file
├── VIDEO-STATE.md                    ← live production state (V3 progress, gate log)
├── VIDEO-TASKS.md                    ← per-task agent briefs
├── script-v4.md                      ← ✅ CANONICAL script (2026-03-11, Liam voice)
├── shot-manifest.md                  ← 24 visual bricks for Pipeline A (Ghibli)
├── SOCIAL-HUB-STYLE-DIRECTION.md     ← V3 visual direction reference
├── ghibli-production-guide.md        ← Pipeline A Ghibli image prompts
├── storyboard-command-center.html    ← visual reference for V3 chapters
├── KraftWerk-Vids-AppsScript.js      ← Pipeline B Google Vids automation
├── standardize.sh                    ← ffmpeg clip normalization utility
├── narrator/
│   ├── narration-v1-liam-APPROVED.mp3  ← ✅ APPROVED narration (103.3s)
│   └── ARCHIVE/                        ← Sarah pilot (deprecated)
└── ARCHIVE/                            ← old scripts, storyboards, Google Vids era files
```

> **Production assets live in `~/remotion-videos/`** — see Pipeline C above.

---

## TROUBLESHOOTING

| Problem | Fix |
|---------|-----|
| AI animations look bad | Regenerate with different prompt. Or Ken Burns in CapCut. |
| Free tier limits hit | Rotate tools (Pika → LMArena → Kling). Wait 24h for refresh. |
| Watercolor style inconsistent | Use ONE tool for all transforms. Same prompt = same style. |
| Video too long | Cut chapters to 1 sentence each. Remove weakest chapter. |
| ADHD — losing momentum | Each phase stands alone. Stop anywhere — script + shot plan are still value. |

---

*Merged from: VIDEO-WORKFLOW-SOP v1 · VIDS-WORKFLOW-BLUEPRINT · VIDS-AUTOMATION-GUIDE · GOOGLE-VIDS-WORKFLOW · PRODUCTION-DIAGNOSIS (Visual Registers section)*
*March 2026*
