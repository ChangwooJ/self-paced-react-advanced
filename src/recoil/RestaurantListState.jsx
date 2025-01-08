import { atom, selector } from 'recoil';
import { getRestaurant } from '../api/restaurant';

const restaurantsState = atom({
  key: 'restaurants',
  default: [],
});

const restaurantsQuery = selector({
  key: 'restaurantsQuery',
  get: async ({ get }) => {
    const currentRestaurants = get(restaurantsState);
    try {
      const updatedRestaurants = await getRestaurant();
      return updatedRestaurants || currentRestaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return currentRestaurants;
    }
  },
});

export { restaurantsState, restaurantsQuery };
