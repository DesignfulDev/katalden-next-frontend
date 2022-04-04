import Link from 'next/link';

export default function ButtonCta({ btnText }) {
  return (
    <Link href="/">
      <a className="flex self-center px-7 py-3 rounded-full bg-violet-300 text-lg lowercase">
        {btnText}
      </a>
    </Link>
  );
}
