'use client';

import { studyOptions } from '@/lib/data/menu-links-data';
import clsx from 'clsx';

const OPTIONS = ['YouTube Lessons']
export default function HabitTracker(){
  return (
    <section className="flex flex-col w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
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
       <div className="grid grid-cols-5 text-center mb-4">
        { studyOptions.map((studyOption) => (
          <div key={studyOption}>
            {studyOption}
          </div>
        ))}
       </div>

      {/* Notes */}
       <textarea 
          className="w-full h-full p-2 resize-none border rounded-md border-gray-500"
          placeholder="Enter Notes here"
       />

      {/* Save button */}
      <div className="mt-2 flex justify-end">
        <button className="border rounded-lg px-8 py-1 font-semibold bg-purple-200 border-indigo-700 transition hover:bg-purple-400">
          Save
        </button>
      </div>
    </section>
  );
}