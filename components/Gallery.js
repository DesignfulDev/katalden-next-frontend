import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from './Modal';
import GalleryNav from './GalleryNav';
import GalleryItem from '../components/GalleryItem';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery({ projects, cardFields }) {
  const galleries = [
  {
    path: '/tattoos',
    display: 'tattoo',
    cta: 'agendar tattoo',
    formPreFill: 'agendamento',
  },
  {
    path: '/artes-visuais',
    display: 'artes visuais',
    cta: 'mais informações',
    formPreFill: 'fotografia',
  },
  {
    path: '/roupas',
    display: 'roupas',
    cta: 'comprar peça',
    formPreFill: 'colab',
  },
];

  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => router.query.id && setIsOpen(true), [router]);

  function closeModal() {
    setIsOpen(false);
    router.back();
  }

  useEffect(() => {
    const htmlDocument = document.getElementsByTagName('html')[0];

    isOpen
      ? htmlDocument.classList.add('overscroll-y-contain')
      : htmlDocument.classList.remove('overscroll-y-contain');
  }, [isOpen]);

  return (
    <div>
      {/* MODAL */}
      <AnimatePresence>
        {router.query.id && (
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <GalleryItem
              project={
                projects.filter(project => project.id === +router.query.id)[0]
              }
              cardFields={cardFields}
              cta={galleries[activeGallery].cta}
              formPreFill={galleries[activeGallery].formPreFill}
            />
          </Modal>
        )}
      </AnimatePresence>

      {/* GALLERY NAVIGATION */}
      {galleries.some(gallery => gallery.path === router.pathname) && (
        <GalleryNav galleries={galleries} />
      )}

      {/* GRID GALLERY */}
      <motion.section
        className="pt-2 grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll"
        initial={{ opacity: 0.6, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.6, x: 200 }}
      >
        {projects.length === 0 && <h3>Sem projetos, por enquanto</h3>}

        {projects.map(project => (
          <Link
            key={project.id}
            href={`/${router.pathname.slice(1)}?id=${project.id}`}
            as={`/${router.pathname.slice(1)}/${project.id}`}
            passHref
          >
            <motion.div className="relative object-cover w-full aspect-square">
              <Image
                src={project.attributes.imagens.data[0].attributes.hash}
                alt={
                  project.attributes.imagens.data[0].attributes.alternativeText
                }
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={
                  project.attributes.imagens.data[0].attributes.placeholder
                }
              ></Image>
            </motion.div>
          </Link>
        ))}
      </motion.section>
      </AnimatePresence>
      <Link href="/contato?assunto=agendamento">
        <a className="fixed self-center py-3 text-lg lowercase translate-x-[-50%] rounded-full left-1/2 bottom-6 md:flex px-7 bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white">
          agendar tattoo
        </a>
      </Link>
    </div>
  );
}
