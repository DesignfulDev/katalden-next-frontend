import SidebarNavItem from './SidebarNavItem';
import Link from 'next/link';

export default function SidebarNav() {
  return (
    <nav className="w-full text-center">
      <ul className="text-3xl font-light lowercase tracking-wide">
        <li className="py-4">
          <Link href="/sobre" scroll={false}>
            <a>sobre mim</a>
          </Link>
        </li>

        <li className="py-4">
          <Link href="/loja" scroll={false}>
            <a>loja</a>
          </Link>
        </li>
        <li className="py-4">
          <Link href="/newsletter" scroll={false}>
            <a>newsletter</a>
          </Link>
        </li>
        <li className="py-4">
          <Link href="/blog" scroll={false}>
            <a>blog</a>
          </Link>
        </li>
        <li className="py-4">
          <a
            href="https://instagram.com/katalden"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li className="py-4">
          <Link href="/contato" scroll={false}>
            <a>contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
