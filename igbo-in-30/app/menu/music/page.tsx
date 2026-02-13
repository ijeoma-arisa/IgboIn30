import { Metadata } from 'next';
import { musicPlaylists } from '@/lib/data/music-data';
import EmbeddingCardWrapper from '@/app/ui/menu/embedding-card-wrapper';

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
        <EmbeddingCardWrapper embeddings={musicPlaylists} />
      </div>
    </main>
  );
}