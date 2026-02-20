import { Metadata } from 'next';
import { musicPlaylists } from '@/lib/data/playlists/music';
import EmbeddingCard from '@/app/components/embeddings/EmbeddingCards';

export const metadata: Metadata = {
  title: 'Music',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata?.title?.toString()}
      </h1>
      <div className="flex flex-col items-center gap-6 text-center">
        <EmbeddingCard embeddings={musicPlaylists} />
      </div>
    </main>
  );
}