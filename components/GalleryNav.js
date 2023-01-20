import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryNav({ galleries, activeGallery }) {
  return (
    <nav className="flex w-full">
      {galleries.map((gallery, idx) => (
        <AnimatePresence key={gallery.path} mode="wait">
          <div className="flex items-end justify-center w-full h-full pb-2 md:items-center md:pb-0">
            <Link
              passHref
              key={gallery.path}
              href={gallery.path}
              shallow={true}
            >
              <motion.a
                initial={{ letterSpacing: '0.05em' }}
                animate={idx === activeGallery && { letterSpacing: '0.15em' }}
                exit={{ letterSpacing: '0.05em' }}
                transition={{ ease: 'easeIn' }}
                className={`relative px-2 text-[3vw] font-light tracking-wide text-center uppercase md:px-10 md:text-xl hover:text-brand active:text-brand-dark ${
                  idx === activeGallery && 'text-brand font-semibold scale-110'
                }`}
              >
                {idx === activeGallery && (
                  <motion.span
                    layout
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-brand-dark"
                  />
                )}
                {gallery.display}
              </motion.a>
            </Link>
          </div>
        </AnimatePresence>
      ))}
    </nav>
  );
}
