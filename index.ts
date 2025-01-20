import type { CoreMessage } from "ai";
import { startServer } from "./06_ChatHistory";

const messagesToSend: CoreMessage[] = [
    {
        role: 'user',
        content: "What's the capital of France?"
    },

];

await startServer();

const response = await fetch('http://localhost:4317/api/get-completions', {
    
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(messagesToSend)
});

const newMessages = (await response.json()) as CoreMessage[];

const allMessages = [
    ...messagesToSend,
    ...newMessages
]

console.dir(allMessages, { depth: null });