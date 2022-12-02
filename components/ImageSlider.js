import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

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
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: direction => {
      return {
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
            <AnimatePresence mode="popLayout" custom={direction} key={idx}>
              <motion.div
                key={idx}
                className="relative flex max-h-[60vh]"
                custom={direction}
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
              >
                <Image
                  className="object-cover"
                  key={idx}
                  src={image.attributes.hash}
                  alt={image.attributes.alternativeText}
                  height={
                    (image.attributes.height * window.screen.width) /
                    image.attributes.width
                  }
                  width={window.screen.width}
                  placeholder="blur"
                  blurDataURL={image.attributes.placeholder}
                ></Image>
              </motion.div>
            </AnimatePresence>
          )
      )}
    </section>
  );
}
