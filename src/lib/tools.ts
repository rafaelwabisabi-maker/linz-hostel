import { tool } from 'ai';
import { z } from 'zod';

export const pitchTools = {
  show_chapter: tool({
    description: 'Navigate to a specific chapter of the pitch, updating the visual stage. Use this whenever you move to a new topic.',
    parameters: z.object({
      chapter: z.number().min(1).max(8).describe('Chapter number 1-8'),
    }),
  }),
  show_metric: tool({
    description: 'Highlight a specific metric card with animation on the stage.',
    parameters: z.object({
      metric: z.enum(['beds', 'nightly_rate', 'cost_per_bed', 'margin', 'breakeven_occupancy', 'revenue_y1', 'revenue_y2', 'revenue_y3', 'profit_y1', 'breakeven_month', 'capital_required', 'sroi']),
    }),
  }),
  show_gallery: tool({
    description: 'Show the location photo gallery on the stage.',
    parameters: z.object({
      startIndex: z.number().min(0).max(5).optional().describe('Starting photo index (0-5)'),
    }),
  }),
  show_chart: tool({
    description: 'Display a specific chart on the stage.',
    parameters: z.object({
      chart: z.enum(['revenue_projection', 'funding_structure', 'revenue_streams']),
    }),
  }),
  show_partners: tool({
    description: 'Show the partnership ecosystem diagram on the stage.',
    parameters: z.object({}),
  }),
  show_team: tool({
    description: 'Show the founder bios and photos on the stage.',
    parameters: z.object({}),
  }),
  show_cta: tool({
    description: 'Show the call-to-action section (book a call, download deck) on the stage.',
    parameters: z.object({}),
  }),
  suggest_questions: tool({
    description: 'Suggest 2-3 follow-up questions for the investor to click on.',
    parameters: z.object({
      questions: z.array(z.string()).min(2).max(3),
    }),
  }),
};
