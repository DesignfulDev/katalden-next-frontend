import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageSlider({ images }) {
  const [slide, setSlide] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(0);
  const sliderMaxIdx = images.length - 1;

  const swipeThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = newSwipeDirection => {
    const isSwipeable =
      (newSwipeDirection > 0 && slide < sliderMaxIdx) ||
      (newSwipeDirection < 0 && slide > 0);

    setSwipeDirection(newSwipeDirection);

    if (isSwipeable) setSlide(slide + newSwipeDirection);
  };

  const variants = {
    enter: swipeDirection => {
      return {
        x: swipeDirection * 1000,
        opacity: 0.6,
        scale: 0.6,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: swipeDirection => {
      return {
        x: swipeDirection * 1000,
        opacity: 0.6,
        scale: 0.6,
      };
    },
  };

  return (
    <section className="relative inset-0 w-full cursor-grab active:cursor-grabbing">
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
      {slide < sliderMaxIdx && (
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
            <AnimatePresence mode="popLayout" custom={swipeDirection} key={idx}>
              <motion.div
                key={idx}
                className="relative flex max-h-[60vh]"
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
                dragElastic={0.3}
                whileDrag={{
                  scale: 0.6,
                }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeThreshold) paginate(1);
                  if (swipe > +swipeThreshold) paginate(-1);
                }}
              >
                  <CldImage
                    key={idx}
                    src={image.attributes.hash}
                    alt={image.attributes.alternativeText}
                    width={1000}
                    height={1000}
                    gravity="auto:subject"
                    crop="fill"
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={image.attributes.placeholder}
                  ></CldImage>
                </motion.div>
            </AnimatePresence>
          )
      )}
    </section>
  );
}
