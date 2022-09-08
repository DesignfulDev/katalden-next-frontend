import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';

export default function FashionGalleryPage({ roupas }) {
  const cardFields = [
    { api: 'nome', display: 'peça' },
    { api: 'material', display: 'material' },
    { api: 'preco', display: 'preço' },
  ];

  return <Gallery cardFields={cardFields} items={roupas} />;
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/roupas?populate=*`);
  const { data: roupas } = await res.json();

  return {
    props: { roupas },
    revalidate: 1,
  };
}
