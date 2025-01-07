import './App.css';
import { ThemeProvider } from 'styled-components';
import Aside from './components/aside/Aside';
import Main from './components/main/main/Main';

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
      <Main />
      <Aside />
    </ThemeProvider>
  );
}

export default App;
