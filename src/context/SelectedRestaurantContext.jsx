import { createContext, useState } from 'react';

const SelectedRestaurantContext = createContext();

const SelectedRestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });

  const value = {
    state: { selectedRestaurant },
    action: { setSelectedRestaurant },
  };

  return (
    <SelectedRestaurantContext.Provider value={value}>
      {children}
    </SelectedRestaurantContext.Provider>
  );
};

const { Consumer: SelectedRestaurantConsumer } = SelectedRestaurantContext;

export { SelectedRestaurantProvider, SelectedRestaurantConsumer };

export default SelectedRestaurantContext;
