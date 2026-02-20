import Card from '@/app/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function TopNav() {
  return (
    <div className="flex w-full items-center justify-between p-4 bg-orange-400">
      <Link
          className="relative flex h-24 w-60 p-6"
          href="/"
        >
          <Image
            src="/igboin30-logo.svg"
            alt="igboin30 logo"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </Link>
      <Card> StreakCard </Card>
      <Card> HabitTrackerCard </Card>
      <Card> ProgressCard </Card>
      <Card> ProfileIcon </Card>
    </div>
  )
}