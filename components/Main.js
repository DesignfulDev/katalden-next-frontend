import SidebarNavItem from './SidebarNavItem';
import Sidebar from './Sidebar';

export default function Main() {
  return (
    <div className="mx-auto flex border-2 border-emerald-800 h-5/6">
      <Sidebar />

      <main className="border-2 border-teal-400 w-3/5">gallery</main>
    </div>
  );
}
