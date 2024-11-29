import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';

function Aside() {
  const { detailModal, addModal } = useContext(ModalContext);

  return (
    <aside>
      {detailModal && <RestaurantDetailModal />}
      {addModal && <AddRestaurantModal />}
    </aside>
  );
}

export default Aside;
