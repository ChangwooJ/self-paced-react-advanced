import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { useSelector } from 'react-redux';

function Aside() {
  const { detailModal, addModal } = useSelector((state) => state.modal);

  return (
    <aside>
      {detailModal && <RestaurantDetailModal />}
      {addModal && <AddRestaurantModal />}
    </aside>
  );
}

export default Aside;
