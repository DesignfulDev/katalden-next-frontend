import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function VisualArtsGalleryPage({ artes }) {
  const cardFields = [
    { api: 'titulo', display: 'título' },
    { api: 'data', display: 'data' },
  ];

  return <Gallery cardFields={cardFields} items={artes} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/artes?populate=*`);
  const { data: artes } = await res.json();

  return {
    props: { artes },
    revalidate: 1,
  };
}
