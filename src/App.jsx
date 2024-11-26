import './App.css';
import { ThemeProvider } from 'styled-components';
import Main from './components/main/main/Main';
import Aside from './components/aside/Aside';
import { ModalProvider } from './context/ModalContext';
import { RestaurantsProvider } from './context/RestaurantListContext';
import { SelectedRestaurantProvider } from './context/SelectedRestaurantContext';

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
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RestaurantsProvider>
          <SelectedRestaurantProvider>
            <Main />
            <Aside />
          </SelectedRestaurantProvider>
        </RestaurantsProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
