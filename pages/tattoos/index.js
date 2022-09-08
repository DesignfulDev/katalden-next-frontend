import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function TattooGalleryPage({ tattoos }) {
  const cardFields = [
    { api: 'cliente', display: 'cliente' },
    { api: 'local', display: 'local' },
    { api: 'data', display: 'data' },
  ];

  return <Gallery cardFields={cardFields} items={tattoos} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tattoos?populate=*`);
  const { data: tattoos } = await res.json();

  return {
    props: { tattoos },
    revalidate: 1,
  };
}
