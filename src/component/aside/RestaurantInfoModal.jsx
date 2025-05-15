import React from 'react';
import styled from 'styled-components';
import { typography } from '../../styles/GlobalStyle';
import Modal from './Modal';

const ModalTitle = styled.h2`
  ${typography.title}
  margin-bottom: 36px;
`;

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const RestaurantDescription = styled.p`
  ${typography.body}
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);

  &:last-child {
    margin-right: 0;
  }
`;

const RestaurantInfoModal = ({ isOpen, setIsModalOpen, selectedRestaurant, restaurants }) => {  
  const restaurant = restaurants.find(restaurant => restaurant.id === selectedRestaurant);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
      {restaurant && (
        <>
          <ModalTitle>
            {restaurant.name}
          </ModalTitle>
          <RestaurantInfo>
            <RestaurantDescription>
              {restaurant.description}
            </RestaurantDescription>
          </RestaurantInfo>
          <ButtonContainer>
            <Button onClick={() => setIsModalOpen(null)}>
              닫기
            </Button>
          </ButtonContainer>
        </>
      )}
    </Modal>
  );
};

export default RestaurantInfoModal;
