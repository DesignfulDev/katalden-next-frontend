import { useRouter } from 'next/router';
import { API_URL } from '../../config/index';
import Layout from '../../components/Layout';
import ImageSlider from '../../components/ImageSlider';
import Copyright from '../../components/Copyright';
import { Card } from '../../components/Card';

export default function TattooPage({ tattoo }) {
  const router = useRouter();

  const cardDetailsFields = ['cliente', 'local', 'data'];

  return (
    <div>
      <Layout>
        <Card>
          <div>
            <ImageSlider images={tattoo.attributes.imagens.data} />
          </div>
          <section className="overflow-y-scroll text-xl font-thin text-left grow p-7">
            <Card.Details>
              {cardDetailsFields.map((item, idx) => (
                <Card.Details.Item key={idx} label={item}>
                  {tattoo.attributes[item]}
                </Card.Details.Item>
              ))}
            </Card.Details>
            <Card.Description>{tattoo.attributes.descricao}</Card.Description>

            <Copyright />
          </section>
        </Card>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/api/tattoos/${id}?populate=*`);
  const { data: tattoo } = await res.json();

  return {
    props: { tattoo },
  };
}
