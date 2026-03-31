// Pre-scripted responses for demo mode (no API key needed)
// Each response includes the text + tool calls the AI would make

export interface DemoResponse {
  text: string;
  toolCalls: Array<{
    toolName: string;
    args: Record<string, unknown>;
  }>;
  suggestedQuestions: string[];
}

const normalizeQuery = (q: string): string =>
  q.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();

// Map of user inputs -> demo responses
const demoMap: Array<{ triggers: string[]; response: DemoResponse }> = [
  {
    triggers: ['give me the 2-minute tour', '2 minute tour', 'tour', 'guided tour', 'walk me through', 'start'],
    response: {
      text: "Let's start with why this matters.\n\nAustria ranks #49 out of 53 countries for expat friendliness. Linz has over 1 million overnight stays and 24,000+ international students — yet there's no \"Third Place\" connecting locals and visitors. People come to Linz, but they aren't connecting.\n\nThis is the gap we're filling.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 1 } }],
      suggestedQuestions: ['Tell me about the Anchor Model', 'How big is this market?', 'Show me the location'],
    },
  },
  {
    triggers: ['what problem', 'problem', 'why', 'loneliness', 'issue', 'gap', 'austria'],
    response: {
      text: "Austria has a branding problem — and a real social one.\n\nThe InterNations 2024 survey ranks Austria #49 out of 53 countries for local friendliness toward expats. Meanwhile, there's a global loneliness epidemic hitting Gen Z travelers and digital nomads hardest.\n\nLinz specifically has 1.02 million overnight stays and 24K+ international students, but lacks a vibrant \"Third Place\" that bridges locals and visitors. That's our opportunity.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 1 } }],
      suggestedQuestions: ['Tell me about the Anchor Model', 'Show me the location', 'Jump to the financials'],
    },
  },
  {
    triggers: ['anchor model', 'vision', 'concept', 'how does it work', 'connection', 'model'],
    response: {
      text: "We call it the Anchor Model — and it flips traditional hospitality on its head.\n\nThe old model: Reception desk + hallway + bed. Transactional.\n\nOur model: Live-in staff + living room + community catalysts + bed. Designed for connection.\n\nWe've replaced the traditional lobby with a \"Community Catalyst Space\" and run nightly community dinners from 6-8pm. The architecture itself forces organic interaction. 90 beds, psychologically designed to make strangers become friends.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 2 } }],
      suggestedQuestions: ['Show me the actual space', "What's your secret sauce?", 'Jump to the financials'],
    },
  },
  {
    triggers: ['location', 'tabakfabrik', 'space', 'where', 'building', 'site', 'show me the location'],
    response: {
      text: "We're setting up inside the Tabakfabrik — Linz's historic tobacco factory turned innovation hub.\n\nThe space is a commercial shell ready for conversion: industrial concrete columns, huge factory windows flooding natural light, terracotta floors with character. We visited in January 2026 and confirmed — it's perfect for our 90-bed layout.\n\nBeing inside the Tabakfabrik gives us instant foot traffic, brand association with Linz's innovation scene, and proximity to our key partners.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 3 } }],
      suggestedQuestions: ['What makes you different?', 'Who are your partners?', 'Show me the numbers'],
    },
  },
  {
    triggers: ['secret sauce', 'different', 'differentiation', 'sauce', 'special', 'unique', 'sleep here', 'teach'],
    response: {
      text: "Our tagline says it: \"Sleep Here. Create There.\"\n\nThree pillars:\n\n🛏️ Sleep at Anchor — Comfortable accommodation in a community-driven environment.\n\n🧘 Move & Grow — Yoga, breathing work, flow arts classes for our guests.\n\n💡 Teach & Learn — This is the game-changer. Our staff and residents become teachers — sharing workshops on everything from sustainable living to entrepreneurship.\n\nWe're capturing the booming \"Educational Tourism\" market that standard accommodations simply can't serve.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 4 } }],
      suggestedQuestions: ['Tell me about your partnerships', 'Who is your target guest?', "Let's see the financials"],
    },
  },
  {
    triggers: ['partner', 'ecosystem', 'jku', 'grand garage', 'factory300', 'network', 'moat'],
    response: {
      text: "This is our moat — we're not starting from scratch, we're plugging into an existing machine.\n\n🎓 JKU (24K international students) — consistent mid-term rental funnel and community building.\n\n🔧 Grand Garage — Makerspace integration for hands-on DIY, 3D printing, and upcycling workshops.\n\n🚀 factory300/tech2b — Startup bootcamp access and entrepreneurship courses.\n\n🏭 Tabakfabrik itself — foot traffic, brand halo, and venue benefits.\n\nThese partnerships make us the premium destination for \"Educational Tourism\" in Linz.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 5 } }],
      suggestedQuestions: ['Show me the revenue model', 'How do you de-risk this?', 'Who is the team?'],
    },
  },
  {
    triggers: ['number', 'financial', 'revenue', 'money', 'profit', 'how much', 'roi', 'return', 'economics', 'business model'],
    response: {
      text: "Here's where it gets exciting.\n\n90 beds at €28/night average. Break-even at just 48% occupancy — very conservative.\n\nYear 1: €920K revenue at 82% occupancy → €402K net profit.\nYear 2: €1.05M (academy expansion).\nYear 3: €1.18M (full maturity).\n\nWe hit break-even at Month 14. Three revenue streams: accommodation, food & beverage (including nightly community meals), and workshops & events.\n\nTotal capital needed: €400K. Full payback by Year 3. SROI ratio of 1:4.5.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 6 } }],
      suggestedQuestions: ['How do you mitigate risks?', 'Tell me about the team', "What's the ask?"],
    },
  },
  {
    triggers: ['team', 'founder', 'who', 'daniel', 'anna', 'background', 'experience'],
    response: {
      text: "Two founders, perfectly complementary.\n\nDaniel is the Why — he moved from South Africa to Linz and experienced the integration challenges firsthand. He brings sales, IT, and community building expertise. The social mission comes from lived experience.\n\nAnna is the How — Hotelkauffrau with 8 years running hostels in India. She built and operated 2 hostels from the ground up. She delivers proven operational mastery from Day 1.\n\nTogether: Daniel provides the vision, Anna provides the execution. And they have a whole network of eager supporters ready to contribute.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 7 } }],
      suggestedQuestions: ["What's the investment ask?", 'Tell me about social impact', "What's the roadmap?"],
    },
  },
  {
    triggers: ['ask', 'invest', 'funding', 'how can i', 'join', 'contribute', 'money needed', 'capital', 'raise'],
    response: {
      text: "We're raising €400K total:\n\n• €25K bridge funding → secures the Tabakfabrik location\n• €100K angel investment → this is our ask. Your €100K unlocks €300K+ in social grants and institutional funding\n• €275K bank + grants → KGG/UBG provides 80% risk cover, significantly lowering the approval hurdle\n\n75% of funding is already identified. We need gap funding partners for the final 25%.\n\nBeyond capital, we're looking for strategic advisors in hospitality, social enterprise, and community building.\n\nROI: Full payback by Year 3. SROI: €1 invested = €4.50 social value.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 8 } }],
      suggestedQuestions: ['Book a call with the founders', 'Download the full pitch deck', 'Tell me more about de-risking'],
    },
  },
  {
    triggers: ['risk', 'de-risk', 'what if', 'fail', 'worry', 'concern', 'seasonal', 'occupancy'],
    response: {
      text: "We've thought hard about de-risking:\n\n1️⃣ Location delays → Shell Strategy: commercial shell in Tabakfabrik, zoning secured with political support.\n\n2️⃣ Labor costs → Impact Model: live-in staff WG + Volkshilfe partnerships reduce payroll by ~€150K/year.\n\n3️⃣ Seasonal dips → Revenue Diversification: coworking memberships (\"Flow Zone\") + B2B event hosting fill off-peak gaps.\n\n4️⃣ Funding gap → KGG Lever: €220K bank loan with 80% risk cover significantly lowers approval hurdle.\n\nBreak-even at 48% occupancy gives us a large safety margin.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 6 } }],
      suggestedQuestions: ['Tell me about the team', "What's the ask?", 'Show me the roadmap'],
    },
  },
  {
    triggers: ['roadmap', 'timeline', 'when', 'launch', 'schedule', 'plan'],
    response: {
      text: "Here's the path to launch:\n\n📍 Q1 2026: Secure bridge funding and lock in the Tabakfabrik space\n🏗️ Q2 2026: Renovation + pre-launch pop-up events for community building\n🚪 Q3 2026: Official soft opening with first guests\n🌿 2027: Expansion to a \"Sister Hostel\" in nature — the ecosystem vision\n\nWe're currently in Q1 — the bridge funding phase. This is the moment where your investment has maximum leverage.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 8 } }],
      suggestedQuestions: ['Contact the founders', "What's the investment ask?", 'Tell me about the partnerships'],
    },
  },
  {
    triggers: ['social impact', 'impact', 'sroi', 'community', 'society', 'good'],
    response: {
      text: "Social impact isn't just a nice story — it's a financial lever.\n\nOur SROI is 1:4.5 — every €1 invested generates €4.50 in social value. Here's how:\n\n♻️ Social re-investment: % of profits reinvested + cloning the model to other cities\n🤝 Inclusive employment: AMS partnerships to hire disabled youth and refugees\n🏚️ Revitalization: turning vacant real estate into vibrant community assets\n🔨 Upcycling Hub: community workshops turning waste into value\n📚 Upskilling: training and movement courses for the local community\n\nThis unlocks AWS grants, \"Green Finance\" loans, and makes us irresistible to institutional partners.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 6 } }],
      suggestedQuestions: ["What's the investment ask?", 'Tell me about the team', 'Show me the numbers'],
    },
  },
  {
    triggers: ['target', 'guest', 'customer', 'who stays', 'persona', 'market'],
    response: {
      text: "Three core guest personas:\n\n🎓 The JKU International Student — 24K annually. Needs a \"soft landing pad\" for their first month or three. Consistent funnel for mid-term stays.\n\n🎭 The Festival Nomad — Ars Electronica attendees and culture seekers who want creativity and connection, not just a hotel room.\n\n💻 The Remote Worker — Needs high-speed Wi-Fi, community, and longer stays. Our mid-term rental strategy captures this growing demographic.\n\nEach persona feeds a different revenue stream and occupancy pattern, smoothing out seasonality.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 4 } }],
      suggestedQuestions: ['Show me the numbers', 'Tell me about partnerships', "What's the Anchor Model?"],
    },
  },
  {
    triggers: ['book', 'call', 'contact', 'meet', 'talk to', 'schedule', 'email'],
    response: {
      text: "We'd love to connect!\n\n📧 Email: info@linzhostel.com\n🌐 Website: www.linzhostel.com\n\nYou can also download our full pitch deck for a deeper dive into the numbers and strategy.\n\nDaniel and Anna are available for a call to discuss how you can be part of this movement. Whether as an investor, advisor, or strategic partner — there's a role for you.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 8 } }],
      suggestedQuestions: ['Download the full pitch deck', 'Go back to the problem', 'Show me the numbers'],
    },
  },
  {
    triggers: ['download', 'deck', 'pdf', 'document', 'pitch deck'],
    response: {
      text: "You can download our full pitch deck using the button on the left panel — it includes all the detailed financials, market analysis, and partnership framework.\n\nWant me to walk you through any specific section in more detail before you go?",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 8 } }],
      suggestedQuestions: ['Walk me through the financials', 'Tell me about the team', 'Contact the founders'],
    },
  },
  {
    triggers: ['teachcation', 'maker', 'workshop', 'grand garage', 'diy', '3d print', 'upcycl', 'learn and create'],
    response: {
      text: "This is our Teachcation Initiative — \"From Tourists to Makers.\"\n\nIt's a strategic partnership with Grand Garage, Linz's makerspace. The guest journey: arrive at Anchor → soft landing with community → hard skills at Grand Garage → complete a real community project → leave with a new skill and certification.\n\nTwo products:\n🔧 Maker's Week (B2C): 5 nights + 1 \"Intro to Making\" course — targets off-season travelers\n🏠 The Residency (B2B): Long-term guests get discounted rent in exchange for using their new skills to improve the hostel\n\nThis captures the booming educational tourism market that no competitor can serve.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 4 } }],
      suggestedQuestions: ['Who are your target guests?', 'Tell me about your partnerships', 'Show me the financials'],
    },
  },
  {
    triggers: ['festival', 'ars electronica', 'pflasterspektakel', 'klangwolke', 'event', 'crossing europe', 'bubble day'],
    response: {
      text: "Linz's festival calendar is massive — and we'll be the premium accommodation partner for all of them.\n\n🎭 Pflasterspektakel: 200K+ visitors over 3 days (mid-July)\n🤖 Ars Electronica: 112K+ visits over 5 days (early Sept)\n🎵 Linzer Klangwolke: ~60K in one evening (early Sept)\n🎬 Crossing Europe: 17K+ film industry attendees (late April)\n🎈 Bubble Days: ~30K (early June)\n🎪 Urfahraner Markt: ~300K each spring and fall\n\nThat's 700K+ potential guests passing through Linz annually — and no community-focused hostel serving them. We change that.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 1 } }],
      suggestedQuestions: ['Show me the location', 'How do you capture these guests?', 'Show me the financials'],
    },
  },
  {
    triggers: ['personal story', 'daniel story', 'why did', 'origin', 'south africa', 'loneliness', 'lonely', 'isolation', 'motivation'],
    response: {
      text: "Daniel's arrival in Austria in 2022 was profoundly challenging. He packed up his entire life from South Africa, ready for a new beginning — but the initial optimism gave way to deep isolation and depression. He almost gave up.\n\nThen in 2024, an unexpected solo trip changed everything. He found himself in a place where the weight of isolation lifted instantly — a true home away from home. That powerful experience ignited a burning question: how could he bottle that feeling?\n\nThat's the mission of Kraftwerk. Not just a business, but a personal crusade to ensure others never endure the same disconnection.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 1 } }],
      suggestedQuestions: ['Tell me about the Anchor Model', 'Who is the team?', 'Show me the vision'],
    },
  },
  {
    triggers: ['inclusive', 'disability', 'refugee', 'employment', 'sozial', 'ams', 'volkshilfe', 'job'],
    response: {
      text: "Inclusive employment is core to our model — not an afterthought.\n\nWe're partnering with Sozialministeriumservice to create supported jobs for people with disabilities. This delivers on our social mission while providing access to wage subsidies that lower operational costs.\n\nWe also partner with AMS (employment integration), JKU (student housing/community), and Volkshilfe (social services). These organizations see us as a vital partner to help their clients — new workers, international students, people in need — integrate into Linz.\n\nThis transforms us from a business into a vital community asset that solves real municipal challenges.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 5 } }],
      suggestedQuestions: ['Show me the social impact numbers', 'How does this affect financials?', "What's the investment ask?"],
    },
  },
  {
    triggers: ['revitali', 'vacant', 'property', 'building', 'lease', 'social impact discount', 'shell'],
    response: {
      text: "We're not seeking expensive prime retail space — we're offering to solve someone else's problem.\n\nOur target: a vacant property from the city, housing association, or private owner — currently an underperforming asset. We propose a \"Social Impact Discount\" — a low-cost lease in exchange for revitalizing the property, creating inclusive jobs, and activating the space.\n\nOur model is built on participatory revitalization. Staff and residents learn carpentry, painting, and maintenance through workshops — then apply those skills directly to the premises. It turns a problem property into a source of pride.\n\nA win-win: transforms a liability into measurable community benefit.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 3 } }],
      suggestedQuestions: ['Show me the space photos', 'How do you de-risk location delays?', "What's the funding structure?"],
    },
  },
  {
    triggers: ['scale', 'replicate', 'sister hostel', 'nature', 'expansion', 'clone', 'grow', 'long term'],
    response: {
      text: "This project is our blueprint — a scalable social-impact model we intend to perfect here, and then replicate.\n\nOur long-term vision is a two-part harmony: this urban \"Kraftplatz\" in Linz mirrored by a tranquil sister-hostel in nature. Together they create a complete ecosystem for connection and healing.\n\nBeyond that, the social re-investment model means a percentage of profits goes toward cloning the model to other cities and towns. We want to spread the good and encourage others to do the same.\n\nLinz is where we prove the concept. Europe is the vision.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 8 } }],
      suggestedQuestions: ['Show me the roadmap', "What's the investment ask?", 'Contact the founders'],
    },
  },
  {
    triggers: ['coworking', 'flow zone', 'remote work', 'digital nomad', 'wifi', 'work from'],
    response: {
      text: "The Flow Zone is our coworking play — and a key revenue diversifier.\n\nRemote workers and digital nomads need high-speed Wi-Fi, community, and longer stays. Our mid-term rental strategy captures this growing demographic perfectly.\n\nDuring off-peak seasons, local coworking memberships fill the gaps that typical hostels struggle with. Combined with B2B event hosting for the Tabakfabrik startup ecosystem, we've built a resilient revenue model that doesn't depend on tourists alone.\n\nThis is why our break-even is just 48% occupancy — we've built the safety net into the model.",
      toolCalls: [{ toolName: 'show_chapter', args: { chapter: 4 } }],
      suggestedQuestions: ['Show me the financials', 'How do you de-risk seasonality?', 'Tell me about the ecosystem'],
    },
  },
];

// Default fallback when no trigger matches
const fallbackResponse: DemoResponse = {
  text: "Great question! Let me point you to the most relevant part of our pitch.\n\nWe're building a 90-bed social impact hostel in Linz's Tabakfabrik — engineered for connection, not just beds. €920K Year 1 revenue projected, break-even at Month 14, and we're raising €400K with €100K of that from angel investors.\n\nWould you like to explore the vision, the numbers, or the team?",
  toolCalls: [{ toolName: 'show_chapter', args: { chapter: 2 } }],
  suggestedQuestions: ['Give me the 2-minute tour', 'Show me the financials', 'Who is the team?'],
};

export function getDemoResponse(userMessage: string): DemoResponse {
  const normalized = normalizeQuery(userMessage);

  for (const entry of demoMap) {
    for (const trigger of entry.triggers) {
      if (normalized.includes(trigger) || trigger.includes(normalized)) {
        return entry.response;
      }
    }
  }

  return fallbackResponse;
}
