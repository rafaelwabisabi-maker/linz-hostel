# LINZ HOSTEL — Project State & Active TODOs
> **Last updated:** 2026-03-10
> **Read this first** at the start of any session on this project.
> Path: `linz-hostel/.planning/STATE.md`

---

## ⚠️ LOCATION NOTE (not a blocker)

Multiple locations under consideration. **Video production is UNBLOCKED.**
- Produce vibe-first videos: community, loneliness, Teachcation concept, urban Linz atmosphere
- Do NOT hardcode specific building name/address in scripts until Daniel confirms
- Location shots added as a patch once confirmed
- See `CLAUDE.md` → "🔴 LOCATION CHANGE" for full impact map on other assets

---

## PROJECT STATUS SNAPSHOT

| Layer | Status | Blocker? |
|-------|--------|----------|
| Business plan v5 | ✅ Done | — |
| Contacts + partnerships registry | ✅ Done | — |
| Branding / DESIGN.md | ✅ Done | — |
| GOLD-FILE (copy bible) | ✅ Done | — |
| Video script v1 | 🟠 In progress | Vibe-first (no specific location) |
| Storyboard v2 | 🟠 In progress | Vibe-first (no specific location) |
| Video production (all bricks) | 🟠 Unblocked | Produce vibe videos now; location shots added later |
| Pitch app (Next.js) | ✅ Built | Needs deploy + Daniel approval |
| AI chat embed (website) | 🔄 Todo | — |
| Roadmap + Mindmap embed | 🔄 Todo | — |
| Social media activation | 🔄 Todo | — |
| Podcast setup | 🔄 Todo | — |
| CRM handoff to Daniel | 🔄 Follow-up | — |
| GmbH / WKO licensing | ⏳ Ongoing | External (WKO) |
| Funding (€400k) | ⏳ Ongoing | Sparkasse + AWS |

---

## 📋 ACTIVE TODOS — Prioritised

### 🔴 IMMEDIATE (blockers)

#### TODO-01 — Confirm New Location with Daniel
- **What:** Ask Daniel what the new confirmed location is (Tabakfabrik fell through)
- **Why:** Blocks script, storyboard, video production, business plan update, imagery
- **Output:** Location name + address → unblock TODO-02 through TODO-05
- **Owner:** Rafael (next call with Daniel)

---

### 🟠 HIGH — Once location confirmed

#### TODO-02 — Rewrite Script + Storyboard for New Location
- **What:** Update `video-assets/script-v1.md` Ch4 + Ch5 narration + `storyboard-v2.md` S6, S8, S10
- **Scope:** Ch4 "Location" section full rewrite | Ch5 ecosystem refs if Tabakfabrik-specific | S6 visual concept (new building) | S8 narration (remove "Tabakfabrik itself") | S10 backdrop note
- **Also:** Update GOLD-FILE Section 4 (The Location) + BUSINESS-PLAN-v5 Section 2.2
- **Effort:** ~45 min with Claude

#### TODO-03 — Deliver Video Explanation Prototypes for Daniel
- **What:** Generate the first video prototype(s) to show Daniel what the final video will look/sound like
- **Format:** Short prototype (30–45 sec rough cut) using Google Vids or Veo3 approach
- **Pipeline:** Option A (Google Vids, ~1h) or Option B (Hybrid Veo3 + ElevenLabs, ~3h)
- **Depends on:** TODO-01 (location) + TODO-02 (script update)
- **Effort:** ~1–3h depending on pipeline choice
- **Reference:** `video-assets/PRODUCTION-STATUS.md` for full brick list

---

### 🟡 MEDIUM — Content + Public Presence

#### TODO-04 — Social Media Activation (Public Building of Linz Hostel)
- **What:** Start publicly building the brand — show the journey, philosophy, community vision
- **Channels:** LinkedIn (primary, already set up) + consider Instagram / TikTok
- **Content types:**
  - Partnership announcements (9 active partners ready to name)
  - Progress updates ("We're building this in public")
  - Community philosophy posts (loneliness stats, Teachcation concept)
  - Behind-the-scenes (location search, team calls, funding journey)
- **Content rules:** `docs/BRAND-VOICE.md` + `video-assets/GOLD-FILE.md` — ALL copy from there
- **Voice:** FOMO close, coalition signal, 2nd person journeys, no warm-and-welcoming
- **Seasonal angle (March 2026):** Investor outreach, funding progress, location search
- **Ready to use:** v3-FINAL social posts exist: `docs/SOCIAL-CONTENT-v3-FINAL.md` (7 posts)
- **Effort:** Schedule 3–4 posts/week, Tue–Thu, 7–8am / 10am / 12pm

