import './App.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/main/main/Main';
import Aside from './components/aside/Aside';
import { getRestaurant } from './api/restaurant';
import { ModalProvider } from './context/ModalContext';

const theme = {
  primaryColor: 'var(--primary-color)',
  lightenColor: 'var(--lighten-color)',
  grey100: 'var(--grey-100)',
  grey200: 'var(--grey-200)',
  grey300: 'var(--grey-300)',
  grey400: 'var(--grey-400)',
  grey500: 'var(--grey-500)',
};

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getRestaurant(setRestaurantsList);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Main
          restaurantsList={restaurantsList}
          setSelectedRestaurant={setSelectedRestaurant}
        />
        <Aside
          selectedRestaurant={selectedRestaurant}
          setRestaurantsList={setRestaurantsList}
        />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
