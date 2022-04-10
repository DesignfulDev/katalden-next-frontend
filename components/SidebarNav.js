import SidebarNavItem from './SidebarNavItem';

export default function SidebarNav() {
  return (
    <nav>
      <ul className="pl-10 py-10">
        <SidebarNavItem linkRef="/sobre" linkText="sobre mim" />
        <SidebarNavItem linkRef="/loja" linkText="loja" />
        <SidebarNavItem linkRef="/newsletter" linkText="newsletter" />
        <SidebarNavItem linkRef="/blog" linkText="blog" />
        <SidebarNavItem linkRef="/instagram" linkText="instagram" />
        <SidebarNavItem linkRef="/contato" linkText="contato" />
      </ul>
    </nav>
  );
}
