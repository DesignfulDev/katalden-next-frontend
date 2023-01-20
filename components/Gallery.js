import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from './Modal';
import GalleryNav from './GalleryNav';
import GalleryItem from '../components/GalleryItem';
import BtnPrimary from '../components/BtnPrimary';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

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

export default function Gallery({ projects, cardFields }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // SLIDER
  const [swipeDirection, setSwipeDirection] = useState(0);
  const [activeGallery, setActiveGallery] = useState(() =>
    galleries.findIndex(gallery => gallery.path === router.pathname)
  );
  const galleryMaxIdx = galleries.length - 1;

  const paginate = newSwipeDirection => {
    const isSwipeable =
      (newSwipeDirection > 0 && activeGallery < galleryMaxIdx) ||
      (newSwipeDirection < 0 && activeGallery > 0);

    setSwipeDirection(newSwipeDirection);

    if (isSwipeable) {
      router.push(galleries.at(activeGallery + newSwipeDirection).path);

      setActiveGallery(activeGallery + newSwipeDirection);
    }
  };

  const swipeThreshold = 1000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  // SLIDER END

  const variants = {
    enter: swipeDirection => {
      return {
        x: 400,
        // opacity: 0.6,
      };
    },
    center: {
      x: 0,
      // opacity: 1,
    },
    exit: swipeDirection => {
      return {
        x: -400,
        // opacity: 0.6,
      };
    },
  };

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
    <div className="h-full overflow-x-hidden">
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

      {/* GRID GALLERY */}
      <AnimatePresence custom={swipeDirection} mode="popLayout">
        <motion.section
          className="pt-2 grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll"
          custom={swipeDirection}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          layout
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeThreshold) paginate(1);
            if (swipe > +swipeThreshold) paginate(-1);
          }}
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
                    project.attributes.imagens.data[0].attributes
                      .alternativeText
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
      <BtnPrimary
        linkTo="/contato?assunto=agendamento"
        btnText="agendar tattoo"
        classes="fixed translate-x-[-50%] left-1/2 bottom-6 md:hidden"
      />
    </div>
  );
}
