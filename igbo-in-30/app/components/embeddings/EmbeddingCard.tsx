import { Embedding } from '@/lib/definitions';
import parse from 'html-react-parser';
import Card from '@/app/ui/Card';

export default async function EmbeddingCard({ embedding }: {embedding: Embedding}) {
  return (
    <Card className="bg-orange-300 border-orange-400">
      <h2 
        className="text-gray-700 mb-4 text-lg md:text-xl font-bold"
      >
        {embedding.name}
      </h2>
      {parse(embedding.embedText)}
    </Card>
  );
}