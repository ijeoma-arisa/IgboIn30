import { Metadata } from 'next';
import Card from '@/app/ui/Card';

export const metadata: Metadata = {
  title: 'Good News',
};

export default function Page(){
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>
      <div className="flex flex-col items-center gap-6 text-black">
        <Card className="w-3/4 min-h-20 sm:w-full justify-center text-center">
          <p className="font-semibold">You're already on your way to learning Igbo!</p>
          <p>👏 Kụọ onwe gị aka (Clap for yourself) 👏 </p>
        </Card>

        <Card className="w-3/4 min-h-20 sm:w-full justify-center text-center">
          <p>I was able to teach myself Igbo by practicing <span className="font-semibold">for 30 minutes a day</span>!</p>

          <p className="font-bold">But I couldn't have done it without God</p>
        </Card>

        <h1 className="font-bold text-xl">The Gospel</h1>
        <Card className="w-full min-h-20 justify-center">

          <p>🔸 God created us to be in relationship with Him and each other</p>
          <p>🔸 Bad News: As humans, we constantly do bad things that distance us from God</p>
          <p>🔸 Good News: God decided to restore our relationship with Him because He love us </p>
          <p className="italic px-10 py-2">
            "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." 
            </p>
            <p className="italic px-10 py-2">
              (John 3:16 NKJV) 
            </p>
          <p>🔸 Today, we have the gift of salvation from our sins and experiencing eternal life with God </p>
        </Card>

      </div>
    </main>
  );
}