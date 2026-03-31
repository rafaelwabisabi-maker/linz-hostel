# LINZ HOSTEL V3 — Task Manifest
> Each task is self-contained. Agents read ONLY their section + referenced input files.
> Rules: "Linz Hostel" only (never KraftWerk). Location = "Linz Innovation neighbourhood".
> Palette: charcoal #4A4543, cream #C8BCB4, copper #C4997E, coral #E76E50, teal #4A7C7E
> Fonts: Playfair Display (titles) + Inter (body). 30fps, 1080p.

---

## TASK-01: PEXELS STORYBOARD
- **Depends on:** none
- **Gate:** RAFAEL_APPROVE
- **Inputs:** `script-v4.md` lines 152-162 (Pexels Search Strategy table)
- **Outputs:** Update VIDEO-STATE.md Pexels Storyboard table
- **Instructions:**
  Search Pexels using queries from script-v4's search strategy table. For each chapter (Ch1-Ch5, Ch7-Ch8):
  1. Use `searchVideos` and `searchPhotos` MCP tools with listed queries
  2. Pick best match per chapter based on visual direction in script-v4
  3. Record in VIDEO-STATE.md: chapter, query used, Pexels ID, type (video/photo), preview URL
  4. Ch6 = Manim (skip). Ch0/End = no footage (skip)
  5. Present candidates to Rafael for approval before any downloads

---

## TASK-02: PEXELS DOWNLOAD
- **Depends on:** TASK-01 approved
- **Gate:** AUTO
- **Inputs:** VIDEO-STATE.md (approved Pexels IDs)
- **Outputs:** Files to `~/remotion-videos/public/broll/v3/ch{N}-{slug}.mp4` or `.jpg`
- **Instructions:**
  For each approved Pexels ID in VIDEO-STATE.md storyboard table:
  1. Use `downloadVideo` or `downloadPhoto` MCP tool
  2. Save to `~/remotion-videos/public/broll/v3/` with naming: `ch1-alone-city.mp4`, etc.
  3. Update VIDEO-STATE.md storyboard table with filename + status "downloaded"
  4. Verify each file exists after download

---

## TASK-03: MANIM CH6 — FINANCIAL NUMBERS
- **Depends on:** none
- **Gate:** RAFAEL_APPROVE
- **Inputs:** `~/remotion-videos/manim/investor_charts.py` (FinancialNumbers class ~line 402)
- **Outputs:** `~/remotion-videos/public/manim/v3-financial-numbers.mp4`
- **Instructions:**
  Read the FinancialNumbers scene in investor_charts.py. Modify for v3:
  1. Background color → charcoal #4A4543 (not #2A2826)
  2. Number color → teal #4A7C7E
  3. Remove "The Numbers" title text — narration carries it
  4. Each card holds 2.5 sec (not 2 sec)
  5. Four figures: Month 14 → 48% → €720K → €400K
  6. Render via `render_manim_to_remotion` MCP, output_name: `v3-financial-numbers`, quality: `h`
  7. Update VIDEO-STATE.md manim table

---

## TASK-04: TTS NARRATION — 8 CHAPTERS
- **Depends on:** none
- **Gate:** RAFAEL_APPROVE
- **Inputs:** `script-v4.md` (narration in `>` blocks per chapter + voice direction lines 166-183)
- **Outputs:** 8 files at `~/remotion-videos/public/audio/v3/ch{1-8}-sally.mp3`
- **Instructions:**
  Generate one MP3 per chapter using ElevenLabs. Voice: Sally Ford.
  Settings: stability 0.78, similarity 0.82, style 0.12, speed 0.92 (Ch6: 0.85).
  Text = narration lines (inside `>` blocks) from script-v4.md per chapter.
  "..." in script = 0.5 sec pause. Ch0 and End Card have no narration.
  After generating, run `ffprobe` on each to get exact duration.
  Update VIDEO-STATE.md audio durations table + narration files table.
  Create output dir first: `mkdir -p ~/remotion-videos/public/audio/v3/`

---

## TASK-05: TIMING CALIBRATION
- **Depends on:** TASK-04 approved
- **Gate:** AUTO
- **Inputs:** Audio durations from VIDEO-STATE.md, `~/remotion-videos/src/LinzHostelV2/timing.ts` (pattern)
- **Outputs:** `~/remotion-videos/src/LinzHostelV3/timing.ts`
- **Instructions:**
  Build timing.ts following V2 pattern. Chapter boundaries:
  Ch0 = 3s fixed. Each subsequent chapter = max(audio_duration + 0.5s buffer, script target).
  End = 5s fixed. Export: FPS=30, CH object, TOTAL_DURATION, TOTAL_DURATION_FRAMES.
  Create dir first: `mkdir -p ~/remotion-videos/src/LinzHostelV3/`

---

