# LINZ HOSTEL V3 — Production State
> Updated: 2026-03-12 01:05
> Script: v4 (2026-03-11) — `script-v4.md`
> Style: Social Hub montage — `SOCIAL-HUB-STYLE-DIRECTION.md`
> Voice: **Liam — Energetic, Social Media Creator** (ElevenLabs)
> Total duration: **103.3 sec** (audio) + 3 sec title + 5 sec end card = **~111 sec**

## Task Status

| Task | Name | Status | Completed | Notes |
|------|------|--------|-----------|-------|
| TASK-01 | Pexels Storyboard | **done** | 2026-03-11 | 14 clips approved across 7 chapters |
| TASK-02 | Pexels Download | **not_needed** | — | Using Pexels URLs direct in Remotion |
| TASK-03 | Manim Ch6 | **done** | 2026-03-11 | ch6-numbers.mp4 APPROVED |
| TASK-03b | Manim Ch8 | **done** | 2026-03-11 | ch8-lettering.mov APPROVED (transparent) |
| TASK-04 | TTS Narration | **done** | 2026-03-11 | Liam v1 LOCKED — `narration-v1-liam-APPROVED.mp3` |
| TASK-05 | Timing Calibration | **done** | 2026-03-11 | Chapter timestamps from silence detection |
| TASK-06 | Scaffold V3 | **done** | 2026-03-11 | timing.ts + LinzHostelV3.tsx + Root.tsx registered |
| TASK-07 | Ch0 + End Card | **done** | 2026-03-11 | Title card + end card with brand tokens |
| TASK-08 | Ch1-Ch5 Build | **done** | 2026-03-11 | 14 Pexels clips via CDN URLs, ColorGrade + KenBurns |
| TASK-09 | Ch6 Build | **done** | 2026-03-11 | ManimClip embed, near-black bg |
| TASK-10 | Ch7-Ch8 Build | **done** | 2026-03-11 | Plant timelapse + communal scene + Manim overlay |
| TASK-11 | Audio Integration | **done** | 2026-03-11 | Narration synced + music with dynamic per-chapter volume |
| TASK-12 | Music | **done** | 2026-03-12 | Replaced: "Inspiring Piano & Strings" by NotAIGenerated (Pixabay CC0, 2:34, 255kbps) |
| TASK-13 | Final Render | **awaiting_preview_approval** | 2026-03-12 | All review + critic fixes applied — Rafael to preview + approve for final render |

## Audio Timestamps (from silence detection, -35dB threshold)

Total: **103.3 sec** | Voice: Liam | Speed: 1.07 | File: `narrator/narration-v1-liam-APPROVED.mp3`

| Chapter | Start (sec) | End (sec) | Duration | Target | Δ |
|---------|-------------|-----------|----------|--------|---|
| Ch1 — Problem | 0.0 | 15.4 | **15.4s** | 12s | +3.4 |
| Ch2 — Vision | 15.4 | 29.1 | **13.7s** | 12s | +1.7 |
| Ch3 — Secret Sauce | 29.1 | 39.2 | **10.1s** | 10s | +0.1 |
| Ch4 — Location | 39.2 | 56.5 | **17.3s** | 12s | +5.3 |
| Ch5 — Ecosystem | 56.5 | 69.0 | **12.5s** | 10s | +2.5 |
| Ch6 — Plant timelapse (numbers narration) | 69.0 | 78.7 | **9.7s** | 10s | -0.3 | ← shifted to sync Manim with "Two roots."
| Ch7 — Manim numbers (team narration) | 78.7 | 90.9 | **12.2s** | 10s | +2.2 |
| Ch8 — Ask | 90.9 | 103.3 | **12.4s** | 10s | +2.4 |

> Note: Ch4 runs long because "Linz's innovation neighbourhood" has many pauses + words.
> Ch7 is short — plant timelapse can breathe in the gap.

## Approved Clips (from storyboard review sessions 2026-03-11)

