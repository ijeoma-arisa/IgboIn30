'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from '@/lib/data/menu-links-data'

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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-black font-medium hover:bg-orange-100 hover:text-orange-700 md:flex-none md:justify-start md:p-2 md:px-3',
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