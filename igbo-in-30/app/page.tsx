import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/data/menu-links-data';

const [homeLink, goodNewsLink, ...studyLinks] = links; 

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 font-sans">
      <main className="flex min-h-full w-full max-w-3xl rounded-xl flex-col items-center justify-between py-32 px-16 bg-white border border-black shadow-md">
        {/* Temporary Logo */}
        <div className="flex justify-center min-w-1/2 mb-10 px-20 py-6 rounded-md bg-indigo-700">
          <p className="text-white text-4xl font-semibold">IgboIn30</p>
        </div>

        <div className="flex flex-col items-center gap-10 text-center">
          {/* Tagline */}
          <h1 className="bg-purple-200 p-4 rounded-xl text-3xl font-semibold text-black">
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
                    <LinkIcon className={`w-16 ${studyLink.textColor}`} />
                    <p className="text-black font-semibold">{studyLink.name}</p>
                  </Link>
                );
              })   
          }
          </div>
          
          <Link
            key={homeLink.name}
            href={homeLink.href}
            className="text-white font-bold bg-emerald-700 px-16 py-2 text-2xl rounded-md transition hover:scale-120 hover:text-emerald-50"
          >
            <p>Start Today!</p>
            <p>(Bido taa!) </p>
          </Link>
        </div>
        
      </main>
    </div>
  );
}
