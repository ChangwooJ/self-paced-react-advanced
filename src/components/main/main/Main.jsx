import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import React from 'react';
import {
  CategoryProvider,
  CategoryConsumer,
} from '../../../context/CategoryContext';
import { RestaurantsConsumer } from '../../../context/RestaurantListContext';

function Main() {
  return (
    <CategoryProvider>
      <Header />
      <main>
        <RestaurantsConsumer>
          {({ state: { restaurants } }) => {
            return (
              <CategoryConsumer>
                {({ state, action }) => {
                  const { category } = state;
                  const { setCategory } = action;

                  const filteredRestaurants =
                    category === '전체'
                      ? restaurants
                      : restaurants.filter(
                          (restaurant) => restaurant.category === category
                        );

                  return (
                    <>
                      <CategoryFilter
                        category={category}
                        onChangeCategory={setCategory}
                      />
                      <RestaurantList restaurants={filteredRestaurants} />
                    </>
                  );
                }}
              </CategoryConsumer>
            );
          }}
        </RestaurantsConsumer>
      </main>
    </CategoryProvider>
  );
}

export default Main;
