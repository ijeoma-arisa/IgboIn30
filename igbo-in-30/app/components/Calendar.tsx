'use client';

import clsx from 'clsx';

interface CalendarProps {
  streakDays?: number[];
}

const WEEKDAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'] as const;

function getDaysInMonth(year: number, monthIndex: number){
  return new Date(year, monthIndex + 1, 0).getDate();
} 

export default function Calendar({ streakDays = [] }: CalendarProps) {
  const today = new Date();
  const todayDayNumber = today.getDate();

  const monthLabel = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const year = today.getFullYear();
  const monthIndex = today.getMonth();                  // Jan - Dec: 0 - 11

  const firstOfMonth = new Date(year, monthIndex, 1);   
  const startWeekday = firstOfMonth.getDay();           // Sun - Sat: 0 - 6
  const daysInMonth = getDaysInMonth(year, monthIndex);

  const cells: Array<{ type: 'blank' } | { type: 'day'; dayNumber: number }> = [];

  // Label leading days as blank
  for (let i = 0; i < startWeekday; i++) {
    cells.push({ type: 'blank' });
  }

  // Label days
  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    cells.push({ type: 'day', dayNumber });
  }

  // Label remaining days blank
  const remainder = cells.length % 7;
  if (remainder !== 0){
    const remainingDaysInLastWeek = 7 - remainder;
    for (let i = 0; i < remainingDaysInLastWeek; i++){
      cells.push({ type: 'blank' });
    }
  }

  return (
    <section className="w-full max-w-sm border rounded-lg">
      {/* Month Header */}
      <div className="flex flex-col items-center mb-2 text-gray-500">
        <h2 className="mb-2 text-lg font-semibold text-black">
          {monthLabel}
        </h2>
        <p className="text-xs">Today is highlighted</p>
      </div>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      
      {/* Calendar Grid */}
      <div className="mt-3 grid grid-cols-7 gap-2">
        {cells.map((cell, index) => {
          
          if (cell.type === 'blank') {
            return <div key={`blank-${index}`} className="h-9 rounded-md border border-gray-200 bg-gray-100" aria-hidden="true" />
          }
          
          const isToday = cell.dayNumber === todayDayNumber;

          return (
            <div 
              key={`day-${cell.dayNumber}`}
              className = {clsx(
                'flex h-9 items-center justify-center rounded-md border text-sm',
                isToday
                ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700'
                : 'border-gray-300',
              )}
            >
              {cell.dayNumber}
            </div>
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