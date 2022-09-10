import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function VisualArtsGalleryPage({ projects }) {
  const cardFields = [
    { api: 'titulo', label: 'título' },
    { api: 'data', label: 'data' },
  ];

  return <Gallery cardFields={cardFields} projects={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/artes?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
