import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import SobreContent from '../pages/sobre';

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <nav className="w-full text-center">
        <ul className="text-3xl font-light lowercase tracking-wide">
          <li className="py-4">
            <Link href="#" as="/sobre" scroll={false}>
              <a onClick={() => setShowModal(true)}>sobre mim</a>
            </Link>
          </li>

          <li className="py-4">
            <Link href="/loja" scroll={false}>
              <a>loja</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="#" as="/newsletter" scroll={false}>
              <a onClick={() => setShowModal(true)}>newsletter</a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/blog" scroll={false}>
              <a>blog</a>
            </Link>
          </li>
          <li className="py-4">
            <a
              href="https://instagram.com/katalden"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li className="py-4">
            <Link href="#" as="/contato" scroll={false}>
              <a onClick={() => setShowModal(true)}>contato</a>
            </Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {showModal && (
          <Modal
            show={showModal}
            onClose={() => {
              router.back();
              setShowModal(false);
            }}
          >
            {<SobreContent />}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
