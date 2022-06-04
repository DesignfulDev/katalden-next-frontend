import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery';
import { motion } from 'framer-motion';

export default function FotografiaPage() {
  const fade = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Layout>
        <Gallery />
      </Layout>
    </motion.div>
  );
}
