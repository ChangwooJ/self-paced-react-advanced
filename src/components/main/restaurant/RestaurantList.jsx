import RestaurantCard from './RestaurantCard';
import styled from 'styled-components';

const RestaurantList = ({
  restaurants,
  setIsModalOpen,
  setSelectedRestaurant,
}) => {
  return (
    <RestaurantListContainer>
      <ul>
        {restaurants.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              alt={item.category}
              name={item.name}
              description={item.description}
              setIsModalOpen={setIsModalOpen}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}
      </ul>
    </RestaurantListContainer>
  );
};

export default RestaurantList;

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
