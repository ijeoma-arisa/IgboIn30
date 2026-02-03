'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { HabitMap } from '@/lib/definitions';

interface CalendarProps {
  streakDays?: number[];
  habitEntries: HabitMap;
  onSelectDate: (date: string | null) => void;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'] as const;

function getDaysInMonth(year: number, monthIndex: number){
  return new Date(year, monthIndex + 1, 0).getDate();
} 

function generateCalenderCells(year: number, monthIndex: number){
  const cells: Array<{ type: 'blank' } | { type: 'day'; dayNumber: number }> = [];

  const firstOfMonth = new Date(year, monthIndex, 1);   
  const startWeekday = firstOfMonth.getDay();             // Sun - Sat: 0 - 6
  const daysInMonth = getDaysInMonth(year, monthIndex);
  
  // Generate blank days in first week
  for (let i = 0; i < startWeekday; i++) {
    cells.push({ type: 'blank' });
  }

  // Generate day cells
  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    cells.push({ type: 'day', dayNumber });
  }

  // Generate blank days in last week
  const remainder = cells.length % 7;
  if (remainder !== 0){
    const remainingDaysInLastWeek = 7 - remainder;
    for (let i = 0; i < remainingDaysInLastWeek; i++){
      cells.push({ type: 'blank' });
    }
  }

  return cells;
}

export default function Calendar({ 
  streakDays = [],
  habitEntries,
  onSelectDate,
}: CalendarProps) {
  const today = new Date();
  const [displayMonth, setDisplayMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
    
  const monthLabel = displayMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const year = displayMonth.getFullYear();
  const monthIndex = displayMonth.getMonth();
  const calendarCells = generateCalenderCells(year, monthIndex);

  const isViewingThisMonth = 
    monthIndex === today.getMonth() && year === today.getFullYear();

  function goToPrevMonth() {
    setDisplayMonth((currMonth) => new Date(currMonth.getFullYear(), currMonth.getMonth() - 1, 1));
  }
  
  function goToNextMonth() {
    setDisplayMonth((currMonth) => new Date(currMonth.getFullYear(), currMonth.getMonth() + 1, 1));
  }
  
  function goToThisMonth(){
    setDisplayMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  }
  
  return (
    <section className="max-w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="relative mb-1 flex items-center justify-center">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrevMonth}
          className="absolute left-0 rounded-md px-2 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-100"
          aria-label="Previous month"
          >
          &#8249;
        </button>

        {/* Month */}
        <h2 className="text-lg font-semibold text-black">
          {monthLabel}
        </h2>

        {/* Streak */}
        <div className="absolute right-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
            🔥 0

          {/* Next Button */}
          <button
            type="button"
            onClick={goToNextMonth}
            className="rounded-md px-2 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-100"
            aria-label="Next month"
          >
            &#8250;
          </button>
        </div>
      </header>
      
      {/*Display Today text or 'Jump to Current month' button */}
      {isViewingThisMonth ? (
        <p className="mb-3 text-center text-xs text-gray-500">
          Today is highlighted in <span className="px-1 bg-blue-50 text-blue-700">blue</span>
        </p>
      ) :
      <div className="mb-3 flex justify-center">
        <button
          type="button"
          onClick={goToThisMonth}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200"
          aria-label="Current Month"
        >
          Jump to Current Month
        </button>  
      </div>}

      {/* Weekday Header */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="mt-3 grid grid-cols-7 gap-2">
        {calendarCells.map((cell, index) => {
          
          // Make blank cells gray
          if (cell.type === 'blank') {
            return ( 
              <div 
                key={`blank-${index}`} 
                className="h-9 rounded-md border border-gray-200 bg-gray-100" 
                aria-hidden="true" 
              />
            )
          }
          
          const isToday = isViewingThisMonth && cell.dayNumber === today.getDate();
          const isStreak = streakDays.includes(cell.dayNumber);

          const dateForCell = new Date(year, monthIndex, cell.dayNumber);
          const ariaLabel = dateForCell.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <button 
              key={`day-${cell.dayNumber}`}
              // onClick={() => onSelectDate()}
              tabIndex={0}
              aria-label={ariaLabel}
              className = {clsx(
                'relative flex h-9 items-center justify-center rounded-md border text-sm transition-colors',
                'hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                isToday
                  ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700' // Make Today cell blue
                  : isStreak
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800' // Make Streak cell green
                      : 'border-gray-300',                                  // Make Day cell light gray 
              )}
            >
              {isStreak && !isToday && (
                <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-600" />
              )}
              {cell.dayNumber}
            </button>
          );
        })}
      </div>
      
      {/* Streaks */}
      <p className="text-sm text-gray-500 mt-2">
        Streak days: {streakDays.join(', ') || 'none yet'}
      </p>
    </section>
  );
}