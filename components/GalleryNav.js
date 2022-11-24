import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GalleryNav({ galleries }) {
  const router = useRouter();

  const [activeGallery, setActiveGallery] = useState(router.pathname);

  return (
    <nav className="flex items-center justify-around w-full h-8">
      {galleries.map(gallery => (
        <Link passHref key={gallery.path} href={gallery.path} shallow={true}>
          <motion.a
            initial={{ letterSpacing: '0.05em' }}
            animate={
              gallery.path === activeGallery && { letterSpacing: '0.25em' }
            }
            transition={{ ease: 'easeIn' }}
            className={`relative px-2 text-sm font-light tracking-wide text-center uppercase md:px-10 md:text-xl hover:text-brand active:text-brand-dark ${
              gallery.path === activeGallery &&
              'text-brand font-semibold scale-110'
            }`}
          >
            {gallery.path === activeGallery && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[2px] w-full bg-brand-dark"
              />
            )}
            {gallery.display}
          </motion.a>
        </Link>
      ))}
    </nav>
  );
}
