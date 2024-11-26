import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import { useState } from 'react';

function Main({ restaurantsList, setSelectedRestaurant }) {
  const [category, setCategory] = useState('전체');

  const filteredRestaurants =
    category === '전체'
      ? restaurantsList
      : restaurantsList.filter(
          (restaurant) => restaurant.category === category
        );

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      </main>
    </>
  );
}

export default Main;