### Ch1 — The Problem (15.4 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 5686701 | Woman walking alone at night | 19s | 1080p |
| 8518452 | **LINZ DRONE — Postlingberg pilgrimage church** | 7s | 1080p |

### Ch2 — The Vision (13.7 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 5158553 | Friends welcoming each other | 104s | 4K |
| 29323695 | Group ping pong game | 5s | 1080p |

### Ch3 — The Secret Sauce (10.1 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 8189250 | Hands on flour (Ron Lach) | 13s | 4K |
| 8136625 | Women painting together | 27s | 4K |
| 7966647 | Coworking room — diverse team | 20s | 4K |

### Ch4 — The Location (17.3 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 31916198 | Artist painting in sunlit industrial loft | 19s | 4K |
| 29913841 | Close-up welding industrial | 15s | 4K |
| 35556852 | Festive outdoor event with lights & crowd | 22s | 4K |

### Ch5 — The Ecosystem (12.5 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 7668490 | Group meeting / collaboration | 32s | 4K |
| 30328849 | Festival: Outdoor crowd hands up | 5s | 1080p |
| 2941128 | Festival: Concert crowd gathering | 15s | 4K |
| 36218487 | Festival: Street parade trumpet band | 27s | 1440p |

### Ch6 — The Numbers (13.7 sec)
**MANIM** — `ch6-numbers.mp4` ✅ APPROVED
- Near-black bg #0D0C0B, cream numbers, teal labels
- Helvetica Neue, staggered reveal: number → rule draws → label fades
- 4 figures: Month 14 → 48% → €720K → €400K

### Ch7 — The Team (8.2 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 31305681 | Chimonanthus yellow blossoms timelapse (66s, CC0) | 66s | 1080p | LOCAL: `public/broll/v3/ch7-flowers-timelapse.mp4` |

### Ch8 — The Ask (12.4 sec)
| Pexels ID | Title | Dur | Res |
|-----------|-------|-----|-----|
| 5616499 | Serving food at gathering | 24s | 4K |

**MANIM OVERLAY** — `ch8-lettering.mov` ✅ APPROVED (transparent)
- Top-left position, ascending type: "Ten thousand. → Fifty. → A hundred."
- Teal rule draws, "It all compounds." writes in
- Overlay on Pexels clip via Remotion layer

### End Card (5 sec)
- Charcoal #4A4543 bg
- Coral #E76E50: info@linzhostel.com | linzhostel.com
- Cream #C8BCB4 at 40%: "Starting in Linz."
- Clay logo animation (Rafael installing)

## Manim Renders

| Scene | File | Status |
|-------|------|--------|
| FinancialNumbers v1 | public/manim/v3-financial-numbers.mp4 | ~~REJECTED~~ |
| FinancialNumbers v2 | public/manim/v3-financial-numbers-v2.mp4 | ~~SUPERSEDED~~ |
| **Ch6 Numbers v3** | **public/manim/ch6-numbers.mp4** | **✅ APPROVED** |
| **Ch8 Lettering** | **public/manim/ch8-lettering.mov** | **✅ APPROVED** (transparent) |

## Narration

| Item | Value |
|------|-------|
| Voice | Liam — Energetic, Social Media Creator |
| File | `narrator/narration-v1-liam-APPROVED.mp3` |
| Duration | 103.3 sec |
| Stability | 0.30 |
| Similarity | 0.57 |
| Style | 0.35 |
| Speed | 1.07 |
| Status | **✅ LOCKED** |

## Music

| Item | Value |
|------|-------|
| Style | Buildup/Uplifting/Motivational — "Inspiring Piano & Strings" |
| File | `public/audio/v3/music.mp3` |
| Source | Pixabay — NotAIGenerated (CC0, no Content ID) |
| Duration | 2:34 (154s — plays through 111s video with room to spare) |
| Bitrate | 255kbps |
| Levels | Ch0-Ch1: 22% · Ch2-Ch5: 18% · Ch6: 12% · Ch7-Ch8: OFF · End: 50%→0% |
| Status | **✅ REPLACED 2026-03-12** — was "Slow Motion" by Bensound (rejected: too boring) |
| **Upgrade** | **"Slow Motion" by Bensound** — exact 80 BPM, piano + synths, cinematic. Download from bensound.com → replace `public/audio/v3/music.mp3` |

