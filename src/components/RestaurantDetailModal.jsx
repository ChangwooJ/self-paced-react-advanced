import { RestaurantDetailModalContainer } from "../style/RestaurantDetailModalStyle";

function RestaurantDetailModal({ setModal, modal }) {
  return (
    <RestaurantDetailModalContainer>
      <div className="modal modal--open">
        <div className="modal-backdrop" onClick={() => setModal({ ...modal, isOpen: false })}></div>
        <div className="modal-container">
          <h2 className="modal-title text-title">{modal.restaurant.name}</h2>
          <div className="restaurant-info">
            <p className="restaurant-info__description text-body">{modal.restaurant.description}</p>
          </div>
          <div className="button-container">
            <button
              className="button button--primary text-caption"
              onClick={() => setModal({ ...modal, isOpen: false })}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </RestaurantDetailModalContainer>
  );
}

export default RestaurantDetailModal;
