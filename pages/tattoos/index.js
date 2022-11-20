import Gallery from '../../components/Gallery';
import { API_URL } from '../../config/index';
import Layout from '../../components/Layout';

export default function TattooGalleryPage({ projects }) {
  const cardFields = [
    { api: 'cliente', label: 'cliente' },
    { api: 'local', label: 'local' },
    { api: 'data', label: 'data' },
  ];

  return (
    <Layout>
      <Gallery cardFields={cardFields} projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tattoos?populate=*`);
  const { data: projects } = await res.json();

  return {
    props: { projects },
    revalidate: 1,
  };
}
