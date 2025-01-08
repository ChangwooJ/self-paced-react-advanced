import { atom } from 'recoil';
import {getRestaurantsSelector} from "./getRestaurantsSelector.jsx";

export const restaurantListState = atom({
    key: 'restaurantListState',
    default: getRestaurantsSelector,
});
