import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { ModalConsumer } from '../../context/ModalContext';

function Aside() {
  return (
    <ModalConsumer>
      {({ state: { detailModal, addModal } }) => {
        return (
          <aside>
            {detailModal && <RestaurantDetailModal />}
            {addModal && <AddRestaurantModal />}
          </aside>
        );
      }}
    </ModalConsumer>
  );
}

export default Aside;
