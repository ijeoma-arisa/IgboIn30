import { Metadata } from 'next';
import EmbeddingCardWrapper from '@/app/ui/menu/embedding-card-wrapper';
import { videoPlaylists} from '@/lib/data/video-data';

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
        <EmbeddingCardWrapper embeddings={videoPlaylists}/>
      </div>
    </main>
  ); 
}