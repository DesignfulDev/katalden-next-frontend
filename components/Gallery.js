import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from './Modal';
import GalleryItem from '../components/GalleryItem';
import BtnPrimary from '../components/BtnPrimary';
import { AnimatePresence, motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

import useMeasure from 'react-use-measure';
import usePrevious from '../hooks/usePrevious';
import galleries from '../utils/galleries';

export default function Gallery({ projects, cardFields }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // SLIDER
  const [activeGallery, setActiveGallery] = useState(() =>
    galleries.findIndex(gallery => gallery.path === router.pathname)
  );
  const [ref, { width }] = useMeasure();
  const prevGallery = usePrevious(activeGallery);
  const direction = activeGallery > prevGallery ? 1 : -1;

  // const [swipeDirection, setSwipeDirection] = useState(0);

  const galleryMaxIdx = galleries.length - 1;

  const paginate = swipeDirection => {
    const isSwipeable =
      (swipeDirection > 0 && activeGallery < galleryMaxIdx) ||
      (swipeDirection < 0 && activeGallery > 0);

    // setSwipeDirection(swipeDirection);

    if (isSwipeable) {
      router.push(galleries.at(activeGallery + swipeDirection).path);

      // setActiveGallery(activeGallery + swipeDirection);
    }
  };

  const swipeThreshold = 1000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  // SLIDER END

  const variants = {
    enter: ({ direction, width }) => {
      return {
        x: direction * width,
        // opacity: 0.6,
      };
    },
    center: {
      x: 0,
      // opacity: 1,
    },
    exit: ({ direction, width }) => {
      return {
        x: direction * -width,
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
    <div ref={ref} className="h-full overflow-x-hidden">
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
      <AnimatePresence custom={{ direction, width }}>
        <motion.section
          className="grid gap-0.5 md:gap-10 grid-cols-3 auto-rows-auto w-full overflow-y-scroll h-full content-start"
          custom={{ direction, width }}
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
                <CldImage
                  src={project.attributes.imagens.data[0].attributes.hash}
                  alt={
                    project.attributes.imagens.data[0].attributes
                      .alternativeText
                  }
                  height={800}
                  width={800}
                  gravity="auto:subject"
                  crop="fill"
                  sizes="33vw"
                  placeholder="blur"
                  blurDataURL={
                    project.attributes.imagens.data[0].attributes.placeholder
                  }
                ></CldImage>
              </motion.div>
            </Link>
          ))}
        </motion.section>
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 z-10 pointer-events-none h-28 bg-gradient-to-b from-transparent to-brand-white md:hidden"></div>
      <BtnPrimary
        linkTo="/contato?assunto=agendamento"
        btnText="agendar tattoo"
        classes="fixed translate-x-[-50%] left-1/2 bottom-4 md:hidden"
      />
    </div>
  );
}
