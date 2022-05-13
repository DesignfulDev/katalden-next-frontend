import { XIcon } from '@heroicons/react/outline';
import SidebarNav from './SidebarNav';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div
      className={`fixed left-0 w-full z-20 min-h-screen bg-brand-white flex flex-col justify-between items-center ${
        !isOpen && 'translate-y-full'
      } transform transition duration-300`}
      isOpen={isOpen}
    >
      <button className="w-10 self-end h-20 mx-3" onClick={toggle}>
        <XIcon />
      </button>
      <SidebarNav />
      <div className="mx-auto text-center py-5 font-light text-sm ">
        <p className="uppercase">Copyright &copy; Katharine Alden</p>
        <p className="pt-1">All Rights Reserved</p>
      </div>
    </div>
  );
}
