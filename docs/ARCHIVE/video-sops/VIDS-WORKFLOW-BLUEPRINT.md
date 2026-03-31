# KraftWerk Video Production — Workflow Blueprint
> Reusable process for creating partnership videos with Google Vids
> Created: 2026-02-27

---

## THE PIPELINE (5 Steps)

```
Step 1: BRIEF → What partner? What story? What audience?
Step 2: STORYBOARD → 3-column table (Scene | Visual | Voiceover)
Step 3: TEST IN VIDS → Paste table into vids.new → Storyboard
Step 4: REFINE → Swap clips, adjust voiceover, tune music
Step 5: EXPORT → Full 60-90s + 30s social cut
```

---

## STEP 1: BRIEF (5 min)

Answer these before writing anything:

| Question | Example (ARS Electronica) |
|----------|--------------------------|
| Who is the partner? | Ars Electronica Festival |
| What do WE give THEM? | 50-bed festival contingent, 3-min Grand Hall access, circadian lighting showcase |
| What do THEY give US? | €17,500/festival, cultural credibility, 100K visitor exposure |
| Who watches this video? | Festival organizers, event planning team |
| What should they FEEL? | "This isn't a hostel. This is festival infrastructure." |
| What should they DO after? | Take a meeting with Daniel |
| Duration? | 90s (11 scenes) for pitch, 30s (scenes 1-4) for social |

---

## STEP 2: STORYBOARD (30 min)

### Use the Master Prompt

Send this to Claude with the brief data filled in:

```
I am creating a partnership story video for KraftWerk Hostel in Linz, Austria
(located inside Tabakfabrik, a major creative hub). The video will be produced
in Google Vids using the Storyboard method.

PROJECT CONTEXT:
- KraftWerk is a community hostel + social innovation hub inside Tabakfabrik Linz
- Key theme: interconnected ecosystem (each partner = a node in the network)
- Visual style: Cinematic documentary, warm amber + industrial concrete tones
- Language: English voiceover
- No talking heads. Camera-ready visual descriptions only.

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
- Voiceover: maximum 25 words per scene
- Final scene: always a static text card with URL (kraftwerk-linz.com)
- Visual style: warm amber, industrial concrete, intimate human moments
- Output ONLY the table. No preamble.
```

### Three Creative Approaches (pick based on audience)

| Approach | When to use | Style |
|----------|-------------|-------|
| **EMOTIONAL HOOK** | General audiences, mixed stakeholders | Human stories first, numbers last (scene 9+) |
| **DATA PUNCH** | Investors, banks, politicians, grant bodies | Market data first, human proof second |
| **CINEMATIC STORYTELLER** | Creative orgs, festivals, cultural institutions | Pure visual cinema, poetic voiceover, no data on screen |

### Visual Prompt Quality Rules

These make or break the Vids output:

1. **Always specify camera movement**: "Slow aerial drone push", "Ground-level tracking shot", "Close-up", "Wide shot", "Time-lapse"
2. **Always specify lighting**: "golden hour", "warm amber", "soft reading light", "LED projections", "backlit silhouettes"
3. **Always include action**: Something MOVES in every scene. A person walks, a hand places something, light shifts, a door opens.
4. **Be specific about Tabakfabrik**: "industrial brick facade", "the Grand Hall entrance", "the lobby mural", "the courtyard"
5. **Avoid abstract descriptions**: "A sense of community" → BAD. "Three people at a table, festival badges visible, coffee cups, one drawing on a napkin" → GOOD.

### Voiceover Quality Rules

1. Max 25 words per scene (8 seconds of speech)
2. First 3 scenes: HOOK (make them care)
3. Middle scenes: PROOF (show it working)
4. Last 2-3 scenes: ASK (the deal, the URL)
5. Tone: "Persuader" — direct, confident, zero filler words
6. Never start with "Imagine" or "What if" — start with facts or actions

---

## STEP 3: TEST IN VIDS (10 min)

1. Go to **vids.new**
2. Click **"Storyboard"** (NOT "Help me create")
3. Copy the 3-column table from your storyboard
4. Paste into the prompt box
5. Click generate
6. Vids builds the timeline, pulls stock footage, generates voiceover

### What to check immediately:
- [ ] Does each scene have footage? (Some prompts may return nothing)
- [ ] Is the voiceover timing correct? (No scene should feel rushed)
- [ ] Does the footage match the mood? (Warm amber, not cold blue)
- [ ] Is the final card clean? (KraftWerk branding visible)

---

## STEP 4: REFINE (15 min)

### Swap weak clips
- Click any scene → open **Veo 3.1 sidebar**
- Type a revised visual prompt → generate new clip
- Compare and swap

### Fix voiceover
- Adjust narration speed in audio panel
- Balance voiceover vs. background music (voice should be 80% volume)
- Check transitions between scenes (no awkward gaps)

### Add music
- Vids provides stock music. Choose something:
  - Ambient electronic for ARS Electronica
  - Warm acoustic for JKU
  - Corporate confident for Sparkasse
- Music should be subtle — never compete with voiceover

---

## STEP 5: EXPORT (5 min)

### Full version
- Export as MP4, 1080p
- Filename: `KraftWerk-[Partner]-[Version]-[Date].mp4`
- Example: `KraftWerk-ARS-Electronica-v1-20260227.mp4`

### 30-second social cut
- Select scenes 1-4 only (first 32 seconds)
- Add a 2-second end card with URL
- Export as separate MP4
- Filename: `KraftWerk-[Partner]-30s-[Date].mp4`

### Where to store
- Google Drive: `KraftWerk/Videos/[Partner]/`
- Local backup: `KRAFTWERK/videos/`

---

## ALTERNATIVE PATH: SLIDE-TO-VIDEO

If you have Google Slides (from the Apps Script):

1. Open vids.new
2. Click "Import slides"
3. Select the Google Slides presentation
4. Vids converts slides → each slide = one scene
5. Speaker Notes become voiceover automatically
6. Swap stock footage using Veo sidebar

**When to use this path:**
- When you want to REVIEW slides before committing to video
- When Dani wants to see the deck first and approve before production
- When you need to present the storyboard in a meeting

**When NOT to use this path:**
- The Storyboard Pipeline produces better footage matching
- Slides add visual constraints (text layouts, backgrounds) that Vids has to work around

---

## REUSABLE TEMPLATE: NEW PARTNER VIDEO

When you need a video for a new partner (AWS, Volkshilfe, Startrampe, etc.):

1. Copy the brief template from Step 1
2. Fill in partner data
3. Send to Claude with the Master Prompt
4. Get the 3-column storyboard table
5. Paste into vids.new
6. Test → refine → export
7. Store in Google Drive + local backup

**Expected time per video: 1 hour** (30 min storyboard + 10 min Vids test + 15 min refine + 5 min export)

---

## KNOWN ISSUES & WORKAROUNDS

| Issue | Workaround |
|-------|-----------|
| Dark backgrounds don't render in Google Slides API | Set manually in Slides UI, or skip Slides and use Storyboard Pipeline directly |
| Vids stock footage doesn't match prompt | Use Veo 3.1 sidebar to generate custom AI clip |
| Voiceover sounds robotic | Keep sentences short and punchy. Avoid complex grammar. |
| Premium features (Veo, AI Avatars) cost credits | Keep scripts under 11 scenes. Use stock footage first, Veo as fallback. |
| Google Sheets storyboard tabs not found by script | Ensure tab name matches EXACTLY (case-sensitive) |

---

*This workflow produces investor-grade partnership videos in under 1 hour per partner.*
