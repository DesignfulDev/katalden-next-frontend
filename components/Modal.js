import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Modal({ closeModal, title, children }) {
  const easing = [0.36, 0.66, 0.04, 1];

  return (
    <>
      <Dialog className="fixed inset-0 z-10" onClose={closeModal} open={true}>
        {/* Dialog Overlay */}
        <motion.div
          className="fixed inset-0 md:bg-brand-black/50"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: easing,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: easing,
            },
          }}
        />

        <div className="flex flex-col items-center justify-center min-h-full">
          <Dialog.Panel
            className="z-10 flex flex-col w-screen bg-brand-white supports-backdrop:bg-brand-white/70 supports-backdrop:backdrop-blur-md"
            as={motion.div}
            initial={{ y: '100vh' }}
            animate={{
              y: 0,
              transition: {
                duration: 0.4,
                ease: easing,
              },
            }}
            exit={{
              y: '100vh',
              transition: {
                duration: 0.3,
                ease: easing,
              },
            }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="fixed top-0 right-0 z-20 w-16 h-16 p-3"
            >
              <XIcon />
            </button>

            {title && (
              <Dialog.Title
                as="h3"
                className="pb-4 mt-24 text-4xl font-light tracking-wide lowercase"
              >
                {title}
              </Dialog.Title>
            )}

            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
