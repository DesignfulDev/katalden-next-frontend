import ImageSlider from './ImageSlider';
import Copyright from './Copyright';
import { Card } from './Card';
import BtnPrimary from './BtnPrimary';

export default function GalleryItem({ project, cardFields, cta, formPreFill }) {
  return (
    <Card className="h-screen flex flex-col md:h-[80vh] md:py-20 md:px-28">
      <ImageSlider images={project.attributes.imagens.data} />

      <section className="text-xl font-thin text-left p-7">
        <Card.Details>
          {cardFields.map((field, idx) => (
            <Card.Details.Item key={idx} label={field.label}>
              {project.attributes[field.api]}
            </Card.Details.Item>
          ))}
        </Card.Details>
        <Card.Description>{project.attributes.descricao}</Card.Description>

        <div className="flex justify-center">
          <BtnPrimary
            btnText={cta}
            linkTo={`/contato?assunto=${formPreFill}`}
          />
        </div>

        <Copyright />
      </section>
    </Card>
  );
}
