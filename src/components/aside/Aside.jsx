import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { ModalConsumer } from '../../context/ModalContext';

function Aside({ selectedRestaurant, setRestaurantsList }) {
  return (
    <ModalConsumer>
      {(value) => {
        console.log(value);
        return (
          <aside>
            {value.state.detailModal && (
              <RestaurantDetailModal
                restaurantName={selectedRestaurant.name}
                restaurantDescription={selectedRestaurant.description}
              />
            )}
            {value.state.addModal && (
              <AddRestaurantModal setRestaurantsList={setRestaurantsList} />
            )}
          </aside>
        );
      }}
    </ModalConsumer>
  );
}

export default Aside;
