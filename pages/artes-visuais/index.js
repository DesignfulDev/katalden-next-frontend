import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function VisualArtsGalleryPage({ projects }) {
  const cardFields = [
    { api: 'titulo', display: 'título' },
    { api: 'data', display: 'data' },
  ];

  return <Gallery cardFields={cardFields} items={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/artes?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
