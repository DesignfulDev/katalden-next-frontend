import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { API_URL } from '../../config/index';

export default function TattooPage({ tattoos }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => router.query.id && setShowModal(true), [router]);

  const handleClose = () => {
    setShowModal(false);
    router.push('/tattoo');
  };

  return (
    <div>
      <Layout>
        {router.query.id && (
          <Modal show={showModal} onClose={handleClose}>
            <div className="w-full aspect-square relative cursor-pointer">
              <Image
                src={
                  tattoos.filter(tt => tt.id === router.query.id)[0].images[0]
                    .url
                }
                alt="lorem picsum"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Modal>
        )}
        <div className="grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll">
          {tattoos.length === 0 && <h3>Sem projetos, por enquanto</h3>}

          {tattoos.map(tattoo => (
            <Link
              key={tattoo.id}
              href={`/tattoo?id=${tattoo.id}`}
              as={`/tattoo/${tattoo.id}`}
            >
              <a className="w-full aspect-square relative">
                <Image
                  src={tattoo.images[0].url}
                  alt="lorem picsum"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
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
