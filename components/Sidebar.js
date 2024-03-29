import Link from 'next/link';
import Copyright from './Copyright';

const links = [
  { url: '/tattoos', text: 'galerias' },
  { url: '/sobre', text: 'sobre mim' },
  { url: '/contato', text: 'contato' },
  { url: '/newsletter', text: 'newsletter' },
  { url: '/blog', text: 'blog' },
  // { url: '/loja', text: 'loja' },
];

export default function Sidebar({ onClose }) {
  const handleClose = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex items-center justify-center w-full grow">
        <ul className="text-3xl font-light tracking-wide text-center lowercase">
          {links.map(link => (
            <li key={link.url} onClick={handleClose} className="py-4">
              <Link href={link.url} scroll={false}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}

          <li className="py-4">
            <a
              href="https://instagram.com/katalden"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
        </ul>
      </nav>
      <div className="mb-10">
        <Copyright />
      </div>
    </div>
  );
}
