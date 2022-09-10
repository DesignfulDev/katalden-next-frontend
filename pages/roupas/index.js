import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function FashionGalleryPage({ projects }) {
  const cardFields = [
    { api: 'nome', display: 'peça' },
    { api: 'material', display: 'material' },
    { api: 'preco', display: 'preço' },
  ];

  return <Gallery cardFields={cardFields} items={projects} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/roupas?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
