import { openai } from '@ai-sdk/openai';
import { embedMany, embed, cosineSimilarity } from 'ai';


const model = openai.embedding('text-embedding-3-small');

const values = ['Dog', 'Cat', 'Car', 'Bike'];

const { embeddings } = await embedMany({
    model,
    values
});


const vectorDatabase = embeddings.map((embedding, index) => ({
    value: values[index]!,
    embedding,
}));

const searchTerm = await embed({
    model,
    value: 'Feline'
});

searchTerm.embedding

const entries = vectorDatabase.map(entry => {
    return {
        
        value: entry.value,
        similarity: cosineSimilarity(searchTerm.embedding, entry.embedding)
    }
});

const sortedEntries = entries.sort((a, b) => b.similarity - a.similarity);

console.dir(sortedEntries, {depth: null});