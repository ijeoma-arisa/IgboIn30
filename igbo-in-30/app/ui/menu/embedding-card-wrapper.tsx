import { Embedding } from '@/lib/definitions';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

type EmbeddingCardWrapperProps = {
  embeddings: Embedding[];
} 

export default async function EmbeddingCardWrapper({embeddings}: EmbeddingCardWrapperProps) {
  return (
    <>
      {embeddings.map(({name, embedText}) => {
        return (
          <Card key={name} className="bg-orange-300 border-orange-400">
            <h2 
              className="text-gray-700 mb-4 text-lg md:text-xl font-bold"
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