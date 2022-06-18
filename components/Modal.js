import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function Modal({ isOpen, closeModal, title, children }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="md:fixed md:inset-0 md:bg-brand-black md:bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transform ease-out duration-300"
                enterFrom="translate-y-full"
                enterTo="translaste-y-0"
                leave="transform ease-in duration-200"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="fixed inset-0 w-full z-10 min-h-screen bg-brand-white supports-backdrop:bg-brand-white/70 supports-backdrop:backdrop-blur-md">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="fixed right-0 top-0 w-12 h-12 pr-3 pt-3 z-20"
                  >
                    <XIcon />
                  </button>

                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-4xl font-light lowercase tracking-wide pb-4 mt-24"
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
