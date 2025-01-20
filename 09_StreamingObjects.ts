import { streamObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";

const model = openai('gpt-4');
const schema = z.object({
    recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.object({
            name: z.string(),
            amount: z.string()
        }).describe('The ingredients needed for the recipe.')
    ),
    steps: z.array(z.string()).describe('The steps to make the recipe.')
    }),
});

export const createRecipe = async (input: string) => 
{
    const result = await streamObject({
        model,
        schema,
        schemaName: 'Recipe', 
        prompt: input,
        system: `
        You are helping a 'user create a recipe. 
        Use British english variants of ingredients names, like Coriander over Cilantro.
`
    });

    for await(const obj of result.partialObjectStream) {
        console.clear();
        console.dir(obj, {depth: null});
    }

    const finalObject = await result.object;

    return finalObject.recipe;
}

const recipe = await createRecipe(`how to make pizza?`);

console.log(recipe);