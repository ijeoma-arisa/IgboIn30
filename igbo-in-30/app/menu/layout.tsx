import MenuBar from '@/app/ui/menu/menu-bar';
import TopNavBar from '@/app/ui/menu/top-navbar';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    template: '%s | IgboIn30',
    default: 'IgboIn30',
  },
  description: 'IgboIn30: Learn Igbo in 30 minutes every day',
};

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
      {/* Top Nav Bar */}
      <div className="bg-orange-400 md:h-28">
        <TopNavBar />
      </div>

      {/* Side Nav Bar */}
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
        <div className="sticky w-full flex-none md:w-64">
          {/* Logo */}
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
          {/* Menu  */}
          <MenuBar />
        </div>

        <div className="grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}