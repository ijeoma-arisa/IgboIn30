import { Metadata } from 'next';
import Calendar from '@/app/components/Calendar';
import HabitTracker from '@/app/components/HabitTracker';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <main className="text-black">
      <h1 className="text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>

      <div className="flex justify-between">
        <Calendar streakDays={[2, 4, 6, 10, 11]}/>
        <HabitTracker />
      </div>
    </main>
  );
}