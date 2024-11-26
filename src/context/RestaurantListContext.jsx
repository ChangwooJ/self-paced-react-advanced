import { createContext, useState, useEffect } from 'react';
import { getRestaurant } from '../api/restaurant';

const RestaurantsContext = createContext();

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant(setRestaurants);
  }, []);

  const value = {
    state: { restaurants },
    action: { setRestaurants },
  };

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};

const { Consumer: RestaurantsConsumer } = RestaurantsContext;

export { RestaurantsProvider, RestaurantsConsumer, RestaurantsContext };

export default RestaurantsContext;
