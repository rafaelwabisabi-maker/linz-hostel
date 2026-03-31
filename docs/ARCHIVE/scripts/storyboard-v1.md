# KraftWerk — Video Storyboard v1
> Template: `agent-infra/TEMPLATES/content/video-storyboard.md`
> Script source: `video-assets/script-v1.md` (VO copied letter-for-letter)
> Settings: VIDEO_MODE=HYBRID | VISUAL_LOGIC=METAPHOR_HEAVY | ASPECT_RATIO=16:9 | ACCENT_COLOR=CORAL #E76E50
> Duration: ~30 sec investor cut | Format: 16:9 LinkedIn/YouTube

---

## SECTION 1: STORYBOARD TABLE

| Scene | Time | VO (exact) | Visual (sketch idea) | Shot |
|-------|------|-----------|----------------------|------|
| 1 — PROBLEM STAT | 0–2s | *(no VO)* | Black screen fades to white text: **"Austria. #49 of 53 for expat friendliness."** Slow pulse, then cuts to empty industrial corridor — one silhouette, far away, nobody nearby. Muted, cold palette. | SPLIT |
| 2 — LOCATION REVEAL | 3s | *(no VO)* | Wide exterior of TabakFabrik — massive, raw, industrial. Camera slowly pulls back to show the full scale. Warm late-afternoon light hits the brick. The building feels alive despite being empty. Pattern interrupt: WS after tight text. | WS |
| 3 — COALITION SIGNALS | 4–5s | *(no VO)* | ECU on mural — JKU logo fills frame for half a second. Cut to: lounge, amber light shifting imperceptibly. Nobody touched it. The building responds to its inhabitants. Coral accent glint on both cuts. | ECU → MCU |
| 4 — HUMAN PROOF | 6–8s | *(no VO)* | MS: Lunch counter — two people mid-conversation, laughing. CU: Sleep pod with Sonic Pillow, close on the subtle texture. WS: Founder's Table — six different faces, full seats, animated conversation. Warm light throughout. | MS → CU → WS |
| 5 — FESTIVAL PULSE | 9–11s | *(no VO)* | WS: Facade bathed in LED data-visualisation — abstract, electric, beautiful. MCU: Street performer mid-act in courtyard, mid-air. WS: 200,000 people on the street — energy, movement, scale. Pattern interrupt: energy spike after human warmth. | WS → MCU → WS |
| 6 — CITY BRIDGE | 12–13s | *(no VO)* | WS: Ferris wheel at night across the Danube — warm lights reflecting on water. MCU: Bar counter — local food, two strangers leaning in to talk. The contrast between the two shots = two Linzes meeting. | WS → MCU |
| 7 — BRAND REVEAL | 14–18s | *(no VO)* | SLOW. KraftWerk logo builds on charcoal background — copper letterforms drawing themselves in. Below it, tagline fades in: **"From Isolation to Connection."** 4 full seconds. Let it breathe. | SPLIT |
| 8 — COALITION VO | 19–24s | *"JKU is in. Ars Electronica is in. Volkshilfe is in. The coalition is forming."* | White text on charcoal — each institution name appears as it's spoken, in coral. Clean. No b-roll competing with the VO. The names carry the weight. | ECU (text) |
| 9 — CTA | 25–30s | *(no VO)* | Single question in large Playfair Display on dark charcoal: **"The question is: are you?"** Below it, smaller: `kraftwerk.linz` Coral underline animates in. Hold 5 seconds. Fade to black. | ECU |

**Scene count:** 9 ✓ (within 6–10 rule)
**Pattern interrupts:** Scene 2 (WS after tight text), Scene 5 (energy spike after warmth), Scene 7 (slow reveal after fast cuts) ✓
**Shot variety:** No type repeated >2 in a row ✓
**Punchlines on CU/ECU:** Scenes 3, 8, 9 ✓

---

## SECTION 2: IMAGE GENERATOR PROMPT

```
Generate a single storyboard sheet image for a 30-second investor video called "KraftWerk Hostel — From Isolation to Connection."

STYLE: Hand-drawn storyboard sheet. Scanned paper look. Simple sketchy linework, thick black outlines, loose pencil shading. Minimal detail — clarity over artistry. Clean panel grid.

ACCENT COLOR: Coral (#E76E50) — used consistently for one highlight per panel (logo, text highlight, light glow).

GRID: 3 columns × 3 rows = 9 panels. Each panel: top sketch (70%), bottom caption text (30%).

TEXT TO RENDER EXACTLY (caption per panel, in order):
1. "Austria. #49 of 53 for expat friendliness. / Empty corridor."
2. "TabakFabrik — wide exterior. Location reveal."
3. "JKU logo on mural (ECU). / Amber light shifts in lounge (MCU)."
4. "Lunch counter — two people laughing (MS). / Sleep pod close-up (CU). / Founder's Table — six faces (WS)."
5. "LED facade — data art (WS). / Street performer mid-air (MCU). / 200K people on street (WS)."
6. "Ferris wheel at night, Danube (WS). / Bar — two strangers talking (MCU)."
7. "KraftWerk logo builds on charcoal. Tagline: From Isolation to Connection."
8. "Text only on charcoal: JKU is in. Ars Electronica is in. Volkshilfe is in. The coalition is forming."
9. "Large text: The question is: are you? / kraftwerk.linz in coral."

REQUIREMENTS:
- Each panel must be clearly readable
- Caption text: printed, high-contrast, sans-serif
- Coral accent appears in: panel 3 (light glow), panel 7 (logo letterforms), panel 8 (institution names), panel 9 (URL underline)
- Sketch style: fast and loose, not polished illustration
- Page format: landscape A4 or 16:9 ratio sheet
```

---

## PRODUCTION NOTES

**Assets needed before production starts:**
- [ ] Daniel approves this storyboard (send as preview)
- [ ] 9 Ghibli-transformed source images (from shot manifest) — ChatGPT browser
- [ ] 5 priority Pika/Veo 3.1 animation clips (Scenes 1, 5a, 5b, 5c, 9)
- [ ] 13 Ken Burns clips (all other scenes — already coded in assemble.py)
- [ ] TTS narrator for Scenes 8 (ElevenLabs MCP — already installed)
- [ ] Gemini Lyria 3 music track (warm indie folk, 100 BPM, instrumental)

**Assembly:** Google Vids (Option A — recommended) or assemble.py (Option B)
**Captions:** Google Vids built-in OR mlx-whisper MCP (already installed)

**Estimated production time once approved:** ~50 min Rafael time
