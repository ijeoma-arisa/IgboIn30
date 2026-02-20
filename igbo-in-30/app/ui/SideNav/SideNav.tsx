import SideNavLinks from '@/app/ui/SideNav/SideNavLinks';
import { regularSideNavLinks, specialSideNavLinks} from '@/lib/data/navigation';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <div className="flex grow flex-row p-3 justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <SideNavLinks links={regularSideNavLinks}/>

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />

        <SideNavLinks links={specialSideNavLinks}/>
      </div>
    </div>
  );
}