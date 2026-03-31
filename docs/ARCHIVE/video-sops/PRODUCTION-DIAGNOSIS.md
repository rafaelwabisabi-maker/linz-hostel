# KraftWerk Video Production — Critical Diagnosis
> Created: 2026-02-27 | For: Rafael × VEO3 + Nano Banana Pro + REAP production sprint
> Purpose: What NOT to do, and the correct framework going forward

---

## THE 10 STRUCTURAL PROBLEMS

### 1. Storyboards written for stock footage, not AI generation
All ARS-ELECTRONICA-VIDS-READY prompts are stock footage search terms ("Aerial drone shot, European historic industrial building..."). These do not work in VEO3. VEO3 needs: subject physics, precise camera arcs, lighting temperature, what moves, at what speed.

### 2. The central visual doesn't exist
The "Global Linz" mural — referenced in all 3 videos, all 8 carousel slides, the LinkedIn article — is the entire visual heart of the project. The building isn't open yet. The mural doesn't exist. The current fallback ("use the investor-map HTML page") is not a cinematic asset. This must be designed and generated FIRST before any video can be properly assembled.

### 3. Three videos, three visual languages, zero visual bible
- Investor promo: Ghibli (Ch 1-3) + real photos (Ch 4-8)
- Partnership videos: cinematic documentary
- Ars Electronica: stock footage aesthetic
These read as three different brands. No unifying style rules. Fix this before generating anything.

### 4. 8-second clips with no edit plan
VEO3 generates 8-second clips. Script chapters are 10-15 seconds. Storyboard scenes are 2-8 seconds. The math doesn't add up. Need explicit: "chapter 4 = two VEO3 clips, cut at 5 sec + 7 sec" etc.

### 5. No audio design in any storyboard
Voiceover text exists. Music, sound design, ElevenLabs voice direction, timing marks — all missing. Audio is 50% of emotional impact and has been planned as an afterthought.

### 6. Character consistency is zero
Daniel and Anna appear across multiple videos. No character reference sheet. AI will generate different-looking people every time. Critical credibility problem for investor pitch.

### 7. No VEO3 credit budget
Estimate: 10-20 credits per 8-second 4K generation. With 3x iteration average per clip, the investor promo alone could cost 300-450 credits. No allocation, no priority order for credit spend. Need this before starting.

### 8. Ghibli style shown to Sparkasse (a bank) is actively harmful
Sparkasse = €220K, largest single funding item. Financial/institutional audiences need gravitas, not Ghibli watercolor. Hard rule: Ghibli stays in Dream register only, never in financial or institutional-specific videos.

### 9. Ken Burns for real location photos is wrong
15 of 20 clips planned as zoom/pan. With 1,000 VEO3 credits, the TabakFabrik interior shots should become moving, atmospheric scenes — people walking, light shifting, real motion. Ken Burns is for photos you can't animate any other way. Save it for the Ghibli scenes, which are already stylized.

### 10. No REAP workflow document
"Assemble in REAP" is a one-line assumption in every plan. No project template, no transition plan, no audio mixing guide. Without this, assembly becomes improvised every time.

---

## THE THREE VISUAL REGISTERS (Use These — Not "Ghibli everywhere")

### Register 1 — DREAM
**When:** Chapter 1-3 of investor video (Problem, Vision, Secret Sauce)
**Style:** Painterly illustration. Warm watercolor. Hand-made, intimate, sketchy. NOT specifically Ghibli (copyright risk + visual cliché). European illustration feeling — handcrafted, human.
**Message this sends:** "We're building something new and we have a vision for it."

### Register 2 — PROOF
**When:** Chapter 4-8 of investor video (Location, Ecosystem, Numbers, Team, Ask) + ALL partnership-specific videos
**Style:** Cinematic documentary. Real space. Warm amber color grade. Industrial architecture. People in motion. No illustration.
**Message this sends:** "This is real. We're serious. The location exists. The people exist."

### Register 3 — SYSTEMS
**When:** Mural/network reveals. Ecosystem diagrams. Financial data moments.
**Style:** Clean motion graphics. Nodes connecting. Numbers animating. Data overlays on architectural shots.
**Message this sends:** "Zoom out — see the whole machine."

**The script's own logic is Dream → Proof → Trust. The visuals must mirror this. Don't blur it.**

---

## CORRECT STORYBOARD FORMAT FOR AI VIDEO (VEO3 + REAP)

The current storyboard format (Scene | Visual description | Voiceover) is a pitch deck outline, not a production document.

Every scene needs:

| Column | Purpose |
|--------|---------|
| Scene # | Order |
| Register | Dream / Proof / Systems |
| Duration | Exact seconds in final cut |
| Image Prompt | For Nano Banana Pro — static composition, style, lighting, colors |
| Motion Prompt | For VEO3 — what moves, camera arc, speed, mood |
| Bridge Frame | What the clip ends on (so next clip picks up cleanly) |
| Audio Beat | Music/SFX/VO happening at this moment |
| VEO3 Credits Est. | Budget allocation for this clip |
| Status | ⬜ / 🔄 / ✅ |

---

## PRODUCTION ORDER (Correct Sequence)

**Before any generation starts:**
1. Design the "Global Linz" mural as a static design (digital — nodes, logos, connections). This is the foundation asset.
2. Create character reference sheet for Daniel and Anna (consistent look across all AI generations).
3. Write the full VEO3 credit budget allocation.

**Then generate in this order:**
1. Register 1 (Dream) stills → Nano Banana Pro
2. Register 1 motion → VEO3 (image-to-video on Dream stills)
3. Register 2 (Proof) motion → VEO3 (real location photos → cinematic scenes)
4. Register 3 (Systems) → VEO3 or motion graphics (mural node reveal)
5. Narrator → ElevenLabs
6. Music → Gemini Lyria 3
7. Assembly → REAP

---

## WHAT NOT TO GENERATE (Save Credits)

- Linz city skyline / Danube views → use free stock (Pexels, Wikimedia Commons)
- TabakFabrik exterior aerial → Linz Tourismus has press images free for commercial use
- Festival crowd energy → Ars Electronica has press materials
- Generic "busy hostel lobby" → stock, not worth AI generation

Use VEO3 for: specific scenes that don't exist in stock, scenes requiring specific brand aesthetic, the mural reveal animation, anything where the visual IS the message.

---

## GHIBLI — SPECIFIC RULES

- Use the style but don't call it "Ghibli" in prompts (copyright + brand risk). Use: "hand-painted watercolor illustration, warm European animation style, soft linework, intimate and human"
- Apply ONLY in Register 1 (Dream) scenes
- Never in Sparkasse, JKU, or City of Linz videos
- Never for real people (Daniel, Anna) — consistency impossible
- Test one scene before committing all 10 Register 1 scenes

---

*This document should be read before any VEO3 or Nano Banana Pro generation starts.*
