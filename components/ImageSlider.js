import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(() => 0);
  const sliderMaxIdx = images.length;

  const slideNext = () => {
    setCurrent(current === sliderMaxIdx - 1 ? sliderMaxIdx - 1 : current + 1);
  };

  const slidePrev = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  return (
    <div className="relative inset-0 w-full aspect-square">
      {current > 0 && (
        <div
          onClick={slidePrev}
          className="absolute left-0 z-10 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
        >
          <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80">
            <ChevronLeftIcon />
          </button>
        </div>
      )}
      {current < sliderMaxIdx - 1 && (
        <div
          onClick={slideNext}
          className="absolute right-0 z-10 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
        >
          <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80 ">
            <ChevronRightIcon />
          </button>
        </div>
      )}

      {images.map(
        (slide, idx) =>
          idx === current && (
            <motion.img
              key={idx}
              srcSet={`
                    ${slide.attributes.formats.thumbnail.url} 
                    ${slide.attributes.formats.thumbnail.width}w, 
                    ${slide.attributes.formats.small.url} 
                    ${slide.attributes.formats.small.width}w, 
                    ${slide.attributes.formats.medium.url} 
                    ${slide.attributes.formats.medium.width}w, 
                    ${slide.attributes.formats.large.url} 
                    ${slide.attributes.formats.large.width}w
                  `}
              sizes="
                    (max-width: 414px) 100vw, 
                    (max-width: 1024px) 80vw,
                    60vw"
              src={slide.attributes.url}
              alt={slide.attributes.alternativeText}
              loading="lazy"
              decoding="async"
              variants={variants}
              animate="center"
            />
          )
      )}
    </div>
  );
}
