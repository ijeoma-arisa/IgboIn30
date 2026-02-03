'use client';

import { studyLinks, studyOptions } from '@/lib/data/menu-links-data';
import { useState } from 'react';
import clsx from 'clsx';


export default function HabitTracker(){
  
  const [selectedOption, setSelectedOption] = useState<typeof studyOptions[number]>(studyOptions[0]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted!");
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="mb-1 flex flex-col justify-center items-center">
        {/* Title */}
        <h2 className="text-lg font-semibold">
          Habit Tracker
        </h2>
      </header>

      {/* Options */}
      <label>
          {/* Question */}
          <div className="mb-2 text-md text-center">
            <p> What did you learn today? </p>
            <p> (Gịnị ka ị mụtara taa?) </p>
          </div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as typeof selectedOption)}
          className=""
        >
          {studyOptions.map((studyOption) => {
            return (
              <option 
                key={studyOption}
                value={studyOption}
                className="flex gap-2"
              >
                {studyOption}
              </option>
              );
          })}
        </select>
      </label>

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
    </form>
  );
}