import Link from 'next/link';
import Image from 'next/image';
import GalleryNav from './GalleryNav';
import BtnPrimary from './BtnPrimary';

export default function Header() {
  return (
    <header className="mx-auto flex flex-wrap px-5 flex-col md:flex-row justify-between self-start h-1/6">
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/images/logo-black.svg"
            width={140}
            height={100}
            alt="Logo"
          />
        </a>
      </Link>

      <GalleryNav />

      <BtnPrimary btnText="Agendar Tattoo" linkTo="/" />
    </header>
  );
}
