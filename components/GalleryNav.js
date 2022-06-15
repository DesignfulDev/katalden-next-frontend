import Link from 'next/link';

const links = [
  { url: '/tattoo', text: 'tattoo' },
  { url: '/fotografia', text: 'fotografia' },
  { url: '/roupas', text: 'roupas' },
];

export default function GalleryNav() {
  return (
    <nav className="w-full flex justify-around items-center h-8">
      {links.map(link => (
        <Link key={link.url} href={link.url}>
          <a className="md:px-10 font-light text-sm md:text-xl uppercase tracking-widest">
            {link.text}
          </a>
        </Link>
      ))}
    </nav>
  );
}
