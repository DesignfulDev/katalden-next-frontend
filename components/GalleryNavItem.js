import Link from 'next/link';

export default function GalleryNavItem({ linkRef, linkText }) {
  return (
    <Link href={linkRef}>
      <a className="md:px-10 font-light text-sm md:text-xl uppercase tracking-widest">
        {linkText}
      </a>
    </Link>
  );
}
