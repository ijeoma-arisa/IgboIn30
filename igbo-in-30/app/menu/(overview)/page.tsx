'use client';

import Calendar from '@/app/components/Calendar';
import HabitTracker from '@/app/components/HabitTracker';
import { useState, useEffect } from 'react';
import { studyTopic, Habit, HabitMap} from '@/lib/definitions';
import * as dateUtils from '@/lib/date';

export default function Page() {
  const [activeDate, setActiveDate] = useState<string>(dateUtils.convertDateToString(new Date()));
  const [habitEntries, setHabitEntries] = useState<HabitMap>({});

  useEffect(() => {
    const savedHabitEntries = localStorage.getItem('habitEntries');
    
    if (!savedHabitEntries){
      return;
    }

    try {
      const parsedHabitEntries = JSON.parse(savedHabitEntries);
      if (
        typeof parsedHabitEntries !== 'object' ||
        parsedHabitEntries === null ||
        Array.isArray(parsedHabitEntries)
      ){
        throw Error('Invalid habitEntries shape');
      }
      setHabitEntries(parsedHabitEntries);
    } catch {
      setHabitEntries({});
      localStorage.setItem('habitEntries', '{}');
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('habitEntries', JSON.stringify(habitEntries))
  }, [habitEntries]);
  
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