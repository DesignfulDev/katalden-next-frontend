import ImageSlider from './ImageSlider';
import Copyright from './Copyright';
import { Card } from './Card';

export default function GalleryItem({ project, cardFields }) {
  return (
    <Card>
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

        <Copyright />
      </section>
    </Card>
  );
}
