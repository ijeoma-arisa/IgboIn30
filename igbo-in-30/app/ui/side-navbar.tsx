import MenuLinks from '@/app/ui/menu/menu-links';
import { links, specialLinks} from '@/lib/data/menu-links-data';

export default function SideNavBar() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <div className="flex grow flex-row p-3 justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <MenuLinks links={links}/>
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" /> */}
      </div>
    </div>
  );
}