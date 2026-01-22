'use client';

interface CalendarProps {
  streakDays?: number[];
}

const WEEKDAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'] as const;

export default function Calendar({ streakDays = [] }: CalendarProps) {
  const today = new Date();
  const monthLabel = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className="w-full max-w-sm border-1">
      {/* Current Month */}
      <h2 className="mb-2 text-lg font-semibold">
        {monthLabel}
      </h2>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      
      {/* Streaks */}
      <p className="text-sm text-gray-500">
        Streak days: {streakDays.join(', ') || 'none yet'}
      </p>
    </section>
  );
}