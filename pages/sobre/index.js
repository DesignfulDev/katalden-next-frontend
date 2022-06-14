import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../../components/Modal';
import SobreContent from './SobreContent';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

export default function SobrePage() {
  const [showModal, setShowModal] = useState(true);

  const router = useRouter();

  return (
    <Layout>
      <div className="flex flex-col items-center bg-brand-white">
        <h1 className="text-3xl lowercase ">sobre mim</h1>
        <SobreContent />

        <Copyright />
      </div>
    </Layout>
  );
}
