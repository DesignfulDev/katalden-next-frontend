import SidebarNavItem from '../components/SidebarNavItem';

export default function Sidebar() {
  return (
    <div>
      <nav className="w-full text-center">
        <ul className="text-3xl font-light lowercase tracking-wide">
          <SidebarNavItem linkPath="/tattoo">galerias</SidebarNavItem>
          <SidebarNavItem linkPath="/sobre">sobre mim</SidebarNavItem>
          <SidebarNavItem linkPath="/loja">loja</SidebarNavItem>
          <SidebarNavItem linkPath="/newsletter">newsletter</SidebarNavItem>
          <SidebarNavItem linkPath="/blog">blog</SidebarNavItem>

          <li className="py-4">
            <a
              href="https://instagram.com/katalden"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>

          <SidebarNavItem linkPath="/contato">contato</SidebarNavItem>
        </ul>
      </nav>
    </div>
  );
}
