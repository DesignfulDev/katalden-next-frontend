import Image from 'next/image';

export default function GalleryItem() {
  return (
    <div className="w-full aspect-square relative cursor-pointer">
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
