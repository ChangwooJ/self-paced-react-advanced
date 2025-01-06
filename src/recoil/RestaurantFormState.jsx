import { atom, selector } from 'recoil';
import { postRestaurant, getRestaurant } from '../api/restaurant';

const newRestaurantState = atom({
  key: 'newRestaurant',
  default: {
    category: '',
    name: '',
    description: '',
  },
});

const restaurantFormQuery = selector({
  key: 'restaurantForm',
  get: async ({ get }) => {
    const newRestaurant = get(newRestaurantState);

    if (!newRestaurant.category || !newRestaurant.name) {
      return false;
    }

    const response = await postRestaurant(newRestaurant);
    if (response.error) {
      return response.error;
    }

    return response;
  },
});

export { newRestaurantState, restaurantFormQuery };
