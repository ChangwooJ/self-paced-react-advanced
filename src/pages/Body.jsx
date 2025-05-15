import { useState } from 'react';
import CategorySortFilter from '../component/body/CategorySortFilter';
import RestaurantList from '../component/body/RestaurantList';

const Body = ({ restaurants, setIsModalOpen, setSelectedRestaurant }) => {
  const [category, setCategory] = useState('전체');

  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const handleChangeCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <CategorySortFilter
        category={category}
        onChangeCategory={handleChangeCategory}
      />
      <RestaurantList
        restaurants={filteredRestaurants}
        setIsModalOpen={setIsModalOpen}
        setSelectedRestaurant={setSelectedRestaurant}
      />
    </>
  );
};

export default Body;
