import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import ImageSlider from '../../components/ImageSlider';
import Copyright from '../../components/Copyright';
import { API_URL } from '../../config/index';

export default function TattoosPage({ tattoos }) {
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
                    tattoos.filter(tattoo => tattoo.id === router.query.id)[0]
                      .images
                  }
                />
              </div>
              <div className="grow p-7 text-left text-xl font-thin overflow-y-scroll">
                <ul className="mb-6">
                  <li className="flex justify-between py-1">
                    <span>cliente</span>
                    <span className="uppercase font-normal">
                      {
                        tattoos.filter(
                          tattoo => tattoo.id === router.query.id
                        )[0].cliente
                      }
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>estúdio</span>
                    <span className="uppercase font-normal">
                      {
                        tattoos.filter(
                          tattoo => tattoo.id === router.query.id
                        )[0].sessoes[0].estudio
                      }
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>data</span>
                    <span className="uppercase font-normal">
                      {new Date(
                        tattoos.filter(
                          tattoo => tattoo.id === router.query.id
                        )[0].sessoes[0].data
                      ).toLocaleDateString('pt-BR')}
                    </span>
                  </li>
                  <li className="flex justify-between py-1">
                    <span>sessões</span>
                    <span className="uppercase font-normal">
                      {
                        tattoos.filter(
                          tattoo => tattoo.id === router.query.id
                        )[0].numSessoes
                      }
                    </span>
                  </li>
                </ul>
                <p>
                  {
                    tattoos.filter(tattoo => tattoo.id === router.query.id)[0]
                      .description
                  }
                </p>
                <Copyright />
              </div>
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
