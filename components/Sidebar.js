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
    <div className="flex flex-col justify-between h-screen md:h-full">
      <nav className="flex items-center justify-center w-full grow md:justify-start md:ml-10 md:items-start">
        <ul className="text-3xl font-light tracking-wide text-center lowercase md:text-xl md:text-left md:pl-10 md:font-normal">
          {links.map(link => (
            <li
              key={link.url}
              onClick={handleClose}
              className={link.text === 'galerias' ? 'py-4 md:hidden' : 'py-4'}
            >
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
