import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '@heroicons/react/outline';
import Copyright from './Copyright';
import { motion } from 'framer-motion';

export default function Modal({ show, onClose, children, heading }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const handleClose = e => {
    e.preventDefault();
    onClose();
  };

  const moveInUp = {
    hidden: {
      y: '100%',
    },
    visible: {
      y: 0,
    },
  };

  const modalContent = show ? (
    <motion.div
      className="fixed inset-0 w-full z-10 min-h-screen bg-brand-white flex flex-col justify-between items-center"
      variants={moveInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    >
      <header className="w-full flex flex-col justify-between items-center bg-brand-white z-30">
        <a
          className="flex items-center w-10 self-end h-20 mx-3"
          onClick={handleClose}
          href="#"
        >
          <XIcon />
        </a>

        {heading && (
          <h1 className="text-4xl font-light lowercase tracking-wide pb-4">
            {heading}
          </h1>
        )}
      </header>

      <div className="w-full m-auto">{children}</div>

      <Copyright />
    </motion.div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
