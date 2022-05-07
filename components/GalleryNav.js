import GalleryNavItem from './GalleryNavItem';

export default function GalleryNav() {
  return (
    <nav className="w-full flex justify-around items-center h-8">
      <GalleryNavItem linkRef="/tattoo" linkText="tattoo" />
      <GalleryNavItem linkRef="/fotografia" linkText="fotografia" />
      <GalleryNavItem linkRef="/roupas" linkText="roupas" />
    </nav>
  );
}
