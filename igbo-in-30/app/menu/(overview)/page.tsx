import { Metadata } from 'next';
// import Calendar from '@/app/ui/menu/calendar';
import Calendar from '@/app/components/Calendar';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <main className="text-black">
      <h1 className="text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>
      <Calendar streakDays={[2, 4, 6]}/>
    </main>
  );
}