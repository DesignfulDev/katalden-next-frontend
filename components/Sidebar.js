import Modal from './Modal';
import SidebarNav from './SidebarNav';

export default function Sidebar({ toggle }) {
  return (
    <Modal toggle={toggle}>
      <SidebarNav />
    </Modal>
  );
}
