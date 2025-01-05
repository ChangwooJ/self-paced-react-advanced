import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { useRecoilValue } from 'recoil';
import { detailModalState, addModalState } from '../../recoil/ModalState';
import { Suspense } from 'react';

function Aside() {
  const detailModal = useRecoilValue(detailModalState);
  const addModal = useRecoilValue(addModalState);

  return (
    <aside>
      {detailModal && <RestaurantDetailModal />}
      {addModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <AddRestaurantModal />
        </Suspense>
      )}
    </aside>
  );
}

export default Aside;
