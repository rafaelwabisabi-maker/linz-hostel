# REVIEW & EDIT PROTOCOL — Linz Hostel V3
> The remote control. Rafael says a short command → Claude knows exactly which file + parameter to touch.
> Updated: 2026-03-12
> Production home: `~/remotion-videos/` | Docs home: `linz-hostel/docs/03_video/`

---

## HOW TO GIVE FEEDBACK

Just talk naturally. These phrases trigger specific edits.

### Clip edits
| You say | What changes | File |
|---------|-------------|------|
| "swap clip Ch3" | Replace Pexels clip in that chapter | `LinzHostelV3.tsx` — update Pexels ID/URL in that chapter's `<BRollShot>` |
| "Ch2 clip feels slow" | Adjust Ken Burns speed or try different clip | `LinzHostelV3.tsx` — `kenBurnsScale` prop |
| "that clip doesn't match" | Replace clip — Claude searches Pexels for better match | Same as swap |
| "too many cuts in Ch5" | Reduce from N clips to N-1, spread timing | `LinzHostelV3.tsx` Ch5 sequence |

### Narration edits
| You say | What changes | File |
|---------|-------------|------|
| "redo Ch4 narration" | Re-generate just that chapter via ElevenLabs | See **Voiceover Re-generation** below |
| "narration too fast" | Lower speed in ElevenLabs (see params below) | New .mp3 → replace `narration-v1-liam-APPROVED.mp3` |
| "pause between Ch2 and Ch3 feels rushed" | Adjust silence gap in `timing.ts` | `timing.ts` → increase `startSec` for Ch3 |

### Caption edits
| You say | What changes | File |
|---------|-------------|------|
| "caption Ch1 disappears too fast" | Extend `endSec` for that entry | `captions.ts` — find phrase, bump endSec +0.5–1.0 |
| "CC text too big / too small" | Change `fontSize` | `LinzHostelV3.tsx` — `CaptionOverlay` props |
| "captions should be white not cream" | Change color token | `CaptionOverlay` component — `color` prop |
| "wrong word in CC" | Fix text string | `captions.ts` — find entry, edit `text` field |
| "export captions as SRT" | Run SRT export script (see below) | `captions.ts` → `export-srt.ts` |

### Music / audio edits
| You say | What changes | File |
|---------|-------------|------|
| "music too loud during narration" | Lower `narrationMusicVolume` | `LinzHostelV3.tsx` — search for volume constant |
| "music too quiet at title" | Raise `titleMusicVolume` | Same |
| "swap music track" | Replace `music.mp3` | `~/remotion-videos/public/audio/v3/music.mp3` |
| "whoosh SFX too loud" | Lower volume (currently 0.15) | `LinzHostelV3.tsx` — `SFXWhoosh` volume prop |
| "remove whoosh" | Comment out SFX layer | `LinzHostelV3.tsx` |

### Timing / pacing edits
| You say | What changes | File |
|---------|-------------|------|
| "Ch4 feels too long" | Shorten by trimming clip or trimming narration | `timing.ts` + possibly re-narrate |
| "transitions feel abrupt" | Increase crossfade frames (currently 10) | `LinzHostelV3.tsx` — `crossFade` prop on BRollShot |
| "title card too short" | Increase `titleDurationSec` | `timing.ts` |

---

## VOICEOVER — Re-generation Protocol

**Voice:** Liam (ElevenLabs)
**Voice ID:** `TX3LPaxmHKxFdv7VOQHJ` (Turbo v2.5)
**Settings used for approved take:**
```
Speed:      1.07
Stability:  0.5
Similarity: 0.75
Style:      0.3
```

**To re-record a single chapter:**
1. Grab that chapter's lines from `script-v4.md`
2. ElevenLabs → Liam → paste text → match settings above
3. Download as MP3
4. Stitch into full narration: use ffmpeg to splice just that chapter's timestamps
   ```bash
   # Example: replace Ch4 (39.2s–56.5s) with new_ch4.mp3
   ffmpeg -i narration-v1-liam-APPROVED.mp3 -i new_ch4.mp3 \
     -filter_complex "[0:a]atrim=0:39.2[pre];[1:a]atrim=0:17.3[mid];[0:a]atrim=56.5[post];[pre][mid][post]concat=n=3:v=0:a=1" \
     narration-v2-liam.mp3
   ```
5. Run silence detection again to get new timestamps:
   ```bash
   ffmpeg -i narration-v2-liam.mp3 -af silencedetect=noise=-35dB:duration=0.3 -f null - 2>&1
   ```
6. Update `timing.ts` with new chapter timestamps
7. Update `captions.ts` if wording changed
8. Rename to `narration-v2-liam-APPROVED.mp3` only after review
9. Update `VIDEO-STATE.md` — Audio Timestamps table

---

## CLOSED CAPTIONS — Structure

**File:** `~/remotion-videos/src/LinzHostelV3/captions.ts`
**Format:** Array of `{ text: string, startSec: number, endSec: number }`
**Count:** 34 entries covering full 103.3s
**Display:** `CaptionOverlay` component — phrase-level, fade in/out over 6 frames, bottom-center

**To export as SRT** (for YouTube / LinkedIn):
```bash
# Run from ~/remotion-videos/
npx ts-node src/LinzHostelV3/export-srt.ts > out/linz-hostel-v3.srt
```
> ⚠️ `export-srt.ts` does not exist yet — needs to be created (see below).

**SRT export script to build** (`src/LinzHostelV3/export-srt.ts`):
```typescript
import { captions } from './captions';

const toSRTTime = (sec: number) => {
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  const ms = Math.round((sec % 1) * 1000).toString().padStart(3, '0');
  return `${h}:${m}:${s},${ms}`;
};

captions.forEach((c, i) => {
  console.log(`${i + 1}`);
  console.log(`${toSRTTime(c.startSec)} --> ${toSRTTime(c.endSec)}`);
  console.log(c.text);
  console.log('');
});
```

**To check/update a specific caption:** `VIDEO-STATE.md` → Gate Log → Session 2/3 fixes show the pattern.

---

## REVIEW SESSION WORKFLOW

When Rafael says "let me review" or "give me a preview":
1. `cd ~/remotion-videos && npx remotion preview` → opens browser at localhost:3000
2. Rafael watches → gives feedback using the shorthand above
3. Claude applies all edits → `VIDEO-STATE.md` updated with session log entry
4. Re-preview
5. When Rafael says "render it" / "ship it" → `npx remotion render LinzHostel-V3 out/linz-hostel-v3.mp4`

**Critic agent trigger:** When Rafael says "run critic" or "check everything" → Claude plays a blocking critic role:
- Watch full video mentally (using timing.ts + captions.ts + script-v4.md)
- List blocking issues (wrong clip, sync error, missing element)
- List important issues (awkward timing, weak clip choice)
- List nice-to-have (polish)
- Report: "X blocking / Y important / Z nice-to-have"
- Rafael decides which to fix before render

---

## WHAT TO ALWAYS UPDATE TOGETHER

| If you change... | Also update... |
|-----------------|----------------|
| Narration MP3 | `timing.ts` + `captions.ts` + `VIDEO-STATE.md` audio timestamps |
| `timing.ts` | `captions.ts` (phrase timing may drift) |
| Script text | `captions.ts` text entries + GOLD-FILE.md if a hook changes |
| Pexels clip | `VIDEO-STATE.md` approved clips table |
| Music file | `VIDEO-STATE.md` music row |
