import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname == '/') {
      router.push('/tattoos');
    }
  }, [router]);

  return <Layout></Layout>;
}
