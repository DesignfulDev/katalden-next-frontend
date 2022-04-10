import Image from 'next/image';

export default function GalleryItem() {
  return (
    <div className="h-80 w-full relative">
      <Image
        src={`https://picsum.photos/seed/${Math.random()}/420/550`}
        alt="lorem picsum"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
