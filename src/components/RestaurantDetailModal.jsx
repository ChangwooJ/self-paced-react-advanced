import {
  RestaurantDetailModalContainer,
  Modal,
  ModalBackdrop,
  ModalContainer,
  Title,
  RestaurantInfo,
  ButtonContainer,
} from "../style/RestaurantDetailModalStyle";

function RestaurantDetailModal({ setModal, modal }) {
  return (
    <RestaurantDetailModalContainer>
      <Modal>
        <ModalBackdrop onClick={() => setModal({ ...modal, isOpen: false })}></ModalBackdrop>
        <ModalContainer>
          <Title className="text-title">{modal.restaurant.name}</Title>
          <RestaurantInfo>
            <p className="text-body">{modal.restaurant.description}</p>
          </RestaurantInfo>
          <ButtonContainer>
            <button
              className="button button--primary text-caption"
              onClick={() => setModal({ ...modal, isOpen: false })}
            >
              닫기
            </button>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </RestaurantDetailModalContainer>
  );
}

export default RestaurantDetailModal;
