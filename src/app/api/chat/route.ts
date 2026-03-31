import { SYSTEM_PROMPT } from '@/lib/system-prompt';
import { pitchTools } from '@/lib/tools';
import { getDemoResponse } from '@/lib/demo-responses';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  const hasValidKey = apiKey && apiKey !== 'your-api-key-here' && apiKey.startsWith('sk-');

  // If we have a valid OpenAI key, use real AI
  if (hasValidKey) {
    const { openai } = await import('@ai-sdk/openai');
    const { streamText } = await import('ai');

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT,
      messages,
      tools: pitchTools,
      maxSteps: 3,
    });

    return result.toDataStreamResponse();
  }

  // Demo mode — scripted responses with simulated streaming
  const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
  const userText = lastUserMessage?.content || '';
  const demo = getDemoResponse(userText);

  // Build a simulated AI SDK data stream response
  // Format: https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol#data-stream-protocol
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Send tool calls first
      for (const tc of demo.toolCalls) {
        const toolCallId = `call_demo_${Math.random().toString(36).slice(2, 10)}`;
        // Tool call start
        controller.enqueue(encoder.encode(`9:{"toolCallId":"${toolCallId}","toolName":"${tc.toolName}","args":${JSON.stringify(tc.args)}}\n`));
        // Tool result
        controller.enqueue(encoder.encode(`a:{"toolCallId":"${toolCallId}","result":"ok"}\n`));
      }

      // Suggest questions tool call
      if (demo.suggestedQuestions.length > 0) {
        const sqId = `call_demo_${Math.random().toString(36).slice(2, 10)}`;
        controller.enqueue(encoder.encode(`9:{"toolCallId":"${sqId}","toolName":"suggest_questions","args":{"questions":${JSON.stringify(demo.suggestedQuestions)}}}\n`));
        controller.enqueue(encoder.encode(`a:{"toolCallId":"${sqId}","result":"ok"}\n`));
      }

      // Step finish (tool calls step)
      controller.enqueue(encoder.encode(`e:{"finishReason":"tool-calls","usage":{"promptTokens":0,"completionTokens":0},"isContinued":true}\n`));

      // Simulate streaming text word by word
      const words = demo.text.split(' ');
      for (let i = 0; i < words.length; i++) {
        const word = (i === 0 ? '' : ' ') + words[i];
        controller.enqueue(encoder.encode(`0:${JSON.stringify(word)}\n`));
        await new Promise((r) => setTimeout(r, 30 + Math.random() * 40));
      }

      // Step finish (text step)
      controller.enqueue(encoder.encode(`e:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0},"isContinued":false}\n`));

      // Finish message
      controller.enqueue(encoder.encode(`d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}\n`));

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  });
}
