import Link from 'next/link';

export default function SidebarNavItem({ linkRef, linkText }) {
  return (
    <li className="py-2">
      <Link href={linkRef}>
        <a className="text-xl lowercase tracking-wide">{linkText}</a>
      </Link>
    </li>
  );
}
