import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";


const lmstudio = createOpenAICompatible({
    name: 'lmstudio',
    baseURL: 'http://localhost:1234/v1'
});

const model = lmstudio('');

export const askLocalLLmQuestion = async (
    input: string
) => {
    const { text } = await generateText({
        model,
        prompt: input,
        maxRetries: 0
    });

    return text;
}

const input = `Tell me a story about your favorite bedtime story.`;
const localLLMResult = await askLocalLLmQuestion(input);

console.log(localLLMResult);