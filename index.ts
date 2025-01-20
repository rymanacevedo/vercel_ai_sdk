import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

const model = openai('gpt-4');

export const answerMyQuestion = async (question: string) => {
    const {textStream} = await streamText({
        model,
        prompt: question
    });

    for await (const chunk of textStream) {
        process.stdout.write(chunk);
    }

    return textStream;
}

await answerMyQuestion('What is the capital of Uganda?');