import Link from 'next/link';

export default function SidebarNavItem({ linkPath, handleClose, children }) {
  return (
    <li onClick={handleClose} className="py-4">
      <Link href={linkPath} scroll={false}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
