import { createContext, useState } from "react";
import { getRestaurantList } from "../api/restaurantAPI";

export const RestaurantListContext = createContext();

export function RestaurantListProvider({ children }) {
  const [restaurantList, setRestaurantList] = useState([]);

  const updateRestaurantList = async () => {
    try {
      const data = await getRestaurantList();
      setRestaurantList(data);
    } catch (error) {
      console.error("Failed to fetch restaurant list:", error);
    }
  };

  return (
    <RestaurantListContext.Provider
      value={{ restaurantList, setRestaurantList, updateRestaurantList }}
    >
      {children}
    </RestaurantListContext.Provider>
  );
}
