import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { readFileSync } from "fs";
import path from "path";

const systemPrompt = `
You will recieve an image. 
Please create an alt text for the image. 
Be concise. 
Use adjectives only when necessary. 
Do not pass 160 characters. 
Use simple language. `;


const model = openai('gpt-4o-mini');

export const describeImage = async (imageUrl: string) => {
    const {text} = await generateText({
        model,
        system: systemPrompt,
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'image',
                        image: new URL(imageUrl)
                    }
                ]
            }
        ]
    });

    return text;
};

const description = await describeImage('https://assets.wagwalkingweb.com/media/original_images/how-to-prepare-for-a-pembroke-welsh-corgi-puppy-create-a-schedule.jpg');
console.log(description);