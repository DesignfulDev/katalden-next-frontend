import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import ImageSlider from '../../components/ImageSlider';
import Copyright from '../../components/Copyright';
import { Card } from '../../components/Card';
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
            <Card>
              <div>
                <ImageSlider
                  images={
                    tattoos.filter(tattoo => tattoo.id === router.query.id)[0]
                      .images
                  }
                />
              </div>
              <section className="overflow-y-scroll text-xl font-thin text-left grow p-7">
                <Card.Details>
                  {tattoos
                    .filter(tattoo => tattoo.id === router.query.id)[0]
                    .details.map((item, idx) => {
                      return (
                        <Card.Details.Item key={idx} label={item.label}>
                          {item.value}
                        </Card.Details.Item>
                      );
                    })}
                </Card.Details>
                <Card.Description>
                  {
                    tattoos.filter(tattoo => tattoo.id === router.query.id)[0]
                      .description
                  }
                </Card.Description>

                <Copyright />
              </section>
            </Card>
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
              <a className="relative w-full aspect-square">
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
