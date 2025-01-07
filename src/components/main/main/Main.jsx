import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import React, { useEffect } from 'react';
import { getRestaurant } from '../../../api/restaurant';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  const restaurants = useSelector((state) => state.restaurants.restaurants);

  useEffect(() => {
    getRestaurant(dispatch);
  }, []);

  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
    </>
  );
};

export default Main;
