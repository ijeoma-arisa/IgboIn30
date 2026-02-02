'use client';

import { studyLinks } from '@/lib/data/menu-links-data';
import { useState } from 'react';
import clsx from 'clsx';

export default function HabitTracker(){
  
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  function toggleOption(option: string) {
    setSelectedOptions((currentOptions) => 
      currentOptions.includes(option)
        ? currentOptions.filter((o) => o !== option )
        : [...currentOptions, option]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted!");
  }
  
  return (
    <form onSubmit={handleSubmit}>
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
        <div className="grid grid-cols-5 mb-4">
          { studyLinks.map((studyLink) => {
            const LinkIcon = studyLink.icon;
            const studyOption = studyLink.name;

            return (
              <div key={studyOption} className="flex items-center gap-2">
                <input 
                  key={studyOption}
                  type="checkbox"
                  checked={selectedOptions.includes(studyOption)}
                  onChange={ () => toggleOption(studyOption)}
                />
                  <LinkIcon className="w-6" />
                    { studyLink.name } 
                </div>
            );
          })}
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
    </form>
  );
}