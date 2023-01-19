import Link from 'next/link';

export default function BtnPrimary({ btnText, linkTo, classes }) {
  return (
    <Link href={linkTo}>
      <a
        className={`self-center py-3 my-4 text-lg lowercase rounded-full px-7 bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white w-max justify-self-center ${classes}`}
      >
        {btnText}
      </a>
    </Link>
  );
}
