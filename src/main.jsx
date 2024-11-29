import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ModalProvider } from './context/ModalContext.jsx';
import { SelectedRestaurantProvider } from './context/SelectedRestaurantContext.jsx';
import { RestaurantsProvider } from './context/RestaurantListContext.jsx';
import { CategoryProvider } from './context/CategoryContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <RestaurantsProvider>
        <SelectedRestaurantProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </SelectedRestaurantProvider>
      </RestaurantsProvider>
    </ModalProvider>
  </React.StrictMode>
);
