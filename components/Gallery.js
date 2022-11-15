import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal';
import GalleryItem from '../components/GalleryItem';

export default function Gallery({ projects, cardFields }) {
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => router.query.id && setIsOpen(true), [router]);

  function closeModal() {
    setIsOpen(false);
    router.back();
  }

  return (
    <div>
      {/* MODAL */}
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

      {/* GRID GALLERY */}
      <section className="grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll">
        {projects.length === 0 && <h3>Sem projetos, por enquanto</h3>}

        {projects.map(project => (
          <Link
            key={project.id}
            href={`/${router.pathname.slice(1)}?id=${project.id}`}
            as={`/${router.pathname.slice(1)}/${project.id}`}
          >
            <a className="relative w-full aspect-square">
              <Image
                src={project.attributes.imagens.data[0].attributes.hash}
                alt={
                  project.attributes.imagens.data[0].attributes.alternativeText
                }
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
}
