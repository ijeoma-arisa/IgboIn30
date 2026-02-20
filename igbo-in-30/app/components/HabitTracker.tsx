'use client';

import { studyLinks, studyOptions } from '@/lib/data/navigation';
import { useState } from 'react';
import { studyTopic, Habit, HabitMap } from '@/lib/definitions';
import * as dateUtils from '@/lib/date';

import clsx from 'clsx';

interface HabitTrackerProps {
  key: string;
  date: string;
  initialTopic?: studyTopic;
  initialText?: string;
  onSave: (date: string, topic: studyTopic, text: string) => void;
}


export default function HabitTracker({
  key,
  date,
  initialTopic = studyOptions[0],
  initialText = "",
  onSave,
}: HabitTrackerProps){
  
  const [selectedTopic, setSelectedTopic] = useState<studyTopic>(initialTopic);
  const [textInput, setTextInput] = useState<string>(initialText);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!textInput.trim()) return;

    onSave(date, selectedTopic, textInput);
    
    console.log("Submitted!");
  }

  const dateObject = dateUtils.convertStringToDate(date);
  const dateFormatted = dateUtils.formatDateLong(dateObject);
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-2xl rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="mb-1 flex flex-col justify-center items-center">
        {/* Title */}
        <h2 className="text-lg font-semibold">
          Habit Tracker
        </h2>
        <h3 className="font-bold">
          {dateFormatted}
        </h3>
      </header>

      {/* Options */}
      <label>
          {/* Question */}
          <div className="mb-2 text-md text-center">
            <p> What did you learn? </p>
            <p> (Gịnị ka ị mụtara?) </p>
          </div>

        <div className="flex gap-2 mb-4">
          <span className="font-bold">Topic:</span>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="border border-gray-500 rounded-md"
          >
            {studyOptions.map((studyOption) => {
              return (
                <option 
                  key={studyOption}
                  value={studyOption}
                >
                  {studyOption}
                </option>
                );
            })}
          </select>
        </div>
      </label>

      {/* Notes */}
      <textarea 
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full h-full p-2 resize-none border rounded-md border-gray-500 mb-2"
          placeholder="Enter Notes here"
      />

      {/* Save button */}
      <div className="mt-2 flex justify-center">
        <button className="border rounded-lg px-8 py-1 font-semibold bg-purple-200 border-indigo-700 transition hover:bg-purple-400 cursor-pointer">
          Save
        </button>
      </div>
    </form>
  );
}