## Transitions & Overlays

MotionArray = **NOT NEEDED**. All covered by:
- Pexels clips (free)
- Manim animations (code-native)
- Remotion code components (screen blend overlays)
- CSS/SVG transitions in Remotion

## Rafael's Review Log (2026-03-12)

From: `/Users/apple/Downloads/there is a strange guy talking in the background of this clip - MUTE IT .docx`

### ✅ FIXED (code applied)
| # | Issue | Fix |
|---|-------|-----|
| 1 | Strange guy talking in background / audio breaking between clips | Added `muted` to all OffthreadVideo in BRollShot |
| 2 | Ch1 clip order wrong — drone should be FIRST, woman SECOND | Swapped PEXELS.ch1 array + adjusted split 55→35% |
| 3 | Ch6/Ch7 wrong order — flowers BEFORE numbers | Swapped Ch7Team / Ch6Numbers in main composition |
| 4 | Music too loud vs voiceover | Lowered all MUSIC_LEVELS ~25% (30%→22%, 25%→18%, etc.) |

### ✅ FIXED SESSION 2 (2026-03-12)
| # | Issue | Fix |
|---|-------|-----|
| 5 | Music too boring ("Slow Motion"/"Dreams") | Replaced with "Inspiring Piano & Strings" (NotAIGenerated, Pixabay CC0) — Buildup + Uplifting + Motivational. 154s, 255kbps |
| 6 | Transitions missing | Added crossfade (fade-in + fade-out over 10 frames) to ALL BRollShot clips via `crossFade` prop |
| 7 | Closed captions | Built `CaptionOverlay` component + `captions.ts` — 34 phrase-level entries, full video, fade in/out per phrase |
| 8 | "Completely wrong" clip | Trumpet/parade clip #36218487 REMOVED from Ch5. Now 3 clips instead of 4, ~4.2s each |
| 11 | Ch5 festival clips ending too fast | Fixed by removing trumpet clip — remaining 3 clips get more breathing room |

### ✅ FIXED SESSION 3 — Critic Agent Blocking Issues (2026-03-12)
| # | Issue | Fix |
|---|-------|-----|
| C1 | "It all compounds." never displayed (zero-gap overlap: startSec == previous endSec at 97.4) | `captions.ts`: startSec 97.4→97.5, endSec 98.0→98.5 |
| C2 | "Nobody stays a stranger." only 0.3s at full opacity (start 105.6, end 106.3 = 0.7s total with 6-frame fade each side) | `captions.ts`: endSec 106.3→109.0 — overlaps into end card charcoal bg |
| C3 | "Two roots." narration (81.7s) played over plant timelapse; Manim didn't appear until 85.7s — 4s mismatch | `timing.ts`: ch6/ch7 boundary 82.7→78.7 audio sec → Manim now starts at video 81.7s |
| C4 | Spring in Ch0Title: add overshootClamping | `LinzHostelV3.tsx`: `overshootClamping: false` added to spring config |
| C5 | End card text had no fade-out (abrupt cut at 111s) | `LinzHostelV3.tsx`: EndCard gets `exitOpacity = fadeOut(frame, durationInFrames, 25)` applied to both text elements |
| C6 | Plant timelapse (ID 855867) was CDN-only, not downloaded | Downloaded Pexels 31305681 (Chimonanthus yellow blossoms, 66s, 3.5MB) to `public/broll/v3/ch7-flowers-timelapse.mp4` ✅ |
| C7 | "Do we have enough SFX?" — no SFX layer existed | Added "Simple Whoosh" (Pixabay CC0, 199K downloads) at 8 chapter transitions, volume 0.15 (barely-there texture). File: `public/audio/v3/sfx-whoosh.mp3` |

