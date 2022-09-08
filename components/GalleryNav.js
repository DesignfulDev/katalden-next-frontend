import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function GalleryNav({ galleries }) {
  const router = useRouter();

  const [activeGallery, setActiveGallery] = useState(router.pathname);

  return (
    <nav className="flex items-center justify-around w-full h-8">
      {galleries.map(gallery => (
        <Link key={gallery.path} href={gallery.path}>
          <a
            className={`transition px-2 text-sm font-light tracking-widest text-center uppercase md:px-10 md:text-xl hover:text-brand ${
              gallery.path === activeGallery &&
              'border-brand-light text-brand border-b-2 font-medium scale-110'
            }`}
          >
            {gallery.display}
          </a>
        </Link>
      ))}
    </nav>
  );
}
