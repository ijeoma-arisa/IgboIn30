import { Metadata } from 'next';
import YouTubeCardWrapper from '@/app/ui/menu/youtube-cards';

export const metadata: Metadata = {
  title: 'YouTube Lessons',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        YouTube Lessons
      </h1>
      <div className="flex flex-col items-center text-center gap-6">
        <YouTubeCardWrapper />
      </div>
    </main>
  ); 
}