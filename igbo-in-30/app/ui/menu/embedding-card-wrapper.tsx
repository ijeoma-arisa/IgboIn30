import { Embedding } from '@/lib/definitions';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

type EmbeddingCardWrapperProps = {
  embeddings: Embedding[];
} 

// Simulate delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function EmbeddingCardWrapper({embeddings}: EmbeddingCardWrapperProps) {
  await delay(1000);

  return (
    <>
      {embeddings.map(({name, embedText}) => {
        return (
          <Card key={name}>
            <h2 
              className="text-indigo-700 mb-4 text-lg md:text-xl font-bold"
            >
              {name}
            </h2>
            {parse(embedText)}
          </Card>
        );
      })}
    </>
  );
}