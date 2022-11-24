import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from './Modal';
import GalleryNav from './GalleryNav';
import GalleryItem from '../components/GalleryItem';
import { AnimatePresence, motion } from 'framer-motion';

export default function Gallery({ projects, cardFields }) {
  const galleries = [
    { path: '/tattoos', display: 'tattoo' },
    { path: '/artes-visuais', display: 'artes visuais' },
    { path: '/roupas', display: 'roupas' },
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
            <motion.img
              className="relative object-cover w-full aspect-square"
              key={project.id}
              srcSet={`
                    ${project.attributes.imagens.data[0].attributes.formats.thumbnail.url} 
                    ${project.attributes.imagens.data[0].attributes.formats.thumbnail.width}w, 
                    ${project.attributes.imagens.data[0].attributes.formats.small.url} 
                    ${project.attributes.imagens.data[0].attributes.formats.small.width}w, 
                    ${project.attributes.imagens.data[0].attributes.formats.medium.url} 
                    ${project.attributes.imagens.data[0].attributes.formats.medium.width}w, 
                    ${project.attributes.imagens.data[0].attributes.formats.large.url} 
                    ${project.attributes.imagens.data[0].attributes.formats.large.width}w
                  `}
              sizes="
                    (max-width: 414px) 34vw, 
                    (max-width: 1024px) 28vw,
                    20vw"
              src={project.attributes.imagens.data[0].attributes.url}
              alt={
                project.attributes.imagens.data[0].attributes.alternativeText
              }
              loading="lazy"
              decoding="async"
            />
          </Link>
        ))}
      </motion.section>
    </div>
  );
}
