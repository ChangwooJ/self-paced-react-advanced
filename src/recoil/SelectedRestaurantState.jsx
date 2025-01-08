import { atom } from 'recoil';

const selectedRestaurantState = atom({
  key: 'selectedRestaurant',
  default: {
    name: '',
    description: '',
  },
});

export { selectedRestaurantState };
