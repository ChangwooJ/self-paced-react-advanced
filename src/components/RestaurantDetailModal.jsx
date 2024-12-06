import { useContext } from "react";
import {
  RestaurantDetailModalContainer,
  Modal,
  ModalBackdrop,
  ModalContainer,
  Title,
  RestaurantInfo,
  ButtonContainer,
} from "../style/RestaurantDetailModalStyle";
import { ModalContext } from "../contexts/ModalContext";

function RestaurantDetailModal() {
  const { detailModal, setDetailModal } = useContext(ModalContext);

  return (
    <RestaurantDetailModalContainer>
      <Modal>
        <ModalBackdrop
          onClick={() => setDetailModal({ ...detailModal, isOpen: false })}
        ></ModalBackdrop>
        <ModalContainer>
          <Title className="text-title">{detailModal.restaurant.name}</Title>
          <RestaurantInfo>
            <p className="text-body">{detailModal.restaurant.description}</p>
          </RestaurantInfo>
          <ButtonContainer>
            <button
              className="button button--primary text-caption"
              onClick={() => setDetailModal({ ...detailModal, isOpen: false })}
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
