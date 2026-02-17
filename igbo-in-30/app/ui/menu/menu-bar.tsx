import Link from 'next/link';
import MenuLinks from '@/app/ui/menu/menu-links';
import Image from 'next/image';

export default function MenuBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="relative mb-2 flex h-20 items-end justify-start p-4 md:h-40"
        href="/"
      >
        <Image
          src="/igboin30-logo.svg"
          alt="igboin30 logo"
          fill
          className="object-cover"
          priority
        />
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <MenuLinks />
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}