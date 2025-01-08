import { atom } from 'recoil';

export const clickedRestaurantState = atom({
    key: 'clickedRestaurantState',
    default: {
        name: null,
        description: null,
    },
});
