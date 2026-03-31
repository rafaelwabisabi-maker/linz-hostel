# Shot Manifest — Linz Hostel Promo Video
## Visual curation: image → chapter mapping

**Legend:**
- `[GHIBLI-TRANSFORM]` = Apply Ghibli/illustrated filter to this existing photo
- `[GENERATE]` = Create new image from prompt
- `[REAL]` = Use as-is (color-grade to brand palette)
- `[VIDEO]` = Use existing video clip or extract segment

---

## Naming Convention — Lego Brick System

All output files follow a strict naming pattern so every asset is self-describing and sortable:

```
ch[NN]-[chapter-slug]-[shot-number]_[description].[ext]
```

**Components:**
- `ch[NN]` — zero-padded chapter number (00–08)
- `[chapter-slug]` — short chapter identifier (see table below)
- `[shot-number]` — two-digit shot number within the chapter (01, 02, ...)
- `[description]` — lowercase, hyphenated description of the shot content
- `[ext]` — output file extension (`.png` for stills, `.mp4` for animated clips, `.webp` preserved for source files)

**Chapter Slugs:**

| Ch # | Slug | Chapter Name |
|------|------|-------------|
| 00 | `title` | Title |
| 01 | `problem` | The Problem |
| 02 | `vision` | The Vision |
| 03 | `sauce` | The Secret Sauce |
| 04 | `location` | The Location |
| 05 | `ecosystem` | The Ecosystem |
| 06 | `numbers` | The Numbers |
| 07 | `team` | The Team |
| 08 | `ask` | The Ask |

**Examples:**
- `ch01-problem-01_corridor-isolation.png`
- `ch04-location-04_tabakfabrik-exterior.webp`
- `ch08-ask-01_founder-selfie.mp4`

---

## Ch 0 — TITLE (3 sec)
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 0.1 | REAL | `ch00-title-01_cover-frame.png` | `public/images/moodboard/pitchdeck_cover.png` | Use as opening frame. Overlay Linz Hostel logo + tagline. |

---

## Ch 1 — THE PROBLEM (12 sec) — GHIBLI STYLE
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 1.1 | GENERATE | `ch01-problem-01_corridor-isolation.png` | — | "Wide establishing shot of a solitary figure walking through an empty modern corridor, muted cool tones, feeling of isolation, Studio Ghibli watercolor style inspired by Howl's Moving Castle, hand-painted texture. Brand palette: charcoal #4A4543 and cream #C8BCB4 with accents of copper #C4997E and coral #E76E50. 16:9 aspect ratio, 1920x1080" |
| 1.2 | GHIBLI-TRANSFORM | `ch01-problem-02_linz-stats-map.png` | `public/images/moodboard/anchor_linz_map_stats.png` | Transform the Linz stats/map visual into Ghibli style. Stats can float as overlays in the video. |
| 1.3 | GHIBLI-TRANSFORM | `ch01-problem-03_personal-story.png` | `public/images/moodboard/anchor_personal_story.png` | Transform personal story visual — emotional hook. |

---

## Ch 2 — THE VISION (12 sec) — GHIBLI STYLE
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 2.1 | GHIBLI-TRANSFORM | `ch02-vision-01_before-after.png` | `public/images/moodboard/anchor_before_after.png` | Before→after transformation. Key visual for "old model vs new." |
| 2.2 | GHIBLI-TRANSFORM | `ch02-vision-02_common-room.png` | `public/images/moodboard/anchor_common_room.png` | Warm communal living room — the "Anchor Model" in action. |
| 2.3 | GENERATE | `ch02-vision-03_community-dinner.png` | — | "Medium shot of a warm community dinner scene in an industrial-chic hostel, diverse group of people laughing around a long wooden table, warm copper lighting, candles, Studio Ghibli animated style inspired by Howl's Moving Castle, hand-drawn watercolor feel. Brand palette: copper #C4997E as dominant warm tone, coral #E76E50 accents, charcoal #4A4543 shadows, cream #C8BCB4 highlights. 16:9 aspect ratio, 1920x1080" |

---

## Ch 3 — THE SECRET SAUCE (12 sec) — GHIBLI STYLE
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 3.1 | GHIBLI-TRANSFORM | `ch03-sauce-01_teachcation-concept.png` | `public/images/moodboard/teach_cover_illustration.png` | Teachcation concept art — already illustrated, enhance Ghibli. |
| 3.2 | GHIBLI-TRANSFORM | `ch03-sauce-02_maker-workshop.png` | `public/images/moodboard/teach_maker_workshop.png` | Makers at work — "Teach and learn" pillar. |
| 3.3 | GHIBLI-TRANSFORM | `ch03-sauce-03_circular-journey.png` | `public/images/moodboard/teach_circular_journey.png` | Guest journey diagram — arrive, learn, create, share. |

---

