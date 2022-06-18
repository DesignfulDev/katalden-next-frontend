import Image from 'next/image';
import { API_URL } from '../../config/index';
import Layout from '../../components/Layout';
import ImageSlider from '../../components/ImageSlider';

export default function TattooCard({ tattoo }) {
  return (
    <div>
      <Layout>
        <ImageSlider images={tattoo.images} />
        <div>
          <span>cliente</span>
          <span>estúdio</span>
          <span>data</span>
          <span>sessões</span>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/api/tattoo/${id}`);
  const { tattoo } = await res.json();

  return {
    props: { tattoo: tattoo[0] },
  };
}
