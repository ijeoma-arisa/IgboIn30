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
      <TopNavBar />

      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
        <div className="w-full flex-none md:w-64 mt-4">
          <MenuBar />
        </div>

        <div className="grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}