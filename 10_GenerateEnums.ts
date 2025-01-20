import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";

const model = openai('gpt-4');

export const classifySentiment = async (input: string) => {
    const {object} = await generateObject({
        model,
        output: 'enum',
        enum: ['positive, negative, neutral'],
        prompt: input,
        system: `Classify the sentiment of the text as either positive, negative or neutral.`
    })

    return object;
}

const result = await classifySentiment(`I love programming!`);

console.log(result);