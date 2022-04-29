import GalleryNavItem from './GalleryNavItem';

export default function GalleryNav() {
  return (
    <nav className="flex flex-initial justify-around items-center p-3 mt-3">
      <GalleryNavItem linkRef="/tattoo" linkText="tattoo" />
      <GalleryNavItem linkRef="/fotografia" linkText="fotografia" />
      <GalleryNavItem linkRef="/roupas" linkText="roupas" />
    </nav>
  );
}
