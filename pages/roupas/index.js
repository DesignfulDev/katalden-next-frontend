import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function FashionGalleryPage({ projects }) {
  const cardFields = [
    { api: 'nome', label: 'peça' },
    { api: 'material', label: 'material' },
    { api: 'preco', label: 'preço' },
  ];

  return <Gallery cardFields={cardFields} projects={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/roupas?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
