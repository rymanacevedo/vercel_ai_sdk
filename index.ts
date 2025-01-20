import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

const model = openai('gpt-4');

export const answerMyQuestion = async (question: string) => {
    const {text} = await streamText({
        model,
        prompt: question
    });

    const finalText = await text;
    return text;
}

await answerMyQuestion('What is the capital of Uganda?');