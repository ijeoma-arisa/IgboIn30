'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavLink } from '@/lib/definitions';

import { 
  HomeIcon, 
  PlayCircleIcon,
  TvIcon,
  MusicalNoteIcon,
  CameraIcon,
  HeartIcon,
  GiftIcon,
} from '@heroicons/react/24/solid';

import { 
  GlobeAltIcon, 
  QuestionMarkCircleIcon, 
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const iconMap: Record<string, typeof HomeIcon> = {
  'Home': HomeIcon,
  'PlayCircle': PlayCircleIcon,
  'Tv': TvIcon,
  'MusicalNote': MusicalNoteIcon,
  'Camera': CameraIcon,
  'Heart': HeartIcon,
  'Gift': GiftIcon,
  'GlobeAlt': GlobeAltIcon,
  'QuestionMarkCircle': QuestionMarkCircleIcon,
  'InformationCircle': InformationCircleIcon,
}

export default function SideNavLinks({ links }: { links: NavLink[]}) {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = iconMap[link.icon];

        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-black font-medium hover:bg-orange-100 hover:text-orange-700 md:flex-none md:justify-start md:p-2 md:px-3 transition',
            {
              'bg-orange-100 text-orange-700': pathname === link.href,
            },
          )}
          >
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}