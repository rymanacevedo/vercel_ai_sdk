import { openai } from "@ai-sdk/openai";
import  {  generateText, type LanguageModel } from "ai";


export const ask = async(
    prompt: string,
    model: LanguageModel
) => {
    const {text} = await generateText({
        model,
        prompt
    });

    return text;
}

const prompt = `Tell me a story about your favorite bedtime story.`;
const chatGPTResult = await ask(prompt, openai('gpt-4'));