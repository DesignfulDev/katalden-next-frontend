import { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import Sidebar from './Sidebar';

export default function Layout({ title, keywords, description, children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-y-scroll flex flex-col h-screen bg-brand-white text-brand-black">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header setShowModal={setShowModal} />

      <AnimatePresence>
        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Sidebar onClose={() => setShowModal(false)} />
          </Modal>
        )}
      </AnimatePresence>

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