## Ch 4 — THE LOCATION (12 sec) — REAL PHOTOS
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 4.1 | REAL | `ch04-location-01_open-floor.jpg` | `public/images/location-1.jpg` | Open floor plan with industrial columns — hero establishing shot. |
| 4.2 | REAL | `ch04-location-02_windows-light.jpg` | `public/images/location-4.jpg` | Large windows flooding light in — potential of the space. |
| 4.3 | REAL | `ch04-location-03_corridor-depth.jpg` | `public/images/location-3.jpg` | Corridor with natural light — depth and scale. |
| 4.4 | REAL | `ch04-location-04_space-interior.jpg` | `public/images/location-2.jpg` | Additional interior angle — use only if needed for variety. **DO NOT USE Tabakfabrik exterior until location confirmed.** |

---

## Ch 5 — THE ECOSYSTEM (10 sec) — REAL PHOTOS
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 5.1 | REAL | `ch05-ecosystem-01_partners-overview.png` | `public/images/moodboard/anchor_partners.png` | Partnership ecosystem overview — JKU, Grand Garage, etc. |
| 5.2 | REAL | `ch05-ecosystem-02_linz-tabakfabrik-map.png` | `public/images/moodboard/teach_linz_tabakfabrik_map.png` | Map showing Linz + TabakFabrik location in context. |
| 5.3 | REAL | `ch05-ecosystem-03_festivals.png` | `public/images/moodboard/anchor_festivals.png` | Festival/community integration — ecosystem proof. |

---

## Ch 6 — THE NUMBERS (12 sec) — REAL PHOTOS
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 6.1 | REAL | `ch06-numbers-01_revenue-skyline.png` | `public/images/moodboard/anchor_revenue_linz_skyline.png` | Linz skyline with revenue overlay — financial context. |
| 6.2 | GENERATE | `ch06-numbers-02_key-metrics-infographic.png` | — | "Wide establishing shot of a clean infographic on dark charcoal #4A4543 background: key metrics in copper #C4997E text — 90 beds, Break-even Month 14, <50% occupancy, €720K Year 3, €400K total investment. Minimal, elegant, data visualization style inspired by Howl's Moving Castle hand-crafted aesthetic. Accent details in coral #E76E50, secondary text in cream #C8BCB4. 16:9 aspect ratio, 1920x1080" (Alternative: Use Canva or CapCut text overlays instead of generating — faster.) |

---

## Ch 7 — THE TEAM (10 sec) — REAL PHOTOS/VIDEO
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 7.1 | REAL | `ch07-team-01_daniel-portrait.jpg` | `public/images/moodboard/daniel_austria_southafrica.jpg` | Daniel — personal connection, founder story. |
| 7.2 | REAL | `ch07-team-02_anna-portrait.png` | `public/images/moodboard/teach_founders_portrait.png` | Anna — operational expertise. |
| 7.3 | REAL | `ch07-team-03_team-superheroes.png` | `public/images/moodboard/anchor_team_superheroes.png` | Team overview — strength and complementarity. |

---

## Ch 8 — THE ASK (15 sec) — REAL / NARRATOR
| # | Type | Brick Name | Source | Prompt/Notes |
|---|------|-----------|--------|-------------|
| 8.1 | VIDEO | `ch08-ask-01_founder-selfie.mp4` | Selfie recording (to be created) | Founder speaking directly to camera — the ask. Most personal moment. |
| 8.2 | REAL | `ch08-ask-02_closing-linz.png` | `public/images/moodboard/anchor_closing_linz.png` | Closing Linz visual — background for final card. |

---

## SUMMARY

| Chapter | Style | # of visuals | Need to create |
|---------|-------|-------------|----------------|
| 0 — Title | Real | 1 | 0 |
| 1 — Problem | Ghibli | 3 | 1 generated + 2 transforms |
| 2 — Vision | Ghibli | 3 | 1 generated + 2 transforms |
| 3 — Sauce | Ghibli | 3 | 3 transforms |
| 4 — Location | Real | 4 | 0 (existing photos) |
| 5 — Ecosystem | Real | 3 | 0 (existing photos) |
| 6 — Numbers | Real | 2 | 1 text overlay (Canva/CapCut) |
| 7 — Team | Real | 3 | 0 (existing photos) |
| 8 — Ask | Real/Video | 2 | 1 selfie recording |
| **TOTAL** | | **24** | **3 Ghibli-gen + 7 Ghibli-transform + 1 text + 1 selfie** |

### Work Breakdown
- **Ghibli transforms:** 7 images → Meta AI or ChatGPT (free)
- **Ghibli generations:** 3 new images → Meta AI or ChatGPT (free)
- **Real photos:** 13 images → Already exist, just color-grade
- **Text overlay:** 1 → Create in CapCut or Canva (free)
- **Selfie video:** 1 → Record on iPhone
- **Image-to-video animation:** 10 Ghibli images + ~5 real photos = ~15 clips → Pika Labs (free)
- **Real photos as b-roll:** 8 can use Ken Burns (zoom/pan) in CapCut instead of AI animation → saves time

### Priority Order for AI Animation (Pika Labs)
Animate these first (highest visual impact):
1. `2.1` — Before/after transformation (hero visual)
2. `2.3` — Community dinner (emotional)
3. `1.1` — Solitary figure (opening mood)
4. `3.1` — Teachcation concept
5. `3.2` — Maker workshop

Ken Burns (zoom/pan) is fine for the rest — saves Pika credits.
