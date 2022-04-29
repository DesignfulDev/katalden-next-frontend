import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import BtnPrimary from './BtnPrimary';

export default function Header() {
  return (
    <header className="flex flex-initial h-14 justify-between">
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

      <BtnPrimary btnText="Agendar Tattoo" linkTo="/" />
    </header>
  );
}
