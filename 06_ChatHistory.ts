import { generateText, type CoreMessage } from "ai";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { once } from "node:events";
import { openai } from "@ai-sdk/openai";

const messages: CoreMessage[] = [
    {
        role: 'system',
        content: 'You are a friendly greeter.'
    },
    {
        role: 'user',
        content: 'Hello you!'
    },
    {
        role: 'assistant',
        content: 'Hi there!'
    }

];

const model = openai('gpt-4');

export const startServer = async () => {
    const app = new Hono();

    app.post('/api/get-completions', async(ctx) => {
        const messages: CoreMessage[] = await ctx.req.json();

        const result = await generateText({
            model,
            messages
        });

        return ctx.json(result.response.messages);
    });

    const server = serve({
        fetch: app.fetch,
        port: 4317,
        hostname: '0.0.0.0'
    });

    await once(server, 'listening');
    return server;
}