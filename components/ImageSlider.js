import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import useMeasure from 'react-use-measure';
import usePrevious from '../hooks/usePrevious';

export default function ImageSlider({ images }) {
  const [slide, setSlide] = useState(0);
  const [ref, { width }] = useMeasure();
  const prevSlide = usePrevious(slide);
  const direction = slide > prevSlide ? 1 : -1;

  const lastSlideIndex = images.length - 1;

  const swipeThreshold = 1000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = swipeDirection => {
    const isSwipeable =
      (swipeDirection > 0 && slide < lastSlideIndex) ||
      (swipeDirection < 0 && slide > 0);

    if (isSwipeable) setSlide(slide + swipeDirection);
  };

  const variants = {
    enter: ({ direction, width }) => {
      return {
        x: direction * width,
        scale: 0.4,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: ({ direction, width }) => {
      return {
        x: direction * -width,
        scale: 0.4,
        opacity: 0,
      };
    },
  };

  return (
    <section className="relative cursor-grab active:cursor-grabbing">
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
      {slide < lastSlideIndex && (
        <div
          onClick={() => paginate(1)}
          className="absolute right-0 z-30 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
        >
          <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80 ">
            <ChevronRightIcon />
          </button>
        </div>
      )}

      <div
        ref={ref}
        className="relative grid items-center w-full h-[100vw] grid-flow-col grid-rows-1 overflow-hidden bg-rose-300"
      >
        <AnimatePresence initial={false} custom={{ direction, width }}>
          {images.map(
            (image, idx) =>
              idx === slide && (
                <motion.div
                  key={slide}
                  className="absolute grid w-full grid-flow-col grid-rows-1"
                  custom={{ direction, width }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  transition={{
                    duration: 0.2,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
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
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
