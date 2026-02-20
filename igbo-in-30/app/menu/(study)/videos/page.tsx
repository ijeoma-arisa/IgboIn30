import { Metadata } from 'next';
import EmbeddingCard from '@/app/components/embeddings/EmbeddingCards';
import { videoPlaylists} from '@/lib/data/playlists/video';

export const metadata: Metadata = {
  title: 'Videos',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata?.title?.toString()}
      </h1>
      <div className="flex flex-col items-center text-center gap-6">
        <EmbeddingCard embeddings={videoPlaylists}/>
      </div>
    </main>
  ); 
}