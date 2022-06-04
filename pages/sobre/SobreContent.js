import Image from 'next/image';
import Copyright from '../../components/Copyright';

export default function SobreContent() {
  return (
    <section className="w-full pt-40">
      <p className="text-xl font-light px-10 py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        dolores odio ut, facilis temporibus mollitia tempora quidem sit dolorum
        dolorem voluptatibus delectus sint totam praesentium consequuntur
        aliquam id porro aliquid quae at repellat eveniet numquam. Explicabo a
        dolores sint nemo, nulla tempore recusandae, reiciendis hic expedita
        repudiandae ad ratione earum.
      </p>

      <div className="w-full aspect-square relative my-4">
        <Image
          src={`https://picsum.photos/seed/${Math.random()}/420/550`}
          alt="lorem picsum"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <p className="text-xl font-light px-10 pt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odio
        delectus ipsum quis id architecto atque sed, laborum tenetur, repellat
        similique in laboriosam? Aperiam, ex vitae maiores incidunt sint totam.
      </p>

      <p className="text-xl font-light px-10 pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis
        quia dolorem? At cum laudantium libero perferendis pariatur rerum
        dolorum vel ipsa eligendi eum esse, magni ipsum in dolor, commodi sit
        doloremque magnam officia iste nulla non aspernatur atque aliquid
        delectus! Ad distinctio nam mollitia libero fuga nihil quod quo?
      </p>

      <div className="w-full aspect-square relative my-4">
        <Image
          src={`https://picsum.photos/seed/${Math.random()}/420/550`}
          alt="lorem picsum"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Copyright />
    </section>
  );
}
