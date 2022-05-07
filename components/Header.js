import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import BtnPrimary from './BtnPrimary';
import GalleryNav from './GalleryNav';

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-brand-white">
      <div className="w-full flex justify-between h-20">
        <div className="mx-3 relative w-14">
          <Link href="/">
            <a>
              <Image
                src="/images/logo-black.svg"
                layout="fill"
                objectFit="contain"
                alt="Logo"
              />
            </a>
          </Link>
        </div>

        <MenuAlt3Icon className="h-8 self-center px-3" />
      </div>

      <GalleryNav />
    </header>
  );
}
