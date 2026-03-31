# KraftWerk — Google Vids Automation Guide
> Owner: rafaelwabisabi@gmail.com (Google Workspace Standard)
> Created: 2026-02-27

---

## The Full Pipeline (3 steps, ~5 minutes per video)

```
Google Sheets → Apps Script → Google Slides → Google Vids → Final Video
     (data)       (1 click)    (reviewable)    (auto-fill)   (export)
```

---

## STEP 1: Install the Apps Script (one-time setup, 2 min)

1. Open the **Hostel key strategic partners** Google Sheet:
   `https://docs.google.com/spreadsheets/d/1T1zoxCRudCo90mlWYxUUpDBS6abwLOVuJT3p2ge4ZLw/edit`

2. Go to **Extensions → Apps Script**

3. Delete any existing code in the editor

4. Open the file `KraftWerk-Vids-AppsScript.js` from this folder
   → Select all → Copy → Paste into the Apps Script editor

5. Click **Save** (floppy disk icon) → name it "KraftWerk Vids"

6. **Close** the Apps Script tab → **Refresh** the Google Sheet

7. You should now see a **🎬 KraftWerk Vids** menu in the menu bar

---

## STEP 2A: Create Partner Story Video (from Sheet2)

This reads the existing partnership data + marketing stories and makes a video-ready slide deck.

1. Click **🎬 KraftWerk Vids → Create Partner Story Slides (from Sheet2)**
2. Authorize permissions when prompted (first time only)
3. A dialog shows the URL of the new Google Slides deck
4. Open the deck → review slides
5. In **Google Vids**: New Video → **Convert Slides** → select this deck
6. Vids auto-syncs the Marketing Stories as voiceover
7. Click **Auto-fill** to let Vids find stock footage for each slide
8. Polish: adjust clips, music levels, transitions

---

## STEP 2B: Create Storyboard Video (from storyboard sheet)

This is for the detailed scene-by-scene storyboards (ARS, JKU, Sparkasse, etc.).

### First: Import storyboard data into Google Sheets

1. Open the `KraftWerk Google Vids Storyboards.xlsx` file
2. In Google Sheets: **File → Import → Upload** → select the xlsx
3. Choose: **Insert new sheet(s)** — this adds ARS Electronica, JKU, Sparkasse as new tabs

### Then: Generate slides

4. **Switch to** the storyboard tab you want (e.g. "ARS Electronica")
5. Click **🎬 KraftWerk Vids → Create Storyboard Slides (from active sheet)**
6. Dialog shows the URL → open → review
7. In **Google Vids**: New Video → **Convert Slides** → select deck
8. For each scene, check the slide body:
   - 🎬 STOCK → use Vids "Auto-fill" or sidebar stock search with the keywords shown
   - 🤖 VEO → paste the Veo prompt from the slide body into Veo 3.1 generator
   - 🔀 HYBRID → stock base clip + Veo overlay
   - 📊 GRAPHICS → build as text card in Vids title editor

---

## STEP 3: Polish in Google Vids

1. **Auto-fill**: Click to let Vids match stock footage to your visual descriptions
2. **Veo 3.1**: For scenes marked 🤖 VEO, use the sidebar generator
3. **Voiceover levels**: Adjust voice vs. music in the audio panel
4. **Export**: Download as MP4 or share link

### Export variants:
- **Full video** (60–90 sec) → LinkedIn article, investor pitch, website
- **30-sec cut** (scenes 1–4 only) → Instagram Reels, Stories
- **15-sec cut** (scene 1 + final CTA) → LinkedIn post teaser

---

## Adding a New Partner Video (future workflow)

1. **Tell Claude**: "Create a storyboard for [partner name]" + paste their data from the Google Sheet
2. Claude outputs a 6-column table (using the Master Prompt from the xlsx)
3. **Paste** the table into a new tab in your Google Sheet
4. **Run** 🎬 KraftWerk Vids → Create Storyboard Slides
5. **Import** into Google Vids → Convert Slides → polish → export

Total time: ~10 min (Claude: 2 min, Script: 30 sec, Vids: 5–8 min polish)

---

## Files in this folder

| File | What it does |
|------|-------------|
| `KraftWerk-Vids-AppsScript.js` | The Apps Script code — paste into Google Sheets |
| `KraftWerk Google Vids Storyboards.xlsx` | 3 ready storyboards + master prompt + apps script reference |
| `GOOGLE-VIDS-WORKFLOW.md` | Original workflow doc (now superseded by this guide) |
| `CONTENT-BRIEF-PARTNERSHIPS-27.02.md` | LinkedIn article + Instagram carousel + video brief |

---

## Troubleshooting

**"Sheet not found" error on Partner Slides:**
→ The script looks for a sheet named "Sheet2". If Daniel renamed it, update line 107 in the Apps Script.

**"Not a storyboard sheet" error:**
→ Switch to a tab that has "Scene #" in column A. The script auto-detects the header row.

**Permissions error first time:**
→ Normal. Click "Review Permissions" → select your Google account → "Allow". One-time only.

**Vids not showing "Convert Slides":**
→ Make sure you're using Google Workspace (not personal Gmail). The feature requires Workspace.
