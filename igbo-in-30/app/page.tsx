import Image from "next/image";
import { studyOptions } from '@/lib/data/menu-links-data';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-100 font-sans">
      <main className="flex min-h-full w-full max-w-3xl rounded-xl flex-col items-center justify-between py-32 px-16 bg-white border border-black">
        {/* Temporary Logo */}
        <div className="flex justify-center min-w-1/2 mb-6 px-20 py-6 rounded-md bg-indigo-700">
          <p className="text-white text-4xl font-semibold">IgboIn30</p>
        </div>

        <div className="flex flex-col items-center gap-10 text-center">
          {/* Tagline */}
          <h1 className="max-w-sm text-3xl font-semibold text-black">
            Learn Igbo in 30 minutes every day
          </h1>

          <div className="grid grid-cols-5 gap-6 border border-black">
            {studyOptions.map((studyOption) => (
                <div key={studyOption}>
                  {studyOption}
                </div>
              ))
            }
          </div>
          
          <p className="max-w-md text-lg text-zinc-600 border">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
