import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const model = openai('gpt-4');

export const summarizeText = async (input: string) => {
const { text } = await generateText({
    model,
    messages: [
        {
            role: "system",
            content: `You are a text summarizer. 
            Summarize the text you receive. 
            Be Concise. 
            Return only the summary. 
            Do not use the phrase: "here is a summary". 
            Highlight relevant phrase in bold. 
            The summary should be two sentences long. `
        },
        {
            role: 'user',
            content: input
        }
    ]
});

return text;

}