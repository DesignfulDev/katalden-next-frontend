import Image from 'next/image';
import Layout from '../../components/Layout';
import { API_URL } from '../../config/index';

export default function TattooCard({ tattoo }) {
  return (
    <div>
      <Layout>
        <div className="w-full aspect-square relative cursor-pointer">
          <Image
            src={tattoo.images[0].url}
            alt="lorem picsum"
            layout="fill"
            objectFit="cover"
          />
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
