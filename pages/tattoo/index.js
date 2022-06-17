import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import { API_URL } from '../../config/index';

export default function TattooPage({ tattoos }) {
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => router.query.id && setIsOpen(true), [router]);

  function closeModal() {
    setIsOpen(false);
    router.back();
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Layout>
        {router.query.id && (
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="w-full aspect-square relative">
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
