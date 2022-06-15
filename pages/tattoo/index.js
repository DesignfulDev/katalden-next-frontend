import Image from 'next/image';
import Layout from '../../components/Layout';
import { API_URL } from '../../config/index';

export default function TattooPage({ tattoos }) {
  const fade = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div>
      <Layout>
        <div className="grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll">
          {tattoos.map(tattoo => (
            <div
              key={tattoo.id}
              className="w-full aspect-square relative cursor-pointer"
            >
              <Image
                src={tattoo.images[0].url}
                alt="lorem picsum"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tattoo`);
  const { tattoos } = await res.json();

  return {
    props: { tattoos },
    revalidate: 1,
  };
}
