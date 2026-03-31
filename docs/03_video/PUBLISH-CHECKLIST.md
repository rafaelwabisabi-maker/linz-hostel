# PUBLISH CHECKLIST — Linz Hostel V3 Investor Video
> From TASK-13 (awaiting preview) → published on YouTube + LinkedIn + pitch app
> Updated: 2026-03-13
> Current state: **TASK-13 — awaiting Rafael preview approval**

---

## PHASE 1 — PRE-RENDER FIXES (do before rendering)

### Step 1: Fix Ch4 clips (I1 + I2) — ~5 min
Open `~/remotion-videos/src/LinzHostelV3/LinzHostelV3.tsx`

Find the Ch4 PEXELS array and apply:
```diff
-  { id: '29913841', split: 0.35 },  // welding ❌ contradicts "flooded with light"
+  { id: '31834967', split: 0.35 },  // solo dance in sunlit industrial loft ✅

-  { id: '35556852', split: 0.30 },  // festive crowd ❌ duplicates Ch5
+  { id: '7348046',  split: 0.30 },  // plastic-covered furniture / pre-opening ✅
```

Update `VIDEO-STATE.md`:
- Mark I1 + I2 as FIXED in the Remaining section
- Log in Gate Log: `| 2026-03-13 | I1+I2 clip fix | DONE | Ch4 clips 2+3 replaced |`

### Step 2: Install export-srt.ts — ~1 min
```bash
cp ~/Desktop/PROJECTS/linz-hostel/docs/03_video/export-srt.ts.staged \
   ~/remotion-videos/src/LinzHostelV3/export-srt.ts
```

### Step 3: Preview final cut — ~5 min
```bash
cd ~/remotion-videos && npx remotion preview
```
Open http://localhost:3000 → watch full 111s → pay attention to:
- [ ] Ch4 new clips feel right (39–56s)
- [ ] Captions in sync throughout
- [ ] Music levels don't drown narration
- [ ] End card fades cleanly
- [ ] SFX whoosh at transitions (subtle)

If anything is wrong → use REVIEW-AND-EDIT-PROTOCOL.md shorthand → fix → re-preview.

When preview is approved → proceed to Phase 2.

---

## PHASE 2 — RENDER

### Step 4: Final render — ~10–20 min
```bash
cd ~/remotion-videos
npx remotion render LinzHostel-V3 out/linz-hostel-v3.mp4
```

Expected output:
- File: `~/remotion-videos/out/linz-hostel-v3.mp4`
- Duration: ~111s (103.3s narration + 3s title + 5s end card)
- Resolution: 1920×1080 (Full HD)

### Step 5: Quality check — ~3 min
```bash
# Verify file exists + duration + resolution
ffprobe -v quiet -print_format json -show_streams \
  ~/remotion-videos/out/linz-hostel-v3.mp4 | \
  python3 -c "import sys,json; s=json.load(sys.stdin)['streams'][0]; print(f\"{s['width']}x{s['height']} | {float(s['duration']):.1f}s | {s['codec_name']}\")"
```

Check:
- [ ] 1920×1080
- [ ] ~111s duration (±1s)
- [ ] h264 codec (Remotion default)
- [ ] File size reasonable (typically 50–200MB for 2min h264)

If render fails → check Node.js memory: `node --max-old-space-size=8192 ./node_modules/.bin/remotion render ...`

---

## PHASE 3 — CLOSED CAPTIONS

### Step 6: Export SRT — ~1 min
```bash
cd ~/remotion-videos
npx ts-node src/LinzHostelV3/export-srt.ts > out/linz-hostel-v3.srt
```

Verify output:
```bash
head -20 out/linz-hostel-v3.srt
```
Should show numbered blocks with timestamps + text. Count: `grep -c "^[0-9]" out/linz-hostel-v3.srt` → expect 34.

---

## PHASE 4 — THUMBNAIL

### Step 7: Create thumbnail — ~15 min
Target: 1280×720px, under 2MB

Options (pick one):
- **Option A (fast):** Screenshot best frame from preview → Canva/Figma → add title overlay in brand fonts
- **Option B (proper):** Export single frame from Remotion:
  ```bash
  npx remotion still LinzHostel-V3 --frame=150 out/thumbnail-candidate.png
  # frame 150 = ~5s into video (after title card), adjust to taste
  ```
  Then open in Figma → add: "Linz. Austria. 2027." in Playfair Display + coral/charcoal palette

Thumbnail text options (test 2–3):
- "90 beds. One mission. Zero loneliness."
- "The hostel that fights loneliness."
- "Linz, Austria — 2027"

Save as: `docs/04_media/thumbnail-v1.jpg` (compress to <2MB for YouTube)

---

## PHASE 5 — DISTRIBUTION

### Channel A: YouTube (Unlisted — investor link)

