import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState } from '../../../recoil/CategoryState';
import { restaurantsQuery } from '../../../recoil/RestaurantListState';

const Main = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const restaurants = useRecoilValue(restaurantsQuery);

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
