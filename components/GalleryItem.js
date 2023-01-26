import ImageSlider from './ImageSlider';
import Copyright from './Copyright';
import { Card } from './Card';
import BtnPrimary from './BtnPrimary';

export default function GalleryItem({ project, cardFields, cta, formPreFill }) {
  return (
    <Card className="h-screen flex flex-col md:h-[80vh] md:py-20 md:px-28">
      <ImageSlider images={project.attributes.imagens.data} />

      <section className="grid grid-cols-3 gap-0 text-xl font-thin text-left border-2 p-7 md:p-0 border-lime-400">
        <Card.Details className="border-2 border-rose-600 col-span-full md:col-span-1">
          {cardFields.map((field, idx) => (
            <Card.Details.Item key={idx} label={field.label}>
              {project.attributes[field.api]}
            </Card.Details.Item>
          ))}
        </Card.Details>
        <Card.Description className="border-2 col-span-full md:col-span-2 border-sky-500">
          {project.attributes.descricao}
        </Card.Description>

        <div className="flex justify-center col-span-full md:hidden">
          <BtnPrimary
            btnText={cta}
            linkTo={`/contato?assunto=${formPreFill}`}
          />
        </div>

        <div className="col-span-full md:hidden">
          <Copyright />
        </div>
      </section>
    </Card>
  );
}
