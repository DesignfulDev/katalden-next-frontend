import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';

export default function ImageSlider({ images }) {
  const [[slide, direction], setSlide] = useState([0, 0]);
  const sliderMaxIdx = images.length;

  const paginate = newDirection => {
    setSlide([slide + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0.6,
        scale: 0.6,
      };
    },
    center: {
      zIndex: 20,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0.6,
        scale: 0.6,
      };
    },
  };

  return (
    <section className="relative inset-0 w-screen cursor-grab active:cursor-grabbing">
      {slide > 0 && (
        <div
          onClick={() => paginate(-1)}
          className="absolute left-0 z-30 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
        >
          <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80">
            <ChevronLeftIcon />
          </button>
        </div>
      )}
      {slide < sliderMaxIdx - 1 && (
        <div
          onClick={() => paginate(1)}
          className="absolute right-0 z-30 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
        >
          <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80 ">
            <ChevronRightIcon />
          </button>
        </div>
      )}

      {images.map(
        (image, idx) =>
          idx === slide && (
            <div className="flex">
              <AnimatePresence custom={direction} key={idx}>
                <motion.img
                  key={idx}
                  className="relative object-cover grow"
                  srcSet={`
                    ${image.attributes.formats.thumbnail.url} 
                    ${image.attributes.formats.thumbnail.width}w, 
                    ${image.attributes.formats.small.url} 
                    ${image.attributes.formats.small.width}w, 
                    ${image.attributes.formats.medium.url} 
                    ${image.attributes.formats.medium.width}w, 
                    ${image.attributes.formats.large.url} 
                    ${image.attributes.formats.large.width}w
                  `}
                  sizes="
                    (max-width: 414px) 100vw, 
                    (max-width: 1024px) 80vw,
                    60vw"
                  src={image.attributes.url}
                  alt={image.attributes.alternativeText}
                  loading="lazy"
                  decoding="async"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  whileDrag={{
                    scale: 0.6,
                  }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (
                      swipe < -swipeConfidenceThreshold &&
                      slide < images.length - 1
                    ) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold && slide > 0) {
                      paginate(-1);
                    }
                  }}
                />
              </AnimatePresence>
            </div>
          )
      )}
    </section>
  );
}