#### TODO-05 — Podcast: Record Daniel's Meetings
- **What:** Daniel meets politicians, city leaders, investors, community builders regularly — record these as podcast content
- **Concept:** Dani = host + guest-collector. Radio voice. Good speaker. Natural ADHD asset.
- **Format:** Short (15–30 min) authentic conversation recordings → edited into episodes
- **Positioning:** "Building Linz Hostel in public" — the founders' journey, meeting the city
- **Episodes angles:** City leaders on urban loneliness | Partners on community | Investors on social impact | International hostel founders (POC models) on what worked
- **Setup needed:**
  - [ ] Choose recording tool (Riverside.fm / Zencastr / local iPhone + Descript)
  - [ ] Episode template / show format (name, structure, outro)
  - [ ] Distribution: Spotify + Apple Podcasts via Anchor (free)
  - [ ] First 3 episodes: record Daniel's next 3 key meetings
- **Note:** Meetings he's already having — zero extra effort to record them

#### TODO-06 — Fix AI Chat + Embed on Website
- **What:** The Linz Hostel AI chat command center (built in pitch app) needs to be:
  1. Updated from "KraftWerk" branding to "Linz Hostel"
  2. Properly embedded on the public website (linzhostel.com)
  3. Tested for public use (not just investor demo)
- **Files:** `src/app/page.tsx` (8-chapter interactive pitch + AI chat)
- **Also:** Roadmap visualization + Mindmap (investor map HTML files) → embed or link from website
  - `docs/kraftwerk-investor-map.html` → rename + update to Linz Hostel branding
  - `docs/linz-hostel-game-design.md` → gamification concept (phase 2?)
- **Effort:** ~2–3h (branding update + Vercel deploy + embed)
- **Depends on:** Daniel's copy/image review approval (still pending)

---

### 🟢 ONGOING — Follow-up + Memory

#### TODO-07 — CRM Follow-Up with Daniel
- **What:** Check if Daniel is actively using the CRM that was sent to him
- **Background:** CRM exists at `docs/KraftWerk Command Center - CRM & Legal.xlsx` (also Google Sheets version)
- **Action:**
  - [ ] Ask Daniel in next touchpoint: "Are you using the CRM? What's working / what's confusing?"
  - [ ] If not using it → simplify: build him a 1-sheet view (just Name, Status, Next Action, Notes)
  - [ ] Help him prompt Claude for CRM use (he now has Claude installed)
- **Claude workflow for Daniel:**
  - Daniel's use case = meeting follow-ups, contact tracking, investor status
  - Suggested prompt template to give him: "After each meeting, paste the call notes here. I'll update the CRM and draft the follow-up email."
  - Suggest he sets a daily reminder (9am) to check CRM with Claude
- **Memory to store:** Once Daniel's workflow confirmed → add to `napkin.md` under "Daniel's Workflow"

---

### ⏳ PENDING DECISIONS

| Decision | Options | Owner | Deadline |
|----------|---------|-------|---------|
| New location | Confirm with Daniel | Daniel + Rafael | ASAP |
| Video pipeline | Option A (Google Vids) vs Option B (Hybrid) | Rafael | After location |
| Software: Odoo vs build own | Odoo if low users / build if high | Rafael (analysis) | TBD |
| Partnership agreement | Draft exists, needs to be sent | Rafael → Daniel | ASAP |
| Pitch app deploy | Waiting Daniel copy/image review | Daniel | TBD |
| GmbH founding | WKO consultation ongoing | Daniel | TBD |
| Podcast format | Name, structure, platform | Rafael + Daniel | March 2026 |
| LinkedIn posting: Daniel personal vs brand page | TBD | Daniel | TBD |

---

## DOCUMENT MAP (quick access)

| Need | File |
|------|------|
| Project brief | `CLAUDE.md` |
| Canonical bedrock (4,500w, 8 sections) | `docs/01_strategy/FOUNDATIONAL-PROJECT-DEFINITION.md` |
| All stats + copy hooks | `GOLD-FILE.md` ← single source |
| Business plan (bank) | `docs/01_strategy/BUSINESS-PLAN-v5.md` |
| Contacts + 34 partners | `docs/01_strategy/CONTACTS-AND-PARTNERSHIPS.md` |
| Brand voice rules | `docs/02_content/BRAND-VOICE.md` |
| Content library v2 (40+ pieces scored) | `docs/02_content/CONTENT-LIBRARY-V2-COMPETITION.md` |
| Content library v1 (superseded) | `docs/ARCHIVE/content-library/CONTENT-LIBRARY-FROM-FOUNDATIONAL-PAPER.md` |
| Design tokens + assets map | `DESIGN.md` |
| Video script | `docs/03_video/script-v2.md` |
| Storyboard | `docs/03_video/storyboard-v2.md` |
| Shot manifest | `docs/03_video/shot-manifest.md` |
| Production tracker | `docs/03_video/PRODUCTION-STATUS.md` |
| Social posts (ready) | `docs/02_content/SOCIAL-CONTENT-v3-FINAL.md` |
| Session corrections | `.claude/napkin.md` |
| This file | `.planning/STATE.md` |

---

*STATE.md v1.0 — 2026-03-10 | Next update: after location confirmed with Daniel*
