import { Metadata } from 'next';
import Calendar from '@/app/ui/menu/calendar';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>
      <div className="flex flex-col gap-6 text-indigo-700 font-bold text-xl">
        <p>Progress</p>
        <Calendar />
      </div>
    </main>
  );
}