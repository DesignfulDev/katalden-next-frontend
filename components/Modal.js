import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '@heroicons/react/outline';
import Copyright from './Copyright';
import { motion } from 'framer-motion';

export default function Modal({ toggle, show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const handleClose = e => {
    e.preventDefault();
    onClose();
  };

  const moveInUp = {
    initial: {
      y: '100%',
    },
    animate: {
      y: 0,
    },
  };

  const modalContent = show ? (
    <motion.div
      className="fixed left-0 top-0 w-full z-10 min-h-screen bg-brand-white flex flex-col justify-between items-center"
      variants={moveInUp}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{ duration: 0.2 }}
    >
      <a
        href="#"
        onClick={handleClose}
        className="flex items-center w-10 self-end h-20 mx-3"
      >
        <XIcon />
      </a>

      {title && <div>{title}</div>}

      <div>{children}</div>

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
