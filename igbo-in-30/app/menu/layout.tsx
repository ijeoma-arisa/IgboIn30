import { Metadata } from 'next';
import SideNav from '@/app/ui/SideNav/SideNav';
import TopNav from '@/app/ui/TopNav/TopNav';

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
      <TopNav />

      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
        <div className="h-full w-full flex-none md:w-64">
          <SideNav />
          
          <div className="hidden h-auto w-full grow rounded-md bg-gray-700 md:block" />

        </div>

              
        <div className="grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}