### ⚠️ REMAINING — Important (not blocking, for Rafael to review)
| # | Issue | Recommendation | Candidate |
|---|-------|----------------|-----------|
| I1 | Ch4 clip 2 (welding, ID 29913841) contradicts "flooded with light" narration | Replace with sunlit industrial loft | **ID 31834967** — Solo dance in sunlit industrial space (44s, 4K) ✅ found |
| I2 | Ch4 clip 3 (festive crowd, ID 35556852) duplicates Ch5 visuals | Replace with empty / before-opening feel | **ID 7348046** — Plastic-covered furniture, room (12s, 4K) ✅ found |
| I3 | 5 captions >60 chars may wrap to 2 lines on small screens | At fontSize 31 + maxWidth 78% (1920px), all should fit one line — monitor in preview | — |

#### I1/I2 Code Changes (apply in `~/remotion-videos/src/LinzHostelV3/LinzHostelV3.tsx`)
```diff
// Ch4 — The Location
-  { id: '29913841', split: 0.35 },  // welding ❌
+  { id: '31834967', split: 0.35 },  // solo dance in sunlit loft ✅
-  { id: '35556852', split: 0.30 },  // festive crowd ❌
+  { id: '7348046',  split: 0.30 },  // plastic-covered furniture / pre-opening ✅
```
> Apply → `npx remotion preview` → verify Ch4 (39–56s) looks right → mark I1+I2 FIXED here

## Gate Log

| Date | Task | Decision | Notes |
|------|------|----------|-------|
| 2026-03-11 | TASK-03 v1 | REJECTED | "absolutely horrible" |
| 2026-03-11 | TASK-01 round 1 | feedback | 19 NEW clips added after Rafael review |
| 2026-03-11 | TASK-03 v2 | SUPERSEDED | Purple+teal glows approach abandoned |
| 2026-03-11 | TASK-04 | **DONE** | Sally Ford abandoned. Liam 1-take success. |
| 2026-03-11 | TASK-01 | **DONE** | All 7 chapters approved. 14 clips locked. |
| 2026-03-11 | TASK-03 v3 | **APPROVED** | Near-black bg, cream numbers, Helvetica Neue |
| 2026-03-11 | TASK-03b | **APPROVED** | Ch8 transparent lettering, top-left position |
| 2026-03-11 | TASK-05 | **DONE** | Silence detection → 8 chapter timestamps |
| 2026-03-11 | TASK-06 | **DONE** | V3 scaffold: timing.ts, LinzHostelV3.tsx, Root.tsx |
| 2026-03-11 | TASK-07 | **DONE** | Ch0 title + End card with brand palette |
| 2026-03-11 | TASK-08 | **DONE** | All 14 Pexels clips integrated via CDN URLs |
| 2026-03-11 | TASK-09 | **DONE** | Ch6 Manim embed verified in preview |
| 2026-03-11 | TASK-10 | **DONE** | Ch7 plant timelapse + Ch8 communal + Manim overlay |
| 2026-03-11 | TASK-11 | **DONE** | Narration + music with dynamic per-chapter volume |
| 2026-03-11 | TASK-12 | **DONE** | Bensound "Dreams" downloaded (CC BY, ambient electronic) |
| 2026-03-12 | Review fixes S2 | **DONE** | Music replaced + transitions + captions + trumpet removed. TS: 0 errors |
| 2026-03-12 | Critic agent review | **DONE** | 3 blocking / 6 important / 6 nice-to-have identified |
| 2026-03-12 | Critic fixes S3 | **DONE** | All 3 blocking + 2 nice-to-have fixed. TS: 0 errors |
| 2026-03-12 | TASK-13 | **AWAITING** | Rafael to preview → approve → trigger render |
