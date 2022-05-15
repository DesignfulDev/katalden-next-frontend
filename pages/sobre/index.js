import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import Copyright from '../../components/Copyright';
import { useRouter } from 'next/router';

export default function SobrePage() {
  const router = useRouter();

  return (
    <div
      className={`bg-brand-white ${
        !open && 'translate-y-full'
      } transform transition duration-300`}
    >
      <div className="fixed left-0 top-0 w-full flex flex-col justify-between items-center bg-brand-white z-30">
        <button
          className="w-10 self-end h-20 mx-3"
          onClick={() => router.back()}
        >
          <XIcon />
        </button>

        <h1 className="text-4xl font-light lowercase tracking-wide pb-4">
          sobre mim
        </h1>
      </div>

      <section className="w-full pt-40">
        <p className="text-xl font-light px-10 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolores odio ut, facilis temporibus mollitia tempora quidem sit
          dolorum dolorem voluptatibus delectus sint totam praesentium
          consequuntur aliquam id porro aliquid quae at repellat eveniet
          numquam. Explicabo a dolores sint nemo, nulla tempore recusandae,
          reiciendis hic expedita repudiandae ad ratione earum.
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          odio delectus ipsum quis id architecto atque sed, laborum tenetur,
          repellat similique in laboriosam? Aperiam, ex vitae maiores incidunt
          sint totam.
        </p>

        <p className="text-xl font-light px-10 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          officiis quia dolorem? At cum laudantium libero perferendis pariatur
          rerum dolorum vel ipsa eligendi eum esse, magni ipsum in dolor,
          commodi sit doloremque magnam officia iste nulla non aspernatur atque
          aliquid delectus! Ad distinctio nam mollitia libero fuga nihil quod
          quo?
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
    </div>
  );
}
