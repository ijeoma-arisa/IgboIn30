import { Metadata } from 'next';
import EmbeddingCardWrapper from '@/app/ui/menu/embedding-card-wrapper';
import { youtubePlaylists } from '@/lib/data/youtube-lesson-data';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'YouTube Lessons',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata?.title?.toString()}
      </h1>
      <div className="flex flex-col items-center text-center gap-6">
        <EmbeddingCardWrapper embeddings={youtubePlaylists}/>
      </div>
    </main>
  ); 
}