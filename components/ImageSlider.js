import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(() => 0);
  const sliderMaxIdx = images.length;

  const slideNext = () => {
    setCurrent(x => (x === sliderMaxIdx - 1 ? 0 : x + 1));
  };

  const slidePrev = () => {
    setCurrent(current === 0 ? sliderMaxIdx - 1 : current - 1);
  };

  return (
    <div className="relative inset-0 w-full aspect-square ">
      <div
        onClick={slidePrev}
        className="absolute left-0 z-10 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
      >
        <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80">
          <ChevronLeftIcon />
        </button>
      </div>
      <div
        onClick={slideNext}
        className="absolute right-0 z-10 flex items-center w-16 h-full px-2 cursor-pointer mix-blend-screen"
      >
        <button className="w-8 p-1 rounded-full mix-blend-screen bg-brand-white/50 hover:bg-brand-white/80 ">
          <ChevronRightIcon />
        </button>
      </div>
      {images.map(
        (slide, idx) =>
          idx === current && (
            <Image
              key={idx}
              src={slide.attributes.formats.large.url}
              alt="Slider"
              layout="fill"
              objectFit="cover"
              className=""
            />
          )
      )}
    </div>
  );
}
