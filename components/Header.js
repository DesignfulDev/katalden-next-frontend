import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import logo from '../public/images/logo-black.svg';
import GalleryNav from './GalleryNav';
import BtnPrimary from '../components/BtnPrimary';
import galleries from '../utils/galleries';

export default function Header({ openModal }) {
  const router = useRouter();

  const [activeGallery, setActiveGallery] = useState(() =>
    galleries.findIndex(gallery => gallery.path === router.pathname)
  );
  const galleryMaxIdx = galleries.length - 1;

  return (
    <header className="z-10 w-full bg-brand-white md:row-span-1 md:col-span-full">
      <div className="grid items-center justify-between w-full h-full grid-cols-5 grid-rows-2 md:h-full">
        <Link href="/tattoos">
          <a className="relative col-span-1 row-span-1 mt-2 h-5/6 md:w-auto md:row-span-full md:h-1/2">
            <Image
              loader={({ src }) => src}
              src={logo}
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </a>
        </Link>

        <button
          onClick={openModal}
          className="col-start-5 justify-self-end md:hidden"
        >
          <MenuAlt3Icon className="w-12 h-12 p-1" />
        </button>

        <div className="flex h-full col-span-5 md:w-auto md:col-span-3 md:row-span-full">
          <GalleryNav galleries={galleries} activeGallery={activeGallery} />
        </div>
        <BtnPrimary
          linkTo="/contato?assunto=agendamento"
          btnText="agendar tattoo"
          classes="hidden md:flex md:row-span-full"
        />
      </div>
    </header>
  );
}
