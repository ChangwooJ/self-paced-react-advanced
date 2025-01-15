import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice.js";
import categoryReducer from "./CategorySlice.js";
import restaurantListReducer from "./RestaurantListSlice.js";
import clickedRestaurantReducer from "./ClickedRestaurantSlice.js";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        category: categoryReducer,
        restaurants: restaurantListReducer,
        clickedRestaurant: clickedRestaurantReducer,
    },
});

export default store;