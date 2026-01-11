import { Metadata } from 'next';
import WebsiteCardWrapper from '@/app/ui/menu/website-cards';

export const metadata: Metadata = {
  title: 'Websites',
};

export default function Page() {
  return ( 
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">
        Websites
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <WebsiteCardWrapper />
      </div>
    </main>
  );
}