1. Go to YouTube Studio → Upload video → select `linz-hostel-v3.mp4`
2. Title: `Linz Hostel: The Social Impact Hub — Investor Overview 2026`
3. Description:
   ```
   Linz Hostel: The Social Impact Hub
   A 90-bed community-first hostel in Linz, Austria.

   Addressing Austria's loneliness crisis through hospitality innovation.
   Combining short-stay tourism with long-term social rental.

   Investment: €400,000 | Break-even: Month 14
   Contact: info@linzhostel.com
   ```
4. Visibility: **Unlisted** (not Public — investor-only link)
5. Add subtitles → Upload SRT → `linz-hostel-v3.srt`
6. Thumbnail → upload `thumbnail-v1.jpg`
7. Category: Travel & Events (or Nonprofits & Activism)
8. No age restriction, no monetization
9. Copy unlisted URL → add to `docs/01_strategy/CONTACTS-AND-PARTNERSHIPS.md` header

### Channel B: LinkedIn Post (Rafael's profile — 36K network)

Format: native video post (not YouTube link — LinkedIn suppresses external links in reach)

Caption template (adapt before posting):
```
Austria has a loneliness epidemic.

73% of young Austrians report feeling chronically isolated.
Yet hospitality barely talks about it.

We're building a 90-bed hostel in Linz that does.

The Linz Hostel: The Social Impact Hub — combining tourism,
social rental, and a maker program called Teachcation.

90 beds. Month 14 break-even. €400K to launch.

Looking for co-investors + partners in Linz. DM or 👇

#Linz #Austria #SocialImpact #Hospitality #Investing
```

Post specs:
- Upload raw .mp4 (not YouTube link)
- Add SRT as LinkedIn caption file (Settings → Subtitles during upload)
- No link in caption body — add in first comment if needed
- Optimal post time: Tuesday–Thursday, 8–10am CET

### Channel C: Pitch App Embed

File location decision (TBD with Daniel):
- Option A: Host on YouTube unlisted → embed `<iframe>` in pitch app Chapter 0
- Option B: Upload to Vimeo (better embed controls, no YouTube branding)
- Option C: Host in Vercel `/public/` folder (< 100MB limit — may be tight)

When decided → update `src/app/page.tsx` Chapter 0 hero section with embed.

### Channel D: Direct investor outreach (warm leads)

Attach to emails to:
- Johannes @ Sparkasse OÖ — main bank contact
- Iris Mayr @ Hp23 GmbH — mentor/location lead
- City of Linz contacts (Thomas Gegenhuber, Vbgm Merima Zukan)

Either: YouTube unlisted link, or Vimeo private link with password.

### Channel E: WhatsApp / Signal (Daniel + team)

Send to Daniel for review/approval before any public posting.

---

## PHASE 6 — POST-PUBLISH

### Step 8: Update project files
- [ ] `VIDEO-STATE.md` → TASK-13 status: `done` | add render date + final file path
- [ ] `GOLD-FILE.md` → Section 3 (Video): update status to PUBLISHED, add YouTube URL
- [ ] `linz-hostel/CLAUDE.md` → add video URL to Current Status table

### Step 9: Archive source files
```bash
# Keep render output in a safe place
cp ~/remotion-videos/out/linz-hostel-v3.mp4 \
   ~/Desktop/PROJECTS/linz-hostel/docs/03_video/final/linz-hostel-v3-FINAL.mp4
cp ~/remotion-videos/out/linz-hostel-v3.srt \
   ~/Desktop/PROJECTS/linz-hostel/docs/03_video/final/linz-hostel-v3-FINAL.srt
```

### Step 10: Record in Gate Log (VIDEO-STATE.md)
```
| 2026-03-XX | TASK-13 FINAL RENDER | DONE | linz-hostel-v3.mp4, 111s, 1920×1080 |
| 2026-03-XX | PUBLISH YouTube      | DONE | Unlisted URL: https://youtu.be/XXX |
| 2026-03-XX | PUBLISH LinkedIn     | DONE | Post ID: XXX |
```

---

## QUICK STATUS TRACKER

| Phase | Step | Status |
|-------|------|--------|
| Pre-render | Fix I1 (welding → sunlit loft) | ⏳ pending |
| Pre-render | Fix I2 (crowd → pre-opening) | ⏳ pending |
| Pre-render | Install export-srt.ts | ⏳ pending |
| Pre-render | Preview + approve | ⏳ awaiting Rafael |
| Render | `npx remotion render` | ⏳ pending |
| Render | ffprobe quality check | ⏳ pending |
| CC | Export SRT | ⏳ pending |
| Thumbnail | Create + compress | ⏳ pending |
| Distribute | YouTube Unlisted | ⏳ pending |
| Distribute | LinkedIn native video | ⏳ pending |
| Distribute | Pitch app embed | ⏳ pending (TBD with Daniel) |
| Post-publish | Update GOLD-FILE + CLAUDE.md | ⏳ pending |
| Post-publish | Archive final files | ⏳ pending |
