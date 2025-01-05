import './App.css';
import { ThemeProvider } from 'styled-components';
import Aside from './components/aside/Aside';
import { lazy, Suspense } from 'react';

const theme = {
  primaryColor: 'var(--primary-color)',
  lightenColor: 'var(--lighten-color)',
  grey100: 'var(--grey-100)',
  grey200: 'var(--grey-200)',
  grey300: 'var(--grey-300)',
  grey400: 'var(--grey-400)',
  grey500: 'var(--grey-500)',
};

const Main = lazy(() => import('./components/main/main/Main'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
      <Aside />
    </ThemeProvider>
  );
}

export default App;
