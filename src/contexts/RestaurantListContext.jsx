import { createContext, useState, useEffect } from "react";
import { getRestaurantList } from "../api/restaurantAPI";

export const RestaurantListContext = createContext();

export function RestaurantListProvider({ children }) {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurantList().then((data) => {
      setRestaurantList(data);
    });
  }, []);

  const updateRestaurantList = () => {
    getRestaurantList().then((data) => {
      setRestaurantList(data);
    });
  };

  return (
    <RestaurantListContext.Provider
      value={{ restaurantList, setRestaurantList, updateRestaurantList }}
    >
      {children}
    </RestaurantListContext.Provider>
  );
}
