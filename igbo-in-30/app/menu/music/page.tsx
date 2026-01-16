import { Metadata } from 'next';
import MusicPlaylistWrapper from '@/app/ui/menu/music-cards';

export const metadata: Metadata = {
  title: 'Music',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        Music
      </h1>
      <div className="flex flex-col items-center gap-6">
        <MusicPlaylistWrapper />
      </div>
    </main>
  );
}