import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function TattooGalleryPage({ projects }) {
  const cardFields = [
    { api: 'cliente', label: 'cliente' },
    { api: 'local', label: 'local' },
    { api: 'data', label: 'data' },
  ];

  return <Gallery cardFields={cardFields} projects={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tattoos?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
