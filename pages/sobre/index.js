import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../../components/Modal';
import SobreContent from './SobreContent';

export default function SobrePage() {
  const [showModal, setShowModal] = useState(true);

  const router = useRouter();

  return (
    <Modal
      show={showModal}
      onClose={() => {
        setShowModal(false);
        router.back();
      }}
      heading="sobre mim"
    >
      <SobreContent />
    </Modal>
  );
}
