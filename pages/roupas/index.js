import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import ImageSlider from '../../components/ImageSlider';
import { API_URL } from '../../config/index';

export default function ClothingPage({ clothing }) {
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => router.query.id && setIsOpen(true), [router]);

  function closeModal() {
    setIsOpen(false);
    router.back();
  }

  return (
    <div>
      <Layout>
        {router.query.id && (
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <ImageSlider
              images={
                clothing.filter(product => product.id === router.query.id)[0]
                  .images
              }
            />
          </Modal>
        )}
        <div className="grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll">
          {clothing.length === 0 && <h3>Sem projetos, por enquanto</h3>}

          {clothing.map(product => (
            <Link
              key={product.id}
              href={`/roupas?id=${product.id}`}
              as={`/roupas/${product.id}`}
            >
              <a className="w-full aspect-square relative">
                <Image
                  src={product.images[0].url}
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
  const res = await fetch(`${API_URL}/api/roupas`);
  const { clothing } = await res.json();

  return {
    props: { clothing },
    revalidate: 1,
  };
}
