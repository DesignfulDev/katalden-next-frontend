import SidebarNavItem from './SidebarNavItem';

export default function Main() {
  return (
    <div className="mx-auto flex border-2 border-emerald-800 h-5/6">
      <div className="flex flex-col justify-between border-2 border-red-200 w-1/5">
        <nav className=" border-2 border-red-700">
          <ul className="pl-10 py-10">
            <SidebarNavItem linkRef="/sobre" linkText="sobre mim" />
            <SidebarNavItem linkRef="/loja" linkText="loja" />
            <SidebarNavItem linkRef="/newsletter" linkText="newsletter" />
            <SidebarNavItem linkRef="/blog" linkText="blog" />
            <SidebarNavItem linkRef="/instagram" linkText="instagram" />
            <SidebarNavItem linkRef="/contato" linkText="contato" />
          </ul>
        </nav>
        <div className="mx-auto py-5 font-light text-sm uppercase">
          <p>Copyright &copy; Katharine Alden</p>
        </div>
      </div>
      <main className="border-2 border-teal-400 w-3/5">gallery</main>
    </div>
  );
}
