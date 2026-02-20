import { Embedding } from '@/lib/definitions';
import EmbeddingCard from '@/app/components/embeddings/EmbeddingCard';

type EmbeddingCardsProps = {
  embeddings: Embedding[];
} 

export default async function EmbeddingCards({embeddings}: EmbeddingCardsProps) {
  return (
    <>
      {embeddings.map((embedding) => 
        <EmbeddingCard key={embedding.name} embedding={embedding} />
      )}
    </>
  );
}