import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import GalleryNav from './GalleryNav';
import logo from '../public/images/logo-black.svg';

export default function Header({ openModal }) {
  const router = useRouter();

  const galleries = [
    { path: '/tattoos', display: 'tattoo' },
    { path: '/artes-visuais', display: 'artes visuais' },
    { path: '/roupas', display: 'roupas' },
  ];

  return (
    <header className="z-10 w-full pb-2 bg-brand-white">
      <div className="flex items-center justify-between w-full h-20">
        <Link href={galleries[0].path}>
          <a className="relative w-20 h-12 p-1 mb-2 ml-3">
            <Image
              loader={({ src }) => src}
              src={logo}
              alt="Logo"
              unoptimized
            />
          </a>
        </Link>

        <button onClick={openModal}>
          <MenuAlt3Icon className="fixed top-0 right-0 w-12 h-12 pt-3 pr-3" />
        </button>
      </div>

      {galleries.some(gallery => gallery.path === router.pathname) && (
        <GalleryNav galleries={galleries} />
      )}
    </header>
  );
}
