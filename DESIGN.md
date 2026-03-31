# LINZ HOSTEL — Design Guidelines
> ⚠️ Project name: "Linz Hostel: The Social Impact Hub" (folder: linz-hostel/ — internal only)
> Source of truth for visual decisions. Read before any UI, video, or design work.

## Brand Essence
Community hostel at TabakFabrik Linz. Industrial heritage meets modern hospitality. Investor-facing pitch app + public brand. Warm industrial aesthetic. "Art book feel" — NOT tech tool.

## Colors
| Token | Hex | Usage |
|---|---|---|
| `--kw-charcoal` | `#4A4543` | Primary text, headers, dark backgrounds |
| `--kw-dark` | `#3d3a38` | Darkest backgrounds |
| `--kw-coral` | `#E76E50` | CTA, highlight, energy — use sparingly |
| `--kw-copper` | `#C4997E` | Secondary accent, heritage feel |
| `--kw-peach` | `#D4B8A0` | Warm accent, cards |
| `--kw-cream` | `#C8BCB4` | Muted backgrounds, secondary text |
| `--kw-teal` | `#4A7C7E` | Trust, data, charts, positive metrics |
| `--kw-terracotta` | `#A0522D` | Earthy accent, industrial texture |

### Quick Reference (for Canva / video editors)
- **CTA / Energy:** Coral `#E76E50`
- **Trust / Data:** Teal `#4A7C7E`
- **Warm Accent:** Copper `#C4997E`
- **Dark BG:** Charcoal `#4A4543`
- **Light BG:** Cream `#C8BCB4`

## Typography
| Role | Font | Weight | Use for |
|---|---|---|---|
| **Headings** | **Playfair Display** | 700 Bold | All investor headlines, slide titles, section headers, video titles |
| **Body** | **Inter** | 400 / 500 | Body copy, captions, data labels, UI text, subtitles |
| CSS vars | `var(--font-heading)` / `var(--font-body)` | — | Tailwind config (Next.js app only) |

> Google Fonts: Playfair Display · Inter — both free, preload in video tools

## Stack (web app)
- Next.js + Tailwind CSS + shadcn/ui
- CSS-only animations (no Framer Motion needed)

## Visual Language
- **Two registers:** Ghibli-style watercolor + ink (Dream) ↔ Real photography (Proof)
- Industrial textures: TabakFabrik brick, concrete columns, factory windows, terracotta floors
- Warm tones over cold — even data charts use warm palette (teal + coral, not blue + red)
- Photography: ONLY real TabakFabrik spaces and community moments — no generic hostel stock

## Image Asset Locations
| Asset Type | Location | Notes |
|---|---|---|
| **Video production references** | `docs/moodboard archive/` | ✅ ORGANIZED — anchor_, tabak_, teach_ naming |
| **Real location photos** | `docs/Location OBJECT Images and Video/` | 4 JPGs + 1 walkthrough MP4 + 40 snapshots |
| **Ghibli-style renders** | `docs/MOODBOARD/Rafael_Garcia_Tabakfabrik*.jpg` | 2 Midjourney Ghibli renders of Tabakfabrik |
| **General inspiration** | `docs/MOODBOARD/` | 63 files — mood reference only, not for production |
| **Pitch app images** | `public/images/` | 6 location + 18 moodboard (web-optimised) |
| **Video bricks (to generate)** | `video-assets/images/` | EMPTY — processed bricks go here |

## Video Production Quick-Start
When activating video editor, pull assets in this order:
1. **Script:** `video-assets/script-v1.md`
2. **Shot map:** `video-assets/shot-manifest.md`
3. **Storyboard:** `video-assets/storyboard-v2.md`
4. **Reference images:** `docs/moodboard archive/` (anchor_*, tabak_*, teach_*)
5. **Location footage:** `docs/Location OBJECT Images and Video/VID_20260123_124637.mp4`
6. **Copy / stats:** `video-assets/GOLD-FILE.md` ← single source of truth for ALL text
7. **Production tracker:** `video-assets/PRODUCTION-STATUS.md`

## Investor Deck Specifics
- Clean, confident, no clutter
- Numbers prominent — revenue projections, occupancy rates
- Anchor Model visual: concentric circles (hostel → coworking → community → city)
- DSCR, ADR, occupancy % = key data labels (use teal)
- Break-even Month 14, €400k total ask — always prominent

## Anti-Patterns
- ❌ Generic hostel stock photos — TabakFabrik-specific imagery only
- ❌ Cold corporate blue — palette is deliberately warm/industrial
- ❌ Walls of text on slides — max 3 bullet points
- ❌ Playful/casual fonts — tone is serious but warm
- ❌ Anime cel-shading in illustrations — watercolor + ink only (Ghibli)
- ❌ Detailed faces or hands in generated illustrations
- ❌ "We're building something special" — always name the specific thing
