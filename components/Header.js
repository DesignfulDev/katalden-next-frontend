import Link from 'next/link';
import Image from 'next/image';
import GalleryNav from './GalleryNav';
import ButtonCta from './ButtonCta';

export default function Header() {
  return (
    <header className="mx-auto flex flex-wrap px-5 flex-col md:flex-row justify-between self-start border-2 border-rose-600 h-1/6">
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

      <ButtonCta btnText="Agendar Tattoo" />
    </header>
  );
}
