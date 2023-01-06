import { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ title, keywords, description, children }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-brand-white text-brand-black">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Header openModal={openModal} />

      <AnimatePresence>
        {isOpen && (
          <Modal closeModal={closeModal}>
            <Sidebar onClose={closeModal} />
          </Modal>
        )}
      </AnimatePresence>

      <main className="w-full h-full mx-auto overflow-y-auto grow">
        {children}
      </main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Kat Alden | Galeria Virtual',
  keywords: 'tattoo, abstrato, tribal, futurismo, fotografia, moda sustentável',
  description:
    'Galeria virtual dos trabalhos artísticos de Katharine Alden. Tattoos, fotografia, moda sustentável',
};
