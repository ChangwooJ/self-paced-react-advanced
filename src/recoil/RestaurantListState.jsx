import { atom, selector } from 'recoil';
import { getRestaurant } from '../api/restaurant';

const restaurantsState = atom({
  key: 'restaurants',
  default: [],
});

const restaurantsQuery = selector({
  key: 'restaurantsQuery',
  get: async ({ get }) => {
    get(restaurantsState);
    const response = await getRestaurant();
    if (response.error) {
      return response.error;
    }
    return response;
  },
});

export { restaurantsState, restaurantsQuery };
