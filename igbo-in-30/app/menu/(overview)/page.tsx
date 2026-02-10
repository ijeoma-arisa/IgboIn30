'use client';

import Calendar from '@/app/components/Calendar';
import HabitTracker from '@/app/components/HabitTracker';
import { act, useState } from 'react';
import { studyTopic, Habit, HabitMap} from '@/lib/definitions';

export default function Page() {
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [habitEntries, setHabitEntries] = useState<HabitMap>({});
  
  function saveHabitEntry(date: string, topic: studyTopic, text: string){
    setHabitEntries((prevHabitEntries) => ({
      ...prevHabitEntries,
      [date]: { date, topic, text, updatedAt: Date.now()},
    }));
  }
  return (
    <main className="text-black">
      <h1 className="text-center mb-4 text-xl md:text-3xl font-bold">
        Home
      </h1>

      <div className="flex w-full">
        <div className="w-[360px] shrink-0">
          <Calendar 
            streakDays={[2, 4, 6, 10, 11]}
            habitEntries={habitEntries}
            onSelectDate={setActiveDate}
          />
        </div>

        <div className="flex-1">
          {activeDate ? (
            <HabitTracker
              key={activeDate}
              date={activeDate}
              initialTopic={habitEntries[activeDate]?.topic}
              initialText={habitEntries[activeDate]?.text}
              onSave={saveHabitEntry}
            />
          ) : (
            <div className="rounded-lg border border-dashed p-6 text-sm text-gray-500">
              Select a day to view/edit habits.
            </div>
          )}    
        </div>
      </div>
    </main>
  );
}