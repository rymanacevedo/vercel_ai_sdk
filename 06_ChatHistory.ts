import type { CoreMessage } from "ai";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { once } from "node:events";

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

export const startServer = async () => {
    const app = new Hono();

    app.post('/api/get-completions', async(ctx) => {
        // We'll implement this later!
    });

    const server = serve({
        fetch: app.fetch,
        port: 4317,
        hostname: '0.0.0.0'
    });

    await once(server, 'listening');
    return server;
}