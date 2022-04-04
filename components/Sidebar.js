import SidebarNav from './SidebarNav';

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between border-2 border-red-200 w-1/5">
      <SidebarNav />
      <div className="mx-auto py-5 font-light text-sm uppercase">
        <p>Copyright &copy; Katharine Alden</p>
      </div>
    </div>
  );
}
