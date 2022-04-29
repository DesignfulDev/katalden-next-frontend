import Link from 'next/link';

export default function BtnPrimary({ btnText, linkTo }) {
  return (
    <Link href={linkTo}>
      <a className="hidden md:flex self-center px-7 py-3 rounded-full bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white text-lg lowercase">
        {btnText}
      </a>
    </Link>
  );
}
