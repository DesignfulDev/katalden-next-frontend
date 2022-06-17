import { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Modal from './Modal';
import Sidebar from './Sidebar';

export default function Layout({ title, keywords, description, children }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="overflow-y-scroll flex flex-col h-screen bg-brand-white text-brand-black">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header openModal={openModal} />

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Sidebar onClose={closeModal} />
      </Modal>

      <main className="mx-auto mt-28 w-full h-full">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Kat Alden | Galeria Virtual',
  keywords: 'tattoo, abstrato, tribal, futurismo, fotografia, moda sustentável',
  description:
    'Galeria virtual dos trabalhos artísticos de Katharine Alden. Tattoos, fotografia, moda sustentável',
};