## TASK-06: SCAFFOLD LinzHostelV3
- **Depends on:** TASK-05
- **Gate:** AUTO
- **Inputs:** timing.ts from TASK-05, V2 at `~/remotion-videos/src/LinzHostelV2/LinzHostelV2.tsx`, `~/remotion-videos/src/Root.tsx`
- **Outputs:** `LinzHostelV3.tsx` (skeleton), `index.ts`, Root.tsx updated
- **Instructions:**
  Create LinzHostelV3.tsx following V2 pattern: import Sequence/AbsoluteFill from remotion,
  import CH from timing, import components from `../components` (ColorGrade, ManimClip, Vignette,
  KineticHeadline). Define brand tokens inline. Load Playfair Display + Inter via @remotion/google-fonts.
  Build each chapter as placeholder component. Wire into Sequences using CH timing.
  Register "LinzHostel-V3" in Root.tsx (1920x1080, 30fps). Export barrel from index.ts.

---

## TASK-07: BUILD CH0 + END CARD
- **Depends on:** TASK-06
- **Gate:** AUTO
- **Inputs:** `script-v4.md` Ch0 + End Card sections
- **Outputs:** Ch0Logo + EndCard components in LinzHostelV3.tsx
- **Instructions:**
  Ch0: Charcoal bg, "Linz Hostel" Playfair Display cream, tagline "Nobody stays a stranger."
  coral italic, warm fade-in 18 frames.
  End: Charcoal bg, coral "info@linzhostel.com | linzhostel.com",
  cream "Starting in Linz." 40% opacity. Music cue 60%.

---

## TASK-08: BUILD CH1-CH5
- **Depends on:** TASK-02, TASK-06
- **Gate:** RAFAEL_APPROVE
- **Inputs:** VIDEO-STATE.md (downloaded files), `script-v4.md` (visual direction per ch), timing.ts
- **Outputs:** Ch1Problem through Ch5Ecosystem in LinzHostelV3.tsx
- **Instructions:**
  Ch1: Cold grade (coolNordic). 4 clips 3s each, cross-dissolve. Stats text overlay.
  Ch2: Warm grade (warmGolden). Cross-dissolve from Ch1. Communal lounge footage.
  Ch3: Copper tones. Overhead food + maker hands. Heavy vignette.
  Ch4: Location photos from `public/images/location/`. Ken Burns zoom. Warm LUT.
  Ch5: Coworking footage. Partner names as staggering text labels (JKU, Grand Garage, Factory 300).
  All shots MUST have camera movement (Ken Burns or tracking). Zero static frames.

---

## TASK-09: BUILD CH6 (MANIM)
- **Depends on:** TASK-03, TASK-06
- **Gate:** AUTO
- **Inputs:** `public/manim/v3-financial-numbers.mp4`, timing.ts
- **Outputs:** Ch6Numbers in LinzHostelV3.tsx
- **Instructions:**
  Charcoal bg. ManimClip with src="manim/v3-financial-numbers.mp4", fadeIn=8.
  No text overlay — Manim handles all text internally.

---

## TASK-10: BUILD CH7-CH8
- **Depends on:** TASK-02, TASK-06
- **Gate:** RAFAEL_APPROVE
- **Inputs:** VIDEO-STATE.md (downloaded files), `script-v4.md` Ch7+Ch8
- **Outputs:** Ch7Team + Ch8Ask in LinzHostelV3.tsx
- **Instructions:**
  Ch7: Plant time-lapse / nature footage. Warm grade. Ken Burns. No names/faces.
  Ch8: Daniel placeholder (charcoal bg + text for now). Ascending amounts "10K...50...100"
  coral accent. Pexels communal room as payoff warmth shot. Tagline callback.

---

## TASK-11: AUDIO INTEGRATION
- **Depends on:** TASK-04, TASK-06
- **Gate:** AUTO
- **Inputs:** `public/audio/v3/ch{1-8}-sally.mp3`, timing.ts, `script-v4.md` music levels
- **Outputs:** Audio layer in LinzHostelV3.tsx
- **Instructions:**
  Remotion `<Audio>` per chapter narration at Sequence timing.
  Music placeholder (or real if TASK-12 done): Ch0 30%, Ch1 30%, Ch2-5 25%, Ch6 15%,
  Ch7-8 OFF, End 60%. Use `interpolate` for volume fades at chapter boundaries.

---

## TASK-12: MUSIC GENERATION (MANUAL)
- **Depends on:** none
- **Gate:** RAFAEL_APPROVE
- **Inputs:** `script-v4.md` music section (lines 189-201)
- **Outputs:** `~/remotion-videos/public/audio/v3/music-track.mp3`
- **Instructions:**
  MANUAL — Rafael generates via Gemini Lyria 3. Prompt: "80 BPM warm indie electronic.
  Positive not hyperactive. Piano over gentle synth pad. Light percussion. Instrumental.
  European boutique hotel vibes. 120 seconds."

---

## TASK-13: FINAL ASSEMBLY + RENDER
- **Depends on:** ALL tasks
- **Gate:** RAFAEL_APPROVE
- **Inputs:** Complete LinzHostelV3, all assets
- **Outputs:** `~/remotion-videos/out/linz-hostel-v3.mp4`
- **Instructions:**
  Preview in Remotion Studio. Check: transitions smooth, audio syncs, no black frames,
  color grades consistent. Render: `npx remotion render LinzHostel-V3 out/linz-hostel-v3.mp4`
  Verify: 1080p, 30fps, ~96s, stereo via ffprobe.
