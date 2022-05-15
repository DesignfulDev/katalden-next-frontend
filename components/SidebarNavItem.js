import Link from 'next/link';

export default function SidebarNavItem({ linkPath, children }) {
  return (
    <li className="py-4">
      <Link href={linkPath} scroll={false}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
