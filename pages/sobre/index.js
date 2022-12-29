import SobreContent from './SobreContent';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';
import { API_URL } from '../../config/index';

export default function SobrePage({ data }) {
  return (
    <Layout>
      <div className="flex flex-col items-center bg-brand-white">
        <h1 className="text-3xl font-thin lowercase">sobre mim</h1>
        <SobreContent content={data} />

        <Copyright />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/sobre-mim?populate=*`);
  const { data } = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
