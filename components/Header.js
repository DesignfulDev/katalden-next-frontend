import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import GalleryNav from './GalleryNav';

export default function Header({ setShowModal }) {
  return (
    <header className="fixed w-full z-10 bg-brand-white">
      <div className="w-full flex justify-between items-center h-20">
        <Link href="/tattoo">
          <a className="relative mx-3">
            <Image
              src="/images/logo-black.svg"
              height={60}
              width={60}
              alt="Logo"
            />
          </a>
        </Link>

        <button onClick={() => setShowModal(true)}>
          <MenuAlt3Icon className="h-8 px-3" />
        </button>
      </div>

      {/* <GalleryNav /> */}
    </header>
  );
}
