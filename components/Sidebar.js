import { XIcon } from '@heroicons/react/outline';
import SidebarNav from './SidebarNav';
import Copyright from './Copyright';
import { motion } from 'framer-motion';

export default function Sidebar({ toggle }) {
  return (
    <motion.div
      className="fixed left-0 w-full z-20 min-h-screen bg-brand-white flex flex-col justify-between items-center"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <button className="w-10 self-end h-20 mx-3" onClick={toggle}>
        <XIcon />
      </button>

      <SidebarNav />

      <Copyright />
    </motion.div>
  );
}
