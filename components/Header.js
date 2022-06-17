import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import GalleryNav from './GalleryNav';

export default function Header({ openModal }) {
  const router = useRouter();

  return (
    <header className="fixed w-full z-10 bg-brand-white">
      <div className="w-full flex justify-between items-center h-20">
        <Link href="/tattoo">
          <a className="relative w-20 h-12 ml-3">
            <Image
              src="/images/logo-black.svg"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </a>
        </Link>

        <button onClick={openModal}>
          <MenuAlt3Icon className="fixed right-0 top-0 w-12 h-12 pr-3 pt-3" />
        </button>
      </div>

      {router.pathname === '/tattoo' && <GalleryNav />}
    </header>
  );
}
