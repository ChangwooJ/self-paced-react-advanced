import { createContext, useState } from 'react';

const SelectedRestaurantContext = createContext();

const SelectedRestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });

  const value = { selectedRestaurant, setSelectedRestaurant };

  return (
    <SelectedRestaurantContext.Provider value={value}>
      {children}
    </SelectedRestaurantContext.Provider>
  );
};

export { SelectedRestaurantProvider, SelectedRestaurantContext };
