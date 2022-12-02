import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import logo from '../public/images/logo-black.svg';

export default function Header({ openModal }) {
  return (
    <header className="z-10 w-full bg-brand-white">
      <div className="flex items-center justify-between w-full h-20">
        <Link href="/tattoos">
          <a className="relative w-20 h-12 p-1 mb-2 ml-3">
            <Image
              loader={({ src }) => src}
              src={logo}
              alt="Logo"
              width={80}
              height={58}
              priority={true}
            />
          </a>
        </Link>

        <button onClick={openModal}>
          <MenuAlt3Icon className="fixed top-0 right-0 w-12 h-12 pt-3 pr-3" />
        </button>
      </div>
    </header>
  );
}
