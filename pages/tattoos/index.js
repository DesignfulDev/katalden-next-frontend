import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function TattooGalleryPage({ projects }) {
  const cardFields = [
    { api: 'cliente', display: 'cliente' },
    { api: 'local', display: 'local' },
    { api: 'data', display: 'data' },
  ];

  return <Gallery cardFields={cardFields} items={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tattoos?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
