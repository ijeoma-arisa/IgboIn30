import { Metadata } from 'next';
import InstagramCardWrapper from '@/app/ui/menu/social-media-cards';

export const metadata: Metadata = {
  title: 'Social Media',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        Social Media
      </h1>
      <h2 className="text-indigo-700 mb-4 text-lg md:text-xl font-bold">
        Instagram
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InstagramCardWrapper />
      </div>
    </main>
    );
}