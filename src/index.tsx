import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original';

// const GlobalStyles = createGlobalStyle`
//   ${styleReset}
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif}') format('woff2');
//     font-weight: 400;
//     font-style: normal
//   }
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif_bold}') format('woff2');
//     font-weight: bold;
//     font-style: normal
//   }
//   body, input, select, textarea {
//     font-family: 'ms_sans_serif';
//   }
// `;

const GlobalStyles = createGlobalStyle`

`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
