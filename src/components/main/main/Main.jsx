import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import React from 'react';
import { CategoryContext } from '../../../context/CategoryContext';
import { useContext } from 'react';
import { RestaurantsContext } from '../../../context/RestaurantListContext';

const Main = () => {
  const { category, setCategory } = useContext(CategoryContext);
  const { restaurants } = useContext(RestaurantsContext);

  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
    </>
  );
};

export default Main;
