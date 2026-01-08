import MenuBar from '@/app/ui/menu/menu-bar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | IgboIn30',
    default: 'IgboIn30',
  },
  description: 'IgboIn30: Learn Igbo in 30 minutes every day',
};

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-50">
      <div className="w-full flex-none md:w-64">
        <MenuBar />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}