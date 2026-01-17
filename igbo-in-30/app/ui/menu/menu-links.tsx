'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { 
  HomeIcon, 
  PlayCircleIcon,
  TvIcon,
  MusicalNoteIcon,
  CameraIcon
} from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';


const links = [
  { name: 'Home', href: '/menu', icon: HomeIcon },
  { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: PlayCircleIcon},
  { name: 'Websites', href:'/menu/websites', icon: GlobeAltIcon },
  { name: 'Videos', href:'/menu/videos', icon: TvIcon },
  { name: 'Music', href:'/menu/music', icon: MusicalNoteIcon },
  { name: 'Social Media', href: '/menu/social-media', icon: CameraIcon },
];

export default function MenuLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-black font-medium hover:bg-purple-200 hover:text-indigo-700 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-purple-200 text-indigo-700': pathname === link.href,
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