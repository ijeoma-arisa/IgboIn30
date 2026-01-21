import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good News',
};

export default function Page(){
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>
      <div className="flex flex-col items-center text-center gap-6">
      </div>
    </main>
  );
}