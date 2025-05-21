import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import Modal from './Modal';
import Button from '../Button';


const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const RestaurantInfoModal = ({ isOpen, setIsModalOpen, selectedRestaurant, restaurants }) => {  
  const restaurant = restaurants.find(restaurant => restaurant.id === selectedRestaurant);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
      {restaurant && (
        <>
          <Typography.Title margin="0 0 36px 0">
            {restaurant.name}
          </Typography.Title>
          <RestaurantInfo>
            <Typography.Body>
              {restaurant.description}
            </Typography.Body>
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
