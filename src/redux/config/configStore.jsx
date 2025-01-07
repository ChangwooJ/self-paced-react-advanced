import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../modalSlice';
import categoryReducer from '../categorySlice';
import restaurantsReducer from '../restaurantsSlice';
import selectedRestaurantReducer from '../selectedRestaurantSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    category: categoryReducer,
    restaurants: restaurantsReducer,
    selectedRestaurant: selectedRestaurantReducer,
  },
});
