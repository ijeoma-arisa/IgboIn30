import Card from '@/app/ui/Card';

export default function TopNavBar() {
  return (
    <div className="flex w-full items-center justify-between">
      {/* StreakCard */}
      <Card> StreakCard </Card>
      <Card> HabitTrackerCard </Card>
      <Card> ProgressCard </Card>
      <Card> ProfileIcon </Card>
    </div>
  )
}