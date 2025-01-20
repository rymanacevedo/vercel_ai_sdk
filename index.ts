import {anthropic} from '@ai-sdk/anthropic';
import { generateText } from 'ai';

const model = anthropic('claude-3-5-sonnet-latest');

export const answerMyQuestion = async (question: string) => {
    const { text } = await generateText({
        model,
        prompt: question,
    
})


    return text;
}

const answer = await answerMyQuestion("What is the capital of France?");
console.log(answer);