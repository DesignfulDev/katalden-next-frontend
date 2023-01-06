import Link from 'next/link';

export default function BtnPrimary({ btnText, linkTo }) {
  return (
    <Link href={linkTo}>
      <a className="self-center py-3 my-4 text-lg lowercase rounded-full md:flex px-7 bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white">
        {btnText}
      </a>
    </Link>
  );
}
