# KraftWerk Google Vids Pipeline — Progress Report
> Date: 2026-02-27 | Author: Claude (Raf's session)

---

## GOAL
Build an automated pipeline: Google Sheets (storyboard data) → Apps Script → Google Slides → Google Vids → Final MP4. Deliver investor-grade partnership videos for ARS Electronica, JKU International, and Sparkasse OÖ.

---

## WHAT GOT DONE

### 1. Storyboard Content (COMPLETE)
- Wrote 3 full storyboards: ARS Electronica (11 scenes, 90s), JKU International (7 scenes, 60s), Sparkasse OÖ (7 scenes, 60s)
- Each scene has: visual prompt (cinematic camera language), voiceover (max 25 words), stock keywords
- All 3 are paste-ready for vids.new → Storyboard tab
- Saved to: `GOOGLE-VIDS-WORKFLOW.md` (master doc) + Google Sheets (3 tabs)

### 2. Apps Script v4.0 CINEMATIC (COMPLETE)
- 579-line Google Apps Script: `KraftWerk-Vids-AppsScript.js`
- Features: custom menu in Sheets, auto-reads storyboard tabs, builds cinematic slides
- Slide format: scene label (top-left), large white headline (32pt), stock keywords (bottom), speaker notes = voiceover
- Hardcoded 3 storyboards via `populateStoryboards()` function
- Two generators: `createPartnerSlides()` (from Sheet2 partner data) + `createStoryboardSlides()` (from active storyboard tab)

### 3. Google Sheet Setup (COMPLETE)
- Sheet: "Hostel key strategic partners" (existing)
- Added 3 storyboard tabs: ARS Electronica, JKU International, Sparkasse OO
- Each tab has columns: Scene #, Scene Title, Asset Type, Stock Keywords, Veo Prompt, On-Screen Hook, Voiceover Script
- Apps Script installed and menu working

### 4. KraftWerk Partners Presentation (COMPLETE)
- Generated from Sheet2 partner data via `createPartnerSlides()`
- 12 slides: 9 partners + 1 overview + title/end
- Working correctly — this is a different deck from the storyboard scenes

### 5. Master Prompt Template (COMPLETE)
- Reusable system prompt for generating new partnership storyboards
- Documented in GOOGLE-VIDS-WORKFLOW.md
- Can be used to create storyboards for AWS, Startrampe, City of Linz, Volkshilfe, etc.

### 6. Production Priority Order (COMPLETE)
- Mapped all partners by funding score and urgency
- Priority 1: ARS Electronica + JKU International
- Priority 2: Sparkasse OÖ (€220k, highest single deal)
- Next: AWS, Startrampe, City of Linz

---

## WHAT DIDN'T WORK (Dark Background Bug)

### The Problem
Slides generated with white backgrounds instead of dark cinematic (#1A1A2E).

### What Was Tried (in order)
1. `slide.getBackground().setSolidFill('#1A1A2E')` via SlidesApp → silently fails for dark colors (red works, dark doesn't)
2. BG Test v2 presentation — confirmed: red hex ✅, dark hex ❌, RGB integers misinterpreted
3. Full-slide rectangle via SlidesApp `insertShape()` + `setSolidFill('#1A1A2E')` → shape created but fill invisible
4. REST API `Slides.Presentations.batchUpdate()` with `updateShapeProperties.shapeBackgroundFill.solidFill` (RGB floats) → API returns success but fill doesn't render visually
5. Bright RED test via REST API `shapeBackgroundFill` → same: API succeeds, fill invisible
6. Change slide layout to BLANK via `updateSlideProperties` → "Invalid field mask: layout_object_id cannot be updated" (can't change layout after creation)
7. SlidesApp `slide.setLayout()` → method doesn't exist

### Root Cause
The "Simple Light" theme layout paints a white background layer that overrides both slide background properties AND shape fills. Google's API accepts the color changes silently but the theme layer renders on top. `shapeBackgroundFill` via REST API also doesn't render fills visually on shapes.

### Solution (Not Yet Implemented)
Create slides with `SlidesApp.PredefinedLayout.BLANK` from the start (layout can be set at creation, not changed after). Or: Rafael sets backgrounds manually (30 seconds per slide in the UI).

---

## WHAT'S NEXT

### Immediate (This Session)
1. Create 3 creative versions of ARS Electronica storyboard for comparison
2. Generate slides using BLANK layout (fix the creation code)
3. Raf picks best version → tests in vids.new
4. Document the repeatable workflow blueprint

### After Raf Tests in Vids
5. Refine based on what Vids actually produces
6. Generate JKU and Sparkasse versions
7. Export 30-sec cuts for social (scenes 1-4)

### Deliverable for Dani
- 3 partnership videos (60-90s each): ARS Electronica, JKU, Sparkasse
- 30-sec social cuts
- Pitch website deployed (separate task, pending Dani's copy review)

---

## KEY FILES

| File | What | Location |
|------|------|----------|
| Storyboard tables | Paste-ready for vids.new | `docs/GOOGLE-VIDS-WORKFLOW.md` |
| Apps Script | Automation code (v4.0) | `docs/KraftWerk-Vids-AppsScript.js` |
| Automation guide | Setup + troubleshooting | `docs/VIDS-AUTOMATION-GUIDE.md` |
| Storyboard spreadsheet | Local backup | `docs/KraftWerk Google Vids Storyboards.xlsx` |
| Google Sheet | Live data source | [Link](https://docs.google.com/spreadsheets/d/1NbZnf8bKS8GKii4W_OYbb8KDBeG2VQJxRIxwpbdj-dg/edit) |
| Apps Script editor | Live code | [Link](https://script.google.com/u/0/home/projects/1z4GO8rxuNMwtRGZzYC_stmNvtWYXDA1QvefBrDUsn9C7aJiHal7ZLIZk/edit) |

---

## LESSONS LEARNED

1. **Google Slides API has undocumented theme override behavior.** Dark solid fills silently fail when a non-BLANK layout is active. Always use `PredefinedLayout.BLANK` when creating slides programmatically.
2. **REST API `shapeBackgroundFill` doesn't visually render.** The API accepts the request and returns success, but the fill never appears. Don't trust API success responses — always visually verify.
3. **Apps Script editor dropdown shows max ~9 functions.** Functions beyond that are invisible in the dropdown. Keep function count low or use short names.
4. **Google Vids Storyboard path > Slide-to-Video path for narrative content.** Pasting a 3-column table directly into vids.new produces better results than converting slides.
5. **The storyboard content IS the product.** The automation pipeline is nice-to-have, but the quality of visual prompts and voiceover scripts is what determines Vids output quality.

---

*Total time invested: ~4 hours across 3 sessions. ~60% on dark background debugging (low ROI), ~40% on content + pipeline setup (high ROI).*
