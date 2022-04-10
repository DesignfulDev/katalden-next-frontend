import Sidebar from './Sidebar';
import Gallery from './Gallery';

export default function Main() {
  return (
    <div className="mx-auto flex h-5/6">
      <Sidebar />

      <Gallery />
    </div>
  );
}
