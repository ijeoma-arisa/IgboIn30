import Image from 'next/image';
import Link from 'next/link';
import { regularSideNavLinks } from '@/lib/data/navigation';

const [homeLink, ...studyLinks] = regularSideNavLinks; 

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-200 font-sans">
      <main className="flex min-h-full w-full max-w-3xl rounded-xl flex-col items-center justify-between py-32 px-16 bg-white shadow-md">
        {/* Temporary Logo */}
        <div className="relative min-w-full h-60 mb-4">
            <Image
              src="/igboin30-logo.svg"
              alt="igboin30 logo"
              fill
              className="object-cover rounded-md"
              priority
            />
        </div>

        <div className="flex flex-col items-center gap-10 text-center">
          {/* Tagline */}
          <h1 className="p-4 rounded-xl text-3xl font-semibold text-black">
            Learn Igbo in 30 minutes every day
          </h1>

          <div className="grid grid-cols-5">
            {studyLinks.map((studyLink) => {
                const LinkIcon = studyLink.icon;

                return (
                  <Link
                    key={studyLink.name}
                    href={studyLink.href}
                    className="flex flex-col items-center justify-center text-md transition hover:scale-120"
                    >
                    {/* <LinkIcon className={`w-16 bg-black`} /> */}
                    <p className="text-black font-semibold">{studyLink.name}</p>
                  </Link>
                );
              })   
          }
          </div>
          
          <Link
            key={homeLink.name}
            href={homeLink.href}
            className="text-white font-bold bg-orange-600 px-16 py-2 text-2xl rounded-md transition hover:scale-120"
          >
            <p>Start Today!</p>
            <p>(Bido taa!) </p>
          </Link>
        </div>
        
      </main>
    </div>
  );
}
