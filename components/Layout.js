import { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ title, keywords, description, children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col h-screen bg-brand-white text-brand-black">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header toggle={toggle} />

      <Sidebar open={open} toggle={toggle} />

      <main className="mx-auto mt-28 w-full">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Kat Alden | Galeria Virtual',
  keywords: 'tattoo, abstrato, tribal, futurismo, fotografia, moda sustentável',
  description:
    'Galeria virtual dos trabalhos artísticos de Katharine Alden. Tattoos, fotografia, moda sustentável',
};
