import { createContext, useState, useEffect } from "react";
import { getRestaurantList } from "../api/restaurantAPI";

export const RestaurantListContext = createContext();

export function RestaurantListProvider({ children }) {
  const [restaurantList, setRestaurantList] = useState([]);

  const updateRestaurantList = () => {
    getRestaurantList().then((data) => {
      setRestaurantList(data);
    });
  };

  useEffect(() => {
    updateRestaurantList();
  }, []);

  return (
    <RestaurantListContext.Provider
      value={{ restaurantList, setRestaurantList, updateRestaurantList }}
    >
      {children}
    </RestaurantListContext.Provider>
  );
}
