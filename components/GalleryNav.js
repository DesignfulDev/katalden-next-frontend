import GalleryNavItem from './GalleryNavItem';

export default function GalleryNav() {
  return (
    <nav className="flex items-center">
      <GalleryNavItem linkRef="/tattoo" linkText="tattoo" />
      <GalleryNavItem linkRef="/fotografia" linkText="fotografia" />
      <GalleryNavItem linkRef="/roupas" linkText="roupas" />
    </nav>
  );
}
