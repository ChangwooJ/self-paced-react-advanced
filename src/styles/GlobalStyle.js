import { createGlobalStyle } from 'styled-components';

export const typography = {
  title: `
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  `,
  subtitle: `
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  `,
  body: `
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
  caption: `
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  `
};

const GlobalStyle = createGlobalStyle``;

export default GlobalStyle; 