import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import ImageSlider from '../../components/ImageSlider';
import Copyright from '../../components/Copyright';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { API_URL } from '../../config/index';

export default function PhotographiesPage({ photographies }) {
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
            <div className="bg-brand-white flex flex-col min-h-screen">
              <div>
                <ImageSlider
                  images={
                    photographies.filter(
                      product => product.id === router.query.id
                    )[0].images
                  }
                />
              </div>
              <div className="grow p-7 text-left text-xl font-thin overflow-y-scroll">
                <ul className="mb-6">
                  <li className="flex justify-between py-1">
                    <span>projeto</span>
                    <span className="uppercase font-normal">
                      {
                        photographies.filter(
                          product => product.id === router.query.id
                        )[0].nomeProjeto
                      }
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>tamanho</span>
                    <span className="uppercase font-normal text-gray-400">
                      escolher <ChevronDownIcon className="w-6 inline" />
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>material</span>
                    <span className="uppercase font-normal">
                      {
                        photographies.filter(
                          product => product.id === router.query.id
                        )[0].printOptions[0].material
                      }
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>preço</span>
                    <span className="uppercase font-normal">
                      R<>&#36;</>{' '}
                      {
                        photographies.filter(
                          product => product.id === router.query.id
                        )[0].printOptions[0].preco
                      }
                    </span>
                  </li>
                </ul>
                <p className="mb-6">
                  {
                    photographies.filter(
                      product => product.id === router.query.id
                    )[0].description
                  }
                </p>
                <Copyright />
              </div>
            </div>
          </Modal>
        )}
        <div className="grid gap-0.5 grid-cols-3 auto-rows-auto w-full overflow-y-scroll">
          {photographies.length === 0 && <h3>Sem projetos, por enquanto</h3>}

          {photographies.map(product => (
            <Link
              key={product.id}
              href={`/fotografia?id=${product.id}`}
              as={`/fotografia/${product.id}`}
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
  const res = await fetch(`${API_URL}/api/fotografias`);
  const { photographies } = await res.json();

  return {
    props: { photographies },
    revalidate: 1,
  };
}
