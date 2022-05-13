import SidebarNavItem from './SidebarNavItem';

export default function SidebarNav() {
  return (
    <nav className="w-full text-center">
      <ul className="text-3xl font-light lowercase tracking-wide">
        <SidebarNavItem linkPath="/sobre">sobre mim</SidebarNavItem>
        <SidebarNavItem linkPath="/loja">loja</SidebarNavItem>
        <SidebarNavItem linkPath="/newsletter">newsletter</SidebarNavItem>
        <SidebarNavItem linkPath="/blog">blog</SidebarNavItem>
        <SidebarNavItem linkPath="/instagram">instagram</SidebarNavItem>
        <SidebarNavItem linkPath="/contato">contato</SidebarNavItem>
      </ul>
    </nav>
  );
}
