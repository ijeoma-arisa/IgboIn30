'use client';

import { studyOptions } from '@/app/ui/menu/menu-links';

import clsx from 'clsx';



const OPTIONS = ['YouTube Lessons']
export default function HabitTracker(){
  return (
    <section className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="mb-1 flex flex-col justify-center items-center">
        {/* Title */}
        <h2 className="text-lg font-semibold">
          Habit Tracker
        </h2>

        {/* Question */}
        <div className="mb-2 text-md text-center">
          <p> What did you learn today? </p>
          <p> (Gịnị ka ị mụtara taa?) </p>
        </div>
      </header>

       {/* Options */}
       <div className="grid grid-cols-5 text-center">
        { studyOptions.map((studyOption) => (
          <div key={studyOption}>
            {studyOption}
          </div>
        ))}
       </div>
    </section>
  );
}