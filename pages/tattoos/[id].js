import GalleryItem from '../../components/GalleryItem';
import { API_URL } from '../../config/index';
import Layout from '../../components/Layout';

export default function TattooItemPage({ project }) {
  const cardFields = [
    { api: 'cliente', label: 'cliente' },
    { api: 'local', label: 'local' },
    { api: 'data', label: 'data' },
  ];

  return (
    <Layout>
      <GalleryItem project={project} cardFields={cardFields} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/tattoos`);

  const { data: projects } = await res.json();

  const paths = projects.map(project => ({
    params: { id: `${project.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await fetch(
    `${API_URL}/api/tattoos?filters[id]=${id}&populate=*`
  );
  const { data } = await res.json();
  const project = data[0];

  return {
    props: { project },
    revalidate: 1,
  };
}
