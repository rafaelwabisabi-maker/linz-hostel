export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  stageType: 'problem' | 'vision' | 'location' | 'sauce' | 'ecosystem' | 'numbers' | 'team' | 'ask';
  suggestedQuestions: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'The Gap',
    subtitle: '1 Million Visitors. Zero Connection.',
    stageType: 'problem',
    suggestedQuestions: [
      'Tell me about the Anchor Model',
      'How big is this market?',
      'Show me the location',
    ],
  },
  {
    id: 2,
    title: 'The Model',
    subtitle: 'We Engineer Connection.',
    stageType: 'vision',
    suggestedQuestions: [
      'Show me the actual space',
      "What's your secret sauce?",
      'Jump to the financials',
    ],
  },
  {
    id: 3,
    title: 'The Space',
    subtitle: "Inside Linz's Icon",
    stageType: 'location',
    suggestedQuestions: [
      'What makes you different?',
      'Who are your partners?',
      'Show me the numbers',
    ],
  },
  {
    id: 4,
    title: 'The Edge',
    subtitle: 'Sleep Here. Create There.',
    stageType: 'sauce',
    suggestedQuestions: [
      'Tell me about your partnerships',
      'Who is your target guest?',
      "Let's see the financials",
    ],
  },
  {
    id: 5,
    title: 'The Moat',
    subtitle: 'Plugged Into a Machine',
    stageType: 'ecosystem',
    suggestedQuestions: [
      'Show me the revenue model',
      'How do you de-risk this?',
      'Who is the team?',
    ],
  },
  {
    id: 6,
    title: 'The Numbers',
    subtitle: 'Break-Even at 48%',
    stageType: 'numbers',
    suggestedQuestions: [
      'How do you mitigate risks?',
      'Tell me about the team',
      "What's the ask?",
    ],
  },
  {
    id: 7,
    title: 'The Founders',
    subtitle: 'Vision Meets Execution',
    stageType: 'team',
    suggestedQuestions: [
      "What's the investment ask?",
      'Tell me about social impact',
      "What's the roadmap?",
    ],
  },
  {
    id: 8,
    title: 'Join Us',
    subtitle: "Your \u20AC100K Unlocks \u20AC300K+",
    stageType: 'ask',
    suggestedQuestions: [
      'Book a call with the founders',
      'Download the full pitch deck',
      'Tell me more about de-risking',
    ],
  },
];

export function getChapter(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
