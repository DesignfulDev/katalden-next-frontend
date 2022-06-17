import Link from 'next/link';
import Copyright from './Copyright';

const links = [
  { url: '/tattoo', text: 'galerias' },
  { url: '/sobre', text: 'sobre mim' },
  { url: '/contato', text: 'contato' },
  { url: '/newsletter', text: 'newsletter' },
  { url: '/blog', text: 'blog' },
  { url: '/loja', text: 'loja' },
];

export default function Sidebar({ onClose }) {
  const handleClose = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="flex flex-wrap h-screen justify-center">
      <nav className="w-full self-center mt-24">
        <ul className="text-3xl font-light lowercase tracking-wide">
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
      <div className="self-end">
        <Copyright />
      </div>
    </div>
  );
}
