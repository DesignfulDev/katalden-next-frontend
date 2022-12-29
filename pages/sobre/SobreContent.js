import Image from 'next/image';

export default function SobreContent({ content }) {
  const paragraphs = content.attributes.descricao
    .split('\n')
    .filter(p => p !== '');

  const { data: images } = content.attributes.imagens;

  return (
    <section className="w-full mt-16">
      {paragraphs &&
        paragraphs.map((paragraph, idx) => (
          <div key={idx}>
            <p key={paragraph} className="px-8 pb-5 text-xl font-light">
              {paragraph}
            </p>

            {images && images[idx] ? (
              <div
                key={images[idx].id}
                className="relative w-full my-4 aspect-square"
              >
                <Image
                  src={images[idx].attributes.hash}
                  alt={images[idx].attributes.alternativeText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ) : null}
          </div>
        ))}
    </section>
  );
}
